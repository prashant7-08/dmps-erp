import React from 'react';
import { Printer, X, DollarSign, Bus, User, Phone, MapPin, Building2, Award, BookOpen, ShieldCheck } from 'lucide-react';

export const PrintableStudentDossier = ({ student, onClose = null }) => {
  if (!student) return null;

  const handlePrint = () => {
    window.print();
  };

  const fee = student.feeSummary || {};
  const transportFare11M = fee.transportDue11Months !== undefined
    ? fee.transportDue11Months
    : (Number(student.transport?.monthlyFare || 0) * Number(student.transport?.months || 11));

  return (
    <div className="space-y-4">
      {/* Top Action Bar (Hidden on Print) */}
      <div className="flex items-center justify-between p-3 rounded-2xl bg-indigo-50 dark:bg-slate-800 border border-indigo-200 dark:border-slate-700 print:hidden">
        <div>
          <h4 className="text-xs font-black text-indigo-950 dark:text-indigo-200 uppercase">
            📄 Complete Student Master Dossier & Fee Dues
          </h4>
          <p className="text-[11px] text-slate-500">
            A4 Print-Ready Master Record Sheet for <strong className="text-indigo-600">{student.name}</strong>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs rounded-xl flex items-center gap-1.5 shadow-md shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" /> 🖨️ Print Full Details
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 bg-white dark:bg-slate-700 hover:bg-slate-100 text-slate-700 dark:text-slate-300 rounded-xl border border-slate-300 text-xs font-bold cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 📄 OFFICIAL A4 PRINTABLE SHEET */}
      <div className="bg-white text-slate-950 p-6 rounded-2xl border border-slate-300 shadow-sm print:border-none print:p-0 print:shadow-none space-y-4 text-xs">
        
        {/* 1. Official School Header */}
        <div className="border-b-2 border-slate-900 pb-3 text-center relative">
          <div className="flex items-center justify-between">
            <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-950 font-black text-base flex items-center justify-center border-2 border-slate-950 shrink-0">
              DMPS
            </div>
            <div className="flex-1 px-4">
              <h1 className="text-xl font-black uppercase tracking-wider text-slate-950">
                DADHEECH MEMORIAL PUBLIC SCHOOL
              </h1>
              <p className="text-[11px] font-bold text-slate-800">
                Affiliated to Central Board of Secondary Education (CBSE), New Delhi • Affiliation No: 2133481
              </p>
              <p className="text-[10px] text-slate-600">
                Ramghat Road, Jargwan, Bulandshahr, UP - 202395 | Helpline: +91 97588 82443, +91 98371 00000
              </p>
            </div>
            <div className="text-right text-[10px] font-mono font-bold text-slate-700 shrink-0">
              <p>Session: 2026-2027</p>
              <p>Date: {new Date().toLocaleDateString('en-GB')}</p>
            </div>
          </div>

          <div className="mt-2.5 py-1 bg-slate-950 text-white rounded font-black text-[11px] uppercase tracking-wider">
            📋 STUDENT MASTER PROFILE & OFFICIAL FEE STATEMENT (छात्र संपूर्ण विवरण प्रपत्र)
          </div>
        </div>

        {/* 2. Primary Identity & Photo Row */}
        <div className="flex gap-4 items-start border-b border-slate-200 pb-3">
          {/* Photo */}
          <div className="w-24 h-28 rounded-xl border-2 border-slate-800 overflow-hidden bg-slate-100 shrink-0 flex flex-col items-center justify-center">
            <img
              src={student.photo || `https://ui-avatars.com/api/?name=${student.name.replace(' ', '+')}&background=4F46E5&color=fff&size=128&bold=true`}
              alt={student.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${student.name.replace(' ', '+')}&background=4F46E5&color=fff&size=128&bold=true`;
              }}
            />
          </div>

          {/* Academic Primary Details */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
            <div>
              <span className="text-slate-500 font-bold block text-[10px]">Student Full Name:</span>
              <strong className="text-sm font-black text-blue-900 uppercase">{student.name}</strong>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[10px]">Register / Adm No:</span>
              <strong className="font-mono text-slate-900 text-sm font-black">{student.admissionNo}</strong>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[10px]">Ledger No. (खाता सं.):</span>
              <strong className="font-mono text-indigo-700 text-sm font-black">{student.rollNo || '0'}</strong>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[10px]">Class & Section:</span>
              <strong className="font-black text-slate-900">{student.class} - {student.section || 'A'}</strong>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[10px]">Date of Birth (DOB):</span>
              <strong className="font-bold text-slate-900 font-mono">{student.dob || 'N/A'}</strong>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[10px]">Gender:</span>
              <strong className="font-bold text-slate-900">{student.gender || 'N/A'}</strong>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[10px]">Category / Caste:</span>
              <strong className="font-bold text-slate-900">{student.category || 'General'} {student.customFields?.caste ? `(${student.customFields.caste})` : ''}</strong>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[10px]">Blood Group:</span>
              <strong className="font-bold text-rose-700">{student.bloodGroup || 'O+'}</strong>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[10px]">Status:</span>
              <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase ${student.status === 'Inactive' ? 'bg-rose-100 text-rose-900' : 'bg-emerald-100 text-emerald-900'}`}>
                {student.status || 'Active'}
              </span>
            </div>
          </div>
        </div>

        {/* 3. Government & Identity Numbers */}
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
          <h4 className="font-black text-[10px] uppercase text-slate-700 tracking-wider mb-1.5 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" /> Government & Statutory Identity
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
            <div>
              <span className="text-slate-500 block text-[10px]">PEN No. (UDISE):</span>
              <strong className="font-mono text-slate-900">{student.customFields?.penNo || 'N/A'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Student Aadhaar No:</span>
              <strong className="font-mono text-slate-900">{student.customFields?.studentAadhaar || 'N/A'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Name as per Aadhaar:</span>
              <strong className="text-slate-900">{student.customFields?.nameAsPerAadhaar || student.name}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">RTE Quota Admission:</span>
              <strong className="text-slate-900">{student.isRteStudent ? '🏛️ Yes (RTE Quota)' : 'No (General)'}</strong>
            </div>
          </div>
        </div>

        {/* 4. Parent & Guardian Details */}
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
          <h4 className="font-black text-[10px] uppercase text-slate-700 tracking-wider mb-1.5 flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-indigo-600" /> Parent & Guardian Information
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
            <div>
              <span className="text-slate-500 block text-[10px]">Father's Name:</span>
              <strong className="text-slate-900 uppercase font-black">{student.parents?.fatherName || 'N/A'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Father Mobile:</span>
              <strong className="font-mono text-slate-900 font-bold">{student.parents?.fatherMobile || 'N/A'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Father Occupation:</span>
              <strong className="text-slate-900">{student.parents?.fatherOccupation || 'Agriculture / Business'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Mother's Name:</span>
              <strong className="text-slate-900 uppercase font-black">{student.parents?.motherName || 'N/A'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Mother Mobile:</span>
              <strong className="font-mono text-slate-900 font-bold">{student.parents?.motherMobile || 'N/A'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Mother Occupation:</span>
              <strong className="text-slate-900">{student.parents?.motherOccupation || 'Homemaker'}</strong>
            </div>
            <div className="sm:col-span-3 pt-1 border-t border-slate-200">
              <span className="text-slate-500 block text-[10px]">Residential Address & Village:</span>
              <strong className="text-slate-900">{student.parents?.address || student.parents?.permanentAddress || 'N/A'}</strong>
            </div>
          </div>
        </div>

        {/* 5. 💰 FEE STRUCTURE & LIVE OUTSTANDING DUES (Highlighted Box) */}
        <div className="p-3 rounded-2xl bg-amber-50/60 border-2 border-amber-400">
          <div className="flex items-center justify-between pb-2 border-b border-amber-300">
            <h4 className="font-black text-xs uppercase text-amber-950 flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-amber-700" />
              Official Fee Ledger & Outstanding Statement (शुल्क विवरण)
            </h4>
            <span className="text-[10px] font-bold text-amber-900 font-mono">
              Academic Session 2026-2027
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 text-[11px]">
            <div className="p-2 rounded-xl bg-white border border-amber-200 text-center">
              <span className="text-[10px] text-slate-500 block">🎓 Tuition Fee</span>
              <strong className="font-mono font-bold text-slate-900">
                ₹{(fee.tuitionDue !== undefined ? fee.tuitionDue : 13500).toLocaleString('en-IN')}
              </strong>
            </div>

            <div className="p-2 rounded-xl bg-white border border-amber-200 text-center">
              <span className="text-[10px] text-slate-500 block">🚌 Transport ({student.transport?.months || 11}M)</span>
              <strong className="font-mono font-bold text-slate-900">
                ₹{Number(transportFare11M || 0).toLocaleString('en-IN')}
              </strong>
            </div>

            <div className="p-2 rounded-xl bg-white border border-amber-200 text-center">
              <span className="text-[10px] text-slate-500 block">🏢 Hostel Fee</span>
              <strong className="font-mono font-bold text-slate-900">
                ₹{Number(fee.hostelDue || 0).toLocaleString('en-IN')}
              </strong>
            </div>

            <div className="p-2 rounded-xl bg-amber-100 border border-amber-400 text-center">
              <span className="text-[10px] text-amber-950 font-black block">📜 Old Session Fees</span>
              <strong className="font-mono font-black text-amber-950">
                ₹{Number(fee.oldSessionDues || 0).toLocaleString('en-IN')}
              </strong>
            </div>

            <div className="p-2 rounded-xl bg-white border border-amber-200 text-center">
              <span className="text-[10px] text-slate-500 block">📦 Misc Charges</span>
              <strong className="font-mono font-bold text-slate-900">
                ₹{Number(fee.miscellaneousDue || 0).toLocaleString('en-IN')}
              </strong>
            </div>
          </div>

          {/* Misc Charges Itemized List (If any) */}
          {Array.isArray(fee.miscellaneousBreakdown) && fee.miscellaneousBreakdown.length > 0 && (
            <div className="mt-2 p-1.5 rounded-lg bg-white border border-amber-200 text-[10px] text-slate-600 flex flex-wrap items-center gap-1.5">
              <strong className="text-amber-900 font-bold">Misc Items:</strong>
              {fee.miscellaneousBreakdown.map((item, i) => (
                <span key={i} className="px-1.5 py-0.5 rounded bg-slate-100 font-medium">
                  {item.title}: ₹{Number(item.amount).toLocaleString('en-IN')}
                </span>
              ))}
            </div>
          )}

          {/* Net Outstanding Balance Banner */}
          <div className="mt-2.5 p-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 text-white flex items-center justify-between">
            <div className="text-xs">
              <p className="font-bold">Total Annual Due: ₹{(fee.totalDue || 0).toLocaleString('en-IN')} | Paid: ₹{(fee.totalPaid || 0).toLocaleString('en-IN')}</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-amber-100 block">Net Outstanding Dues (बकाया)</span>
              <strong className="text-base font-black font-mono tracking-wide">
                ₹{(fee.balance || 0).toLocaleString('en-IN')}
              </strong>
            </div>
          </div>
        </div>

        {/* 6. Transport & Previous School Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
          {/* Transport Fleet */}
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h4 className="font-black text-[10px] uppercase text-slate-700 flex items-center gap-1">
              <Bus className="w-3.5 h-3.5 text-orange-600" /> Transport & Stoppage Details
            </h4>
            <p><span className="text-slate-500">Route:</span> <strong>{student.transport?.route || 'Self / Walker'}</strong></p>
            <p><span className="text-slate-500">Stoppage / Village:</span> <strong>{student.transport?.stop || student.transport?.stoppage || 'N/A'}</strong></p>
            <p><span className="text-slate-500">Monthly Bus Fare:</span> <strong className="font-mono">₹{student.transport?.monthlyFare || 0} / month ({student.transport?.months || 11} Months)</strong></p>
          </div>

          {/* Previous History */}
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h4 className="font-black text-[10px] uppercase text-slate-700 flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-slate-600" /> Previous School Record
            </h4>
            <p><span className="text-slate-500">Previous School:</span> <strong>{student.previousSchoolName || 'Direct Admission'}</strong></p>
            <p><span className="text-slate-500">Previous Class:</span> <strong>{student.previousClass || '-'}</strong></p>
            <p><span className="text-slate-500">TC Number & Remarks:</span> <strong>{student.previousTcNo || '-'} {student.previousRemarks ? `(${student.previousRemarks})` : ''}</strong></p>
          </div>
        </div>

        {/* 7. Official Signatures & Seal */}
        <div className="pt-6 border-t border-slate-300 grid grid-cols-3 gap-4 text-center text-[10px] text-slate-700 font-bold">
          <div className="border-t border-slate-400 pt-1">
            Class Teacher Signature
          </div>
          <div className="border-t border-slate-400 pt-1">
            Accountant / Fee Incharge
          </div>
          <div className="border-t border-slate-400 pt-1">
            Principal / Director (With Seal)
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrintableStudentDossier;
