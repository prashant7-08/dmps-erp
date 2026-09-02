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
  Droplet,
  Calendar,
  BookOpen
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import { PrintableCertificate } from '../components/printables/PrintableCertificate';
import schoolService from '../services/schoolService';

export const CertificatesIdPage = ({ initialSection = 'student_cards' }) => {
  const { showToast } = useToast();
  const students = schoolService.getStudents();
  const teachers = schoolService.getTeachers();
  const schoolInfo = schoolService.getSchoolInfo();

  const resolveSection = (sec) => {
    if (!sec) return 'student_cards';
    if (sec === 'card-id-template' || sec === 'id-template' || sec === 'templates') return 'templates';
    if (sec === 'card-student-id' || sec === 'student-id' || sec === 'student_cards') return 'student_cards';
    if (sec === 'card-employee-id' || sec === 'employee-id' || sec === 'employee_cards') return 'employee_cards';
    if (sec === 'card-admit-template' || sec === 'admit-template' || sec === 'admit_template') return 'admit_template';
    if (sec === 'card-generate-admit' || sec === 'generate-admit' || sec === 'admit_cards' || sec === 'admit-cards') return 'admit_cards';
    if (sec === 'cert-template' || sec === 'cert_template') return 'cert_template';
    if (sec === 'cert-generate-student' || sec === 'certificates' || sec === 'student-cert' || sec.includes('certificate')) return 'certificates';
    if (sec === 'cert-generate-employee' || sec === 'employee-cert' || sec === 'employee_certificates') return 'employee_certificates';
    return sec;
  };

  // Active Sub-Section: 'templates' | 'student_cards' | 'employee_cards' | 'admit_template' | 'admit_cards' | 'cert_template' | 'certificates' | 'employee_certificates'
  const [activeSection, setActiveSection] = useState(() => resolveSection(initialSection));
  
  useEffect(() => {
    if (initialSection) {
      setActiveSection(resolveSection(initialSection));
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
      name: "STUDENT'S CARD (LANDSCAPE)",
      applicableUser: 'Student',
      pageLayout: { width: 88, height: 55, unit: 'mm' },
      photoStyle: 'Square',
      photoSize: 70,
      qrCodeField: 'Admission No',
      themeColor: 'blue',
      createdAt: '28-Apr-2026'
    },
    {
      id: 'TMPL-003',
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
      id: 'TMPL-004',
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
      id: 'TMPL-005',
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

  // Template Form State (For Add / Edit Template Designer matching Screenshot)
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

  // 📜 Institutional Certificate Templates State (Pre-filled demo templates)
  const [certTemplateTab, setCertTemplateTab] = useState('list');
  const [certSearchQuery, setCertSearchQuery] = useState('');
  const [certificateTemplates, setCertificateTemplates] = useState([
    {
      id: 'CERT-TMPL-01',
      branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)',
      name: 'TRANSFER CERTIFICATE (T.C.)',
      applicableUser: 'Student',
      pageLayout: 'Portrait A4 (210 x 297 mm)',
      bgImage: 'Official DMPS Crest Border',
      createdAt: '25-Apr-2026',
      content: 'This is to certify that [name], S/D of Shri [father_name] and Smt [mother_name], was admitted to this institution in Class [class] under Admission No [admission_no]. His/Her Date of Birth according to the Admission Register is [dob]. He/She has paid all school dues and his/her conduct has been [character].'
    },
    {
      id: 'CERT-TMPL-02',
      branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)',
      name: 'STUDENT BONAFIDE / STUDY CERTIFICATE',
      applicableUser: 'Student',
      pageLayout: 'Portrait A4 (210 x 297 mm)',
      bgImage: 'Letterhead Watermark',
      createdAt: '26-Apr-2026',
      content: 'This is to certify that [name], Son/Daughter of Shri [father_name], is a bonafide student of Class [class], Section [section], Roll No [roll] during the academic session [session]. To the best of our knowledge, he/she bears a good moral character.'
    },
    {
      id: 'CERT-TMPL-03',
      branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)',
      name: 'CHARACTER & CONDUCT CERTIFICATE',
      applicableUser: 'Student',
      pageLayout: 'Portrait A4 (210 x 297 mm)',
      bgImage: 'Golden Border Crest',
      createdAt: '27-Apr-2026',
      content: 'Certified that [name], S/o / D/o Shri [father_name], has been a regular student of this school from [admission_date] to [issue_date]. During his/her stay in the school, his/her character, conduct and behaviour were found to be Exemplary & Commendable.'
    },
    {
      id: 'CERT-TMPL-04',
      branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)',
      name: 'ACADEMIC EXCELLENCE & SPORTS MERIT AWARD',
      applicableUser: 'Student',
      pageLayout: 'Landscape A4 (297 x 210 mm)',
      bgImage: 'Ornate Golden Shield Background',
      createdAt: '28-Apr-2026',
      content: 'This Certificate of Honor & Distinction is proudly presented to [name] of Class [class] for securing [percentage]% / 1st Position in [event_name] during the Annual Academic & Athletic Meet.'
    },
    {
      id: 'CERT-TMPL-05',
      branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)',
      name: 'FEE CLEARANCE & NO DUES CERTIFICATE',
      applicableUser: 'Student',
      pageLayout: 'Portrait A4 (210 x 297 mm)',
      bgImage: 'Plain Official Border',
      createdAt: '29-Apr-2026',
      content: 'It is hereby certified that [name], Admission No [admission_no], Class [class] has cleared all tuition fees, transport charges and examination dues for Session [session]. No dues are pending against him/her.'
    },
    {
      id: 'CERT-TMPL-06',
      branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)',
      name: 'DATE OF BIRTH VERIFICATION CERTIFICATE',
      applicableUser: 'Student',
      pageLayout: 'Portrait A4 (210 x 297 mm)',
      bgImage: 'Official Seal Letterhead',
      createdAt: '30-Apr-2026',
      content: 'As per School Admission Register Folio #[admission_no], the Date of Birth of [name], S/D of Shri [father_name] and Smt [mother_name] is [dob] ([dob_words]).'
    },
    {
      id: 'CERT-TMPL-07',
      branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)',
      name: 'EMPLOYEE EXPERIENCE & CONDUCT CERTIFICATE',
      applicableUser: 'Employee',
      pageLayout: 'Portrait A4 (210 x 297 mm)',
      bgImage: 'Official Letterhead',
      createdAt: '20-Apr-2026',
      content: 'This is to certify that [teacher_name] has worked in our institution as [designation] in the Department of [department] from [joining_date] to [relieving_date]. During his/her tenure, we found him/her sincere, hardworking and dedicated.'
    },
    {
      id: 'CERT-TMPL-08',
      branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)',
      name: 'APPOINTMENT & SERVICE CONFIRMATION LETTER',
      applicableUser: 'Employee',
      pageLayout: 'Portrait A4 (210 x 297 mm)',
      bgImage: 'Official Letterhead',
      createdAt: '22-Apr-2026',
      content: 'We are pleased to confirm your appointment as [designation] at Dadheech Memorial Public School with effect from [joining_date]. Your employee code is [employee_code].'
    }
  ]);

  const [certTemplateForm, setCertTemplateForm] = useState({
    id: null,
    branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)',
    name: '',
    applicableUser: 'Student',
    pageLayout: 'Portrait A4 (210 x 297 mm)',
    bgImage: 'Official DMPS Crest Border',
    content: ''
  });

  // Bulk Generation State for ID Cards
  const [selectedClass, setSelectedClass] = useState('Class 10');
  const [selectedDept, setSelectedDept] = useState('All');
  const [activeTemplateId, setActiveTemplateId] = useState('TMPL-001');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIds, setSelectedIds] = useState(new Set());

  // 🎯 Exam Connection State for Admit Cards
  const [examList, setExamList] = useState([
    {
      id: 'EXM-01',
      name: 'CBSE Half Yearly Examination 2026-27',
      session: '2026-2027',
      term: 'Term 1',
      centerName: 'Dadheech Memorial Senior Campus (Center Code: 8102)',
      reportingTime: '08:15 AM Sharp'
    },
    {
      id: 'EXM-02',
      name: 'CBSE / BSB Annual Board Examination 2026-27',
      session: '2026-2027',
      term: 'Term 2',
      centerName: 'Dadheech Memorial Senior Campus (Center Code: 8102)',
      reportingTime: '08:15 AM Sharp'
    },
    {
      id: 'EXM-03',
      name: 'Periodic Assessment 1 (PA-1)',
      session: '2026-2027',
      term: 'Unit Test',
      centerName: 'Home Center (Main Wing)',
      reportingTime: '07:45 AM Sharp'
    }
  ]);

  const [selectedExamId, setSelectedExamId] = useState('EXM-01');

  // Connected Exam Date Sheets from Examination Scheme
  const examDateSheets = {
    'EXM-01': [
      { date: '15-Sep-2026', day: 'Monday', time: '08:30 AM - 11:30 AM', subjectCode: '041', subject: 'Mathematics Standard', maxMarks: 80, room: 'Exam Hall 1 (GF)' },
      { date: '17-Sep-2026', day: 'Wednesday', time: '08:30 AM - 11:30 AM', subjectCode: '086', subject: 'Science (Theory & Practicals)', maxMarks: 80, room: 'Exam Hall 1 (GF)' },
      { date: '19-Sep-2026', day: 'Friday', time: '08:30 AM - 11:30 AM', subjectCode: '184', subject: 'English Language & Literature', maxMarks: 80, room: 'Exam Hall 1 (GF)' },
      { date: '22-Sep-2026', day: 'Monday', time: '08:30 AM - 11:30 AM', subjectCode: '087', subject: 'Social Science (History, Civics, Geo)', maxMarks: 80, room: 'Exam Hall 1 (GF)' },
      { date: '24-Sep-2026', day: 'Wednesday', time: '08:30 AM - 11:30 AM', subjectCode: '002', subject: 'Hindi Course A', maxMarks: 80, room: 'Exam Hall 1 (GF)' },
      { date: '26-Sep-2026', day: 'Friday', time: '08:30 AM - 10:30 AM', subjectCode: '165', subject: 'Computer Applications & IT', maxMarks: 50, room: 'Senior Lab' }
    ],
    'EXM-02': [
      { date: '15-Feb-2027', day: 'Monday', time: '08:30 AM - 11:30 AM', subjectCode: '041', subject: 'Mathematics Standard (Final Board)', maxMarks: 80, room: 'Auditorium Hall' },
      { date: '18-Feb-2027', day: 'Thursday', time: '08:30 AM - 11:30 AM', subjectCode: '086', subject: 'Science (Theory & Lab Exam)', maxMarks: 80, room: 'Auditorium Hall' },
      { date: '22-Feb-2027', day: 'Monday', time: '08:30 AM - 11:30 AM', subjectCode: '184', subject: 'English Language & Literature', maxMarks: 80, room: 'Auditorium Hall' },
      { date: '25-Feb-2027', day: 'Thursday', time: '08:30 AM - 11:30 AM', subjectCode: '087', subject: 'Social Science', maxMarks: 80, room: 'Auditorium Hall' },
      { date: '01-Mar-2027', day: 'Monday', time: '08:30 AM - 11:30 AM', subjectCode: '002', subject: 'Hindi Course A', maxMarks: 80, room: 'Auditorium Hall' }
    ],
    'EXM-03': [
      { date: '20-Jul-2026', day: 'Monday', time: '08:00 AM - 09:30 AM', subjectCode: '041', subject: 'Mathematics (PA-1)', maxMarks: 25, room: 'Classroom' },
      { date: '21-Jul-2026', day: 'Tuesday', time: '08:00 AM - 09:30 AM', subjectCode: '086', subject: 'Science (PA-1)', maxMarks: 25, room: 'Classroom' },
      { date: '22-Jul-2026', day: 'Wednesday', time: '08:00 AM - 09:30 AM', subjectCode: '184', subject: 'English (PA-1)', maxMarks: 25, room: 'Classroom' },
      { date: '23-Jul-2026', day: 'Thursday', time: '08:00 AM - 09:30 AM', subjectCode: '087', subject: 'Social Science (PA-1)', maxMarks: 25, room: 'Classroom' },
      { date: '24-Jul-2026', day: 'Friday', time: '08:00 AM - 09:30 AM', subjectCode: '002', subject: 'Hindi (PA-1)', maxMarks: 25, room: 'Classroom' }
    ]
  };

  const currentExam = examList.find(e => e.id === selectedExamId) || examList[0];
  const currentExamDateSheet = examDateSheets[selectedExamId] || examDateSheets['EXM-01'];

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

  // All 28 Shortcode tags list from DMPS
  const shortcodeTags = [
    '[name]', '[gender]', '[father_name]', '[mother_name]', '[student_photo]',
    '[register_no]', '[roll]', '[admission_date]', '[class]', '[section]',
    '[category]', '[caste]', '[religion]', '[blood_group]', '[birthday]', '[email]', '[mobileno]',
    '[present_address]', '[permanent_address]', '[logo]', '[signature]', '[qr_code]',
    '[institute_name]', '[institute_email]', '[institute_address]', '[institute_mobile_no]',
    '[print_date]', '[expiry_date]'
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

  // Active Template definition for printing ID Cards
  const activeTemplate = templates.find(t => t.id === activeTemplateId) || templates[0] || {
    id: 'TMPL-001',
    branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)',
    name: "STUDENT'S CARD",
    applicableUser: 'Student',
    pageLayout: { width: 55, height: 88, unit: 'mm' },
    photoStyle: 'Square',
    photoSize: 70,
    qrCodeField: 'Date Of Birth',
    themeColor: 'blue'
  };

  // Auto-select all candidates when section, class, or exam changes
  useEffect(() => {
    setSelectedIds(new Set(currentRoster.map(r => r.id)));
  }, [activeSection, selectedClass, selectedDept, selectedExamId]);

  const filteredRoster = currentRoster.filter(item => {
    const q = searchQuery.toLowerCase();
    const nameMatch = (item.name || '').toLowerCase().includes(q);
    const rollMatch = item.rollNo ? String(item.rollNo).includes(q) : false;
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

  // Dynamic Header based on active section
  const getSectionMetadata = () => {
    switch (activeSection) {
      case 'templates':
        return {
          icon: '🪪',
          title: 'Id Card Template Master',
          subtitle: 'Design ID card templates, layout dimensions (width x height mm), and shortcode tags.',
          badge: 'Template Designer'
        };
      case 'student_cards':
        return {
          icon: '🎓',
          title: 'Student ID Cards Batch Generator',
          subtitle: 'Select students by class/section, configure template and print batch ID cards.',
          badge: 'Student ID Batch'
        };
      case 'employee_cards':
        return {
          icon: '👥',
          title: 'Employee & Faculty ID Card Generator',
          subtitle: 'Generate official staff and faculty ID cards with employee code and QR.',
          badge: 'Faculty & Staff'
        };
      case 'admit_template':
        return {
          icon: '🎫',
          title: 'Admit Card Template & Hall Ticket Setup',
          subtitle: 'Design examination admit card formats, student photo position, and instructions.',
          badge: 'CBSE Exam'
        };
      case 'admit_cards':
        return {
          icon: '📋',
          title: 'Generate Student Admit Cards (Exam Scheme Connected)',
          subtitle: 'Issue and batch print examination hall tickets connected directly to Exam Master schedule & date sheet.',
          badge: 'Exam Scheme Live'
        };
      case 'cert_template':
        return {
          icon: '📜',
          title: 'Institutional Certificate Templates',
          subtitle: 'Design Transfer Certificate (TC), Bonafide, Character & Merit certificate layouts.',
          badge: 'Template Master'
        };
      case 'certificates':
        return {
          icon: '🎖️',
          title: 'Student Official Certificates (TC / Bonafide / Character)',
          subtitle: 'Generate and issue official student certificates with serial tracking & print format.',
          badge: 'Student Register'
        };
      case 'employee_certificates':
        return {
          icon: '👔',
          title: 'Employee Certificates & Experience Letters',
          subtitle: 'Issue faculty experience certificates, relieving letters and service credentials.',
          badge: 'Staff Credentials'
        };
      default:
        return {
          icon: '🪪',
          title: 'Card Management & Certificates Suite',
          subtitle: 'Manage ID cards, admit cards and institutional certificates.',
          badge: 'DMPS ERP'
        };
    }
  };

  const meta = getSectionMetadata();

  return (
    <div className="space-y-6 animate-in fade-in duration-300">

      {/* 🧭 Top 5-Tab Navigation Bar for CARD MANAGEMENT (Exact match to old software) */}
      {(['templates', 'student_cards', 'employee_cards', 'admit_template', 'admit_cards'].includes(activeSection)) && (
        <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-x-auto custom-scrollbar print:hidden">
          <div className="flex items-center gap-1 min-w-max text-xs font-bold">
            {[
              { id: 'templates', label: '🪪 Id Card Templete', count: templates.length },
              { id: 'student_cards', label: '🎓 Student Id Card', count: students.length },
              { id: 'employee_cards', label: '👥 Employee Id Card', count: teachers.length },
              { id: 'admit_template', label: '🎫 Admit Card Templete', count: 'CBSE' },
              { id: 'admit_cards', label: '📋 Generate Admit Card', count: 'Live' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeSection === tab.id
                    ? 'bg-blue-600 text-white shadow-md font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    activeSection === tab.id
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 🧭 Top 3-Tab Navigation Bar for CERTIFICATES */}
      {(['cert_template', 'certificates', 'employee_certificates'].includes(activeSection)) && (
        <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-x-auto custom-scrollbar print:hidden">
          <div className="flex items-center gap-1 min-w-max text-xs font-bold">
            {[
              { id: 'cert_template', label: '📜 Certificate Template', count: 4 },
              { id: 'certificates', label: '🎓 Student Certificate (TC/Character/Merit)', count: certificates.length },
              { id: 'employee_certificates', label: '👥 Employee Experience & Relieving Certificate', count: 3 }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeSection === tab.id
                    ? 'bg-blue-600 text-white shadow-md font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    activeSection === tab.id
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 🏷️ Master Breadcrumb Header (Hidden on Print) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-indigo-500/25">
            {meta.icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                {meta.title}
              </h2>
              <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 font-bold text-[10px] border border-indigo-200">
                {meta.badge}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {meta.subtitle}
            </p>
          </div>
        </div>

        {/* Action Button for Templates or Issue */}
        {activeSection === 'templates' && (
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
              setTemplateTab('create_edit');
            }}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-2 transition-all hover:scale-105"
          >
            <Plus className="w-4 h-4" /> Add Id Card Template
          </button>
        )}

        {activeSection === 'certificates' && (
          <button
            onClick={() => setIsGenerateCertModalOpen(true)}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-2 transition-all hover:scale-105"
          >
            <Plus className="w-4 h-4" /> Issue Student Certificate
          </button>
        )}
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: ID CARD TEMPLATE (Exact DMPS Screenshot Form & List) */}
      {/* ========================================================================= */}
      {activeSection === 'templates' && (
        <div className="space-y-6">
          
          {/* Sub-tabs: Id Card List | Add/Edit Id Card */}
          <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl w-fit print:hidden">
            <button
              onClick={() => setTemplateTab('list')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                templateTab === 'list' ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <Layers className="w-4 h-4" /> Id Card List
            </button>
            <button
              onClick={() => setTemplateTab('create_edit')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                templateTab === 'create_edit' ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <Edit className="w-4 h-4" /> {templateForm.id ? 'Edit Id Card Template' : 'Add Id Card Template'}
            </button>
          </div>

          {/* 📋 VIEW A: EXACT DMPS TEMPLATE LIST TABLE */}
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
                      <tr key={tmpl.id} className="hover:bg-indigo-50/40 dark:hover:bg-slate-800/40 transition-colors">
                        <td className="p-3.5 font-bold text-slate-500">{idx + 1}</td>
                        <td className="p-3.5 font-bold text-slate-800 dark:text-slate-200 max-w-[240px] truncate">{tmpl.branch}</td>
                        <td className="p-3.5 font-black text-indigo-700 dark:text-indigo-400">{tmpl.name}</td>
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
                              className="p-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow-xs"
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

          {/* ✏️ VIEW B: EXACT DMPS TEMPLATE DESIGNER FORM (Matching User Screenshot) */}
          {templateTab === 'create_edit' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-indigo-600" />
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
                      <option value="DELHI MODEL PUBLIC SCHOOL MAIN SENIOR CAMPUS">DELHI MODEL PUBLIC SCHOOL MAIN SENIOR CAMPUS</option>
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
                      <option value="Employee ID">Employee ID</option>
                      <option value="Student PEN No">Student PEN No</option>
                      <option value="Mobile No">Mobile No</option>
                      <option value="Blood Group">Blood Group</option>
                      <option value="Route No">Route No</option>
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
                    <button type="button" onClick={() => showToast('Signature file selected', 'info')} className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold flex items-center gap-1.5 shadow-sm">
                      <Upload className="w-3.5 h-3.5" /> Select File
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <label className="font-bold text-slate-700 dark:text-slate-300 md:text-right">Logo Image</label>
                  <div className="md:col-span-3">
                    <button type="button" onClick={() => showToast('School logo file selected', 'info')} className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold flex items-center gap-1.5 shadow-sm">
                      <Upload className="w-3.5 h-3.5" /> Select File
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <label className="font-bold text-slate-700 dark:text-slate-300 md:text-right">Background Image</label>
                  <div className="md:col-span-3">
                    <button type="button" onClick={() => showToast('Background image template selected', 'info')} className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold flex items-center gap-1.5 shadow-sm">
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
                        className="px-2 py-1 rounded-lg bg-indigo-100 hover:bg-indigo-200 text-indigo-900 font-mono text-[10px] font-bold border border-indigo-300 transition-all active:scale-95"
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
                    className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 flex items-center gap-2"
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
      {/* SECTION 2 & 3: ID CARD CANDIDATE ROSTER & PRINT SHEET (Students & Staff) */}
      {/* ========================================================================= */}
      {(activeSection === 'student_cards' || activeSection === 'employee_cards') && (
        <div className="space-y-6">
          
          {/* Candidate Checkbox Roster Table (Hidden on Print) */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 print:hidden">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-indigo-600" />
                  Candidate Selection for {activeSection === 'student_cards' ? 'Student ID Cards' : 'Staff Smart ID Cards'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Unchecking a member keeps them in the directory, but excludes their card from printing.
                </p>
              </div>

              {/* Template & Filter Switcher */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs font-bold">
                  <span className="text-slate-500">Template:</span>
                  <select
                    value={activeTemplateId}
                    onChange={(e) => setActiveTemplateId(e.target.value)}
                    className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-300 font-bold border border-indigo-200 dark:border-indigo-800"
                  >
                    {templates.map(t => (
                      <option key={t.id} value={t.id}>{t.name} ({t.pageLayout?.width}x{t.pageLayout?.height}mm)</option>
                    ))}
                  </select>
                </div>

                {activeSection === 'student_cards' ? (
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="p-2 text-xs font-bold rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  >
                    <option value="All">All Classes (PG to 10th)</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 6">Class 6</option>
                  </select>
                ) : (
                  <select
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="p-2 text-xs font-bold rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  >
                    <option value="All">All Departments</option>
                    <option value="Administration">Administration</option>
                    <option value="Secondary">Secondary</option>
                    <option value="Junior">Junior</option>
                    <option value="Pre-Primary">Pre-Primary</option>
                    <option value="Transport">Transport</option>
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
            <div className="flex flex-wrap items-center justify-between gap-3 bg-indigo-50/60 dark:bg-indigo-950/30 p-3 rounded-2xl border border-indigo-100 dark:border-indigo-900">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSelectAll}
                  className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-xs font-bold text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700 hover:bg-indigo-50 flex items-center gap-1.5 shadow-xs"
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

              <div className="text-xs font-bold text-indigo-900 dark:text-indigo-300">
                <span className="bg-indigo-600 text-white px-2.5 py-0.5 rounded-lg mr-1.5 font-black">{selectedIds.size}</span>
                out of <span className="text-slate-700 dark:text-slate-300">{currentRoster.length}</span> cards ready to print
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
                            ? 'bg-indigo-50/50 dark:bg-indigo-950/25 hover:bg-indigo-50 dark:hover:bg-indigo-950/40'
                            : 'hover:bg-slate-50 dark:hover:bg-slate-800/40 opacity-75'
                        }`}
                      >
                        <td className="p-3 text-center" onClick={(e) => e.stopPropagation()}>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleToggleSelect(item.id)}
                            className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer"
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
                        <td className="p-3 font-mono font-bold text-indigo-700 dark:text-indigo-400">
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

          {/* 🖨️ ID Card Print Preview Sheet */}
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm print:hidden">
              <div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Printer className="w-5 h-5 text-indigo-600" />
                  Print Preview Sheet ({selectedCardsToPrint.length} Cards Selected)
                </h4>
                <p className="text-xs text-slate-500">
                  Active Template: <strong className="text-indigo-700">{activeTemplate.name}</strong> ({activeTemplate.pageLayout?.width}mm x {activeTemplate.pageLayout?.height}mm)
                </p>
              </div>
              <button
                type="button"
                onClick={() => window.print()}
                disabled={selectedCardsToPrint.length === 0}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-xs font-black shadow-lg shadow-indigo-500/25 flex items-center gap-2 transition-all hover:scale-105"
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
                          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-xs">
                            DMPS
                          </div>
                          <div>
                            <h5 className="text-[11px] font-black text-slate-900 leading-tight">{activeTemplate.branch}</h5>
                            <span className="text-[8px] font-bold text-indigo-700 uppercase">{activeTemplate.name}</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold bg-indigo-100 text-indigo-900 px-2 py-0.5 rounded">
                          {item.academicSession || "2026-27"}
                        </span>
                      </div>

                      {/* Card Body */}
                      <div className="flex gap-3 items-center">
                        <img
                          src={item.photo || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150"}
                          alt={item.name}
                          className="w-16 h-16 rounded-xl object-cover ring-2 ring-indigo-500/20 shrink-0"
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
      {/* SECTION 4: ADMIT CARD TEMPLATE SETUP */}
      {/* ========================================================================= */}
      {activeSection === 'admit_template' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                <LayoutTemplate className="w-5 h-5 text-indigo-600" />
                Admit Card Template & Hall Ticket Setup
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Design exam hall ticket layouts, exam center details, and student instructions.</p>
            </div>
            <button
              onClick={() => showToast('Admit Card Template settings saved!', 'success')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-2"
            >
              <Check className="w-4 h-4" /> Save Template
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="space-y-4">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Template Name *</label>
                <input
                  type="text"
                  defaultValue="CBSE Senior Annual Examination 2026-27 Hall Ticket"
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Exam Center Name</label>
                  <input
                    type="text"
                    defaultValue="Dadheech Memorial Senior Campus (8102)"
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Reporting Time</label>
                  <input
                    type="text"
                    defaultValue="08:15 AM Sharp"
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
                  />
                </div>
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">General Examination Instructions</label>
                <textarea
                  rows={4}
                  defaultValue={"1. Candidates must bring this original Admit Card to every exam session.\n2. Electronic devices & mobile phones are strictly prohibited in the exam hall.\n3. Students must occupy seats 15 minutes before the bell.\n4. Uniform and ID card are mandatory."}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono text-[11px]"
                />
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-white text-xs flex items-center gap-2">
                <Printer className="w-4 h-4 text-indigo-600" /> Admit Card Live Preview Layout
              </h4>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-700 shadow-sm space-y-2 text-[11px]">
                <div className="text-center border-b pb-2">
                  <p className="font-black text-slate-900 dark:text-white text-xs">{schoolInfo.name}</p>
                  <p className="text-[10px] text-slate-500 font-bold">ANNUAL CBSE / BSB EXAMINATION ADMIT CARD (2026-27)</p>
                </div>
                <div className="flex justify-between items-center py-1">
                  <div>
                    <p className="font-bold">Student: <span className="text-indigo-600">Aarav Sharma</span></p>
                    <p className="text-slate-500 text-[10px]">Class: 10th - A | Roll: #101</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 border flex items-center justify-center text-[9px] font-bold text-slate-400">
                    PHOTO
                  </div>
                </div>
                <div className="border-t pt-2 flex justify-between text-[9px] font-bold text-slate-500">
                  <span>Center: 8102 - Jargwan</span>
                  <span className="text-indigo-900 dark:text-indigo-300">Principal Signature & Seal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 5: GENERATE ADMIT CARD (CONNECTED DIRECTLY TO EXAM SCHEME) */}
      {/* ========================================================================= */}
      {activeSection === 'admit_cards' && (
        <div className="space-y-6">
          {/* Exam & Class Selection Header */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 print:hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-600" />
                  Generate Examination Admit Card / Hall Ticket
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Admit Cards are dynamically connected with the Exam Master date sheet and timetable scheme.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Exam Selector */}
                <div className="flex items-center gap-1.5 text-xs font-bold">
                  <span className="text-slate-500">Examination:</span>
                  <select
                    value={selectedExamId}
                    onChange={(e) => setSelectedExamId(e.target.value)}
                    className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-200 font-bold border border-indigo-200 dark:border-indigo-800"
                  >
                    {examList.map(ex => (
                      <option key={ex.id} value={ex.id}>{ex.name}</option>
                    ))}
                  </select>
                </div>

                {/* Class Selector */}
                <div className="flex items-center gap-1.5 text-xs font-bold">
                  <span className="text-slate-500">Class:</span>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold border border-slate-200 dark:border-slate-700"
                  >
                    <option value="Class 10">Class 10</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 6">Class 6</option>
                    <option value="All">All Classes</option>
                  </select>
                </div>

                <div className="relative w-44">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search student..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  />
                </div>
              </div>
            </div>

            {/* Connected Exam Scheme Info Banner */}
            <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900 space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-lg bg-indigo-600 text-white font-black text-[10px] uppercase tracking-wider">
                    Connected Exam Scheme
                  </span>
                  <span className="text-xs font-black text-indigo-950 dark:text-indigo-200">
                    {currentExam?.name}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                  Center: <strong className="text-slate-900 dark:text-white">{currentExam?.centerName}</strong> • Reporting: <strong className="text-slate-900 dark:text-white">{currentExam?.reportingTime}</strong>
                </span>
              </div>

              {/* Mini Date Sheet Table preview */}
              <div className="overflow-x-auto rounded-xl border border-indigo-200/60 dark:border-indigo-800/60 bg-white dark:bg-slate-900">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b">
                      <th className="p-2">Exam Date</th>
                      <th className="p-2">Day</th>
                      <th className="p-2">Subject Code & Name</th>
                      <th className="p-2">Time</th>
                      <th className="p-2">Max Marks</th>
                      <th className="p-2">Hall / Room</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {currentExamDateSheet.map((row, idx) => (
                      <tr key={idx} className="hover:bg-indigo-50/30">
                        <td className="p-2 font-mono font-bold text-indigo-700 dark:text-indigo-400">{row.date}</td>
                        <td className="p-2 font-medium text-slate-600 dark:text-slate-400">{row.day}</td>
                        <td className="p-2 font-bold text-slate-900 dark:text-white">{row.subjectCode} - {row.subject}</td>
                        <td className="p-2 font-mono text-slate-600 dark:text-slate-400">{row.time}</td>
                        <td className="p-2 font-bold text-emerald-600">{row.maxMarks}</td>
                        <td className="p-2 text-slate-600 dark:text-slate-400">{row.room}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Roster Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSelectAll}
                  className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-xs font-bold text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700 hover:bg-indigo-50 flex items-center gap-1.5 shadow-xs"
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

              <div className="text-xs font-bold text-indigo-900 dark:text-indigo-300">
                <span className="bg-indigo-600 text-white px-2.5 py-0.5 rounded-lg mr-1.5 font-black">{selectedIds.size}</span>
                out of <span className="text-slate-700 dark:text-slate-300">{currentRoster.length}</span> students ready to print Admit Card
              </div>
            </div>

            {/* Student Checkbox Table */}
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b">
                    <th className="p-3 w-12 text-center">Include</th>
                    <th className="p-3">Candidate Details</th>
                    <th className="p-3">Roll No</th>
                    <th className="p-3">Admission No</th>
                    <th className="p-3">Class & Section</th>
                    <th className="p-3">Father's Name</th>
                    <th className="p-3 text-center">Admit Card Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filteredRoster.map(item => {
                    const isChecked = selectedIds.has(item.id);
                    return (
                      <tr
                        key={item.id}
                        onClick={() => handleToggleSelect(item.id)}
                        className={`cursor-pointer transition-colors ${isChecked ? 'bg-indigo-50/40 dark:bg-indigo-950/25' : 'hover:bg-slate-50 opacity-70'}`}
                      >
                        <td className="p-3 text-center" onClick={(e) => e.stopPropagation()}>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleToggleSelect(item.id)}
                            className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                          />
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-2.5">
                            <img src={item.photo} alt={item.name} className="w-7 h-7 rounded-lg object-cover ring-1 ring-slate-200" />
                            <span className="font-bold text-slate-900 dark:text-white">{item.name}</span>
                          </div>
                        </td>
                        <td className="p-3 font-mono font-bold text-indigo-700 dark:text-indigo-400">#{item.rollNo}</td>
                        <td className="p-3 font-mono text-slate-600 dark:text-slate-300">{item.admissionNo}</td>
                        <td className="p-3 font-semibold">{item.class}-{item.section}</td>
                        <td className="p-3 text-slate-600 dark:text-slate-300">{item.parents?.fatherName || item.fatherName || 'N/A'}</td>
                        <td className="p-3 text-center">
                          {isChecked ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-[10px] border border-emerald-200">
                              <Check className="w-3 h-3" /> Ready
                            </span>
                          ) : (
                            <span className="text-[10px] text-slate-400">Excluded</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Admit Card Print Sheet */}
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm print:hidden">
              <div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Printer className="w-5 h-5 text-indigo-600" />
                  Admit Cards Print Preview ({selectedCardsToPrint.length} Admit Cards)
                </h4>
                <p className="text-xs text-slate-500">
                  Connected Scheme: <strong className="text-indigo-700">{currentExam?.name}</strong> • {currentExamDateSheet.length} Exam Sessions
                </p>
              </div>
              <button
                type="button"
                onClick={() => window.print()}
                disabled={selectedCardsToPrint.length === 0}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-xs font-black shadow-lg shadow-indigo-500/25 flex items-center gap-2 transition-all hover:scale-105"
              >
                <Printer className="w-4 h-4" /> Print {selectedCardsToPrint.length} Admit Cards (PDF)
              </button>
            </div>

            {/* Printable Hall Tickets (1 or 2 per page) */}
            <div className="space-y-8 print:space-y-6">
              {selectedCardsToPrint.map((student, idx) => (
                <div
                  key={student.id || idx}
                  className="bg-white rounded-3xl border-2 border-slate-800 p-6 shadow-md text-slate-900 break-inside-avoid print:shadow-none print:border-2 print:border-black print:p-6"
                >
                  {/* Header */}
                  <div className="text-center border-b-2 border-slate-900 pb-3 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-16 rounded-2xl bg-indigo-900 text-white flex items-center justify-center font-black text-2xl border-2 border-slate-900">
                        DMPS
                      </div>
                      <div className="flex-1 px-4">
                        <h2 className="text-xl font-black tracking-tight text-slate-900 uppercase">
                          {schoolInfo.name || 'Dadheech Memorial Public School'}
                        </h2>
                        <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">
                          RAMGHAT ROAD BORDER, JARGWAN, BULANDSHAHR (U.P.) • PIN: 202398
                        </p>
                        <p className="text-[10px] font-semibold text-slate-600">
                          Affiliated to Bhartiya Shiksha Board (BSB) • Affiliation No: UP0F25070073 • School Code: 00065
                        </p>
                      </div>
                      <div className="w-16 h-16 border-2 border-slate-900 rounded-xl overflow-hidden p-1 flex flex-col items-center justify-center text-[9px] font-bold">
                        <QrCode className="w-10 h-10 text-slate-900" />
                        <span className="font-mono text-[7px] leading-none">VERIFIED</span>
                      </div>
                    </div>

                    <div className="mt-2 inline-block px-4 py-1 bg-slate-900 text-white rounded-full text-xs font-black uppercase tracking-wider">
                      {currentExam?.name} - ADMIT CARD / HALL TICKET (2026-2027)
                    </div>
                  </div>

                  {/* Candidate Information Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-4 border-b border-slate-300">
                    <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold uppercase block">Candidate Name</span>
                        <span className="font-black text-slate-900 text-sm">{student.name}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold uppercase block">Roll Number</span>
                        <span className="font-mono font-black text-indigo-700 text-sm">#{student.rollNo}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold uppercase block">Admission / PEN No</span>
                        <span className="font-mono font-bold text-slate-900">{student.admissionNo || 'DMPS-2026-01'}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold uppercase block">Class & Section</span>
                        <span className="font-bold text-slate-900">{student.class} - Section {student.section || 'A'}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold uppercase block">Father's Name</span>
                        <span className="font-bold text-slate-900">{student.parents?.fatherName || student.fatherName || 'Mr. Rajesh Sharma'}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold uppercase block">Mother's Name</span>
                        <span className="font-bold text-slate-900">{student.parents?.motherName || 'Mrs. Sunita Sharma'}</span>
                      </div>
                      <div className="sm:col-span-2">
                        <span className="text-[10px] text-slate-500 font-bold uppercase block">Examination Center</span>
                        <span className="font-bold text-slate-900">{currentExam?.centerName}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold uppercase block">Reporting Time</span>
                        <span className="font-mono font-bold text-rose-600">{currentExam?.reportingTime}</span>
                      </div>
                    </div>

                    {/* Student Photo */}
                    <div className="flex justify-center md:justify-end">
                      <div className="w-24 h-28 border-2 border-slate-900 rounded-xl overflow-hidden shadow-inner p-0.5 bg-slate-50">
                        <img
                          src={student.photo || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150"}
                          alt={student.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Examination Scheme / Date Sheet Table */}
                  <div className="my-4">
                    <h5 className="text-[11px] font-black uppercase text-slate-900 tracking-wider mb-2">
                      📅 Examination Schedule & Scheme of Subjects
                    </h5>
                    <table className="w-full text-left text-xs border-collapse border border-slate-800">
                      <thead>
                        <tr className="bg-slate-100 text-slate-900 font-black border-b border-slate-800">
                          <th className="p-2 border-r border-slate-800 w-28">Date</th>
                          <th className="p-2 border-r border-slate-800 w-24">Day</th>
                          <th className="p-2 border-r border-slate-800 w-24">Subject Code</th>
                          <th className="p-2 border-r border-slate-800">Subject Name</th>
                          <th className="p-2 border-r border-slate-800 w-44">Exam Timing</th>
                          <th className="p-2 border-r border-slate-800 w-28">Hall / Room</th>
                          <th className="p-2 w-32 text-center">Invigilator Sign</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        {currentExamDateSheet.map((examRow, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50">
                            <td className="p-2 border-r border-slate-800 font-mono font-bold">{examRow.date}</td>
                            <td className="p-2 border-r border-slate-800 font-semibold">{examRow.day}</td>
                            <td className="p-2 border-r border-slate-800 font-mono font-bold text-center">{examRow.subjectCode}</td>
                            <td className="p-2 border-r border-slate-800 font-bold">{examRow.subject}</td>
                            <td className="p-2 border-r border-slate-800 font-mono text-[11px]">{examRow.time}</td>
                            <td className="p-2 border-r border-slate-800 text-[11px] font-semibold">{examRow.room}</td>
                            <td className="p-2 text-center text-[10px] text-slate-400">___________</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Important Instructions */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-300 text-[10px] text-slate-700 space-y-1">
                    <span className="font-black text-slate-900 uppercase block">Important Instructions for Candidate:</span>
                    <p>1. Candidates must carry this original Admit Card along with their official School ID Card to all exam sessions.</p>
                    <p>2. Electronic gadgets, smart watches, and mobile phones are strictly banned inside the examination hall.</p>
                    <p>3. Candidates must be seated at their designated room/desk 15 minutes before the first bell.</p>
                    <p>4. School uniform is strictly compulsory during all exam days.</p>
                  </div>

                  {/* Signatures & Stamps */}
                  <div className="grid grid-cols-3 gap-4 pt-8 text-center text-xs mt-4">
                    <div>
                      <div className="h-8 border-b-2 border-slate-900 border-dotted mb-1"></div>
                      <span className="font-black text-slate-900">Candidate's Signature</span>
                    </div>
                    <div>
                      <div className="h-8 border-b-2 border-slate-900 border-dotted mb-1"></div>
                      <span className="font-black text-slate-900">Center Superintendent Signature</span>
                    </div>
                    <div>
                      <div className="h-8 border-b-2 border-slate-900 border-dotted mb-1"></div>
                      <span className="font-black text-slate-900">Principal Signature & Seal</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 6: CERTIFICATE TEMPLATES (Exact DMPS Screenshot Match with Demo Templates) */}
      {/* ========================================================================= */}
      {activeSection === 'cert_template' && (
        <div className="space-y-6">

          {/* Sub-tabs: Certificate List | Add Certificate */}
          <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl w-fit print:hidden">
            <button
              onClick={() => setCertTemplateTab('list')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                certTemplateTab === 'list' ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <Layers className="w-4 h-4" /> Certificate List
            </button>
            <button
              onClick={() => {
                setCertTemplateForm({
                  id: null,
                  branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)',
                  name: '',
                  applicableUser: 'Student',
                  pageLayout: 'Portrait A4 (210 x 297 mm)',
                  bgImage: 'Official DMPS Crest Border',
                  content: 'This is to certify that [name], S/D of Shri [father_name] and Smt [mother_name], was admitted to this institution in Class [class] under Admission No [admission_no]. His/Her Date of Birth according to the Admission Register is [dob]. He/She has paid all school dues and his/her conduct has been [character].'
                });
                setCertTemplateTab('create_edit');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                certTemplateTab === 'create_edit' ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <Edit className="w-4 h-4" /> {certTemplateForm.id ? 'Edit Certificate Template' : 'Add Certificate Template'}
            </button>
          </div>

          {/* 📋 VIEW 1: EXACT DMPS CERTIFICATE LIST TABLE */}
          {certTemplateTab === 'list' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden space-y-4 p-5">
              
              {/* Toolbar & Filter */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-1.5">
                  <button onClick={() => showToast('Copied templates table to clipboard!', 'info')} className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200" title="Copy"><Copy className="w-4 h-4" /></button>
                  <button onClick={() => showToast('Exporting templates to Excel...', 'info')} className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200" title="Excel"><FileText className="w-4 h-4" /></button>
                  <button onClick={() => showToast('Exporting templates to CSV...', 'info')} className="p-2 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200" title="CSV"><Download className="w-4 h-4" /></button>
                  <button onClick={() => window.print()} className="p-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200" title="Print"><Printer className="w-4 h-4" /></button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative w-56">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search certificate template..."
                      value={certSearchQuery}
                      onChange={(e) => setCertSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                    <span>Show</span>
                    <select className="p-1 rounded-lg border bg-slate-50 dark:bg-slate-800 text-xs">
                      <option>20</option>
                      <option>50</option>
                    </select>
                    <span>rows</span>
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
                      <th className="p-3.5">Certificate Name</th>
                      <th className="p-3.5">Applicable User</th>
                      <th className="p-3.5">Page Layout</th>
                      <th className="p-3.5 text-center">Background Image</th>
                      <th className="p-3.5">Created At</th>
                      <th className="p-3.5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {certificateTemplates
                      .filter(t => !certSearchQuery || t.name.toLowerCase().includes(certSearchQuery.toLowerCase()) || t.applicableUser.toLowerCase().includes(certSearchQuery.toLowerCase()))
                      .map((tmpl, idx) => (
                        <tr key={tmpl.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                          <td className="p-3.5 font-mono text-slate-400 font-bold">{idx + 1}</td>
                          <td className="p-3.5 text-slate-600 dark:text-slate-400 font-medium max-w-[200px] truncate" title={tmpl.branch}>
                            {tmpl.branch}
                          </td>
                          <td className="p-3.5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                              <Award className="w-3.5 h-3.5" />
                            </span>
                            <span>{tmpl.name}</span>
                          </td>
                          <td className="p-3.5">
                            <Badge variant={tmpl.applicableUser === 'Student' ? 'primary' : 'purple'}>
                              {tmpl.applicableUser}
                            </Badge>
                          </td>
                          <td className="p-3.5 font-mono text-slate-600 dark:text-slate-300">{tmpl.pageLayout}</td>
                          <td className="p-3.5 text-center">
                            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                              {tmpl.bgImage}
                            </span>
                          </td>
                          <td className="p-3.5 font-mono text-slate-500">{tmpl.createdAt}</td>
                          <td className="p-3.5 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => {
                                  setCertTemplateForm(tmpl);
                                  setCertTemplateTab('create_edit');
                                }}
                                className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                                title="Edit Template"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => {
                                  if (tmpl.applicableUser === 'Student') {
                                    setActiveSection('certificates');
                                    setIsGenerateCertModalOpen(true);
                                  } else {
                                    setActiveSection('employee_certificates');
                                    showToast(`Open employee list to issue ${tmpl.name}`, 'info');
                                  }
                                }}
                                className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-bold text-[10px] hover:bg-indigo-700 shadow-sm"
                                title="Issue this certificate"
                              >
                                Issue
                              </button>
                              <button
                                onClick={() => {
                                  if (window.confirm(`Delete certificate template "${tmpl.name}"?`)) {
                                    setCertificateTemplates(prev => prev.filter(t => t.id !== tmpl.id));
                                    showToast(`Template "${tmpl.name}" removed`, 'info');
                                  }
                                }}
                                className="p-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100"
                                title="Delete Template"
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

          {/* ✍️ VIEW 2: ADD / EDIT CERTIFICATE TEMPLATE DESIGNER */}
          {certTemplateTab === 'create_edit' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Form Controls */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <Sliders className="w-5 h-5 text-indigo-600" />
                    {certTemplateForm.id ? 'Edit Certificate Template' : 'Design New Certificate Template'}
                  </h3>
                  <button
                    onClick={() => setCertTemplateTab('list')}
                    className="text-xs font-bold text-slate-500 hover:text-slate-800"
                  >
                    Back to List
                  </button>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!certTemplateForm.name.trim()) return;
                    if (certTemplateForm.id) {
                      setCertificateTemplates(prev => prev.map(t => t.id === certTemplateForm.id ? { ...certTemplateForm } : t));
                      showToast(`Certificate Template "${certTemplateForm.name}" updated! 📜`, 'success');
                    } else {
                      const newTmpl = {
                        id: `CERT-TMPL-${Date.now().toString().slice(-4)}`,
                        ...certTemplateForm,
                        createdAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
                      };
                      setCertificateTemplates([...certificateTemplates, newTmpl]);
                      showToast(`Certificate Template "${newTmpl.name}" created! 📜`, 'success');
                    }
                    setCertTemplateTab('list');
                  }}
                  className="space-y-4 text-xs"
                >
                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select Branch *</label>
                    <select
                      value={certTemplateForm.branch}
                      onChange={(e) => setCertTemplateForm({ ...certTemplateForm, branch: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                    >
                      <option value="DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)">DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)</option>
                      <option value="DADHEECH MEMORIAL PUBLIC SCHOOL OLD JARGWAN CAMPUS">DADHEECH MEMORIAL PUBLIC SCHOOL OLD JARGWAN CAMPUS</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Certificate Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. CHARACTER CERTIFICATE"
                        value={certTemplateForm.name}
                        onChange={(e) => setCertTemplateForm({ ...certTemplateForm, name: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold uppercase"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Applicable User *</label>
                      <select
                        value={certTemplateForm.applicableUser}
                        onChange={(e) => setCertTemplateForm({ ...certTemplateForm, applicableUser: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                      >
                        <option value="Student">Student</option>
                        <option value="Employee">Employee / Faculty</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Page Layout & Size</label>
                      <select
                        value={certTemplateForm.pageLayout}
                        onChange={(e) => setCertTemplateForm({ ...certTemplateForm, pageLayout: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                      >
                        <option value="Portrait A4 (210 x 297 mm)">📄 Portrait A4 (Vertical)</option>
                        <option value="Landscape A4 (297 x 210 mm)">📜 Landscape A4 (Horizontal Award)</option>
                        <option value="Legal Size (216 x 356 mm)">📑 Legal Size Sheet</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Background / Border Style</label>
                      <select
                        value={certTemplateForm.bgImage}
                        onChange={(e) => setCertTemplateForm({ ...certTemplateForm, bgImage: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                      >
                        <option value="Official DMPS Crest Border">Official DMPS Crest Border</option>
                        <option value="Golden Border Crest">Golden Border Crest</option>
                        <option value="Ornate Golden Shield Background">Ornate Golden Shield Background</option>
                        <option value="Letterhead Watermark">Letterhead Watermark</option>
                        <option value="Plain Official Border">Plain Official Border</option>
                      </select>
                    </div>
                  </div>

                  {/* Dynamic Tags Helper */}
                  <div>
                    <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                      Insert Shortcode Tags (Click to insert):
                    </span>
                    <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto p-2 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                      {[
                        '[name]', '[father_name]', '[mother_name]', '[dob]', '[dob_words]',
                        '[class]', '[section]', '[roll]', '[admission_no]', '[pen_no]',
                        '[session]', '[issue_date]', '[admission_date]', '[character]',
                        '[percentage]', '[designation]', '[department]', '[joining_date]',
                        '[salary]', '[signature]', '[qr_code]'
                      ].map(tag => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => {
                            setCertTemplateForm(prev => ({
                              ...prev,
                              content: `${prev.content} ${tag}`
                            }));
                            showToast(`Inserted ${tag}`, 'info');
                          }}
                          className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-300 font-mono font-bold text-[10px] border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Certificate Body */}
                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Certificate Body Content *</label>
                    <textarea
                      rows={6}
                      required
                      value={certTemplateForm.content}
                      onChange={(e) => setCertTemplateForm({ ...certTemplateForm, content: e.target.value })}
                      placeholder="Write certificate paragraph text with shortcodes..."
                      className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 font-sans text-xs leading-relaxed"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <button
                      type="button"
                      onClick={() => setCertTemplateTab('list')}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/20 hover:scale-105 active:scale-95 transition-all"
                    >
                      {certTemplateForm.id ? 'Update Certificate Template' : 'Save Certificate Template'}
                    </button>
                  </div>
                </form>
              </div>

              {/* Live Preview Box */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500" /> Live Certificate Preview
                  </span>
                  <Badge variant="primary">{certTemplateForm.applicableUser}</Badge>
                </div>

                <div className="bg-white rounded-3xl border-4 border-double border-indigo-900 p-6 text-slate-900 shadow-xl space-y-4 text-center relative overflow-hidden">
                  <div className="absolute top-2 right-2 text-[8px] font-mono text-slate-400">
                    {certTemplateForm.pageLayout}
                  </div>

                  {/* Header */}
                  <div className="border-b-2 border-slate-900 pb-3">
                    <h3 className="text-base font-black uppercase text-slate-900">
                      {schoolInfo.name || 'DADHEECH MEMORIAL PUBLIC SCHOOL'}
                    </h3>
                    <p className="text-[9px] font-bold text-slate-600 uppercase">
                      RAMGHAT ROAD, JARGWAN (BULANDSHAHR) • CBSE AFFILIATED
                    </p>
                    <div className="mt-2 inline-block px-3 py-0.5 bg-slate-900 text-white rounded-md text-[10px] font-black uppercase tracking-wider">
                      {certTemplateForm.name || 'INSTITUTIONAL CERTIFICATE'}
                    </div>
                  </div>

                  {/* Simulated Content */}
                  <div className="text-xs leading-relaxed text-slate-800 text-justify p-3 bg-slate-50/50 rounded-xl border border-slate-200">
                    {certTemplateForm.content
                      .replace(/\[name\]/g, 'RITU YADAV')
                      .replace(/\[father_name\]/g, 'Sh. Rajesh Yadav')
                      .replace(/\[mother_name\]/g, 'Smt. Sunita Yadav')
                      .replace(/\[class\]/g, 'Class 10')
                      .replace(/\[section\]/g, 'A')
                      .replace(/\[roll\]/g, '14')
                      .replace(/\[admission_no\]/g, 'DMPS-2026-104')
                      .replace(/\[dob\]/g, '15-Aug-2010')
                      .replace(/\[dob_words\]/g, 'Fifteenth August Two Thousand Ten')
                      .replace(/\[session\]/g, '2026-2027')
                      .replace(/\[issue_date\]/g, '02-Sep-2026')
                      .replace(/\[admission_date\]/g, '01-Apr-2020')
                      .replace(/\[character\]/g, 'Exemplary')
                      .replace(/\[percentage\]/g, '94.6')
                      .replace(/\[teacher_name\]/g, 'Dr. Sonu Kumar')
                      .replace(/\[designation\]/g, 'Senior Faculty PGT')
                      .replace(/\[department\]/g, 'Science & Mathematics')
                      .replace(/\[joining_date\]/g, '01-Jul-2021')
                      .replace(/\[employee_code\]/g, 'EMP-2026-004')
                      || 'Type your certificate content on the left to see live preview...'}
                  </div>

                  {/* Signatures */}
                  <div className="grid grid-cols-2 gap-4 pt-4 text-center text-[10px] font-bold border-t border-slate-300">
                    <div>
                      <div className="border-t border-dashed border-slate-400 pt-1">Prepared By / Clerk</div>
                    </div>
                    <div>
                      <div className="border-t border-dashed border-slate-400 pt-1">Principal / Headmaster</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 7: ISSUED STUDENT CERTIFICATES (TC, Bonafide, Conduct) */}
      {/* ========================================================================= */}
      {activeSection === 'certificates' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600" />
              Official Institutional Certificates
            </h3>
            <button
              onClick={() => setIsGenerateCertModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20"
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
                    <td className="p-3.5 font-bold text-indigo-600 dark:text-indigo-400">{cert.type}</td>
                    <td className="p-3.5 text-slate-500">{cert.issueDate}</td>
                    <td className="p-3.5">
                      <Badge variant="success" size="sm">{cert.status}</Badge>
                    </td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => { setSelectedCert(cert); setIsCertModalOpen(true); }}
                        className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-lg font-bold hover:bg-indigo-100 flex items-center gap-1.5 ml-auto"
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

      {/* ========================================================================= */}
      {/* SECTION 8: EMPLOYEE CERTIFICATES */}
      {/* ========================================================================= */}
      {activeSection === 'employee_certificates' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-600" />
                Employee & Faculty Experience / Service Certificates
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Issue and manage official service certificates and experience letters for teaching staff.</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                  <th className="p-3.5">Employee ID</th>
                  <th className="p-3.5">Faculty Name</th>
                  <th className="p-3.5">Designation</th>
                  <th className="p-3.5">Department</th>
                  <th className="p-3.5">Joining Date</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {teachers.map(teacher => (
                  <tr key={teacher.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-3.5 font-mono font-bold text-slate-900 dark:text-white">{teacher.employeeId}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{teacher.name}</td>
                    <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-300">{teacher.designation}</td>
                    <td className="p-3.5 font-bold text-purple-600 dark:text-purple-400">{teacher.department}</td>
                    <td className="p-3.5 text-slate-500">{teacher.joiningDate || '01-Apr-2022'}</td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => {
                          showToast(`Experience Certificate generated for ${teacher.name}!`, 'success');
                        }}
                        className="px-3 py-1.5 bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 rounded-lg font-bold hover:bg-purple-100 flex items-center gap-1.5 ml-auto"
                      >
                        <Printer className="w-3.5 h-3.5" /> Experience Letter
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
            <button type="submit" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg">
              Generate & Print Certificate
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
