import React from 'react';
import {
  Laptop,
  CheckCircle2,
  Sparkles,
  Zap,
  ArrowRight,
  Phone,
  Crown,
  BookOpen,
  Users,
  CreditCard,
  FileSpreadsheet,
  Bus,
  Award,
  Bell,
  Check,
  ShieldCheck,
  Download,
  HelpCircle,
  Clock,
  Layers
} from 'lucide-react';
import { Breadcrumb } from '../../../components/saas/layout/Breadcrumb';
import { STUDENT_STRENGTH_MATRIX } from "../../../components/saas/PlanComparisonModal";

export const SchoolErpPage = ({ onNavigate, onLaunchDemo, onOpenContactModal }) => {
  const handleWhatsAppBooking = (msg = '') => {
    const text = encodeURIComponent(msg || "Hello PKR ENTERPRISES! I would like to book a free live demonstration and quotation for your School ERP Software.");
    window.open(`https://wa.me/919719476606?text=${text}`, '_blank');
  };

  const corePillars = [
    {
      title: 'Fee Collection & Automated WhatsApp Receipts',
      desc: 'Smart dues calculation, discounts, fine rules, installment plans, online UPI payment gateway integration, and instant WhatsApp PDF fee receipts to parents.',
      icon: CreditCard,
      color: 'text-emerald-600',
      bg: 'bg-emerald-100'
    },
    {
      title: 'CBSE / State Board Marksheets & Examination',
      desc: '1-click automated report card generation with 8-term CBSE grading, scholastic & co-scholastic scales, teacher remarks, student photos, and rank cards.',
      icon: Award,
      color: 'text-indigo-600',
      bg: 'bg-indigo-100'
    },
    {
      title: 'Biometric & Mobile Student Attendance',
      desc: 'Direct integration with fingerprint/face biometric machines. Instant WhatsApp punch notifications to parents on arrival and departure.',
      icon: Bell,
      color: 'text-amber-600',
      bg: 'bg-amber-100'
    },
    {
      title: 'Parent & Student Dedicated Mobile Web Portals',
      desc: 'Dedicated portal for parents to view live attendance, homework, exam schedules, pay fees online, and download report cards without school visits.',
      icon: Users,
      color: 'text-purple-600',
      bg: 'bg-purple-100'
    },
    {
      title: 'GPS Bus & Transport Management',
      desc: 'Route management, vehicle stops, monthly transport fee allocation, driver details, and live vehicle tracking for student safety.',
      icon: Bus,
      color: 'text-blue-600',
      bg: 'bg-blue-100'
    },
    {
      title: 'Staff Payroll, Biometrics & Teacher Management',
      desc: 'Teacher timetable planner, biometric staff punch records, leave approvals, automated salary slip generation, and class teacher allocations.',
      icon: BookOpen,
      color: 'text-rose-600',
      bg: 'bg-rose-100'
    }
  ];

  const faqs = [
    {
      q: 'Is the School ERP available in both Cloud and Offline formats?',
      a: 'Yes! You can choose between our 100% Cloud SaaS edition (accessible on any mobile, tablet, and PC anywhere) or our Standalone Offline ERP version installed locally on your school computer lab or principal desk.'
    },
    {
      q: 'How long does it take to set up and migrate our existing student data?',
      a: 'Our engineering team migrates your complete student and teacher database from Excel/CSV within 24 hours. Training for your principal, accountant, and teachers is conducted on-campus or via live video support.'
    },
    {
      q: 'Does it support CBSE, ICSE, and UP State Board report card formats?',
      a: 'Absolutely. We have pre-built CBSE CCE formats, grading scales (A1 to E), term-wise weightage calculations, and customizable state board marksheets.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Services & Products', page: 'home' },
          { label: 'School ERP & Cloud Software' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>210+ Functional Modules • 2027 Edition</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Complete Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">School ERP System</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Eliminate paperwork, prevent 100% fee leakage, automate CBSE report card printing, and connect parents through WhatsApp alerts with India’s most dependable school management platform.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onLaunchDemo('superadmin')}
              className="px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 transition-all text-xs flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Launch Live ERP Demo Sandbox</span>
            </button>

            <button
              onClick={() => handleWhatsAppBooking("Hello, I want to book a free demonstration of your School ERP software.")}
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Get WhatsApp Pricing Quote</span>
            </button>

            <button
              onClick={() => onNavigate('modules')}
              className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-xl border border-slate-300 transition-all text-xs"
            >
              Browse 210+ Modules →
            </button>
          </div>
        </div>
      </section>

      {/* Core ERP Pillars */}
      <section className="space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full border border-indigo-200">
            Engineered For Indian Schools
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            6 Core Systems Powering Your Entire Campus
          </h2>
          <p className="text-xs text-slate-600">
            From admissions to alumni, fee collection to bus GPS — all synchronized in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corePillars.map((col, idx) => {
            const Icon = col.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all space-y-3"
              >
                <div className={`w-12 h-12 rounded-xl ${col.bg} ${col.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900">{col.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{col.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing Matrix Table */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
              Honest & Genuine Pricing
            </span>
            <h2 className="text-2xl font-black text-slate-900 mt-2">School ERP Pricing by Student Strength</h2>
            <p className="text-xs text-slate-500">Unbeatable rates compared to SKK and other market providers.</p>
          </div>

          <button
            onClick={() => onNavigate('pricing')}
            className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs rounded-xl border border-indigo-200 transition-all self-start sm:self-auto"
          >
            View Complete Feature Comparison →
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                  <th className="py-4 px-6">Student Strength</th>
                  <th className="py-4 px-6">Recommended Plan</th>
                  <th className="py-4 px-6">Cloud SaaS (Per Year)</th>
                  <th className="py-4 px-6">Offline ERP (Per Year)</th>
                  <th className="py-4 px-6">Included Modules</th>
                  <th className="py-4 px-6 text-end">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {STUDENT_STRENGTH_MATRIX.map((tier, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                      <Users className="w-4 h-4 text-indigo-600" />
                      <span>{tier.strength} Students</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                        {tier.recommendedPlan}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-black text-indigo-600 text-base">
                      {tier.cloudSaaSPrice}
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-700">
                      {tier.offlinePrice}
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-600 max-w-xs">
                      {tier.features}
                    </td>
                    <td className="py-4 px-6 text-end">
                      <button
                        onClick={() => handleWhatsAppBooking(`Hello, I want to book School ERP for ${tier.strength} Students at ${tier.cloudSaaSPrice}/yr.`)}
                        className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-colors shadow-sm"
                      >
                        Book Plan
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-slate-900">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-sm text-slate-900 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="p-8 rounded-3xl bg-indigo-600 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-2xl font-black">Ready to deploy School ERP for your institution?</h3>
          <p className="text-xs text-indigo-100">Zero setup charge • 1-day onboarding • On-campus demonstration available.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleWhatsAppBooking()}
            className="px-6 py-3 bg-white text-indigo-900 font-bold rounded-xl text-xs shadow-md hover:bg-slate-100 transition-colors"
          >
            Request Demo on WhatsApp
          </button>
        </div>
      </section>

    </div>
  );
};

export default SchoolErpPage;
