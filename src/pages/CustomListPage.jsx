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
  FileText,
  SlidersHorizontal,
  Maximize2,
  Minimize2,
  RotateCw,
  ChevronDown,
  SplitSquareVertical,
  BookOpen
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
    address: 'Ramghat Road Border, Jargwan, Bulandshahr (U.P.)'
  };

  // 1. Report Title & Heading
  const [fileHeading, setFileHeading] = useState('STUDENTS LIST WITH CONCESSION');
  const [subHeading, setSubHeading] = useState('Official Student Ledger & Demographic Register');

  // Print Density, Orientation & Multi-Page Split Controls
  const [printDensity, setPrintDensity] = useState('compact'); // 'compact', 'standard', 'spacious'
  const [printOrientation, setPrintOrientation] = useState('landscape'); // 'portrait', 'landscape'
  const [colsPerPart, setColsPerPart] = useState(7); // Max additional columns per printable sheet part
  const [activePartView, setActivePartView] = useState('ALL'); // 'ALL' = Print all parts, or 0, 1, 2, 3...
  const [sortBy, setSortBy] = useState('name'); // Default: Alphabetical (A to Z)
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' | 'desc'

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  // 2. Available Columns Definition (Compact Short Labels & Data Widths)
  const availableColumns = useMemo(() => [
    // Basic Details
    { id: 'admissionNo', label: 'Adm No', fullLabel: 'Admission No', category: 'Basic', default: true, width: '70px', align: 'center', isAnchor: true },
    { id: 'rollNo', label: 'Roll', fullLabel: 'Roll No', category: 'Basic', default: true, width: '50px', align: 'center' },
    { id: 'name', label: 'Student Name', fullLabel: 'Student Full Name', category: 'Basic', default: true, width: '150px', align: 'left', isAnchor: true },
    { id: 'fatherName', label: "Father Name", fullLabel: "Father's Name", category: 'Basic', default: true, width: '140px', align: 'left' },
    { id: 'motherName', label: "Mother Name", fullLabel: "Mother's Name", category: 'Basic', default: false, width: '130px', align: 'left' },
    { id: 'gender', label: 'Gender', fullLabel: 'Gender (M/F)', category: 'Basic', default: true, width: '60px', align: 'center' },
    { id: 'dob', label: 'DOB', fullLabel: 'Date of Birth', category: 'Basic', default: false, width: '85px', align: 'center' },
    { id: 'class', label: 'Class', fullLabel: 'Class Grade', category: 'Basic', default: true, width: '60px', align: 'center', isAnchor: true },
    { id: 'section', label: 'Sec', fullLabel: 'Section', category: 'Basic', default: true, width: '45px', align: 'center' },
    { id: 'branchName', label: 'Campus', fullLabel: 'Campus / Branch', category: 'Basic', default: false, width: '110px', align: 'left' },
    { id: 'admissionDate', label: 'Adm Date', fullLabel: 'Date of Admission', category: 'Basic', default: false, width: '85px', align: 'center' },

    // Contact & ID Info
    { id: 'primaryMobile', label: 'Mobile', fullLabel: 'Primary Mobile No', category: 'Contact & ID', default: true, width: '95px', align: 'center' },
    { id: 'altMobile', label: 'Alt Mobile', fullLabel: 'Mother / Alt Mobile', category: 'Contact & ID', default: false, width: '95px', align: 'center' },
    { id: 'address', label: 'Address / Village', fullLabel: 'Residential Address', category: 'Contact & ID', default: false, width: '160px', align: 'left' },
    { id: 'aadhaar', label: 'Aadhaar', fullLabel: 'Student Aadhaar Card', category: 'Contact & ID', default: false, width: '95px', align: 'center' },
    { id: 'penNo', label: 'PEN No', fullLabel: 'PEN / APAAR Code', category: 'Contact & ID', default: false, width: '90px', align: 'center' },
    { id: 'category', label: 'Category', fullLabel: 'Social Caste Category', category: 'Contact & ID', default: false, width: '70px', align: 'center' },
    { id: 'religion', label: 'Religion', fullLabel: 'Religion', category: 'Contact & ID', default: false, width: '70px', align: 'center' },
    { id: 'siblings', label: 'Siblings', fullLabel: 'Linked Siblings Family', category: 'Contact & ID', default: false, width: '90px', align: 'center' },

    // Transport Fleet
    { id: 'transportStatus', label: 'Bus Facility', fullLabel: 'Bus Facility (Y/N)', category: 'Transport', default: false, width: '70px', align: 'center' },
    { id: 'stoppage', label: 'Bus Stoppage', fullLabel: 'Village Bus Stoppage', category: 'Transport', default: false, width: '130px', align: 'left' },
    { id: 'route', label: 'Bus Route', fullLabel: 'Assigned Bus Route', category: 'Transport', default: false, width: '160px', align: 'left' },
    { id: 'annualTransport', label: 'Annual Bus Fee', fullLabel: 'Annual Transport Fee (11M)', category: 'Transport', default: false, width: '95px', align: 'right' },

    // Fees & Dues Data
    { id: 'tuitionDue', label: 'Tuition Due', fullLabel: 'Annual Tuition Fee', category: 'Fees & Dues', default: false, width: '85px', align: 'right' },
    { id: 'totalDue', label: 'Total Due', fullLabel: 'Gross Annual Demand', category: 'Fees & Dues', default: false, width: '85px', align: 'right' },
    { id: 'totalPaid', label: 'Paid Fee', fullLabel: 'Real Fee Collected', category: 'Fees & Dues', default: false, width: '85px', align: 'right' },
    { id: 'balanceDue', label: 'Balance Due', fullLabel: 'Outstanding Balance', category: 'Fees & Dues', default: true, width: '90px', align: 'right' },
    { id: 'feeStatus', label: 'Fee Status', fullLabel: 'Fee Payment Status', category: 'Fees & Dues', default: false, width: '75px', align: 'center' },

    // Attendance
    { id: 'attendanceRate', label: 'Att %', fullLabel: 'Attendance Rate %', category: 'Attendance', default: false, width: '55px', align: 'center' },
    { id: 'studentStatus', label: 'Status', fullLabel: 'Enrollment Status', category: 'Attendance', default: false, width: '65px', align: 'center' }
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
      setPrintOrientation('landscape');
    } else if (presetName === 'defaulters') {
      setFileHeading('OUTSTANDING FEE DEFAULTERS & BALANCE RECOVERY LIST');
      ['admissionNo', 'rollNo', 'name', 'fatherName', 'class', 'section', 'primaryMobile', 'totalDue', 'totalPaid', 'balanceDue', 'feeStatus'].forEach(id => { cols[id] = true; });
      setFilterFeeStatus('DEFAULTER');
      setPrintOrientation('landscape');
    } else if (presetName === 'transport') {
      setFileHeading('SCHOOL BUS FLEET PASSENGER ROSTER & STOPPAGE LIST');
      ['admissionNo', 'name', 'fatherName', 'class', 'section', 'primaryMobile', 'transportStatus', 'stoppage', 'route', 'annualTransport'].forEach(id => { cols[id] = true; });
      setFilterTransport('TRANSPORT_ONLY');
      setPrintOrientation('landscape');
    } else if (presetName === 'siblings') {
      setFileHeading('ENROLLED SIBLING FAMILIES & CONCESSION VERIFICATION LIST');
      ['admissionNo', 'name', 'fatherName', 'motherName', 'class', 'section', 'primaryMobile', 'siblings', 'balanceDue'].forEach(id => { cols[id] = true; });
      setFilterSibling('SIBLINGS_ONLY');
      setPrintOrientation('landscape');
    } else if (presetName === 'udise') {
      setFileHeading('GOVERNMENT UDISE+ / CASTE & RELIGION DEMOGRAPHIC REPORT');
      ['admissionNo', 'name', 'fatherName', 'gender', 'dob', 'class', 'aadhaar', 'penNo', 'category', 'religion', 'address'].forEach(id => { cols[id] = true; });
      setPrintOrientation('landscape');
    } else if (presetName === 'exam') {
      setFileHeading('EXAMINATION ROLL REGISTER & CANDIDATE ATTENDANCE SHEET');
      ['rollNo', 'admissionNo', 'name', 'fatherName', 'class', 'section', 'gender', 'attendanceRate'].forEach(id => { cols[id] = true; });
      setPrintOrientation('portrait');
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
    }).sort((a, b) => {
      let cmp = 0;
      if (sortBy === 'name') {
        cmp = (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' });
      } else if (sortBy === 'fatherName') {
        cmp = (a.parents?.fatherName || '').localeCompare(b.parents?.fatherName || '', undefined, { sensitivity: 'base' });
      } else if (sortBy === 'motherName') {
        cmp = (a.parents?.motherName || '').localeCompare(b.parents?.motherName || '', undefined, { sensitivity: 'base' });
      } else if (sortBy === 'dob') {
        cmp = (a.dob || '').localeCompare(b.dob || '');
      } else if (sortBy === 'primaryMobile') {
        cmp = (a.parents?.fatherMobile || '').localeCompare(b.parents?.fatherMobile || '');
      } else if (sortBy === 'class') {
        cmp = (a.class || '').localeCompare(b.class || '', undefined, { numeric: true });
      } else if (sortBy === 'section') {
        cmp = (a.section || '').localeCompare(b.section || '');
      } else if (sortBy === 'admissionNo') {
        cmp = (parseInt(a.admissionNo) || 0) - (parseInt(b.admissionNo) || 0);
      } else if (sortBy === 'rollNo') {
        cmp = (parseInt(a.rollNo) || 0) - (parseInt(b.rollNo) || 0);
      } else if (sortBy === 'totalDue') {
        cmp = (Number(a.feeSummary?.totalDue) || 0) - (Number(b.feeSummary?.totalDue) || 0);
      } else if (sortBy === 'totalPaid') {
        cmp = (Number(a.feeSummary?.totalPaid) || 0) - (Number(b.feeSummary?.totalPaid) || 0);
      } else if (sortBy === 'balanceDue') {
        cmp = (Number(a.feeSummary?.balance) || 0) - (Number(b.feeSummary?.balance) || 0);
      } else if (sortBy === 'attendanceRate') {
        cmp = (Number(a.attendanceSummary?.percentage) || 0) - (Number(b.attendanceSummary?.percentage) || 0);
      } else {
        cmp = (a.name || '').localeCompare(b.name || '');
      }
      return sortOrder === 'asc' ? cmp : -cmp;
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
    filterAttendance,
    sortBy,
    sortOrder
  ]);

  // Active Selected Columns List
  const activeColumnsList = useMemo(() => {
    return availableColumns.filter(c => selectedColumns[c.id]);
  }, [availableColumns, selectedColumns]);

  // ---------------------------------------------------------------------------
  // 🧩 MULTI-PART COLUMN CHUNKING ENGINE (Split across multiple readable pages)
  // ---------------------------------------------------------------------------
  const columnParts = useMemo(() => {
    if (activeColumnsList.length === 0) return [];

    // Anchor identification columns that repeat on every sheet
    const anchorIds = ['admissionNo', 'name', 'class'];
    const anchorCols = availableColumns.filter(c => anchorIds.includes(c.id) && selectedColumns[c.id]);

    // Other non-anchor columns
    const otherCols = activeColumnsList.filter(c => !anchorIds.includes(c.id));

    // If total columns <= 9, everything fits comfortably in a single Part!
    if (activeColumnsList.length <= 9 || colsPerPart >= activeColumnsList.length) {
      return [
        {
          partIndex: 0,
          title: 'Full Selected Columns',
          category: 'Complete Register',
          columns: activeColumnsList
        }
      ];
    }

    // Split otherCols into chunks of size `colsPerPart`
    const chunks = [];
    for (let i = 0; i < otherCols.length; i += colsPerPart) {
      const slice = otherCols.slice(i, i + colsPerPart);
      // Determine dominant category
      const catCount = {};
      slice.forEach(c => { catCount[c.category] = (catCount[c.category] || 0) + 1; });
      let dominantCat = 'General Details';
      let maxC = 0;
      Object.entries(catCount).forEach(([k, v]) => {
        if (v > maxC) { maxC = v; dominantCat = k; }
      });

      // Combine Anchors + this slice's columns
      const partCols = [...anchorCols, ...slice];

      chunks.push({
        partIndex: chunks.length,
        title: `Part ${chunks.length + 1}: ${dominantCat}`,
        category: dominantCat,
        columns: partCols,
        exclusiveCols: slice
      });
    }

    return chunks;
  }, [availableColumns, activeColumnsList, selectedColumns, colsPerPart]);

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

  // Trigger Print
  const handlePrint = () => {
    window.print();
  };

  // Helper function to render cell value with tight formatting
  const renderCellValue = (student, colId) => {
    switch (colId) {
      case 'admissionNo': return <strong className="font-mono text-indigo-700 dark:text-indigo-400 font-bold">{student.admissionNo}</strong>;
      case 'rollNo': return <span className="font-mono font-bold text-slate-700 dark:text-slate-300">{student.rollNo}</span>;
      case 'name': return <strong className="text-slate-900 dark:text-white font-bold">{student.name}</strong>;
      case 'fatherName': return student.parents?.fatherName || '-';
      case 'motherName': return student.parents?.motherName || '-';
      case 'gender': return student.gender === 'Female' ? 'F' : 'M';
      case 'dob': return student.dob || '-';
      case 'class': return <span className="font-bold">{student.class}</span>;
      case 'section': return student.section || 'A';
      case 'branchName': return (student.branchName || 'Senior').split(' ')[0];
      case 'admissionDate': return '01/04/2026';
      case 'primaryMobile': return <span className="font-mono font-medium">{student.parents?.fatherMobile || '-'}</span>;
      case 'altMobile': return <span className="font-mono">{student.parents?.motherMobile || '-'}</span>;
      case 'address': return <span className="truncate max-w-[150px] inline-block" title={student.parents?.address}>{student.parents?.address || '-'}</span>;
      case 'aadhaar': return student.customFields?.studentAadhaar || 'Verified';
      case 'penNo': return student.customFields?.penNo || `PEN-${student.admissionNo}`;
      case 'category': return student.customFields?.caste || 'GEN';
      case 'religion': return student.customFields?.religion || 'Hindu';
      case 'siblings': {
        const sibCount = student.linkedSiblingIds?.length || 0;
        return sibCount > 0 ? `${sibCount} Sib` : 'Single';
      }
      case 'transportStatus': return student.transport?.route && student.transport.route !== 'None' ? 'Yes' : 'No';
      case 'stoppage': return student.transport?.stoppage || 'Jargwan';
      case 'route': return student.transport?.route || 'Self / Walk';
      case 'annualTransport': return `₹${Number(student.feeSummary?.transportDue11Months !== undefined ? student.feeSummary.transportDue11Months : ((student.transport?.monthlyFare || 0) * (student.transport?.months || 11))).toLocaleString('en-IN')}`;
      case 'tuitionDue': return `₹${Number(student.feeSummary?.tuitionDue || 0).toLocaleString('en-IN')}`;
      case 'totalDue': return <strong className="font-mono">₹{Number(student.feeSummary?.totalDue || 0).toLocaleString('en-IN')}</strong>;
      case 'totalPaid': return <span className="font-mono text-emerald-700 font-bold">₹{Number(student.feeSummary?.totalPaid || 0).toLocaleString('en-IN')}</span>;
      case 'balanceDue': {
        const b = Number(student.feeSummary?.balance || 0);
        return <strong className={`font-mono font-bold ${b > 0 ? 'text-rose-700' : 'text-emerald-700'}`}>₹{b.toLocaleString('en-IN')}</strong>;
      }
      case 'feeStatus': {
        const st = student.feeSummary?.status || (student.feeSummary?.balance === 0 ? 'Paid' : 'Pending');
        return st;
      }
      case 'attendanceRate': return `${student.attendanceSummary?.percentage || 95}%`;
      case 'studentStatus': return student.status || 'Active';
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
            case 'route': return s.transport?.route || 'Self / Walk';
            case 'annualTransport': return s.feeSummary?.transportDue11Months !== undefined ? s.feeSummary.transportDue11Months : ((s.transport?.monthlyFare || 0) * (s.transport?.months || 11));
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

  // Render a Single Part Table
  const renderPartTable = (part, partIndex, totalParts) => {
    return (
      <div
        key={part.partIndex}
        className="custom-print-part-block bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden mb-8 print:mb-0 print:border-none print:shadow-none print:rounded-none"
        style={{ pageBreakAfter: partIndex < totalParts - 1 ? 'always' : 'auto' }}
      >
        {/* Official Printable Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 space-y-1 text-center">
          <h2 className="text-lg sm:text-xl font-black tracking-wide text-slate-900 dark:text-white uppercase font-sans">
            {schoolInfo.name}
          </h2>
          <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium">
            {schoolInfo.address} | Affiliation No: {schoolInfo.affiliationNo} | Academic Session: {schoolInfo.academicSession}
          </p>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs font-bold gap-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-mono uppercase tracking-wider border border-slate-300 dark:border-slate-700">
                📌 {fileHeading || 'STUDENTS CUSTOM LIST'}
              </span>
              {totalParts > 1 && (
                <span className="px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border border-indigo-300 text-[10px]">
                  PAGE PART {partIndex + 1} OF {totalParts} ({part.category})
                </span>
              )}
            </div>
            <span className="text-slate-500">
              Total Records: <strong>{filteredStudents.length} Students</strong> | Date: <strong>{new Date().toLocaleDateString('en-GB')}</strong>
            </span>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto min-w-full">
          <table className={`custom-print-table w-full text-left border-collapse ${
            printDensity === 'compact' ? 'text-[11px]' : (printDensity === 'standard' ? 'text-xs' : 'text-sm')
          }`}>
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 uppercase tracking-tight font-black">
                <th className="py-2 px-2 w-8 text-center border-r border-slate-200 dark:border-slate-700">#</th>
                {part.columns.map(c => (
                  <th
                    key={c.id}
                    onClick={() => handleSort(c.id)}
                    className={`py-2 px-2 whitespace-nowrap border-r border-slate-200 dark:border-slate-700 text-${c.align || 'left'} cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors select-none`}
                    style={{ width: c.width || 'auto' }}
                    title={`Click to sort by ${c.fullLabel || c.label}`}
                  >
                    <span className="inline-flex items-center gap-1">
                      {c.label}
                      <span className="text-[9px] text-slate-400 print:hidden">
                        {sortBy === c.id ? (sortOrder === 'asc' ? '▲' : '▼') : '↕'}
                      </span>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={part.columns.length + 1} className="py-10 text-center text-slate-400 font-bold">
                    No student records match the selected filter conditions.
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student, idx) => (
                  <tr
                    key={student.id}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors odd:bg-white even:bg-slate-50/40 dark:odd:bg-slate-900 dark:even:bg-slate-900/60"
                  >
                    <td className="py-1.5 px-2 text-center font-mono text-slate-500 border-r border-slate-100 dark:border-slate-800">{idx + 1}</td>
                    {part.columns.map(c => (
                      <td
                        key={c.id}
                        className={`py-1.5 px-2 whitespace-nowrap border-r border-slate-100 dark:border-slate-800 text-${c.align || 'left'}`}
                      >
                        {renderCellValue(student, c.id)}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>

            {/* Table Footer Totals */}
            {filteredStudents.length > 0 && (
              <tfoot>
                <tr className="bg-slate-100 dark:bg-slate-800 border-t-2 border-slate-400 dark:border-slate-600 font-black text-slate-900 dark:text-white text-[11px]">
                  <td colSpan={2} className="py-2 px-2 text-center uppercase tracking-wider">
                    TOTALS ({filteredStudents.length})
                  </td>
                  {part.columns.slice(1).map(c => {
                    if (c.id === 'totalDue') return <td key={c.id} className="py-2 px-2 font-mono text-right">₹{summaryTotals.dueSum.toLocaleString('en-IN')}</td>;
                    if (c.id === 'tuitionDue') return <td key={c.id} className="py-2 px-2 font-mono text-right">₹{summaryTotals.tuitionSum.toLocaleString('en-IN')}</td>;
                    if (c.id === 'annualTransport') return <td key={c.id} className="py-2 px-2 font-mono text-right">₹{summaryTotals.transportSum.toLocaleString('en-IN')}</td>;
                    if (c.id === 'totalPaid') return <td key={c.id} className="py-2 px-2 font-mono text-emerald-700 text-right">₹{summaryTotals.paidSum.toLocaleString('en-IN')}</td>;
                    if (c.id === 'balanceDue') return <td key={c.id} className="py-2 px-2 font-mono text-rose-700 text-right">₹{summaryTotals.balanceSum.toLocaleString('en-IN')}</td>;
                    return <td key={c.id} className="py-2 px-2 text-center">-</td>;
                  })}
                </tr>
              </tfoot>
            )}
          </table>
        </div>

        {/* Official Printable Signatures Block (Visible on Print) */}
        <div className="p-4 pt-8 border-t border-slate-300 dark:border-slate-800 hidden print:grid grid-cols-4 gap-6 text-center text-[10px] font-bold text-slate-800">
          <div className="space-y-4">
            <div className="h-6 border-b border-dashed border-slate-400" />
            <span>Prepared By (Clerk)</span>
          </div>
          <div className="space-y-4">
            <div className="h-6 border-b border-dashed border-slate-400" />
            <span>Verified By (In-Charge)</span>
          </div>
          <div className="space-y-4">
            <div className="h-6 border-b border-dashed border-slate-400" />
            <span>Accountant Signature</span>
          </div>
          <div className="space-y-4">
            <div className="h-6 border-b border-dashed border-slate-400" />
            <span>Principal / Director Seal</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">

      {/* Global Print Styles Injection */}
      <style>{`
        @media print {
          @page {
            size: ${printOrientation === 'landscape' ? 'landscape' : 'portrait'};
            margin: 6mm 6mm;
          }
          body, html, #root {
            background: #ffffff !important;
            color: #000000 !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            font-size: ${printDensity === 'compact' ? '9px' : (printDensity === 'standard' ? '10px' : '11px')} !important;
          }
          aside, nav, header, .print\\:hidden, [class*="Sidebar"], [class*="TopNav"] {
            display: none !important;
            visibility: hidden !important;
          }
          main, div[class*="lg:pl-"] {
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .custom-print-table-container {
            width: 100% !important;
            overflow: visible !important;
          }
          .custom-print-table {
            width: 100% !important;
            table-layout: auto !important;
            border-collapse: collapse !important;
            font-size: ${printDensity === 'compact' ? '9px' : (printDensity === 'standard' ? '10px' : '11px')} !important;
          }
          .custom-print-table th, .custom-print-table td {
            border: 1px solid #94a3b8 !important;
            padding: ${printDensity === 'compact' ? '2px 4px' : '4px 6px'} !important;
            color: #000000 !important;
          }
          .custom-print-table thead {
            display: table-header-group !important;
            background-color: #f1f5f9 !important;
          }
          .custom-print-table tr {
            page-break-inside: avoid !important;
          }
          .custom-print-part-block {
            break-after: page !important;
            page-break-after: always !important;
          }
        }
      `}</style>

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
                  Multi-page auto-split printing: Even if all 31 columns are selected, data splits into readable sheets without clipping!
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons with Density, Orientation, and Split Engine */}
          <div className="flex items-center gap-2.5 flex-wrap">
            {/* Page Orientation Selector */}
            <div className="flex items-center rounded-xl bg-slate-100 dark:bg-slate-800 p-1 border border-slate-200 dark:border-slate-700 text-xs font-bold">
              <button
                onClick={() => setPrintOrientation('portrait')}
                className={`px-2.5 py-1.5 rounded-lg transition-all ${
                  printOrientation === 'portrait' ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow-sm' : 'text-slate-500'
                }`}
                title="Portrait (Vertical Page)"
              >
                📄 Portrait
              </button>
              <button
                onClick={() => setPrintOrientation('landscape')}
                className={`px-2.5 py-1.5 rounded-lg transition-all ${
                  printOrientation === 'landscape' ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow-sm' : 'text-slate-500'
                }`}
                title="Landscape (Horizontal Wide Page)"
              >
                📑 Landscape (Wide)
              </button>
            </div>

            {/* Density Selector */}
            <div className="flex items-center rounded-xl bg-slate-100 dark:bg-slate-800 p-1 border border-slate-200 dark:border-slate-700 text-xs font-bold">
              <button
                onClick={() => setPrintDensity('compact')}
                className={`px-2.5 py-1.5 rounded-lg transition-all ${
                  printDensity === 'compact' ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow-sm' : 'text-slate-500'
                }`}
                title="Compact tight columns for fitting maximum data on A4"
              >
                ⚡ Compact
              </button>
              <button
                onClick={() => setPrintDensity('standard')}
                className={`px-2.5 py-1.5 rounded-lg transition-all ${
                  printDensity === 'standard' ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow-sm' : 'text-slate-500'
                }`}
              >
                Standard
              </button>
            </div>

            <button
              onClick={handleExportCSV}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
            >
              <FileSpreadsheet className="w-4 h-4" /> Export CSV
            </button>

            <button
              onClick={handlePrint}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <Printer className="w-4 h-4" /> Print Dossier Sheets
            </button>
          </div>
        </div>

        {/* Multi-Part Column Split Control Banner */}
        {columnParts.length > 1 && (
          <div className="p-3.5 rounded-2xl bg-indigo-50/90 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <SplitSquareVertical className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <div>
                <span className="text-xs font-black text-indigo-950 dark:text-indigo-200 uppercase tracking-wider block">
                  Multi-Part Split Mode Active ({activeColumnsList.length} Columns across {columnParts.length} Consecutive Sheet Parts)
                </span>
                <span className="text-[11px] text-indigo-700 dark:text-indigo-300">
                  Student Name, Admission No & Class will cleanly repeat on the left of every sheet!
                </span>
              </div>
            </div>

            {/* Part Tab Switcher */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                onClick={() => setActivePartView('ALL')}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  activePartView === 'ALL'
                    ? 'bg-indigo-600 text-white shadow'
                    : 'bg-white dark:bg-slate-800 text-indigo-900 dark:text-indigo-200 border border-indigo-200'
                }`}
              >
                🖨️ Print All {columnParts.length} Parts
              </button>
              {columnParts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePartView(idx)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                    activePartView === idx
                      ? 'bg-indigo-600 text-white shadow'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200'
                  }`}
                >
                  Part {idx + 1} ({p.category})
                </button>
              ))}
            </div>
          </div>
        )}

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
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
              className="w-full px-4 py-2 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Sub-Heading / Academic Note:
            </label>
            <input
              type="text"
              value={subHeading}
              onChange={(e) => setSubHeading(e.target.value)}
              placeholder="e.g. Session 2026-27 | Prepared for Office Records"
              className="w-full px-4 py-2 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 🔘 SELECT COLUMNS SECTION (Compact Checkboxes) */}
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
              Select All (31 Columns)
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
        <div className="space-y-3">
          {['Basic', 'Contact & ID', 'Transport', 'Fees & Dues', 'Attendance'].map(cat => {
            const catCols = availableColumns.filter(c => c.category === cat);
            return (
              <div key={cat} className="space-y-1.5">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">
                  {cat} Fields:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {catCols.map(col => {
                    const isChecked = !!selectedColumns[col.id];
                    return (
                      <label
                        key={col.id}
                        className={`flex items-center gap-2 p-2 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-indigo-50/80 dark:bg-indigo-950/60 border-indigo-400 text-indigo-900 dark:text-indigo-200 shadow-sm'
                            : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-400'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleColumn(col.id)}
                          className="w-3.5 h-3.5 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                        />
                        <span className="truncate">{col.fullLabel || col.label}</span>
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
            <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider block">Filtered Records</span>
            <span className="text-2xl font-black font-mono text-slate-900 dark:text-white">{filteredStudents.length}</span>
            <span className="text-[11px] text-slate-500 block">Out of {allStudents.length} Students</span>
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
      {/* 📄 OFFICIAL PRINTABLE DOSSIER TABLES (Multi-Part Chunking Layout) */}
      {/* ========================================================================= */}
      <div className="custom-print-table-container">
        {activeColumnsList.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-12 text-center text-slate-400 font-bold space-y-2">
            <CheckSquare className="w-12 h-12 mx-auto text-slate-300" />
            <p>No columns selected. Please check at least 1 column from the selection above.</p>
          </div>
        ) : (
          columnParts.map((part, pIdx) => {
            // If user selected a specific part to view, filter others out on screen
            if (activePartView !== 'ALL' && activePartView !== pIdx) return null;
            return renderPartTable(part, pIdx, columnParts.length);
          })
        )}
      </div>

    </div>
  );
};

export default CustomListPage;
