import React, { useState } from 'react';
import {
  Search,
  Bell,
  Sparkles,
  Menu,
  Moon,
  Sun,
  Plus,
  ShieldCheck,
  X,
  CreditCard,
  UserPlus,
  CalendarCheck,
  FilePlus2,
  LogOut,
  GitBranch,
  Globe
} from 'lucide-react';
import schoolService from '../services/schoolService';
import { useAuth } from '../context/AuthContext';

export const TopNav = ({
  currentRole,
  setCurrentRole,
  onOpenSidebar,
  onOpenAI,
  darkMode,
  toggleDarkMode,
  onQuickAction,
  onSearchSelect,
  onViewWebsite
}) => {
  const { activeBranchId, setActiveBranchId, branches, isSuperAdmin, activeBranch, user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);

  const students = schoolService.getStudents(activeBranchId);
  const teachers = schoolService.getTeachers(activeBranchId);
  const notices = schoolService.getNotices();

  const filteredStudents = searchQuery.trim()
    ? students.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.rollNo.includes(searchQuery) || s.admissionNo.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const filteredTeachers = searchQuery.trim()
    ? teachers.filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()) || t.department.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const roles = [
    { id: 'Super Admin', label: 'Super Admin', color: 'bg-rose-500' },
    { id: 'Principal', label: 'Principal', color: 'bg-purple-500' },
    { id: 'Teacher', label: 'Teacher', color: 'bg-indigo-500' },
    { id: 'Accountant', label: 'Accountant', color: 'bg-emerald-500' },
    { id: 'Librarian', label: 'Librarian', color: 'bg-amber-500' },
    { id: 'Parent', label: 'Parent Portal', color: 'bg-cyan-500' },
    { id: 'Student', label: 'Student Portal', color: 'bg-blue-500' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 px-3 sm:px-4 lg:px-6 flex items-center justify-between gap-2 sm:gap-4 transition-colors w-full max-w-full overflow-hidden">
      {/* Left: Mobile Toggle & Global Search */}
      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0 max-w-xs sm:max-w-md lg:max-w-xl">
        <button
          onClick={onOpenSidebar}
          className="lg:hidden p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Global Search Bar with Live Popover Results */}
        <div className="relative w-full min-w-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchResults(true);
              }}
              onFocus={() => setShowSearchResults(true)}
              placeholder="Search students, staff..."
              className="w-full pl-8 sm:pl-9 pr-3 py-1.5 sm:py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all truncate"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Search Dropdown Results */}
          {showSearchResults && searchQuery.trim() && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-3 z-50 max-h-96 overflow-y-auto custom-scrollbar animate-in fade-in">
              <div className="flex justify-between items-center px-2 py-1 mb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Search Results</span>
                <button onClick={() => setShowSearchResults(false)} className="text-xs text-slate-400 hover:text-slate-600">Close</button>
              </div>

              {filteredStudents.length === 0 && filteredTeachers.length === 0 ? (
                <div className="p-4 text-center text-xs text-slate-400">No matching records found.</div>
              ) : (
                <div className="space-y-2">
                  {filteredStudents.map(s => (
                    <div
                      key={s.id}
                      onClick={() => {
                        if (onSearchSelect) onSearchSelect('student', s);
                        setShowSearchResults(false);
                      }}
                      className="flex items-center justify-between p-2 rounded-xl hover:bg-indigo-50 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <img src={s.photo} alt={s.name} className="w-7 h-7 rounded-lg object-cover" />
                        <div>
                          <p className="text-xs font-bold text-slate-900 dark:text-white">{s.name}</p>
                          <p className="text-[10px] text-slate-400">Roll {s.rollNo} • {s.class}-{s.section}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                        Student
                      </span>
                    </div>
                  ))}

                  {filteredTeachers.map(t => (
                    <div
                      key={t.id}
                      onClick={() => {
                        if (onSearchSelect) onSearchSelect('teacher', t);
                        setShowSearchResults(false);
                      }}
                      className="flex items-center justify-between p-2 rounded-xl hover:bg-purple-50 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <img src={t.photo} alt={t.name} className="w-7 h-7 rounded-lg object-cover" />
                        <div>
                          <p className="text-xs font-bold text-slate-900 dark:text-white">{t.name}</p>
                          <p className="text-[10px] text-slate-400">{t.designation} • {t.department}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                        Faculty
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
        {/* Branch Selector Dropdown (Super Admin Switcher / Assigned Branch Badge) */}
        {isSuperAdmin ? (
          <div className="hidden lg:flex items-center gap-1.5 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1.5 rounded-xl border border-amber-300 dark:border-amber-700/60 text-amber-950 dark:text-amber-200 shadow-sm shrink-0">
            <GitBranch className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
            <select
              value={activeBranchId}
              onChange={(e) => setActiveBranchId(e.target.value)}
              className="text-xs font-bold bg-transparent text-amber-950 dark:text-amber-200 focus:outline-none cursor-pointer pr-1 py-0.5"
            >
              <option value="BR-01" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                🏫 Senior Campus (Jargwan)
              </option>
              <option value="BR-02" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                🏫 Junior High (Barheti)
              </option>
              <option value="BR-03" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                🏫 Kids School (Aligarh)
              </option>
              <option value="all" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                🌐 All Campuses
              </option>
            </select>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1.5 rounded-xl border border-emerald-300 dark:border-emerald-700/60 text-emerald-950 dark:text-emerald-200 shadow-sm shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="text-xs font-bold truncate max-w-[150px]" title={activeBranch?.name}>
              {activeBranch?.shortCode || 'CAMPUS'}
            </span>
          </div>
        )}

        {/* Locked Verified Role Badge */}
        <div className="hidden sm:flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1.5 rounded-xl border border-indigo-200 dark:border-indigo-800/60 text-indigo-900 dark:text-indigo-200 shadow-sm shrink-0">
          <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
          <span className="text-xs font-black tracking-wide truncate max-w-[120px]">
            {currentRole}
          </span>
        </div>

        {/* Quick Action Button */}
        <div className="relative hidden xl:block">
          <button
            onClick={() => setShowQuickActions(!showQuickActions)}
            className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <Plus className="w-3.5 h-3.5" /> Quick Action
          </button>

          {showQuickActions && (
            <div className="absolute right-0 top-full mt-2 w-52 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in space-y-1">
              <button
                onClick={() => { onQuickAction('admit'); setShowQuickActions(false); }}
                className="w-full flex items-center gap-2.5 p-2 rounded-xl text-xs text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-800 text-left font-semibold"
              >
                <UserPlus className="w-4 h-4 text-indigo-600" /> Admit Student
              </button>
              <button
                onClick={() => { onQuickAction('collect-fee'); setShowQuickActions(false); }}
                className="w-full flex items-center gap-2.5 p-2 rounded-xl text-xs text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-800 text-left font-semibold"
              >
                <CreditCard className="w-4 h-4 text-emerald-600" /> Collect Fee (POS)
              </button>
              <button
                onClick={() => { onQuickAction('attendance'); setShowQuickActions(false); }}
                className="w-full flex items-center gap-2.5 p-2 rounded-xl text-xs text-slate-700 dark:text-slate-200 hover:bg-amber-50 dark:hover:bg-slate-800 text-left font-semibold"
              >
                <CalendarCheck className="w-4 h-4 text-amber-600" /> Mark Attendance
              </button>
              <button
                onClick={() => { onQuickAction('notice'); setShowQuickActions(false); }}
                className="w-full flex items-center gap-2.5 p-2 rounded-xl text-xs text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-slate-800 text-left font-semibold"
              >
                <FilePlus2 className="w-4 h-4 text-purple-600" /> Post Circular Notice
              </button>
            </div>
          )}
        </div>

        {/* View Public Website Button */}
        {onViewWebsite && (
          <button
            onClick={onViewWebsite}
            title="View Official School Website"
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-amber-400 hover:text-slate-950 dark:hover:bg-amber-400 dark:hover:text-slate-950 transition-all border border-slate-200 dark:border-slate-700 shadow-sm shrink-0"
          >
            <Globe className="w-3.5 h-3.5 text-amber-500" />
            <span>Website</span>
          </button>
        )}

        {/* AI Bot Trigger */}
        <button
          onClick={onOpenAI}
          title="Open AI School Assistant"
          className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 hover:scale-105 transition-all shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
        </button>

        {/* Notification Bell with Drawer */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900 animate-ping"></span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-4 z-50 animate-in fade-in">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Campus Alerts & Circulars</h4>
                <button onClick={() => setShowNotifications(false)} className="text-xs text-slate-400 hover:text-slate-600">Close</button>
              </div>
              <div className="space-y-2.5 max-h-72 overflow-y-auto custom-scrollbar">
                {notices.map(n => (
                  <div key={n.id} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-xs">
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-slate-900 dark:text-white leading-tight">{n.title}</span>
                      {n.isEmergency && <span className="text-[9px] font-black uppercase text-rose-600">Urgent</span>}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{n.content}</p>
                    <span className="text-[9px] text-indigo-500 font-semibold block mt-1">{n.target} • {n.publishDate}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Working Dark / Light Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? (
            <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-600 transition-transform rotate-0" />
          )}
        </button>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="p-2 sm:px-3 py-1.5 bg-rose-50 dark:bg-rose-950/60 hover:bg-rose-100 text-rose-600 dark:text-rose-400 rounded-xl text-xs font-bold border border-rose-200 dark:border-rose-800 transition-all flex items-center gap-1 hover:scale-105"
          title="Sign Out"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
};
