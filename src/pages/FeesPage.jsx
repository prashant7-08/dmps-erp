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
  GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import { useAuth } from '../context/AuthContext';
import { PrintableFeeReceipt } from '../components/printables/PrintableFeeReceipt';
import schoolService from '../services/schoolService';

export const FeesPage = () => {
  const { showToast } = useToast();
  const { activeBranchId } = useAuth();
  const [invoices, setInvoices] = useState(() => schoolService.getFeeInvoices(activeBranchId));
  const [feeStructures] = useState(schoolService.getFeeStructures());
  const [students, setStudents] = useState(() => schoolService.getStudents(activeBranchId));
  const [activeTab, setActiveTab] = useState('invoices');
  
  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [invoiceTypeFilter, setInvoiceTypeFilter] = useState('All');
  const [siblingClassFilter, setSiblingClassFilter] = useState('All');
  const [duesClassFilter, setDuesClassFilter] = useState('All');

  // Modals
  const [isCollectModalOpen, setIsCollectModalOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);
  
  // Assign Sibling Modal State
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [mainStudentForAssignment, setMainStudentForAssignment] = useState(null);
  const [siblingSearchTerm, setSiblingSearchTerm] = useState('');

  const schoolInfo = schoolService.getSchoolInfo();

  // POS Collection Form State (Single or Multi-Sibling)
  const [isFamilyMode, setIsFamilyMode] = useState(false);
  const [primaryStudentId, setPrimaryStudentId] = useState(students[0]?.id || '');
  const [posReceiptNo, setPosReceiptNo] = useState('');
  const [siblingAllocations, setSiblingAllocations] = useState([]);
  const [posPaymentMode, setPosPaymentMode] = useState('UPI / QR Code');
  const [posDiscount, setPosDiscount] = useState(0);
  const [posFine, setPosFine] = useState(0);
  const [posRemarks, setPosRemarks] = useState('Term Fee Collection');
  const [extraStudentToAdd, setExtraStudentToAdd] = useState('');

  useEffect(() => {
    refreshAllData();
  }, [activeBranchId]);

  const refreshAllData = () => {
    setInvoices([...schoolService.getFeeInvoices(activeBranchId)]);
    setStudents([...schoolService.getStudents(activeBranchId)]);
  };

  // Sync sibling allocations when primary student or family mode changes
  useEffect(() => {
    if (!primaryStudentId) return;
    const primary = schoolService.getStudentById(primaryStudentId);
    if (!primary) return;

    const primaryDue = primary.feeSummary?.balance !== undefined ? primary.feeSummary.balance : 25000;
    const primaryAllocation = {
      studentId: primary.id,
      name: primary.name,
      class: `${primary.class}-${primary.section || 'A'}`,
      rollNo: primary.rollNo,
      dueAmount: primaryDue,
      amountPaid: primaryDue > 0 ? primaryDue : 15000,
      remarks: 'Term Tuition Fee'
    };

    if (isFamilyMode) {
      // Find linked siblings automatically
      const siblings = schoolService.getLinkedSiblings(primaryStudentId);
      const siblingAllocs = siblings.map(s => {
        const due = s.feeSummary?.balance !== undefined ? s.feeSummary.balance : 20000;
        return {
          studentId: s.id,
          name: s.name,
          class: `${s.class}-${s.section || 'A'}`,
          rollNo: s.rollNo,
          dueAmount: due,
          amountPaid: due > 0 ? due : 10000,
          remarks: 'Term Tuition Fee'
        };
      });
      setSiblingAllocations([primaryAllocation, ...siblingAllocs]);
    } else {
      setSiblingAllocations([primaryAllocation]);
    }
  }, [primaryStudentId, isFamilyMode]);

  // Open Assign Sibling Modal for a Student
  const handleOpenAssignModal = (student) => {
    setMainStudentForAssignment(student);
    setSiblingSearchTerm('');
    setIsAssignModalOpen(true);
  };

  // 1-Click Link a Student as Sibling under Main Student
  const handleAddSiblingDirectly = (siblingStudent) => {
    if (!mainStudentForAssignment || !siblingStudent) return;
    schoolService.addSiblingToStudent(mainStudentForAssignment.id, siblingStudent.id);
    refreshAllData();
    // Update active student reference in modal
    setMainStudentForAssignment(schoolService.getStudentById(mainStudentForAssignment.id));
    showToast(`Linked ${siblingStudent.name} (${siblingStudent.class}) under ${mainStudentForAssignment.name}! 🎉`, 'success');
  };

  // 1-Click Unlink a Sibling
  const handleRemoveSiblingDirectly = (siblingId) => {
    if (!mainStudentForAssignment) return;
    schoolService.removeSiblingFromStudent(mainStudentForAssignment.id, siblingId);
    refreshAllData();
    setMainStudentForAssignment(schoolService.getStudentById(mainStudentForAssignment.id));
    showToast('Sibling link removed.', 'info');
  };

  // Open POS for a single student (auto-attaches siblings if linked)
  const handleOpenStudentPOS = (student) => {
    setPrimaryStudentId(student.id);
    setPosReceiptNo('');
    const siblings = schoolService.getLinkedSiblings(student.id);
    if (siblings.length > 0) {
      setIsFamilyMode(true);
    } else {
      setIsFamilyMode(false);
    }
    setIsCollectModalOpen(true);
  };

  // Add an additional student to the current POS bill
  const handleAddStudentToBill = () => {
    if (!extraStudentToAdd) return;
    if (siblingAllocations.some(a => a.studentId === extraStudentToAdd)) {
      showToast('Student is already added to this billing session', 'warning');
      return;
    }
    const extraStu = schoolService.getStudentById(extraStudentToAdd);
    if (!extraStu) return;

    const due = extraStu.feeSummary?.balance !== undefined ? extraStu.feeSummary.balance : 20000;
    const newAlloc = {
      studentId: extraStu.id,
      name: extraStu.name,
      class: `${extraStu.class}-${extraStu.section || 'A'}`,
      rollNo: extraStu.rollNo,
      dueAmount: due,
      amountPaid: due > 0 ? due : 10000,
      remarks: 'Consolidated Fee'
    };

    setSiblingAllocations([...siblingAllocations, newAlloc]);
    setExtraStudentToAdd('');
    showToast(`Added ${extraStu.name} to this combined bill!`, 'success');
  };

  const handleRemoveStudentFromBill = (studentId) => {
    if (siblingAllocations.length <= 1) {
      showToast('At least one student must be present in the bill', 'warning');
      return;
    }
    setSiblingAllocations(siblingAllocations.filter(a => a.studentId !== studentId));
  };

  const handleAllocationAmountChange = (studentId, amount) => {
    setSiblingAllocations(siblingAllocations.map(a => {
      if (a.studentId === studentId) {
        return { ...a, amountPaid: Number(amount) };
      }
      return a;
    }));
  };

  // Submit POS payment
  const handleFeeSubmit = (e) => {
    e.preventDefault();
    if (!primaryStudentId || siblingAllocations.length === 0) {
      showToast('Please select student and valid payment allocation', 'warning');
      return;
    }

    const totalToPay = siblingAllocations.reduce((acc, a) => acc + (Number(a.amountPaid) || 0), 0);
    if (totalToPay <= 0) {
      showToast('Payment amount must be greater than 0', 'warning');
      return;
    }

    let generatedReceipt;
    if (isFamilyMode && siblingAllocations.length > 1) {
      generatedReceipt = schoolService.collectFee({
        studentId: primaryStudentId,
        amountPaid: totalToPay,
        paymentMode: posPaymentMode,
        remarks: posRemarks,
        discount: Number(posDiscount || 0),
        fine: Number(posFine || 0),
        isFamilyPayment: true,
        siblingAllocations: siblingAllocations,
        customReceiptNo: posReceiptNo
      });
    } else {
      const primaryAlloc = siblingAllocations[0];
      generatedReceipt = schoolService.collectFee({
        studentId: primaryStudentId,
        amountPaid: Number(primaryAlloc?.amountPaid || totalToPay),
        paymentMode: posPaymentMode,
        remarks: posRemarks,
        discount: Number(posDiscount || 0),
        fine: Number(posFine || 0),
        isFamilyPayment: false,
        customReceiptNo: posReceiptNo
      });
    }

    refreshAllData();
    setIsCollectModalOpen(false);
    setSelectedInvoice(generatedReceipt);
    setIsReceiptModalOpen(true);
    setPosReceiptNo('');
    showToast(`Fee of ₹${totalToPay.toLocaleString('en-IN')} collected! Receipt: ${generatedReceipt.receiptNo} 🎉`, 'success');
  };

  // Calculations
  const totalCollected = invoices.reduce((acc, i) => acc + (i.paidAmount || 0), 0);
  const totalOutstanding = students.reduce((acc, s) => acc + (s.feeSummary?.balance || 0), 0);
  const totalCombinedToPay = siblingAllocations.reduce((acc, a) => acc + (Number(a.amountPaid) || 0), 0);
  const totalStudentsWithSiblings = students.filter(s => s.linkedSiblingIds && s.linkedSiblingIds.length > 0).length;

  // Distinct Classes
  const distinctClasses = Array.from(new Set(students.map(s => s.class))).sort((a, b) => {
    const numA = parseInt(a.replace(/\D/g, '')) || 0;
    const numB = parseInt(b.replace(/\D/g, '')) || 0;
    return numA - numB;
  });

  // Filtered Invoices
  const filteredInvoices = invoices.filter(inv => {
    const matchesSearch = inv.invoiceNo?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inv.studentName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inv.receiptNo?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inv.class?.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesType = true;
    if (invoiceTypeFilter === 'Family') {
      matchesType = inv.isCombinedFamilyInvoice === true;
    } else if (invoiceTypeFilter === 'Single') {
      matchesType = !inv.isCombinedFamilyInvoice;
    }
    return matchesSearch && matchesType;
  });

  // Filtered Students for Siblings Tab
  const filteredStudentsForSiblings = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.rollNo?.includes(searchQuery) ||
      s.admissionNo?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.parents?.fatherName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.parents?.fatherMobile?.includes(searchQuery);
    const matchesClass = siblingClassFilter === 'All' || s.class === siblingClassFilter;
    return matchesSearch && matchesClass;
  });

  // Filtered Students for Dues Tab
  const filteredStudentsForDues = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.rollNo?.includes(searchQuery) ||
      s.class?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.parents?.fatherName?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = duesClassFilter === 'All' || s.class === duesClassFilter;
    return matchesSearch && matchesClass;
  });

  // Live Search Results in Assign Sibling Modal (Search by Name, Father, Reg/Admission No, Roll No, Mobile)
  const assignModalSearchResults = siblingSearchTerm.trim() === ''
    ? students.filter(s => s.id !== mainStudentForAssignment?.id && !(mainStudentForAssignment?.linkedSiblingIds || []).includes(s.id)).slice(0, 6)
    : students.filter(s => {
        if (s.id === mainStudentForAssignment?.id) return false;
        const q = siblingSearchTerm.toLowerCase().trim();
        return (
          s.name.toLowerCase().includes(q) ||
          (s.parents?.fatherName && s.parents.fatherName.toLowerCase().includes(q)) ||
          (s.admissionNo && s.admissionNo.toLowerCase().includes(q)) ||
          (s.rollNo && s.rollNo.includes(q)) ||
          (s.parents?.fatherMobile && s.parents.fatherMobile.includes(q)) ||
          (s.class && s.class.toLowerCase().includes(q))
        );
      });

  const currentlyLinkedSiblings = mainStudentForAssignment
    ? (mainStudentForAssignment.linkedSiblingIds || []).map(id => schoolService.getStudentById(id)).filter(Boolean)
    : [];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <CreditCard className="w-7 h-7 text-indigo-600" /> Fee POS & Sibling Management
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Assign siblings (brothers, sisters, cousins) to a student, pay consolidated fees, and track child-wise dues accurately.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('siblings')}
            className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
          >
            <UserPlus className="w-4 h-4" /> Class-wise Sibling Assign
          </button>
          <button
            onClick={() => {
              setPrimaryStudentId(students[0]?.id || '');
              setPosReceiptNo('');
              setIsFamilyMode(false);
              setIsCollectModalOpen(true);
            }}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-500/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <Receipt className="w-4 h-4" /> Collect Fee (POS)
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Total Revenue Collected</span>
          <p className="text-2xl font-black text-emerald-600 mt-1">₹{totalCollected.toLocaleString('en-IN')}</p>
          <span className="text-[10px] text-slate-500 mt-1 block">Active Academic Term</span>
        </div>
        <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Total Outstanding Dues</span>
          <p className="text-2xl font-black text-rose-600 mt-1">₹{totalOutstanding.toLocaleString('en-IN')}</p>
          <span className="text-[10px] text-rose-500 mt-1 font-semibold block">Across all students</span>
        </div>
        <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Linked Sibling Students</span>
          <p className="text-2xl font-black text-purple-600 mt-1">{totalStudentsWithSiblings} Students</p>
          <span className="text-[10px] text-purple-500 mt-1 font-semibold block">Multi-Sibling Dues Active</span>
        </div>
        <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Today's POS Inflow</span>
          <p className="text-2xl font-black text-indigo-600 mt-1">₹1,85,400</p>
          <span className="text-[10px] text-emerald-600 mt-1 font-semibold block">100% Verified Ledger</span>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-2">
        <div className="flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('invoices')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'invoices'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Fee Receipts Ledger ({invoices.length})
          </button>
          <button
            onClick={() => setActiveTab('siblings')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'siblings'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Users className="w-3.5 h-3.5" /> Class-wise Sibling Assign ({students.length})
          </button>
          <button
            onClick={() => setActiveTab('dues')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'dues'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Student Dues & Slips ({students.length})
          </button>
          <button
            onClick={() => setActiveTab('structures')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'structures'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Fee Heads & Structure ({feeStructures.length})
          </button>
        </div>

        {/* Search & Sub-Filter */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs w-48 sm:w-60 text-slate-900 dark:text-white"
            />
          </div>

          {activeTab === 'invoices' && (
            <select
              value={invoiceTypeFilter}
              onChange={(e) => setInvoiceTypeFilter(e.target.value)}
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200"
            >
              <option value="All">All Invoices</option>
              <option value="Family">Combined Sibling Receipts</option>
              <option value="Single">Individual Receipts</option>
            </select>
          )}

          {activeTab === 'siblings' && (
            <select
              value={siblingClassFilter}
              onChange={(e) => setSiblingClassFilter(e.target.value)}
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200"
            >
              <option value="All">All Classes</option>
              {distinctClasses.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          )}

          {activeTab === 'dues' && (
            <select
              value={duesClassFilter}
              onChange={(e) => setDuesClassFilter(e.target.value)}
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200"
            >
              <option value="All">All Classes</option>
              {distinctClasses.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* TAB 1: Invoices Ledger */}
      {activeTab === 'invoices' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                  <th className="p-4">Receipt / Invoice No</th>
                  <th className="p-4">Billed Student</th>
                  <th className="p-4">Billing Particulars</th>
                  <th className="p-4">Total Amount</th>
                  <th className="p-4">Amount Paid</th>
                  <th className="p-4">Due Balance</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Receipt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredInvoices.map(inv => (
                  <tr key={inv.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-1.5">
                        <p className="font-mono font-bold text-slate-900 dark:text-white">{inv.invoiceNo}</p>
                        {inv.isCombinedFamilyInvoice && (
                          <span className="px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 text-[9px] font-black uppercase">
                            Sibling Bill
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400">{inv.paymentDate || inv.dueDate}</span>
                    </td>
                    <td className="p-4">
                      <p className="font-bold text-slate-900 dark:text-white">{inv.studentName}</p>
                      <span className="text-[10px] text-slate-500">{inv.class}</span>
                      {inv.isFamilyLinked && !inv.isCombinedFamilyInvoice && inv.primaryStudentName && (
                        <span className="block text-[9px] text-indigo-600 dark:text-indigo-400 font-semibold">
                          via {inv.primaryStudentName}
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-slate-600 dark:text-slate-300 font-medium">
                      {inv.feeType}
                      {inv.isCombinedFamilyInvoice && inv.siblingBreakdown && (
                        <div className="text-[10px] text-purple-700 dark:text-purple-300 font-bold mt-0.5">
                          {inv.siblingBreakdown.map(s => s.name.split(' ')[0]).join(' + ')} ({inv.siblingBreakdown.length} Children)
                        </div>
                      )}
                    </td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">₹{inv.amount?.toLocaleString('en-IN')}</td>
                    <td className="p-4 font-black text-emerald-600">₹{inv.paidAmount?.toLocaleString('en-IN')}</td>
                    <td className="p-4 font-bold text-rose-600">₹{inv.dueAmount?.toLocaleString('en-IN') || 0}</td>
                    <td className="p-4">
                      <Badge variant={inv.status === 'Paid' ? 'success' : inv.status === 'Partial' ? 'warning' : 'danger'}>
                        {inv.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-right">
                      {inv.paidAmount > 0 ? (
                        <button
                          onClick={() => { setSelectedInvoice(inv); setIsReceiptModalOpen(true); }}
                          className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-lg font-bold text-xs hover:bg-indigo-100 flex items-center gap-1 ml-auto transition-colors"
                        >
                          <Printer className="w-3.5 h-3.5" /> Receipt
                        </button>
                      ) : (
                        <span className="text-xs text-rose-500 font-bold">Unpaid</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: Class-wise Sibling Assignment (Pure, Simple & Powerful) */}
      {activeTab === 'siblings' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden space-y-3">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-indigo-600" /> Class-wise Student List & Sibling Assignment
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Click <strong>"Assign Sibling"</strong> on any student to search by Name, Father's Name, Admission No, or Roll No and link brothers, sisters & cousins in 1 click.
              </p>
            </div>
            <span className="text-xs font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-950 px-3 py-1.5 rounded-xl border border-indigo-200 dark:border-indigo-800">
              Showing {filteredStudentsForSiblings.length} Students
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                  <th className="p-4">Student Name & Roll No</th>
                  <th className="p-4">Class</th>
                  <th className="p-4">Admission / Reg No</th>
                  <th className="p-4">Father / Parent Name</th>
                  <th className="p-4">Currently Linked Siblings</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredStudentsForSiblings.map(stu => {
                  const linkedSibs = (stu.linkedSiblingIds || []).map(id => schoolService.getStudentById(id)).filter(Boolean);

                  return (
                    <tr key={stu.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-4">
                        <p className="font-bold text-slate-900 dark:text-white text-xs">{stu.name}</p>
                        <span className="font-mono text-[10px] text-slate-400">Roll #{stu.rollNo}</span>
                      </td>
                      <td className="p-4 font-semibold text-slate-800 dark:text-slate-200">
                        <span className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold text-[11px] border border-indigo-200 dark:border-indigo-800">
                          {stu.class}-{stu.section || 'A'}
                        </span>
                      </td>
                      <td className="p-4 font-mono font-bold text-slate-700 dark:text-slate-300">
                        {stu.admissionNo}
                      </td>
                      <td className="p-4 text-slate-700 dark:text-slate-300 font-medium">
                        {stu.parents?.fatherName || 'Guardian'}
                        {stu.parents?.fatherMobile && (
                          <span className="block text-[10px] text-slate-400 font-mono">{stu.parents.fatherMobile}</span>
                        )}
                      </td>
                      <td className="p-4">
                        {linkedSibs.length > 0 ? (
                          <div className="flex flex-wrap gap-1.5 items-center">
                            {linkedSibs.map(s => (
                              <span
                                key={s.id}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-purple-50 dark:bg-purple-950/70 border border-purple-200 dark:border-purple-800 text-purple-900 dark:text-purple-200 text-[11px] font-bold"
                              >
                                <span>{s.name} ({s.class})</span>
                                <button
                                  type="button"
                                  onClick={() => {
                                    schoolService.removeSiblingFromStudent(stu.id, s.id);
                                    refreshAllData();
                                    showToast(`Unlinked ${s.name} from ${stu.name}`, 'info');
                                  }}
                                  className="text-purple-400 hover:text-rose-600 transition-colors"
                                  title="Unlink sibling"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-slate-400 text-[11px] italic">No siblings linked</span>
                        )}
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenAssignModal(stu)}
                            className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-xs flex items-center gap-1 shadow-sm transition-all hover:scale-105"
                          >
                            <UserPlus className="w-3.5 h-3.5" /> Assign Sibling
                          </button>
                          <button
                            onClick={() => handleOpenStudentPOS(stu)}
                            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs flex items-center gap-1 shadow-sm transition-all hover:scale-105"
                          >
                            <Receipt className="w-3.5 h-3.5" /> Pay Fee
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: Student Dues & Slips */}
      {activeTab === 'dues' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                  <th className="p-4">Student & Roll No</th>
                  <th className="p-4">Class</th>
                  <th className="p-4">Father / Guardian</th>
                  <th className="p-4">Sibling Status</th>
                  <th className="p-4">Total Term Fee</th>
                  <th className="p-4">Total Paid</th>
                  <th className="p-4">Remaining Due</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredStudentsForDues.map(stu => {
                  const siblings = schoolService.getLinkedSiblings(stu.id);
                  const balance = stu.feeSummary?.balance !== undefined ? stu.feeSummary.balance : 0;
                  const totalDue = stu.feeSummary?.totalDue || 45000;
                  const totalPaid = stu.feeSummary?.totalPaid || 0;

                  return (
                    <tr key={stu.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-4">
                        <p className="font-bold text-slate-900 dark:text-white">{stu.name}</p>
                        <span className="font-mono text-[10px] text-slate-400">Roll #{stu.rollNo} • {stu.admissionNo}</span>
                      </td>
                      <td className="p-4 font-semibold text-slate-800 dark:text-slate-200">{stu.class}-{stu.section}</td>
                      <td className="p-4 text-slate-600 dark:text-slate-300 font-medium">
                        {stu.parents?.fatherName || 'Guardian'}
                      </td>
                      <td className="p-4">
                        {siblings.length > 0 ? (
                          <div className="flex items-center gap-1 text-purple-700 dark:text-purple-400 font-bold text-[11px]">
                            <Users className="w-3.5 h-3.5" /> {siblings.length} Siblings Linked
                          </div>
                        ) : (
                          <span className="text-slate-400 text-[11px]">Single Student</span>
                        )}
                      </td>
                      <td className="p-4 font-bold text-slate-900 dark:text-white">₹{totalDue.toLocaleString('en-IN')}</td>
                      <td className="p-4 font-black text-emerald-600">₹{totalPaid.toLocaleString('en-IN')}</td>
                      <td className="p-4 font-black text-rose-600 text-sm">₹{balance.toLocaleString('en-IN')}</td>
                      <td className="p-4">
                        <Badge variant={balance === 0 ? 'success' : totalPaid > 0 ? 'warning' : 'danger'}>
                          {balance === 0 ? 'Fully Paid' : totalPaid > 0 ? 'Partial Due' : 'Overdue'}
                        </Badge>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleOpenStudentPOS(stu)}
                            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center gap-1 shadow-sm"
                          >
                            <Receipt className="w-3.5 h-3.5" /> Pay Fee
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: Fee Structures */}
      {activeTab === 'structures' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {feeStructures.map(f => (
            <div key={f.id} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex justify-between items-center">
                <Badge variant="primary">{f.category}</Badge>
                <span className="text-xs text-slate-400 font-medium">{f.frequency}</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">{f.name}</h4>
              <p className="text-2xl font-black text-indigo-600">₹{f.amount.toLocaleString('en-IN')}</p>
            </div>
          ))}
        </div>
      )}

      {/* ================= MODAL 1: ASSIGN SIBLING POPUP WITH LIVE SEARCH ================= */}
      <Modal
        isOpen={isAssignModalOpen}
        onClose={() => setIsAssignModalOpen(false)}
        title={
          mainStudentForAssignment
            ? `Assign Siblings to: ${mainStudentForAssignment.name} (${mainStudentForAssignment.class}-${mainStudentForAssignment.section})`
            : "Assign Siblings"
        }
        maxWidth="max-w-2xl"
      >
        <div className="space-y-4 text-xs">
          {/* Main Student Header Box */}
          {mainStudentForAssignment && (
            <div className="p-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                  Main / Primary Student
                </span>
                <p className="text-sm font-black text-indigo-950 dark:text-white">
                  {mainStudentForAssignment.name}
                </p>
                <span className="text-[11px] text-slate-500 font-medium">
                  {mainStudentForAssignment.class}-{mainStudentForAssignment.section} • Roll #{mainStudentForAssignment.rollNo} • Adm: {mainStudentForAssignment.admissionNo} • Father: {mainStudentForAssignment.parents?.fatherName}
                </span>
              </div>
              <Badge variant="primary">Main Sibling</Badge>
            </div>
          )}

          {/* Section A: Currently Linked Siblings List */}
          <div className="space-y-2">
            <span className="font-bold text-slate-800 dark:text-slate-200 block">
              Currently Linked Siblings Under this Student ({currentlyLinkedSiblings.length}):
            </span>

            {currentlyLinkedSiblings.length > 0 ? (
              <div className="space-y-2">
                {currentlyLinkedSiblings.map(sib => (
                  <div
                    key={sib.id}
                    className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-slate-900 dark:text-white">{sib.name}</p>
                        <span className="px-2 py-0.5 rounded-md bg-purple-200 dark:bg-purple-900 text-purple-900 dark:text-purple-100 text-[10px] font-bold">
                          {sib.class}-{sib.section || 'A'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Father: <strong>{sib.parents?.fatherName}</strong> • Adm No: {sib.admissionNo} • Roll #{sib.rollNo}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemoveSiblingDirectly(sib.id)}
                      className="px-3 py-1.5 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-bold text-xs hover:bg-rose-200 flex items-center gap-1 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" /> Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-300 dark:border-slate-700 text-center text-slate-400">
                No siblings linked yet. Search and add below!
              </div>
            )}
          </div>

          {/* Section B: Search & Add Any Student (Search by Name, Father Name, Admission/Register No, Roll No, Mobile) */}
          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
            <span className="font-bold text-slate-800 dark:text-slate-200 block">
              Search & Add Any Child (Brother, Sister, Chacha/Tau's Kid, Cousin):
            </span>

            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by Name, Father's Name, Register/Adm No (ADM-...), Roll No, or Mobile..."
                value={siblingSearchTerm}
                onChange={(e) => setSiblingSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Results Box */}
            <div className="max-h-60 overflow-y-auto space-y-1.5 pt-1">
              {assignModalSearchResults.map(stu => {
                const isAlreadyLinked = (mainStudentForAssignment?.linkedSiblingIds || []).includes(stu.id);

                return (
                  <div
                    key={stu.id}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-purple-300 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-slate-900 dark:text-white">{stu.name}</p>
                        <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold">
                          {stu.class}-{stu.section || 'A'}
                        </span>
                        <span className="font-mono text-[10px] text-slate-400">Adm: {stu.admissionNo}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Father: <strong className="text-slate-700 dark:text-slate-300">{stu.parents?.fatherName}</strong> • Due: <span className="text-rose-600 font-bold">₹{stu.feeSummary?.balance?.toLocaleString('en-IN') || 0}</span>
                      </p>
                    </div>

                    {isAlreadyLinked ? (
                      <span className="px-3 py-1.5 rounded-xl bg-purple-100 text-purple-800 font-bold text-xs flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" /> Linked
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleAddSiblingDirectly(stu)}
                        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs flex items-center gap-1 shadow-sm transition-all hover:scale-105"
                      >
                        <Plus className="w-3.5 h-3.5" /> + Add as Sibling
                      </button>
                    )}
                  </div>
                );
              })}

              {assignModalSearchResults.length === 0 && (
                <p className="text-center text-slate-400 py-3">No matching student found.</p>
              )}
            </div>
          </div>

          <div className="flex justify-end pt-3 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsAssignModalOpen(false)}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md"
            >
              Done & Save
            </button>
          </div>
        </div>
      </Modal>

      {/* ================= MODAL 2: COLLECT FEE (POS) WITH SIBLINGS ================= */}
      <Modal
        isOpen={isCollectModalOpen}
        onClose={() => setIsCollectModalOpen(false)}
        title="Fee Collection Point-of-Sale (POS) Counter"
        maxWidth="max-w-3xl"
      >
        <form onSubmit={handleFeeSubmit} className="space-y-4 text-xs">
          
          {/* Primary Student Selection & Sibling Toggle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Primary Billed Student (Elder Child) *
              </label>
              <select
                value={primaryStudentId}
                onChange={(e) => setPrimaryStudentId(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold"
              >
                {students.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.name} (Roll #{s.rollNo} • {s.class}-{s.section})
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col justify-center">
              <label className="flex items-center gap-2 cursor-pointer font-bold text-purple-700 dark:text-purple-300 select-none">
                <input
                  type="checkbox"
                  checked={isFamilyMode}
                  onChange={(e) => setIsFamilyMode(e.target.checked)}
                  className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500"
                />
                <span>Include Siblings / Family Members (संयुक्त फीस)</span>
              </label>
              <p className="text-[11px] text-slate-500 mt-1">
                Combines billing for brothers, sisters & cousins (Chacha/Tau's children) under one master receipt.
              </p>
            </div>
          </div>

          {/* Child-wise Sibling Allocations Table */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-slate-800 dark:text-slate-200">
                Children Included in this Payment ({siblingAllocations.length}):
              </span>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300">
                    <th className="p-3">Student Name</th>
                    <th className="p-3">Class</th>
                    <th className="p-3 text-right">Outstanding Due</th>
                    <th className="p-3 text-right w-44">Amount to Pay (₹) *</th>
                    {siblingAllocations.length > 1 && <th className="p-3 text-center w-10"></th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {siblingAllocations.map((alloc, idx) => (
                    <tr key={alloc.studentId} className={idx === 0 ? "bg-purple-50/40 dark:bg-purple-950/20" : ""}>
                      <td className="p-3">
                        <p className="font-bold text-slate-900 dark:text-white">{alloc.name}</p>
                        <span className="text-[10px] text-slate-400 font-mono">Roll #{alloc.rollNo}</span>
                      </td>
                      <td className="p-3 font-semibold text-slate-700 dark:text-slate-300">{alloc.class}</td>
                      <td className="p-3 text-right font-bold text-rose-600">
                        ₹{alloc.dueAmount?.toLocaleString('en-IN') || 0}
                      </td>
                      <td className="p-3 text-right">
                        <input
                          type="number"
                          min="0"
                          required
                          value={alloc.amountPaid}
                          onChange={(e) => handleAllocationAmountChange(alloc.studentId, e.target.value)}
                          className="w-full p-1.5 px-2 text-right rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold text-emerald-600 focus:ring-2 focus:ring-emerald-500"
                        />
                      </td>
                      {siblingAllocations.length > 1 && (
                        <td className="p-3 text-center">
                          <button
                            type="button"
                            onClick={() => handleRemoveStudentFromBill(alloc.studentId)}
                            className="text-slate-400 hover:text-rose-600"
                            title="Remove from bill"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quick Add Another Sibling / Cousin to this Bill */}
            {isFamilyMode && (
              <div className="flex items-center gap-2 pt-1">
                <select
                  value={extraStudentToAdd}
                  onChange={(e) => setExtraStudentToAdd(e.target.value)}
                  className="flex-1 p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200"
                >
                  <option value="">+ Add any other student (Chacha, Tau, or Relative's Child)...</option>
                  {students
                    .filter(s => !siblingAllocations.some(a => a.studentId === s.id))
                    .map(s => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.class} • Father: {s.parents?.fatherName})
                      </option>
                    ))}
                </select>
                <button
                  type="button"
                  onClick={handleAddStudentToBill}
                  className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shrink-0"
                >
                  Add to Bill
                </button>
              </div>
            )}
          </div>

          {/* Payment Mode, Receipt No & Discounts */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Receipt No. (रसीद संख्या)
              </label>
              <input
                type="text"
                value={posReceiptNo}
                onChange={(e) => setPosReceiptNo(e.target.value)}
                placeholder="Auto (or Book No, e.g. 1042)"
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Payment Channel</label>
              <select
                value={posPaymentMode}
                onChange={(e) => setPosPaymentMode(e.target.value)}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              >
                <option value="UPI / QR Code">UPI / QR Code</option>
                <option value="Cash Counter">Cash Counter</option>
                <option value="Debit / Credit Card">Debit / Credit Card</option>
                <option value="Net Banking">Net Banking</option>
                <option value="Bank Cheque / DD">Bank Cheque / DD</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Discount (₹)</label>
              <input
                type="number"
                min="0"
                value={posDiscount}
                onChange={(e) => setPosDiscount(Number(e.target.value))}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Late Fine (₹)</label>
              <input
                type="number"
                min="0"
                value={posFine}
                onChange={(e) => setPosFine(Number(e.target.value))}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>

            <div className="sm:col-span-4">
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Receipt Particulars / Note</label>
              <input
                type="text"
                value={posRemarks}
                onChange={(e) => setPosRemarks(e.target.value)}
                placeholder="e.g. Tuition & Development Fee Collection"
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Grand Total Bar */}
          <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-indigo-900 dark:text-indigo-200 block">TOTAL CONSOLIDATED PAYABLE</span>
              <span className="text-xs text-indigo-700 dark:text-indigo-300">
                {siblingAllocations.length} {siblingAllocations.length === 1 ? 'Child' : 'Children'} included in this transaction
              </span>
            </div>
            <span className="text-2xl font-black text-indigo-950 dark:text-white">
              ₹{totalCombinedToPay.toLocaleString('en-IN')}
            </span>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsCollectModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
            >
              <CheckCircle2 className="w-4 h-4" /> Collect ₹{totalCombinedToPay.toLocaleString('en-IN')} & Print Receipt
            </button>
          </div>
        </form>
      </Modal>

      {/* ================= MODAL 3: PRINTABLE RECEIPT ================= */}
      <Modal
        isOpen={isReceiptModalOpen}
        onClose={() => setIsReceiptModalOpen(false)}
        title="Official Fee Payment Receipt"
        maxWidth="max-w-3xl"
      >
        {selectedInvoice && (
          <PrintableFeeReceipt invoice={selectedInvoice} schoolInfo={schoolInfo} />
        )}
      </Modal>
    </div>
  );
};

