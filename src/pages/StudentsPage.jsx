import React, { useState, useEffect, useMemo } from 'react';
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
  Share2,
  Save,
  CreditCard,
  Bus,
  ShieldCheck,
  User,
  Users,
  MapPin,
  Sparkles,
  BookOpen,
  Award,
  IdCard,
  DollarSign,
  Receipt
} from 'lucide-react';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import { useAuth } from '../context/AuthContext';
import { PrintableIDCard } from '../components/printables/PrintableIDCard';
import { PrintableStudentDossier } from '../components/printables/PrintableStudentDossier';
import schoolService from '../services/schoolService';

export const StudentsPage = ({ initialTab = 'active', initialSelectedStudent = null, onOpenNewAdmission = null }) => {
  const { showToast } = useToast();
  const { activeBranchId, branches, canManageFees } = useAuth();
  
  // Data State
  const [allStudents, setAllStudents] = useState(() => schoolService.getStudents('all'));
  const [activeTab, setActiveTab] = useState(initialTab); // 'active' | 'inactive'

  useEffect(() => {
    if (initialTab) setActiveTab(initialTab);
  }, [initialTab]);

  // Filter States ("Select Ground" matching user's software)
  const [selectedBranch, setSelectedBranch] = useState('all');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedSection, setSelectedSection] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
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

  // Selection for bulk actions
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);

  // Modals
  const [selectedStudent, setSelectedStudent] = useState(initialSelectedStudent);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [profileActiveTab, setProfileActiveTab] = useState('personal'); // 'personal' | 'parents' | 'fees' | 'transport' | 'attendance'
  
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editActiveTab, setEditActiveTab] = useState('academic'); // 'academic' | 'personal' | 'parents' | 'transport' | 'previous'
  
  const [isIdCardModalOpen, setIsIdCardModalOpen] = useState(false);
  const [printDocType, setPrintDocType] = useState('dossier'); // 'dossier' | 'idcard'
  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);
  const [isBulkDeactivateModalOpen, setIsBulkDeactivateModalOpen] = useState(false);
  const [studentToDeactivate, setStudentToDeactivate] = useState(null);

  // 1-Click Fee Collection Modal States (Head-Wise Itemized System)
  const [isFeeModalOpen, setIsFeeModalOpen] = useState(false);
  const [studentForFee, setStudentForFee] = useState(null);
  const [feeForm, setFeeForm] = useState({
    tuitionPay: '',
    transportPay: '',
    hostelPay: '',
    oldSessionPay: '',
    miscPay: '',
    amount: '',
    paymentMode: 'Cash',
    paymentDate: new Date().toISOString().split('T')[0],
    discount: 0,
    remarks: 'School Fee Payment',
    receiptNo: ''
  });
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);
  const [recentReceipt, setRecentReceipt] = useState(null);
  const [editingOldDues, setEditingOldDues] = useState(false);
  const [tempOldDues, setTempOldDues] = useState(0);
  const [editingMisc, setEditingMisc] = useState(false);
  const [miscItemsList, setMiscItemsList] = useState([]);
  const [newMiscTitle, setNewMiscTitle] = useState('');
  const [newMiscAmount, setNewMiscAmount] = useState('');

  const handleOpenFeeModal = (student) => {
    setStudentForFee(student);
    setEditingOldDues(false);
    setTempOldDues(student.feeSummary?.oldSessionDues || 0);
    setEditingMisc(false);
    
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

    const tuitionRem = Math.max(0, (student.feeSummary?.tuitionDue || 13500) - (student.feeSummary?.tuitionPaid || 0));
    const transportRem = Math.max(0, (student.feeSummary?.transportDue11Months || 0) - (student.feeSummary?.transportPaid || 0));
    const hostelRem = Math.max(0, (student.feeSummary?.hostelDue || 0) - (student.feeSummary?.hostelPaid || 0));
    const oldSessionRem = Math.max(0, (student.feeSummary?.oldSessionDues || 0) - (student.feeSummary?.oldSessionPaid || 0));
    const miscRem = Math.max(0, (student.feeSummary?.miscellaneousDue || 0) - (student.feeSummary?.miscPaid || 0));

    const totalDue = tuitionRem + transportRem + hostelRem + oldSessionRem + miscRem;

    setFeeForm({
      tuitionPay: tuitionRem > 0 ? tuitionRem : '',
      transportPay: transportRem > 0 ? transportRem : '',
      hostelPay: hostelRem > 0 ? hostelRem : '',
      oldSessionPay: oldSessionRem > 0 ? oldSessionRem : '',
      miscPay: miscRem > 0 ? miscRem : '',
      amount: totalDue > 0 ? totalDue : 1000,
      paymentMode: 'Cash',
      paymentDate: new Date().toISOString().split('T')[0],
      discount: 0,
      remarks: 'School Fee Installment',
      receiptNo: `REC-${Date.now().toString().slice(-5)}`
    });
    setIsFeeModalOpen(true);
  };

  const handleSaveOldDuesInline = (studentId) => {
    const val = Number(tempOldDues) || 0;
    const updated = schoolService.updateStudent(studentId, { oldSessionDues: val });
    if (updated) {
      setStudentForFee(updated);
      setSelectedStudent(updated);
      refreshStudents();
      setEditingOldDues(false);
      setFeeForm(prev => ({ ...prev, amount: updated.feeSummary?.balance || 0 }));
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
      setSelectedStudent(updated);
      setMiscItemsList(updatedList);
      setNewMiscTitle('');
      setNewMiscAmount('');
      refreshStudents();
      setFeeForm(prev => ({ ...prev, amount: updated.feeSummary?.balance || 0 }));
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
      setSelectedStudent(updated);
      setMiscItemsList(updatedList);
      refreshStudents();
      setFeeForm(prev => ({ ...prev, amount: updated.feeSummary?.balance || 0 }));
      showToast('Misc charge item removed! 🗑️', 'info');
    }
  };

  const handleCollectFeeSubmit = (e) => {
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
        headAllocation: {
          tuition: Number(feeForm.tuitionPay || 0),
          transport: Number(feeForm.transportPay || 0),
          hostel: Number(feeForm.hostelPay || 0),
          oldSession: Number(feeForm.oldSessionPay || 0),
          misc: Number(feeForm.miscPay || 0)
        }
      });

      refreshStudents();
      setIsFeeModalOpen(false);
      setRecentReceipt(inv);
      setIsReceiptModalOpen(true);
      showToast(`Fee payment of ₹${amt.toLocaleString('en-IN')} recorded successfully! 💳`, 'success');
    } catch (err) {
      showToast('Payment processing error: ' + err.message, 'error');
    }
  };

  // Comprehensive Edit Form State (Matching Create Admission Form)
  const [editFormData, setEditFormData] = useState({
    id: '',
    admissionNo: '',
    rollNo: '', // Ledger No. (खाता संख्या)
    admissionDate: '',
    class: '',
    section: 'A',
    branchId: 'BR-01',
    status: 'Active',
    
    // Student Personal
    name: '',
    firstName: '',
    lastName: '',
    gender: 'female',
    dob: '',
    bloodGroup: '',
    motherTongue: 'Hindi',
    religion: 'Hindu',
    caste: '',
    category: 'General',
    heightCms: '',
    weightKg: '',
    photo: '',

    // Government & Identity
    aadhaarNo: '',
    nameAsPerAadhaar: '',
    penNo: '',
    mobileNo: '',

    // Parents & Guardian Details
    fatherName: '',
    fatherMobile: '',
    fatherOccupation: '',
    fatherEducation: '',
    motherName: '',
    motherMobile: '',
    motherOccupation: '',
    motherEducation: '',
    guardianName: '',
    guardianRelation: '',
    guardianMobile: '',
    guardianAddress: '',
    presentAddress: '',
    permanentAddress: '',

    // Transport Details
    facilityType: 'None',
    transportRoute: '',
    transportStop: '',
    transportVehicle: '',
    transportFare: 0,
    transportMonths: 11,
    customAnnualTransport: '',

    // Fee Structure Heads
    tuitionDue: 13500,
    hostelDue: 0,
    oldSessionDues: 0,
    miscellaneousDue: 0,

    // Previous School Details
    previousSchoolName: '',
    previousClass: '',
    previousTcNo: '',
    previousRemarks: ''
  });

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
    { id: 'X', label: 'Class 10th (X)' }
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

      // Search Query (Supports name, father, phone, admission no, ledger no / roll no, aadhaar, pen no)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = (stu.name || '').toLowerCase().includes(q);
        const matchFather = (stu.parents?.fatherName || '').toLowerCase().includes(q);
        const matchMother = (stu.parents?.motherName || '').toLowerCase().includes(q);
        const matchPhone = (stu.parents?.fatherMobile || '').toLowerCase().includes(q);
        const matchAdm = (stu.admissionNo || '').toLowerCase().includes(q);
        const matchLedger = (stu.rollNo || '').toLowerCase().includes(q);
        const matchAadhaar = (stu.customFields?.studentAadhaar || '').toLowerCase().includes(q);
        const matchPen = (stu.customFields?.penNo || '').toLowerCase().includes(q);
        const matchAddress = (stu.parents?.address || '').toLowerCase().includes(q);

        return matchName || matchFather || matchMother || matchPhone || matchAdm || matchLedger || matchAadhaar || matchPen || matchAddress;
      }

      return true;
    });

    // Sort by selected column (Default: Name A-Z)
    return [...list].sort((a, b) => {
      let cmp = 0;
      if (sortBy === 'name') {
        cmp = (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' });
      } else if (sortBy === 'fatherName') {
        cmp = (a.parents?.fatherName || '').localeCompare(b.parents?.fatherName || '', undefined, { sensitivity: 'base' });
      } else if (sortBy === 'motherName') {
        cmp = (a.parents?.motherName || '').localeCompare(b.parents?.motherName || '', undefined, { sensitivity: 'base' });
      } else if (sortBy === 'dob') {
        cmp = (a.dob || '').localeCompare(b.dob || '');
      } else if (sortBy === 'mobile') {
        cmp = (a.parents?.fatherMobile || '').localeCompare(b.parents?.fatherMobile || '');
      } else if (sortBy === 'address') {
        cmp = (a.parents?.address || '').localeCompare(b.parents?.address || '');
      } else if (sortBy === 'class') {
        cmp = (a.class || '').localeCompare(b.class || '', undefined, { numeric: true });
      } else if (sortBy === 'section') {
        cmp = (a.section || '').localeCompare(b.section || '');
      } else if (sortBy === 'admissionNo') {
        cmp = (parseInt(a.admissionNo) || 0) - (parseInt(b.admissionNo) || 0);
      } else if (sortBy === 'rollNo') {
        cmp = (parseInt(a.rollNo) || 0) - (parseInt(b.rollNo) || 0);
      } else if (sortBy === 'gender') {
        cmp = (a.gender || '').localeCompare(b.gender || '');
      } else if (sortBy === 'status') {
        cmp = (a.status || '').localeCompare(b.status || '');
      } else {
        cmp = (a.name || '').localeCompare(b.name || '');
      }
      return sortOrder === 'asc' ? cmp : -cmp;
    });
  }, [allStudents, activeTab, selectedBranch, selectedClass, selectedSection, searchQuery, sortBy, sortOrder]);

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

  // Open Full Edit Modal with all details pre-filled from student
  const handleOpenEditModal = (student) => {
    const parts = (student.name || '').split(' ');
    const fName = parts[0] || '';
    const lName = parts.slice(1).join(' ') || '';

    setEditFormData({
      id: student.id,
      admissionNo: student.admissionNo || '',
      rollNo: student.rollNo || '0', // Ledger No. (खाता संख्या)
      admissionDate: student.admissionDate || '2026-04-01',
      class: student.class || 'NURSERY',
      section: student.section || 'A',
      branchId: student.branchId || 'BR-01',
      status: student.status || 'Active',
      isRteStudent: Boolean(student.isRteStudent),
      
      // Student Personal
      name: student.name || '',
      firstName: fName,
      lastName: lName,
      gender: student.gender || 'female',
      dob: student.dob || '',
      bloodGroup: student.bloodGroup || '',
      motherTongue: student.motherTongue || 'Hindi',
      religion: student.customFields?.religion || 'Hindu',
      caste: student.customFields?.caste || '',
      category: student.category || 'General',
      heightCms: student.heightCms || '',
      weightKg: student.weightKg || '',
      photo: student.photo || '',

      // Government & Identity
      aadhaarNo: student.customFields?.studentAadhaar || '',
      nameAsPerAadhaar: student.customFields?.nameAsPerAadhaar || student.name || '',
      penNo: student.customFields?.penNo || '',
      mobileNo: student.parents?.fatherMobile || '',

      // Parents & Guardian Details
      fatherName: student.parents?.fatherName || '',
      fatherMobile: student.parents?.fatherMobile || '',
      fatherOccupation: student.parents?.fatherOccupation || '',
      fatherEducation: student.parents?.fatherEducation || '',
      motherName: student.parents?.motherName || '',
      motherMobile: student.parents?.motherMobile || '',
      motherOccupation: student.parents?.motherOccupation || '',
      motherEducation: student.parents?.motherEducation || '',
      guardianName: student.parents?.guardianName || '',
      guardianRelation: student.parents?.guardianRelation || '',
      guardianMobile: student.parents?.guardianMobile || '',
      guardianAddress: student.parents?.guardianAddress || '',
      presentAddress: student.parents?.address || '',
      permanentAddress: student.parents?.permanentAddress || student.parents?.address || '',

      // Transport Details
      facilityType: (student.transport?.isEnrolled || student.transport?.monthlyFare > 0) ? 'Transport' : 'None',
      transportRoute: student.transport?.route || '',
      transportStop: student.transport?.stop || student.transport?.stoppage || '',
      transportVehicle: student.transport?.vehicle || '',
      transportFare: student.transport?.monthlyFare || 0,
      transportMonths: student.transport?.months !== undefined ? student.transport.months : 11,
      customAnnualTransport: student.transport?.customAnnualTransport !== undefined ? student.transport.customAnnualTransport : '',

      // Fee Heads
      tuitionDue: student.feeSummary?.tuitionDue !== undefined ? student.feeSummary.tuitionDue : 13500,
      hostelDue: student.feeSummary?.hostelDue || 0,
      oldSessionDues: student.feeSummary?.oldSessionDues || 0,
      miscellaneousDue: student.feeSummary?.miscellaneousDue || 0,

      // Previous School Details
      previousSchoolName: student.previousSchoolName || '',
      previousClass: student.previousClass || '',
      previousTcNo: student.previousTcNo || '',
      previousRemarks: student.previousRemarks || ''
    });

    setEditActiveTab('academic');
    setIsEditModalOpen(true);
  };

  // Save Full Edited Student
  const handleSaveEditForm = (e) => {
    e.preventDefault();
    const fullName = `${editFormData.firstName} ${editFormData.lastName}`.trim() || editFormData.name;

    const updates = {
      admissionNo: editFormData.admissionNo,
      rollNo: editFormData.rollNo, // Ledger No. (खाता संख्या)
      admissionDate: editFormData.admissionDate,
      class: editFormData.class,
      section: editFormData.section,
      branchId: editFormData.branchId,
      isRteStudent: Boolean(editFormData.isRteStudent),
      name: fullName,
      gender: editFormData.gender,
      dob: editFormData.dob,
      bloodGroup: editFormData.bloodGroup,
      motherTongue: editFormData.motherTongue,
      category: editFormData.category,
      heightCms: editFormData.heightCms,
      weightKg: editFormData.weightKg,
      photo: editFormData.photo || `https://ui-avatars.com/api/?name=${fullName.replace(' ', '+')}&background=4F46E5&color=fff&size=128&bold=true`,
      
      customFields: {
        penNo: editFormData.penNo,
        studentAadhaar: editFormData.aadhaarNo,
        nameAsPerAadhaar: editFormData.nameAsPerAadhaar,
        caste: editFormData.caste,
        religion: editFormData.religion
      },

      parents: {
        fatherName: editFormData.fatherName,
        fatherMobile: editFormData.fatherMobile,
        fatherOccupation: editFormData.fatherOccupation,
        fatherEducation: editFormData.fatherEducation,
        motherName: editFormData.motherName,
        motherMobile: editFormData.motherMobile,
        motherOccupation: editFormData.motherOccupation,
        motherEducation: editFormData.motherEducation,
        guardianName: editFormData.guardianName,
        guardianRelation: editFormData.guardianRelation,
        guardianMobile: editFormData.guardianMobile,
        guardianAddress: editFormData.guardianAddress,
        address: editFormData.presentAddress,
        permanentAddress: editFormData.permanentAddress
      },

      transport: {
        isEnrolled: editFormData.facilityType === 'Transport',
        route: editFormData.transportRoute,
        stop: editFormData.transportStop,
        vehicle: editFormData.transportVehicle,
        monthlyFare: Number(editFormData.transportFare) || 0,
        months: Number(editFormData.transportMonths) || 11,
        customAnnualTransport: editFormData.customAnnualTransport !== '' ? Number(editFormData.customAnnualTransport) : undefined
      },

      tuitionDue: Number(editFormData.tuitionDue) || 0,
      hostelDue: Number(editFormData.hostelDue) || 0,
      oldSessionDues: Number(editFormData.oldSessionDues) || 0,
      miscellaneousDue: Number(editFormData.miscellaneousDue) || 0,

      previousSchoolName: editFormData.previousSchoolName,
      previousClass: editFormData.previousClass,
      previousTcNo: editFormData.previousTcNo,
      previousRemarks: editFormData.previousRemarks
    };

    schoolService.updateStudent(editFormData.id, updates);
    refreshStudents();
    setIsEditModalOpen(false);
    showToast(`Student ${fullName} (Adm: ${editFormData.admissionNo}, Ledger: ${editFormData.rollNo}) details updated successfully! ${editFormData.isRteStudent ? '(🏛️ RTE Quota)' : ''} 💾`, 'success');
  };

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

  const handleConfirmBulkDeactivate = () => {
    if (selectedStudentIds.length === 0) return;
    const count = selectedStudentIds.length;
    selectedStudentIds.forEach(id => {
      schoolService.deactivateStudent(id, deactivateReason, deactivateNote, deactivateDate);
    });
    refreshStudents();
    setSelectedStudentIds([]);
    setIsBulkDeactivateModalOpen(false);
    showToast(`${count} students marked as Inactive (${deactivateReason}) successfully! 🚫`, 'info');
  };

  // Export functions (Supports both full list and selected checkboxes)
  const handleExportCSV = () => {
    const listToExport = selectedStudentIds.length > 0
      ? filteredStudents.filter(s => selectedStudentIds.includes(s.id))
      : filteredStudents;

    const headers = ['Register No', 'Student Name', 'Father Name', 'Mother Name', 'DOB', 'Mobile', 'Address', 'Class', 'Section', 'Gender', 'Ledger No (खाता संख्या)', 'Aadhaar', 'Status'];
    const rows = listToExport.map(s => [
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
      s.rollNo, // Ledger No.
      s.customFields?.studentAadhaar || '',
      s.status
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `DMPS_Student_List_${selectedClass}_${selectedStudentIds.length > 0 ? 'Selected_' + selectedStudentIds.length : 'All'}_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`${listToExport.length} student records exported to CSV successfully! 📄`, 'success');
  };

  const handleCopyTable = () => {
    const listToCopy = selectedStudentIds.length > 0
      ? filteredStudents.filter(s => selectedStudentIds.includes(s.id))
      : filteredStudents;
    const text = listToCopy.map(s => `${s.admissionNo}\t${s.name}\t${s.parents?.fatherName || ''}\t${s.class}-${s.section}\t${s.rollNo}\t${s.parents?.fatherMobile || ''}`).join('\n');
    navigator.clipboard.writeText(text);
    showToast(`${listToCopy.length} student records copied to clipboard! 📋`, 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* 🏛️ Top "Select Ground" Filter Card (Exact Matching Old Software) */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden print:hidden">
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



      {/* 📊 Main Table Container with Export Toolbar */}
      <div className={`bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden ${isIdCardModalOpen || isReceiptModalOpen || isFeeModalOpen || isProfileModalOpen || isEditModalOpen || isDeactivateModalOpen || isBulkDeactivateModalOpen ? 'print:hidden' : ''}`}>
        
        {/* Table Toolbar Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-800/40 print:hidden">
          
          {/* Export Icons Toolbar */}
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
              placeholder="Search name, father, ledger no, mobile, adm no..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 font-medium focus:ring-2 focus:ring-sky-500 shadow-2xs"
            />
          </div>
        </div>

        {/* ⚡ High-Visibility Bulk Action Bar (When 1 or more students checked) */}
        {selectedStudentIds.length > 0 && (
          <div className="p-3 mx-4 my-3 bg-gradient-to-r from-indigo-700 via-sky-700 to-blue-800 text-white rounded-2xl flex flex-wrap items-center justify-between gap-3 shadow-lg shadow-indigo-500/20 print:hidden animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-xs">
                ✓
              </span>
              <div>
                <strong className="text-xs font-black">
                  {selectedStudentIds.length} Student{selectedStudentIds.length > 1 ? 's' : ''} Selected
                </strong>
                <p className="text-[10px] text-sky-200">
                  Print, Export, or Inactivate actions will ONLY apply to these {selectedStudentIds.length} students.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap text-xs">
              <button
                onClick={() => window.print()}
                className="px-3.5 py-1.5 bg-white text-indigo-950 font-black rounded-xl hover:bg-slate-100 flex items-center gap-1.5 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-blue-600" /> 🖨️ Print Selected ({selectedStudentIds.length})
              </button>

              <button
                onClick={handleExportCSV}
                className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-xl flex items-center gap-1.5 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <FileSpreadsheet className="w-3.5 h-3.5" /> 📊 Export CSV ({selectedStudentIds.length})
              </button>

              <button
                onClick={() => setIsBulkDeactivateModalOpen(true)}
                className="px-3.5 py-1.5 bg-rose-500 hover:bg-rose-600 text-white font-black rounded-xl flex items-center gap-1.5 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <UserX className="w-3.5 h-3.5" /> 🗑️ Delete / Inactivate ({selectedStudentIds.length})
              </button>

              <button
                onClick={() => setSelectedStudentIds([])}
                className="px-2.5 py-1.5 bg-black/20 hover:bg-black/40 text-white/90 hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                ✕ Deselect
              </button>
            </div>
          </div>
        )}

        {/* 🏫 OFFICIAL SCHOOL PRINT HEADER (Visible ONLY on Printouts) */}
        <div className="hidden print:block p-4 bg-white text-slate-950 border-b-2 border-slate-950 mb-3">
          <div className="flex items-center justify-between gap-4 pb-2 border-b border-slate-300">
            <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center border border-slate-950 shrink-0">
              DMPS
            </div>
            <div className="flex-1 text-center">
              <h1 className="text-xl font-black text-slate-950 uppercase tracking-wide">
                DADHEECH MEMORIAL PUBLIC SCHOOL
              </h1>
              <p className="text-xs font-bold text-slate-800">
                Affiliated to Bhartiya Shiksha Board (BSB) • Recognized Up to 12th | Affiliation No: UP0F25070073 | Code: 00065
              </p>
              <p className="text-[11px] text-slate-600">
                Ramghat Road Border, Jargwan, Bulandshahr (U.P.) | Helpline: +91 97589 75880, +91 96270 32626 | www.dmpsjargawan.com
              </p>
            </div>
            <div className="text-right text-[10px] font-mono font-bold text-slate-700 shrink-0">
              <p>Session: 2026-2027</p>
              <p>Date: {new Date().toLocaleDateString('en-GB')}</p>
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between text-xs font-black uppercase text-slate-900">
            <span>📋 OFFICIAL STUDENT ENROLMENT & ROLL REGISTER</span>
            <span>Class: {selectedClass === 'all' ? 'All Classes' : selectedClass} | Section: {selectedSection === 'all' ? 'All' : selectedSection}</span>
            <span>
              {selectedStudentIds.length > 0
                ? `Total Selected for Print: ${selectedStudentIds.length} Students`
                : `Total Enrolled: ${filteredStudents.length} Students`}
            </span>
          </div>
        </div>

        {/* 📜 Responsive Table View */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100/90 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700 select-none">
                <th className="p-3 text-center w-10 print:hidden">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={paginatedStudents.length > 0 && selectedStudentIds.length === paginatedStudents.length}
                    className="rounded text-sky-600 focus:ring-sky-500"
                  />
                </th>
                <th className="p-3 hidden print:table-cell text-center w-10">Sr. No</th>
                <th className="p-3 print:hidden">Photo</th>
                <th
                  onClick={() => handleSort('name')}
                  className="p-3 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="flex items-center gap-1">
                    Name {sortBy === 'name' ? (sortOrder === 'asc' ? '▲' : '▼') : '↕'}
                  </span>
                </th>
                <th
                  onClick={() => handleSort('fatherName')}
                  className="p-3 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="flex items-center gap-1">
                    Father Name {sortBy === 'fatherName' ? (sortOrder === 'asc' ? '▲' : '▼') : '↕'}
                  </span>
                </th>
                <th
                  onClick={() => handleSort('motherName')}
                  className="p-3 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="flex items-center gap-1">
                    Mother Name {sortBy === 'motherName' ? (sortOrder === 'asc' ? '▲' : '▼') : '↕'}
                  </span>
                </th>
                <th
                  onClick={() => handleSort('dob')}
                  className="p-3 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="flex items-center gap-1">
                    Date Of Birth {sortBy === 'dob' ? (sortOrder === 'asc' ? '▲' : '▼') : '↕'}
                  </span>
                </th>
                <th
                  onClick={() => handleSort('mobile')}
                  className="p-3 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="flex items-center gap-1">
                    Mobile Number {sortBy === 'mobile' ? (sortOrder === 'asc' ? '▲' : '▼') : '↕'}
                  </span>
                </th>
                <th
                  onClick={() => handleSort('address')}
                  className="p-3 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="flex items-center gap-1">
                    Address {sortBy === 'address' ? (sortOrder === 'asc' ? '▲' : '▼') : '↕'}
                  </span>
                </th>
                <th
                  onClick={() => handleSort('class')}
                  className="p-3 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="flex items-center gap-1">
                    Class {sortBy === 'class' ? (sortOrder === 'asc' ? '▲' : '▼') : '↕'}
                  </span>
                </th>
                <th
                  onClick={() => handleSort('section')}
                  className="p-3 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="flex items-center gap-1">
                    Section {sortBy === 'section' ? (sortOrder === 'asc' ? '▲' : '▼') : '↕'}
                  </span>
                </th>
                <th
                  onClick={() => handleSort('admissionNo')}
                  className="p-3 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="flex items-center gap-1">
                    Register No {sortBy === 'admissionNo' ? (sortOrder === 'asc' ? '▲' : '▼') : '↕'}
                  </span>
                </th>
                <th
                  onClick={() => handleSort('gender')}
                  className="p-3 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="flex items-center gap-1">
                    Gender {sortBy === 'gender' ? (sortOrder === 'asc' ? '▲' : '▼') : '↕'}
                  </span>
                </th>
                <th
                  onClick={() => handleSort('rollNo')}
                  className="p-3 text-indigo-600 font-black cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="flex items-center gap-1">
                    Ledger No. {sortBy === 'rollNo' ? (sortOrder === 'asc' ? '▲' : '▼') : '↕'}
                  </span>
                </th>
                <th className="p-3">PEN No.</th>
                <th className="p-3">Student Aadhaar</th>
                <th
                  onClick={() => handleSort('status')}
                  className="p-3 text-center cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="flex items-center justify-center gap-1">
                    Status {sortBy === 'status' ? (sortOrder === 'asc' ? '▲' : '▼') : '↕'}
                  </span>
                </th>
                <th className="p-3 text-right print:hidden">Actions</th>
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
                paginatedStudents.map((student, index) => {
                  const isSelected = selectedStudentIds.includes(student.id);
                  const isInactive = student.status === 'Inactive';

                  return (
                    <tr
                      key={student.id}
                      onClick={(e) => {
                        // Don't trigger if clicked on checkbox, action button or link
                        if (e.target.closest('input') || e.target.closest('button') || e.target.closest('a')) return;
                        setSelectedStudent(student);
                        setProfileActiveTab('personal');
                        setIsProfileModalOpen(true);
                      }}
                      className={`hover:bg-indigo-50/70 dark:hover:bg-slate-800/80 transition-all cursor-pointer select-none ${
                        isInactive ? 'bg-rose-50/30 dark:bg-rose-950/10' : ''
                      } ${isSelected ? 'bg-indigo-50/50 dark:bg-slate-800/60 font-semibold' : ''} ${
                        selectedStudentIds.length > 0 && !isSelected ? 'print:hidden' : ''
                      }`}
                    >
                      {/* Checkbox */}
                      <td className="p-3 text-center print:hidden" onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleToggleStudent(student.id)}
                          className="rounded text-sky-600 focus:ring-sky-500 cursor-pointer"
                        />
                      </td>

                      {/* Sr. No (Print Only - Dynamic for selected students) */}
                      <td className="p-3 hidden print:table-cell text-center font-bold">
                        {selectedStudentIds.length > 0
                          ? selectedStudentIds.indexOf(student.id) + 1
                          : index + 1
                        }
                      </td>

                      {/* Photo Thumbnail */}
                      <td className="p-3 print:hidden">
                        <img
                          src={student.photo || `https://ui-avatars.com/api/?name=${student.name.replace(' ', '+')}&background=4F46E5&color=fff&size=128&bold=true`}
                          alt={student.name}
                          className="w-9 h-9 rounded-lg object-cover border border-slate-200 dark:border-slate-700 bg-slate-100 shrink-0"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${student.name.replace(' ', '+')}&background=4F46E5&color=fff&size=128&bold=true`;
                          }}
                        />
                      </td>

                      {/* Name */}
                      <td className="p-3 font-bold text-slate-900 dark:text-white uppercase tracking-tight whitespace-nowrap group">
                        <div className="flex items-center gap-1.5">
                          <span className="text-indigo-600 dark:text-indigo-400 group-hover:underline font-black">
                            {student.name}
                          </span>
                          {student.isRteStudent && (
                            <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950 dark:text-amber-200 shrink-0">
                              🏛️ RTE
                            </span>
                          )}
                        </div>
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

                      {/* Ledger No (खाता संख्या) */}
                      <td className="p-3 font-mono font-black text-indigo-600 dark:text-indigo-400 text-center bg-indigo-50/50 dark:bg-indigo-950/30 rounded-lg">
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
                      <td className="p-3 text-right whitespace-nowrap print:hidden">
                        <div className="flex items-center justify-end gap-1.5">
                          
                          {/* Pay Fee / Collect Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenFeeModal(student);
                            }}
                            title="Collect / Pay Fee"
                            className="px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-[10px] flex items-center gap-1 shadow-xs transition-all hover:scale-105 active:scale-95"
                          >
                            <CreditCard className="w-3 h-3" /> Collect
                          </button>

                          {/* View Profile */}
                          <button
                            onClick={() => {
                              setSelectedStudent(student);
                              setProfileActiveTab('personal');
                              setIsProfileModalOpen(true);
                            }}
                            title="View 360° Profile"
                            className="p-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg transition-all"
                          >
                            <Eye className="w-3.5 h-3.5 text-sky-600" />
                          </button>

                          {/* Full Edit Modal */}
                          <button
                            onClick={() => handleOpenEditModal(student)}
                            title="Edit All Student Details"
                            className="p-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg transition-all"
                          >
                            <Edit className="w-3.5 h-3.5 text-amber-600" />
                          </button>

                          {/* Print Student Dossier & Fee Dues */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedStudent(student);
                              setPrintDocType('dossier');
                              setIsIdCardModalOpen(true);
                            }}
                            title="Print Full Student Details & Fee Dues Statement"
                            className="p-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg transition-all cursor-pointer"
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
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/40 print:hidden">
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

        {/* ✍️ OFFICIAL PRINT SIGNATURE FOOTER */}
        <div className="hidden print:flex justify-between items-end mt-12 px-6 py-4 text-xs font-bold text-slate-950 bg-white">
          <div className="text-center">
            <div className="w-44 border-b border-slate-900 mb-1"></div>
            <p>Class Incharge / Prepared By</p>
          </div>
          <div className="text-center">
            <div className="w-44 border-b border-slate-900 mb-1"></div>
            <p>Admission & Accounts Cell</p>
          </div>
          <div className="text-center">
            <div className="w-44 border-b border-slate-900 mb-1"></div>
            <p>Principal Signature & Official Stamp</p>
          </div>
        </div>
      </div>

      {/* ========================================================== */}
      {/* ✏️ MODAL: FULL COMPREHENSIVE EDIT STUDENT (MATCHES ADMISSION) */}
      {/* ========================================================== */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={`Edit Student Details: ${editFormData.name} (Adm: ${editFormData.admissionNo})`}
        maxWidth="max-w-4xl"
      >
        <form onSubmit={handleSaveEditForm} className="space-y-6 text-xs">

          {/* ═══ SECTION 1: Academic & Branch Details ═══ */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2.5 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-white" />
              <span className="text-white font-black text-xs uppercase tracking-wide">1. Academic & Branch Details</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-50 dark:bg-slate-800/40 p-4">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Campus / Branch</label>
                <select
                  value={editFormData.branchId}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, branchId: e.target.value }))}
                  className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
                >
                  <option value="BR-01">Dadheech Memorial Public School (Main Campus)</option>
                  <option value="BR-02">Dadheech Memorial Public School (Barheti Campus)</option>
                  <option value="BR-03">Dadheech Kids School (PAC Campus)</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Class *</label>
                <select
                  value={editFormData.class}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, class: e.target.value }))}
                  className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
                >
                  {classList.filter(c => c.id !== 'all').map(c => (
                    <option key={c.id} value={c.id}>{c.label.toUpperCase()}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Section</label>
                <select
                  value={editFormData.section}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, section: e.target.value }))}
                  className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
                >
                  <option value="A">Section A</option>
                  <option value="B">Section B</option>
                  <option value="C">Section C</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Register / Admission No *</label>
                <input
                  type="text"
                  required
                  value={editFormData.admissionNo}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, admissionNo: e.target.value }))}
                  className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-indigo-600 dark:text-indigo-400 block mb-1">
                  Ledger No. (खाता संख्या) / Roll No *
                </label>
                <input
                  type="text"
                  required
                  value={editFormData.rollNo}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, rollNo: e.target.value }))}
                  placeholder="e.g. 0, 101, 102 (खाता संख्या)"
                  className="w-full p-2 rounded-xl border-2 border-indigo-300 dark:border-indigo-700 bg-white dark:bg-slate-800 font-mono font-black text-indigo-700 dark:text-indigo-300"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Admission Date</label>
                <input
                  type="date"
                  value={editFormData.admissionDate}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, admissionDate: e.target.value }))}
                  className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
                />
              </div>

              {/* 🏛️ RTE 25% Quota Toggle */}
              <div className="md:col-span-3 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border-2 border-amber-400/60 dark:border-amber-600/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center text-xl shrink-0 shadow-sm">🏛️</div>
                  <div>
                    <p className="font-black text-amber-950 dark:text-amber-100 text-xs sm:text-sm flex items-center gap-2">
                      RTE (Right to Education / आरटीई 25% कोटा) Student?
                      {editFormData.isRteStudent && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-amber-500 text-white animate-pulse">100% Free Tuition Activated</span>
                      )}
                    </p>
                    <p className="text-[11px] text-amber-900/80 dark:text-amber-300/80 mt-0.5">
                      यदि यह विकल्प <strong>ON</strong> है, तो इस छात्र की <strong>ट्यूशन फीस ₹0 (Govt. Free)</strong> होगी और पेरेंट/स्टूडेंट पोर्टल में ट्यूशन फीस नहीं दिखेगी — केवल <strong>ट्रांसपोर्ट बस किराया</strong> दिखेगा।
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input type="checkbox" name="isRteStudent" checked={editFormData.isRteStudent} onChange={(e) => setEditFormData(prev => ({ ...prev, isRteStudent: e.target.checked }))} className="sr-only peer" />
                  <div className="w-12 h-7 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5.5 after:w-5.5 after:transition-all peer-checked:bg-amber-600 shadow-inner"></div>
                </label>
              </div>
            </div>
          </div>

          {/* ═══ SECTION 2: Student Personal & Government IDs ═══ */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2.5 flex items-center gap-2">
              <User className="w-4 h-4 text-white" />
              <span className="text-white font-black text-xs uppercase tracking-wide">2. Student Personal & Government IDs</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-50 dark:bg-slate-800/40 p-4">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">First Name *</label>
                <input type="text" required value={editFormData.firstName} onChange={(e) => setEditFormData(prev => ({ ...prev, firstName: e.target.value }))} className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold uppercase" />
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Last Name</label>
                <input type="text" value={editFormData.lastName} onChange={(e) => setEditFormData(prev => ({ ...prev, lastName: e.target.value }))} className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold uppercase" />
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Gender *</label>
                <select value={editFormData.gender} onChange={(e) => setEditFormData(prev => ({ ...prev, gender: e.target.value }))} className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold">
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Date of Birth</label>
                <input type="date" value={editFormData.dob} onChange={(e) => setEditFormData(prev => ({ ...prev, dob: e.target.value }))} className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold" />
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Student Aadhaar Number</label>
                <input type="text" value={editFormData.aadhaarNo} onChange={(e) => setEditFormData(prev => ({ ...prev, aadhaarNo: e.target.value }))} placeholder="12 digit Aadhaar" className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono font-bold" />
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">PEN Number (Govt.)</label>
                <input type="text" value={editFormData.penNo} onChange={(e) => setEditFormData(prev => ({ ...prev, penNo: e.target.value }))} placeholder="Permanent Education No." className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono font-bold" />
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Religion</label>
                <input type="text" value={editFormData.religion} onChange={(e) => setEditFormData(prev => ({ ...prev, religion: e.target.value }))} className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold" />
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Caste / Category</label>
                <input type="text" value={editFormData.caste} onChange={(e) => setEditFormData(prev => ({ ...prev, caste: e.target.value }))} className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold" />
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Blood Group</label>
                <select value={editFormData.bloodGroup} onChange={(e) => setEditFormData(prev => ({ ...prev, bloodGroup: e.target.value }))} className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold">
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
            </div>
          </div>

          {/* ═══ SECTION 3: Parents & Guardian Details ═══ */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 flex items-center gap-2">
              <Users className="w-4 h-4 text-white" />
              <span className="text-white font-black text-xs uppercase tracking-wide">3. Parents & Guardian Details</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-800/40 p-4">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Father's Name *</label>
                <input type="text" required value={editFormData.fatherName} onChange={(e) => setEditFormData(prev => ({ ...prev, fatherName: e.target.value }))} className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold uppercase" />
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Father's Mobile Number *</label>
                <input type="tel" required value={editFormData.fatherMobile} onChange={(e) => setEditFormData(prev => ({ ...prev, fatherMobile: e.target.value }))} className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono font-bold" />
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Mother's Name</label>
                <input type="text" value={editFormData.motherName} onChange={(e) => setEditFormData(prev => ({ ...prev, motherName: e.target.value }))} className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold uppercase" />
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Father's Occupation</label>
                <input type="text" value={editFormData.fatherOccupation} onChange={(e) => setEditFormData(prev => ({ ...prev, fatherOccupation: e.target.value }))} className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold" />
              </div>
              <div className="md:col-span-2">
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Residential Address *</label>
                <input type="text" required value={editFormData.presentAddress} onChange={(e) => setEditFormData(prev => ({ ...prev, presentAddress: e.target.value, permanentAddress: e.target.value }))} className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold" />
              </div>
            </div>
          </div>

          {/* ═══ SECTION 4: Fee Structure, Transport, Hostel & Old Session Dues ═══ */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bus className="w-4 h-4 text-white" />
                <span className="text-white font-black text-xs uppercase tracking-wide">4. Fee Structure, Transport, Hostel & Old Session Dues</span>
              </div>
              <span className="text-[10px] font-bold bg-white/20 text-white px-2.5 py-0.5 rounded-full">
                Full Year Ledger
              </span>
            </div>
            {!canManageFees && (
              <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 p-2.5 rounded-xl text-amber-900 dark:text-amber-200 text-xs font-bold flex items-center gap-1.5 m-4 mb-0">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                🔒 Fee dues & concession editing is locked (Only Super Admin, Admin & Branch Head can edit).
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-50 dark:bg-slate-800/40 p-4">
              
              {/* Tuition Fee */}
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  🎓 Annual Tuition Fee (₹)
                </label>
                <input
                  type="number"
                  disabled={!canManageFees}
                  value={editFormData.tuitionDue}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, tuitionDue: e.target.value }))}
                  className={`w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono font-bold ${!canManageFees ? 'opacity-60 cursor-not-allowed bg-slate-100 dark:bg-slate-900' : ''}`}
                />
              </div>

              {/* Hostel Fee */}
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  🏢 Hostel / Boarding Fee (₹)
                </label>
                <input
                  type="number"
                  disabled={!canManageFees}
                  value={editFormData.hostelDue}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, hostelDue: e.target.value }))}
                  placeholder="0"
                  className={`w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono font-bold ${!canManageFees ? 'opacity-60 cursor-not-allowed bg-slate-100 dark:bg-slate-900' : ''}`}
                />
              </div>

              {/* 📜 Old Session Fees (Dedicated Box as requested!) */}
              <div className="p-2.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border-2 border-amber-400 dark:border-amber-700">
                <label className="font-black text-amber-950 dark:text-amber-200 block mb-1">
                  📜 Old Session Fees (पिछला सत्र बकाया) (₹)
                </label>
                <input
                  type="number"
                  disabled={!canManageFees}
                  value={editFormData.oldSessionDues}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, oldSessionDues: e.target.value }))}
                  placeholder="0"
                  className={`w-full p-1.5 rounded-lg border border-amber-300 dark:border-amber-800 bg-white dark:bg-slate-900 font-mono font-black text-amber-900 dark:text-amber-200 ${!canManageFees ? 'opacity-60 cursor-not-allowed' : ''}`}
                />
              </div>

              {/* Miscellaneous Charges */}
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  📦 Miscellaneous Charges (विविध शुल्क) (₹)
                </label>
                <input
                  type="number"
                  value={editFormData.miscellaneousDue}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, miscellaneousDue: e.target.value }))}
                  placeholder="0"
                  className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono font-bold"
                />
              </div>

              {/* Transport Facility */}
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Transport Facility</label>
                <select value={editFormData.facilityType} onChange={(e) => setEditFormData(prev => ({ ...prev, facilityType: e.target.value }))} className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold">
                  <option value="None">None (Self Conveyance / Walker)</option>
                  <option value="Transport">School Bus / Transport Fleet</option>
                </select>
              </div>

              {/* Route Name */}
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Route Name</label>
                <input type="text" value={editFormData.transportRoute} onChange={(e) => setEditFormData(prev => ({ ...prev, transportRoute: e.target.value }))} placeholder="e.g. Route 1 - Nagla Dharakpur Side" className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold" />
              </div>

              {/* Stoppage / Village */}
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Stoppage / Village Name</label>
                <input type="text" value={editFormData.transportStop} onChange={(e) => setEditFormData(prev => ({ ...prev, transportStop: e.target.value }))} placeholder="e.g. Baijala, Dharakpur, Kaliyanpur..." className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold" />
              </div>

              {/* Monthly Bus Fare */}
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Monthly Bus Fare (₹)</label>
                <input type="number" value={editFormData.transportFare} onChange={(e) => setEditFormData(prev => ({ ...prev, transportFare: e.target.value }))} className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono font-bold" />
              </div>

              {/* Transport Duration Months */}
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Enrolled Duration (Months)</label>
                <select
                  value={editFormData.transportMonths}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, transportMonths: Number(e.target.value) }))}
                  className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
                >
                  <option value={11}>11 Months (Full Academic Session)</option>
                  <option value={10}>10 Months</option>
                  <option value={9}>9 Months</option>
                  <option value={8}>8 Months</option>
                  <option value={7}>7 Months</option>
                  <option value={6}>6 Months (Half Session)</option>
                  <option value={5}>5 Months</option>
                  <option value={4}>4 Months</option>
                  <option value={3}>3 Months (Quarterly)</option>
                  <option value={2}>2 Months</option>
                  <option value={1}>1 Month (Monthly Trial)</option>
                </select>
              </div>

              {/* Custom Annual Transport Override */}
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Custom Transport Override (₹) <span className="text-[10px] text-slate-400 font-normal">(Optional Concession)</span>
                </label>
                <input
                  type="number"
                  placeholder={`Auto: ₹${(Number(editFormData.transportFare || 0) * Number(editFormData.transportMonths || 11)).toLocaleString('en-IN')}`}
                  value={editFormData.customAnnualTransport}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, customAnnualTransport: e.target.value }))}
                  className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono font-bold"
                />
              </div>

              {/* Live Summary Calculation Box */}
              <div className="md:col-span-3 p-3.5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-slate-800 dark:to-slate-800/80 border border-orange-200 dark:border-orange-900 flex flex-wrap items-center justify-between gap-2">
                <div className="text-xs space-y-0.5">
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    Gross Annual Due (Tuition + Transport + Hostel + Old Session + Misc):
                  </span>
                  <p className="text-[11px] text-slate-500 font-mono">
                    Tuition: ₹{Number(editFormData.tuitionDue || 0).toLocaleString()} | 
                    Transport: ₹{(editFormData.customAnnualTransport !== '' && !isNaN(Number(editFormData.customAnnualTransport)) ? Number(editFormData.customAnnualTransport) : (Number(editFormData.transportFare || 0) * Number(editFormData.transportMonths || 11))).toLocaleString()} | 
                    Hostel: ₹{Number(editFormData.hostelDue || 0).toLocaleString()} | 
                    Old Session: ₹{Number(editFormData.oldSessionDues || 0).toLocaleString()} | 
                    Misc: ₹{Number(editFormData.miscellaneousDue || 0).toLocaleString()}
                  </p>
                </div>
                <strong className="text-base font-black font-mono text-orange-700 dark:text-orange-400">
                  Total Due: ₹{(
                    Number(editFormData.tuitionDue || 0) +
                    (editFormData.customAnnualTransport !== '' && !isNaN(Number(editFormData.customAnnualTransport)) ? Number(editFormData.customAnnualTransport) : (Number(editFormData.transportFare || 0) * Number(editFormData.transportMonths || 11))) +
                    Number(editFormData.hostelDue || 0) +
                    Number(editFormData.oldSessionDues || 0) +
                    Number(editFormData.miscellaneousDue || 0)
                  ).toLocaleString('en-IN')}
                </strong>
              </div>
            </div>
          </div>

          {/* ═══ SECTION 5: Previous School History ═══ */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-600 to-slate-700 px-4 py-2.5 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-white" />
              <span className="text-white font-black text-xs uppercase tracking-wide">5. Previous School History</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-800/40 p-4">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Previous School Name</label>
                <input type="text" value={editFormData.previousSchoolName} onChange={(e) => setEditFormData(prev => ({ ...prev, previousSchoolName: e.target.value }))} className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold" />
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Previous Class</label>
                <input type="text" value={editFormData.previousClass} onChange={(e) => setEditFormData(prev => ({ ...prev, previousClass: e.target.value }))} className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold" />
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Transfer Certificate (TC) No.</label>
                <input type="text" value={editFormData.previousTcNo} onChange={(e) => setEditFormData(prev => ({ ...prev, previousTcNo: e.target.value }))} className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold" />
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Remarks</label>
                <input type="text" value={editFormData.previousRemarks} onChange={(e) => setEditFormData(prev => ({ ...prev, previousRemarks: e.target.value }))} className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold" />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-200 dark:border-slate-700">
            <button type="button" onClick={() => setIsEditModalOpen(false)} className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300">
              Cancel
            </button>
            <button type="submit" className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-md shadow-indigo-500/20 flex items-center gap-1.5">
              <Save className="w-4 h-4" /> Save Student Details
            </button>
          </div>
        </form>
      </Modal>

      {/* ========================================================== */}
      {/* 👁️ MODAL: 360° STUDENT PROFILE (RICH TABBED PROFILE)        */}
      {/* ========================================================== */}
      <Modal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        title={`Student 360° Complete Profile: ${selectedStudent?.name || ''}`}
        maxWidth="max-w-4xl"
      >
        {selectedStudent && (
          <div className="space-y-5 text-xs">
            
            {/* Profile Header Card */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-lg">
              <img
                src={selectedStudent.photo || `https://ui-avatars.com/api/?name=${selectedStudent.name.replace(' ', '+')}&background=4F46E5&color=fff&size=128&bold=true`}
                alt={selectedStudent.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-white/30 shadow-md shrink-0"
              />
              <div className="space-y-1.5 text-center sm:text-left flex-1">
                <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                  <h3 className="text-xl font-black uppercase tracking-tight">
                    {selectedStudent.name}
                  </h3>
                  {selectedStudent.isRteStudent && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-amber-400 text-amber-950 border border-amber-300 shadow-xs">
                      🏛️ RTE (Tuition Free)
                    </span>
                  )}
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                    selectedStudent.status === 'Inactive' ? 'bg-rose-500/30 text-rose-300 border border-rose-400' : 'bg-emerald-500/30 text-emerald-300 border border-emerald-400'
                  }`}>
                    {selectedStudent.status}
                  </span>
                </div>

                <p className="text-xs text-indigo-200 font-bold">
                  Class: <span className="text-amber-300 uppercase">{selectedStudent.class} - {selectedStudent.section}</span> | 
                  Adm No: <span className="text-amber-300 font-mono">{selectedStudent.admissionNo}</span> | 
                  Ledger No. (खाता नं.): <span className="text-emerald-300 font-mono font-black">#{selectedStudent.rollNo}</span>
                </p>

                <p className="text-[11px] text-slate-300">
                  Campus: {selectedStudent.branchName}
                </p>
              </div>

              {/* Quick Actions inside Profile (All in 1 Clean Row) */}
              <div className="flex items-center gap-2 flex-wrap shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setIsProfileModalOpen(false);
                    handleOpenFeeModal(selectedStudent);
                  }}
                  className="px-3.5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black rounded-xl text-xs flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <CreditCard className="w-3.5 h-3.5 text-white" /> 💳 Collect / Pay Fee
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsProfileModalOpen(false);
                    handleOpenEditModal(selectedStudent);
                  }}
                  className="px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-xs flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Edit className="w-3.5 h-3.5 text-slate-950" /> ✏️ Edit Details
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsProfileModalOpen(false);
                    setPrintDocType('dossier');
                    setIsIdCardModalOpen(true);
                  }}
                  className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl text-xs flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-white" /> 🖨️ Master Sheet
                </button>
              </div>
            </div>

            {/* ═══ SECTION 1: Personal Details & Govt IDs ═══ */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 flex items-center gap-2">
                <User className="w-4 h-4 text-white" />
                <span className="text-white font-black text-xs uppercase tracking-wide">👤 Personal & Government IDs</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 dark:bg-slate-800/40">
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Date of Birth</span>
                  <p className="font-bold text-slate-900 dark:text-white mt-0.5">{selectedStudent.dob || '-'}</p>
                </div>
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Gender</span>
                  <p className="font-bold text-slate-900 dark:text-white capitalize mt-0.5">{selectedStudent.gender || '-'}</p>
                </div>
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Ledger No. (खाता संख्या)</span>
                  <p className="font-black text-indigo-600 dark:text-indigo-400 mt-0.5 font-mono">{selectedStudent.rollNo || '0'}</p>
                </div>
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Student Aadhaar No.</span>
                  <p className="font-bold text-slate-900 dark:text-white mt-0.5 font-mono">{selectedStudent.customFields?.studentAadhaar || '-'}</p>
                </div>
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">PEN Number</span>
                  <p className="font-bold text-slate-900 dark:text-white mt-0.5 font-mono">{selectedStudent.customFields?.penNo || '-'}</p>
                </div>
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Blood Group</span>
                  <p className="font-bold text-slate-900 dark:text-white mt-0.5">{selectedStudent.bloodGroup || '-'}</p>
                </div>
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Religion & Caste</span>
                  <p className="font-bold text-slate-900 dark:text-white mt-0.5">{selectedStudent.customFields?.religion || 'Hindu'} ({selectedStudent.customFields?.caste || 'General'})</p>
                </div>
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 col-span-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Residential Address</span>
                  <p className="font-bold text-slate-900 dark:text-white mt-0.5">{selectedStudent.parents?.address || '-'}</p>
                </div>
              </div>
            </div>

            {/* ═══ SECTION 2: Parents & Siblings ═══ */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 flex items-center gap-2">
                <Users className="w-4 h-4 text-white" />
                <span className="text-white font-black text-xs uppercase tracking-wide">👨‍👩‍👧 Parents & Siblings</span>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Father's Name</span>
                    <p className="font-black text-slate-900 dark:text-white mt-0.5 uppercase">{selectedStudent.parents?.fatherName || '-'}</p>
                    <p className="text-[11px] text-indigo-600 font-mono mt-0.5 font-bold">📱 {selectedStudent.parents?.fatherMobile || '-'}</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Mother's Name</span>
                    <p className="font-black text-slate-900 dark:text-white mt-0.5 uppercase">{selectedStudent.parents?.motherName || '-'}</p>
                  </div>
                </div>
                {selectedStudent.feeSummary?.isElderSibling && selectedStudent.feeSummary?.familySiblings?.length > 0 && (
                  <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 space-y-2">
                    <h4 className="font-bold text-purple-950 dark:text-purple-200 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-purple-600" />
                      👑 Family Master Billing (Elder Sibling)
                    </h4>
                    <div className="divide-y divide-purple-200/60 dark:divide-purple-800/60 pt-1">
                      {selectedStudent.feeSummary.familySiblings.map(sib => (
                        <div key={sib.id} className="py-1.5 flex items-center justify-between text-[11px]">
                          <span className="font-bold text-purple-900 dark:text-purple-200">{sib.name} ({sib.class})</span>
                          <span className="font-mono text-slate-700 dark:text-slate-300">Due: ₹{sib.individualDue.toLocaleString()} | Paid: ₹{sib.individualPaid.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {selectedStudent.feeSummary?.linkedElderSibling && (
                  <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
                    <p className="font-bold text-blue-950 dark:text-blue-200 text-xs">👨‍👩‍👧 Linked with Elder Sibling: <strong>{selectedStudent.feeSummary.linkedElderSibling.name} ({selectedStudent.feeSummary.linkedElderSibling.class})</strong></p>
                  </div>
                )}
              </div>
            </div>

            {/* ═══ SECTION 3: Fee Ledger & Family Dues ═══ */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2.5 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-white" />
                <span className="text-white font-black text-xs uppercase tracking-wide">💳 Fee Ledger & Family Dues</span>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 space-y-3">
                {selectedStudent.isRteStudent && (
                  <div className="p-4 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 text-amber-950 dark:text-amber-100 space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <p className="font-black flex items-center gap-1.5 text-xs"><span>🏛️</span> RTE Quota (Internal Admin Fee Ledger):</p>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-600 text-white">🔒 Parent View Masked</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-amber-500/20 text-xs">
                      <div className="p-2 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-amber-200 dark:border-amber-900/50">
                        <span className="text-[10px] font-bold text-slate-500 block">Tuition Fee</span>
                        <span className="font-bold text-emerald-600 font-mono">₹0.00 (Free)</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-amber-200 dark:border-amber-900/50">
                        <span className="text-[10px] font-bold text-slate-500 block">Annual & Misc.</span>
                        <span className="font-bold text-slate-900 dark:text-white font-mono">₹2,000</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-amber-200 dark:border-amber-900/50">
                        <span className="text-[10px] font-bold text-slate-500 block">Smart / Lab Fee</span>
                        <span className="font-bold text-slate-900 dark:text-white font-mono">₹1,500</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-amber-200 dark:border-amber-900/50">
                        <span className="text-[10px] font-bold text-slate-500 block">Exam / Paper Fee</span>
                        <span className="font-bold text-slate-900 dark:text-white font-mono">₹1,000</span>
                      </div>
                    </div>
                  </div>
                )}
                {/* 🏷️ Itemized Fee Head Breakdown Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1 pb-1">
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                    <span className="text-[10px] font-bold text-slate-400 block">🎓 Tuition Fee</span>
                    <strong className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                      ₹{(selectedStudent.feeSummary?.tuitionDue !== undefined ? selectedStudent.feeSummary.tuitionDue : 13500).toLocaleString()}
                    </strong>
                  </div>
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                    <span className="text-[10px] font-bold text-slate-400 block">🚌 Transport (11M)</span>
                    <strong className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                      ₹{(selectedStudent.feeSummary?.transportDue11Months !== undefined ? selectedStudent.feeSummary.transportDue11Months : (Number(selectedStudent.transport?.monthlyFare || 0) * (selectedStudent.transport?.months || 11))).toLocaleString()}
                    </strong>
                  </div>
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                    <span className="text-[10px] font-bold text-slate-400 block">🏢 Hostel Fee</span>
                    <strong className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                      ₹{Number(selectedStudent.feeSummary?.hostelDue || 0).toLocaleString()}
                    </strong>
                  </div>
                  <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-700 text-center">
                    <span className="text-[10px] font-black text-amber-800 dark:text-amber-300 block">📜 Old Session Fees</span>
                    <strong className="text-xs font-mono font-black text-amber-900 dark:text-amber-100">
                      ₹{Number(selectedStudent.feeSummary?.oldSessionDues || 0).toLocaleString()}
                    </strong>
                  </div>
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                    <span className="text-[10px] font-bold text-slate-400 block">📦 Misc Charges</span>
                    <strong className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                      ₹{Number(selectedStudent.feeSummary?.miscellaneousDue || 0).toLocaleString()}
                    </strong>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                    <span className="text-[10px] font-bold text-amber-700 dark:text-amber-300 uppercase">{selectedStudent.isRteStudent ? 'Admin Total Dues' : 'Annual Fee Due'}</span>
                    <p className="text-base font-black text-amber-900 dark:text-amber-100 font-mono mt-0.5">₹{(selectedStudent.feeSummary?.totalDue || 0).toLocaleString()}</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                    <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 uppercase">Amount Paid</span>
                    <p className="text-base font-black text-emerald-900 dark:text-emerald-100 font-mono mt-0.5">₹{(selectedStudent.feeSummary?.totalPaid || 0).toLocaleString()}</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
                    <span className="text-[10px] font-bold text-rose-700 dark:text-rose-300 uppercase">Remaining Balance</span>
                    <p className="text-base font-black text-rose-900 dark:text-rose-100 font-mono mt-0.5">₹{(selectedStudent.feeSummary?.balance || 0).toLocaleString()}</p>
                  </div>
                </div>

                {selectedStudent.feeSummary?.isElderSibling && (
                  <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
                    <div className="flex justify-between items-center text-xs font-bold text-purple-900 dark:text-purple-200">
                      <span>👑 Total Combined Family Dues:</span>
                      <span className="font-mono text-base font-black">₹{selectedStudent.feeSummary.consolidatedFamilyDue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-purple-700 dark:text-purple-300 mt-1">
                      <span>Total Family Paid:</span>
                      <span className="font-mono font-bold">₹{selectedStudent.feeSummary.consolidatedFamilyPaid.toLocaleString()}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ═══ SECTION 4: Transport & Route ═══ */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-sky-500 to-cyan-500 px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bus className="w-4 h-4 text-white" />
                  <span className="text-white font-black text-xs uppercase tracking-wide">🚌 Transport & Conveyance (11 Months / Custom)</span>
                </div>
                <span className="text-[10px] font-bold bg-white/20 text-white px-2.5 py-0.5 rounded-full">
                  {selectedStudent.transport?.months || 11} Months Enrolled
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 dark:bg-slate-800/40">
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Transport Status</span>
                  <p className="font-bold text-slate-900 dark:text-white mt-0.5">{selectedStudent.transport?.isEnrolled || (Number(selectedStudent.transport?.monthlyFare || 0) > 0) ? 'Enrolled in School Bus' : 'Self Conveyance / Walk-in'}</p>
                </div>
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Village / Stop</span>
                  <p className="font-bold text-slate-900 dark:text-white mt-0.5">{selectedStudent.transport?.stop || selectedStudent.transport?.stoppage || 'N/A'}</p>
                </div>
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Assigned Bus Route</span>
                  <p className="font-bold text-slate-900 dark:text-white mt-0.5">{selectedStudent.transport?.route || 'Route 1: Jargwan - Baraura Route'}</p>
                </div>
                <div className="p-3 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800">
                  <span className="text-[10px] font-bold text-cyan-700 dark:text-cyan-300 uppercase">Annual Transport Due ({selectedStudent.transport?.months || 11}M)</span>
                  <p className="font-black text-cyan-900 dark:text-cyan-100 font-mono mt-0.5 text-sm">
                    ₹{(selectedStudent.feeSummary?.transportDue11Months || (Number(selectedStudent.transport?.monthlyFare || 0) * (selectedStudent.transport?.months || 11))).toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            </div>

            {/* ═══ SECTION 5: Attendance History ═══ */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-slate-600 to-slate-700 px-4 py-2.5 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-white" />
                <span className="text-white font-black text-xs uppercase tracking-wide">📅 Attendance History</span>
              </div>
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 dark:bg-slate-800/40 text-center">
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Working Days</span>
                  <p className="text-base font-black text-slate-900 dark:text-white mt-0.5">88 Days</p>
                </div>
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                  <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 uppercase">Present Days</span>
                  <p className="text-base font-black text-emerald-900 dark:text-emerald-100 mt-0.5">{selectedStudent.attendanceSummary?.presentDays || 84} Days</p>
                </div>
                <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
                  <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 uppercase">Attendance %</span>
                  <p className="text-base font-black text-indigo-900 dark:text-indigo-100 mt-0.5">{selectedStudent.attendanceSummary?.percentage || 95.5}%</p>
                </div>
              </div>
            </div>

          </div>
        )}
      </Modal>

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
                  Deactivating {studentToDeactivate.name} (Adm: {studentToDeactivate.admissionNo}, Ledger: {studentToDeactivate.rollNo})
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
      {/* 💳 MODAL: 1-CLICK FEE COLLECTION / PAYMENT                */}
      {/* ========================================================== */}
      <Modal
        isOpen={isFeeModalOpen}
        onClose={() => setIsFeeModalOpen(false)}
        title={`💳 Collect / Pay Fee: ${studentForFee?.name || ''}`}
        maxWidth="max-w-2xl"
      >
        {studentForFee && (() => {
          // Retrieve all past fee invoices/receipts for this student
          const pastInvoices = (schoolService.getFeeInvoices() || []).filter(
            inv => inv.studentId === studentForFee.id || inv.studentName === studentForFee.name
          );

          const tuitionDue = studentForFee.feeSummary?.tuitionDue || 13500;
          const tuitionPaid = studentForFee.feeSummary?.tuitionPaid || 0;
          const tuitionRem = Math.max(0, tuitionDue - tuitionPaid);

          const transportDue = studentForFee.feeSummary?.transportDue11Months || 0;
          const transportPaid = studentForFee.feeSummary?.transportPaid || 0;
          const transportRem = Math.max(0, transportDue - transportPaid);

          const hostelDue = studentForFee.feeSummary?.hostelDue || 0;
          const hostelPaid = studentForFee.feeSummary?.hostelPaid || 0;
          const hostelRem = Math.max(0, hostelDue - hostelPaid);

          const oldSessionDue = studentForFee.feeSummary?.oldSessionDues || 0;
          const oldSessionPaid = studentForFee.feeSummary?.oldSessionPaid || 0;
          const oldSessionRem = Math.max(0, oldSessionDue - oldSessionPaid);

          const miscDue = studentForFee.feeSummary?.miscellaneousDue || 0;
          const miscPaid = studentForFee.feeSummary?.miscPaid || 0;
          const miscRem = Math.max(0, miscDue - miscPaid);

          const totalRemBalance = tuitionRem + transportRem + hostelRem + oldSessionRem + miscRem;

          const updateHeadAmount = (head, val) => {
            const numVal = val === '' ? '' : Number(val);
            setFeeForm(prev => {
              const next = { ...prev, [head]: numVal };
              const sum = Number(next.tuitionPay || 0) + Number(next.transportPay || 0) + Number(next.hostelPay || 0) + Number(next.oldSessionPay || 0) + Number(next.miscPay || 0);
              next.amount = sum;
              return next;
            });
          };

          const setPayAll = () => {
            setFeeForm(prev => ({
              ...prev,
              tuitionPay: tuitionRem > 0 ? tuitionRem : '',
              transportPay: transportRem > 0 ? transportRem : '',
              hostelPay: hostelRem > 0 ? hostelRem : '',
              oldSessionPay: oldSessionRem > 0 ? oldSessionRem : '',
              miscPay: miscRem > 0 ? miscRem : '',
              amount: totalRemBalance
            }));
          };

          const setPayTuitionOnly = () => {
            setFeeForm(prev => ({
              ...prev,
              tuitionPay: tuitionRem,
              transportPay: '',
              hostelPay: '',
              oldSessionPay: '',
              miscPay: '',
              amount: tuitionRem
            }));
          };

          const setPayTransportOnly = () => {
            setFeeForm(prev => ({
              ...prev,
              tuitionPay: '',
              transportPay: transportRem,
              hostelPay: '',
              oldSessionPay: '',
              miscPay: '',
              amount: transportRem
            }));
          };

          return (
            <form onSubmit={handleCollectFeeSubmit} className="space-y-3 text-xs">
              {/* 🌟 Compact Header: Student Info + Total Due + Quick Action Buttons */}
              <div className="p-3 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 shadow-sm border border-indigo-900/50">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-black text-sm uppercase tracking-tight text-white">{studentForFee.name}</h3>
                    <span className="px-2 py-0.2 rounded-full bg-indigo-500/30 text-indigo-300 font-bold text-[9px] uppercase border border-indigo-400/30">
                      Class {studentForFee.class}-{studentForFee.section}
                    </span>
                  </div>
                  <p className="text-[10.5px] text-slate-300 font-medium mt-0.5">
                    Adm: <span className="font-mono text-amber-300">#{studentForFee.admissionNo}</span> • Father: <span className="text-white font-bold">{studentForFee.parents?.fatherName || 'N/A'}</span>
                  </p>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <div className="text-right">
                    <span className="text-[9px] uppercase font-bold text-rose-300 block">Total Balance Due</span>
                    <span className="font-mono font-black text-base text-rose-400">
                      ₹{totalRemBalance.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* ⚡ 1-Click Quick Settle Buttons */}
              <div className="flex items-center justify-between gap-1.5 flex-wrap bg-slate-50 dark:bg-slate-800/60 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 pl-1 flex items-center gap-1">
                  ⚡ Quick Settle:
                </span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {tuitionRem > 0 && (
                    <button
                      type="button"
                      onClick={setPayTuitionOnly}
                      className="px-2.5 py-1 rounded-lg bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-950/80 dark:hover:bg-indigo-900 text-indigo-800 dark:text-indigo-200 font-bold text-[10px] transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
                    >
                      🎓 Pay Tuition (₹{tuitionRem.toLocaleString('en-IN')})
                    </button>
                  )}
                  {transportRem > 0 && (
                    <button
                      type="button"
                      onClick={setPayTransportOnly}
                      className="px-2.5 py-1 rounded-lg bg-amber-100 hover:bg-amber-200 dark:bg-amber-950/80 dark:hover:bg-amber-900 text-amber-900 dark:text-amber-200 font-bold text-[10px] transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
                    >
                      🚌 Pay Bus (₹{transportRem.toLocaleString('en-IN')})
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={setPayAll}
                    className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-black text-[10px] transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
                  >
                    ⚡ Pay All (₹{totalRemBalance.toLocaleString('en-IN')})
                  </button>
                </div>
              </div>

              {/* 🎯 Head-Wise Fee Collection Table (Zero-Scroll Compact Layout) */}
              <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-xs">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300 text-[10.5px]">
                    <tr>
                      <th className="p-2 pl-3">Fee Head</th>
                      <th className="p-2 text-right">Total Due</th>
                      <th className="p-2 text-right">Paid</th>
                      <th className="p-2 text-right">Balance Due</th>
                      <th className="p-2 pr-3 text-right">Paying Now (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-[11px]">
                    {/* 1. Tuition Fee */}
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="p-2 pl-3 font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <span>🎓</span> School / Tuition Fee
                      </td>
                      <td className="p-2 text-right font-mono text-slate-500 dark:text-slate-400">₹{tuitionDue.toLocaleString('en-IN')}</td>
                      <td className="p-2 text-right font-mono text-emerald-600 font-semibold">₹{tuitionPaid.toLocaleString('en-IN')}</td>
                      <td className="p-2 text-right font-mono font-bold text-rose-600">₹{tuitionRem.toLocaleString('en-IN')}</td>
                      <td className="p-2 pr-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <input
                            type="number"
                            min={0}
                            max={tuitionRem}
                            placeholder="0"
                            value={feeForm.tuitionPay}
                            onChange={(e) => updateHeadAmount('tuitionPay', e.target.value)}
                            className="w-24 p-1 rounded-lg border-2 border-indigo-400 dark:border-indigo-600 font-mono font-black text-right text-indigo-700 dark:text-indigo-300 bg-white dark:bg-slate-900 text-xs shadow-xs focus:ring-1 focus:ring-indigo-500"
                          />
                          {tuitionRem > 0 && (
                            <button
                              type="button"
                              onClick={() => updateHeadAmount('tuitionPay', tuitionRem)}
                              className="px-1.5 py-1 text-[9.5px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 rounded hover:bg-indigo-100 cursor-pointer"
                              title="Pay full tuition"
                            >
                              Full
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>

                    {/* 2. Transport Fee */}
                    {(transportDue > 0 || studentForFee.transportOpted || studentForFee.route) && (
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-2 pl-3 font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <span>🚌</span> Bus / Transport Fee (11M)
                        </td>
                        <td className="p-2 text-right font-mono text-slate-500 dark:text-slate-400">₹{transportDue.toLocaleString('en-IN')}</td>
                        <td className="p-2 text-right font-mono text-emerald-600 font-semibold">₹{transportPaid.toLocaleString('en-IN')}</td>
                        <td className="p-2 text-right font-mono font-bold text-rose-600">₹{transportRem.toLocaleString('en-IN')}</td>
                        <td className="p-2 pr-3 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <input
                              type="number"
                              min={0}
                              max={transportRem}
                              placeholder="0"
                              value={feeForm.transportPay}
                              onChange={(e) => updateHeadAmount('transportPay', e.target.value)}
                              className="w-24 p-1 rounded-lg border border-amber-400 dark:border-amber-600 font-mono font-bold text-right text-amber-700 dark:text-amber-300 bg-white dark:bg-slate-900 text-xs shadow-xs focus:ring-1 focus:ring-amber-500"
                            />
                            {transportRem > 0 && (
                              <button
                                type="button"
                                onClick={() => updateHeadAmount('transportPay', transportRem)}
                                className="px-1.5 py-1 text-[9.5px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950 rounded hover:bg-amber-100 cursor-pointer"
                                title="Pay full transport"
                              >
                                Full
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}

                    {/* 3. Hostel Fee */}
                    {(hostelDue > 0 || studentForFee.hostelOpted) && (
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-2 pl-3 font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <span>🏢</span> Hostel Fee
                        </td>
                        <td className="p-2 text-right font-mono text-slate-500 dark:text-slate-400">₹{hostelDue.toLocaleString('en-IN')}</td>
                        <td className="p-2 text-right font-mono text-emerald-600 font-semibold">₹{hostelPaid.toLocaleString('en-IN')}</td>
                        <td className="p-2 text-right font-mono font-bold text-rose-600">₹{hostelRem.toLocaleString('en-IN')}</td>
                        <td className="p-2 pr-3 text-right">
                          <input
                            type="number"
                            min={0}
                            max={hostelRem}
                            placeholder="0"
                            value={feeForm.hostelPay}
                            onChange={(e) => updateHeadAmount('hostelPay', e.target.value)}
                            className="w-24 p-1 rounded-lg border border-slate-300 dark:border-slate-600 font-mono font-bold text-right bg-white dark:bg-slate-900 text-xs"
                          />
                        </td>
                      </tr>
                    )}

                    {/* 4. Old Session Dues */}
                    {oldSessionDue > 0 && (
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-2 pl-3 font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <span>📜</span> Old Session Arrears
                        </td>
                        <td className="p-2 text-right font-mono text-slate-500 dark:text-slate-400">₹{oldSessionDue.toLocaleString('en-IN')}</td>
                        <td className="p-2 text-right font-mono text-emerald-600 font-semibold">₹{oldSessionPaid.toLocaleString('en-IN')}</td>
                        <td className="p-2 text-right font-mono font-bold text-rose-600">₹{oldSessionRem.toLocaleString('en-IN')}</td>
                        <td className="p-2 pr-3 text-right">
                          <input
                            type="number"
                            min={0}
                            max={oldSessionRem}
                            placeholder="0"
                            value={feeForm.oldSessionPay}
                            onChange={(e) => updateHeadAmount('oldSessionPay', e.target.value)}
                            className="w-24 p-1 rounded-lg border border-rose-400 font-mono font-bold text-right text-rose-700 bg-white dark:bg-slate-900 text-xs"
                          />
                        </td>
                      </tr>
                    )}

                    {/* 5. Miscellaneous Charges */}
                    {miscDue > 0 && (
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-2 pl-3 font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <span>📦</span> Misc Charges
                        </td>
                        <td className="p-2 text-right font-mono text-slate-500 dark:text-slate-400">₹{miscDue.toLocaleString('en-IN')}</td>
                        <td className="p-2 text-right font-mono text-emerald-600 font-semibold">₹{miscPaid.toLocaleString('en-IN')}</td>
                        <td className="p-2 text-right font-mono font-bold text-rose-600">₹{miscRem.toLocaleString('en-IN')}</td>
                        <td className="p-2 pr-3 text-right">
                          <input
                            type="number"
                            min={0}
                            max={miscRem}
                            placeholder="0"
                            value={feeForm.miscPay}
                            onChange={(e) => updateHeadAmount('miscPay', e.target.value)}
                            className="w-24 p-1 rounded-lg border border-slate-300 dark:border-slate-600 font-mono font-bold text-right bg-white dark:bg-slate-900 text-xs"
                          />
                        </td>
                      </tr>
                    )}
                  </tbody>
                  <tfoot className="bg-slate-100 dark:bg-slate-800 font-black border-t-2 border-slate-300 dark:border-slate-700 text-xs">
                    <tr>
                      <td colSpan={4} className="p-2 pl-3 text-right text-slate-900 dark:text-white uppercase">
                        TOTAL AMOUNT TO COLLECT (कुल देय राशि):
                      </td>
                      <td className="p-2 pr-3 text-right font-mono text-emerald-600 dark:text-emerald-400 text-sm">
                        ₹{Number(feeForm.amount || 0).toLocaleString('en-IN')}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* 💳 Bottom Controls: Collection Date, Payment Mode, Remarks in 1 Clean Line */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-0.5 text-[11px]">
                    Collection Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={feeForm.paymentDate}
                    onChange={(e) => setFeeForm(prev => ({ ...prev, paymentDate: e.target.value }))}
                    className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold text-slate-900 dark:text-white text-xs"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-0.5 text-[11px]">
                    Payment Mode
                  </label>
                  <select
                    value={feeForm.paymentMode}
                    onChange={(e) => setFeeForm(prev => ({ ...prev, paymentMode: e.target.value }))}
                    className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold text-slate-900 dark:text-white text-xs"
                  >
                    <option value="Cash">💵 Cash Counter (नकद)</option>
                    <option value="UPI / Online">📱 UPI / QR Code Scan</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-0.5 text-[11px]">
                    Remarks / Transaction Note
                  </label>
                  <input
                    type="text"
                    value={feeForm.remarks}
                    onChange={(e) => setFeeForm(prev => ({ ...prev, remarks: e.target.value }))}
                    placeholder="e.g. Month Installment, UTR..."
                    className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium"
                  />
                </div>
              </div>

              {/* 🚀 Action Buttons: Cancel + Confirm & Collect (Zero Scroll!) */}
              <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsFeeModalOpen(false)}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold text-xs cursor-pointer transition-colors"
                  >
                    Cancel
                  </button>
                  {pastInvoices.length > 0 && (
                    <span className="text-[10px] text-slate-400 font-medium">
                      ({pastInvoices.length} prior receipts)
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={!feeForm.amount || Number(feeForm.amount) <= 0}
                  className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 text-white font-black rounded-xl text-xs shadow-lg shadow-emerald-500/25 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <CreditCard className="w-4 h-4" /> Collect ₹{Number(feeForm.amount || 0).toLocaleString('en-IN')} & Print Receipt
                </button>
              </div>
            </form>
          );
        })()}
      </Modal>

      {/* ========================================================== */}
      {/* 🧾 MODAL: INSTANT PRINTABLE FEE RECEIPT                    */}
      {/* ========================================================== */}
      <Modal
        isOpen={isReceiptModalOpen}
        onClose={() => setIsReceiptModalOpen(false)}
        title="Official Fee Payment Receipt"
        maxWidth="max-w-md"
      >
        {recentReceipt && (
          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-2xl text-xs space-y-3 print:border-none">
              <div className="text-center border-b border-slate-200 dark:border-slate-800 pb-2">
                <h3 className="font-black text-base text-slate-900 dark:text-white uppercase tracking-wide">DADHEECH MEMORIAL PUBLIC SCHOOL</h3>
                <p className="text-[10px] text-slate-500">Murlipur, Dharakpur, Aligarh | Academic Session: 2026-2027</p>
                <span className="inline-block mt-1 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] uppercase">
                  ✓ Fee Payment Receipt (PAID)
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div>
                  <span className="text-slate-400 block">Receipt No:</span>
                  <strong className="font-mono text-slate-900 dark:text-white">{recentReceipt.receiptNo || recentReceipt.id}</strong>
                </div>
                <div className="text-right">
                  <span className="text-slate-400 block">Date:</span>
                  <strong className="text-slate-900 dark:text-white">{recentReceipt.date || new Date().toLocaleDateString('en-GB')}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Student Name:</span>
                  <strong className="text-blue-600 dark:text-blue-400 uppercase">{recentReceipt.studentName}</strong>
                </div>
                <div className="text-right">
                  <span className="text-slate-400 block">Adm / Roll:</span>
                  <strong className="font-mono text-slate-900 dark:text-white">{recentReceipt.studentAdmNo || 'N/A'}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Payment Mode:</span>
                  <strong className="text-slate-900 dark:text-white">{recentReceipt.paymentMode || 'Cash'}</strong>
                </div>
                <div className="text-right">
                  <span className="text-slate-400 block">Amount Paid:</span>
                  <strong className="text-base font-black text-emerald-600 font-mono">₹{Number(recentReceipt.amountPaid || recentReceipt.amount || 0).toLocaleString('en-IN')}</strong>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-[10px] space-y-1">
                <span className="font-bold text-slate-500 block">Fee Head Settlements Included:</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Tuition, Transport Bus, Hostel, Old Session & Misc Account Settlement.
                </p>
                {recentReceipt.remarks && (
                  <p className="font-medium text-slate-500 italic">Note: {recentReceipt.remarks}</p>
                )}
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex justify-between text-[10px] text-slate-400">
                <span>Authorized Cashier</span>
                <span>System Generated Receipt</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => window.print()}
                className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md"
              >
                <Printer className="w-4 h-4" /> Print Receipt
              </button>
              <button
                onClick={() => setIsReceiptModalOpen(false)}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-xs"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* ========================================================== */}
      {/* 🖨️ MODAL: PRINT COMPLETE STUDENT DOSSIER & FEE STATEMENT   */}
      {/* ========================================================== */}
      <Modal
        isOpen={isIdCardModalOpen}
        onClose={() => setIsIdCardModalOpen(false)}
        title={printDocType === 'dossier' ? `Official Student Master Record & Fee Statement: ${selectedStudent?.name || ''}` : `Student Identity Card: ${selectedStudent?.name || ''}`}
        maxWidth="max-w-4xl"
      >
        {selectedStudent && (
          <div className="space-y-4">
            {/* View Switcher Tabs */}
            <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl print:hidden">
              <button
                type="button"
                onClick={() => setPrintDocType('dossier')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  printDocType === 'dossier'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-white/50'
                }`}
              >
                <FileText className="w-3.5 h-3.5" /> 📋 Complete Student Details & Fee Statement (Default)
              </button>
              <button
                type="button"
                onClick={() => setPrintDocType('idcard')}
                className={`py-2 px-4 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  printDocType === 'idcard'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-white/50'
                }`}
              >
                <IdCard className="w-3.5 h-3.5" /> 🪪 ID Card
              </button>
            </div>

            {printDocType === 'dossier' ? (
              <PrintableStudentDossier student={selectedStudent} onClose={() => setIsIdCardModalOpen(false)} />
            ) : (
              <div className="space-y-4">
                <PrintableIDCard person={selectedStudent} type="student" />
                <button
                  onClick={() => window.print()}
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Printer className="w-4 h-4" /> Print Student ID Card
                </button>
              </div>
            )}
          </div>
        )}
      </Modal>

      {/* ========================================================== */}
      {/* 🗑️ MODAL: BULK INACTIVATE / DELETE STUDENTS               */}
      {/* ========================================================== */}
      <Modal
        isOpen={isBulkDeactivateModalOpen}
        onClose={() => setIsBulkDeactivateModalOpen(false)}
        title={`Inactivate / Delete ${selectedStudentIds.length} Selected Students`}
        maxWidth="max-w-md"
      >
        <div className="space-y-4 text-xs">
          <div className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-xl text-rose-900 dark:text-rose-200">
            <p className="font-bold">
              ⚠️ You have selected <strong>{selectedStudentIds.length} student{selectedStudentIds.length > 1 ? 's' : ''}</strong> to mark as Inactive / Delete.
            </p>
            <p className="text-[11px] text-rose-700 dark:text-rose-300 mt-1">
              Their records will be archived from the active student list and moved to the TC / Inactive Archive.
            </p>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Inactivation Reason <span className="text-rose-500">*</span>
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
              Remarks (Optional)
            </label>
            <textarea
              value={deactivateNote}
              onChange={(e) => setDeactivateNote(e.target.value)}
              placeholder="Enter TC / bulk exit note..."
              rows={2}
              className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsBulkDeactivateModalOpen(false)}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 font-bold"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirmBulkDeactivate}
              className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold shadow-md"
            >
              Confirm Inactivate ({selectedStudentIds.length})
            </button>
          </div>
        </div>
      </Modal>

    </div>
  );
};

export default StudentsPage;
