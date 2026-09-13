import React from 'react';
import {
  Sparkles,
  Building2,
  Users,
  ShieldCheck,
  Award,
  Globe,
  HeartHandshake,
  CheckCircle2,
  Phone,
  ArrowRight,
  Server
} from 'lucide-react';
import { Breadcrumb } from '../components/layout/Breadcrumb';

export const AboutUsPage = ({ onNavigate, onOpenContactModal }) => {
  const values = [
    {
      title: 'Genuine & Transparent Rates',
      desc: 'We believe premium school technology shouldn’t cost an exorbitant fortune. We provide enterprise quality at affordable local prices.',
      icon: Award,
      color: 'text-amber-600',
      bg: 'bg-amber-100'
    },
    {
      title: '99.99% Rock-Solid Reliability',
      desc: 'Our cloud servers and offline desktop station apps are built with automated daily backups and disaster recovery protocols.',
      icon: Server,
      color: 'text-indigo-600',
      bg: 'bg-indigo-100'
    },
    {
      title: 'On-Campus & 24x7 Direct Support',
      desc: 'No automated call centers or long ticket queues. Direct WhatsApp line to senior system architects ready to solve any operational issue.',
      icon: HeartHandshake,
      color: 'text-emerald-600',
      bg: 'bg-emerald-100'
    },
    {
      title: 'Data Sovereignty & 100% Privacy',
      desc: 'Every school instance and database is fully isolated with AES-256 encryption. We never sell, monetize, or expose student data.',
      icon: ShieldCheck,
      color: 'text-blue-600',
      bg: 'bg-blue-100'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'About Us' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-200 text-xs font-bold">
          <Building2 className="w-4 h-4 text-indigo-600" />
          <span>PKR ENTERPRISES Global IT Services • Established Mission</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl">
          Empowering Educational Institutions with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">State-of-the-Art IT Infrastructure</span>
        </h1>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
          PKR ENTERPRISES was founded to solve a critical challenge faced by schools, colleges, and retail businesses across India: modernizing manual campus operations with dependable, high-speed software and IoT hardware without burning a hole in their budget.
        </p>
      </section>

      {/* Core Values */}
      <section className="space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full border border-indigo-200">
            Our Guiding Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Why 100+ Schools Partner With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className={`w-12 h-12 rounded-xl ${val.bg} ${val.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900">{val.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Corporate Info Strip */}
      <section className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl font-black">Want to inspect our live demo or schedule a campus visit?</h3>
          <p className="text-xs text-slate-400">Our senior engineering architect will demonstrate all 210+ modules on your campus or via Google Meet.</p>
        </div>

        <button
          onClick={onOpenContactModal}
          className="px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-xl text-xs shadow-lg shrink-0 flex items-center gap-2"
        >
          <Phone className="w-4 h-4" />
          <span>Book Free Campus Visit</span>
        </button>
      </section>

    </div>
  );
};

export default AboutUsPage;
