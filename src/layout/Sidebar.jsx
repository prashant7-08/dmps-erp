import React from 'react';
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
  ShieldCheck
} from 'lucide-react';

export const navigationSections = [
  {
    title: 'Core ERP',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
      { id: 'administration', label: 'School Setup / Admin', icon: Building2, badge: null },
      { id: 'students', label: 'Student Management', icon: GraduationCap, badge: 'Active' },
      { id: 'staff', label: 'Teacher & Staff', icon: Users, badge: null },
      { id: 'academics', label: 'Classes & Subjects', icon: BookOpen, badge: null },
      { id: 'timetable', label: 'Timetable & Rooms', icon: CalendarDays, badge: null },
      { id: 'attendance', label: 'Attendance Management', icon: CheckSquare, badge: 'Daily' },
      { id: 'fees', label: 'Fees & Collection', icon: CreditCard, badge: 'POS' },
      { id: 'examination', label: 'Exams & Report Cards', icon: Award, badge: 'CBSE' },
    ]
  },
  {
    title: 'Portals & Engagement',
    items: [
      { id: 'notices', label: 'Notices & Comms', icon: Bell, badge: 'Broadcast' },
      { id: 'parent-portal', label: 'Parent Portal', icon: Users, badge: 'Parent' },
      { id: 'student-portal', label: 'Student Portal', icon: GraduationCap, badge: 'Student' },
      { id: 'homework', label: 'Homework & Tasks', icon: FileSpreadsheet, badge: null },
    ]
  },
  {
    title: 'Campus & Facilities',
    items: [
      { id: 'library', label: 'Library Management', icon: BookMarked, badge: null },
      { id: 'transport', label: 'Transport & GPS', icon: Bus, badge: null },
      { id: 'hostel', label: 'Hostel & Rooms', icon: Home, badge: null },
      { id: 'medical', label: 'Medical & Health', icon: HeartPulse, badge: null },
      { id: 'sports', label: 'Sports & Events', icon: Trophy, badge: null },
      { id: 'calendar', label: 'Academic Calendar', icon: Calendar, badge: null },
    ]
  },
  {
    title: 'HR & Administrative',
    items: [
      { id: 'leave', label: 'Leave Approvals', icon: FileCheck2, badge: 'Pending' },
      { id: 'certificates', label: 'Certificates & IDs', icon: Contact, badge: 'Print' },
      { id: 'payroll', label: 'HR & Staff Payroll', icon: DollarSign, badge: null },
      { id: 'inventory', label: 'Accounts & Inventory', icon: Package, badge: null },
      { id: 'helpdesk-visitors', label: 'Helpdesk & Visitors', icon: ShieldAlert, badge: null },
      { id: 'reports', label: 'Analytical Reports', icon: BarChart3, badge: 'PDF' },
      { id: 'settings', label: 'Settings & Security', icon: Settings, badge: null },
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
    'examination', 'students', 'notices', 'sports', 'calendar', 'leave'
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
    'student-portal', 'timetable', 'homework', 'examination', 'library', 'notices', 'sports', 'calendar'
  ]
};

export const Sidebar = ({ activeTab, setActiveTab, currentRole, isOpen, setIsOpen, onOpenAI }) => {
  const allowed = rolePermissions[currentRole] || ['*'];
  const filteredSections = navigationSections.map(section => ({
    ...section,
    items: section.items.filter(item => allowed.includes('*') || allowed.includes(item.id))
  })).filter(section => section.items.length > 0);

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar Container: Light Sky-Blue in bright mode, Dark Slate in dark mode */}
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
        <div className="px-4 pt-4">
          <button
            onClick={onOpenAI}
            className="w-full group p-3 rounded-2xl bg-white/90 dark:bg-slate-950 border border-sky-200/80 dark:border-indigo-500/30 hover:border-blue-400 dark:hover:border-indigo-400 flex items-center justify-between text-left transition-all shadow-sm hover:shadow-md hover:shadow-blue-500/10"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-xl bg-blue-600 text-white dark:bg-indigo-500/20 dark:text-amber-300 shadow-sm">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-indigo-300 transition-colors">
                  EduBot AI Assistant
                </p>
                <p className="text-[10px] text-slate-500 dark:text-indigo-300/80">
                  Instant smart school insights
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-blue-500 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Scrollable Navigation (Filtered by User Role) */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-6 custom-scrollbar text-xs font-semibold">
          {filteredSections.map((section, idx) => (
            <div key={idx} className="space-y-1">
              <p className="px-3 text-[10px] font-black uppercase tracking-wider text-sky-800 dark:text-slate-500 mb-2">
                {section.title}
              </p>
              {section.items.map(item => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      if (window.innerWidth < 1024) setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
                      isActive
                        ? 'bg-blue-600 dark:bg-indigo-600 text-white font-bold shadow-md shadow-blue-500/25 ring-1 ring-blue-400/40'
                        : 'text-slate-700 dark:text-slate-300 hover:text-blue-900 dark:hover:text-white hover:bg-sky-100/80 dark:hover:bg-slate-800/70'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Icon className={`w-4 h-4 shrink-0 transition-colors ${isActive ? 'text-white' : 'text-sky-600 dark:text-slate-400 group-hover:text-blue-700'}`} />
                      <span className="truncate">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span
                        className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded-md ${
                          isActive
                            ? 'bg-white/25 text-white'
                            : 'bg-white dark:bg-slate-800 text-blue-700 dark:text-indigo-400 border border-sky-200 dark:border-slate-700 shadow-xs'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Footer User Info */}
        <div className="p-4 border-t border-sky-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70 flex items-center justify-between">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-indigo-950 border border-blue-200 dark:border-indigo-700/50 flex items-center justify-center text-blue-700 dark:text-indigo-300 font-bold text-xs shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="truncate">
              <p className="text-xs font-bold text-slate-900 dark:text-white truncate capitalize">{currentRole}</p>
              <p className="text-[10px] text-sky-800 dark:text-slate-400 font-medium truncate">Session 2026-27</p>
            </div>
          </div>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" title="System Online"></span>
        </div>

        {/* 👑 Developer Credit */}
        <div className="px-4 py-2 bg-sky-100/60 dark:bg-slate-950 text-center text-[10px] text-slate-500 dark:text-slate-400 border-t border-sky-200/60 dark:border-slate-800">
          Designed & Developed by <strong className="text-amber-600 dark:text-amber-400 font-black">Prashant Rajput</strong>
        </div>
      </aside>
    </>
  );
};
