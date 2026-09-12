import React from 'react';
import {
  Fingerprint,
  Zap,
  ArrowRight,
  Phone,
  CheckCircle2,
  Bell,
  Clock,
  ShieldCheck,
  Check,
  Users,
  Smartphone,
  Server,
  HelpCircle
} from 'lucide-react';
import { Breadcrumb } from '../../components/layout/Breadcrumb';

export const BiometricsPage = ({ onNavigate, onOpenContactModal }) => {
  const handleWhatsAppBooking = (msg = '') => {
    const text = encodeURIComponent(msg || "Hello PKR EDUTECH! I would like to enquire about Biometric Fingerprint & Face Recognition Attendance setup for my school.");
    window.open(`https://wa.me/918292464812?text=${text}`, '_blank');
  };

  const devices = [
    {
      name: 'Fingerprint + RFID Attendance Terminal',
      brand: 'Secureye / Essl Enterprise',
      price: '₹ 6,499 (Device + Software)',
      capacity: '3,000 Fingerprints • 100,000 Logs',
      features: ['LAN & Wi-Fi Enabled', 'Instant WhatsApp Push', 'Battery Backup Included', '1 Year Replacement Warranty']
    },
    {
      name: 'AI Dynamic Face Recognition + Thermal',
      brand: 'Realtime / Secureye AI Series',
      price: '₹ 11,999 (Device + Software)',
      capacity: '1,500 Faces • High Speed 0.2s Detection',
      features: ['Touchless Face Scan', 'Mask Detection', 'Live Photo Capture', 'Auto WhatsApp Alerts to Parents']
    },
    {
      name: 'Multi-Terminal Enterprise Campus Pack',
      brand: '3 Devices + Master Sync Engine',
      price: '₹ 19,999 (Full Campus Bundle)',
      capacity: 'Ideal for 1,000+ Students & 100+ Staff',
      features: ['Gate Entry & Exit Sync', 'Centralized Admin Dashboard', 'Staff Auto-Payroll Integration', 'Priority AMC Support']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Services & Products', page: 'home' },
          { label: 'Biometric Attendance Systems' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-emerald-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-900 border border-teal-300 text-xs font-bold">
            <Fingerprint className="w-4 h-4 text-teal-600" />
            <span>IoT Biometric Hardware & Cloud Push Engine</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Smart Biometric Attendance & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-indigo-600">WhatsApp Alert Sync</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Eliminate proxy attendance and build 100% parent trust. When a student or staff scans their finger or face at the school gate, parents receive an instant WhatsApp arrival & departure notification within 2 seconds.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => handleWhatsAppBooking()}
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Book Biometric Device & Installation</span>
            </button>

            <button
              onClick={onOpenContactModal}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center gap-2"
            >
              <span>Request Campus Survey & Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Workflow Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">1</div>
          <h3 className="font-bold text-base text-slate-900">1. Instant Gate Punch</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Student punches finger, RFID card, or faces the AI camera at school gate. Verification happens in less than 0.3 seconds.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">2</div>
          <h3 className="font-bold text-base text-slate-900">2. Local Daemon Auto-Sync</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our background Windows Python sync agent automatically reads machine logs and transmits them securely to the School Cloud ERP.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">3</div>
          <h3 className="font-bold text-base text-slate-900">3. WhatsApp Notification</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            WhatsApp alert fires to parent's phone: "Dear Parent, Aarav has reached school safely at 07:45 AM. Have a great day!"
          </p>
        </div>
      </section>

      {/* Hardware Bundles */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3 py-1 rounded-full border border-teal-300">
            Certified Hardware Models
          </span>
          <h2 className="text-2xl font-black text-slate-900">Biometric Devices & Pricing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {devices.map((dev, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-teal-500 hover:shadow-xl transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                  {dev.brand}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{dev.name}</h3>
                <div className="text-2xl font-black text-slate-900">{dev.price}</div>
                <p className="text-xs text-slate-500">{dev.capacity}</p>

                <ul className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100">
                  {dev.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleWhatsAppBooking(`Hello, I want to purchase ${dev.name} (${dev.price}).`)}
                className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl text-xs transition-colors shadow-sm"
              >
                Order Biometric Device
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default BiometricsPage;
