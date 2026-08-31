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
  Briefcase,
  Fingerprint,
  ScanFace,
  RefreshCw,
  Zap,
  Timer
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
  const [isSyncingBiometric, setIsSyncingBiometric] = useState(false);

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

  // Teachers / Staff Data with Real-Time Biometric Punch Logs
  const [teachers, setTeachers] = useState(() => schoolService.getTeachers(activeBranchId));
  const [staffRecords, setStaffRecords] = useState(() => {
    const logs = schoolService.getBiometricLogs();
    return teachers.map(t => {
      const punch = logs.find(l => l.staffId === t.id || l.employeeId === t.employeeId || l.name === t.name);
      return {
        staffId: t.id,
        name: t.name,
        employeeId: t.employeeId || t.id,
        department: t.department || 'Academics',
        designation: t.designation || 'Teacher',
        inTime: punch ? punch.inTime : '--:-- --',
        outTime: punch ? punch.outTime : '--:-- --',
        verifyType: punch ? punch.verifyType : 'None',
        workDuration: punch && punch.outTime !== 'Pending' ? '6h 50m' : (punch ? 'In Campus' : '0h 00m'),
        status: punch ? (punch.status === 'Late Arrival' ? 'Late' : 'Present') : 'Absent',
        remarks: punch ? `Biometric Verified via ${punch.verifyType}` : 'No Punch Logged'
      };
    });
  });

  const refreshData = () => {
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
    const logs = schoolService.getBiometricLogs(selectedDate);
    setStaffRecords(tList.map(t => {
      const punch = logs.find(l => l.staffId === t.id || l.employeeId === t.employeeId || l.name === t.name);
      return {
        staffId: t.id,
        name: t.name,
        employeeId: t.employeeId || t.id,
        department: t.department || 'Academics',
        designation: t.designation || 'Teacher',
        inTime: punch ? punch.inTime : '--:-- --',
        outTime: punch ? punch.outTime : '--:-- --',
        verifyType: punch ? punch.verifyType : 'None',
        workDuration: punch && punch.outTime !== 'Pending' ? '6h 50m' : (punch ? 'In Campus' : '0h 00m'),
        status: punch ? (punch.status === 'Late Arrival' ? 'Late' : 'Present') : 'Absent',
        remarks: punch ? `Biometric Verified via ${punch.verifyType}` : 'No Punch Logged'
      };
    }));
  };

  useEffect(() => {
    refreshData();
  }, [activeBranchId, selectedDate]);

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

  const handleStaffTimeChange = (staffId, field, value) => {
    setStaffRecords(prev => prev.map(rec => {
      if (rec.staffId === staffId) {
        const updated = { ...rec, [field]: value };
        // Auto calculate status if In-time is edited
        if (field === 'inTime' && value) {
          const parts = value.split(':');
          const hr = parseInt(parts[0] || '8', 10);
          if (hr > 8 || value.includes('09:') || value.includes('10:')) {
            updated.status = 'Late';
          } else {
            updated.status = 'Present';
          }
        }
        return updated;
      }
      return rec;
    }));
  };

  const handleMarkAllStaff = (status) => {
    setStaffRecords(prev => prev.map(rec => ({ ...rec, status })));
    showToast(`Marked all staff members as ${status}`, 'info');
  };

  const handleSaveStaffAttendance = () => {
    schoolService.markStaffAttendance(selectedDate, staffRecords);
    showToast(`Staff attendance with biometric timestamps for ${selectedDate} saved successfully! ✅`, 'success');
  };

  // 1-Click Biometric Machine Sync
  const handleSyncFromBiometric = () => {
    setIsSyncingBiometric(true);
    setTimeout(() => {
      setIsSyncingBiometric(false);
      schoolService.syncBiometricToAttendance(selectedDate);
      refreshData();
      showToast('⚡ Live Punches Synced from Secureye Machine! Arrival and Departure times updated. ✅', 'success');
    }, 900);
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
  const staffLate = filteredStaffRecords.filter(r => r.status === 'Late').length;
  const staffAbsent = filteredStaffRecords.filter(r => r.status === 'Absent').length;
  const staffLeave = filteredStaffRecords.filter(r => r.status === 'Leave').length;
  const staffPercentage = filteredStaffRecords.length > 0 ? (((staffPresent + staffLate) / filteredStaffRecords.length) * 100).toFixed(1) : '100.0';

  // Defaulters list (<75% attendance)
  const defaulters = students.filter(s => (s.attendanceSummary?.percentage || 95) < 75);

  const departments = ['All', 'Academics', 'Science', 'Mathematics', 'Languages', 'Humanities', 'Sports & Physical', 'Administration'];
  const classesList = ['All', 'Play Group', 'Nursery', 'LKG', 'UKG', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'];

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
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div>
          <div className="flex items-center gap-2.5">
            <div className={`p-2.5 rounded-2xl ${activeTab === 'student' ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800' : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800'}`}>
              {activeTab === 'student' ? <GraduationCap className="w-6 h-6" /> : <Fingerprint className="w-6 h-6" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-serif">
                  {activeTab === 'student' ? 'Daily Student Attendance Register' : 'Staff Attendance & Biometric In/Out Log'}
                </h2>
                {activeTab === 'staff' && (
                  <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 border border-emerald-300 hidden sm:inline-flex items-center gap-1">
                    <Zap className="w-2.5 h-2.5 text-emerald-600" /> Secureye S-FB3K Synced
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {activeTab === 'student' 
                  ? 'Real-time class-wise roll call and daily attendance register for enrolled students.' 
                  : 'Automated biometric arrival/departure logging with on-time & late calculation for faculty.'}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {activeTab === 'staff' && (
            <button
              onClick={handleSyncFromBiometric}
              disabled={isSyncingBiometric}
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm flex items-center gap-1.5 transition-all hover:scale-105"
              title="Fetch live punches from Secureye LAN machine"
            >
              <RefreshCw className={`w-4 h-4 ${isSyncingBiometric ? 'animate-spin' : ''}`} />
              {isSyncingBiometric ? 'Syncing...' : '⚡ Sync Biometric Machine'}
            </button>
          )}

          <button
            onClick={() => setIsQrModalOpen(true)}
            className="px-3.5 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-bold shadow-xs flex items-center gap-1.5 transition-all"
          >
            <Scan className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> QR Scanner
          </button>

          <button
            onClick={activeTab === 'student' ? handleSaveStudentAttendance : handleSaveStaffAttendance}
            className={`px-4 py-2 ${activeTab === 'student' ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/20' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/20'} text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all hover:scale-105`}
          >
            <Save className="w-4 h-4" /> Save {activeTab === 'student' ? 'Student' : 'Staff'} Register
          </button>
        </div>
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
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">On-Time Arrival</span>
            <p className="text-2xl font-black text-emerald-600 mt-1">{staffPresent} Staff</p>
            <span className="text-[10px] text-slate-400">Before 08:45 AM</span>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Late Punches</span>
            <p className="text-2xl font-black text-amber-600 mt-1">{staffLate} Staff</p>
            <span className="text-[10px] text-amber-600 font-bold">After 08:45 AM</span>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Absent / No Punch</span>
            <p className="text-2xl font-black text-rose-600 mt-1">{staffAbsent} Staff</p>
            <span className="text-[10px] text-slate-400">{staffLeave} On Leave</span>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Staff Attendance Rate</span>
            <p className="text-2xl font-black text-indigo-600 mt-1">{staffPercentage}%</p>
            <span className="text-[10px] text-emerald-600 font-bold">Biometric Verified</span>
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
        /* 👨‍🏫 Upgraded Staff Attendance Table with Biometric Arrival & Departure Times */
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          
          {/* Active School Shift Timings & Penalty Policy Bar */}
          <div className="bg-indigo-50/70 dark:bg-indigo-950/40 p-4 border-b border-indigo-100 dark:border-indigo-900/50 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-black text-indigo-950 dark:text-indigo-200 uppercase tracking-wide flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-indigo-600" /> Active School Shifts:
              </span>
              <span className="px-2.5 py-1 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 font-bold text-slate-800 dark:text-slate-200">
                👩‍🏫 Teachers: <strong>07:45 In</strong> / <strong>14:15 Out</strong> (Half-Day: 09:00-12:30)
              </span>
              <span className="px-2.5 py-1 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 font-bold text-slate-800 dark:text-slate-200">
                🚌 Drivers/Cleaners: <strong>04:30 - 19:30</strong>
              </span>
              <span className="px-2.5 py-1 rounded-xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 font-bold text-purple-700 dark:text-purple-300">
                👔 Principal: <strong>24x7 Flexible</strong>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border border-purple-300">
                🥪 Sandwich Rule Active
              </span>
              <span className="text-[11px] font-black px-2 py-0.5 rounded-md bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 border border-rose-300">
                2X Absent Cut
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-800">
                  <th className="p-3.5">Employee ID</th>
                  <th className="p-3.5">Teacher / Staff Name</th>
                  <th className="p-3.5">Arrival (07:45 Cutoff)</th>
                  <th className="p-3.5">Departure (14:15 Out)</th>
                  <th className="p-3.5">Total Hours</th>
                  <th className="p-3.5 text-center">Attendance Status</th>
                  <th className="p-3.5">Salary Deduction</th>
                  <th className="p-3.5">Biometric Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredStaffRecords.map(rec => {
                  const isPunchAvailable = rec.inTime && rec.inTime !== '--:-- --';
                  return (
                    <tr key={rec.staffId} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 font-medium">
                      <td className="p-3.5 font-mono font-bold text-indigo-600 dark:text-indigo-400">
                        {rec.employeeId}
                      </td>
                      
                      <td className="p-3.5">
                        <span className="font-bold text-slate-900 dark:text-white block">{rec.name}</span>
                        <span className="text-[10px] text-slate-400 font-normal">{rec.designation} • {rec.department}</span>
                      </td>

                      {/* Biometric In Time (Arrival) */}
                      <td className="p-3.5 font-mono">
                        <div className="flex items-center gap-1.5">
                          {rec.verifyType === 'Face Recognition' ? (
                            <ScanFace className="w-3.5 h-3.5 text-blue-500 shrink-0" title="Face Scan" />
                          ) : isPunchAvailable ? (
                            <Fingerprint className="w-3.5 h-3.5 text-emerald-500 shrink-0" title="Fingerprint" />
                          ) : (
                            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          )}
                          <input
                            type="text"
                            value={rec.inTime}
                            onChange={(e) => handleStaffTimeChange(rec.staffId, 'inTime', e.target.value)}
                            placeholder="08:30 AM"
                            className={`text-xs font-bold px-2 py-1 rounded-lg border ${
                              isPunchAvailable 
                                ? (rec.status === 'Late' ? 'border-amber-300 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300' : 'border-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300')
                                : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-400'
                            } w-24`}
                          />
                        </div>
                      </td>

                      {/* Biometric Out Time (Departure) */}
                      <td className="p-3.5 font-mono">
                        <input
                          type="text"
                          value={rec.outTime}
                          onChange={(e) => handleStaffTimeChange(rec.staffId, 'outTime', e.target.value)}
                          placeholder="03:00 PM"
                          className={`text-xs font-bold px-2 py-1 rounded-lg border ${
                            rec.outTime && rec.outTime !== '--:-- --'
                              ? 'border-blue-300 bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300'
                              : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-400'
                          } w-24`}
                        />
                      </td>

                      {/* Total Duration */}
                      <td className="p-3.5 font-mono text-slate-700 dark:text-slate-300">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                          <Timer className="w-3 h-3 text-slate-400" />
                          {rec.workDuration}
                        </span>
                      </td>

                      {/* Automated Status with Manual Override Buttons */}
                      <td className="p-3.5">
                        <div className="flex items-center justify-center gap-1">
                          {['Present', 'Late', 'Half-Day', 'Absent', 'Leave'].map(st => {
                            const isSelected = rec.status === st;
                            return (
                              <button
                                key={st}
                                onClick={() => handleStaffStatusChange(rec.staffId, st)}
                                className={`px-2 py-1 rounded-lg text-[10px] transition-all border border-transparent ${
                                  isSelected ? statusColors[st] : statusInactiveColors[st]
                                }`}
                              >
                                {st}
                              </button>
                            );
                          })}
                        </div>
                      </td>

                      {/* Salary Deduction / Penalty Display */}
                      <td className="p-3.5 font-bold">
                        {rec.status === 'Present' && (
                          <span className="text-emerald-600 text-[11px] font-black">0 Days (Full Day)</span>
                        )}
                        {rec.status === 'Late' && (
                          <span className="text-amber-600 text-[11px] font-bold">Late Warning (0 Day)</span>
                        )}
                        {rec.status === 'Half-Day' && (
                          <span className="text-cyan-700 dark:text-cyan-300 text-[11px] font-black px-2 py-0.5 rounded-md bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-300">
                            -0.5 Day Cut
                          </span>
                        )}
                        {rec.status === 'Leave' && (
                          <span className="text-purple-700 dark:text-purple-300 text-[11px] font-black px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/60 border border-purple-300">
                            -1 Day Leave
                          </span>
                        )}
                        {rec.status === 'Absent' && (
                          <span className="text-rose-700 dark:text-rose-300 text-[11px] font-black px-2 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/60 border border-rose-300 animate-pulse">
                            -2 Days (2X Cut)
                          </span>
                        )}
                      </td>

                      {/* Remarks */}
                      <td className="p-3.5">
                        <input
                          type="text"
                          value={rec.remarks}
                          onChange={(e) => {
                            const val = e.target.value;
                            setStaffRecords(prev => prev.map(r => r.staffId === rec.staffId ? { ...r, remarks: val } : r));
                          }}
                          placeholder="Duty note..."
                          className="w-full text-[11px] p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                      </td>
                    </tr>
                  );
                })}
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
