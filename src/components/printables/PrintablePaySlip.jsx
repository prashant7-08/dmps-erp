import React from 'react';
import { Printer, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { getStaffSalary } from '../../utils/salaryUtils';
import schoolService from '../../services/schoolService';

export const PrintablePaySlip = ({ teacher, staff, month = 'August 2026', schoolInfo, onPrint }) => {
  const targetStaff = teacher || staff;
  const handlePrint = () => {
    if (onPrint) onPrint();
    else window.print();
  };

  if (!targetStaff) return null;

  // Retrieve saved payment record if available (lenient month match)
  const salaryRecords = schoolService.getStaffSalaryRecords ? schoolService.getStaffSalaryRecords(targetStaff.id) : [];
  const cleanTargetMonth = (month || '').replace(/\s*\(.*\)/, '').trim().toLowerCase();
  const recordedPayment = salaryRecords.find(r => {
    if (r.month === month) return true;
    const cleanRec = (r.month || '').replace(/\s*\(.*\)/, '').trim().toLowerCase();
    return cleanRec === cleanTargetMonth;
  }) || null;
  const isPaid = Boolean(recordedPayment);

  const basicAmt = (recordedPayment?.baseSalary !== undefined && recordedPayment?.baseSalary !== null)
    ? Number(recordedPayment.baseSalary)
    : getStaffSalary(targetStaff);
  const arrearsAmt = Number(recordedPayment?.arrearsAdded || 0);
  const bonusAmt = Number(recordedPayment?.bonus || 0);
  const totalEarnings = basicAmt + arrearsAmt + bonusAmt;

  const leaveDed = Number(recordedPayment?.deductionAmount || 0);
  const advDed = Number(recordedPayment?.advanceDeducted || recordedPayment?.advanceDeduction || 0);
  const totalDeductions = leaveDed + advDed;

  const netPayable = recordedPayment ? recordedPayment.netPayable : (totalEarnings - totalDeductions);
  const realPaid = recordedPayment ? recordedPayment.paidAmount : 0;
  const excessAdvance = Number(recordedPayment?.excessPaidAsAdvance || 0);
  const unpaidArrears = Number(recordedPayment?.unpaidArrearsRemaining || 0);

  return (
    <div className="space-y-4">
      {/* Print Top Bar & Unpaid Notice */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-100 dark:bg-slate-800 p-3 rounded-xl print:hidden">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
            Monthly Staff Salary Slip ({month})
          </span>
          {isPaid ? (
            <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-black text-xs">
              ✓ PAID & DISBURSED
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-black text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" /> UNPAID / PENDING DISBURSAL
            </span>
          )}
        </div>
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer self-end sm:self-auto"
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
          <h1 className="text-xl font-black uppercase text-indigo-950 font-serif">
            {schoolInfo?.name || "Dadheech Memorial Public School"}
          </h1>
          <p className="text-xs text-slate-600 font-medium">
            {schoolInfo?.address || "Ramghat Road Border, Jargwan, Bulandshahr (U.P.)"} | Affiliation No: {schoolInfo?.affiliationNo || "UP-CBSE-83921"}
          </p>
          <div className={`inline-block text-xs font-bold uppercase px-4 py-1 rounded-full mt-2 ${
            isPaid ? 'bg-emerald-100 text-emerald-900' : 'bg-amber-100 text-amber-900'
          }`}>
            {isPaid ? `Official Salary Slip • ${month} (PAID)` : `Salary Statement / Slip • ${month} (PENDING PAYMENT)`}
          </div>
        </div>

        {/* Employee Details Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs mb-5">
          <div>
            <span className="text-slate-500 block font-semibold">Employee ID:</span>
            <span className="font-bold text-slate-900 font-mono">{teacher.employeeId || teacher.staffId || teacher.id}</span>
          </div>
          <div>
            <span className="text-slate-500 block font-semibold">Employee Name:</span>
            <span className="font-bold text-slate-900">{teacher.name}</span>
          </div>
          <div>
            <span className="text-slate-500 block font-semibold">Designation:</span>
            <span className="font-bold text-slate-900">{teacher.designation || 'Faculty'}</span>
          </div>
          <div>
            <span className="text-slate-500 block font-semibold">Department:</span>
            <span className="font-bold text-slate-900">{teacher.department || 'Academics'}</span>
          </div>
          <div>
            <span className="text-slate-500 block font-semibold">Registered Mobile:</span>
            <span className="font-mono font-bold text-slate-900">{teacher.phone || teacher.mobile || "—"}</span>
          </div>
          <div>
            <span className="text-slate-500 block font-semibold">Payment Mode:</span>
            <span className="font-bold text-slate-900">
              {isPaid ? (recordedPayment?.paymentMode || teacher.upiId || "UPI / PhonePe / Cash") : "Pending Disbursal (देय)"}
            </span>
          </div>
          <div>
            <span className="text-slate-500 block font-semibold">Salary Month:</span>
            <span className="font-bold text-slate-900">{month}</span>
          </div>
          <div>
            <span className="text-slate-500 block font-semibold">Disbursement Date:</span>
            <span className="font-bold">
              {isPaid ? (
                <span className="text-slate-900">{recordedPayment?.paymentDate || recordedPayment?.timestamp || new Date().toLocaleDateString('en-GB')}</span>
              ) : (
                <span className="text-amber-700 font-semibold italic">Pending (Not Disbursed)</span>
              )}
            </span>
          </div>
        </div>

        {/* Earnings & Deductions Table */}
        <div className="grid grid-cols-2 gap-4 text-xs mb-6">
          {/* Earnings */}
          <div className="border border-slate-300 rounded-xl overflow-hidden">
            <div className="bg-emerald-50 text-emerald-950 px-3 py-2 font-bold uppercase border-b border-slate-300 flex justify-between">
              <span>Earnings (आय)</span>
              <span>Amount (₹)</span>
            </div>
            <div className="p-3 space-y-2">
              <div className="flex justify-between">
                <span>Monthly Basic Salary</span>
                <span className="font-bold font-mono">₹{basicAmt.toLocaleString('en-IN')}</span>
              </div>
              {arrearsAmt > 0 && (
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>Previous Month Arrears Due (+)</span>
                  <span className="font-mono">+₹{arrearsAmt.toLocaleString('en-IN')}</span>
                </div>
              )}
              {bonusAmt > 0 && (
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>Bonus / Special Allowance (+)</span>
                  <span className="font-mono">+₹{bonusAmt.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="border-t border-slate-200 pt-2 flex justify-between font-black text-slate-900">
                <span>Total Gross Earnings:</span>
                <span className="text-emerald-700 font-mono">₹{totalEarnings.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          {/* Deductions */}
          <div className="border border-slate-300 rounded-xl overflow-hidden">
            <div className="bg-rose-50 text-rose-950 px-3 py-2 font-bold uppercase border-b border-slate-300 flex justify-between">
              <span>Deductions (कटौती)</span>
              <span>Amount (₹)</span>
            </div>
            <div className="p-3 space-y-2">
              <div className="flex justify-between">
                <span>Leave / Absent Cut (-)</span>
                <span className="font-bold font-mono text-rose-600">₹{leaveDed.toLocaleString('en-IN')}</span>
              </div>
              {recordedPayment?.deductionReason && (
                <div className="text-[10px] text-rose-600 font-medium italic">
                  Note: {recordedPayment.deductionReason}
                </div>
              )}
              <div className="flex justify-between text-slate-700">
                <span>Advance / Loan Recovery (-)</span>
                <span className="font-mono font-bold text-rose-600">₹{advDed.toLocaleString('en-IN')}</span>
              </div>
              <div className="border-t border-slate-200 pt-2 flex justify-between font-black text-slate-900">
                <span>Total Deductions:</span>
                <span className="text-rose-700 font-mono">₹{totalDeductions.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Real Payment Breakdown & Carry Forward Status */}
        <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 space-y-2 mb-6 text-xs">
          <div className="flex justify-between items-center text-slate-800 font-bold">
            <span>Net Calculated Payable for {month}:</span>
            <span className="font-mono text-sm">₹{netPayable.toLocaleString('en-IN')}</span>
          </div>

          {excessAdvance > 0 && (
            <div className="flex justify-between items-center text-purple-800 font-bold bg-purple-50 p-2 rounded-lg border border-purple-200">
              <span>Extra Advance Disbursed This Month (अगले महीने कटेगा):</span>
              <span className="font-mono">+₹{excessAdvance.toLocaleString('en-IN')}</span>
            </div>
          )}

          {unpaidArrears > 0 && (
            <div className="flex justify-between items-center text-amber-800 font-bold bg-amber-50 p-2 rounded-lg border border-amber-200">
              <span>Remaining Unpaid Arrears (अगले महीने जुड़ेगा / बाकी बकाया):</span>
              <span className="font-mono">₹{unpaidArrears.toLocaleString('en-IN')}</span>
            </div>
          )}
        </div>

        {/* Net Real Amount / Payment Status Banner */}
        {isPaid ? (
          <div className="flex items-center justify-between bg-indigo-950 text-white p-4 rounded-xl mb-6">
            <div>
              <span className="text-xs uppercase text-indigo-300 font-semibold block">Total Real Amount Disbursed (कुल भुगतान किया गया)</span>
              <span className="text-2xl font-black font-mono text-emerald-400">₹{realPaid.toLocaleString('en-IN')}</span>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5" /> Disbursed & Accounted (भुगतान पूर्ण)
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between bg-slate-900 text-white p-4 rounded-xl mb-6 border-2 border-amber-500/40">
            <div>
              <span className="text-xs uppercase text-amber-300 font-semibold block">Net Payable Salary for {month} (कुल देय वेतन)</span>
              <span className="text-2xl font-black font-mono text-white">₹{netPayable.toLocaleString('en-IN')}</span>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-950/80 px-3.5 py-1.5 rounded-full border border-amber-600/70">
                <Clock className="w-3.5 h-3.5" /> ⏳ Unpaid / Pending Payment (अदत्त)
              </span>
            </div>
          </div>
        )}

        {/* Signatures */}
        <div className="flex justify-between items-end border-t border-slate-300 pt-6 text-xs text-slate-700">
          <div className="text-center">
            <div className="w-36 border-b border-slate-400 mb-1"></div>
            <span className="font-bold">Employee Signature</span>
          </div>
          <div className="text-center">
            <div className="w-36 border-b border-slate-400 mb-1"></div>
            <span className="font-bold">Principal In-Charge</span>
          </div>
          <div className="text-center">
            <div className="w-36 border-b border-slate-400 mb-1"></div>
            <span className="font-bold">Finance & Accounts Officer</span>
          </div>
        </div>
      </div>
    </div>
  );
};
