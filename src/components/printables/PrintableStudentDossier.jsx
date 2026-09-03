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

  const p = student.parents || {};
  const custom = student.customFields || {};

  return (
    <div className="space-y-3 font-sans print:m-0 print:p-0" id="printable-student-dossier">
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 5mm 7mm;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>

      {/* Top Action Bar (Hidden on Print) */}
      <div className="flex items-center justify-between p-3 rounded-2xl bg-indigo-50 dark:bg-slate-800 border border-indigo-200 dark:border-slate-700 print:hidden">
        <div>
          <h4 className="text-xs font-black text-indigo-950 dark:text-indigo-200 uppercase">
            📄 Student Comprehensive Master Profile (A4 / A5 1-Page)
          </h4>
          <p className="text-[11px] text-slate-500">
            Official All-in-One Master Admission Record & Fee Statement for <strong className="text-indigo-600">{student.name}</strong>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs rounded-xl flex items-center gap-1.5 shadow-md shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" /> 🖨️ Print 1-Page Master Sheet
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

      {/* 📄 OFFICIAL 1-PAGE MASTER ADMISSION & FEE DOSSIER (A4 / A5 Scalable) */}
      <div className="bg-white text-slate-950 p-3 sm:p-4 rounded-xl border border-slate-300 shadow-sm print:border-none print:p-0 print:m-0 print:shadow-none text-[9.5px] leading-tight space-y-1.5 max-w-[740px] mx-auto">
        
        {/* 1. Official School Header */}
        <div className="border-b-2 border-slate-900 pb-1.5 text-center">
          <div className="flex items-center justify-between gap-2">
            <div className="w-11 h-11 rounded-lg bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center border-2 border-slate-950 shrink-0">
              DMPS
            </div>
            <div className="flex-1 px-1">
              <h1 className="text-sm sm:text-base font-black uppercase tracking-wider text-slate-950 leading-none">
                DADHEECH MEMORIAL PUBLIC SCHOOL
              </h1>
              <p className="text-[9px] font-bold text-slate-800 mt-0.5">
                Affiliated to CBSE, New Delhi • Affiliation No: 2133481 | School Code: 61348
              </p>
              <p className="text-[8.5px] text-slate-600">
                Ramghat Road, Jargwan, Bulandshahr, UP - 202395 | Helpline: +91 97588 82443, +91 98371 00000
              </p>
            </div>
            <div className="text-right text-[8.5px] font-mono font-bold text-slate-700 shrink-0">
              <p>Session: 2026-2027</p>
              <p>Date: {new Date().toLocaleDateString('en-GB')}</p>
            </div>
          </div>

          <div className="mt-1 py-0.5 bg-slate-900 text-white rounded font-black text-[9px] uppercase tracking-wider">
            📋 OFFICIAL STUDENT MASTER PROFILE & ADMISSION DOSSIER (छात्र संपूर्ण विवरण प्रपत्र)
          </div>
        </div>

        {/* 2. Structured Master Grid with Passport Photo */}
        <div className="flex gap-2 items-stretch">
          
          {/* Passport Photo Box */}
          <div className="w-20 rounded-lg border border-slate-400 overflow-hidden bg-slate-50 shrink-0 flex flex-col items-center justify-center p-1 text-center">
            <img
              src={student.photo || `https://ui-avatars.com/api/?name=${student.name.replace(' ', '+')}&background=4F46E5&color=fff&size=128&bold=true`}
              alt={student.name}
              className="w-16 h-20 object-cover rounded border border-slate-300 shadow-2xs"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${student.name.replace(' ', '+')}&background=4F46E5&color=fff&size=128&bold=true`;
              }}
            />
            <span className="text-[7.5px] font-black uppercase text-slate-600 mt-1 block">
              Passport Photo
            </span>
          </div>

          {/* Master Details Table (Clean Structured Borders) */}
          <div className="flex-1 border border-slate-400 rounded-lg overflow-hidden">
            <table className="w-full text-left text-[9px] border-collapse">
              <tbody className="divide-y divide-slate-300">
                
                <tr className="bg-slate-50/60 divide-x divide-slate-300">
                  <td className="p-1 font-bold text-slate-600 w-24">Register No:</td>
                  <td className="p-1 font-mono font-black text-slate-900">{student.admissionNo}</td>
                  <td className="p-1 font-bold text-slate-600 w-24">Admission No:</td>
                  <td className="p-1 font-mono font-black text-slate-900">{student.admissionNo}</td>
                  <td className="p-1 font-bold text-slate-600 w-24">Ledger No. (खाता):</td>
                  <td className="p-1 font-mono font-black text-indigo-700">#{student.rollNo || '0'}</td>
                </tr>

                <tr className="divide-x divide-slate-300">
                  <td className="p-1 font-bold text-slate-600">Student Name:</td>
                  <td className="p-1 font-black text-blue-900 uppercase">{student.name}</td>
                  <td className="p-1 font-bold text-slate-600">Class & Section:</td>
                  <td className="p-1 font-black text-slate-900">{student.class} - {student.section || 'A'}</td>
                  <td className="p-1 font-bold text-slate-600">Admission Date:</td>
                  <td className="p-1 font-mono text-slate-900">{student.admissionDate || '01/04/2026'}</td>
                </tr>

                <tr className="bg-slate-50/60 divide-x divide-slate-300">
                  <td className="p-1 font-bold text-slate-600">Date of Birth (DOB):</td>
                  <td className="p-1 font-mono font-bold text-slate-900">{student.dob || 'N/A'}</td>
                  <td className="p-1 font-bold text-slate-600">Gender:</td>
                  <td className="p-1 capitalize text-slate-900">{student.gender || 'N/A'}</td>
                  <td className="p-1 font-bold text-slate-600">Blood Group:</td>
                  <td className="p-1 font-bold text-rose-700">{student.bloodGroup || 'O+'}</td>
                </tr>

                <tr className="divide-x divide-slate-300">
                  <td className="p-1 font-bold text-slate-600">PEN No. (UDISE):</td>
                  <td className="p-1 font-mono text-slate-900">{custom.penNo || '-'}</td>
                  <td className="p-1 font-bold text-slate-600">Student Aadhaar:</td>
                  <td className="p-1 font-mono text-slate-900">{custom.studentAadhaar || '-'}</td>
                  <td className="p-1 font-bold text-slate-600">Category / Caste:</td>
                  <td className="p-1 text-slate-900">{student.category || 'General'} {custom.caste ? `(${custom.caste})` : ''}</td>
                </tr>

                <tr className="bg-slate-50/60 divide-x divide-slate-300">
                  <td className="p-1 font-bold text-slate-600">Father's Name:</td>
                  <td className="p-1 font-black uppercase text-slate-900">{p.fatherName || 'N/A'}</td>
                  <td className="p-1 font-bold text-slate-600">Mother's Name:</td>
                  <td className="p-1 font-black uppercase text-slate-900">{p.motherName || 'N/A'}</td>
                  <td className="p-1 font-bold text-slate-600">Religion:</td>
                  <td className="p-1 uppercase text-slate-900">{custom.religion || 'HINDU'}</td>
                </tr>

                <tr className="divide-x divide-slate-300">
                  <td className="p-1 font-bold text-slate-600">Father Mobile:</td>
                  <td className="p-1 font-mono font-bold text-slate-900">{p.fatherMobile || p.fatherPhone || 'N/A'}</td>
                  <td className="p-1 font-bold text-slate-600">Mother Mobile:</td>
                  <td className="p-1 font-mono text-slate-900">{p.motherMobile || p.motherPhone || 'N/A'}</td>
                  <td className="p-1 font-bold text-slate-600">Father Occupation:</td>
                  <td className="p-1 text-slate-900">{p.fatherOccupation || p.occupation || 'Agriculture / Business'}</td>
                </tr>

                <tr className="bg-slate-50/60 divide-x divide-slate-300">
                  <td className="p-1 font-bold text-slate-600">Father Education:</td>
                  <td className="p-1 text-slate-900">{p.fatherEducation || 'Graduate / Secondary'}</td>
                  <td className="p-1 font-bold text-slate-600">Mother Education:</td>
                  <td className="p-1 text-slate-900">{p.motherEducation || 'Literate / Graduate'}</td>
                  <td className="p-1 font-bold text-slate-600">Nationality:</td>
                  <td className="p-1 font-bold text-slate-900">INDIAN</td>
                </tr>

                <tr className="divide-x divide-slate-300">
                  <td className="p-1 font-bold text-slate-600">Height / Weight:</td>
                  <td className="p-1 text-slate-900">{student.heightCms ? `${student.heightCms} cm` : '-'} / {student.weightKg ? `${student.weightKg} kg` : '-'}</td>
                  <td className="p-1 font-bold text-slate-600">Mother Tongue:</td>
                  <td className="p-1 text-slate-900">{student.motherTongue || 'Hindi'}</td>
                  <td className="p-1 font-bold text-slate-600">RTE Admission:</td>
                  <td className="p-1 font-bold text-slate-900">{student.isRteStudent ? 'Yes (RTE Quota)' : 'No (General)'}</td>
                </tr>

                <tr className="bg-slate-50/60 divide-x divide-slate-300">
                  <td className="p-1 font-bold text-slate-600">Present Address:</td>
                  <td colSpan={3} className="p-1 font-bold text-slate-900">{p.address || p.presentAddress || 'N/A'}</td>
                  <td className="p-1 font-bold text-slate-600">Permanent Address:</td>
                  <td className="p-1 text-slate-900">{p.permanentAddress || p.address || 'N/A'}</td>
                </tr>

                <tr className="divide-x divide-slate-300">
                  <td className="p-1 font-bold text-slate-600">Previous School:</td>
                  <td colSpan={5} className="p-1 text-slate-900">
                    <strong>{student.previousSchoolName || 'Direct Admission / Fresh Entry'}</strong> 
                    {student.previousClass ? ` • Previous Class: ${student.previousClass}` : ''}
                    {student.previousTcNo ? ` • TC No: ${student.previousTcNo}` : ''}
                    {student.previousRemarks ? ` • Note: ${student.previousRemarks}` : ''}
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* 3. 💰 OFFICIAL FEE STRUCTURE & LIVE OUTSTANDING STATEMENT */}
        <div className="border border-amber-400 rounded-lg overflow-hidden bg-amber-50/30">
          <div className="bg-amber-100/80 px-2 py-0.5 border-b border-amber-300 flex items-center justify-between">
            <span className="font-black text-[9px] uppercase text-amber-950 flex items-center gap-1">
              <DollarSign className="w-3 h-3 text-amber-700" /> Official Fee Structure & Live Outstanding Ledger (शुल्क विवरण)
            </span>
            <span className="text-[8px] font-bold text-amber-900 font-mono">Academic Session 2026-2027</span>
          </div>
          
          <table className="w-full text-center text-[9px] border-collapse bg-white">
            <thead>
              <tr className="bg-slate-100 divide-x divide-slate-300 text-slate-700 font-bold border-b border-slate-300">
                <th className="p-1">Tuition Fee</th>
                <th className="p-1">Transport ({student.transport?.months || 11}M)</th>
                <th className="p-1">Hostel Fee</th>
                <th className="p-1 bg-amber-200/60 text-amber-950 font-black">Old Session Fees</th>
                <th className="p-1">Misc Charges</th>
                <th className="p-1 bg-slate-200 text-slate-900 font-black">Total Annual Due</th>
                <th className="p-1 bg-emerald-100 text-emerald-950 font-black">Total Paid</th>
                <th className="p-1 bg-rose-600 text-white font-black">Net Outstanding (बकाया)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="divide-x divide-slate-300 font-mono">
                <td className="p-1 font-bold">₹{(fee.tuitionDue !== undefined ? fee.tuitionDue : 13500).toLocaleString('en-IN')}</td>
                <td className="p-1 font-bold">₹{Number(transportFare11M || 0).toLocaleString('en-IN')}</td>
                <td className="p-1">₹{Number(fee.hostelDue || 0).toLocaleString('en-IN')}</td>
                <td className="p-1 font-black text-amber-950 bg-amber-50">₹{Number(fee.oldSessionDues || 0).toLocaleString('en-IN')}</td>
                <td className="p-1">₹{Number(fee.miscellaneousDue || 0).toLocaleString('en-IN')}</td>
                <td className="p-1 font-black bg-slate-50">₹{(fee.totalDue || 0).toLocaleString('en-IN')}</td>
                <td className="p-1 font-black text-emerald-700 bg-emerald-50/50">₹{(fee.totalPaid || 0).toLocaleString('en-IN')}</td>
                <td className="p-1 font-black text-white bg-rose-600 text-[10px]">₹{(fee.balance || 0).toLocaleString('en-IN')}</td>
              </tr>
            </tbody>
          </table>

          {/* Misc Items List (If Any) */}
          {Array.isArray(fee.miscellaneousBreakdown) && fee.miscellaneousBreakdown.length > 0 && (
            <div className="px-2 py-0.5 bg-amber-50 text-[8.5px] text-slate-600 flex flex-wrap items-center gap-1 border-t border-amber-200">
              <strong className="text-amber-900 font-bold">Itemized Misc Charges:</strong>
              {fee.miscellaneousBreakdown.map((item, i) => (
                <span key={i} className="px-1 py-0.2 rounded bg-white border border-amber-200 font-medium">
                  {item.title}: ₹{Number(item.amount).toLocaleString('en-IN')}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* 4. Transport & Conveyance Stoppage Details (If Enrolled) */}
        {student.transport?.route && student.transport?.route !== 'Self / Walker' && (
          <div className="border border-slate-300 rounded-lg p-1.5 bg-slate-50/40 text-[9px] flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <Bus className="w-3 h-3 text-orange-600" />
              <strong className="text-orange-950">Transport Conveyance:</strong>
              <span>Route: <strong>{student.transport.route}</strong></span>
              <span>• Stoppage / Village: <strong>{student.transport.stop || student.transport.stoppage || 'N/A'}</strong></span>
            </div>
            <div className="font-mono font-bold text-slate-800">
              Vehicle: {student.transport.vehicle || 'Bus'} (₹{student.transport.monthlyFare || 0}/M × {student.transport.months || 11} Months)
            </div>
          </div>
        )}

        {/* 5. 📜 OFFICIAL HINDI DECLARATION (घोषणा - Exact Matching Reference) */}
        <div className="border border-slate-300 rounded-lg p-2 bg-slate-50/60 space-y-1">
          <h4 className="font-black text-center text-[9.5px] text-slate-900 uppercase">
            घोषणा (Declaration)
          </h4>
          <p className="text-[8.5px] text-slate-700 leading-snug text-justify">
            मैं घोषणा करता/करती हूँ कि उपर्युक्त विवरण पूर्णतः सत्य हैं। यदि इसमें कोई भी त्रुटि पायी जाती है अथवा भविष्य में अनुशासनहीन आचरण करता/करती हूँ तो मेरा प्रवेश निरस्त कर दिया जाए। विद्यालय द्वारा की गयी अनुशासनात्मक कार्यवाही पर मुझे कोई आपत्ति नहीं होगी।
          </p>
        </div>

        {/* 6. Signatures & Official Stamp Footer */}
        <div className="pt-3 grid grid-cols-4 gap-2 text-center text-[8.5px] text-slate-800 font-bold">
          <div className="border-t border-slate-400 pt-0.5">
            Class Teacher Sign
          </div>
          <div className="border-t border-slate-400 pt-0.5">
            Accountant / Cashier
          </div>
          <div className="border-t border-slate-400 pt-0.5">
            Parent / Guardian Sign
          </div>
          <div className="border-t border-slate-400 pt-0.5">
            Principal Sign & Seal
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrintableStudentDossier;
