import React from 'react';
import {
  MessageSquare,
  Sparkles,
  Zap,
  Phone,
  ArrowRight,
  CheckCircle2,
  FileText,
  CreditCard,
  Bell,
  Send,
  ShieldCheck,
  Check
} from 'lucide-react';
import { Breadcrumb } from '../../components/layout/Breadcrumb';

export const WhatsAppApiPage = ({ onNavigate, onOpenContactModal }) => {
  const handleWhatsAppBooking = (msg = '') => {
    const text = encodeURIComponent(msg || "Hello PKR EDUTECH! I would like to get official WhatsApp Business Cloud API setup for my school.");
    window.open(`https://wa.me/918292464812?text=${text}`, '_blank');
  };

  const useCases = [
    {
      title: 'Automated Fee Dues Alerts & Direct UPI Link',
      desc: 'Send personalized monthly fee balance alerts with dynamic UPI payment links directly to parents on WhatsApp. Parents can pay in 1-click and get an instant receipt PDF.',
      icon: CreditCard,
      color: 'text-emerald-600',
      bg: 'bg-emerald-100'
    },
    {
      title: 'CBSE Marksheet PDF Delivery on WhatsApp',
      desc: 'Send term exam report card PDFs directly to parents on WhatsApp on result day without printing thousands of physical paper pages.',
      icon: FileText,
      color: 'text-indigo-600',
      bg: 'bg-indigo-100'
    },
    {
      title: 'Real-Time Biometric Gate Punch Alerts',
      desc: 'Instant WhatsApp notification fires to the parent when student taps their ID card or finger on entry/exit gate with exact punch timestamp.',
      icon: Bell,
      color: 'text-amber-600',
      bg: 'bg-amber-100'
    },
    {
      title: 'Bulk Broadcast Messaging & Emergency Notices',
      desc: 'Broadcast sudden rainy day holiday announcements, event invitations, homework summaries, and birthday greetings to 1,000+ parents within seconds.',
      icon: Send,
      color: 'text-purple-600',
      bg: 'bg-purple-100'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Services & Products', page: 'home' },
          { label: 'WhatsApp Official Cloud API' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold">
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Official Meta Cloud API Partner • 99% Open Rate</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            WhatsApp Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600">Cloud Business API</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Replace unread SMS messages with official high-priority WhatsApp alerts. Send automated fee reminders, PDF marksheet delivery, daily homework, and biometric entry notifications directly to parents' WhatsApp.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => handleWhatsAppBooking()}
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Enable WhatsApp Cloud API for School</span>
            </button>

            <button
              onClick={onOpenContactModal}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center gap-2"
            >
              <span>View Per-Message Rates & Bundles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4 Core Use Cases */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {useCases.map((uc, idx) => {
          const Icon = uc.icon;
          return (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className={`w-12 h-12 rounded-xl ${uc.bg} ${uc.color} flex items-center justify-center`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">{uc.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{uc.desc}</p>
            </div>
          );
        })}
      </section>

      {/* WhatsApp Pricing Strip */}
      <section className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-2xl font-black">Meta Approved Business Template Approval Included</h3>
          <p className="text-xs text-slate-400">Zero template rejection hassle. Setup verified Meta business manager in 24 hours.</p>
        </div>
        <button
          onClick={() => handleWhatsAppBooking("Hello, I want to book WhatsApp Cloud API setup.")}
          className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl text-xs shadow-md transition-colors shrink-0"
        >
          Talk to WhatsApp API Specialist
        </button>
      </section>

    </div>
  );
};

export default WhatsAppApiPage;
