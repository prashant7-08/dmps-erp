import React, { useState } from 'react';
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
  Download
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { QRScannerModal } from '../components/qr/QRScannerModal';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const AttendancePage = () => {
  const { showToast } = useToast();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedClass, setSelectedClass] = useState('Class 10');
  const [selectedSection, setSelectedSection] = useState('A');
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('student');

  const students = schoolService.getStudents();
  const [attendanceRecords, setAttendanceRecords] = useState(() => {
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

  const handleStatusChange = (studentId, newStatus) => {
    setAttendanceRecords(prev => prev.map(rec => {
      if (rec.studentId === studentId) {
        return { ...rec, status: newStatus };
      }
      return rec;
    }));
  };

  const handleMarkAll = (status) => {
    setAttendanceRecords(prev => prev.map(rec => ({ ...rec, status })));
    showToast(`Marked all students as ${status}`, 'info');
  };

  const handleSaveAttendance = () => {
    schoolService.markStudentAttendance(selectedDate, attendanceRecords);
    showToast(`Attendance for ${selectedDate} saved successfully!`, 'success');
  };

  const handleQrScanSuccess = (student) => {
    handleStatusChange(student.id, 'Present');
    showToast(`Smart RFID check-in: ${student.name} marked Present!`, 'success');
  };

  const presentCount = attendanceRecords.filter(r => r.status === 'Present').length;
  const absentCount = attendanceRecords.filter(r => r.status === 'Absent').length;
  const lateCount = attendanceRecords.filter(r => r.status === 'Late').length;
  const percentage = ((presentCount / attendanceRecords.length) * 100).toFixed(1);

  // Defaulters list (<75% attendance)
  const defaulters = students.filter(s => (s.attendanceSummary?.percentage || 95) < 75);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <CheckSquare className="w-7 h-7 text-indigo-600" /> Attendance Management System
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Real-time daily register, QR code RFID scanner badge simulation, and monthly attendance defaulter tracking.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsQrModalOpen(true)}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all"
          >
            <Scan className="w-4 h-4" /> QR Badge Scanner
          </button>
          <button
            onClick={handleSaveAttendance}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all"
          >
            <Save className="w-4 h-4" /> Save Attendance
          </button>
        </div>
      </div>

      {/* KPI Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold text-slate-400 uppercase">Present Today</span>
          <p className="text-2xl font-black text-emerald-600 mt-1">{presentCount} Students</p>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold text-slate-400 uppercase">Absent Today</span>
          <p className="text-2xl font-black text-rose-600 mt-1">{absentCount} Students</p>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold text-slate-400 uppercase">Late Arrival</span>
          <p className="text-2xl font-black text-amber-600 mt-1">{lateCount} Students</p>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold text-slate-400 uppercase">Attendance Rate</span>
          <p className="text-2xl font-black text-indigo-600 mt-1">{percentage}%</p>
        </div>
      </div>

      {/* Filter and Bulk Action Controls */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-slate-900 dark:text-white"
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Class</label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-slate-900 dark:text-white"
            >
              <option value="Class 10">Class 10</option>
              <option value="Class 12">Class 12</option>
              <option value="Class 9">Class 9</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Section</label>
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-slate-900 dark:text-white"
            >
              <option value="A">Section A</option>
              <option value="B">Section B</option>
            </select>
          </div>
        </div>

        {/* Bulk Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleMarkAll('Present')}
            className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold hover:bg-emerald-100"
          >
            Mark All Present
          </button>
          <button
            onClick={() => handleMarkAll('Absent')}
            className="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-xs font-bold hover:bg-rose-100"
          >
            Mark All Absent
          </button>
        </div>
      </div>

      {/* Attendance Register Table */}
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
              {attendanceRecords.map(rec => (
                <tr key={rec.studentId} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="p-4 font-mono font-bold text-slate-900 dark:text-white">#{rec.rollNo}</td>
                  <td className="p-4 font-bold text-slate-900 dark:text-white">{rec.name}</td>
                  <td className="p-4 font-semibold text-slate-600 dark:text-slate-300">{rec.class}-{rec.section}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-1.5">
                      {['Present', 'Late', 'Half-Day', 'Absent', 'Leave'].map(st => {
                        const isSelected = rec.status === st;
                        const colors = {
                          Present: isSelected ? 'bg-emerald-600 text-white font-bold' : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400',
                          Late: isSelected ? 'bg-amber-600 text-white font-bold' : 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400',
                          'Half-Day': isSelected ? 'bg-cyan-600 text-white font-bold' : 'bg-cyan-50 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-400',
                          Absent: isSelected ? 'bg-rose-600 text-white font-bold' : 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400',
                          Leave: isSelected ? 'bg-purple-600 text-white font-bold' : 'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400'
                        };

                        return (
                          <button
                            key={st}
                            onClick={() => handleStatusChange(rec.studentId, st)}
                            className={`px-2.5 py-1 rounded-lg text-[11px] transition-all border border-transparent ${colors[st]}`}
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

      {/* Attendance Defaulters Banner (<75%) */}
      {defaulters.length > 0 && (
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
                <span>{d.name} ({d.class}-{d.section})</span>
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
