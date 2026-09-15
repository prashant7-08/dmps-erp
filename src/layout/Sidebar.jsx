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
  MessageSquare,
  Server
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';
import saasService from '../services/saasService';

export const navigationGroups = [
  {
    id: 'dashboard-group',
    permissionKey: 'dashboard',
    label: 'DASHBOARD',
    icon: LayoutDashboard,
    items: [
      { id: 'dashboard', label: 'All Branches', badge: 'All', branchId: 'all' },
      { id: 'dashboard-main', label: 'DADHEECH MEMORIAL (MAIN)', badge: 'BR-1', branchId: 'BR-01' },
      { id: 'dashboard-smart', label: 'DADHEECH SMART CAMPUS', badge: 'BR-2', branchId: 'BR-02' },
      { id: 'dashboard-kids', label: 'DADHEECH KIDS SCHOOL', badge: 'BR-3', branchId: 'BR-03' }
    ]
  },
  {
    id: 'reception-group',
    permissionKey: 'reception',
    label: 'RECEPTION / FRONT DESK',
    icon: Building2,
    items: [
      { id: 'helpdesk-inquiries', label: 'Admission Inquiries & Visitors', badge: 'Live' },
      { id: 'helpdesk-grievance', label: 'Grievance & Complaints', badge: null }
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
      { id: 'students-list', label: 'All Active Students', badge: 'Active' },
      { id: 'students-custom-list', label: 'Custom List Builder', badge: 'Custom' },
      { id: 'students-inactive', label: 'Inactive / TC List', badge: 'Left' }
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
      { id: 'payroll', label: 'Salary Payment & Payslips', badge: 'Pay' },
      { id: 'leave', label: 'Leave Management', badge: 'Leave' }
    ]
  },
  {
    id: 'student-accounting-group',
    permissionKey: 'student_accounting',
    label: 'STUDENT ACCOUNTING',
    icon: CreditCard,
    items: [
      { id: 'fees-pos', label: 'Fee Collect / POS Counter', badge: 'POS' },
      { id: 'fees-dues', label: 'Due List & Reminders', badge: 'Due' },
      { id: 'fees-allocation', label: 'Fees Allocation', badge: null },
      { id: 'fees-types', label: 'Fees Types & Groups', badge: null },
      { id: 'fees-siblings', label: 'Setup Siblings Discount', badge: null }
    ]
  },
  {
    id: 'office-accounting-group',
    permissionKey: 'office_accounting',
    label: 'OFFICE CASH BOOK',
    icon: DollarSign,
    items: [
      { id: 'office-deposit', label: 'Cash In (Income / Fees)', badge: '+' },
      { id: 'office-expense', label: 'Cash Out (Expenses / Diesel)', badge: '-' },
      { id: 'office-transactions', label: 'All Transactions Ledger', badge: 'Ledger' }
    ]
  },
  {
    id: 'supervision-group',
    permissionKey: 'supervision',
    label: 'SUPERVISION & FLEET',
    icon: Bus,
    items: [
      { id: 'transport-routes', label: 'Bus Fleet & Route Master', badge: '6 Buses' },
      { id: 'transport-stoppage', label: 'Stoppage & Stop Fees', badge: '45+ Stops' },
      { id: 'transport-assign', label: 'Assign Student Bus Stoppage', badge: null },
      { id: 'hostel-allocation', label: 'Hostel Bed Allocation (5-6 Students)', badge: 'Hostel' }
    ]
  },
  {
    id: 'attendance-group',
    permissionKey: 'attendance',
    label: 'ATTENDANCE',
    icon: CheckSquare,
    items: [
      { id: 'attendance', label: 'Student Daily Attendance', badge: 'Daily' },
      { id: 'staff-attendance', label: 'Staff Biometric Attendance', badge: 'Staff' },
      { id: 'automatic-bell', label: 'Automatic School Bell 🔔', badge: 'Auto' }
    ]
  },
  {
    id: 'academic-group',
    permissionKey: 'academic',
    label: 'ACADEMIC & TIMETABLE',
    icon: BookOpen,
    items: [
      { id: 'acad-classes', label: 'Control Classes & Sections', badge: null },
      { id: 'acad-assign-teacher', label: 'Assign Class Teacher', badge: null },
      { id: 'acad-subjects', label: 'Subject Master', badge: null },
      { id: 'acad-class-schedule', label: 'Class Timetable Schedule', badge: 'Routine' },
      { id: 'acad-promotion', label: 'Student Annual Promotion', badge: 'Roll' }
    ]
  },
  {
    id: 'homework-group',
    permissionKey: 'homework',
    label: 'HOMEWORK',
    icon: FileSpreadsheet,
    items: [
      { id: 'hw-homework', label: 'Daily Homework', badge: 'Daily' },
      { id: 'hw-evaluation', label: 'Evaluation Report', badge: null }
    ]
  },
  {
    id: 'exam-master-group',
    permissionKey: 'exam_master',
    label: 'EXAM MASTER',
    icon: Award,
    items: [
      { id: 'exam-term', label: 'Exam Term', badge: 'Term' },
      { id: 'exam-hall', label: 'Exam Hall', badge: null },
      { id: 'exam-trait', label: 'Trait Type (Co-Scholastic)', badge: null },
      { id: 'exam-distribution', label: 'Marks Distribution (80:20)', badge: null },
      { id: 'exam-schedule', label: 'Exam Schedule Date Sheet', badge: 'Date' },
      { id: 'exam-marks', label: 'Mark Entries & Report Cards 🖨️', badge: 'Marks' },
      { id: 'exam-marks-attendance', label: 'Attendance Entries', badge: null },
      { id: 'exam-generate-position', label: 'Generate Position (1st, 2nd, 3rd)', badge: 'Rank' },
      { id: 'exam-grades-range', label: 'CBSE 9-Point Grades Range', badge: 'CBSE' }
    ]
  },
  {
    id: 'card-certificate-group',
    permissionKey: 'card_management',
    label: 'ID CARDS & CERTIFICATES',
    icon: Contact,
    items: [
      { id: 'card-student-id', label: 'Student ID Card Print', badge: 'ID' },
      { id: 'card-employee-id', label: 'Employee ID Card Print', badge: null },
      { id: 'card-generate-admit', label: 'Generate Exam Admit Card', badge: 'Exam' },
      { id: 'cert-generate-student', label: 'Student Transfer Certificate (TC)', badge: 'TC' },
      { id: 'cert-generate-employee', label: 'Employee Service Certificate', badge: null }
    ]
  },
  {
    id: 'inventory-group',
    permissionKey: 'inventory',
    label: 'INVENTORY & STORE',
    icon: Package,
    items: [
      { id: 'inventory-product', label: 'Store Stock Balances', badge: 'Stock' },
      { id: 'inventory-sales', label: 'Uniform, Books & Stationery Issue / Sales', badge: 'POS' }
    ]
  },
  {
    id: 'library-group',
    permissionKey: 'library',
    label: 'LIBRARY',
    icon: BookMarked,
    items: [
      { id: 'lib-books', label: 'Books Catalog', badge: 'Catalog' },
      { id: 'lib-category', label: 'Books Category', badge: null },
      { id: 'lib-my-issued', label: 'My Issued Book', badge: null },
      { id: 'lib-issue-return', label: 'Book Issue/return Desk', badge: 'Counter' }
    ]
  },
  {
    id: 'bulk-sms-group',
    permissionKey: 'sms_notices',
    label: 'BULK SMS AND EMAIL',
    icon: Bell,
    items: [
      { id: 'sms-send', label: 'Send Sms / WhatsApp Broadcast', badge: 'Broadcast' },
      { id: 'sms-report', label: 'Sms / Email Report Logs', badge: 'Logs' },
      { id: 'sms-birthday-student', label: 'Student Birthday Wishes', badge: '🎂' },
      { id: 'sms-birthday-staff', label: 'Staff Birthday Wishes', badge: '🎉' }
    ]
  },
  {
    id: 'message-group',
    permissionKey: 'sms_notices',
    label: 'MESSAGE (MAILBOX)',
    icon: Mail,
    items: [
      { id: 'message-inbox', label: 'Inbox & Mailbox', badge: '0' },
      { id: 'message-compose', label: 'Compose Message', badge: 'New' }
    ]
  },
  {
    id: 'reports-group',
    permissionKey: 'reports',
    label: 'REPORTS',
    icon: BarChart3,
    items: [
      { id: 'reports-custom-list', label: '📋 CUSTOM LIST BUILDER', badge: 'Custom' },
      { id: 'reports-student', label: 'STUDENT REPORTS', badge: 'Student' },
      { id: 'reports-fees', label: 'FEES REPORTS', badge: 'Fees' },
      { id: 'reports-financial', label: 'FINANCIAL REPORTS', badge: 'Accounts' },
      { id: 'reports-attendance', label: 'ATTENDANCE REPORTS (<75%)', badge: 'Biometric' },
      { id: 'reports-hr', label: 'HUMAN RESOURCE', badge: 'HR' },
      { id: 'reports-exam', label: 'EXAMINATION', badge: 'Marks' }
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
      { id: 'fe-setting', label: 'Website Settings', badge: 'CMS' },
      { id: 'fe-menu', label: 'Navigation Menu', badge: null },
      { id: 'fe-slider', label: 'Homepage Sliders', badge: 'Banner' },
      { id: 'fe-testimonial', label: 'Parent Testimonials', badge: null },
      { id: 'fe-gallery', label: 'Photo Gallery', badge: 'Media' },
      { id: 'website-view', label: 'Public Live Website ↗', badge: 'Live', isExternalWebsite: true }
    ]
  },
  {
    id: 'role-permissions-single',
    permissionKey: 'settings',
    label: 'PORTAL & ROLE ACCESS',
    icon: ShieldCheck,
    isSingle: true,
    targetTab: 'setting-role-permission',
    badge: 'Permissions'
  },
  {
    id: 'settings-group',
    permissionKey: 'settings',
    label: 'SETTINGS',
    icon: Settings,
    items: [
      { id: 'setting-global', label: 'Global Settings', badge: 'App' },
      { id: 'setting-school', label: 'School Profile & CBSE Info', badge: 'CBSE' },
      { id: 'setting-role-permission', label: 'Role Permissions (RBAC)', badge: 'RBAC' },
      { id: 'setting-session', label: 'Academic Sessions (2026-27)', badge: '2026-27' },
      { id: 'setting-cron', label: 'Automated SMS & Bell Cron', badge: 'Auto' },
      { id: 'setting-backup', label: 'Database Backup & Restore', badge: 'SQL' }
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
    if (!tab || tab === 'dashboard' || tab === 'dashboard-group') return null;

    if (tab.startsWith('helpdesk-') || tab === 'reception' || tab === 'inquiries' || tab === 'complaints') return 'reception-group';
    if (tab === 'admission' || tab === 'admission-create' || tab === 'admission-online' || tab === 'students-import' || tab === 'admission-import') return 'admission-group';
    if (tab === 'students' || tab === 'students-list' || tab === 'students-inactive' || tab === 'family-portal' || tab === 'parent-portal' || tab === 'students-custom-list') return 'students-group';
    if (tab === 'staff' || tab === 'staff-add' || tab === 'employee-add' || tab === 'payroll' || tab === 'leave' || tab === 'employee-list' || tab === 'employees' || tab === 'human-resource' || tab === 'hr-leave') return 'employee-group';
    if (tab.startsWith('fees-') || tab === 'fees' || tab === 'pos' || tab === 'dues' || tab === 'allocation' || tab === 'siblings' || tab === 'sibling-list' || tab === 'payment-types') return 'student-accounting-group';
    if (tab.startsWith('office-') || tab === 'office-cash-book' || tab === 'account' || tab === 'deposit' || tab === 'expense' || tab === 'transactions' || tab === 'voucher') return 'office-accounting-group';
    if (tab.startsWith('transport-') || tab === 'transport' || tab.startsWith('hostel-') || tab === 'hostel') return 'supervision-group';
    if (tab === 'attendance' || tab === 'staff-attendance' || tab === 'student-attendance' || tab === 'employee-attendance' || tab === 'automatic-bell' || tab === 'bell' || tab === 'biometric' || tab === 'staff-monthly-matrix') return 'attendance-group';
    if (tab.startsWith('acad-') || tab === 'academics' || tab === 'timetable') return 'academic-group';
    if (tab.startsWith('hw-') || tab === 'homework') return 'homework-group';
    if (tab.startsWith('exam-') || tab === 'examination' || tab === 'online-quiz' || tab === 'quiz' || tab === 'student-portal') return 'exam-master-group';
    if (tab.startsWith('card-') || tab.startsWith('cert-') || tab === 'card-management' || tab === 'certificates' || tab === 'admit-cards') return 'card-certificate-group';
    if (tab.startsWith('inventory-') || tab === 'inventory' || tab === 'inventory-store') return 'inventory-group';
    if (tab.startsWith('lib-') || tab === 'library') return 'library-group';
    if (tab.startsWith('sms-') || tab === 'notices' || tab === 'bulk-sms') return 'bulk-sms-group';
    if (tab.startsWith('message-') || tab === 'message') return 'message-group';
    if (tab.startsWith('reports-') || tab === 'reports' || tab === 'custom-list' || tab === 'customlist') return 'reports-group';
    if (tab.startsWith('fe-') || tab === 'frontend') return 'frontend-group';
    if (tab.startsWith('setting-') || tab === 'settings' || tab === 'role-permissions-single' || tab === 'roles' || tab === 'role-permission') return 'settings-group';

    for (const group of navigationGroups) {
      if (group.items) {
        for (const item of group.items) {
          if (item.id === tab || item.targetTab === tab) return group.id;
        }
      }
    }
    return null;
  };

  // Only ONE group is open at a time (Strict Accordion mode)
  const [expandedGroupId, setExpandedGroupId] = useState(() => findParentGroupId(activeTab));

  // Auto-expand active group when activeTab changes
  useEffect(() => {
    const parentId = findParentGroupId(activeTab);
    if (parentId !== undefined) {
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

    if (item.isSingle) {
      setExpandedGroupId(null);
      const tabToSet = item.targetTab || item.id;
      setActiveTab(tabToSet);
      if (onClose) onClose();
      if (setIsOpen) setIsOpen(false);
      return;
    }

    const tabToSet = item.id;
    setActiveTab(tabToSet);
    if (onClose) onClose();
    if (setIsOpen) setIsOpen(false);
  };

  const isItemActive = (item) => {
    if (item.isSingle) {
      if (item.id === 'role-permissions-single') {
        return activeTab === 'setting-role-permission' || activeTab === 'role-permissions-single' || activeTab === 'role-permission' || activeTab === 'roles';
      }
      return activeTab === item.targetTab || activeTab === item.id;
    }

    if (activeTab === item.id) return true;
    if (item.id === 'family-portal' && (activeTab === 'family-portal' || activeTab === 'parent-portal')) return true;
    if (item.id === 'online-quiz' && (activeTab === 'online-quiz' || activeTab === 'quiz' || activeTab === 'student-portal')) return true;
    if ((item.id === 'students-custom-list' || item.id === 'reports-custom-list') && (activeTab === 'custom-list' || activeTab === 'customlist' || activeTab === 'custom-reports')) return true;
    if (item.id === 'students-list' && (activeTab === 'students' || activeTab === 'students-list')) return true;
    if (item.id === 'students-inactive' && activeTab === 'students-inactive') return true;
    if (item.id === 'admission' && (activeTab === 'admission' || activeTab === 'admission-create')) return true;
    if (item.id === 'admission-online' && activeTab === 'admission-online') return true;
    if (item.id === 'students-import' && (activeTab === 'students-import' || activeTab === 'admission-import')) return true;
    if (item.id === 'staff' && (activeTab === 'staff' || activeTab === 'employee-list' || activeTab === 'employees')) return true;
    if (item.id === 'payroll' && (activeTab === 'payroll' || activeTab === 'human-resource')) return true;
    if (item.id === 'leave' && (activeTab === 'leave' || activeTab === 'hr-leave' || activeTab === 'leave-manage')) return true;
    if (item.id === 'fees-pos' && (activeTab === 'fees' || activeTab === 'pos' || activeTab === 'fees-pos' || activeTab === 'fees-collect')) return true;
    if (item.id === 'fees-dues' && (activeTab === 'fees-dues' || activeTab === 'dues')) return true;
    if (item.id === 'fees-allocation' && (activeTab === 'fees-allocation' || activeTab === 'allocation')) return true;
    if (item.id === 'fees-types' && (activeTab === 'fees-types' || activeTab === 'types' || activeTab === 'fees-groups')) return true;
    if (item.id === 'fees-siblings' && (activeTab === 'fees-siblings' || activeTab === 'siblings' || activeTab === 'sibling-list' || activeTab === 'fees-sibling-list')) return true;
    if (item.id === 'attendance' && (activeTab === 'attendance' || activeTab === 'student-attendance')) return true;
    if (item.id === 'staff-attendance' && (activeTab === 'staff-attendance' || activeTab === 'employee-attendance')) return true;
    if (item.id === 'automatic-bell' && (activeTab === 'automatic-bell' || activeTab === 'bell')) return true;
    if (item.id === 'setting-role-permission' && (activeTab === 'setting-role-permission' || activeTab === 'role-permission' || activeTab === 'roles')) return true;

    return false;
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
              <img src="/logo.png" alt="School Emblem" className="w-full h-full object-contain rounded-full" />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-white"></span>
              </span>
            </div>
            {!isCollapsed && (() => {
              const activeTenant = saasService.getActiveTenant();
              return (
                <div className="animate-in fade-in duration-200 min-w-0">
                  <h2 className="font-serif font-black text-base text-white tracking-tight uppercase leading-none truncate max-w-[170px]">
                    {activeTenant?.shortName || activeTenant?.name || 'DADHEECH'}
                  </h2>
                  <span className="text-[8.5px] font-black text-amber-300 tracking-[0.12em] uppercase mt-1 block truncate max-w-[170px]">
                    {activeTenant?.name || 'A GROUP OF EDUCATION'}
                  </span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="text-[9px] font-mono text-emerald-300 font-bold truncate max-w-[160px]">
                      {activeTenant?.affiliation || 'CBSE Affiliated'}
                    </span>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto px-2 sm:px-3 py-4 space-y-1.5 custom-scrollbar">
          {navigationGroups.filter(group => {
            if (effectiveRole === 'Super Admin') return true;
            if (group.isSingle) {
              return schoolService.hasPermission(effectiveRole, group.permissionKey || group.targetTab, 'view');
            }
            const hasGroupView = schoolService.hasPermission(effectiveRole, group.permissionKey, 'view');
            if (!hasGroupView) return false;
            if (group.items && group.items.length > 0) {
              const visibleSubItems = group.items.filter(item => {
                const cleanKey = (item.id || '').replace(/-/g, '_');
                return schoolService.hasPermission(effectiveRole, cleanKey, 'view') ||
                       schoolService.hasPermission(effectiveRole, group.permissionKey, 'view');
              });
              return visibleSubItems.length > 0;
            }
            return true;
          }).map(group => {
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

            const itemsToShow = (group.items || []).filter(item => {
              if (effectiveRole === 'Super Admin') return true;
              const cleanKey = (item.id || '').replace(/-/g, '_');
              return schoolService.hasPermission(effectiveRole, cleanKey, 'view') ||
                     schoolService.hasPermission(effectiveRole, group.permissionKey, 'view');
            });

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
                {isExpanded && itemsToShow.length > 0 && !isCollapsed && (
                  <div className="pl-3 pr-1 py-1 space-y-0.5 bg-[#091730]/70 rounded-xl border border-slate-800/50 animate-in fade-in duration-200">
                    {itemsToShow.map(item => {
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
