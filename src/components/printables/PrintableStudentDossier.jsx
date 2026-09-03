import React from 'react';
import { Printer, X, DollarSign, Bus, User, Phone, MapPin, Building2, Award, BookOpen, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';

export const PrintableStudentDossier = ({ student, onClose = null }) => {
  if (!student) return null;

  const handlePrint = () => {
    window.print();
  };

  const fee = student.feeSummary || {};
  const transportFare11M = fee.transportDue11Months !== undefined
    ? fee.transportDue11Months
    : (Number(student.transport?.monthlyFare || 0) * Number(student.transport?.months || 11));

  const p = student.parents || {};
  const custom = student.customFields || {};

  return (
    <div className="space-y-3 font-sans print:m-0 print:p-0">
      {/* Top Action Bar (Hidden on Print) */}
      <div className="flex items-center justify-between p-3 rounded-2xl bg-indigo-50 dark:bg-slate-800 border border-indigo-200 dark:border-slate-700 print:hidden">
        <div>
          <h4 className="text-xs font-black text-indigo-950 dark:text-indigo-200 uppercase">
            📄 Complete Student Master Dossier & Live Fee Statement
          </h4>
          <p className="text-[11px] text-slate-500">
            A4 1-Page Master Record Sheet for <strong className="text-indigo-600">{student.name}</strong>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs rounded-xl flex items-center gap-1.5 shadow-md shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" /> 🖨️ Print Full Details (1 Page)
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

      {/* 📄 OFFICIAL A4 PRINTABLE SHEET (Exact 1-Page Layout Starting at Top: 0) */}
      <div className="bg-white text-slate-950 p-4 sm:p-5 rounded-xl border border-slate-300 shadow-sm print:border-none print:p-0 print:m-0 print:shadow-none text-[10px] leading-tight space-y-2 max-w-[760px] mx-auto">
        
        {/* 1. Official School Header */}
        <div className="border-b-2 border-slate-950 pb-2 text-center">
          <div className="flex items-center justify-between gap-2">
            <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center border-2 border-slate-950 shrink-0">
              DMPS
            </div>
            <div className="flex-1 px-2">
              <h1 className="text-base sm:text-lg font-black uppercase tracking-wider text-slate-950 leading-tight">
                DADHEECH MEMORIAL PUBLIC SCHOOL
              </h1>
              <p className="text-[10px] font-bold text-slate-800">
                Affiliated to Central Board of Secondary Education (CBSE), New Delhi • Affiliation No: 2133481 | School Code: 61348
              </p>
              <p className="text-[9px] text-slate-600">
                Ramghat Road, Jargwan, Bulandshahr, UP - 202395 | Helpline: +91 97588 82443, +91 98371 00000
              </p>
            </div>
            <div className="text-right text-[9px] font-mono font-bold text-slate-700 shrink-0">
              <p>Session: 2026-2027</p>
              <p>Date: {new Date().toLocaleDateString('en-GB')}</p>
            </div>
          </div>

          <div className="mt-1.5 py-0.5 bg-slate-950 text-white rounded font-black text-[10px] uppercase tracking-wider">
            📋 STUDENT COMPREHENSIVE MASTER PROFILE & FEE DOSSIER (छात्र संपूर्ण विवरण प्रपत्र)
          </div>
        </div>

        {/* 2. Primary Student & Academic Identity */}
        <div className="flex gap-3 items-start border border-slate-300 p-2 rounded-lg bg-slate-50/50">
          {/* Photo */}
          <div className="w-20 h-24 rounded-lg border-2 border-slate-800 overflow-hidden bg-slate-100 shrink-0 flex flex-col items-center justify-center">
            <img
              src={student.photo || `https://ui-avatars.com/api/?name=${student.name.replace(' ', '+')}&background=4F46E5&color=fff&size=128&bold=true`}
              alt={student.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${student.name.replace(' ', '+')}&background=4F46E5&color=fff&size=128&bold=true`;
              }}
            />
          </div>

          {/* Academic & Personal Grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[10px]">
            <div>
              <span className="text-slate-500 font-bold block text-[9px]">Student Full Name:</span>
              <strong className="text-xs font-black text-blue-900 uppercase">{student.name}</strong>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[9px]">Register / Adm No:</span>
              <strong className="font-mono text-slate-900 text-xs font-black">{student.admissionNo}</strong>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[9px]">Ledger No. (खाता सं.):</span>
              <strong className="font-mono text-indigo-700 text-xs font-black">#{student.rollNo || '0'}</strong>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[9px]">Class & Section:</span>
              <strong className="font-black text-slate-900">{student.class} - {student.section || 'A'}</strong>
            </div>

            <div>
              <span className="text-slate-500 font-bold block text-[9px]">Admission Date:</span>
              <strong className="font-mono text-slate-900">{student.admissionDate || '01/04/2026'}</strong>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[9px]">Date of Birth (DOB):</span>
              <strong className="font-mono text-slate-900">{student.dob || 'N/A'}</strong>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[9px]">Gender:</span>
              <strong className="text-slate-900 capitalize">{student.gender || 'N/A'}</strong>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[9px]">Blood Group:</span>
              <strong className="text-rose-700 font-bold">{student.bloodGroup || 'O+'}</strong>
            </div>

            <div>
              <span className="text-slate-500 font-bold block text-[9px]">Category / Caste:</span>
              <strong className="text-slate-900">{student.category || 'General'} {custom.caste ? `(${custom.caste})` : ''}</strong>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[9px]">Religion:</span>
              <strong className="text-slate-900 uppercase">{custom.religion || 'HINDU'}</strong>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[9px]">Mother Tongue:</span>
              <strong className="text-slate-900">{student.motherTongue || 'Hindi'}</strong>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[9px]">Height / Weight:</span>
              <strong className="text-slate-900">{student.heightCms ? `${student.heightCms} cm` : '-'} / {student.weightKg ? `${student.weightKg} kg` : '-'}</strong>
            </div>
          </div>
        </div>

        {/* 3. Government & Statutory Identity */}
        <div className="border border-slate-300 p-2 rounded-lg bg-white">
          <h4 className="font-black text-[9px] uppercase text-indigo-900 tracking-wider mb-1 flex items-center gap-1 border-b border-slate-200 pb-0.5">
            <ShieldCheck className="w-3 h-3 text-indigo-600" /> Government & Statutory Identity Numbers
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[10px]">
            <div>
              <span className="text-slate-500 block text-[9px]">PEN No. (UDISE):</span>
              <strong className="font-mono text-slate-900 font-bold">{custom.penNo || 'N/A'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[9px]">Student Aadhaar No:</span>
              <strong className="font-mono text-slate-900 font-bold">{custom.studentAadhaar || 'N/A'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[9px]">Name as per Aadhaar:</span>
              <strong className="text-slate-900">{custom.nameAsPerAadhaar || student.name}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[9px]">RTE Quota Admission:</span>
              <strong className="text-slate-900 font-bold">{student.isRteStudent ? '🏛️ Yes (RTE Quota)' : 'No (General)'}</strong>
            </div>
          </div>
        </div>

        {/* 4. Complete Parent & Guardian Information */}
        <div className="border border-slate-300 p-2 rounded-lg bg-white">
          <h4 className="font-black text-[9px] uppercase text-indigo-900 tracking-wider mb-1 flex items-center gap-1 border-b border-slate-200 pb-0.5">
            <User className="w-3 h-3 text-indigo-600" /> Parents & Guardian Comprehensive Record
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[10px]">
            <div>
              <span className="text-slate-500 block text-[9px]">Father's Name:</span>
              <strong className="text-slate-900 uppercase font-black">{p.fatherName || 'N/A'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[9px]">Father Mobile:</span>
              <strong className="font-mono text-slate-900 font-bold">{p.fatherMobile || p.fatherPhone || 'N/A'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[9px]">Father Occupation:</span>
              <strong className="text-slate-900">{p.fatherOccupation || p.occupation || 'Agriculture / Business'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[9px]">Father Education:</span>
              <strong className="text-slate-900">{p.fatherEducation || 'Graduate / Secondary'}</strong>
            </div>

            <div>
              <span className="text-slate-500 block text-[9px]">Mother's Name:</span>
              <strong className="text-slate-900 uppercase font-black">{p.motherName || 'N/A'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[9px]">Mother Mobile:</span>
              <strong className="font-mono text-slate-900 font-bold">{p.motherMobile || p.motherPhone || 'N/A'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[9px]">Mother Occupation:</span>
              <strong className="text-slate-900">{p.motherOccupation || 'Homemaker'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[9px]">Mother Education:</span>
              <strong className="text-slate-900">{p.motherEducation || 'Literate / Graduate'}</strong>
            </div>

            {p.guardianName && (
              <>
                <div>
                  <span className="text-slate-500 block text-[9px]">Guardian Name:</span>
                  <strong className="text-slate-900 uppercase font-bold">{p.guardianName}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[9px]">Guardian Relation & Mob:</span>
                  <strong className="text-slate-900">{p.guardianRelation || 'Local Guardian'} - {p.guardianMobile || '-'}</strong>
                </div>
              </>
            )}

            <div className="sm:col-span-4 pt-1 border-t border-slate-100 flex justify-between gap-2">
              <p><span className="text-slate-500">Residential Address / Village:</span> <strong className="text-slate-900">{p.address || p.presentAddress || 'N/A'}</strong></p>
              {p.permanentAddress && p.permanentAddress !== p.address && (
                <p><span className="text-slate-500">Permanent Address:</span> <strong className="text-slate-900">{p.permanentAddress}</strong></p>
              )}
            </div>
          </div>
        </div>

        {/* 5. 💰 COMPLETE FEE STRUCTURE & LIVE OUTSTANDING DUES (Prominent Box) */}
        <div className="border-2 border-amber-400 p-2 rounded-lg bg-amber-50/40">
          <div className="flex items-center justify-between pb-1 border-b border-amber-300">
            <h4 className="font-black text-[10px] uppercase text-amber-950 flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5 text-amber-700" />
              Official Fee Ledger & Live Outstanding Statement (शुल्क विवरण)
            </h4>
            <span className="text-[9px] font-bold text-amber-900 font-mono">
              Academic Session 2026-2027
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 pt-1 text-[10px]">
            <div className="p-1.5 rounded-lg bg-white border border-amber-200 text-center">
              <span className="text-[9px] text-slate-500 block">🎓 Tuition Fee</span>
              <strong className="font-mono font-bold text-slate-900">
                ₹{(fee.tuitionDue !== undefined ? fee.tuitionDue : 13500).toLocaleString('en-IN')}
              </strong>
            </div>

            <div className="p-1.5 rounded-lg bg-white border border-amber-200 text-center">
              <span className="text-[9px] text-slate-500 block">🚌 Transport ({student.transport?.months || 11}M)</span>
              <strong className="font-mono font-bold text-slate-900">
                ₹{Number(transportFare11M || 0).toLocaleString('en-IN')}
              </strong>
            </div>

            <div className="p-1.5 rounded-lg bg-white border border-amber-200 text-center">
              <span className="text-[9px] text-slate-500 block">🏢 Hostel Fee</span>
              <strong className="font-mono font-bold text-slate-900">
                ₹{Number(fee.hostelDue || 0).toLocaleString('en-IN')}
              </strong>
            </div>

            <div className="p-1.5 rounded-lg bg-amber-100 border border-amber-400 text-center">
              <span className="text-[9px] text-amber-950 font-black block">📜 Old Session Fees</span>
              <strong className="font-mono font-black text-amber-950">
                ₹{Number(fee.oldSessionDues || 0).toLocaleString('en-IN')}
              </strong>
            </div>

            <div className="p-1.5 rounded-lg bg-white border border-amber-200 text-center">
              <span className="text-[9px] text-slate-500 block">📦 Misc Charges</span>
              <strong className="font-mono font-bold text-slate-900">
                ₹{Number(fee.miscellaneousDue || 0).toLocaleString('en-IN')}
              </strong>
            </div>
          </div>

          {/* Misc Charges Itemized List (If any) */}
          {Array.isArray(fee.miscellaneousBreakdown) && fee.miscellaneousBreakdown.length > 0 && (
            <div className="mt-1 p-1 rounded bg-white border border-amber-200 text-[9px] text-slate-700 flex flex-wrap items-center gap-1.5">
              <strong className="text-amber-900 font-bold">Misc Items:</strong>
              {fee.miscellaneousBreakdown.map((item, i) => (
                <span key={i} className="px-1 py-0.2 rounded bg-slate-100 font-medium">
                  {item.title}: ₹{Number(item.amount).toLocaleString('en-IN')}
                </span>
              ))}
            </div>
          )}

          {/* Live Due Summary Banner */}
          <div className="mt-1.5 p-2 rounded-lg bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 text-white flex items-center justify-between">
            <div className="text-[10px]">
              <p className="font-bold">Total Annual Due: ₹{(fee.totalDue || 0).toLocaleString('en-IN')} | Total Paid: ₹{(fee.totalPaid || 0).toLocaleString('en-IN')}</p>
            </div>
            <div className="text-right">
              <span className="text-[9px] uppercase font-bold text-amber-100 block">Net Outstanding Dues (कुल बकाया राशि)</span>
              <strong className="text-sm font-black font-mono tracking-wide">
                ₹{(fee.balance || 0).toLocaleString('en-IN')}
              </strong>
            </div>
          </div>
        </div>

        {/* 6. Transport & Previous School Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px]">
          {/* Transport Fleet */}
          <div className="border border-slate-300 p-2 rounded-lg bg-white space-y-0.5">
            <h4 className="font-black text-[9px] uppercase text-orange-900 flex items-center gap-1 border-b border-slate-200 pb-0.5">
              <Bus className="w-3 h-3 text-orange-600" /> Transport & Fleet Conveyance
            </h4>
            <p><span className="text-slate-500">Route Name:</span> <strong>{student.transport?.route || 'Self / Walker'}</strong></p>
            <p><span className="text-slate-500">Stoppage / Village:</span> <strong>{student.transport?.stop || student.transport?.stoppage || 'N/A'}</strong></p>
            <p><span className="text-slate-500">Vehicle / Fare:</span> <strong>{student.transport?.vehicle || 'School Bus'} (₹{student.transport?.monthlyFare || 0} × {student.transport?.months || 11}M)</strong></p>
          </div>

          {/* Previous History */}
          <div className="border border-slate-300 p-2 rounded-lg bg-white space-y-0.5">
            <h4 className="font-black text-[9px] uppercase text-slate-800 flex items-center gap-1 border-b border-slate-200 pb-0.5">
              <BookOpen className="w-3 h-3 text-slate-600" /> Previous School History
            </h4>
            <p><span className="text-slate-500">Previous School:</span> <strong>{student.previousSchoolName || 'Direct Admission / Fresh Entry'}</strong></p>
            <p><span className="text-slate-500">Previous Class:</span> <strong>{student.previousClass || '-'}</strong></p>
            <p><span className="text-slate-500">TC No. & Remarks:</span> <strong>{student.previousTcNo || '-'} {student.previousRemarks ? `(${student.previousRemarks})` : ''}</strong></p>
          </div>
        </div>

        {/* 7. Official Signatures & Seal */}
        <div className="pt-4 border-t border-slate-300 grid grid-cols-3 gap-3 text-center text-[9px] text-slate-700 font-bold">
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
