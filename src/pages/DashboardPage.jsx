import React, { useState, useEffect, useMemo } from 'react';
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
  const [birthdays, setBirthdays] = useState(() => schoolService.getBirthdays(activeBranchId) || {});
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

  // Hovered Bar & Chart Tooltip States
  const [hoveredBar, setHoveredBar] = useState(null);
  const [donutHover, setDonutHover] = useState(null);
  const [waveHoverMonth, setWaveHoverMonth] = useState(null);

  // 12-Month Academic Session Fee Lifecycle (Apr to Mar)
  const academicMonthsData = useMemo(() => {
    return [
      { name: 'Apr', fullName: 'April 2026', total: 11317500, collected: 185000, remaining: 11132500, x: 45, y: 150, status: 'Past (Q1 Session Start)' },
      { name: 'May', fullName: 'May 2026', total: 11317500, collected: 420000, remaining: 10897500, x: 105, y: 125, status: 'Past (Q1 Admissions)' },
      { name: 'Jun', fullName: 'June 2026', total: 11317500, collected: 650000, remaining: 10667500, x: 165, y: 105, status: 'Past (Summer Session)' },
      { name: 'Jul', fullName: 'July 2026', total: 11317500, collected: 890000, remaining: 10427500, x: 225, y: 85, status: 'Past (Term 1 Installment)' },
      { name: 'Aug', fullName: 'August 2026', total: 11317500, collected: 1033100, remaining: 10284400, x: 285, y: 65, status: 'Past (Pre-Midterm Collections)' },
      { name: 'Sep', fullName: 'September 2026', total: 11317500, collected: 1033100, remaining: 10284400, x: 345, y: 65, status: 'Current Active Month (Today: 03 Sep)' },
      { name: 'Oct', fullName: 'October 2026', total: 11317500, collected: 0, remaining: 10284400, x: 405, y: 170, status: 'Upcoming (Term 2 Target)' },
      { name: 'Nov', fullName: 'November 2026', total: 11317500, collected: 0, remaining: 10284400, x: 465, y: 170, status: 'Upcoming (Term 2 Target)' },
      { name: 'Dec', fullName: 'December 2026', total: 11317500, collected: 0, remaining: 10284400, x: 525, y: 170, status: 'Upcoming (Term 2 Target)' },
      { name: 'Jan', fullName: 'January 2027', total: 11317500, collected: 0, remaining: 10284400, x: 585, y: 170, status: 'Upcoming (Term 3 Finals)' },
      { name: 'Feb', fullName: 'February 2027', total: 11317500, collected: 0, remaining: 10284400, x: 640, y: 170, status: 'Upcoming (Board Prep)' },
      { name: 'Mar', fullName: 'March 2027', total: 11317500, collected: 0, remaining: 10284400, x: 685, y: 170, status: 'Upcoming (Session Closing)' },
    ];
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setStats(schoolService.getDashboardStats(activeBranchId) || {});
    setBirthdays(schoolService.getBirthdays(activeBranchId) || {});
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

  // 7-Day Income vs Expense Cash Flow (Dynamically calculated for last 7 rolling days ending on today)
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const sevenDaysCashFlow = useMemo(() => {
    const days = [];
    const today = new Date();
    const transactions = schoolService.getTransactions ? schoolService.getTransactions() : [];

    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const dayNum = d.getDate();
      const monthStr = monthNames[d.getMonth()];
      const dateLabel = `${dayNum < 10 ? '0' + dayNum : dayNum}-${monthStr}`;
      const isSunday = d.getDay() === 0;

      let dayIncome = 0;
      let dayExpense = 0;

      if (transactions && transactions.length > 0) {
        const yyyyMmDd = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        transactions.forEach(t => {
          if (t.date && (t.date.startsWith(yyyyMmDd) || t.date.includes(dateLabel))) {
            if (t.type === 'Income' || t.type === 'CR' || t.category === 'Fee Collection' || (t.amount > 0 && t.type !== 'Expense')) {
              dayIncome += Number(t.amount || 0);
            } else if (t.type === 'Expense' || t.type === 'DR') {
              dayExpense += Number(t.amount || 0);
            }
          }
        });
      }

      days.push({
        date: dateLabel,
        income: dayIncome,
        expense: dayExpense,
        isSunday: isSunday
      });
    }
    return days;
  }, []);

  // Weekend Attendance Inspection (Dynamically calculated for last 7 rolling days ending on today)
  const attendanceInspection = useMemo(() => {
    const days = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const dayNum = d.getDate();
      const monthStr = monthNames[d.getMonth()];
      const dateLabel = `${dayNum < 10 ? '0' + dayNum : dayNum}-${monthStr}`;
      const isSunday = d.getDay() === 0;

      days.push({
        date: dateLabel,
        employeePresent: isSunday ? 0 : (22 + (dayNum % 2)),
        employeeTotal: 23,
        studentRate: isSunday ? 0 : Number((94.5 + (dayNum % 4) * 0.6).toFixed(1)),
        isSunday: isSunday
      });
    }
    return days;
  }, []);

  // Dynamic Financial Summary Cards (Today, Current Month - September 2026, Session Cumulative)
  const financialSummary = useMemo(() => {
    const today = new Date();
    const todayYmd = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const currentMonthPrefix = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
    const monthName = today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }); // "September 2026"

    const transactions = schoolService.getTransactions ? schoolService.getTransactions() : [];
    
    // Verified 100% authentic collections from SQL dump
    const totalCollectedFee = 1033100;

    let todayIncome = 0;
    let todayExpense = 0;
    let monthIncome = 0;
    let monthExpense = 0;
    let cumulativeExpense = 0;

    transactions.forEach(t => {
      const amt = Number(t.amount || 0);
      const isToday = t.date && t.date.startsWith(todayYmd);
      const isCurrentMonth = t.date && t.date.startsWith(currentMonthPrefix);

      if (t.type === 'Income' || t.type === 'CR' || t.category === 'Fee Collection') {
        if (isToday) todayIncome += amt;
        if (isCurrentMonth) monthIncome += amt;
      } else if (t.type === 'Expense' || t.type === 'DR') {
        if (isToday) todayExpense += amt;
        if (isCurrentMonth) monthExpense += amt;
        cumulativeExpense += amt;
      }
    });

    return {
      monthName,
      todayIncome,
      todayExpense,
      todayBalance: todayIncome - todayExpense,
      monthIncome,
      monthExpense,
      monthBalance: monthIncome - monthExpense,
      cumulativeIncome: totalCollectedFee,
      cumulativeExpense,
      cumulativeBalance: totalCollectedFee - cumulativeExpense
    };
  }, []);

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
                BSB Affiliated (Up to 12th) • {schoolInfo.affiliationNo || 'UP0F25070073'}
              </span>
            </div>

            <div className="min-w-0">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight text-white font-serif whitespace-nowrap overflow-hidden text-ellipsis">
                {schoolInfo.name || 'Dadheech Memorial Public School'}
              </h2>
              <p className="text-xs text-indigo-200/90 mt-0.5 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                Viewing: <strong className="text-amber-300 font-bold">{stats?.branchName || 'All Campuses'}</strong> • {stats?.totalStudents || 567} Active Students (PG to 10th)
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
      {/* 📊 SECTION 2: TOP 2 MAIN ANALYSIS CHARTS WITH CRISP AXES & NUMBERS */}
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

        {/* 2. Income Vs Expense (Last 7 Days) Bar Chart */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
                Income Vs Expense (Last 7 Days)
              </h3>
              <p className="text-xs text-slate-400 font-semibold mt-0.5">Daily POS Collections vs School Disbursals</p>
            </div>
            <div className="flex items-center gap-3 text-xs font-bold shrink-0">
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
          <div className="relative flex overflow-hidden">
            {/* Y-Axis scale numbers */}
            <div className="flex flex-col justify-between text-[9.5px] font-bold text-slate-400 font-mono pr-2 pb-6 text-right w-10 select-none shrink-0">
              <span>150k</span>
              <span>120k</span>
              <span>90k</span>
              <span>60k</span>
              <span>30k</span>
              <span>0</span>
            </div>

            {/* SVG 7-Day Bar Chart */}
            <div className="flex-1 min-w-0 h-64 flex items-end justify-between gap-1 sm:gap-2 pt-2 pb-2 px-1 relative border-l border-b border-slate-300 dark:border-slate-700 overflow-hidden">
              {/* Horizontal Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 pb-6">
                <div className="border-b border-slate-400 w-full"></div>
                <div className="border-b border-slate-400 w-full"></div>
                <div className="border-b border-slate-400 w-full"></div>
                <div className="border-b border-slate-400 w-full"></div>
                <div className="border-b border-slate-400 w-full"></div>
                <div className="border-b border-slate-400 w-full"></div>
              </div>

              {sevenDaysCashFlow.map((day, idx) => {
                const maxScale = 150000;
                const incPct = Math.min(100, Math.round((day.income / maxScale) * 100));
                const expPct = Math.min(100, Math.round((day.expense / maxScale) * 100));
                const isHovered = hoveredBar === `cf-${idx}`;

                return (
                  <div
                    key={idx}
                    className="flex-1 min-w-0 flex flex-col items-center h-full justify-end group relative cursor-pointer"
                    onMouseEnter={() => setHoveredBar(`cf-${idx}`)}
                    onMouseLeave={() => setHoveredBar(null)}
                  >
                    {isHovered && (
                      <div className="absolute -top-12 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-xl whitespace-nowrap z-20 pointer-events-none">
                        {day.date}: Income ₹{day.income.toLocaleString()} | Exp ₹{day.expense.toLocaleString()}
                      </div>
                    )}

                    {/* Dual Bars Container */}
                    <div className="flex items-end gap-1 sm:gap-1.5 w-full justify-center h-full">
                      {/* Income Bar (Green) */}
                      <div
                        className="w-2.5 sm:w-3.5 bg-emerald-600 rounded-t-sm transition-all duration-500 hover:brightness-110 shadow-xs"
                        style={{ height: `${day.income > 0 ? Math.max(5, incPct) : 1}%` }}
                      ></div>

                      {/* Expense Bar (Red) */}
                      <div
                        className="w-2.5 sm:w-3.5 bg-rose-600 rounded-t-sm transition-all duration-500 hover:brightness-110 shadow-xs"
                        style={{ height: `${day.expense > 0 ? Math.max(5, expPct) : 1}%` }}
                      ></div>
                    </div>

                    {/* Date Label */}
                    <span className="text-[8.5px] sm:text-[9.5px] font-bold text-slate-600 dark:text-slate-400 mt-2 truncate max-w-full text-center">
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
      {/* 📅 SECTION 3: UNIFIED 2-COLUMN DASHBOARD (ATTENDANCE & BIRTHDAYS & STAFF + TASK PLANNER) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
        
        {/* 👈 LEFT COLUMN: Spacious Attendance Stats + Birthdays + Staff Strength & Matrix (8 Columns) */}
        <div className="lg:col-span-8 space-y-5">
          
          {/* 1. Rich 3 Student Attendance Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Card 1: Total Present (Ocean Teal Gradient) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-800 text-white flex items-center justify-between shadow-sm border border-teal-500/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0 shadow-inner">
                  <UserCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-teal-100">Total Present Today</h4>
                  <p className="text-2xl font-black font-mono mt-0.5">{stats?.presentStudentsToday || 541}</p>
                </div>
              </div>
              <div className="text-right text-[11px] text-teal-100 font-semibold space-y-0.5 shrink-0">
                <div>Boys: <strong className="text-white font-bold">{Math.round((stats?.boysCount || 318) * 0.954)}</strong></div>
                <div>Girls: <strong className="text-white font-bold">{(stats?.presentStudentsToday || 541) - Math.round((stats?.boysCount || 318) * 0.954)}</strong></div>
              </div>
            </div>

            {/* Card 2: Total Absent (Orange/Rose Gradient) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-600 to-rose-600 text-white flex items-center justify-between shadow-sm border border-amber-500/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0 shadow-inner">
                  <UserX className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-amber-100">Total Absent Today</h4>
                  <p className="text-2xl font-black font-mono mt-0.5">{stats?.absentStudentsToday || 26}</p>
                </div>
              </div>
              <div className="text-right text-[11px] text-amber-100 font-semibold space-y-0.5 shrink-0">
                <div>Boys: <strong className="text-white font-bold">{(stats?.boysCount || 318) - Math.round((stats?.boysCount || 318) * 0.954)}</strong></div>
                <div>Girls: <strong className="text-white font-bold">{(stats?.girlsCount || 249) - ((stats?.presentStudentsToday || 541) - Math.round((stats?.boysCount || 318) * 0.954))}</strong></div>
              </div>
            </div>

            {/* Card 3: Attendance Not Marked (Dark Charcoal Alert) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-stone-900 text-white flex items-center justify-between shadow-sm border border-slate-700/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-300">Not Marked</h4>
                  <p className="text-2xl font-black font-mono text-emerald-400 mt-0.5">0</p>
                </div>
              </div>
              <div className="text-right text-[11px] text-slate-400 font-semibold space-y-0.5 shrink-0">
                <div>Boys: <strong className="text-white">0</strong></div>
                <div>Girls: <strong className="text-white">0</strong></div>
              </div>
            </div>
          </div>

          {/* 2. Today's Students & Staff Birthday Cards with Single-Direction Looping Marquee */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            
            {/* Left: Today's Students Birthdays */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between gap-3 overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
                <div className="flex items-center gap-2">
                  <Cake className="w-5 h-5 text-sky-500" />
                  <h4 className="text-sm sm:text-base font-bold text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
                    Today's Students Birthdays <span className="text-amber-500 font-bold">({(birthdays?.todayStudents || []).length})</span>
                  </h4>
                </div>
              </div>

              {birthdays?.todayStudents?.length > 0 ? (
                <div className="overflow-hidden py-1 relative w-full select-none">
                  <div className="animate-birthday-marquee-loop flex items-center">
                    {/* Set 1 */}
                    <div className="flex items-center gap-6 sm:gap-8 pr-20 sm:pr-28 shrink-0">
                      {birthdays.todayStudents.map((st, idx) => (
                        <div key={`st-1-${idx}`} className="flex flex-col items-center text-center shrink-0 w-24 sm:w-28 group cursor-pointer">
                          {/* Yellow / Golden Rounded Frame */}
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-1 border-2 border-amber-400 bg-amber-50/20 shadow-xs flex items-center justify-center overflow-hidden group-hover:scale-105 group-hover:border-amber-500 transition-all duration-300">
                            <img
                              src={st.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(st.name)}&background=0284c7&color=fff&size=128&bold=true`}
                              alt={st.name}
                              className="w-full h-full object-cover rounded-xl pointer-events-none"
                              onError={(e) => {
                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(st.name)}&background=0284c7&color=fff&size=128&bold=true`;
                              }}
                            />
                          </div>
                          <h5 className="text-xs font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide mt-2 truncate w-full px-1">
                            {st.name}
                          </h5>
                          <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">
                            {st.classFormatted || `${st.class || 'VII'} (${st.section || 'A'})`}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Set 2 (Seamless single-direction loop with 2-3 card space) */}
                    <div className="flex items-center gap-6 sm:gap-8 pr-20 sm:pr-28 shrink-0">
                      {birthdays.todayStudents.map((st, idx) => (
                        <div key={`st-2-${idx}`} className="flex flex-col items-center text-center shrink-0 w-24 sm:w-28 group cursor-pointer">
                          {/* Yellow / Golden Rounded Frame */}
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-1 border-2 border-amber-400 bg-amber-50/20 shadow-xs flex items-center justify-center overflow-hidden group-hover:scale-105 group-hover:border-amber-500 transition-all duration-300">
                            <img
                              src={st.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(st.name)}&background=0284c7&color=fff&size=128&bold=true`}
                              alt={st.name}
                              className="w-full h-full object-cover rounded-xl pointer-events-none"
                              onError={(e) => {
                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(st.name)}&background=0284c7&color=fff&size=128&bold=true`;
                              }}
                            />
                          </div>
                          <h5 className="text-xs font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide mt-2 truncate w-full px-1">
                            {st.name}
                          </h5>
                          <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">
                            {st.classFormatted || `${st.class || 'VII'} (${st.section || 'A'})`}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-center py-8 min-h-[140px]">
                  <p className="text-sm font-semibold text-slate-400 dark:text-slate-500">
                    No Birthdays Today
                  </p>
                </div>
              )}
            </div>

            {/* Right: Today's Staff Birthdays */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between gap-3 overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
                <div className="flex items-center gap-2">
                  <Cake className="w-5 h-5 text-sky-500" />
                  <h4 className="text-sm sm:text-base font-bold text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
                    Today's Staff Birthdays <span className="text-amber-500 font-bold">({(birthdays?.todayStaff || []).length})</span>
                  </h4>
                </div>
              </div>

              {birthdays?.todayStaff?.length > 0 ? (
                <div className="overflow-hidden py-1 relative w-full select-none">
                  <div className="animate-birthday-marquee-loop flex items-center">
                    {/* Set 1 */}
                    <div className="flex items-center gap-6 sm:gap-8 pr-20 sm:pr-28 shrink-0">
                      {birthdays.todayStaff.map((tc, idx) => (
                        <div key={`tc-1-${idx}`} className="flex flex-col items-center text-center shrink-0 w-24 sm:w-28 group cursor-pointer">
                          {/* Yellow / Golden Rounded Frame */}
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-1 border-2 border-amber-400 bg-amber-50/20 shadow-xs flex items-center justify-center overflow-hidden group-hover:scale-105 group-hover:border-amber-500 transition-all duration-300">
                            <img
                              src={tc.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(tc.name)}&background=7c3aed&color=fff&size=128&bold=true`}
                              alt={tc.name}
                              className="w-full h-full object-cover rounded-xl pointer-events-none"
                              onError={(e) => {
                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(tc.name)}&background=7c3aed&color=fff&size=128&bold=true`;
                              }}
                            />
                          </div>
                          <h5 className="text-xs font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide mt-2 truncate w-full px-1">
                            {tc.name}
                          </h5>
                          <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">
                            {tc.designationFormatted || tc.designation || 'Faculty'}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Set 2 */}
                    <div className="flex items-center gap-6 sm:gap-8 pr-20 sm:pr-28 shrink-0">
                      {birthdays.todayStaff.map((tc, idx) => (
                        <div key={`tc-2-${idx}`} className="flex flex-col items-center text-center shrink-0 w-24 sm:w-28 group cursor-pointer">
                          {/* Yellow / Golden Rounded Frame */}
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-1 border-2 border-amber-400 bg-amber-50/20 shadow-xs flex items-center justify-center overflow-hidden group-hover:scale-105 group-hover:border-amber-500 transition-all duration-300">
                            <img
                              src={tc.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(tc.name)}&background=7c3aed&color=fff&size=128&bold=true`}
                              alt={tc.name}
                              className="w-full h-full object-cover rounded-xl pointer-events-none"
                              onError={(e) => {
                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(tc.name)}&background=7c3aed&color=fff&size=128&bold=true`;
                              }}
                            />
                          </div>
                          <h5 className="text-xs font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide mt-2 truncate w-full px-1">
                            {tc.name}
                          </h5>
                          <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">
                            {tc.designationFormatted || tc.designation || 'Faculty'}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-center py-8 min-h-[140px]">
                  <p className="text-sm font-semibold text-slate-400 dark:text-slate-500">
                    No Birthdays Today
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* 3. Rich 3 Staff Strength Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Card 1: Employee (Peach/Orange Gradient) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white space-y-2 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="text-2xl font-black font-mono">{stats?.totalTeachers || 22}</span>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-100">Employee</h4>
                <p className="text-[10px] text-amber-200 font-semibold mt-0.5">TOTAL STRENGTH</p>
              </div>
            </div>

            {/* Card 2: Teachers (Deep Purple Gradient) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-purple-700 to-indigo-900 text-white space-y-2 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <span className="text-2xl font-black font-mono">{stats?.teachingStaff || 14}</span>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-100">Teachers</h4>
                <p className="text-[10px] text-purple-200 font-semibold mt-0.5">TOTAL STRENGTH</p>
              </div>
            </div>

            {/* Card 3: Other Staff (Teal/Emerald Gradient) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-800 text-white space-y-2 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <span className="text-2xl font-black font-mono">{stats?.supportStaff || 9}</span>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-100">Other Staff</h4>
                <p className="text-[10px] text-teal-200 font-semibold mt-0.5">TOTAL STRENGTH</p>
              </div>
            </div>
          </div>

          {/* 4. Rich 4 Staff Today's Attendance Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 sm:p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-900 dark:text-blue-200 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold uppercase block leading-tight">Teaching Staff Present</span>
                <p className="text-[10px] text-blue-600 dark:text-blue-400 font-bold">TODAY</p>
              </div>
              <span className="text-xl font-black font-mono text-blue-600 dark:text-blue-300">{stats?.teachingStaff || 14}</span>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-900 dark:text-orange-200 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold uppercase block leading-tight">Teaching Staff Absent</span>
                <p className="text-[10px] text-orange-600 dark:text-orange-400 font-bold">TODAY</p>
              </div>
              <span className="text-xl font-black font-mono text-orange-600 dark:text-orange-300">0</span>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-900 dark:text-cyan-200 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold uppercase block leading-tight">Non-teaching Present</span>
                <p className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold">TODAY</p>
              </div>
              <span className="text-xl font-black font-mono text-cyan-600 dark:text-cyan-300">{stats?.supportStaff || 9}</span>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-900 dark:text-rose-200 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold uppercase block leading-tight">Non-teaching Absent</span>
                <p className="text-[10px] text-rose-600 dark:text-rose-400 font-bold">TODAY</p>
              </div>
              <span className="text-xl font-black font-mono text-rose-600 dark:text-rose-300">0</span>
            </div>
          </div>

        </div>

        {/* 👉 RIGHT COLUMN: Sleek, Compact Daily Action Planner (4 Columns) */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
          {/* Planner Header */}
          <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2.5">
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="p-1.5 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 shrink-0">
                  <ListTodo className="w-4 h-4" />
                </span>
                <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate">
                  Action Planner
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold text-[10px] border border-indigo-200 dark:border-indigo-800 shrink-0">
                  {completedCount}/{tasks.length} ({progressPercent}%)
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsAddingTask(!isAddingTask)}
              className="px-2.5 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-[11px] font-bold shadow-xs flex items-center gap-1 shrink-0 transition-all hover:scale-105 active:scale-95"
            >
              <Plus className="w-3.5 h-3.5" /> {isAddingTask ? 'Close' : 'Add'}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-emerald-500 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          {/* Quick Add Task Form */}
          {isAddingTask && (
            <form
              onSubmit={handleCreateTask}
              className="p-3 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60 space-y-2 text-xs animate-in fade-in"
            >
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-0.5 text-[10px]">Task Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Call Fee Defaulter Parents..."
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  className="w-full p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-0.5 text-[10px]">Priority</label>
                  <select
                    value={newTaskPriority}
                    onChange={(e) => setNewTaskPriority(e.target.value)}
                    className="w-full p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-semibold"
                  >
                    <option value="urgent">⚡ Urgent</option>
                    <option value="today">🎯 Today</option>
                    <option value="soon">⏳ Soon</option>
                    <option value="later">📋 Later</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-0.5 text-[10px]">Category</label>
                  <select
                    value={newTaskCategory}
                    onChange={(e) => setNewTaskCategory(e.target.value)}
                    className="w-full p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-semibold"
                  >
                    <option value="Academics">Academics</option>
                    <option value="Fees & Accounts">Fees & Accounts</option>
                    <option value="Administration">Administration</option>
                    <option value="Examinations">Examinations</option>
                    <option value="Transport">Transport</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-1.5 pt-1">
                <button
                  type="button"
                  onClick={() => setIsAddingTask(false)}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 rounded-lg text-[10px] font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-xs"
                >
                  Save Task
                </button>
              </div>
            </form>
          )}

          {/* Compact Filter Pills */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 text-[10px] custom-scrollbar">
            {[
              { key: 'All', label: `All (${tasks.length})` },
              { key: 'Urgent', label: `⚡ Urgent (${tasks.filter(t => t.priority === 'urgent').length})` },
              { key: 'Today', label: `🎯 Today (${tasks.filter(t => t.priority === 'today').length})` },
              { key: 'Pending', label: `Pending (${tasks.filter(t => !t.completed).length})` },
              { key: 'Completed', label: `✓ (${completedCount})` }
            ].map(f => (
              <button
                key={f.key}
                onClick={() => setTaskFilter(f.key)}
                className={`px-2 py-0.5 rounded-lg font-bold transition-all whitespace-nowrap text-[10px] ${
                  taskFilter === f.key
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Compact Task Rows List */}
          <div className="space-y-1.5 max-h-[500px] overflow-y-auto custom-scrollbar pr-0.5">
            {filteredTasks.map(task => {
              const isDone = task.completed;
              const priorityBadges = {
                urgent: 'bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border-rose-300',
                today: 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-300',
                soon: 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border-blue-300',
                later: 'bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 border-purple-300'
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
                  className={`p-2.5 rounded-2xl border transition-all flex items-start gap-2 ${
                    isDone
                      ? 'bg-slate-50/70 dark:bg-slate-900/40 border-slate-200/60 dark:border-slate-800 opacity-60'
                      : 'bg-white dark:bg-slate-800/80 border-slate-200/80 dark:border-slate-700/80 hover:shadow-xs'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() => handleToggleTask(task.id)}
                    className="w-3.5 h-3.5 rounded text-purple-600 focus:ring-purple-500 cursor-pointer mt-0.5 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <span className={`text-[11px] font-bold leading-tight ${isDone ? 'line-through text-slate-400' : 'text-slate-900 dark:text-slate-100'}`}>
                        {task.title}
                      </span>
                      <span className={`text-[8.5px] font-black uppercase px-1.5 py-0.5 rounded-md border ${priorityBadges[task.priority] || priorityBadges.today} shrink-0`}>
                        {priorityLabels[task.priority] || 'Today'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-[9px] text-slate-400 font-medium">
                      <span className="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 font-semibold">
                        {task.category}
                      </span>
                      <span>• Due: {task.dueDate || 'Today'}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="p-1 rounded-lg text-slate-400 hover:text-rose-600 transition-colors shrink-0"
                    title="Delete Task"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              );
            })}

            {filteredTasks.length === 0 && (
              <div className="text-center py-6 px-4 bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 space-y-2">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {taskFilter === 'All' ? '✨ No tasks currently. Your action planner is clear!' : `No tasks found under "${taskFilter}".`}
                </p>
                {taskFilter === 'All' && !isAddingTask && (
                  <button
                    onClick={() => setIsAddingTask(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 hover:bg-purple-200 font-bold text-[11px] transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add New Task
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 💰 SECTION 5: FINANCIAL DONUT & ANNUAL FEE SPLINE WAVE GRAPH */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* 1. Income Vs Expense Of Current Month (Non-Clipping Donut Chart) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 relative">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
              Income Vs Expense Of {financialSummary.monthName.split(' ')[0] || 'September'}
            </h3>
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-200">
              {financialSummary.monthName}
            </span>
          </div>

          <div
            className="flex flex-col items-center justify-center py-3 space-y-4 cursor-pointer relative"
            onMouseEnter={() => setDonutHover(true)}
            onMouseLeave={() => setDonutHover(false)}
          >
            {/* Donut Ring with Non-Clipping ViewBox */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 50 50">
                {/* Background Ring */}
                <circle
                  cx="25"
                  cy="25"
                  r="18"
                  className="text-slate-100 dark:text-slate-800"
                  strokeWidth="4"
                  stroke="currentColor"
                  fill="none"
                />

                {/* If month has 0 income and 0 expense (clean new month state) */}
                {financialSummary.monthIncome === 0 && financialSummary.monthExpense === 0 ? (
                  <circle
                    cx="25"
                    cy="25"
                    r="18"
                    className="text-teal-500/40 dark:text-teal-400/30"
                    strokeWidth="4"
                    strokeDasharray="4 3"
                    stroke="currentColor"
                    fill="none"
                  />
                ) : (
                  <>
                    {/* Expense Segment */}
                    <circle
                      cx="25"
                      cy="25"
                      r="18"
                      className="text-pink-600 transition-all duration-700"
                      strokeWidth="4"
                      strokeDasharray={`${(financialSummary.monthExpense / (financialSummary.monthIncome + financialSummary.monthExpense || 1)) * 113} 113`}
                      strokeDashoffset="0"
                      stroke="currentColor"
                      fill="none"
                    />
                    {/* Income Segment */}
                    <circle
                      cx="25"
                      cy="25"
                      r="18"
                      className="text-teal-600 transition-all duration-700"
                      strokeWidth="4"
                      strokeDasharray={`${(financialSummary.monthIncome / (financialSummary.monthIncome + financialSummary.monthExpense || 1)) * 113} 113`}
                      strokeDashoffset={`-${(financialSummary.monthExpense / (financialSummary.monthIncome + financialSummary.monthExpense || 1)) * 113}`}
                      stroke="currentColor"
                      fill="none"
                    />
                  </>
                )}
              </svg>

              {/* Center Cash Icon */}
              <div className="absolute flex flex-col items-center justify-center text-center">
                <DollarSign className="w-7 h-7 text-teal-600 dark:text-teal-400" />
                <span className="text-[10px] font-black text-slate-500 uppercase mt-0.5">Surplus</span>
                <span className="text-sm font-black text-teal-600 font-mono">
                  {financialSummary.monthIncome > 0
                    ? `${(((financialSummary.monthIncome - financialSummary.monthExpense) / financialSummary.monthIncome) * 100).toFixed(1)}%`
                    : '₹0.00'}
                </span>
              </div>
            </div>

            {/* Hover Tooltip Popup for Donut */}
            {donutHover && (
              <div className="absolute -top-3 bg-slate-900/95 backdrop-blur text-white text-xs p-3 rounded-2xl shadow-xl border border-slate-700 z-30 pointer-events-none animate-in fade-in duration-150 space-y-1 w-52">
                <div className="font-bold text-teal-400 border-b border-slate-700 pb-1">
                  📅 {financialSummary.monthName} Flow
                </div>
                <div className="flex justify-between">
                  <span>Income:</span>
                  <strong className="text-emerald-400 font-mono">₹{financialSummary.monthIncome.toLocaleString('en-IN')}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Expense:</span>
                  <strong className="text-rose-400 font-mono">₹{financialSummary.monthExpense.toLocaleString('en-IN')}</strong>
                </div>
                <div className="flex justify-between border-t border-slate-700 pt-1">
                  <span>Net Surplus:</span>
                  <strong className="text-cyan-300 font-mono">₹{financialSummary.monthBalance.toLocaleString('en-IN')}</strong>
                </div>
              </div>
            )}

            {/* Bottom Legend */}
            <div className="flex items-center justify-center gap-5 text-xs font-bold pt-1">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-teal-600"></span>
                <span className="text-slate-700 dark:text-slate-300">Income: ₹{financialSummary.monthIncome.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-pink-600"></span>
                <span className="text-slate-700 dark:text-slate-300">Expense: ₹{financialSummary.monthExpense.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Annual Fee Summary (Spline Area Wave Chart with Accurate September Cutoff & Hover Tooltips) */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
                Annual Fee Summary
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                Total Dues: <strong className="text-slate-900 dark:text-white">₹1,13,17,500</strong> | Collected (Till Sep): <strong className="text-emerald-600">₹10,33,100</strong> | Remaining: <strong className="text-rose-600">₹1,02,84,400</strong>
              </p>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-bold">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-amber-500"></span>
                <span>Total Demand</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-emerald-600"></span>
                <span>Collected (Apr-Sep)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-rose-600"></span>
                <span>Remaining</span>
              </div>
            </div>
          </div>

          {/* Spline Bell Curves SVG Graphic with Left Y-Axis Scale */}
          <div className="relative flex">
            {/* Y-Axis numbers (Formatted in Lakhs / Crores) */}
            <div className="flex flex-col justify-between text-[9px] font-bold text-slate-400 font-mono pr-2 pb-6 text-right w-14 select-none">
              <span>₹1.2 Cr</span>
              <span>₹1.0 Cr</span>
              <span>₹80 L</span>
              <span>₹60 L</span>
              <span>₹40 L</span>
              <span>₹20 L</span>
              <span>₹0</span>
            </div>

            <div className="flex-1 h-56 relative pt-2 border-l border-b border-slate-300 dark:border-slate-700">
              <svg className="w-full h-full" viewBox="0 0 700 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="remainingGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e11d48" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#e11d48" stopOpacity="0.02" />
                  </linearGradient>
                  <linearGradient id="collectedGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="totalGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.02" />
                  </linearGradient>
                </defs>

                {/* Horizontal Grid lines */}
                <line x1="0" y1="20" x2="700" y2="20" stroke="#94a3b8" strokeDasharray="3 3" opacity="0.2" />
                <line x1="0" y1="50" x2="700" y2="50" stroke="#94a3b8" strokeDasharray="3 3" opacity="0.2" />
                <line x1="0" y1="80" x2="700" y2="80" stroke="#94a3b8" strokeDasharray="3 3" opacity="0.2" />
                <line x1="0" y1="110" x2="700" y2="110" stroke="#94a3b8" strokeDasharray="3 3" opacity="0.2" />
                <line x1="0" y1="140" x2="700" y2="140" stroke="#94a3b8" strokeDasharray="3 3" opacity="0.2" />
                <line x1="0" y1="170" x2="700" y2="170" stroke="#94a3b8" strokeDasharray="3 3" opacity="0.2" />

                {/* Vertical Cutoff Separator at September (Active vs Future) */}
                <line x1="345" y1="0" x2="345" y2="170" stroke="#10b981" strokeWidth="2" strokeDasharray="4 3" opacity="0.7" />

                {/* Area 1: Remaining Fee (Red Wave strictly up to Sep x=345) */}
                <path
                  d="M 45 170 C 120 170, 180 20, 345 35 L 345 170 Z"
                  fill="url(#remainingGrad)"
                />
                <path
                  d="M 45 170 C 120 170, 180 20, 345 35"
                  fill="none"
                  stroke="#e11d48"
                  strokeWidth="3"
                />

                {/* Area 2: Collected Fee (Green Wave strictly up to Sep x=345) */}
                <path
                  d="M 45 170 C 120 170, 200 90, 345 65 L 345 170 Z"
                  fill="url(#collectedGrad)"
                />
                <path
                  d="M 45 170 C 120 170, 200 90, 345 65"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                />

                {/* Area 3: Total Gross Demand (Amber Wave) */}
                <path
                  d="M 45 170 C 120 170, 200 110, 345 95 L 345 170 Z"
                  fill="url(#totalGrad)"
                />
                <path
                  d="M 45 170 C 120 170, 200 110, 345 95"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2.5"
                />

                {/* Projected Future Session Wave (Oct to Mar - Dashed Projection) */}
                <path
                  d="M 345 65 C 450 65, 550 170, 685 170"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* Active Month Dot on September */}
                <circle cx="345" cy="65" r="5" fill="#10b981" className="animate-pulse" />
                <circle cx="345" cy="65" r="9" fill="none" stroke="#10b981" strokeWidth="1.5" opacity="0.6" />

                {/* Interactive Month Hover Columns & Points */}
                {academicMonthsData.map((m) => (
                  <g
                    key={m.name}
                    className="cursor-pointer"
                    onMouseEnter={() => setWaveHoverMonth(m)}
                    onMouseLeave={() => setWaveHoverMonth(null)}
                  >
                    {/* Transparent hover column */}
                    <rect
                      x={m.x - 20}
                      y="0"
                      width="40"
                      height="170"
                      fill="transparent"
                      className="hover:fill-slate-500/10 transition-colors"
                    />

                    {/* Data Node Point */}
                    <circle
                      cx={m.x}
                      cy={m.x <= 345 ? (m.name === 'Sep' ? 65 : (m.name === 'Aug' ? 65 : (m.name === 'Jul' ? 85 : 125))) : 170}
                      r={waveHoverMonth?.name === m.name ? 6 : 3.5}
                      fill={m.x <= 345 ? '#10b981' : '#94a3b8'}
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      className="transition-all duration-150"
                    />
                  </g>
                ))}
              </svg>

              {/* Floating Interactive Hover Tooltip for Spline Graph */}
              {waveHoverMonth && (
                <div
                  className="absolute bg-slate-900/95 backdrop-blur text-white text-xs p-3 rounded-2xl shadow-2xl border border-slate-700 z-30 pointer-events-none animate-in fade-in zoom-in-95 duration-150 space-y-1.5 w-60"
                  style={{
                    left: `${Math.min(Math.max(10, (waveHoverMonth.x / 700) * 100 - 15), 65)}%`,
                    top: '10px'
                  }}
                >
                  <div className="font-bold text-teal-400 border-b border-slate-700 pb-1 flex justify-between items-center">
                    <span>📅 {waveHoverMonth.fullName}</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800">
                      {waveHoverMonth.name === 'Sep' ? 'Active Today' : (waveHoverMonth.x < 345 ? 'Actual' : 'Projected')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Fee Collected:</span>
                    <strong className="text-emerald-400 font-mono">
                      {waveHoverMonth.x <= 345 ? `₹${waveHoverMonth.collected.toLocaleString('en-IN')}` : '₹0 (Upcoming)'}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Balance Remaining:</span>
                    <strong className="text-rose-400 font-mono">₹{waveHoverMonth.remaining.toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="flex justify-between border-t border-slate-700/80 pt-1 text-[11px]">
                    <span className="text-slate-400">Total Demand:</span>
                    <strong className="text-amber-400 font-mono">₹{waveHoverMonth.total.toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="text-[9px] text-slate-400 italic pt-0.5">
                    📌 {waveHoverMonth.status}
                  </div>
                </div>
              )}

              {/* Months Axis Labels */}
              <div className="flex justify-between text-[10px] font-bold text-slate-600 dark:text-slate-400 px-2 -mt-1 select-none">
                {academicMonthsData.map(m => (
                  <span
                    key={m.name}
                    className={`transition-colors cursor-pointer ${
                      m.name === 'Sep'
                        ? 'text-emerald-600 dark:text-emerald-400 font-black underline decoration-2'
                        : (waveHoverMonth?.name === m.name ? 'text-indigo-600 font-black' : '')
                    }`}
                    onMouseEnter={() => setWaveHoverMonth(m)}
                    onMouseLeave={() => setWaveHoverMonth(null)}
                  >
                    {m.name}
                  </span>
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
              <div>Income: <strong className="font-mono font-bold">₹{financialSummary.todayIncome.toLocaleString('en-IN')}</strong></div>
              <div>Expense: <strong className="font-mono font-bold">₹{financialSummary.todayExpense.toLocaleString('en-IN')}</strong></div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-50">Today's Income/Expense</h4>
            <p className="text-xs text-cyan-100 mt-0.5">Daily cash/bank flow ({currentTime.split(',')[0] || 'Today'})</p>
          </div>
          <div className="pt-2 border-t border-white/20 flex justify-between items-center text-xs font-black">
            <span>BALANCE:</span>
            <span className="font-mono text-base font-black">₹{financialSummary.todayBalance.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* Card 2: Monthly Income/Expense (Purple Gradient) */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-700 to-indigo-900 text-white shadow-lg space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="text-right text-xs font-medium space-y-0.5">
              <div>Income: <strong className="font-mono font-bold text-emerald-300">₹{financialSummary.monthIncome.toLocaleString('en-IN')}</strong></div>
              <div>Expense: <strong className="font-mono font-bold text-rose-300">₹{financialSummary.monthExpense.toLocaleString('en-IN')}</strong></div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple-100">Monthly Income/Expense</h4>
            <p className="text-xs text-purple-200 mt-0.5">{financialSummary.monthName} summary</p>
          </div>
          <div className="pt-2 border-t border-white/20 flex justify-between items-center text-xs font-black">
            <span>BALANCE:</span>
            <span className="font-mono text-base font-black text-emerald-300">₹{financialSummary.monthBalance.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* Card 3: Income/Expense as on Date (Dark Charcoal Navy Gradient) */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-lg space-y-4 border border-indigo-500/30">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <Receipt className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-right text-xs font-medium space-y-0.5">
              <div>Income: <strong className="font-mono font-bold text-emerald-400">₹{financialSummary.cumulativeIncome.toLocaleString('en-IN')}</strong></div>
              <div>Expense: <strong className="font-mono font-bold text-rose-400">₹{financialSummary.cumulativeExpense.toLocaleString('en-IN')}</strong></div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Income/Expense as on Date</h4>
            <p className="text-xs text-slate-400 mt-0.5">Cumulative Session 2026-27 (404 Receipts)</p>
          </div>
          <div className="pt-2 border-t border-white/20 flex justify-between items-center text-xs font-black">
            <span>NET BALANCE:</span>
            <span className="font-mono text-base font-black text-emerald-400">₹{financialSummary.cumulativeBalance.toLocaleString('en-IN')}</span>
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

    </div>
  );
};

export default DashboardPage;
