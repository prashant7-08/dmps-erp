import React, { useState, useMemo } from 'react';
import {
  FileCheck2,
  Plus,
  CheckCircle2,
  XCircle,
  Clock,
  User,
  Calendar,
  Search,
  Filter,
  Users,
  GraduationCap,
  FileText,
  AlertCircle,
  Check,
  Building,
  UserCheck
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const LeaveManagementPage = () => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState('student'); // 'student' or 'staff'
  const [leaveRequests, setLeaveRequests] = useState(() => schoolService.getLeaveRequests() || []);
  const [isAddStudentLeaveModalOpen, setIsAddStudentLeaveModalOpen] = useState(false);
  const [isAddStaffLeaveModalOpen, setIsAddStaffLeaveModalOpen] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [classFilter, setClassFilter] = useState('ALL');

  const students = schoolService.getStudents() || [];
  const classes = schoolService.getClasses() || [];
  const teachers = schoolService.getTeachers() || [];

  // 📝 Student Offline Physical Leave Entry Form
  const [studentLeaveForm, setStudentLeaveForm] = useState({
    class: classes[0]?.name || 'Class 10-A',
    studentId: '',
    studentName: '',
    rollNo: '',
    leaveType: 'Medical / Illness Leave',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
    days: 1,
    applicationRef: '',
    reason: '',
    status: 'Approved',
    teacherRemarks: 'Physical application verified and recorded by Class Teacher.'
  });

  // 📝 Staff Leave Entry Form
  const [staffLeaveForm, setStaffLeaveForm] = useState({
    staffId: teachers[0]?.id || 'TCH-1004',
    staffName: teachers[0]?.name || 'POORAN SINGH',
    department: teachers[0]?.department || 'Secondary',
    role: teachers[0]?.designation || 'Teacher',
    leaveType: 'Casual Leave (CL)',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
    days: 1,
    reason: '',
    status: 'Approved'
  });

  const refreshLeaves = () => {
    setLeaveRequests([...schoolService.getLeaveRequests()]);
  };

  const handleStatusUpdate = (id, status, remarks = '') => {
    schoolService.updateLeaveStatus(id, status, 'Class Teacher / Principal');
    refreshLeaves();
    showToast(`Leave application marked as ${status}!`, status === 'Approved' ? 'success' : 'info');
  };

  // Filtered Students for selected class
  const classStudents = useMemo(() => {
    if (!studentLeaveForm.class) return students;
    return students.filter(s => s.class === studentLeaveForm.class);
  }, [students, studentLeaveForm.class]);

  // Handle Class Change in Student Leave Form
  const handleFormClassChange = (selectedClass) => {
    const matched = students.filter(s => s.class === selectedClass);
    const firstStu = matched[0] || null;
    setStudentLeaveForm({
      ...studentLeaveForm,
      class: selectedClass,
      studentId: firstStu ? firstStu.id : '',
      studentName: firstStu ? firstStu.name : '',
      rollNo: firstStu ? firstStu.rollNo : ''
    });
  };

  // Handle Student Select Change
  const handleStudentSelectChange = (stuId) => {
    const stu = students.find(s => s.id === stuId);
    if (stu) {
      setStudentLeaveForm({
        ...studentLeaveForm,
        studentId: stu.id,
        studentName: stu.name,
        rollNo: stu.rollNo
      });
    }
  };

  // Submit Student Physical Leave Application
  const handleCreateStudentLeave = (e) => {
    e.preventDefault();
    const newLeave = {
      applicantType: 'Student',
      studentId: studentLeaveForm.studentId,
      applicantName: studentLeaveForm.studentName || 'Student',
      class: studentLeaveForm.class,
      rollNo: studentLeaveForm.rollNo,
      leaveType: studentLeaveForm.leaveType,
      startDate: studentLeaveForm.startDate,
      endDate: studentLeaveForm.endDate,
      days: Number(studentLeaveForm.days) || 1,
      reason: studentLeaveForm.reason,
      applicationRef: studentLeaveForm.applicationRef || `APP-${Date.now().toString().slice(-4)}`,
      status: studentLeaveForm.status,
      teacherRemarks: studentLeaveForm.teacherRemarks,
      submittedDate: new Date().toISOString().split('T')[0],
      enteredBy: 'Class Teacher'
    };

    schoolService.addLeaveRequest(newLeave);
    refreshLeaves();
    setIsAddStudentLeaveModalOpen(false);
    showToast(`Physical leave for ${newLeave.applicantName} recorded and ${newLeave.status.toLowerCase()}! 📋`, 'success');
  };

  // Submit Staff Leave
  const handleCreateStaffLeave = (e) => {
    e.preventDefault();
    const newLeave = {
      applicantType: 'Staff',
      staffId: staffLeaveForm.staffId,
      applicantName: staffLeaveForm.staffName,
      class: `${staffLeaveForm.department} (${staffLeaveForm.role})`,
      leaveType: staffLeaveForm.leaveType,
      startDate: staffLeaveForm.startDate,
      endDate: staffLeaveForm.endDate,
      days: Number(staffLeaveForm.days) || 1,
      reason: staffLeaveForm.reason,
      status: staffLeaveForm.status,
      submittedDate: new Date().toISOString().split('T')[0],
      enteredBy: 'Staff / Admin'
    };

    schoolService.addLeaveRequest(newLeave);
    refreshLeaves();
    setIsAddStaffLeaveModalOpen(false);
    showToast(`Staff leave request for ${newLeave.applicantName} recorded!`, 'success');
  };

  // Filtered lists
  const studentLeaves = useMemo(() => {
    return leaveRequests
      .filter(l => l.applicantType === 'Student' || !l.applicantType)
      .filter(l => {
        const matchesQuery = !searchQuery || 
          l.applicantName?.toLowerCase().includes(searchQuery.toLowerCase()) || 
          l.class?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          l.reason?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'ALL' || l.status === statusFilter;
        const matchesClass = classFilter === 'ALL' || l.class === classFilter;
        return matchesQuery && matchesStatus && matchesClass;
      });
  }, [leaveRequests, searchQuery, statusFilter, classFilter]);

  const staffLeaves = useMemo(() => {
    return leaveRequests
      .filter(l => l.applicantType === 'Staff')
      .filter(l => {
        const matchesQuery = !searchQuery || 
          l.applicantName?.toLowerCase().includes(searchQuery.toLowerCase()) || 
          l.reason?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'ALL' || l.status === statusFilter;
        return matchesQuery && matchesStatus;
      });
  }, [leaveRequests, searchQuery, statusFilter]);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* 🏛️ Page Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm shrink-0">
            <FileCheck2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-200 border border-indigo-300">
                Attendance & Leave Desk
              </span>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-serif">
                Leave Management & Verification Desk
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Physical paper student applications recorded by Class Teachers & staff leave approval portal.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {activeTab === 'student' ? (
            <button
              onClick={() => {
                if (classes.length > 0 && students.length > 0) {
                  const defaultClass = classes[0].name;
                  const matchedStu = students.filter(s => s.class === defaultClass)[0];
                  setStudentLeaveForm({
                    ...studentLeaveForm,
                    class: defaultClass,
                    studentId: matchedStu?.id || '',
                    studentName: matchedStu?.name || '',
                    rollNo: matchedStu?.rollNo || ''
                  });
                }
                setIsAddStudentLeaveModalOpen(true);
              }}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Record Offline Student Application</span>
            </button>
          ) : (
            <button
              onClick={() => setIsAddStaffLeaveModalOpen(true)}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Apply Staff Leave</span>
            </button>
          )}
        </div>
      </div>

      {/* 🧭 Tabs: Student Offline Applications vs Staff Leaves */}
      <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-2">
        <button
          onClick={() => { setActiveTab('student'); setSearchQuery(''); }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-black transition-all cursor-pointer ${
            activeTab === 'student'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
              : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Student Offline Applications ({leaveRequests.filter(l => l.applicantType === 'Student' || !l.applicantType).length})</span>
        </button>

        <button
          onClick={() => { setActiveTab('staff'); setSearchQuery(''); }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-black transition-all cursor-pointer ${
            activeTab === 'staff'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
              : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Staff & Faculty Leaves ({leaveRequests.filter(l => l.applicantType === 'Staff').length})</span>
        </button>
      </div>

      {/* 🔍 Search & Filters Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 flex-1 min-w-[240px]">
          <div className="relative w-full max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={activeTab === 'student' ? "Search student name, class, reason..." : "Search staff name, reason..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {activeTab === 'student' && (
            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold text-slate-800 dark:text-slate-200"
            >
              <option value="ALL">All Classes</option>
              {classes.map(c => (
                <option key={c.id} value={c.name}>{c.name}</option>
              ))}
            </select>
          )}

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold text-slate-800 dark:text-slate-200"
          >
            <option value="ALL">All Statuses</option>
            <option value="Approved">🟢 Approved (स्वीकृत)</option>
            <option value="Rejected">🔴 Rejected (अस्वीकृत)</option>
            <option value="Pending">⏳ Pending Review</option>
          </select>
        </div>
      </div>

      {/* 📋 TAB 1: STUDENT OFFLINE APPLICATIONS TABLE */}
      {activeTab === 'student' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                Offline Student Leave Register (Entered by Class Teachers)
              </span>
              <span className="px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-200 text-[10px] font-bold">
                {studentLeaves.length} Records
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              ℹ️ Students/Parents submit paper slips in school; teachers log them here with Approved/Rejected status.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px] border-b border-slate-200 dark:border-slate-700">
                  <th className="p-3.5">Student & Class</th>
                  <th className="p-3.5">Leave Reason & Slip Ref</th>
                  <th className="p-3.5">Absence Dates</th>
                  <th className="p-3.5">Verification Status</th>
                  <th className="p-3.5">Teacher / Principal Remarks</th>
                  <th className="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {studentLeaves.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-slate-400">
                      No student leave applications recorded matching current filters. Click <strong>"Record Offline Student Application"</strong> above to enter a paper application.
                    </td>
                  </tr>
                ) : (
                  studentLeaves.map(lve => (
                    <tr key={lve.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3.5">
                        <p className="font-bold text-slate-900 dark:text-white text-xs">{lve.applicantName}</p>
                        <span className="text-[10px] font-mono text-slate-500 font-semibold">
                          {lve.class} {lve.rollNo ? `(Roll #${lve.rollNo})` : ''}
                        </span>
                      </td>
                      <td className="p-3.5">
                        <p className="font-bold text-slate-800 dark:text-slate-200">{lve.leaveType}</p>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 line-clamp-2">{lve.reason}</p>
                        {lve.applicationRef && (
                          <span className="text-[9.5px] font-mono text-indigo-600 dark:text-indigo-400 font-bold block mt-0.5">
                            Slip Ref: {lve.applicationRef}
                          </span>
                        )}
                      </td>
                      <td className="p-3.5">
                        <div className="font-mono font-bold text-slate-900 dark:text-white text-[11px]">
                          {lve.startDate} to {lve.endDate}
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium">({lve.days} Day{lve.days > 1 ? 's' : ''})</div>
                      </td>
                      <td className="p-3.5">
                        {lve.status === 'Approved' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold text-[10px]">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> 🟢 Approved (स्वीकृत)
                          </span>
                        ) : lve.status === 'Rejected' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-bold text-[10px]">
                            <XCircle className="w-3 h-3 text-rose-600" /> 🔴 Rejected (अस्वीकृत)
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-bold text-[10px]">
                            <Clock className="w-3 h-3 text-amber-600" /> ⏳ Pending Review
                          </span>
                        )}
                      </td>
                      <td className="p-3.5 text-[11px] text-slate-600 dark:text-slate-300 max-w-xs leading-relaxed">
                        {lve.teacherRemarks || lve.remarks || 'Recorded in school attendance ledger.'}
                      </td>
                      <td className="p-3.5 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {lve.status !== 'Approved' && (
                            <button
                              onClick={() => handleStatusUpdate(lve.id, 'Approved')}
                              className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-[10px] flex items-center gap-1 shadow-xs cursor-pointer"
                              title="Mark Leave as Approved"
                            >
                              <Check className="w-3 h-3" /> Approve
                            </button>
                          )}
                          {lve.status !== 'Rejected' && (
                            <button
                              onClick={() => handleStatusUpdate(lve.id, 'Rejected')}
                              className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold text-[10px] flex items-center gap-1 shadow-xs cursor-pointer"
                              title="Mark Leave as Rejected"
                            >
                              <XCircle className="w-3 h-3" /> Reject
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 📋 TAB 2: STAFF LEAVE MANAGEMENT TABLE */}
      {activeTab === 'staff' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                Faculty & Staff Leave Requests & Approvals
              </span>
              <span className="px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-900 dark:text-purple-200 text-[10px] font-bold">
                {staffLeaves.length} Records
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              Official employee leaves (Casual Leave, Medical Leave, Academic Duty Leave).
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px] border-b border-slate-200 dark:border-slate-700">
                  <th className="p-3.5">Staff Member & Role</th>
                  <th className="p-3.5">Leave Category</th>
                  <th className="p-3.5">Dates & Duration</th>
                  <th className="p-3.5">Reason for Leave</th>
                  <th className="p-3.5">Approval Status</th>
                  <th className="p-3.5 text-right">Approval Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {staffLeaves.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-slate-400">
                      No staff leave records found. Click <strong>"Apply Staff Leave"</strong> above to add one.
                    </td>
                  </tr>
                ) : (
                  staffLeaves.map(lve => (
                    <tr key={lve.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3.5">
                        <p className="font-bold text-slate-900 dark:text-white text-xs">{lve.applicantName}</p>
                        <span className="text-[10px] text-slate-500">{lve.class || 'Teaching Faculty'}</span>
                      </td>
                      <td className="p-3.5">
                        <Badge variant="purple">{lve.leaveType}</Badge>
                      </td>
                      <td className="p-3.5">
                        <div className="font-mono font-bold text-slate-900 dark:text-white text-[11px]">
                          {lve.startDate} to {lve.endDate}
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium">({lve.days} Day{lve.days > 1 ? 's' : ''})</div>
                      </td>
                      <td className="p-3.5 text-slate-600 dark:text-slate-300 max-w-xs leading-relaxed">
                        {lve.reason}
                      </td>
                      <td className="p-3.5">
                        <Badge variant={lve.status === 'Approved' ? 'success' : lve.status === 'Rejected' ? 'danger' : 'warning'}>
                          {lve.status}
                        </Badge>
                      </td>
                      <td className="p-3.5 text-right">
                        {lve.status === 'Pending' ? (
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleStatusUpdate(lve.id, 'Approved')}
                              className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center gap-1 shadow-sm cursor-pointer"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" /> Approve
                            </button>
                            <button
                              onClick={() => handleStatusUpdate(lve.id, 'Rejected')}
                              className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold text-xs flex items-center gap-1 shadow-sm cursor-pointer"
                            >
                              <XCircle className="w-3.5 h-3.5" /> Reject
                            </button>
                          </div>
                        ) : (
                          <span className="text-[11px] font-semibold text-slate-400">
                            Processed by {lve.approvedBy || "Principal"}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 📝 MODAL: RECORD OFFLINE STUDENT LEAVE APPLICATION */}
      <Modal
        isOpen={isAddStudentLeaveModalOpen}
        onClose={() => setIsAddStudentLeaveModalOpen(false)}
        title="Record Physical Student Leave Application (ऑफलाइन आवेदन दर्ज करें)"
        maxWidth="max-w-2xl"
      >
        <form onSubmit={handleCreateStudentLeave} className="space-y-4 text-xs">
          <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 rounded-xl text-indigo-950 dark:text-indigo-200">
            <p className="font-semibold text-[11px]">
              📋 <strong>Class Teacher Verification:</strong> Select the student from the physical leave application submitted by parents. Mark it Approved or Rejected with notes so it syncs with student records.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Class & Section *</label>
              <select
                value={studentLeaveForm.class}
                onChange={(e) => handleFormClassChange(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold text-slate-900 dark:text-white"
              >
                {classes.map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select Student *</label>
              <select
                required
                value={studentLeaveForm.studentId}
                onChange={(e) => handleStudentSelectChange(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold text-slate-900 dark:text-white"
              >
                <option value="">-- Choose Student ({classStudents.length} enrolled) --</option>
                {classStudents.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.name} (Roll #{s.rollNo} • Adm #{s.admissionNo})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Leave Category</label>
              <select
                value={studentLeaveForm.leaveType}
                onChange={(e) => setStudentLeaveForm({ ...studentLeaveForm, leaveType: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="Medical / Illness Leave">Medical / Illness Leave (बीमारी अवकाश)</option>
                <option value="Family Function / Wedding">Family Function / Wedding (पारिवारिक कार्य)</option>
                <option value="Urgent Domestic Work">Urgent Domestic Work (अति-आवश्यक कार्य)</option>
                <option value="Out of Town / Village Visit">Out of Town / Village Visit (गाँव यात्रा)</option>
                <option value="Special Circumstances">Special Circumstances (विशेष कारण)</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Physical Application Ref / Receipt No.</label>
              <input
                type="text"
                placeholder="e.g. SLIP-2026-089"
                value={studentLeaveForm.applicationRef}
                onChange={(e) => setStudentLeaveForm({ ...studentLeaveForm, applicationRef: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Leave From Date *</label>
              <input
                type="date"
                required
                value={studentLeaveForm.startDate}
                onChange={(e) => setStudentLeaveForm({ ...studentLeaveForm, startDate: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Leave To Date *</label>
              <input
                type="date"
                required
                value={studentLeaveForm.endDate}
                onChange={(e) => setStudentLeaveForm({ ...studentLeaveForm, endDate: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Total Duration (Days) *</label>
              <input
                type="number"
                min="1"
                required
                value={studentLeaveForm.days}
                onChange={(e) => setStudentLeaveForm({ ...studentLeaveForm, days: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Verification Status *</label>
              <select
                value={studentLeaveForm.status}
                onChange={(e) => setStudentLeaveForm({ ...studentLeaveForm, status: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold text-slate-900 dark:text-white"
              >
                <option value="Approved">🟢 Approved (स्वीकृत करें)</option>
                <option value="Rejected">🔴 Rejected (अस्वीकृत करें)</option>
                <option value="Pending">⏳ Pending Review</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Reason Stated on Paper Application *</label>
            <textarea
              rows={2}
              required
              placeholder="e.g. Student has severe fever and doctor advised 3 days bed rest."
              value={studentLeaveForm.reason}
              onChange={(e) => setStudentLeaveForm({ ...studentLeaveForm, reason: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Class Teacher Remarks / Note for Student & Parent</label>
            <input
              type="text"
              placeholder="e.g. Leave granted with medical advice."
              value={studentLeaveForm.teacherRemarks}
              onChange={(e) => setStudentLeaveForm({ ...studentLeaveForm, teacherRemarks: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div className="flex justify-end gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsAddStudentLeaveModalOpen(false)}
              className="px-4 py-2 text-slate-500 font-bold hover:text-slate-700 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
            >
              <CheckCircle2 className="w-4 h-4" /> Save Leave Record
            </button>
          </div>
        </form>
      </Modal>

      {/* 📝 MODAL: APPLY STAFF LEAVE */}
      <Modal
        isOpen={isAddStaffLeaveModalOpen}
        onClose={() => setIsAddStaffLeaveModalOpen(false)}
        title="Apply Faculty / Staff Leave (कर्मचारी अवकाश)"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleCreateStaffLeave} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select Staff Member *</label>
              <select
                required
                value={staffLeaveForm.staffId}
                onChange={(e) => {
                  const t = teachers.find(tch => tch.id === e.target.value);
                  if (t) {
                    setStaffLeaveForm({
                      ...staffLeaveForm,
                      staffId: t.id,
                      staffName: t.name,
                      department: t.department,
                      role: t.designation
                    });
                  }
                }}
                className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold text-slate-900 dark:text-white"
              >
                {teachers.map(t => (
                  <option key={t.id} value={t.id}>
                    {t.name} ({t.designation})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Leave Category</label>
              <select
                value={staffLeaveForm.leaveType}
                onChange={(e) => setStaffLeaveForm({ ...staffLeaveForm, leaveType: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="Casual Leave (CL)">Casual Leave (CL)</option>
                <option value="Medical / Sick Leave (ML)">Medical / Sick Leave (ML)</option>
                <option value="Academic Duty Leave (DL)">Academic Duty Leave (DL)</option>
                <option value="Loss of Pay / Unpaid (LWP)">Loss of Pay / Unpaid (LWP)</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Start Date *</label>
              <input
                type="date"
                required
                value={staffLeaveForm.startDate}
                onChange={(e) => setStaffLeaveForm({ ...staffLeaveForm, startDate: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">End Date *</label>
              <input
                type="date"
                required
                value={staffLeaveForm.endDate}
                onChange={(e) => setStaffLeaveForm({ ...staffLeaveForm, endDate: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Reason for Leave *</label>
            <textarea
              rows={3}
              required
              value={staffLeaveForm.reason}
              onChange={(e) => setStaffLeaveForm({ ...staffLeaveForm, reason: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div className="flex justify-end gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsAddStaffLeaveModalOpen(false)}
              className="px-4 py-2 text-slate-500 font-bold hover:text-slate-700 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 cursor-pointer"
            >
              Submit Staff Leave
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
