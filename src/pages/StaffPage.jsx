import React, { useState, useEffect, useRef } from 'react';
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
  Sparkles,
  Building,
  Tag,
  ShieldCheck,
  ShieldAlert,
  KeyRound,
  Lock,
  Unlock,
  Check,
  UserPlus
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

  const resolveTab = (sub) => {
    if (!sub) return 'list';
    if (sub === 'employee-department') return 'department';
    if (sub === 'employee-designation') return 'designation';
    if (sub === 'employee-deactivate') return 'deactivate';
    if (sub === 'staff-import') return 'import';
    return 'list';
  };

  const [activeTab, setActiveTab] = useState(() => resolveTab(initialSubTab));
  const [teachers, setTeachers] = useState(() => schoolService.getTeachers(activeBranchId));
  const [departments, setDepartments] = useState(() => schoolService.getDepartments());
  const [designations, setDesignations] = useState(() => schoolService.getDesignations());
  
  const [searchQuery, setSearchQuery] = useState('');
  const [deptFilter, setDeptFilter] = useState('All');
  
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isPaySlipModalOpen, setIsPaySlipModalOpen] = useState(false);
  const [isIdCardModalOpen, setIsIdCardModalOpen] = useState(false);
  const [isAddStaffModalOpen, setIsAddStaffModalOpen] = useState(false);
  const [isEditStaffModalOpen, setIsEditStaffModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  // Masters Modals
  const [isAddDeptModalOpen, setIsAddDeptModalOpen] = useState(false);
  const [deptFormData, setDeptFormData] = useState({ name: '', code: '', head: '', color: 'indigo' });

  const [isAddDesigModalOpen, setIsAddDesigModalOpen] = useState(false);
  const [desigFormData, setDesigFormData] = useState({ title: '', department: 'Science & Biology', rank: 3 });

  // Bulk CSV / Excel state
  const [csvText, setCsvText] = useState('');
  const [parsedPreview, setParsedPreview] = useState([]);
  const fileInputRef = useRef(null);

  // Auto handle sidebar sub-tab navigation
  useEffect(() => {
    if (initialSubTab === 'staff-add' || initialSubTab === 'employee-add') {
      setIsAddStaffModalOpen(true);
      setActiveTab('list');
    } else if (initialSubTab === 'staff-import') {
      setActiveTab('import');
    } else {
      setActiveTab(resolveTab(initialSubTab));
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
    department: 'Science & Biology',
    designation: 'PGT Faculty',
    qualification: 'M.Sc., B.Ed.',
    mobile: '',
    email: '',
    gender: 'Male',
    classTeacherOf: 'Class 10 - A',
    basicSalary: 45000
  });

  const refreshData = () => {
    setTeachers([...schoolService.getTeachers(activeBranchId)]);
    setDepartments([...schoolService.getDepartments()]);
    setDesignations([...schoolService.getDesignations()]);
  };

  const handleToggleLogin = (teacherId, teacherName) => {
    const updated = schoolService.toggleTeacherLoginStatus(teacherId);
    refreshData();
    if (updated?.loginDeactivated) {
      showToast(`🔒 Login deactivated for ${teacherName}!`, 'warning');
    } else {
      showToast(`🔓 Login access activated for ${teacherName}!`, 'success');
    }
  };

  const handleAddDept = (e) => {
    e.preventDefault();
    if (!deptFormData.name) {
      showToast('Please enter Department Name', 'warning');
      return;
    }
    schoolService.addDepartment(deptFormData);
    setDepartments([...schoolService.getDepartments()]);
    setIsAddDeptModalOpen(false);
    setDeptFormData({ name: '', code: '', head: '', color: 'indigo' });
    showToast(`🏢 Department "${deptFormData.name}" created!`, 'success');
  };

  const handleDeleteDept = (id, name) => {
    if (window.confirm(`Delete department "${name}"?`)) {
      schoolService.deleteDepartment(id);
      setDepartments([...schoolService.getDepartments()]);
      showToast(`Department "${name}" deleted`, 'info');
    }
  };

  const handleAddDesig = (e) => {
    e.preventDefault();
    if (!desigFormData.title) {
      showToast('Please enter Designation Title', 'warning');
      return;
    }
    schoolService.addDesignation(desigFormData);
    setDesignations([...schoolService.getDesignations()]);
    setIsAddDesigModalOpen(false);
    setDesigFormData({ title: '', department: 'Science & Biology', rank: 3 });
    showToast(`🎖️ Designation "${desigFormData.title}" added!`, 'success');
  };

  const handleDeleteDesig = (id, title) => {
    if (window.confirm(`Delete designation "${title}"?`)) {
      schoolService.deleteDesignation(id);
      setDesignations([...schoolService.getDesignations()]);
      showToast(`Designation "${title}" deleted`, 'info');
    }
  };

  const handleDownloadSampleCsv = () => {
    const sampleHeader = 'Name,Department,Designation,Qualification,Mobile,Email,Gender,ClassTeacherOf,BasicSalary\n';
    const sampleRows = [
      'Dr. Vivek Agnihotri,Science & Biology,PGT Physics,"M.Sc., Ph.D.",9811200001,vivek.a@dpga.edu.in,Male,Class 12 - A,65000',
      'Meenakshi Sundaram,Mathematics,TGT Maths,"M.Sc., B.Ed.",9811200002,meenakshi.s@dpga.edu.in,Female,Class 9 - B,52000',
      'Sunil Gavaskar,Physical Education & Sports,PET Director,B.P.Ed.,9811200003,sunil.g@dpga.edu.in,Male,None,45000'
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
    const rows = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
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
      mobile: formData.mobile,
      email: formData.email,
      gender: formData.gender,
      classTeacherOf: formData.classTeacherOf === 'None' ? '' : formData.classTeacherOf,
      photo: `https://images.unsplash.com/photo-${formData.gender === 'Female' ? '1573496359142-b8d87734a5a2' : '1534528741775-53994a69daeb'}?w=150&auto=format&fit=crop&q=80`,
      salary: {
        basic: Number(formData.basicSalary) || 45000,
        hra: (Number(formData.basicSalary) || 45000) * 0.25,
        da: (Number(formData.basicSalary) || 45000) * 0.18,
        specialAllowance: 4500,
        pfDeduction: (Number(formData.basicSalary) || 45000) * 0.12,
        taxDeduction: 5100,
        netSalary: Math.round((Number(formData.basicSalary) || 45000) * 1.31 - 5100)
      },
      bankDetails: {
        bankName: 'State Bank of India',
        accountNo: '38192849182',
        ifsc: 'SBIN0001829'
      }
    });

    refreshData();
    setIsAddStaffModalOpen(false);
    setFormData({
      name: '',
      department: 'Science & Biology',
      designation: 'PGT Faculty',
      qualification: 'M.Sc., B.Ed.',
      mobile: '',
      email: '',
      gender: 'Male',
      classTeacherOf: 'Class 10 - A',
      basicSalary: 45000
    });
    showToast(`🎉 New Faculty ${newTeacher.name} appointed successfully!`, 'success');
  };

  const handleEditOpen = (teacher) => {
    setEditFormData({
      id: teacher.id,
      name: teacher.name,
      department: teacher.department,
      designation: teacher.designation,
      qualification: teacher.qualification,
      mobile: teacher.mobile,
      email: teacher.email,
      classTeacherOf: teacher.classTeacherOf || 'None',
      basicSalary: teacher.salary?.basic || 45000
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
      classTeacherOf: editFormData.classTeacherOf === 'None' ? '' : editFormData.classTeacherOf,
      salary: {
        basic: Number(editFormData.basicSalary),
        hra: Number(editFormData.basicSalary) * 0.25,
        da: Number(editFormData.basicSalary) * 0.18,
        specialAllowance: 4500,
        pfDeduction: Number(editFormData.basicSalary) * 0.12,
        taxDeduction: 5100,
        netSalary: Math.round(Number(editFormData.basicSalary) * 1.31 - 5100)
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
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      t.department.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (t.employeeId && t.employeeId.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesDept = deptFilter === 'All' || t.department === deptFilter;
    return matchesSearch && matchesDept;
  });

  const schoolInfo = schoolService.getSchoolInfo();

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* 🏛️ Header with Title & Quick Add Employee Button */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-200 border border-indigo-300">
                Staff & HR Management
              </span>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-serif">
                Employee Management System
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Faculty credentials, department allocations, designations, login access control & smart ID cards.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setIsAddStaffModalOpen(true)}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <UserPlus className="w-4 h-4" /> Add Employee
          </button>
        </div>
      </div>

      {/* 🧭 EMPLOYEE SUB-TABS (Matching User's Previous Software) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
        {[
          { id: 'list', label: 'Employee List', icon: Users, count: teachers.length },
          { id: 'department', label: 'Add Department', icon: Building, count: departments.length },
          { id: 'designation', label: 'Add Designation', icon: Tag, count: designations.length },
          { id: 'deactivate', label: 'Login Deactivate', icon: KeyRound, badge: 'Auth Control' },
          { id: 'import', label: 'Import Staff Excel / CSV', icon: FileSpreadsheet, badge: 'Bulk' }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                window.location.hash = tab.id === 'list' ? 'staff' : tab.id === 'department' ? 'employee-department' : tab.id === 'designation' ? 'employee-designation' : tab.id === 'deactivate' ? 'employee-deactivate' : 'staff-import';
              }}
              className={`px-4 py-2.5 rounded-2xl font-bold text-xs flex items-center gap-2 transition-all whitespace-nowrap shadow-xs ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-indigo-500/20 ring-2 ring-indigo-400/40'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}>
                  {tab.count}
                </span>
              )}
              {tab.badge && (
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${
                  isActive ? 'bg-amber-400 text-slate-950' : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 👥 TAB 1: EMPLOYEE LIST */}
      {/* ========================================================================= */}
      {activeTab === 'list' && (
        <div className="space-y-4">
          {/* Filter and Search Bar */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search employee by name, department, or ID..."
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
                <option value="All">All Departments</option>
                {departments.map(d => (
                  <option key={d.id} value={d.name}>{d.name}</option>
                ))}
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
                    <th className="p-4">Department & Role</th>
                    <th className="p-4">Class Teacher</th>
                    <th className="p-4">Mobile & Email</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filtered.map((t) => (
                    <tr key={t.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={t.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
                            alt={t.name}
                            className="w-9 h-9 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                          />
                          <div>
                            <p className="font-bold text-slate-900 dark:text-white">{t.name}</p>
                            <p className="text-[10px] text-slate-400 font-medium">{t.qualification}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 font-mono font-bold text-slate-600 dark:text-slate-400">
                        {t.employeeId || t.id}
                      </td>
                      <td className="p-4">
                        <p className="font-bold text-slate-800 dark:text-slate-200">{t.designation}</p>
                        <span className="text-[10px] text-slate-400">{t.department}</span>
                      </td>
                      <td className="p-4">
                        {t.classTeacherOf ? (
                          <span className="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold text-[10px] border border-indigo-200 dark:border-indigo-800">
                            {t.classTeacherOf}
                          </span>
                        ) : (
                          <span className="text-slate-400 text-[11px]">—</span>
                        )}
                      </td>
                      <td className="p-4">
                        <p className="text-slate-700 dark:text-slate-300 font-mono text-[11px]">{t.mobile}</p>
                        <p className="text-slate-400 text-[10px] truncate max-w-[140px]">{t.email}</p>
                      </td>
                      <td className="p-4">
                        <Badge variant={t.loginDeactivated ? 'danger' : 'success'}>
                          {t.loginDeactivated ? 'Login Disabled' : 'Active'}
                        </Badge>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => {
                              setSelectedStaff(t);
                              setIsIdCardModalOpen(true);
                            }}
                            title="Print Smart Faculty ID Card"
                            className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 transition-colors"
                          >
                            <Printer className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedStaff(t);
                              setIsPaySlipModalOpen(true);
                            }}
                            title="Generate Pay Slip"
                            className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 transition-colors"
                          >
                            <DollarSign className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleEditOpen(t)}
                            title="Edit Credentials"
                            className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 transition-colors"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDelete(t.id, t.name)}
                            title="Delete Staff"
                            className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 hover:bg-rose-100 transition-colors"
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
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🏢 TAB 2: ADD DEPARTMENT (Department Master) */}
      {/* ========================================================================= */}
      {activeTab === 'department' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Building className="w-5 h-5 text-indigo-600" /> Academic & Administrative Departments Master
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Organize teaching faculty and operational teams into dedicated departmental wings.
              </p>
            </div>
            <button
              onClick={() => setIsAddDeptModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" /> Add Department
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((dept) => {
              const staffCount = teachers.filter(t => t.department === dept.name).length;
              return (
                <div key={dept.id} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3 hover:border-indigo-400 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                        <Building className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-slate-900 dark:text-white">{dept.name}</h4>
                        <span className="text-[10px] font-mono font-bold text-slate-400">Code: {dept.code || dept.id}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteDept(dept.id, dept.name)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200 dark:border-slate-700">
                    <span className="text-slate-500">HOD: <strong className="text-slate-800 dark:text-slate-200">{dept.head || 'Not Assigned'}</strong></span>
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold text-[10px]">
                      {staffCount} Faculty Members
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🎖️ TAB 3: ADD DESIGNATION (Designation Master) */}
      {/* ========================================================================= */}
      {activeTab === 'designation' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Tag className="w-5 h-5 text-indigo-600" /> Faculty & Staff Designations Master
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Official hierarchy ranks and post designations for teaching and non-teaching personnel.
              </p>
            </div>
            <button
              onClick={() => setIsAddDesigModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" /> Add Designation
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {designations.map((desig) => (
              <div key={desig.id} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3 hover:border-indigo-400 transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400">
                      <Tag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900 dark:text-white">{desig.title}</h4>
                      <span className="text-[10px] text-slate-400">Dept: {desig.department}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteDesig(desig.id, desig.title)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-slate-500">Rank: <strong className="text-slate-800 dark:text-slate-200">Level {desig.rank || 4}</strong></span>
                  <span className="font-mono text-[10px] text-slate-400">{desig.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🔒 TAB 4: LOGIN DEACTIVATE (Employee Login Access Control) */}
      {/* ========================================================================= */}
      {activeTab === 'deactivate' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-indigo-600" /> Employee Login Deactivation & Security Control
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Manage portal login authentication access for teachers, staff, and retired or transferred employees.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold">
              Total {teachers.length} Employee Accounts
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                  <th className="p-4">Employee</th>
                  <th className="p-4">Employee ID</th>
                  <th className="p-4">Login Username / Email</th>
                  <th className="p-4">Designation</th>
                  <th className="p-4">Login Access Status</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {teachers.map((t) => {
                  const isDeactivated = Boolean(t.loginDeactivated);
                  return (
                    <tr key={t.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={t.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
                            alt={t.name}
                            className="w-9 h-9 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                          />
                          <div>
                            <p className="font-bold text-slate-900 dark:text-white">{t.name}</p>
                            <p className="text-[10px] text-slate-400">{t.department}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 font-mono font-bold text-slate-600 dark:text-slate-400">
                        {t.employeeId || t.id}
                      </td>
                      <td className="p-4">
                        <p className="font-mono text-slate-800 dark:text-slate-200">{t.email}</p>
                        <span className="text-[10px] text-slate-400 font-mono">User: {t.name.toLowerCase().replace(/\s+/g, '')}</span>
                      </td>
                      <td className="p-4 text-slate-700 dark:text-slate-300 font-medium">
                        {t.designation}
                      </td>
                      <td className="p-4">
                        {isDeactivated ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
                            <Lock className="w-3 h-3" /> Login Deactivated
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                            <Unlock className="w-3 h-3" /> Login Active
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleToggleLogin(t.id, t.name)}
                          className={`px-3.5 py-1.5 rounded-xl font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 ml-auto hover:scale-105 active:scale-95 ${
                            isDeactivated
                              ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20'
                              : 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-500/20'
                          }`}
                        >
                          {isDeactivated ? (
                            <>
                              <Unlock className="w-3.5 h-3.5" />
                              <span>Re-Activate Login</span>
                            </>
                          ) : (
                            <>
                              <Lock className="w-3.5 h-3.5" />
                              <span>Deactivate Login</span>
                            </>
                          )}
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
      {/* 📊 TAB 5: IMPORT STAFF (Excel / CSV Bulk Importer) */}
      {/* ========================================================================= */}
      {activeTab === 'import' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-emerald-600" /> Multiple Employee Import (Excel / CSV Batch)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Bulk import teaching faculty and staff records using the standard CSV template.
              </p>
            </div>

            <button
              onClick={handleDownloadSampleCsv}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold flex items-center gap-2 border border-slate-300 dark:border-slate-700 shadow-xs transition-all hover:scale-105"
            >
              <Download className="w-4 h-4 text-emerald-600" />
              <span>Download Staff CSV Template</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div
              onClick={() => fileInputRef.current && fileInputRef.current.click()}
              className="border-2 border-dashed border-indigo-200 dark:border-indigo-800/80 bg-indigo-50/40 dark:bg-indigo-950/20 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 rounded-3xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center space-y-3"
            >
              <input
                type="file"
                ref={fileInputRef}
                accept=".csv,.txt"
                onChange={handleFileUpload}
                className="hidden"
              />
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-sm">
                <Upload className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs font-black text-slate-900 dark:text-white">
                  Click to Browse Staff CSV File or Drag & Drop
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Supports UTF-8 CSV format exported from Excel
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                <span>Or Paste Staff CSV Text Directly</span>
                <span className="text-[10px] text-slate-400 font-normal">Comma Separated Values</span>
              </label>
              <textarea
                rows="5"
                value={csvText}
                onChange={(e) => handleParseCsv(e.target.value)}
                placeholder={`Name,Department,Designation,Qualification,Mobile,Email,Gender,ClassTeacherOf,BasicSalary\nDr. Vivek Agnihotri,Science & Biology,PGT Physics,"M.Sc., Ph.D.",9811200001,vivek.a@dpga.edu.in,Male,Class 12 - A,65000`}
                className="w-full p-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono text-[11px] resize-none"
              ></textarea>
            </div>
          </div>

          {parsedPreview.length > 0 && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                    Parsed Preview ({parsedPreview.length} Staff Ready to Import)
                  </h4>
                </div>

                <button
                  onClick={handleCommitBulkImport}
                  className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl text-xs font-black shadow-lg shadow-emerald-600/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                  <Upload className="w-4 h-4" />
                  <span>🚀 Import All {parsedPreview.length} Staff Members</span>
                </button>
              </div>

              <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl max-h-80 overflow-y-auto custom-scrollbar">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="sticky top-0 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700 z-10">
                    <tr>
                      <th className="p-3">#</th>
                      <th className="p-3">Name</th>
                      <th className="p-3">Department</th>
                      <th className="p-3">Designation</th>
                      <th className="p-3">Qualification</th>
                      <th className="p-3">Mobile</th>
                      <th className="p-3">Salary (Basic)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {parsedPreview.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                        <td className="p-3 text-slate-400 font-mono">{idx + 1}</td>
                        <td className="p-3 font-bold text-slate-900 dark:text-white">{row.name}</td>
                        <td className="p-3">{row.department}</td>
                        <td className="p-3 font-semibold text-slate-800 dark:text-slate-200">{row.designation}</td>
                        <td className="p-3 text-slate-500">{row.qualification}</td>
                        <td className="p-3 font-mono text-sky-600">{row.mobile}</td>
                        <td className="p-3 font-mono font-bold text-emerald-600">₹{row.basicSalary?.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🏢 MODAL: ADD DEPARTMENT */}
      {/* ========================================================================= */}
      <Modal
        isOpen={isAddDeptModalOpen}
        onClose={() => setIsAddDeptModalOpen(false)}
        title="Create New Academic / Administrative Department"
        maxWidth="max-w-lg"
      >
        <form onSubmit={handleAddDept} className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Department Name *</label>
            <input
              type="text"
              required
              value={deptFormData.name}
              onChange={(e) => setDeptFormData({ ...deptFormData, name: e.target.value })}
              placeholder="e.g. Science & Biology"
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Department Code</label>
              <input
                type="text"
                value={deptFormData.code}
                onChange={(e) => setDeptFormData({ ...deptFormData, code: e.target.value.toUpperCase() })}
                placeholder="e.g. SCI"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Head of Department (HOD)</label>
              <input
                type="text"
                value={deptFormData.head}
                onChange={(e) => setDeptFormData({ ...deptFormData, head: e.target.value })}
                placeholder="e.g. Dr. Vivek Agnihotri"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
            <button type="button" onClick={() => setIsAddDeptModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg">Save Department</button>
          </div>
        </form>
      </Modal>

      {/* ========================================================================= */}
      {/* 🎖️ MODAL: ADD DESIGNATION */}
      {/* ========================================================================= */}
      <Modal
        isOpen={isAddDesigModalOpen}
        onClose={() => setIsAddDesigModalOpen(false)}
        title="Create New Employee Designation"
        maxWidth="max-w-lg"
      >
        <form onSubmit={handleAddDesig} className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Designation Title *</label>
            <input
              type="text"
              required
              value={desigFormData.title}
              onChange={(e) => setDesigFormData({ ...desigFormData, title: e.target.value })}
              placeholder="e.g. PGT Physics Faculty"
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Assigned Department</label>
              <select
                value={desigFormData.department}
                onChange={(e) => setDesigFormData({ ...desigFormData, department: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              >
                {departments.map(d => (
                  <option key={d.id} value={d.name}>{d.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Hierarchy Rank (1 = Top)</label>
              <select
                value={desigFormData.rank}
                onChange={(e) => setDesigFormData({ ...desigFormData, rank: Number(e.target.value) })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              >
                <option value={1}>Rank 1 - Executive / Principal</option>
                <option value={2}>Rank 2 - Vice Principal / Admin</option>
                <option value={3}>Rank 3 - PGT / Headmaster</option>
                <option value={4}>Rank 4 - TGT / Senior Faculty</option>
                <option value={5}>Rank 5 - PRT / Primary Faculty</option>
                <option value={6}>Rank 6 - Operational / Support Staff</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
            <button type="button" onClick={() => setIsAddDesigModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg">Save Designation</button>
          </div>
        </form>
      </Modal>

      {/* Edit Staff Modal */}
      <Modal
        isOpen={isEditStaffModalOpen}
        onClose={() => setIsEditStaffModalOpen(false)}
        title={`Edit Credentials: ${editFormData.name}`}
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleEditSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Full Name</label>
              <input
                type="text"
                required
                value={editFormData.name}
                onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Department</label>
              <select
                value={editFormData.department}
                onChange={(e) => setEditFormData({ ...editFormData, department: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              >
                {departments.map(d => (
                  <option key={d.id} value={d.name}>{d.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Designation</label>
              <input
                type="text"
                value={editFormData.designation}
                onChange={(e) => setEditFormData({ ...editFormData, designation: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Qualification</label>
              <input
                type="text"
                value={editFormData.qualification}
                onChange={(e) => setEditFormData({ ...editFormData, qualification: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Mobile</label>
              <input
                type="text"
                value={editFormData.mobile}
                onChange={(e) => setEditFormData({ ...editFormData, mobile: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Email</label>
              <input
                type="email"
                value={editFormData.email}
                onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
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
        title="Appoint New Employee / Faculty Member"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Employee Full Name *</label>
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
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              >
                {departments.map(d => (
                  <option key={d.id} value={d.name}>{d.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Designation *</label>
              <input
                type="text"
                required
                value={formData.designation}
                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                placeholder="e.g. PGT Physics"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Qualification</label>
              <input
                type="text"
                value={formData.qualification}
                onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                placeholder="e.g. M.Sc., B.Ed."
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Mobile *</label>
              <input
                type="text"
                required
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                placeholder="+91 98000 00000"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="faculty@dmps.edu.in"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Gender</label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Class Teacher Of</label>
              <select
                value={formData.classTeacherOf}
                onChange={(e) => setFormData({ ...formData, classTeacherOf: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              >
                <option value="None">None (Subject Teacher Only)</option>
                <option value="Class 10 - A">Class 10 - A</option>
                <option value="Class 10 - B">Class 10 - B</option>
                <option value="Class 9 - A">Class 9 - A</option>
                <option value="Class 8 - A">Class 8 - A</option>
                <option value="Class 7 - A">Class 7 - A</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Monthly Basic Salary (₹)</label>
              <input
                type="number"
                value={formData.basicSalary}
                onChange={(e) => setFormData({ ...formData, basicSalary: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsAddStaffModalOpen(false)}
              className="px-4 py-2 text-slate-500 font-bold hover:text-slate-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20"
            >
              Appoint Faculty Member
            </button>
          </div>
        </form>
      </Modal>

      {/* Bulk CSV Importer Modal (Kept for compatibility) */}
      <Modal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        title="Multiple Faculty Import (Excel / CSV Batch)"
        maxWidth="max-w-2xl"
      >
        <div className="space-y-4 text-xs">
          <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 flex items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-indigo-950 dark:text-indigo-200">1. Download Ready Sample Template</h4>
              <p className="text-[11px] text-indigo-700 dark:text-indigo-400">Contains required columns: Name, Department, Designation, Mobile, etc.</p>
            </div>
            <button
              type="button"
              onClick={handleDownloadSampleCsv}
              className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold flex items-center gap-1.5 shrink-0 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" /> Download Template
            </button>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
              2. Paste CSV Text Or Drop File
            </label>
            <textarea
              rows="5"
              value={csvText}
              onChange={(e) => handleParseCsv(e.target.value)}
              placeholder="Paste comma separated values here..."
              className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono text-[11px]"
            />
          </div>

          {parsedPreview.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between font-bold text-slate-700 dark:text-slate-300">
                <span>Parsed Preview: {parsedPreview.length} Members Found</span>
                <span className="text-emerald-600">Ready to save</span>
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

export default StaffPage;
