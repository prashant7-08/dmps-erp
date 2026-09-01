import React, { useState, useEffect, useRef } from 'react';
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
  Globe,
  User,
  KeyRound,
  Mail,
  Briefcase,
  Calendar,
  Send,
  Trash2,
  Megaphone,
  AlertTriangle,
  CheckCircle2,
  Filter,
  Tag,
  Users,
  FileText,
  ArrowLeft
} from 'lucide-react';
import schoolService from '../services/schoolService';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/common/Toast';
import { Badge } from '../components/common/Badge';

export const TopNav = ({
  currentRole,
  setCurrentRole,
  setActiveTab,
  onOpenSidebar,
  isSidebarCollapsed,
  setIsSidebarCollapsed,
  onOpenAI,
  darkMode,
  toggleDarkMode,
  onQuickAction,
  onSearchSelect,
  onViewWebsite
}) => {
  const { activeBranchId, setActiveBranchId, branches, isSuperAdmin, activeBranch, user } = useAuth();
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // 📢 State for Header Notice & Broadcast Drawer
  const [noticesList, setNoticesList] = useState(schoolService.getNotices());
  const [isComposeNoticeOpen, setIsComposeNoticeOpen] = useState(false);
  const [noticeCategoryFilter, setNoticeCategoryFilter] = useState('all');
  const [newNoticeForm, setNewNoticeForm] = useState({
    title: '',
    category: 'Circular',
    target: 'All Students & Parents',
    content: '',
    isEmergency: false,
    branchId: 'all'
  });

  const canSendNotice =
    isSuperAdmin ||
    ['Super Admin', 'Admin', 'Head of Branch', 'Principal', 'Director', 'Branch Admin'].includes(currentRole) ||
    ['Super Admin', 'Admin', 'Head of Branch', 'Principal', 'Director', 'Branch Admin'].includes(user?.role);

  useEffect(() => {
    setNoticesList(schoolService.getNotices());
  }, [showNotifications]);

  const handlePublishNotice = (e) => {
    e.preventDefault();
    if (!newNoticeForm.title.trim() || !newNoticeForm.content.trim()) {
      if (showToast) showToast('Please enter both title and notice body!', 'error');
      return;
    }
    const authorName = user?.name || (isSuperAdmin ? 'Super Admin' : `${currentRole}`);
    schoolService.addNotice({
      title: newNoticeForm.title.trim(),
      category: newNoticeForm.category,
      target: newNoticeForm.target,
      content: newNoticeForm.content.trim(),
      isEmergency: newNoticeForm.isEmergency,
      author: authorName,
      branchId: newNoticeForm.branchId
    });
    setNoticesList(schoolService.getNotices());
    setNewNoticeForm({
      title: '',
      category: 'Circular',
      target: 'All Students & Parents',
      content: '',
      isEmergency: false,
      branchId: 'all'
    });
    setIsComposeNoticeOpen(false);
    if (showToast) showToast('📢 Notice & Circular published successfully!', 'success');
  };

  const handleDeleteNotice = (id, title) => {
    if (window.confirm(`Delete notice "${title}"?`)) {
      schoolService.deleteNotice(id);
      setNoticesList(schoolService.getNotices());
      if (showToast) showToast('Notice deleted successfully.', 'info');
    }
  };

  const filteredNotices = noticesList.filter(n => {
    if (noticeCategoryFilter === 'all') return true;
    if (noticeCategoryFilter === 'Urgent') return n.isEmergency;
    if (noticeCategoryFilter === 'Circular') return n.category === 'Circular' || !n.category;
    if (noticeCategoryFilter === 'Faculty') return (n.target || '').toLowerCase().includes('teacher') || (n.target || '').toLowerCase().includes('faculty') || n.category === 'Staff Notice';
    if (noticeCategoryFilter === 'Students') return (n.target || '').toLowerCase().includes('student') || (n.target || '').toLowerCase().includes('parent');
    return n.category === noticeCategoryFilter;
  });

  const profileRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const students = schoolService.getStudents(activeBranchId);
  const teachers = schoolService.getTeachers(activeBranchId);

  const filteredStudents = searchQuery.trim()
    ? students.filter(s => (s.name || '').toLowerCase().includes(searchQuery.toLowerCase()) || String(s.rollNo || '').includes(searchQuery) || String(s.admissionNo || '').toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const filteredTeachers = searchQuery.trim()
    ? teachers.filter(t => (t.name || '').toLowerCase().includes(searchQuery.toLowerCase()) || (t.department || '').toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
  };

  const currentUser = {
    name: user?.name || (currentRole === 'Super Admin' ? 'Super Admin (Prashant)' : currentRole === 'Principal' ? 'Mrs. Kavita Rani' : 'Prashant Kumar Rajput'),
    role: user?.role || currentRole || 'Super Admin',
    email: user?.email || 'admin@dmps.edu.in',
    photo: user?.photo || null
  };

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 px-3 sm:px-4 lg:px-6 flex items-center justify-between gap-2 sm:gap-4 transition-colors w-full">
      {/* Left: Sidebar Toggle Button (Mobile & Desktop) & Spacious Global Search */}
      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-[180px] sm:min-w-[260px] md:min-w-[320px] max-w-lg">
        <button
          onClick={() => {
            if (window.innerWidth >= 1024) {
              if (setIsSidebarCollapsed) setIsSidebarCollapsed(!isSidebarCollapsed);
            } else {
              if (onOpenSidebar) onOpenSidebar();
            }
          }}
          className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 flex items-center justify-center border border-slate-200/80 dark:border-slate-700 shadow-xs"
          title={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar / Full Screen Mode"}
        >
          <Menu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </button>

        {/* Spacious Global Search Bar with Live Popover Results */}
        <div className="relative flex-1 min-w-0">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchResults(true);
              }}
              onFocus={() => setShowSearchResults(true)}
              placeholder="Search students (Name / Roll / Adm No), staff..."
              className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm rounded-2xl bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-inner transition-all font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Search Dropdown Results with guaranteed spacious width */}
          {showSearchResults && searchQuery.trim() && (
            <div className="absolute left-0 top-full mt-2 w-[320px] sm:w-[400px] md:w-[460px] max-w-[90vw] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-3 z-50 max-h-96 overflow-y-auto custom-scrollbar animate-in fade-in">
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
            <span className="text-xs font-bold truncate max-w-[120px]" title={activeBranch?.name}>
              {activeBranch?.shortCode || 'CAMPUS'}
            </span>
          </div>
        )}

        {/* Locked Verified Role Badge */}
        <div className="hidden xl:flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1.5 rounded-xl border border-indigo-200 dark:border-indigo-800/60 text-indigo-900 dark:text-indigo-200 shadow-sm shrink-0">
          <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
          <span className="text-xs font-black tracking-wide truncate max-w-[110px]">
            {currentRole}
          </span>
        </div>

        {/* Quick Action Button */}
        <div className="relative hidden 2xl:block">
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

        {/* View Public Website Button (Compact Icon with Tooltip) */}
        {onViewWebsite && (
          <button
            onClick={onViewWebsite}
            title="View Official School Website"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-400 hover:text-slate-950 dark:hover:bg-amber-400 dark:hover:text-slate-950 transition-all border border-slate-200 dark:border-slate-700 shadow-xs shrink-0"
          >
            <Globe className="w-4 h-4 text-amber-500" />
          </button>
        )}

        {/* AI Bot Trigger */}
        <button
          onClick={onOpenAI}
          title="Open AI School Assistant"
          className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 hover:scale-105 transition-all shadow-xs"
        >
          <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
        </button>

        {/* 🔔 Notification & School Broadcast Center (with Role-Restricted Publishing) */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfileMenu(false);
              setShowQuickActions(false);
            }}
            className={`p-2 rounded-xl transition-all relative shadow-xs ${
              showNotifications
                ? 'bg-indigo-600 text-white shadow-indigo-500/20'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
            }`}
            title="School Notices, Circulars & Announcements"
          >
            <Bell className="w-4 h-4 text-amber-500" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900 animate-ping"></span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-[92vw] sm:w-[500px] md:w-[560px] max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-4 sm:p-5 z-50 animate-in fade-in flex flex-col gap-3.5 max-h-[85vh] overflow-hidden">
              
              {/* Header: Title + Broadcast Button (If Admin/Branch Head) + Close */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                    <Megaphone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                      Notices & Circulars
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
                        {noticesList.length} Live
                      </span>
                    </h4>
                    <p className="text-[11px] text-slate-400 font-medium">
                      {canSendNotice
                        ? 'Broadcast circulars to students, faculty & campuses'
                        : 'Official school circulars, exam notices & announcements'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Super Admin / Admin / Head of Branch Action Button */}
                  {canSendNotice && !isComposeNoticeOpen && (
                    <button
                      onClick={() => setIsComposeNoticeOpen(true)}
                      className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" /> Post Notice
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setShowNotifications(false);
                      setIsComposeNoticeOpen(false);
                    }}
                    className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* ✍️ Form: Compose & Broadcast New Notice (Only for Super Admin, Admin, Head of Branch) */}
              {canSendNotice && isComposeNoticeOpen ? (
                <form onSubmit={handlePublishNotice} className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-slate-800/80 border border-indigo-100 dark:border-indigo-900/60 space-y-3 animate-in fade-in">
                  <div className="flex items-center justify-between border-b border-indigo-100 dark:border-slate-700 pb-2">
                    <h5 className="text-xs font-black text-indigo-900 dark:text-indigo-200 uppercase tracking-wider flex items-center gap-1.5">
                      <Send className="w-3.5 h-3.5 text-indigo-600" /> New Broadcast Notice
                    </h5>
                    <button
                      type="button"
                      onClick={() => setIsComposeNoticeOpen(false)}
                      className="text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center gap-1"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back to Notices
                    </button>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Notice Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Periodic Exam 1 Admit Card Distribution & Timetable"
                      value={newNoticeForm.title}
                      onChange={(e) => setNewNoticeForm({ ...newNoticeForm, title: e.target.value })}
                      className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Category
                      </label>
                      <select
                        value={newNoticeForm.category}
                        onChange={(e) => setNewNoticeForm({ ...newNoticeForm, category: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium cursor-pointer"
                      >
                        <option value="Circular">📄 General Circular</option>
                        <option value="Exam Notice">📝 Examination Schedule</option>
                        <option value="Staff Notice">👨‍🏫 Teaching & Staff Advisory</option>
                        <option value="Holiday">🌴 Holiday Announcement</option>
                        <option value="Transport">🚌 Transport & Bus Route</option>
                        <option value="Fee Reminder">💳 Fee Reminder Notice</option>
                        <option value="Urgent Alert">🚨 Urgent Alert</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Target Audience
                      </label>
                      <select
                        value={newNoticeForm.target}
                        onChange={(e) => setNewNoticeForm({ ...newNoticeForm, target: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium cursor-pointer"
                      >
                        <option value="All Students & Parents">👨‍👩‍👧 All Students & Parents</option>
                        <option value="Teaching Faculty">👨‍🏫 Teaching Faculty</option>
                        <option value="All Staff Members">👥 All Staff Members</option>
                        <option value="Senior Campus (Jargwan)">🏫 Senior Campus (Jargwan)</option>
                        <option value="Junior High (Barheti)">🏫 Junior High (Barheti)</option>
                        <option value="Kids School (Aligarh)">🏫 Kids School (Aligarh)</option>
                        <option value="All Campuses">🌐 Entire School Network</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Notice Body / Detailed Content *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Write the full circular notice instructions here..."
                      value={newNoticeForm.content}
                      onChange={(e) => setNewNoticeForm({ ...newNoticeForm, content: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-normal leading-relaxed"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={newNoticeForm.isEmergency}
                        onChange={(e) => setNewNoticeForm({ ...newNoticeForm, isEmergency: e.target.checked })}
                        className="w-4 h-4 rounded text-rose-600 focus:ring-rose-500"
                      />
                      <span className="text-[11px] font-bold text-rose-600 flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" /> Mark as Urgent Priority Alert
                      </span>
                    </label>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsComposeNoticeOpen(false)}
                        className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black flex items-center gap-1.5 shadow-md shadow-indigo-500/20"
                      >
                        <Send className="w-3.5 h-3.5" /> Broadcast Now
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <>
                  {/* Category Filter Pills */}
                  <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pb-1">
                    {[
                      { id: 'all', label: `All (${noticesList.length})` },
                      { id: 'Circular', label: 'Circulars' },
                      { id: 'Urgent', label: '🚨 Urgent' },
                      { id: 'Faculty', label: 'Faculty' },
                      { id: 'Students', label: 'Students' }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setNoticeCategoryFilter(tab.id)}
                        className={`px-3 py-1 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all ${
                          noticeCategoryFilter === tab.id
                            ? 'bg-indigo-600 text-white shadow-xs'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Notice List Feed */}
                  <div className="space-y-3 max-h-[55vh] overflow-y-auto custom-scrollbar pr-1">
                    {filteredNotices.length === 0 ? (
                      <div className="p-8 text-center text-xs text-slate-400">
                        No circulars found in this category.
                      </div>
                    ) : (
                      filteredNotices.map(n => (
                        <div
                          key={n.id}
                          className={`p-3.5 rounded-2xl border text-xs space-y-2 transition-all ${
                            n.isEmergency
                              ? 'bg-rose-50/60 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/60 shadow-xs'
                              : 'bg-slate-50/80 dark:bg-slate-800/60 border-slate-100 dark:border-slate-700/60 hover:border-indigo-200 dark:hover:border-indigo-900/60'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              {n.isEmergency && (
                                <Badge variant="danger" size="sm">
                                  🚨 Urgent Alert
                                </Badge>
                              )}
                              <Badge
                                variant={
                                  n.category === 'Exam Notice'
                                    ? 'warning'
                                    : n.category === 'Holiday'
                                    ? 'success'
                                    : n.category === 'Staff Notice'
                                    ? 'purple'
                                    : 'primary'
                                }
                                size="sm"
                              >
                                {n.category || 'Circular'}
                              </Badge>
                              <span className="text-[10px] font-bold text-slate-500 bg-white dark:bg-slate-900 px-2 py-0.5 rounded-md border border-slate-200/60 dark:border-slate-700">
                                {n.target || 'All'}
                              </span>
                            </div>

                            {/* Delete Action (Only for Admin / Super Admin / Head of Branch) */}
                            {canSendNotice && (
                              <button
                                onClick={() => handleDeleteNotice(n.id, n.title)}
                                className="text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 p-1 rounded-lg hover:bg-white dark:hover:bg-slate-900 transition-colors"
                                title="Delete this notice"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>

                          <h5 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm leading-snug">
                            {n.title}
                          </h5>

                          <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                            {n.content}
                          </p>

                          <div className="pt-2 border-t border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between text-[10px] text-slate-400 font-semibold">
                            <span>✍️ {n.author || 'School Administration'}</span>
                            <span>📅 {n.publishDate || 'Today'}</span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </>
              )}

            </div>
          )}
        </div>

        {/* Working Dark / Light Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all hover:scale-105 shadow-xs"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? (
            <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-600 transition-transform rotate-0" />
          )}
        </button>

        {/* Academic Session Badge */}
        <span className="text-xs font-black text-rose-600 dark:text-rose-400 font-mono tracking-wide hidden sm:inline ml-1">
          2026-2027
        </span>
        <span className="text-slate-300 dark:text-slate-700 hidden sm:inline font-bold">|</span>

        {/* 👤 User Profile Dropdown Component */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false);
              setShowQuickActions(false);
            }}
            className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:ring-2 hover:ring-indigo-500/40 border border-slate-200 dark:border-slate-700 transition-all shadow-xs shrink-0"
            title="User Account & Profile Details"
          >
            <div className="w-8 h-8 rounded-xl bg-slate-200 dark:bg-slate-700 overflow-hidden flex flex-col items-center justify-center border border-slate-300 dark:border-slate-600 relative">
              {currentUser.photo ? (
                <img src={currentUser.photo} alt={currentUser.name} className="w-full h-full object-cover" />
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-600 dark:text-slate-300">
                  <User className="w-4 h-4" />
                  <span className="text-[7px] font-bold leading-none uppercase">Photo</span>
                </div>
              )}
            </div>
          </button>

          {/* User Profile Floating Card Dropdown */}
          {showProfileMenu && (
            <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-4 z-50 animate-in fade-in space-y-3">
              {/* Profile Card Header */}
              <div className="flex items-center gap-3.5 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-indigo-200 dark:border-indigo-800/60 overflow-hidden flex flex-col items-center justify-center shadow-inner shrink-0 relative">
                  {currentUser.photo ? (
                    <img src={currentUser.photo} alt={currentUser.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-slate-500">
                      <User className="w-7 h-7" />
                      <span className="text-[8px] font-black uppercase text-slate-400">Photo</span>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-black text-slate-900 dark:text-white truncate leading-tight">
                    {currentUser.name}
                  </h4>
                  <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                    {currentUser.role}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="mt-1.5 px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-sm transition-all hover:scale-105 active:scale-95"
                  >
                    <LogOut className="w-3 h-3" /> Logout
                  </button>
                </div>
              </div>

              {/* Menu List */}
              <div className="space-y-1 text-xs">
                <button
                  onClick={() => {
                    if (setActiveTab) setActiveTab('settings');
                    else if (onQuickAction) onQuickAction('profile');
                    setShowProfileMenu(false);
                  }}
                  className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-200 font-bold transition-colors text-left"
                >
                  <User className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Profile</span>
                </button>

                <button
                  onClick={() => {
                    if (setActiveTab) setActiveTab('settings');
                    else if (onQuickAction) onQuickAction('password');
                    setShowProfileMenu(false);
                  }}
                  className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-200 font-bold transition-colors text-left"
                >
                  <KeyRound className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Reset Password</span>
                </button>

                <button
                  onClick={() => {
                    setShowNotifications(true);
                    setShowProfileMenu(false);
                  }}
                  className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-200 font-bold transition-colors text-left"
                >
                  <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Mailbox</span>
                </button>

                <button
                  onClick={() => {
                    if (setActiveTab) setActiveTab('settings');
                    else if (onQuickAction) onQuickAction('settings');
                    setShowProfileMenu(false);
                  }}
                  className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-200 font-bold transition-colors text-left"
                >
                  <Briefcase className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Global Settings</span>
                </button>

                <div className="pt-1 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/40 text-rose-600 dark:text-rose-400 font-bold transition-colors text-left"
                  >
                    <LogOut className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
