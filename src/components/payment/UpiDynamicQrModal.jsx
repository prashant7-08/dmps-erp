import React, { useState } from 'react';
import { QrCode, X, CheckCircle2, ShieldCheck, Download, Copy, ExternalLink, IndianRupee } from 'lucide-react';
import { useLanguage } from '../../utils/languageContext';

export const UpiDynamicQrModal = ({ isOpen, onClose, student, onPaymentSuccess = null }) => {
  const { t, isHindi } = useLanguage();
  const [customAmount, setCustomAmount] = useState(student?.feeSummary?.balance || 0);
  const [copied, setCopied] = useState(false);

  if (!isOpen || !student) return null;

  // School official UPI VPA (Virtual Payment Address)
  const SCHOOL_UPI_VPA = "9758975880@okbizaxis"; // or "dadheechmemorial@sbi"
  const SCHOOL_PAYEE_NAME = "Dadheech Memorial Public School";
  
  const amt = Number(customAmount) || (student.feeSummary?.balance || 0);
  const note = `Fee - ${student.name} (${student.class}) Roll ${student.rollNo}`;
  
  // Standard UPI Intent URI string
  const upiUri = `upi://pay?pa=${encodeURIComponent(SCHOOL_UPI_VPA)}&pn=${encodeURIComponent(SCHOOL_PAYEE_NAME)}&am=${amt}&tn=${encodeURIComponent(note)}&cu=INR`;
  
  // High-Resolution QR Generator URL
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiUri)}&margin=10`;

  const handleCopyVpa = () => {
    navigator.clipboard.writeText(SCHOOL_UPI_VPA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-md shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-sky-600 to-indigo-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/20">
              <QrCode className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base font-black">
                {isHindi ? 'डायनामिक UPI QR फीस पेमेंट (0% चार्ज)' : 'Zero-Commission UPI QR Pay'}
              </h3>
              <p className="text-[11px] text-sky-100 font-medium">
                {isHindi ? 'PhonePe / GPay / Paytm / BHIM से सीधा भुगतान' : 'Instant direct settlement to school bank account'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/20 text-white/80 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col items-center text-center space-y-4">
          {/* Student Badge */}
          <div className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-left flex justify-between items-center text-xs">
            <div>
              <div className="font-black text-slate-900 dark:text-white text-sm">{student.name}</div>
              <div className="text-slate-500 font-medium">Class: {student.class} | Roll #{student.rollNo}</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase font-bold text-slate-400">Total Dues</div>
              <div className="font-mono font-black text-amber-600 text-sm">₹{student.feeSummary?.balance || 0}</div>
            </div>
          </div>

          {/* Amount Input */}
          <div className="w-full">
            <label className="text-xs font-bold text-slate-600 dark:text-slate-400 block mb-1 text-left">
              {isHindi ? 'जमा की जाने वाली राशि (₹):' : 'Amount to Collect (₹):'}
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full pl-8 pr-3 py-2 rounded-xl border-2 border-sky-500/40 bg-white dark:bg-slate-900 font-mono font-black text-lg text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>

          {/* QR Code Container */}
          <div className="p-3.5 rounded-2xl bg-white border-2 border-indigo-100 shadow-md inline-block">
            <img
              src={qrCodeUrl}
              alt="UPI Fee QR Code"
              className="w-52 h-52 object-contain rounded-lg"
            />
          </div>

          {/* UPI ID Info */}
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-mono bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl">
            <span>UPI ID: <strong>{SCHOOL_UPI_VPA}</strong></span>
            <button onClick={handleCopyVpa} className="text-sky-600 hover:text-sky-700 font-bold flex items-center gap-1">
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            {isHindi ? '0% बैंक चार्ज - सीधा स्कूल के चालू खाते में जमा' : 'Direct zero-fee bank deposit to school account'}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <button onClick={onClose} className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-400">
            {t('cancel')}
          </button>

          {onPaymentSuccess && (
            <button
              onClick={() => {
                onPaymentSuccess(amt);
                onClose();
              }}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-xs shadow-md shadow-emerald-600/20 flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              {isHindi ? 'भुगतान प्राप्त हुआ (Record & Print)' : 'Mark Paid & Print Receipt'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpiDynamicQrModal;
