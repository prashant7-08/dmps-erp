import React from 'react';
import { Printer, CheckCircle, ShieldCheck, Users, AlertCircle } from 'lucide-react';

export const PrintableFeeReceipt = ({ invoice, schoolInfo, onPrint }) => {
  const handlePrint = () => {
    if (onPrint) onPrint();
    else window.print();
  };

  if (!invoice) return null;

  const isCombined = invoice.isCombinedFamilyInvoice;
  const isFamilyLinked = invoice.isFamilyLinked;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800 p-3 rounded-xl print:hidden">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
            {isCombined ? "👨‍👩‍👧‍👦 Consolidated Family Fee Receipt" : "Official Fee Payment Receipt"}
          </span>
          {isCombined && (
            <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[10px] font-bold">
              Multi-Sibling Payment
            </span>
          )}
        </div>
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm transition-all hover:scale-105 active:scale-95"
        >
          <Printer className="w-4 h-4" /> Print / Save PDF Receipt
        </button>
      </div>

      <div 
        id="printable-fee-receipt"
        className="bg-white text-slate-900 p-8 rounded-2xl border-2 border-slate-300 shadow-2xl max-w-2xl mx-auto font-sans print:shadow-none print:border print:p-6"
      >
        {/* Header */}
        <div className="flex justify-between items-start border-b-2 border-slate-900 pb-4 mb-5">
          <div>
            <h1 className="text-xl font-black uppercase tracking-tight text-indigo-950">
              {schoolInfo?.name || "Delhi Public Global Academy"}
            </h1>
            <p className="text-xs text-slate-600">
              {schoolInfo?.address || "Knowledge Park, New Delhi"}
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              CBSE Affiliation: {schoolInfo?.affiliationNo || "213098"} | Helpline: {schoolInfo?.phone || "+91 11 2789 4500"}
            </p>
          </div>
          <div className="text-right">
            <div className={`inline-block ${isCombined ? 'bg-purple-100 text-purple-950' : 'bg-emerald-100 text-emerald-950'} text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-1 border ${isCombined ? 'border-purple-300' : 'border-emerald-300'}`}>
              {isCombined ? "FAMILY FEE RECEIPT" : "STUDENT FEE RECEIPT"}
            </div>
            <p className="text-xs font-mono font-bold text-slate-800">Receipt: {invoice.receiptNo || "RCPT-9821"}</p>
            <p className="text-xs text-slate-500">Date: {invoice.paymentDate || new Date().toISOString().split('T')[0]}</p>
          </div>
        </div>

        {/* Family Combined Banner Notice */}
        {isCombined && (
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 mb-5 text-xs text-purple-950 flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold">
              <Users className="w-4 h-4 text-purple-700" />
              <span>Consolidated Sibling Payment • Billed via Primary Student: <u>{invoice.studentName}</u></span>
            </div>
            <span className="text-[11px] font-bold bg-purple-200 px-2 py-0.5 rounded-lg text-purple-900">
              {invoice.siblingBreakdown?.length || 1} Children Included
            </span>
          </div>
        )}

        {/* Individual Sibling Sub-slip Notice */}
        {!isCombined && isFamilyLinked && invoice.familyReceiptRef && (
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2.5 mb-4 text-[11px] text-indigo-950 flex items-center justify-between">
            <span className="font-semibold">
              ℹ️ Payment Settle Ref: Paid via Combined Family Receipt <strong>#{invoice.familyReceiptRef}</strong> (Primary: {invoice.primaryStudentName || 'Elder Sibling'})
            </span>
          </div>
        )}

        {/* Student & Invoice Meta */}
        <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs mb-5">
          <div>
            <p className="text-slate-500 font-semibold">{isCombined ? "Primary Student (Elder Child):" : "Student Name:"}</p>
            <p className="text-sm font-bold text-slate-900">{invoice.studentName}</p>
          </div>
          <div>
            <p className="text-slate-500 font-semibold">Class & Roll No:</p>
            <p className="text-sm font-bold text-slate-900">{invoice.class} (Roll #{invoice.rollNo})</p>
          </div>
          <div>
            <p className="text-slate-500 font-semibold">Payment Channel / Txn ID:</p>
            <p className="font-semibold text-slate-800">{invoice.paymentMode || "UPI"} ({invoice.transactionId || "OFFLINE-CASH"})</p>
          </div>
          <div>
            <p className="text-slate-500 font-semibold">Academic Session:</p>
            <p className="font-semibold text-slate-800">{schoolInfo?.academicSession || "2026-2027"}</p>
          </div>
        </div>

        {/* CASE A: COMBINED FAMILY ITEMIZATION TABLE */}
        {isCombined && invoice.siblingBreakdown && invoice.siblingBreakdown.length > 0 ? (
          <div className="space-y-2 mb-5">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Child-wise Sibling Fee Distribution Breakdown:
            </h4>
            <table className="w-full text-left text-xs border-collapse border border-slate-300">
              <thead>
                <tr className="bg-slate-100 font-bold text-slate-900 text-[11px]">
                  <th className="border border-slate-300 px-3 py-2">Student Name</th>
                  <th className="border border-slate-300 px-3 py-2">Class</th>
                  <th className="border border-slate-300 px-3 py-2 text-right">Fee Due</th>
                  <th className="border border-slate-300 px-3 py-2 text-right">Paid Now (₹)</th>
                  <th className="border border-slate-300 px-3 py-2 text-right">Remaining Balance</th>
                  <th className="border border-slate-300 px-3 py-2 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {invoice.siblingBreakdown.map((child, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="border border-slate-300 px-3 py-2">
                      <p className="font-bold text-slate-900">{child.name}</p>
                    </td>
                    <td className="border border-slate-300 px-3 py-2 font-semibold text-slate-800">{child.class}</td>
                    <td className="border border-slate-300 px-3 py-2 text-right text-slate-600">₹{child.totalDue?.toLocaleString('en-IN')}</td>
                    <td className="border border-slate-300 px-3 py-2 text-right font-black text-emerald-700">₹{child.allocatedPaid?.toLocaleString('en-IN')}</td>
                    <td className="border border-slate-300 px-3 py-2 text-right font-bold text-slate-800">
                      ₹{child.remainingBalance?.toLocaleString('en-IN')}
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${child.remainingBalance === 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                        {child.remainingBalance === 0 ? 'Full Paid' : 'Partial'}
                      </span>
                    </td>
                  </tr>
                ))}
                {invoice.discount > 0 && (
                  <tr className="text-emerald-700 font-medium">
                    <td className="border border-slate-300 px-3 py-1.5" colSpan={3}>Family / Multi-Child Scholarship Discount:</td>
                    <td className="border border-slate-300 px-3 py-1.5 text-right">-₹{invoice.discount?.toLocaleString('en-IN')}</td>
                    <td className="border border-slate-300 px-3 py-1.5" colSpan={2}></td>
                  </tr>
                )}
                {invoice.fine > 0 && (
                  <tr className="text-rose-700 font-medium">
                    <td className="border border-slate-300 px-3 py-1.5" colSpan={3}>Late Surcharge:</td>
                    <td className="border border-slate-300 px-3 py-1.5 text-right">+₹{invoice.fine?.toLocaleString('en-IN')}</td>
                    <td className="border border-slate-300 px-3 py-1.5" colSpan={2}></td>
                  </tr>
                )}
                <tr className="bg-purple-50 font-black text-xs text-slate-900 border-t-2 border-slate-800">
                  <td className="border border-slate-300 px-3 py-2.5 uppercase text-purple-950 font-extrabold" colSpan={3}>
                    TOTAL CONSOLIDATED AMOUNT PAID:
                  </td>
                  <td className="border border-slate-300 px-3 py-2.5 text-right text-emerald-800 font-black text-sm">
                    ₹{invoice.paidAmount?.toLocaleString('en-IN')}
                  </td>
                  <td className="border border-slate-300 px-3 py-2.5 text-right font-black text-slate-900" colSpan={2}>
                    Total Family Dues Left: ₹{invoice.dueAmount?.toLocaleString('en-IN') || 0}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          /* CASE B: SINGLE STUDENT / SUB-SLIP BREAKDOWN TABLE */
          <table className="w-full text-left text-xs border-collapse border border-slate-300 mb-5">
            <thead>
              <tr className="bg-slate-100 font-bold text-slate-900">
                <th className="border border-slate-300 px-3 py-2">Sl.</th>
                <th className="border border-slate-300 px-3 py-2">Particulars / Fee Description</th>
                <th className="border border-slate-300 px-3 py-2 text-right">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 px-3 py-2">1</td>
                <td className="border border-slate-300 px-3 py-2 font-semibold">{invoice.feeType}</td>
                <td className="border border-slate-300 px-3 py-2 text-right font-bold">₹{invoice.paidAmount?.toLocaleString('en-IN')}</td>
              </tr>
              {invoice.discount > 0 && (
                <tr className="text-emerald-700">
                  <td className="border border-slate-300 px-3 py-1.5">-</td>
                  <td className="border border-slate-300 px-3 py-1.5 font-medium">Special Concession / Sibling Discount</td>
                  <td className="border border-slate-300 px-3 py-1.5 text-right">-₹{invoice.discount?.toLocaleString('en-IN')}</td>
                </tr>
              )}
              {invoice.fine > 0 && (
                <tr className="text-rose-700">
                  <td className="border border-slate-300 px-3 py-1.5">-</td>
                  <td className="border border-slate-300 px-3 py-1.5 font-medium">Late Payment Surcharge / Fine</td>
                  <td className="border border-slate-300 px-3 py-1.5 text-right">+₹{invoice.fine?.toLocaleString('en-IN')}</td>
                </tr>
              )}
              <tr className="bg-slate-50 font-black text-sm text-slate-900 border-t-2 border-slate-800">
                <td className="border border-slate-300 px-3 py-2 text-right" colSpan={2}>TOTAL AMOUNT PAID:</td>
                <td className="border border-slate-300 px-3 py-2 text-right text-emerald-700">₹{invoice.paidAmount?.toLocaleString('en-IN')}</td>
              </tr>
            </tbody>
          </table>
        )}

        {/* Due Balance & Status Note */}
        <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs mb-6">
          <span className="text-slate-700">
            Current Outstanding Balance: <strong className="text-slate-900 text-sm">₹{invoice.dueAmount?.toLocaleString('en-IN') || 0}</strong>
          </span>
          <span className="inline-flex items-center gap-1 font-bold text-emerald-700">
            <CheckCircle className="w-4 h-4" /> Payment Status: Confirmed / Verified
          </span>
        </div>

        {/* Signatures */}
        <div className="flex justify-between items-end border-t border-slate-300 pt-6 text-xs text-slate-700">
          <div>
            <div className="text-[11px] text-slate-500 italic">This is an official computer-generated fee receipt.</div>
          </div>
          <div className="text-center">
            <div className="w-36 border-b border-slate-400 mb-1"></div>
            <span className="font-semibold text-slate-900">Accounts Officer / Cashier</span>
          </div>
        </div>
      </div>
    </div>
  );
};
