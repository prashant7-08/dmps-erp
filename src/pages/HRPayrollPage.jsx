import React, { useState, useEffect, useMemo } from 'react';
import {
  DollarSign,
  Printer,
  CheckCircle2,
  Users,
  Building2,
  CreditCard,
  Download,
  Plus,
  Trash2,
  Edit2,
  Award,
  Layers,
  Calendar,
  Send,
  Sparkles,
  AlertCircle,
  FileText,
  Clock,
  Briefcase,
  Check,
  X,
  Umbrella,
  Wallet,
  FileCheck,
  Search
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import { PrintablePaySlip } from '../components/printables/PrintablePaySlip';
import schoolService from '../services/schoolService';

export const HRPayrollPage = ({ initialTab = 'payment' }) => {
  const { showToast } = useToast();
  const teachers = schoolService.getTeachers() || [];
  const schoolInfo = schoolService.getSchoolInfo() || { name: 'Dadheech Memorial Public School', phone: '+91 97588 82443' };

  const resolveTab = (tab) => {
    if (!tab) return 'payment';
    if (tab === 'hr-template' || tab === 'template' || tab === 'salary-template') return 'template';
    if (tab === 'hr-assign' || tab === 'assign' || tab === 'salary-assign') return 'assign';
    if (tab === 'hr-payment' || tab === 'payment' || tab === 'payroll' || tab === 'salary-payment') return 'payment';
    if (tab === 'hr-advance-my' || tab === 'advance-my') return 'advance-my';
    if (tab === 'hr-advance-manage' || tab === 'advance-manage' || tab === 'hr-advance' || tab === 'advance') return 'advance-manage';
    if (tab === 'hr-leave-category' || tab === 'leave-category') return 'leave-category';
    if (tab === 'hr-leave-my' || tab === 'leave-my') return 'leave-my';
    if (tab === 'hr-leave-manage' || tab === 'leave-manage' || tab === 'hr-leave' || tab === 'leave') return 'leave-manage';
    if (tab === 'hr-award' || tab === 'award') return 'award';
    return tab;
  };

  const [activeTab, setActiveTab] = useState(() => resolveTab(initialTab));

  useEffect(() => {
    if (initialTab) setActiveTab(resolveTab(initialTab));
  }, [initialTab]);

  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isPaySlipModalOpen, setIsPaySlipModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('August 2026');
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Salary Templates State
  const [templates, setTemplates] = useState([
    { id: 'TPL-01', name: 'Senior PGT Faculty', basic: 35000, da: 7000, hra: 5000, medical: 1500, pf: 4200, tax: 1500, net: 42800 },
    { id: 'TPL-02', name: 'TGT Subject Teacher', basic: 26000, da: 5200, hra: 3800, medical: 1200, pf: 3120, tax: 1000, net: 32080 },
    { id: 'TPL-03', name: 'PRT / Primary Teacher', basic: 18000, da: 3600, hra: 2500, medical: 1000, pf: 2160, tax: 500, net: 22440 },
    { id: 'TPL-04', name: 'Administrative Staff', basic: 20000, da: 4000, hra: 3000, medical: 1000, pf: 2400, tax: 600, net: 25000 },
    { id: 'TPL-05', name: 'Bus Driver & Support Staff', basic: 14000, da: 2800, hra: 1800, medical: 800, pf: 1680, tax: 0, net: 17720 }
  ]);

  // 2. Staff Salary Assignment Roster
  const [staffAssignments, setStaffAssignments] = useState(() => {
    return teachers.map((t, idx) => ({
      staffId: t.id,
      name: t.name,
      employeeId: t.employeeId || `EMP-2026-${String(idx + 1).padStart(3, '0')}`,
      designation: t.designation || 'Teacher',
      department: t.department || 'Academics',
      assignedTemplate: idx < 5 ? 'Senior PGT Faculty' : idx < 12 ? 'TGT Subject Teacher' : idx < 18 ? 'PRT / Primary Teacher' : 'Bus Driver & Support Staff',
      bankName: 'State Bank of India (SBI)',
      accountNo: `394820100${2300 + idx}`,
      ifsc: 'SBIN0001248',
      panNo: `ABCPR${3820 + idx}F`,
      uan: `101489201${100 + idx}`
    }));
  });

  // 3. Advance Salary Applications State
  const [advanceRequests, setAdvanceRequests] = useState([
    { id: 'ADV-01', staffId: 'TCH-001', staffName: 'SHWETA RAGHAV', role: 'Secondary Teacher', requestedAmount: 15000, date: '2026-08-15', monthlyDeduction: 3000, installments: 5, reason: 'Family Medical Emergency', status: 'Approved' },
    { id: 'ADV-02', staffId: 'TCH-002', staffName: 'SONU KUMAR', role: 'Senior Faculty PGT', requestedAmount: 10000, date: '2026-08-20', monthlyDeduction: 2500, installments: 4, reason: 'House Repair / Festival', status: 'Approved' },
    { id: 'ADV-03', staffId: 'TCH-003', staffName: 'BHOOMI YADAV', role: 'Junior Teacher', requestedAmount: 12000, date: '2026-08-25', monthlyDeduction: 3000, installments: 4, reason: 'Higher Education Course Fee', status: 'Pending' }
  ]);

  // 4. Leave Categories State
  const [leaveCategories, setLeaveCategories] = useState([
    { id: 'LVC-01', name: 'Casual Leave (CL)', code: 'CL', annualDays: 12, paid: true, desc: 'Short personal and unavoidable domestic leaves' },
    { id: 'LVC-02', name: 'Medical / Sick Leave (ML)', code: 'ML', annualDays: 10, paid: true, desc: 'Illness with registered medical practitioner certificate' },
    { id: 'LVC-03', name: 'Academic Duty Leave (DL)', code: 'DL', annualDays: 8, paid: true, desc: 'Official CBSE workshops, board evaluation & sports tournaments' },
    { id: 'LVC-04', name: 'Maternity Leave (MatL)', code: 'MatL', annualDays: 180, paid: true, desc: 'Maternity leave for female faculty as per government rules' },
    { id: 'LVC-05', name: 'Loss of Pay / Unpaid (LWP)', code: 'LWP', annualDays: 30, paid: false, desc: 'Unplanned extended leaves deducted from monthly payroll' }
  ]);

  // 5. Staff Leave Applications State
  const [leaveApplications, setLeaveApplications] = useState([
    { id: 'LV-2026-01', staffName: 'POORAN SINGH', role: 'Secondary Teacher', category: 'Casual Leave (CL)', fromDate: '2026-08-28', toDate: '2026-08-29', totalDays: 2, reason: 'Attending sister marriage in Agra', status: 'Approved', balanceLeft: 10 },
    { id: 'LV-2026-02', staffName: 'SWATI RAGHAV', role: 'Primary Teacher', category: 'Medical / Sick Leave (ML)', fromDate: '2026-08-24', toDate: '2026-08-26', totalDays: 3, reason: 'Severe viral fever and doctor rest advisory', status: 'Approved', balanceLeft: 7 },
    { id: 'LV-2026-03', staffName: 'CHOKHELAL', role: 'Bus Driver', category: 'Casual Leave (CL)', fromDate: '2026-09-04', toDate: '2026-09-05', totalDays: 2, reason: 'Village agricultural harvest work', status: 'Pending', balanceLeft: 11 }
  ]);

  // 6. Staff Awards State
  const [awards, setAwards] = useState([
    { id: 'AWD-01', title: 'Teacher of the Year 2026', recipient: 'POORAN SINGH (Secondary Teacher)', date: '15-Aug-2026', prize: '₹10,000 Cash + Trophy & Certificate', category: 'Academic Excellence' },
    { id: 'AWD-02', title: '100% Punctuality & Attendance Award', recipient: 'SWATI RAGHAV (Primary Teacher)', date: '15-Aug-2026', prize: 'Gold Medal + Certificate', category: 'Punctuality' },
    { id: 'AWD-03', title: 'Best Bus Route Safety & Zero Incident Award', recipient: 'CHOKHELAL (Driver - Bus UP-81-BT-1841)', date: '15-Aug-2026', prize: '₹5,000 + Safety Shield', category: 'Transport Operations' }
  ]);

  // Modals
  const [isAddTemplateModalOpen, setIsAddTemplateModalOpen] = useState(false);
  const [isAddAdvanceModalOpen, setIsAddAdvanceModalOpen] = useState(false);
  const [isAddLeaveCategoryModalOpen, setIsAddLeaveCategoryModalOpen] = useState(false);
  const [isApplyLeaveModalOpen, setIsApplyLeaveModalOpen] = useState(false);
  const [isAddAwardModalOpen, setIsAddAwardModalOpen] = useState(false);

  // Forms State
  const [templateForm, setTemplateForm] = useState({ name: '', basic: '', da: '', hra: '', medical: '', pf: '', tax: '' });
  const [advanceForm, setAdvanceForm] = useState({ staffName: 'SHWETA RAGHAV', requestedAmount: '', monthlyDeduction: '', reason: '' });
  const [leaveCategoryForm, setLeaveCategoryForm] = useState({ name: '', code: '', annualDays: '', paid: true, desc: '' });
  const [applyLeaveForm, setApplyLeaveForm] = useState({ staffName: 'SHWETA RAGHAV', category: 'Casual Leave (CL)', fromDate: '', toDate: '', totalDays: '1', reason: '' });
  const [awardForm, setAwardForm] = useState({ title: '', recipient: '', prize: '', category: 'Academic Excellence' });

  // Total Payroll Calculation
  const totalPayrollExpenditure = useMemo(() => {
    return teachers.reduce((acc, t) => acc + (t.salary?.netSalary || 32000), 0) || 736000;
  }, [teachers]);

  const handleDisbursePayroll = () => {
    showToast(`Monthly payroll for ${selectedMonth} (₹${totalPayrollExpenditure.toLocaleString('en-IN')}) disbursed via Direct Bank Transfer! 💰`, 'success');
  };

  const handleApproveAdvance = (id) => {
    setAdvanceRequests(prev => prev.map(r => r.id === id ? { ...r, status: 'Approved' } : r));
    showToast(`Advance request ${id} approved! Disbursal scheduled with salary EMI deduction.`, 'success');
  };

  const handleRejectAdvance = (id) => {
    setAdvanceRequests(prev => prev.map(r => r.id === id ? { ...r, status: 'Rejected' } : r));
    showToast(`Advance request ${id} rejected.`, 'info');
  };

  const handleApproveLeave = (id) => {
    setLeaveApplications(prev => prev.map(l => l.id === id ? { ...l, status: 'Approved' } : l));
    showToast(`Leave Application ${id} approved by Principal! ✅`, 'success');
  };

  const handleRejectLeave = (id) => {
    setLeaveApplications(prev => prev.map(l => l.id === id ? { ...l, status: 'Rejected' } : l));
    showToast(`Leave Application ${id} rejected.`, 'info');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">

      {/* 🧭 Top HR 4-Category Master Tabs */}
      <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-x-auto custom-scrollbar print:hidden">
        <div className="flex items-center gap-1 min-w-max text-xs font-bold">
          {/* Payroll Group */}
          <div className="flex items-center p-1 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 gap-1">
            <span className="text-[10px] uppercase font-black px-2 text-blue-800 dark:text-blue-300">PAYROLL:</span>
            <button
              onClick={() => setActiveTab('template')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'template' ? 'bg-blue-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-blue-900'}`}
            >
              Salary Template
            </button>
            <button
              onClick={() => setActiveTab('assign')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'assign' ? 'bg-blue-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-blue-900'}`}
            >
              Salary Assign
            </button>
            <button
              onClick={() => setActiveTab('payment')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'payment' ? 'bg-blue-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-blue-900'}`}
            >
              Salary Payment
            </button>
          </div>

          {/* Advance Salary Group */}
          <div className="flex items-center p-1 rounded-xl bg-amber-50/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 gap-1">
            <span className="text-[10px] uppercase font-black px-2 text-amber-800 dark:text-amber-300">ADVANCE SALARY:</span>
            <button
              onClick={() => setActiveTab('advance-my')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'advance-my' ? 'bg-amber-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-amber-900'}`}
            >
              My Application
            </button>
            <button
              onClick={() => setActiveTab('advance-manage')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'advance-manage' ? 'bg-amber-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-amber-900'}`}
            >
              Manage Application ({advanceRequests.filter(r => r.status === 'Pending').length})
            </button>
          </div>

          {/* Leave Group */}
          <div className="flex items-center p-1 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 gap-1">
            <span className="text-[10px] uppercase font-black px-2 text-emerald-800 dark:text-emerald-300">LEAVE:</span>
            <button
              onClick={() => setActiveTab('leave-category')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'leave-category' ? 'bg-emerald-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-emerald-900'}`}
            >
              Category
            </button>
            <button
              onClick={() => setActiveTab('leave-my')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'leave-my' ? 'bg-emerald-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-emerald-900'}`}
            >
              My Application
            </button>
            <button
              onClick={() => setActiveTab('leave-manage')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'leave-manage' ? 'bg-emerald-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-emerald-900'}`}
            >
              Manage Application ({leaveApplications.filter(l => l.status === 'Pending').length})
            </button>
          </div>

          {/* Award */}
          <button
            onClick={() => setActiveTab('award')}
            className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 ${activeTab === 'award' ? 'bg-purple-600 text-white shadow-md font-black' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            <Award className="w-4 h-4 text-amber-400" /> Award ({awards.length})
          </button>
        </div>
      </div>

      {/* 🏛️ Page Title Bar (Hidden on Print) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 print:hidden">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-indigo-500/25">
            {activeTab.startsWith('leave') ? '🏖️' : activeTab.startsWith('advance') ? '💰' : activeTab === 'award' ? '👑' : '💳'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                {activeTab === 'template' ? 'Salary Grade & Pay Scale Templates' :
                 activeTab === 'assign' ? 'Staff Salary Structure & Bank Account Allocation' :
                 activeTab === 'payment' ? 'Monthly Staff Salary Disbursal & Pay Slip Generation' :
                 activeTab === 'advance-my' ? 'My Advance Salary & Loan Applications' :
                 activeTab === 'advance-manage' ? 'Staff Advance Salary Approval & EMI Management' :
                 activeTab === 'leave-category' ? 'Staff Leave Categories & Annual Quotas' :
                 activeTab === 'leave-my' ? 'My Leave Application & Balance' :
                 activeTab === 'leave-manage' ? 'Staff Leave Approvals & Absence Manager' :
                 'Faculty Awards, Honors & Annual Recognitions'}
              </h2>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Dadheech Memorial Public School • Human Resource & Faculty Administration
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">

          {activeTab === 'template' && (
            <button
              onClick={() => setIsAddTemplateModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Salary Template
            </button>
          )}

          {activeTab === 'advance-my' && (
            <button
              onClick={() => setIsAddAdvanceModalOpen(true)}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Apply for Advance
            </button>
          )}

          {activeTab === 'leave-category' && (
            <button
              onClick={() => setIsAddLeaveCategoryModalOpen(true)}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Leave Category
            </button>
          )}

          {activeTab === 'leave-my' && (
            <button
              onClick={() => setIsApplyLeaveModalOpen(true)}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Apply for Leave
            </button>
          )}

          {activeTab === 'award' && (
            <button
              onClick={() => setIsAddAwardModalOpen(true)}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Issue Staff Award
            </button>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 💳 1. PAYROLL - SALARY TEMPLATE */}
      {/* ========================================================================= */}
      {activeTab === 'template' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {templates.map(tpl => (
              <div key={tpl.id} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 hover:border-indigo-400 transition-all">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">{tpl.name}</h4>
                  <Badge variant="primary">{tpl.id}</Badge>
                </div>
                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 font-mono">
                  <div className="flex justify-between"><span>Basic Pay:</span><strong>₹{tpl.basic.toLocaleString('en-IN')}</strong></div>
                  <div className="flex justify-between text-emerald-600"><span>Dearness Allowance (DA):</span><strong>+₹{tpl.da.toLocaleString('en-IN')}</strong></div>
                  <div className="flex justify-between text-emerald-600"><span>House Rent Allowance (HRA):</span><strong>+₹{tpl.hra.toLocaleString('en-IN')}</strong></div>
                  <div className="flex justify-between text-emerald-600"><span>Medical Allowance:</span><strong>+₹{tpl.medical.toLocaleString('en-IN')}</strong></div>
                  <div className="flex justify-between text-rose-500"><span>EPF Deduction (12%):</span><strong>-₹{tpl.pf.toLocaleString('en-IN')}</strong></div>
                  <div className="flex justify-between text-rose-500"><span>Professional Tax (TDS):</span><strong>-₹{tpl.tax.toLocaleString('en-IN')}</strong></div>
                  <div className="flex justify-between pt-2 border-t border-slate-200 dark:border-slate-700 font-black text-slate-900 dark:text-white text-sm">
                    <span>Net Take-Home Salary:</span><strong className="text-emerald-600">₹{tpl.net.toLocaleString('en-IN')}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📋 2. PAYROLL - SALARY ASSIGN */}
      {/* ========================================================================= */}
      {activeTab === 'assign' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Employee</th>
                  <th className="p-3.5">Department</th>
                  <th className="p-3.5">Assigned Grade Template</th>
                  <th className="p-3.5">Bank Account Details</th>
                  <th className="p-3.5">PAN & EPF UAN</th>
                  <th className="p-3.5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {staffAssignments.map(st => (
                  <tr key={st.staffId} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5">
                      <div className="font-bold text-slate-900 dark:text-white">{st.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{st.employeeId} • {st.designation}</div>
                    </td>
                    <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-400">{st.department}</td>
                    <td className="p-3.5">
                      <select
                        value={st.assignedTemplate}
                        onChange={(e) => {
                          const val = e.target.value;
                          setStaffAssignments(prev => prev.map(item => item.staffId === st.staffId ? { ...item, assignedTemplate: val } : item));
                          showToast(`Updated pay grade to ${val} for ${st.name}`, 'info');
                        }}
                        className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold text-xs text-indigo-700 dark:text-indigo-300"
                      >
                        {templates.map(tpl => (
                          <option key={tpl.id} value={tpl.name}>{tpl.name} (Net: ₹{tpl.net})</option>
                        ))}
                      </select>
                    </td>
                    <td className="p-3.5 text-xs text-slate-600 dark:text-slate-300 font-mono">
                      <div>{st.bankName}</div>
                      <div>A/C: {st.accountNo}</div>
                      <div className="text-[10px] text-slate-400">IFSC: {st.ifsc}</div>
                    </td>
                    <td className="p-3.5 text-xs font-mono text-slate-700 dark:text-slate-300">
                      <div>PAN: <strong>{st.panNo}</strong></div>
                      <div>UAN: <strong>{st.uan}</strong></div>
                    </td>
                    <td className="p-3.5 text-right">
                      <Badge variant="success">Assigned & Active</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 💰 3. PAYROLL - SALARY PAYMENT */}
      {/* ========================================================================= */}
      {activeTab === 'payment' && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase">Monthly Payroll Outflow</span>
              <p className="text-2xl font-black font-mono text-slate-900 dark:text-white">₹{totalPayrollExpenditure.toLocaleString('en-IN')}</p>
              <span className="text-[11px] text-slate-500 font-semibold">{teachers.length} Active Teaching & Support Staff</span>
            </div>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase">Total EPF Fund (12%)</span>
              <p className="text-2xl font-black font-mono text-indigo-600">₹88,320</p>
              <span className="text-[11px] text-slate-500 font-semibold">Government EPF Account Deposited</span>
            </div>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase">Payroll Cycle Status</span>
              <p className="text-2xl font-black text-emerald-600">Ready to Disburse</p>
              <span className="text-[11px] text-emerald-600 font-bold">{selectedMonth}</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Employee</th>
                  <th className="p-3.5">Designation</th>
                  <th className="p-3.5">Basic Pay</th>
                  <th className="p-3.5">Allowances (HRA+DA)</th>
                  <th className="p-3.5">Deductions (PF+Tax)</th>
                  <th className="p-3.5">Net Salary</th>
                  <th className="p-3.5 text-right">Pay Slip</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {teachers.map(t => {
                  const s = t.salary || { basic: 26000, hra: 3800, da: 5200, pfDeduction: 3120, taxDeduction: 1000, netSalary: 32080 };
                  return (
                    <tr key={t.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3.5">
                        <div className="flex items-center gap-2.5">
                          <img src={t.photo} alt={t.name} className="w-8 h-8 rounded-lg object-cover" />
                          <div>
                            <p className="font-bold text-slate-900 dark:text-white">{t.name}</p>
                            <p className="text-[10px] text-slate-400 font-mono">{t.employeeId}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-300">{t.designation}</td>
                      <td className="p-3.5 font-mono text-slate-700 dark:text-slate-300">₹{(s.basic || 26000).toLocaleString('en-IN')}</td>
                      <td className="p-3.5 font-mono text-emerald-600">+₹{((s.hra || 0) + (s.da || 0)).toLocaleString('en-IN')}</td>
                      <td className="p-3.5 font-mono text-rose-500">-₹{((s.pfDeduction || 0) + (s.taxDeduction || 0)).toLocaleString('en-IN')}</td>
                      <td className="p-3.5 font-mono font-black text-slate-900 dark:text-white">₹{(s.netSalary || 32080).toLocaleString('en-IN')}</td>
                      <td className="p-3.5 text-right">
                        <button
                          onClick={() => {
                            setSelectedStaff(t);
                            setIsPaySlipModalOpen(true);
                          }}
                          className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 rounded-xl font-bold text-[11px]"
                        >
                          <Printer className="w-3.5 h-3.5 inline mr-1" /> Pay Slip
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 💰 4. ADVANCE SALARY - MY APPLICATION */}
      {/* ========================================================================= */}
      {activeTab === 'advance-my' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Wallet className="w-5 h-5 text-amber-600" /> My Advance Salary Applications
              </h3>
              <p className="text-xs text-slate-500">Apply for emergency advance salary with automatic monthly EMI payroll deductions</p>
            </div>
            <button
              onClick={() => setIsAddAdvanceModalOpen(true)}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Apply New Advance
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Req #</th>
                  <th className="p-3.5">Date</th>
                  <th className="p-3.5">Requested Amount</th>
                  <th className="p-3.5">Monthly EMI Deduction</th>
                  <th className="p-3.5">Installments</th>
                  <th className="p-3.5">Reason</th>
                  <th className="p-3.5 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {advanceRequests.map(adv => (
                  <tr key={adv.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-indigo-600">{adv.id}</td>
                    <td className="p-3.5 font-mono text-slate-500">{adv.date}</td>
                    <td className="p-3.5 font-mono font-black text-emerald-600">₹{adv.requestedAmount.toLocaleString('en-IN')}</td>
                    <td className="p-3.5 font-mono font-bold text-rose-500">₹{adv.monthlyDeduction.toLocaleString('en-IN')}/mo</td>
                    <td className="p-3.5 font-mono font-bold text-slate-600 dark:text-slate-300">{adv.installments} Months</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400">{adv.reason}</td>
                    <td className="p-3.5 text-center">
                      <Badge variant={adv.status === 'Approved' ? 'success' : adv.status === 'Rejected' ? 'danger' : 'warning'}>
                        {adv.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 💰 5. ADVANCE SALARY - MANAGE APPLICATION */}
      {/* ========================================================================= */}
      {activeTab === 'advance-manage' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-amber-600" /> Advance Salary Requests & Approval Manager
            </h3>
            <p className="text-xs text-slate-500">Review faculty advance requests, approve disbursals, and monitor repayment schedules</p>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Req #</th>
                  <th className="p-3.5">Staff Name</th>
                  <th className="p-3.5">Designation</th>
                  <th className="p-3.5 font-mono">Amount</th>
                  <th className="p-3.5 font-mono">Monthly EMI</th>
                  <th className="p-3.5">Reason</th>
                  <th className="p-3.5 text-center">Status</th>
                  <th className="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {advanceRequests.map(adv => (
                  <tr key={adv.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-indigo-600">{adv.id}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{adv.staffName}</td>
                    <td className="p-3.5 text-slate-500">{adv.role}</td>
                    <td className="p-3.5 font-mono font-black text-emerald-600">₹{adv.requestedAmount.toLocaleString('en-IN')}</td>
                    <td className="p-3.5 font-mono font-bold text-rose-500">₹{adv.monthlyDeduction.toLocaleString('en-IN')}/mo</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400">{adv.reason}</td>
                    <td className="p-3.5 text-center">
                      <Badge variant={adv.status === 'Approved' ? 'success' : adv.status === 'Rejected' ? 'danger' : 'warning'}>
                        {adv.status}
                      </Badge>
                    </td>
                    <td className="p-3.5 text-right">
                      {adv.status === 'Pending' ? (
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => handleApproveAdvance(adv.id)}
                            className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-[10px] flex items-center gap-1"
                          >
                            <Check className="w-3 h-3" /> Approve
                          </button>
                          <button
                            onClick={() => handleRejectAdvance(adv.id)}
                            className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold text-[10px] flex items-center gap-1"
                          >
                            <X className="w-3 h-3" /> Reject
                          </button>
                        </div>
                      ) : (
                        <span className="text-[10px] font-bold text-slate-400">Processed</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🏖️ 6. LEAVE - CATEGORY */}
      {/* ========================================================================= */}
      {activeTab === 'leave-category' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Umbrella className="w-5 h-5 text-emerald-600" /> Leave Categories & Annual Entitlement Quota
              </h3>
              <p className="text-xs text-slate-500">Define leave types, yearly quota limits, paid/unpaid conditions and rules</p>
            </div>
            <button
              onClick={() => setIsAddLeaveCategoryModalOpen(true)}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Leave Category
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {leaveCategories.map(cat => (
              <div key={cat.id} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 hover:border-emerald-400 transition-all">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 uppercase">
                    {cat.code}
                  </span>
                  <Badge variant={cat.paid ? 'success' : 'danger'}>
                    {cat.paid ? 'Paid Leave' : 'Unpaid (LWP)'}
                  </Badge>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">{cat.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{cat.desc}</p>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 font-bold text-xs text-slate-700 dark:text-slate-300 flex justify-between">
                  <span>Annual Quota:</span>
                  <span className="font-mono font-black text-emerald-600">{cat.annualDays} Days / Year</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🏖️ 7. LEAVE - MY APPLICATION */}
      {/* ========================================================================= */}
      {activeTab === 'leave-my' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-600" /> My Leave Applications & Balance
              </h3>
              <p className="text-xs text-slate-500">Apply for casual, medical or duty leaves and check your approval status</p>
            </div>
            <button
              onClick={() => setIsApplyLeaveModalOpen(true)}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Apply For Leave
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">App #</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5 font-mono">From Date</th>
                  <th className="p-3.5 font-mono">To Date</th>
                  <th className="p-3.5">Days</th>
                  <th className="p-3.5">Reason</th>
                  <th className="p-3.5">Balance Left</th>
                  <th className="p-3.5 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {leaveApplications.map(lv => (
                  <tr key={lv.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-indigo-600">{lv.id}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{lv.category}</td>
                    <td className="p-3.5 font-mono text-slate-600 dark:text-slate-300">{lv.fromDate}</td>
                    <td className="p-3.5 font-mono text-slate-600 dark:text-slate-300">{lv.toDate}</td>
                    <td className="p-3.5 font-mono font-black text-emerald-600">{lv.totalDays} Days</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400">{lv.reason}</td>
                    <td className="p-3.5 font-mono font-bold text-indigo-600">{lv.balanceLeft} Days</td>
                    <td className="p-3.5 text-center">
                      <Badge variant={lv.status === 'Approved' ? 'success' : lv.status === 'Rejected' ? 'danger' : 'warning'}>
                        {lv.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🏖️ 8. LEAVE - MANAGE APPLICATION */}
      {/* ========================================================================= */}
      {activeTab === 'leave-manage' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Umbrella className="w-5 h-5 text-emerald-600" /> Staff Leave Applications & Approvals Manager
            </h3>
            <p className="text-xs text-slate-500">Review teacher and support staff absence requests, inspect leave quotas, and approve/reject</p>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">App #</th>
                  <th className="p-3.5">Staff Name</th>
                  <th className="p-3.5">Designation</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5 font-mono">Duration</th>
                  <th className="p-3.5">Reason</th>
                  <th className="p-3.5 text-center">Status</th>
                  <th className="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {leaveApplications.map(lv => (
                  <tr key={lv.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-indigo-600">{lv.id}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{lv.staffName}</td>
                    <td className="p-3.5 text-slate-500">{lv.role}</td>
                    <td className="p-3.5 font-medium text-emerald-700 dark:text-emerald-400">{lv.category}</td>
                    <td className="p-3.5 font-mono text-xs">
                      <div>{lv.fromDate} to {lv.toDate}</div>
                      <span className="font-bold text-indigo-600">({lv.totalDays} Days)</span>
                    </td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400">{lv.reason}</td>
                    <td className="p-3.5 text-center">
                      <Badge variant={lv.status === 'Approved' ? 'success' : lv.status === 'Rejected' ? 'danger' : 'warning'}>
                        {lv.status}
                      </Badge>
                    </td>
                    <td className="p-3.5 text-right">
                      {lv.status === 'Pending' ? (
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => handleApproveLeave(lv.id)}
                            className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-[10px] flex items-center gap-1"
                          >
                            <Check className="w-3 h-3" /> Approve
                          </button>
                          <button
                            onClick={() => handleRejectLeave(lv.id)}
                            className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold text-[10px] flex items-center gap-1"
                          >
                            <X className="w-3 h-3" /> Reject
                          </button>
                        </div>
                      ) : (
                        <span className="text-[10px] font-bold text-slate-400">Processed</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 👑 9. AWARD */}
      {/* ========================================================================= */}
      {activeTab === 'award' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" /> Faculty Awards, Honors & Recognition
              </h3>
              <p className="text-xs text-slate-500">Recognize outstanding teaching, 100% punctuality, board exam results, and transport safety</p>
            </div>
            <button
              onClick={() => setIsAddAwardModalOpen(true)}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Issue New Award
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {awards.map(awd => (
              <div key={awd.id} className="p-6 rounded-3xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-3 hover:border-amber-400 transition-all">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-bold text-xs">
                  <Award className="w-4 h-4" /> {awd.category}
                </div>
                <h4 className="text-base font-black text-slate-900 dark:text-white">{awd.title}</h4>
                <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{awd.recipient}</p>
                <div className="pt-2 border-t border-amber-200 dark:border-amber-900/40 text-xs text-slate-600 dark:text-slate-400">
                  Prize: <strong className="text-amber-800 dark:text-amber-300">{awd.prize}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📦 MODALS */}
      {/* ========================================================================= */}

      {/* Add Salary Template Modal */}
      {isAddTemplateModalOpen && (
        <Modal
          isOpen={isAddTemplateModalOpen}
          onClose={() => setIsAddTemplateModalOpen(false)}
          title="💳 Add New Salary Template Grade"
          maxWidth="max-w-md"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!templateForm.name.trim()) return;
              const basic = Number(templateForm.basic) || 0;
              const da = Number(templateForm.da) || 0;
              const hra = Number(templateForm.hra) || 0;
              const medical = Number(templateForm.medical) || 0;
              const pf = Number(templateForm.pf) || 0;
              const tax = Number(templateForm.tax) || 0;
              const net = (basic + da + hra + medical) - (pf + tax);

              const newTpl = {
                id: `TPL-${String(templates.length + 1).padStart(2, '0')}`,
                name: templateForm.name,
                basic, da, hra, medical, pf, tax, net
              };

              setTemplates([...templates, newTpl]);
              setIsAddTemplateModalOpen(false);
              setTemplateForm({ name: '', basic: '', da: '', hra: '', medical: '', pf: '', tax: '' });
              showToast(`Salary Template "${newTpl.name}" created! 💳`, 'success');
            }}
            className="space-y-4 text-xs"
          >
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Grade / Template Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Senior Faculty Grade A"
                value={templateForm.name}
                onChange={(e) => setTemplateForm({ ...templateForm, name: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Basic Pay (₹) *</label>
                <input
                  type="number"
                  required
                  placeholder="30000"
                  value={templateForm.basic}
                  onChange={(e) => setTemplateForm({ ...templateForm, basic: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">DA Allowance (₹)</label>
                <input
                  type="number"
                  placeholder="6000"
                  value={templateForm.da}
                  onChange={(e) => setTemplateForm({ ...templateForm, da: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold text-emerald-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">HRA Allowance (₹)</label>
                <input
                  type="number"
                  placeholder="4000"
                  value={templateForm.hra}
                  onChange={(e) => setTemplateForm({ ...templateForm, hra: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold text-emerald-600"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Medical Allowance (₹)</label>
                <input
                  type="number"
                  placeholder="1200"
                  value={templateForm.medical}
                  onChange={(e) => setTemplateForm({ ...templateForm, medical: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold text-emerald-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">EPF Deduction (12%)</label>
                <input
                  type="number"
                  placeholder="3600"
                  value={templateForm.pf}
                  onChange={(e) => setTemplateForm({ ...templateForm, pf: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold text-rose-500"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">TDS / Tax Deduction</label>
                <input
                  type="number"
                  placeholder="1000"
                  value={templateForm.tax}
                  onChange={(e) => setTemplateForm({ ...templateForm, tax: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold text-rose-500"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddTemplateModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow"
              >
                Create Template
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Apply Advance Salary Modal */}
      {isAddAdvanceModalOpen && (
        <Modal
          isOpen={isAddAdvanceModalOpen}
          onClose={() => setIsAddAdvanceModalOpen(false)}
          title="💰 Apply for Advance Salary / Staff Loan"
          maxWidth="max-w-md"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const amt = Number(advanceForm.requestedAmount);
              const emi = Number(advanceForm.monthlyDeduction);
              if (!amt || amt <= 0) return;

              const newReq = {
                id: `ADV-${String(advanceRequests.length + 1).padStart(2, '0')}`,
                staffId: 'TCH-004',
                staffName: advanceForm.staffName,
                role: 'Faculty',
                requestedAmount: amt,
                date: new Date().toISOString().split('T')[0],
                monthlyDeduction: emi || Math.round(amt / 4),
                installments: emi ? Math.ceil(amt / emi) : 4,
                reason: advanceForm.reason || 'Personal Emergency',
                status: 'Pending'
              };

              setAdvanceRequests([newReq, ...advanceRequests]);
              setIsAddAdvanceModalOpen(false);
              showToast(`Advance application of ₹${amt.toLocaleString('en-IN')} submitted to Principal!`, 'success');
            }}
            className="space-y-4 text-xs"
          >
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select Staff Member *</label>
              <select
                value={advanceForm.staffName}
                onChange={(e) => setAdvanceForm({ ...advanceForm, staffName: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              >
                {teachers.map(t => (
                  <option key={t.id} value={t.name}>{t.name} ({t.designation})</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Advance Amount (₹) *</label>
                <input
                  type="number"
                  required
                  placeholder="15000"
                  value={advanceForm.requestedAmount}
                  onChange={(e) => setAdvanceForm({ ...advanceForm, requestedAmount: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold text-emerald-600"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Monthly EMI Deduction (₹)</label>
                <input
                  type="number"
                  placeholder="3000"
                  value={advanceForm.monthlyDeduction}
                  onChange={(e) => setAdvanceForm({ ...advanceForm, monthlyDeduction: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold text-rose-500"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Reason for Advance *</label>
              <textarea
                required
                rows={3}
                placeholder="Reason for advance requirement..."
                value={advanceForm.reason}
                onChange={(e) => setAdvanceForm({ ...advanceForm, reason: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddAdvanceModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow"
              >
                Submit Application
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Apply Leave Modal */}
      {isApplyLeaveModalOpen && (
        <Modal
          isOpen={isApplyLeaveModalOpen}
          onClose={() => setIsApplyLeaveModalOpen(false)}
          title="🏖️ Submit Staff Leave Application"
          maxWidth="max-w-md"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!applyLeaveForm.fromDate || !applyLeaveForm.toDate) return;

              const newLv = {
                id: `LV-2026-${String(leaveApplications.length + 1).padStart(2, '0')}`,
                staffName: applyLeaveForm.staffName,
                role: 'Faculty',
                category: applyLeaveForm.category,
                fromDate: applyLeaveForm.fromDate,
                toDate: applyLeaveForm.toDate,
                totalDays: Number(applyLeaveForm.totalDays) || 1,
                reason: applyLeaveForm.reason || 'Personal Work',
                status: 'Pending',
                balanceLeft: 10
              };

              setLeaveApplications([newLv, ...leaveApplications]);
              setIsApplyLeaveModalOpen(false);
              showToast(`Leave application submitted to Principal for approval! 🏖️`, 'success');
            }}
            className="space-y-4 text-xs"
          >
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Applicant Staff Member *</label>
              <select
                value={applyLeaveForm.staffName}
                onChange={(e) => setApplyLeaveForm({ ...applyLeaveForm, staffName: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              >
                {teachers.map(t => (
                  <option key={t.id} value={t.name}>{t.name} ({t.designation})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Leave Category *</label>
              <select
                value={applyLeaveForm.category}
                onChange={(e) => setApplyLeaveForm({ ...applyLeaveForm, category: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              >
                {leaveCategories.map(c => (
                  <option key={c.id} value={c.name}>{c.name} ({c.annualDays} days quota)</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">From Date *</label>
                <input
                  type="date"
                  required
                  value={applyLeaveForm.fromDate}
                  onChange={(e) => setApplyLeaveForm({ ...applyLeaveForm, fromDate: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">To Date *</label>
                <input
                  type="date"
                  required
                  value={applyLeaveForm.toDate}
                  onChange={(e) => setApplyLeaveForm({ ...applyLeaveForm, toDate: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Reason for Leave *</label>
              <textarea
                required
                rows={3}
                placeholder="Detail the reason for leave..."
                value={applyLeaveForm.reason}
                onChange={(e) => setApplyLeaveForm({ ...applyLeaveForm, reason: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsApplyLeaveModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow"
              >
                Submit Leave
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Add Leave Category Modal */}
      {isAddLeaveCategoryModalOpen && (
        <Modal
          isOpen={isAddLeaveCategoryModalOpen}
          onClose={() => setIsAddLeaveCategoryModalOpen(false)}
          title="🏖️ Add Leave Category & Policy"
          maxWidth="max-w-md"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!leaveCategoryForm.name.trim()) return;
              const newCat = {
                id: `LVC-${String(leaveCategories.length + 1).padStart(2, '0')}`,
                name: leaveCategoryForm.name,
                code: leaveCategoryForm.code || leaveCategoryForm.name.slice(0, 3).toUpperCase(),
                annualDays: Number(leaveCategoryForm.annualDays) || 10,
                paid: leaveCategoryForm.paid,
                desc: leaveCategoryForm.desc || 'Staff Leave Policy'
              };
              setLeaveCategories([...leaveCategories, newCat]);
              setIsAddLeaveCategoryModalOpen(false);
              showToast(`Leave category "${newCat.name}" added!`, 'success');
            }}
            className="space-y-4 text-xs"
          >
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Category Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Paternity Leave"
                value={leaveCategoryForm.name}
                onChange={(e) => setLeaveCategoryForm({ ...leaveCategoryForm, name: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Short Code</label>
                <input
                  type="text"
                  placeholder="e.g. PL"
                  value={leaveCategoryForm.code}
                  onChange={(e) => setLeaveCategoryForm({ ...leaveCategoryForm, code: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono uppercase"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Annual Days Quota</label>
                <input
                  type="number"
                  placeholder="15"
                  value={leaveCategoryForm.annualDays}
                  onChange={(e) => setLeaveCategoryForm({ ...leaveCategoryForm, annualDays: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Description</label>
              <input
                type="text"
                placeholder="e.g. Leave for new fathers..."
                value={leaveCategoryForm.desc}
                onChange={(e) => setLeaveCategoryForm({ ...leaveCategoryForm, desc: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddLeaveCategoryModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow"
              >
                Save Category
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Add Award Modal */}
      {isAddAwardModalOpen && (
        <Modal
          isOpen={isAddAwardModalOpen}
          onClose={() => setIsAddAwardModalOpen(false)}
          title="👑 Issue Staff Honor & Award"
          maxWidth="max-w-md"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!awardForm.title.trim()) return;
              const newAwd = {
                id: `AWD-${String(awards.length + 1).padStart(2, '0')}`,
                title: awardForm.title,
                recipient: awardForm.recipient || 'Dr. Sonu Kumar',
                date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
                prize: awardForm.prize || 'Gold Medal + Certificate',
                category: awardForm.category
              };
              setAwards([...awards, newAwd]);
              setIsAddAwardModalOpen(false);
              showToast(`Award "${newAwd.title}" conferred to ${newAwd.recipient}! 👑`, 'success');
            }}
            className="space-y-4 text-xs"
          >
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Award Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. Best STEM Educator of the Year"
                value={awardForm.title}
                onChange={(e) => setAwardForm({ ...awardForm, title: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Recipient Staff Member *</label>
              <select
                value={awardForm.recipient}
                onChange={(e) => setAwardForm({ ...awardForm, recipient: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              >
                {teachers.map(t => (
                  <option key={t.id} value={`${t.name} (${t.designation})`}>{t.name} ({t.designation})</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Award Category</label>
                <select
                  value={awardForm.category}
                  onChange={(e) => setAwardForm({ ...awardForm, category: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                >
                  <option value="Academic Excellence">Academic Excellence</option>
                  <option value="Punctuality">Punctuality</option>
                  <option value="Transport Operations">Transport Operations</option>
                  <option value="Distinguished Service">Distinguished Service</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Prize / Cash Reward</label>
                <input
                  type="text"
                  placeholder="e.g. ₹5,000 Cash + Shield"
                  value={awardForm.prize}
                  onChange={(e) => setAwardForm({ ...awardForm, prize: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddAwardModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white shadow"
              >
                Issue Award
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Printable Pay Slip Modal */}
      {isPaySlipModalOpen && selectedStaff && (
        <Modal
          isOpen={isPaySlipModalOpen}
          onClose={() => setIsPaySlipModalOpen(false)}
          title={`Staff Pay Slip • ${selectedStaff.name} (${selectedMonth})`}
          maxWidth="max-w-3xl"
        >
          <PrintablePaySlip
            staff={selectedStaff}
            month={selectedMonth}
            schoolInfo={schoolInfo}
            onClose={() => setIsPaySlipModalOpen(false)}
          />
        </Modal>
      )}

    </div>
  );
};

export default HRPayrollPage;
