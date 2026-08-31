import React, { useState, useMemo } from 'react';
import {
  GraduationCap,
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Phone,
  Printer,
  X,
  CheckCircle2,
  Building2,
  FileSpreadsheet,
  Copy,
  FileText,
  UserX,
  UserCheck,
  Calendar,
  AlertTriangle,
  RotateCcw,
  CheckSquare,
  Square,
  Download,
  Share2
} from 'lucide-react';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import { useAuth } from '../context/AuthContext';
import { PrintableIDCard } from '../components/printables/PrintableIDCard';
import schoolService from '../services/schoolService';

export const StudentsPage = ({ initialSelectedStudent = null, onOpenNewAdmission = null }) => {
  const { showToast } = useToast();
  const { activeBranchId, setActiveBranchId, branches } = useAuth();
  
  // Data State
  const [allStudents, setAllStudents] = useState(() => schoolService.getStudents('all'));
  const [activeTab, setActiveTab] = useState('active'); // 'active' | 'inactive' | 'reasons'

  // Filter States ("Select Ground" matching user's software)
  const [selectedBranch, setSelectedBranch] = useState('all');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedSection, setSelectedSection] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  // Selection for bulk actions
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);

  // Modals
  const [selectedStudent, setSelectedStudent] = useState(initialSelectedStudent);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isIdCardModalOpen, setIsIdCardModalOpen] = useState(false);
  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);
  const [studentToDeactivate, setStudentToDeactivate] = useState(null);

  // Deactivation Form State
  const [deactivateReason, setDeactivateReason] = useState('Transfer with T C');
  const [deactivateDate, setDeactivateDate] = useState(new Date().toISOString().split('T')[0]);
  const [deactivateNote, setDeactivateNote] = useState('');

  // Class list definition from SQL database
  const classList = [
    { id: 'all', label: 'All Classes' },
    { id: 'PG', label: 'PG (Playgroup)' },
    { id: 'NURSERY', label: 'NURSERY' },
    { id: 'LKG', label: 'LKG' },
    { id: 'UKG', label: 'UKG' },
    { id: 'I', label: 'Class 1st (I)' },
    { id: 'II', label: 'Class 2nd (II)' },
    { id: 'III', label: 'Class 3rd (III)' },
    { id: 'IV', label: 'Class 4th (IV)' },
    { id: 'V', label: 'Class 5th (V)' },
    { id: 'VI', label: 'Class 6th (VI)' },
    { id: 'VII', label: 'Class 7th (VII)' },
    { id: 'VIII', label: 'Class 8th (VIII)' },
    { id: 'IX', label: 'Class 9th (IX)' },
    { id: 'X', label: 'Class 10th (X)' },
    { id: 'XI', label: 'Class 11th (XI)' },
    { id: 'XII', label: 'Class 12th (XII)' }
  ];

  const sectionList = ['All Sections', 'A', 'B', 'C'];

  const deactivateReasonsList = [
    'Transfer with T C',
    'Continuous Absent',
    'Fee not paid till now',
    "Parents' Wish",
    'Shifted to Other City / Village',
    'Duplicate / Wrong Entry'
  ];

  // Refresh students list
  const refreshStudents = () => {
    setAllStudents(schoolService.getStudents('all'));
  };

  // Filtered Students List
  const filteredStudents = useMemo(() => {
    return allStudents.filter(stu => {
      // Tab Filter: Active vs Inactive
      if (activeTab === 'active' && stu.status === 'Inactive') return false;
      if (activeTab === 'inactive' && stu.status !== 'Inactive') return false;

      // Branch Filter
      if (selectedBranch !== 'all' && stu.branchId !== selectedBranch) {
        return false;
      }

      // Class Filter (Normalize: e.g. "NURSERY", "I", "Class 1")
      if (selectedClass !== 'all') {
        const stuCls = (stu.class || '').toUpperCase().trim();
        const selCls = selectedClass.toUpperCase().trim();
        
        // Exact match or contains
        const isMatch = stuCls === selCls || 
          stuCls.replace('CLASS', '').trim() === selCls ||
          (selCls === 'I' && (stuCls === 'I' || stuCls === '1' || stuCls === 'CLASS 1')) ||
          (selCls === 'II' && (stuCls === 'II' || stuCls === '2' || stuCls === 'CLASS 2')) ||
          (selCls === 'III' && (stuCls === 'III' || stuCls === '3' || stuCls === 'CLASS 3')) ||
          (selCls === 'IV' && (stuCls === 'IV' || stuCls === '4' || stuCls === 'CLASS 4')) ||
          (selCls === 'V' && (stuCls === 'V' || stuCls === '5' || stuCls === 'CLASS 5')) ||
          (selCls === 'VI' && (stuCls === 'VI' || stuCls === '6' || stuCls === 'CLASS 6')) ||
          (selCls === 'VII' && (stuCls === 'VII' || stuCls === '7' || stuCls === 'CLASS 7')) ||
          (selCls === 'VIII' && (stuCls === 'VIII' || stuCls === '8' || stuCls === 'CLASS 8')) ||
          (selCls === 'IX' && (stuCls === 'IX' || stuCls === '9' || stuCls === 'CLASS 9')) ||
          (selCls === 'X' && (stuCls === 'X' || stuCls === '10' || stuCls === 'CLASS 10')) ||
          (selCls === 'XI' && (stuCls === 'XI' || stuCls === '11' || stuCls === 'CLASS 11')) ||
          (selCls === 'XII' && (stuCls === 'XII' || stuCls === '12' || stuCls === 'CLASS 12'));

        if (!isMatch) return false;
      }

      // Section Filter
      if (selectedSection !== 'all' && selectedSection !== 'All Sections') {
        if ((stu.section || '').toUpperCase() !== selectedSection.toUpperCase()) return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = (stu.name || '').toLowerCase().includes(q);
        const matchFather = (stu.parents?.fatherName || '').toLowerCase().includes(q);
        const matchMother = (stu.parents?.motherName || '').toLowerCase().includes(q);
        const matchPhone = (stu.parents?.fatherMobile || '').toLowerCase().includes(q);
        const matchAdm = (stu.admissionNo || '').toLowerCase().includes(q);
        const matchRoll = (stu.rollNo || '').toLowerCase().includes(q);
        const matchAadhaar = (stu.customFields?.studentAadhaar || '').toLowerCase().includes(q);
        const matchPen = (stu.customFields?.penNo || '').toLowerCase().includes(q);
        const matchAddress = (stu.parents?.address || '').toLowerCase().includes(q);

        return matchName || matchFather || matchMother || matchPhone || matchAdm || matchRoll || matchAadhaar || matchPen || matchAddress;
      }

      return true;
    });
  }, [allStudents, activeTab, selectedBranch, selectedClass, selectedSection, searchQuery]);

  // Pagination
  const paginatedStudents = useMemo(() => {
    if (rowsPerPage === 'All') return filteredStudents;
    const start = (currentPage - 1) * Number(rowsPerPage);
    return filteredStudents.slice(start, start + Number(rowsPerPage));
  }, [filteredStudents, currentPage, rowsPerPage]);

  const totalPages = rowsPerPage === 'All' ? 1 : Math.ceil(filteredStudents.length / Number(rowsPerPage));

  // Counts
  const activeCount = useMemo(() => allStudents.filter(s => s.status !== 'Inactive').length, [allStudents]);
  const inactiveCount = useMemo(() => allStudents.filter(s => s.status === 'Inactive').length, [allStudents]);

  // Handle Mark Inactive (Deactivate Student)
  const handleOpenDeactivateModal = (student) => {
    setStudentToDeactivate(student);
    setDeactivateReason('Transfer with T C');
    setDeactivateDate(new Date().toISOString().split('T')[0]);
    setDeactivateNote('');
    setIsDeactivateModalOpen(true);
  };

  const handleConfirmDeactivate = () => {
    if (!studentToDeactivate) return;
    schoolService.deactivateStudent(studentToDeactivate.id, deactivateReason, deactivateNote, deactivateDate);
    refreshStudents();
    setIsDeactivateModalOpen(false);
    showToast(`Student ${studentToDeactivate.name} (Adm No: ${studentToDeactivate.admissionNo}) marked as Inactive (${deactivateReason})! 🚫`, 'info');
  };

  // Handle Reactivate Student
  const handleReactivateStudent = (student) => {
    schoolService.reactivateStudent(student.id);
    refreshStudents();
    showToast(`Student ${student.name} (Adm No: ${student.admissionNo}) successfully Re-activated! 🟢`, 'success');
  };

  // Handle Bulk Select
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedStudentIds(paginatedStudents.map(s => s.id));
    } else {
      setSelectedStudentIds([]);
    }
  };

  const handleToggleStudent = (id) => {
    setSelectedStudentIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Export functions
  const handleExportCSV = () => {
    const headers = ['Register No', 'Student Name', 'Father Name', 'Mother Name', 'DOB', 'Mobile', 'Address', 'Class', 'Section', 'Gender', 'Roll', 'Aadhaar', 'Status'];
    const rows = filteredStudents.map(s => [
      s.admissionNo,
      `"${s.name}"`,
      `"${s.parents?.fatherName || ''}"`,
      `"${s.parents?.motherName || ''}"`,
      s.dob,
      s.parents?.fatherMobile || '',
      `"${s.parents?.address || ''}"`,
      s.class,
      s.section,
      s.gender,
      s.rollNo,
      s.customFields?.studentAadhaar || '',
      s.status
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `DMPS_Student_List_${selectedClass}_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Student List exported to CSV successfully! 📄', 'success');
  };

  const handleCopyTable = () => {
    const text = filteredStudents.map(s => `${s.admissionNo}\t${s.name}\t${s.parents?.fatherName || ''}\t${s.class}-${s.section}\t${s.parents?.fatherMobile || ''}`).join('\n');
    navigator.clipboard.writeText(text);
    showToast('Student summary copied to clipboard! 📋', 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* 🏛️ Top "Select Ground" Filter Card (Exact Matching Old Software) */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 px-5 py-3 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <GraduationCap className="w-5 h-5" />
            <h3 className="text-sm font-bold tracking-wide uppercase">
              Select Ground (Filter Students)
            </h3>
          </div>
          <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-medium backdrop-blur-xs">
            Academic Session 2026-2027
          </span>
        </div>

        <div className="p-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-end bg-slate-50/50 dark:bg-slate-900">
          
          {/* Branch Dropdown */}
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
              Branch <span className="text-rose-500">*</span>
            </label>
            <select
              value={selectedBranch}
              onChange={(e) => {
                setSelectedBranch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white shadow-xs focus:ring-2 focus:ring-sky-500"
            >
              <option value="all">ALL BRANCHES / CONSOLIDATED</option>
              <option value="BR-01">DADHEECH MEMORIAL PUBLIC SCHOOL (MAIN CAMPUS - JARGWAN)</option>
              <option value="BR-02">DADHEECH MEMORIAL PUBLIC SCHOOL (BARHETI CAMPUS)</option>
              <option value="BR-03">DADHEECH KIDS SCHOOL (PAC CAMPUS)</option>
            </select>
          </div>

          {/* Class Dropdown */}
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
              Class <span className="text-rose-500">*</span>
            </label>
            <select
              value={selectedClass}
              onChange={(e) => {
                setSelectedClass(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white shadow-xs focus:ring-2 focus:ring-sky-500"
            >
              {classList.map(c => (
                <option key={c.id} value={c.id}>
                  {c.label.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* Section Dropdown */}
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
              Section <span className="text-rose-500">*</span>
            </label>
            <select
              value={selectedSection}
              onChange={(e) => {
                setSelectedSection(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white shadow-xs focus:ring-2 focus:ring-sky-500"
            >
              {sectionList.map(sec => (
                <option key={sec} value={sec}>{sec.toUpperCase()}</option>
              ))}
            </select>
          </div>

          {/* Filter Action Button */}
          <div>
            <button
              onClick={() => {
                setCurrentPage(1);
                showToast(`Filter applied: Class ${selectedClass}, Section ${selectedSection} (${filteredStudents.length} Students found)`, 'info');
              }}
              className="w-full py-2.5 px-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl text-xs shadow-md shadow-sky-500/20 flex items-center justify-center gap-2 transition-all"
            >
              <Filter className="w-4 h-4" /> Filter Student Records
            </button>
          </div>
        </div>
      </div>

      {/* 📑 Tab Navigation: Active List vs Inactive List vs Reasons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setActiveTab('active');
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'active'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/25'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            Active Student List
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/20">
              {activeCount}
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab('inactive');
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'inactive'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-500/25'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
            }`}
          >
            <UserX className="w-4 h-4" />
            Inactive / Left List (TC)
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/20">
              {inactiveCount}
            </span>
          </button>
        </div>

        {/* New Admission Button */}
        {onOpenNewAdmission && (
          <button
            onClick={onOpenNewAdmission}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-2 self-start sm:self-auto transition-all"
          >
            <Plus className="w-4 h-4" /> + New Student Admission
          </button>
        )}
      </div>

      {/* 📊 Main Table Container with Export Toolbar */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        
        {/* Table Toolbar Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-800/40">
          
          {/* Export Icons Toolbar (Matching Screenshot 2) */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={handleCopyTable}
              title="Copy Summary"
              className="p-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-bold flex items-center gap-1 shadow-2xs"
            >
              <Copy className="w-3.5 h-3.5 text-slate-600" />
            </button>

            <button
              onClick={handleExportCSV}
              title="Export to Excel/CSV"
              className="p-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-bold flex items-center gap-1 shadow-2xs"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
            </button>

            <button
              onClick={() => window.print()}
              title="Print Table"
              className="p-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-bold flex items-center gap-1 shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5 text-blue-600" />
            </button>

            {/* Rows Per Page Dropdown */}
            <div className="flex items-center gap-1.5 ml-2 pl-2 border-l border-slate-300 dark:border-slate-700">
              <select
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(e.target.value);
                  setCurrentPage(1);
                }}
                className="p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white"
              >
                <option value={20}>20 rows per page</option>
                <option value={50}>50 rows per page</option>
                <option value={100}>100 rows per page</option>
                <option value="All">All ({filteredStudents.length})</option>
              </select>
            </div>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by name, father, phone, admission no..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 font-medium focus:ring-2 focus:ring-sky-500 shadow-2xs"
            />
          </div>
        </div>

        {/* 📜 Responsive Table View (Exact Columns from Old Software Screenshot) */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100/90 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700 select-none">
                <th className="p-3 text-center w-10">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={paginatedStudents.length > 0 && selectedStudentIds.length === paginatedStudents.length}
                    className="rounded text-sky-600 focus:ring-sky-500"
                  />
                </th>
                <th className="p-3">Photo</th>
                <th className="p-3">Name</th>
                <th className="p-3">Father Name</th>
                <th className="p-3">Mother Name</th>
                <th className="p-3">Date Of Birth</th>
                <th className="p-3">Mobile Number</th>
                <th className="p-3">Address</th>
                <th className="p-3">Class</th>
                <th className="p-3">Section</th>
                <th className="p-3">Register No</th>
                <th className="p-3">Gender</th>
                <th className="p-3">Roll</th>
                <th className="p-3">PEN No.</th>
                <th className="p-3">Student Aadhaar</th>
                <th className="p-3 text-center">Status</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
              {paginatedStudents.length === 0 ? (
                <tr>
                  <td colSpan={17} className="p-12 text-center text-slate-400">
                    <GraduationCap className="w-12 h-12 mx-auto mb-2 text-slate-300 dark:text-slate-600" />
                    <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
                      No student records found matching the selected class / filter.
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Try selecting "All Classes" or clear the search query.
                    </p>
                  </td>
                </tr>
              ) : (
                paginatedStudents.map((student) => {
                  const isSelected = selectedStudentIds.includes(student.id);
                  const isInactive = student.status === 'Inactive';

                  return (
                    <tr
                      key={student.id}
                      className={`hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors ${
                        isInactive ? 'bg-rose-50/30 dark:bg-rose-950/10' : ''
                      }`}
                    >
                      {/* Checkbox */}
                      <td className="p-3 text-center">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleToggleStudent(student.id)}
                          className="rounded text-sky-600 focus:ring-sky-500"
                        />
                      </td>

                      {/* Photo Thumbnail */}
                      <td className="p-3">
                        <img
                          src={student.photo || `https://api.dicebear.com/7.x/bottts/svg?seed=${student.name}`}
                          alt={student.name}
                          className="w-9 h-9 rounded-lg object-cover border border-slate-200 dark:border-slate-700 bg-slate-100 shrink-0"
                          onError={(e) => {
                            e.target.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${student.name}`;
                          }}
                        />
                      </td>

                      {/* Name */}
                      <td className="p-3 font-bold text-slate-900 dark:text-white uppercase tracking-tight whitespace-nowrap">
                        {student.name}
                      </td>

                      {/* Father Name */}
                      <td className="p-3 text-slate-700 dark:text-slate-300 uppercase whitespace-nowrap">
                        {student.parents?.fatherName || '-'}
                      </td>

                      {/* Mother Name */}
                      <td className="p-3 text-slate-700 dark:text-slate-300 uppercase whitespace-nowrap">
                        {student.parents?.motherName || '-'}
                      </td>

                      {/* DOB */}
                      <td className="p-3 text-slate-600 dark:text-slate-400 whitespace-nowrap font-mono">
                        {student.dob || '-'}
                      </td>

                      {/* Mobile Number */}
                      <td className="p-3 font-mono font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">
                        {student.parents?.fatherMobile ? (
                          <a href={`tel:${student.parents.fatherMobile}`} className="hover:text-indigo-600">
                            {student.parents.fatherMobile}
                          </a>
                        ) : '-'}
                      </td>

                      {/* Address */}
                      <td className="p-3 text-slate-600 dark:text-slate-400 max-w-xs truncate" title={student.parents?.address}>
                        {student.parents?.address || '-'}
                      </td>

                      {/* Class */}
                      <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                        {student.class}
                      </td>

                      {/* Section */}
                      <td className="p-3 font-bold text-slate-700 dark:text-slate-300 text-center">
                        {student.section || 'A'}
                      </td>

                      {/* Register No (Admission No) */}
                      <td className="p-3 font-mono font-bold text-slate-900 dark:text-white">
                        {student.admissionNo}
                      </td>

                      {/* Gender */}
                      <td className="p-3 capitalize text-slate-600 dark:text-slate-400">
                        {student.gender || '-'}
                      </td>

                      {/* Roll No */}
                      <td className="p-3 font-mono text-center text-slate-600 dark:text-slate-400">
                        {student.rollNo || '0'}
                      </td>

                      {/* PEN No. */}
                      <td className="p-3 font-mono text-slate-600 dark:text-slate-400">
                        {student.customFields?.penNo || '-'}
                      </td>

                      {/* Student Aadhaar */}
                      <td className="p-3 font-mono text-slate-600 dark:text-slate-400">
                        {student.customFields?.studentAadhaar || '-'}
                      </td>

                      {/* Status */}
                      <td className="p-3 text-center">
                        {isInactive ? (
                          <span
                            title={`Reason: ${student.deactivateInfo?.reason || 'Inactive'}`}
                            className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border border-rose-300"
                          >
                            Inactive
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300">
                            Active
                          </span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="p-3 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          
                          {/* View Profile */}
                          <button
                            onClick={() => {
                              setSelectedStudent(student);
                              setIsProfileModalOpen(true);
                            }}
                            title="View 360° Profile"
                            className="p-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg transition-all"
                          >
                            <Eye className="w-3.5 h-3.5 text-sky-600" />
                          </button>

                          {/* ID Card */}
                          <button
                            onClick={() => {
                              setSelectedStudent(student);
                              setIsIdCardModalOpen(true);
                            }}
                            title="Print ID Card"
                            className="p-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg transition-all"
                          >
                            <Printer className="w-3.5 h-3.5 text-purple-600" />
                          </button>

                          {/* Deactivate (Mark Inactive/TC) or Reactivate Button */}
                          {isInactive ? (
                            <button
                              onClick={() => handleReactivateStudent(student)}
                              title="Re-activate Student"
                              className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-[10px] flex items-center gap-1 shadow-xs transition-all"
                            >
                              <RotateCcw className="w-3 h-3" /> Re-activate
                            </button>
                          ) : (
                            <button
                              onClick={() => handleOpenDeactivateModal(student)}
                              title="Mark Inactive / Left (TC)"
                              className="px-2.5 py-1 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 rounded-lg font-bold text-[10px] flex items-center gap-1 transition-all"
                            >
                              <UserX className="w-3 h-3 text-rose-600" /> Inactive
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* 📑 Table Pagination Footer */}
        {filteredStudents.length > 0 && rowsPerPage !== 'All' && (
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/40">
            <div>
              Showing <span className="font-bold text-slate-900 dark:text-white">{(currentPage - 1) * Number(rowsPerPage) + 1}</span> to{' '}
              <span className="font-bold text-slate-900 dark:text-white">
                {Math.min(currentPage * Number(rowsPerPage), filteredStudents.length)}
              </span>{' '}
              of <span className="font-bold text-slate-900 dark:text-white">{filteredStudents.length}</span> students
            </div>

            <div className="flex items-center gap-1.5 self-start sm:self-auto">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 disabled:opacity-40 font-bold"
              >
                Previous
              </button>

              <span className="px-3 py-1.5 font-bold text-slate-800 dark:text-white">
                Page {currentPage} of {totalPages || 1}
              </span>

              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages || totalPages === 0}
                className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 disabled:opacity-40 font-bold"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================== */}
      {/* 🚫 MODAL: DEACTIVATE / MARK INACTIVE (TC / LEFT)           */}
      {/* ========================================================== */}
      <Modal
        isOpen={isDeactivateModalOpen}
        onClose={() => setIsDeactivateModalOpen(false)}
        title="Mark Student as Inactive / Left (TC)"
        maxWidth="max-w-md"
      >
        {studentToDeactivate && (
          <div className="space-y-4 text-xs">
            <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-900 dark:text-amber-200">
                  Deactivating {studentToDeactivate.name} (Adm No: {studentToDeactivate.admissionNo})
                </p>
                <p className="text-[11px] text-amber-700 dark:text-amber-400 mt-0.5">
                  The student will be moved to the Inactive List and omitted from daily attendance & fee dues. Historical records remain preserved.
                </p>
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Deactivation Reason <span className="text-rose-500">*</span>
              </label>
              <select
                value={deactivateReason}
                onChange={(e) => setDeactivateReason(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold text-xs"
              >
                {deactivateReasonsList.map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Date of Leaving / Inactivation
              </label>
              <input
                type="date"
                value={deactivateDate}
                onChange={(e) => setDeactivateDate(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold text-xs"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Remarks / TC Number (Optional)
              </label>
              <textarea
                value={deactivateNote}
                onChange={(e) => setDeactivateNote(e.target.value)}
                placeholder="Enter TC number or reason note..."
                rows={2}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsDeactivateModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 font-bold"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDeactivate}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold shadow-md"
              >
                Confirm Inactivation
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* ========================================================== */}
      {/* 👁️ MODAL: 360° STUDENT PROFILE                            */}
      {/* ========================================================== */}
      <Modal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        title="Student 360° Profile Details"
        maxWidth="max-w-2xl"
      >
        {selectedStudent && (
          <div className="space-y-4 text-xs">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <img
                src={selectedStudent.photo}
                alt={selectedStudent.name}
                className="w-16 h-16 rounded-xl object-cover border border-slate-200"
              />
              <div>
                <h3 className="text-base font-black text-slate-900 dark:text-white uppercase">
                  {selectedStudent.name}
                </h3>
                <p className="text-xs text-indigo-600 font-bold">
                  Class: {selectedStudent.class} - Section {selectedStudent.section} | Reg No: {selectedStudent.admissionNo}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Branch: {selectedStudent.branchName}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Father Name</span>
                <span className="font-bold text-slate-800 dark:text-white">{selectedStudent.parents?.fatherName || '-'}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Mother Name</span>
                <span className="font-bold text-slate-800 dark:text-white">{selectedStudent.parents?.motherName || '-'}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Mobile Number</span>
                <span className="font-bold text-slate-800 dark:text-white">{selectedStudent.parents?.fatherMobile || '-'}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Date of Birth</span>
                <span className="font-bold text-slate-800 dark:text-white">{selectedStudent.dob || '-'}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Student Aadhaar</span>
                <span className="font-bold text-slate-800 dark:text-white">{selectedStudent.customFields?.studentAadhaar || '-'}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">PEN Number</span>
                <span className="font-bold text-slate-800 dark:text-white">{selectedStudent.customFields?.penNo || '-'}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 col-span-2">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Address</span>
                <span className="font-bold text-slate-800 dark:text-white">{selectedStudent.parents?.address || '-'}</span>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* ========================================================== */}
      {/* 🖨️ MODAL: PRINT ID CARD                                   */}
      {/* ========================================================== */}
      <Modal
        isOpen={isIdCardModalOpen}
        onClose={() => setIsIdCardModalOpen(false)}
        title="Student Identity Card"
        maxWidth="max-w-md"
      >
        {selectedStudent && (
          <div className="space-y-4">
            <PrintableIDCard student={selectedStudent} />
            <button
              onClick={() => window.print()}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md"
            >
              <Printer className="w-4 h-4" /> Print Student ID Card
            </button>
          </div>
        )}
      </Modal>

    </div>
  );
};

export default StudentsPage;
