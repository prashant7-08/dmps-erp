import React, { useState, useEffect, useRef } from 'react';
import {
  GraduationCap,
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Phone,
  Mail,
  UserCheck,
  FileText,
  CreditCard,
  HeartPulse,
  Printer,
  X,
  CheckCircle2,
  Droplet,
  ArrowRight,
  ShieldCheck,
  Award,
  Camera,
  Upload,
  Image as ImageIcon,
  Building2,
  Lock,
  GitBranch,
  Users
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import { useAuth } from '../context/AuthContext';
import { PrintableIDCard } from '../components/printables/PrintableIDCard';
import { PrintableReportCard } from '../components/printables/PrintableReportCard';
import { PrintableFeeReceipt } from '../components/printables/PrintableFeeReceipt';
import schoolService from '../services/schoolService';

export const StudentsPage = ({ initialSelectedStudent = null }) => {
  const { showToast } = useToast();
  const { activeBranchId, setActiveBranchId, isSuperAdmin, activeBranch, branches, user } = useAuth();
  
  const [students, setStudents] = useState(schoolService.getStudents(activeBranchId));
  const [searchQuery, setSearchQuery] = useState('');
  const [classFilter, setClassFilter] = useState('All');
  
  // Modals & Drawers
  const [selectedStudent, setSelectedStudent] = useState(initialSelectedStudent);
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isIdCardModalOpen, setIsIdCardModalOpen] = useState(false);
  const [isReportCardModalOpen, setIsReportCardModalOpen] = useState(false);
  const [isCollectFeeModalOpen, setIsCollectFeeModalOpen] = useState(false);
  const [generatedReceipt, setGeneratedReceipt] = useState(null);
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);

  // Bulk Excel/CSV Import States
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [importedStudentsList, setImportedStudentsList] = useState([]);
  const [importError, setImportError] = useState('');
  const [targetBranchForImport, setTargetBranchForImport] = useState(activeBranchId === 'all' ? 'BR-01' : activeBranchId);
  const csvFileInputRef = useRef(null);

  const fileInputRef = useRef(null);
  const editFileInputRef = useRef(null);

  // Edit Form State
  const [editFormData, setEditFormData] = useState({
    id: '',
    name: '',
    branchId: 'BR-01',
    class: 'Class 10',
    section: 'A',
    rollNo: '',
    bloodGroup: 'O+',
    house: 'Phoenix (Red House)',
    fatherName: '',
    fatherMobile: '',
    address: '',
    status: 'Active',
    photo: ''
  });

  // Collect Fee POS Form State
  const [feeForm, setFeeForm] = useState({
    amount: '45000',
    feeType: 'Q1 & Q2 Tuition Fee',
    paymentMode: 'UPI',
    remarks: 'Regular academic fee installment'
  });

  // New Admission Form State
  const [formData, setFormData] = useState({
    name: '',
    branchId: activeBranchId === 'all' ? 'BR-01' : activeBranchId,
    dob: '2012-05-15',
    gender: 'Male',
    bloodGroup: 'O+',
    class: 'Class 10',
    section: 'A',
    house: 'Phoenix (Red House)',
    category: 'General',
    aadhaarNo: '1234-5678-9012',
    fatherName: '',
    fatherMobile: '',
    motherName: '',
    email: '',
    address: '',
    photo: ''
  });

  useEffect(() => {
    refreshData();
  }, [activeBranchId]);

  useEffect(() => {
    if (initialSelectedStudent) {
      setSelectedStudent(initialSelectedStudent);
    }
  }, [initialSelectedStudent]);

  const refreshData = () => {
    setStudents([...schoolService.getStudents(activeBranchId)]);
  };

  // Fast Client-Side Image Compressor (Compresses 5MB photo to crisp ~25KB WebP/JPEG)
  const compressImage = (file, callback) => {
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new window.Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 250;
        const MAX_HEIGHT = 250;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
        callback(dataUrl);
      };
    };
  };

  const handlePhotoSelect = (e, isEdit = false) => {
    const file = e.target.files[0];
    if (file) {
      compressImage(file, (compressedBase64) => {
        if (isEdit) {
          setEditFormData(prev => ({ ...prev, photo: compressedBase64 }));
        } else {
          setFormData(prev => ({ ...prev, photo: compressedBase64 }));
        }
        showToast('Photo uploaded & optimized successfully! 📸', 'success');
      });
    }
  };

  // Handle New Student Admission
  const handleAdmissionSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.fatherName.trim()) {
      showToast('Please fill all required student and parent fields', 'error');
      return;
    }

    const assignedBranch = formData.branchId || (activeBranchId === 'all' ? 'BR-01' : activeBranchId);
    const branchObj = branches.find(b => b.id === assignedBranch);

    const newStudent = schoolService.addStudent({
      ...formData,
      branchId: assignedBranch,
      branchName: branchObj?.name || "Dadheech Memorial Public School",
      admissionNo: `ADM-${assignedBranch.replace('BR-0', 'B')}-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'Active',
      photo: formData.photo || 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
      parents: {
        fatherName: formData.fatherName,
        fatherMobile: formData.fatherMobile,
        motherName: formData.motherName || '',
        address: formData.address || ''
      }
    });

    refreshData();
    setIsAdmissionModalOpen(false);
    showToast(`Student ${newStudent.name} admitted to ${branchObj?.shortCode || 'Campus'}! 🎉`, 'success');
    setSelectedStudent(newStudent);
  };

  // Open Edit Modal
  const openEditModal = (student) => {
    setEditFormData({
      id: student.id,
      name: student.name,
      branchId: student.branchId || 'BR-01',
      class: student.class || 'Class 10',
      section: student.section || 'A',
      rollNo: student.rollNo || '',
      bloodGroup: student.bloodGroup || 'O+',
      house: student.house || 'Phoenix (Red House)',
      fatherName: student.parents?.fatherName || '',
      fatherMobile: student.parents?.fatherMobile || '',
      address: student.parents?.address || '',
      status: student.status || 'Active',
      photo: student.photo || ''
    });
    setIsEditModalOpen(true);
  };

  // Submit Edit Form
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const branchObj = branches.find(b => b.id === editFormData.branchId);
    const updated = schoolService.updateStudent(editFormData.id, {
      name: editFormData.name,
      branchId: editFormData.branchId,
      branchName: branchObj?.name,
      class: editFormData.class,
      section: editFormData.section,
      rollNo: editFormData.rollNo,
      bloodGroup: editFormData.bloodGroup,
      house: editFormData.house,
      status: editFormData.status,
      photo: editFormData.photo || selectedStudent?.photo,
      parents: {
        ...selectedStudent?.parents,
        fatherName: editFormData.fatherName,
        fatherMobile: editFormData.fatherMobile,
        address: editFormData.address
      }
    });

    refreshData();
    setIsEditModalOpen(false);
    if (selectedStudent && selectedStudent.id === editFormData.id) {
      setSelectedStudent(updated);
    }
    showToast(`Student record for ${editFormData.name} updated successfully! ✏️`, 'success');
  };

  // Handle Quick Fee Collection from Student Profile
  const handleCollectFeeSubmit = (e) => {
    e.preventDefault();
    if (!selectedStudent) return;

    const receipt = schoolService.collectFee({
      studentId: selectedStudent.id,
      studentName: selectedStudent.name,
      class: `${selectedStudent.class}-${selectedStudent.section}`,
      rollNo: selectedStudent.rollNo,
      amount: Number(feeForm.amount),
      paidAmount: Number(feeForm.amount),
      paymentMode: feeForm.paymentMode,
      feeType: feeForm.feeType,
      remarks: feeForm.remarks
    });

    // Update Student Fee Summary
    schoolService.updateStudent(selectedStudent.id, {
      feeSummary: {
        totalDue: Math.max(0, (selectedStudent.feeSummary?.totalDue || 45000) - Number(feeForm.amount)),
        totalPaid: (selectedStudent.feeSummary?.totalPaid || 0) + Number(feeForm.amount),
        balance: Math.max(0, (selectedStudent.feeSummary?.balance || 45000) - Number(feeForm.amount)),
        status: "Paid"
      }
    });

    refreshData();
    setIsCollectFeeModalOpen(false);
    setGeneratedReceipt(receipt);
    setIsReceiptModalOpen(true);
    showToast(`Fee payment of ₹${Number(feeForm.amount).toLocaleString('en-IN')} collected! Receipt: ${receipt.receiptNo} 🧾`, 'success');
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete student record for ${name}?`)) {
      schoolService.deleteStudent(id);
      refreshData();
      if (selectedStudent?.id === id) setSelectedStudent(null);
      showToast(`Student record for ${name} removed`, 'info');
    }
  };

  // Download Sample Excel/CSV Template
  const handleDownloadSampleCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," +
      "AdmissionNo,RollNo,StudentName,Class,Section,Gender,FatherName,FatherMobile,MotherName,DOB,BloodGroup,Address\n" +
      "ADM-2026-001,101,Aman Rajput,Class 10,A,Male,Rajesh Kumar,9758975880,Sunita Devi,2010-05-15,O+,Jargwan Bulandshahr\n" +
      "ADM-2026-002,102,Km. Riya Sharma,Class 9,A,Female,Mukesh Sharma,9837123456,Anita Sharma,2011-08-20,B+,Aligarh\n" +
      "ADM-2026-003,103,Rohit Singh,Class 8,B,Male,Dharmendra Singh,9627032626,Geeta Singh,2012-01-10,A+,Barheti Aligarh";
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "DMPS_Students_Import_Template.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Sample CSV template downloaded! 📥', 'info');
  };

  // Parse Uploaded CSV / Excel File
  const handleCSVFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImportError('');
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const text = event.target.result;
        const lines = text.split(/\r\n|\n/).filter(line => line.trim().length > 0);
        
        if (lines.length < 2) {
          setImportError('File is empty or does not have data rows.');
          return;
        }

        const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/[^a-z0-9]/g, ''));
        const parsedRows = [];

        for (let i = 1; i < lines.length; i++) {
          const cols = lines[i].split(',').map(c => c.trim().replace(/^["']|["']$/g, ''));
          if (cols.length === 0 || !cols[0]) continue;

          const rowData = {};
          headers.forEach((h, idx) => {
            rowData[h] = cols[idx] || '';
          });

          // Map smart variations of field names
          const studentName = rowData['studentname'] || rowData['name'] || rowData['student'] || cols[2] || cols[0] || 'New Student';
          const rollNo = rowData['rollno'] || rowData['roll'] || cols[1] || '';
          const admNo = rowData['admissionno'] || rowData['admno'] || rowData['admission'] || cols[0] || '';
          const studentClass = rowData['class'] || cols[3] || 'Class 1';
          const section = rowData['section'] || cols[4] || 'A';
          const gender = rowData['gender'] || cols[5] || 'Male';
          const fatherName = rowData['fathername'] || rowData['father'] || cols[6] || '';
          const fatherMobile = rowData['fathermobile'] || rowData['mobile'] || rowData['phone'] || cols[7] || '';
          const motherName = rowData['mothername'] || rowData['mother'] || cols[8] || '';
          const dob = rowData['dob'] || cols[9] || '2014-01-01';
          const bloodGroup = rowData['bloodgroup'] || cols[10] || 'O+';
          const address = rowData['address'] || cols[11] || 'Aligarh / Bulandshahr';

          parsedRows.push({
            name: studentName,
            rollNo: rollNo,
            admissionNo: admNo,
            class: studentClass.startsWith('Class') ? studentClass : `Class ${studentClass}`,
            section: section,
            gender: gender,
            fatherName: fatherName,
            fatherMobile: fatherMobile,
            motherName: motherName,
            dob: dob,
            bloodGroup: bloodGroup,
            address: address,
            branchId: targetBranchForImport
          });
        }

        if (parsedRows.length === 0) {
          setImportError('Could not find any student records in the file.');
          return;
        }

        setImportedStudentsList(parsedRows);
        showToast(`Successfully parsed ${parsedRows.length} student records! Please review & confirm.`, 'success');
      } catch (err) {
        setImportError('Failed to parse file: ' + err.message);
      }
    };

    reader.readAsText(file);
  };

  // Confirm Bulk Student Import
  const handleConfirmBulkImport = () => {
    if (importedStudentsList.length === 0) return;

    schoolService.bulkAddStudents(importedStudentsList);
    refreshData();
    setIsImportModalOpen(false);
    showToast(`🎉 Successfully imported ${importedStudentsList.length} students into ERP Database!`, 'success');
    setImportedStudentsList([]);
  };

  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.rollNo.includes(searchQuery) || (s.admissionNo && s.admissionNo.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesClass = classFilter === 'All' || s.class === classFilter;
    return matchesSearch && matchesClass;
  });

  const totalBoys = filteredStudents.filter(s => s.gender === 'Male').length;
  const totalGirls = filteredStudents.filter(s => s.gender === 'Female').length;
  const totalFeesCollected = filteredStudents.reduce((acc, s) => acc + (s.feeSummary?.totalPaid || 0), 0);

  const schoolInfo = schoolService.getSchoolInfo();

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* 🏛️ Top Campus Banner & Access Security Info */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700 flex items-center justify-center text-amber-700 dark:text-amber-300 shadow-sm shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 border border-amber-300">
                {activeBranch?.shortCode || 'CAMPUS'}
              </span>
              <h2 className="text-base sm:text-lg font-black text-[#0b1e38] dark:text-white font-serif">
                {activeBranch?.name || 'All Campuses (Consolidated Overview)'}
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {isSuperAdmin
                ? 'Super Admin Access • Viewing & Managing records for this selected branch.'
                : `Logged in as ${user?.role} • Restricted to your assigned campus records.`}
            </p>
          </div>
        </div>

        {/* Super Admin Quick Branch Switcher Chips */}
        {isSuperAdmin && (
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700 flex-wrap sm:flex-nowrap">
            <button
              onClick={() => setActiveBranchId('BR-01')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeBranchId === 'BR-01' ? 'bg-[#0b1e38] text-white shadow' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              🏢 Senior (Jargwan)
            </button>
            <button
              onClick={() => setActiveBranchId('BR-02')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeBranchId === 'BR-02' ? 'bg-[#0b1e38] text-white shadow' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              🏫 Barheti (Aligarh)
            </button>
            <button
              onClick={() => setActiveBranchId('BR-03')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeBranchId === 'BR-03' ? 'bg-[#0b1e38] text-white shadow' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              🏫 Kids School (PAC)
            </button>
            <button
              onClick={() => setActiveBranchId('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeBranchId === 'all' ? 'bg-[#0b1e38] text-white shadow' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              🌐 All (Consolidated)
            </button>
          </div>
        )}
      </div>

      {/* 📊 Campus KPI Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Branch Enrolled</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">{filteredStudents.length}</div>
          <span className="text-[10px] text-sky-600 font-semibold">{activeBranch?.classesOffered || 'Active Classes'}</span>
        </div>

        <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Gender Diversity</span>
          <div className="text-2xl font-black text-indigo-600 font-mono">{totalBoys}B • {totalGirls}G</div>
          <span className="text-[10px] text-slate-500 font-semibold">Boys & Girls Ratio</span>
        </div>

        <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Fee Collection</span>
          <div className="text-2xl font-black text-emerald-600 font-mono">₹{totalFeesCollected.toLocaleString('en-IN')}</div>
          <span className="text-[10px] text-emerald-600 font-semibold">Collected this Session</span>
        </div>

        <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Average Attendance</span>
          <div className="text-2xl font-black text-amber-600 font-mono">94.8%</div>
          <span className="text-[10px] text-slate-500 font-semibold">Active Presence Rate</span>
        </div>
      </div>

      {/* Page Header Actions & Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-indigo-600" /> Student Enrollment & Profiles
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Managing students of <strong>{activeBranch?.name}</strong>.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => { setImportedStudentsList([]); setImportError(''); setIsImportModalOpen(true); }}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-500/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <Upload className="w-4 h-4" /> Import Excel / CSV
          </button>

          <button
            onClick={() => setIsAdmissionModalOpen(true)}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-500/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <Plus className="w-4 h-4" /> New Student Admission
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by student name, roll number, or adm no..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
            <Filter className="w-4 h-4 text-indigo-600" /> Filter Class:
          </div>
          <select
            value={classFilter}
            onChange={(e) => setClassFilter(e.target.value)}
            className="p-2 text-xs font-bold rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none"
          >
            <option value="All">All Grades in this Campus</option>
            <option value="Playgroup">Playgroup</option>
            <option value="Nursery">Nursery</option>
            <option value="LKG">LKG</option>
            <option value="UKG">UKG</option>
            <option value="Class 1">Class 1</option>
            <option value="Class 2">Class 2</option>
            <option value="Class 5">Class 5</option>
            <option value="Class 6">Class 6</option>
            <option value="Class 7">Class 7</option>
            <option value="Class 8">Class 8</option>
            <option value="Class 10">Class 10</option>
            <option value="Class 12">Class 12</option>
          </select>
        </div>
      </div>

      {/* Students Table with Branch Badge */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                <th className="p-4">Student Profile</th>
                <th className="p-4">Campus / Branch</th>
                <th className="p-4">Admission No</th>
                <th className="p-4">Class & Sec</th>
                <th className="p-4">Roll No</th>
                <th className="p-4">Parent Details</th>
                <th className="p-4">Attendance</th>
                <th className="p-4">Fee Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan="9" className="p-8 text-center text-slate-500 text-xs">
                    No student records found for {activeBranch?.name}.
                  </td>
                </tr>
              ) : (
                filteredStudents.map(student => (
                  <tr
                    key={student.id}
                    onClick={() => setSelectedStudent(student)}
                    className="hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img src={student.photo} alt={student.name} className="w-9 h-9 rounded-xl object-cover ring-1 ring-slate-200 dark:ring-slate-700" />
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white text-xs">{student.name}</p>
                          <p className="text-[10px] text-slate-400">{student.gender} • Blood: {student.bloodGroup}</p>
                        </div>
                      </div>
                    </td>

                    <td className="p-4">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        student.branchId === 'BR-01' ? 'bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200' :
                        student.branchId === 'BR-02' ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200' :
                        'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200'
                      }`}>
                        {student.branchId === 'BR-01' ? '🏢 Senior Jargwan' : student.branchId === 'BR-02' ? '🏫 Barheti Campus' : '🏫 Kids School PAC'}
                      </span>
                    </td>

                    <td className="p-4 font-mono font-bold text-slate-700 dark:text-slate-300">{student.admissionNo}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{student.class} - {student.section}</td>
                    <td className="p-4 font-mono font-bold text-indigo-600">#{student.rollNo}</td>
                    <td className="p-4">
                      <p className="font-semibold text-slate-800 dark:text-slate-200">{student.parents?.fatherName}</p>
                      <p className="text-[10px] text-slate-400">{student.parents?.fatherMobile}</p>
                    </td>
                    <td className="p-4">
                      <span className="font-bold text-emerald-600">{student.attendanceSummary?.percentage || 95.4}%</span>
                    </td>
                    <td className="p-4">
                      <Badge variant={student.feeSummary?.status === 'Paid' ? 'success' : 'warning'}>
                        {student.feeSummary?.status || 'Paid'}
                      </Badge>
                    </td>
                    <td className="p-4 text-right" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => setSelectedStudent(student)}
                          title="View 360° Profile"
                          className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => openEditModal(student)}
                          title="Edit Student Information"
                          className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 hover:bg-amber-100"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(student.id, student.name)}
                          title="Delete Student Record"
                          className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 hover:bg-rose-100"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 🌟 360° Student Profile Modal */}
      <Modal
        isOpen={!!selectedStudent}
        onClose={() => setSelectedStudent(null)}
        title="Student 360° Comprehensive Profile"
        maxWidth="max-w-4xl"
      >
        {selectedStudent && (
          <div className="space-y-6 text-xs">
            {/* Top Identity Card */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 rounded-2xl border border-indigo-100 dark:border-indigo-900/50">
              <div className="flex items-center gap-4">
                <img src={selectedStudent.photo} alt={selectedStudent.name} className="w-16 h-16 rounded-2xl object-cover shadow-md ring-2 ring-indigo-500/20" />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">{selectedStudent.name}</h3>
                    <Badge variant="primary">Roll #{selectedStudent.rollNo}</Badge>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{selectedStudent.class} • Section {selectedStudent.section} • {selectedStudent.branchName}</p>
                  <p className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">Adm No: {selectedStudent.admissionNo}</p>
                </div>
              </div>

              {/* Action Buttons: 💳 Collect Fee & ✏️ Edit */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setIsCollectFeeModalOpen(true)}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-md shadow-emerald-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
                >
                  <CreditCard className="w-4 h-4" /> Collect Fee (POS)
                </button>
                <button
                  onClick={() => { openEditModal(selectedStudent); setSelectedStudent(null); }}
                  className="px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold shadow-md shadow-amber-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
                >
                  <Edit className="w-4 h-4" /> Edit Student
                </button>
                <button
                  onClick={() => setIsIdCardModalOpen(true)}
                  className="px-3 py-2 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-xl font-bold border border-indigo-200 dark:border-indigo-800 flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4" /> ID Card
                </button>
                <button
                  onClick={() => setIsReportCardModalOpen(true)}
                  className="px-3 py-2 bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 rounded-xl font-bold border border-purple-200 dark:border-purple-800 flex items-center gap-1.5"
                >
                  <Award className="w-4 h-4" /> Report Card
                </button>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Attendance Performance</span>
                <p className="text-xl font-black text-emerald-600 mt-1">{selectedStudent.attendanceSummary?.percentage || 95.4}%</p>
                <span className="text-[11px] text-slate-500">Present: 84 / 88 Days</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Fee Status</span>
                <p className="text-xl font-black text-indigo-600 mt-1">₹{selectedStudent.feeSummary?.totalPaid?.toLocaleString('en-IN') || "45,000"}</p>
                <span className="text-[11px] text-slate-500">Balance Due: ₹{selectedStudent.feeSummary?.balance?.toLocaleString('en-IN') || "0"}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Medical & Blood Group</span>
                <p className="text-xl font-black text-rose-600 mt-1 flex items-center gap-1">
                  <Droplet className="w-4 h-4" /> {selectedStudent.bloodGroup || "O+"}
                </p>
                <span className="text-[11px] text-slate-500">Physician Verified</span>
              </div>
            </div>

            {/* Parent & Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Phone className="w-4 h-4 text-indigo-600" /> Parent & Guardian Information
                </h4>
                <div className="text-slate-600 dark:text-slate-300 space-y-1">
                  <p>Father: <strong className="text-slate-900 dark:text-white">{selectedStudent.parents?.fatherName}</strong></p>
                  <p>Mobile: <strong className="text-slate-900 dark:text-white">{selectedStudent.parents?.fatherMobile}</strong></p>
                  <p>Mother: <strong className="text-slate-900 dark:text-white">{selectedStudent.parents?.motherName}</strong></p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Mail className="w-4 h-4 text-indigo-600" /> Address & Identification
                </h4>
                <div className="text-slate-600 dark:text-slate-300 space-y-1">
                  <p>Residential Address: {selectedStudent.parents?.address}</p>
                  <p>Aadhaar UID: <span className="font-mono">{selectedStudent.aadhaarNo || "1234-5678-9012"}</span></p>
                  <p>Category: {selectedStudent.category || "General"}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* ✏️ Edit Student Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Student Information"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleEditSubmit} className="space-y-4 text-xs">
          {/* Photo Picker in Edit Modal */}
          <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="w-14 h-14 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 overflow-hidden flex items-center justify-center shrink-0">
              {editFormData.photo ? (
                <img src={editFormData.photo} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <Camera className="w-6 h-6 text-slate-400" />
              )}
            </div>
            <div className="flex-1">
              <label className="font-bold text-slate-800 dark:text-slate-200 block">Student Passport Photo</label>
              <p className="text-[10px] text-slate-500">Auto-compressed for ID Card & Profile (~25KB)</p>
              <div className="flex items-center gap-2 mt-1.5">
                <input
                  type="file"
                  ref={editFileInputRef}
                  onChange={(e) => handlePhotoSelect(e, true)}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => editFileInputRef.current?.click()}
                  className="px-3 py-1 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300 hover:bg-indigo-100 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Upload className="w-3.5 h-3.5" /> Change Photo
                </button>
                {editFormData.photo && (
                  <button
                    type="button"
                    onClick={() => setEditFormData(prev => ({ ...prev, photo: '' }))}
                    className="text-xs text-rose-500 hover:text-rose-700 font-semibold"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Campus / Branch</label>
              {isSuperAdmin ? (
                <select
                  value={editFormData.branchId}
                  onChange={(e) => setEditFormData({ ...editFormData, branchId: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
                >
                  <option value="BR-01">DMPS Senior Campus (Jargwan)</option>
                  <option value="BR-02">DMPS Junior High (Barheti)</option>
                  <option value="BR-03">Dadheech Kids School (PAC)</option>
                </select>
              ) : (
                <input
                  type="text"
                  disabled
                  value={activeBranch?.name}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-500 font-semibold cursor-not-allowed"
                />
              )}
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Student Full Name *</label>
              <input
                type="text"
                required
                value={editFormData.name}
                onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Roll Number</label>
              <input
                type="text"
                required
                value={editFormData.rollNo}
                onChange={(e) => setEditFormData({ ...editFormData, rollNo: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Class</label>
              <select
                value={editFormData.class}
                onChange={(e) => setEditFormData({ ...editFormData, class: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              >
                <option value="Playgroup">Playgroup</option>
                <option value="Nursery">Nursery</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="Class 1">Class 1</option>
                <option value="Class 2">Class 2</option>
                <option value="Class 5">Class 5</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 7">Class 7</option>
                <option value="Class 8">Class 8</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Father's Name</label>
              <input
                type="text"
                value={editFormData.fatherName}
                onChange={(e) => setEditFormData({ ...editFormData, fatherName: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Father's Mobile</label>
              <input
                type="text"
                value={editFormData.fatherMobile}
                onChange={(e) => setEditFormData({ ...editFormData, fatherMobile: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button type="button" onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg">Save Changes</button>
          </div>
        </form>
      </Modal>

      {/* 💳 Quick Fee Collection POS Modal */}
      <Modal
        isOpen={isCollectFeeModalOpen}
        onClose={() => setIsCollectFeeModalOpen(false)}
        title="Point-of-Sale (POS) Fee Payment Counter"
        maxWidth="max-w-lg"
      >
        {selectedStudent && (
          <form onSubmit={handleCollectFeeSubmit} className="space-y-4 text-xs">
            <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
              <div>
                <h4 className="font-black text-emerald-900 dark:text-emerald-200 text-sm">{selectedStudent.name}</h4>
                <p className="text-[11px] text-emerald-700 dark:text-emerald-400">Roll #{selectedStudent.rollNo} • {selectedStudent.class}-{selectedStudent.section} • {selectedStudent.branchName}</p>
              </div>
              <span className="font-bold text-emerald-700 text-xs bg-white dark:bg-slate-900 px-3 py-1 rounded-xl border">
                Due: ₹{selectedStudent.feeSummary?.balance || "45,000"}
              </span>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Fee Category / Description</label>
              <input
                type="text"
                required
                value={feeForm.feeType}
                onChange={(e) => setFeeForm({ ...feeForm, feeType: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Amount to Collect (₹) *</label>
                <input
                  type="number"
                  required
                  value={feeForm.amount}
                  onChange={(e) => setFeeForm({ ...feeForm, amount: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-black text-sm"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Payment Mode *</label>
                <select
                  value={feeForm.paymentMode}
                  onChange={(e) => setFeeForm({ ...feeForm, paymentMode: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                >
                  <option value="UPI">UPI (GooglePay/PhonePe)</option>
                  <option value="Cash">Cash Counter</option>
                  <option value="Credit/Debit Card">Credit/Debit Card</option>
                  <option value="NetBanking">Net Banking</option>
                  <option value="Cheque">Cheque Deposit</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              <button type="button" onClick={() => setIsCollectFeeModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
              <button type="submit" className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg flex items-center gap-1.5">
                <CreditCard className="w-4 h-4" /> Collect & Generate Receipt
              </button>
            </div>
          </form>
        )}
      </Modal>

      {/* 🧾 Printable Fee Receipt Modal */}
      <Modal
        isOpen={isReceiptModalOpen}
        onClose={() => setIsReceiptModalOpen(false)}
        title="Official Fee Payment Receipt"
        maxWidth="max-w-3xl"
      >
        {generatedReceipt && (
          <PrintableFeeReceipt invoice={generatedReceipt} schoolInfo={schoolInfo} />
        )}
      </Modal>

      {/* ID Card Modal */}
      <Modal
        isOpen={isIdCardModalOpen}
        onClose={() => setIsIdCardModalOpen(false)}
        title="Official Student Identity Card"
        maxWidth="max-w-3xl"
      >
        {selectedStudent && (
          <PrintableIDCard person={selectedStudent} type="student" schoolInfo={schoolInfo} />
        )}
      </Modal>

      {/* Report Card Modal */}
      <Modal
        isOpen={isReportCardModalOpen}
        onClose={() => setIsReportCardModalOpen(false)}
        title="CBSE Official Student Report Card"
        maxWidth="max-w-4xl"
      >
        {selectedStudent && (
          <PrintableReportCard student={selectedStudent} examTerm="Half Yearly Examination 2026" schoolInfo={schoolInfo} />
        )}
      </Modal>

      {/* New Admission Modal */}
      <Modal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
        title="New Student Registration & Admission Form"
        maxWidth="max-w-2xl"
      >
        <form onSubmit={handleAdmissionSubmit} className="space-y-4 text-xs">
          {/* Photo Picker in Admission Form */}
          <div className="flex items-center gap-4 p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="w-16 h-16 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 overflow-hidden flex items-center justify-center shrink-0">
              {formData.photo ? (
                <img src={formData.photo} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <Camera className="w-6 h-6 text-slate-400" />
              )}
            </div>
            <div className="flex-1">
              <label className="font-bold text-slate-800 dark:text-slate-200 block">Student Passport Photo (Optional)</label>
              <p className="text-[10px] text-slate-500">Auto-compressed for ID Card, Attendance & Student Ledger (~25KB)</p>
              <div className="flex items-center gap-2 mt-1.5">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={(e) => handlePhotoSelect(e, false)}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3.5 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300 hover:bg-indigo-100 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Upload className="w-3.5 h-3.5" /> Upload Photo
                </button>
                {formData.photo && (
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, photo: '' }))}
                    className="text-xs text-rose-500 hover:text-rose-700 font-semibold"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Campus / Branch Assignment *</label>
              {isSuperAdmin ? (
                <select
                  value={formData.branchId}
                  onChange={(e) => setFormData({ ...formData, branchId: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                >
                  <option value="BR-01">DMPS Senior Campus (Jargwan)</option>
                  <option value="BR-02">DMPS Junior High (Barheti)</option>
                  <option value="BR-03">Dadheech Kids School (PAC)</option>
                </select>
              ) : (
                <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                  {activeBranch?.name}
                </div>
              )}
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Student Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Aman Rajput"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Date of Birth *</label>
              <input
                type="date"
                required
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Gender *</label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Blood Group</label>
              <select
                value={formData.bloodGroup}
                onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="O+">O+</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Class of Admission *</label>
              <select
                value={formData.class}
                onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="Playgroup">Playgroup</option>
                <option value="Nursery">Nursery</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="Class 1">Class 1</option>
                <option value="Class 2">Class 2</option>
                <option value="Class 3">Class 3</option>
                <option value="Class 4">Class 4</option>
                <option value="Class 5">Class 5</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 7">Class 7</option>
                <option value="Class 8">Class 8</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Section</label>
              <select
                value={formData.section}
                onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C">Section C</option>
              </select>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white">
            Parent & Guardian Contact
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Father's Name *</label>
              <input
                type="text"
                required
                value={formData.fatherName}
                onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                placeholder="Father's full name"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Father's Mobile *</label>
              <input
                type="text"
                required
                value={formData.fatherMobile}
                onChange={(e) => setFormData({ ...formData, fatherMobile: e.target.value })}
                placeholder="+91 98110 00000"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Residential Address</label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="House/Street, Area, City"
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button type="button" onClick={() => setIsAdmissionModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-indigo-600 text-white font-bold rounded-xl shadow-lg">Submit Admission</button>
          </div>
        </form>
      </Modal>

      {/* 📤 Bulk Excel / CSV Students Import Modal */}
      <Modal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        title="Import Students from Excel / CSV Sheet"
        maxWidth="max-w-3xl"
      >
        <div className="space-y-5 text-xs">
          {/* Instructions & Template Download Bar */}
          <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h4 className="font-bold text-indigo-900 dark:text-indigo-200 text-xs">Need standard Excel/CSV format?</h4>
              <p className="text-[11px] text-indigo-700/80 dark:text-indigo-300/80 mt-0.5">
                Download our pre-formatted template with all columns (Roll No, Name, Class, Father Name, Phone, etc.).
              </p>
            </div>
            <button
              onClick={handleDownloadSampleCSV}
              className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 font-bold text-xs flex items-center gap-1.5 shadow-sm hover:bg-indigo-100 dark:hover:bg-slate-800 transition-colors shrink-0"
            >
              <span>📥 Download Sample CSV</span>
            </button>
          </div>

          {/* Campus Target Selector */}
          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Target Campus Branch for Imported Students *</label>
            <select
              value={targetBranchForImport}
              onChange={(e) => setTargetBranchForImport(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
            >
              <option value="BR-01">🏢 Dadheech Memorial Public School, Jargwan - Main Campus</option>
              <option value="BR-02">🏫 Dadheech Memorial Public School, Barheti</option>
              <option value="BR-03">🧸 Dadheech Kids School, Vinay Nagar (Aligarh)</option>
            </select>
          </div>

          {/* File Upload Drop Zone */}
          <div
            onClick={() => csvFileInputRef.current && csvFileInputRef.current.click()}
            className="p-8 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-3xl text-center cursor-pointer hover:border-emerald-500 dark:hover:border-emerald-400 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20 transition-all space-y-2"
          >
            <input
              type="file"
              ref={csvFileInputRef}
              onChange={handleCSVFileChange}
              accept=".csv, .txt"
              className="hidden"
            />
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
              <Upload className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">
              Click to browse or drag & drop CSV file
            </h4>
            <p className="text-slate-500 text-[11px]">
              Supports standard comma-separated (.csv) files exported from Excel, Smart School, or any ERP
            </p>
          </div>

          {importError && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 font-bold">
              {importError}
            </div>
          )}

          {/* Live Preview Table */}
          {importedStudentsList.length > 0 && (
            <div className="space-y-2 animate-in fade-in">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 dark:text-white">
                  Preview ({importedStudentsList.length} Students Ready to Import)
                </span>
                <span className="text-emerald-600 font-bold text-[11px]">✓ Validated</span>
              </div>

              <div className="max-h-48 overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800 text-slate-500 font-bold border-b border-slate-200 dark:border-slate-800">
                      <th className="p-2.5">Roll No</th>
                      <th className="p-2.5">Student Name</th>
                      <th className="p-2.5">Class</th>
                      <th className="p-2.5">Father's Name</th>
                      <th className="p-2.5">Mobile</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {importedStudentsList.slice(0, 10).map((st, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                        <td className="p-2.5 font-mono font-bold text-indigo-600">{st.rollNo || idx + 1}</td>
                        <td className="p-2.5 font-bold text-slate-900 dark:text-white">{st.name}</td>
                        <td className="p-2.5 text-slate-600 dark:text-slate-300">{st.class} ({st.section})</td>
                        <td className="p-2.5 text-slate-600 dark:text-slate-300">{st.fatherName || '-'}</td>
                        <td className="p-2.5 font-mono text-slate-500">{st.fatherMobile || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {importedStudentsList.length > 10 && (
                <p className="text-[10px] text-slate-400 text-center">
                  + {importedStudentsList.length - 10} more students...
                </p>
              )}
            </div>
          )}

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsImportModalOpen(false)}
              className="px-4 py-2 text-slate-500 font-bold"
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={importedStudentsList.length === 0}
              onClick={handleConfirmBulkImport}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-black rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Confirm & Import {importedStudentsList.length > 0 ? `(${importedStudentsList.length}) Students` : ''}</span>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default StudentsPage;
