import React from 'react';
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Server,
  Zap,
  CheckCircle2,
  Crown
} from 'lucide-react';

export const Footer = ({ onNavigate, onOpenContactModal }) => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white text-slate-700">
      {/* Top Value Banner */}
      <div className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Official Enterprise Level IT Infrastructure Guarantee</h4>
              <p className="text-xs text-slate-500">99.99% Cloud SLA • Daily Encrypted Backups • 24x7 Direct WhatsApp & Phone Assistance</p>
            </div>
          </div>
          <button
            onClick={onOpenContactModal}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-all shrink-0"
          >
            Get Custom Proposal ↗
          </button>
        </div>
      </div>

      {/* Main 4-Column Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Col 1: Brand & Bio */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-black text-slate-900">PKR<span className="text-indigo-600"> EDUTECH</span></span>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Global IT & ERP Ecosystem</p>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
            PKR EDUTECH is a premier technology company delivering Next-Gen School ERP software, dedicated cloud VPS servers, IoT biometric devices, automated MP3 school bells, and PVC smart cards to 100+ schools and businesses across India.
          </p>
          <div className="flex items-center gap-3 text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 inline-flex">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>All Systems 100% Operational • 2027 Ready</span>
          </div>
        </div>

        {/* Col 2: Core Software & Cloud Services */}
        <div className="space-y-3 text-xs">
          <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Software & Cloud</h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => onNavigate('services/school-erp')} className="hover:text-indigo-600 transition-colors">
                School ERP Software (210+ Modules)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('services/cloud-server')} className="hover:text-indigo-600 transition-colors">
                Dedicated Cloud VPS & Databases
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('services/whatsapp-api')} className="hover:text-indigo-600 transition-colors">
                WhatsApp Official Cloud Business API
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('services/retail-billing')} className="hover:text-indigo-600 transition-colors">
                Retail & Pharmacy POS Software
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('modules')} className="hover:text-indigo-600 transition-colors font-semibold text-indigo-600">
                Browse All 210+ ERP Modules →
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Hardware & Smart Campus */}
        <div className="space-y-3 text-xs">
          <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Hardware & Printing</h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => onNavigate('services/biometrics')} className="hover:text-indigo-600 transition-colors">
                Biometric Fingerprint & Face Machines
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('services/school-bell')} className="hover:text-indigo-600 transition-colors">
                Automated MP3 School Bell Software
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('services/id-cards')} className="hover:text-indigo-600 transition-colors">
                PVC Smart ID Cards & Lanyards
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('services/campus-cctv')} className="hover:text-indigo-600 transition-colors">
                Campus CCTV, Mesh Wi-Fi & AMC
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('pricing')} className="hover:text-indigo-600 transition-colors font-semibold text-indigo-600">
                School Pricing Matrix (From ₹2,499) →
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Corporate Office & Direct Contacts */}
        <div className="space-y-3 text-xs">
          <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Direct Contacts</h4>
          <div className="space-y-2.5 text-slate-600">
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">+91 9719476606</strong>
                <span className="text-[11px] text-slate-500">Sales & 24/7 WhatsApp Support</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">prashant732009@gmail.com</strong>
                <span className="text-[11px] text-slate-500">Official Inquiries & Proposals</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-700">PKR EDUTECH Tech Campus, Vinay Nagar, Sangwan City Road, PAC Quarsi (Aligarh), UP, India</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-200 py-6 bg-slate-50 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} PKR EDUTECH Global IT Services. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('about')} className="hover:text-slate-900">About Us</button>
            <span>•</span>
            <button onClick={() => onNavigate('pricing')} className="hover:text-slate-900">Pricing Policy</button>
            <span>•</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-900">Contact Support</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
