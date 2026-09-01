import React, { useState, useEffect } from 'react';
import {
  Users,
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Printer,
  Mail,
  Phone,
  BookOpen,
  Award,
  DollarSign,
  Briefcase,
  GraduationCap,
  Upload,
  Download,
  CheckCircle2,
  FileSpreadsheet,
  Layers,
  Sparkles
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import { useAuth } from '../context/AuthContext';
import { PrintableIDCard } from '../components/printables/PrintableIDCard';
import { PrintablePaySlip } from '../components/printables/PrintablePaySlip';
import schoolService from '../services/schoolService';

export const StaffPage = ({ initialSubTab = 'staff', onOpenIDCards }) => {
  const { showToast } = useToast();
  const { activeBranchId } = useAuth();
  const [teachers, setTeachers] = useState(() => schoolService.getTeachers(activeBranchId));
  const [searchQuery, setSearchQuery] = useState('');
  const [deptFilter, setDeptFilter] = useState('All');
  
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isPaySlipModalOpen, setIsPaySlipModalOpen] = useState(false);
  const [isIdCardModalOpen, setIsIdCardModalOpen] = useState(false);
  const [isAddStaffModalOpen, setIsAddStaffModalOpen] = useState(false);
  const [isEditStaffModalOpen, setIsEditStaffModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  // Bulk CSV / Excel state
  const [csvText, setCsvText] = useState('');
  const [parsedPreview, setParsedPreview] = useState([]);

  // Auto handle sidebar sub-tab navigation
  useEffect(() => {
    if (initialSubTab === 'staff-add') {
      setIsAddStaffModalOpen(true);
    } else if (initialSubTab === 'staff-import') {
      setIsImportModalOpen(true);
    }
  }, [initialSubTab]);

  // Sync teachers when active branch changes
  useEffect(() => {
    setTeachers(schoolService.getTeachers(activeBranchId));
  }, [activeBranchId]);

  // Edit Teacher State
  const [editFormData, setEditFormData] = useState({
    id: '',
    name: '',
    department: 'Science',
    designation: 'PGT Physics',
    qualification: 'M.Sc., B.Ed.',
    mobile: '',
    email: '',
    classTeacherOf: 'Class 10 - A',
    basicSalary: 62000
  });

  const [formData, setFormData] = useState({
    name: '',
    department: 'Science',
    designation: 'PGT Faculty',
    qualification: 'M.Sc., B.Ed.',
    mobile: '',
    email: '',
    gender: 'Male',
    classTeacherOf: 'Class 10 - A'
  });

  const refreshData = () => {
    setTeachers([...schoolService.getTeachers(activeBranchId)]);
  };

  const handleDownloadSampleCsv = () => {
    const sampleHeader = 'Name,Department,Designation,Qualification,Mobile,Email,Gender,ClassTeacherOf,BasicSalary\n';
    const sampleRows = [
      'Dr. Vivek Agnihotri,Science,PGT Physics,"M.Sc., Ph.D.",9811200001,vivek.a@dpga.edu.in,Male,Class 12 - A,65000',
      'Meenakshi Sundaram,Mathematics,TGT Maths,"M.Sc., B.Ed.",9811200002,meenakshi.s@dpga.edu.in,Female,Class 9 - B,52000',
      'Sunil Gavaskar,Sports & PE,PET Director,B.P.Ed.,9811200003,sunil.g@dpga.edu.in,Male,None,45000'
    ].join('\n');

    const blob = new Blob([sampleHeader + sampleRows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'staff_import_sample_template.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('📥 Staff CSV sample template downloaded!', 'success');
  };

  const handleParseCsv = (text) => {
    setCsvText(text);
    if (!text.trim()) {
      setParsedPreview([]);
      return;
    }
    const lines = text.trim().split('\n');
    const header = lines[0].split(',').map(h => h.trim().replace(/^["']|["']$/g, ''));
    const rows = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      // Simple CSV regex match handling quoted values
      const cols = line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || line.split(',');
      const cleanCols = cols.map(c => c.trim().replace(/^["']|["']$/g, ''));

      if (cleanCols[0]) {
        rows.push({
          name: cleanCols[0] || 'Unknown',
          department: cleanCols[1] || 'General',
          designation: cleanCols[2] || 'Faculty',
          qualification: cleanCols[3] || 'Graduate',
          mobile: cleanCols[4] || '+91 98000 00000',
          email: cleanCols[5] || `${cleanCols[0].toLowerCase().replace(/\s+/g, '.')}@dpga.edu.in`,
          gender: cleanCols[6] || 'Male',
          classTeacherOf: cleanCols[7] || 'None',
          basicSalary: Number(cleanCols[8]) || 45000
        });
      }
    }
    setParsedPreview(rows);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      handleParseCsv(evt.target.result);
    };
    reader.readAsText(file);
  };

  const handleCommitBulkImport = () => {
    if (parsedPreview.length === 0) {
      showToast('No valid staff records to import', 'warning');
      return;
    }

    parsedPreview.forEach(p => {
      schoolService.addTeacher({
        name: p.name,
        department: p.department,
        designation: p.designation,
        qualification: p.qualification,
        mobile: p.mobile,
        email: p.email,
        gender: p.gender,
        classTeacherOf: p.classTeacherOf === 'None' ? '' : p.classTeacherOf,
        photo: `https://images.unsplash.com/photo-${p.gender === 'Female' ? '1573496359142-b8d87734a5a2' : '1534528741775-53994a69daeb'}?w=150&auto=format&fit=crop&q=80`,
        salary: {
          basic: p.basicSalary,
          hra: p.basicSalary * 0.25,
          da: p.basicSalary * 0.18,
          specialAllowance: 4500,
          pfDeduction: p.basicSalary * 0.12,
          taxDeduction: 5100,
          netSalary: Math.round(p.basicSalary * 1.31 - 5100)
        },
        bankDetails: { bankName: 'HDFC Bank', accountNo: '918237192837', ifsc: 'HDFC0001092' }
      });
    });

    refreshData();
    setIsImportModalOpen(false);
    setCsvText('');
    setParsedPreview([]);
    showToast(`🎉 Successfully imported ${parsedPreview.length} staff members!`, 'success');
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      showToast('Please enter required faculty information', 'warning');
      return;
    }

    const newTeacher = schoolService.addTeacher({
      name: formData.name,
      department: formData.department,
      designation: formData.designation,
      qualification: formData.qualification,
      mobile: formData.mobile || '+91 98110 00000',
      email: formData.email,
      gender: formData.gender,
      classTeacherOf: formData.classTeacherOf,
      photo: `https://images.unsplash.com/photo-${formData.gender === 'Female' ? '1573496359142-b8d87734a5a2' : '1534528741775-53994a69daeb'}?w=150&auto=format&fit=crop&q=80`,
      salary: { basic: 62000, hra: 16000, da: 11000, specialAllowance: 4500, pfDeduction: 7440, taxDeduction: 5100, netSalary: 80960 },
      bankDetails: { bankName: 'HDFC Bank', accountNo: '918237192837', ifsc: 'HDFC0001092' }
    });

    refreshData();
    setIsAddStaffModalOpen(false);
    showToast(`Faculty member ${newTeacher.name} appointed!`, 'success');
  };

  const openEditModal = (teacher) => {
    setEditFormData({
      id: teacher.id,
      name: teacher.name,
      department: teacher.department,
      designation: teacher.designation,
      qualification: teacher.qualification || 'M.Sc., B.Ed.',
      mobile: teacher.mobile || '',
      email: teacher.email || '',
      classTeacherOf: teacher.classTeacherOf || 'None',
      basicSalary: teacher.salary?.basic || 62000
    });
    setIsEditStaffModalOpen(true);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updated = schoolService.updateTeacher(editFormData.id, {
      name: editFormData.name,
      department: editFormData.department,
      designation: editFormData.designation,
      qualification: editFormData.qualification,
      mobile: editFormData.mobile,
      email: editFormData.email,
      classTeacherOf: editFormData.classTeacherOf,
      salary: {
        basic: Number(editFormData.basicSalary),
        hra: Number(editFormData.basicSalary) * 0.25,
        da: Number(editFormData.basicSalary) * 0.18,
        pfDeduction: Number(editFormData.basicSalary) * 0.12,
        taxDeduction: 5100,
        netSalary: Number(editFormData.basicSalary) * 1.31 - 5100
      }
    });

    refreshData();
    setIsEditStaffModalOpen(false);
    if (selectedStaff && selectedStaff.id === editFormData.id) {
      setSelectedStaff(updated);
    }
    showToast(`Faculty credentials for ${editFormData.name} updated! ✏️`, 'success');
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Remove staff record for ${name}?`)) {
      schoolService.deleteTeacher(id);
      refreshData();
      if (selectedStaff?.id === id) setSelectedStaff(null);
      showToast(`Staff member ${name} deleted`, 'info');
    }
  };

  const filtered = teachers.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || t.department.toLowerCase().includes(searchQuery.toLowerCase()) || (t.employeeId && t.employeeId.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesDept = deptFilter === 'All' || t.department === deptFilter;
    return matchesSearch && matchesDept;
  });

  const schoolInfo = schoolService.getSchoolInfo();

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header with 3 Quick Action CTAs */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Users className="w-7 h-7 text-indigo-600" /> Employee Directory & Profiles
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Official 22 Teaching & Non-Teaching faculty credentials, department allocations, salary structures & smart ID cards.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* 1. Appoint Faculty Button */}
          <button
            onClick={() => setIsAddStaffModalOpen(true)}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-2 transition-all hover:scale-105"
          >
            <Plus className="w-4 h-4" /> Add New Employee
          </button>

          {/* 2. Bulk Import Excel / CSV */}
          <button
            onClick={() => setIsImportModalOpen(true)}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-500/20 flex items-center gap-2 transition-all hover:scale-105"
          >
            <Upload className="w-4 h-4" /> Import Excel / CSV
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search faculty by name, department, or employee id..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
            <Filter className="w-4 h-4 text-indigo-600" /> Department:
          </div>
          <select
            value={deptFilter}
            onChange={(e) => setDeptFilter(e.target.value)}
            className="p-2 text-xs font-bold rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none"
          >
            <option value="All">All Academic Departments</option>
            <option value="Science">Science (Physics, Chem, Bio)</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Languages">English & Hindi Languages</option>
            <option value="Computer Science">Computer Science & AI</option>
            <option value="Social Studies">Social Studies</option>
          </select>
        </div>
      </div>

      {/* Staff Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                <th className="p-4">Faculty Member</th>
                <th className="p-4">Employee ID</th>
                <th className="p-4">Department & Subject</th>
                <th className="p-4">Designation</th>
                <th className="p-4">Class Teacher</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Monthly Salary</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filtered.map(t => (
                <tr key={t.id} className="hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img src={t.photo} alt={t.name} className="w-9 h-9 rounded-xl object-cover ring-1 ring-slate-200 dark:ring-slate-700" />
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white text-xs">{t.name}</p>
                        <p className="text-[10px] text-slate-400">{t.qualification || 'M.Sc., B.Ed.'}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 font-mono font-bold text-slate-700 dark:text-slate-300">{t.employeeId}</td>
                  <td className="p-4">
                    <Badge variant="purple" size="sm">{t.department}</Badge>
                  </td>
                  <td className="p-4 font-bold text-slate-900 dark:text-white">{t.designation}</td>
                  <td className="p-4">
                    {t.classTeacherOf ? (
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded-md border border-indigo-200 dark:border-indigo-800">
                        {t.classTeacherOf}
                      </span>
                    ) : (
                      <span className="text-slate-400">Subject Faculty</span>
                    )}
                  </td>
                  <td className="p-4">
                    <p className="font-mono text-slate-800 dark:text-slate-200">{t.mobile}</p>
                    <p className="text-[10px] text-slate-400 truncate max-w-[120px]">{t.email}</p>
                  </td>
                  <td className="p-4 font-black text-emerald-600">
                    ₹{(t.salary?.netSalary || 80960).toLocaleString('en-IN')}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => openEditModal(t)}
                        title="Edit Faculty Member"
                        className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 hover:bg-amber-100"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => { setSelectedStaff(t); setIsIdCardModalOpen(true); }}
                        title="Print Smart ID Card"
                        className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100"
                      >
                        <Printer className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => { setSelectedStaff(t); setIsPaySlipModalOpen(true); }}
                        title="Print Monthly Pay Slip"
                        className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100"
                      >
                        <DollarSign className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(t.id, t.name)}
                        title="Delete Faculty Record"
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

      {/* ✏️ Edit Staff Modal */}
      <Modal
        isOpen={isEditStaffModalOpen}
        onClose={() => setIsEditStaffModalOpen(false)}
        title="Edit Faculty & Staff Credentials"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleEditSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={editFormData.name}
                onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Department *</label>
              <select
                value={editFormData.department}
                onChange={(e) => setEditFormData({ ...editFormData, department: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              >
                <option value="Science">Science</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Languages">Languages</option>
                <option value="Computer Science">Computer Science & AI</option>
                <option value="Social Studies">Social Studies</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Designation</label>
              <input
                type="text"
                required
                value={editFormData.designation}
                onChange={(e) => setEditFormData({ ...editFormData, designation: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Qualifications</label>
              <input
                type="text"
                value={editFormData.qualification}
                onChange={(e) => setEditFormData({ ...editFormData, qualification: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Mobile Contact</label>
              <input
                type="text"
                value={editFormData.mobile}
                onChange={(e) => setEditFormData({ ...editFormData, mobile: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Email Address</label>
              <input
                type="email"
                value={editFormData.email}
                onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Class Teacher Assignment</label>
              <select
                value={editFormData.classTeacherOf}
                onChange={(e) => setEditFormData({ ...editFormData, classTeacherOf: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              >
                <option value="None">None (Subject Teacher Only)</option>
                <option value="Class 10 - A">Class 10 - A</option>
                <option value="Class 10 - B">Class 10 - B</option>
                <option value="Class 9 - A">Class 9 - A</option>
                <option value="Class 8 - A">Class 8 - A</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Monthly Basic Salary (₹)</label>
              <input
                type="number"
                value={editFormData.basicSalary}
                onChange={(e) => setEditFormData({ ...editFormData, basicSalary: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button type="button" onClick={() => setIsEditStaffModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg">Save Faculty Credentials</button>
          </div>
        </form>
      </Modal>

      {/* ID Card Modal */}
      <Modal
        isOpen={isIdCardModalOpen}
        onClose={() => setIsIdCardModalOpen(false)}
        title="Official Faculty Identity Card"
        maxWidth="max-w-3xl"
      >
        {selectedStaff && (
          <PrintableIDCard person={selectedStaff} type="teacher" schoolInfo={schoolInfo} />
        )}
      </Modal>

      {/* Pay Slip Modal */}
      <Modal
        isOpen={isPaySlipModalOpen}
        onClose={() => setIsPaySlipModalOpen(false)}
        title="Staff Monthly Salary Pay Slip"
        maxWidth="max-w-4xl"
      >
        {selectedStaff && (
          <PrintablePaySlip teacher={selectedStaff} month="August 2026" schoolInfo={schoolInfo} />
        )}
      </Modal>

      {/* Add Staff Modal */}
      <Modal
        isOpen={isAddStaffModalOpen}
        onClose={() => setIsAddStaffModalOpen(false)}
        title="Appoint New Faculty Member"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Teacher Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Prashant Kumar Rajput"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Department *</label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="Science">Science</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Languages">Languages</option>
                <option value="Computer Science">Computer Science & AI</option>
                <option value="Social Studies">Social Studies</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Designation *</label>
              <input
                type="text"
                required
                value={formData.designation}
                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                placeholder="e.g. Senior PGT Physics"
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
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Mobile Contact *</label>
              <input
                type="text"
                required
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                placeholder="+91 98112 34567"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Official Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="rajesh.sharma@dpga-delhi.edu.in"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button type="button" onClick={() => setIsAddStaffModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-indigo-600 text-white font-bold rounded-xl shadow-lg">Appoint Faculty</button>
          </div>
        </form>
      </Modal>

      {/* 📥 Bulk Import Staff (Excel / CSV) Modal */}
      <Modal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        title="📥 Bulk Import Teaching Faculty & Staff (CSV / Excel)"
        maxWidth="max-w-3xl"
      >
        <div className="space-y-5 text-xs">
          <div className="bg-emerald-50 dark:bg-emerald-950/40 p-4 rounded-2xl border border-emerald-200 dark:border-emerald-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                1-Click Excel / CSV Bulk Staff Uploader
              </p>
              <p className="text-emerald-700 dark:text-emerald-400 text-[11px] mt-0.5">
                Download sample format, populate your faculty data, and paste or upload below.
              </p>
            </div>
            <button
              onClick={handleDownloadSampleCsv}
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl flex items-center gap-1.5 shadow-sm shrink-0"
            >
              <Download className="w-4 h-4" /> Download Sample CSV
            </button>
          </div>

          <div className="space-y-2">
            <label className="font-bold text-slate-700 dark:text-slate-300 block">
              Upload .CSV File or Paste Plain Text
            </label>
            <div className="flex items-center gap-3">
              <input
                type="file"
                accept=".csv, .txt"
                onChange={handleFileUpload}
                className="text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
              />
            </div>
            <textarea
              rows={5}
              value={csvText}
              onChange={(e) => handleParseCsv(e.target.value)}
              placeholder="Name,Department,Designation,Qualification,Mobile,Email,Gender,ClassTeacherOf,BasicSalary&#10;Dr. Vivek Agnihotri,Science,PGT Physics,M.Sc. Ph.D.,9811200001,vivek@dpga.edu.in,Male,Class 12 - A,65000"
              className="w-full p-3 font-mono text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Parsed Preview Table */}
          {parsedPreview.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  Preview ({parsedPreview.length} records ready for import):
                </span>
                <span className="text-[10px] text-emerald-600 font-bold bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded">
                  ✓ Syntax Validated
                </span>
              </div>
              <div className="max-h-48 overflow-y-auto rounded-xl border border-slate-200 dark:border-slate-700">
                <table className="w-full text-left text-[11px]">
                  <thead className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-600 dark:text-slate-300">
                    <tr>
                      <th className="p-2">Name</th>
                      <th className="p-2">Department</th>
                      <th className="p-2">Designation</th>
                      <th className="p-2">Mobile</th>
                      <th className="p-2">Basic Salary</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {parsedPreview.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-2 font-bold">{row.name}</td>
                        <td className="p-2">{row.department}</td>
                        <td className="p-2">{row.designation}</td>
                        <td className="p-2 font-mono">{row.mobile}</td>
                        <td className="p-2 font-mono font-bold text-emerald-600">₹{row.basicSalary?.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => {
                setIsImportModalOpen(false);
                setCsvText('');
                setParsedPreview([]);
              }}
              className="px-4 py-2 text-slate-500 font-bold hover:text-slate-700"
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={parsedPreview.length === 0}
              onClick={handleCommitBulkImport}
              className={`px-5 py-2.5 rounded-xl font-bold text-white shadow-lg flex items-center gap-2 ${
                parsedPreview.length > 0
                  ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20'
                  : 'bg-slate-400 cursor-not-allowed'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" /> Import {parsedPreview.length} Staff Members
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
