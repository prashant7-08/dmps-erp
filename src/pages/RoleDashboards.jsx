import React, { useState } from 'react';
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
  BarChart2,
  CheckSquare,
  Plus,
  Zap,
  Tag,
  Eye,
  Receipt,
  Phone,
  MessageSquare,
  AlertTriangle,
  QrCode,
  Download
} from 'lucide-react';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';

// =========================================================================
// 1. 💼 ACCOUNTANT DASHBOARD VIEW
// =========================================================================
export const AccountantDashboardView = ({ stats, setActiveTab, onOpenAI, currentTime, schoolInfo }) => {
  const classDues = [
    { name: 'Nursery', strength: 54, tuition: '₹3,24,000', transport: '₹1,62,000', paid: '₹84,000', balance: '₹4,02,000' },
    { name: 'Class 1st', strength: 57, tuition: '₹4,56,000', transport: '₹2,28,000', paid: '₹1,12,000', balance: '₹5,72,000' },
    { name: 'Class 5th', strength: 49, tuition: '₹5,88,000', transport: '₹2,94,000', paid: '₹1,45,000', balance: '₹7,37,000' },
    { name: 'Class 8th', strength: 23, tuition: '₹3,45,000', transport: '₹1,72,500', paid: '₹92,000', balance: '₹4,25,500' },
    { name: 'Class 10th', strength: 19, tuition: '₹3,42,000', transport: '₹1,71,000', paid: '₹1,20,000', balance: '₹3,93,000' }
  ];

  const recentTransactions = [
    { id: 'RCP-2026-089', student: 'Aarav Sharma', class: 'Class 5th-A', amount: '₹7,500', mode: 'Cash', date: 'Today, 10:45 AM', cashier: 'Accountant' },
    { id: 'RCP-2026-088', student: 'Priya Verma', class: 'Class 8th-B', amount: '₹5,200', mode: 'UPI / QR', date: 'Today, 09:30 AM', cashier: 'Accountant' },
    { id: 'RCP-2026-087', student: 'Rohan Rajput', class: 'Class 1st-A', amount: '₹6,700', mode: 'Cash', date: 'Yesterday', cashier: 'Accountant' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Role Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-950 p-6 rounded-3xl text-white shadow-lg border border-emerald-500/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400 text-emerald-200 text-xs font-bold">
              💼 Finance & Cashier Control
            </span>
            <span className="text-xs text-slate-300 font-mono">🕒 {currentTime}</span>
          </div>
          <h2 className="text-2xl font-black font-serif">Accountant Financial Command Center</h2>
          <p className="text-xs text-emerald-200/90 mt-0.5">
            Real-time fee collection, POS counters, outstanding dues, and cashbook journal.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('fees')}
            className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 hover:scale-105 transition-all"
          >
            <CreditCard className="w-4 h-4" /> ⚡ Collect Fee (POS)
          </button>
          <button
            onClick={onOpenAI}
            className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold border border-white/20 flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-amber-300" /> Fee Bot
          </button>
        </div>
      </div>

      {/* 4 Financial Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Today's Fee Collection"
          value="₹19,400"
          subtitle="3 Invoices cleared today"
          icon={CreditCard}
          trend={{ value: 12.5, isPositive: true }}
          variant="primary"
        />
        <StatCard
          title="Total Session Collection"
          value="₹10,33,100"
          subtitle="100% verified in bank/cash"
          icon={DollarSign}
          variant="secondary"
        />
        <StatCard
          title="Total Outstanding Dues"
          value="₹1,05,27,785"
          subtitle="Across 567 registered students"
          icon={AlertTriangle}
          variant="warning"
        />
        <StatCard
          title="Daybook Cash Balance"
          value="₹42,500"
          subtitle="Net in-hand closing cash"
          icon={Receipt}
          variant="info"
        />
      </div>

      {/* Quick Action Buttons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button
          onClick={() => setActiveTab('fees')}
          className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 shadow-xs flex items-center gap-3 transition-all hover:scale-102"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">💳</div>
          <div className="text-left">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Fee Counter (POS)</h4>
            <p className="text-[10px] text-slate-500">Generate receipt</p>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('fees')}
          className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 shadow-xs flex items-center gap-3 transition-all hover:scale-102"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">📋</div>
          <div className="text-left">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Due List & Defaulters</h4>
            <p className="text-[10px] text-slate-500">Send WhatsApp reminder</p>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('inventory')}
          className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500 shadow-xs flex items-center gap-3 transition-all hover:scale-102"
        >
          <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">📥</div>
          <div className="text-left">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">New Deposit Entry</h4>
            <p className="text-[10px] text-slate-500">Add bank/cash credit</p>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('inventory')}
          className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-rose-500 shadow-xs flex items-center gap-3 transition-all hover:scale-102"
        >
          <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">📤</div>
          <div className="text-left">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">New Expense Voucher</h4>
            <p className="text-[10px] text-slate-500">School expenditure</p>
          </div>
        </button>
      </div>

      {/* Class-wise Dues Summary Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div>
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
              Class-wise Outstanding Dues Breakdown
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">Session 2026-27 active student receivables</p>
          </div>
          <button
            onClick={() => setActiveTab('fees')}
            className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
          >
            View All 16 Classes <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                <th className="p-3">Class</th>
                <th className="p-3">Students</th>
                <th className="p-3">Tuition Expected</th>
                <th className="p-3">Transport Expected</th>
                <th className="p-3 text-emerald-600">Total Collected</th>
                <th className="p-3 text-rose-600">Pending Balance</th>
                <th className="p-3 text-right">Quick Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
              {classDues.map((cd, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="p-3 font-bold text-slate-900 dark:text-white">{cd.name}</td>
                  <td className="p-3 font-mono">{cd.strength}</td>
                  <td className="p-3 font-mono text-slate-600">{cd.tuition}</td>
                  <td className="p-3 font-mono text-slate-600">{cd.transport}</td>
                  <td className="p-3 font-mono font-bold text-emerald-600">{cd.paid}</td>
                  <td className="p-3 font-mono font-black text-rose-600">{cd.balance}</td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => setActiveTab('fees')}
                      className="px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg text-[10px] font-bold inline-flex items-center gap-1"
                    >
                      <MessageSquare className="w-3 h-3" /> Remind
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Cashbook Receipts */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <Receipt className="w-4 h-4 text-emerald-600" /> Recent Receipts Generated Today
          </h3>
          <span className="text-xs text-slate-500 font-medium">Auto-Synced with Office Journal</span>
        </div>

        <div className="space-y-2.5">
          {recentTransactions.map((tx, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center font-mono text-xs">
                  ₹
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{tx.student} ({tx.class})</h4>
                  <p className="text-[10px] text-slate-500 font-mono">{tx.id} • {tx.mode} • {tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-mono font-black text-emerald-600 text-sm block">{tx.amount}</span>
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">Paid</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 2. 👩‍🏫 TEACHER DASHBOARD VIEW
// =========================================================================
export const TeacherDashboardView = ({ stats, setActiveTab, onOpenAI, currentTime, schoolInfo }) => {
  const timetable = [
    { period: '1st Period', time: '08:00 - 08:45 AM', subject: 'Mathematics', class: 'Class 5th-A', room: 'Room 102' },
    { period: '2nd Period', time: '08:45 - 09:30 AM', subject: 'General Science', class: 'Class 8th-B', room: 'Room 204' },
    { period: '3rd Period', time: '09:30 - 10:15 AM', subject: 'English Grammar', class: 'Class 5th-A', room: 'Room 102' },
    { period: '4th Period', time: '10:15 - 11:00 AM', subject: 'Hindi Literature', class: 'Class 6th', room: 'Room 108' },
    { period: 'Break', time: '11:00 - 11:30 AM', subject: 'Recess / Tiffin Break', class: 'Staff Room', room: '--' },
    { period: '5th Period', time: '11:30 - 12:15 PM', subject: 'Computer Science & AI', class: 'Computer Lab', room: 'Lab 1' },
    { period: '6th Period', time: '12:15 - 01:00 PM', subject: 'Social Studies', class: 'Class 7th', room: 'Room 201' },
    { period: '7th Period', time: '01:00 - 01:45 PM', subject: 'Sports & Drill', class: 'Playground', room: 'Ground' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Role Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 p-6 rounded-3xl text-white shadow-lg border border-indigo-500/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/25 border border-indigo-400 text-indigo-200 text-xs font-bold">
              👩‍🏫 Faculty Member Workspace
            </span>
            <span className="text-xs text-slate-300 font-mono">🕒 {currentTime}</span>
          </div>
          <h2 className="text-2xl font-black font-serif">Teacher Academic & Classroom Hub</h2>
          <p className="text-xs text-indigo-200/90 mt-0.5">
            Class teacher of <strong>Class 5th-A</strong> • Senior Campus (Jargwan)
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('attendance')}
            className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 hover:scale-105 transition-all"
          >
            <CheckSquare className="w-4 h-4" /> Take Attendance Today
          </button>
          <button
            onClick={() => setActiveTab('homework')}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 hover:scale-105 transition-all"
          >
            <BookOpen className="w-4 h-4" /> Assign Homework
          </button>
        </div>
      </div>

      {/* 4 Academic Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="My Assigned Class"
          value="Class 5th-A"
          subtitle="49 Students Enrolled"
          icon={GraduationCap}
          variant="primary"
        />
        <StatCard
          title="Today's Attendance"
          value="47 / 49"
          subtitle="95.9% Class Turnout"
          icon={UserCheck}
          variant="secondary"
        />
        <StatCard
          title="My Biometric Punch"
          value="07:42 AM"
          subtitle="Present (Secureye Machine)"
          icon={Clock}
          variant="info"
        />
        <StatCard
          title="Homework to Review"
          value="6 Pending"
          subtitle="Science Chapter 4"
          icon={FileText}
          variant="warning"
        />
      </div>

      {/* Today's Timetable Schedule */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div>
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-600" /> Today's Class Period Schedule (Timetable)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">Assigned teaching schedule for Tuesday</p>
          </div>
          <button
            onClick={() => setActiveTab('timetable')}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-700"
          >
            Full Timetable →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {timetable.map((p, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border transition-all ${
                p.period === 'Break'
                  ? 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/40'
                  : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 hover:border-indigo-400'
              }`}
            >
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 font-mono">
                  {p.period}
                </span>
                <span className="text-[10px] font-bold text-slate-500 font-mono">{p.time}</span>
              </div>
              <h4 className="text-xs font-black text-slate-900 dark:text-white">{p.subject}</h4>
              <p className="text-[11px] text-slate-500 mt-1 font-medium">{p.class} • {p.room}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Grading & Salary Shortcuts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <h4 className="text-xs font-black uppercase text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500" /> Upcoming Examinations & Marks Entry
          </h4>
          <p className="text-xs text-slate-500">
            Term 1 Half-Yearly Examinations scheduled from <strong>15 September 2026</strong>.
          </p>
          <button
            onClick={() => setActiveTab('examination')}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold"
          >
            Enter Marks & Grades
          </button>
        </div>

        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <h4 className="text-xs font-black uppercase text-slate-900 dark:text-white flex items-center gap-2">
            <Receipt className="w-4 h-4 text-emerald-500" /> My Monthly Attendance & Salary Slip
          </h4>
          <p className="text-xs text-slate-500">
            August 2026: <strong>26 Active Days (100% Pay)</strong> • Secureye S-FB3K Verified.
          </p>
          <button
            onClick={() => setActiveTab('payroll')}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold"
          >
            Download Salary Slip
          </button>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 3. 🚌 TRANSPORT MANAGER DASHBOARD VIEW
// =========================================================================
export const TransportDashboardView = ({ stats, setActiveTab, onOpenAI, currentTime }) => {
  const routes = [
    { route: 'Route #1 (Senior Campus)', vehicle: 'UP-81-AB-1024 (Bus 1)', driver: 'Sonu Kumar (Past) / Hemraj', stops: 9, students: 68, status: 'On Duty' },
    { route: 'Route #2 (Barheti Branch)', vehicle: 'UP-81-BC-2048 (Bus 2)', driver: 'Rakesh Sharma', stops: 8, students: 54, status: 'On Duty' },
    { route: 'Route #3 (PAC Kids School)', vehicle: 'UP-81-CD-3096 (Van 1)', driver: 'Mukesh Kumar', stops: 7, students: 42, status: 'On Duty' },
    { route: 'Route #4 (Debai Town Direct)', vehicle: 'UP-81-DE-4120 (Bus 3)', driver: 'Satish Chandra', stops: 10, students: 85, status: 'On Duty' },
    { route: 'Route #5 (Kaliyanpur Road)', vehicle: 'UP-81-EF-5210 (Van 2)', driver: 'Dinesh Kumar', stops: 7, students: 48, status: 'On Duty' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="bg-gradient-to-r from-amber-900 via-orange-950 to-slate-950 p-6 rounded-3xl text-white shadow-lg border border-amber-500/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/25 border border-amber-400 text-amber-200 text-xs font-bold">
              🚌 Fleet & Stoppage Master
            </span>
            <span className="text-xs text-slate-300 font-mono">🕒 {currentTime}</span>
          </div>
          <h2 className="text-2xl font-black font-serif">Transport & Fleet Management Hub</h2>
          <p className="text-xs text-amber-200/90 mt-0.5">
            Real-time bus tracking, 41 stoppages, driver roster, and transport fee allocation.
          </p>
        </div>
        <button
          onClick={() => setActiveTab('transport')}
          className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5"
        >
          <Bus className="w-4 h-4" /> Manage Routes & Fleet
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Active Bus Routes" value="5 Routes" subtitle="Covering 41 Stoppages" icon={Bus} variant="primary" />
        <StatCard title="Transport Students" value="320+ Students" subtitle="Allocated across 5 buses" icon={Users} variant="secondary" />
        <StatCard title="Fleet Vehicles" value="5 Buses / Vans" subtitle="All GPS enabled" icon={ShieldCheck} variant="info" />
        <StatCard title="Total Transport Expected" value="₹36,49,085" subtitle="Session 2026-27" icon={DollarSign} variant="warning" />
      </div>

      {/* Routes Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
          Active School Bus Routes & Driver Roster
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                <th className="p-3">Route Name</th>
                <th className="p-3">Vehicle Number</th>
                <th className="p-3">Driver Name</th>
                <th className="p-3">Stops</th>
                <th className="p-3 font-bold">Students</th>
                <th className="p-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
              {routes.map((r, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="p-3 font-bold text-slate-900 dark:text-white">{r.route}</td>
                  <td className="p-3 font-mono text-indigo-600">{r.vehicle}</td>
                  <td className="p-3">{r.driver}</td>
                  <td className="p-3 font-mono">{r.stops} Stops</td>
                  <td className="p-3 font-mono font-bold text-emerald-600">{r.students}</td>
                  <td className="p-3 text-right">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 4. 📚 LIBRARIAN DASHBOARD VIEW
// =========================================================================
export const LibrarianDashboardView = ({ stats, setActiveTab, onOpenAI, currentTime }) => {
  const overdueBooks = [
    { title: 'NCERT Mathematics Exemplar Class 10', student: 'Rohan Sharma', roll: '12', class: 'Class 10th-A', due: '28-Aug-2026', fine: '₹20' },
    { title: 'Concepts of Physics (Vol 1)', student: 'Amit Kumar', roll: '04', class: 'Class 11th-Sci', due: '25-Aug-2026', fine: '₹50' },
    { title: 'The Story of My Experiments with Truth', student: 'Sneha Verma', roll: '19', class: 'Class 8th-B', due: '20-Aug-2026', fine: '₹100' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-950 p-6 rounded-3xl text-white shadow-lg border border-purple-500/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-purple-500/25 border border-purple-400 text-purple-200 text-xs font-bold">
              📚 Library & Store Hub
            </span>
            <span className="text-xs text-slate-300 font-mono">🕒 {currentTime}</span>
          </div>
          <h2 className="text-2xl font-black font-serif">School Library Catalog & Circulation</h2>
          <p className="text-xs text-purple-200/90 mt-0.5">
            Book issue/return, catalog management, barcode tracking, and inventory store.
          </p>
        </div>
        <button
          onClick={() => setActiveTab('library')}
          className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5"
        >
          <BookMarked className="w-4 h-4" /> Issue / Return Books
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Library Titles" value="3,450 Volumes" subtitle="All academic subjects" icon={BookMarked} variant="primary" />
        <StatCard title="Currently Issued" value="142 Books" subtitle="To students & staff" icon={Users} variant="secondary" />
        <StatCard title="Issued Today" value="28 Books" subtitle="Daily circulation" icon={Calendar} variant="info" />
        <StatCard title="Overdue Returns" value="14 Books" subtitle="Fine calculation active" icon={AlertCircle} variant="warning" />
      </div>

      {/* Overdue Books List */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-rose-500" /> Overdue Return Pending Books
        </h3>
        <div className="space-y-2.5">
          {overdueBooks.map((b, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 flex items-center justify-between text-xs">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">{b.title}</h4>
                <p className="text-[11px] text-slate-500">Issued to: <strong>{b.student}</strong> ({b.class}, Roll #{b.roll}) • Due: {b.due}</p>
              </div>
              <div className="text-right">
                <span className="font-mono font-bold text-rose-600 block">Fine: {b.fine}</span>
                <button
                  onClick={() => setActiveTab('library')}
                  className="px-2 py-0.5 bg-rose-600 text-white rounded-md text-[10px] font-bold mt-1"
                >
                  Return Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 5. 👨‍👩‍👧 PARENT DASHBOARD VIEW
// =========================================================================
export const ParentDashboardView = ({ stats, setActiveTab, onOpenAI, currentTime, schoolInfo }) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 p-6 rounded-3xl text-white shadow-lg border border-indigo-500/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400 text-emerald-200 text-xs font-bold">
              👨‍👩‍👧 Parent Portal
            </span>
            <span className="text-xs text-slate-300 font-mono">🕒 {currentTime}</span>
          </div>
          <h2 className="text-2xl font-black font-serif">Welcome, Parent of Aarav Sharma</h2>
          <p className="text-xs text-indigo-200/90 mt-0.5">
            Admission No: <strong>ADM-2026-084</strong> • Class 5th-A • Senior Campus
          </p>
        </div>
        <button
          onClick={() => setActiveTab('fees')}
          className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5"
        >
          <CreditCard className="w-4 h-4" /> Pay Fee Online (UPI/QR)
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="August Attendance" value="96.4%" subtitle="24/25 Working Days Present" icon={UserCheck} variant="primary" />
        <StatCard title="Fee Due Balance" value="₹1,500" subtitle="Due by 10th September" icon={CreditCard} variant="warning" />
        <StatCard title="Last Exam Score" value="89.5%" subtitle="Unit Test 1 (Grade A+)" icon={Award} variant="secondary" />
        <StatCard title="School Bus Status" value="Route #1" subtitle="Driver: Hemraj (Live On-Route)" icon={Bus} variant="info" />
      </div>

      {/* Homework & Circulars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
          <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-600" /> Today's Assigned Homework
          </h3>
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
              <p className="font-bold text-slate-900 dark:text-white">Mathematics: Chapter 5 Fractions</p>
              <p className="text-[11px] text-slate-500">Complete Exercise 5.2 Questions 1 to 8 in notebook.</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
              <p className="font-bold text-slate-900 dark:text-white">Science: Plant Kingdom</p>
              <p className="text-[11px] text-slate-500">Draw diagram of flower parts on page 44.</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
          <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <Bell className="w-4 h-4 text-amber-500" /> School Circulars & Notices
          </h3>
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40">
              <p className="font-bold text-amber-950 dark:text-amber-200">Half-Yearly Examination Schedule</p>
              <p className="text-[11px] text-amber-800 dark:text-amber-300">Term 1 exams will commence from 15 September 2026.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 6. 🎓 STUDENT DASHBOARD VIEW
// =========================================================================
export const StudentDashboardView = ({ stats, setActiveTab, onOpenAI, currentTime }) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-950 p-6 rounded-3xl text-white shadow-lg border border-indigo-500/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/25 border border-indigo-400 text-indigo-200 text-xs font-bold">
              🎓 Student Learning Desk
            </span>
            <span className="text-xs text-slate-300 font-mono">🕒 {currentTime}</span>
          </div>
          <h2 className="text-2xl font-black font-serif">Welcome, Student Portal</h2>
          <p className="text-xs text-indigo-200/90 mt-0.5">
            Class 5th-A • Roll No. 12 • Dadheech Memorial Public School
          </p>
        </div>
        <button
          onClick={() => setActiveTab('homework')}
          className="px-4 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5"
        >
          <BookOpen className="w-4 h-4" /> View My Homework
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="My Attendance" value="96.4%" subtitle="24 Days Present" icon={UserCheck} variant="primary" />
        <StatCard title="Issued Library Books" value="2 Books" subtitle="Due: 10 Sept 2026" icon={BookMarked} variant="secondary" />
        <StatCard title="Pending Homework" value="3 Tasks" subtitle="Maths, Science, Hindi" icon={FileText} variant="warning" />
        <StatCard title="Next Term Exam" value="15 Sept" subtitle="Term 1 Half-Yearly" icon={Award} variant="info" />
      </div>

      {/* Daily Periods & Subject Timetable */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
          <Calendar className="w-4 h-4 text-indigo-600" /> Today's Subject Periods (Class 5th-A)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border">
            <span className="text-[10px] text-slate-400 font-mono">08:00 AM</span>
            <p className="font-bold text-slate-900 dark:text-white mt-1">1. Mathematics</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border">
            <span className="text-[10px] text-slate-400 font-mono">08:45 AM</span>
            <p className="font-bold text-slate-900 dark:text-white mt-1">2. Science</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border">
            <span className="text-[10px] text-slate-400 font-mono">09:30 AM</span>
            <p className="font-bold text-slate-900 dark:text-white mt-1">3. English</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border">
            <span className="text-[10px] text-slate-400 font-mono">10:15 AM</span>
            <p className="font-bold text-slate-900 dark:text-white mt-1">4. Hindi</p>
          </div>
        </div>
      </div>
    </div>
  );
};
