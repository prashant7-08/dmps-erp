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
  const [feeTypes, setFeeTypes] = useState(() => schoolService.getFeeTypes() || []);
  const [feeGroups, setFeeGroups] = useState(() => schoolService.getFeeGroups() || []);
  const [fineSetup, setFineSetup] = useState(() => schoolService.getFineSetup() || {});
  const [offlinePayments, setOfflinePayments] = useState(() => schoolService.getOfflinePayments() || []);
  const [familyGroups, setFamilyGroups] = useState(() => schoolService.getAllFamilyGroups() || []);

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

  // Sibling Assign Modal
  const [isAssignSiblingModalOpen, setIsAssignSiblingModalOpen] = useState(false);
  const [mainStudentForAssign, setMainStudentForAssign] = useState(null);
  const [siblingSearchQuery, setSiblingSearchQuery] = useState('');

  useEffect(() => {
    refreshAll();
  }, [activeBranchId]);

  const refreshAll = () => {
    setInvoices([...schoolService.getFeeInvoices(activeBranchId)]);
    setStudents([...schoolService.getStudents(activeBranchId)]);
    setFeeTypes([...schoolService.getFeeTypes()]);
    setFeeGroups([...schoolService.getFeeGroups()]);
    setFineSetup({ ...schoolService.getFineSetup() });
    setOfflinePayments([...schoolService.getOfflinePayments()]);
    setFamilyGroups([...schoolService.getAllFamilyGroups()]);
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
            { id: 'types', label: '🏷️ Fees Type', count: feeTypes.length },
            { id: 'groups', label: '📂 Fees Group', count: feeGroups.length },
            { id: 'fine', label: '⚖️ Fine Setup', badge: 'Rules' },
            { id: 'allocation', label: '📌 Fees Allocation', badge: 'Bulk' },
            { id: 'dues', label: '⚠️ Due List / Reminder', count: totalDefaulters },
            { id: 'siblings', label: '👨‍👩‍👧‍👦 Setup Siblings', badge: null },
            { id: 'sibling-list', label: '📜 Sibling List', count: familyGroups.length },
            { id: 'offline', label: '🏛️ Offline Payments', count: offlinePayments.length },
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
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-rose-600" /> Late Payment Fine Setup & Automation
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Set monthly cutoff day, grace period, and automatic penalty calculations for pending dues
            </p>
          </div>

          <form onSubmit={handleSaveFineSetup} className="space-y-5 text-xs">
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
                  value={fineSetup.fineType === 'Fixed Rate' ? fineSetup.fixedAmount || 100 : fineSetup.dailyRate || 5}
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

            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 space-y-1">
              <span className="font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" /> Active Policy Rule:
              </span>
              <p className="text-[11px] leading-relaxed">
                Fees unpaid by the <strong>{fineSetup.dueDayCutoff || 10}th</strong> of the month receive <strong>{fineSetup.graceDays || 5} days</strong> of grace. After that, a late fine of <strong>₹{fineSetup.fineType === 'Fixed Rate' ? fineSetup.fixedAmount || 100 : `${fineSetup.dailyRate || 5}/day`}</strong> will be automatically appended to the student invoice.
              </p>
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-md shadow-rose-500/20 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
            >
              <CheckCircle2 className="w-4 h-4" /> Save & Activate Fine Rules
            </button>
          </form>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📌 TAB 5: FEES ALLOCATION */}
      {/* ========================================================================= */}
      {activeTab === 'allocation' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-600" /> Bulk Class-Wise Fee Allocation
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Assign full fee groups or customized fee structures to entire classes in 1 click
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Select Target Class *
              </label>
              <select
                value={allocTargetClass}
                onChange={(e) => setAllocTargetClass(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold"
              >
                <option value="All">All Classes (School Wide)</option>
                {['PG', 'NUR', 'LKG', 'UKG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'].map(c => (
                  <option key={c} value={c}>Class {c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Select Fee Group to Assign *
              </label>
              <select
                value={allocSelectedGroup}
                onChange={(e) => setAllocSelectedGroup(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold"
              >
                {feeGroups.map(g => (
                  <option key={g.id} value={g.id}>
                    {g.name} — ₹{g.totalAmount?.toLocaleString('en-IN')}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
            <div>
              <span className="text-xs font-bold text-indigo-900 dark:text-indigo-200">
                Ready to allocate to {allocTargetClass === 'All' ? students.length : students.filter(s => s.class === allocTargetClass || s.class?.includes(allocTargetClass)).length} students
              </span>
              <p className="text-[11px] text-indigo-700 dark:text-indigo-400 mt-0.5">
                Automatically recalculates tuition and leaves 11-month village transport fares untouched.
              </p>
            </div>
            <button
              onClick={handleBulkAllocate}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 hover:scale-105 active:scale-95 transition-all"
            >
              ⚡ Allocate Now
            </button>
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
                {['PG', 'NUR', 'LKG', 'UKG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'].map(c => (
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
      {activeTab === 'siblings' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" /> Class-Wise Sibling Assign & Linker
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Link real brothers & sisters together for joint single-receipt fee collection and family statements
              </p>
            </div>
            <button
              onClick={() => setActiveTab('sibling-list')}
              className="text-xs font-bold text-purple-600 hover:underline"
            >
              View Linked Families ({familyGroups.length}) →
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Roll No</th>
                  <th className="p-3.5">Student Name</th>
                  <th className="p-3.5">Class</th>
                  <th className="p-3.5">Father Name</th>
                  <th className="p-3.5">Linked Brothers / Sisters</th>
                  <th className="p-3.5 text-right">Assign Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {students.slice(0, 25).map(s => {
                  const linked = schoolService.getLinkedSiblings(s.id);
                  return (
                    <tr key={s.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3.5 font-mono font-bold text-slate-500">#{s.rollNo}</td>
                      <td className="p-3.5 font-bold text-slate-900 dark:text-white">{s.name}</td>
                      <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-400">{s.class}</td>
                      <td className="p-3.5 text-slate-500">{s.parents?.fatherName || s.fatherName || 'Father'}</td>
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
      {/* 📜 TAB 8: SIBLING LIST (FAMILY DIRECTORY) */}
      {/* ========================================================================= */}
      {activeTab === 'sibling-list' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
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
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow"
            >
              + Link New Siblings
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {familyGroups.map((fam, idx) => (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-4 shadow-sm"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{fam.familyName}</h4>
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
                      <div key={m.id} className="flex justify-between items-center text-xs p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
                        <span className="font-bold text-slate-800 dark:text-slate-200">{m.name} ({m.class})</span>
                        <span className="font-mono text-rose-500 font-bold">Due: ₹{(m.feeSummary?.balance || 0).toLocaleString('en-IN')}</span>
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
                  className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-sm flex items-center justify-center gap-1.5"
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

    </div>
  );
};

export default FeesPage;
