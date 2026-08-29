import React from 'react';
import { Printer, QrCode, Phone, MapPin, Droplet, ShieldCheck } from 'lucide-react';

export const PrintableIDCard = ({ person, type = 'student', schoolInfo }) => {
  const isStudent = type === 'student';

  const handlePrint = () => {
    window.print();
  };

  if (!person) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800 p-3 rounded-xl print:hidden">
        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
          Lanyard Smart RFID/QR ID Card Preview
        </span>
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm transition-all"
        >
          <Printer className="w-4 h-4" /> Print ID Card
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 py-6 bg-slate-100 dark:bg-slate-950 p-6 rounded-2xl">
        {/* FRONT SIDE */}
        <div className="w-[320px] h-[480px] bg-gradient-to-b from-indigo-900 via-indigo-950 to-slate-950 text-white rounded-2xl shadow-2xl overflow-hidden border-2 border-indigo-500/30 flex flex-col justify-between relative print:shadow-none">
          {/* Lanyard Hole Mockup */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-slate-900/80 rounded-full border border-slate-700"></div>

          {/* School Header */}
          <div className="pt-6 px-4 text-center">
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-300">
              {schoolInfo?.name || "Delhi Public Global Academy"}
            </h2>
            <p className="text-[10px] text-indigo-200/80 font-medium tracking-wide">
              Affiliated to CBSE | Code: {schoolInfo?.schoolCode || "DEL-8921"}
            </p>
          </div>

          {/* Photo & Badge */}
          <div className="flex flex-col items-center px-4 my-auto">
            <div className="relative">
              <div className="w-28 h-28 rounded-2xl p-1 bg-gradient-to-tr from-amber-400 to-indigo-500 shadow-xl">
                <img
                  src={person.photo || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"}
                  alt={person.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <span className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase shadow-md ${isStudent ? 'bg-amber-400 text-slate-950' : 'bg-emerald-400 text-slate-950'}`}>
                {isStudent ? 'STUDENT' : 'FACULTY'}
              </span>
            </div>

            <h3 className="text-base font-extrabold text-white mt-4 text-center tracking-tight">
              {person.name}
            </h3>
            <p className="text-xs font-semibold text-indigo-300 mt-0.5">
              {isStudent ? `${person.class} - ${person.section}` : person.designation}
            </p>
          </div>

          {/* Details Bar */}
          <div className="bg-white/10 backdrop-blur-md px-4 py-3 mx-3 mb-2 rounded-xl text-[11px] space-y-1 border border-white/10">
            <div className="flex justify-between">
              <span className="text-indigo-200">ID / Adm No:</span>
              <span className="font-bold text-white">{isStudent ? person.admissionNo : person.employeeId}</span>
            </div>
            {isStudent && (
              <div className="flex justify-between">
                <span className="text-indigo-200">Roll No & House:</span>
                <span className="font-bold text-white">{person.rollNo} | {person.house?.split(' ')[0] || "Phoenix"}</span>
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="text-indigo-200 flex items-center gap-1">
                <Droplet className="w-3 h-3 text-rose-400" /> Blood Group:
              </span>
              <span className="font-bold text-rose-300">{person.bloodGroup || "O+"}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-indigo-200 flex items-center gap-1">
                <Phone className="w-3 h-3 text-emerald-400" /> Emergency:
              </span>
              <span className="font-bold text-white">{isStudent ? person.parents?.emergencyContact : person.mobile}</span>
            </div>
          </div>

          {/* Footer Stripe */}
          <div className="bg-indigo-600 px-4 py-1.5 text-center text-[10px] font-bold text-indigo-100 tracking-wider uppercase">
            Valid For Academic Session {schoolInfo?.academicSession || "2026-2027"}
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="w-[320px] h-[480px] bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden border-2 border-slate-300 flex flex-col justify-between p-5 relative print:shadow-none">
          {/* Lanyard Hole Mockup */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-slate-200 rounded-full border border-slate-300"></div>

          <div className="pt-4 text-center border-b border-slate-200 pb-3">
            <div className="inline-flex items-center gap-1 text-[10px] font-bold text-indigo-900 uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" /> Official Identification
            </div>
            <p className="text-[10px] text-slate-500 mt-1">If found, please return to school campus security.</p>
          </div>

          {/* QR Code & Barcode Mockup */}
          <div className="flex flex-col items-center justify-center my-auto py-2">
            <div className="p-2 border-2 border-slate-900 rounded-xl bg-white shadow-sm mb-2">
              <QrCode className="w-24 h-24 text-slate-900" />
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-700 tracking-widest">
              *{isStudent ? person.id : person.employeeId}*
            </span>
          </div>

          {/* Contact Details */}
          <div className="text-[10px] text-slate-600 space-y-1.5 border-t border-slate-200 pt-3">
            <div className="flex items-start gap-1.5">
              <MapPin className="w-3 h-3 text-indigo-600 shrink-0 mt-0.5" />
              <span>{schoolInfo?.address || "Knowledge Park, New Delhi"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-emerald-600 shrink-0" />
              <span>{schoolInfo?.phone || "+91 11 2789 4500"}</span>
            </div>
          </div>

          {/* Principal Signature */}
          <div className="flex justify-between items-end border-t border-slate-200 pt-2 text-[9px] font-semibold text-slate-700">
            <span>Card Serial: #{person?.admissionNo || person?.employeeId || "DPGA-982371"}</span>
            <div className="text-center">
              <div className="font-serif italic text-xs text-indigo-950 font-bold mb-0.5">Arvind Shrivastava</div>
              <div className="w-20 border-b border-slate-400 mb-0.5"></div>
              <span>Principal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
