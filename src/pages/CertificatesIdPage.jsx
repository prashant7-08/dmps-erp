import React, { useState, useEffect } from 'react';
import {
  Contact,
  Award,
  Plus,
  Printer,
  FileText,
  Search,
  Filter,
  CheckCircle2,
  ShieldCheck,
  Bus,
  Layers,
  Users,
  Grid,
  Edit,
  Trash2,
  Copy,
  Download,
  Upload,
  CheckSquare,
  Square,
  Sparkles,
  QrCode,
  LayoutTemplate,
  Sliders,
  Image as ImageIcon,
  Check,
  Droplet
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import { PrintableCertificate } from '../components/printables/PrintableCertificate';
import { PrintableIDCard } from '../components/printables/PrintableIDCard';
import schoolService from '../services/schoolService';

export const CertificatesIdPage = ({ initialSection = 'student_cards' }) => {
  const { showToast } = useToast();
  const students = schoolService.getStudents();
  const teachers = schoolService.getTeachers();
  const schoolInfo = schoolService.getSchoolInfo();

  // Active Sub-Section: 'templates' | 'student_cards' | 'employee_cards' | 'admit_cards' | 'certificates'
  const [activeSection, setActiveSection] = useState(initialSection || 'student_cards');
  
  useEffect(() => {
    if (initialSection) {
      setActiveSection(initialSection);
    }
  }, [initialSection]);
  
  // Template Manager Sub-tabs: 'list' | 'create_edit'
  const [templateTab, setTemplateTab] = useState('list');

  // Available Card Templates in Database (Exact DMPS)
  const [templates, setTemplates] = useState([
    {
      id: 'TMPL-001',
      branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)',
      name: "STUDENT'S CARD",
      applicableUser: 'Student',
      pageLayout: { width: 55, height: 88, unit: 'mm' },
      photoStyle: 'Square',
      photoSize: 70,
      qrCodeField: 'Date Of Birth',
      themeColor: 'blue',
      createdAt: '27-Apr-2026'
    },
    {
      id: 'TMPL-002',
      branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)',
      name: "EMPLOYEE ID CARD",
      applicableUser: 'Employee',
      pageLayout: { width: 55, height: 88, unit: 'mm' },
      photoStyle: 'Square',
      photoSize: 70,
      qrCodeField: 'Employee ID',
      themeColor: 'purple',
      createdAt: '21-Apr-2026'
    },
    {
      id: 'TMPL-003',
      branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)',
      name: "TEACHER'S CARD",
      applicableUser: 'Employee',
      pageLayout: { width: 55, height: 88, unit: 'mm' },
      photoStyle: 'Square',
      photoSize: 70,
      qrCodeField: 'Employee ID',
      themeColor: 'purple',
      createdAt: '27-Apr-2026'
    },
    {
      id: 'TMPL-004',
      branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)',
      name: "STUDENT'S TRANSPORT PASS",
      applicableUser: 'Student',
      pageLayout: { width: 67, height: 22, unit: 'mm' },
      photoStyle: 'Rounded',
      photoSize: 60,
      qrCodeField: 'Route No',
      themeColor: 'amber',
      createdAt: '10-Apr-2026'
    }
  ]);

  // Template Form State (For Add / Edit Template Designer)
  const [templateForm, setTemplateForm] = useState({
    id: null,
    branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)',
    name: "STUDENT'S CARD",
    applicableUser: 'Student',
    pageLayoutWidth: 55,
    pageLayoutHeight: 88,
    qrCodeText: 'Date Of Birth',
    userPhotoStyle: 'Square',
    photoSize: 70,
    layoutSpacingTop: 10,
    layoutSpacingRight: 0,
    layoutSpacingBottom: 0,
    layoutSpacingLeft: 2,
    themeColor: 'blue',
    headerTitle: 'DADHEECH MEMORIAL PUBLIC SCHOOL',
    headerSubtitle: 'NEW BUILDING (SMART CAMPUS)',
    certificateContent: '[student_photo]\n[name]\nClass: [class] - [section] | Roll: [roll]\nFather: [father_name] | Mobile: [mobileno]\n[qr_code] [signature]'
  });

  // Bulk Generation State
  const [selectedClass, setSelectedClass] = useState('Class 10');
  const [selectedDept, setSelectedDept] = useState('All');
  const [activeTemplateId, setActiveTemplateId] = useState('TMPL-001');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIds, setSelectedIds] = useState(new Set());

  // Certificate Issuance State
  const [certificates, setCertificates] = useState(schoolService.getCertificates());
  const [selectedCert, setSelectedCert] = useState(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [isGenerateCertModalOpen, setIsGenerateCertModalOpen] = useState(false);
  const [certForm, setCertForm] = useState({
    studentId: students[0]?.id || '',
    type: 'Bonafide Certificate',
    purpose: 'Passport & Visa Verification'
  });

  // Shortcode tags list from DMPS
  const shortcodeTags = [
    '[name]', '[gender]', '[father_name]', '[mother_name]', '[student_photo]',
    '[register_no]', '[roll]', '[admission_date]', '[class]', '[section]',
    '[category]', '[blood_group]', '[birthday]', '[email]', '[mobileno]',
    '[present_address]', '[signature]', '[qr_code]', '[institute_name]', '[expiry_date]'
  ];

  // Roster calculation
  const getRoster = () => {
    if (activeSection === 'employee_cards') {
      if (selectedDept === 'All') return teachers;
      return teachers.filter(t => t.department === selectedDept);
    }
    if (selectedClass === 'All') return students;
    return students.filter(s => s.class === selectedClass);
  };

  const currentRoster = getRoster();

  // Auto-select all candidates when section or class changes
  useEffect(() => {
    setSelectedIds(new Set(currentRoster.map(r => r.id)));
  }, [activeSection, selectedClass, selectedDept]);

  const filteredRoster = currentRoster.filter(item => {
    const q = searchQuery.toLowerCase();
    const nameMatch = item.name.toLowerCase().includes(q);
    const rollMatch = item.rollNo ? item.rollNo.includes(q) : false;
    const admMatch = item.admissionNo ? item.admissionNo.toLowerCase().includes(q) : false;
    return nameMatch || rollMatch || admMatch;
  });

  const handleSelectAll = () => {
    setSelectedIds(new Set(currentRoster.map(r => r.id)));
    showToast(`Selected all ${currentRoster.length} candidates`, 'info');
  };

  const handleClearSelection = () => {
    setSelectedIds(new Set());
    showToast('Cleared selection. Check individual rows to select.', 'info');
  };

  const handleToggleSelect = (id) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Save / Update Template
  const handleSaveTemplate = (e) => {
    e.preventDefault();
    if (!templateForm.name) {
      showToast('Please enter Template Name', 'warning');
      return;
    }

    if (templateForm.id) {
      setTemplates(prev => prev.map(t => t.id === templateForm.id ? {
        ...t,
        branch: templateForm.branch,
        name: templateForm.name,
        applicableUser: templateForm.applicableUser,
        pageLayout: { width: Number(templateForm.pageLayoutWidth), height: Number(templateForm.pageLayoutHeight), unit: 'mm' },
        photoStyle: templateForm.userPhotoStyle,
        photoSize: Number(templateForm.photoSize),
        qrCodeField: templateForm.qrCodeText
      } : t));
      showToast(`Template "${templateForm.name}" updated!`, 'success');
    } else {
      const newTmpl = {
        id: `TMPL-${String(templates.length + 1).padStart(3, '0')}`,
        branch: templateForm.branch,
        name: templateForm.name,
        applicableUser: templateForm.applicableUser,
        pageLayout: { width: Number(templateForm.pageLayoutWidth), height: Number(templateForm.pageLayoutHeight), unit: 'mm' },
        photoStyle: templateForm.userPhotoStyle,
        photoSize: Number(templateForm.photoSize),
        qrCodeField: templateForm.qrCodeText,
        themeColor: templateForm.themeColor,
        createdAt: 'Today'
      };
      setTemplates(prev => [newTmpl, ...prev]);
      showToast(`New Card Template "${newTmpl.name}" created!`, 'success');
    }

    setTemplateTab('list');
  };

  const handleEditTemplate = (tmpl) => {
    setTemplateForm({
      id: tmpl.id,
      branch: tmpl.branch,
      name: tmpl.name,
      applicableUser: tmpl.applicableUser,
      pageLayoutWidth: tmpl.pageLayout?.width || 55,
      pageLayoutHeight: tmpl.pageLayout?.height || 88,
      qrCodeText: tmpl.qrCodeField || 'Date Of Birth',
      userPhotoStyle: tmpl.photoStyle || 'Square',
      photoSize: tmpl.photoSize || 70,
      layoutSpacingTop: 10,
      layoutSpacingRight: 0,
      layoutSpacingBottom: 0,
      layoutSpacingLeft: 2,
      themeColor: tmpl.themeColor || 'blue',
      headerTitle: 'DADHEECH MEMORIAL PUBLIC SCHOOL',
      headerSubtitle: 'NEW BUILDING (SMART CAMPUS)',
      certificateContent: '[student_photo]\n[name]\nClass: [class] - [section] | Roll: [roll]\nFather: [father_name] | Mobile: [mobileno]\n[qr_code] [signature]'
    });
    setTemplateTab('create_edit');
  };

  const handleDeleteTemplate = (id, name) => {
    if (window.confirm(`Delete template "${name}"?`)) {
      setTemplates(prev => prev.filter(t => t.id !== id));
      showToast(`Template "${name}" deleted`, 'info');
    }
  };

  const insertTagToContent = (tag) => {
    setTemplateForm(prev => ({
      ...prev,
      certificateContent: `${prev.certificateContent} ${tag}`
    }));
    showToast(`Inserted tag: ${tag}`, 'info');
  };

  const handleGenerateCertificate = (e) => {
    e.preventDefault();
    const student = students.find(s => s.id === certForm.studentId);
    if (!student) return;

    const newCert = schoolService.generateCertificate({
      type: certForm.type,
      studentId: student.id,
      studentName: student.name,
      fatherName: student.parents?.fatherName || 'Parent',
      class: student.class,
      section: student.section,
      admissionNo: student.admissionNo,
      purpose: certForm.purpose
    });

    setCertificates([...schoolService.getCertificates()]);
    setIsGenerateCertModalOpen(false);
    setSelectedCert(newCert);
    setIsCertModalOpen(true);
    showToast(`${newCert.type} issued for ${student.name}!`, 'success');
  };

  // Candidates selected for print
  const selectedCardsToPrint = currentRoster.filter(r => selectedIds.has(r.id));
  const activeTemplate = templates.find(t => t.id === activeTemplateId) || templates[0];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* 🏷️ Master Breadcrumb Header (Hidden on Print) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-500/25">
            🪪
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                Card Management & ID Card Template
              </h2>
              <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 font-bold text-[10px] border border-blue-200">
                DMPS Module
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Design ID card templates, manage student & employee batches, and export clean print sheets.
            </p>
          </div>
        </div>

        {/* Create Template Button */}
        <button
          onClick={() => {
            setTemplateForm({
              id: null,
              branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)',
              name: 'NEW STUDENT CARD',
              applicableUser: 'Student',
              pageLayoutWidth: 55,
              pageLayoutHeight: 88,
              qrCodeText: 'Date Of Birth',
              userPhotoStyle: 'Square',
              photoSize: 70,
              layoutSpacingTop: 10,
              layoutSpacingRight: 0,
              layoutSpacingBottom: 0,
              layoutSpacingLeft: 2,
              themeColor: 'blue',
              headerTitle: 'DADHEECH MEMORIAL PUBLIC SCHOOL',
              headerSubtitle: 'NEW BUILDING (SMART CAMPUS)',
              certificateContent: '[student_photo]\n[name]\nClass: [class] - [section] | Roll: [roll]\nFather: [father_name] | Mobile: [mobileno]\n[qr_code] [signature]'
            });
            setActiveSection('templates');
            setTemplateTab('create_edit');
          }}
          className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 flex items-center gap-2 transition-all hover:scale-105"
        >
          <Plus className="w-4 h-4" /> Add Id Card Template
        </button>
      </div>

      {/* 🧭 DMPS Navigation Sub-tabs (Hidden on Print) */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 print:hidden">
        {[
          { id: 'templates', label: 'Id Card Template', icon: LayoutTemplate, badge: `${templates.length}` },
          { id: 'student_cards', label: 'Student Id Card', icon: Contact, badge: 'Batch Print' },
          { id: 'employee_cards', label: 'Employee Id Card', icon: Users, badge: 'Staff' },
          { id: 'admit_cards', label: 'Generate Admit Card', icon: Award, badge: 'CBSE' },
          { id: 'certificates', label: 'Certificates (TC/Bonafide)', icon: FileText, badge: `${certificates.length}` }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-extrabold ${isActive ? 'bg-white/25 text-white' : 'bg-slate-100 dark:bg-slate-800 text-blue-700 dark:text-blue-300'}`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: ID CARD TEMPLATE (Exact DMPS Screenshot 1 & 2) */}
      {/* ========================================================================= */}
      {activeSection === 'templates' && (
        <div className="space-y-6">
          
          {/* Sub-tabs: Id Card List | Add/Edit Id Card */}
          <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl w-fit print:hidden">
            <button
              onClick={() => setTemplateTab('list')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                templateTab === 'list' ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <Layers className="w-4 h-4" /> Id Card List
            </button>
            <button
              onClick={() => setTemplateTab('create_edit')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                templateTab === 'create_edit' ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <Edit className="w-4 h-4" /> {templateForm.id ? 'Edit Id Card Template' : 'Add Id Card Template'}
            </button>
          </div>

          {/* 📋 VIEW A: EXACT DMPS TEMPLATE LIST TABLE (Screenshot 1) */}
          {templateTab === 'list' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden space-y-4 p-5">
              
              {/* Toolbar & Filter */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-1.5">
                  <span className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200"><Copy className="w-4 h-4" /></span>
                  <span className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200"><FileText className="w-4 h-4" /></span>
                  <span className="p-2 rounded-lg bg-rose-50 text-rose-700 border border-rose-200"><Download className="w-4 h-4" /></span>
                  <span className="p-2 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200"><Printer className="w-4 h-4" /></span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                    <span>Show</span>
                    <select className="p-1 rounded-lg border bg-slate-50 dark:bg-slate-800">
                      <option>20</option>
                      <option>50</option>
                    </select>
                    <span>rows per page</span>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                      <th className="p-3.5">Sl</th>
                      <th className="p-3.5">Branch</th>
                      <th className="p-3.5">Name</th>
                      <th className="p-3.5">Applicable User</th>
                      <th className="p-3.5">Page Layout</th>
                      <th className="p-3.5 text-center">Background Image</th>
                      <th className="p-3.5">Created At</th>
                      <th className="p-3.5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {templates.map((tmpl, idx) => (
                      <tr key={tmpl.id} className="hover:bg-blue-50/40 dark:hover:bg-slate-800/40 transition-colors">
                        <td className="p-3.5 font-bold text-slate-500">{idx + 1}</td>
                        <td className="p-3.5 font-bold text-slate-800 dark:text-slate-200 max-w-[240px] truncate">{tmpl.branch}</td>
                        <td className="p-3.5 font-black text-blue-700 dark:text-blue-400">{tmpl.name}</td>
                        <td className="p-3.5">
                          <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] ${tmpl.applicableUser === 'Student' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-purple-50 text-purple-700 border border-purple-200'}`}>
                            {tmpl.applicableUser}
                          </span>
                        </td>
                        <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-300">
                          Width <strong className="text-slate-900 dark:text-white">{tmpl.pageLayout?.width}mm</strong> x Height <strong className="text-slate-900 dark:text-white">{tmpl.pageLayout?.height}mm</strong>
                        </td>
                        <td className="p-3.5 text-center">
                          <div className="w-9 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 flex items-center justify-center mx-auto shadow-xs">
                            <ImageIcon className="w-4 h-4 text-slate-400" />
                          </div>
                        </td>
                        <td className="p-3.5 text-slate-500 font-medium">{tmpl.createdAt}</td>
                        <td className="p-3.5 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => {
                                setActiveTemplateId(tmpl.id);
                                setActiveSection(tmpl.applicableUser === 'Student' ? 'student_cards' : 'employee_cards');
                              }}
                              title="Print Batch with this Template"
                              className="p-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-xs"
                            >
                              <Printer className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleEditTemplate(tmpl)}
                              title="Edit Template"
                              className="p-1.5 rounded-lg bg-amber-500 text-white hover:bg-amber-600 shadow-xs"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteTemplate(tmpl.id, tmpl.name)}
                              title="Delete Template"
                              className="p-1.5 rounded-lg bg-rose-600 text-white hover:bg-rose-700 shadow-xs"
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
          )}

          {/* ✏️ VIEW B: EXACT DMPS TEMPLATE DESIGNER FORM (Screenshot 2) */}
          {templateTab === 'create_edit' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-blue-600" />
                  {templateForm.id ? 'Edit Id Card Template' : 'Add Id Card Template'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Customize template properties, layout dimensions, and content shortcode tags.</p>
              </div>

              <form onSubmit={handleSaveTemplate} className="space-y-5 text-xs">
                
                {/* Branch */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <label className="font-bold text-slate-700 dark:text-slate-300 md:text-right">Branch *</label>
                  <div className="md:col-span-3">
                    <select
                      value={templateForm.branch}
                      onChange={(e) => setTemplateForm({ ...templateForm, branch: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
                    >
                      <option value="DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)">DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)</option>
                      <option value="DELHI MODEL PUBLIC SCHOOL MAIN CAMPUS">DELHI MODEL PUBLIC SCHOOL MAIN CAMPUS</option>
                    </select>
                  </div>
                </div>

                {/* Id Card Name */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <label className="font-bold text-slate-700 dark:text-slate-300 md:text-right">Id Card Name *</label>
                  <div className="md:col-span-3">
                    <input
                      type="text"
                      required
                      value={templateForm.name}
                      onChange={(e) => setTemplateForm({ ...templateForm, name: e.target.value })}
                      placeholder="e.g. STUDENT'S CARD"
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                    />
                  </div>
                </div>

                {/* Applicable User */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <label className="font-bold text-slate-700 dark:text-slate-300 md:text-right">Applicable User *</label>
                  <div className="md:col-span-3">
                    <select
                      value={templateForm.applicableUser}
                      onChange={(e) => setTemplateForm({ ...templateForm, applicableUser: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
                    >
                      <option value="Student">Student</option>
                      <option value="Employee">Employee</option>
                    </select>
                  </div>
                </div>

                {/* Page Layout (Width x Height mm) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <label className="font-bold text-slate-700 dark:text-slate-300 md:text-right">Page Layout *</label>
                  <div className="md:col-span-3 grid grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="number"
                        value={templateForm.pageLayoutWidth}
                        onChange={(e) => setTemplateForm({ ...templateForm, pageLayoutWidth: e.target.value })}
                        placeholder="Width"
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-[10px]">Width (mm)</span>
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        value={templateForm.pageLayoutHeight}
                        onChange={(e) => setTemplateForm({ ...templateForm, pageLayoutHeight: e.target.value })}
                        placeholder="Height"
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-[10px]">Height (mm)</span>
                    </div>
                  </div>
                </div>

                {/* QR Code Text */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <label className="font-bold text-slate-700 dark:text-slate-300 md:text-right">QR Code Text *</label>
                  <div className="md:col-span-3">
                    <select
                      value={templateForm.qrCodeText}
                      onChange={(e) => setTemplateForm({ ...templateForm, qrCodeText: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
                    >
                      <option value="Date Of Birth">Date Of Birth</option>
                      <option value="Admission Number">Admission Number</option>
                      <option value="Roll Number">Roll Number</option>
                      <option value="Blood Group">Blood Group</option>
                      <option value="Aadhaar UID">Aadhaar UID</option>
                    </select>
                  </div>
                </div>

                {/* User Photo Style & Size */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <label className="font-bold text-slate-700 dark:text-slate-300 md:text-right">User Photo Style *</label>
                  <div className="md:col-span-3 grid grid-cols-2 gap-4">
                    <select
                      value={templateForm.userPhotoStyle}
                      onChange={(e) => setTemplateForm({ ...templateForm, userPhotoStyle: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
                    >
                      <option value="Square">Square</option>
                      <option value="Rounded">Rounded</option>
                      <option value="Circle">Circle</option>
                    </select>
                    <div className="relative">
                      <input
                        type="number"
                        value={templateForm.photoSize}
                        onChange={(e) => setTemplateForm({ ...templateForm, photoSize: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-[10px]">Photo Size (px)</span>
                    </div>
                  </div>
                </div>

                {/* Layout Spacing */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <label className="font-bold text-slate-700 dark:text-slate-300 md:text-right">Layout Spacing *</label>
                  <div className="md:col-span-3 grid grid-cols-4 gap-2">
                    <input
                      type="number"
                      value={templateForm.layoutSpacingTop}
                      onChange={(e) => setTemplateForm({ ...templateForm, layoutSpacingTop: e.target.value })}
                      placeholder="Top"
                      className="w-full p-2 rounded-xl border bg-slate-50 dark:bg-slate-800 text-center font-bold"
                    />
                    <input
                      type="number"
                      value={templateForm.layoutSpacingRight}
                      onChange={(e) => setTemplateForm({ ...templateForm, layoutSpacingRight: e.target.value })}
                      placeholder="Right"
                      className="w-full p-2 rounded-xl border bg-slate-50 dark:bg-slate-800 text-center font-bold"
                    />
                    <input
                      type="number"
                      value={templateForm.layoutSpacingBottom}
                      onChange={(e) => setTemplateForm({ ...templateForm, layoutSpacingBottom: e.target.value })}
                      placeholder="Bottom"
                      className="w-full p-2 rounded-xl border bg-slate-50 dark:bg-slate-800 text-center font-bold"
                    />
                    <input
                      type="number"
                      value={templateForm.layoutSpacingLeft}
                      onChange={(e) => setTemplateForm({ ...templateForm, layoutSpacingLeft: e.target.value })}
                      placeholder="Left"
                      className="w-full p-2 rounded-xl border bg-slate-50 dark:bg-slate-800 text-center font-bold"
                    />
                  </div>
                </div>

                {/* File Upload Triggers */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <label className="font-bold text-slate-700 dark:text-slate-300 md:text-right">Signature Image</label>
                  <div className="md:col-span-3">
                    <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold flex items-center gap-1.5 shadow-sm">
                      <Upload className="w-3.5 h-3.5" /> Select File
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <label className="font-bold text-slate-700 dark:text-slate-300 md:text-right">Logo Image</label>
                  <div className="md:col-span-3">
                    <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold flex items-center gap-1.5 shadow-sm">
                      <Upload className="w-3.5 h-3.5" /> Select File
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <label className="font-bold text-slate-700 dark:text-slate-300 md:text-right">Background Image</label>
                  <div className="md:col-span-3">
                    <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold flex items-center gap-1.5 shadow-sm">
                      <Upload className="w-3.5 h-3.5" /> Select File
                    </button>
                  </div>
                </div>

                {/* Certificate / Card Dynamic Content & Shortcodes Palette */}
                <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <label className="font-bold text-slate-900 dark:text-white block">
                    Card Dynamic Content & Layout Tags *
                  </label>
                  
                  {/* Tag Pill Selector */}
                  <div className="flex flex-wrap gap-1.5 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
                    {shortcodeTags.map(tag => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => insertTagToContent(tag)}
                        className="px-2 py-1 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-900 font-mono text-[10px] font-bold border border-blue-300 transition-all active:scale-95"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  <textarea
                    rows={4}
                    value={templateForm.certificateContent}
                    onChange={(e) => setTemplateForm({ ...templateForm, certificateContent: e.target.value })}
                    className="w-full p-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono text-xs text-slate-900 dark:text-white leading-relaxed"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setTemplateTab('list')}
                    className="px-5 py-2.5 text-slate-500 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" /> {templateForm.id ? 'Update Template' : 'Save & Create Template'}
                  </button>
                </div>
              </form>
            </div>
          )}

        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 2 & 3 & 4: CANDIDATE SELECTION ROSTER & BATCH PRINT SHEET */}
      {/* ========================================================================= */}
      {(activeSection === 'student_cards' || activeSection === 'employee_cards' || activeSection === 'admit_cards') && (
        <div className="space-y-6">
          
          {/* Candidate Checkbox Roster Table (Hidden on Print) */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 print:hidden">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-blue-600" />
                  Candidate Selection for {activeSection === 'student_cards' ? 'Student Cards' : activeSection === 'employee_cards' ? 'Staff Cards' : 'Exam Admit Cards'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Unchecking a student keeps them in the roster, but excludes their card from printing.
                </p>
              </div>

              {/* Template & Filter Switcher */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs font-bold">
                  <span className="text-slate-500">Template:</span>
                  <select
                    value={activeTemplateId}
                    onChange={(e) => setActiveTemplateId(e.target.value)}
                    className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-300 font-bold border border-blue-200 dark:border-blue-800"
                  >
                    {templates.map(t => (
                      <option key={t.id} value={t.id}>{t.name} ({t.pageLayout?.width}x{t.pageLayout?.height}mm)</option>
                    ))}
                  </select>
                </div>

                {activeSection !== 'employee_cards' ? (
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="p-2 text-xs font-bold rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  >
                    <option value="All">All Classes (1 to 12)</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 8">Class 8</option>
                  </select>
                ) : (
                  <select
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="p-2 text-xs font-bold rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  >
                    <option value="All">All Departments</option>
                    <option value="Science">Science</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Languages">Languages</option>
                    <option value="Computer Science">Computer Science</option>
                  </select>
                )}

                <div className="relative w-44">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search candidate..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  />
                </div>
              </div>
            </div>

            {/* Quick Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-blue-50/60 dark:bg-blue-950/30 p-3 rounded-2xl border border-blue-100 dark:border-blue-900">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSelectAll}
                  className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-xs font-bold text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 hover:bg-blue-50 flex items-center gap-1.5 shadow-xs"
                >
                  <CheckSquare className="w-3.5 h-3.5" /> Select All ({currentRoster.length})
                </button>
                <button
                  type="button"
                  onClick={handleClearSelection}
                  className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 flex items-center gap-1.5 shadow-xs"
                >
                  <Square className="w-3.5 h-3.5" /> Clear All
                </button>
              </div>

              <div className="text-xs font-bold text-blue-900 dark:text-blue-300">
                <span className="bg-blue-600 text-white px-2.5 py-0.5 rounded-lg mr-1.5 font-black">{selectedIds.size}</span>
                out of <span className="text-slate-700 dark:text-slate-300">{currentRoster.length}</span> candidates ready to print
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                    <th className="p-3 w-12 text-center">Include</th>
                    <th className="p-3">Candidate Details</th>
                    <th className="p-3">Roll / ID</th>
                    <th className="p-3">Class / Dept</th>
                    <th className="p-3">Parent & Contact</th>
                    <th className="p-3">Blood Group</th>
                    <th className="p-3 text-center">Print Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filteredRoster.map(item => {
                    const isChecked = selectedIds.has(item.id);
                    return (
                      <tr
                        key={item.id}
                        onClick={() => handleToggleSelect(item.id)}
                        className={`cursor-pointer transition-colors ${
                          isChecked
                            ? 'bg-blue-50/50 dark:bg-blue-950/25 hover:bg-blue-50 dark:hover:bg-blue-950/40'
                            : 'hover:bg-slate-50 dark:hover:bg-slate-800/40 opacity-75'
                        }`}
                      >
                        <td className="p-3 text-center" onClick={(e) => e.stopPropagation()}>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleToggleSelect(item.id)}
                            className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                          />
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-2.5">
                            <img src={item.photo} alt={item.name} className="w-8 h-8 rounded-lg object-cover ring-1 ring-slate-200" />
                            <div>
                              <p className="font-bold text-slate-900 dark:text-white">{item.name}</p>
                              <p className="text-[10px] text-slate-400 font-mono">{item.admissionNo || item.employeeId}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 font-mono font-bold text-blue-700 dark:text-blue-400">
                          {item.rollNo ? `#${item.rollNo}` : item.employeeId}
                        </td>
                        <td className="p-3 font-semibold text-slate-700 dark:text-slate-300">
                          {item.class ? `${item.class}-${item.section}` : item.department}
                        </td>
                        <td className="p-3">
                          <p className="text-slate-800 dark:text-slate-200">{item.parents?.fatherName || item.email}</p>
                          <p className="text-[10px] text-slate-400 font-mono">{item.parents?.fatherMobile || item.mobile}</p>
                        </td>
                        <td className="p-3">
                          <span className="font-bold text-rose-600">{item.bloodGroup || 'O+'}</span>
                        </td>
                        <td className="p-3 text-center">
                          {isChecked ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-[10px] border border-emerald-200 dark:border-emerald-800">
                              <Check className="w-3 h-3" /> Ready to Print
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-medium text-[10px]">
                              Skipped
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

          </div>

          {/* 🖨️ Print Preview Sheet */}
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm print:hidden">
              <div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Printer className="w-5 h-5 text-blue-600" />
                  Print Preview Sheet ({selectedCardsToPrint.length} Cards Selected)
                </h4>
                <p className="text-xs text-slate-500">
                  Active Template: <strong className="text-blue-700">{activeTemplate.name}</strong> ({activeTemplate.pageLayout?.width}mm x {activeTemplate.pageLayout?.height}mm)
                </p>
              </div>
              <button
                type="button"
                onClick={() => window.print()}
                disabled={selectedCardsToPrint.length === 0}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl text-xs font-black shadow-lg shadow-blue-500/25 flex items-center gap-2 transition-all hover:scale-105"
              >
                <Printer className="w-4 h-4" /> Print {selectedCardsToPrint.length} Cards (PDF)
              </button>
            </div>

            {/* Print Area */}
            <div className="print-area">
              {selectedCardsToPrint.length === 0 ? (
                <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 print:hidden">
                  <p className="text-sm font-bold text-slate-500">No candidates selected. Check boxes in the roster above to generate print sheet.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-4 print:w-full">
                  {selectedCardsToPrint.map((item, idx) => (
                    <div
                      key={item.id || idx}
                      className="bg-white rounded-2xl border-2 border-slate-300 print:border-slate-400 p-4 shadow-sm relative overflow-hidden flex flex-col justify-between text-slate-900 break-inside-avoid print:shadow-none"
                      style={{ minHeight: `${activeTemplate.pageLayout?.height ? activeTemplate.pageLayout.height * 2.8 : 260}px` }}
                    >
                      {/* Card Header */}
                      <div className="flex items-center justify-between border-b border-indigo-100 pb-2 mb-3 bg-gradient-to-r from-blue-50 to-indigo-50 p-2.5 rounded-xl pr-2">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-xs">
                            E
                          </div>
                          <div>
                            <h5 className="text-[11px] font-black text-slate-900 leading-tight">{activeTemplate.branch}</h5>
                            <span className="text-[8px] font-bold text-blue-700 uppercase">{activeTemplate.name}</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                          {item.academicSession || "2026-27"}
                        </span>
                      </div>

                      {/* Card Body */}
                      <div className="flex gap-3 items-center">
                        <img
                          src={item.photo || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150"}
                          alt={item.name}
                          className="w-16 h-16 rounded-xl object-cover ring-2 ring-blue-500/20 shrink-0"
                        />
                        <div className="text-[10px] space-y-0.5 flex-1">
                          <p className="text-sm font-black text-slate-900">{item.name}</p>
                          <p className="text-slate-600 font-bold">
                            {item.class ? `Class: ${item.class}-${item.section} • Roll: #${item.rollNo}` : `Designation: ${item.designation} • Dept: ${item.department}`}
                          </p>
                          <p className="text-slate-600 font-medium">Adm / Reg No: <strong className="font-mono text-slate-900">{item.admissionNo || item.employeeId}</strong></p>
                          <p className="text-slate-600 font-medium">
                            Contact: <strong className="text-slate-900">{item.parents?.fatherMobile || item.mobile || "+91 98110 00000"}</strong>
                          </p>
                          <div className="flex flex-wrap gap-2 text-slate-600 font-medium pt-0.5">
                            <span className="flex items-center gap-0.5 text-rose-600 font-bold">
                              <Droplet className="w-3 h-3" /> {item.bloodGroup || "O+"}
                            </span>
                            <span>• QR: <strong>{activeTemplate.qrCodeField}</strong></span>
                          </div>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="mt-3 pt-2 border-t border-slate-100 flex justify-between items-center text-[9px] font-bold text-slate-500">
                        <span className="font-mono">Card Serial: #{item.admissionNo || item.employeeId || "DPGA-9823"}</span>
                        <span className="text-indigo-900 font-black">Authorized Signatory</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 5: ISSUED CERTIFICATES (TC, Bonafide, Conduct) */}
      {/* ========================================================================= */}
      {activeSection === 'certificates' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Official Institutional Certificates
            </h3>
            <button
              onClick={() => setIsGenerateCertModalOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20"
            >
              + Issue Certificate
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                  <th className="p-3.5">Certificate Serial</th>
                  <th className="p-3.5">Student Name</th>
                  <th className="p-3.5">Class</th>
                  <th className="p-3.5">Certificate Type</th>
                  <th className="p-3.5">Issue Date</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {certificates.map(cert => (
                  <tr key={cert.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-3.5 font-mono font-bold text-slate-900 dark:text-white">{cert.certificateNo}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{cert.studentName}</td>
                    <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-300">{cert.class}</td>
                    <td className="p-3.5 font-bold text-blue-600 dark:text-blue-400">{cert.type}</td>
                    <td className="p-3.5 text-slate-500">{cert.issueDate}</td>
                    <td className="p-3.5">
                      <Badge variant="success" size="sm">{cert.status}</Badge>
                    </td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => { setSelectedCert(cert); setIsCertModalOpen(true); }}
                        className="px-3 py-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-lg font-bold hover:bg-blue-100 flex items-center gap-1.5 ml-auto"
                      >
                        <Printer className="w-3.5 h-3.5" /> Print
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      <Modal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
        title="Official Institutional Certificate"
        maxWidth="max-w-4xl"
      >
        {selectedCert && (
          <PrintableCertificate certificate={selectedCert} schoolInfo={schoolInfo} />
        )}
      </Modal>

      {/* Issue Certificate Form Modal */}
      <Modal
        isOpen={isGenerateCertModalOpen}
        onClose={() => setIsGenerateCertModalOpen(false)}
        title="Issue Official Institutional Certificate"
        maxWidth="max-w-md"
      >
        <form onSubmit={handleGenerateCertificate} className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select Student *</label>
            <select
              value={certForm.studentId}
              onChange={(e) => setCertForm({ ...certForm, studentId: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
            >
              {students.map(s => (
                <option key={s.id} value={s.id}>{s.name} ({s.class}-{s.section} • Roll #{s.rollNo})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Certificate Type *</label>
            <select
              value={certForm.type}
              onChange={(e) => setCertForm({ ...certForm, type: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
            >
              <option value="Bonafide Certificate">Bonafide Certificate</option>
              <option value="Transfer Certificate (TC)">School Transfer Certificate (TC)</option>
              <option value="Character Certificate">Character & Conduct Certificate</option>
              <option value="Fee Clearance Certificate">Fee Clearance Certificate</option>
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Purpose / Reason *</label>
            <input
              type="text"
              required
              value={certForm.purpose}
              onChange={(e) => setCertForm({ ...certForm, purpose: e.target.value })}
              placeholder="e.g. Passport, Visa, Higher Studies Admission"
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button type="button" onClick={() => setIsGenerateCertModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
            <button type="submit" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg">
              Generate & Print Certificate
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
