import React from 'react';
import { FileText, ArrowLeft, CheckCircle2, ShieldCheck, Phone, Mail, MapPin, Building2 } from 'lucide-react';

export const TermsOfServicePage = ({ onNavigate }) => {
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
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Terms of Service</h1>
              <p className="text-xs text-slate-500 font-medium">Enterprise Software License & Service Level Agreement — PKR ENTERPRISES</p>
            </div>
          </div>
          
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div><strong>Entity:</strong> PKR ENTERPRISES</div>
            <div><strong>MSME Reg:</strong> UDYAM-UP-02-0128276</div>
            <div><strong>Helpline:</strong> +91 9719476606</div>
            <div><strong>Email:</strong> prashant732009@gmail.com</div>
          </div>
        </div>

        {/* Section 1 */}
        <div className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>1. Terms Acceptance & Services</span>
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            By licensing or deploying any software, Android applications, automated bell systems, biometric sync utilities, or cloud ERP solutions developed by <strong>PKR ENTERPRISES</strong>, the client institution agrees to these Terms of Service.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            <span>2. Cloud Infrastructure & 99.9% SLA</span>
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            PKR ENTERPRISES provides high-availability cloud database infrastructure with automated daily snapshots, SSL 256-bit security, and direct technical support.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-purple-600" />
            <span>3. Governing Law & Jurisdiction</span>
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            These terms are governed by the laws of India and subject to the exclusive jurisdiction of the courts located in Bulandshahr, Uttar Pradesh.
          </p>
        </div>

      </div>

    </div>
  );
};

export default TermsOfServicePage;
