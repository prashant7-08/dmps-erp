import React, { useState, useEffect } from 'react';
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
  Award
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import { PrintableIDCard } from '../components/printables/PrintableIDCard';
import { PrintableReportCard } from '../components/printables/PrintableReportCard';
import { PrintableFeeReceipt } from '../components/printables/PrintableFeeReceipt';
import schoolService from '../services/schoolService';

export const StudentsPage = ({ initialSelectedStudent = null }) => {
  const { showToast } = useToast();
  const [students, setStudents] = useState(schoolService.getStudents());
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

  // Edit Form State
  const [editFormData, setEditFormData] = useState({
    id: '',
    name: '',
    class: 'Class 10',
    section: 'A',
    rollNo: '',
    bloodGroup: 'O+',
    house: 'Phoenix (Red House)',
    fatherName: '',
    fatherMobile: '',
    address: '',
    status: 'Active'
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
    address: ''
  });

  useEffect(() => {
    if (initialSelectedStudent) {
      setSelectedStudent(initialSelectedStudent);
    }
  }, [initialSelectedStudent]);

  const refreshData = () => {
    setStudents([...schoolService.getStudents()]);
  };

  const handleAdmissionSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.fatherName) {
      showToast('Please fill all required student details', 'warning');
      return;
    }

    const newStudent = schoolService.addStudent({
      name: formData.name,
      dob: formData.dob,
      gender: formData.gender,
      bloodGroup: formData.bloodGroup,
      class: formData.class,
      section: formData.section,
      house: formData.house,
      category: formData.category,
      aadhaarNo: formData.aadhaarNo,
      photo: `https://images.unsplash.com/photo-${formData.gender === 'Female' ? '1494790108377-be9c29b29330' : '1539571696357-5a69c17a67c6'}?w=150&auto=format&fit=crop&q=80`,
      parents: {
        fatherName: formData.fatherName,
        fatherMobile: formData.fatherMobile || '+91 98110 00000',
        motherName: formData.motherName || 'Mother',
        email: formData.email || 'parent@example.com',
        address: formData.address || 'Knowledge Park, New Delhi',
        emergencyContact: formData.fatherMobile || '+91 98110 00000'
      }
    });

    refreshData();
    setIsAdmissionModalOpen(false);
    showToast(`Student ${newStudent.name} admitted successfully! (Roll: ${newStudent.rollNo})`, 'success');
  };

  // Open Edit Modal with prefilled values
  const openEditModal = (student) => {
    setEditFormData({
      id: student.id,
      name: student.name,
      class: student.class,
      section: student.section,
      rollNo: student.rollNo,
      bloodGroup: student.bloodGroup || 'O+',
      house: student.house || 'Phoenix (Red House)',
      fatherName: student.parents?.fatherName || '',
      fatherMobile: student.parents?.fatherMobile || '',
      address: student.parents?.address || '',
      status: student.status || 'Active'
    });
    setIsEditModalOpen(true);
  };

  // Submit Edit Form
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updated = schoolService.updateStudent(editFormData.id, {
      name: editFormData.name,
      class: editFormData.class,
      section: editFormData.section,
      rollNo: editFormData.rollNo,
      bloodGroup: editFormData.bloodGroup,
      house: editFormData.house,
      status: editFormData.status,
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

  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.rollNo.includes(searchQuery) || s.admissionNo.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = classFilter === 'All' || s.class === classFilter;
    return matchesSearch && matchesClass;
  });

  const schoolInfo = schoolService.getSchoolInfo();

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <GraduationCap className="w-7 h-7 text-indigo-600" /> Student Enrollment & 360° Profiles
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Complete student directory, admissions registry, academic records, instant fee POS & ID card generator.
          </p>
        </div>
        <button
          onClick={() => setIsAdmissionModalOpen(true)}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-500/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
        >
          <Plus className="w-4 h-4" /> New Student Admission
        </button>
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
            <option value="All">All Classes (1 to 12)</option>
            <option value="Class 10">Class 10</option>
            <option value="Class 11">Class 11</option>
            <option value="Class 12">Class 12</option>
            <option value="Class 9">Class 9</option>
          </select>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                <th className="p-4">Student Profile</th>
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
              {filteredStudents.map(student => (
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
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 🌟 360° Student Profile Modal (With 1-Click Fee Collection & Edit Buttons) */}
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
                  <p className="text-xs text-slate-500 mt-0.5">{selectedStudent.class} • Section {selectedStudent.section} • House: {selectedStudent.house}</p>
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

            {/* Linked Siblings Box */}
            <div className="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-purple-950 dark:text-purple-200 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-purple-600" /> Linked Siblings & Family Members
                </h4>
                <span className="text-[11px] font-semibold text-purple-700 dark:text-purple-300">
                  {schoolService.getLinkedSiblings(selectedStudent.id).length} Siblings Linked
                </span>
              </div>
              {schoolService.getLinkedSiblings(selectedStudent.id).length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {schoolService.getLinkedSiblings(selectedStudent.id).map(sib => (
                    <div
                      key={sib.id}
                      className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 flex items-center justify-between"
                    >
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">{sib.name}</p>
                        <span className="text-[10px] text-slate-500">{sib.class}-{sib.section} • Roll #{sib.rollNo} • Father: {sib.parents?.fatherName}</span>
                      </div>
                      <span className="text-xs font-bold text-rose-600">
                        Due: ₹{sib.feeSummary?.balance?.toLocaleString('en-IN') || 0}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic">No siblings linked to this student yet. You can assign siblings anytime from the Fees POS module.</p>
              )}
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
          <div className="grid grid-cols-2 gap-4">
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
                <option value="Class 10">Class 10</option>
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
                <option value="Class 9">Class 9</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Section</label>
              <select
                value={editFormData.section}
                onChange={(e) => setEditFormData({ ...editFormData, section: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              >
                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C">Section C</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Blood Group</label>
              <select
                value={editFormData.bloodGroup}
                onChange={(e) => setEditFormData({ ...editFormData, bloodGroup: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              >
                <option value="O+">O+</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="O-">O-</option>
              </select>
            </div>
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
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Father's Mobile Contact</label>
              <input
                type="text"
                value={editFormData.fatherMobile}
                onChange={(e) => setEditFormData({ ...editFormData, fatherMobile: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Enrollment Status</label>
              <select
                value={editFormData.status}
                onChange={(e) => setEditFormData({ ...editFormData, status: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Alumni">Alumni / Transferred</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Residential Address</label>
            <input
              type="text"
              value={editFormData.address}
              onChange={(e) => setEditFormData({ ...editFormData, address: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button type="button" onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg">Save Changes</button>
          </div>
        </form>
      </Modal>

      {/* 💳 Quick Fee Collection POS Modal (Direct from Student Profile) */}
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
                <p className="text-[11px] text-emerald-700 dark:text-emerald-400">Roll #{selectedStudent.rollNo} • {selectedStudent.class}-{selectedStudent.section}</p>
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

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Cashier Remarks</label>
              <input
                type="text"
                value={feeForm.remarks}
                onChange={(e) => setFeeForm({ ...feeForm, remarks: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
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
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Student Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Aarav Sharma"
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
                <option value="Class 10">Class 10</option>
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 8">Class 8</option>
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
    </div>
  );
};
