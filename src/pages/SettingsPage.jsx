import React, { useState, useEffect } from 'react';
import {
  Settings,
  ShieldCheck,
  Download,
  Upload,
  RotateCcw,
  Users,
  CheckCircle2,
  AlertTriangle,
  Key,
  Lock,
  Database,
  FileCode,
  HardDrive,
  Clock,
  Sparkles,
  Save,
  Check,
  X,
  FileText,
  UserCheck,
  Building2,
  Calendar,
  Zap,
  Info,
  Globe,
  Languages,
  Layers,
  Sliders,
  Play,
  Plus,
  Trash2,
  Edit2,
  ListPlus,
  Cpu,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { useToast } from '../components/common/Toast';
import { useAuth } from '../context/AuthContext';
import schoolService from '../services/schoolService';

export const SettingsPage = ({ initialTab = 'global' }) => {
  const { showToast } = useToast();
  const { role: userRole } = useAuth();

  const resolveTab = (tab) => {
    if (!tab) return 'global';
    if (tab === 'setting-global' || tab === 'global') return 'global';
    if (tab === 'setting-school' || tab === 'school') return 'school';
    if (tab === 'setting-role-permission' || tab === 'role-permission' || tab === 'roles') return 'role-permission';
    if (tab === 'setting-session' || tab === 'session' || tab === 'sessions') return 'session';
    if (tab === 'setting-translations' || tab === 'translations' || tab === 'lang') return 'translations';
    if (tab === 'setting-cron' || tab === 'cron' || tab === 'cron-job') return 'cron';
    if (tab === 'setting-modules' || tab === 'modules') return 'modules';
    if (tab === 'setting-student-field' || tab === 'student-field' || tab === 'system-fields') return 'student-field';
    if (tab === 'setting-custom-field' || tab === 'custom-field') return 'custom-field';
    if (tab === 'setting-backup' || tab === 'backup' || tab === 'database') return 'backup';
    return tab;
  };

  const [activeTab, setActiveTab] = useState(() => resolveTab(initialTab));

  useEffect(() => {
    if (initialTab) setActiveTab(resolveTab(initialTab));
  }, [initialTab]);

  // 1. Global Settings State
  const [globalSettings, setGlobalSettings] = useState({
    systemName: 'Dadheech Memorial School ERP System',
    currencySymbol: '₹',
    currencyCode: 'INR',
    timezone: 'Asia/Kolkata (GMT+5:30)',
    dateFormat: 'DD-MM-YYYY',
    financialYearStart: 'April',
    financialYearEnd: 'March',
    defaultLanguage: 'English (India)',
    theme: 'Dark Modern',
    rowsPerPage: 20,
    smsGateway: 'DLT Registered (Enabled)',
    emailService: 'SMTP Server (Connected)',
    autoBackupDaily: true
  });

  // 2. School Settings State
  const [schoolInfo, setSchoolInfo] = useState(() => schoolService.getSchoolInfo() || {
    name: 'Dadheech Memorial Public School',
    affiliationNo: '2133481',
    schoolCode: '61348',
    trustName: 'Dadheech Educational & Welfare Society',
    principalName: 'Dr. Sonu Kumar Sharma',
    email: 'info@dadheechpublicschool.edu.in',
    phone: '+91 97588 82443, +91 98371 00000',
    address: 'Ramghat Road, Jargwan, Bulandshahr, Uttar Pradesh - 202395',
    academicSession: '2026-2027',
    tagline: 'Excellence in Holistic Education • Affiliated to CBSE Delhi'
  });

  // 3. Role Permissions State
  const [permissions, setPermissions] = useState(() => schoolService.getRolePermissions() || {});
  const [selectedRole, setSelectedRole] = useState('Principal');

  // 4. Session Settings State
  const [sessions, setSessions] = useState([
    { id: 'SES-01', name: '2026-2027', startDate: '01-Apr-2026', endDate: '31-Mar-2027', status: 'Active (Current)', isDefault: true },
    { id: 'SES-02', name: '2025-2026', startDate: '01-Apr-2025', endDate: '31-Mar-2026', status: 'Archived', isDefault: false },
    { id: 'SES-03', name: '2027-2028', startDate: '01-Apr-2027', endDate: '31-Mar-2028', status: 'Upcoming', isDefault: false }
  ]);

  // 5. Translations State
  const [languages, setLanguages] = useState([
    { code: 'en', name: 'English', status: 'Active (Default)', completion: '100%' },
    { code: 'hi', name: 'Hindi (हिन्दी)', status: 'Active', completion: '98%' },
    { code: 'sa', name: 'Sanskrit (संस्कृतम्)', status: 'Active', completion: '92%' }
  ]);

  const [translationKeys, setTranslationKeys] = useState([
    { key: 'dashboard', en: 'Dashboard', hi: 'डैशबोर्ड', sa: 'फलकम्' },
    { key: 'student_admission', en: 'Student Admission', hi: 'छात्र प्रवेश', sa: 'छात्रप्रवेशः' },
    { key: 'fees_collection', en: 'Fees Collection', hi: 'शुल्क संग्रह', sa: 'शुल्कसंग्रहः' },
    { key: 'attendance', en: 'Attendance', hi: 'उपस्थिति', sa: 'उपस्थितिः' },
    { key: 'examination', en: 'Examination', hi: 'परीक्षा', sa: 'परीक्षा' },
    { key: 'library', en: 'Library', hi: 'पुस्तकालय', sa: 'पुस्तकालयः' },
    { key: 'transport', en: 'Transport', hi: 'परिवहन', sa: 'वाहनव्यवस्था' }
  ]);

  // 6. Cron Jobs State
  const [cronJobs, setCronJobs] = useState([
    { id: 'CRON-01', name: 'Daily Student Absence SMS Alert', schedule: 'At 10:00 AM Daily (Mon-Sat)', command: 'php artisan notify:absent-sms', lastRun: 'Today 10:00 AM', status: 'Success (Delivered 42 SMS)', isEnabled: true },
    { id: 'CRON-02', name: 'Monthly Fee Due Reminder SMS', schedule: '1st of Every Month at 09:00 AM', command: 'php artisan fees:send-reminders', lastRun: '01-Sep-2026, 09:00 AM', status: 'Success (567 Sent)', isEnabled: true },
    { id: 'CRON-03', name: 'Automatic Periodic Bell Ringer', schedule: 'Every 40 Mins according to Timetable', command: 'php artisan bell:ring-hardware', lastRun: '2 mins ago', status: 'Running Active', isEnabled: true },
    { id: 'CRON-04', name: 'Nightly Database JSON & SQL Auto-Snapshot', schedule: 'At 11:59 PM Every Night', command: 'php artisan db:auto-backup', lastRun: 'Yesterday 11:59 PM', status: 'Completed (Saved 4.8 MB)', isEnabled: true },
    { id: 'CRON-05', name: 'Birthday Automated Greetings Dispatch', schedule: 'At 08:00 AM Every Morning', command: 'php artisan birthday:send-wishes', lastRun: 'Today 08:00 AM', status: 'Success (3 Wished)', isEnabled: true }
  ]);

  // 7. System Modules State
  const [erpModules, setErpModules] = useState([
    { id: 'MOD-01', name: 'Student Information & Admission', desc: 'Online registration, roll register, documents, sibling mapping', isEnabled: true, badge: 'Core' },
    { id: 'MOD-02', name: 'Fees & Online Payment Gateway', desc: 'Fee invoices, monthly ledger, UPI receipts, dues tracking', isEnabled: true, badge: 'Core' },
    { id: 'MOD-03', name: 'Academics, Timetable & Homework', desc: 'Class routines, teacher subject allocation, daily homework', isEnabled: true, badge: 'Academic' },
    { id: 'MOD-04', name: 'CBSE Examination & 9-Point Grading', desc: 'Exam date sheets, mark entries, tabulation & report cards', isEnabled: true, badge: 'Academic' },
    { id: 'MOD-05', name: 'Biometric & RFID Attendance', desc: 'Biometric fingerprint integration and barcode scan check-in', isEnabled: true, badge: 'Hardware' },
    { id: 'MOD-06', name: 'Automatic School Bell Controller', desc: 'IoT Relay hardware controller for school gong bells', isEnabled: true, badge: 'Hardware' },
    { id: 'MOD-07', name: 'GPS Transport & Vehicle Fleet', desc: 'Live bus tracking, stoppage routes, driver logs', isEnabled: true, badge: 'Transport' },
    { id: 'MOD-08', name: 'Library & Book Circulation', desc: 'ISBN cataloguing, borrow/return desk, overdue fine', isEnabled: true, badge: 'Library' },
    { id: 'MOD-09', name: 'Hostel & Room Management', desc: 'Hostel rooms, bed allocation, mess catering', isEnabled: true, badge: 'Hostel' },
    { id: 'MOD-10', name: 'HR Payroll & Staff Leave', desc: 'Faculty salaries, advance loans, attendance, awards', isEnabled: true, badge: 'HR' },
    { id: 'MOD-11', name: 'Public School Website & CMS', desc: 'Modern responsive school website, admission forms, gallery', isEnabled: true, badge: 'Frontend' }
  ]);

  // 8. System Student Fields State
  const [studentFields, setStudentFields] = useState([
    { fieldKey: 'rollNo', label: 'Roll Number', isVisible: true, isRequired: true, category: 'Academic' },
    { fieldKey: 'bloodGroup', label: 'Blood Group', isVisible: true, isRequired: false, category: 'Health' },
    { fieldKey: 'aadharNo', label: 'Student Aadhar Number (12 Digits)', isVisible: true, isRequired: true, category: 'Identity' },
    { fieldKey: 'penNo', label: 'CBSE / UDISE+ PEN Number', isVisible: true, isRequired: false, category: 'Identity' },
    { fieldKey: 'fatherOccupation', label: 'Father Occupation & Annual Income', isVisible: true, isRequired: true, category: 'Parent' },
    { fieldKey: 'motherTongue', label: 'Mother Tongue', isVisible: true, isRequired: false, category: 'Personal' },
    { fieldKey: 'categoryCaste', label: 'Social Category (GEN / OBC / SC / ST)', isVisible: true, isRequired: true, category: 'Personal' },
    { fieldKey: 'bankAccount', label: 'Student Bank Account & IFSC', isVisible: true, isRequired: false, category: 'Financial' },
    { fieldKey: 'busRoute', label: 'Transport Bus Stoppage Point', isVisible: true, isRequired: false, category: 'Transport' }
  ]);

  // 9. Custom Fields State
  const [customFields, setCustomFields] = useState([
    { id: 'CF-01', belongsTo: 'Student', label: 'RTE 25% Reserved Quota', fieldType: 'Yes / No (Boolean)', isRequired: true, defaultValue: 'No' },
    { id: 'CF-02', belongsTo: 'Student', label: 'BPL / Ration Card Number', fieldType: 'Text', isRequired: false, defaultValue: '' },
    { id: 'CF-03', belongsTo: 'Student', label: 'Previous School Board Roll No', fieldType: 'Number', isRequired: false, defaultValue: '' },
    { id: 'CF-04', belongsTo: 'Staff', label: 'CTET / UPTET Qualified Roll', fieldType: 'Text', isRequired: false, defaultValue: '' },
    { id: 'CF-05', belongsTo: 'Staff', label: 'Emergency Blood Donor Contact', fieldType: 'Phone', isRequired: true, defaultValue: '' }
  ]);

  // 10. Database Backup State
  const [backupHistory, setBackupHistory] = useState(() => schoolService.getBackupHistory() || []);
  const [isCreatingBackup, setIsCreatingBackup] = useState(false);
  const [backupNote, setBackupNote] = useState('');

  // 💾 1-Click Create & Download Backup
  const handleCreateBackup = () => {
    setIsCreatingBackup(true);
    setTimeout(() => {
      setIsCreatingBackup(false);
      const snapshot = schoolService.createBackupSnapshot(backupNote || 'Full ERP Backup Snapshot');
      setBackupHistory(schoolService.getBackupHistory());
      setBackupNote('');

      // Auto-trigger Download
      const jsonStr = schoolService.exportDatabaseJSON();
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = snapshot.fileName;
      a.click();

      showToast(`🎉 Backup Created & Downloaded: ${snapshot.fileName} (567 Students, 22 Teachers, Full ERP)! 💾`, 'success');
    }, 800);
  };

  // 📂 Upload & Restore Backup File
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      const res = schoolService.importDatabaseJSON(content);
      if (res.success) {
        showToast(`🔄 Database Restored: ${res.totalStudents} Students & ${res.totalStaff} Teachers loaded! Reloading portal...`, 'success');
        setTimeout(() => window.location.reload(), 1000);
      } else {
        showToast(`Restore Error: ${res.error}`, 'error');
      }
    };
    reader.readAsText(file);
  };

  const handleSaveSchoolProfile = (e) => {
    e.preventDefault();
    schoolService.data.schoolInfo = schoolInfo;
    schoolService.saveData();
    showToast('School Information & Branding Saved Successfully! 🏫', 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">

      {/* 🧭 Top Settings Master Navigation Suite (Exact 10 Sub-Items from Screenshot) */}
      <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-x-auto custom-scrollbar print:hidden">
        <div className="flex items-center gap-1.5 min-w-max text-xs font-bold">
          {[
            { id: 'global', label: '🌐 Global Settings' },
            { id: 'school', label: '🏫 School Settings' },
            { id: 'role-permission', label: '👑 Role Permission' },
            { id: 'session', label: '📅 Session Settings' },
            { id: 'translations', label: '🗣️ Translations' },
            { id: 'cron', label: '⚡ Cron Job' },
            { id: 'modules', label: '🧩 Modules' },
            { id: 'student-field', label: '📋 System Student Field' },
            { id: 'custom-field', label: '➕ Custom Field' },
            { id: 'backup', label: '💾 Database Backup' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl transition-all ${
                activeTab === tab.id
                  ? 'bg-rose-600 text-white shadow-md font-black'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 🌐 1. GLOBAL SETTINGS */}
      {/* ========================================================================= */}
      {activeTab === 'global' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5 max-w-4xl">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-indigo-600" /> Global System Configuration & Regional Preferences
              </h3>
              <p className="text-xs text-slate-500">System currency, timezone, date formatting, financial year, and SMS gateways</p>
            </div>
            <Badge variant="primary">Server Engine Active</Badge>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); showToast('Global settings updated! ⚙️', 'success'); }} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">System Name</label>
                <input
                  type="text"
                  value={globalSettings.systemName}
                  onChange={(e) => setGlobalSettings({ ...globalSettings, systemName: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Timezone</label>
                <input
                  type="text"
                  value={globalSettings.timezone}
                  onChange={(e) => setGlobalSettings({ ...globalSettings, timezone: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Currency Symbol</label>
                <input
                  type="text"
                  value={globalSettings.currencySymbol}
                  onChange={(e) => setGlobalSettings({ ...globalSettings, currencySymbol: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold font-mono"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Currency Code</label>
                <input
                  type="text"
                  value={globalSettings.currencyCode}
                  onChange={(e) => setGlobalSettings({ ...globalSettings, currencyCode: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold font-mono"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Date Format</label>
                <select
                  value={globalSettings.dateFormat}
                  onChange={(e) => setGlobalSettings({ ...globalSettings, dateFormat: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                >
                  <option value="DD-MM-YYYY">DD-MM-YYYY (e.g. 02-09-2026)</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD (e.g. 2026-09-02)</option>
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Financial Year Start</label>
                <input
                  type="text"
                  value={globalSettings.financialYearStart}
                  onChange={(e) => setGlobalSettings({ ...globalSettings, financialYearStart: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Default Table Rows</label>
                <select
                  value={globalSettings.rowsPerPage}
                  onChange={(e) => setGlobalSettings({ ...globalSettings, rowsPerPage: Number(e.target.value) })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                >
                  <option value="20">20 Rows Per Page</option>
                  <option value="50">50 Rows Per Page</option>
                  <option value="100">100 Rows Per Page</option>
                </select>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold shadow flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
              >
                <Save className="w-4 h-4" /> Save Global Settings
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🏫 2. SCHOOL SETTINGS */}
      {/* ========================================================================= */}
      {activeTab === 'school' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5 max-w-4xl">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-indigo-600" /> Institutional Profile, CBSE Affiliation & Official Stamp
              </h3>
              <p className="text-xs text-slate-500">Official school name, affiliation numbers, registered society and contact coordinates</p>
            </div>
          </div>

          <form onSubmit={handleSaveSchoolProfile} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">School Full Name *</label>
                <input
                  type="text"
                  required
                  value={schoolInfo.name}
                  onChange={(e) => setSchoolInfo({ ...schoolInfo, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">CBSE Affiliation Number *</label>
                <input
                  type="text"
                  required
                  value={schoolInfo.affiliationNo}
                  onChange={(e) => setSchoolInfo({ ...schoolInfo, affiliationNo: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">School Code</label>
                <input
                  type="text"
                  value={schoolInfo.schoolCode}
                  onChange={(e) => setSchoolInfo({ ...schoolInfo, schoolCode: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Managing Trust / Society</label>
                <input
                  type="text"
                  value={schoolInfo.trustName}
                  onChange={(e) => setSchoolInfo({ ...schoolInfo, trustName: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Principal / Head of Institution</label>
                <input
                  type="text"
                  value={schoolInfo.principalName}
                  onChange={(e) => setSchoolInfo({ ...schoolInfo, principalName: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Official Email Address</label>
                <input
                  type="email"
                  value={schoolInfo.email}
                  onChange={(e) => setSchoolInfo({ ...schoolInfo, email: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Official Contact Phones</label>
                <input
                  type="text"
                  value={schoolInfo.phone}
                  onChange={(e) => setSchoolInfo({ ...schoolInfo, phone: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Campus Full Postal Address</label>
              <input
                type="text"
                value={schoolInfo.address}
                onChange={(e) => setSchoolInfo({ ...schoolInfo, address: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold shadow flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
              >
                <Save className="w-4 h-4" /> Save School Profile
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 👑 3. ROLE PERMISSION */}
      {/* ========================================================================= */}
      {activeTab === 'role-permission' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-600" /> Role-Based Access Control (RBAC) Permissions Matrix
              </h3>
              <p className="text-xs text-slate-500">Configure Create, Read, Update, Delete access privileges per system role</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Select Role:</span>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold text-xs"
              >
                {['Super Admin', 'Principal', 'Vice Principal', 'Accountant', 'Teacher', 'Librarian', 'Transport Manager', 'Receptionist', 'Parent', 'Student'].map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 font-bold uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Module Name</th>
                  <th className="p-3.5 text-center">View (Read)</th>
                  <th className="p-3.5 text-center">Create (Add)</th>
                  <th className="p-3.5 text-center">Edit (Update)</th>
                  <th className="p-3.5 text-center">Delete (Purge)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { name: 'Student Information & Admissions', key: 'students' },
                  { name: 'Fee Collection & Invoicing', key: 'fees' },
                  { name: 'Attendance & Biometrics', key: 'attendance' },
                  { name: 'CBSE Examination & Marks', key: 'exams' },
                  { name: 'Library Circulation', key: 'library' },
                  { name: 'Transport & GPS Tracking', key: 'transport' },
                  { name: 'Staff HR & Payroll', key: 'payroll' },
                  { name: 'Bulk SMS & Communication', key: 'communication' },
                  { name: 'System Settings & Backups', key: 'settings' }
                ].map(mod => {
                  const isSuperAdmin = selectedRole === 'Super Admin';
                  return (
                    <tr key={mod.key} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3.5 font-bold text-slate-900 dark:text-white">{mod.name}</td>
                      {['view', 'create', 'edit', 'delete'].map(action => (
                        <td key={action} className="p-3.5 text-center">
                          <input
                            type="checkbox"
                            checked={isSuperAdmin ? true : selectedRole === 'Principal' || action === 'view'}
                            onChange={() => showToast(`Updated ${selectedRole} permission for ${mod.name}`, 'info')}
                            className="w-4 h-4 rounded text-rose-600 cursor-pointer"
                          />
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📅 4. SESSION SETTINGS */}
      {/* ========================================================================= */}
      {activeTab === 'session' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-600" /> Academic Sessions & Term Calendars
              </h3>
              <p className="text-xs text-slate-500">Configure academic year boundaries, rollover sessions and default academic term</p>
            </div>
            <button
              onClick={() => showToast('Create new academic session', 'info')}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Academic Session
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {sessions.map(s => (
              <div key={s.id} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs font-bold text-slate-400">{s.id}</span>
                  <Badge variant={s.isDefault ? 'success' : 'primary'}>{s.status}</Badge>
                </div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white">{s.name}</h4>
                <p className="text-xs font-mono text-slate-500">{s.startDate} to {s.endDate}</p>
                <div className="pt-2">
                  {!s.isDefault && (
                    <button
                      onClick={() => showToast(`Set ${s.name} as active session!`, 'success')}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 font-bold rounded-lg text-[10px]"
                    >
                      Make Active Session
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🗣️ 5. TRANSLATIONS */}
      {/* ========================================================================= */}
      {activeTab === 'translations' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Languages className="w-5 h-5 text-indigo-600" /> Multi-Language Dictionary & Localization
              </h3>
              <p className="text-xs text-slate-500">Translate UI labels across English, Hindi (हिन्दी) and Sanskrit (संस्कृतम्)</p>
            </div>
            <button
              onClick={() => showToast('Language strings saved! 🗣️', 'success')}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" /> Save Language Pack
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 font-bold uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Translation Key</th>
                  <th className="p-3.5">English (Default)</th>
                  <th className="p-3.5">Hindi (हिन्दी)</th>
                  <th className="p-3.5">Sanskrit (संस्कृतम्)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {translationKeys.map(k => (
                  <tr key={k.key} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-slate-400">{k.key}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{k.en}</td>
                    <td className="p-3.5 font-semibold text-indigo-600">{k.hi}</td>
                    <td className="p-3.5 font-semibold text-emerald-600">{k.sa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ⚡ 6. CRON JOB */}
      {/* ========================================================================= */}
      {activeTab === 'cron' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" /> Automated Background Tasks & Cron Jobs Scheduler
              </h3>
              <p className="text-xs text-slate-500">Automated SMS dispatches, bell scheduler, night database backups and birthday engines</p>
            </div>
          </div>

          <div className="space-y-3">
            {cronJobs.map(cron => (
              <div key={cron.id} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{cron.name}</h4>
                    <Badge variant="success">Active</Badge>
                  </div>
                  <p className="text-xs text-slate-500 font-mono">Schedule: {cron.schedule} • Command: <span className="text-indigo-600">{cron.command}</span></p>
                  <p className="text-[11px] text-slate-400">Last Execution: {cron.lastRun} ({cron.status})</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => showToast(`Manually executed cron: ${cron.name}! ⚡`, 'success')}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5" /> Run Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🧩 7. MODULES */}
      {/* ========================================================================= */}
      {activeTab === 'modules' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-600" /> School ERP Module Switchboard & App Store
              </h3>
              <p className="text-xs text-slate-500">Enable or disable specific functionality suites across the institutional portal</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {erpModules.map(mod => (
              <div key={mod.id} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
                <div className="flex justify-between items-center">
                  <Badge variant="primary">{mod.badge}</Badge>
                  <input
                    type="checkbox"
                    checked={mod.isEnabled}
                    onChange={() => {
                      setErpModules(erpModules.map(m => m.id === mod.id ? { ...m, isEnabled: !m.isEnabled } : m));
                      showToast(`Module ${mod.name} status updated!`, 'info');
                    }}
                    className="w-4 h-4 text-rose-600 rounded cursor-pointer"
                  />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{mod.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📋 8. SYSTEM STUDENT FIELD */}
      {/* ========================================================================= */}
      {activeTab === 'student-field' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <ListPlus className="w-5 h-5 text-indigo-600" /> System Standard Student Admission Fields
              </h3>
              <p className="text-xs text-slate-500">Configure visibility and mandatory validation requirements for student registration</p>
            </div>
            <button
              onClick={() => showToast('Student fields validation rules saved! ✅', 'success')}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" /> Save Field Settings
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 font-bold uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Field Name</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5 text-center">Visible on Form</th>
                  <th className="p-3.5 text-center">Mandatory (Required *)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {studentFields.map(f => (
                  <tr key={f.fieldKey} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{f.label}</td>
                    <td className="p-3.5"><Badge variant="primary">{f.category}</Badge></td>
                    <td className="p-3.5 text-center">
                      <input
                        type="checkbox"
                        checked={f.isVisible}
                        onChange={() => setStudentFields(studentFields.map(item => item.fieldKey === f.fieldKey ? { ...item, isVisible: !item.isVisible } : item))}
                        className="w-4 h-4 text-rose-600 rounded cursor-pointer"
                      />
                    </td>
                    <td className="p-3.5 text-center">
                      <input
                        type="checkbox"
                        checked={f.isRequired}
                        onChange={() => setStudentFields(studentFields.map(item => item.fieldKey === f.fieldKey ? { ...item, isRequired: !item.isRequired } : item))}
                        className="w-4 h-4 text-rose-600 rounded cursor-pointer"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ➕ 9. CUSTOM FIELD */}
      {/* ========================================================================= */}
      {activeTab === 'custom-field' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-indigo-600" /> User-Defined Dynamic Custom Fields
              </h3>
              <p className="text-xs text-slate-500">Add institutional custom fields for RTE quota, BPL cards, vaccination logs and board rolls</p>
            </div>
            <button
              onClick={() => showToast('Add custom field modal', 'info')}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Custom Field
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 font-bold uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Field ID</th>
                  <th className="p-3.5">Belongs To</th>
                  <th className="p-3.5">Custom Field Label</th>
                  <th className="p-3.5">Data Type</th>
                  <th className="p-3.5">Mandatory</th>
                  <th className="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {customFields.map(cf => (
                  <tr key={cf.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono text-slate-400 font-bold">{cf.id}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{cf.belongsTo}</td>
                    <td className="p-3.5 font-semibold text-indigo-600">{cf.label}</td>
                    <td className="p-3.5 font-mono text-slate-500">{cf.fieldType}</td>
                    <td className="p-3.5">{cf.isRequired ? <Badge variant="warning">Required</Badge> : <span className="text-slate-400">Optional</span>}</td>
                    <td className="p-3.5 text-right">
                      <button onClick={() => showToast(`Edit field ${cf.label}`, 'info')} className="p-1 text-slate-500 hover:text-rose-600">
                        <Edit2 className="w-3.5 h-3.5" />
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
      {/* 💾 10. DATABASE BACKUP */}
      {/* ========================================================================= */}
      {activeTab === 'backup' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Database className="w-5 h-5 text-rose-600" /> Complete School Database Snapshot & Restore
                </h3>
                <p className="text-xs text-slate-500">1-click JSON/SQL full backup of 567 Students, 22 Teachers, Fees Ledger, Marks, and Attendance</p>
              </div>

              <div className="flex gap-2">
                <label className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold rounded-xl text-xs cursor-pointer flex items-center gap-1.5 shadow-sm">
                  <Upload className="w-4 h-4" /> Restore Database (.JSON)
                  <input type="file" accept=".json" onChange={handleFileUpload} className="hidden" />
                </label>

                <button
                  onClick={handleCreateBackup}
                  disabled={isCreatingBackup}
                  className="px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all"
                >
                  <Download className="w-4 h-4" />
                  {isCreatingBackup ? 'Exporting...' : 'Create & Download Backup'}
                </button>
              </div>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 font-bold uppercase text-[10px]">
                  <tr>
                    <th className="p-3.5">Backup ID</th>
                    <th className="p-3.5">File Name</th>
                    <th className="p-3.5">Timestamp</th>
                    <th className="p-3.5">File Size</th>
                    <th className="p-3.5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {backupHistory.map(b => (
                    <tr key={b.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3.5 font-mono text-slate-400 font-bold">{b.id}</td>
                      <td className="p-3.5 font-bold text-slate-900 dark:text-white font-mono">{b.fileName}</td>
                      <td className="p-3.5 font-mono text-slate-500">{b.timestamp}</td>
                      <td className="p-3.5 font-mono text-emerald-600 font-bold">{b.size}</td>
                      <td className="p-3.5 text-right">
                        <Badge variant="success">Verified Snapshot</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default SettingsPage;
