import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Users,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  Award,
  Calendar,
  AlertCircle,
  Clock,
  ArrowRight,
  BookOpen,
  Sparkles,
  CreditCard,
  UserCheck,
  UserX,
  UserPlus,
  Building2,
  FileText,
  Printer,
  Bus,
  ShieldCheck,
  BookMarked,
  Bell,
  Layers,
  ArrowUpRight,
  BarChart2,
  PieChart,
  Activity,
  CheckSquare,
  ListTodo,
  Plus,
  Trash2,
  Zap,
  Flame,
  CalendarClock,
  Tag,
  GitBranch,
  Eye,
  Receipt,
  Cake,
  Heart,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Briefcase,
  User
} from 'lucide-react';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';
import { useAuth } from '../context/AuthContext';
import schoolService from '../services/schoolService';
import {
  AccountantDashboardView,
  TeacherDashboardView,
  TransportDashboardView,
  LibrarianDashboardView,
  ParentDashboardView,
  StudentDashboardView
} from './RoleDashboards';

export const DashboardPage = ({ currentRole = 'Super Admin', setActiveTab, onOpenAI }) => {
  const { activeBranchId, setActiveBranchId, isSuperAdmin, activeBranch, branches } = useAuth();

  const [stats, setStats] = useState(() => schoolService.getDashboardStats(activeBranchId) || {});
  const schoolInfo = schoolService.getSchoolInfo() || { name: 'Dadheech Memorial Public School', academicSession: '2026-2027', affiliationNo: 'UP-CBSE-83921' };
  const notices = schoolService.getNotices() || [];
  const exams = schoolService.getExams() || [];
  const events = schoolService.getEvents() || [];

  // Task & Action Planner State
  const [tasks, setTasks] = useState(() => schoolService.getTasks() || []);
  const [taskFilter, setTaskFilter] = useState('All');
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('today');
  const [newTaskCategory, setNewTaskCategory] = useState('Academics');
  const [newTaskDue, setNewTaskDue] = useState('Today');

  // Live Clock
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));

  // Calendar State (August 2026)
  const [calendarView, setCalendarView] = useState('Month');
  const [hoveredBar, setHoveredBar] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setStats(schoolService.getDashboardStats(activeBranchId) || {});
  }, [activeBranchId]);

  const handleToggleTask = (id) => {
    schoolService.toggleTaskStatus(id);
    setTasks([...(schoolService.getTasks() || [])]);
  };

  const handleDeleteTask = (id) => {
    schoolService.deleteTask(id);
    setTasks([...(schoolService.getTasks() || [])]);
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    schoolService.addTask({
      title: newTaskTitle.trim(),
      priority: newTaskPriority,
      category: newTaskCategory,
      dueDate: newTaskDue
    });
    setTasks([...(schoolService.getTasks() || [])]);
    setNewTaskTitle('');
    setIsAddingTask(false);
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercent = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

  const filteredTasks = tasks.filter(t => {
    if (taskFilter === 'Urgent') return t.priority === 'urgent';
    if (taskFilter === 'Today') return t.priority === 'today';
    if (taskFilter === 'Soon') return t.priority === 'soon' || t.priority === 'later';
    if (taskFilter === 'Pending') return !t.completed;
    if (taskFilter === 'Completed') return t.completed;
    return true;
  });

  // Authentic Class-wise distribution from Database (Total 567 Students)
  const classStrengthData = [
    { name: 'PG', count: 13, color: '#334155' },
    { name: 'NUR', count: 54, color: '#c2410c' },
    { name: 'LKG', count: 52, color: '#15803d' },
    { name: 'UKG', count: 42, color: '#ea580c' },
    { name: 'I', count: 57, color: '#2563eb' },
    { name: 'II', count: 54, color: '#9333ea' },
    { name: 'III', count: 57, color: '#d97706' },
    { name: 'IV', count: 53, color: '#64748b' },
    { name: 'V', count: 49, color: '#eab308' },
    { name: 'VI', count: 36, color: '#1e3a8a' },
    { name: 'VII', count: 24, color: '#a21caf' },
    { name: 'VIII', count: 23, color: '#0d9488' },
    { name: 'IX', count: 22, color: '#475569' },
    { name: 'X', count: 19, color: '#dc2626' },
    { name: 'XI', count: 8, color: '#f97316' },
    { name: 'XII', count: 4, color: '#991b1b' }
  ];

  // 10-Day Income vs Expense Data (Exact Authentic Record)
  const tenDaysCashFlow = [
    { date: '21-Aug', income: 18500, expense: 0 },
    { date: '22-Aug', income: 0, expense: 0 },
    { date: '23-Aug', income: 0, expense: 0 },
    { date: '24-Aug', income: 7500, expense: 0 },
    { date: '25-Aug', income: 5200, expense: 0 },
    { date: '26-Aug', income: 19400, expense: 0 },
    { date: '27-Aug', income: 2000, expense: 142800 },
    { date: '28-Aug', income: 0, expense: 0 },
    { date: '29-Aug', income: 0, expense: 0 },
    { date: '30-Aug', income: 0, expense: 0 },
    { date: '31-Aug', income: 0, expense: 0 }
  ];

  // Weekend Attendance Inspection (Last 7 Days)
  const attendanceInspection = [
    { date: '25-Aug', employeePresent: 22, employeeTotal: 23, studentRate: 96.2 },
    { date: '26-Aug', employeePresent: 23, employeeTotal: 23, studentRate: 95.8 },
    { date: '27-Aug', employeePresent: 22, employeeTotal: 23, studentRate: 94.5 },
    { date: '28-Aug', employeePresent: 23, employeeTotal: 23, studentRate: 95.4 },
    { date: '29-Aug', employeePresent: 21, employeeTotal: 23, studentRate: 93.8 },
    { date: '30-Aug', employeePresent: 0, employeeTotal: 23, studentRate: 0, isSunday: true },
    { date: '31-Aug', employeePresent: 22, employeeTotal: 23, studentRate: 95.4 }
  ];

  // Calendar Days Grid Generation for August 2026 (Aug 1 = Saturday)
  const august2026Days = Array.from({ length: 31 }, (_, i) => i + 1);

  // 🎯 ROLE-SPECIFIC DEDICATED DASHBOARD VIEWS
  if (currentRole === 'Accountant') {
    return <AccountantDashboardView stats={stats} setActiveTab={setActiveTab} onOpenAI={onOpenAI} currentTime={currentTime} schoolInfo={schoolInfo} />;
  }
  if (currentRole === 'Teacher') {
    return <TeacherDashboardView stats={stats} setActiveTab={setActiveTab} onOpenAI={onOpenAI} currentTime={currentTime} schoolInfo={schoolInfo} />;
  }
  if (currentRole === 'Transport Manager') {
    return <TransportDashboardView stats={stats} setActiveTab={setActiveTab} onOpenAI={onOpenAI} currentTime={currentTime} schoolInfo={schoolInfo} />;
  }
  if (currentRole === 'Librarian') {
    return <LibrarianDashboardView stats={stats} setActiveTab={setActiveTab} onOpenAI={onOpenAI} currentTime={currentTime} schoolInfo={schoolInfo} />;
  }
  if (currentRole === 'Parent') {
    return <ParentDashboardView stats={stats} setActiveTab={setActiveTab} onOpenAI={onOpenAI} currentTime={currentTime} schoolInfo={schoolInfo} />;
  }
  if (currentRole === 'Student') {
    return <StudentDashboardView stats={stats} setActiveTab={setActiveTab} onOpenAI={onOpenAI} currentTime={currentTime} schoolInfo={schoolInfo} />;
  }

  // 👑 DEFAULT: SUPER ADMIN & PRINCIPAL MASTER EXECUTIVE DASHBOARD
  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">

      {/* 🏫 DMPS Master School Header Banner */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 px-5 py-4 sm:px-6 sm:py-5 text-white shadow-lg border border-indigo-500/30">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/25 border border-indigo-400/40 text-indigo-200 text-[11px] font-bold shadow-inner">
                <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
                Session {schoolInfo.academicSession || '2026-2027'}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[11px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                CBSE Affiliated • {schoolInfo.affiliationNo || 'UP-CBSE-83921'}
              </span>
            </div>

            <div className="min-w-0">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight text-white font-serif whitespace-nowrap overflow-hidden text-ellipsis">
                {schoolInfo.name || 'Dadheech Memorial Public School'}
              </h2>
              <p className="text-xs text-indigo-200/90 mt-0.5 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                Viewing: <strong className="text-amber-300 font-bold">{stats?.branchName || 'All Campuses'}</strong> • {stats?.totalStudents || 567} Active Students Registered
              </p>
            </div>
          </div>

          {/* Right: Live Time Badge & Quick Header CTA Buttons */}
          <div className="flex flex-col items-start lg:items-end gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 border border-white/10 text-slate-200 text-[11px] font-mono font-semibold shadow-xs">
              <Clock className="w-3 h-3 text-amber-300" /> {currentTime}
            </span>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab('students')}
                className="px-3.5 py-2 bg-white text-indigo-950 hover:bg-indigo-50 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95"
              >
                <GraduationCap className="w-4 h-4 text-indigo-600" /> New Admission
              </button>
              <button
                onClick={() => setActiveTab('fees')}
                className="px-3.5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95"
              >
                <CreditCard className="w-4 h-4" /> Collect Fee (POS)
              </button>
              <button
                onClick={onOpenAI}
                className="px-3.5 py-2 bg-indigo-600/90 hover:bg-indigo-600 border border-indigo-400/40 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-amber-300" /> Ask EduBot
              </button>
            </div>
          </div>
        </div>

        {/* Subtle decorative background blur */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>
      </div>

      {/* ========================================================================= */}
      {/* 💳 SECTION 1: 3 STUDENT CARDS (Total Active with Boys/Girls, New, Promoted) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Card 1: Total Active Students (Olive/Dark Brown Gradient with Boys & Girls count) */}
        <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-stone-800 to-amber-950 text-white shadow-lg space-y-3.5 border border-stone-700/60">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-200">Total Active Students</span>
            </div>
            <span className="text-3xl font-black font-mono text-white">
              {stats?.totalStudents || 567}
            </span>
          </div>
          <div className="pt-2.5 border-t border-white/10 flex justify-between items-center text-xs font-bold text-stone-300">
            <span>BOYS: <strong className="text-amber-300">{stats?.boysCount || 318}</strong></span>
            <span>GIRLS: <strong className="text-emerald-300">{stats?.girlsCount || 249}</strong></span>
          </div>
        </div>

        {/* Card 2: Total New Students (Vibrant Emerald Gradient) */}
        <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-emerald-600 to-green-800 text-white shadow-lg space-y-3.5 border border-emerald-500/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                <UserPlus className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-100">Total New Students</span>
            </div>
            <span className="text-3xl font-black font-mono text-white">
              {stats?.newAdmissionsCount || 147}
            </span>
          </div>
          <div className="pt-2.5 border-t border-white/10 flex justify-between items-center text-xs font-bold text-emerald-200">
            <span>NEW ADMISSIONS</span>
            <span className="text-emerald-100 font-bold">Session 2026-27</span>
          </div>
        </div>

        {/* Card 3: Total Promoted Students (Charcoal Black Gradient) */}
        <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-lg space-y-3.5 border border-slate-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300">Total Promoted Students</span>
            </div>
            <span className="text-3xl font-black font-mono text-white">
              {stats?.promotedCount || 420}
            </span>
          </div>
          <div className="pt-2.5 border-t border-white/10 flex justify-between items-center text-xs font-bold text-slate-400">
            <span>PREVIOUS ADMISSIONS</span>
            <span className="text-indigo-300 font-bold">Rolled Forward</span>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 📅 SECTION 2: 3 STUDENT ATTENDANCE STRENGTH CARDS */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
        {/* Card 1: Total Present (Ocean Blue Gradient) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-800 text-white flex items-center justify-between shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase text-teal-100">Total Present Today</h4>
              <p className="text-xl font-black font-mono">{stats?.presentStudentsToday || 541}</p>
            </div>
          </div>
          <div className="text-right text-[11px] text-teal-100 font-semibold space-y-0.5">
            <div>Boys: <strong className="text-white">{Math.round((stats?.boysCount || 318) * 0.954)}</strong></div>
            <div>Girls: <strong className="text-white">{Math.round((stats?.girlsCount || 249) * 0.954)}</strong></div>
          </div>
        </div>

        {/* Card 2: Total Absent (Orange/Pink Gradient) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-600 to-rose-600 text-white flex items-center justify-between shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <UserX className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase text-amber-100">Total Absent Today</h4>
              <p className="text-xl font-black font-mono">{stats?.absentStudentsToday || 26}</p>
            </div>
          </div>
          <div className="text-right text-[11px] text-amber-100 font-semibold space-y-0.5">
            <div>Boys: <strong className="text-white">{(stats?.boysCount || 318) - Math.round((stats?.boysCount || 318) * 0.954)}</strong></div>
            <div>Girls: <strong className="text-white">{(stats?.girlsCount || 249) - Math.round((stats?.girlsCount || 249) * 0.954)}</strong></div>
          </div>
        </div>

        {/* Card 3: Attendance Not Marked (Dark Charcoal Alert) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-stone-900 text-white flex items-center justify-between shadow border border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase text-slate-300">Not Marked</h4>
              <p className="text-xl font-black font-mono text-emerald-400">0</p>
            </div>
          </div>
          <div className="text-right text-[11px] text-slate-400 font-semibold space-y-0.5">
            <div>Boys: <strong className="text-white">0</strong></div>
            <div>Girls: <strong className="text-white">0</strong></div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 📊 SECTION 3: TOP 2 MAIN ANALYSIS CHARTS WITH CRISP AXES & NUMBERS */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* 1. Class Wise Student Strength Bar Chart (With exact Y-Axis 0 to 60) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
                Class Wise Student Strength
              </h3>
              <p className="text-xs text-slate-400 font-semibold mt-0.5">Total Students - {stats?.totalStudents || 567}</p>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              16 Classes Active
            </span>
          </div>

          {/* Chart Box with Left Y-Axis Numbers */}
          <div className="relative flex">
            {/* Y-Axis scale numbers */}
            <div className="flex flex-col justify-between text-[10px] font-bold text-slate-400 font-mono pr-2 pb-6 text-right w-7 select-none">
              <span>60</span>
              <span>50</span>
              <span>40</span>
              <span>30</span>
              <span>20</span>
              <span>10</span>
              <span>0</span>
            </div>

            {/* SVG Bars Container */}
            <div className="flex-1 h-64 flex items-end justify-between gap-1.5 pt-2 pb-2 px-1 relative border-l border-b border-slate-300 dark:border-slate-700">
              {/* Horizontal Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 pb-6">
                <div className="border-b border-slate-400 w-full"></div>
                <div className="border-b border-slate-400 w-full"></div>
                <div className="border-b border-slate-400 w-full"></div>
                <div className="border-b border-slate-400 w-full"></div>
                <div className="border-b border-slate-400 w-full"></div>
                <div className="border-b border-slate-400 w-full"></div>
                <div className="border-b border-slate-400 w-full"></div>
              </div>

              {classStrengthData.map((cls, idx) => {
                const maxVal = 60;
                const heightPct = Math.min(100, Math.round((cls.count / maxVal) * 100));
                const isHovered = hoveredBar === `cls-${idx}`;

                return (
                  <div
                    key={idx}
                    className="flex-1 flex flex-col items-center h-full justify-end group relative cursor-pointer"
                    onMouseEnter={() => setHoveredBar(`cls-${idx}`)}
                    onMouseLeave={() => setHoveredBar(null)}
                  >
                    {/* Tooltip on hover */}
                    {isHovered && (
                      <div className="absolute -top-10 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-xl whitespace-nowrap z-20 pointer-events-none">
                        Class {cls.name}: {cls.count} Students
                      </div>
                    )}

                    {/* Top Value Label */}
                    <span className="text-[9px] font-black text-slate-700 dark:text-slate-200 mb-1 opacity-90 group-hover:opacity-100 group-hover:text-indigo-600 transition-opacity">
                      {cls.count}
                    </span>

                    {/* Vertical Bar */}
                    <div
                      className="w-full max-w-[20px] rounded-t-sm transition-all duration-500 group-hover:brightness-110 shadow-xs"
                      style={{
                        height: `${Math.max(6, heightPct)}%`,
                        backgroundColor: cls.color
                      }}
                    ></div>

                    {/* Bottom Class Name */}
                    <span className="text-[9px] font-black text-slate-700 dark:text-slate-300 mt-2 truncate max-w-[24px]">
                      {cls.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2. Weekend Income Vs Expence (10 Days) Bar Chart (With exact Y-Axis 0 to 160000) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
                Weekend Income Vs Expence(10 Days)
              </h3>
              <p className="text-xs text-slate-400 font-semibold mt-0.5">Daily POS Collections vs School Disbursals</p>
            </div>
            <div className="flex items-center gap-3 text-xs font-bold">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
                <span className="text-slate-700 dark:text-slate-300">Income</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-600"></span>
                <span className="text-slate-700 dark:text-slate-300">Expense</span>
              </div>
            </div>
          </div>

          {/* Chart Box with Left Y-Axis Numbers */}
          <div className="relative flex">
            {/* Y-Axis scale numbers */}
            <div className="flex flex-col justify-between text-[10px] font-bold text-slate-400 font-mono pr-2 pb-6 text-right w-12 select-none">
              <span>160000</span>
              <span>140000</span>
              <span>120000</span>
              <span>100000</span>
              <span>80000</span>
              <span>60000</span>
              <span>40000</span>
              <span>20000</span>
              <span>0</span>
            </div>

            {/* SVG 10-Day Bar Chart */}
            <div className="flex-1 h-64 flex items-end justify-between gap-1.5 pt-2 pb-2 px-1 relative border-l border-b border-slate-300 dark:border-slate-700">
              {/* Horizontal Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 pb-6">
                <div className="border-b border-slate-400 w-full"></div>
                <div className="border-b border-slate-400 w-full"></div>
                <div className="border-b border-slate-400 w-full"></div>
                <div className="border-b border-slate-400 w-full"></div>
                <div className="border-b border-slate-400 w-full"></div>
                <div className="border-b border-slate-400 w-full"></div>
                <div className="border-b border-slate-400 w-full"></div>
                <div className="border-b border-slate-400 w-full"></div>
                <div className="border-b border-slate-400 w-full"></div>
              </div>

              {tenDaysCashFlow.map((day, idx) => {
                const maxScale = 160000;
                const incPct = Math.min(100, Math.round((day.income / maxScale) * 100));
                const expPct = Math.min(100, Math.round((day.expense / maxScale) * 100));
                const isHovered = hoveredBar === `cf-${idx}`;

                return (
                  <div
                    key={idx}
                    className="flex-1 flex flex-col items-center h-full justify-end group relative cursor-pointer"
                    onMouseEnter={() => setHoveredBar(`cf-${idx}`)}
                    onMouseLeave={() => setHoveredBar(null)}
                  >
                    {isHovered && (
                      <div className="absolute -top-12 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-xl whitespace-nowrap z-20 pointer-events-none">
                        {day.date}: Income ₹{day.income.toLocaleString()} | Exp ₹{day.expense.toLocaleString()}
                      </div>
                    )}

                    {/* Dual Bars Container */}
                    <div className="flex items-end gap-1 w-full justify-center h-full">
                      {/* Income Bar (Green) */}
                      <div
                        className="w-2 sm:w-2.5 bg-emerald-600 rounded-t-sm transition-all duration-500"
                        style={{ height: `${day.income > 0 ? Math.max(5, incPct) : 1}%` }}
                      ></div>

                      {/* Expense Bar (Red) */}
                      <div
                        className="w-2 sm:w-2.5 bg-rose-600 rounded-t-sm transition-all duration-500"
                        style={{ height: `${day.expense > 0 ? Math.max(5, expPct) : 1}%` }}
                      ></div>
                    </div>

                    {/* Date Label */}
                    <span className="text-[8px] sm:text-[9px] font-bold text-slate-600 dark:text-slate-400 mt-2 truncate">
                      {day.date}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 🎂 SECTION 4: BIRTHDAYS & STAFF STRENGTH / ATTENDANCE MATRIX */}
      {/* ========================================================================= */}
      <div className="space-y-6">

        {/* 2 Birthday Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 flex items-center justify-center">
                <Cake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Today's Students Birthdays (0)
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">No Birthdays Today</p>
              </div>
            </div>
            <span className="text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-xl">
              August 31
            </span>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center">
                <Cake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Today's Staff Birthdays (0)
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">No Birthdays Today</p>
              </div>
            </div>
            <span className="text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-xl">
              August 31
            </span>
          </div>
        </div>

        {/* 3 Staff Strength Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card 1: Employee (Peach/Orange Gradient) */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white space-y-3 shadow">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black font-mono">{stats?.totalTeachers || 23}</span>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-100">Employee</h4>
              <p className="text-[10px] text-amber-200 font-semibold mt-0.5">TOTAL STRENGTH</p>
            </div>
          </div>

          {/* Card 2: Teachers (Deep Purple Gradient) */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-700 to-indigo-900 text-white space-y-3 shadow">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black font-mono">{stats?.teachingStaff || 14}</span>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-100">Teachers</h4>
              <p className="text-[10px] text-purple-200 font-semibold mt-0.5">TOTAL STRENGTH</p>
            </div>
          </div>

          {/* Card 3: Other Staff (Teal/Emerald Gradient) */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-800 text-white space-y-3 shadow">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black font-mono">{stats?.supportStaff || 9}</span>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-teal-100">Other Staff</h4>
              <p className="text-[10px] text-teal-200 font-semibold mt-0.5">TOTAL STRENGTH</p>
            </div>
          </div>

        </div>

        {/* 4 Staff Today's Attendance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-900 dark:text-blue-200 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-xs font-bold uppercase">Teaching Staff Present</span>
              <p className="text-[10px] text-blue-600 dark:text-blue-400 font-bold">TODAY</p>
            </div>
            <span className="text-2xl font-black font-mono text-blue-600 dark:text-blue-300">
              {stats?.teachingStaff || 14}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-900 dark:text-orange-200 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-xs font-bold uppercase">Teaching Staff Absent</span>
              <p className="text-[10px] text-orange-600 dark:text-orange-400 font-bold">TODAY</p>
            </div>
            <span className="text-2xl font-black font-mono text-orange-600 dark:text-orange-300">
              0
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-900 dark:text-cyan-200 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-xs font-bold uppercase">Non-teaching Present</span>
              <p className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold">TODAY</p>
            </div>
            <span className="text-2xl font-black font-mono text-cyan-600 dark:text-cyan-300">
              {stats?.supportStaff || 9}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-900 dark:text-rose-200 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-xs font-bold uppercase">Non-teaching Absent</span>
              <p className="text-[10px] text-rose-600 dark:text-rose-400 font-bold">TODAY</p>
            </div>
            <span className="text-2xl font-black font-mono text-rose-600 dark:text-rose-300">
              0
            </span>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 📅 SECTION 5: INTERACTIVE AUGUST 2026 CALENDAR */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
              <button className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <button className="px-3 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-xs font-bold rounded-xl text-slate-700 dark:text-slate-200">
              Today
            </button>
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-600" /> August 2026
            </h3>
          </div>

          {/* View Mode Pills */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
            {['Month', 'Week', 'Day', 'List'].map(mode => (
              <button
                key={mode}
                onClick={() => setCalendarView(mode)}
                className={`px-3 py-1 rounded-lg transition-all ${
                  calendarView === mode ? 'bg-blue-600 text-white shadow' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* 7-Column Days Grid */}
        <div className="grid grid-cols-7 gap-1 text-center">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="py-2 text-xs font-black text-slate-500 uppercase bg-slate-50 dark:bg-slate-800/40 rounded-xl">
              {day}
            </div>
          ))}

          {/* August 1 is Saturday -> 5 padding slots from Mon to Fri */}
          <div className="p-2 text-xs text-slate-300 dark:text-slate-700">27</div>
          <div className="p-2 text-xs text-slate-300 dark:text-slate-700">28</div>
          <div className="p-2 text-xs text-slate-300 dark:text-slate-700">29</div>
          <div className="p-2 text-xs text-slate-300 dark:text-slate-700">30</div>
          <div className="p-2 text-xs text-slate-300 dark:text-slate-700">31</div>

          {august2026Days.map(day => {
            const isToday = day === 31;
            const isSunday = [2, 9, 16, 23, 30].includes(day);
            const isHoliday = day === 15; // Independence Day

            return (
              <div
                key={day}
                className={`min-h-[52px] sm:min-h-[64px] p-2 rounded-2xl border transition-all text-left flex flex-col justify-between ${
                  isToday
                    ? 'bg-blue-600 text-white border-blue-600 font-black shadow-md'
                    : isSunday
                    ? 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-100 dark:border-rose-900/40 text-rose-600 font-bold'
                    : isHoliday
                    ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-800 font-bold'
                    : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-300'
                }`}
              >
                <span className="text-xs font-black">{day}</span>
                {isToday && <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded-md font-bold text-white self-start">Today</span>}
                {isHoliday && <span className="text-[9px] bg-amber-200 text-amber-900 px-1 rounded font-bold">Holiday</span>}
                {isSunday && <span className="text-[9px] text-rose-500 font-semibold">Sunday</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 💰 SECTION 6: FINANCIAL DONUT & ANNUAL FEE SPLINE WAVE GRAPH */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* 1. Income Vs Expense Of August (Donut Chart) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
              Income Vs Expense Of August
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-200">
              August 2026
            </span>
          </div>

          <div className="flex flex-col items-center justify-center py-4 space-y-4">
            {/* Donut Ring with Center Piggybank Icon */}
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                {/* Expense (Pink/Magenta 35%) */}
                <path
                  className="text-pink-600"
                  strokeWidth="5.5"
                  strokeDasharray="35, 100"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                {/* Income (Teal/Emerald 65%) */}
                <path
                  className="text-teal-600"
                  strokeWidth="5.5"
                  strokeDasharray="65, 100"
                  strokeDashoffset="-35"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>

              {/* Center Cash Icon */}
              <div className="absolute flex flex-col items-center justify-center text-center">
                <DollarSign className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                <span className="text-[10px] font-black text-slate-500 uppercase mt-0.5">Surplus</span>
                <span className="text-sm font-black text-teal-600 font-mono">64.6%</span>
              </div>
            </div>

            {/* Bottom Legend */}
            <div className="flex items-center justify-center gap-6 text-xs font-bold pt-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-teal-600"></span>
                <span className="text-slate-700 dark:text-slate-300">Income: ₹3,81,300</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-pink-600"></span>
                <span className="text-slate-700 dark:text-slate-300">Expense: ₹2,09,078</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Annual Fee Summary (Spline Area Wave Chart with Exact Y-Axis) */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
                Annual Fee Summary
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                Total Dues: <strong className="text-slate-900 dark:text-white">₹1,19,23,985</strong> | Total Collected: <strong className="text-emerald-600">₹10,34,800</strong> | Total Remaining: <strong className="text-rose-600">₹1,08,89,185</strong>
              </p>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-bold">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-amber-500"></span>
                <span>Total</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-emerald-600"></span>
                <span>Collected</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-rose-600"></span>
                <span>Remaining</span>
              </div>
            </div>
          </div>

          {/* Spline Bell Curves SVG Graphic with Left Y-Axis Scale */}
          <div className="relative flex">
            {/* Y-Axis numbers */}
            <div className="flex flex-col justify-between text-[9px] font-bold text-slate-400 font-mono pr-2 pb-6 text-right w-14 select-none">
              <span>14000000</span>
              <span>12000000</span>
              <span>10000000</span>
              <span>8000000</span>
              <span>6000000</span>
              <span>4000000</span>
              <span>2000000</span>
              <span>0</span>
            </div>

            <div className="flex-1 h-56 relative pt-2 border-l border-b border-slate-300 dark:border-slate-700">
              <svg className="w-full h-full" viewBox="0 0 700 200" preserveAspectRatio="none">
                {/* Horizontal Grid lines */}
                <line x1="0" y1="20" x2="700" y2="20" stroke="#94a3b8" strokeDasharray="3 3" opacity="0.2" />
                <line x1="0" y1="50" x2="700" y2="50" stroke="#94a3b8" strokeDasharray="3 3" opacity="0.2" />
                <line x1="0" y1="80" x2="700" y2="80" stroke="#94a3b8" strokeDasharray="3 3" opacity="0.2" />
                <line x1="0" y1="110" x2="700" y2="110" stroke="#94a3b8" strokeDasharray="3 3" opacity="0.2" />
                <line x1="0" y1="140" x2="700" y2="140" stroke="#94a3b8" strokeDasharray="3 3" opacity="0.2" />
                <line x1="0" y1="170" x2="700" y2="170" stroke="#94a3b8" strokeDasharray="3 3" opacity="0.2" />

                {/* Area 1: Remaining Fee (Red Wave) */}
                <path
                  d="M 50 170 Q 150 10, 250 170 L 250 170 L 50 170 Z"
                  fill="rgba(225, 29, 72, 0.45)"
                />
                <path
                  d="M 50 170 Q 150 10, 250 170"
                  fill="none"
                  stroke="#e11d48"
                  strokeWidth="3"
                />

                {/* Area 2: Collected Fee (Green Wave) */}
                <path
                  d="M 50 170 Q 150 80, 250 170 L 250 170 L 50 170 Z"
                  fill="rgba(16, 185, 129, 0.55)"
                />
                <path
                  d="M 50 170 Q 150 80, 250 170"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                />

                {/* Area 3: Total Dues (Amber Wave) */}
                <path
                  d="M 50 170 Q 150 100, 250 170 L 250 170 L 50 170 Z"
                  fill="rgba(245, 158, 11, 0.65)"
                />
                <path
                  d="M 50 170 Q 150 100, 250 170"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="3"
                />
              </svg>

              {/* Months Axis Labels */}
              <div className="flex justify-between text-[10px] font-bold text-slate-600 dark:text-slate-400 px-4 -mt-1">
                {['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'].map(m => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 💳 SECTION 7: THE 3 EXACT FINANCIAL BALANCE CARDS */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1: Today's Income/Expense (Cyan Gradient) */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-cyan-500 to-teal-600 text-white shadow-lg space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="text-right text-xs font-medium space-y-0.5">
              <div>Income: <strong className="font-mono font-bold">₹0.00</strong></div>
              <div>Expense: <strong className="font-mono font-bold">₹0.00</strong></div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-50">Today's Income/Expense</h4>
            <p className="text-xs text-cyan-100 mt-0.5">Daily cash/bank flow</p>
          </div>
          <div className="pt-2 border-t border-white/20 flex justify-between items-center text-xs font-black">
            <span>BALANCE:</span>
            <span className="font-mono text-base font-black">₹0.00</span>
          </div>
        </div>

        {/* Card 2: Monthly Income/Expense (Purple Gradient) */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-700 to-indigo-900 text-white shadow-lg space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="text-right text-xs font-medium space-y-0.5">
              <div>Income: <strong className="font-mono font-bold text-emerald-300">₹3,81,300.00</strong></div>
              <div>Expense: <strong className="font-mono font-bold text-rose-300">₹2,09,078.00</strong></div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple-100">Monthly Income/Expense</h4>
            <p className="text-xs text-purple-200 mt-0.5">August 2026 summary</p>
          </div>
          <div className="pt-2 border-t border-white/20 flex justify-between items-center text-xs font-black">
            <span>BALANCE:</span>
            <span className="font-mono text-base font-black text-emerald-300">₹1,72,222.00</span>
          </div>
        </div>

        {/* Card 3: Income/Expense as on Date (Dark Charcoal Navy Gradient) */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-lg space-y-4 border border-indigo-500/30">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <Receipt className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-right text-xs font-medium space-y-0.5">
              <div>Income: <strong className="font-mono font-bold text-emerald-400">₹10,34,100.00</strong></div>
              <div>Expense: <strong className="font-mono font-bold text-rose-400">₹7,99,080.00</strong></div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Income/Expense as on Date</h4>
            <p className="text-xs text-slate-400 mt-0.5">Cumulative Session 2026-27</p>
          </div>
          <div className="pt-2 border-t border-white/20 flex justify-between items-center text-xs font-black">
            <span>NET BALANCE:</span>
            <span className="font-mono text-base font-black text-emerald-400">₹2,35,020.00</span>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 🚀 SECTION 8: CORE ADMINISTRATIVE OPERATIONS MATRIX (8 SHORTCUTS) */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" /> Core Administrative Operations
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Direct 1-click access to essential school ERP modules</p>
          </div>
          <Badge variant="primary">Campus Scope: {stats.shortCode}</Badge>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 pt-2">
          {[
            { label: 'New Admission', icon: GraduationCap, tab: 'students', color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 hover:border-indigo-400' },
            { label: 'Collect Fee', icon: CreditCard, tab: 'fees', color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 hover:border-emerald-400' },
            { label: 'Attendance', icon: UserCheck, tab: 'attendance', color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/60 hover:border-amber-400' },
            { label: 'Report Cards', icon: Award, tab: 'examination', color: 'text-rose-600 bg-rose-50 dark:bg-rose-950/60 hover:border-rose-400' },
            { label: 'Timetable', icon: Clock, tab: 'timetable', color: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-950/60 hover:border-cyan-400' },
            { label: 'ID Cards', icon: FileText, tab: 'certificates', color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/60 hover:border-purple-400' },
            { label: 'Bus Fleet', icon: Bus, tab: 'transport', color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/60 hover:border-blue-400' },
            { label: 'Library Desk', icon: BookMarked, tab: 'library', color: 'text-teal-600 bg-teal-50 dark:bg-teal-950/60 hover:border-teal-400' }
          ].map((op, idx) => {
            const Icon = op.icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(op.tab)}
                className={`p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col items-center justify-center text-center transition-all hover:scale-105 active:scale-95 hover:shadow-md ${op.color}`}
              >
                <div className="p-2 rounded-xl mb-2">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 truncate w-full">
                  {op.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 📋 SECTION 9: DAILY TASK & ACTION PLANNER */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                <ListTodo className="w-5 h-5" />
              </span>
              <h3 className="text-base font-black text-slate-900 dark:text-white">
                Admin & Staff Daily Task & Action Planner
              </h3>
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold text-xs border border-indigo-200 dark:border-indigo-800">
                {completedCount}/{tasks.length} Done ({progressPercent}%)
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Prioritized daily action items, fee recovery calls, CBSE compliances, exam blueprints, and operational checklists.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAddingTask(!isAddingTask)}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-500/20 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
            >
              <Plus className="w-4 h-4" /> {isAddingTask ? 'Close Form' : 'Add New Task'}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-emerald-500 transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Quick Add Task Form */}
        {isAddingTask && (
          <form
            onSubmit={handleCreateTask}
            className="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60 space-y-3 animate-in fade-in duration-200"
          >
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
              <div className="sm:col-span-2">
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Task Title / Action Item *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Call Fee Defaulter Parents for Class 10 POS Collection..."
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Priority</label>
                <select
                  value={newTaskPriority}
                  onChange={(e) => setNewTaskPriority(e.target.value)}
                  className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold"
                >
                  <option value="urgent">⚡ Urgent (Immediate)</option>
                  <option value="today">🎯 Today (High)</option>
                  <option value="soon">⏳ Soon (Medium)</option>
                  <option value="later">📋 Later (Low)</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Category</label>
                <select
                  value={newTaskCategory}
                  onChange={(e) => setNewTaskCategory(e.target.value)}
                  className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold"
                >
                  <option value="Academics">Academics</option>
                  <option value="Fees & Accounts">Fees & Accounts</option>
                  <option value="Administration">Administration</option>
                  <option value="Examinations">Examinations</option>
                  <option value="Transport">Transport</option>
                  <option value="Library">Library</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => setIsAddingTask(false)}
                className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-sm"
              >
                Save Task
              </button>
            </div>
          </form>
        )}

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {[
            { key: 'All', label: `All (${tasks.length})` },
            { key: 'Urgent', label: `⚡ Urgent (${tasks.filter(t => t.priority === 'urgent').length})` },
            { key: 'Today', label: `🎯 Today (${tasks.filter(t => t.priority === 'today').length})` },
            { key: 'Soon', label: `⏳ Soon (${tasks.filter(t => t.priority === 'soon' || t.priority === 'later').length})` },
            { key: 'Pending', label: `Pending (${tasks.filter(t => !t.completed).length})` },
            { key: 'Completed', label: `✓ Completed (${completedCount})` }
          ].map(f => (
            <button
              key={f.key}
              onClick={() => setTaskFilter(f.key)}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                taskFilter === f.key
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Task Rows List */}
        <div className="space-y-2">
          {filteredTasks.map(task => {
            const isDone = task.completed;
            const priorityBadges = {
              urgent: 'bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-800',
              today: 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800',
              soon: 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-800',
              later: 'bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 border-purple-300 dark:border-purple-800'
            };

            const priorityLabels = {
              urgent: '⚡ Urgent',
              today: '🎯 Today',
              soon: '⏳ Soon',
              later: '📋 Later'
            };

            return (
              <div
                key={task.id}
                className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                  isDone
                    ? 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800 opacity-60'
                    : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-purple-300'
                }`}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() => handleToggleTask(task.id)}
                    className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 cursor-pointer shrink-0"
                  />
                  <div className="min-w-0">
                    <p className={`text-xs font-bold text-slate-900 dark:text-white truncate ${isDone ? 'line-through text-slate-400 dark:text-slate-500' : ''}`}>
                      {task.title}
                    </p>
                    {task.description && (
                      <p className="text-[10px] text-slate-500 truncate mt-0.5">
                        {task.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 text-[10px]">
                  <span className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold hidden sm:inline-block">
                    {task.category}
                  </span>
                  <span className={`px-2 py-0.5 rounded-lg font-bold border ${priorityBadges[task.priority] || priorityBadges.today}`}>
                    {priorityLabels[task.priority] || '🎯 Today'}
                  </span>
                  <span className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 font-mono hidden md:inline-block">
                    Due: {task.dueDate}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteTask(task.id)}
                    className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950 transition-colors"
                    title="Delete task"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {filteredTasks.length === 0 && (
            <p className="text-center text-xs text-slate-400 py-6 italic">
              No tasks found under "{taskFilter}" filter. Click "+ Add New Task" to create one!
            </p>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 📢 SECTION 10: 2-COLUMN GRID (Exams Schedule | Circulars & Events) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

        {/* LEFT 2 COLUMNS: Academic Examinations */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" /> Academic Exam Term Schedules
                </h3>
                <p className="text-xs text-slate-500">Term 1, Half Yearly & Annual examination schedules</p>
              </div>
              <button
                onClick={() => setActiveTab('examination')}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
              >
                Gradebook <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {exams.map(exam => (
                <div key={exam.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">{exam.name}</h4>
                      <p className="text-[11px] text-slate-500">{exam.startDate} to {exam.endDate}</p>
                    </div>
                  </div>
                  <Badge variant={exam.status === 'Completed' ? 'success' : exam.status === 'Upcoming' ? 'warning' : 'default'}>
                    {exam.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT 1 COLUMN: Live Notices & Campus Events */}
        <div className="space-y-6">

          {/* Live Campus Circulars */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Bell className="w-5 h-5 text-indigo-600" /> Campus Circulars
              </h3>
              <button
                onClick={() => setActiveTab('notices')}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-700"
              >
                View All
              </button>
            </div>

            <div className="space-y-3">
              {notices.map(n => (
                <div key={n.id} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-white truncate max-w-[180px]">{n.title}</span>
                    {n.isEmergency && <Badge variant="danger" size="sm">Urgent</Badge>}
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">{n.content}</p>
                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex justify-between text-[10px] text-slate-400 font-semibold">
                    <span>{n.target}</span>
                    <span>{n.publishDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming School Events */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-600" /> Upcoming Events
              </h3>
              <button
                onClick={() => setActiveTab('calendar')}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-700"
              >
                Calendar
              </button>
            </div>

            <div className="space-y-3">
              {events.map(ev => (
                <div key={ev.id} className="p-3.5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40 text-xs">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-purple-950 dark:text-purple-200">{ev.name}</h4>
                    <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400">{ev.date}</span>
                  </div>
                  <p className="text-[11px] text-purple-700 dark:text-purple-300/80 mt-1">{ev.venue} • {ev.time}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default DashboardPage;
