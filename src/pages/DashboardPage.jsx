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
  Eye
} from 'lucide-react';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';
import { useAuth } from '../context/AuthContext';
import schoolService from '../services/schoolService';

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Update stats dynamically when active branch changes
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

  const classAnalytics = stats?.classAnalytics && stats.classAnalytics.length > 0
    ? stats.classAnalytics
    : [
        { className: 'NURSERY', students: 54, boys: 28, girls: 26, attendance: 96 },
        { className: 'LKG', students: 52, boys: 27, girls: 25, attendance: 95 },
        { className: 'UKG', students: 42, boys: 22, girls: 20, attendance: 97 },
        { className: 'Class 1st (I)', students: 57, boys: 30, girls: 27, attendance: 95 },
        { className: 'Class 2nd (II)', students: 54, boys: 28, girls: 26, attendance: 96 }
      ];

  const colors = ['bg-indigo-500', 'bg-blue-500', 'bg-emerald-500', 'bg-amber-500', 'bg-rose-500', 'bg-purple-500', 'bg-cyan-500', 'bg-pink-500'];

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">

      {/* 🏛️ Active Campus Indicator Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700 flex items-center justify-center text-amber-700 dark:text-amber-300 shadow-sm shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 border border-amber-300">
                {stats?.shortCode || 'ALL'}
              </span>
              <h2 className="text-base sm:text-lg font-black text-[#0b1e38] dark:text-white font-serif">
                {stats?.branchName || 'Dadheech Memorial Public School'}
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {isSuperAdmin
                ? `Super Admin Overview • Showing statistics for ${stats?.branchName || 'All Campuses'}`
                : `Logged in as ${currentRole} • Restricted to ${stats?.branchName || 'Main Campus'}`}
            </p>
          </div>
        </div>

        {/* Super Admin Quick Campus Switcher Chips */}
        {isSuperAdmin && (
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700 flex-wrap sm:flex-nowrap">
            <button
              onClick={() => setActiveBranchId('BR-01')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeBranchId === 'BR-01' ? 'bg-[#0b1e38] text-white shadow' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              🏢 Senior (Jargwan)
            </button>
            <button
              onClick={() => setActiveBranchId('BR-02')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeBranchId === 'BR-02' ? 'bg-[#0b1e38] text-white shadow' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              🏫 Barheti (Aligarh)
            </button>
            <button
              onClick={() => setActiveBranchId('BR-03')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeBranchId === 'BR-03' ? 'bg-[#0b1e38] text-white shadow' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              🧸 Kids School (PAC)
            </button>
            <button
              onClick={() => setActiveBranchId('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeBranchId === 'all' ? 'bg-[#0b1e38] text-white shadow' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              🌐 All Campuses
            </button>
          </div>
        )}
      </div>

      {/* 🏫 DMPS Master School Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 p-6 sm:p-8 text-white shadow-xl border border-indigo-500/30">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/25 border border-indigo-400/40 text-indigo-200 text-xs font-bold shadow-inner">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                Session {schoolInfo.academicSession || '2026-2027'}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                CBSE Affiliated • {schoolInfo.affiliationNo || 'UP-CBSE-83921'}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-mono font-semibold">
                <Clock className="w-3 h-3 text-indigo-300" /> {currentTime}
              </span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2">
                {schoolInfo.name || 'Dadheech Memorial Public School'}
              </h2>
              <p className="text-xs sm:text-sm text-indigo-200/90 mt-1 font-medium leading-relaxed">
                Viewing: <strong className="text-amber-300 font-bold">{stats?.branchName || 'All Campuses'}</strong> | {stats?.totalStudents || 567} Active Students Registered
              </p>
            </div>
          </div>

          {/* Quick Header CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveTab('students')}
              className="px-4 py-2.5 bg-white text-indigo-950 hover:bg-indigo-50 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <GraduationCap className="w-4 h-4 text-indigo-600" /> New Admission
            </button>
            <button
              onClick={() => setActiveTab('fees')}
              className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <CreditCard className="w-4 h-4" /> Collect Fee (POS)
            </button>
            <button
              onClick={onOpenAI}
              className="px-4 py-2.5 bg-indigo-600/90 hover:bg-indigo-600 border border-indigo-400/40 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-amber-300" /> Ask EduBot
            </button>
          </div>
        </div>

        {/* Subtle decorative background blur */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>
      </div>

      {/* 📊 Top Metric KPI Stat Cards (Dynamically Scaled per Active Campus) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard
          title="Total Students"
          value={String(stats?.totalStudents ?? 567)}
          subtext={`Active: ${stats?.activeStudents || 566} | Inactive: ${stats?.inactiveStudents || 1}`}
          icon={GraduationCap}
          trend="up"
          trendValue="567 Enrolled"
          color="indigo"
          delay={0.05}
        />
        <StatCard
          title="Teaching Staff"
          value={String(stats?.totalTeachers ?? 23)}
          subtext="23 Verified Faculty"
          icon={Users}
          trend="up"
          trendValue="100% Active"
          color="purple"
          delay={0.1}
        />
        <StatCard
          title="Campus Attendance"
          value={`${stats?.attendanceRate || '95.0'}%`}
          subtext="Daily Presence"
          icon={CheckCircle2}
          trend="up"
          trendValue="Biometric Verified"
          color="emerald"
          delay={0.15}
        />
        <StatCard
          title="Collected Fees"
          value={`₹${Number(stats?.totalCollectedFees || 1034800).toLocaleString('en-IN')}`}
          subtext="Total Paid to Date"
          icon={DollarSign}
          trend="up"
          trendValue="Session 2026-27"
          color="emerald"
          delay={0.2}
        />
        <StatCard
          title="Total Fee Dues"
          value={`₹${Number(stats?.totalDueFees || 7870750).toLocaleString('en-IN')}`}
          subtext={`Remaining: ₹${Number(stats?.totalRemainingFees || 6835950).toLocaleString('en-IN')}`}
          icon={CreditCard}
          trend="down"
          trendValue="Annual Dues"
          color="rose"
          delay={0.25}
        />
        <StatCard
          title="Active Classes"
          value="16"
          subtext="PG to Class 12th"
          icon={BookMarked}
          trend="up"
          trendValue="All Wings"
          color="cyan"
          delay={0.3}
        />
      </div>

      {/* 💰 FINANCIAL DASHBOARD SECTION (Exact Match with School Old Software Screenshot) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Income Vs Expense of August (Donut Chart & Breakdown) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <PieChart className="w-4 h-4 text-pink-600" /> Income Vs Expense Of August
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300">
              August 2026
            </span>
          </div>

          <div className="flex flex-col items-center justify-center py-4 space-y-4">
            {/* Visual Ring Gauge */}
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-pink-500"
                  strokeWidth="4"
                  strokeDasharray="35, 100"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-emerald-500"
                  strokeWidth="4"
                  strokeDasharray="65, 100"
                  strokeDashoffset="-35"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute text-center">
                <span className="text-xs font-bold text-slate-400 block">Surplus</span>
                <span className="text-base font-black text-emerald-600">64.6%</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 text-xs font-bold">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <span className="text-slate-700 dark:text-slate-300">Income: ₹3,81,300</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span className="text-slate-700 dark:text-slate-300">Expense: ₹2,09,078</span>
              </div>
            </div>
          </div>
        </div>

        {/* Annual Fee Summary (Area Graph & Detailed Totals) */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-amber-600" /> Annual Fee Summary (Tuition + 11-Month Transport)
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                Total Dues: <strong className="text-slate-800 dark:text-white">₹1,09,21,500</strong> | Collected: <strong className="text-emerald-600">₹10,34,800</strong> | Remaining: <strong className="text-rose-600">₹98,86,700</strong>
              </p>
            </div>
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200">
              🚌 Transport 11-Months System
            </span>
          </div>

          {/* Progress Bar and Summary Breakdown */}
          <div className="space-y-4 pt-2">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-emerald-600 font-extrabold">Collected: ₹10,34,800 (9.5%)</span>
                <span className="text-rose-600 font-extrabold">Remaining: ₹98,86,700 (90.5%)</span>
              </div>
              <div className="w-full bg-rose-100 dark:bg-rose-950/60 h-4 rounded-full overflow-hidden flex shadow-inner">
                <div className="bg-emerald-500 h-full rounded-l-full transition-all duration-700" style={{ width: '9.5%' }}></div>
                <div className="bg-amber-500 h-full" style={{ width: '0%' }}></div>
                <div className="bg-rose-500 h-full rounded-r-full" style={{ width: '90.5%' }}></div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2.5 text-center pt-2">
              <div className="p-2.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
                <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 uppercase">Tuition Dues</span>
                <p className="text-sm font-black text-indigo-900 dark:text-indigo-100 mt-0.5 font-mono">₹81,99,000</p>
              </div>
              <div className="p-2.5 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
                <span className="text-[10px] font-bold text-purple-700 dark:text-purple-300 uppercase">Transport (11M)</span>
                <p className="text-sm font-black text-purple-900 dark:text-purple-100 mt-0.5 font-mono">₹27,22,500</p>
              </div>
              <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 uppercase">Collected</span>
                <p className="text-sm font-black text-emerald-900 dark:text-emerald-100 mt-0.5 font-mono">₹10,34,800</p>
              </div>
              <div className="p-2.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
                <span className="text-[10px] font-bold text-rose-700 dark:text-rose-300 uppercase">Remaining</span>
                <p className="text-sm font-black text-rose-900 dark:text-rose-100 mt-0.5 font-mono">₹98,86,700</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 💳 THE 3 EXACT FINANCIAL CARDS (From Old Software Screenshot) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Card 1: Today's Income/Expense */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-cyan-500 to-teal-600 text-white shadow-lg space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <span className="text-xs text-cyan-100 block">Income: ₹0.00</span>
              <span className="text-xs text-cyan-100 block">Expense: ₹0.00</span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Today's Income/Expense</h4>
            <p className="text-xs text-cyan-100 mt-1">Daily cash/bank flow</p>
          </div>
          <div className="pt-2 border-t border-white/20 flex justify-between items-center text-xs font-black">
            <span>BALANCE:</span>
            <span className="font-mono text-sm">₹0.00</span>
          </div>
        </div>

        {/* Card 2: Monthly Income/Expense */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-700 to-indigo-800 text-white shadow-lg space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <span className="text-xs text-purple-100 block">Income: <strong className="font-mono">₹3,81,300.00</strong></span>
              <span className="text-xs text-purple-100 block">Expense: <strong className="font-mono">₹2,09,078.00</strong></span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Monthly Income/Expense</h4>
            <p className="text-xs text-purple-100 mt-1">August 2026 summary</p>
          </div>
          <div className="pt-2 border-t border-white/20 flex justify-between items-center text-xs font-black">
            <span>BALANCE:</span>
            <span className="font-mono text-sm">₹1,72,222.00</span>
          </div>
        </div>

        {/* Card 3: Income/Expense as on Date */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-lg space-y-4 border border-indigo-500/20">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
              <Receipt className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-300 block">Income: <strong className="font-mono text-emerald-400">₹10,34,100.00</strong></span>
              <span className="text-xs text-slate-300 block">Expense: <strong className="font-mono text-rose-400">₹7,99,080.00</strong></span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Income/Expense as on Date</h4>
            <p className="text-xs text-slate-400 mt-1">Cumulative Session 2026-27</p>
          </div>
          <div className="pt-2 border-t border-white/20 flex justify-between items-center text-xs font-black">
            <span>NET BALANCE:</span>
            <span className="font-mono text-sm text-emerald-400">₹2,35,020.00</span>
          </div>
        </div>

      </div>

      {/* 📈 Class-Wise Analytics & Visual Graphical Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

        {/* Class-wise Strength Visual Bar Chart (2 Columns) */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-indigo-600" /> {stats.branchName} — Class Strength Distribution
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Live enrolled student counts and gender breakdown for this campus</p>
            </div>
            <span className="text-xs font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 rounded-xl border border-indigo-200 dark:border-indigo-800">
              {stats.totalStudents} Enrolled
            </span>
          </div>

          {/* Visual Bar Progression Chart */}
          <div className="space-y-3.5">
            {classAnalytics.map((cls, idx) => {
              const maxStrength = Math.max(...classAnalytics.map(c => c.students), 10);
              const barWidthPct = Math.max(15, Math.round((cls.students / maxStrength) * 100));
              const barColor = colors[idx % colors.length];

              return (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-800 dark:text-slate-200 w-24 truncate">{cls.className}</span>
                    <div className="flex items-center gap-4 text-[11px] text-slate-500 font-semibold">
                      <span>Boys: {cls.boys}</span>
                      <span>Girls: {cls.girls}</span>
                      <span className="text-emerald-600 font-bold">Attn: {cls.attendance}%</span>
                    </div>
                    <span className="font-extrabold text-slate-900 dark:text-white text-xs">{cls.students} Students</span>
                  </div>

                  {/* Animated Bar */}
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden flex">
                    <div
                      className={`h-full ${barColor} rounded-full transition-all duration-700`}
                      style={{ width: `${barWidthPct}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Branch Quick Summary & House Distribution */}
        <div className="space-y-6">

          {/* Campus Details Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-indigo-600" /> Campus Profile
              </h3>
              <Badge variant="primary">{stats.shortCode}</Badge>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Campus Name</span>
                <p className="font-black text-slate-900 dark:text-white mt-0.5">{stats.branchName}</p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
                  <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 uppercase">Students</span>
                  <p className="text-lg font-black text-indigo-900 dark:text-indigo-100 mt-0.5">{stats.totalStudents}</p>
                </div>
                <div className="p-3 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                  <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 uppercase">Teachers</span>
                  <p className="text-lg font-black text-emerald-900 dark:text-emerald-100 mt-0.5">{stats.totalTeachers}</p>
                </div>
              </div>
            </div>
          </div>

          {/* House Strength Distribution */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-600" /> School Houses Distribution
            </h3>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
                <span className="font-bold text-rose-700 dark:text-rose-300">🔥 Phoenix</span>
                <p className="text-lg font-black text-rose-900 dark:text-rose-100 mt-1">{Math.ceil(stats.totalStudents * 0.3)}</p>
                <span className="text-[10px] text-rose-500">Students</span>
              </div>
              <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
                <span className="font-bold text-blue-700 dark:text-blue-300">🐉 Dragons</span>
                <p className="text-lg font-black text-blue-900 dark:text-blue-100 mt-1">{Math.floor(stats.totalStudents * 0.25)}</p>
                <span className="text-[10px] text-blue-500">Students</span>
              </div>
              <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                <span className="font-bold text-amber-700 dark:text-amber-300">🦅 Warriors</span>
                <p className="text-lg font-black text-amber-900 dark:text-amber-100 mt-1">{Math.floor(stats.totalStudents * 0.25)}</p>
                <span className="text-[10px] text-amber-500">Students</span>
              </div>
              <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                <span className="font-bold text-emerald-700 dark:text-emerald-300">🦁 Titans</span>
                <p className="text-lg font-black text-emerald-900 dark:text-emerald-100 mt-1">{Math.max(1, stats.totalStudents - Math.ceil(stats.totalStudents * 0.3) - Math.floor(stats.totalStudents * 0.5))}</p>
                <span className="text-[10px] text-emerald-500">Students</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* 🚀 Quick Operations Matrix */}
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



      {/* 📋 Daily Administrative Task & Action Planner */}
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

      {/* Main 2-Column Grid: Left (Exams) | Right (Circulars & Events) */}
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
