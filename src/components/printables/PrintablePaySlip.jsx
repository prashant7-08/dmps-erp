import React from 'react';
import { Printer, CheckCircle2 } from 'lucide-react';

export const PrintablePaySlip = ({ teacher, month = 'August 2026', schoolInfo, onPrint }) => {
  const handlePrint = () => {
    if (onPrint) onPrint();
    else window.print();
  };

  if (!teacher) return null;

  const salary = teacher.salary || {
    basic: 65000,
    hra: 17000,
    da: 11500,
    specialAllowance: 4500,
    pfDeduction: 7800,
    taxDeduction: 5500,
    netSalary: 84700
  };

  const totalEarnings = salary.basic + (salary.hra || 0) + (salary.da || 0) + (salary.specialAllowance || 0);
  const totalDeductions = (salary.pfDeduction || 0) + (salary.taxDeduction || 0);
  const netPay = salary.netSalary || (totalEarnings - totalDeductions);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800 p-3 rounded-xl print:hidden">
        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
          Monthly Staff Salary Slip ({month})
        </span>
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm transition-all"
        >
          <Printer className="w-4 h-4" /> Print Pay Slip
        </button>
      </div>

      <div 
        id="printable-payslip"
        className="bg-white text-slate-900 p-8 rounded-2xl border-2 border-slate-300 shadow-2xl max-w-3xl mx-auto font-sans print:shadow-none print:p-6"
      >
        {/* Header */}
        <div className="border-b-2 border-slate-900 pb-4 mb-4 text-center">
          <h1 className="text-xl font-black uppercase text-indigo-950">
            {schoolInfo?.name || "Delhi Public Global Academy"}
          </h1>
          <p className="text-xs text-slate-600">
            {schoolInfo?.address || "Knowledge Park, New Delhi"}
          </p>
          <div className="inline-block bg-slate-100 text-slate-900 text-xs font-bold uppercase px-4 py-1 rounded-full mt-2">
            Payslip for the Month of {month}
          </div>
        </div>

        {/* Employee Details Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs mb-5">
          <div>
            <span className="text-slate-500 block font-semibold">Employee ID:</span>
            <span className="font-bold text-slate-900">{teacher.employeeId}</span>
          </div>
          <div>
            <span className="text-slate-500 block font-semibold">Employee Name:</span>
            <span className="font-bold text-slate-900">{teacher.name}</span>
          </div>
          <div>
            <span className="text-slate-500 block font-semibold">Designation:</span>
            <span className="font-bold text-slate-900">{teacher.designation}</span>
          </div>
          <div>
            <span className="text-slate-500 block font-semibold">Department:</span>
            <span className="font-bold text-slate-900">{teacher.department}</span>
          </div>
          <div>
            <span className="text-slate-500 block font-semibold">Bank Name:</span>
            <span className="font-semibold text-slate-800">{teacher.bankDetails?.bankName || "SBI"}</span>
          </div>
          <div>
            <span className="text-slate-500 block font-semibold">Bank A/C No:</span>
            <span className="font-mono font-bold text-slate-900">{teacher.bankDetails?.accountNo || "918020038472"}</span>
          </div>
          <div>
            <span className="text-slate-500 block font-semibold">IFSC Code:</span>
            <span className="font-mono font-bold text-slate-900">{teacher.bankDetails?.ifsc || "SBIN0004521"}</span>
          </div>
          <div>
            <span className="text-slate-500 block font-semibold">Working Days:</span>
            <span className="font-bold text-slate-900">26 Days (Present: 26)</span>
          </div>
        </div>

        {/* Earnings & Deductions Table */}
        <div className="grid grid-cols-2 gap-4 text-xs mb-6">
          {/* Earnings */}
          <div className="border border-slate-300 rounded-xl overflow-hidden">
            <div className="bg-emerald-50 text-emerald-950 px-3 py-2 font-bold uppercase border-b border-slate-300">
              Earnings (₹)
            </div>
            <div className="p-3 space-y-2">
              <div className="flex justify-between">
                <span>Basic Salary</span>
                <span className="font-bold">₹{salary.basic?.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>House Rent Allowance (HRA)</span>
                <span className="font-bold">₹{salary.hra?.toLocaleString('en-IN') || 0}</span>
              </div>
              <div className="flex justify-between">
                <span>Dearness Allowance (DA)</span>
                <span className="font-bold">₹{salary.da?.toLocaleString('en-IN') || 0}</span>
              </div>
              <div className="flex justify-between">
                <span>Special / Academic Allowance</span>
                <span className="font-bold">₹{salary.specialAllowance?.toLocaleString('en-IN') || 0}</span>
              </div>
              <div className="border-t border-slate-200 pt-2 flex justify-between font-black text-slate-900">
                <span>Gross Earnings:</span>
                <span className="text-emerald-700">₹{totalEarnings.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          {/* Deductions */}
          <div className="border border-slate-300 rounded-xl overflow-hidden">
            <div className="bg-rose-50 text-rose-950 px-3 py-2 font-bold uppercase border-b border-slate-300">
              Deductions (₹)
            </div>
            <div className="p-3 space-y-2">
              <div className="flex justify-between">
                <span>Provident Fund (EPF 12%)</span>
                <span className="font-bold">₹{salary.pfDeduction?.toLocaleString('en-IN') || 0}</span>
              </div>
              <div className="flex justify-between">
                <span>Income Tax (TDS)</span>
                <span className="font-bold">₹{salary.taxDeduction?.toLocaleString('en-IN') || 0}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Professional Tax</span>
                <span>₹0</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Loan / Advance Recovery</span>
                <span>₹0</span>
              </div>
              <div className="border-t border-slate-200 pt-2 flex justify-between font-black text-slate-900">
                <span>Total Deductions:</span>
                <span className="text-rose-700">₹{totalDeductions.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Net Salary Banner */}
        <div className="flex items-center justify-between bg-indigo-950 text-white p-4 rounded-xl mb-6">
          <div>
            <span className="text-xs uppercase text-indigo-300 font-semibold block">Net Take-Home Pay</span>
            <span className="text-2xl font-black">₹{netPay.toLocaleString('en-IN')}</span>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800">
              <CheckCircle2 className="w-3.5 h-3.5" /> Direct Bank Transfer
            </span>
          </div>
        </div>

        {/* Signatures */}
        <div className="flex justify-between items-end border-t border-slate-300 pt-6 text-xs text-slate-700">
          <div className="text-center">
            <div className="w-36 border-b border-slate-400 mb-1"></div>
            <span>Employee Signature</span>
          </div>
          <div className="text-center">
            <div className="w-36 border-b border-slate-400 mb-1"></div>
            <span>Finance & Accounts Officer</span>
          </div>
        </div>
      </div>
    </div>
  );
};
