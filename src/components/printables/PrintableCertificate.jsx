import React from 'react';
import { Printer, Award, ShieldCheck } from 'lucide-react';

export const PrintableCertificate = ({ cert, schoolInfo, onPrint }) => {
  const handlePrint = () => {
    if (onPrint) onPrint();
    else window.print();
  };

  if (!cert) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800 p-3 rounded-xl print:hidden">
        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
          Official School Certificate Preview
        </span>
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm transition-all"
        >
          <Printer className="w-4 h-4" /> Print Certificate
        </button>
      </div>

      <div 
        id="printable-certificate"
        className="bg-[#faf8f5] text-slate-900 p-10 rounded-2xl border-[12px] border-double border-[#2c3e50] shadow-2xl max-w-3xl mx-auto font-serif print:shadow-none print:p-8 relative"
      >
        {/* Ornate corner marks */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#2c3e50]"></div>
        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#2c3e50]"></div>
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#2c3e50]"></div>
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#2c3e50]"></div>

        {/* School Crest & Title */}
        <div className="text-center border-b-2 border-[#2c3e50] pb-6 mb-8">
          <div className="w-16 h-16 bg-[#2c3e50] text-amber-400 mx-auto rounded-full flex items-center justify-center font-black text-2xl mb-3 shadow-md">
            <Award className="w-8 h-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#1a252f]">
            {schoolInfo?.name || "Delhi Public Global Academy"}
          </h1>
          <p className="text-xs tracking-widest uppercase text-slate-600 font-sans mt-1">
            {schoolInfo?.affiliation || "Affiliated to CBSE, New Delhi"} | Code: {schoolInfo?.schoolCode || "DEL-8921"}
          </p>
          <p className="text-xs text-slate-500 font-sans mt-0.5">
            {schoolInfo?.address || "Knowledge Park, New Delhi"}
          </p>

          <div className="mt-4">
            <span className="inline-block bg-[#1a252f] text-amber-200 text-sm font-sans font-bold uppercase px-6 py-1.5 rounded-md tracking-widest shadow-sm">
              {cert.type || "BONAFIDE CERTIFICATE"}
            </span>
          </div>
        </div>

        {/* Certificate Meta */}
        <div className="flex justify-between text-xs font-sans text-slate-600 mb-8 border-b border-slate-300 pb-2">
          <span>Certificate No: <strong className="text-slate-900 font-mono">{cert.certNumber || "DPGA/2026/0412"}</strong></span>
          <span>Date of Issue: <strong className="text-slate-900">{cert.issueDate || new Date().toISOString().split('T')[0]}</strong></span>
        </div>

        {/* Certificate Body */}
        <div className="text-base sm:text-lg leading-relaxed text-slate-800 text-justify mb-12 px-4">
          <p>
            This is to certify that Master/Miss <strong className="text-[#1a252f] uppercase underline decoration-[#2c3e50] font-sans font-bold px-1">{cert.studentName}</strong>, 
            Son/Daughter of <strong className="text-[#1a252f] font-sans font-bold px-1">{cert.fatherName || "Parent"}</strong>, 
            bearing Admission Number <strong className="text-[#1a252f] font-mono font-bold px-1">{cert.admissionNo || "ADM-2023-8901"}</strong>, 
            is/was a bonafide student of this institution studying in <strong className="text-[#1a252f] font-sans font-bold px-1">{cert.class} - Section {cert.section || "A"}</strong> during 
            the academic session <strong className="text-[#1a252f] font-sans font-bold px-1">{schoolInfo?.academicSession || "2026-2027"}</strong>.
          </p>
          
          <p className="mt-4">
            According to the school records, his/her character and conduct have been <strong className="text-[#1a252f] font-sans font-bold px-1">Exemplary</strong>. 
            {cert.purpose && <span> This certificate is issued on request for the specific purpose of <strong className="text-[#1a252f] font-sans font-bold px-1">{cert.purpose}</strong>.</span>}
          </p>

          <p className="mt-4">
            We wish him/her all success and distinction in all future academic endeavors.
          </p>
        </div>

        {/* Signatures and Seal */}
        <div className="flex justify-between items-end pt-8 font-sans text-xs">
          <div className="text-center">
            <div className="w-36 border-b border-slate-600 mb-1"></div>
            <span className="text-slate-700 font-semibold">Prepared By</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#2c3e50] flex flex-col items-center justify-center text-[10px] text-[#2c3e50] font-bold uppercase transform -rotate-12 bg-white/50">
              <ShieldCheck className="w-5 h-5 mb-0.5 text-amber-600" />
              <span>Official</span>
              <span>Seal</span>
            </div>
          </div>

          <div className="text-center">
            <div className="font-serif italic text-base text-indigo-950 font-bold mb-1">Arvind Shrivastava</div>
            <div className="w-40 border-b border-slate-600 mb-1"></div>
            <span className="text-slate-900 font-bold">Principal / Head of Institution</span>
          </div>
        </div>
      </div>
    </div>
  );
};
