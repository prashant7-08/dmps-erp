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
  GitBranch
} from 'lucide-react';

export const navigationGroups = [
  {
    id: 'dashboard-group',
    label: 'DASHBOARD',
    icon: LayoutDashboard,
    isSingle: true,
    targetTab: 'dashboard'
  },
  {
    id: 'reception-group',
    label: 'RECEPTION / FRONT DESK',
    icon: Building2,
    items: [
      { id: 'helpdesk-visitors', label: 'Admission Inquiries & Desk', badge: 'Live' },
      { id: 'helpdesk-visitors', label: 'Visitor Gate Passes', badge: null },
      { id: 'helpdesk-visitors', label: 'Grievance Tickets', badge: null }
    ]
  },
  {
    id: 'admission-group',
    label: 'ADMISSION',
    icon: UserPlus,
    items: [
      { id: 'admission', label: 'New Student Admission', badge: '2026-27' },
      { id: 'helpdesk-visitors', label: 'Online Web Inquiries', badge: 'Web' }
    ]
  },
  {
    id: 'students-group',
    label: 'STUDENT DETAILS',
    icon: GraduationCap,
    items: [
      { id: 'students', label: 'Student List & Profiles', badge: 'Active' },
      { id: 'students', label: 'Import Excel / CSV', badge: 'Bulk' }
    ]
  },
  {
    id: 'staff-group',
    label: 'EMPLOYEE / HR',
    icon: Users,
    items: [
      { id: 'staff', label: 'Teacher & Staff Directory', badge: null },
      { id: 'leave', label: 'Leave Approvals', badge: 'Pending' },
      { id: 'payroll', label: 'HR & Staff Payroll', badge: null }
    ]
  },
  {
    id: 'student-accounting-group',
    label: 'STUDENT ACCOUNTING',
    icon: CreditCard,
    items: [
      { id: 'fees-offline', targetTab: 'fees', subTab: 'offline', label: 'Offline Payments', badge: null },
      { id: 'fees-siblings', targetTab: 'fees', subTab: 'siblings', label: 'Setup Siblings', badge: null },
      { id: 'fees-sibling-list', targetTab: 'fees', subTab: 'sibling-list', label: 'Sibling List', badge: null },
      { id: 'fees-types', targetTab: 'fees', subTab: 'types', label: 'Fees Type', badge: null },
      { id: 'fees-groups', targetTab: 'fees', subTab: 'groups', label: 'Fees Group', badge: null },
      { id: 'fees-fine', targetTab: 'fees', subTab: 'fine', label: 'Fine Setup', badge: null },
      { id: 'fees-allocation', targetTab: 'fees', subTab: 'allocation', label: 'Fees Allocation', badge: null },
      { id: 'fees-pos', targetTab: 'fees', subTab: 'pos', label: 'Fee Collect / Payment', badge: 'POS' },
      { id: 'fees-dues', targetTab: 'fees', subTab: 'dues', label: 'Due List / Reminder', badge: 'Due' }
    ]
  },
  {
    id: 'office-accounting-group',
    label: 'OFFICE ACCOUNTING',
    icon: DollarSign,
    items: [
      { id: 'office-account', targetTab: 'inventory', subTab: 'account', label: 'Account', badge: null },
      { id: 'office-deposit', targetTab: 'inventory', subTab: 'deposit', label: 'New Deposit', badge: null },
      { id: 'office-expense', targetTab: 'inventory', subTab: 'expense', label: 'New Expense', badge: null },
      { id: 'office-transactions', targetTab: 'inventory', subTab: 'transactions', label: 'All Transactions', badge: null },
      { id: 'office-voucher', targetTab: 'inventory', subTab: 'voucher', label: 'Voucher Head', badge: null }
    ]
  },
  {
    id: 'supervision-group',
    label: 'SUPERVISION',
    icon: Home,
    items: [
      { id: 'transport-routes', targetTab: 'transport', subTab: 'routes', label: 'Route Master', badge: null },
      { id: 'transport-vehicles', targetTab: 'transport', subTab: 'vehicles', label: 'Vehicle Master', badge: null },
      { id: 'transport-stoppage', targetTab: 'transport', subTab: 'stoppage', label: 'Stoppage', badge: '41' },
      { id: 'transport-assign', targetTab: 'transport', subTab: 'assign', label: 'Assign Stopage', badge: null },
      { id: 'transport-allocation', targetTab: 'transport', subTab: 'allocation', label: 'Allocation Report', badge: null },
      { id: 'hostel', targetTab: 'hostel', label: 'Hostel & Rooms', badge: null },
      { id: 'medical', targetTab: 'medical', label: 'Medical & Health', badge: null }
    ]
  },
  {
    id: 'attendance-group',
    label: 'ATTENDANCE',
    icon: CheckSquare,
    items: [
      { id: 'attendance', targetTab: 'attendance', label: 'Daily Student Attendance', badge: 'Daily' },
      { id: 'staff-attendance', targetTab: 'staff-attendance', label: 'Staff / Teacher Attendance', badge: 'Staff' },
      { id: 'biometric', targetTab: 'biometric', label: 'Biometric Machine & Sync', badge: 'Secureye' }
    ]
  },
  {
    id: 'inventory-group',
    label: 'INVENTORY',
    icon: Package,
    items: [
      { id: 'inventory', targetTab: 'inventory', label: 'Item Stock & Store', badge: null }
    ]
  },
  {
    id: 'card-management-group',
    label: 'CARD MANAGEMENT',
    icon: Contact,
    items: [
      { id: 'card-id-template', targetTab: 'card-management', subTab: 'id-template', label: 'Id Card Templete', badge: null },
      { id: 'card-student-id', targetTab: 'card-management', subTab: 'student-id', label: 'Student Id Card', badge: 'ID' },
      { id: 'card-employee-id', targetTab: 'card-management', subTab: 'employee-id', label: 'Employee Id Card', badge: null },
      { id: 'card-admit-template', targetTab: 'card-management', subTab: 'admit-template', label: 'Admit Card Templete', badge: null },
      { id: 'card-generate-admit', targetTab: 'card-management', subTab: 'generate-admit', label: 'Generate Admit Card', badge: 'Exam' }
    ]
  },
  {
    id: 'certificate-group',
    label: 'CERTIFICATE',
    icon: Award,
    items: [
      { id: 'cert-template', targetTab: 'certificates', subTab: 'template', label: 'Certificate Templete', badge: null },
      { id: 'cert-generate-student', targetTab: 'certificates', subTab: 'generate-student', label: 'Generate Student', badge: 'TC' },
      { id: 'cert-generate-employee', targetTab: 'certificates', subTab: 'generate-employee', label: 'Generate Employee', badge: null }
    ]
  },
  {
    id: 'academic-group',
    label: 'ACADEMIC',
    icon: BookOpen,
    items: [
      { id: 'academics', label: 'Classes & Syllabus', badge: null },
      { id: 'timetable', label: 'Timetable & Classrooms', badge: null }
    ]
  },
  {
    id: 'homework-group',
    label: 'HOMEWORK',
    icon: FileSpreadsheet,
    items: [
      { id: 'homework', label: 'Daily Homework & Tasks', badge: null }
    ]
  },
  {
    id: 'exam-master-group',
    label: 'EXAM MASTER',
    icon: Award,
    items: [
      { id: 'examination', label: 'CBSE Exams & Marks Entry', badge: 'CBSE' }
    ]
  },
  {
    id: 'library-group',
    label: 'LIBRARY',
    icon: BookMarked,
    items: [
      { id: 'library', label: 'Book List & Catalogs', badge: null }
    ]
  },
  {
    id: 'events-group',
    label: 'EVENTS & SPORTS',
    icon: Trophy,
    items: [
      { id: 'sports', label: 'Sports & Tournaments', badge: null },
      { id: 'calendar', label: 'Academic & Holiday Calendar', badge: null }
    ]
  },
  {
    id: 'sms-notices-group',
    label: 'BULK SMS AND NOTICES',
    icon: Bell,
    items: [
      { id: 'notices', label: 'Circulars & Broadcast', badge: 'Notice' }
    ]
  },
  {
    id: 'reports-group',
    label: 'REPORTS',
    icon: BarChart3,
    items: [
      { id: 'reports', label: 'Consolidated School Reports', badge: 'All' }
    ]
  },
  {
    id: 'branch-group',
    label: 'BRANCH',
    icon: GitBranch,
    items: [
      { id: 'administration', label: 'Senior Campus (Jargwan)', badge: 'BR-01' },
      { id: 'administration', label: 'Junior High (Barheti)', badge: 'BR-02' },
      { id: 'administration', label: 'Dadheech Kids School', badge: 'BR-03' }
    ]
  },
  {
    id: 'frontend-group',
    label: 'FRONTEND / WEBSITE',
    icon: Globe,
    items: [
      { id: 'website-view', label: 'Public School Website', badge: 'Live', isExternalWebsite: true }
    ]
  },
  {
    id: 'settings-group',
    label: 'SETTINGS',
    icon: Settings,
    items: [
      { id: 'settings', label: 'Global & School Settings', badge: null },
      { id: 'settings', label: 'Role Permissions & Access', badge: 'RBAC' },
      { id: 'settings', label: 'Database Backup & Restore', badge: 'SQL' }
    ]
  }
];

const rolePermissions = {
  'Super Admin': ['*'],
  'Principal': ['*'],
  'In-Charge': ['*'],
  'Head': ['*'],
  'Teacher': [
    'dashboard', 'academics', 'timetable', 'attendance', 'homework',
    'examination', 'students', 'notices', 'sports', 'calendar', 'leave',
    'card-management', 'admit-cards', 'reports'
  ],
  'Accountant': [
    'dashboard', 'fees', 'payroll', 'inventory', 'reports', 'notices', 'calendar'
  ],
  'Librarian': [
    'dashboard', 'library', 'students', 'notices', 'calendar'
  ],
  'Parent': [
    'parent-portal', 'fees', 'notices', 'calendar', 'helpdesk-visitors'
  ],
  'Student': [
    'student-portal', 'timetable', 'homework', 'examination', 'library', 'notices', 'sports', 'calendar', 'card-management', 'admit-cards'
  ]
};

export const Sidebar = ({
  activeTab,
  setActiveTab,
  currentRole,
  isOpen,
  setIsOpen,
  isCollapsed = false,
  setIsCollapsed,
  onOpenAI
}) => {
  const allowed = rolePermissions[currentRole] || ['*'];

  // Single-accordion mode: only one category expanded at a time (expanding one closes the others)
  const [expandedGroupId, setExpandedGroupId] = useState(null);

  const toggleGroup = (groupId) => {
    if (isCollapsed && setIsCollapsed) {
      setIsCollapsed(false);
    }
    setExpandedGroupId(prev => (prev === groupId ? null : groupId));
  };

  // Filter groups and items based on logged-in role
  const visibleGroups = navigationGroups
    .map(grp => {
      if (grp.isSingle) {
        return (allowed.includes('*') || allowed.includes(grp.targetTab)) ? grp : null;
      }
      const validItems = grp.items.filter(item => item.isExternalWebsite || allowed.includes('*') || allowed.includes(item.id));
      if (validItems.length === 0) return null;
      return { ...grp, items: validItems };
    })
    .filter(Boolean);

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-40 ${
          isCollapsed ? 'lg:w-20 w-72' : 'w-72'
        } bg-gradient-to-b from-sky-50 via-blue-50/60 to-sky-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 text-slate-700 dark:text-slate-300 flex flex-col border-r border-sky-100 dark:border-slate-800 transition-all duration-300 ease-in-out lg:translate-x-0 shadow-sm ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header with School Crest Mono */}
        <div className={`p-4 border-b border-amber-200/70 dark:border-slate-800 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} bg-white/90 dark:bg-slate-950/80 backdrop-blur-md`}>
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-full overflow-hidden bg-white p-0.5 shadow-md border-2 border-amber-400 flex items-center justify-center shrink-0">
              <img
                src="/logo.png"
                alt="Dadheech Crest"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            {!isCollapsed && (
              <div className="animate-in fade-in duration-200">
                <h1 className="text-xs font-black text-[#4a0e3d] dark:text-amber-400 tracking-tight leading-tight flex items-center gap-1 font-serif">
                  Dadheech Memorial <span className="text-[9px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">ERP</span>
                </h1>
                <p className="text-[10px] text-slate-600 dark:text-slate-400 font-bold truncate max-w-[150px]">
                  A Group of Education
                </p>
              </div>
            )}
          </div>
        </div>

        {/* AI Quick Trigger Banner */}
        <div className="px-3 pt-3">
          <button
            onClick={onOpenAI}
            title="Open EduBot AI Assistant"
            className={`w-full group p-2.5 rounded-2xl bg-white/90 dark:bg-slate-950 border border-sky-200/80 dark:border-indigo-500/30 hover:border-blue-400 dark:hover:border-indigo-400 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} text-left transition-all shadow-sm hover:shadow-md hover:shadow-blue-500/10`}
          >
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-xl bg-blue-600 text-white dark:bg-indigo-500/20 dark:text-amber-300 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              {!isCollapsed && (
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-indigo-300 transition-colors">
                    EduBot AI Assistant
                  </p>
                  <p className="text-[9px] text-slate-500 dark:text-indigo-300/80">
                    Instant smart school insights
                  </p>
                </div>
              )}
            </div>
            {!isCollapsed && (
              <ChevronRight className="w-3.5 h-3.5 text-blue-500 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
            )}
          </button>
        </div>

        {/* Section Label */}
        {!isCollapsed && (
          <div className="px-4 pt-3 pb-1">
            <p className="text-[9px] font-black uppercase tracking-wider text-sky-800 dark:text-slate-500">
              MAIN ERP MODULES
            </p>
          </div>
        )}

        {/* Collapsible Accordion Navigation (Smart School ERP Layout) */}
        <nav className="flex-1 overflow-y-auto px-2 py-1.5 space-y-1 custom-scrollbar text-xs font-semibold">
          {visibleGroups.map((grp) => {
            const Icon = grp.icon;

            // Single Item (e.g. Dashboard)
            if (grp.isSingle) {
              const isActive = activeTab === grp.targetTab;
              return (
                <button
                  key={grp.id}
                  title={grp.label}
                  onClick={() => {
                    setActiveTab(grp.targetTab);
                    if (window.innerWidth < 1024) setIsOpen(false);
                  }}
                  className={`w-full flex items-center ${isCollapsed ? 'justify-center px-2 py-2.5' : 'justify-between px-3 py-2'} rounded-xl transition-all ${
                    isActive
                      ? 'bg-blue-600 dark:bg-indigo-600 text-white font-bold shadow-md shadow-blue-500/25 ring-1 ring-blue-400/40'
                      : 'text-slate-700 dark:text-slate-300 hover:text-blue-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-slate-800/70 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-blue-600 dark:text-slate-400'}`} />
                    {!isCollapsed && <span className="font-bold text-xs">{grp.label}</span>}
                  </div>
                </button>
              );
            }

            // Accordion Category Group with (+) / (-) Toggle (Only 1 open at a time)
            const isExpanded = expandedGroupId === grp.id;
            const hasActiveChild = grp.items.some(i => i.id === activeTab);

            return (
              <div key={grp.id} className="rounded-xl overflow-hidden transition-all">
                {/* Category Header */}
                <button
                  onClick={() => toggleGroup(grp.id)}
                  title={grp.label}
                  className={`w-full flex items-center ${isCollapsed ? 'justify-center px-2 py-2.5' : 'justify-between px-3 py-2'} rounded-xl transition-all text-left ${
                    hasActiveChild
                      ? 'bg-blue-50 dark:bg-slate-800/90 text-blue-900 dark:text-white font-black border border-blue-200/80 dark:border-slate-700 shadow-xs'
                      : 'text-slate-700 dark:text-slate-300 hover:text-blue-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-slate-800/60 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Icon className={`w-4 h-4 shrink-0 ${hasActiveChild ? 'text-blue-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'}`} />
                    {!isCollapsed && <span className="truncate text-xs font-bold uppercase tracking-tight">{grp.label}</span>}
                  </div>
                  
                  {!isCollapsed && (
                    <div className="flex items-center gap-1 shrink-0 ml-1.5">
                      <span className={`w-4 h-4 rounded flex items-center justify-center text-[11px] font-black transition-colors ${
                        isExpanded
                          ? 'bg-blue-600 text-white dark:bg-indigo-600'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}>
                        {isExpanded ? '−' : '+'}
                      </span>
                    </div>
                  )}
                </button>

                {/* Sub-items (Expand/Collapse) */}
                {isExpanded && !isCollapsed && (
                  <div className="pl-5 pr-1 py-1 space-y-0.5 bg-white/40 dark:bg-slate-950/40 rounded-b-xl border-l-2 border-blue-400 dark:border-indigo-500 ml-3 mt-0.5 animate-in slide-in-from-top-1 duration-150">
                    {grp.items.map((sub, sIdx) => {
                      const isSubActive = activeTab === sub.id;
                      return (
                        <button
                          key={sIdx}
                          onClick={() => {
                            if (sub.isExternalWebsite) {
                              window.location.hash = '';
                              window.location.reload();
                              return;
                            }
                            setActiveTab(sub.id);
                            if (window.innerWidth < 1024) setIsOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] transition-all text-left ${
                            isSubActive
                              ? 'bg-blue-600 text-white font-bold shadow-xs'
                              : 'text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white hover:bg-sky-100/70 dark:hover:bg-slate-800'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 truncate">
                            <span className={`w-1.5 h-1.5 rounded-full ${isSubActive ? 'bg-white' : 'bg-slate-400 dark:bg-slate-600'}`} />
                            <span className="truncate">{sub.label}</span>
                          </div>
                          {sub.badge && (
                            <span className={`text-[9px] font-black uppercase px-1.5 py-0.2 rounded ${
                              isSubActive ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800 dark:bg-slate-800 dark:text-slate-300'
                            }`}>
                              {sub.badge}
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
        </nav>

        {/* Footer User Info */}
        <div className={`p-3 border-t border-sky-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-indigo-950 border border-blue-200 dark:border-indigo-700/50 flex items-center justify-center text-blue-700 dark:text-indigo-300 font-bold text-xs shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            {!isCollapsed && (
              <div className="truncate">
                <p className="text-xs font-bold text-slate-900 dark:text-white truncate capitalize">{currentRole}</p>
                <p className="text-[9px] text-sky-800 dark:text-slate-400 font-medium truncate">Session 2026-27</p>
              </div>
            )}
          </div>
          {!isCollapsed && (
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" title="System Online"></span>
          )}
        </div>

        {/* 👑 Developer Credit */}
        <div className="px-2 py-1.5 bg-sky-100/60 dark:bg-slate-950 text-center text-[10px] text-slate-500 dark:text-slate-400 border-t border-sky-200/60 dark:border-slate-800">
          {isCollapsed ? (
            <span className="font-bold text-amber-600">PR</span>
          ) : (
            <>Designed & Developed by <strong className="text-amber-600 dark:text-amber-400 font-black">Prashant Rajput</strong></>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
