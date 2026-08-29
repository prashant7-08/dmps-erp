import React, { useState } from 'react';
import {
  DollarSign,
  Printer,
  CheckCircle2,
  Users,
  Building2,
  CreditCard,
  Download
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import { PrintablePaySlip } from '../components/printables/PrintablePaySlip';
import schoolService from '../services/schoolService';

export const HRPayrollPage = () => {
  const { showToast } = useToast();
  const teachers = schoolService.getTeachers();
  const schoolInfo = schoolService.getSchoolInfo();

  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isPaySlipModalOpen, setIsPaySlipModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('August 2026');

  const totalPayrollExpenditure = teachers.reduce((acc, t) => acc + (t.salary?.netSalary || 80000), 0);

  const handleDisbursePayroll = () => {
    showToast(`Monthly payroll for ${selectedMonth} (₹${totalPayrollExpenditure.toLocaleString('en-IN')}) disbursed via Direct Bank Transfer! 💰`, 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <DollarSign className="w-7 h-7 text-indigo-600" /> HR & Staff Payroll Management
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Faculty salary structure, EPF deductions, TDS income tax calculations, and 1-click printable payslips.
          </p>
        </div>
        <button
          onClick={handleDisbursePayroll}
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-500/20 flex items-center gap-2 transition-all"
        >
          <CreditCard className="w-4 h-4" /> Disburse Monthly Payroll
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase">Monthly Payroll Outflow</span>
          <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">₹{totalPayrollExpenditure.toLocaleString('en-IN')}</p>
          <span className="text-[11px] text-slate-500 mt-1 block">{teachers.length} Active Teaching Staff</span>
        </div>
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase">Total EPF Fund (12%)</span>
          <p className="text-2xl font-black text-indigo-600 mt-1">₹31,040</p>
          <span className="text-[11px] text-slate-500 mt-1 block">Government EPF Account Deposited</span>
        </div>
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase">Payroll Cycle Status</span>
          <p className="text-2xl font-black text-emerald-600 mt-1">Ready to Disburse</p>
          <span className="text-[11px] text-emerald-600 mt-1 font-bold block">{selectedMonth}</span>
        </div>
      </div>

      {/* Staff Payroll Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                <th className="p-4">Employee</th>
                <th className="p-4">Department & Designation</th>
                <th className="p-4">Basic Pay</th>
                <th className="p-4">Allowances (HRA+DA)</th>
                <th className="p-4">Deductions (PF+Tax)</th>
                <th className="p-4">Net Salary</th>
                <th className="p-4 text-right">Pay Slip</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {teachers.map(t => {
                const s = t.salary || { basic: 62000, hra: 16000, da: 11000, pfDeduction: 7440, taxDeduction: 5100, netSalary: 80960 };
                return (
                  <tr key={t.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-4">
                      <div className="flex items-center gap-2.5">
                        <img src={t.photo} alt={t.name} className="w-8 h-8 rounded-lg object-cover" />
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white">{t.name}</p>
                          <p className="text-[10px] text-slate-400 font-mono">{t.employeeId}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-slate-700 dark:text-slate-300">{t.designation} ({t.department})</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">₹{s.basic.toLocaleString('en-IN')}</td>
                    <td className="p-4 font-semibold text-emerald-600">+₹{((s.hra || 0) + (s.da || 0)).toLocaleString('en-IN')}</td>
                    <td className="p-4 font-semibold text-rose-600">-₹{((s.pfDeduction || 0) + (s.taxDeduction || 0)).toLocaleString('en-IN')}</td>
                    <td className="p-4 font-black text-indigo-600 text-sm">₹{s.netSalary.toLocaleString('en-IN')}</td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => { setSelectedStaff(t); setIsPaySlipModalOpen(true); }}
                        className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-lg font-bold text-xs flex items-center gap-1 ml-auto hover:bg-indigo-100"
                      >
                        <Printer className="w-3.5 h-3.5" /> Pay Slip
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pay Slip Modal */}
      <Modal
        isOpen={isPaySlipModalOpen}
        onClose={() => setIsPaySlipModalOpen(false)}
        title="Monthly Staff Pay Slip"
        maxWidth="max-w-4xl"
      >
        {selectedStaff && (
          <PrintablePaySlip teacher={selectedStaff} month={selectedMonth} schoolInfo={schoolInfo} />
        )}
      </Modal>
    </div>
  );
};
