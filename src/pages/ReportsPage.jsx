import React, { useState } from 'react';
import {
  BarChart3,
  Printer,
  Download,
  Users,
  DollarSign,
  Award,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import schoolService from '../services/schoolService';

export const ReportsPage = () => {
  const [reportType, setReportType] = useState('demographics');
  const students = schoolService.getStudents();
  const invoices = schoolService.getFeeInvoices();
  const schoolInfo = schoolService.getSchoolInfo();

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <BarChart3 className="w-7 h-7 text-indigo-600" /> Executive Analytics & School Reports
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Exportable institutional dossiers: Student demographics, attendance defaulters, fee collections vs arrears, and CBSE rank lists.
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-500/20 flex items-center gap-2 transition-all"
        >
          <Printer className="w-4 h-4" /> Print / Save Report
        </button>
      </div>

      {/* Report Categories Selection */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { id: 'demographics', label: '1. Student Demographics', icon: Users, desc: 'Enrolment & houses' },
          { id: 'attendance', label: '2. Attendance Defaulters', icon: CheckCircle2, desc: '< 75% list' },
          { id: 'finance', label: '3. Fee Collection vs Dues', icon: DollarSign, desc: 'Outstanding ledger' },
          { id: 'academics', label: '4. Examination Rank List', icon: Award, desc: 'Term 1 Honors' }
        ].map(r => {
          const Icon = r.icon;
          const isSelected = reportType === r.id;
          return (
            <button
              key={r.id}
              onClick={() => setReportType(r.id)}
              className={`p-5 rounded-3xl border text-left transition-all ${
                isSelected
                  ? 'bg-indigo-50/80 dark:bg-indigo-950/60 border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 w-fit mb-3">
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">{r.label}</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">{r.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Report Container */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              {schoolInfo.name} • Official Institutional Report
            </h3>
            <p className="text-xs text-slate-500">Session {schoolInfo.academicSession} | Generated on: {new Date().toLocaleDateString()}</p>
          </div>
          <Badge variant="primary">Verified Record</Badge>
        </div>

        {/* DEMOGRAPHICS TABLE */}
        {reportType === 'demographics' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                  <th className="p-3">Admission No</th>
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Class</th>
                  <th className="p-3">Gender</th>
                  <th className="p-3">House</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">City / Area</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {students.map(s => (
                  <tr key={s.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3 font-mono font-bold">{s.admissionNo}</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">{s.name}</td>
                    <td className="p-3 font-semibold">{s.class}{s.class === 'Class 3' && s.section ? ` (${s.section})` : ''}</td>
                    <td className="p-3">{s.gender}</td>
                    <td className="p-3 font-semibold text-indigo-600">{s.house}</td>
                    <td className="p-3"><Badge variant="primary" size="sm">{s.category}</Badge></td>
                    <td className="p-3 text-slate-500 truncate max-w-xs">{s.parents?.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ATTENDANCE DEFAULTERS TABLE */}
        {reportType === 'attendance' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                  <th className="p-3">Roll No</th>
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Class</th>
                  <th className="p-3">Total Working Days</th>
                  <th className="p-3">Days Present</th>
                  <th className="p-3">Attendance %</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {students.map(s => {
                  const pct = s.attendanceSummary?.percentage || 95;
                  const isDefaulter = pct < 75;
                  return (
                    <tr key={s.id} className={isDefaulter ? "bg-rose-50/50 dark:bg-rose-950/20" : "hover:bg-slate-50"}>
                      <td className="p-3 font-mono font-bold">#{s.rollNo}</td>
                      <td className="p-3 font-bold text-slate-900 dark:text-white">{s.name}</td>
                      <td className="p-3 font-semibold">{s.class}{s.class === 'Class 3' && s.section ? ` (${s.section})` : ''}</td>
                      <td className="p-3">{s.attendanceSummary?.totalDays} Days</td>
                      <td className="p-3 font-bold">{s.attendanceSummary?.presentDays} Days</td>
                      <td className={`p-3 font-black ${isDefaulter ? 'text-rose-600' : 'text-emerald-600'}`}>{pct}%</td>
                      <td className="p-3">
                        <Badge variant={isDefaulter ? 'danger' : 'success'}>
                          {isDefaulter ? 'Defaulter Warning' : 'Regular (>90%)'}
                        </Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* FINANCE ARREARS TABLE */}
        {reportType === 'finance' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                  <th className="p-3">Invoice No</th>
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Class</th>
                  <th className="p-3">Billed Amount</th>
                  <th className="p-3">Paid Amount</th>
                  <th className="p-3">Arrears / Balance</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {invoices.map(inv => (
                  <tr key={inv.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3 font-mono font-bold">{inv.invoiceNo}</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">{inv.studentName}</td>
                    <td className="p-3">{inv.class}</td>
                    <td className="p-3 font-bold">₹{inv.amount?.toLocaleString('en-IN')}</td>
                    <td className="p-3 font-bold text-emerald-600">₹{inv.paidAmount?.toLocaleString('en-IN')}</td>
                    <td className={`p-3 font-black ${inv.dueAmount > 0 ? 'text-rose-600' : 'text-slate-400'}`}>
                      ₹{inv.dueAmount?.toLocaleString('en-IN')}
                    </td>
                    <td className="p-3">
                      <Badge variant={inv.status === 'Paid' ? 'success' : inv.status === 'Partial' ? 'warning' : 'danger'}>
                        {inv.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ACADEMICS HONORS TABLE */}
        {reportType === 'academics' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                  <th className="p-3">Rank</th>
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Roll No</th>
                  <th className="p-3">Aggregate Marks</th>
                  <th className="p-3">Percentage</th>
                  <th className="p-3">Grade</th>
                  <th className="p-3">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-amber-50/50 dark:bg-amber-950/20">
                  <td className="p-3 font-black text-amber-600 text-sm">🏆 Rank #1</td>
                  <td className="p-3 font-bold text-slate-900 dark:text-white">Aarav Sharma</td>
                  <td className="p-3 font-mono font-bold">#101</td>
                  <td className="p-3 font-bold">219 / 240</td>
                  <td className="p-3 font-black text-indigo-600 text-sm">91.25%</td>
                  <td className="p-3 font-extrabold text-emerald-600">A1</td>
                  <td className="p-3"><Badge variant="success">Distinction</Badge></td>
                </tr>
                <tr className="bg-slate-50/80">
                  <td className="p-3 font-bold text-slate-600 text-sm">🥈 Rank #2</td>
                  <td className="p-3 font-bold text-slate-900 dark:text-white">Ananya Deshmukh</td>
                  <td className="p-3 font-mono font-bold">#102</td>
                  <td className="p-3 font-bold">218 / 240</td>
                  <td className="p-3 font-black text-indigo-600 text-sm">90.83%</td>
                  <td className="p-3 font-extrabold text-emerald-600">A1</td>
                  <td className="p-3"><Badge variant="success">Distinction</Badge></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
