import React, { useState, useEffect, useMemo } from 'react';
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
  Timer,
  Printer,
  Search,
  Filter,
  Layers,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { QRScannerModal } from '../components/qr/QRScannerModal';
import { useToast } from '../components/common/Toast';
import { useAuth } from '../context/AuthContext';
import schoolService from '../services/schoolService';

export const AttendancePage = ({ initialType = 'student' }) => {
  const { showToast } = useToast();
  const { activeBranchId } = useAuth();

  const resolveTab = (tab) => {
    if (!tab) return 'student';
    if (tab === 'student' || tab === 'attendance' || tab === 'student-attendance') return 'student';
    if (tab === 'staff' || tab === 'employee' || tab === 'staff-attendance' || tab === 'employee-attendance') return 'staff';
    if (tab === 'staff-monthly-matrix') return 'staff-monthly-matrix';
    if (tab === 'exam' || tab === 'exam-attendance') return 'exam';
    return 'student';
  };
  
  const [activeTab, setActiveTab] = useState(() => resolveTab(initialType));
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedClass, setSelectedClass] = useState('All');
  const [selectedSection, setSelectedSection] = useState('All');
  const [selectedDept, setSelectedDept] = useState('All');
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isSyncingBiometric, setIsSyncingBiometric] = useState(false);

  // Monthly Matrix States
  const [selectedYearMonth, setSelectedYearMonth] = useState('2026-08');
  const [monthlySearchQuery, setMonthlySearchQuery] = useState('');
  const [monthlyDeptFilter, setMonthlyDeptFilter] = useState('All');

  // Sync active tab if initialType changes from sidebar
  useEffect(() => {
    if (initialType) setActiveTab(resolveTab(initialType));
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
  const [teachers, setTeachers] = useState(() => schoolService.getTeachers(activeBranchId) || []);
  const [staffRecords, setStaffRecords] = useState(() => {
    const logs = Array.isArray(schoolService.getBiometricLogs()) ? schoolService.getBiometricLogs() : [];
    const tList = Array.isArray(teachers) ? teachers : [];
    return tList.map(t => {
      const punch = logs.find(l => l && (l.staffId === t.id || l.employeeId === t.employeeId || l.name === t.name));
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

  // Exam Attendance States
  const [selectedExamTerm, setSelectedExamTerm] = useState('Pre-Midterm Examination (Session 2026-27)');
  const [selectedExamClass, setSelectedExamClass] = useState('Class 10');
  const [selectedExamSubject, setSelectedExamSubject] = useState('Mathematics (Standard)');
  const [selectedExamRoom, setSelectedExamRoom] = useState('Hall 1 - Senior Wing (Room 101)');
  const [examDate, setExamDate] = useState(new Date().toISOString().split('T')[0]);
  const [isPrintExamModalOpen, setIsPrintExamModalOpen] = useState(false);

  const [examRecords, setExamRecords] = useState(() => {
    const sList = schoolService.getStudents(activeBranchId) || [];
    return sList.map((s, idx) => ({
      studentId: s.id,
      name: s.name,
      rollNo: s.rollNo || (idx + 1),
      admitCardNo: `ADM-2026-${String(s.rollNo || (idx + 1)).padStart(3, '0')}`,
      class: s.class,
      section: s.section || 'A',
      bookletNo: `BK-${202600 + Number(s.rollNo || (idx + 1))}`,
      supplements: 0,
      status: 'Present',
      verified: true,
      remarks: ''
    }));
  });

  const filteredExamRecords = useMemo(() => {
    return examRecords.filter(r => {
      if (selectedExamClass === 'All') return true;
      return r.class === selectedExamClass;
    });
  }, [examRecords, selectedExamClass]);

  const examPresentCount = useMemo(() => filteredExamRecords.filter(r => r.status === 'Present').length, [filteredExamRecords]);
  const examAbsentCount = useMemo(() => filteredExamRecords.filter(r => r.status === 'Absent').length, [filteredExamRecords]);
  const examLateCount = useMemo(() => filteredExamRecords.filter(r => r.status === 'Late').length, [filteredExamRecords]);
  const examUmcCount = useMemo(() => filteredExamRecords.filter(r => r.status === 'UMC').length, [filteredExamRecords]);

  const handleExamStatusChange = (studentId, newStatus) => {
    setExamRecords(prev => prev.map(rec => {
      if (rec.studentId === studentId) return { ...rec, status: newStatus };
      return rec;
    }));
  };

  const handleExamBookletChange = (studentId, field, val) => {
    setExamRecords(prev => prev.map(rec => {
      if (rec.studentId === studentId) return { ...rec, [field]: val };
      return rec;
    }));
  };

  const handleMarkAllExam = (status) => {
    setExamRecords(prev => prev.map(rec => ({ ...rec, status })));
    showToast(`Marked all exam candidates as ${status}`, 'info');
  };

  const handleSaveExamAttendance = () => {
    showToast(`Exam Hall Attendance for ${selectedExamSubject} saved successfully! 📝✅`, 'success');
  };

  const refreshData = () => {
    const sList = schoolService.getStudents(activeBranchId) || [];
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

    const tList = schoolService.getTeachers(activeBranchId) || [];
    setTeachers(tList);
    const logs = Array.isArray(schoolService.getBiometricLogs(selectedDate)) ? schoolService.getBiometricLogs(selectedDate) : [];
    setStaffRecords(tList.map(t => {
      const punch = logs.find(l => l && (l.staffId === t.id || l.employeeId === t.employeeId || l.name === t.name));
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

  const departments = ['All', 'Academics', 'Science', 'Mathematics', 'Languages', 'Humanities', 'Sports & Physical', 'Administration', 'Transport'];
  const classesList = ['All', 'Play Group', 'Nursery', 'LKG', 'UKG', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'];

  // Monthly Biometric Matrix Data Calculation
  const monthlyMatrix = useMemo(() => {
    try {
      const res = schoolService.getMonthlyStaffBiometricMatrix(selectedYearMonth, activeBranchId, monthlyDeptFilter);
      if (res && Array.isArray(res.dates) && Array.isArray(res.staffMatrix)) {
        return res;
      }
    } catch (e) {
      console.error('Error calculating monthlyMatrix', e);
    }
    return {
      monthName: 'August',
      year: 2026,
      totalDays: 31,
      dates: [],
      staffMatrix: []
    };
  }, [selectedYearMonth, activeBranchId, monthlyDeptFilter, staffRecords]);

  // Filtered staff in monthly matrix
  const filteredMonthlyStaff = useMemo(() => {
    if (!monthlyMatrix || !Array.isArray(monthlyMatrix.staffMatrix)) return [];
    if (!monthlySearchQuery.trim()) return monthlyMatrix.staffMatrix;
    const q = monthlySearchQuery.toLowerCase().trim();
    return monthlyMatrix.staffMatrix.filter(s => 
      s && (
        (s.name || '').toLowerCase().includes(q) ||
        (s.employeeId || '').toLowerCase().includes(q) ||
        (s.designation || '').toLowerCase().includes(q) ||
        (s.department || '').toLowerCase().includes(q)
      )
    );
  }, [monthlyMatrix, monthlySearchQuery]);

  // Print Handler
  const handlePrintMonthlyRegister = () => {
    window.print();
  };

  // Bulk Mark Month Present Handler
  const handleBulkMarkMonthPresent = () => {
    if (!monthlyMatrix || !monthlyMatrix.dates) return;
    const workingDates = monthlyMatrix.dates.filter(d => !d.isSunday && !d.isHoliday);
    const teachers = schoolService.getTeachers(activeBranchId);
    
    workingDates.forEach(d => {
      teachers.forEach(t => {
        if (t.joiningDate && d.dateStr < t.joiningDate) return;
        if (t.leavingDate && d.dateStr > t.leavingDate) return;
        schoolService.quickSetStaffAttendance(t.id, d.dateStr, 'Present', '07:45 AM', '02:30 PM');
      });
    });
    setStaffRecords(schoolService.getStaffAttendance(selectedDate));
    showToast(`Marked all teachers Present for ${monthlyMatrix.monthName} ${monthlyMatrix.year}! You can now click any day to adjust. ✅`, 'success');
  };

  // Clear All Data Handler
  const handleClearAllAttendance = () => {
    if (window.confirm("Are you sure you want to delete all attendance and biometric records to start 100% fresh?")) {
      schoolService.clearAllAttendanceLogs();
      setStaffRecords(schoolService.getStaffAttendance(selectedDate));
      showToast("All simulated attendance and biometric data deleted completely! Clean slate active. 🗑️", 'info');
    }
  };

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

      {/* 🧭 Top 3-Tab Navigation Bar (Exact match to old software: Student, Employee, Exam) */}
      <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-x-auto custom-scrollbar no-print">
        <div className="flex items-center gap-1 min-w-max text-xs font-bold">
          {[
            { id: 'student', label: '👨‍🎓 Student Attendance', count: students.length },
            { id: 'staff', label: '👥 Employee Attendance', count: teachers.length },
            { id: 'exam', label: '📝 Exam Attendance', count: 'Hall 1' }
          ].map(tab => {
            const isTabActive = activeTab === tab.id || (tab.id === 'staff' && activeTab === 'staff-monthly-matrix');
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
                  isTabActive
                    ? 'bg-blue-600 text-white shadow-md font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isTabActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 🏛️ Page Title Bar (Hidden during Print) */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm no-print">
        <div>
          <div className="flex items-center gap-2.5">
            <div className={`p-2.5 rounded-2xl ${
              activeTab === 'student' 
                ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800' 
                : activeTab === 'staff' || activeTab === 'staff-monthly-matrix'
                ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800'
                : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
            }`}>
              {activeTab === 'student' ? <GraduationCap className="w-6 h-6" /> : (activeTab === 'staff' || activeTab === 'staff-monthly-matrix') ? <Fingerprint className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-serif">
                  {activeTab === 'student' 
                    ? 'Daily Student Attendance Register' 
                    : activeTab === 'staff' 
                    ? 'Staff Attendance & Biometric In/Out Log' 
                    : activeTab === 'staff-monthly-matrix'
                    ? 'Monthly Staff Biometric Register (Calendar Matrix)'
                    : 'Examination Hall Attendance & Answer Booklet Register'}
                </h2>
                {(activeTab === 'staff' || activeTab === 'staff-monthly-matrix') && (
                  <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 border border-emerald-300 hidden sm:inline-flex items-center gap-1">
                    <Zap className="w-2.5 h-2.5 text-emerald-600" /> Secureye S-FB3K Synced
                  </span>
                )}
                {activeTab === 'exam' && (
                  <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-300 border border-indigo-300 hidden sm:inline-flex items-center gap-1">
                    <ShieldCheck className="w-2.5 h-2.5 text-indigo-600" /> CBSE Exam Hall Sealed
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {activeTab === 'student' 
                  ? 'Real-time class-wise roll call and daily attendance register for enrolled students.' 
                  : activeTab === 'staff'
                  ? 'Automated biometric arrival/departure logging with on-time & late calculation for faculty.'
                  : activeTab === 'staff-monthly-matrix'
                  ? 'Full monthly calendar matrix showing daily In/Out punch timings, work hours & printable landscape register.'
                  : 'Track exam day candidate presence, main answer booklet serial numbers, supplementary sheets, and invigilator signature verification.'}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {(activeTab === 'staff' || activeTab === 'staff-monthly-matrix') && (
            <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setActiveTab('staff')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'staff' ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}
              >
                Daily Biometric
              </button>
              <button
                onClick={() => setActiveTab('staff-monthly-matrix')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'staff-monthly-matrix' ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}
              >
                Monthly Register
              </button>
            </div>
          )}

          {activeTab === 'staff-monthly-matrix' && (
            <button
              onClick={handlePrintMonthlyRegister}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Printer className="w-4 h-4" /> 🖨️ Print Monthly Register
            </button>
          )}

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

          {activeTab === 'exam' && (
            <>
              <button
                onClick={() => setIsPrintExamModalOpen(true)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
              >
                <Printer className="w-4 h-4" /> 🖨️ Print Signature Chart
              </button>
              <button
                onClick={handleSaveExamAttendance}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
              >
                <Save className="w-4 h-4" /> Save Exam Register
              </button>
            </>
          )}

          {activeTab !== 'staff-monthly-matrix' && activeTab !== 'exam' && (
            <>
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
            </>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 📅 TAB 3: MONTHLY STAFF BIOMETRIC CALENDAR MATRIX & PRINT REGISTER */}
      {/* ========================================================================= */}
      {activeTab === 'staff-monthly-matrix' && (
        <div className="space-y-6">
          
          {/* Monthly Toolbar & KPI Summary (Hidden in Print) */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 no-print">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                
                {/* Month Selector */}
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Select Attendance Month</label>
                  <select
                    value={selectedYearMonth}
                    onChange={(e) => setSelectedYearMonth(e.target.value)}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-black text-blue-700 dark:text-blue-300"
                  >
                    <option value="2026-04">April 2026 (सत्र 2026-27 आरंभ)</option>
                    <option value="2026-05">May 2026</option>
                    <option value="2026-06">June 2026 (Summer Vacation)</option>
                    <option value="2026-07">July 2026</option>
                    <option value="2026-08">August 2026 (Current Active)</option>
                    <option value="2026-09">September 2026 (Half-Yearly Exams)</option>
                    <option value="2026-10">October 2026</option>
                    <option value="2026-11">November 2026</option>
                    <option value="2026-12">December 2026</option>
                    <option value="2027-01">January 2027</option>
                    <option value="2027-02">February 2027</option>
                    <option value="2027-03">March 2027 (Annual Results)</option>
                  </select>
                </div>

                {/* Department Filter */}
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Department / Role</label>
                  <select
                    value={monthlyDeptFilter}
                    onChange={(e) => setMonthlyDeptFilter(e.target.value)}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold"
                  >
                    {departments.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                {/* Staff Search */}
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Search Staff Name / Code</label>
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. Sonu, Hemraj..."
                      value={monthlySearchQuery}
                      onChange={(e) => setMonthlySearchQuery(e.target.value)}
                      className="pl-8 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleBulkMarkMonthPresent}
                  className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-500/25 flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all"
                  title="Mark all staff members Present for this month (you can click individual cells to change)"
                >
                  <CheckCircle2 className="w-4 h-4" /> ⚡ Mark Month Present
                </button>

                <button
                  onClick={handleClearAllAttendance}
                  className="px-3 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900/60 rounded-xl text-xs font-bold flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all"
                  title="Wipe all simulated attendance records to start clean"
                >
                  <Trash2 className="w-4 h-4" /> 🗑️ Reset Month
                </button>

                <button
                  onClick={handlePrintMonthlyRegister}
                  className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all"
                >
                  <Printer className="w-4 h-4" /> 🖨️ Print Register
                </button>
              </div>
            </div>

            {/* Monthly KPI Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/40 space-y-0.5">
                <span className="text-[10px] font-bold uppercase text-blue-700 dark:text-blue-400">Total Staff Members</span>
                <p className="text-xl font-black text-slate-900 dark:text-white font-mono">{filteredMonthlyStaff.length} Faculty</p>
                <span className="text-[10px] text-blue-600">All registered in Secureye</span>
              </div>

              <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/40 space-y-0.5">
                <span className="text-[10px] font-bold uppercase text-emerald-700 dark:text-emerald-400">Total Month Days</span>
                <p className="text-xl font-black text-emerald-600 font-mono">
                  {monthlyMatrix.totalDays} Days ({monthlyMatrix.dates.filter(d => d.isSunday).length} Sundays)
                </p>
                <span className="text-[10px] text-emerald-600 font-medium">Session 2026-27 Official</span>
              </div>

              <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 space-y-0.5">
                <span className="text-[10px] font-bold uppercase text-amber-700 dark:text-amber-400">Average Turnout Rate</span>
                <p className="text-xl font-black text-amber-600 font-mono">96.8%</p>
                <span className="text-[10px] text-amber-700">On-Time & Verified</span>
              </div>

              <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/40 space-y-0.5">
                <span className="text-[10px] font-bold uppercase text-purple-700 dark:text-purple-400">Biometric Machine</span>
                <p className="text-xl font-black text-purple-600 font-mono">Secureye S-FB3K</p>
                <span className="text-[10px] text-purple-600">LAN IP: 192.168.31.43</span>
              </div>
            </div>
          </div>

          {/* 🖨️ PRINTABLE CONTAINER (FORMATTED AS MONTHLY CALENDAR REGISTER) */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm printable-biometric-register">
            
            {/* Printable Header (Visible during Print & Screen) */}
            <div className="text-center pb-4 mb-3 border-b-2 border-slate-800 dark:border-slate-200">
              <h1 className="text-lg sm:text-2xl font-black uppercase text-slate-900 dark:text-white tracking-wide">
                Dadheech Memorial Public School, Jargawan (Debai)
              </h1>
              <p className="text-xs font-bold text-slate-600 dark:text-slate-400 mt-0.5">
                CBSE Affiliated Senior Secondary School • Near Kaliyanpur Road, Jargawan, Bulandshahr (UP)
              </p>
              <div className="inline-block mt-2 px-4 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                📅 Monthly Staff Biometric In/Out Attendance Register — {monthlyMatrix.monthName} {monthlyMatrix.year}
              </div>
            </div>

            {/* Calendar Matrix Grid */}
            <div className="overflow-x-auto border border-slate-300 dark:border-slate-700 rounded-xl">
              <table className="w-full text-center border-collapse text-[10px]">
                <thead>
                  {/* Row 1: Dates 1 to 31 */}
                  <tr className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-black border-b border-slate-300 dark:border-slate-700">
                    <th className="p-2 text-left sticky left-0 bg-slate-200 dark:bg-slate-800 z-20 min-w-[150px] border-r border-slate-300 dark:border-slate-700">
                      Staff Member / Code
                    </th>
                    {monthlyMatrix.dates.map(d => (
                      <th
                        key={d.dateStr}
                        className={`p-1 min-w-[42px] border-r border-slate-200 dark:border-slate-700 ${
                          d.isSunday
                            ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300'
                            : d.isHoliday
                            ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300'
                            : ''
                        }`}
                      >
                        <div className="font-black text-[11px]">{d.dayNum}</div>
                        <div className="text-[8px] font-bold uppercase opacity-80">{d.dayName}</div>
                      </th>
                    ))}
                    {/* Summary Headers */}
                    <th className="p-1 min-w-[32px] bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 border-l-2 border-r border-slate-300">P</th>
                    <th className="p-1 min-w-[32px] bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 border-r border-slate-300">L</th>
                    <th className="p-1 min-w-[32px] bg-cyan-100 dark:bg-cyan-950 text-cyan-900 dark:text-cyan-200 border-r border-slate-300">HD</th>
                    <th className="p-1 min-w-[32px] bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-200 border-r border-slate-300">A</th>
                    <th className="p-1 min-w-[44px] bg-purple-100 dark:bg-purple-950 text-purple-900 dark:text-purple-200 border-r border-slate-300">Hours</th>
                    <th className="p-1 min-w-[44px] bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-200">Pay Days</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {filteredMonthlyStaff.map((staff, sIdx) => {
                    const sum = staff.summary;
                    return (
                      <tr key={staff.staffId} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        {/* Sticky Left: Staff Info */}
                        <td className="p-2 text-left sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-slate-300 dark:border-slate-700 shadow-xs">
                          <p className="font-bold text-slate-900 dark:text-white text-xs leading-tight whitespace-nowrap">
                            {sIdx + 1}. {staff.name}
                          </p>
                          <p className="text-[9px] text-slate-500 font-mono mt-0.5 whitespace-nowrap">
                            {staff.employeeId} • {staff.designation}
                          </p>
                        </td>

                        {/* 1 to 31 Date Cells with In & Out Times */}
                        {monthlyMatrix.dates.map(d => {
                          const record = staff.dailyMap[d.dateStr];
                          
                          // Out of tenure (Before joining date or After leaving date)
                          if (record?.status === 'NA') {
                            return (
                              <td
                                key={d.dateStr}
                                className="p-1 bg-slate-100/70 dark:bg-slate-800/40 border-r border-slate-200 dark:border-slate-700 text-[8px] font-mono text-slate-400"
                                title={record?.statusLabel || 'Out of Active Tenure'}
                              >
                                <span className="text-[8px] font-bold text-slate-400">NA</span>
                              </td>
                            );
                          }

                          if (d.isSunday) {
                            return (
                              <td
                                key={d.dateStr}
                                className="p-1 bg-slate-100 dark:bg-slate-800/60 border-r border-slate-200 dark:border-slate-700 text-[9px] font-bold text-slate-400"
                                title="Sunday (Weekly Off)"
                              >
                                <span className="text-[10px] text-rose-500 font-bold">WO</span>
                              </td>
                            );
                          }

                          if (d.isHoliday) {
                            return (
                              <td
                                key={d.dateStr}
                                className="p-1 bg-blue-50 dark:bg-blue-950/40 border-r border-slate-200 dark:border-slate-700 text-[9px] font-bold text-blue-600"
                                title={d.holidayName || 'Declared Holiday'}
                              >
                                <span className="text-[10px] text-blue-600 font-bold">H</span>
                              </td>
                            );
                          }

                          if (record?.status === 'OD') {
                            return (
                              <td
                                key={d.dateStr}
                                className="p-1 bg-purple-50/60 dark:bg-purple-950/20 border-r border-slate-200 dark:border-slate-700"
                                title={`${staff.name} on ${d.dateStr}: Official Duty / Off-Campus Management`}
                              >
                                <div className="space-y-0.5 leading-none">
                                  <span className="inline-block px-1 py-0.5 rounded bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-300 text-[7px] font-black">
                                    OD
                                  </span>
                                  <span className="text-[7px] text-purple-600 dark:text-purple-400 block font-mono">Off-Camp</span>
                                </div>
                              </td>
                            );
                          }

                          const isUnmarked = !record || record?.status === 'Unmarked';
                          const isPresent = record?.status === 'Present';
                          const isLate = record?.status === 'Late';
                          const isHalfDay = record?.status === 'Half-Day';
                          const isAbsent = record?.status === 'Absent';
                          const isLeave = record?.status === 'Leave';

                          return (
                            <td
                              key={d.dateStr}
                              onClick={() => {
                                const nextStatus = 
                                  isUnmarked ? 'Present' :
                                  isPresent ? 'Late' :
                                  isLate ? 'Half-Day' :
                                  isHalfDay ? 'Absent' :
                                  isAbsent ? 'Leave' :
                                  isLeave ? 'OD' : 'Unmarked';
                                schoolService.quickSetStaffAttendance(staff.staffId, d.dateStr, nextStatus);
                                setStaffRecords(schoolService.getStaffAttendance(selectedDate));
                                showToast(`${staff.name} on ${d.dateStr}: ${nextStatus} ✅`, 'success');
                              }}
                              className={`p-1 border-r border-slate-200 dark:border-slate-700 cursor-pointer select-none hover:ring-2 hover:ring-indigo-500 hover:z-10 transition-all ${
                                isUnmarked
                                  ? 'bg-slate-50/50 dark:bg-slate-800/20'
                                  : isAbsent
                                  ? 'bg-rose-50 dark:bg-rose-950/30'
                                  : isLate
                                  ? 'bg-amber-50/60 dark:bg-amber-950/20'
                                  : isHalfDay
                                  ? 'bg-cyan-50/60 dark:bg-cyan-950/20'
                                  : isLeave
                                  ? 'bg-purple-50/60 dark:bg-purple-950/20'
                                  : 'bg-emerald-50/40 dark:bg-emerald-950/20'
                              }`}
                              title={`${staff.name} on ${d.dateStr}: ${record?.status || 'Unmarked'} (Click to change status)`}
                            >
                              {isUnmarked ? (
                                <div className="space-y-0.5 text-center py-1">
                                  <span className="text-[10px] font-bold text-slate-300 dark:text-slate-600 block">--</span>
                                </div>
                              ) : isAbsent ? (
                                <div className="space-y-0.5">
                                  <span className="text-[9px] font-black text-rose-600 block">A</span>
                                  <span className="text-[7px] text-slate-400 block font-mono">Absent</span>
                                </div>
                              ) : isLeave ? (
                                <div className="space-y-0.5">
                                  <span className="text-[9px] font-black text-purple-600 block">L</span>
                                  <span className="text-[7px] text-purple-400 block font-mono">Leave</span>
                                </div>
                              ) : (
                                <div className="space-y-0.5 leading-none">
                                  {record?.inTime && record?.inTime !== '--:--' && (
                                    <span className={`text-[8px] font-mono font-bold block ${
                                      isHalfDay
                                        ? 'text-rose-500 font-semibold'
                                        : isLate
                                        ? 'text-amber-700 dark:text-amber-400'
                                        : 'text-emerald-700 dark:text-emerald-400'
                                    }`}>
                                      {record?.conciseIn}
                                    </span>
                                  )}
                                  <span className={`inline-block px-1 rounded text-[7px] font-black ${
                                    isLate
                                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300'
                                      : isHalfDay
                                      ? 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/60 dark:text-cyan-300'
                                      : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300'
                                  }`}>
                                    {isLate ? 'L' : isHalfDay ? 'HD' : 'P'}
                                  </span>
                                </div>
                              )}
                            </td>
                          );
                        })}

                        {/* Summary Columns */}
                        <td className="p-1 font-mono font-black text-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/30 border-l-2 border-r border-slate-300">
                          {sum.presentCount}
                        </td>
                        <td className="p-1 font-mono font-bold text-amber-600 bg-amber-50/50 dark:bg-amber-950/30 border-r border-slate-300">
                          {sum.lateCount}
                        </td>
                        <td className="p-1 font-mono font-bold text-cyan-600 bg-cyan-50/50 dark:bg-cyan-950/30 border-r border-slate-300">
                          {sum.halfDayCount}
                        </td>
                        <td className="p-1 font-mono font-black text-rose-600 bg-rose-50/50 dark:bg-rose-950/30 border-r border-slate-300">
                          {sum.absentCount}
                        </td>
                        <td className="p-1 font-mono text-[9px] font-bold text-purple-700 bg-purple-50/50 dark:bg-purple-950/30 border-r border-slate-300 whitespace-nowrap">
                          {sum.totalHours}
                        </td>
                        <td className="p-1 font-mono font-black text-indigo-700 bg-indigo-50/50 dark:bg-indigo-950/30">
                          {sum.payableDays}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Printable Legend & Signature Footer */}
            <div className="pt-4 mt-4 border-t border-slate-300 dark:border-slate-700 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] text-slate-600 dark:text-slate-400 font-semibold">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-800 dark:text-slate-200 uppercase">Legend:</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span> [P] Present</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-600 inline-block"></span> [L] Late Arrival</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-600 inline-block"></span> [HD] Half Day (Morning Missed)</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-600 inline-block"></span> [OD] Official Duty</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-600 inline-block"></span> [A] Absent</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-400 inline-block"></span> [WO] Sunday Off</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-600 inline-block"></span> [H] Holiday</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-300 inline-block"></span> [NA] Inactive / Out of Tenure</span>
                </div>
                <div>
                  Verified by Biometric Machine: <strong>Secureye S-FB3K</strong> (Shift: 08:00 AM - 02:00 PM)
                </div>
              </div>

              {/* Official Signatures Row */}
              <div className="grid grid-cols-3 gap-6 pt-8 text-center text-xs font-bold text-slate-800 dark:text-slate-200">
                <div className="border-t border-dashed border-slate-400 pt-2">
                  <p>Prepared by</p>
                  <p className="text-[10px] text-slate-500 font-normal">Attendance Clerk / Accountant</p>
                </div>
                <div className="border-t border-dashed border-slate-400 pt-2">
                  <p>Verified by</p>
                  <p className="text-[10px] text-slate-500 font-normal">HR & Academic Incharge</p>
                </div>
                <div className="border-t border-dashed border-slate-400 pt-2">
                  <p>Principal / Manager</p>
                  <p className="text-[10px] text-slate-500 font-normal">Sign & School Seal</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📊 KPI Stats Bar (For Student and Daily Staff Tabs) */}
      {/* ========================================================================= */}
      {activeTab === 'student' && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 no-print">
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
      )}

      {activeTab === 'staff' && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 no-print">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Present Faculty</span>
            <p className="text-2xl font-black text-emerald-600 mt-1">{staffPresent} Teachers</p>
            <span className="text-[10px] text-emerald-600 font-semibold">On-Time Arrival</span>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Late Punches</span>
            <p className="text-2xl font-black text-amber-600 mt-1">{staffLate} Teachers</p>
            <span className="text-[10px] text-amber-600 font-semibold">After 07:45 AM</span>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Absent / No-Punch</span>
            <p className="text-2xl font-black text-rose-600 mt-1">{staffAbsent} Staff</p>
            <span className="text-[10px] text-rose-600 font-semibold">2X Penalty Triggered</span>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Staff Attendance</span>
            <p className="text-2xl font-black text-indigo-600 mt-1">{staffPercentage}%</p>
            <span className="text-[10px] text-emerald-600 font-bold">Biometric Verified</span>
          </div>
        </div>
      )}

      {/* 🎛️ Filter and Bulk Action Controls (For Daily Student and Daily Staff Tabs) */}
      {activeTab !== 'staff-monthly-matrix' && (
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-4 no-print">
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

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 mr-2">Quick Action:</span>
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
      )}

      {/* ========================================================================= */}
      {/* 📋 TAB 1: DAILY STUDENT ATTENDANCE REGISTER TABLE */}
      {/* ========================================================================= */}
      {activeTab === 'student' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden no-print">
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
                              type="button"
                              onClick={() => handleStudentStatusChange(rec.studentId, st)}
                              className={`px-3 py-1 rounded-xl text-xs transition-all ${
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
                        value={rec.remarks}
                        onChange={(e) => {
                          const val = e.target.value;
                          setStudentRecords(prev => prev.map(r => r.studentId === rec.studentId ? { ...r, remarks: val } : r));
                        }}
                        placeholder="Remark..."
                        className="w-full text-xs p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📋 TAB 2: DAILY STAFF ATTENDANCE WITH LIVE BIOMETRIC PUNCH LOGS */}
      {/* ========================================================================= */}
      {activeTab === 'staff' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden no-print">
          
          {/* Active Shift Timings Info Bar */}
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
                <tr className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black border-b border-slate-200 dark:border-slate-800 text-[11px] uppercase">
                  <th className="p-3.5">Emp ID</th>
                  <th className="p-3.5">Staff Name</th>
                  <th className="p-3.5">Designation</th>
                  <th className="p-3.5 font-mono">In Time (Arrival)</th>
                  <th className="p-3.5 font-mono">Out Time (Departure)</th>
                  <th className="p-3.5 font-mono">Work Duration</th>
                  <th className="p-3.5 text-center">Attendance Status</th>
                  <th className="p-3.5">Salary Impact</th>
                  <th className="p-3.5">Biometric Machine / Remark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredStaffRecords.map(rec => {
                  return (
                    <tr key={rec.staffId} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="p-3.5 font-mono font-bold text-slate-500">{rec.employeeId}</td>
                      <td className="p-3.5 font-bold text-slate-900 dark:text-white">{rec.name}</td>
                      <td className="p-3.5 text-slate-600 dark:text-slate-400 font-semibold">{rec.designation}</td>
                      
                      {/* Biometric In-Time */}
                      <td className="p-3.5">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-emerald-600" />
                          <input
                            type="text"
                            value={rec.inTime}
                            onChange={(e) => handleStaffTimeChange(rec.staffId, 'inTime', e.target.value)}
                            className="font-mono font-black text-slate-800 dark:text-slate-200 bg-emerald-50/60 dark:bg-emerald-950/40 px-2 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800 text-xs w-28"
                          />
                        </div>
                      </td>

                      {/* Biometric Out-Time */}
                      <td className="p-3.5">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-blue-600" />
                          <input
                            type="text"
                            value={rec.outTime}
                            onChange={(e) => handleStaffTimeChange(rec.staffId, 'outTime', e.target.value)}
                            className="font-mono font-black text-slate-800 dark:text-slate-200 bg-blue-50/60 dark:bg-blue-950/40 px-2 py-1 rounded-lg border border-blue-200 dark:border-blue-800 text-xs w-28"
                          />
                        </div>
                      </td>

                      {/* Duration */}
                      <td className="p-3.5 font-mono font-bold text-purple-700 dark:text-purple-300">
                        {rec.workDuration}
                      </td>

                      {/* Status Buttons */}
                      <td className="p-3.5">
                        <div className="flex items-center justify-center gap-1">
                          {['Present', 'Late', 'Half-Day', 'Leave', 'Absent'].map(st => {
                            const isSelected = rec.status === st;
                            return (
                              <button
                                key={st}
                                type="button"
                                onClick={() => handleStaffStatusChange(rec.staffId, st)}
                                className={`px-2 py-1 rounded-lg text-[10px] transition-all font-bold ${
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
        <div className="p-6 rounded-3xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 space-y-3 no-print">
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

      {/* ========================================================================= */}
      {/* 📝 TAB 4: EXAM HALL ATTENDANCE & BOOKLET REGISTER */}
      {/* ========================================================================= */}
      {activeTab === 'exam' && (
        <div className="space-y-6">
          {/* Exam Filters & Actions Bar */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 no-print">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {/* Exam Term */}
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Exam Assessment Term</label>
                  <select
                    value={selectedExamTerm}
                    onChange={(e) => setSelectedExamTerm(e.target.value)}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-black text-indigo-700 dark:text-indigo-300"
                  >
                    <option value="Pre-Midterm Examination (Session 2026-27)">Pre-Midterm Examination (Session 2026-27)</option>
                    <option value="Mid-Term Examination (Half Yearly)">Mid-Term Examination (Half Yearly)</option>
                    <option value="Post-Midterm Assessment">Post-Midterm Assessment</option>
                    <option value="Annual Board / Final Exam 2027">Annual Board / Final Exam 2027</option>
                  </select>
                </div>

                {/* Class */}
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Class</label>
                  <select
                    value={selectedExamClass}
                    onChange={(e) => setSelectedExamClass(e.target.value)}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold"
                  >
                    <option value="All">All Classes</option>
                    {classesList.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Subject / Question Paper</label>
                  <select
                    value={selectedExamSubject}
                    onChange={(e) => setSelectedExamSubject(e.target.value)}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold"
                  >
                    <option value="Mathematics (Standard)">📐 Mathematics (Standard)</option>
                    <option value="Science & Practical">🔬 Science & Practical</option>
                    <option value="Social Science">🌍 Social Science</option>
                    <option value="Hindi Course-A">📖 Hindi Course-A</option>
                    <option value="English Language & Literature">📚 English Language & Literature</option>
                    <option value="Computer Applications / IT">💻 Computer Applications / IT</option>
                  </select>
                </div>

                {/* Room / Hall */}
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Examination Hall / Room</label>
                  <select
                    value={selectedExamRoom}
                    onChange={(e) => setSelectedExamRoom(e.target.value)}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold"
                  >
                    <option value="Hall 1 - Senior Wing (Room 101)">Hall 1 - Senior Wing (Room 101)</option>
                    <option value="Hall 2 - Junior Wing (Room 102)">Hall 2 - Junior Wing (Room 102)</option>
                    <option value="Hall 3 - Library Hall">Hall 3 - Library Hall</option>
                    <option value="Main Auditorium Wing">Main Auditorium Wing</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => handleMarkAllExam('Present')}
                  className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all"
                >
                  <CheckCircle2 className="w-4 h-4" /> Mark All Present
                </button>

                <button
                  onClick={handleSaveExamAttendance}
                  className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-sm flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all"
                >
                  <Save className="w-4 h-4" /> Save Exam Register
                </button>

                <button
                  onClick={() => setIsPrintExamModalOpen(true)}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all"
                >
                  <Printer className="w-4 h-4" /> 🖨️ Print Signature Chart
                </button>
              </div>
            </div>

            {/* KPI Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/40 space-y-0.5">
                <span className="text-[10px] font-bold uppercase text-blue-700 dark:text-blue-400">Total Examinees</span>
                <p className="text-xl font-black text-slate-900 dark:text-white font-mono">{filteredExamRecords.length} Candidates</p>
                <span className="text-[10px] text-blue-600">Seating Allotted</span>
              </div>

              <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/40 space-y-0.5">
                <span className="text-[10px] font-bold uppercase text-emerald-700 dark:text-emerald-400">Present Candidates</span>
                <p className="text-xl font-black text-emerald-600 font-mono">{examPresentCount} Present</p>
                <span className="text-[10px] text-emerald-600 font-medium">Answer Sheets Issued</span>
              </div>

              <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/40 space-y-0.5">
                <span className="text-[10px] font-bold uppercase text-rose-700 dark:text-rose-400">Absent / Not Reported</span>
                <p className="text-xl font-black text-rose-600 font-mono">{examAbsentCount} Absent</p>
                <span className="text-[10px] text-rose-600 font-medium">Uncollected Papers</span>
              </div>

              <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/40 space-y-0.5">
                <span className="text-[10px] font-bold uppercase text-purple-700 dark:text-purple-400">Room Invigilator</span>
                <p className="text-sm font-black text-purple-700 dark:text-purple-300 truncate">Sh. Devendra Singh</p>
                <span className="text-[10px] text-purple-600">Verified & Sealed</span>
              </div>
            </div>
          </div>

          {/* Exam Table */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden no-print">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black border-b border-slate-200 dark:border-slate-800 text-[11px] uppercase">
                    <th className="p-3.5">Roll No</th>
                    <th className="p-3.5">Admit Card No</th>
                    <th className="p-3.5">Candidate Name</th>
                    <th className="p-3.5">Class</th>
                    <th className="p-3.5 font-mono">Main Answer Booklet No</th>
                    <th className="p-3.5 font-mono">Supplements</th>
                    <th className="p-3.5 text-center">Exam Attendance</th>
                    <th className="p-3.5">Candidate Signature</th>
                    <th className="p-3.5">Invigilator Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filteredExamRecords.map(rec => {
                    const isPresent = rec.status === 'Present';
                    return (
                      <tr key={rec.studentId} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-3.5 font-mono font-bold text-indigo-600">#{rec.rollNo}</td>
                        <td className="p-3.5 font-mono font-bold text-slate-600 dark:text-slate-300">{rec.admitCardNo}</td>
                        <td className="p-3.5 font-bold text-slate-900 dark:text-white">{rec.name}</td>
                        <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-400">{rec.class}</td>
                        
                        <td className="p-3.5">
                          <input
                            type="text"
                            value={rec.bookletNo}
                            onChange={(e) => handleExamBookletChange(rec.studentId, 'bookletNo', e.target.value)}
                            className="font-mono font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-xs w-32"
                          />
                        </td>

                        <td className="p-3.5">
                          <input
                            type="number"
                            min="0"
                            max="5"
                            value={rec.supplements}
                            onChange={(e) => handleExamBookletChange(rec.studentId, 'supplements', Number(e.target.value))}
                            className="font-mono font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-xs w-16 text-center"
                          />
                        </td>

                        <td className="p-3.5 text-center">
                          <div className="flex items-center justify-center gap-1">
                            {['Present', 'Absent', 'Late', 'UMC'].map(st => {
                              const isSelected = rec.status === st;
                              return (
                                <button
                                  key={st}
                                  type="button"
                                  onClick={() => handleExamStatusChange(rec.studentId, st)}
                                  className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all ${
                                    isSelected
                                      ? st === 'Present' ? 'bg-emerald-600 text-white'
                                      : st === 'Absent' ? 'bg-rose-600 text-white'
                                      : st === 'Late' ? 'bg-amber-600 text-white'
                                      : 'bg-purple-600 text-white'
                                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                                  }`}
                                >
                                  {st}
                                </button>
                              );
                            })}
                          </div>
                        </td>

                        <td className="p-3.5">
                          {isPresent ? (
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200">
                              ✍️ Signed in Hall
                            </span>
                          ) : (
                            <span className="text-[10px] font-bold text-rose-600 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded-md border border-rose-200">
                              ❌ Absent
                            </span>
                          )}
                        </td>

                        <td className="p-3.5">
                          <input
                            type="text"
                            value={rec.remarks}
                            onChange={(e) => handleExamBookletChange(rec.studentId, 'remarks', e.target.value)}
                            placeholder="Invigilator remark..."
                            className="w-full text-xs p-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Exam Signature Modal */}
          {isPrintExamModalOpen && (
            <Modal
              isOpen={isPrintExamModalOpen}
              onClose={() => setIsPrintExamModalOpen(false)}
              title="🖨️ Official Exam Hall Signature Register (हस्ताक्षर सूची)"
              maxWidth="max-w-4xl"
            >
              <div className="space-y-4 text-xs">
                <div className="border-2 border-slate-900 dark:border-slate-100 p-6 rounded-2xl bg-white text-slate-900 space-y-4">
                  {/* Header */}
                  <div className="text-center border-b-2 border-slate-900 pb-3">
                    <h2 className="text-xl font-black uppercase tracking-wide">
                      DADHEECH MEMORIAL PUBLIC SCHOOL, JARGAWAN
                    </h2>
                    <p className="text-xs font-bold text-slate-600">
                      CBSE Affiliated Senior Secondary Examination Centre • Jargwan (Bulandshahr)
                    </p>
                    <div className="mt-2 inline-block px-4 py-1 bg-slate-900 text-white rounded-md text-xs font-black uppercase tracking-wider">
                      📝 {selectedExamTerm} — EXAM ATTENDANCE & SIGNATURE CHART
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-bold bg-slate-100 p-3 rounded-xl">
                    <div>Subject: <span className="text-blue-700 font-mono">{selectedExamSubject}</span></div>
                    <div>Class: <span className="font-mono">{selectedExamClass}</span></div>
                    <div>Room: <span className="font-mono">{selectedExamRoom}</span></div>
                    <div>Date: <span className="font-mono">{examDate}</span></div>
                  </div>

                  {/* Candidate list */}
                  <div className="border border-slate-300 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-slate-200 text-slate-800 font-black uppercase text-[10px]">
                        <tr>
                          <th className="p-2 border-r border-slate-300">Roll No</th>
                          <th className="p-2 border-r border-slate-300">Candidate Name</th>
                          <th className="p-2 border-r border-slate-300">Admit Card No</th>
                          <th className="p-2 border-r border-slate-300">Booklet Serial</th>
                          <th className="p-2 border-r border-slate-300 text-center">Status</th>
                          <th className="p-2 text-center min-w-[140px]">Candidate Signature</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {filteredExamRecords.map(rec => (
                          <tr key={rec.studentId}>
                            <td className="p-2 font-mono font-bold border-r border-slate-200">#{rec.rollNo}</td>
                            <td className="p-2 font-bold border-r border-slate-200">{rec.name}</td>
                            <td className="p-2 font-mono border-r border-slate-200">{rec.admitCardNo}</td>
                            <td className="p-2 font-mono font-bold border-r border-slate-200">{rec.bookletNo}</td>
                            <td className="p-2 text-center border-r border-slate-200 font-bold">
                              {rec.status === 'Present' ? 'P' : rec.status === 'Absent' ? 'AB' : rec.status}
                            </td>
                            <td className="p-2 text-center">
                              {rec.status === 'Present' ? (
                                <span className="text-[10px] italic font-serif text-slate-500">[ Signature Recorded ]</span>
                              ) : (
                                <span className="text-[10px] font-bold text-rose-600">ABSENT</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Signatures */}
                  <div className="grid grid-cols-3 gap-6 pt-6 text-center text-xs font-bold border-t border-slate-300 mt-4">
                    <div>
                      <div className="border-t border-dashed border-slate-400 pt-1">Room Invigilator 1 (Sign)</div>
                      <p className="text-[10px] text-slate-500 font-normal">Sh. Devendra Singh</p>
                    </div>
                    <div>
                      <div className="border-t border-dashed border-slate-400 pt-1">Room Invigilator 2 (Sign)</div>
                      <p className="text-[10px] text-slate-500 font-normal">Mrs. Sunita Verma</p>
                    </div>
                    <div>
                      <div className="border-t border-dashed border-slate-400 pt-1">Centre Superintendent / Seal</div>
                      <p className="text-[10px] text-slate-500 font-normal">Principal, DMPS</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 print:hidden">
                  <button
                    type="button"
                    onClick={() => setIsPrintExamModalOpen(false)}
                    className="px-4 py-2 rounded-xl font-bold text-slate-500 hover:bg-slate-100"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-6 py-2.5 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md flex items-center gap-2"
                  >
                    <Printer className="w-4 h-4" /> Print Official Signature Chart
                  </button>
                </div>
              </div>
            </Modal>
          )}
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
