import React, { useState, useEffect } from 'react';
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
  Clock
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import { PrintablePaySlip } from '../components/printables/PrintablePaySlip';
import schoolService from '../services/schoolService';

export const HRPayrollPage = ({ initialTab = 'payment' }) => {
  const { showToast } = useToast();
  const teachers = schoolService.getTeachers() || [];
  const schoolInfo = schoolService.getSchoolInfo() || { name: 'Dadheech Memorial Public School' };

  const resolveTab = (tab) => {
    if (!tab) return 'payment';
    if (tab === 'hr-template' || tab === 'template') return 'template';
    if (tab === 'hr-assign' || tab === 'assign') return 'assign';
    if (tab === 'hr-payment' || tab === 'payment' || tab === 'payroll') return 'payment';
    if (tab === 'hr-advance' || tab === 'advance') return 'advance';
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

  // Salary Templates State
  const [templates, setTemplates] = useState([
    { id: 'TPL-01', name: 'Senior PGT Faculty', basic: 35000, da: 7000, hra: 5000, medical: 1500, pf: 4200, tax: 1500, net: 42800 },
    { id: 'TPL-02', name: 'TGT Subject Teacher', basic: 26000, da: 5200, hra: 3800, medical: 1200, pf: 3120, tax: 1000, net: 32080 },
    { id: 'TPL-03', name: 'PRT / Primary Teacher', basic: 18000, da: 3600, hra: 2500, medical: 1000, pf: 2160, tax: 500, net: 22440 },
    { id: 'TPL-04', name: 'Administrative Staff', basic: 20000, da: 4000, hra: 3000, medical: 1000, pf: 2400, tax: 600, net: 25000 },
    { id: 'TPL-05', name: 'Bus Driver & Security', basic: 14000, da: 2800, hra: 1800, medical: 800, pf: 1680, tax: 0, net: 17720 }
  ]);

  // Advance Salary Requests
  const [advanceRequests, setAdvanceRequests] = useState([
    { id: 'ADV-01', staffName: 'SHWETA RAGHAV', role: 'Secondary Teacher', requestedAmount: 15000, date: '2026-08-15', monthlyDeduction: 3000, reason: 'Family Medical Emergency', status: 'Approved' },
    { id: 'ADV-02', staffName: 'SONU KUMAR', role: 'Senior Bus Driver', requestedAmount: 10000, date: '2026-08-20', monthlyDeduction: 2500, reason: 'House Repair / Festival', status: 'Approved' },
    { id: 'ADV-03', staffName: 'BHOOMI YADAV', role: 'Junior Teacher', requestedAmount: 12000, date: '2026-08-25', monthlyDeduction: 3000, reason: 'Higher Education Fee', status: 'Pending' }
  ]);

  // Staff Awards
  const [awards, setAwards] = useState([
    { id: 'AWD-01', title: 'Teacher of the Year 2026', recipient: 'POORAN SINGH (Secondary Teacher)', date: '15-Aug-2026', prize: '₹10,000 Cash + Trophy & Certificate', category: 'Academic Excellence' },
    { id: 'AWD-02', title: '100% Attendance Award', recipient: 'SWATI RAGHAV (Primary Teacher)', date: '15-Aug-2026', prize: 'Gold Medal + Certificate', category: 'Punctuality' },
    { id: 'AWD-03', title: 'Best Bus Route Safety Award', recipient: 'CHOKHELAL (Driver - Bus UP-81-BT-1841)', date: '15-Aug-2026', prize: '₹5,000 + Safety Badge', category: 'Transport Operations' }
  ]);

  // Total Payroll
  const totalPayrollExpenditure = teachers.reduce((acc, t) => acc + (t.salary?.netSalary || 32000), 0) || 736000;

  const handleDisbursePayroll = () => {
    showToast(`Monthly payroll for ${selectedMonth} (₹${totalPayrollExpenditure.toLocaleString('en-IN')}) disbursed via Direct Bank Transfer! 💰`, 'success');
  };

  const getHeaderMeta = () => {
    switch (activeTab) {
      case 'payment':
        return {
          title: 'Staff & Faculty Monthly Salary Payments',
          subtitle: `Disburse monthly payroll and generate payslips for all ${teachers.length} faculty and staff members.`,
          badge: 'Salary Disbursal'
        };
      case 'template':
        return {
          title: 'Salary Grade & Pay Scale Templates',
          subtitle: 'Configure Basic Pay, DA, HRA, Medical Allowance and EPF deductions for staff grades.',
          badge: 'Pay Grades'
        };
      case 'assign':
        return {
          title: 'Staff Salary Structure Assignment',
          subtitle: 'Assign standard pay scale templates to teachers, drivers, administrative and support staff.',
          badge: 'Structure Allocation'
        };
      case 'advance':
        return {
          title: 'Advance Salary Requests & EMI Repayment',
          subtitle: 'Manage staff advance requests, approvals and monthly payroll deduction schedules.',
          badge: 'Advance Salary'
        };
      case 'award':
        return {
          title: 'Staff Excellence & Annual Awards',
          subtitle: 'Recognize outstanding teaching performance, punctuality and service milestones.',
          badge: 'Excellence Awards'
        };
      default:
        return {
          title: 'Human Resource & Faculty Payroll Suite',
          subtitle: 'Complete management of Salary Templates, Staff Assignments, Disbursals, Advance Loans & Awards.',
          badge: 'HR & Payroll'
        };
    }
  };

  const meta = getHeaderMeta();

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Dynamic Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 print:hidden">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
              <Users className="w-5 h-5" />
            </span>
            <h1 className="text-xl font-black text-slate-900 dark:text-white">
              {meta.title}
            </h1>
            <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 font-bold text-[10px] border border-blue-200">
              {meta.badge}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {meta.subtitle}
          </p>
        </div>

        {activeTab === 'payment' && (
          <button
            onClick={handleDisbursePayroll}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
          >
            <CreditCard className="w-4 h-4" /> Disburse {selectedMonth} Payroll
          </button>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 💳 TAB 1: SALARY PAYMENT */}
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
      {/* 📋 TAB 2: SALARY TEMPLATE */}
      {/* ========================================================================= */}
      {activeTab === 'template' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-600" /> Salary Template Master
              </h3>
              <p className="text-xs text-slate-500">Define salary structures with allowances and statutory deductions</p>
            </div>
            <button
              onClick={() => showToast('New template creator modal ready!', 'info')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow"
            >
              + Create Salary Template
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {templates.map(tpl => (
              <div key={tpl.id} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-slate-900 dark:text-white">{tpl.name}</h4>
                  <Badge variant="primary">{tpl.id}</Badge>
                </div>
                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 font-mono">
                  <div className="flex justify-between"><span>Basic:</span><strong>₹{tpl.basic.toLocaleString('en-IN')}</strong></div>
                  <div className="flex justify-between text-emerald-600"><span>DA + HRA + Med:</span><strong>+₹{(tpl.da + tpl.hra + tpl.medical).toLocaleString('en-IN')}</strong></div>
                  <div className="flex justify-between text-rose-500"><span>PF + TDS:</span><strong>-₹{(tpl.pf + tpl.tax).toLocaleString('en-IN')}</strong></div>
                  <div className="flex justify-between pt-2 border-t border-slate-200 dark:border-slate-700 font-black text-slate-900 dark:text-white text-sm">
                    <span>Net Take Home:</span><strong className="text-emerald-600">₹{tpl.net.toLocaleString('en-IN')}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 💰 TAB 4: ADVANCE SALARY */}
      {/* ========================================================================= */}
      {activeTab === 'advance' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-amber-600" /> Advance Salary & Staff Loan Requests
            </h3>
            <p className="text-xs text-slate-500">Track advance salary disbursals and monthly salary deduction installments</p>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Req #</th>
                  <th className="p-3.5">Staff Name</th>
                  <th className="p-3.5">Designation</th>
                  <th className="p-3.5">Requested Amount</th>
                  <th className="p-3.5">Monthly EMI Deduction</th>
                  <th className="p-3.5">Reason</th>
                  <th className="p-3.5">Status</th>
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
                    <td className="p-3.5">
                      <Badge variant={adv.status === 'Approved' ? 'success' : 'warning'}>{adv.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🏆 TAB 5: AWARDS */}
      {/* ========================================================================= */}
      {activeTab === 'award' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" /> Faculty Awards & Staff Recognition
            </h3>
            <p className="text-xs text-slate-500">Recognize outstanding teaching, punctuality, and staff contributions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {awards.map(awd => (
              <div key={awd.id} className="p-5 rounded-3xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-3">
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

      {/* Printable Modal */}
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
