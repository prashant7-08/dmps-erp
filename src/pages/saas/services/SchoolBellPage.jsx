import React from 'react';
import {
  Bell,
  Volume2,
  Clock,
  Laptop,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
  Zap,
  Music,
  Radio,
  Sliders,
  HelpCircle
} from 'lucide-react';
import { Breadcrumb } from '../../../components/saas/layout/Breadcrumb';

export const SchoolBellPage = ({ onNavigate, onOpenContactModal }) => {
  const handleWhatsAppBooking = (msg = '') => {
    const text = encodeURIComponent(msg || "Hello PKR ENTERPRISES! I would like to purchase your Automatic MP3 School Bell Software.");
    window.open(`https://wa.me/919719476606?text=${text}`, '_blank');
  };

  const bellFeatures = [
    {
      title: 'Precision Time Scheduling (Period 1 to 8)',
      desc: 'Set custom bell timings down to the second. Automatically differentiates between Regular School Days, Exam Days, and Saturday half-days.',
      icon: Clock,
      color: 'text-indigo-600',
      bg: 'bg-indigo-100'
    },
    {
      title: 'Custom MP3 Audio & Devotional Prayers',
      desc: 'Play crisp gong tones, "Sare Jahan Se Achha", morning prayer mantras, National Anthem, lunch alert chimes, or principal voice announcements.',
      icon: Music,
      color: 'text-purple-600',
      bg: 'bg-purple-100'
    },
    {
      title: 'Hardware Amplifier Relay Automation',
      desc: 'Automatically powers on your school PA amplifier 5 seconds before the bell rings and switches it off after playback to prevent buzzing noises.',
      icon: Radio,
      color: 'text-amber-600',
      bg: 'bg-amber-100'
    },
    {
      title: '1-Click Pen Drive Ready Windows App',
      desc: 'Zero complex setup. Portable executable that runs on any Windows 7/10/11 laptop or desktop computer with auto-start on PC boot.',
      icon: Laptop,
      color: 'text-emerald-600',
      bg: 'bg-emerald-100'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Services & Products', page: 'home' },
          { label: 'Automatic MP3 School Bell System' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-300 text-xs font-bold">
            <Bell className="w-4 h-4 text-indigo-600" />
            <span>Automated Audio Bell Software • Windows 10/11 Ready</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Automated MP3 School Bell & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">PA Sound System</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Replace manual peon brass gong bells with high-accuracy digital automated MP3 audio scheduling. Play crisp chime bells, morning prayers, national anthems, and emergency alarms automatically on time every day.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => handleWhatsAppBooking("Hello, I want to purchase Automatic School Bell Software for ₹1,999.")}
              className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Buy Bell Software License (₹ 1,999 Lifetime)</span>
            </button>

            <button
              onClick={onOpenContactModal}
              className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-300 transition-all text-xs flex items-center gap-2"
            >
              <span>Get Full PA System & Speaker Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4 Feature Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bellFeatures.map((f, idx) => {
          const Icon = f.icon;
          return (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className={`w-12 h-12 rounded-xl ${f.bg} ${f.color} flex items-center justify-center`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">{f.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          );
        })}
      </section>

      {/* Pricing Tiers for Bell System */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
            Transparent Pricing
          </span>
          <h2 className="text-2xl font-black text-slate-900">Automatic Bell Packages</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Option 1 */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
                Software Only (Pen Drive Ready)
              </span>
              <h3 className="text-xl font-bold text-slate-900">Digital MP3 Bell Software</h3>
              <div className="text-3xl font-black text-slate-900">₹ 1,999 <span className="text-xs font-normal text-slate-500">One-time / Lifetime</span></div>
              <p className="text-xs text-slate-600">Install on existing school laptop/PC and connect audio cable to school amplifier.</p>

              <ul className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Unlimited period schedules</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 20+ Pre-loaded high quality audio tones</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Auto Windows startup on PC power on</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Lifetime license key for 1 PC</li>
              </ul>
            </div>

            <button
              onClick={() => handleWhatsAppBooking("Hello, I want to purchase Digital MP3 Bell Software for ₹1,999.")}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs transition-colors shadow-sm"
            >
              Order Bell Software License
            </button>
          </div>

          {/* Option 2 */}
          <div className="p-8 rounded-3xl bg-white border border-amber-400 shadow-xl ring-2 ring-amber-400/20 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md border border-amber-300">
                Complete Hardware + Amplifier Setup
              </span>
              <h3 className="text-xl font-bold text-slate-900">Full Smart Campus Audio Station</h3>
              <div className="text-3xl font-black text-slate-900">₹ 8,999 <span className="text-xs font-normal text-slate-500">Complete Kit</span></div>
              <p className="text-xs text-slate-600">Hardware relay controller, heavy-duty amplifier switch, and software suite with installation.</p>

              <ul className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Automated amplifier power on/off relay</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Zero background static humming noise</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Includes remote control & manual emergency switch</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 1 Year hardware replacement warranty</li>
              </ul>
            </div>

            <button
              onClick={() => handleWhatsAppBooking("Hello, I want to book Complete Smart Campus Audio Station for ₹8,999.")}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-colors shadow-sm"
            >
              Order Full Hardware Kit
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SchoolBellPage;
