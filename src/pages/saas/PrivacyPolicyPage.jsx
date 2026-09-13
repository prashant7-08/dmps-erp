import React from 'react';
import { ShieldCheck, ArrowLeft, CheckCircle2, Lock, FileText, Building2, Phone, Mail, MapPin } from 'lucide-react';

export const PrivacyPolicyPage = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-5">
        <button
          onClick={() => onNavigate('home')}
          className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 flex items-center gap-2 shadow-sm transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold">
          Govt. MSME: UDYAM-UP-02-0128276
        </span>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
        
        {/* Title */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Privacy Policy</h1>
              <p className="text-xs text-slate-500 font-medium">Official Privacy & Data Protection Compliance — PKR ENTERPRISES</p>
            </div>
          </div>
          
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div><strong>Enterprise Name:</strong> PKR ENTERPRISES</div>
            <div><strong>MSME Reg. No.:</strong> UDYAM-UP-02-0128276</div>
            <div><strong>Official Support:</strong> +91 9719476606</div>
            <div><strong>Email:</strong> prashant732009@gmail.com</div>
          </div>
        </div>

        {/* Section 1 */}
        <div className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>1. Introduction & Overview</span>
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            This Privacy Policy applies to all applications, cloud portals, and software platforms operated by <strong>PKR ENTERPRISES</strong> (including "Dadheech Memorial Public School Portal", "Dadheech ERP", "PKR ENTERPRISES", and "PKR Smart Campus OS"). We treat the privacy of students, guardians, educators, and institutional personnel with the utmost diligence and adherence to Indian IT laws and global educational data privacy standards.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Lock className="w-4 h-4 text-indigo-600" />
            <span>2. Academic & Guardian Information We Collect</span>
          </h2>
          <ul className="text-xs text-slate-600 space-y-2 list-disc pl-5 leading-relaxed">
            <li><strong>Student Identity Data:</strong> Name, class, section, admission number, roll number, date of birth, guardian phone number, email, and address.</li>
            <li><strong>Attendance & Biometric Logs:</strong> Time-stamped biometric in/out logs synced with campus IoT hardware for student safety and real-time parent notifications.</li>
            <li><strong>Financial & Fee Records:</strong> Invoices, dues, payment IDs, and digital fee receipts. Payment processing is secured via RBI-approved payment gateways.</li>
            <li><strong>Academic Performance:</strong> Examination grades, subject marks, report cards, and syllabus schedules.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>3. Zero Data Sharing Guarantee</span>
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong>PKR ENTERPRISES does not sell, rent, or monetize personal student or institutional records under any circumstances.</strong> Data is exclusively accessible to authorized school administrators, teachers, and verified parents for their designated wards.
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-purple-600" />
            <span>4. Publisher & Legal Entity Contact</span>
          </h2>
          <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 text-xs text-slate-700 space-y-2">
            <p className="font-bold text-slate-900">PKR ENTERPRISES — Data Protection Officer</p>
            <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-indigo-600" /> Dadheech Building, Jargwan, Bulandshahr (U.P.) - 202395, India</p>
            <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-emerald-600" /> +91 9719476606</p>
            <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-indigo-600" /> prashant732009@gmail.com</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default PrivacyPolicyPage;
