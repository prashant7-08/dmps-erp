import React, { useState, useRef } from 'react';
import {
  UserPlus,
  Building2,
  GraduationCap,
  Users,
  Bus,
  FileText,
  Upload,
  CheckCircle2,
  Phone,
  MapPin,
  Lock,
  User,
  KeyRound,
  X
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { useToast } from '../components/common/Toast';
import { useAuth } from '../context/AuthContext';
import schoolService from '../services/schoolService';

export const StudentAdmissionPage = ({ onAdmissionComplete, onCancel }) => {
  const { showToast } = useToast();
  const { activeBranchId, branches } = useAuth();

  const [createdStudent, setCreatedStudent] = useState(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    // 1. Academic Details
    academicSession: '2026-2027',
    branchId: activeBranchId === 'all' ? 'BR-01' : activeBranchId,
    registerNo: '',
    rollNo: '',
    admissionDate: new Date().toISOString().split('T')[0],
    class: '',
    section: 'A',
    admissionNo: '',

    // 2. Student Details
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    bloodGroup: '',
    motherTongue: '',
    category: '',
    religion: '',
    caste: '',
    aadhaarNo: '',
    nameAsPerAadhaar: '',
    penNo: '',
    mobileNo: '',
    heightCms: '',
    weightKg: '',
    houseMobileNo: '',
    presentAddress: '',
    permanentAddress: '',
    photo: '',

    // 3. Parent & Guardian Details
    guardianAlreadyExist: false,
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
    guardianPhoto: '',
    parentUsername: '',
    parentPassword: '',
    studentUsername: '',
    studentPassword: '',

    // 4. Transport Details
    facilityType: 'None', // 'Transport' | 'Hostel' | 'Both' | 'None'
    transportRoute: '',
    transportStop: '',
    transportVehicle: '',

    // 5. Hostel Details
    hostelName: '',
    hostelRoom: '',

    // 6. Previous School Details
    previousSchoolName: '',
    previousClass: '',
    previousTcNo: '',
    previousRemarks: ''
  });

  // Fast Client-Side Image Compressor (5MB -> 25KB WebP/JPEG)
  const handlePhotoUpload = (e, field) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showToast('Please select a valid image file (JPG, PNG, WebP)', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_DIM = 400;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_DIM) {
            height *= MAX_DIM / width;
            width = MAX_DIM;
          }
        } else {
          if (height > MAX_DIM) {
            width *= MAX_DIM / height;
            height = MAX_DIM;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.85);
        setFormData(prev => ({
          ...prev,
          [field]: compressedDataUrl
        }));
        showToast('Photo uploaded and optimized successfully! 📸', 'success');
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  // Handle Form Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Submit Admission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName.trim()) {
      showToast('Student First Name is required!', 'error');
      return;
    }
    if (!formData.class) {
      showToast('Please select a Class for admission!', 'error');
      return;
    }
    if (!formData.fatherName.trim()) {
      showToast("Father's Name is required!", 'error');
      return;
    }
    if (!formData.fatherMobile.trim()) {
      showToast("Father's Mobile number is required!", 'error');
      return;
    }

    const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim();
    const branchObj = branches?.find(b => b.id === formData.branchId) || {
      id: formData.branchId,
      name: formData.branchId === 'BR-02' ? 'Dadheech Memorial Public School (Barheti Campus)' : formData.branchId === 'BR-03' ? 'Dadheech Kids School (Vinay Nagar PAC)' : 'Dadheech Memorial Public School (Main Campus)'
    };

    const autoReg = formData.registerNo.trim() || `REG-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const autoAdm = formData.admissionNo.trim() || `ADM-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const autoRoll = formData.rollNo.trim() || String(Math.floor(100 + Math.random() * 900));

    const newStudentData = {
      name: fullName,
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      branchId: formData.branchId,
      branchName: branchObj.name,
      admissionNo: autoAdm,
      registerNo: autoReg,
      rollNo: autoRoll,
      admissionDate: formData.admissionDate || new Date().toISOString().split('T')[0],
      class: formData.class,
      section: formData.class === 'Class 3' ? (formData.section || 'A') : 'A',
      gender: formData.gender || 'Male',
      dob: formData.dob || '',
      bloodGroup: formData.bloodGroup || 'O+',
      motherTongue: formData.motherTongue || 'Hindi',
      category: formData.category || 'General',
      religion: formData.religion || 'Hindu',
      caste: formData.caste || '',
      aadhaarNo: formData.aadhaarNo || '',
      nameAsPerAadhaar: formData.nameAsPerAadhaar || '',
      penNo: formData.penNo || '',
      mobile: formData.mobileNo || formData.fatherMobile,
      heightCms: formData.heightCms || '',
      weightKg: formData.weightKg || '',
      address: formData.presentAddress || formData.permanentAddress || 'Aligarh / Bulandshahr',
      permanentAddress: formData.permanentAddress || '',
      photo: formData.photo || 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80',
      
      // Parents
      fatherName: formData.fatherName,
      fatherMobile: formData.fatherMobile,
      fatherOccupation: formData.fatherOccupation || '',
      fatherEducation: formData.fatherEducation || '',
      motherName: formData.motherName || '',
      motherMobile: formData.motherMobile || '',
      motherOccupation: formData.motherOccupation || '',
      motherEducation: formData.motherEducation || '',
      guardianName: formData.guardianName || formData.fatherName,
      guardianRelation: formData.guardianRelation || 'Father',
      guardianMobile: formData.guardianMobile || formData.fatherMobile,
      guardianAddress: formData.guardianAddress || formData.presentAddress || '',
      guardianPhoto: formData.guardianPhoto || '',

      // Credentials
      parentCredentials: {
        username: formData.parentUsername || `parent_${autoAdm.toLowerCase().replace(/[^a-z0-9]/g, '')}`,
        password: formData.parentPassword || 'parent@dmps2026'
      },
      studentCredentials: {
        username: formData.studentUsername || `student_${autoAdm.toLowerCase().replace(/[^a-z0-9]/g, '')}`,
        password: formData.studentPassword || 'student@dmps2026'
      },

      // Transport & Hostel
      transport: {
        route: formData.transportRoute || '',
        stoppage: formData.transportStop || '',
        vehicle: formData.transportVehicle || '',
        isOpted: formData.facilityType === 'Transport' || formData.facilityType === 'Both'
      },
      hostel: {
        name: formData.hostelName || '',
        room: formData.hostelRoom || '',
        isOpted: formData.facilityType === 'Hostel' || formData.facilityType === 'Both'
      },

      // Previous Academic
      previousSchool: {
        name: formData.previousSchoolName || '',
        qualification: formData.previousClass || '',
        tcNo: formData.previousTcNo || '',
        remarks: formData.previousRemarks || ''
      },

      status: 'Active'
    };

    const created = schoolService.addStudent(newStudentData);
    setCreatedStudent(created);
    setIsSuccessModalOpen(true);
    showToast(`🎉 New Student ${fullName} registered successfully! (Adm No: ${created.admissionNo})`, 'success');
  };

  const handleResetForm = () => {
    setFormData({
      academicSession: '2026-2027',
      branchId: activeBranchId === 'all' ? 'BR-01' : activeBranchId,
      registerNo: '',
      rollNo: '',
      admissionDate: new Date().toISOString().split('T')[0],
      class: '',
      section: 'A',
      admissionNo: '',
      firstName: '',
      lastName: '',
      gender: '',
      dob: '',
      bloodGroup: '',
      motherTongue: '',
      category: '',
      religion: '',
      caste: '',
      aadhaarNo: '',
      nameAsPerAadhaar: '',
      penNo: '',
      mobileNo: '',
      heightCms: '',
      weightKg: '',
      houseMobileNo: '',
      presentAddress: '',
      permanentAddress: '',
      photo: '',
      guardianAlreadyExist: false,
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
      guardianPhoto: '',
      parentUsername: '',
      parentPassword: '',
      studentUsername: '',
      studentPassword: '',
      facilityType: 'None',
      transportRoute: '',
      transportStop: '',
      transportVehicle: '',
      hostelName: '',
      hostelRoom: '',
      previousSchoolName: '',
      previousClass: '',
      previousTcNo: '',
      previousRemarks: ''
    });
    setIsSuccessModalOpen(false);
    setCreatedStudent(null);
  };

  const classesList = [
    'Play Group', 'Nursery', 'LKG', 'UKG',
    'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
    'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10',
    'Class 11 (Sci)', 'Class 11 (Comm)', 'Class 11 (Arts)',
    'Class 12 (Sci)', 'Class 12 (Comm)', 'Class 12 (Arts)'
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* 🏛️ Page Title Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm shrink-0">
            <UserPlus className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-200 border border-indigo-300">
                Session 2026-2027
              </span>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-serif">
                Student Admission Form
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Official student admission dossier. Clean blank entry to avoid accidental duplicate data.
            </p>
          </div>
        </div>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl transition-all"
          >
            ← Back to Student List
          </button>
        )}
      </div>

      {/* 📝 Full Clean Admission Form */}
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* ========================================================
            CARD 1: ACADEMIC DETAILS
        ======================================================== */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white tracking-wide uppercase">
                1. Academic Details
              </h3>
            </div>
            <span className="text-[11px] font-bold text-slate-400">Mandatory Fields *</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Academic Year *</label>
              <select
                name="academicSession"
                value={formData.academicSession}
                onChange={handleChange}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              >
                <option value="2026-2027">2026-2027 (Current Active)</option>
                <option value="2027-2028">2027-2028 (Upcoming)</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Campus Branch *</label>
              <select
                name="branchId"
                value={formData.branchId}
                onChange={handleChange}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              >
                <option value="BR-01">🏢 Senior Campus (Jargwan)</option>
                <option value="BR-02">🏫 Junior High (Barheti)</option>
                <option value="BR-03">🧸 Dadheech Kids School (Aligarh)</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Class *</label>
              <select
                required
                name="class"
                value={formData.class}
                onChange={handleChange}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              >
                <option value="">-- Select Class --</option>
                {classesList.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {formData.class === 'Class 3' && (
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Section (Class 3 Only) *</label>
                <select
                  name="section"
                  value={formData.section}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                >
                  <option value="A">Section A</option>
                  <option value="B">Section B</option>
                </select>
              </div>
            )}

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Admission Date *</label>
              <input
                type="date"
                required
                name="admissionDate"
                value={formData.admissionDate}
                onChange={handleChange}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Register No / SR No</label>
              <input
                type="text"
                name="registerNo"
                value={formData.registerNo}
                onChange={handleChange}
                placeholder="Leave blank to auto-generate"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Roll Number</label>
              <input
                type="text"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                placeholder="e.g. 101 (or auto)"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Admission No.</label>
              <input
                type="text"
                name="admissionNo"
                value={formData.admissionNo}
                onChange={handleChange}
                placeholder="Leave blank to auto-generate"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-medium"
              />
            </div>
          </div>
        </div>

        {/* ========================================================
            CARD 2: STUDENT PERSONAL DETAILS
        ======================================================== */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white tracking-wide uppercase">
                2. Student Personal Details
              </h3>
            </div>
            <span className="text-[11px] font-bold text-emerald-600">Student Profile</span>
          </div>

          {/* Photo Upload & Preview Row */}
          <div className="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <div className="relative group shrink-0">
              <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border-2 border-indigo-500 shadow-md flex items-center justify-center">
                {formData.photo ? (
                  <img src={formData.photo} alt="Student Preview" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-10 h-10 text-slate-300 dark:text-slate-600" />
                )}
              </div>
              {formData.photo && (
                <button
                  type="button"
                  onClick={() => setFormData(p => ({ ...p, photo: '' }))}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center shadow"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex-1 text-center sm:text-left space-y-1">
              <h4 className="font-bold text-slate-900 dark:text-white text-xs">Student Profile Photo</h4>
              <p className="text-[11px] text-slate-500">
                Upload passport size photo. Supports JPG, PNG. Automatic HD smart compression.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={(e) => handlePhotoUpload(e, 'photo')}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current && fileInputRef.current.click()}
                  className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <Upload className="w-3.5 h-3.5" /> Browse Photo
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">First Name *</label>
              <input
                type="text"
                required
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Gender *</label>
              <select
                required
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              >
                <option value="">-- Select Gender --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Blood Group</label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              >
                <option value="">-- Select Blood Group --</option>
                <option value="O+">O+</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="O-">O-</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Mother Tongue</label>
              <input
                type="text"
                name="motherTongue"
                value={formData.motherTongue}
                onChange={handleChange}
                placeholder="Hindi, English, etc."
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Categories</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              >
                <option value="">-- Select Category --</option>
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="EWS">EWS</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Religion</label>
              <select
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              >
                <option value="">-- Select Religion --</option>
                <option value="Hindu">Hindu</option>
                <option value="Muslim">Muslim</option>
                <option value="Sikh">Sikh</option>
                <option value="Christian">Christian</option>
                <option value="Jain">Jain</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Caste</label>
              <input
                type="text"
                name="caste"
                value={formData.caste}
                onChange={handleChange}
                placeholder="Enter Caste (Optional)"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Student's Aadhaar No.</label>
              <input
                type="text"
                name="aadhaarNo"
                value={formData.aadhaarNo}
                onChange={handleChange}
                placeholder="12-digit Aadhaar"
                maxLength="14"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Student's Name as per Aadhaar</label>
              <input
                type="text"
                name="nameAsPerAadhaar"
                value={formData.nameAsPerAadhaar}
                onChange={handleChange}
                placeholder="Name on Aadhaar Card"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">PEN No. (National PEN)</label>
              <input
                type="text"
                name="penNo"
                value={formData.penNo}
                onChange={handleChange}
                placeholder="Permanent Education Number"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Student Mobile No</label>
              <input
                type="text"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                placeholder="Student Contact Number"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Height (in cms)</label>
              <input
                type="text"
                name="heightCms"
                value={formData.heightCms}
                onChange={handleChange}
                placeholder="e.g. 120"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Weight (in kg)</label>
              <input
                type="text"
                name="weightKg"
                value={formData.weightKg}
                onChange={handleChange}
                placeholder="e.g. 25"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">House Mobile No.</label>
              <input
                type="text"
                name="houseMobileNo"
                value={formData.houseMobileNo}
                onChange={handleChange}
                placeholder="Alternate Landline / Mobile"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Present Address *</label>
              <textarea
                rows="2"
                required
                name="presentAddress"
                value={formData.presentAddress}
                onChange={handleChange}
                placeholder="House No, Village/Colony, Post, Tehsil, District, PIN..."
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              ></textarea>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Permanent Address</label>
              <textarea
                rows="2"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                placeholder="Same as present address or permanent domicile..."
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              ></textarea>
            </div>
          </div>
        </div>

        {/* ========================================================
            CARD 3: PARENT & GUARDIAN DETAILS
        ======================================================== */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white tracking-wide uppercase">
                3. Guardian Details & Portal Credentials
              </h3>
            </div>
            
            <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-indigo-600">
              <input
                type="checkbox"
                name="guardianAlreadyExist"
                checked={formData.guardianAlreadyExist}
                onChange={handleChange}
                className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>Guardian Already Exist (Sibling)</span>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Father Name *</label>
              <input
                type="text"
                required
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                placeholder="Father's full name"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Father Mobile No *</label>
              <input
                type="text"
                required
                name="fatherMobile"
                value={formData.fatherMobile}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Father Occupation</label>
              <input
                type="text"
                name="fatherOccupation"
                value={formData.fatherOccupation}
                onChange={handleChange}
                placeholder="Business / Service / Farming"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Father Education</label>
              <input
                type="text"
                name="fatherEducation"
                value={formData.fatherEducation}
                onChange={handleChange}
                placeholder="Graduate / Post Graduate"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Mother Name</label>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                placeholder="Mother's full name"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Mother Mobile No</label>
              <input
                type="text"
                name="motherMobile"
                value={formData.motherMobile}
                onChange={handleChange}
                placeholder="Mother's mobile number"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Mother Occupation</label>
              <input
                type="text"
                name="motherOccupation"
                value={formData.motherOccupation}
                onChange={handleChange}
                placeholder="Homemaker / Teacher / Other"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Mother Education</label>
              <input
                type="text"
                name="motherEducation"
                value={formData.motherEducation}
                onChange={handleChange}
                placeholder="Graduate / 12th / Other"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Guardian Name</label>
              <input
                type="text"
                name="guardianName"
                value={formData.guardianName}
                onChange={handleChange}
                placeholder="Guardian Name (if different)"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Guardian Relation</label>
              <input
                type="text"
                name="guardianRelation"
                value={formData.guardianRelation}
                onChange={handleChange}
                placeholder="Father / Mother / Uncle"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Guardian Mobile No</label>
              <input
                type="text"
                name="guardianMobile"
                value={formData.guardianMobile}
                onChange={handleChange}
                placeholder="Guardian Phone"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Guardian Address</label>
              <input
                type="text"
                name="guardianAddress"
                value={formData.guardianAddress}
                onChange={handleChange}
                placeholder="Guardian Residential Address"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              />
            </div>
          </div>

          {/* User Access Credentials Box */}
          <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-slate-800/80 border border-indigo-200 dark:border-slate-700 space-y-3">
            <div className="flex items-center gap-2 text-xs font-black text-indigo-900 dark:text-indigo-200 uppercase tracking-wider">
              <KeyRound className="w-4 h-4 text-indigo-600" />
              <span>Portal Login Credentials (Auto-Generated if left empty)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Parent's Username</label>
                <input
                  type="text"
                  name="parentUsername"
                  value={formData.parentUsername}
                  onChange={handleChange}
                  placeholder="Auto-generated if empty"
                  className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-xs font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Parent's Password</label>
                <input
                  type="text"
                  name="parentPassword"
                  value={formData.parentPassword}
                  onChange={handleChange}
                  placeholder="e.g. parent@dmps2026"
                  className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-xs font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Student's Username</label>
                <input
                  type="text"
                  name="studentUsername"
                  value={formData.studentUsername}
                  onChange={handleChange}
                  placeholder="Auto-generated if empty"
                  className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-xs font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Student's Password</label>
                <input
                  type="text"
                  name="studentPassword"
                  value={formData.studentPassword}
                  onChange={handleChange}
                  placeholder="e.g. student@dmps2026"
                  className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-xs font-medium"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            CARD 4: TRANSPORT & HOSTEL FACILITIES
        ======================================================== */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
                <Bus className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white tracking-wide uppercase">
                4. Transport & Hostel Facilities
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <label className="font-bold text-slate-600 dark:text-slate-300">Opt Facilities:</label>
              <select
                name="facilityType"
                value={formData.facilityType}
                onChange={handleChange}
                className="p-1.5 rounded-lg border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950 text-amber-900 dark:text-amber-200 font-bold"
              >
                <option value="None">None (Day Scholar)</option>
                <option value="Transport">School Bus Transport</option>
                <option value="Hostel">Hostel Accommodation</option>
                <option value="Both">Both (Transport + Hostel)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Transport Route</label>
              <select
                name="transportRoute"
                value={formData.transportRoute}
                onChange={handleChange}
                disabled={formData.facilityType !== 'Transport' && formData.facilityType !== 'Both'}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 disabled:opacity-50 text-slate-900 dark:text-white font-medium"
              >
                <option value="">-- Select Route --</option>
                <option value="Route 1 (Jargwan - Barheti - Aligarh)">Route 1 (Jargwan - Barheti - Aligarh)</option>
                <option value="Route 2 (PAC Ramghat Road - Vinay Nagar)">Route 2 (PAC Ramghat Road - Vinay Nagar)</option>
                <option value="Route 3 (Chharra - Harduaganj - Main Campus)">Route 3 (Chharra - Harduaganj - Main Campus)</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Stoppage / Pickup Point</label>
              <input
                type="text"
                name="transportStop"
                value={formData.transportStop}
                onChange={handleChange}
                disabled={formData.facilityType !== 'Transport' && formData.facilityType !== 'Both'}
                placeholder="Near Main Chauraha / Gate"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 disabled:opacity-50 text-slate-900 dark:text-white font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Hostel Name</label>
              <select
                name="hostelName"
                value={formData.hostelName}
                onChange={handleChange}
                disabled={formData.facilityType !== 'Hostel' && formData.facilityType !== 'Both'}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 disabled:opacity-50 text-slate-900 dark:text-white font-medium"
              >
                <option value="">-- Select Hostel --</option>
                <option value="Main Campus Boys Hostel">Main Campus Boys Hostel</option>
                <option value="Junior Girls Residency">Junior Girls Residency</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Hostel Room No</label>
              <input
                type="text"
                name="hostelRoom"
                value={formData.hostelRoom}
                onChange={handleChange}
                disabled={formData.facilityType !== 'Hostel' && formData.facilityType !== 'Both'}
                placeholder="Room 102 (Bed A)"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 disabled:opacity-50 text-slate-900 dark:text-white font-medium"
              />
            </div>
          </div>
        </div>

        {/* ========================================================
            CARD 5: PREVIOUS SCHOOL DETAILS
        ======================================================== */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white tracking-wide uppercase">
                5. Previous School Details
              </h3>
            </div>
            <span className="text-[11px] font-bold text-slate-400">Past Academic Record</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Previous School Name</label>
              <input
                type="text"
                name="previousSchoolName"
                value={formData.previousSchoolName}
                onChange={handleChange}
                placeholder="Enter Previous School Name"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Qualification / Class Passed</label>
              <input
                type="text"
                name="previousClass"
                value={formData.previousClass}
                onChange={handleChange}
                placeholder="e.g. Class UKG Passed (92%)"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Transfer Certificate (TC) No</label>
              <input
                type="text"
                name="previousTcNo"
                value={formData.previousTcNo}
                onChange={handleChange}
                placeholder="Enter TC Number"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-medium"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1 text-xs">Special Remarks / Notes</label>
            <input
              type="text"
              name="previousRemarks"
              value={formData.previousRemarks}
              onChange={handleChange}
              placeholder="Any special remarks or notes..."
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-medium"
            />
          </div>
        </div>

        {/* 🚀 Action Bar Bottom */}
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs text-slate-500 font-medium">
              Ready to submit. All records are validated and saved into ERP database.
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handleResetForm}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Reset Form
            </button>

            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-black shadow-xl shadow-indigo-500/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Save & Complete Student Admission</span>
            </button>
          </div>
        </div>
      </form>

      {/* 🎉 Admission Success & Printable ID Card Modal */}
      {isSuccessModalOpen && createdStudent && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-5 animate-in zoom-in-95 text-center">
            
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-black text-slate-900 dark:text-white font-serif">
                Admission Successful!
              </h3>
              <p className="text-xs text-slate-500">
                Student <strong className="text-slate-900 dark:text-white">{createdStudent.name}</strong> is now officially enrolled in <strong>{createdStudent.class}{createdStudent.class === 'Class 3' && createdStudent.section ? ` (${createdStudent.section})` : ''}</strong>.
              </p>
            </div>

            {/* Student Credential Capsule */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-left text-xs space-y-2 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-400">Admission No:</span>
                <span className="font-bold text-indigo-600">{createdStudent.admissionNo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Roll No:</span>
                <span className="font-bold text-slate-900 dark:text-white">#{createdStudent.rollNo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Campus:</span>
                <span className="font-bold text-slate-900 dark:text-white truncate max-w-[200px]">{createdStudent.branchName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Father's Mobile:</span>
                <span className="font-bold text-slate-900 dark:text-white">{createdStudent.fatherMobile}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleResetForm}
                className="flex-1 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                + Add Another Student
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsSuccessModalOpen(false);
                  if (onAdmissionComplete) onAdmissionComplete(createdStudent);
                }}
                className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-lg transition-all"
              >
                View Student Profile →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentAdmissionPage;
