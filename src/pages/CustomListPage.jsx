import React, { useState, useMemo } from 'react';
import {
  Printer,
  FileSpreadsheet,
  CheckSquare,
  Square,
  Filter,
  Users,
  Search,
  RefreshCw,
  Sparkles,
  Layers,
  GraduationCap,
  Bus,
  CreditCard,
  Building2,
  Calendar,
  CheckCircle2,
  AlertCircle,
  FileText
} from 'lucide-react';
import schoolService from '../services/schoolService';
import { useToast } from '../components/common/Toast';

export const CustomListPage = () => {
  const { showToast } = useToast();
  const allStudents = useMemo(() => schoolService.getStudents() || [], []);
  const branches = useMemo(() => schoolService.getBranches() || [], []);
  const schoolInfo = schoolService.getSchoolInfo() || {
    name: 'Dadheech Memorial Public School',
    academicSession: '2026-2027',
    affiliationNo: 'UP-CBSE-83921',
    address: 'Jargwan, Bulandshahr (U.P.)'
  };

  // 1. Report Title & Heading
  const [fileHeading, setFileHeading] = useState('STUDENTS LIST WITH CONCESSION');
  const [subHeading, setSubHeading] = useState('Official Student Ledger & Demographic Register');

  // 2. Available Columns Definition with Categories
  const availableColumns = useMemo(() => [
    // Basic Details
    { id: 'admissionNo', label: 'REGISTRATION / ADM NO', category: 'Basic', default: true },
    { id: 'rollNo', label: 'ROLL NO', category: 'Basic', default: true },
    { id: 'name', label: 'STUDENT NAME', category: 'Basic', default: true },
    { id: 'fatherName', label: "FATHER'S NAME", category: 'Basic', default: true },
    { id: 'motherName', label: "MOTHER'S NAME", category: 'Basic', default: false },
    { id: 'gender', label: 'GENDER', category: 'Basic', default: true },
    { id: 'dob', label: 'DATE OF BIRTH', category: 'Basic', default: false },
    { id: 'class', label: 'CLASS', category: 'Basic', default: true },
    { id: 'section', label: 'SECTION', category: 'Basic', default: true },
    { id: 'branchName', label: 'BRANCH / CAMPUS', category: 'Basic', default: false },
    { id: 'admissionDate', label: 'DATE OF ADMISSION', category: 'Basic', default: false },

    // Contact & ID Info
    { id: 'primaryMobile', label: 'MOBILE NUMBER', category: 'Contact & ID', default: true },
    { id: 'altMobile', label: 'ALTERNATE MOBILE', category: 'Contact & ID', default: false },
    { id: 'address', label: 'RESIDENTIAL ADDRESS', category: 'Contact & ID', default: false },
    { id: 'aadhaar', label: 'STUDENT AADHAAR', category: 'Contact & ID', default: false },
    { id: 'penNo', label: 'PEN / APAAR NO', category: 'Contact & ID', default: false },
    { id: 'category', label: 'SOCIAL CATEGORY', category: 'Contact & ID', default: false },
    { id: 'religion', label: 'RELIGION', category: 'Contact & ID', default: false },
    { id: 'siblings', label: 'LINKED SIBLINGS', category: 'Contact & ID', default: false },

    // Transport Fleet
    { id: 'transportStatus', label: 'TRANSPORT SERVICE', category: 'Transport', default: false },
    { id: 'stoppage', label: 'BUS STOPPAGE / VILLAGE', category: 'Transport', default: false },
    { id: 'route', label: 'TRANSPORT ROUTE', category: 'Transport', default: false },
    { id: 'monthlyFare', label: 'MONTHLY BUS FARE', category: 'Transport', default: false },
    { id: 'annualTransport', label: 'ANNUAL TRANSPORT (11M)', category: 'Transport', default: false },

    // Fees & Dues Data
    { id: 'tuitionDue', label: 'TUITION FEE DUE', category: 'Fees & Dues', default: false },
    { id: 'totalDue', label: 'TOTAL FEE DUE', category: 'Fees & Dues', default: false },
    { id: 'totalPaid', label: 'FEE PAID (REALIZED)', category: 'Fees & Dues', default: false },
    { id: 'balanceDue', label: 'REMAINING BALANCE', category: 'Fees & Dues', default: true },
    { id: 'feeStatus', label: 'FEE STATUS', category: 'Fees & Dues', default: false },

    // Attendance
    { id: 'attendanceRate', label: 'ATTENDANCE %', category: 'Attendance', default: false },
    { id: 'studentStatus', label: 'STUDENT STATUS', category: 'Attendance', default: false }
  ], []);

  // Selected Columns State
  const [selectedColumns, setSelectedColumns] = useState(() => {
    const initial = {};
    availableColumns.forEach(c => {
      initial[c.id] = c.default;
    });
    return initial;
  });

  // 3. Filter Conditions
  const [filterBranch, setFilterBranch] = useState('ALL');
  const [filterClass, setFilterClass] = useState('ALL');
  const [filterSection, setFilterSection] = useState('ALL');
  const [filterGender, setFilterGender] = useState('ALL');
  const [filterCategory, setFilterCategory] = useState('ALL');
  const [filterReligion, setFilterReligion] = useState('ALL');
  const [filterTransport, setFilterTransport] = useState('ALL');
  const [filterRoute, setFilterRoute] = useState('ALL');
  const [filterFeeStatus, setFilterFeeStatus] = useState('ALL');
  const [filterMinDue, setFilterMinDue] = useState('');
  const [filterAttendance, setFilterAttendance] = useState('ALL');
  const [filterSibling, setFilterSibling] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Preset Templates
  const applyPreset = (presetName) => {
    const cols = {};
    availableColumns.forEach(c => { cols[c.id] = false; });

    if (presetName === 'master') {
      setFileHeading('GENERAL STUDENT MASTER ADMISSION REGISTER');
      ['admissionNo', 'rollNo', 'name', 'fatherName', 'motherName', 'gender', 'dob', 'class', 'section', 'primaryMobile', 'address'].forEach(id => { cols[id] = true; });
    } else if (presetName === 'defaulters') {
      setFileHeading('OUTSTANDING FEE DEFAULTERS & BALANCE RECOVERY LIST');
      ['admissionNo', 'rollNo', 'name', 'fatherName', 'class', 'section', 'primaryMobile', 'totalDue', 'totalPaid', 'balanceDue', 'feeStatus'].forEach(id => { cols[id] = true; });
      setFilterFeeStatus('DEFAULTER');
    } else if (presetName === 'transport') {
      setFileHeading('SCHOOL BUS FLEET PASSENGER ROSTER & STOPPAGE LIST');
      ['admissionNo', 'name', 'fatherName', 'class', 'section', 'primaryMobile', 'transportStatus', 'stoppage', 'route', 'monthlyFare', 'annualTransport'].forEach(id => { cols[id] = true; });
      setFilterTransport('TRANSPORT_ONLY');
    } else if (presetName === 'siblings') {
      setFileHeading('ENROLLED SIBLING FAMILIES & CONCESSION VERIFICATION LIST');
      ['admissionNo', 'name', 'fatherName', 'motherName', 'class', 'section', 'primaryMobile', 'siblings', 'balanceDue'].forEach(id => { cols[id] = true; });
      setFilterSibling('SIBLINGS_ONLY');
    } else if (presetName === 'udise') {
      setFileHeading('GOVERNMENT UDISE+ / CASTE & RELIGION DEMOGRAPHIC REPORT');
      ['admissionNo', 'name', 'fatherName', 'gender', 'dob', 'class', 'aadhaar', 'penNo', 'category', 'religion', 'address'].forEach(id => { cols[id] = true; });
    } else if (presetName === 'exam') {
      setFileHeading('EXAMINATION ROLL REGISTER & CANDIDATE ATTENDANCE SHEET');
      ['rollNo', 'admissionNo', 'name', 'fatherName', 'class', 'section', 'gender', 'attendanceRate'].forEach(id => { cols[id] = true; });
    }
    setSelectedColumns(cols);
    showToast(`Template "${presetName.toUpperCase()}" loaded! 📋`, 'info');
  };

  // Toggle Column
  const toggleColumn = (id) => {
    setSelectedColumns(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Select / Deselect All
  const selectAllColumns = (val) => {
    const updated = {};
    availableColumns.forEach(c => { updated[c.id] = val; });
    setSelectedColumns(updated);
  };

  // Filter Logic
  const filteredStudents = useMemo(() => {
    return allStudents.filter(s => {
      // Search
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesSearch =
          s.name?.toLowerCase().includes(q) ||
          s.admissionNo?.toLowerCase().includes(q) ||
          s.rollNo?.toLowerCase().includes(q) ||
          s.parents?.fatherName?.toLowerCase().includes(q) ||
          s.parents?.fatherMobile?.includes(q) ||
          s.class?.toLowerCase().includes(q) ||
          s.transport?.stoppage?.toLowerCase().includes(q);
        if (!matchesSearch) return false;
      }

      // Branch
      if (filterBranch !== 'ALL' && s.branchId !== filterBranch) return false;

      // Class
      if (filterClass !== 'ALL' && s.class?.toUpperCase() !== filterClass.toUpperCase()) return false;

      // Section
      if (filterSection !== 'ALL' && s.section?.toUpperCase() !== filterSection.toUpperCase()) return false;

      // Gender
      if (filterGender !== 'ALL' && s.gender?.toLowerCase() !== filterGender.toLowerCase()) return false;

      // Category / Caste
      if (filterCategory !== 'ALL' && s.customFields?.caste?.toUpperCase() !== filterCategory.toUpperCase()) return false;

      // Religion
      if (filterReligion !== 'ALL' && s.customFields?.religion?.toUpperCase() !== filterReligion.toUpperCase()) return false;

      // Transport Service
      if (filterTransport === 'TRANSPORT_ONLY' && (!s.transport?.route || s.transport.route === 'None')) return false;
      if (filterTransport === 'WALKER_ONLY' && (s.transport?.route && s.transport.route !== 'None')) return false;

      // Transport Route
      if (filterRoute !== 'ALL' && s.transport?.route !== filterRoute && s.transport?.stoppage !== filterRoute) return false;

      // Fee Status
      const bal = Number(s.feeSummary?.balance || 0);
      const paid = Number(s.feeSummary?.totalPaid || 0);
      if (filterFeeStatus === 'PAID' && bal > 0) return false;
      if (filterFeeStatus === 'DEFAULTER' && bal <= 0) return false;
      if (filterFeeStatus === 'ZERO_PAID' && paid > 0) return false;

      // Minimum Due Amount
      if (filterMinDue && !isNaN(Number(filterMinDue))) {
        if (bal < Number(filterMinDue)) return false;
      }

      // Sibling Status
      const hasSiblings = Array.isArray(s.linkedSiblingIds) && s.linkedSiblingIds.length > 0;
      if (filterSibling === 'SIBLINGS_ONLY' && !hasSiblings) return false;
      if (filterSibling === 'SINGLE_ONLY' && hasSiblings) return false;

      // Attendance
      const attPct = s.attendanceSummary?.percentage || 0;
      if (filterAttendance === 'SHORT' && attPct >= 75) return false;
      if (filterAttendance === 'GOOD' && attPct < 75) return false;

      return true;
    });
  }, [
    allStudents,
    searchQuery,
    filterBranch,
    filterClass,
    filterSection,
    filterGender,
    filterCategory,
    filterReligion,
    filterTransport,
    filterRoute,
    filterFeeStatus,
    filterMinDue,
    filterSibling,
    filterAttendance
  ]);

  // Active Selected Columns List
  const activeColumnsList = useMemo(() => {
    return availableColumns.filter(c => selectedColumns[c.id]);
  }, [availableColumns, selectedColumns]);

  // Aggregate Summary Figures
  const summaryTotals = useMemo(() => {
    let tuitionSum = 0;
    let transportSum = 0;
    let dueSum = 0;
    let paidSum = 0;
    let balanceSum = 0;

    filteredStudents.forEach(s => {
      tuitionSum += Number(s.feeSummary?.tuitionDue || 0);
      transportSum += Number(s.feeSummary?.transportDue11Months || 0);
      dueSum += Number(s.feeSummary?.totalDue || 0);
      paidSum += Number(s.feeSummary?.totalPaid || 0);
      balanceSum += Number(s.feeSummary?.balance || 0);
    });

    return { tuitionSum, transportSum, dueSum, paidSum, balanceSum };
  }, [filteredStudents]);

  // Extract Unique Classes & Stoppages for Filters
  const uniqueClasses = useMemo(() => {
    const set = new Set(allStudents.map(s => s.class).filter(Boolean));
    return Array.from(set);
  }, [allStudents]);

  const uniqueStoppages = useMemo(() => {
    const set = new Set(allStudents.map(s => s.transport?.stoppage).filter(Boolean));
    return Array.from(set).sort();
  }, [allStudents]);

  // Helper function to render cell value
  const renderCellValue = (student, colId, index) => {
    switch (colId) {
      case 'admissionNo': return <strong className="font-mono text-indigo-600 dark:text-indigo-400">{student.admissionNo}</strong>;
      case 'rollNo': return <span className="font-mono font-bold text-slate-700 dark:text-slate-300">{student.rollNo}</span>;
      case 'name': return <strong className="text-slate-900 dark:text-white font-bold">{student.name}</strong>;
      case 'fatherName': return student.parents?.fatherName || '-';
      case 'motherName': return student.parents?.motherName || '-';
      case 'gender': return student.gender || 'Male';
      case 'dob': return student.dob || '-';
      case 'class': return <span className="font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">{student.class}</span>;
      case 'section': return student.section || 'A';
      case 'branchName': return student.branchName || 'Senior Campus';
      case 'admissionDate': return '01/04/2026';
      case 'primaryMobile': return <span className="font-mono text-blue-600 dark:text-blue-400">{student.parents?.fatherMobile || '-'}</span>;
      case 'altMobile': return student.parents?.motherMobile || '-';
      case 'address': return student.parents?.address || '-';
      case 'aadhaar': return student.customFields?.studentAadhaar || 'Verified';
      case 'penNo': return student.customFields?.penNo || `PEN-${student.admissionNo}`;
      case 'category': return student.customFields?.caste || 'General';
      case 'religion': return student.customFields?.religion || 'Hindu';
      case 'siblings': {
        const sibCount = student.linkedSiblingIds?.length || 0;
        return sibCount > 0 ? (
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-950 dark:text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-200">
            {sibCount} Sibling{sibCount > 1 ? 's' : ''} Linked
          </span>
        ) : <span className="text-slate-400 text-xs">Single Child</span>;
      }
      case 'transportStatus': return student.transport?.route && student.transport.route !== 'None' ? (
        <span className="text-emerald-600 font-bold flex items-center gap-1 text-xs">
          <Bus className="w-3 h-3" /> Yes
        </span>
      ) : <span className="text-slate-400 text-xs">Self (Walker)</span>;
      case 'stoppage': return student.transport?.stoppage || 'Jargwan';
      case 'route': return student.transport?.route || 'None';
      case 'monthlyFare': return `₹${Number(student.transport?.monthlyFare || 0).toLocaleString('en-IN')}`;
      case 'annualTransport': return `₹${Number(student.transport?.annualFare11M || 0).toLocaleString('en-IN')}`;
      case 'tuitionDue': return `₹${Number(student.feeSummary?.tuitionDue || 0).toLocaleString('en-IN')}`;
      case 'totalDue': return <strong className="font-mono text-slate-900 dark:text-white">₹{Number(student.feeSummary?.totalDue || 0).toLocaleString('en-IN')}</strong>;
      case 'totalPaid': return <span className="font-mono font-bold text-emerald-600">₹{Number(student.feeSummary?.totalPaid || 0).toLocaleString('en-IN')}</span>;
      case 'balanceDue': {
        const b = Number(student.feeSummary?.balance || 0);
        return <strong className={`font-mono font-bold ${b > 0 ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600'}`}>₹{b.toLocaleString('en-IN')}</strong>;
      }
      case 'feeStatus': {
        const st = student.feeSummary?.status || (student.feeSummary?.balance === 0 ? 'Paid' : 'Pending');
        return (
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
            st === 'Paid' ? 'bg-emerald-100 text-emerald-800' : (st === 'Partial' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800')
          }`}>
            {st}
          </span>
        );
      }
      case 'attendanceRate': return <span className="font-bold font-mono text-indigo-600">{student.attendanceSummary?.percentage || 95}%</span>;
      case 'studentStatus': return <span className="text-emerald-600 font-bold text-xs">{student.status || 'Active'}</span>;
      default: return '-';
    }
  };

  // Export to CSV
  const handleExportCSV = () => {
    if (activeColumnsList.length === 0) {
      showToast('Please select at least 1 column to export!', 'error');
      return;
    }

    const headers = ['S.NO', ...activeColumnsList.map(c => c.label)];
    const rows = filteredStudents.map((s, idx) => {
      return [
        idx + 1,
        ...activeColumnsList.map(c => {
          switch (c.id) {
            case 'admissionNo': return s.admissionNo;
            case 'rollNo': return s.rollNo;
            case 'name': return s.name;
            case 'fatherName': return s.parents?.fatherName || '';
            case 'motherName': return s.parents?.motherName || '';
            case 'gender': return s.gender;
            case 'dob': return s.dob;
            case 'class': return s.class;
            case 'section': return s.section;
            case 'branchName': return s.branchName;
            case 'primaryMobile': return s.parents?.fatherMobile || '';
            case 'altMobile': return s.parents?.motherMobile || '';
            case 'address': return (s.parents?.address || '').replace(/,/g, ' ');
            case 'aadhaar': return s.customFields?.studentAadhaar || '';
            case 'penNo': return s.customFields?.penNo || '';
            case 'category': return s.customFields?.caste || '';
            case 'religion': return s.customFields?.religion || '';
            case 'siblings': return s.linkedSiblingIds?.join(' | ') || 'Single Child';
            case 'transportStatus': return s.transport?.route && s.transport.route !== 'None' ? 'Yes' : 'No';
            case 'stoppage': return s.transport?.stoppage || '';
            case 'route': return s.transport?.route || '';
            case 'monthlyFare': return s.transport?.monthlyFare || 0;
            case 'annualTransport': return s.transport?.annualFare11M || 0;
            case 'tuitionDue': return s.feeSummary?.tuitionDue || 0;
            case 'totalDue': return s.feeSummary?.totalDue || 0;
            case 'totalPaid': return s.feeSummary?.totalPaid || 0;
            case 'balanceDue': return s.feeSummary?.balance || 0;
            case 'feeStatus': return s.feeSummary?.status || '';
            case 'attendanceRate': return `${s.attendanceSummary?.percentage || 95}%`;
            case 'studentStatus': return s.status || 'Active';
            default: return '';
          }
        })
      ];
    });

    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += `"${schoolInfo.name} - ${fileHeading}"\n`;
    csvContent += `"${schoolInfo.address} | Session: ${schoolInfo.academicSession} | Generated: ${new Date().toLocaleDateString('en-GB')}"\n\n`;
    csvContent += headers.map(h => `"${h}"`).join(',') + '\n';
    rows.forEach(r => {
      csvContent += r.map(val => `"${val}"`).join(',') + '\n';
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${fileHeading.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Custom List exported to CSV successfully! 📊', 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">

      {/* ========================================================================= */}
      {/* 📋 TOP HEADER & PRESET BUTTONS (Screen View) */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5 print:hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2.5 rounded-2xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
                <FileText className="w-5 h-5" />
              </span>
              <div>
                <h1 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  Custom List Report & Print Generator
                </h1>
                <p className="text-xs text-slate-500 mt-0.5">
                  Select custom columns, filter parameters, and print official student dossier sheets
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={handleExportCSV}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
            >
              <FileSpreadsheet className="w-4 h-4" /> Export to Excel
            </button>
            <button
              onClick={() => window.print()}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <Printer className="w-4 h-4" /> Print Custom List
            </button>
          </div>
        </div>

        {/* 1-Click Quick Preset Templates */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Quick Preset Templates:
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => applyPreset('master')}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 transition-all"
            >
              📑 Student Master Register
            </button>
            <button
              onClick={() => applyPreset('defaulters')}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 hover:bg-rose-100 transition-all"
            >
              💰 Fee Defaulters & Balance
            </button>
            <button
              onClick={() => applyPreset('transport')}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 transition-all"
            >
              🚌 Bus Route Passenger Roster
            </button>
            <button
              onClick={() => applyPreset('siblings')}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition-all"
            >
              👥 Sibling Family Verification
            </button>
            <button
              onClick={() => applyPreset('udise')}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 hover:bg-purple-100 transition-all"
            >
              🏛️ UDISE+ / Caste Census
            </button>
            <button
              onClick={() => applyPreset('exam')}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 hover:bg-cyan-100 transition-all"
            >
              📊 Exam Roll & Signature Sheet
            </button>
          </div>
        </div>

        {/* File Heading Title Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center justify-between">
              <span>File Heading (Title Printed on Top):</span>
              <span className="text-[10px] text-slate-400 font-normal">* Leave blank for default</span>
            </label>
            <input
              type="text"
              value={fileHeading}
              onChange={(e) => setFileHeading(e.target.value)}
              placeholder="e.g. STUDENTS LIST WITH CONCESSION"
              className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Sub-Heading / Note:
            </label>
            <input
              type="text"
              value={subHeading}
              onChange={(e) => setSubHeading(e.target.value)}
              placeholder="e.g. Session 2026-27 | Prepared for Office Records"
              className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 🔘 SELECT COLUMNS SECTION (Grouped Checkboxes) */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 print:hidden">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-indigo-600" />
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
              Select Columns to Include ({activeColumnsList.length} Selected)
            </h3>
          </div>
          <div className="flex items-center gap-3 text-xs font-bold">
            <button
              onClick={() => selectAllColumns(true)}
              className="text-indigo-600 hover:underline"
            >
              Select All
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => selectAllColumns(false)}
              className="text-slate-500 hover:underline"
            >
              Deselect All
            </button>
          </div>
        </div>

        {/* Columns Grid by Category */}
        <div className="space-y-4">
          {['Basic', 'Contact & ID', 'Transport', 'Fees & Dues', 'Attendance'].map(cat => {
            const catCols = availableColumns.filter(c => c.category === cat);
            return (
              <div key={cat} className="space-y-2">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">
                  {cat} Fields:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {catCols.map(col => {
                    const isChecked = !!selectedColumns[col.id];
                    return (
                      <label
                        key={col.id}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-indigo-50/80 dark:bg-indigo-950/60 border-indigo-400 text-indigo-900 dark:text-indigo-200 shadow-sm'
                            : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-400'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleColumn(col.id)}
                          className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                        />
                        <span className="truncate">{col.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 🔍 SELECT FILTER CONDITIONS SECTION */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 print:hidden">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-indigo-600" />
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
              Select Filter Conditions
            </h3>
          </div>
          <button
            onClick={() => {
              setFilterBranch('ALL');
              setFilterClass('ALL');
              setFilterSection('ALL');
              setFilterGender('ALL');
              setFilterCategory('ALL');
              setFilterReligion('ALL');
              setFilterTransport('ALL');
              setFilterRoute('ALL');
              setFilterFeeStatus('ALL');
              setFilterMinDue('');
              setFilterAttendance('ALL');
              setFilterSibling('ALL');
              setSearchQuery('');
              showToast('Filters reset! 🔄', 'info');
            }}
            className="text-xs font-bold text-rose-600 hover:underline flex items-center gap-1"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reset All Filters
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-1">
          {/* Branch Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Campus Scope:</label>
            <select
              value={filterBranch}
              onChange={(e) => setFilterBranch(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            >
              <option value="ALL">All Campuses</option>
              {branches.map(b => (
                <option key={b.id} value={b.id}>{b.name.split('-')[0]}</option>
              ))}
            </select>
          </div>

          {/* Class Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Admission Class:</label>
            <select
              value={filterClass}
              onChange={(e) => setFilterClass(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            >
              <option value="ALL">All Classes (PG - 10th)</option>
              {uniqueClasses.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Section Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Class Section:</label>
            <select
              value={filterSection}
              onChange={(e) => setFilterSection(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            >
              <option value="ALL">All Sections</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
            </select>
          </div>

          {/* Gender Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Gender:</label>
            <select
              value={filterGender}
              onChange={(e) => setFilterGender(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            >
              <option value="ALL">All Genders</option>
              <option value="Male">Boys (Male)</option>
              <option value="Female">Girls (Female)</option>
            </select>
          </div>

          {/* Transport Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Transport Service:</label>
            <select
              value={filterTransport}
              onChange={(e) => setFilterTransport(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            >
              <option value="ALL">All Services</option>
              <option value="TRANSPORT_ONLY">Bus Commuters Only</option>
              <option value="WALKER_ONLY">Self / Walkers Only</option>
            </select>
          </div>

          {/* Route Stoppage Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Bus Stoppage / Village:</label>
            <select
              value={filterRoute}
              onChange={(e) => setFilterRoute(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            >
              <option value="ALL">All 41 Stoppages</option>
              {uniqueStoppages.map(st => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          {/* Fee Dues Status */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Fee Dues Status:</label>
            <select
              value={filterFeeStatus}
              onChange={(e) => setFilterFeeStatus(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            >
              <option value="ALL">All Fee Statuses</option>
              <option value="DEFAULTER">Pending Defaulters (Balance &gt; 0)</option>
              <option value="PAID">100% Cleared / Paid</option>
              <option value="ZERO_PAID">Zero Paid (0 Collection)</option>
            </select>
          </div>

          {/* Minimum Due */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Min Balance Due (₹):</label>
            <input
              type="number"
              value={filterMinDue}
              onChange={(e) => setFilterMinDue(e.target.value)}
              placeholder="e.g. 5000"
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Sibling Status */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Sibling Filter:</label>
            <select
              value={filterSibling}
              onChange={(e) => setFilterSibling(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            >
              <option value="ALL">All Students</option>
              <option value="SIBLINGS_ONLY">Sibling Enrolled Only</option>
              <option value="SINGLE_ONLY">Single Child Only</option>
            </select>
          </div>

          {/* Social Category */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Social Category:</label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            >
              <option value="ALL">All Categories</option>
              <option value="GENERAL">General</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
            </select>
          </div>

          {/* Attendance */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Attendance Rate:</label>
            <select
              value={filterAttendance}
              onChange={(e) => setFilterAttendance(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            >
              <option value="ALL">All Attendance</option>
              <option value="SHORT">&lt; 75% Attendance Defaulters</option>
              <option value="GOOD">&gt;= 75% Regular</option>
            </select>
          </div>

          {/* Quick Search */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Search Keyword:</label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Name, Reg, Phone..."
                className="w-full pl-8 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 📊 LIVE METRIC PILLARS (Screen Summary) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 print:hidden">
        <div className="p-4 rounded-3xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider block">Filtered Students</span>
            <span className="text-2xl font-black font-mono text-slate-900 dark:text-white">{filteredStudents.length}</span>
            <span className="text-[11px] text-slate-500 block">Out of {allStudents.length}</span>
          </div>
          <Users className="w-8 h-8 text-indigo-500 opacity-60" />
        </div>

        <div className="p-4 rounded-3xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider block">Gross Total Demand</span>
            <span className="text-xl font-black font-mono text-slate-900 dark:text-white">₹{summaryTotals.dueSum.toLocaleString('en-IN')}</span>
            <span className="text-[11px] text-slate-500 block">Tuition + Transport</span>
          </div>
          <CreditCard className="w-8 h-8 text-blue-500 opacity-60" />
        </div>

        <div className="p-4 rounded-3xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider block">Total Realized Fees</span>
            <span className="text-xl font-black font-mono text-emerald-600 dark:text-emerald-400">₹{summaryTotals.paidSum.toLocaleString('en-IN')}</span>
            <span className="text-[11px] text-emerald-600 font-medium block">
              {summaryTotals.dueSum > 0 ? ((summaryTotals.paidSum / summaryTotals.dueSum) * 100).toFixed(1) : 0}% Realized
            </span>
          </div>
          <CheckCircle2 className="w-8 h-8 text-emerald-500 opacity-60" />
        </div>

        <div className="p-4 rounded-3xl bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/60 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-rose-700 dark:text-rose-300 uppercase tracking-wider block">Total Outstanding Due</span>
            <span className="text-xl font-black font-mono text-rose-600 dark:text-rose-400">₹{summaryTotals.balanceSum.toLocaleString('en-IN')}</span>
            <span className="text-[11px] text-rose-600 font-medium block">
              {summaryTotals.dueSum > 0 ? ((summaryTotals.balanceSum / summaryTotals.dueSum) * 100).toFixed(1) : 0}% Pending
            </span>
          </div>
          <AlertCircle className="w-8 h-8 text-rose-500 opacity-60" />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 📄 OFFICIAL PRINTABLE DOSSIER TABLE (Visible on Screen & Print) */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden print:border-none print:shadow-none print:rounded-none">

        {/* Official Printable Header (Visible when Printing) */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 print:block space-y-2 text-center">
          <h2 className="text-2xl font-black tracking-wide text-slate-900 dark:text-white uppercase">
            {schoolInfo.name}
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
            {schoolInfo.address} | Affiliation No: {schoolInfo.affiliationNo} | Academic Session: {schoolInfo.academicSession}
          </p>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs font-bold gap-2">
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-mono uppercase tracking-wider border border-slate-300 dark:border-slate-700">
              📌 {fileHeading || 'STUDENTS CUSTOM LIST'}
            </span>
            <span className="text-slate-500">
              Total Records: <strong>{filteredStudents.length} Students</strong> | Printed On: <strong>{new Date().toLocaleDateString('en-GB')}</strong>
            </span>
          </div>
        </div>

        {/* Dynamic Table with Selected Columns */}
        <div className="overflow-x-auto min-w-full">
          {activeColumnsList.length === 0 ? (
            <div className="p-12 text-center text-slate-400 font-bold space-y-2">
              <CheckSquare className="w-12 h-12 mx-auto text-slate-300" />
              <p>No columns selected. Please check at least 1 column from the selection above.</p>
            </div>
          ) : (
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 uppercase tracking-wider text-[11px] font-black">
                  <th className="py-3.5 px-3 w-10 text-center">#</th>
                  {activeColumnsList.map(c => (
                    <th key={c.id} className="py-3.5 px-3.5 whitespace-nowrap">{c.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan={activeColumnsList.length + 1} className="py-12 text-center text-slate-400 font-bold">
                      No student records match the selected filter conditions.
                    </td>
                  </tr>
                ) : (
                  filteredStudents.map((student, idx) => (
                    <tr
                      key={student.id}
                      className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors odd:bg-white even:bg-slate-50/30 dark:odd:bg-slate-900 dark:even:bg-slate-900/60"
                    >
                      <td className="py-3 px-3 text-center font-mono font-bold text-slate-400">{idx + 1}</td>
                      {activeColumnsList.map(c => (
                        <td key={c.id} className="py-3 px-3.5 whitespace-nowrap">
                          {renderCellValue(student, c.id, idx)}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>

              {/* Table Footer Totals */}
              {filteredStudents.length > 0 && (
                <tfoot>
                  <tr className="bg-slate-100 dark:bg-slate-800 border-t-2 border-slate-300 dark:border-slate-700 font-black text-slate-900 dark:text-white text-xs">
                    <td colSpan={2} className="py-3.5 px-3 text-center uppercase tracking-wider">
                      TOTALS ({filteredStudents.length} Students)
                    </td>
                    {activeColumnsList.slice(1).map(c => {
                      if (c.id === 'totalDue') return <td key={c.id} className="py-3.5 px-3.5 font-mono">₹{summaryTotals.dueSum.toLocaleString('en-IN')}</td>;
                      if (c.id === 'tuitionDue') return <td key={c.id} className="py-3.5 px-3.5 font-mono">₹{summaryTotals.tuitionSum.toLocaleString('en-IN')}</td>;
                      if (c.id === 'annualTransport') return <td key={c.id} className="py-3.5 px-3.5 font-mono">₹{summaryTotals.transportSum.toLocaleString('en-IN')}</td>;
                      if (c.id === 'totalPaid') return <td key={c.id} className="py-3.5 px-3.5 font-mono text-emerald-600">₹{summaryTotals.paidSum.toLocaleString('en-IN')}</td>;
                      if (c.id === 'balanceDue') return <td key={c.id} className="py-3.5 px-3.5 font-mono text-rose-600">₹{summaryTotals.balanceSum.toLocaleString('en-IN')}</td>;
                      return <td key={c.id} className="py-3.5 px-3.5">-</td>;
                    })}
                  </tr>
                </tfoot>
              )}
            </table>
          )}
        </div>

        {/* Official Printable Signatures Block (Visible on Print) */}
        <div className="p-8 pt-12 border-t border-slate-200 dark:border-slate-800 hidden print:grid grid-cols-4 gap-8 text-center text-xs font-bold text-slate-800">
          <div className="space-y-8">
            <div className="h-10 border-b border-dashed border-slate-400" />
            <span>Prepared By (Clerk)</span>
          </div>
          <div className="space-y-8">
            <div className="h-10 border-b border-dashed border-slate-400" />
            <span>Verified By (In-Charge)</span>
          </div>
          <div className="space-y-8">
            <div className="h-10 border-b border-dashed border-slate-400" />
            <span>Accountant Signature</span>
          </div>
          <div className="space-y-8">
            <div className="h-10 border-b border-dashed border-slate-400" />
            <span>Principal / Director Seal</span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default CustomListPage;
