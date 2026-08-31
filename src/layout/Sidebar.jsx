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
      { id: 'students', label: 'New Student Admission', badge: '2026-27' },
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
    id: 'parents-group',
    label: 'PARENTS',
    icon: Users,
    items: [
      { id: 'parent-portal', label: 'Parent Portal & Comms', badge: 'Portal' }
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
      { id: 'fees', label: 'Fees Collection (POS)', badge: 'POS' },
      { id: 'fees', label: 'Fee Invoices & Dues', badge: null }
    ]
  },
  {
    id: 'office-accounting-group',
    label: 'OFFICE ACCOUNTING',
    icon: DollarSign,
    items: [
      { id: 'inventory', label: 'Accounts & Ledger', badge: null },
      { id: 'inventory', label: 'Income & Expenses', badge: null }
    ]
  },
  {
    id: 'supervision-group',
    label: 'SUPERVISION',
    icon: Home,
    items: [
      { id: 'transport', label: 'Transport & GPS Fleet', badge: 'GPS' },
      { id: 'hostel', label: 'Hostel & Rooms', badge: null },
      { id: 'medical', label: 'Medical & Health', badge: null }
    ]
  },
  {
    id: 'attendance-group',
    label: 'ATTENDANCE',
    icon: CheckSquare,
    items: [
      { id: 'attendance', label: 'Daily Student Attendance', badge: 'Daily' },
      { id: 'attendance', label: 'Staff Attendance', badge: null }
    ]
  },
  {
    id: 'inventory-group',
    label: 'INVENTORY',
    icon: Package,
    items: [
      { id: 'inventory', label: 'Item Stock & Store', badge: null }
    ]
  },
  {
    id: 'card-management-group',
    label: 'CARD MANAGEMENT',
    icon: Contact,
    items: [
      { id: 'card-management', label: "Student ID Card", badge: 'ID' },
      { id: 'admit-cards', label: 'Admit Card (Exam Pass)', badge: 'Exam' },
      { id: 'card-management', label: 'Transport Card / Bus Pass', badge: 'Bus' },
      { id: 'card-management', label: 'Employee / Staff ID Card', badge: null },
      { id: 'card-management', label: 'Card Templates Designer', badge: null }
    ]
  },
  {
    id: 'certificate-group',
    label: 'CERTIFICATE',
    icon: Award,
    items: [
      { id: 'certificates', label: 'Transfer Certificate (TC)', badge: 'TC' },
      { id: 'certificates', label: 'Character Certificate', badge: null },
      { id: 'certificates', label: 'Bonafide Certificate', badge: null }
    ]
  },
  {
    id: 'academic-group',
    label: 'ACADEMIC',
    icon: BookOpen,
    items: [
      { id: 'academics', label: 'Classes & Sections', badge: null },
      { id: 'timetable', label: 'Timetable & Classrooms', badge: null },
      { id: 'academics', label: 'Subjects & Syllabus', badge: null }
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
      { id: 'examination', label: 'Exams & Marks Entry', badge: 'CBSE' },
      { id: 'examination', label: 'CBSE Report Cards', badge: 'PDF' }
    ]
  },
  {
    id: 'library-group',
    label: 'LIBRARY',
    icon: BookMarked,
    items: [
      { id: 'library', label: 'Book List & Catalogs', badge: null },
      { id: 'library', label: 'Issue & Return Ledger', badge: null }
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
      { id: 'reports', label: '1. Student Demographics', badge: 'All' },
      { id: 'reports', label: '2. Attendance Defaulters', badge: '<75%' },
      { id: 'reports', label: '3. Fee Collection vs Dues', badge: 'Ledger' },
      { id: 'reports', label: '4. Examination Rank List', badge: 'Rank' }
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

export const Sidebar = ({ activeTab, setActiveTab, currentRole, isOpen, setIsOpen, onOpenAI }) => {
  const allowed = rolePermissions[currentRole] || ['*'];

  // State to track which accordion categories are expanded
  const [openGroups, setOpenGroups] = useState({
    'students-group': true,
    'card-management-group': true,
    'reports-group': true
  });

  // Automatically expand group containing activeTab
  useEffect(() => {
    navigationGroups.forEach(grp => {
      if (grp.items && grp.items.some(i => i.id === activeTab)) {
        setOpenGroups(prev => ({ ...prev, [grp.id]: true }));
      }
    });
  }, [activeTab]);

  const toggleGroup = (groupId) => {
    setOpenGroups(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
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
        className={`fixed top-0 left-0 bottom-0 z-40 w-72 bg-gradient-to-b from-sky-50 via-blue-50/60 to-sky-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 text-slate-700 dark:text-slate-300 flex flex-col border-r border-sky-100 dark:border-slate-800 transition-transform duration-300 ease-in-out lg:translate-x-0 shadow-sm ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header with School Crest Mono */}
        <div className="p-4 border-b border-amber-200/70 dark:border-slate-800 flex items-center justify-between bg-white/90 dark:bg-slate-950/80 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-full overflow-hidden bg-white p-0.5 shadow-md border-2 border-amber-400 flex items-center justify-center shrink-0">
              <img
                src="/logo.png"
                alt="Dadheech Crest"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <h1 className="text-xs font-black text-[#4a0e3d] dark:text-amber-400 tracking-tight leading-tight flex items-center gap-1 font-serif">
                Dadheech Memorial <span className="text-[9px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">ERP</span>
              </h1>
              <p className="text-[10px] text-slate-600 dark:text-slate-400 font-bold truncate max-w-[150px]">
                A Group of Education
              </p>
            </div>
          </div>
        </div>

        {/* AI Quick Trigger Banner */}
        <div className="px-3 pt-3">
          <button
            onClick={onOpenAI}
            className="w-full group p-2.5 rounded-2xl bg-white/90 dark:bg-slate-950 border border-sky-200/80 dark:border-indigo-500/30 hover:border-blue-400 dark:hover:border-indigo-400 flex items-center justify-between text-left transition-all shadow-sm hover:shadow-md hover:shadow-blue-500/10"
          >
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-xl bg-blue-600 text-white dark:bg-indigo-500/20 dark:text-amber-300 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-indigo-300 transition-colors">
                  EduBot AI Assistant
                </p>
                <p className="text-[9px] text-slate-500 dark:text-indigo-300/80">
                  Instant smart school insights
                </p>
              </div>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-blue-500 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Section Label */}
        <div className="px-4 pt-3 pb-1">
          <p className="text-[9px] font-black uppercase tracking-wider text-sky-800 dark:text-slate-500">
            MAIN ERP MODULES
          </p>
        </div>

        {/* Collapsible Accordion Navigation (Smart School ERP Layout) */}
        <nav className="flex-1 overflow-y-auto px-2.5 py-1.5 space-y-1 custom-scrollbar text-xs font-semibold">
          {visibleGroups.map((grp) => {
            const Icon = grp.icon;

            // Single Item (e.g. Dashboard)
            if (grp.isSingle) {
              const isActive = activeTab === grp.targetTab;
              return (
                <button
                  key={grp.id}
                  onClick={() => {
                    setActiveTab(grp.targetTab);
                    if (window.innerWidth < 1024) setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all ${
                    isActive
                      ? 'bg-blue-600 dark:bg-indigo-600 text-white font-bold shadow-md shadow-blue-500/25 ring-1 ring-blue-400/40'
                      : 'text-slate-700 dark:text-slate-300 hover:text-blue-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-slate-800/70 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-blue-600 dark:text-slate-400'}`} />
                    <span className="font-bold text-xs">{grp.label}</span>
                  </div>
                </button>
              );
            }

            // Accordion Category Group with (+) / (-) Toggle
            const isExpanded = !!openGroups[grp.id];
            const hasActiveChild = grp.items.some(i => i.id === activeTab);

            return (
              <div key={grp.id} className="rounded-xl overflow-hidden transition-all">
                {/* Category Header */}
                <button
                  onClick={() => toggleGroup(grp.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all text-left ${
                    hasActiveChild
                      ? 'bg-blue-50 dark:bg-slate-800/90 text-blue-900 dark:text-white font-black border border-blue-200/80 dark:border-slate-700 shadow-xs'
                      : 'text-slate-700 dark:text-slate-300 hover:text-blue-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-slate-800/60 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Icon className={`w-4 h-4 shrink-0 ${hasActiveChild ? 'text-blue-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'}`} />
                    <span className="truncate text-xs font-bold uppercase tracking-tight">{grp.label}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 shrink-0 ml-1.5">
                    <span className={`w-4 h-4 rounded flex items-center justify-center text-[11px] font-black transition-colors ${
                      isExpanded
                        ? 'bg-blue-600 text-white dark:bg-indigo-600'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}>
                      {isExpanded ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {/* Sub-items (Expand/Collapse) */}
                {isExpanded && (
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
        <div className="p-3 border-t border-sky-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70 flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-indigo-950 border border-blue-200 dark:border-indigo-700/50 flex items-center justify-center text-blue-700 dark:text-indigo-300 font-bold text-xs shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div className="truncate">
              <p className="text-xs font-bold text-slate-900 dark:text-white truncate capitalize">{currentRole}</p>
              <p className="text-[9px] text-sky-800 dark:text-slate-400 font-medium truncate">Session 2026-27</p>
            </div>
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" title="System Online"></span>
        </div>

        {/* 👑 Developer Credit */}
        <div className="px-3 py-1.5 bg-sky-100/60 dark:bg-slate-950 text-center text-[10px] text-slate-500 dark:text-slate-400 border-t border-sky-200/60 dark:border-slate-800">
          Designed & Developed by <strong className="text-amber-600 dark:text-amber-400 font-black">Prashant Rajput</strong>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
