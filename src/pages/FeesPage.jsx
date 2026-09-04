import React, { useState, useEffect, useMemo } from 'react';
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
  Edit,
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
import { isClassMatch, STANDARD_CLASS_OPTIONS } from '../utils/classUtils';

export const FeesPage = ({ initialTab = 'pos' }) => {
  const { showToast } = useToast();
  const { activeBranchId } = useAuth();

  // Normalize initialTab from sidebar routes
  const resolveTab = (tab) => {
    if (!tab) return 'pos';
    if (tab === 'fees' || tab === 'fees-collect' || tab === 'pos' || tab === 'fees-pos') return 'pos';
    if (tab === 'fees-payment-types' || tab === 'payment-types') return 'payment-types';
    if (tab === 'fees-types' || tab === 'types') return 'types';
    if (tab === 'fees-groups' || tab === 'groups') return 'groups';
    if (tab === 'fees-fine' || tab === 'fine') return 'fine';
    if (tab === 'fees-allocation' || tab === 'allocation') return 'allocation';
    if (tab === 'fees-dues' || tab === 'dues') return 'dues';
    if (tab === 'fees-siblings' || tab === 'siblings') return 'siblings';
    if (tab === 'fees-sibling-list' || tab === 'sibling-list') return 'sibling-list';
    if (tab === 'fees-offline' || tab === 'offline') return 'offline';
    if (tab === 'invoices' || tab === 'fees-invoices' || tab === 'receipts') return 'invoices';
    return 'pos';
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
  const [modalSiblingSearch, setModalSiblingSearch] = useState('');

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

  // 🚀 POS Search-First Hub States
  const [posSearchQuery, setPosSearchQuery] = useState('');
  const [posClassFilter, setPosClassFilter] = useState('All');
  const [posDueFilter, setPosDueFilter] = useState('all'); // 'all', 'due', 'transport'

  // Comprehensive Zero-Scroll Fee Collection Modal States
  const [isFeeModalOpen, setIsFeeModalOpen] = useState(false);
  const [studentForFee, setStudentForFee] = useState(null);
  const [feeForm, setFeeForm] = useState({
    tuitionPay: '',
    transportPay: '',
    hostelPay: '',
    oldSessionPay: '',
    miscPay: '',
    discount: 0,
    amount: 0,
    paymentMode: 'Cash',
    paymentDate: new Date().toISOString().split('T')[0],
    remarks: 'School Fee Installment',
    receiptNo: ''
  });
  const [editingTuition, setEditingTuition] = useState(false);
  const [tempTuition, setTempTuition] = useState(0);
  const [editingTransport, setEditingTransport] = useState(false);
  const [tempTransport, setTempTransport] = useState(0);
  const [editingOldDues, setEditingOldDues] = useState(false);
  const [tempOldDues, setTempOldDues] = useState(0);
  const [editingMisc, setEditingMisc] = useState(false);
  const [miscItemsList, setMiscItemsList] = useState([]);
  const [newMiscTitle, setNewMiscTitle] = useState('');
  const [newMiscAmount, setNewMiscAmount] = useState('');
  const [showOldDuesRow, setShowOldDuesRow] = useState(false);
  const [showMiscRow, setShowMiscRow] = useState(false);

  // Sibling Mode State for Modal
  const [isSiblingPayActive, setIsSiblingPayActive] = useState(false);
  const [selectedSibling, setSelectedSibling] = useState(null);
  const [siblingTuitionPay, setSiblingTuitionPay] = useState('');
  const [siblingTransportPay, setSiblingTransportPay] = useState('');

  // POS Collection Form State
  const [isCollectModalOpen, setIsCollectModalOpen] = useState(false);
  const [selectedInvoiceForReceipt, setSelectedInvoiceForReceipt] = useState(null);
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);

  const [isFamilyMode, setIsFamilyMode] = useState(false);
  const [primaryStudentId, setPrimaryStudentId] = useState(students[0]?.id || '');
  const [posPaymentDate, setPosPaymentDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [posReceiptNo, setPosReceiptNo] = useState('');
  const [posPaymentMode, setPosPaymentMode] = useState('Cash Counter');
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

  const refreshAll = () => {
    setStudents(schoolService.getStudents(activeBranchId) || []);
    setInvoices(schoolService.getFeeInvoices(activeBranchId) || []);
    setPaymentTypes(schoolService.getPaymentTypes() || []);
    setFeeTypes(schoolService.getFeeTypes() || []);
    setFeeGroups(schoolService.getFeeGroups() || []);
    setFineSetup(schoolService.getFineSetup() || {});
    setOfflinePayments(schoolService.getOfflinePayments() || []);
    setFamilyGroups(schoolService.getAllFamilyGroups() || []);
  };

  // 🔍 POS Filtered Students Engine (Fast Real-Time Search)
  const posFilteredStudents = useMemo(() => {
    return (students || []).filter(s => {
      if (posClassFilter !== 'All' && !isClassMatch(s.class, posClassFilter)) return false;
      if (posDueFilter === 'due' && (s.feeSummary?.balance || 0) <= 0) return false;
      if (posDueFilter === 'transport' && !s.transport?.isEnrolled && (s.feeSummary?.transportDue11Months || 0) <= 0 && !s.route) return false;
      if (posSearchQuery.trim()) {
        const q = posSearchQuery.trim().toLowerCase();
        const name = (s.name || '').toLowerCase();
        const adm = (s.admissionNo || '').toLowerCase();
        const roll = String(s.rollNo || '');
        const father = (s.parents?.fatherName || '').toLowerCase();
        const mob = (s.parents?.fatherMobile || s.parents?.mobile || s.phone || '');
        const cls = String(s.class || '').toLowerCase();
        return name.includes(q) || adm.includes(q) || roll.includes(q) || father.includes(q) || mob.includes(q) || cls.includes(q);
      }
      return true;
    });
  }, [students, posSearchQuery, posClassFilter, posDueFilter]);

  const filteredStudentsWithDueCount = useMemo(() => {
    return (students || []).filter(s => (s.feeSummary?.balance || 0) > 0).length;
  }, [students]);

  // 💳 Comprehensive Zero-Scroll Fee Modal Open Handler
  const handleOpenFeeModal = (student) => {
    setStudentForFee(student);
    setEditingTuition(false);
    setEditingTransport(false);
    setEditingOldDues(false);
    setEditingMisc(false);
    
    const tDue = student.feeSummary?.tuitionDue !== undefined ? student.feeSummary.tuitionDue : 13500;
    const trDue = student.feeSummary?.transportDue11Months !== undefined ? student.feeSummary.transportDue11Months : (Number(student.transport?.monthlyFare || 0) * (student.transport?.months || 11));
    const oDue = student.feeSummary?.oldSessionDues || 0;
    const mDue = student.feeSummary?.miscellaneousDue || 0;

    setTempTuition(tDue);
    setTempTransport(trDue);
    setTempOldDues(oDue);
    setShowOldDuesRow(Number(oDue) > 0);
    setShowMiscRow(Number(mDue) > 0);

    // Sibling detection
    const fatherMobile = student.parents?.fatherMobile || student.parents?.mobile || student.phone;
    const fatherName = (student.parents?.fatherName || '').trim().toLowerCase();
    const allStudents = students || [];
    const sibs = (student.feeSummary?.familySiblings?.length > 0)
      ? student.feeSummary.familySiblings.map(s => allStudents.find(st => st.id === s.id || st.name === s.name) || s)
      : allStudents.filter(s => {
          if (s.id === student.id) return false;
          if (fatherMobile && (s.parents?.fatherMobile === fatherMobile || s.parents?.mobile === fatherMobile || s.phone === fatherMobile)) return true;
          if (fatherName && fatherName.length > 2 && (s.parents?.fatherName || '').trim().toLowerCase() === fatherName) return true;
          return false;
        });

    if (sibs.length > 0) {
      setSelectedSibling(sibs[0]);
    } else {
      setSelectedSibling(null);
    }
    setIsSiblingPayActive(false);
    setSiblingTuitionPay('');
    setSiblingTransportPay('');

    // Initialize itemized misc list
    const existingBreakdown = student.feeSummary?.miscellaneousBreakdown;
    if (Array.isArray(existingBreakdown) && existingBreakdown.length > 0) {
      setMiscItemsList(existingBreakdown);
    } else if (Number(student.feeSummary?.miscellaneousDue || 0) > 0) {
      setMiscItemsList([{ id: 'misc_1', title: 'General Misc Fee', amount: Number(student.feeSummary.miscellaneousDue) }]);
    } else {
      setMiscItemsList([]);
    }
    setNewMiscTitle('');
    setNewMiscAmount('');

    const tuitionRem = Math.max(0, tDue - (student.feeSummary?.tuitionPaid || 0));
    const transportRem = Math.max(0, trDue - (student.feeSummary?.transportPaid || 0));
    const hostelRem = Math.max(0, (student.feeSummary?.hostelDue || 0) - (student.feeSummary?.hostelPaid || 0));
    const oldSessionRem = Math.max(0, oDue - (student.feeSummary?.oldSessionPaid || 0));
    const miscRem = Math.max(0, mDue - (student.feeSummary?.miscPaid || 0));

    const totalDue = tuitionRem + transportRem + hostelRem + oldSessionRem + miscRem;

    setFeeForm({
      tuitionPay: tuitionRem > 0 ? tuitionRem : '',
      transportPay: transportRem > 0 ? transportRem : '',
      hostelPay: hostelRem > 0 ? hostelRem : '',
      oldSessionPay: oldSessionRem > 0 ? oldSessionRem : '',
      miscPay: miscRem > 0 ? miscRem : '',
      discount: 0,
      amount: totalDue > 0 ? totalDue : 0,
      paymentMode: 'Cash',
      paymentDate: new Date().toISOString().split('T')[0],
      remarks: 'School Fee Installment',
      receiptNo: `DMPS-REC-${Date.now().toString().slice(-5)}`
    });
    setIsFeeModalOpen(true);
  };

  const handleSaveTuitionInline = (studentId) => {
    const val = Number(tempTuition) || 0;
    const updated = schoolService.updateStudent(studentId, { tuitionDue: val });
    if (updated) {
      setStudentForFee(updated);
      refreshAll();
      setEditingTuition(false);
      showToast(`Tuition Fee updated to ₹${val.toLocaleString('en-IN')}! 🎓`, 'success');
    }
  };

  const handleSaveTransportInline = (studentId) => {
    const val = Number(tempTransport) || 0;
    const updated = schoolService.updateStudent(studentId, {
      transport: {
        ...(studentForFee?.transport || {}),
        isEnrolled: val > 0,
        customAnnualTransport: val,
        monthlyFare: Math.round(val / 11)
      }
    });
    if (updated) {
      setStudentForFee(updated);
      refreshAll();
      setEditingTransport(false);
      showToast(`Transport Fee updated to ₹${val.toLocaleString('en-IN')}! 🚌`, 'success');
    }
  };

  const handleSaveOldDuesInline = (studentId) => {
    const val = Number(tempOldDues) || 0;
    const updated = schoolService.updateStudent(studentId, { oldSessionDues: val });
    if (updated) {
      setStudentForFee(updated);
      refreshAll();
      setEditingOldDues(false);
      setShowOldDuesRow(val > 0);
      showToast(`Old Session Fees updated to ₹${val.toLocaleString('en-IN')}! 📜`, 'success');
    }
  };

  const handleAddNewMiscItem = (studentId) => {
    const title = newMiscTitle.trim() || 'Miscellaneous Charge';
    const amount = Number(newMiscAmount);
    if (!amount || amount <= 0) {
      showToast('Please enter a valid misc charge amount!', 'error');
      return;
    }

    const updatedList = [...miscItemsList, { id: 'misc_' + Date.now(), title, amount }];
    const totalMisc = updatedList.reduce((sum, item) => sum + Number(item.amount || 0), 0);

    const updated = schoolService.updateStudent(studentId, {
      miscellaneousBreakdown: updatedList,
      miscellaneousDue: totalMisc
    });

    if (updated) {
      setStudentForFee(updated);
      setMiscItemsList(updatedList);
      setNewMiscTitle('');
      setNewMiscAmount('');
      setShowMiscRow(true);
      refreshAll();
      showToast(`Added '${title}' (₹${amount.toLocaleString()}) to Misc Charges! 📦`, 'success');
    }
  };

  const handleRemoveMiscItem = (studentId, itemId) => {
    const updatedList = miscItemsList.filter(item => item.id !== itemId);
    const totalMisc = updatedList.reduce((sum, item) => sum + Number(item.amount || 0), 0);

    const updated = schoolService.updateStudent(studentId, {
      miscellaneousBreakdown: updatedList,
      miscellaneousDue: totalMisc
    });

    if (updated) {
      setStudentForFee(updated);
      setMiscItemsList(updatedList);
      setShowMiscRow(totalMisc > 0);
      refreshAll();
      showToast('Misc charge item removed! 🗑️', 'info');
    }
  };

  const handleCollectFeeSubmitModal = (e) => {
    e.preventDefault();
    if (!studentForFee) return;
    const amt = Number(feeForm.amount);
    if (!amt || amt <= 0) {
      showToast('Please enter a valid amount greater than zero!', 'error');
      return;
    }

    try {
      const inv = schoolService.collectFee({
        studentId: studentForFee.id,
        amountPaid: amt,
        paymentMode: feeForm.paymentMode,
        paymentDate: feeForm.paymentDate,
        remarks: feeForm.remarks,
        discount: Number(feeForm.discount) || 0,
        customReceiptNo: feeForm.receiptNo,
        siblingDetails: (isSiblingPayActive && selectedSibling) ? {
          siblingId: selectedSibling.id,
          siblingName: selectedSibling.name,
          siblingClass: selectedSibling.class,
          tuitionPaid: Number(siblingTuitionPay || 0),
          transportPaid: Number(siblingTransportPay || 0)
        } : null,
        headAllocation: {
          tuition: Number(feeForm.tuitionPay || 0),
          transport: Number(feeForm.transportPay || 0),
          hostel: Number(feeForm.hostelPay || 0),
          oldSession: Number(feeForm.oldSessionPay || 0),
          misc: Number(feeForm.miscPay || 0)
        }
      });

      if (isSiblingPayActive && selectedSibling) {
        const sibTuition = Number(siblingTuitionPay || 0);
        const sibTransport = Number(siblingTransportPay || 0);
        const sibTotal = sibTuition + sibTransport;
        if (sibTotal > 0) {
          schoolService.collectFee({
            studentId: selectedSibling.id,
            amountPaid: sibTotal,
            paymentMode: feeForm.paymentMode,
            paymentDate: feeForm.paymentDate,
            remarks: `Sibling Consolidated Pay with ${studentForFee.name}`,
            discount: 0,
            customReceiptNo: `${feeForm.receiptNo}-S`,
            headAllocation: {
              tuition: sibTuition,
              transport: sibTransport,
              hostel: 0,
              oldSession: 0,
              misc: 0
            }
          });
        }
      }

      refreshAll();
      setIsFeeModalOpen(false);
      setSelectedInvoiceForReceipt(inv);
      setIsReceiptModalOpen(true);
      showToast(`Fee payment of ₹${amt.toLocaleString('en-IN')} recorded successfully! 💳`, 'success');
    } catch (err) {
      showToast('Payment processing error: ' + err.message, 'error');
    }
  };

  // 🤖 1-Click Auto-Link All Siblings Engine
  const handleAutoLinkAllSiblings = () => {
    const result = schoolService.autoLinkAllSiblings();
    refreshAll();
    showToast(
      `🎉 Auto-Link Completed! Successfully created ${result.linkedFamilyCount} Family Groups linking ${result.linkedStudentCount} real brothers & sisters!`,
      'success'
    );
  };

  // 1-Click Payment Type Creation
  const handleAddPaymentType = (e) => {
    e.preventDefault();
    if (!payTypeFormData.name) {
      showToast('Please enter a payment mode name', 'warning');
      return;
    }
    schoolService.addPaymentType(payTypeFormData);
    refreshAll();
    setPayTypeFormData({ name: '', code: '', type: 'Offline', description: '' });
    setIsAddPayTypeModalOpen(false);
    showToast(`Payment Mode "${payTypeFormData.name}" added successfully!`, 'success');
  };

  // 1-Click Delete Payment Type
  const handleDeletePaymentType = (id, name) => {
    if (window.confirm(`Delete payment type "${name}"?`)) {
      schoolService.deletePaymentType(id);
      refreshAll();
      showToast(`Payment Type "${name}" removed`, 'info');
    }
  };

  // 🤖 Auto-detect siblings and default isFamilyMode to true when siblings exist
  useEffect(() => {
    if (!primaryStudentId) return;
    const sibs = schoolService.getLinkedSiblings(primaryStudentId);
    if (sibs && sibs.length > 0) {
      setIsFamilyMode(true);
    } else {
      setIsFamilyMode(false);
    }
  }, [primaryStudentId]);

  // Sync sibling allocations when primary student or isFamilyMode changes in POS
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

  // Fast Memoized Sibling Modal Search List
  const filteredModalSiblings = useMemo(() => {
    if (!mainStudentForAssign) return [];
    const q = modalSiblingSearch.trim().toLowerCase();
    if (!q) {
      return students.filter(s => s.id !== mainStudentForAssign.id).slice(0, 25);
    }
    return students
      .filter(s => s.id !== mainStudentForAssign.id)
      .filter(s => {
        const name = (s.name || '').toLowerCase();
        const cls = (s.class || '').toLowerCase();
        const father = (s.parents?.fatherName || s.fatherName || '').toLowerCase();
        const mother = (s.parents?.motherName || s.motherName || '').toLowerCase();
        const phone = (s.parents?.fatherPhone || s.fatherMobile || s.mobile || s.phone || '').toLowerCase();
        const roll = (s.rollNo || '').toLowerCase();
        const adm = (s.admissionNo || '').toLowerCase();
        return name.includes(q) || cls.includes(q) || father.includes(q) || mother.includes(q) || phone.includes(q) || roll.includes(q) || adm.includes(q);
      })
      .slice(0, 30);
  }, [students, mainStudentForAssign, modalSiblingSearch]);

  // POS Submission
  const handleCollectFeeSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
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
        paymentDate: posPaymentDate,
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

      {/* 🧭 Comprehensive Navigation Bar */}
      <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-x-auto custom-scrollbar">
        <div className="flex items-center gap-1 min-w-max text-xs font-bold">
          {[
            { id: 'pos', label: '💳 Fee Collect / POS Counter', badge: 'POS' },
            { id: 'dues', label: '⚠️ Due List & Reminders', count: totalDefaulters },
            { id: 'payment-types', label: '💳 Payments Type (Cash & UPI)', count: paymentTypes.length },
            { id: 'siblings', label: '👨‍👩‍👧‍👦 Setup Siblings', badge: null },
            { id: 'sibling-list', label: '📜 Sibling Directory', count: familyGroups.length },
            { id: 'types', label: '🏷️ Fees Type', count: feeTypes.length },
            { id: 'groups', label: '📂 Fees Group', count: feeGroups.length },
            { id: 'fine', label: '⚖️ Fine Setup', badge: 'Rules' },
            { id: 'allocation', label: '📌 Fees Allocation', badge: 'Bulk' },
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
      {/* 💳 TAB 1: SMART POS FEE COLLECTION COUNTER (SEARCH FIRST) */}
      {/* ========================================================================= */}
      {activeTab === 'pos' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main 2-Col: Student Search & Selection Counter */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-emerald-600" /> POS Fee Collection Counter (सर्च करें व फ़ीस जमा करें)
                </h3>
                <p className="text-xs text-slate-500">
                  Search any student by Name, Class, Ledger No. or Mobile to collect fee and print official receipt
                </p>
              </div>
            </div>

            {/* 🔍 Search & Filters Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
              <div className="sm:col-span-7 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by Student Name, Ledger #, Adm #, Mobile, Father..."
                  value={posSearchQuery}
                  onChange={(e) => setPosSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-xs font-medium focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
                />
                {posSearchQuery && (
                  <button
                    type="button"
                    onClick={() => setPosSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="sm:col-span-5 flex items-center gap-2">
                <select
                  value={posClassFilter}
                  onChange={(e) => setPosClassFilter(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-900 dark:text-white"
                >
                  {STANDARD_CLASS_OPTIONS.map(c => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Filter Chips Bar */}
            <div className="flex items-center gap-1.5 flex-wrap text-xs">
              <span className="text-[10px] font-black uppercase text-slate-400 pl-1">Filters:</span>
              <button
                type="button"
                onClick={() => setPosDueFilter('all')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                  posDueFilter === 'all'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                All Students ({students.length})
              </button>
              <button
                type="button"
                onClick={() => setPosDueFilter('due')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                  posDueFilter === 'due'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                Pending Dues Only ({filteredStudentsWithDueCount})
              </button>
              <button
                type="button"
                onClick={() => setPosDueFilter('transport')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                  posDueFilter === 'transport'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                🚌 Transport Enrolled
              </button>
            </div>

            {/* 📋 Filtered Students List (Instant Click & Collect) */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-xs">
              <div className="max-h-[480px] overflow-y-auto custom-scrollbar divide-y divide-slate-100 dark:divide-slate-800">
                {posFilteredStudents.length > 0 ? (
                  posFilteredStudents.map(student => {
                    const balance = student.feeSummary?.balance || 0;
                    const isDue = balance > 0;
                    return (
                      <div
                        key={student.id}
                        className="p-3 hover:bg-slate-50 dark:hover:bg-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={student.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=4F46E5&color=fff&size=80&bold=true`}
                            alt={student.name}
                            className="w-10 h-10 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0"
                          />
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="font-bold text-xs text-slate-900 dark:text-white uppercase">
                                {student.name}
                              </h4>
                              <span className="px-2 py-0.2 rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-bold text-[10px]">
                                Class {student.class}-{student.section || 'A'}
                              </span>
                              <span className="font-mono text-slate-400 text-[10px]">
                                Adm: #{student.admissionNo}
                              </span>
                              <span className="font-mono text-emerald-600 font-bold text-[10px]">
                                Ledger #{student.rollNo}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                              Father: <strong className="text-slate-700 dark:text-slate-300">{student.parents?.fatherName || 'N/A'}</strong> • Mob: <span className="font-mono">{student.parents?.fatherMobile || student.parents?.mobile || student.phone || '—'}</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                          <div className="text-right">
                            <span className="text-[9.5px] uppercase font-bold text-slate-400 block">Balance Due</span>
                            <span className={`font-mono font-black text-sm ${isDue ? 'text-rose-600' : 'text-emerald-600'}`}>
                              ₹{balance.toLocaleString('en-IN')}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleOpenFeeModal(student)}
                            className="px-3.5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black rounded-xl text-xs flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                          >
                            <CreditCard className="w-3.5 h-3.5" /> 💳 Collect Fee
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="p-8 text-center text-slate-400 text-xs">
                    <Search className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                    <p className="font-bold">No students found matching "{posSearchQuery}"</p>
                    <p className="text-[11px] mt-1">Try searching with a different name, class or ledger number.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Summary Column: Recent Receipts & POS Quick Stats */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Receipt className="w-4 h-4 text-emerald-600" /> Recent POS Receipts
                </h3>
                <span className="text-[10px] text-slate-400 font-medium">Live collection feed</span>
              </div>
              <button
                onClick={() => setActiveTab('invoices')}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer"
              >
                View All Ledger
              </button>
            </div>

            <div className="space-y-2.5 max-h-[480px] overflow-y-auto custom-scrollbar pr-1">
              {invoices.slice(0, 10).map((inv) => (
                <div
                  key={inv.id}
                  className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 text-xs space-y-1.5 hover:border-indigo-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 text-[11px]">{inv.receiptNo || inv.invoiceNo}</span>
                    <Badge variant="success" size="sm">₹{(inv.paidAmount || inv.amount || 0).toLocaleString('en-IN')}</Badge>
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-slate-600 dark:text-slate-400">
                    <span className="font-bold text-slate-900 dark:text-white uppercase">{inv.studentName}</span>
                    <span className="text-[10px] font-bold text-slate-500">Class {inv.class}</span>
                  </div>
                  <div className="pt-1.5 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-[10px] text-slate-400">
                    <span>📅 {inv.paymentDate || inv.dueDate} ({inv.paymentMode || 'Cash'})</span>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedInvoiceForReceipt(inv);
                        setIsReceiptModalOpen(true);
                      }}
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
                  {STANDARD_CLASS_OPTIONS.map(c => (
                    <option key={c.value} value={c.value}>{c.label}</option>
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
                      const matchClass = allocTargetClass === 'All' || isClassMatch(s.class, allocTargetClass);
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
                            const matchClass = allocTargetClass === 'All' || isClassMatch(s.class, allocTargetClass);
                            const matchSearch = !allocSearch.trim() ||
                              s.name.toLowerCase().includes(allocSearch.toLowerCase()) ||
                              (s.parents?.fatherName || s.fatherName || '').toLowerCase().includes(allocSearch.toLowerCase()) ||
                              (s.rollNo || '').toString().includes(allocSearch);
                            return matchClass && matchSearch;
                          }).length
                        }
                        onChange={(e) => {
                          const filtered = students.filter(s => {
                            const matchClass = allocTargetClass === 'All' || isClassMatch(s.class, allocTargetClass);
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
                      const matchClass = allocTargetClass === 'All' || isClassMatch(s.class, allocTargetClass);
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
                {STANDARD_CLASS_OPTIONS.map(c => (
                  <option key={c.value} value={c.value}>{c.label}</option>
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
                  .filter(s => classFilter === 'All' || isClassMatch(s.class, classFilter))
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
          onClose={() => {
            setIsAssignSiblingModalOpen(false);
            setModalSiblingSearch('');
          }}
          title={`Link Sibling for ${mainStudentForAssign.name} (${mainStudentForAssign.class})`}
          maxWidth="max-w-xl"
        >
          <div className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Search Brother/Sister (by Name, Class, Father/Mother Name, Mobile No. or Ledger No.):
              </label>
              <input
                type="text"
                autoFocus
                placeholder="Type name, father name, mobile number, roll/ledger no..."
                value={modalSiblingSearch}
                onChange={(e) => setModalSiblingSearch(e.target.value)}
                className="w-full p-3 rounded-xl border-2 border-indigo-500 bg-white dark:bg-slate-900 font-medium text-xs shadow-sm focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div className="max-h-72 overflow-y-auto space-y-2 border border-slate-200 dark:border-slate-700 rounded-2xl p-2 custom-scrollbar">
              {filteredModalSiblings.length > 0 ? (
                filteredModalSiblings.map(stu => (
                  <div key={stu.id} className="flex justify-between items-center p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-black text-slate-900 dark:text-white">{stu.name}</p>
                        <span className="px-1.5 py-0.2 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold text-[9px]">
                          Class {stu.class}
                        </span>
                        <span className="text-[9px] font-mono text-slate-400">
                          #{stu.rollNo || stu.admissionNo}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-0.5">
                        👨‍👩‍👧 Father: <strong>{stu.parents?.fatherName || stu.fatherName || 'N/A'}</strong> • 📞 {stu.parents?.fatherPhone || stu.fatherMobile || stu.mobile || 'N/A'}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        schoolService.linkSiblingToStudent(mainStudentForAssign.id, stu.id);
                        refreshAll();
                        showToast(`Linked ${stu.name} as sibling to ${mainStudentForAssign.name}! 👨‍👩‍👧‍👦`, 'success');
                        setIsAssignSiblingModalOpen(false);
                        setModalSiblingSearch('');
                      }}
                      className="px-3.5 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-xs flex items-center gap-1 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      + Link Brother/Sister
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center py-6 text-slate-400 text-xs italic">
                  No matching student found for "{modalSiblingSearch}". Try typing student name, father name, or mobile.
                </div>
              )}
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

      {/* ========================================================== */}
      {/* 💳 MODAL: 1-CLICK COMPREHENSIVE FEE COLLECTION / PAYMENT  */}
      {/* ========================================================== */}
      <Modal
        isOpen={isFeeModalOpen}
        onClose={() => setIsFeeModalOpen(false)}
        title={`💳 Collect / Pay Fee: ${studentForFee?.name || ''}`}
        maxWidth="max-w-2xl"
        bodyPadding="p-2.5 sm:p-3"
      >
        {studentForFee && (() => {
          const pastInvoices = (schoolService.getFeeInvoices() || []).filter(
            inv => inv.studentId === studentForFee.id || inv.studentName === studentForFee.name
          );

          const tDue = studentForFee.feeSummary?.tuitionDue !== undefined ? studentForFee.feeSummary.tuitionDue : 13500;
          const trDue = studentForFee.feeSummary?.transportDue11Months !== undefined ? studentForFee.feeSummary.transportDue11Months : (Number(studentForFee.transport?.monthlyFare || 0) * (studentForFee.transport?.months || 11));
          const oDue = studentForFee.feeSummary?.oldSessionDues || 0;
          const mDue = studentForFee.feeSummary?.miscellaneousDue || 0;

          const tPaid = studentForFee.feeSummary?.tuitionPaid || 0;
          const trPaid = studentForFee.feeSummary?.transportPaid || 0;
          const oPaid = studentForFee.feeSummary?.oldSessionPaid || 0;
          const mPaid = studentForFee.feeSummary?.miscPaid || 0;

          const tRem = Math.max(0, tDue - tPaid);
          const trRem = Math.max(0, trDue - trPaid);
          const oRem = Math.max(0, oDue - oPaid);
          const mRem = Math.max(0, mDue - mPaid);

          // Sibling Remainder calculations
          const sibTDue = selectedSibling?.feeSummary?.tuitionDue !== undefined ? selectedSibling.feeSummary.tuitionDue : 13500;
          const sibTrDue = selectedSibling?.feeSummary?.transportDue11Months !== undefined ? selectedSibling.feeSummary.transportDue11Months : (Number(selectedSibling?.transport?.monthlyFare || 0) * (selectedSibling?.transport?.months || 11));
          const sibTPaid = selectedSibling?.feeSummary?.tuitionPaid || 0;
          const sibTrPaid = selectedSibling?.feeSummary?.transportPaid || 0;
          const sibTRem = Math.max(0, sibTDue - sibTPaid);
          const sibTrRem = Math.max(0, sibTrDue - sibTrPaid);

          const autoSumPaying =
            (Number(feeForm.tuitionPay) || 0) +
            (Number(feeForm.transportPay) || 0) +
            (Number(feeForm.oldSessionPay) || 0) +
            (Number(feeForm.miscPay) || 0) +
            (isSiblingPayActive ? (Number(siblingTuitionPay) || 0) + (Number(siblingTransportPay) || 0) : 0);

          const discountVal = Number(feeForm.discount) || 0;
          const netPayable = Math.max(0, autoSumPaying - discountVal);

          return (
            <form onSubmit={handleCollectFeeSubmitModal} className="space-y-2 text-xs">
              {/* 🏆 Compact Student Identity & Sibling Toggle Bar */}
              <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800/80 p-2 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="font-black text-slate-900 dark:text-white uppercase text-xs">
                    {studentForFee.name}
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 font-bold text-[10px]">
                    Class {studentForFee.class}-{studentForFee.section || 'A'}
                  </span>
                  <span className="font-mono text-slate-400 text-[10px]">
                    Adm #{studentForFee.admissionNo} • Ledger #{studentForFee.rollNo}
                  </span>
                </div>

                {/* Sibling Quick Toggle */}
                {selectedSibling ? (
                  <button
                    type="button"
                    onClick={() => {
                      const nextState = !isSiblingPayActive;
                      setIsSiblingPayActive(nextState);
                      if (nextState) {
                        setSiblingTuitionPay(sibTRem > 0 ? sibTRem : '');
                        setSiblingTransportPay(sibTrRem > 0 ? sibTrRem : '');
                      } else {
                        setSiblingTuitionPay('');
                        setSiblingTransportPay('');
                      }
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-black flex items-center gap-1 transition-all cursor-pointer ${
                      isSiblingPayActive
                        ? 'bg-purple-600 text-white shadow-sm ring-2 ring-purple-400'
                        : 'bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 hover:bg-purple-200'
                    }`}
                  >
                    👨‍👩‍👧 Sibling: {selectedSibling.name} ({selectedSibling.class}) {isSiblingPayActive ? '✓ Linked' : '+ Add Sibling'}
                  </button>
                ) : null}
              </div>

              {/* ⚠️ Elder Sibling Notice when Sibling is Active */}
              {isSiblingPayActive && selectedSibling && (
                <div className="px-2.5 py-1 bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 rounded-lg text-[10px] text-purple-900 dark:text-purple-200 flex items-center justify-between">
                  <span>
                    👨‍👩‍👧 <strong>संयुक्त फ़ीस रसीद (Combined Receipt):</strong> {studentForFee.name} + {selectedSibling.name}
                  </span>
                  <span className="text-[9px] bg-purple-200 dark:bg-purple-900 px-1.5 py-0.2 rounded font-bold">
                    *Misc & Old Dues are linked to Elder Child
                  </span>
                </div>
              )}

              {/* 💰 Ultra-Dense Fee Head Breakdown & Inline Editing Table */}
              <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                <table className="w-full text-left text-[11px]">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold uppercase text-[9.5px]">
                    <tr>
                      <th className="py-1 px-2.5">Fee Head</th>
                      <th className="py-1 px-2 text-right">Total Due</th>
                      <th className="py-1 px-2 text-right">Paid</th>
                      <th className="py-1 px-2 text-right">Remaining</th>
                      <th className="py-1 px-2.5 text-right w-28">Paying Now (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                    {/* 🎓 Primary Student Tuition Fee */}
                    <tr className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                      <td className="py-1 px-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-800 dark:text-slate-200">
                            🎓 School / Tuition Fee ({studentForFee.name.split(' ')[0]})
                          </span>
                          {!editingTuition ? (
                            <button
                              type="button"
                              onClick={() => { setEditingTuition(true); setTempTuition(tDue); }}
                              className="text-indigo-600 hover:text-indigo-800 p-0.5 rounded cursor-pointer"
                              title="Edit Tuition Fee for this student"
                            >
                              <Edit className="w-3 h-3" />
                            </button>
                          ) : (
                            <div className="flex items-center gap-1">
                              <input
                                type="number"
                                value={tempTuition}
                                onChange={(e) => setTempTuition(e.target.value)}
                                className="w-16 p-0.5 rounded border border-indigo-400 font-mono text-[10px] bg-white dark:bg-slate-900"
                              />
                              <button
                                type="button"
                                onClick={() => handleSaveTuitionInline(studentForFee.id)}
                                className="px-1 py-0.5 bg-emerald-600 text-white rounded text-[9px] font-bold"
                              >
                                Save
                              </button>
                              <button
                                type="button"
                                onClick={() => setEditingTuition(false)}
                                className="text-slate-400 text-[9px]"
                              >
                                ✕
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="py-1 px-2 text-right font-mono">₹{tDue.toLocaleString('en-IN')}</td>
                      <td className="py-1 px-2 text-right font-mono text-emerald-600">₹{tPaid.toLocaleString('en-IN')}</td>
                      <td className="py-1 px-2 text-right font-mono font-bold text-rose-600">₹{tRem.toLocaleString('en-IN')}</td>
                      <td className="py-1 px-2.5 text-right">
                        <input
                          type="number"
                          placeholder="0"
                          value={feeForm.tuitionPay}
                          onChange={(e) => {
                            const val = e.target.value;
                            const newTotal = (Number(val) || 0) + (Number(feeForm.transportPay) || 0) + (Number(feeForm.oldSessionPay) || 0) + (Number(feeForm.miscPay) || 0) + (isSiblingPayActive ? (Number(siblingTuitionPay) || 0) + (Number(siblingTransportPay) || 0) : 0);
                            setFeeForm(prev => ({ ...prev, tuitionPay: val, amount: Math.max(0, newTotal - (Number(prev.discount) || 0)) }));
                          }}
                          className="w-24 p-1 rounded-lg border border-slate-300 dark:border-slate-600 font-mono font-bold text-right text-xs bg-white dark:bg-slate-900 focus:ring-1 focus:ring-emerald-500"
                        />
                      </td>
                    </tr>

                    {/* 🚌 Primary Student Transport Fee */}
                    {(studentForFee.transport?.isEnrolled || trDue > 0 || studentForFee.route) && (
                      <tr className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                        <td className="py-1 px-2.5">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-slate-800 dark:text-slate-200">
                              🚌 Bus / Transport ({studentForFee.name.split(' ')[0]})
                            </span>
                            {!editingTransport ? (
                              <button
                                type="button"
                                onClick={() => { setEditingTransport(true); setTempTransport(trDue); }}
                                className="text-indigo-600 hover:text-indigo-800 p-0.5 rounded cursor-pointer"
                                title="Edit Transport Fee for this student"
                              >
                                <Edit className="w-3 h-3" />
                              </button>
                            ) : (
                              <div className="flex items-center gap-1">
                                <input
                                  type="number"
                                  value={tempTransport}
                                  onChange={(e) => setTempTransport(e.target.value)}
                                  className="w-16 p-0.5 rounded border border-indigo-400 font-mono text-[10px] bg-white dark:bg-slate-900"
                                />
                                <button
                                  type="button"
                                  onClick={() => handleSaveTransportInline(studentForFee.id)}
                                  className="px-1 py-0.5 bg-emerald-600 text-white rounded text-[9px] font-bold"
                                >
                                  Save
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setEditingTransport(false)}
                                  className="text-slate-400 text-[9px]"
                                >
                                  ✕
                                </button>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="py-1 px-2 text-right font-mono">₹{trDue.toLocaleString('en-IN')}</td>
                        <td className="py-1 px-2 text-right font-mono text-emerald-600">₹{trPaid.toLocaleString('en-IN')}</td>
                        <td className="py-1 px-2 text-right font-mono font-bold text-rose-600">₹{trRem.toLocaleString('en-IN')}</td>
                        <td className="py-1 px-2.5 text-right">
                          <input
                            type="number"
                            placeholder="0"
                            value={feeForm.transportPay}
                            onChange={(e) => {
                              const val = e.target.value;
                              const newTotal = (Number(feeForm.tuitionPay) || 0) + (Number(val) || 0) + (Number(feeForm.oldSessionPay) || 0) + (Number(feeForm.miscPay) || 0) + (isSiblingPayActive ? (Number(siblingTuitionPay) || 0) + (Number(siblingTransportPay) || 0) : 0);
                              setFeeForm(prev => ({ ...prev, transportPay: val, amount: Math.max(0, newTotal - (Number(prev.discount) || 0)) }));
                            }}
                            className="w-24 p-1 rounded-lg border border-slate-300 dark:border-slate-600 font-mono font-bold text-right text-xs bg-white dark:bg-slate-900 focus:ring-1 focus:ring-emerald-500"
                          />
                        </td>
                      </tr>
                    )}

                    {/* 👨‍👩‍👧 Sibling Tuition Row (if active) */}
                    {isSiblingPayActive && selectedSibling && (
                      <tr className="bg-purple-50/40 dark:bg-purple-950/20">
                        <td className="py-1 px-2.5">
                          <span className="font-bold text-purple-900 dark:text-purple-300">
                            🎓 Sibling Tuition ({selectedSibling.name} • {selectedSibling.class})
                          </span>
                        </td>
                        <td className="py-1 px-2 text-right font-mono">₹{sibTDue.toLocaleString('en-IN')}</td>
                        <td className="py-1 px-2 text-right font-mono text-emerald-600">₹{sibTPaid.toLocaleString('en-IN')}</td>
                        <td className="py-1 px-2 text-right font-mono font-bold text-rose-600">₹{sibTRem.toLocaleString('en-IN')}</td>
                        <td className="py-1 px-2.5 text-right">
                          <input
                            type="number"
                            placeholder="0"
                            value={siblingTuitionPay}
                            onChange={(e) => {
                              const val = e.target.value;
                              setSiblingTuitionPay(val);
                              const newTotal = (Number(feeForm.tuitionPay) || 0) + (Number(feeForm.transportPay) || 0) + (Number(feeForm.oldSessionPay) || 0) + (Number(feeForm.miscPay) || 0) + (Number(val) || 0) + (Number(siblingTransportPay) || 0);
                              setFeeForm(prev => ({ ...prev, amount: Math.max(0, newTotal - (Number(prev.discount) || 0)) }));
                            }}
                            className="w-24 p-1 rounded-lg border border-purple-300 dark:border-purple-600 font-mono font-bold text-right text-xs bg-white dark:bg-slate-900 focus:ring-1 focus:ring-purple-500"
                          />
                        </td>
                      </tr>
                    )}

                    {/* 👨‍👩‍👧 Sibling Transport Row (if active & enrolled) */}
                    {isSiblingPayActive && selectedSibling && (selectedSibling.transport?.isEnrolled || sibTrDue > 0) && (
                      <tr className="bg-purple-50/40 dark:bg-purple-950/20">
                        <td className="py-1 px-2.5">
                          <span className="font-bold text-purple-900 dark:text-purple-300">
                            🚌 Sibling Bus ({selectedSibling.name} • {selectedSibling.class})
                          </span>
                        </td>
                        <td className="py-1 px-2 text-right font-mono">₹{sibTrDue.toLocaleString('en-IN')}</td>
                        <td className="py-1 px-2 text-right font-mono text-emerald-600">₹{sibTrPaid.toLocaleString('en-IN')}</td>
                        <td className="py-1 px-2 text-right font-mono font-bold text-rose-600">₹{sibTrRem.toLocaleString('en-IN')}</td>
                        <td className="py-1 px-2.5 text-right">
                          <input
                            type="number"
                            placeholder="0"
                            value={siblingTransportPay}
                            onChange={(e) => {
                              const val = e.target.value;
                              setSiblingTransportPay(val);
                              const newTotal = (Number(feeForm.tuitionPay) || 0) + (Number(feeForm.transportPay) || 0) + (Number(feeForm.oldSessionPay) || 0) + (Number(feeForm.miscPay) || 0) + (Number(siblingTuitionPay) || 0) + (Number(val) || 0);
                              setFeeForm(prev => ({ ...prev, amount: Math.max(0, newTotal - (Number(prev.discount) || 0)) }));
                            }}
                            className="w-24 p-1 rounded-lg border border-purple-300 dark:border-purple-600 font-mono font-bold text-right text-xs bg-white dark:bg-slate-900 focus:ring-1 focus:ring-purple-500"
                          />
                        </td>
                      </tr>
                    )}

                    {/* 📜 Old Session Dues (Only on Elder Child / If Active) */}
                    {(showOldDuesRow || oDue > 0) && (
                      <tr className="bg-amber-50/50 dark:bg-amber-950/20">
                        <td className="py-1 px-2.5">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-amber-800 dark:text-amber-300">
                              📜 Old Session Dues (गत वर्ष बकाया)
                            </span>
                            {!editingOldDues ? (
                              <button
                                type="button"
                                onClick={() => { setEditingOldDues(true); setTempOldDues(oDue); }}
                                className="text-amber-700 hover:text-amber-900 p-0.5 rounded cursor-pointer"
                                title="Edit Old Session Dues"
                              >
                                <Edit className="w-3 h-3" />
                              </button>
                            ) : (
                              <div className="flex items-center gap-1">
                                <input
                                  type="number"
                                  value={tempOldDues}
                                  onChange={(e) => setTempOldDues(e.target.value)}
                                  className="w-16 p-0.5 rounded border border-amber-400 font-mono text-[10px] bg-white dark:bg-slate-900"
                                />
                                <button
                                  type="button"
                                  onClick={() => handleSaveOldDuesInline(studentForFee.id)}
                                  className="px-1 py-0.5 bg-emerald-600 text-white rounded text-[9px] font-bold"
                                >
                                  Save
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setEditingOldDues(false)}
                                  className="text-slate-400 text-[9px]"
                                >
                                  ✕
                                </button>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="py-1 px-2 text-right font-mono">₹{oDue.toLocaleString('en-IN')}</td>
                        <td className="py-1 px-2 text-right font-mono text-emerald-600">₹{oPaid.toLocaleString('en-IN')}</td>
                        <td className="py-1 px-2 text-right font-mono font-bold text-rose-600">₹{oRem.toLocaleString('en-IN')}</td>
                        <td className="py-1 px-2.5 text-right">
                          <input
                            type="number"
                            placeholder="0"
                            value={feeForm.oldSessionPay}
                            onChange={(e) => {
                              const val = e.target.value;
                              const newTotal = (Number(feeForm.tuitionPay) || 0) + (Number(feeForm.transportPay) || 0) + (Number(val) || 0) + (Number(feeForm.miscPay) || 0) + (isSiblingPayActive ? (Number(siblingTuitionPay) || 0) + (Number(siblingTransportPay) || 0) : 0);
                              setFeeForm(prev => ({ ...prev, oldSessionPay: val, amount: Math.max(0, newTotal - (Number(prev.discount) || 0)) }));
                            }}
                            className="w-24 p-1 rounded-lg border border-slate-300 dark:border-slate-600 font-mono font-bold text-right text-xs bg-white dark:bg-slate-900 focus:ring-1 focus:ring-emerald-500"
                          />
                        </td>
                      </tr>
                    )}

                    {/* 📦 Miscellaneous Charges (Only on Elder Child / If Active) */}
                    {(showMiscRow || mDue > 0 || miscItemsList.length > 0) && (
                      <tr className="bg-sky-50/50 dark:bg-sky-950/20">
                        <td className="py-1 px-2.5">
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-sky-800 dark:text-sky-300">
                                📦 Misc Charges (विविध शुल्क)
                              </span>
                              <button
                                type="button"
                                onClick={() => setEditingMisc(!editingMisc)}
                                className="text-sky-700 hover:text-sky-900 p-0.5 rounded text-[10px] font-bold cursor-pointer"
                              >
                                {editingMisc ? 'Done' : '+ Add Item'}
                              </button>
                            </div>

                            {/* Itemized Misc Items List */}
                            {miscItemsList.length > 0 && (
                              <div className="flex flex-wrap gap-1">
                                {miscItemsList.map(item => (
                                  <span key={item.id} className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded bg-sky-100 dark:bg-sky-900/60 text-[9px] text-sky-800 dark:text-sky-200">
                                    {item.title}: ₹{Number(item.amount).toLocaleString()}
                                    <button
                                      type="button"
                                      onClick={() => handleRemoveMiscItem(studentForFee.id, item.id)}
                                      className="text-rose-500 hover:text-rose-700 font-bold ml-0.5"
                                    >
                                      ✕
                                    </button>
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* New Misc Item Input Form */}
                            {editingMisc && (
                              <div className="flex items-center gap-1 pt-1">
                                <input
                                  type="text"
                                  placeholder="e.g. Uniform / Bag"
                                  value={newMiscTitle}
                                  onChange={(e) => setNewMiscTitle(e.target.value)}
                                  className="w-28 p-1 rounded border border-sky-300 text-[10px] bg-white dark:bg-slate-900"
                                />
                                <input
                                  type="number"
                                  placeholder="₹ Amount"
                                  value={newMiscAmount}
                                  onChange={(e) => setNewMiscAmount(e.target.value)}
                                  className="w-16 p-1 rounded border border-sky-300 text-[10px] font-mono bg-white dark:bg-slate-900"
                                />
                                <button
                                  type="button"
                                  onClick={() => handleAddNewMiscItem(studentForFee.id)}
                                  className="px-2 py-1 bg-sky-600 text-white rounded text-[9.5px] font-bold"
                                >
                                  + Add
                                </button>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="py-1 px-2 text-right font-mono">₹{mDue.toLocaleString('en-IN')}</td>
                        <td className="py-1 px-2 text-right font-mono text-emerald-600">₹{mPaid.toLocaleString('en-IN')}</td>
                        <td className="py-1 px-2 text-right font-mono font-bold text-rose-600">₹{mRem.toLocaleString('en-IN')}</td>
                        <td className="py-1 px-2.5 text-right">
                          <input
                            type="number"
                            placeholder="0"
                            value={feeForm.miscPay}
                            onChange={(e) => {
                              const val = e.target.value;
                              const newTotal = (Number(feeForm.tuitionPay) || 0) + (Number(feeForm.transportPay) || 0) + (Number(feeForm.oldSessionPay) || 0) + (Number(val) || 0) + (isSiblingPayActive ? (Number(siblingTuitionPay) || 0) + (Number(siblingTransportPay) || 0) : 0);
                              setFeeForm(prev => ({ ...prev, miscPay: val, amount: Math.max(0, newTotal - (Number(prev.discount) || 0)) }));
                            }}
                            className="w-24 p-1 rounded-lg border border-slate-300 dark:border-slate-600 font-mono font-bold text-right text-xs bg-white dark:bg-slate-900 focus:ring-1 focus:ring-emerald-500"
                          />
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* ⚡ Quick Toggles for Optional Dues (If not shown yet) */}
              {(!showOldDuesRow && oDue === 0) || (!showMiscRow && mDue === 0) ? (
                <div className="flex items-center gap-2 text-[10px]">
                  <span className="text-slate-400 font-bold">Add Optional Heads:</span>
                  {!showOldDuesRow && oDue === 0 && (
                    <button
                      type="button"
                      onClick={() => setShowOldDuesRow(true)}
                      className="px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-bold hover:bg-amber-100 cursor-pointer"
                    >
                      + 📜 Old Session Dues (गत वर्ष बकाया)
                    </button>
                  )}
                  {!showMiscRow && mDue === 0 && (
                    <button
                      type="button"
                      onClick={() => { setShowMiscRow(true); setEditingMisc(true); }}
                      className="px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 font-bold hover:bg-sky-100 cursor-pointer"
                    >
                      + 📦 Misc Charge (विविध शुल्क)
                    </button>
                  )}
                </div>
              ) : null}

              {/* 🏷️ Discount & Net Total Calculation Strip */}
              <div className="p-2 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div>
                    <span className="text-[9.5px] uppercase font-bold text-slate-500 block">Gross Paying</span>
                    <span className="font-mono font-black text-slate-800 dark:text-slate-200 text-xs">
                      ₹{autoSumPaying.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-slate-400 font-bold text-xs">-</span>
                    <div>
                      <label className="text-[9.5px] uppercase font-bold text-amber-700 dark:text-amber-400 block">
                        Discount / छूट (₹)
                      </label>
                      <input
                        type="number"
                        placeholder="0"
                        value={feeForm.discount || ''}
                        onChange={(e) => {
                          const disc = Number(e.target.value) || 0;
                          setFeeForm(prev => ({
                            ...prev,
                            discount: disc,
                            amount: Math.max(0, autoSumPaying - disc)
                          }));
                        }}
                        className="w-20 p-1 rounded-lg border border-amber-300 dark:border-amber-700 font-mono font-bold text-xs bg-white dark:bg-slate-900 text-amber-700 dark:text-amber-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[9.5px] uppercase font-black text-emerald-800 dark:text-emerald-400 block">
                    Net Amount to Collect (कुल जमा)
                  </span>
                  <span className="font-mono font-black text-base text-emerald-700 dark:text-emerald-300">
                    ₹{netPayable.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* ⚙️ 4-Column Bottom Controls: Date, Mode, Remarks, Receipt No */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-0.5">
                <div>
                  <label className="text-[10px] font-bold text-slate-700 dark:text-slate-300 block mb-0.5">
                    Payment Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={feeForm.paymentDate}
                    onChange={(e) => setFeeForm({ ...feeForm, paymentDate: e.target.value })}
                    className="w-full p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-700 dark:text-slate-300 block mb-0.5">
                    Payment Mode *
                  </label>
                  <select
                    value={feeForm.paymentMode}
                    onChange={(e) => setFeeForm({ ...feeForm, paymentMode: e.target.value })}
                    className="w-full p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold"
                  >
                    <option value="Cash">💵 Cash Counter (नकद)</option>
                    <option value="UPI / QR Code">📱 UPI / QR Code Scan</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-700 dark:text-slate-300 block mb-0.5">
                    Remarks / Note
                  </label>
                  <input
                    type="text"
                    value={feeForm.remarks}
                    onChange={(e) => setFeeForm({ ...feeForm, remarks: e.target.value })}
                    placeholder="e.g. Q1 Fee Installment"
                    className="w-full p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-700 dark:text-slate-300 block mb-0.5">
                    Receipt No. *
                  </label>
                  <input
                    type="text"
                    value={feeForm.receiptNo}
                    onChange={(e) => setFeeForm({ ...feeForm, receiptNo: e.target.value })}
                    className="w-full p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono text-xs font-bold text-indigo-600"
                  />
                </div>
              </div>

              {/* 🚀 Action Buttons */}
              <div className="flex items-center justify-between gap-2 pt-1.5 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsFeeModalOpen(false)}
                  className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold text-xs cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={!feeForm.amount || Number(feeForm.amount) <= 0}
                  className="px-5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 text-white font-black rounded-xl text-xs shadow-lg shadow-emerald-500/25 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <CreditCard className="w-4 h-4" /> Collect ₹{Number(feeForm.amount || 0).toLocaleString('en-IN')} & Print Receipt
                </button>
              </div>
            </form>
          );
        })()}
      </Modal>

    </div>
  );
};

export default FeesPage;
