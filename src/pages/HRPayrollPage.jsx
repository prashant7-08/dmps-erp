import React, { useState, useEffect, useMemo } from 'react';
import {
  DollarSign,
  Printer,
  CheckCircle2,
  Users,
  Building2,
  CreditCard,
  Download,
  Plus,
  Trash2,
  Edit2,
  Award,
  Layers,
  Calendar,
  Send,
  Sparkles,
  AlertCircle,
  FileText,
  Clock,
  Briefcase,
  Check,
  X,
  Umbrella,
  Wallet,
  FileCheck,
  Search
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import { PrintablePaySlip } from '../components/printables/PrintablePaySlip';
import { 
  getStaffSalary, 
  getSavedSalaryTemplates, 
  saveSalaryTemplates, 
  defaultSalaryTemplates,
  getManualSalaryAssignments,
  saveManualSalaryAssignment,
  saveAllManualSalaryAssignments 
} from '../utils/salaryUtils';
import schoolService from '../services/schoolService';

export const HRPayrollPage = ({ initialTab = 'payment' }) => {
  const { showToast } = useToast();
  const teachers = schoolService.getTeachers() || [];
  const schoolInfo = schoolService.getSchoolInfo() || { name: 'Dadheech Memorial Public School', phone: '+91 97588 82443' };

  const resolveTab = (tab) => {
    if (!tab) return 'payment';
    if (tab === 'hr-template' || tab === 'template' || tab === 'salary-template') return 'template';
    if (tab === 'hr-assign' || tab === 'assign' || tab === 'salary-assign') return 'assign';
    if (tab === 'hr-payment' || tab === 'payment' || tab === 'payroll' || tab === 'salary-payment') return 'payment';
    if (tab === 'hr-advance-my' || tab === 'advance-my') return 'advance-my';
    if (tab === 'hr-advance-manage' || tab === 'advance-manage' || tab === 'hr-advance' || tab === 'advance') return 'advance-manage';
    if (tab === 'hr-leave-category' || tab === 'leave-category') return 'leave-category';
    if (tab === 'hr-leave-my' || tab === 'leave-my') return 'leave-my';
    if (tab === 'hr-leave-manage' || tab === 'leave-manage' || tab === 'hr-leave' || tab === 'leave') return 'leave-manage';
    if (tab === 'hr-award' || tab === 'award') return 'award';
    return tab;
  };

  const [activeTab, setActiveTab] = useState(() => resolveTab(initialTab));

  useEffect(() => {
    if (initialTab) setActiveTab(resolveTab(initialTab));
  }, [initialTab]);

  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isPaySlipModalOpen, setIsPaySlipModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('August 2026');
  const [searchQuery, setSearchQuery] = useState('');
  const [payrollRefresh, setPayrollRefresh] = useState(0);
  const [assignSearchQuery, setAssignSearchQuery] = useState('');
  const [assignDeptFilter, setAssignDeptFilter] = useState('All');
  const [savedRowsMap, setSavedRowsMap] = useState({});

  // Canonical standard month options for DMPS Session 2026-27
  const monthOptions = [
    { value: 'April 2026', label: 'April 2026 (Pre-July Scale)' },
    { value: 'May 2026', label: 'May 2026 (Pre-July Scale)' },
    { value: 'June 2026', label: 'June 2026 (☀️ Summer Vacation - No Pay)' },
    { value: 'July 2026', label: 'July 2026 (Revised Scale Active)' },
    { value: 'August 2026', label: 'August 2026 (Current Active)' },
    { value: 'September 2026', label: 'September 2026' },
    { value: 'October 2026', label: 'October 2026' },
    { value: 'November 2026', label: 'November 2026' },
    { value: 'December 2026', label: 'December 2026' },
    { value: 'January 2027', label: 'January 2027' },
    { value: 'February 2027', label: 'February 2027' },
    { value: 'March 2027', label: 'March 2027' },
    { value: 'April 2027', label: 'April 2027 (Next Session Start)' }
  ];

  // Helper to safely retrieve payment record for any staff member in a given month (lenient matching)
  const getPaymentForStaff = (staffId, monthStr) => {
    if (!staffId) return null;
    const records = schoolService.getStaffSalaryRecords ? schoolService.getStaffSalaryRecords(staffId) : [];
    if (!records || !Array.isArray(records) || records.length === 0) return null;
    const cleanTarget = (monthStr || '').replace(/\s*\(.*\)/, '').trim().toLowerCase();
    return records.find(r => {
      if (r.month === monthStr) return true;
      const cleanRec = (r.month || '').replace(/\s*\(.*\)/, '').trim().toLowerCase();
      return cleanRec === cleanTarget;
    }) || null;
  };

  // 1. School Salary Grades (Exact match to DMPS Grades + Grade 0 for honorary)
  const [templates, setTemplates] = useState(() => getSavedSalaryTemplates());
  const [editingTemplate, setEditingTemplate] = useState(null);

  const saveTemplates = (newTemplates) => {
    setTemplates(newTemplates);
    saveSalaryTemplates(newTemplates);
  };

  // 2. Staff Salary Assignment Roster Builder
  const buildStaffAssignments = () => {
    const list = schoolService.getTeachers() || [];
    return list.map((t, idx) => ({
      staffId: t.id,
      name: t.name,
      employeeId: t.employeeId || `EMP-2026-${String(idx + 1).padStart(3, '0')}`,
      designation: t.designation || 'Teacher',
      department: t.department || 'Academics',
      assignedSalary: getStaffSalary(t),
      paymentMode: 'UPI / PhonePe / GPay',
      mobile: t.phone || t.mobile || '9719476606',
      upiId: t.upiId || t.phone || t.mobile || '9719476606@upi',
      status: t.status || 'Active',
      photo: t.photo || ''
    }));
  };

  const [staffAssignments, setStaffAssignments] = useState(buildStaffAssignments);

  useEffect(() => {
    setStaffAssignments(buildStaffAssignments());
  }, [payrollRefresh]);

  const handleUpdateSingleSalary = (st, newSalary) => {
    const val = Math.max(0, Number(newSalary) || 0);
    setStaffAssignments(prev => prev.map(item => item.staffId === st.staffId ? { ...item, assignedSalary: val } : item));
    saveManualSalaryAssignment(st.staffId, val);
    saveManualSalaryAssignment(st.name, val);
    saveManualSalaryAssignment(st.employeeId, val);
    schoolService.updateTeacher(st.staffId, { basicSalary: val, salary: { basic: val, netSalary: val } });
    
    // Trigger visual green save pulse
    setSavedRowsMap(prev => ({ ...prev, [st.staffId]: true }));
    setTimeout(() => {
      setSavedRowsMap(prev => ({ ...prev, [st.staffId]: false }));
    }, 2500);

    setPayrollRefresh(prev => prev + 1);
    showToast(`✅ Salary ₹${val.toLocaleString('en-IN')}/mo permanently assigned to ${st.name}!`, 'success');
  };

  const handleBulkSaveAssignments = () => {
    const map = {};
    staffAssignments.forEach(st => {
      const val = Number(st.assignedSalary) || 0;
      map[st.staffId] = val;
      map[st.name] = val;
      map[st.employeeId] = val;
      schoolService.updateTeacher(st.staffId, { basicSalary: val, salary: { basic: val, netSalary: val } });
    });
    saveAllManualSalaryAssignments(map);
    setPayrollRefresh(prev => prev + 1);
    showToast(`🎉 All ${staffAssignments.length} Staff Salary Assignments permanently saved & secured!`, 'success');
  };

  // 3. Advance Salary Applications State
  const [advanceRequests, setAdvanceRequests] = useState([
    { id: 'ADV-01', staffId: 'TCH-001', staffName: 'SHWETA RAGHAV', role: 'Secondary Teacher', requestedAmount: 15000, date: '2026-08-15', monthlyDeduction: 3000, installments: 5, reason: 'Family Medical Emergency', status: 'Approved' },
    { id: 'ADV-02', staffId: 'TCH-002', staffName: 'SONU KUMAR', role: 'Senior Faculty PGT', requestedAmount: 10000, date: '2026-08-20', monthlyDeduction: 2500, installments: 4, reason: 'House Repair / Festival', status: 'Approved' },
    { id: 'ADV-03', staffId: 'TCH-003', staffName: 'BHOOMI YADAV', role: 'Junior Teacher', requestedAmount: 12000, date: '2026-08-25', monthlyDeduction: 3000, installments: 4, reason: 'Higher Education Course Fee', status: 'Pending' }
  ]);

  // 4. Leave Categories State
  const [leaveCategories, setLeaveCategories] = useState([
    { id: 'LVC-01', name: 'Casual Leave (CL)', code: 'CL', annualDays: 12, paid: true, desc: 'Short personal and unavoidable domestic leaves' },
    { id: 'LVC-02', name: 'Medical / Sick Leave (ML)', code: 'ML', annualDays: 10, paid: true, desc: 'Illness with registered medical practitioner certificate' },
    { id: 'LVC-03', name: 'Academic Duty Leave (DL)', code: 'DL', annualDays: 8, paid: true, desc: 'Official CBSE workshops, board evaluation & sports tournaments' },
    { id: 'LVC-04', name: 'Maternity Leave (MatL)', code: 'MatL', annualDays: 180, paid: true, desc: 'Maternity leave for female faculty as per government rules' },
    { id: 'LVC-05', name: 'Loss of Pay / Unpaid (LWP)', code: 'LWP', annualDays: 30, paid: false, desc: 'Unplanned extended leaves deducted from monthly payroll' }
  ]);

  // 5. Staff Leave Applications State
  const [leaveApplications, setLeaveApplications] = useState([
    { id: 'LV-2026-01', staffName: 'POORAN SINGH', role: 'Secondary Teacher', category: 'Casual Leave (CL)', fromDate: '2026-08-28', toDate: '2026-08-29', totalDays: 2, reason: 'Attending sister marriage in Agra', status: 'Approved', balanceLeft: 10 },
    { id: 'LV-2026-02', staffName: 'SWATI RAGHAV', role: 'Primary Teacher', category: 'Medical / Sick Leave (ML)', fromDate: '2026-08-24', toDate: '2026-08-26', totalDays: 3, reason: 'Severe viral fever and doctor rest advisory', status: 'Approved', balanceLeft: 7 },
    { id: 'LV-2026-03', staffName: 'CHOKHELAL', role: 'Bus Driver', category: 'Casual Leave (CL)', fromDate: '2026-09-04', toDate: '2026-09-05', totalDays: 2, reason: 'Village agricultural harvest work', status: 'Pending', balanceLeft: 11 }
  ]);

  // 6. Staff Awards State (Clean - Starts Fresh with 0 records)
  const [awards, setAwards] = useState(() => {
    try {
      const saved = localStorage.getItem('DMPS_STAFF_AWARDS');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('DMPS_STAFF_AWARDS', JSON.stringify(awards));
    } catch (e) {}
  }, [awards]);

  // Modals
  const [isAddTemplateModalOpen, setIsAddTemplateModalOpen] = useState(false);
  const [isAddAdvanceModalOpen, setIsAddAdvanceModalOpen] = useState(false);
  const [isAddLeaveCategoryModalOpen, setIsAddLeaveCategoryModalOpen] = useState(false);
  const [isApplyLeaveModalOpen, setIsApplyLeaveModalOpen] = useState(false);
  const [isAddAwardModalOpen, setIsAddAwardModalOpen] = useState(false);

  // Forms State
  const [templateForm, setTemplateForm] = useState({ name: '', basic: '', da: '', hra: '', medical: '', pf: '', tax: '' });
  const [advanceForm, setAdvanceForm] = useState({ staffName: 'SHWETA RAGHAV', requestedAmount: '', monthlyDeduction: '', reason: '' });
  const [leaveCategoryForm, setLeaveCategoryForm] = useState({ name: '', code: '', annualDays: '', paid: true, desc: '' });
  const [applyLeaveForm, setApplyLeaveForm] = useState({ staffName: 'SHWETA RAGHAV', category: 'Casual Leave (CL)', fromDate: '', toDate: '', totalDays: '1', reason: '' });
  const [awardForm, setAwardForm] = useState({ title: '', recipient: '', prize: '', category: 'Academic Excellence' });

  // Helper: Parse 'August 2026' => Date object (1st of that month)
  const parseMonthStr = (monthStr) => {
    if (!monthStr) return null;
    const clean = monthStr.replace(/\s*\(.*\)/, '').trim(); // remove parentheses
    const d = new Date(clean);
    return isNaN(d) ? null : d;
  };

  // Helper: Check if employee is eligible for salary in selected month
  const isSalaryEligible = (teacher, monthStr) => {
    const monthDate = parseMonthStr(monthStr);
    if (!monthDate) return true;
    const monthYear = monthDate.getFullYear() * 100 + monthDate.getMonth(); // YYYYMM number

    // Check joining date
    if (teacher.joiningDate) {
      const jd = new Date(teacher.joiningDate);
      const joinYM = jd.getFullYear() * 100 + jd.getMonth();
      if (monthYear < joinYM) return false; // selected month is before joining
    }

    // Check leaving date
    if (teacher.leavingDate && teacher.status === 'Left') {
      const ld = new Date(teacher.leavingDate);
      const leaveYM = ld.getFullYear() * 100 + ld.getMonth();
      if (monthYear > leaveYM) return false; // selected month is after leaving
    }

    return true;
  };

  // Helper: Calculate pro-rated salary (for partial months on joining/leaving)
  const calcProRatedSalary = (teacher, base, monthStr) => {
    if (!base) return 0;
    const monthDate = parseMonthStr(monthStr);
    if (!monthDate) return base;
    const monthYear = monthDate.getFullYear() * 100 + monthDate.getMonth();
    const daysInMonth = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0).getDate();

    let effectiveStart = 1;
    let effectiveEnd = daysInMonth;

    if (teacher.joiningDate) {
      const jd = new Date(teacher.joiningDate);
      const joinYM = jd.getFullYear() * 100 + jd.getMonth();
      if (monthYear === joinYM) effectiveStart = jd.getDate();
    }
    if (teacher.leavingDate && teacher.status === 'Left') {
      const ld = new Date(teacher.leavingDate);
      const leaveYM = ld.getFullYear() * 100 + ld.getMonth();
      if (monthYear === leaveYM) effectiveEnd = ld.getDate();
    }

    const effectiveDays = Math.max(0, effectiveEnd - effectiveStart + 1);
    if (effectiveDays < daysInMonth) {
      return Math.round((base / daysInMonth) * effectiveDays);
    }
    return base;
  };

  // Active employees (currently working)
  const activeTeachers = useMemo(() => teachers.filter(t => t.status !== 'Left'), [teachers]);
  // Former employees
  const formerTeachers = useMemo(() => teachers.filter(t => t.status === 'Left'), [teachers]);

  // Total Payroll Calculation (Sum of active staff salaries only)
  const totalPayrollExpenditure = useMemo(() => {
    return activeTeachers.reduce((acc, t) => acc + getStaffSalary(t), 0);
  }, [activeTeachers]);

  // Individual Salary Payment Modal State
  const [isPaySalaryModalOpen, setIsPaySalaryModalOpen] = useState(false);
  const [salaryPayForm, setSalaryPayForm] = useState({
    staffId: '',
    staffName: '',
    designation: '',
    employeeId: '',
    month: 'August 2026',
    baseSalary: 25000,
    deductionAmount: 0,
    deductionReason: '',
    advanceDeduction: 0,
    bonus: 0,
    netPayable: 25000,
    paidAmount: 25000,
    paymentMode: 'UPI / PhonePe / GPay',
    remarks: 'August 2026 Salary'
  });

  const handleOpenPaySalary = (staff) => {
    // 1. Check if month is prior to July (April, May, June) vs July onwards
    const isPreJuly = selectedMonth.includes('April') || selectedMonth.includes('May') || selectedMonth.includes('June');
    const base = getStaffSalary(staff);
    const effectiveBase = (isPreJuly && staff.preJulySalary) ? staff.preJulySalary : base;

    const proRated = calcProRatedSalary(staff, effectiveBase, selectedMonth);
    const isPartialMonth = proRated < effectiveBase;
    const deductionAmt = isPartialMonth ? (effectiveBase - proRated) : 0;
    const deductionNote = isPartialMonth ? `Pro-rated salary (partial month: joining/leaving date adjustment)` : '';

    // 2. Fetch Advance and Arrears balance for this employee
    const balSummary = schoolService.getStaffBalanceSummary ? schoolService.getStaffBalanceSummary(staff.id) : { advanceBalance: 0, pendingArrears: 0 };
    const advBalance = Number(balSummary.advanceBalance || 0);
    const arrearsBalance = Number(balSummary.pendingArrears || 0);

    const net = Math.max(0, proRated - advBalance + arrearsBalance);

    const existingPayment = getPaymentForStaff(staff.id, selectedMonth);
    if (existingPayment) {
      setSalaryPayForm({
        staffId: staff.id,
        staffName: staff.name,
        designation: staff.designation || 'Faculty',
        employeeId: staff.employeeId || staff.id,
        joiningDate: staff.joiningDate || '',
        leavingDate: staff.leavingDate || '',
        month: existingPayment.month || selectedMonth,
        baseSalary: existingPayment.baseSalary !== undefined ? existingPayment.baseSalary : effectiveBase,
        deductionAmount: existingPayment.deductionAmount || 0,
        deductionReason: existingPayment.deductionReason || '',
        advanceDeduction: existingPayment.advanceDeducted || 0,
        arrearsAdded: existingPayment.arrearsAdded || 0,
        bonus: existingPayment.bonus || 0,
        netPayable: existingPayment.netPayable !== undefined ? existingPayment.netPayable : net,
        paidAmount: existingPayment.paidAmount !== undefined ? existingPayment.paidAmount : net,
        paymentMode: existingPayment.paymentMode || 'UPI / PhonePe / GPay',
        remarks: existingPayment.remarks || `${selectedMonth} Salary Disbursed`
      });
    } else {
      setSalaryPayForm({
        staffId: staff.id,
        staffName: staff.name,
        designation: staff.designation || 'Faculty',
        employeeId: staff.employeeId || staff.id,
        joiningDate: staff.joiningDate || '',
        leavingDate: staff.leavingDate || '',
        month: selectedMonth,
        baseSalary: effectiveBase,
        deductionAmount: deductionAmt,
        deductionReason: deductionNote,
        advanceDeduction: advBalance,
        arrearsAdded: arrearsBalance,
        bonus: 0,
        netPayable: net,
        paidAmount: net,
        paymentMode: 'UPI / PhonePe / GPay',
        remarks: `${selectedMonth} Salary Disbursed`
      });
    }
    setIsPaySalaryModalOpen(true);
  };

  const handleSalaryFormChange = (field, value) => {
    setSalaryPayForm(prev => {
      let updated = { ...prev, [field]: value };
      if (field === 'month') {
        const staffObj = teachers.find(t => t.id === updated.staffId) || { id: updated.staffId, name: updated.staffName };
        const isPreJuly = value.includes('April') || value.includes('May') || value.includes('June');
        const base = getStaffSalary(staffObj);
        const effectiveBase = (isPreJuly && staffObj.preJulySalary) ? staffObj.preJulySalary : base;
        const existing = getPaymentForStaff(updated.staffId, value);
        if (existing) {
          updated.baseSalary = existing.baseSalary !== undefined ? existing.baseSalary : effectiveBase;
          updated.deductionAmount = existing.deductionAmount || 0;
          updated.deductionReason = existing.deductionReason || '';
          updated.advanceDeduction = existing.advanceDeducted || 0;
          updated.arrearsAdded = existing.arrearsAdded || 0;
          updated.bonus = existing.bonus || 0;
          updated.netPayable = existing.netPayable !== undefined ? existing.netPayable : effectiveBase;
          updated.paidAmount = existing.paidAmount !== undefined ? existing.paidAmount : effectiveBase;
          updated.paymentMode = existing.paymentMode || updated.paymentMode;
          updated.remarks = existing.remarks || `${value} Salary Disbursed`;
          return updated;
        } else {
          updated.baseSalary = effectiveBase;
        }
      }

      const base = Number(updated.baseSalary) || 0;
      const deduction = Number(updated.deductionAmount) || 0;
      const advDed = Number(updated.advanceDeduction) || 0;
      const arrAdd = Number(updated.arrearsAdded) || 0;
      const bon = Number(updated.bonus) || 0;
      const net = Math.max(0, base - deduction - advDed + arrAdd + bon);

      updated.netPayable = net;
      if (field !== 'paidAmount') {
        updated.paidAmount = net;
      }
      return updated;
    });
  };

  const handleConfirmSalaryPayment = (e) => {
    e.preventDefault();
    const paid = Number(salaryPayForm.paidAmount) || 0;
    const net = Number(salaryPayForm.netPayable) || 0;
    const base = Number(salaryPayForm.baseSalary) || 0;
    const extraAdvance = Math.max(0, paid - net);
    const unpaidArrears = Math.max(0, net - paid);
    const advDeducted = Number(salaryPayForm.advanceDeduction) || 0;
    const arrearsPaid = Number(salaryPayForm.arrearsAdded) || 0;

    // Save to schoolService ledger
    schoolService.saveStaffSalaryPayment({
      staffId: salaryPayForm.staffId,
      employeeId: salaryPayForm.employeeId,
      staffName: salaryPayForm.staffName,
      designation: salaryPayForm.designation,
      month: salaryPayForm.month,
      baseSalary: base,
      deductionAmount: Number(salaryPayForm.deductionAmount) || 0,
      deductionReason: salaryPayForm.deductionReason || '',
      advanceDeducted: advDeducted,
      arrearsAdded: arrearsPaid,
      arrearsPaid: Math.min(arrearsPaid, paid),
      bonus: Number(salaryPayForm.bonus) || 0,
      netPayable: net,
      paidAmount: paid,
      excessPaidAsAdvance: extraAdvance,
      unpaidArrearsRemaining: unpaidArrears,
      paymentMode: salaryPayForm.paymentMode,
      remarks: salaryPayForm.remarks
    });

    setPayrollRefresh(prev => prev + 1);

    if (extraAdvance > 0) {
      showToast(`💰 ₹${paid.toLocaleString('en-IN')} paid to ${salaryPayForm.staffName}! Extra ₹${extraAdvance.toLocaleString('en-IN')} recorded as Advance Salary (अगले महीने कटेगा).`, 'success');
    } else if (unpaidArrears > 0) {
      showToast(`⚠️ Partial payment of ₹${paid.toLocaleString('en-IN')} recorded for ${salaryPayForm.staffName}. Remaining Arrears: ₹${unpaidArrears.toLocaleString('en-IN')}.`, 'info');
    } else if (arrearsPaid > 0) {
      showToast(`✅ Full Salary of ₹${paid.toLocaleString('en-IN')} paid including previous arrears (+₹${arrearsPaid.toLocaleString('en-IN')})! All dues settled!`, 'success');
    } else {
      showToast(`✅ Salary of ₹${paid.toLocaleString('en-IN')} successfully paid to ${salaryPayForm.staffName} for ${salaryPayForm.month}!`, 'success');
    }

    setIsPaySalaryModalOpen(false);
  };

  const handleDisbursePayroll = () => {
    showToast(`Monthly payroll for ${selectedMonth} (₹${totalPayrollExpenditure.toLocaleString('en-IN')}) disbursed via Direct Bank Transfer! 💰`, 'success');
  };

  const handleApproveAdvance = (id) => {
    setAdvanceRequests(prev => prev.map(r => r.id === id ? { ...r, status: 'Approved' } : r));
    showToast(`Advance request ${id} approved! Disbursal scheduled with salary EMI deduction.`, 'success');
  };

  const handleRejectAdvance = (id) => {
    setAdvanceRequests(prev => prev.map(r => r.id === id ? { ...r, status: 'Rejected' } : r));
    showToast(`Advance request ${id} rejected.`, 'info');
  };

  const handleApproveLeave = (id) => {
    setLeaveApplications(prev => prev.map(l => l.id === id ? { ...l, status: 'Approved' } : l));
    showToast(`Leave Application ${id} approved by Principal! ✅`, 'success');
  };

  const handleRejectLeave = (id) => {
    setLeaveApplications(prev => prev.map(l => l.id === id ? { ...l, status: 'Rejected' } : l));
    showToast(`Leave Application ${id} rejected.`, 'info');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">

      {/* 🧭 Top HR Tabs — Payroll + Award only (Advance & Leave via Side Panel) */}
      <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-x-auto custom-scrollbar print:hidden">
        <div className="flex items-center gap-1 min-w-max text-xs font-bold">
          {/* Payroll Group */}
          <div className="flex items-center p-1 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 gap-1">
            <span className="text-[10px] uppercase font-black px-2 text-blue-800 dark:text-blue-300">PAYROLL:</span>
            <button
              onClick={() => setActiveTab('template')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'template' ? 'bg-blue-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-blue-900'}`}
            >
              Salary Template
            </button>
            <button
              onClick={() => setActiveTab('assign')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'assign' ? 'bg-blue-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-blue-900'}`}
            >
              Salary Assign
            </button>
            <button
              onClick={() => setActiveTab('payment')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'payment' ? 'bg-blue-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-blue-900'}`}
            >
              Salary Payment
            </button>
          </div>

          {/* Award */}
          <button
            onClick={() => setActiveTab('award')}
            className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 ${activeTab === 'award' ? 'bg-purple-600 text-white shadow-md font-black' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            <Award className="w-4 h-4 text-amber-400" /> Award ({awards.length})
          </button>
        </div>
      </div>

      {/* 🏛️ Page Title Bar (Hidden on Print) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 print:hidden">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-indigo-500/25">
            {activeTab.startsWith('leave') ? '🏖️' : activeTab.startsWith('advance') ? '💰' : activeTab === 'award' ? '👑' : '💳'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                {activeTab === 'template' ? 'Salary Grade & Pay Scale Templates' :
                 activeTab === 'assign' ? 'Staff Salary Structure & Bank Account Allocation' :
                 activeTab === 'payment' ? 'Monthly Staff Salary Disbursal & Pay Slip Generation' :
                 activeTab === 'advance-my' ? 'My Advance Salary & Loan Applications' :
                 activeTab === 'advance-manage' ? 'Staff Advance Salary Approval & EMI Management' :
                 activeTab === 'leave-category' ? 'Staff Leave Categories & Annual Quotas' :
                 activeTab === 'leave-my' ? 'My Leave Application & Balance' :
                 activeTab === 'leave-manage' ? 'Staff Leave Approvals & Absence Manager' :
                 'Faculty Awards, Honors & Annual Recognitions'}
              </h2>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Dadheech Memorial Public School • Human Resource & Faculty Administration
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">

          {activeTab === 'template' && (
            <button
              onClick={() => setIsAddTemplateModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Salary Template
            </button>
          )}

          {activeTab === 'advance-my' && (
            <button
              onClick={() => setIsAddAdvanceModalOpen(true)}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Apply for Advance
            </button>
          )}

          {activeTab === 'leave-category' && (
            <button
              onClick={() => setIsAddLeaveCategoryModalOpen(true)}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Leave Category
            </button>
          )}

          {activeTab === 'leave-my' && (
            <button
              onClick={() => setIsApplyLeaveModalOpen(true)}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Apply for Leave
            </button>
          )}

          {activeTab === 'award' && (
            <button
              onClick={() => setIsAddAwardModalOpen(true)}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Issue Staff Award
            </button>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 💳 1. PAYROLL - SALARY TEMPLATE (Exact match to DMPS Grades) */}
      {/* ========================================================================= */}
      {activeTab === 'template' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-indigo-600" /> Salary Grades & Pay Scales (वेतन श्रेणियां)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                School Basic Salary Grade slabs (July 2026 onwards) • 100% Direct Remuneration (No Tax/EPF Deductions)
              </p>
            </div>
            <button
              onClick={() => setIsAddTemplateModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Salary Grade
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-2xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5 w-12 text-center">Sl</th>
                  <th className="p-3.5">Branch</th>
                  <th className="p-3.5 font-bold">Salary Grades</th>
                  <th className="p-3.5 font-bold">Basic Salary</th>
                  <th className="p-3.5 text-center">Overtime Rate (Per Hour)</th>
                  <th className="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {templates.map((tpl, idx) => (
                  <tr key={tpl.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-3.5 text-center font-mono font-bold text-slate-400">{idx + 1}</td>
                    <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-300 uppercase text-[11px] tracking-tight">
                      {tpl.branch || 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)'}
                    </td>
                    <td className="p-3.5 font-bold font-mono text-indigo-700 dark:text-indigo-300">
                      {tpl.name}
                    </td>
                    <td className="p-3.5 font-mono font-black text-slate-900 dark:text-white text-sm">
                      ₹{tpl.basic.toFixed(2)}
                    </td>
                    <td className="p-3.5 text-center font-mono text-slate-500">
                      {tpl.overtimeRate || 0}
                    </td>
                    <td className="p-3.5 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => showToast(`Grade ${tpl.name} details: ₹${tpl.basic}/mo`, 'info')}
                          className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                          title="View Grade"
                        >
                          <FileText className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setEditingTemplate(tpl)}
                          className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-600 hover:bg-amber-100 dark:hover:bg-amber-900 transition-colors"
                          title="Edit Grade"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete Grade ${tpl.name}?`)) {
                              const filtered = templates.filter(t => t.id !== tpl.id);
                              saveTemplates(filtered);
                              showToast(`Grade ${tpl.name} removed`, 'warning');
                            }
                          }}
                          className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950 text-rose-600 hover:bg-rose-100 dark:hover:bg-rose-900 transition-colors"
                          title="Delete Grade"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📋 2. PAYROLL - SALARY ASSIGN */}
      {/* ========================================================================= */}
      {activeTab === 'assign' && (() => {
        const departmentsList = ['All', 'Administration', 'Secondary', 'Junior', 'Primary', 'Pre-Primary', 'Transport'];
        
        const filteredList = staffAssignments.filter(st => {
          const q = (assignSearchQuery || '').toLowerCase().trim();
          const matchesSearch = !q ||
            st.name?.toLowerCase().includes(q) ||
            st.employeeId?.toLowerCase().includes(q) ||
            st.designation?.toLowerCase().includes(q) ||
            st.department?.toLowerCase().includes(q) ||
            st.mobile?.includes(q);

          const matchesDept = assignDeptFilter === 'All' ||
            (st.department && st.department.toLowerCase().includes(assignDeptFilter.toLowerCase()));

          return matchesSearch && matchesDept;
        });

        const totalAssignedPayroll = staffAssignments
          .filter(st => st.status !== 'Left')
          .reduce((sum, st) => sum + (Number(st.assignedSalary) || 0), 0);

        return (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
            
            {/* 🏷️ Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-600" /> Staff Salary Grade Allocation (कर्मचारी वेतन आवंटन)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Individual assigned monthly salary grades & payment UPI/phone numbers • Changes permanently saved across ERP
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleBulkSaveAssignments}
                  className="px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-500/20 flex items-center gap-2 transition-all active:scale-95"
                >
                  <FileCheck className="w-4 h-4" /> 💾 Save All Salary Assignments
                </button>
              </div>
            </div>

            {/* 📊 Summary Stats Ribbon */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Staff Roster</span>
                <p className="text-xl font-black font-mono text-slate-900 dark:text-white mt-1">{staffAssignments.length} Employees</p>
                <span className="text-[10px] text-slate-500 font-semibold">{staffAssignments.filter(s => s.status !== 'Left').length} Active • {staffAssignments.filter(s => s.status === 'Left').length} Former</span>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60">
                <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Total Active Assigned Payroll</span>
                <p className="text-xl font-black font-mono text-indigo-700 dark:text-indigo-300 mt-1">₹{totalAssignedPayroll.toLocaleString('en-IN')}<span className="text-xs font-normal">/mo</span></p>
                <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold">Monthly Salary Outflow</span>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60">
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Payment Norm</span>
                <p className="text-xl font-black text-emerald-700 dark:text-emerald-300 mt-1">100% Direct</p>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">No TDS / No Unauthorized Deductions</span>
              </div>
            </div>

            {/* 🔍 Search & Department Filter Ribbon */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-slate-50 dark:bg-slate-800/40 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search staff by name, employee ID, role or mobile..."
                  value={assignSearchQuery}
                  onChange={(e) => setAssignSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pb-1 md:pb-0">
                {departmentsList.map(dept => (
                  <button
                    key={dept}
                    onClick={() => setAssignDeptFilter(dept)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                      assignDeptFilter === dept
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-indigo-300'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* 📋 Table of Staff Salary Allocations */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-x-auto shadow-2xs">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                  <tr>
                    <th className="p-3.5 w-12 text-center">Sl</th>
                    <th className="p-3.5">Employee Details</th>
                    <th className="p-3.5">Department</th>
                    <th className="p-3.5">Assigned Salary (Custom Amount & Preset Grade)</th>
                    <th className="p-3.5">Payment Mode / UPI Mobile</th>
                    <th className="p-3.5 text-right">Actions & Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filteredList.map((st, idx) => {
                    const isRowSaved = Boolean(savedRowsMap[st.staffId]);
                    const isFormer = st.status === 'Left';

                    return (
                      <tr 
                        key={st.staffId} 
                        className={`hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${
                          isRowSaved ? 'bg-emerald-50/30 dark:bg-emerald-950/20' : ''
                        } ${isFormer ? 'opacity-60 bg-slate-50/40 dark:bg-slate-900/40' : ''}`}
                      >
                        <td className="p-3.5 text-center font-mono font-bold text-slate-400">
                          {idx + 1}
                        </td>

                        <td className="p-3.5">
                          <div className="flex items-center gap-3">
                            <img
                              src={st.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(st.name)}&background=16a34a&color=fff&size=64&bold=true`}
                              alt={st.name}
                              className="w-9 h-9 rounded-xl object-cover shrink-0 border border-slate-200 dark:border-slate-700"
                              onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(st.name)}&background=16a34a&color=fff&size=64&bold=true`; }}
                            />
                            <div>
                              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                                <span>{st.name}</span>
                                {isFormer && (
                                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                                    Former
                                  </span>
                                )}
                              </div>
                              <div className="text-[10px] text-slate-400 font-mono">
                                {st.employeeId} • <span className="text-slate-600 dark:text-slate-300 font-semibold">{st.designation}</span>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="p-3.5">
                          <span className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold text-[11px] border border-indigo-100 dark:border-indigo-900/50">
                            {st.department || 'General'}
                          </span>
                        </td>

                        <td className="p-3.5">
                          <div className="flex flex-wrap items-center gap-2">
                            {/* Direct Editable Numeric Input */}
                            <div className="relative">
                              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 font-bold text-slate-400 text-xs">₹</span>
                              <input
                                type="number"
                                min="0"
                                step="100"
                                value={st.assignedSalary}
                                onChange={(e) => {
                                  const val = e.target.value === '' ? '' : Number(e.target.value);
                                  setStaffAssignments(prev => prev.map(item => item.staffId === st.staffId ? { ...item, assignedSalary: val } : item));
                                }}
                                className="w-28 pl-6 pr-2 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono font-black text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs"
                                placeholder="0"
                              />
                            </div>

                            {/* Quick Preset Dropdown */}
                            <select
                              value={st.assignedSalary}
                              onChange={(e) => {
                                const val = Number(e.target.value);
                                handleUpdateSingleSalary(st, val);
                              }}
                              className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold text-xs text-indigo-700 dark:text-indigo-300 focus:ring-2 focus:ring-indigo-500"
                            >
                              <option value="" disabled>Presets...</option>
                              {templates.map(tpl => (
                                <option key={tpl.id} value={tpl.basic}>Grade ₹{tpl.basic}</option>
                              ))}
                            </select>

                            {/* Instant Row Save Button */}
                            <button
                              onClick={() => handleUpdateSingleSalary(st, st.assignedSalary)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
                                isRowSaved
                                  ? 'bg-emerald-600 text-white shadow-sm'
                                  : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900'
                              }`}
                              title="Save this staff member's salary"
                            >
                              {isRowSaved ? <Check className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
                              <span>{isRowSaved ? 'Saved!' : 'Save'}</span>
                            </button>
                          </div>
                        </td>

                        <td className="p-3.5 text-xs text-slate-600 dark:text-slate-300 font-mono">
                          <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                            <span>📱</span> {st.mobile || '9719476606'}
                          </div>
                          <div className="text-[10px] text-indigo-600 dark:text-indigo-400 font-sans mt-0.5">
                            UPI: {st.upiId || `${st.mobile || '9719476606'}@upi`}
                          </div>
                        </td>

                        <td className="p-3.5 text-right">
                          <Badge variant={isFormer ? 'neutral' : 'success'}>
                            {isFormer ? 'Former Employee' : 'Assigned & Active'}
                          </Badge>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {filteredList.length === 0 && (
                <div className="p-8 text-center text-slate-500 text-xs font-semibold">
                  No staff members match the current filter "{assignSearchQuery || assignDeptFilter}".
                </div>
              )}
            </div>
          </div>
        );
      })()}

      {/* ========================================================================= */}
      {/* 💰 3. PAYROLL - SALARY PAYMENT */}
      {/* ========================================================================= */}
      {activeTab === 'payment' && (() => {
        const monthPayments = (schoolService.getStaffSalaryRecords ? schoolService.getStaffSalaryRecords() : []).filter(r => {
          const cleanTarget = (selectedMonth || '').replace(/\s*\(.*\)/, '').trim().toLowerCase();
          const cleanRec = (r.month || '').replace(/\s*\(.*\)/, '').trim().toLowerCase();
          return r.month === selectedMonth || cleanRec === cleanTarget;
        });
        const totalDisbursed = monthPayments.reduce((sum, p) => sum + Number(p.paidAmount || 0), 0);
        const paidStaffCount = monthPayments.length;
        const pendingStaffCount = Math.max(0, activeTeachers.length - paidStaffCount);

        return (
          <div className="space-y-5">
            {/* Top Month Selector & Info Alert */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase">Select Salary Disbursal Month:</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <select
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                      className="p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-black text-sm text-slate-900 dark:text-white"
                    >
                      {monthOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-500 font-semibold flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                100% Direct Remuneration (No Tax/EPF Cut)
              </div>
            </div>

            {/* June Vacation Special Notice */}
            {selectedMonth.includes('June') && (
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-800 flex items-start gap-3">
                <span className="text-2xl">☀️</span>
                <div>
                  <h4 className="font-black text-amber-900 dark:text-amber-200 text-sm">
                    June Summer Vacation (ग्रीष्मावकाश) - No Salary Disbursal
                  </h4>
                  <p className="text-xs text-amber-800 dark:text-amber-300 mt-0.5">
                    As per DMPS school norms, June month is summer vacation and is unpaid. The revised pay scale is active starting July 2026 onwards.
                  </p>
                </div>
              </div>
            )}

            {/* 3 Live Summary Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase">Total Monthly Salary Required</span>
                <p className="text-2xl font-black font-mono text-slate-900 dark:text-white">₹{totalPayrollExpenditure.toLocaleString('en-IN')}</p>
                <span className="text-[11px] text-slate-500 font-semibold">{activeTeachers.length} Active Staff Members</span>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-emerald-200 dark:border-emerald-800/60 shadow-sm space-y-1 bg-emerald-50/20">
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase flex items-center gap-1">
                  <span>✓ Total Disbursed for {selectedMonth}</span>
                </span>
                <p className="text-2xl font-black font-mono text-emerald-600">₹{totalDisbursed.toLocaleString('en-IN')}</p>
                <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-bold">
                  {paidStaffCount} of {activeTeachers.length} Staff Paid
                </span>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase">Pending Disbursal</span>
                <p className="text-2xl font-black font-mono text-amber-600">
                  {pendingStaffCount} Staff
                </p>
                <span className="text-[11px] text-slate-500 font-semibold">Ready for 1-Click UPI/Cash Pay</span>
              </div>
            </div>

            {/* ✅ Active Staff Payroll Table */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <h4 className="font-black text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Staff — {activeTeachers.length} Employees ({selectedMonth})
                </h4>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
                    Paid: {paidStaffCount} / {activeTeachers.length}
                  </span>
                  <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 rounded-full">
                    Total Outflow: ₹{totalPayrollExpenditure.toLocaleString('en-IN')}/mo
                  </span>
                </div>
              </div>
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                  <tr>
                    <th className="p-3.5">Employee</th>
                    <th className="p-3.5">Designation</th>
                    <th className="p-3.5">Joining Date</th>
                    <th className="p-3.5">Monthly Salary (₹)</th>
                    <th className="p-3.5">Payment Mobile / UPI</th>
                    <th className="p-3.5 text-right">Pay Action & Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {activeTeachers.map(t => {
                    const base = getStaffSalary(t);
                    const eligible = isSalaryEligible(t, selectedMonth);
                    const proRated = eligible ? calcProRatedSalary(t, base, selectedMonth) : 0;
                    const isPartial = proRated > 0 && proRated < base;
                    const paymentRecord = getPaymentForStaff(t.id, selectedMonth);
                    const isPaid = Boolean(paymentRecord);

                    return (
                      <tr key={t.id} className={`hover:bg-slate-50 dark:hover:bg-slate-800/50 ${!eligible ? 'opacity-40' : ''} ${isPaid ? 'bg-emerald-50/20 dark:bg-emerald-950/10' : ''}`}>
                        <td className="p-3.5">
                          <div className="flex items-center gap-2.5">
                            <img
                              src={t.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=16a34a&color=fff&size=64&bold=true`}
                              alt={t.name}
                              className="w-8 h-8 rounded-lg object-cover"
                              onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=16a34a&color=fff&size=64&bold=true`; }}
                            />
                            <div>
                              <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                                <span>{t.name}</span>
                                {isPaid && (
                                  <span className="px-1.5 py-0.2 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-black text-[9px]">
                                    ✓ PAID
                                  </span>
                                )}
                              </p>
                              <p className="text-[10px] text-slate-400 font-mono">{t.employeeId}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-300">
                          {t.designation} <span className="text-[10px] text-slate-400">({t.department})</span>
                        </td>
                        <td className="p-3.5">
                          <span className="font-mono text-slate-600 dark:text-slate-300">
                            {t.joiningDate ? new Date(t.joiningDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'}
                          </span>
                          {!eligible && (
                            <div className="text-[9px] font-bold text-rose-500 mt-0.5">❌ Not Eligible (Joined After / Not Started)</div>
                          )}
                        </td>
                        <td className="p-3.5">
                          {isPaid ? (
                            <div>
                              <span className="font-mono font-black text-emerald-600 dark:text-emerald-400 text-sm">
                                ₹{Number(paymentRecord.paidAmount || 0).toLocaleString('en-IN')}
                              </span>
                              <div className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold mt-0.5">
                                Paid via {paymentRecord.paymentMode?.split('/')[0] || 'UPI'}
                              </div>
                            </div>
                          ) : eligible ? (
                            <span>
                              <span className="font-mono font-black text-slate-900 dark:text-white text-sm">
                                ₹{proRated.toLocaleString('en-IN')}
                              </span>
                              {isPartial && (
                                <span className="ml-1.5 text-[9px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full">
                                  Pro-rated
                                </span>
                              )}
                            </span>
                          ) : (
                            <span className="text-slate-400">—</span>
                          )}
                        </td>
                        <td className="p-3.5 font-mono text-slate-600 dark:text-slate-300">
                          <div>📱 {t.phone || t.mobile || '—'}</div>
                          <div className="text-[10px] text-indigo-600 dark:text-indigo-400">UPI: {t.upiId || t.phone || t.mobile || '—'}</div>
                        </td>
                        <td className="p-3.5 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {isPaid ? (
                              <>
                                <span className="px-2.5 py-1.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 rounded-xl font-black text-[11px] flex items-center gap-1 border border-emerald-300 dark:border-emerald-800 shadow-2xs">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Disbursed
                                </span>
                                <button
                                  onClick={() => handleOpenPaySalary(t)}
                                  className="px-2.5 py-1.5 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 rounded-xl font-bold text-[10px] transition-colors"
                                  title="Edit / Re-Disburse"
                                >
                                  Edit Pay
                                </button>
                              </>
                            ) : eligible ? (
                              <button
                                onClick={() => handleOpenPaySalary(t)}
                                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-[11px] shadow-sm flex items-center gap-1 transition-all hover:scale-105 cursor-pointer"
                              >
                                <DollarSign className="w-3.5 h-3.5" /> Pay Salary
                              </button>
                            ) : (
                              <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-xl font-bold text-[11px]">
                                Not Eligible
                              </span>
                            )}
                            <button
                              onClick={() => {
                                setSelectedStaff(t);
                                setIsPaySlipModalOpen(true);
                              }}
                              className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 rounded-xl font-bold text-[11px] cursor-pointer"
                            >
                              <Printer className="w-3.5 h-3.5 inline mr-1" /> Slip
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* 🔴 Former Staff Section (Left / Resigned) */}
            {formerTeachers.length > 0 && (
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-rose-200/60 dark:border-rose-900/40 shadow-sm overflow-hidden">
                <div className="px-4 py-3 border-b border-rose-100 dark:border-rose-900/30 flex items-center justify-between bg-rose-50/60 dark:bg-rose-950/20">
                  <h4 className="font-black text-rose-800 dark:text-rose-300 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    Former Staff (Resigned / Left) — {formerTeachers.length} Records
                  </h4>
                  <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-950 px-3 py-1 rounded-full">
                    ⚠️ Salary eligible only upto leaving date
                  </span>
                </div>
                <table className="w-full text-left text-xs">
                  <thead className="bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 font-black uppercase text-[10px]">
                    <tr>
                      <th className="p-3.5">Employee</th>
                      <th className="p-3.5">Designation</th>
                      <th className="p-3.5">Joining Date</th>
                      <th className="p-3.5">Last Working Date</th>
                      <th className="p-3.5">Final Salary (₹)</th>
                      <th className="p-3.5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-rose-50 dark:divide-rose-900/20">
                    {formerTeachers.map(t => {
                      const base = getStaffSalary(t);
                      const eligible = isSalaryEligible(t, selectedMonth);
                      const proRated = eligible ? calcProRatedSalary(t, base, selectedMonth) : 0;
                      const paymentRecord = getPaymentForStaff(t.id, selectedMonth);
                      const isPaid = Boolean(paymentRecord);

                      return (
                        <tr key={t.id} className="hover:bg-rose-50/60 dark:hover:bg-rose-950/20 opacity-80">
                          <td className="p-3.5">
                            <div className="flex items-center gap-2.5">
                              <img
                                src={t.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=e11d48&color=fff&size=64&bold=true`}
                                alt={t.name}
                                className="w-8 h-8 rounded-lg object-cover grayscale"
                                onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=e11d48&color=fff&size=64&bold=true`; }}
                              />
                              <div>
                                <p className="font-bold text-slate-600 dark:text-slate-400 line-through">{t.name}</p>
                                <p className="text-[10px] text-slate-400 font-mono">{t.employeeId}</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-3.5 text-slate-500 dark:text-slate-500">
                            {t.designation} <span className="text-[10px]">({t.department})</span>
                          </td>
                          <td className="p-3.5 font-mono text-slate-500">
                            {t.joiningDate ? new Date(t.joiningDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'}
                          </td>
                          <td className="p-3.5">
                            <span className="font-mono font-bold text-rose-600 dark:text-rose-400">
                              {t.leavingDate ? new Date(t.leavingDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'}
                            </span>
                            <Badge variant="danger" className="ml-2">Left / Resigned</Badge>
                          </td>
                          <td className="p-3.5 font-mono font-black">
                            {isPaid ? (
                              <span className="text-emerald-700 dark:text-emerald-400">
                                ₹{Number(paymentRecord.paidAmount || 0).toLocaleString('en-IN')}
                                <span className="ml-1.5 text-[9px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-full">PAID ✓</span>
                              </span>
                            ) : eligible ? (
                              <span className="text-amber-700 dark:text-amber-400">
                                ₹{proRated.toLocaleString('en-IN')}
                                <span className="ml-1.5 text-[9px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full">Final / Pro-rated</span>
                              </span>
                            ) : (
                              <span className="text-slate-400">Not Applicable</span>
                            )}
                          </td>
                          <td className="p-3.5 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              {isPaid ? (
                                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-[10px] font-bold">
                                  ✓ Settled
                                </span>
                              ) : eligible ? (
                                <button
                                  onClick={() => handleOpenPaySalary(t)}
                                  className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-[11px] shadow-sm flex items-center gap-1 transition-all"
                                >
                                  <DollarSign className="w-3.5 h-3.5" /> Final Pay
                                </button>
                              ) : (
                                <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-xl font-bold text-[11px]">
                                  Completed
                                </span>
                              )}
                              <button
                                onClick={() => {
                                  setSelectedStaff(t);
                                  setIsPaySlipModalOpen(true);
                                }}
                                className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 rounded-xl font-bold text-[11px]"
                              >
                                <Printer className="w-3.5 h-3.5 inline mr-1" /> Slip
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );
      })()}

      {/* ========================================================================= */}
      {/* 💰 4. ADVANCE SALARY - MY APPLICATION */}
      {/* ========================================================================= */}
      {activeTab === 'advance-my' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Wallet className="w-5 h-5 text-amber-600" /> My Advance Salary Applications
              </h3>
              <p className="text-xs text-slate-500">Apply for emergency advance salary with automatic monthly EMI payroll deductions</p>
            </div>
            <button
              onClick={() => setIsAddAdvanceModalOpen(true)}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Apply New Advance
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Req #</th>
                  <th className="p-3.5">Date</th>
                  <th className="p-3.5">Requested Amount</th>
                  <th className="p-3.5">Monthly EMI Deduction</th>
                  <th className="p-3.5">Installments</th>
                  <th className="p-3.5">Reason</th>
                  <th className="p-3.5 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {advanceRequests.map(adv => (
                  <tr key={adv.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-indigo-600">{adv.id}</td>
                    <td className="p-3.5 font-mono text-slate-500">{adv.date}</td>
                    <td className="p-3.5 font-mono font-black text-emerald-600">₹{adv.requestedAmount.toLocaleString('en-IN')}</td>
                    <td className="p-3.5 font-mono font-bold text-rose-500">₹{adv.monthlyDeduction.toLocaleString('en-IN')}/mo</td>
                    <td className="p-3.5 font-mono font-bold text-slate-600 dark:text-slate-300">{adv.installments} Months</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400">{adv.reason}</td>
                    <td className="p-3.5 text-center">
                      <Badge variant={adv.status === 'Approved' ? 'success' : adv.status === 'Rejected' ? 'danger' : 'warning'}>
                        {adv.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 💰 5. ADVANCE SALARY - MANAGE APPLICATION */}
      {/* ========================================================================= */}
      {activeTab === 'advance-manage' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-amber-600" /> Advance Salary Requests & Approval Manager
            </h3>
            <p className="text-xs text-slate-500">Review faculty advance requests, approve disbursals, and monitor repayment schedules</p>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Req #</th>
                  <th className="p-3.5">Staff Name</th>
                  <th className="p-3.5">Designation</th>
                  <th className="p-3.5 font-mono">Amount</th>
                  <th className="p-3.5 font-mono">Monthly EMI</th>
                  <th className="p-3.5">Reason</th>
                  <th className="p-3.5 text-center">Status</th>
                  <th className="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {advanceRequests.map(adv => (
                  <tr key={adv.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-indigo-600">{adv.id}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{adv.staffName}</td>
                    <td className="p-3.5 text-slate-500">{adv.role}</td>
                    <td className="p-3.5 font-mono font-black text-emerald-600">₹{adv.requestedAmount.toLocaleString('en-IN')}</td>
                    <td className="p-3.5 font-mono font-bold text-rose-500">₹{adv.monthlyDeduction.toLocaleString('en-IN')}/mo</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400">{adv.reason}</td>
                    <td className="p-3.5 text-center">
                      <Badge variant={adv.status === 'Approved' ? 'success' : adv.status === 'Rejected' ? 'danger' : 'warning'}>
                        {adv.status}
                      </Badge>
                    </td>
                    <td className="p-3.5 text-right">
                      {adv.status === 'Pending' ? (
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => handleApproveAdvance(adv.id)}
                            className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-[10px] flex items-center gap-1"
                          >
                            <Check className="w-3 h-3" /> Approve
                          </button>
                          <button
                            onClick={() => handleRejectAdvance(adv.id)}
                            className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold text-[10px] flex items-center gap-1"
                          >
                            <X className="w-3 h-3" /> Reject
                          </button>
                        </div>
                      ) : (
                        <span className="text-[10px] font-bold text-slate-400">Processed</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🏖️ 6. LEAVE - CATEGORY */}
      {/* ========================================================================= */}
      {activeTab === 'leave-category' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Umbrella className="w-5 h-5 text-emerald-600" /> Leave Categories & Annual Entitlement Quota
              </h3>
              <p className="text-xs text-slate-500">Define leave types, yearly quota limits, paid/unpaid conditions and rules</p>
            </div>
            <button
              onClick={() => setIsAddLeaveCategoryModalOpen(true)}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Leave Category
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {leaveCategories.map(cat => (
              <div key={cat.id} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 hover:border-emerald-400 transition-all">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 uppercase">
                    {cat.code}
                  </span>
                  <Badge variant={cat.paid ? 'success' : 'danger'}>
                    {cat.paid ? 'Paid Leave' : 'Unpaid (LWP)'}
                  </Badge>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">{cat.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{cat.desc}</p>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 font-bold text-xs text-slate-700 dark:text-slate-300 flex justify-between">
                  <span>Annual Quota:</span>
                  <span className="font-mono font-black text-emerald-600">{cat.annualDays} Days / Year</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🏖️ 7. LEAVE - MY APPLICATION */}
      {/* ========================================================================= */}
      {activeTab === 'leave-my' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-600" /> My Leave Applications & Balance
              </h3>
              <p className="text-xs text-slate-500">Apply for casual, medical or duty leaves and check your approval status</p>
            </div>
            <button
              onClick={() => setIsApplyLeaveModalOpen(true)}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Apply For Leave
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">App #</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5 font-mono">From Date</th>
                  <th className="p-3.5 font-mono">To Date</th>
                  <th className="p-3.5">Days</th>
                  <th className="p-3.5">Reason</th>
                  <th className="p-3.5">Balance Left</th>
                  <th className="p-3.5 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {leaveApplications.map(lv => (
                  <tr key={lv.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-indigo-600">{lv.id}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{lv.category}</td>
                    <td className="p-3.5 font-mono text-slate-600 dark:text-slate-300">{lv.fromDate}</td>
                    <td className="p-3.5 font-mono text-slate-600 dark:text-slate-300">{lv.toDate}</td>
                    <td className="p-3.5 font-mono font-black text-emerald-600">{lv.totalDays} Days</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400">{lv.reason}</td>
                    <td className="p-3.5 font-mono font-bold text-indigo-600">{lv.balanceLeft} Days</td>
                    <td className="p-3.5 text-center">
                      <Badge variant={lv.status === 'Approved' ? 'success' : lv.status === 'Rejected' ? 'danger' : 'warning'}>
                        {lv.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🏖️ 8. LEAVE - MANAGE APPLICATION */}
      {/* ========================================================================= */}
      {activeTab === 'leave-manage' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Umbrella className="w-5 h-5 text-emerald-600" /> Staff Leave Applications & Approvals Manager
            </h3>
            <p className="text-xs text-slate-500">Review teacher and support staff absence requests, inspect leave quotas, and approve/reject</p>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">App #</th>
                  <th className="p-3.5">Staff Name</th>
                  <th className="p-3.5">Designation</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5 font-mono">Duration</th>
                  <th className="p-3.5">Reason</th>
                  <th className="p-3.5 text-center">Status</th>
                  <th className="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {leaveApplications.map(lv => (
                  <tr key={lv.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-indigo-600">{lv.id}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{lv.staffName}</td>
                    <td className="p-3.5 text-slate-500">{lv.role}</td>
                    <td className="p-3.5 font-medium text-emerald-700 dark:text-emerald-400">{lv.category}</td>
                    <td className="p-3.5 font-mono text-xs">
                      <div>{lv.fromDate} to {lv.toDate}</div>
                      <span className="font-bold text-indigo-600">({lv.totalDays} Days)</span>
                    </td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400">{lv.reason}</td>
                    <td className="p-3.5 text-center">
                      <Badge variant={lv.status === 'Approved' ? 'success' : lv.status === 'Rejected' ? 'danger' : 'warning'}>
                        {lv.status}
                      </Badge>
                    </td>
                    <td className="p-3.5 text-right">
                      {lv.status === 'Pending' ? (
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => handleApproveLeave(lv.id)}
                            className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-[10px] flex items-center gap-1"
                          >
                            <Check className="w-3 h-3" /> Approve
                          </button>
                          <button
                            onClick={() => handleRejectLeave(lv.id)}
                            className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold text-[10px] flex items-center gap-1"
                          >
                            <X className="w-3 h-3" /> Reject
                          </button>
                        </div>
                      ) : (
                        <span className="text-[10px] font-bold text-slate-400">Processed</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 👑 9. AWARD */}
      {/* ========================================================================= */}
      {activeTab === 'award' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" /> Faculty Awards, Honors & Recognition
              </h3>
              <p className="text-xs text-slate-500">Recognize outstanding teaching, 100% punctuality, board exam results, and transport safety</p>
            </div>
            <button
              onClick={() => setIsAddAwardModalOpen(true)}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Issue New Award
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {awards.map(awd => (
              <div key={awd.id} className="p-6 rounded-3xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-3 hover:border-amber-400 transition-all">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-bold text-xs">
                  <Award className="w-4 h-4" /> {awd.category}
                </div>
                <h4 className="text-base font-black text-slate-900 dark:text-white">{awd.title}</h4>
                <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{awd.recipient}</p>
                <div className="pt-2 border-t border-amber-200 dark:border-amber-900/40 text-xs text-slate-600 dark:text-slate-400">
                  Prize: <strong className="text-amber-800 dark:text-amber-300">{awd.prize}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📦 MODALS */}
      {/* ========================================================================= */}

      {/* Add Salary Template Modal */}
      {isAddTemplateModalOpen && (
        <Modal
          isOpen={isAddTemplateModalOpen}
          onClose={() => setIsAddTemplateModalOpen(false)}
          title="💳 Add New Salary Template Grade"
          maxWidth="max-w-md"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!templateForm.name.trim()) return;
              const basic = (templateForm.basic !== undefined && templateForm.basic !== null && templateForm.basic !== '')
                ? Number(templateForm.basic)
                : 0;
              const cleanBasic = isNaN(basic) ? 0 : basic;

              const newTpl = {
                id: `GRD-${cleanBasic}-${Date.now().toString().slice(-4)}`,
                name: templateForm.name,
                basic: cleanBasic,
                overtimeRate: 0,
                branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL'
              };

              saveTemplates([...templates, newTpl]);
              setIsAddTemplateModalOpen(false);
              setTemplateForm({ name: '', basic: '', da: '', hra: '', medical: '', pf: '', tax: '' });
              showToast(`Salary Grade "${newTpl.name}" (₹${cleanBasic}) created! 💳`, 'success');
            }}
            className="space-y-4 text-xs"
          >
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Grade / Template Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. 0 (Honorary / ₹0) or 12000"
                value={templateForm.name}
                onChange={(e) => setTemplateForm({ ...templateForm, name: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Basic Monthly Pay (₹) *</label>
              <input
                type="number"
                required
                min="0"
                placeholder="0 for Honorary or amount in ₹"
                value={templateForm.basic}
                onChange={(e) => setTemplateForm({ ...templateForm, basic: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
              />
              <p className="text-[10px] text-slate-400 mt-1">Enter 0 for honorary, voluntary, or unpaid designations.</p>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddTemplateModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow"
              >
                Create Template
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Edit Salary Template Modal */}
      {editingTemplate && (
        <Modal
          isOpen={Boolean(editingTemplate)}
          onClose={() => setEditingTemplate(null)}
          title={`✏️ Edit Salary Grade: ${editingTemplate.name}`}
          maxWidth="max-w-md"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const basic = (editingTemplate.basic !== undefined && editingTemplate.basic !== null && editingTemplate.basic !== '')
                ? Number(editingTemplate.basic)
                : 0;
              const cleanBasic = isNaN(basic) ? 0 : basic;
              const updated = templates.map(t => t.id === editingTemplate.id ? {
                ...editingTemplate,
                name: editingTemplate.name || `${cleanBasic}`,
                basic: cleanBasic
              } : t);
              saveTemplates(updated);
              setEditingTemplate(null);
              showToast(`Salary Grade updated to ₹${cleanBasic.toLocaleString('en-IN')}! 💳`, 'success');
            }}
            className="space-y-4 text-xs"
          >
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Grade / Template Name *</label>
              <input
                type="text"
                required
                value={editingTemplate.name}
                onChange={(e) => setEditingTemplate({ ...editingTemplate, name: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Basic Monthly Pay (₹) *</label>
              <input
                type="number"
                required
                min="0"
                value={editingTemplate.basic}
                onChange={(e) => setEditingTemplate({ ...editingTemplate, basic: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
              />
              <p className="text-[10px] text-slate-400 mt-1">Set to 0 for honorary, voluntary, or zero-salary roles.</p>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setEditingTemplate(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow"
              >
                Save Changes
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Apply Advance Salary Modal */}
      {isAddAdvanceModalOpen && (
        <Modal
          isOpen={isAddAdvanceModalOpen}
          onClose={() => setIsAddAdvanceModalOpen(false)}
          title="💰 Apply for Advance Salary / Staff Loan"
          maxWidth="max-w-md"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const amt = Number(advanceForm.requestedAmount);
              const emi = Number(advanceForm.monthlyDeduction);
              if (!amt || amt <= 0) return;

              const newReq = {
                id: `ADV-${String(advanceRequests.length + 1).padStart(2, '0')}`,
                staffId: 'TCH-004',
                staffName: advanceForm.staffName,
                role: 'Faculty',
                requestedAmount: amt,
                date: new Date().toISOString().split('T')[0],
                monthlyDeduction: emi || Math.round(amt / 4),
                installments: emi ? Math.ceil(amt / emi) : 4,
                reason: advanceForm.reason || 'Personal Emergency',
                status: 'Pending'
              };

              setAdvanceRequests([newReq, ...advanceRequests]);
              setIsAddAdvanceModalOpen(false);
              showToast(`Advance application of ₹${amt.toLocaleString('en-IN')} submitted to Principal!`, 'success');
            }}
            className="space-y-4 text-xs"
          >
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select Staff Member *</label>
              <select
                value={advanceForm.staffName}
                onChange={(e) => setAdvanceForm({ ...advanceForm, staffName: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              >
                {teachers.map(t => (
                  <option key={t.id} value={t.name}>{t.name} ({t.designation})</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Advance Amount (₹) *</label>
                <input
                  type="number"
                  required
                  placeholder="15000"
                  value={advanceForm.requestedAmount}
                  onChange={(e) => setAdvanceForm({ ...advanceForm, requestedAmount: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold text-emerald-600"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Monthly EMI Deduction (₹)</label>
                <input
                  type="number"
                  placeholder="3000"
                  value={advanceForm.monthlyDeduction}
                  onChange={(e) => setAdvanceForm({ ...advanceForm, monthlyDeduction: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold text-rose-500"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Reason for Advance *</label>
              <textarea
                required
                rows={3}
                placeholder="Reason for advance requirement..."
                value={advanceForm.reason}
                onChange={(e) => setAdvanceForm({ ...advanceForm, reason: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddAdvanceModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow"
              >
                Submit Application
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Apply Leave Modal */}
      {isApplyLeaveModalOpen && (
        <Modal
          isOpen={isApplyLeaveModalOpen}
          onClose={() => setIsApplyLeaveModalOpen(false)}
          title="🏖️ Submit Staff Leave Application"
          maxWidth="max-w-md"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!applyLeaveForm.fromDate || !applyLeaveForm.toDate) return;

              const newLv = {
                id: `LV-2026-${String(leaveApplications.length + 1).padStart(2, '0')}`,
                staffName: applyLeaveForm.staffName,
                role: 'Faculty',
                category: applyLeaveForm.category,
                fromDate: applyLeaveForm.fromDate,
                toDate: applyLeaveForm.toDate,
                totalDays: Number(applyLeaveForm.totalDays) || 1,
                reason: applyLeaveForm.reason || 'Personal Work',
                status: 'Pending',
                balanceLeft: 10
              };

              setLeaveApplications([newLv, ...leaveApplications]);
              setIsApplyLeaveModalOpen(false);
              showToast(`Leave application submitted to Principal for approval! 🏖️`, 'success');
            }}
            className="space-y-4 text-xs"
          >
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Applicant Staff Member *</label>
              <select
                value={applyLeaveForm.staffName}
                onChange={(e) => setApplyLeaveForm({ ...applyLeaveForm, staffName: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              >
                {teachers.map(t => (
                  <option key={t.id} value={t.name}>{t.name} ({t.designation})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Leave Category *</label>
              <select
                value={applyLeaveForm.category}
                onChange={(e) => setApplyLeaveForm({ ...applyLeaveForm, category: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              >
                {leaveCategories.map(c => (
                  <option key={c.id} value={c.name}>{c.name} ({c.annualDays} days quota)</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">From Date *</label>
                <input
                  type="date"
                  required
                  value={applyLeaveForm.fromDate}
                  onChange={(e) => setApplyLeaveForm({ ...applyLeaveForm, fromDate: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">To Date *</label>
                <input
                  type="date"
                  required
                  value={applyLeaveForm.toDate}
                  onChange={(e) => setApplyLeaveForm({ ...applyLeaveForm, toDate: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Reason for Leave *</label>
              <textarea
                required
                rows={3}
                placeholder="Detail the reason for leave..."
                value={applyLeaveForm.reason}
                onChange={(e) => setApplyLeaveForm({ ...applyLeaveForm, reason: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsApplyLeaveModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow"
              >
                Submit Leave
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Add Leave Category Modal */}
      {isAddLeaveCategoryModalOpen && (
        <Modal
          isOpen={isAddLeaveCategoryModalOpen}
          onClose={() => setIsAddLeaveCategoryModalOpen(false)}
          title="🏖️ Add Leave Category & Policy"
          maxWidth="max-w-md"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!leaveCategoryForm.name.trim()) return;
              const newCat = {
                id: `LVC-${String(leaveCategories.length + 1).padStart(2, '0')}`,
                name: leaveCategoryForm.name,
                code: leaveCategoryForm.code || leaveCategoryForm.name.slice(0, 3).toUpperCase(),
                annualDays: Number(leaveCategoryForm.annualDays) || 10,
                paid: leaveCategoryForm.paid,
                desc: leaveCategoryForm.desc || 'Staff Leave Policy'
              };
              setLeaveCategories([...leaveCategories, newCat]);
              setIsAddLeaveCategoryModalOpen(false);
              showToast(`Leave category "${newCat.name}" added!`, 'success');
            }}
            className="space-y-4 text-xs"
          >
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Category Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Paternity Leave"
                value={leaveCategoryForm.name}
                onChange={(e) => setLeaveCategoryForm({ ...leaveCategoryForm, name: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Short Code</label>
                <input
                  type="text"
                  placeholder="e.g. PL"
                  value={leaveCategoryForm.code}
                  onChange={(e) => setLeaveCategoryForm({ ...leaveCategoryForm, code: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono uppercase"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Annual Days Quota</label>
                <input
                  type="number"
                  placeholder="15"
                  value={leaveCategoryForm.annualDays}
                  onChange={(e) => setLeaveCategoryForm({ ...leaveCategoryForm, annualDays: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Description</label>
              <input
                type="text"
                placeholder="e.g. Leave for new fathers..."
                value={leaveCategoryForm.desc}
                onChange={(e) => setLeaveCategoryForm({ ...leaveCategoryForm, desc: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddLeaveCategoryModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow"
              >
                Save Category
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Add Award Modal */}
      {isAddAwardModalOpen && (
        <Modal
          isOpen={isAddAwardModalOpen}
          onClose={() => setIsAddAwardModalOpen(false)}
          title="👑 Issue Staff Honor & Award"
          maxWidth="max-w-md"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!awardForm.title.trim()) return;
              const newAwd = {
                id: `AWD-${String(awards.length + 1).padStart(2, '0')}`,
                title: awardForm.title,
                recipient: awardForm.recipient || 'Dr. Sonu Kumar',
                date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
                prize: awardForm.prize || 'Gold Medal + Certificate',
                category: awardForm.category
              };
              setAwards([...awards, newAwd]);
              setIsAddAwardModalOpen(false);
              showToast(`Award "${newAwd.title}" conferred to ${newAwd.recipient}! 👑`, 'success');
            }}
            className="space-y-4 text-xs"
          >
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Award Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. Best STEM Educator of the Year"
                value={awardForm.title}
                onChange={(e) => setAwardForm({ ...awardForm, title: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Recipient Staff Member *</label>
              <select
                value={awardForm.recipient}
                onChange={(e) => setAwardForm({ ...awardForm, recipient: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              >
                {teachers.map(t => (
                  <option key={t.id} value={`${t.name} (${t.designation})`}>{t.name} ({t.designation})</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Award Category</label>
                <select
                  value={awardForm.category}
                  onChange={(e) => setAwardForm({ ...awardForm, category: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                >
                  <option value="Academic Excellence">Academic Excellence</option>
                  <option value="Punctuality">Punctuality</option>
                  <option value="Transport Operations">Transport Operations</option>
                  <option value="Distinguished Service">Distinguished Service</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Prize / Cash Reward</label>
                <input
                  type="text"
                  placeholder="e.g. ₹5,000 Cash + Shield"
                  value={awardForm.prize}
                  onChange={(e) => setAwardForm({ ...awardForm, prize: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddAwardModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white shadow"
              >
                Issue Award
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Printable Pay Slip Modal */}
      {isPaySlipModalOpen && selectedStaff && (
        <Modal
          isOpen={isPaySlipModalOpen}
          onClose={() => setIsPaySlipModalOpen(false)}
          title={`Staff Pay Slip • ${selectedStaff.name} (${selectedMonth})`}
          maxWidth="max-w-3xl"
        >
          <PrintablePaySlip
            staff={selectedStaff}
            month={selectedMonth}
            schoolInfo={schoolInfo}
            onClose={() => setIsPaySlipModalOpen(false)}
          />
        </Modal>
      )}

      {/* ========================================================== */}
      {/* 💰 MODAL: INDIVIDUAL STAFF SALARY PAYMENT & DEDUCTIONS     */}
      {/* ========================================================== */}
      <Modal
        isOpen={isPaySalaryModalOpen}
        onClose={() => setIsPaySalaryModalOpen(false)}
        title={`Disburse Salary: ${salaryPayForm.staffName} (${salaryPayForm.employeeId})`}
        maxWidth="max-w-2xl"
      >
        <form onSubmit={handleConfirmSalaryPayment} className="space-y-4 text-xs">
          {/* Staff Info Banner with Editable Base Salary */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-md">
                  {salaryPayForm.designation}
                </span>
                <span className="text-[10px] font-bold bg-emerald-900/50 px-2 py-0.5 rounded-md text-emerald-200">
                  Session 2026-27
                </span>
              </div>
              <h3 className="text-lg font-black uppercase mt-1">{salaryPayForm.staffName}</h3>
              <p className="text-xs text-emerald-100 font-mono">Emp ID: {salaryPayForm.employeeId}</p>
            </div>
            <div className="bg-white/10 p-2.5 rounded-xl border border-white/20 text-right">
              <label className="text-[10px] uppercase font-bold text-emerald-100 block mb-0.5">
                Base Monthly Salary for {salaryPayForm.month} (₹)
              </label>
              <div className="flex items-center justify-end gap-1.5">
                <span className="text-sm font-bold font-mono">₹</span>
                <input
                  type="number"
                  min="0"
                  value={salaryPayForm.baseSalary}
                  onChange={(e) => handleSalaryFormChange('baseSalary', e.target.value)}
                  className="w-28 p-1.5 rounded-lg bg-white text-slate-900 text-right font-black font-mono text-sm border-0 focus:ring-2 focus:ring-amber-400"
                  title="Modify base salary for this month if different (e.g. Pre-July revision)"
                />
              </div>
            </div>
          </div>

          {/* Status Alert Banner if Already Paid */}
          {(() => {
            const currentPaid = getPaymentForStaff(salaryPayForm.staffId, salaryPayForm.month);
            if (!currentPaid) return null;
            return (
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 border-2 border-emerald-500/60 rounded-2xl flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow">✓</div>
                  <div>
                    <p className="font-black text-emerald-900 dark:text-emerald-200 text-xs flex items-center gap-1.5">
                      <span>Status: Disbursed & Paid</span>
                      <span className="font-mono bg-emerald-200 dark:bg-emerald-900 px-1.5 py-0.2 rounded text-[10px]">
                        ₹{Number(currentPaid.paidAmount || 0).toLocaleString('en-IN')}
                      </span>
                    </p>
                    <p className="text-[10.5px] text-emerald-700 dark:text-emerald-400 font-medium mt-0.5">
                      Paid on {currentPaid.disbursementDate ? new Date(currentPaid.disbursementDate).toLocaleDateString('en-IN') : 'Recently'} via {currentPaid.paymentMode} • You can edit details and re-save if needed.
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-emerald-600 text-white font-black text-[10px] rounded-lg shrink-0 uppercase tracking-wider">
                  PAID ✓
                </span>
              </div>
            );
          })()}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Salary Month (वेतन माह)
              </label>
              <select
                value={salaryPayForm.month}
                onChange={(e) => handleSalaryFormChange('month', e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
              >
                {monthOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Payment Mode (भुगतान का माध्यम)
              </label>
              <select
                value={salaryPayForm.paymentMode}
                onChange={(e) => handleSalaryFormChange('paymentMode', e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
              >
                <option value="UPI / PhonePe / GPay">📱 UPI / PhonePe / GPay / QR Scan</option>
                <option value="Cash">💵 Cash (कैश नकद भुगतान)</option>
                <option value="Bank Account Transfer">🏦 Direct Bank Transfer (NEFT/RTGS)</option>
                <option value="Bank Cheque">📝 Bank Cheque</option>
              </select>
            </div>
          </div>

          {/* Deductions & Additions */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-black text-slate-900 dark:text-white uppercase text-[11px] tracking-wide flex items-center gap-1.5">
                <span>⚖️</span> Deductions, Advance Adjustment & Previous Arrears (कटौती व बकाया)
              </h4>
              <span className="text-[10px] text-slate-400 font-semibold">Auto-Synced with Ledger</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label className="font-bold text-rose-600 dark:text-rose-400 block mb-1">
                  Leave Deduction (-) ₹
                </label>
                <input
                  type="number"
                  min="0"
                  value={salaryPayForm.deductionAmount}
                  onChange={(e) => handleSalaryFormChange('deductionAmount', e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-rose-300 dark:border-rose-800 bg-white dark:bg-slate-900 font-bold text-rose-600 font-mono"
                  placeholder="₹0"
                />
              </div>

              <div>
                <label className="font-bold text-rose-700 dark:text-rose-400 block mb-1">
                  Advance Cut / Loan (-) ₹
                </label>
                <input
                  type="number"
                  min="0"
                  value={salaryPayForm.advanceDeduction}
                  onChange={(e) => handleSalaryFormChange('advanceDeduction', e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-rose-300 dark:border-rose-800 bg-white dark:bg-slate-900 font-bold text-rose-700 font-mono"
                  placeholder="₹0 (Auto-deducted)"
                  title="Extra advance taken earlier auto-deducts here"
                />
              </div>

              <div>
                <label className="font-bold text-emerald-700 dark:text-emerald-400 block mb-1">
                  Previous Arrears Due (+) ₹
                </label>
                <input
                  type="number"
                  min="0"
                  value={salaryPayForm.arrearsAdded || 0}
                  onChange={(e) => handleSalaryFormChange('arrearsAdded', e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-white dark:bg-slate-900 font-bold text-emerald-700 font-mono"
                  placeholder="₹0 (Auto-added)"
                  title="Unpaid/Short salary from previous month auto-adds here"
                />
              </div>

              <div>
                <label className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                  Bonus / Allowance (+) ₹
                </label>
                <input
                  type="number"
                  min="0"
                  value={salaryPayForm.bonus}
                  onChange={(e) => handleSalaryFormChange('bonus', e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-white dark:bg-slate-900 font-bold text-emerald-600 font-mono"
                  placeholder="₹0"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-600 dark:text-slate-300 block mb-1">
                Deduction / Arrears Reason / Remarks (कारण / टिप्पणी)
              </label>
              <input
                type="text"
                value={salaryPayForm.deductionReason}
                onChange={(e) => handleSalaryFormChange('deductionReason', e.target.value)}
                placeholder="उदा. 2 दिन अनुपस्थिति कट / पिछले महीने का ₹5,000 बकाया भुगतान / एडवांस समायोजन"
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs"
              />
            </div>
          </div>

          {/* Net Payable & Payment Input */}
          <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border-2 border-indigo-200 dark:border-indigo-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-black text-indigo-950 dark:text-indigo-200 uppercase text-xs">
                Net Salary Payable for {salaryPayForm.month}:
              </span>
              <span className="text-xl font-black font-mono text-indigo-700 dark:text-indigo-300">
                ₹{salaryPayForm.netPayable.toLocaleString('en-IN')}
              </span>
            </div>

            <div>
              <label className="font-black text-slate-800 dark:text-slate-200 block mb-1">
                Real Amount Being Paid Right Now (नकद / बैंक में दिया गया कुल रुपया ₹) <span className="text-rose-500">*</span>
              </label>
              <input
                type="number"
                min="0"
                value={salaryPayForm.paidAmount}
                onChange={(e) => handleSalaryFormChange('paidAmount', e.target.value)}
                className="w-full p-3 rounded-xl border-2 border-emerald-500 bg-white dark:bg-slate-900 text-lg font-black text-slate-900 dark:text-white font-mono"
              />
            </div>

            {/* Live Advance Carry-Forward Alert */}
            {salaryPayForm.paidAmount > salaryPayForm.netPayable && (
              <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-950/80 border border-purple-300 dark:border-purple-800 text-purple-900 dark:text-purple-200 font-bold space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-base">👑</span>
                  <span className="text-xs uppercase font-black">
                    Extra ₹{(salaryPayForm.paidAmount - salaryPayForm.netPayable).toLocaleString('en-IN')} Advance Disbursed!
                  </span>
                </div>
                <p className="text-[11px] font-normal leading-relaxed text-purple-800 dark:text-purple-300">
                  Slip will record: <strong>Regular Salary ₹{salaryPayForm.netPayable.toLocaleString('en-IN')} + Advance ₹{(salaryPayForm.paidAmount - salaryPayForm.netPayable).toLocaleString('en-IN')} = Total ₹{salaryPayForm.paidAmount.toLocaleString('en-IN')}</strong>. This ₹{(salaryPayForm.paidAmount - salaryPayForm.netPayable).toLocaleString('en-IN')} will be <strong>automatically deducted from next month's salary</strong>.
                </p>
              </div>
            )}

            {/* Live Short/Partial Payment Arrears Alert */}
            {salaryPayForm.paidAmount < salaryPayForm.netPayable && (
              <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 font-bold space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-base">⚠️</span>
                  <span className="text-xs uppercase font-black">
                    Partial Payment: ₹{(salaryPayForm.netPayable - salaryPayForm.paidAmount).toLocaleString('en-IN')} Remaining Arrears!
                  </span>
                </div>
                <p className="text-[11px] font-normal leading-relaxed text-amber-800 dark:text-amber-300">
                  School owes this employee <strong>₹{(salaryPayForm.netPayable - salaryPayForm.paidAmount).toLocaleString('en-IN')}</strong>. You can pay it later this month or it will <strong>automatically add into next month's salary</strong> to clear all dues.
                </p>
              </div>
            )}

            {/* Live Arrears Settled Alert */}
            {salaryPayForm.arrearsAdded > 0 && salaryPayForm.paidAmount >= salaryPayForm.netPayable && (
              <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold flex items-center gap-2">
                <span>✅</span>
                <span className="text-xs">
                  Previous month arrears (+₹{Number(salaryPayForm.arrearsAdded).toLocaleString('en-IN')}) included & fully paid! All dues cleared (<strong>हिसाब बराबर - ₹0 Due</strong>).
                </span>
              </div>
            )}
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Payment Remarks / Reference (टिप्पणी / यूटीआर नंबर)
            </label>
            <input
              type="text"
              value={salaryPayForm.remarks}
              onChange={(e) => handleSalaryFormChange('remarks', e.target.value)}
              placeholder="e.g. UPI Ref / Cash Disbursed from Main Office"
              className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsPaySalaryModalOpen(false)}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black shadow-lg shadow-emerald-500/25 flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              {getPaymentForStaff(salaryPayForm.staffId, salaryPayForm.month)
                ? 'Update & Re-Save Salary Payment (अपडेट करें)'
                : 'Confirm & Disburse Salary (वेतन भुगतान करें)'}
            </button>
          </div>
        </form>
      </Modal>

    </div>
  );
};

export default HRPayrollPage;
