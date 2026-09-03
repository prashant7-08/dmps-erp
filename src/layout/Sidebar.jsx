import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Building2,
  GraduationCap,
  Users,
  BookOpen,
  CalendarDays,
  CheckSquare,
  CreditCard,
  Award,
  Bell,
  FileSpreadsheet,
  BookMarked,
  Bus,
  Home,
  HeartPulse,
  Trophy,
  Calendar,
  FileCheck2,
  Contact,
  DollarSign,
  Package,
  ShieldAlert,
  BarChart3,
  Settings,
  Sparkles,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  Plus,
  Minus,
  UserCheck,
  UserPlus,
  FileText,
  CreditCard as CardIcon,
  Globe,
  GitBranch,
  Briefcase,
  Mail,
  MessageSquare
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/common/Toast';

export const navigationGroups = [
  {
    id: 'dashboard-group',
    permissionKey: 'dashboard',
    label: 'DASHBOARD',
    icon: LayoutDashboard,
    isSingle: true,
    targetTab: 'dashboard'
  },
  {
    id: 'reception-group',
    permissionKey: 'reception',
    label: 'RECEPTION / FRONT DESK',
    icon: Building2,
    items: [
      { id: 'helpdesk-inquiries', targetTab: 'helpdesk-visitors', subTab: 'inquiries', label: 'Admission Inquiries & Visitors', badge: 'Live' },
      { id: 'helpdesk-grievance', targetTab: 'helpdesk-visitors', subTab: 'grievance', label: 'Grievance & Complaints', badge: null }
    ]
  },
  {
    id: 'admission-group',
    permissionKey: 'admission',
    label: 'ADMISSION',
    icon: UserPlus,
    items: [
      { id: 'admission', label: 'Create Admission', badge: 'New' },
      { id: 'admission-online', label: 'Online Admission Applications', badge: 'Web' },
      { id: 'students-import', label: 'Multiple Import Excel', badge: 'Excel' }
    ]
  },
  {
    id: 'students-group',
    permissionKey: 'students',
    label: 'STUDENT DETAILS',
    icon: GraduationCap,
    items: [
      { id: 'students-list', targetTab: 'students', subTab: 'list', label: 'All Active Students', badge: 'Active' },
      { id: 'students-custom-list', targetTab: 'custom-list', label: 'Custom List Builder', badge: 'Custom' },
      { id: 'students-inactive', targetTab: 'students', subTab: 'inactive', label: 'Inactive / TC List', badge: 'Left' }
    ]
  },
  {
    id: 'employee-group',
    permissionKey: 'staff',
    label: 'EMPLOYEE & HR',
    icon: Users,
    items: [
      { id: 'staff', label: 'Employee Directory', badge: 'Active' },
      { id: 'staff-add', label: 'Add Employee', badge: 'New' },
      { id: 'payroll', targetTab: 'payroll', label: 'Salary Payment & Payslips', badge: 'Pay' },
      { id: 'leave', targetTab: 'leave', label: 'Leave Management', badge: 'Leave' }
    ]
  },
  {
    id: 'student-accounting-group',
    permissionKey: 'student_accounting',
    label: 'STUDENT ACCOUNTING',
    icon: CreditCard,
    items: [
      { id: 'fees-pos', targetTab: 'fees', subTab: 'pos', label: 'Fee Collect / POS Counter', badge: 'POS' },
      { id: 'fees-dues', targetTab: 'fees', subTab: 'dues', label: 'Due List & Reminders (₹1.05 Cr)', badge: 'Due' },
      { id: 'fees-allocation', targetTab: 'fees', subTab: 'allocation', label: 'Fees Allocation', badge: null },
      { id: 'fees-types', targetTab: 'fees', subTab: 'types', label: 'Fees Types & Groups', badge: null },
      { id: 'fees-offline', targetTab: 'fees', subTab: 'offline', label: 'Offline Bank Payments', badge: null },
      { id: 'fees-siblings', targetTab: 'fees', subTab: 'siblings', label: 'Setup Siblings Discount', badge: null }
    ]
  },
  {
    id: 'office-accounting-group',
    permissionKey: 'office_accounting',
    label: 'OFFICE CASH BOOK',
    icon: DollarSign,
    items: [
      { id: 'office-deposit', targetTab: 'office-cash-book', subTab: 'deposit', label: 'Cash In (Income / Fees)', badge: '+' },
      { id: 'office-expense', targetTab: 'office-cash-book', subTab: 'expense', label: 'Cash Out (Expenses / Diesel)', badge: '-' },
      { id: 'office-transactions', targetTab: 'office-cash-book', subTab: 'transactions', label: 'All Transactions Ledger', badge: 'Ledger' }
    ]
  },
  {
    id: 'supervision-group',
    permissionKey: 'supervision',
    label: 'SUPERVISION & FLEET',
    icon: Bus,
    items: [
      { id: 'transport-routes', targetTab: 'transport', subTab: 'routes', label: 'Bus Fleet & Route Master', badge: '6 Buses' },
      { id: 'transport-stoppage', targetTab: 'transport', subTab: 'stoppage', label: 'Stoppage & Stop Fees', badge: '45+ Stops' },
      { id: 'transport-assign', targetTab: 'transport', subTab: 'assign', label: 'Assign Student Bus Stoppage', badge: null },
      { id: 'hostel-allocation', targetTab: 'hostel', subTab: 'allocation', label: 'Hostel Bed Allocation (5-6 Students)', badge: 'Hostel' }
    ]
  },
  {
    id: 'attendance-group',
    permissionKey: 'attendance',
    label: 'ATTENDANCE',
    icon: CheckSquare,
    items: [
      { id: 'attendance', targetTab: 'attendance', label: 'Student Daily Attendance', badge: 'Daily' },
      { id: 'staff-attendance', targetTab: 'staff-attendance', label: 'Staff Biometric Attendance', badge: 'Staff' },
      { id: 'automatic-bell', targetTab: 'automatic-bell', label: 'Automatic School Bell 🔔', badge: 'Auto' }
    ]
  },
  {
    id: 'academic-group',
    permissionKey: 'academic',
    label: 'ACADEMIC & TIMETABLE',
    icon: BookOpen,
    items: [
      { id: 'acad-classes', targetTab: 'academics', subTab: 'classes', label: 'Control Classes & Sections', badge: null },
      { id: 'acad-assign-teacher', targetTab: 'academics', subTab: 'assign-teacher', label: 'Assign Class Teacher', badge: null },
      { id: 'acad-subjects', targetTab: 'academics', subTab: 'subjects', label: 'Subject Master', badge: null },
      { id: 'acad-class-schedule', targetTab: 'timetable', subTab: 'class-schedule', label: 'Class Timetable Schedule', badge: 'Routine' },
      { id: 'acad-promotion', targetTab: 'academics', subTab: 'promotion', label: 'Student Annual Promotion', badge: 'Roll' }
    ]
  },
  {
    id: 'homework-group',
    permissionKey: 'homework',
    label: 'HOMEWORK',
    icon: FileSpreadsheet,
    items: [
      { id: 'hw-homework', targetTab: 'homework', subTab: 'homework', label: 'Daily Homework', badge: 'Daily' },
      { id: 'hw-evaluation', targetTab: 'homework', subTab: 'evaluation', label: 'Evaluation Report', badge: null }
    ]
  },
  {
    id: 'exam-master-group',
    permissionKey: 'exam_master',
    label: 'EXAM MASTER',
    icon: Award,
    items: [
      { id: 'exam-term', targetTab: 'examination', subTab: 'exam-term', label: 'Exam Term', badge: 'Term' },
      { id: 'exam-hall', targetTab: 'examination', subTab: 'exam-hall', label: 'Exam Hall', badge: null },
      { id: 'exam-trait', targetTab: 'examination', subTab: 'trait', label: 'Trait Type (Co-Scholastic)', badge: null },
      { id: 'exam-distribution', targetTab: 'examination', subTab: 'distribution', label: 'Marks Distribution (80:20)', badge: null },
      { id: 'exam-schedule', targetTab: 'examination', subTab: 'schedule', label: 'Exam Schedule Date Sheet', badge: 'Date' },
      { id: 'exam-marks', targetTab: 'examination', subTab: 'marks', label: 'Mark Entries & Report Cards 🖨️', badge: 'Marks' },
      { id: 'exam-marks-attendance', targetTab: 'examination', subTab: 'marks-attendance', label: 'Attendance Entries', badge: null },
      { id: 'exam-generate-position', targetTab: 'examination', subTab: 'generate-position', label: 'Generate Position (1st, 2nd, 3rd)', badge: 'Rank' },
      { id: 'exam-grades-range', targetTab: 'examination', subTab: 'grades-range', label: 'CBSE 9-Point Grades Range', badge: 'CBSE' }
    ]
  },
  {
    id: 'card-certificate-group',
    permissionKey: 'card_management',
    label: 'ID CARDS & CERTIFICATES',
    icon: Contact,
    items: [
      { id: 'card-student-id', targetTab: 'card-management', subTab: 'student-id', label: 'Student ID Card Print', badge: 'ID' },
      { id: 'card-employee-id', targetTab: 'card-management', subTab: 'employee-id', label: 'Employee ID Card Print', badge: null },
      { id: 'card-generate-admit', targetTab: 'card-management', subTab: 'generate-admit', label: 'Generate Exam Admit Card', badge: 'Exam' },
      { id: 'cert-generate-student', targetTab: 'certificates', subTab: 'generate-student', label: 'Student Transfer Certificate (TC)', badge: 'TC' },
      { id: 'cert-generate-employee', targetTab: 'certificates', subTab: 'generate-employee', label: 'Employee Service Certificate', badge: null }
    ]
  },
  {
    id: 'inventory-group',
    permissionKey: 'inventory',
    label: 'INVENTORY & STORE',
    icon: Package,
    items: [
      { id: 'inventory-product', targetTab: 'inventory-store', subTab: 'product', label: 'Store Stock Balances', badge: 'Stock' },
      { id: 'inventory-sales', targetTab: 'inventory-store', subTab: 'sales', label: 'Uniform, Books & Stationery Issue / Sales', badge: 'POS' }
    ]
  },
  {
    id: 'library-group',
    permissionKey: 'library',
    label: 'LIBRARY',
    icon: BookMarked,
    items: [
      { id: 'lib-books', targetTab: 'library', subTab: 'books', label: 'Books Catalog', badge: 'Catalog' },
      { id: 'lib-category', targetTab: 'library', subTab: 'category', label: 'Books Category', badge: null },
      { id: 'lib-my-issued', targetTab: 'library', subTab: 'my-issued', label: 'My Issued Book', badge: null },
      { id: 'lib-issue-return', targetTab: 'library', subTab: 'issue-return', label: 'Book Issue/return Desk', badge: 'Counter' }
    ]
  },
  {
    id: 'bulk-sms-group',
    permissionKey: 'sms_notices',
    label: 'BULK SMS AND EMAIL',
    icon: Bell,
    items: [
      { id: 'sms-send', targetTab: 'notices', subTab: 'send', label: 'Send Sms / WhatsApp Broadcast', badge: 'Broadcast' },
      { id: 'sms-report', targetTab: 'notices', subTab: 'report', label: 'Sms / Email Report Logs', badge: 'Logs' },
      { id: 'sms-birthday-student', targetTab: 'notices', subTab: 'birthday-student', label: 'Student Birthday Wishes', badge: '🎂' },
      { id: 'sms-birthday-staff', targetTab: 'notices', subTab: 'birthday-staff', label: 'Staff Birthday Wishes', badge: '🎉' }
    ]
  },
  {
    id: 'message-group',
    permissionKey: 'sms_notices',
    label: 'MESSAGE (MAILBOX)',
    icon: Mail,
    items: [
      { id: 'message-inbox', targetTab: 'notices', subTab: 'mailbox-inbox', label: 'Inbox & Mailbox', badge: '0' },
      { id: 'message-compose', targetTab: 'notices', subTab: 'mailbox-compose', label: 'Compose Message', badge: 'New' }
    ]
  },
  {
    id: 'reports-group',
    permissionKey: 'reports',
    label: 'REPORTS',
    icon: BarChart3,
    items: [
      { id: 'reports-custom-list', targetTab: 'custom-list', label: '📋 CUSTOM LIST BUILDER', badge: 'Custom' },
      { id: 'reports-student', targetTab: 'reports', subTab: 'students', label: 'STUDENT REPORTS', badge: 'Student' },
      { id: 'reports-fees', targetTab: 'reports', subTab: 'fees', label: 'FEES REPORTS', badge: 'Fees' },
      { id: 'reports-financial', targetTab: 'reports', subTab: 'financial', label: 'FINANCIAL REPORTS', badge: 'Accounts' },
      { id: 'reports-attendance', targetTab: 'reports', subTab: 'attendance', label: 'ATTENDANCE REPORTS (<75%)', badge: 'Biometric' },
      { id: 'reports-hr', targetTab: 'reports', subTab: 'hr', label: 'HUMAN RESOURCE', badge: 'HR' },
      { id: 'reports-exam', targetTab: 'reports', subTab: 'exam', label: 'EXAMINATION', badge: 'Marks' }
    ]
  },
  {
    id: 'branch-group',
    permissionKey: 'dashboard',
    label: 'BRANCH',
    icon: GitBranch,
    items: [
      { id: 'branch-br01', branchId: 'BR-01', label: 'Senior Campus (Jargwan)', badge: 'BR-01' },
      { id: 'branch-br02', branchId: 'BR-02', label: 'Junior High (Barheti)', badge: 'BR-02' },
      { id: 'branch-br03', branchId: 'BR-03', label: 'Dadheech Kids School', badge: 'BR-03' }
    ]
  },
  {
    id: 'frontend-group',
    permissionKey: 'dashboard',
    label: 'FRONTEND',
    icon: Globe,
    items: [
      { id: 'fe-setting', targetTab: 'frontend', subTab: 'setting', label: 'Website Settings', badge: 'CMS' },
      { id: 'fe-menu', targetTab: 'frontend', subTab: 'menu', label: 'Navigation Menu', badge: null },
      { id: 'fe-slider', targetTab: 'frontend', subTab: 'slider', label: 'Homepage Sliders', badge: 'Banner' },
      { id: 'fe-testimonial', targetTab: 'frontend', subTab: 'testimonial', label: 'Parent Testimonials', badge: null },
      { id: 'fe-gallery', targetTab: 'frontend', subTab: 'gallery', label: 'Photo Gallery', badge: 'Media' },
      { id: 'website-view', label: 'Public Live Website ↗', badge: 'Live', isExternalWebsite: true }
    ]
  },
  {
    id: 'settings-group',
    permissionKey: 'settings',
    label: 'SETTINGS',
    icon: Settings,
    items: [
      { id: 'setting-global', targetTab: 'settings', subTab: 'global', label: 'Global Settings', badge: 'App' },
      { id: 'setting-school', targetTab: 'settings', subTab: 'school', label: 'School Profile & CBSE Info', badge: 'CBSE' },
      { id: 'setting-role-permission', targetTab: 'settings', subTab: 'role-permission', label: 'Role Permissions (RBAC)', badge: 'RBAC' },
      { id: 'setting-session', targetTab: 'settings', subTab: 'session', label: 'Academic Sessions (2026-27)', badge: '2026-27' },
      { id: 'setting-cron', targetTab: 'settings', subTab: 'cron', label: 'Automated SMS & Bell Cron', badge: 'Auto' },
      { id: 'setting-backup', targetTab: 'settings', subTab: 'backup', label: 'Database Backup & Restore', badge: 'SQL' }
    ]
  }
];

export const Sidebar = ({
  activeTab,
  setActiveTab,
  currentRole = 'Super Admin',
  isOpen,
  setIsOpen,
  isCollapsed = false,
  setIsCollapsed,
  onClose
}) => {
  const { role: authRole, permissions: userPermissions } = useAuth();
  const { showToast } = useToast();
  const effectiveRole = authRole || currentRole || 'Super Admin';

  const findParentGroupId = (tab) => {
    for (const group of navigationGroups) {
      if (group.isSingle && group.targetTab === tab) return group.id;
      if (group.items) {
        for (const item of group.items) {
          if (item.targetTab === tab || item.id === tab) {
            return group.id;
          }
        }
      }
    }
    return null;
  };

  // Only ONE group is open at a time (Accordion mode)
  const [expandedGroupId, setExpandedGroupId] = useState(() => findParentGroupId(activeTab) || 'student-accounting-group');

  // Auto-expand active group when activeTab changes
  useEffect(() => {
    const parentId = findParentGroupId(activeTab);
    if (parentId) {
      setExpandedGroupId(parentId);
    }
  }, [activeTab]);

  const toggleGroup = (groupId) => {
    if (isCollapsed && setIsCollapsed) {
      setIsCollapsed(false);
    }
    setExpandedGroupId(prev => (prev === groupId ? null : groupId));
  };

  const handleNavClick = (item) => {
    if (item.isExternalWebsite || item.id === 'website-view') {
      setActiveTab('website');
      if (onClose) onClose();
      if (setIsOpen) setIsOpen(false);
      return;
    }

    if (item.branchId) {
      localStorage.setItem('selectedBranchId', item.branchId);
      showToast(`Switched active branch to: ${item.label}`, 'info');
      setActiveTab('dashboard');
      if (onClose) onClose();
      if (setIsOpen) setIsOpen(false);
      return;
    }

    const tabToSet = item.targetTab || item.id;
    setActiveTab(tabToSet);
    if (onClose) onClose();
    if (setIsOpen) setIsOpen(false);
  };

  const isItemActive = (item) => {
    if (item.isSingle) {
      return activeTab === item.targetTab;
    }
    return activeTab === item.id;
  };

  const handleClose = () => {
    if (onClose) onClose();
    if (setIsOpen) setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={handleClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 bg-[#0c1e3d] text-slate-100 flex flex-col transition-all duration-300 ease-in-out border-r border-slate-800 shadow-2xl ${
          isCollapsed ? 'w-20' : 'w-72'
        } ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className={`p-3.5 border-b border-slate-800/80 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} bg-[#08152c]`}>
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full bg-white p-0.5 shadow-md border-2 border-amber-400 shrink-0 flex items-center justify-center">
              <img src="/logo.png" alt="Dadheech Emblem" className="w-full h-full object-contain rounded-full" />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-white"></span>
              </span>
            </div>
            {!isCollapsed && (
              <div className="animate-in fade-in duration-200">
                <h2 className="font-serif font-black text-lg text-white tracking-tight uppercase leading-none">
                  DADHEECH
                </h2>
                <span className="text-[8.5px] font-black text-amber-300 tracking-[0.16em] uppercase mt-1 block">
                  A GROUP OF EDUCATION
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-mono text-emerald-300 font-bold">BSB Board (Up to 12th)</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto px-2 sm:px-3 py-4 space-y-1.5 custom-scrollbar">
          {navigationGroups.map(group => {
            const Icon = group.icon;
            const isExpanded = expandedGroupId === group.id;

            if (group.isSingle) {
              const isActive = activeTab === group.targetTab;
              return (
                <button
                  key={group.id}
                  onClick={() => handleNavClick(group)}
                  title={isCollapsed ? group.label : undefined}
                  className={`w-full flex items-center ${isCollapsed ? 'justify-center px-2' : 'justify-between px-3.5'} py-2.5 rounded-xl font-bold text-xs transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/30'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
                    <Icon className="w-4 h-4 text-blue-300 shrink-0" />
                    {!isCollapsed && <span className="truncate">{group.label}</span>}
                  </div>
                </button>
              );
            }

            return (
              <div key={group.id} className="space-y-1">
                <button
                  onClick={() => toggleGroup(group.id)}
                  title={isCollapsed ? group.label : undefined}
                  className={`w-full flex items-center ${isCollapsed ? 'justify-center px-2' : 'justify-between px-3.5'} py-2.5 rounded-xl font-bold text-xs transition-all ${
                    isExpanded && !isCollapsed
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md border border-blue-400/30'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
                    <Icon className="w-4 h-4 text-blue-300 shrink-0" />
                    {!isCollapsed && <span className="uppercase tracking-tight text-[11px] truncate">{group.label}</span>}
                  </div>
                  {!isCollapsed && (
                    <div className="text-white text-xs shrink-0">
                      {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  )}
                </button>

                {/* Sub-Items */}
                {isExpanded && group.items && !isCollapsed && (
                  <div className="pl-3 pr-1 py-1 space-y-0.5 bg-[#091730]/70 rounded-xl border border-slate-800/50 animate-in fade-in duration-200">
                    {group.items.map(item => {
                      const isActive = isItemActive(item);
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                            isActive
                              ? 'bg-blue-500/20 text-blue-300 font-black border-l-2 border-blue-400'
                              : 'text-slate-300 hover:bg-slate-800/40 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span className="text-blue-400 text-[10px] shrink-0">▶</span>
                            <span className="truncate">{item.label}</span>
                          </div>
                          {item.badge && (
                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-white/10 text-white shrink-0 ml-1">
                              {item.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer User Card */}
        <div className={`p-3 border-t border-slate-800 bg-[#08152c] flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-600/30 border border-indigo-400/30 flex items-center justify-center font-black text-indigo-300 text-xs shrink-0">
              {effectiveRole.charAt(0)}
            </div>
            {!isCollapsed && (
              <div className="animate-in fade-in duration-200 truncate">
                <p className="text-xs font-bold text-white leading-tight truncate">{effectiveRole}</p>
                <p className="text-[10px] text-slate-400">Admin Control Panel</p>
              </div>
            )}
          </div>
          {!isCollapsed && (
            <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-800/50 shrink-0">
              v2.6 Live
            </span>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
