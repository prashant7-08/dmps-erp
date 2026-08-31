import React, { useState, useEffect } from 'react';
import {
  CheckSquare,
  Calendar,
  Scan,
  Users,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Clock,
  Save,
  Download,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { QRScannerModal } from '../components/qr/QRScannerModal';
import { useToast } from '../components/common/Toast';
import { useAuth } from '../context/AuthContext';
import schoolService from '../services/schoolService';

export const AttendancePage = ({ initialType = 'student' }) => {
  const { showToast } = useToast();
  const { activeBranchId } = useAuth();
  
  const [activeTab, setActiveTab] = useState(initialType);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedClass, setSelectedClass] = useState('All');
  const [selectedSection, setSelectedSection] = useState('All');
  const [selectedDept, setSelectedDept] = useState('All');
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  // Sync active tab if initialType changes from sidebar
  useEffect(() => {
    setActiveTab(initialType);
  }, [initialType]);

  // Students Data
  const [students, setStudents] = useState(() => schoolService.getStudents(activeBranchId));
  const [studentRecords, setStudentRecords] = useState(() => {
    return students.map(s => ({
      studentId: s.id,
      name: s.name,
      rollNo: s.rollNo,
      class: s.class,
      section: s.section,
      status: s.id === 'STU-2026-003' ? 'Absent' : 'Present',
      remarks: ''
    }));
  });

  // Teachers / Staff Data
  const [teachers, setTeachers] = useState(() => schoolService.getTeachers(activeBranchId));
  const [staffRecords, setStaffRecords] = useState(() => {
    return teachers.map(t => ({
      staffId: t.id,
      name: t.name,
      employeeId: t.employeeId || t.id,
      department: t.department || 'Academics',
      designation: t.designation || 'Teacher',
      status: 'Present',
      remarks: ''
    }));
  });

  useEffect(() => {
    const sList = schoolService.getStudents(activeBranchId);
    setStudents(sList);
    setStudentRecords(sList.map(s => ({
      studentId: s.id,
      name: s.name,
      rollNo: s.rollNo,
      class: s.class,
      section: s.section,
      status: s.id === 'STU-2026-003' ? 'Absent' : 'Present',
      remarks: ''
    })));

    const tList = schoolService.getTeachers(activeBranchId);
    setTeachers(tList);
    setStaffRecords(tList.map(t => ({
      staffId: t.id,
      name: t.name,
      employeeId: t.employeeId || t.id,
      department: t.department || 'Academics',
      designation: t.designation || 'Teacher',
      status: 'Present',
      remarks: ''
    })));
  }, [activeBranchId]);

  // Student Attendance Handlers
  const handleStudentStatusChange = (studentId, newStatus) => {
    setStudentRecords(prev => prev.map(rec => {
      if (rec.studentId === studentId) return { ...rec, status: newStatus };
      return rec;
    }));
  };

  const handleMarkAllStudents = (status) => {
    setStudentRecords(prev => prev.map(rec => ({ ...rec, status })));
    showToast(`Marked all students as ${status}`, 'info');
  };

  const handleSaveStudentAttendance = () => {
    schoolService.markStudentAttendance(selectedDate, studentRecords);
    showToast(`Student attendance for ${selectedDate} saved successfully! ✅`, 'success');
  };

  // Staff Attendance Handlers
  const handleStaffStatusChange = (staffId, newStatus) => {
    setStaffRecords(prev => prev.map(rec => {
      if (rec.staffId === staffId) return { ...rec, status: newStatus };
      return rec;
    }));
  };

  const handleMarkAllStaff = (status) => {
    setStaffRecords(prev => prev.map(rec => ({ ...rec, status })));
    showToast(`Marked all staff members as ${status}`, 'info');
  };

  const handleSaveStaffAttendance = () => {
    schoolService.markStaffAttendance(selectedDate, staffRecords);
    showToast(`Staff attendance for ${selectedDate} saved successfully! ✅`, 'success');
  };

  const handleQrScanSuccess = (person) => {
    if (activeTab === 'student') {
      handleStudentStatusChange(person.id, 'Present');
      showToast(`Smart RFID check-in: Student ${person.name} marked Present!`, 'success');
    } else {
      handleStaffStatusChange(person.id, 'Present');
      showToast(`Smart RFID check-in: Staff ${person.name} marked Present!`, 'success');
    }
  };

  // Student Calculations
  const filteredStudentRecords = studentRecords.filter(rec => {
    if (selectedClass !== 'All' && rec.class !== selectedClass) return false;
    if (selectedClass === 'Class 3' && selectedSection !== 'All' && rec.section !== selectedSection) return false;
    return true;
  });

  const stuPresent = filteredStudentRecords.filter(r => r.status === 'Present').length;
  const stuAbsent = filteredStudentRecords.filter(r => r.status === 'Absent').length;
  const stuLate = filteredStudentRecords.filter(r => r.status === 'Late').length;
  const stuPercentage = filteredStudentRecords.length > 0 ? ((stuPresent / filteredStudentRecords.length) * 100).toFixed(1) : '100.0';

  // Staff Calculations
  const filteredStaffRecords = staffRecords.filter(rec => {
    if (selectedDept !== 'All' && rec.department !== selectedDept) return false;
    return true;
  });

  const staffPresent = filteredStaffRecords.filter(r => r.status === 'Present').length;
  const staffAbsent = filteredStaffRecords.filter(r => r.status === 'Absent').length;
  const staffLeave = filteredStaffRecords.filter(r => r.status === 'Leave').length;
  const staffPercentage = filteredStaffRecords.length > 0 ? ((staffPresent / filteredStaffRecords.length) * 100).toFixed(1) : '100.0';

  // Defaulters list (<75% attendance)
  const defaulters = students.filter(s => (s.attendanceSummary?.percentage || 95) < 75);

  const departments = ['All', 'Academics', 'Science', 'Mathematics', 'Languages', 'Humanities', 'Sports & Physical', 'Administration'];
  const classesList = ['All', 'Play Group', 'Nursery', 'LKG', 'UKG', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11 (Sci)', 'Class 11 (Comm)', 'Class 11 (Arts)', 'Class 12 (Sci)', 'Class 12 (Comm)', 'Class 12 (Arts)'];

  const statusColors = {
    Present: 'bg-emerald-600 text-white font-bold',
    Late: 'bg-amber-600 text-white font-bold',
    'Half-Day': 'bg-cyan-600 text-white font-bold',
    Absent: 'bg-rose-600 text-white font-bold',
    Leave: 'bg-purple-600 text-white font-bold'
  };

  const statusInactiveColors = {
    Present: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 hover:bg-emerald-100',
    Late: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 hover:bg-amber-100',
    'Half-Day': 'bg-cyan-50 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-400 hover:bg-cyan-100',
    Absent: 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 hover:bg-rose-100',
    Leave: 'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400 hover:bg-purple-100'
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* 🏛️ Page Title Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
              <CheckSquare className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-serif">
                Daily Attendance Register
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Real-time daily roll call for students, teachers, and school staff.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsQrModalOpen(true)}
            className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm flex items-center gap-1.5 transition-all hover:scale-105"
          >
            <Scan className="w-4 h-4" /> QR Scanner
          </button>
          <button
            onClick={activeTab === 'student' ? handleSaveStudentAttendance : handleSaveStaffAttendance}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
          >
            <Save className="w-4 h-4" /> Save {activeTab === 'student' ? 'Student' : 'Staff'} Register
          </button>
        </div>
      </div>

      {/* 🔘 Student vs Staff Register Selector Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('student')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black transition-all ${
            activeTab === 'student'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>👨‍🎓 Daily Student Attendance ({students.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('staff')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black transition-all ${
            activeTab === 'staff'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          <span>👨‍🏫 Staff & Teacher Attendance ({teachers.length})</span>
        </button>
      </div>

      {/* 📊 KPI Stats Bar */}
      {activeTab === 'student' ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Present Today</span>
            <p className="text-2xl font-black text-emerald-600 mt-1">{stuPresent} Students</p>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Absent Today</span>
            <p className="text-2xl font-black text-rose-600 mt-1">{stuAbsent} Students</p>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Late Arrival</span>
            <p className="text-2xl font-black text-amber-600 mt-1">{stuLate} Students</p>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Student Turnout</span>
            <p className="text-2xl font-black text-blue-600 mt-1">{stuPercentage}%</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Present Staff</span>
            <p className="text-2xl font-black text-emerald-600 mt-1">{staffPresent} Teachers</p>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Absent Staff</span>
            <p className="text-2xl font-black text-rose-600 mt-1">{staffAbsent} Staff</p>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">On Approved Leave</span>
            <p className="text-2xl font-black text-purple-600 mt-1">{staffLeave} Staff</p>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Staff Attendance Rate</span>
            <p className="text-2xl font-black text-indigo-600 mt-1">{staffPercentage}%</p>
          </div>
        </div>
      )}

      {/* 🎛️ Filter and Bulk Action Controls */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Attendance Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-slate-900 dark:text-white"
            />
          </div>

          {activeTab === 'student' ? (
            <>
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Filter Class</label>
                <select
                  value={selectedClass}
                  onChange={(e) => {
                    setSelectedClass(e.target.value);
                    if (e.target.value !== 'Class 3') setSelectedSection('All');
                  }}
                  className="text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-slate-900 dark:text-white"
                >
                  {classesList.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Single Section Rule: Section ONLY shown if Class 3 */}
              {selectedClass === 'Class 3' && (
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Section</label>
                  <select
                    value={selectedSection}
                    onChange={(e) => setSelectedSection(e.target.value)}
                    className="text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-slate-900 dark:text-white"
                  >
                    <option value="All">All Sections</option>
                    <option value="A">Section A</option>
                    <option value="B">Section B</option>
                  </select>
                </div>
              )}
            </>
          ) : (
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Filter Department</label>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-slate-900 dark:text-white"
              >
                {departments.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Bulk Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => activeTab === 'student' ? handleMarkAllStudents('Present') : handleMarkAllStaff('Present')}
            className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-all"
          >
            Mark All Present
          </button>
          <button
            onClick={() => activeTab === 'student' ? handleMarkAllStudents('Absent') : handleMarkAllStaff('Absent')}
            className="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-xs font-bold hover:bg-rose-100 transition-all"
          >
            Mark All Absent
          </button>
        </div>
      </div>

      {/* 📋 Attendance Register Table */}
      {activeTab === 'student' ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                  <th className="p-4">Roll No</th>
                  <th className="p-4">Student Name</th>
                  <th className="p-4">Class</th>
                  <th className="p-4 text-center">Attendance Status</th>
                  <th className="p-4">Daily Note / Remark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredStudentRecords.map(rec => (
                  <tr key={rec.studentId} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-slate-900 dark:text-white">#{rec.rollNo}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{rec.name}</td>
                    <td className="p-4 font-semibold text-slate-600 dark:text-slate-300">
                      {rec.class === 'Class 3' ? `${rec.class}-${rec.section || 'A'}` : rec.class}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-1.5">
                        {['Present', 'Late', 'Half-Day', 'Absent', 'Leave'].map(st => {
                          const isSelected = rec.status === st;
                          return (
                            <button
                              key={st}
                              onClick={() => handleStudentStatusChange(rec.studentId, st)}
                              className={`px-2.5 py-1 rounded-lg text-[11px] transition-all border border-transparent ${
                                isSelected ? statusColors[st] : statusInactiveColors[st]
                              }`}
                            >
                              {st}
                            </button>
                          );
                        })}
                      </div>
                    </td>
                    <td className="p-4">
                      <input
                        type="text"
                        placeholder="Add note..."
                        className="w-full text-[11px] p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-indigo-50/50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                  <th className="p-4">Employee ID</th>
                  <th className="p-4">Teacher / Staff Name</th>
                  <th className="p-4">Designation & Department</th>
                  <th className="p-4 text-center">Attendance Status</th>
                  <th className="p-4">Duty / Leave Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredStaffRecords.map(rec => (
                  <tr key={rec.staffId} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-indigo-600 dark:text-indigo-400">
                      {rec.employeeId}
                    </td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">
                      {rec.name}
                    </td>
                    <td className="p-4">
                      <span className="font-semibold text-slate-700 dark:text-slate-300 block">{rec.designation}</span>
                      <span className="text-[10px] text-slate-400">{rec.department}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-1.5">
                        {['Present', 'Late', 'Half-Day', 'Absent', 'Leave'].map(st => {
                          const isSelected = rec.status === st;
                          return (
                            <button
                              key={st}
                              onClick={() => handleStaffStatusChange(rec.staffId, st)}
                              className={`px-2.5 py-1 rounded-lg text-[11px] transition-all border border-transparent ${
                                isSelected ? statusColors[st] : statusInactiveColors[st]
                              }`}
                            >
                              {st}
                            </button>
                          );
                        })}
                      </div>
                    </td>
                    <td className="p-4">
                      <input
                        type="text"
                        placeholder="Duty note..."
                        className="w-full text-[11px] p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ⚠️ Attendance Defaulters Banner (<75%) */}
      {activeTab === 'student' && defaulters.length > 0 && (
        <div className="p-6 rounded-3xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 space-y-3">
          <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 font-bold text-sm">
            <AlertTriangle className="w-5 h-5" />
            <span>Attendance Defaulter Warning (&lt; 75% Attendance Benchmark)</span>
          </div>
          <p className="text-xs text-rose-600 dark:text-rose-400 leading-relaxed">
            The following students require parent counseling and official attendance deficiency notices:
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {defaulters.map(d => (
              <span key={d.id} className="px-3 py-1 bg-white dark:bg-slate-900 border border-rose-300 dark:border-rose-800 rounded-xl text-xs font-bold text-rose-900 dark:text-rose-200 flex items-center gap-1.5 shadow-sm">
                <span>{d.name} ({d.class === 'Class 3' ? `${d.class}-${d.section}` : d.class})</span>
                <Badge variant="danger" size="sm">{d.attendanceSummary?.percentage || 68}%</Badge>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* QR Code Scanner Modal */}
      <QRScannerModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        onScanSuccess={handleQrScanSuccess}
        mode="attendance"
      />
    </div>
  );
};

export default AttendancePage;
