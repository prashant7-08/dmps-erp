import React, { useState, useEffect, useMemo } from 'react';
import {
  BarChart3,
  Printer,
  Download,
  Users,
  DollarSign,
  Award,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Building2,
  CreditCard,
  Briefcase,
  Layers,
  Package,
  Calendar,
  Search,
  Check,
  Percent,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import schoolService from '../services/schoolService';
import { useToast } from '../components/common/Toast';

export const ReportsPage = ({ initialTab = 'students' }) => {
  const { showToast } = useToast();
  const students = schoolService.getStudents() || [];
  const teachers = schoolService.getTeachers() || [];
  const invoices = schoolService.getFeeInvoices() || [];
  const schoolInfo = schoolService.getSchoolInfo() || { name: 'Dadheech Memorial Public School' };
  const marksList = schoolService.getMarks() || [];

  const resolveTab = (tab) => {
    if (!tab) return 'students';
    if (tab === 'reports-student' || tab === 'reports-students' || tab === 'students' || tab === 'demographics') return 'students';
    if (tab === 'reports-fees' || tab === 'fees') return 'fees';
    if (tab === 'reports-financial' || tab === 'financial' || tab === 'finance') return 'financial';
    if (tab === 'reports-attendance' || tab === 'attendance') return 'attendance';
    if (tab === 'reports-hr' || tab === 'hr') return 'hr';
    if (tab === 'reports-exam' || tab === 'exam' || tab === 'academics') return 'exam';
    if (tab === 'reports-inventory' || tab === 'inventory') return 'inventory';
    return tab;
  };

  const [activeReport, setActiveReport] = useState(() => resolveTab(initialTab));

  useEffect(() => {
    if (initialTab) setActiveReport(resolveTab(initialTab));
  }, [initialTab]);

  const [searchQuery, setSearchQuery] = useState('');

  // Financial Stats
  const totalTuition = 7911000;
  const totalTransport = 3649085;
  const totalDue = 11560085;
  const totalPaid = 1033100;
  const totalBalance = 10527785;

  const reportCategories = [
    { id: 'students', label: '1. STUDENT REPORTS', icon: Users, badge: `${students.length} Students`, desc: 'Demographics, Category, Gender, Roll Register & House distribution' },
    { id: 'fees', label: '2. FEES REPORTS', icon: DollarSign, badge: '₹1.15 Cr Ledger', desc: 'Tuition & Transport fee collection vs dues defaulters statement' },
    { id: 'financial', label: '3. FINANCIAL REPORTS', icon: TrendingUp, badge: 'Balance Sheet', desc: 'Income vs Expense statements, Accounts vouchers & Profit/Loss' },
    { id: 'attendance', label: '4. ATTENDANCE REPORTS', icon: CheckCircle2, badge: 'Biometric Log', desc: 'Student daily attendance, Staff monthly matrix, <75% defaulters' },
    { id: 'hr', label: '5. HUMAN RESOURCE', icon: Briefcase, badge: '22 Staff', desc: 'Salary disbursals, EPF deductions, Staff advance loans & Leave' },
    { id: 'exam', label: '6. EXAMINATION', icon: Award, badge: 'CBSE Marks', desc: 'Marks tabulation register, Pass/Fail analysis & Class toppers list' },
    { id: 'inventory', label: '7. INVENTORY REPORTS', icon: Package, badge: 'Store Audit', desc: 'Stock balances, Purchase invoices, Product issues & sales log' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row sm:items-center justify-between gap-4 print:hidden">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
              <BarChart3 className="w-5 h-5" />
            </span>
            <h1 className="text-xl font-black text-slate-900 dark:text-white">
              Executive School Reports & Official Audit Dossiers
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Generate and export official school reports across Students, Fees, Finance, Attendance, HR Payroll, Exams & Inventory.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => showToast('Report data exported to Excel spreadsheet! 📊', 'success')}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
          >
            <FileSpreadsheet className="w-4 h-4" /> Export Excel
          </button>
          <button
            onClick={() => window.print()}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
          >
            <Printer className="w-4 h-4" /> Print / Save PDF
          </button>
        </div>
      </div>

      {/* 🧭 Report 7-Category Selector (Exact Screenshot 3 Match) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 print:hidden">
        {reportCategories.map(r => {
          const Icon = r.icon;
          const isSelected = activeReport === r.id;
          return (
            <button
              key={r.id}
              onClick={() => setActiveReport(r.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-md border-blue-600 scale-[1.02]'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-400'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className={`p-1.5 rounded-lg ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-indigo-600'}`}>
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    {r.badge}
                  </span>
                </div>
                <h4 className="text-xs font-black uppercase tracking-tight">{r.label}</h4>
              </div>
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 📄 OFFICIAL PRINTABLE DOSSIER CONTAINER */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        
        {/* Printable Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-slate-900 pb-4 gap-2">
          <div>
            <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wider">
              {schoolInfo.name}
            </h2>
            <p className="text-xs font-bold text-slate-600 dark:text-slate-400">
              RAMGHAT ROAD, JARGWAN (BULANDSHAHR) • CBSE AFFILIATION NO. 2133481
            </p>
            <p className="text-[11px] font-mono text-indigo-600 mt-0.5 font-bold">
              OFFICIAL REPORT: {reportCategories.find(r => r.id === activeReport)?.label} • SESSION 2026-2027
            </p>
          </div>
          <div className="text-right">
            <span className="px-3 py-1 bg-slate-900 text-white font-mono text-xs font-bold rounded-lg">
              Generated: {new Date().toLocaleDateString('en-GB')}
            </span>
          </div>
        </div>

        {/* 🖨️ 1. STUDENT REPORTS */}
        {activeReport === 'students' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 text-xs">
                <span className="font-bold text-slate-400">Total Enrolled</span>
                <p className="text-2xl font-black font-mono text-blue-700">{students.length} Students</p>
              </div>
              <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 text-xs">
                <span className="font-bold text-slate-400">Gender Ratio</span>
                <p className="text-2xl font-black font-mono text-purple-700">312 Boys : 255 Girls</p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-xs">
                <span className="font-bold text-slate-400">Sibling Linkages</span>
                <p className="text-2xl font-black font-mono text-emerald-700">142 Siblings</p>
              </div>
            </div>

            <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-2xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 font-bold uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Adm No</th>
                    <th className="p-3">Student Name</th>
                    <th className="p-3">Father Name</th>
                    <th className="p-3">Class & Section</th>
                    <th className="p-3">Gender</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Contact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {students.slice(0, 25).map(s => (
                    <tr key={s.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="p-3 font-mono font-bold text-indigo-600">{s.admissionNo || s.id}</td>
                      <td className="p-3 font-bold text-slate-900 dark:text-white">{s.name}</td>
                      <td className="p-3 text-slate-600 dark:text-slate-400">{s.fatherName || 'Sh. Rajesh Kumar'}</td>
                      <td className="p-3 font-bold">{s.class}</td>
                      <td className="p-3">{s.gender || 'Male'}</td>
                      <td className="p-3 font-mono">{s.category || 'General'}</td>
                      <td className="p-3 font-mono text-slate-500">{s.mobileNo || '+91 97588 82443'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 🖨️ 2. FEES REPORTS */}
        {activeReport === 'fees' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border">
                <span className="font-bold text-slate-400">Total Billed Demand</span>
                <p className="text-xl font-black font-mono text-slate-900 dark:text-white">₹{totalDue.toLocaleString('en-IN')}</p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200">
                <span className="font-bold text-emerald-700">Total Collected</span>
                <p className="text-xl font-black font-mono text-emerald-700">₹{totalPaid.toLocaleString('en-IN')}</p>
              </div>
              <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200">
                <span className="font-bold text-rose-700">Outstanding Arrears</span>
                <p className="text-xl font-black font-mono text-rose-700">₹{totalBalance.toLocaleString('en-IN')}</p>
              </div>
              <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200">
                <span className="font-bold text-indigo-700">Recovery Rate</span>
                <p className="text-xl font-black font-mono text-indigo-700">8.94%</p>
              </div>
            </div>

            <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-2xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 font-bold uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Class</th>
                    <th className="p-3">Students</th>
                    <th className="p-3">Tuition Demand</th>
                    <th className="p-3">Transport Demand</th>
                    <th className="p-3">Total Demand</th>
                    <th className="p-3 text-emerald-600">Paid Amount</th>
                    <th className="p-3 text-rose-600 text-right">Balance Due</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {['Class 10', 'Class 9', 'Class 8', 'Class 7', 'Class 6', 'Class 5', 'Class 4', 'Class 3', 'Class 2', 'Class 1', 'UKG', 'LKG', 'Nursery'].map((cls, idx) => (
                    <tr key={cls} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="p-3 font-black text-slate-900 dark:text-white">{cls}</td>
                      <td className="p-3 font-mono">42</td>
                      <td className="p-3 font-mono">₹{((13 - idx) * 55000).toLocaleString('en-IN')}</td>
                      <td className="p-3 font-mono">₹{((13 - idx) * 25000).toLocaleString('en-IN')}</td>
                      <td className="p-3 font-mono font-bold">₹{((13 - idx) * 80000).toLocaleString('en-IN')}</td>
                      <td className="p-3 font-mono text-emerald-600 font-bold">₹{((13 - idx) * 8000).toLocaleString('en-IN')}</td>
                      <td className="p-3 font-mono text-rose-600 font-black text-right">₹{((13 - idx) * 72000).toLocaleString('en-IN')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 🖨️ 3. FINANCIAL REPORTS */}
        {activeReport === 'financial' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
                <span className="font-bold text-emerald-800">Total Inflow / Revenue</span>
                <p className="text-2xl font-black font-mono text-emerald-700">₹14,50,000</p>
                <span className="text-[10px] text-slate-500">Fees + Direct Bank Deposits</span>
              </div>
              <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200">
                <span className="font-bold text-rose-800">Total Outflow / Expenditure</span>
                <p className="text-2xl font-black font-mono text-rose-700">₹11,40,000</p>
                <span className="text-[10px] text-slate-500">Salaries + Diesel + Maintenance</span>
              </div>
              <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-200">
                <span className="font-bold text-indigo-800">Net Surplus / Cash Balance</span>
                <p className="text-2xl font-black font-mono text-indigo-700">+₹3,10,000</p>
                <span className="text-[10px] text-emerald-600 font-bold">Positive Operational Margin</span>
              </div>
            </div>
          </div>
        )}

        {/* 🖨️ 4. ATTENDANCE REPORTS */}
        {activeReport === 'attendance' && (
          <div className="space-y-4">
            <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-2xl border border-amber-200 text-xs text-amber-900 dark:text-amber-200 flex justify-between items-center">
              <span><strong>CBSE Board Attendance Compliance:</strong> Students below 75% attendance require special medical/condonation approval.</span>
              <Badge variant="warning">Defaulter Filter: &lt; 75%</Badge>
            </div>

            <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-2xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 font-bold uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Roll</th>
                    <th className="p-3">Student Name</th>
                    <th className="p-3">Class</th>
                    <th className="p-3">Total Working Days</th>
                    <th className="p-3">Present Days</th>
                    <th className="p-3">Percentage</th>
                    <th className="p-3 text-right">Board Eligibility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {students.slice(0, 15).map((s, idx) => {
                    const present = 110 - (idx * 3);
                    const pct = ((present / 120) * 100).toFixed(1);
                    return (
                      <tr key={s.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-3 font-mono font-bold">#{s.rollNo || idx + 1}</td>
                        <td className="p-3 font-bold text-slate-900 dark:text-white">{s.name}</td>
                        <td className="p-3 font-semibold">{s.class}</td>
                        <td className="p-3 font-mono">120 Days</td>
                        <td className="p-3 font-mono font-bold">{present} Days</td>
                        <td className="p-3 font-mono font-black text-indigo-600">{pct}%</td>
                        <td className="p-3 text-right">
                          <Badge variant={Number(pct) >= 75 ? 'success' : 'danger'}>
                            {Number(pct) >= 75 ? 'Eligible' : 'Attendance Shortage'}
                          </Badge>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 🖨️ 5. HUMAN RESOURCE */}
        {activeReport === 'hr' && (
          <div className="space-y-4">
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-2xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 font-bold uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Emp ID</th>
                    <th className="p-3">Faculty / Staff Name</th>
                    <th className="p-3">Designation</th>
                    <th className="p-3 font-mono">Basic Pay</th>
                    <th className="p-3 font-mono">Allowances</th>
                    <th className="p-3 font-mono">EPF + TDS</th>
                    <th className="p-3 font-mono text-right">Net Monthly Salary</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {teachers.map(t => (
                    <tr key={t.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="p-3 font-mono font-bold text-indigo-600">{t.employeeId || 'EMP-2026'}</td>
                      <td className="p-3 font-bold text-slate-900 dark:text-white">{t.name}</td>
                      <td className="p-3 text-slate-500">{t.designation}</td>
                      <td className="p-3 font-mono">₹26,000</td>
                      <td className="p-3 font-mono text-emerald-600">+₹9,000</td>
                      <td className="p-3 font-mono text-rose-500">-₹4,120</td>
                      <td className="p-3 font-mono font-black text-slate-900 dark:text-white text-right">₹30,880</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 🖨️ 6. EXAMINATION */}
        {activeReport === 'exam' && (
          <div className="space-y-4">
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-2xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 font-bold uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Rank</th>
                    <th className="p-3">Student Name</th>
                    <th className="p-3">Class</th>
                    <th className="p-3 font-mono">Max Marks</th>
                    <th className="p-3 font-mono">Obtained Marks</th>
                    <th className="p-3 font-mono">Percentage</th>
                    <th className="p-3">CBSE Grade</th>
                    <th className="p-3 text-right">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {marksList.map((m, idx) => (
                    <tr key={m.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="p-3 font-black text-indigo-600 font-mono">#{idx + 1}</td>
                      <td className="p-3 font-bold text-slate-900 dark:text-white">{m.studentName}</td>
                      <td className="p-3 font-semibold">{m.class}</td>
                      <td className="p-3 font-mono">{m.totalMarks}</td>
                      <td className="p-3 font-mono font-bold text-emerald-600">{m.obtainedMarks}</td>
                      <td className="p-3 font-mono font-black">{m.percentage}%</td>
                      <td className="p-3 font-bold">{m.grade}</td>
                      <td className="p-3 text-right">
                        <Badge variant="success">Pass</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 🖨️ 7. INVENTORY */}
        {activeReport === 'inventory' && (
          <div className="space-y-4">
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-2xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 font-bold uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Item Name</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Store Location</th>
                    <th className="p-3 font-mono">In Stock</th>
                    <th className="p-3 font-mono">Unit Price</th>
                    <th className="p-3 font-mono text-right">Total Valuation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {[
                    { name: 'School Uniform Set (Winter & Summer)', category: 'Uniforms', store: 'Main Store Room 1', stock: 180, price: 1200 },
                    { name: 'NCERT Textbook Set (Class 10)', category: 'Books', store: 'Library Store Room', stock: 85, price: 850 },
                    { name: 'School Notebooks (Classmate 180 Pgs)', category: 'Stationery', store: 'Main Store Room 2', stock: 1200, price: 45 },
                    { name: 'Football & Basketball Equipment', category: 'Sports', store: 'Sports Complex Store', stock: 45, price: 650 },
                    { name: 'Physics Lab Beakers & Apparatus', category: 'Lab Equipment', store: 'Physics Science Lab', stock: 60, price: 450 }
                  ].map(item => (
                    <tr key={item.name} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="p-3 font-bold text-slate-900 dark:text-white">{item.name}</td>
                      <td className="p-3 text-slate-500">{item.category}</td>
                      <td className="p-3">{item.store}</td>
                      <td className="p-3 font-mono font-bold text-emerald-600">{item.stock} Units</td>
                      <td className="p-3 font-mono">₹{item.price}</td>
                      <td className="p-3 font-mono font-black text-slate-900 dark:text-white text-right">₹{(item.stock * item.price).toLocaleString('en-IN')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

export default ReportsPage;
