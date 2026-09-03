import React from 'react';
import { Printer, X, DollarSign, Bus } from 'lucide-react';

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
    <div className="space-y-2 font-sans print:m-0 print:p-0" id="printable-student-dossier">
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 4mm 6mm;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            background: #ffffff !important;
          }
        }
      `}</style>

      {/* Top Action Bar (Hidden on Print) */}
      <div className="flex items-center justify-between p-2.5 rounded-2xl bg-indigo-50 dark:bg-slate-800 border border-indigo-200 dark:border-slate-700 print:hidden">
        <div>
          <h4 className="text-xs font-black text-indigo-950 dark:text-indigo-200 uppercase">
            📄 Student Master Admission Slip (Half A4 / A5 Print)
          </h4>
          <p className="text-[10.5px] text-slate-500">
            Compact Master Record for <strong className="text-indigo-600">{student.name}</strong>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs rounded-xl flex items-center gap-1.5 shadow-md shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" /> 🖨️ Print Slip (Half A4)
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

      {/* 📄 OFFICIAL HALF-A4 / A5 COMPACT MASTER ADMISSION SLIP */}
      <div className="bg-white text-slate-950 p-2.5 sm:p-3 rounded-lg border border-slate-300 shadow-sm print:border-none print:p-0 print:m-0 print:shadow-none text-[9px] leading-tight space-y-1 max-w-[720px] mx-auto">
        
        {/* 1. Official School Header with Monogram */}
        <div className="border-b-2 border-slate-950 pb-1 text-center">
          <div className="flex items-center justify-between gap-2">
            {/* School Monogram */}
            <img
              src="/logo.png"
              alt="DMPS Monogram"
              className="w-11 h-11 object-contain shrink-0"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="flex-1 px-1">
              <h1 className="text-sm sm:text-base font-black uppercase tracking-wider text-slate-950 leading-none">
                DADHEECH MEMORIAL PUBLIC SCHOOL
              </h1>
              <p className="text-[8.5px] font-bold text-slate-800 mt-0.5">
                Affiliated to Bhartiya Shiksha Board (BSB as CBSE Pattern) • Recognized Up to 12th | Affiliation No: UP0F25070073 | Code: 00065
              </p>
              <p className="text-[8px] text-slate-600">
                Ramghat Road Border, Jargwan, Bulandshahr (U.P.) | Helpline: +91 97589 75880, +91 96270 32626 | www.dmpsjargawan.com
              </p>
            </div>
            <div className="text-right text-[8px] font-mono font-bold text-slate-700 shrink-0">
              <p>Session: 2026-2027</p>
              <p>Date: {new Date().toLocaleDateString('en-GB')}</p>
            </div>
          </div>

          <div className="mt-0.5 py-0.5 bg-slate-900 text-white rounded font-black text-[8.5px] uppercase tracking-wider">
            📋 STUDENT MASTER PROFILE & ADMISSION RECORD (छात्र संपूर्ण विवरण प्रपत्र)
          </div>
        </div>

        {/* 2. Structured Master Grid with Passport Photo */}
        <div className="flex gap-1.5 items-stretch">
          
          {/* Passport Photo Box */}
          <div className="w-18 rounded border border-slate-400 overflow-hidden bg-slate-50 shrink-0 flex flex-col items-center justify-center p-1 text-center">
            <img
              src={student.photo || `https://ui-avatars.com/api/?name=${student.name.replace(' ', '+')}&background=4F46E5&color=fff&size=128&bold=true`}
              alt={student.name}
              className="w-14 h-18 object-cover rounded border border-slate-300"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${student.name.replace(' ', '+')}&background=4F46E5&color=fff&size=128&bold=true`;
              }}
            />
            <span className="text-[7px] font-bold uppercase text-slate-500 mt-0.5 block">
              Photo
            </span>
          </div>

          {/* Master Details Table */}
          <div className="flex-1 border border-slate-400 rounded overflow-hidden">
            <table className="w-full text-left text-[8.5px] border-collapse">
              <tbody className="divide-y divide-slate-300">
                
                <tr className="bg-slate-50/70 divide-x divide-slate-300">
                  <td className="p-0.5 px-1 font-bold text-slate-600 w-20">Register No:</td>
                  <td className="p-0.5 px-1 font-mono font-black text-slate-900">{student.admissionNo}</td>
                  <td className="p-0.5 px-1 font-bold text-slate-600 w-20">Admission No:</td>
                  <td className="p-0.5 px-1 font-mono font-black text-slate-900">{student.admissionNo}</td>
                  <td className="p-0.5 px-1 font-bold text-slate-600 w-20">Ledger (खाता):</td>
                  <td className="p-0.5 px-1 font-mono font-black text-indigo-700">#{student.rollNo || '0'}</td>
                </tr>

                <tr className="divide-x divide-slate-300">
                  <td className="p-0.5 px-1 font-bold text-slate-600">Student Name:</td>
                  <td className="p-0.5 px-1 font-black text-blue-900 uppercase">{student.name}</td>
                  <td className="p-0.5 px-1 font-bold text-slate-600">Class & Section:</td>
                  <td className="p-0.5 px-1 font-black text-slate-900">{student.class} - {student.section || 'A'}</td>
                  <td className="p-0.5 px-1 font-bold text-slate-600">Admission Date:</td>
                  <td className="p-0.5 px-1 font-mono text-slate-900">{student.admissionDate || '01/04/2026'}</td>
                </tr>

                <tr className="bg-slate-50/70 divide-x divide-slate-300">
                  <td className="p-0.5 px-1 font-bold text-slate-600">DOB (Date of Birth):</td>
                  <td className="p-0.5 px-1 font-mono font-bold text-slate-900">{student.dob || 'N/A'}</td>
                  <td className="p-0.5 px-1 font-bold text-slate-600">Gender:</td>
                  <td className="p-0.5 px-1 capitalize text-slate-900">{student.gender || 'N/A'}</td>
                  <td className="p-0.5 px-1 font-bold text-slate-600">Blood Group:</td>
                  <td className="p-0.5 px-1 font-bold text-rose-700">{student.bloodGroup || 'O+'}</td>
                </tr>

                <tr className="divide-x divide-slate-300">
                  <td className="p-0.5 px-1 font-bold text-slate-600">PEN No. (UDISE):</td>
                  <td className="p-0.5 px-1 font-mono text-slate-900">{custom.penNo || '-'}</td>
                  <td className="p-0.5 px-1 font-bold text-slate-600">Student Aadhaar:</td>
                  <td className="p-0.5 px-1 font-mono text-slate-900">{custom.studentAadhaar || '-'}</td>
                  <td className="p-0.5 px-1 font-bold text-slate-600">Category / Caste:</td>
                  <td className="p-0.5 px-1 text-slate-900">{student.category || 'General'} {custom.caste ? `(${custom.caste})` : ''}</td>
                </tr>

                <tr className="bg-slate-50/70 divide-x divide-slate-300">
                  <td className="p-0.5 px-1 font-bold text-slate-600">Father's Name:</td>
                  <td className="p-0.5 px-1 font-black uppercase text-slate-900">{p.fatherName || 'N/A'}</td>
                  <td className="p-0.5 px-1 font-bold text-slate-600">Mother's Name:</td>
                  <td className="p-0.5 px-1 font-black uppercase text-slate-900">{p.motherName || 'N/A'}</td>
                  <td className="p-0.5 px-1 font-bold text-slate-600">Religion:</td>
                  <td className="p-0.5 px-1 uppercase text-slate-900">{custom.religion || 'HINDU'}</td>
                </tr>

                <tr className="divide-x divide-slate-300">
                  <td className="p-0.5 px-1 font-bold text-slate-600">Father Mobile:</td>
                  <td className="p-0.5 px-1 font-mono font-bold text-slate-900">{p.fatherMobile || p.fatherPhone || 'N/A'}</td>
                  <td className="p-0.5 px-1 font-bold text-slate-600">Mother Mobile:</td>
                  <td className="p-0.5 px-1 font-mono text-slate-900">{p.motherMobile || p.motherPhone || 'N/A'}</td>
                  <td className="p-0.5 px-1 font-bold text-slate-600">Occupation:</td>
                  <td className="p-0.5 px-1 text-slate-900">{p.fatherOccupation || p.occupation || 'Agriculture / Business'}</td>
                </tr>

                <tr className="bg-slate-50/70 divide-x divide-slate-300">
                  <td className="p-0.5 px-1 font-bold text-slate-600">Father Education:</td>
                  <td className="p-0.5 px-1 text-slate-900">{p.fatherEducation || 'Graduate / Secondary'}</td>
                  <td className="p-0.5 px-1 font-bold text-slate-600">Mother Education:</td>
                  <td className="p-0.5 px-1 text-slate-900">{p.motherEducation || 'Literate / Graduate'}</td>
                  <td className="p-0.5 px-1 font-bold text-slate-600">Nationality:</td>
                  <td className="p-0.5 px-1 font-bold text-slate-900">INDIAN</td>
                </tr>

                <tr className="divide-x divide-slate-300">
                  <td className="p-0.5 px-1 font-bold text-slate-600">Height / Weight:</td>
                  <td className="p-0.5 px-1 text-slate-900">{student.heightCms ? `${student.heightCms} cm` : '-'} / {student.weightKg ? `${student.weightKg} kg` : '-'}</td>
                  <td className="p-0.5 px-1 font-bold text-slate-600">Mother Tongue:</td>
                  <td className="p-0.5 px-1 text-slate-900">{student.motherTongue || 'Hindi'}</td>
                  <td className="p-0.5 px-1 font-bold text-slate-600">RTE Admission:</td>
                  <td className="p-0.5 px-1 font-bold text-slate-900">{student.isRteStudent ? 'Yes (RTE Quota)' : 'No'}</td>
                </tr>

                <tr className="bg-slate-50/70 divide-x divide-slate-300">
                  <td className="p-0.5 px-1 font-bold text-slate-600">Present Address:</td>
                  <td colSpan={3} className="p-0.5 px-1 font-bold text-slate-900">{p.address || p.presentAddress || 'N/A'}</td>
                  <td className="p-0.5 px-1 font-bold text-slate-600">Permanent Address:</td>
                  <td className="p-0.5 px-1 text-slate-900">{p.permanentAddress || p.address || 'N/A'}</td>
                </tr>

                <tr className="divide-x divide-slate-300">
                  <td className="p-0.5 px-1 font-bold text-slate-600">Previous School:</td>
                  <td colSpan={5} className="p-0.5 px-1 text-slate-900">
                    <strong>{student.previousSchoolName || 'Direct Admission / Fresh Entry'}</strong> 
                    {student.previousClass ? ` • Class: ${student.previousClass}` : ''}
                    {student.previousTcNo ? ` • TC: ${student.previousTcNo}` : ''}
                    {student.previousRemarks ? ` • Note: ${student.previousRemarks}` : ''}
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* 3. 💰 OFFICIAL FEE STRUCTURE & LIVE OUTSTANDING STATEMENT */}
        <div className="border border-amber-400 rounded overflow-hidden bg-amber-50/30">
          <div className="bg-amber-100/80 px-1.5 py-0.5 border-b border-amber-300 flex items-center justify-between">
            <span className="font-black text-[8.5px] uppercase text-amber-950 flex items-center gap-1">
              <DollarSign className="w-2.5 h-2.5 text-amber-700" /> Official Fee Structure & Live Outstanding Ledger (शुल्क विवरण)
            </span>
            <span className="text-[7.5px] font-bold text-amber-900 font-mono">Session 2026-2027</span>
          </div>
          
          <table className="w-full text-center text-[8.5px] border-collapse bg-white">
            <thead>
              <tr className="bg-slate-100 divide-x divide-slate-300 text-slate-700 font-bold border-b border-slate-300">
                <th className="p-0.5 px-1">Tuition Fee</th>
                <th className="p-0.5 px-1">Transport ({student.transport?.months || 11}M)</th>
                <th className="p-0.5 px-1">Hostel Fee</th>
                <th className="p-0.5 px-1 bg-amber-200/60 text-amber-950 font-black">Old Session</th>
                <th className="p-0.5 px-1">Misc Charges</th>
                <th className="p-0.5 px-1 bg-slate-200 text-slate-900 font-black">Total Due</th>
                <th className="p-0.5 px-1 bg-emerald-100 text-emerald-950 font-black">Total Paid</th>
                <th className="p-0.5 px-1 bg-rose-600 text-white font-black">Net Outstanding (बकाया)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="divide-x divide-slate-300 font-mono">
                <td className="p-0.5 px-1 font-bold">₹{(fee.tuitionDue !== undefined ? fee.tuitionDue : 13500).toLocaleString('en-IN')}</td>
                <td className="p-0.5 px-1 font-bold">₹{Number(transportFare11M || 0).toLocaleString('en-IN')}</td>
                <td className="p-0.5 px-1">₹{Number(fee.hostelDue || 0).toLocaleString('en-IN')}</td>
                <td className="p-0.5 px-1 font-black text-amber-950 bg-amber-50">₹{Number(fee.oldSessionDues || 0).toLocaleString('en-IN')}</td>
                <td className="p-0.5 px-1">₹{Number(fee.miscellaneousDue || 0).toLocaleString('en-IN')}</td>
                <td className="p-0.5 px-1 font-black bg-slate-50">₹{(fee.totalDue || 0).toLocaleString('en-IN')}</td>
                <td className="p-0.5 px-1 font-black text-emerald-700 bg-emerald-50/50">₹{(fee.totalPaid || 0).toLocaleString('en-IN')}</td>
                <td className="p-0.5 px-1 font-black text-white bg-rose-600 text-[9.5px]">₹{(fee.balance || 0).toLocaleString('en-IN')}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 4. Transport Stoppage Details (If Enrolled) */}
        {student.transport?.route && student.transport?.route !== 'Self / Walker' && (
          <div className="border border-slate-300 rounded p-1 bg-slate-50/40 text-[8.5px] flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <Bus className="w-2.5 h-2.5 text-orange-600" />
              <strong className="text-orange-950">Transport:</strong>
              <span>Route: <strong>{student.transport.route}</strong></span>
              <span>• Stop: <strong>{student.transport.stop || student.transport.stoppage || 'N/A'}</strong></span>
            </div>
            <div className="font-mono font-bold text-slate-800">
              Vehicle: {student.transport.vehicle || 'Bus'} (₹{student.transport.monthlyFare || 0}/M × {student.transport.months || 11}M)
            </div>
          </div>
        )}

        {/* 5. 📜 OFFICIAL HINDI DECLARATION (घोषणा) */}
        <div className="border border-slate-300 rounded p-1.5 bg-slate-50/60 space-y-0.5">
          <h4 className="font-black text-center text-[9px] text-slate-900 uppercase">
            घोषणा (Declaration)
          </h4>
          <p className="text-[8px] text-slate-700 leading-tight text-justify">
            मैं घोषणा करता/करती हूँ कि उपर्युक्त विवरण पूर्णतः सत्य हैं। यदि इसमें कोई भी त्रुटि पायी जाती है अथवा भविष्य में अनुशासनहीन आचरण करता/करती हूँ तो मेरा प्रवेश निरस्त कर दिया जाए। विद्यालय द्वारा की गयी अनुशासनात्मक कार्यवाही पर मुझे कोई आपत्ति नहीं होगी।
          </p>
        </div>

        {/* 6. Signatures Footer (Clean Text Titles with Open Signing Space Above) */}
        <div className="pt-7 sm:pt-8 grid grid-cols-4 gap-2 text-center text-[8.5px] font-bold text-slate-800">
          <div>
            Class Teacher Sign
          </div>
          <div>
            Accountant / Cashier
          </div>
          <div>
            Parent / Guardian Sign
          </div>
          <div>
            Principal Signature & Seal
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrintableStudentDossier;
