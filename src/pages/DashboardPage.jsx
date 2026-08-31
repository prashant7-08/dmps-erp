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

  // Live Clock
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));

  // Calendar State (August 2026)
  const [calendarView, setCalendarView] = useState('Month');
  const [selectedCalDate, setSelectedCalDate] = useState('2026-08-31');

  // Active Tooltip for Charts
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

  // Annual Fee Spline Wave (April to March)
  const annualFeeMonths = [
    { month: 'Apr', total: 13800000, collected: 819900, remaining: 12980100 },
    { month: 'May', total: 11923985, collected: 1034800, remaining: 10889185 },
    { month: 'Jun', total: 0, collected: 0, remaining: 0 },
    { month: 'Jul', total: 0, collected: 0, remaining: 0 },
    { month: 'Aug', total: 0, collected: 0, remaining: 0 },
    { month: 'Sep', total: 0, collected: 0, remaining: 0 },
    { month: 'Oct', total: 0, collected: 0, remaining: 0 },
    { month: 'Nov', total: 0, collected: 0, remaining: 0 },
    { month: 'Dec', total: 0, collected: 0, remaining: 0 },
    { month: 'Jan', total: 0, collected: 0, remaining: 0 },
    { month: 'Feb', total: 0, collected: 0, remaining: 0 },
    { month: 'Mar', total: 0, collected: 0, remaining: 0 }
  ];

  // Calendar Days Grid Generation for August 2026 (Aug 1 = Saturday)
  const august2026Days = Array.from({ length: 31 }, (_, i) => i + 1);

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
                ? `Super Admin Overview • Showing verified database for ${stats?.branchName || 'All Campuses'}`
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

      {/* ========================================================================= */}
      {/* 📊 SECTION 1: TOP 2 MAIN ANALYSIS CHARTS (Class Strength & 10-Day Cashflow) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* 1. Class Wise Student Strength Bar Chart */}
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

          {/* SVG Vertical Bar Chart with Axis and Labels */}
          <div className="h-64 w-full flex items-end justify-between gap-1.5 pt-6 pb-2 px-2 relative border-b border-slate-200 dark:border-slate-700">
            {/* Horizontal Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
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
                  <span className="text-[9px] font-bold text-slate-500 mb-1 opacity-80 group-hover:opacity-100 group-hover:text-indigo-600 transition-opacity">
                    {cls.count}
                  </span>

                  {/* Vertical Bar */}
                  <div
                    className="w-full max-w-[22px] rounded-t-md transition-all duration-500 group-hover:brightness-110 shadow-xs"
                    style={{
                      height: `${Math.max(8, heightPct)}%`,
                      backgroundColor: cls.color
                    }}
                  ></div>

                  {/* Bottom Class Name */}
                  <span className="text-[9px] font-extrabold text-slate-600 dark:text-slate-400 mt-2 truncate max-w-[24px]">
                    {cls.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Weekend Income Vs Expence (10 Days) Bar Chart */}
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

          {/* SVG 10-Day Bar Chart */}
          <div className="h-64 w-full flex items-end justify-between gap-2 pt-6 pb-2 px-2 relative border-b border-slate-200 dark:border-slate-700">
            {/* Horizontal Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
              <div className="border-b border-slate-400 w-full"><span className="text-[9px] text-slate-400 pl-1">160k</span></div>
              <div className="border-b border-slate-400 w-full"><span className="text-[9px] text-slate-400 pl-1">100k</span></div>
              <div className="border-b border-slate-400 w-full"><span className="text-[9px] text-slate-400 pl-1">50k</span></div>
              <div className="border-b border-slate-400 w-full"><span className="text-[9px] text-slate-400 pl-1">0</span></div>
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
                      className="w-2.5 sm:w-3 bg-emerald-600 rounded-t-sm transition-all duration-500"
                      style={{ height: `${day.income > 0 ? Math.max(6, incPct) : 2}%` }}
                    ></div>

                    {/* Expense Bar (Red) */}
                    <div
                      className="w-2.5 sm:w-3 bg-rose-600 rounded-t-sm transition-all duration-500"
                      style={{ height: `${day.expense > 0 ? Math.max(6, expPct) : 2}%` }}
                    ></div>
                  </div>

                  {/* Date Label */}
                  <span className="text-[8px] sm:text-[9px] font-bold text-slate-500 mt-2 truncate">
                    {day.date}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 💳 SECTION 2: 3 BOTTOM CARDS (Total Active, New Admissions, Promoted) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1: Total Active Students (Olive/Dark Brown Gradient) */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-stone-800 to-amber-950 text-white shadow-lg space-y-4 border border-stone-700/60">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-stone-200">Total Active Students</span>
            </div>
            <span className="text-3xl font-black font-mono text-white">
              {stats?.totalStudents || 567}
            </span>
          </div>
          <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs font-bold text-stone-300">
            <span>TOTAL ACTIVE</span>
            <span className="text-emerald-400 font-bold">100% Enrolled</span>
          </div>
        </div>

        {/* Card 2: Total New Students (Vibrant Emerald Gradient) */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-600 to-green-800 text-white shadow-lg space-y-4 border border-emerald-500/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                <UserPlus className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-emerald-100">Total New Students</span>
            </div>
            <span className="text-3xl font-black font-mono text-white">
              147
            </span>
          </div>
          <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs font-bold text-emerald-200">
            <span>NEW ADMISSIONS</span>
            <span className="text-emerald-100 font-bold">Session 2026-27</span>
          </div>
        </div>

        {/* Card 3: Total Promoted Students (Charcoal Black Gradient) */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-lg space-y-4 border border-slate-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-slate-300">Total Promoted Students</span>
            </div>
            <span className="text-3xl font-black font-mono text-white">
              420
            </span>
          </div>
          <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs font-bold text-slate-400">
            <span>PREVIOUS ADMISSIONS</span>
            <span className="text-indigo-300 font-bold">Rolled Forward</span>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 📅 SECTION 3: WEEKEND ATTENDANCE INSPECTION & 4 ATTENDANCE SUMMARY CARDS */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div>
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
              Weekend Attendance Inspection
            </h3>
            <p className="text-xs text-slate-400 font-semibold mt-0.5">Biometric Employee vs Student Campus Turnout</p>
          </div>
          <div className="flex items-center gap-3 text-xs font-bold">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-600"></span>
              <span className="text-slate-700 dark:text-slate-300">Employee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-blue-600"></span>
              <span className="text-slate-700 dark:text-slate-300">Student</span>
            </div>
          </div>
        </div>

        {/* Multi-Day Attendance Graph Line */}
        <div className="h-44 w-full flex items-end justify-between gap-4 pt-4 pb-2 px-4 relative border-b border-slate-200 dark:border-slate-700">
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
            <div className="border-b border-slate-400 w-full"><span className="text-[9px] text-slate-400">100%</span></div>
            <div className="border-b border-slate-400 w-full"><span className="text-[9px] text-slate-400">50%</span></div>
            <div className="border-b border-slate-400 w-full"><span className="text-[9px] text-slate-400">0%</span></div>
          </div>

          {attendanceInspection.map((att, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group relative">
              <div className="flex items-end gap-2 w-full justify-center h-full">
                {/* Employee Bar */}
                <div
                  className="w-3.5 bg-rose-600 rounded-t-md transition-all"
                  style={{ height: `${att.isSunday ? 0 : (att.employeePresent / att.employeeTotal) * 100}%` }}
                ></div>
                {/* Student Bar */}
                <div
                  className="w-3.5 bg-blue-600 rounded-t-md transition-all"
                  style={{ height: `${att.isSunday ? 0 : att.studentRate}%` }}
                ></div>
              </div>
              <span className="text-[9px] font-bold text-slate-500 mt-2">
                {att.date}
              </span>
            </div>
          ))}
        </div>

        {/* 4 Attendance Strength Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          
          {/* Card 1: Total Strength (Dark Blue) */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-800 to-indigo-950 text-white flex items-center justify-between shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-200">Total Strength</h4>
                <p className="text-lg font-black font-mono">{stats?.totalStudents || 567}</p>
              </div>
            </div>
            <div className="text-right text-[11px] text-slate-300 font-semibold space-y-0.5">
              <div>Boys: <strong className="text-white">{stats?.boysCount || 318}</strong></div>
              <div>Girls: <strong className="text-white">{stats?.girlsCount || 249}</strong></div>
            </div>
          </div>

          {/* Card 2: Total Present (Ocean Blue Gradient) */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-800 text-white flex items-center justify-between shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase text-teal-100">Total Present</h4>
                <p className="text-lg font-black font-mono">{stats?.presentStudentsToday || 541}</p>
              </div>
            </div>
            <div className="text-right text-[11px] text-teal-100 font-semibold space-y-0.5">
              <div>Boys: <strong className="text-white">{Math.round((stats?.boysCount || 318) * 0.954)}</strong></div>
              <div>Girls: <strong className="text-white">{Math.round((stats?.girlsCount || 249) * 0.954)}</strong></div>
            </div>
          </div>

          {/* Card 3: Total Absent (Orange/Pink Gradient) */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-600 to-rose-600 text-white flex items-center justify-between shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <UserX className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase text-amber-100">Total Absent</h4>
                <p className="text-lg font-black font-mono">{stats?.absentStudentsToday || 26}</p>
              </div>
            </div>
            <div className="text-right text-[11px] text-amber-100 font-semibold space-y-0.5">
              <div>Boys: <strong className="text-white">{(stats?.boysCount || 318) - Math.round((stats?.boysCount || 318) * 0.954)}</strong></div>
              <div>Girls: <strong className="text-white">{(stats?.girlsCount || 249) - Math.round((stats?.girlsCount || 249) * 0.954)}</strong></div>
            </div>
          </div>

          {/* Card 4: Attendance Not Marked (Dark Charcoal Alert) */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-stone-900 text-white flex items-center justify-between shadow border border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-300">Not Marked</h4>
                <p className="text-lg font-black font-mono text-emerald-400">0</p>
              </div>
            </div>
            <div className="text-right text-[11px] text-slate-400 font-semibold space-y-0.5">
              <div>Boys: <strong className="text-white">0</strong></div>
              <div>Girls: <strong className="text-white">0</strong></div>
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

        {/* 4 Staff Strength Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
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

          {/* Card 4: Parents (Magenta/Pink Gradient) */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-pink-600 to-rose-700 text-white space-y-3 shadow">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black font-mono">571</span>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-pink-100">Parents</h4>
              <p className="text-[10px] text-pink-200 font-semibold mt-0.5">TOTAL STRENGTH</p>
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

        {/* 2. Annual Fee Summary (Spline Area Wave Chart) */}
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

          {/* Spline Bell Curves SVG Graphic */}
          <div className="h-56 w-full relative pt-2">
            <svg className="w-full h-full" viewBox="0 0 700 200" preserveAspectRatio="none">
              {/* Horizontal Grid lines */}
              <line x1="0" y1="20" x2="700" y2="20" stroke="#94a3b8" strokeDasharray="3 3" opacity="0.2" />
              <line x1="0" y1="70" x2="700" y2="70" stroke="#94a3b8" strokeDasharray="3 3" opacity="0.2" />
              <line x1="0" y1="120" x2="700" y2="120" stroke="#94a3b8" strokeDasharray="3 3" opacity="0.2" />
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
            <div className="flex justify-between text-[10px] font-bold text-slate-400 px-4 -mt-2">
              {['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'].map(m => (
                <span key={m}>{m}</span>
              ))}
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

    </div>
  );
};

export default DashboardPage;
