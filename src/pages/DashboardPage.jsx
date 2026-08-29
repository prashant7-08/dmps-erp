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
  Tag
} from 'lucide-react';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';
import schoolService from '../services/schoolService';

export const DashboardPage = ({ currentRole = 'Super Admin', setActiveTab, onOpenAI }) => {
  const schoolInfo = schoolService.getSchoolInfo();
  const students = schoolService.getStudents();
  const teachers = schoolService.getTeachers();
  const invoices = schoolService.getFeeInvoices();
  const notices = schoolService.getNotices();
  const exams = schoolService.getExams();
  const events = schoolService.getEvents();

  // Task & Action Planner State
  const [tasks, setTasks] = useState(schoolService.getTasks());
  const [taskFilter, setTaskFilter] = useState('All');
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('today');
  const [newTaskCategory, setNewTaskCategory] = useState('Academics');
  const [newTaskDue, setNewTaskDue] = useState('Today');

  const handleToggleTask = (id) => {
    schoolService.toggleTaskStatus(id);
    setTasks([...schoolService.getTasks()]);
  };

  const handleDeleteTask = (id) => {
    schoolService.deleteTask(id);
    setTasks([...schoolService.getTasks()]);
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
    setTasks([...schoolService.getTasks()]);
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

  // Calculated Stats
  const totalStudents = students.length || 1450;
  const totalTeachers = teachers.length || 84;
  const totalDueFees = invoices.reduce((acc, inv) => acc + (inv.dueAmount || 0), 0);
  const totalCollectedFees = invoices.reduce((acc, inv) => acc + (inv.paidAmount || 0), 0);
  const attendanceRate = 94.8;

  // Live Clock
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Class-wise Analytics Data
  const classAnalytics = [
    { className: 'Class 1', students: 120, boys: 64, girls: 56, attendance: 96, color: 'bg-indigo-500' },
    { className: 'Class 2', students: 115, boys: 60, girls: 55, attendance: 95, color: 'bg-blue-500' },
    { className: 'Class 3', students: 125, boys: 68, girls: 57, attendance: 94, color: 'bg-cyan-500' },
    { className: 'Class 4', students: 110, boys: 58, girls: 52, attendance: 96, color: 'bg-teal-500' },
    { className: 'Class 5', students: 130, boys: 70, girls: 60, attendance: 95, color: 'bg-emerald-500' },
    { className: 'Class 6', students: 128, boys: 67, girls: 61, attendance: 93, color: 'bg-amber-500' },
    { className: 'Class 7', students: 122, boys: 65, girls: 57, attendance: 94, color: 'bg-orange-500' },
    { className: 'Class 8', students: 135, boys: 72, girls: 63, attendance: 95, color: 'bg-rose-500' },
    { className: 'Class 9', students: 140, boys: 75, girls: 65, attendance: 92, color: 'bg-purple-500' },
    { className: 'Class 10', students: 145, boys: 78, girls: 67, attendance: 97, color: 'bg-indigo-600' },
    { className: 'Class 11', students: 90, boys: 48, girls: 42, attendance: 91, color: 'bg-violet-600' },
    { className: 'Class 12', students: 90, boys: 47, girls: 43, attendance: 98, color: 'bg-pink-600' }
  ];

  // Monthly Attendance Trend
  const monthlyTrend = [
    { month: 'Apr', pct: 96 },
    { month: 'May', pct: 95 },
    { month: 'Jul', pct: 93 },
    { month: 'Aug', pct: 94 },
    { month: 'Sep', pct: 97 },
    { month: 'Oct', pct: 95 },
    { month: 'Nov', pct: 96 },
    { month: 'Dec', pct: 92 },
    { month: 'Jan', pct: 94 },
    { month: 'Feb', pct: 98 }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">

      {/* 🏫 DMPS Master School Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 p-6 sm:p-8 text-white shadow-xl border border-indigo-500/30">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/25 border border-indigo-400/40 text-indigo-200 text-xs font-bold shadow-inner">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                Session {schoolInfo.academicSession}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                CBSE Affiliated • {schoolInfo.affiliationNo}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-mono font-semibold">
                <Clock className="w-3 h-3 text-indigo-300" /> {currentTime}
              </span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2">
                {schoolInfo.name}
              </h2>
              <p className="text-xs sm:text-sm text-indigo-200/90 mt-1 font-medium leading-relaxed">
                Welcome back, <strong className="text-white font-bold">{currentRole}</strong> | Academic Management & Institutional Operations Portal
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

      {/* 📊 Top Metric KPI Stat Cards (6 Cards Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard
          title="Total Students"
          value={totalStudents.toLocaleString('en-IN')}
          subtext="Boys: 780 | Girls: 670"
          icon={GraduationCap}
          trend="up"
          trendValue="+12% Term"
          color="indigo"
          delay={0.05}
        />
        <StatCard
          title="Teaching Staff"
          value={totalTeachers.toString()}
          subtext="7 Academic Depts"
          icon={Users}
          trend="up"
          trendValue="100% Active"
          color="purple"
          delay={0.1}
        />
        <StatCard
          title="Daily Attendance"
          value={`${attendanceRate}%`}
          subtext="96% On-Time Arrival"
          icon={CheckCircle2}
          trend="up"
          trendValue="Above Benchmark"
          color="emerald"
          delay={0.15}
        />
        <StatCard
          title="Today Collected"
          value="₹1,85,400"
          subtext="42 POS / UPI Txns"
          icon={DollarSign}
          trend="up"
          trendValue="+24% Today"
          color="amber"
          delay={0.2}
        />
        <StatCard
          title="Fee Dues"
          value={`₹${(totalDueFees / 1000).toFixed(0)}k`}
          subtext="Pending Invoices"
          icon={CreditCard}
          trend="down"
          trendValue="< 5% Defaulters"
          color="rose"
          delay={0.25}
        />
        <StatCard
          title="Library Books"
          value="4,850"
          subtext="92 Issued Active"
          icon={BookMarked}
          trend="up"
          trendValue="Catalog Ready"
          color="cyan"
          delay={0.3}
        />
      </div>

      {/* 📈 NEW: Class-Wise Analytics & Visual Graphical Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

        {/* Class-wise Strength Visual Bar Chart (2 Columns) */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-indigo-600" /> Class-Wise Student Enrollment & Strength Distribution
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Enrolment statistics across Classes 1 to 12 with gender ratio</p>
            </div>
            <span className="text-xs font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 rounded-xl border border-indigo-200 dark:border-indigo-800">
              1,450 Total Enrolled
            </span>
          </div>

          {/* Visual Bar Progression Chart */}
          <div className="space-y-3.5">
            {classAnalytics.map((cls, idx) => {
              const maxStrength = 150;
              const barWidthPct = Math.round((cls.students / maxStrength) * 100);
              return (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-800 dark:text-slate-200 w-20">{cls.className}</span>
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
                      className={`h-full ${cls.color} rounded-full transition-all duration-700`}
                      style={{ width: `${barWidthPct}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Monthly Attendance & House Distribution (1 Column) */}
        <div className="space-y-6">

          {/* Monthly Attendance Trend Line Chart */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-emerald-600" /> Monthly Attendance Trend
                </h3>
                <p className="text-[11px] text-slate-500">Average % across all terms</p>
              </div>
              <Badge variant="success">94.8% Avg</Badge>
            </div>

            <div className="grid grid-cols-5 gap-2 pt-2">
              {monthlyTrend.map((m, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-center">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">{m.month}</span>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-12 rounded-lg flex items-end p-0.5">
                    <div
                      className="w-full bg-emerald-500 rounded-md"
                      style={{ height: `${(m.pct - 80) * 5}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] font-black text-slate-800 dark:text-slate-200">{m.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* House Strength Distribution */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-600" /> School Houses Distribution
            </h3>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
                <span className="font-bold text-rose-700 dark:text-rose-300">🔥 Phoenix (Red)</span>
                <p className="text-lg font-black text-rose-900 dark:text-rose-100 mt-1">380</p>
                <span className="text-[10px] text-rose-500">Students</span>
              </div>
              <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
                <span className="font-bold text-blue-700 dark:text-blue-300">🐉 Dragons (Blue)</span>
                <p className="text-lg font-black text-blue-900 dark:text-blue-100 mt-1">365</p>
                <span className="text-[10px] text-blue-500">Students</span>
              </div>
              <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                <span className="font-bold text-amber-700 dark:text-amber-300">🦅 Centaurs (Gold)</span>
                <p className="text-lg font-black text-amber-900 dark:text-amber-100 mt-1">355</p>
                <span className="text-[10px] text-amber-500">Students</span>
              </div>
              <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                <span className="font-bold text-emerald-700 dark:text-emerald-300">🦁 Pegasus (Green)</span>
                <p className="text-lg font-black text-emerald-900 dark:text-emerald-100 mt-1">350</p>
                <span className="text-[10px] text-emerald-500">Students</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* 🚀 Quick Operations Matrix (8 Modern Tile Shortcuts) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" /> Core Administrative Operations
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Direct 1-click access to essential school ERP modules</p>
          </div>
          <Badge variant="primary">All 37 Modules Active</Badge>
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

      {/* 📋 Daily Administrative Task & Action Planner (दैनिक स्कूल कार्य व टास्क प्लानर) */}
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

      {/* Main 2-Column Grid: Left (Recent Activity Table) | Right (Circulars & Events) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

        {/* LEFT 2 COLUMNS: Recent POS Fee Receipts & Exams */}
        <div className="lg:col-span-2 space-y-6">

          {/* Recent Fee Collections Table */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-emerald-600" /> Recent Fee Collections & POS Ledger
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Live transactions processed through the cashier desk</p>
              </div>
              <button
                onClick={() => setActiveTab('fees')}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 flex items-center gap-1"
              >
                Open Fee POS <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                    <th className="p-4">Receipt / Inv No</th>
                    <th className="p-4">Student Name</th>
                    <th className="p-4">Class</th>
                    <th className="p-4">Amount Paid</th>
                    <th className="p-4">Payment Channel</th>
                    <th className="p-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {invoices.slice(0, 4).map(inv => (
                    <tr key={inv.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-4 font-mono font-bold text-slate-900 dark:text-white">{inv.invoiceNo}</td>
                      <td className="p-4 font-bold text-slate-900 dark:text-white">{inv.studentName}</td>
                      <td className="p-4 font-semibold text-slate-600 dark:text-slate-300">{inv.class}</td>
                      <td className="p-4 font-black text-emerald-600 text-sm">₹{inv.paidAmount?.toLocaleString('en-IN')}</td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold text-[10px] border border-indigo-200 dark:border-indigo-800">
                          {inv.paymentMode || 'UPI'}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <Badge variant={inv.status === 'Paid' ? 'success' : 'warning'} size="sm">
                          {inv.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Academic Examinations Overview */}
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
