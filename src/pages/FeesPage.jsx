import React, { useState, useEffect } from 'react';
import {
  CreditCard,
  Plus,
  DollarSign,
  Printer,
  Search,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowUpRight,
  TrendingUp,
  Receipt,
  Users,
  UserPlus,
  Unlink,
  Link as LinkIcon,
  ShieldCheck,
  Building2,
  FileText,
  Sparkles,
  ChevronDown,
  ChevronUp,
  X,
  GraduationCap,
  Layers,
  FolderPlus,
  Sliders,
  Send,
  Phone,
  MessageSquare,
  CheckSquare,
  Filter,
  RefreshCw,
  Trash2,
  Edit2,
  Calendar,
  AlertTriangle,
  Tag
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import { useAuth } from '../context/AuthContext';
import { PrintableFeeReceipt } from '../components/printables/PrintableFeeReceipt';
import schoolService from '../services/schoolService';

export const FeesPage = ({ initialTab = 'pos' }) => {
  const { showToast } = useToast();
  const { activeBranchId } = useAuth();

  // Normalize initialTab from sidebar routes
  const resolveTab = (tab) => {
    if (!tab) return 'pos';
    if (tab === 'fees' || tab === 'fees-collect' || tab === 'pos') return 'pos';
    if (tab === 'fees-payment-types' || tab === 'payment-types') return 'payment-types';
    if (tab === 'fees-types' || tab === 'types') return 'types';
    if (tab === 'fees-groups' || tab === 'groups') return 'groups';
    if (tab === 'fees-fine' || tab === 'fine') return 'fine';
    if (tab === 'fees-allocation' || tab === 'allocation') return 'allocation';
    if (tab === 'fees-dues' || tab === 'dues') return 'dues';
    if (tab === 'fees-siblings' || tab === 'siblings') return 'siblings';
    if (tab === 'fees-sibling-list' || tab === 'sibling-list') return 'sibling-list';
    if (tab === 'fees-offline' || tab === 'offline') return 'offline';
    if (tab === 'invoices') return 'invoices';
    return tab;
  };

  const [activeTab, setActiveTab] = useState(() => resolveTab(initialTab));

  useEffect(() => {
    if (initialTab) {
      setActiveTab(resolveTab(initialTab));
    }
  }, [initialTab]);

  // Data States
  const [invoices, setInvoices] = useState(() => schoolService.getFeeInvoices(activeBranchId) || []);
  const [students, setStudents] = useState(() => schoolService.getStudents(activeBranchId) || []);
  const [paymentTypes, setPaymentTypes] = useState(() => schoolService.getPaymentTypes() || []);
  const [feeTypes, setFeeTypes] = useState(() => schoolService.getFeeTypes() || []);
  const [feeGroups, setFeeGroups] = useState(() => schoolService.getFeeGroups() || []);
  const [fineSetup, setFineSetup] = useState(() => schoolService.getFineSetup() || {});
  const [offlinePayments, setOfflinePayments] = useState(() => schoolService.getOfflinePayments() || []);
  const [familyGroups, setFamilyGroups] = useState(() => schoolService.getAllFamilyGroups() || []);
  const [miscFees, setMiscFees] = useState([]);
  const [siblingSearchQuery, setSiblingSearchQuery] = useState('');

  // Payment Type Modal state
  const [isAddPayTypeModalOpen, setIsAddPayTypeModalOpen] = useState(false);
  const [payTypeFormData, setPayTypeFormData] = useState({ name: '', code: '', type: 'Offline', description: '' });

  // Individual Student Old Dues & Miscellaneous Popup State
  const [isStudentMiscModalOpen, setIsStudentMiscModalOpen] = useState(false);
  const [targetStudentForMisc, setTargetStudentForMisc] = useState(null);
  const [studentMiscPrevDue, setStudentMiscPrevDue] = useState('');
  const [studentMiscKitDue, setStudentMiscKitDue] = useState('');
  const [studentMiscReason, setStudentMiscReason] = useState('');

  const schoolInfo = schoolService.getSchoolInfo();

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [classFilter, setClassFilter] = useState('All');
  const [stoppageFilter, setStoppageFilter] = useState('All');

  // POS Collection Form State
  const [isCollectModalOpen, setIsCollectModalOpen] = useState(false);
  const [selectedInvoiceForReceipt, setSelectedInvoiceForReceipt] = useState(null);
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);

  const [isFamilyMode, setIsFamilyMode] = useState(false);
  const [primaryStudentId, setPrimaryStudentId] = useState(students[0]?.id || '');
  const [posReceiptNo, setPosReceiptNo] = useState('');
  const [posPaymentMode, setPosPaymentMode] = useState('UPI / QR Code');
  const [posDiscount, setPosDiscount] = useState(0);
  const [posFine, setPosFine] = useState(0);
  const [posRemarks, setPosRemarks] = useState('Term Fee Collection');
  const [siblingAllocations, setSiblingAllocations] = useState([]);

  // Fee Type Modal
  const [isAddTypeModalOpen, setIsAddTypeModalOpen] = useState(false);
  const [newTypeCode, setNewTypeCode] = useState('');
  const [newTypeName, setNewTypeName] = useState('');
  const [newTypeFrequency, setNewTypeFrequency] = useState('Annual');
  const [newTypeAmount, setNewTypeAmount] = useState('');
  const [newTypeDesc, setNewTypeDesc] = useState('');

  // Fee Group Modal
  const [isAddGroupModalOpen, setIsAddGroupModalOpen] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupClasses, setNewGroupClasses] = useState('Class 1, Class 2, Class 3');
  const [newGroupAmount, setNewGroupAmount] = useState('');
  const [newGroupDesc, setNewGroupDesc] = useState('');

  // Fee Allocation State
  const [allocTargetClass, setAllocTargetClass] = useState('All');
  const [allocSelectedGroup, setAllocSelectedGroup] = useState(feeGroups[0]?.id || 'FG-02');
  const [selectedStudentIdsForAlloc, setSelectedStudentIdsForAlloc] = useState([]);
  const [allocMode, setAllocMode] = useState('group'); // 'group' or 'custom'
  const [allocCustomAmount, setAllocCustomAmount] = useState('');
  const [allocCustomTitle, setAllocCustomTitle] = useState('');
  const [allocOldSessionDues, setAllocOldSessionDues] = useState('');
  const [allocMiscDue, setAllocMiscDue] = useState('');
  const [allocMiscReason, setAllocMiscReason] = useState('');
  const [allocSearch, setAllocSearch] = useState('');

  // Sibling Assign Modal
  const [isAssignSiblingModalOpen, setIsAssignSiblingModalOpen] = useState(false);
  const [mainStudentForAssign, setMainStudentForAssign] = useState(null);

  useEffect(() => {
    refreshAll();
  }, [activeBranchId]);

  const refreshAll = () => {
    setInvoices([...schoolService.getFeeInvoices(activeBranchId)]);
    setStudents([...schoolService.getStudents(activeBranchId)]);
    setPaymentTypes([...schoolService.getPaymentTypes()]);
    setFeeTypes([...schoolService.getFeeTypes()]);
    setFeeGroups([...schoolService.getFeeGroups()]);
    setFineSetup({ ...schoolService.getFineSetup() });
    if (typeof schoolService.getMiscFees === 'function') {
      setMiscFees([...schoolService.getMiscFees()]);
    }
    setOfflinePayments([...schoolService.getOfflinePayments()]);
    setFamilyGroups([...schoolService.getAllFamilyGroups()]);
  };

  // 🤖 1-Click Auto-Link All Siblings Engine
  const handleAutoLinkSiblings = () => {
    const result = schoolService.autoLinkSiblingsByPhoneAndFather();
    refreshAll();
    showToast(`🎉 Automatically matched & linked ${result.linkedFamilyCount} sibling families (${result.linkedStudentCount} students)!`, 'success');
  };

  // Payment Type Master Handlers
  const handleAddPaymentType = (e) => {
    e.preventDefault();
    if (!payTypeFormData.name) {
      showToast('Please enter Payment Type Name', 'warning');
      return;
    }
    schoolService.addPaymentType(payTypeFormData);
    refreshAll();
    setIsAddPayTypeModalOpen(false);
    setPayTypeFormData({ name: '', code: '', type: 'Offline', description: '' });
    showToast(`💳 Payment Type "${payTypeFormData.name}" added successfully!`, 'success');
  };

  const handleDeletePaymentType = (id, name) => {
    if (window.confirm(`Delete payment type "${name}"?`)) {
      schoolService.deletePaymentType(id);
      refreshAll();
      showToast(`Payment Type "${name}" removed`, 'info');
    }
  };

  // Sync sibling allocations when primary student changes in POS
  useEffect(() => {
    if (!primaryStudentId) return;
    const primary = schoolService.getStudentById(primaryStudentId);
    if (!primary) return;

    const primaryDue = primary.feeSummary?.balance !== undefined ? primary.feeSummary.balance : 18000;
    const primaryAlloc = {
      studentId: primary.id,
      name: primary.name,
      class: `${primary.class}-${primary.section || 'A'}`,
      rollNo: primary.rollNo,
      dueAmount: primaryDue,
      amountPaid: primaryDue > 0 ? primaryDue : 10000,
      remarks: 'Tuition & Academic Fee'
    };

    if (isFamilyMode) {
      const sibs = schoolService.getLinkedSiblings(primaryStudentId);
      const sibAllocs = sibs.map(s => {
        const due = s.feeSummary?.balance !== undefined ? s.feeSummary.balance : 18000;
        return {
          studentId: s.id,
          name: s.name,
          class: `${s.class}-${s.section || 'A'}`,
          rollNo: s.rollNo,
          dueAmount: due,
          amountPaid: due > 0 ? due : 8000,
          remarks: 'Sibling Composite Fee'
        };
      });
      setSiblingAllocations([primaryAlloc, ...sibAllocs]);
    } else {
      setSiblingAllocations([primaryAlloc]);
    }
  }, [primaryStudentId, isFamilyMode]);

  // POS Submission
  const handleCollectFeeSubmit = (e) => {
    e.preventDefault();
    const primary = schoolService.getStudentById(primaryStudentId);
    if (!primary) {
      showToast('Please select a valid student', 'error');
      return;
    }

    const totalAmount = siblingAllocations.reduce((acc, a) => acc + Number(a.amountPaid || 0), 0);
    if (totalAmount <= 0) {
      showToast('Please enter an amount greater than zero', 'warning');
      return;
    }

    try {
      const inv = schoolService.collectFee({
        studentId: primaryStudentId,
        amountPaid: totalAmount,
        paymentMode: posPaymentMode,
        remarks: posRemarks,
        discount: Number(posDiscount) || 0,
        fine: Number(posFine) || 0,
        isFamilyPayment: isFamilyMode && siblingAllocations.length > 1,
        siblingAllocations: siblingAllocations,
        customReceiptNo: posReceiptNo
      });

      showToast(`Fee of ₹${totalAmount.toLocaleString('en-IN')} collected successfully!`, 'success');
      refreshAll();
      setIsCollectModalOpen(false);
      setSelectedInvoiceForReceipt(inv);
      setIsReceiptModalOpen(true);
    } catch (err) {
      showToast('Error processing payment: ' + err.message, 'error');
    }
  };

  // Add Fee Type
  const handleAddFeeType = (e) => {
    e.preventDefault();
    if (!newTypeName.trim()) return;
    schoolService.addFeeType({
      code: newTypeCode.trim() || undefined,
      name: newTypeName.trim(),
      frequency: newTypeFrequency,
      defaultAmount: Number(newTypeAmount) || 0,
      description: newTypeDesc.trim()
    });
    showToast(`Fee Type "${newTypeName}" created successfully!`, 'success');
    refreshAll();
    setIsAddTypeModalOpen(false);
    setNewTypeCode('');
    setNewTypeName('');
    setNewTypeAmount('');
    setNewTypeDesc('');
  };

  // Add Fee Group
  const handleAddFeeGroup = (e) => {
    e.preventDefault();
    if (!newGroupName.trim()) return;
    schoolService.addFeeGroup({
      name: newGroupName.trim(),
      applicableClasses: newGroupClasses.split(',').map(c => c.trim()),
      totalAmount: Number(newGroupAmount) || 0,
      description: newGroupDesc.trim()
    });
    showToast(`Fee Group "${newGroupName}" created successfully!`, 'success');
    refreshAll();
    setIsAddGroupModalOpen(false);
    setNewGroupName('');
    setNewGroupAmount('');
    setNewGroupDesc('');
  };

  // Save Fine Setup
  const handleSaveFineSetup = (e) => {
    e.preventDefault();
    schoolService.updateFineSetup(fineSetup);
    showToast('Late fine rules saved and active across all student ledgers!', 'success');
    refreshAll();
  };

  // Bulk Allocate Fees
  const handleBulkAllocate = () => {
    const res = schoolService.allocateFeeGroupToClass(allocTargetClass, allocSelectedGroup);
    if (res.success) {
      showToast(`Successfully allocated "${res.groupName}" to ${res.count} students!`, 'success');
      refreshAll();
    } else {
      showToast('Allocation failed: ' + res.message, 'error');
    }
  };

  // Selective Student Fee Allocation (Preserves already paid fees!)
  const handleAllocateToSelected = () => {
    if (selectedStudentIdsForAlloc.length === 0) {
      showToast('Please select at least one student using the checkbox!', 'warning');
      return;
    }

    const config = allocMode === 'custom'
      ? {
          customTuitionAmount: Number(allocCustomAmount) || 0,
          customGroupName: allocCustomTitle || `Custom Rate (₹${Number(allocCustomAmount).toLocaleString('en-IN')})`,
          previousSessionDues: allocOldSessionDues,
          miscellaneousDue: allocMiscDue,
          miscReason: allocMiscReason
        }
      : {
          feeGroupId: allocSelectedGroup,
          previousSessionDues: allocOldSessionDues,
          miscellaneousDue: allocMiscDue,
          miscReason: allocMiscReason
        };

    const res = schoolService.allocateFeeToSelectedStudents(selectedStudentIdsForAlloc, config);
    if (res.success) {
      showToast(`Successfully allocated "${res.groupName}" to ${res.count} selected students! Already paid fees remain 100% safe & intact.`, 'success');
      setSelectedStudentIdsForAlloc([]);
      setAllocOldSessionDues('');
      setAllocMiscDue('');
      setAllocMiscReason('');
      refreshAll();
    } else {
      showToast(res.message || 'Allocation failed', 'error');
    }
  };

  // Direct Student Old Dues & Misc Handlers (e.g. for Ram)
  const handleOpenStudentMiscModal = (student, e) => {
    if (e) e.stopPropagation();
    setTargetStudentForMisc(student);
    setStudentMiscPrevDue(student.feeSummary?.previousSessionDues || '');
    setStudentMiscKitDue(student.feeSummary?.miscellaneousDue || '');
    setStudentMiscReason(student.feeSummary?.miscReason || '');
    setIsStudentMiscModalOpen(true);
  };

  const handleSaveStudentMisc = (e) => {
    e.preventDefault();
    if (!targetStudentForMisc) return;
    
    schoolService.updateStudentMiscFee(targetStudentForMisc.id, {
      previousSessionDues: Number(studentMiscPrevDue) || 0,
      miscellaneousDue: Number(studentMiscKitDue) || 0,
      miscReason: studentMiscReason || 'Previous Session Arrears / Books & Kit'
    });

    showToast(`Updated Previous Arrears & Misc fees for ${targetStudentForMisc.name}!`, 'success');
    refreshAll();
    setIsStudentMiscModalOpen(false);
  };

  // WhatsApp Dues Reminder
  const handleSendWhatsAppReminder = (student) => {
    const dueAmt = student.feeSummary?.balance || 0;
    const fatherMobile = student.parents?.fatherPhone || student.fatherMobile || '9876543210';
    const message = encodeURIComponent(
      `आदरणीय अभिभावक,\n` +
      `सादर नमस्कार।\n` +
      `आपके बच्चे ${student.name} (कक्षा: ${student.class}, लेजर सं: ${student.rollNo}) की विद्यालय सत्र 2026-27 की कुल बकाया फीस ₹${dueAmt.toLocaleString('en-IN')} है।\n` +
      `कृपया विद्यालय कार्यालय/POS काउंटर पर आकर अथवा ऑनलाइन माध्यम से शीघ्र जमा कराएं।\n` +
      `धन्यवाद,\n` +
      `${schoolInfo.name || 'Dadheech Memorial Public School'}, जर्गवां\n` +
      `संपर्क: +91 97589 75880`
    );
    window.open(`https://wa.me/91${fatherMobile.replace(/\D/g, '').slice(-10)}?text=${message}`, '_blank');
  };

  // Total KPIs
  const totalCollected = students.reduce((acc, s) => acc + (s.feeSummary?.totalPaid || 0), 0) || 1034800;
  const totalGrandDues = students.reduce((acc, s) => acc + (s.feeSummary?.totalDue || 13500), 0) || 11923985;
  const totalOutstanding = Math.max(0, totalGrandDues - totalCollected);
  const totalDefaulters = students.filter(s => (s.feeSummary?.balance || 0) > 0).length;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">

      {/* Top Banner with Quick Actions */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
              <CreditCard className="w-5 h-5" />
            </span>
            <h1 className="text-xl font-black text-slate-900 dark:text-white">
              Student Accounting & Fees Master Suite
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Complete self-service module for Fee Types, Groups, Late Fines, Bulk Allocation, POS Collection & Dues.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => {
              setPrimaryStudentId(students[0]?.id || '');
              setIsFamilyMode(false);
              setIsCollectModalOpen(true);
            }}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-500/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <Receipt className="w-4 h-4" /> Collect Fee (POS)
          </button>
          <button
            onClick={() => setActiveTab('siblings')}
            className="px-3.5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
          >
            <UserPlus className="w-4 h-4" /> Setup Siblings
          </button>
        </div>
      </div>

      {/* KPI Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Grand Demand (Tuition + 11M Transport)</span>
          <p className="text-2xl font-black font-mono text-slate-900 dark:text-white">₹{totalGrandDues.toLocaleString('en-IN')}</p>
          <span className="text-[10px] text-slate-500 font-semibold block">Session 2026-27 Approved</span>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Total Collected (Verified)</span>
          <p className="text-2xl font-black font-mono text-emerald-600">₹{totalCollected.toLocaleString('en-IN')}</p>
          <span className="text-[10px] text-emerald-600 font-semibold block">8.7% Realized in Bank/Cash</span>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Total Outstanding Balance</span>
          <p className="text-2xl font-black font-mono text-rose-600">₹{totalOutstanding.toLocaleString('en-IN')}</p>
          <span className="text-[10px] text-rose-500 font-semibold block">{totalDefaulters} Students with pending balance</span>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Linked Sibling Families</span>
          <p className="text-2xl font-black font-mono text-purple-600">{familyGroups.length} Families</p>
          <span className="text-[10px] text-purple-500 font-semibold block">Combined Single-Click Receipt</span>
        </div>
      </div>

      {/* 🧭 Comprehensive 10-Tab Navigation Bar (Exact Workflow matching your screenshots) */}
      <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-x-auto custom-scrollbar">
        <div className="flex items-center gap-1 min-w-max text-xs font-bold">
          {[
            { id: 'pos', label: '💳 Fee Collect / Payment', badge: 'POS' },
            { id: 'payment-types', label: '💳 Payments Type', count: paymentTypes.length },
            { id: 'offline', label: '🏛️ Offline Payments', count: offlinePayments.length },
            { id: 'siblings', label: '👨‍👩‍👧‍👦 Setup Siblings', badge: null },
            { id: 'sibling-list', label: '📜 Sibling List', count: familyGroups.length },
            { id: 'types', label: '🏷️ Fees Type', count: feeTypes.length },
            { id: 'groups', label: '📂 Fees Group', count: feeGroups.length },
            { id: 'fine', label: '⚖️ Fine Setup', badge: 'Rules' },
            { id: 'allocation', label: '📌 Fees Allocation', badge: 'Bulk' },
            { id: 'dues', label: '⚠️ Due List / Reminder', count: totalDefaulters },
            { id: 'invoices', label: '🧾 Fee Receipts Ledger', count: invoices.length }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md font-black'
                  : 'text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`text-[9px] px-1.5 py-0.5 rounded-md font-bold ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800 dark:bg-slate-800'}`}>
                  {tab.badge}
                </span>
              )}
              {tab.count !== undefined && (
                <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 💳 TAB 1: FEE COLLECT / PAYMENT (POS) */}
      {/* ========================================================================= */}
      {activeTab === 'pos' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Quick Collect POS Panel (2 Columns) */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-emerald-600" /> POS Fee Collection Counter
                </h3>
                <p className="text-xs text-slate-500">Collect fee with instant ledger update and 2-copy printed receipt</p>
              </div>
              <label className="flex items-center gap-2 bg-purple-50 dark:bg-purple-950/60 px-3 py-1.5 rounded-xl border border-purple-200 dark:border-purple-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isFamilyMode}
                  onChange={(e) => setIsFamilyMode(e.target.checked)}
                  className="w-4 h-4 text-purple-600 rounded cursor-pointer"
                />
                <span className="text-xs font-bold text-purple-900 dark:text-purple-200">👨‍👩‍👧 Sibling Mode (Pay Together)</span>
              </label>
            </div>

            {/* Student Search & Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Select Student (Search by Name / Ledger No / Class) *
                </label>
                <select
                  value={primaryStudentId}
                  onChange={(e) => setPrimaryStudentId(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-900 dark:text-white"
                >
                  {students.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.name} • Class {s.class} • Ledger #{s.rollNo} • (Bal: ₹{(s.feeSummary?.balance || 0).toLocaleString('en-IN')})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Custom Receipt Number (रसीद सं. - Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. DMPS-REC-2026/0891 (Leave blank for auto)"
                  value={posReceiptNo}
                  onChange={(e) => setPosReceiptNo(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium"
                />
              </div>
            </div>

            {/* Sibling Breakdown Allocations Table */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 uppercase font-black text-[10px]">
                  <tr>
                    <th className="p-3">Student Name</th>
                    <th className="p-3">Class</th>
                    <th className="p-3">Total Due</th>
                    <th className="p-3">Amount Paying Now (₹)</th>
                    <th className="p-3">Fee Head / Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {siblingAllocations.map((alloc, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3 font-bold text-slate-900 dark:text-white">{alloc.name}</td>
                      <td className="p-3 font-semibold text-slate-500">{alloc.class}</td>
                      <td className="p-3 font-mono font-bold text-rose-600">₹{Number(alloc.dueAmount || 0).toLocaleString('en-IN')}</td>
                      <td className="p-3">
                        <input
                          type="number"
                          value={alloc.amountPaid}
                          onChange={(e) => {
                            const val = e.target.value;
                            setSiblingAllocations(prev => {
                              const copy = [...prev];
                              copy[idx].amountPaid = val;
                              return copy;
                            });
                          }}
                          className="w-28 p-1.5 rounded-lg border border-slate-300 dark:border-slate-600 font-mono font-bold text-emerald-600 bg-white dark:bg-slate-900 text-xs"
                        />
                      </td>
                      <td className="p-3">
                        <input
                          type="text"
                          value={alloc.remarks}
                          onChange={(e) => {
                            const val = e.target.value;
                            setSiblingAllocations(prev => {
                              const copy = [...prev];
                              copy[idx].remarks = val;
                              return copy;
                            });
                          }}
                          className="w-full p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Payment Mode, Fine, Discount */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Payment Mode</label>
                <select
                  value={posPaymentMode}
                  onChange={(e) => setPosPaymentMode(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold"
                >
                  <option value="Cash Counter">💵 Cash Counter</option>
                  <option value="UPI / QR Code">📱 UPI / QR Code</option>
                  <option value="Bank Demand Draft (DD)">🏛️ Demand Draft (DD)</option>
                  <option value="NEFT / Net Banking">🌐 NEFT / Net Banking</option>
                  <option value="Cheque Deposit">📜 Cheque Deposit</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Concession / Discount (₹)</label>
                <input
                  type="number"
                  value={posDiscount}
                  onChange={(e) => setPosDiscount(e.target.value)}
                  placeholder="0"
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-mono font-bold text-amber-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Late Fine Added (₹)</label>
                <input
                  type="number"
                  value={posFine}
                  onChange={(e) => setPosFine(e.target.value)}
                  placeholder="0"
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-mono font-bold text-rose-600"
                />
              </div>
            </div>

            {/* Submit Collect Fee Button */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="text-sm font-black text-slate-900 dark:text-white">
                Total Payable Now:{' '}
                <span className="font-mono text-xl text-emerald-600 ml-1">
                  ₹{siblingAllocations.reduce((acc, a) => acc + Number(a.amountPaid || 0), 0).toLocaleString('en-IN')}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCollectFeeSubmit}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-xs font-black shadow-lg shadow-emerald-500/25 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
              >
                <Printer className="w-4 h-4" /> Collect & Print Receipt
              </button>
            </div>
          </div>

          {/* Right Summary Column: Recent Receipts */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
                Recent POS Receipts
              </h3>
              <button
                onClick={() => setActiveTab('invoices')}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-700"
              >
                View Ledger
              </button>
            </div>

            <div className="space-y-3 max-h-[480px] overflow-y-auto custom-scrollbar pr-1">
              {invoices.slice(0, 8).map((inv) => (
                <div
                  key={inv.id}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 text-xs space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">{inv.receiptNo || inv.invoiceNo}</span>
                    <Badge variant="success" size="sm">₹{(inv.paidAmount || inv.amount || 0).toLocaleString('en-IN')}</Badge>
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-slate-600 dark:text-slate-400">
                    <span className="font-bold text-slate-900 dark:text-white">{inv.studentName}</span>
                    <span>{inv.class}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-[10px] text-slate-400">
                    <span>{inv.paymentDate || inv.dueDate}</span>
                    <button
                      onClick={() => {
                        setSelectedInvoiceForReceipt(inv);
                        setIsReceiptModalOpen(true);
                      }}
                      className="text-emerald-600 font-bold hover:underline flex items-center gap-1"
                    >
                      <Printer className="w-3 h-3" /> Print Copy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* 🏷️ TAB 2: FEES TYPE MASTER */}
      {/* ========================================================================= */}
      {activeTab === 'types' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Tag className="w-5 h-5 text-indigo-600" /> Fees Type Master
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Create and customize individual fee heads (Tuition, Annual, Smart Class, Bus Fare, Exam, Sports)
              </p>
            </div>
            <button
              onClick={() => setIsAddTypeModalOpen(true)}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <Plus className="w-4 h-4" /> Add New Fee Type
            </button>
          </div>

          {/* Fee Types Table */}
          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Code</th>
                  <th className="p-3.5">Fee Type Name</th>
                  <th className="p-3.5">Frequency</th>
                  <th className="p-3.5">Default Rate (₹)</th>
                  <th className="p-3.5">Description</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {feeTypes.map((ft) => (
                  <tr key={ft.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-black text-indigo-600 dark:text-indigo-400">{ft.code || ft.id}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{ft.name}</td>
                    <td className="p-3.5">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-[11px]">
                        {ft.frequency}
                      </span>
                    </td>
                    <td className="p-3.5 font-mono font-black text-emerald-600">₹{ft.defaultAmount?.toLocaleString('en-IN')}</td>
                    <td className="p-3.5 text-slate-500 text-[11px] max-w-xs">{ft.description}</td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => {
                          if (confirm(`Delete Fee Type "${ft.name}"?`)) {
                            schoolService.deleteFeeType(ft.id);
                            refreshAll();
                            showToast('Fee type deleted', 'info');
                          }
                        }}
                        className="p-1.5 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950 rounded-lg transition-colors"
                        title="Delete Fee Type"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📂 TAB 3: FEES GROUP MASTER */}
      {/* ========================================================================= */}
      {activeTab === 'groups' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <FolderPlus className="w-5 h-5 text-indigo-600" /> Fees Group Master
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Group multiple fee types together for whole wings (Pre-Primary, Primary, Middle, High School)
              </p>
            </div>
            <button
              onClick={() => setIsAddGroupModalOpen(true)}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <Plus className="w-4 h-4" /> Create Fee Group
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {feeGroups.map((grp) => (
              <div
                key={grp.id}
                className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300">
                      {grp.id}
                    </span>
                    <span className="font-mono font-black text-lg text-emerald-600">
                      ₹{grp.totalAmount?.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{grp.name}</h4>
                  <p className="text-xs text-slate-500">{grp.description}</p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Applicable Classes:</span>
                    <div className="flex flex-wrap gap-1">
                      {grp.applicableClasses?.map((cls, idx) => (
                        <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                          {cls}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <button
                      onClick={() => {
                        setAllocSelectedGroup(grp.id);
                        setActiveTab('allocation');
                      }}
                      className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1"
                    >
                      ⚡ Allocate to Class
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Delete Fee Group "${grp.name}"?`)) {
                          schoolService.deleteFeeGroup(grp.id);
                          refreshAll();
                          showToast('Fee group deleted', 'info');
                        }
                      }}
                      className="p-1 text-rose-500 hover:bg-rose-100 dark:hover:bg-rose-950 rounded-md"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ⚖️ TAB 4: FINE SETUP */}
      {/* ========================================================================= */}
      {activeTab === 'fine' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6 max-w-3xl">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-rose-600" /> Late Payment Fine Setup
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Configure whether late payment penalties apply or keep disabled (0 Fine)
              </p>
            </div>
            <Badge variant={fineSetup.status === 'Active' ? 'danger' : 'neutral'}>
              {fineSetup.status === 'Active' ? 'Fine Active' : 'Fine Disabled (₹0)'}
            </Badge>
          </div>

          <form onSubmit={handleSaveFineSetup} className="space-y-5 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-900 dark:text-white text-sm">Late Fine Status</span>
                <p className="text-slate-500 text-xs">Currently, schools can keep late fine completely disabled</p>
              </div>
              <select
                value={fineSetup.status || 'Disabled'}
                onChange={(e) => setFineSetup({ ...fineSetup, status: e.target.value })}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              >
                <option value="Disabled">Disabled (No Fine Charged • ₹0)</option>
                <option value="Active">Active (Charge Late Penalty)</option>
              </select>
            </div>

            {fineSetup.status === 'Active' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Monthly Due Date Cutoff Day (e.g. 10th of Month) *
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="28"
                    value={fineSetup.dueDayCutoff || 10}
                    onChange={(e) => setFineSetup({ ...fineSetup, dueDayCutoff: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                    required
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Grace Period Days (No fine charged during grace) *
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="15"
                    value={fineSetup.graceDays || 5}
                    onChange={(e) => setFineSetup({ ...fineSetup, graceDays: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                    required
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Fine Calculation Mode *
                  </label>
                  <select
                    value={fineSetup.fineType || 'Fixed Rate'}
                    onChange={(e) => setFineSetup({ ...fineSetup, fineType: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                  >
                    <option value="Fixed Rate">Fixed Lump Sum Fine (e.g. ₹100 per term)</option>
                    <option value="Daily Cumulative">Daily Cumulative Rate (e.g. ₹5 per overdue day)</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Fine Amount / Daily Rate (₹) *
                  </label>
                  <input
                    type="number"
                    value={fineSetup.fineType === 'Fixed Rate' ? fineSetup.fixedAmount || 0 : fineSetup.dailyRate || 0}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (fineSetup.fineType === 'Fixed Rate') {
                        setFineSetup({ ...fineSetup, fixedAmount: val });
                      } else {
                        setFineSetup({ ...fineSetup, dailyRate: val });
                      }
                    }}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono font-bold text-rose-600"
                    required
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
            >
              <CheckCircle2 className="w-4 h-4" /> Save Fine Settings
            </button>
          </form>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📌 TAB 5: FEES ALLOCATION (SELECTIVE CHECKBOX TABLE) */}
      {/* ========================================================================= */}
      {activeTab === 'allocation' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-600" /> Student-by-Student Fee Allocation Matrix
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Select specific students using checkboxes to assign fee groups or custom fee amounts. <strong>Already paid fees remain 100% safe & intact.</strong>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200">
                Selected: <strong>{selectedStudentIdsForAlloc.length}</strong> / {students.length}
              </span>
            </div>
          </div>

          {/* Allocation Settings & Controls Bar */}
          <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Filter by Class</label>
                <select
                  value={allocTargetClass}
                  onChange={(e) => {
                    setAllocTargetClass(e.target.value);
                    setSelectedStudentIdsForAlloc([]);
                  }}
                  className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                >
                  <option value="All">All Classes (School-Wide)</option>
                  {['PG', 'NUR', 'LKG', 'UKG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'].map(c => (
                    <option key={c} value={c}>Class {c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Search Student / Father</label>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Name / Father / Roll..."
                    value={allocSearch}
                    onChange={(e) => setAllocSearch(e.target.value)}
                    className="w-full pl-8 pr-2.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Allocation Mode</label>
                <select
                  value={allocMode}
                  onChange={(e) => setAllocMode(e.target.value)}
                  className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                >
                  <option value="group">Assign Existing Fee Group</option>
                  <option value="custom">Custom Tuition Amount (₹)</option>
                </select>
              </div>

              <div>
                {allocMode === 'group' ? (
                  <>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select Fee Group</label>
                    <select
                      value={allocSelectedGroup}
                      onChange={(e) => setAllocSelectedGroup(e.target.value)}
                      className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                    >
                      {feeGroups.map(g => (
                        <option key={g.id} value={g.id}>
                          {g.name} (₹{g.totalAmount?.toLocaleString('en-IN')})
                        </option>
                      ))}
                    </select>
                  </>
                ) : (
                  <>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Custom Amount (₹)</label>
                    <input
                      type="number"
                      placeholder="e.g. 15000"
                      value={allocCustomAmount}
                      onChange={(e) => setAllocCustomAmount(e.target.value)}
                      className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono font-bold text-emerald-600"
                    />
                  </>
                )}
              </div>
            </div>

            {/* Optional Additional Old Session Arrears & Kit Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2 border-t border-dashed border-slate-200 dark:border-slate-700">
              <div>
                <label className="font-bold text-amber-700 dark:text-amber-400 block mb-1">
                  📦 Old Session Arrears (पिछला बकाया ₹) <span className="text-[10px] text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="number"
                  placeholder="e.g. 4000"
                  value={allocOldSessionDues}
                  onChange={(e) => setAllocOldSessionDues(e.target.value)}
                  className="w-full p-2 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/30 font-mono font-bold text-amber-800 dark:text-amber-300"
                />
              </div>

              <div>
                <label className="font-bold text-blue-700 dark:text-blue-400 block mb-1">
                  📚 Course Books / Kit (कोर्स व पुस्तकें ₹) <span className="text-[10px] text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="number"
                  placeholder="e.g. 2450"
                  value={allocMiscDue}
                  onChange={(e) => setAllocMiscDue(e.target.value)}
                  className="w-full p-2 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/30 font-mono font-bold text-blue-800 dark:text-blue-300"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Remarks / Note <span className="text-[10px] text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Old session 25-26 arrears & NCERT kit"
                  value={allocMiscReason}
                  onChange={(e) => setAllocMiscReason(e.target.value)}
                  className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
                />
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const filtered = students.filter(s => {
                      const matchClass = allocTargetClass === 'All' || s.class === allocTargetClass || s.class?.includes(allocTargetClass);
                      const matchSearch = !allocSearch.trim() ||
                        s.name.toLowerCase().includes(allocSearch.toLowerCase()) ||
                        (s.parents?.fatherName || s.fatherName || '').toLowerCase().includes(allocSearch.toLowerCase()) ||
                        (s.rollNo || '').toString().includes(allocSearch);
                      return matchClass && matchSearch;
                    });
                    if (selectedStudentIdsForAlloc.length === filtered.length) {
                      setSelectedStudentIdsForAlloc([]);
                    } else {
                      setSelectedStudentIdsForAlloc(filtered.map(s => s.id));
                    }
                  }}
                  className="px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs font-bold hover:bg-slate-100"
                >
                  {selectedStudentIdsForAlloc.length > 0 ? 'Deselect All' : 'Select All Filtered'}
                </button>
                <span className="text-xs text-slate-500 font-medium">
                  {selectedStudentIdsForAlloc.length} students selected for update
                </span>
              </div>

              <button
                type="button"
                onClick={handleAllocateToSelected}
                disabled={selectedStudentIdsForAlloc.length === 0}
                className={`px-5 py-2 rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5 ${
                  selectedStudentIdsForAlloc.length > 0
                    ? 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 active:scale-95'
                    : 'bg-slate-300 dark:bg-slate-700 text-slate-500 cursor-not-allowed'
                }`}
              >
                ⚡ Allocate Fee to {selectedStudentIdsForAlloc.length} Students
              </button>
            </div>
          </div>

          {/* Student List Table with Checkboxes & Direct Misc Edit */}
          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <div className="max-h-[500px] overflow-y-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px] sticky top-0 z-10">
                  <tr>
                    <th className="p-3.5 w-10 text-center">
                      <input
                        type="checkbox"
                        checked={
                          selectedStudentIdsForAlloc.length > 0 &&
                          selectedStudentIdsForAlloc.length === students.filter(s => {
                            const matchClass = allocTargetClass === 'All' || s.class === allocTargetClass || s.class?.includes(allocTargetClass);
                            const matchSearch = !allocSearch.trim() ||
                              s.name.toLowerCase().includes(allocSearch.toLowerCase()) ||
                              (s.parents?.fatherName || s.fatherName || '').toLowerCase().includes(allocSearch.toLowerCase()) ||
                              (s.rollNo || '').toString().includes(allocSearch);
                            return matchClass && matchSearch;
                          }).length
                        }
                        onChange={(e) => {
                          const filtered = students.filter(s => {
                            const matchClass = allocTargetClass === 'All' || s.class === allocTargetClass || s.class?.includes(allocTargetClass);
                            const matchSearch = !allocSearch.trim() ||
                              s.name.toLowerCase().includes(allocSearch.toLowerCase()) ||
                              (s.parents?.fatherName || s.fatherName || '').toLowerCase().includes(allocSearch.toLowerCase()) ||
                              (s.rollNo || '').toString().includes(allocSearch);
                            return matchClass && matchSearch;
                          });
                          if (e.target.checked) {
                            setSelectedStudentIdsForAlloc(filtered.map(s => s.id));
                          } else {
                            setSelectedStudentIdsForAlloc([]);
                          }
                        }}
                        className="w-4 h-4 rounded text-blue-600 cursor-pointer"
                      />
                    </th>
                    <th className="p-3.5">Ledger / Roll</th>
                    <th className="p-3.5">Student Name</th>
                    <th className="p-3.5">Father's Name</th>
                    <th className="p-3.5">Class</th>
                    <th className="p-3.5 font-mono">Tuition</th>
                    <th className="p-3.5 font-mono">Transport</th>
                    <th className="p-3.5 font-mono text-amber-700 dark:text-amber-400">Old Dues / Misc</th>
                    <th className="p-3.5 font-mono">Total Due</th>
                    <th className="p-3.5 font-mono text-emerald-600">Already Paid</th>
                    <th className="p-3.5 font-mono text-rose-600">Remaining Balance</th>
                    <th className="p-3.5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {students
                    .filter(s => {
                      const matchClass = allocTargetClass === 'All' || s.class === allocTargetClass || s.class?.includes(allocTargetClass);
                      const matchSearch = !allocSearch.trim() ||
                        s.name.toLowerCase().includes(allocSearch.toLowerCase()) ||
                        (s.parents?.fatherName || s.fatherName || '').toLowerCase().includes(allocSearch.toLowerCase()) ||
                        (s.rollNo || '').toString().includes(allocSearch);
                      return matchClass && matchSearch;
                    })
                    .map(s => {
                      const isSelected = selectedStudentIdsForAlloc.includes(s.id);
                      const tuition = s.feeSummary?.tuitionDue || 0;
                      const transport = s.feeSummary?.transportDue11Months || 0;
                      const oldDues = (s.feeSummary?.previousSessionDues || 0) + (s.feeSummary?.miscellaneousDue || 0);
                      const totalDue = s.feeSummary?.totalDue || (tuition + transport + oldDues);
                      const paid = s.feeSummary?.totalPaid || 0;
                      const balance = s.feeSummary?.balance !== undefined ? s.feeSummary.balance : Math.max(0, totalDue - paid);
                      const father = s.parents?.fatherName || s.fatherName || 'Sh. Father Name';
                      const ledgerNo = s.ledgerNo || `LED-${s.rollNo || s.id.slice(-3)}`;

                      return (
                        <tr
                          key={s.id}
                          onClick={() => {
                            if (isSelected) {
                              setSelectedStudentIdsForAlloc(selectedStudentIdsForAlloc.filter(id => id !== s.id));
                            } else {
                              setSelectedStudentIdsForAlloc([...selectedStudentIdsForAlloc, s.id]);
                            }
                          }}
                          className={`cursor-pointer transition-colors ${
                            isSelected
                              ? 'bg-blue-50/80 dark:bg-blue-950/40'
                              : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                          }`}
                        >
                          <td className="p-3.5 text-center" onClick={(e) => e.stopPropagation()}>
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedStudentIdsForAlloc([...selectedStudentIdsForAlloc, s.id]);
                                } else {
                                  setSelectedStudentIdsForAlloc(selectedStudentIdsForAlloc.filter(id => id !== s.id));
                                }
                              }}
                              className="w-4 h-4 rounded text-blue-600 cursor-pointer"
                            />
                          </td>
                          <td className="p-3.5 font-mono text-[11px] font-bold text-slate-500">
                            {ledgerNo} <span className="text-slate-400">/ #{s.rollNo}</span>
                          </td>
                          <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                            {s.name}
                          </td>
                          <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-400">
                            {father}
                          </td>
                          <td className="p-3.5 font-bold text-indigo-600 dark:text-indigo-400">
                            {s.class}
                          </td>
                          <td className="p-3.5 font-mono font-bold text-slate-700 dark:text-slate-300">
                            ₹{tuition.toLocaleString('en-IN')}
                          </td>
                          <td className="p-3.5 font-mono font-medium text-slate-500">
                            ₹{transport.toLocaleString('en-IN')}
                          </td>
                          <td className="p-3.5 font-mono font-bold">
                            {oldDues > 0 ? (
                              <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold">
                                ₹{oldDues.toLocaleString('en-IN')}
                              </span>
                            ) : (
                              <span className="text-slate-400">₹0</span>
                            )}
                          </td>
                          <td className="p-3.5 font-mono font-bold text-slate-900 dark:text-white">
                            ₹{totalDue.toLocaleString('en-IN')}
                          </td>
                          <td className="p-3.5 font-mono font-black text-emerald-600">
                            {paid > 0 ? (
                              <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                                ₹{paid.toLocaleString('en-IN')}
                              </span>
                            ) : (
                              '₹0'
                            )}
                          </td>
                          <td className="p-3.5 font-mono font-bold text-rose-600">
                            ₹{balance.toLocaleString('en-IN')}
                          </td>
                          <td className="p-3.5 text-right" onClick={(e) => e.stopPropagation()}>
                            <button
                              type="button"
                              onClick={(e) => handleOpenStudentMiscModal(s, e)}
                              className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-[10px] font-bold shadow hover:scale-105 active:scale-95 transition-all"
                            >
                              ✏️ + Old Dues / Misc
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ⚠️ TAB 6: DUE LIST / REMINDER */}
      {/* ========================================================================= */}
      {activeTab === 'dues' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-rose-600" /> Student Dues & WhatsApp Reminder Desk
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Filtered list of defaulters with 1-click WhatsApp reminder and printable dues slip
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <select
                value={classFilter}
                onChange={(e) => setClassFilter(e.target.value)}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold"
              >
                <option value="All">All Classes</option>
                {['PG', 'NUR', 'LKG', 'UKG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'].map(c => (
                  <option key={c} value={c}>Class {c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Defaulter Students Table */}
          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Roll / Ledger</th>
                  <th className="p-3.5">Student Name</th>
                  <th className="p-3.5">Class</th>
                  <th className="p-3.5">Father & Mobile</th>
                  <th className="p-3.5">Village Stop</th>
                  <th className="p-3.5">Total Demand</th>
                  <th className="p-3.5">Paid</th>
                  <th className="p-3.5">Balance Due</th>
                  <th className="p-3.5 text-right">Reminder Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {students
                  .filter(s => classFilter === 'All' || s.class === classFilter || s.class?.includes(classFilter))
                  .filter(s => (s.feeSummary?.balance || 0) > 0)
                  .map((s) => {
                    const dueAmt = s.feeSummary?.balance || 0;
                    return (
                      <tr key={s.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                        <td className="p-3.5 font-mono font-bold text-slate-500">#{s.rollNo}</td>
                        <td className="p-3.5 font-bold text-slate-900 dark:text-white">{s.name}</td>
                        <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-400">{s.class}</td>
                        <td className="p-3.5 text-slate-500 text-[11px]">
                          <div>{s.parents?.fatherName || s.fatherName || 'Father'}</div>
                          <div className="font-mono text-slate-400">{s.parents?.fatherPhone || s.fatherMobile || '9758975880'}</div>
                        </td>
                        <td className="p-3.5 font-medium text-slate-600 dark:text-slate-300">{s.village || s.stopName || s.transport?.stopName || 'Campus'}</td>
                        <td className="p-3.5 font-mono font-bold text-slate-700 dark:text-slate-300">₹{(s.feeSummary?.totalDue || 0).toLocaleString('en-IN')}</td>
                        <td className="p-3.5 font-mono font-bold text-emerald-600">₹{(s.feeSummary?.totalPaid || 0).toLocaleString('en-IN')}</td>
                        <td className="p-3.5 font-mono font-black text-rose-600">₹{dueAmt.toLocaleString('en-IN')}</td>
                        <td className="p-3.5 text-right">
                          <button
                            onClick={() => handleSendWhatsAppReminder(s)}
                            className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-[11px] shadow-sm flex items-center gap-1.5 ml-auto hover:scale-105 active:scale-95 transition-all"
                          >
                            <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Reminder
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 👨‍👩‍👧‍👦 TAB 7: SETUP SIBLINGS */}
      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* 💳 TAB: PAYMENTS TYPE MASTER (Cash, UPI, DD, NEFT, Cheque) */}
      {/* ========================================================================= */}
      {activeTab === 'payment-types' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-indigo-600" /> Accepted Payment Modes & Counter Types
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Configure online and offline payment collection channels available at POS fee collection counter
              </p>
            </div>
            <button
              onClick={() => setIsAddPayTypeModalOpen(true)}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" /> Add Payment Type
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paymentTypes.map((pt) => (
              <div
                key={pt.id}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3 hover:border-indigo-400 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900 dark:text-white">{pt.name}</h4>
                      <span className="text-[10px] font-mono font-bold text-slate-400">Code: {pt.code}</span>
                    </div>
                  </div>
                  {!pt.isDefault && (
                    <button
                      onClick={() => handleDeletePaymentType(pt.id, pt.name)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <p className="text-xs text-slate-500">{pt.description}</p>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200 dark:border-slate-700">
                  <span className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                    Category: {pt.type}
                  </span>
                  {pt.isDefault ? (
                    <span className="text-[10px] font-bold text-emerald-600">Default Counter Mode</span>
                  ) : (
                    <span className="font-mono text-[10px] text-slate-400">{pt.id}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 👨‍👩‍👧‍👦 TAB: SETUP SIBLINGS */}
      {/* ========================================================================= */}
      {activeTab === 'siblings' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          {/* Sibling Auto-Match Hero Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-black uppercase tracking-wider">
                  Automatic Sibling Detection Engine
                </h4>
              </div>
              <p className="text-xs text-slate-300 max-w-xl">
                Automatically scans all 567 student records, matches identical parent mobile numbers and father names, and links brothers & sisters into combined family accounts.
              </p>
            </div>
            <button
              onClick={handleAutoLinkSiblings}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 flex items-center gap-2 shrink-0 hover:scale-105 active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4" /> 🤖 Auto-Link All Siblings (87 Families)
            </button>
          </div>

          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" /> Class-Wise Sibling Assign & Linker
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Currently <strong>{familyGroups.length} Family Groups</strong> active across the school.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search student, father or mobile..."
                  value={siblingSearchQuery}
                  onChange={(e) => setSiblingSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium"
                />
              </div>
              <button
                onClick={() => setActiveTab('sibling-list')}
                className="px-3.5 py-1.5 bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 rounded-xl text-xs font-bold hover:bg-purple-200 shrink-0"
              >
                View Families ({familyGroups.length}) →
              </button>
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden max-h-[600px] overflow-y-auto custom-scrollbar">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px] sticky top-0 z-10">
                <tr>
                  <th className="p-3.5">Roll No</th>
                  <th className="p-3.5">Student Name</th>
                  <th className="p-3.5">Class</th>
                  <th className="p-3.5">Father & Mobile</th>
                  <th className="p-3.5">Linked Brothers / Sisters</th>
                  <th className="p-3.5 text-right">Assign Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {students
                  .filter(s => {
                    if (!siblingSearchQuery) return true;
                    const q = siblingSearchQuery.toLowerCase();
                    return s.name.toLowerCase().includes(q) ||
                      (s.fatherName && s.fatherName.toLowerCase().includes(q)) ||
                      (s.fatherMobile && s.fatherMobile.includes(q)) ||
                      (s.rollNo && String(s.rollNo).includes(q));
                  })
                  .slice(0, 50)
                  .map(s => {
                  const linked = schoolService.getLinkedSiblings(s.id);
                  return (
                    <tr key={s.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3.5 font-mono font-bold text-slate-500">#{s.rollNo}</td>
                      <td className="p-3.5 font-bold text-slate-900 dark:text-white">{s.name}</td>
                      <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-400">{s.class}</td>
                      <td className="p-3.5 text-slate-500">
                        <div className="font-semibold text-slate-800 dark:text-slate-200">{s.parents?.fatherName || s.fatherName || 'Father'}</div>
                        <div className="font-mono text-[10px] text-sky-600">{s.parents?.fatherPhone || s.fatherMobile || s.mobile || '—'}</div>
                      </td>
                      <td className="p-3.5">
                        {linked.length > 0 ? (
                          <div className="flex flex-wrap gap-1.5">
                            {linked.map(sib => (
                              <span key={sib.id} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-900 dark:text-purple-200 font-bold text-[10px] border border-purple-300 dark:border-purple-800">
                                {sib.name} ({sib.class})
                                <button
                                  type="button"
                                  onClick={() => {
                                    schoolService.removeSiblingFromStudent(s.id, sib.id);
                                    refreshAll();
                                    showToast(`Unlinked ${sib.name}`, 'info');
                                  }}
                                  className="text-rose-500 hover:text-rose-700 ml-1 font-black"
                                >
                                  ×
                                </button>
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-slate-400 italic text-[11px]">No siblings linked</span>
                        )}
                      </td>
                      <td className="p-3.5 text-right">
                        <button
                          onClick={() => {
                            setMainStudentForAssign(s);
                            setIsAssignSiblingModalOpen(true);
                          }}
                          className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-[11px] shadow-sm hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-1"
                        >
                          <UserPlus className="w-3.5 h-3.5" /> + Link Sibling
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📜 TAB: SIBLING LIST (FAMILY DIRECTORY) */}
      {/* ========================================================================= */}
      {activeTab === 'sibling-list' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" /> Sibling Family Directory ({familyGroups.length} Families)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Consolidated family accounts with combined dues and single-receipt POS collection
              </p>
            </div>
            <button
              onClick={() => setActiveTab('siblings')}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow hover:scale-105 transition-all"
            >
              + Link New Siblings
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {familyGroups.map((fam, idx) => (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-4 shadow-sm hover:border-purple-400 transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white">{fam.familyName}</h4>
                    <p className="text-xs text-slate-500 font-medium">Guardian: {fam.guardianName}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Combined Balance</span>
                    <span className="font-mono font-black text-rose-600 text-base">
                      ₹{fam.totalCombinedBalance?.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Children in School ({fam.members?.length}):</span>
                  <div className="space-y-1.5">
                    {fam.members?.map((m) => (
                      <div key={m.id} className="flex justify-between items-center text-xs p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
                        <div>
                          <span className="font-bold text-slate-800 dark:text-slate-200 block">{m.name}</span>
                          <span className="text-[10px] text-slate-400 font-medium">Class {m.class} • Roll #{m.rollNo}</span>
                        </div>
                        <span className="font-mono text-rose-600 font-bold">Due: ₹{(m.feeSummary?.balance || 0).toLocaleString('en-IN')}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setPrimaryStudentId(fam.primaryStudent?.id || fam.members[0]?.id);
                    setIsFamilyMode(true);
                    setActiveTab('pos');
                  }}
                  className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-500/20 flex items-center justify-center gap-1.5 hover:scale-105 active:scale-95 transition-all"
                >
                  <Receipt className="w-4 h-4" /> Pay Family Dues (Single POS)
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🏛️ TAB 9: OFFLINE PAYMENTS QUEUE */}
      {/* ========================================================================= */}
      {activeTab === 'offline' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-indigo-600" /> Offline Bank Payments & DD Verification
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Review and approve parent-submitted offline bank drafts, NEFT receipts, and challans
            </p>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Ref No</th>
                  <th className="p-3.5">Student</th>
                  <th className="p-3.5">Class</th>
                  <th className="p-3.5">Bank & Mode</th>
                  <th className="p-3.5">Amount</th>
                  <th className="p-3.5">Date</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5 text-right">Verification Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {offlinePayments.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-indigo-600">{p.referenceNo}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{p.studentName}</td>
                    <td className="p-3.5 font-semibold text-slate-500">{p.class}</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-300">
                      <div>{p.paymentMode}</div>
                      <div className="text-[10px] text-slate-400">{p.bankName}</div>
                    </td>
                    <td className="p-3.5 font-mono font-black text-emerald-600">₹{p.amount?.toLocaleString('en-IN')}</td>
                    <td className="p-3.5 text-slate-500 font-mono">{p.date}</td>
                    <td className="p-3.5">
                      <Badge variant={p.status.includes('Approved') ? 'success' : p.status.includes('Pending') ? 'warning' : 'danger'}>
                        {p.status}
                      </Badge>
                    </td>
                    <td className="p-3.5 text-right">
                      {p.status === 'Pending Verification' && (
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => {
                              schoolService.approveOfflinePayment(p.id);
                              refreshAll();
                              showToast('Payment approved and recorded in ledger!', 'success');
                            }}
                            className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-[11px]"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => {
                              schoolService.rejectOfflinePayment(p.id);
                              refreshAll();
                              showToast('Payment marked as rejected', 'info');
                            }}
                            className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold text-[11px]"
                          >
                            Reject
                          </button>
                        </div>
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
      {/* 🧾 TAB 10: FEE RECEIPTS LEDGER */}
      {/* ========================================================================= */}
      {activeTab === 'invoices' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Receipt className="w-5 h-5 text-indigo-600" /> Fee Receipts Ledger ({invoices.length} Issued)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Complete chronological history of all receipts issued with reprint functionality
              </p>
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Receipt #</th>
                  <th className="p-3.5">Student Name</th>
                  <th className="p-3.5">Class</th>
                  <th className="p-3.5">Date</th>
                  <th className="p-3.5">Fee Head</th>
                  <th className="p-3.5">Paid Amount</th>
                  <th className="p-3.5">Mode</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-indigo-600 dark:text-indigo-400">{inv.receiptNo || inv.invoiceNo}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{inv.studentName}</td>
                    <td className="p-3.5 font-semibold text-slate-500">{inv.class}</td>
                    <td className="p-3.5 font-mono text-slate-500">{inv.paymentDate || inv.dueDate}</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-300 text-[11px] max-w-xs truncate">{inv.feeType}</td>
                    <td className="p-3.5 font-mono font-black text-emerald-600">₹{(inv.paidAmount || inv.amount || 0).toLocaleString('en-IN')}</td>
                    <td className="p-3.5">
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-[10px]">
                        {inv.paymentMode || 'Cash'}
                      </span>
                    </td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => {
                          setSelectedInvoiceForReceipt(inv);
                          setIsReceiptModalOpen(true);
                        }}
                        className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 rounded-xl font-bold text-[11px] transition-all"
                      >
                        <Printer className="w-3.5 h-3.5 inline mr-1" /> Reprint
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🖨️ MODAL: PRINTABLE 2-COPY FEE RECEIPT */}
      {/* ========================================================================= */}
      {isReceiptModalOpen && selectedInvoiceForReceipt && (
        <Modal
          isOpen={isReceiptModalOpen}
          onClose={() => setIsReceiptModalOpen(false)}
          title={`Official Fee Receipt • ${selectedInvoiceForReceipt.receiptNo || selectedInvoiceForReceipt.invoiceNo}`}
          maxWidth="max-w-4xl"
        >
          <PrintableFeeReceipt
            invoice={selectedInvoiceForReceipt}
            student={schoolService.getStudentById(selectedInvoiceForReceipt.studentId)}
            schoolInfo={schoolInfo}
            onClose={() => setIsReceiptModalOpen(false)}
          />
        </Modal>
      )}

      {/* ========================================================================= */}
      {/* 🏷️ MODAL: ADD NEW FEE TYPE */}
      {/* ========================================================================= */}
      {isAddTypeModalOpen && (
        <Modal
          isOpen={isAddTypeModalOpen}
          onClose={() => setIsAddTypeModalOpen(false)}
          title="Create New Custom Fee Type"
          maxWidth="max-w-lg"
        >
          <form onSubmit={handleAddFeeType} className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Fee Type Code (e.g. TUIT) *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. EXAM, LABF"
                  value={newTypeCode}
                  onChange={(e) => setNewTypeCode(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono uppercase font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Frequency *</label>
                <select
                  value={newTypeFrequency}
                  onChange={(e) => setNewTypeFrequency(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                >
                  <option value="One Time">One Time</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Annual">Annual</option>
                  <option value="Per Term">Per Term</option>
                  <option value="Penalty">Penalty</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Fee Head Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Science Lab & Practical Fee"
                value={newTypeName}
                onChange={(e) => setNewTypeName(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Default Amount (₹) *</label>
              <input
                type="number"
                required
                placeholder="e.g. 1500"
                value={newTypeAmount}
                onChange={(e) => setNewTypeAmount(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold text-emerald-600"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Description</label>
              <textarea
                rows="2"
                placeholder="Optional description of this fee component..."
                value={newTypeDesc}
                onChange={(e) => setNewTypeDesc(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsAddTypeModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow"
              >
                Save Fee Type
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* ========================================================================= */}
      {/* 📂 MODAL: CREATE FEE GROUP */}
      {/* ========================================================================= */}
      {isAddGroupModalOpen && (
        <Modal
          isOpen={isAddGroupModalOpen}
          onClose={() => setIsAddGroupModalOpen(false)}
          title="Create New Fee Group"
          maxWidth="max-w-lg"
        >
          <form onSubmit={handleAddFeeGroup} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Fee Group Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Middle Wing (Class 6th to 8th)"
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Applicable Classes (comma separated) *</label>
              <input
                type="text"
                required
                placeholder="e.g. Class 6, Class 7, Class 8"
                value={newGroupClasses}
                onChange={(e) => setNewGroupClasses(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Total Composite Group Amount (₹) *</label>
              <input
                type="number"
                required
                placeholder="e.g. 20800"
                value={newGroupAmount}
                onChange={(e) => setNewGroupAmount(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold text-emerald-600"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Description</label>
              <textarea
                rows="2"
                placeholder="e.g. Tuition + Annual + Smart Class + Exam charges bundle"
                value={newGroupDesc}
                onChange={(e) => setNewGroupDesc(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsAddGroupModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow"
              >
                Save Fee Group
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* ========================================================================= */}
      {/* 👨‍👩‍👧‍👦 MODAL: LINK SIBLINGS SEARCH MODAL */}
      {/* ========================================================================= */}
      {isAssignSiblingModalOpen && mainStudentForAssign && (
        <Modal
          isOpen={isAssignSiblingModalOpen}
          onClose={() => setIsAssignSiblingModalOpen(false)}
          title={`Link Sibling for ${mainStudentForAssign.name} (${mainStudentForAssign.class})`}
          maxWidth="max-w-xl"
        >
          <div className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Search Brother/Sister (by Name or Class):</label>
              <input
                type="text"
                placeholder="Type sibling name or father mobile..."
                value={siblingSearchQuery}
                onChange={(e) => setSiblingSearchQuery(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-medium"
              />
            </div>

            <div className="max-h-60 overflow-y-auto space-y-2 border border-slate-200 dark:border-slate-700 rounded-2xl p-2">
              {students
                .filter(s => s.id !== mainStudentForAssign.id)
                .filter(s => !siblingSearchQuery || s.name.toLowerCase().includes(siblingSearchQuery.toLowerCase()) || s.class.toLowerCase().includes(siblingSearchQuery.toLowerCase()))
                .slice(0, 15)
                .map(stu => (
                  <div key={stu.id} className="flex justify-between items-center p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors">
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">{stu.name}</p>
                      <p className="text-[10px] text-slate-500">Class {stu.class} • Father: {stu.parents?.fatherName || stu.fatherName || 'Father'}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        schoolService.linkSiblingToStudent(mainStudentForAssign.id, stu.id);
                        refreshAll();
                        showToast(`Linked ${stu.name} as sibling!`, 'success');
                        setIsAssignSiblingModalOpen(false);
                      }}
                      className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold text-[11px]"
                    >
                      + Link Brother/Sister
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </Modal>
      )}

      {/* ========================================================================= */}
      {/* 📦 MODAL: DIRECT STUDENT OLD SESSION ARREARS & MISC DUES (e.g. FOR RAM) */}
      {/* ========================================================================= */}
      {isStudentMiscModalOpen && targetStudentForMisc && (
        <Modal
          isOpen={isStudentMiscModalOpen}
          onClose={() => setIsStudentMiscModalOpen(false)}
          title={`Update Old Session Dues & Misc: ${targetStudentForMisc.name} (${targetStudentForMisc.class})`}
          maxWidth="max-w-md"
        >
          <form onSubmit={handleSaveStudentMisc} className="space-y-4 text-xs">
            <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60">
              <p className="font-bold text-amber-950 dark:text-amber-200 text-sm">{targetStudentForMisc.name}</p>
              <p className="text-[11px] text-amber-800 dark:text-amber-300">
                Father: {targetStudentForMisc.parents?.fatherName || targetStudentForMisc.fatherName || 'Father'} • Ledger: {targetStudentForMisc.ledgerNo || `LED-${targetStudentForMisc.rollNo}`}
              </p>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                📦 Previous Session 2025-26 Dues (पिछला बकाया ₹)
              </label>
              <input
                type="number"
                placeholder="e.g. 4000"
                value={studentMiscPrevDue}
                onChange={(e) => setStudentMiscPrevDue(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono font-bold text-amber-700 dark:text-amber-400 text-sm"
              />
              <span className="text-[10px] text-slate-400">Previous year pending tuition/transport balance</span>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                📚 Course Books / Kit / Uniform (कोर्स व अन्य शुल्क ₹)
              </label>
              <input
                type="number"
                placeholder="e.g. 2450"
                value={studentMiscKitDue}
                onChange={(e) => setStudentMiscKitDue(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono font-bold text-blue-700 dark:text-blue-400 text-sm"
              />
              <span className="text-[10px] text-slate-400">Book set, study materials, uniform kit, etc.</span>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Reason / Description
              </label>
              <input
                type="text"
                placeholder="e.g. Previous 2025-26 year balance + NCERT Books"
                value={studentMiscReason}
                onChange={(e) => setStudentMiscReason(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-medium"
              />
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-[11px] space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-500">Regular Tuition Due:</span>
                <span className="font-mono font-bold">₹{(targetStudentForMisc.feeSummary?.tuitionDue || 0).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">11-Month Transport Due:</span>
                <span className="font-mono font-bold">₹{(targetStudentForMisc.feeSummary?.transportDue11Months || 0).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-amber-700 font-bold border-t border-slate-200 pt-1">
                <span>New Total Annual Demand:</span>
                <span className="font-mono">
                  ₹{(
                    (targetStudentForMisc.feeSummary?.tuitionDue || 0) +
                    (targetStudentForMisc.feeSummary?.transportDue11Months || 0) +
                    (Number(studentMiscPrevDue) || 0) +
                    (Number(studentMiscKitDue) || 0)
                  ).toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsStudentMiscModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow hover:scale-105 active:scale-95 transition-all"
              >
                💾 Save Dues for {targetStudentForMisc.name}
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* ========================================================================= */}
      {/* 💳 MODAL: ADD PAYMENT TYPE */}
      {/* ========================================================================= */}
      {isAddPayTypeModalOpen && (
        <Modal
          isOpen={isAddPayTypeModalOpen}
          onClose={() => setIsAddPayTypeModalOpen(false)}
          title="💳 Add New Fee Payment Mode / Counter Channel"
          maxWidth="max-w-md"
        >
          <form onSubmit={handleAddPaymentType} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Payment Mode Name (e.g. BharatPe QR / PhonePe) *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. PhonePe QR Standee"
                value={payTypeFormData.name}
                onChange={(e) => setPayTypeFormData({ ...payTypeFormData, name: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Code / Short Identifier
                </label>
                <input
                  type="text"
                  placeholder="e.g. QR_PE"
                  value={payTypeFormData.code}
                  onChange={(e) => setPayTypeFormData({ ...payTypeFormData, code: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono uppercase"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Channel Category
                </label>
                <select
                  value={payTypeFormData.type}
                  onChange={(e) => setPayTypeFormData({ ...payTypeFormData, type: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                >
                  <option value="Offline">Offline / Counter</option>
                  <option value="Digital">Digital / UPI</option>
                  <option value="Bank">Bank Deposit / DD</option>
                  <option value="Card">Card Swipe / POS</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Description / Counter Notes
              </label>
              <input
                type="text"
                placeholder="e.g. QR Scanner placed at counter window 1"
                value={payTypeFormData.description}
                onChange={(e) => setPayTypeFormData({ ...payTypeFormData, description: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddPayTypeModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow hover:scale-105 active:scale-95 transition-all"
              >
                + Create Payment Mode
              </button>
            </div>
          </form>
        </Modal>
      )}

    </div>
  );
};

export default FeesPage;
