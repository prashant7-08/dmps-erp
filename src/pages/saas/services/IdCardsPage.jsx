import React from 'react';
import {
  CreditCard,
  Printer,
  Sparkles,
  Phone,
  ArrowRight,
  CheckCircle2,
  QrCode,
  Layers,
  Award,
  BookOpen
} from 'lucide-react';
import { Breadcrumb } from '../../../components/saas/layout/Breadcrumb';

export const IdCardsPage = ({ onNavigate, onOpenContactModal }) => {
  const handleWhatsAppBooking = (msg = '') => {
    const text = encodeURIComponent(msg || "Hello PKR EDUTECH! I would like to get a quotation for bulk PVC ID Cards & School Stationery printing.");
    window.open(`https://wa.me/918292464812?text=${text}`, '_blank');
  };

  const products = [
    {
      title: 'Smart PVC ID Cards (Thermal / UV Coated)',
      rate: 'Starting at ₹ 18 - ₹ 28 / card',
      desc: 'High-definition 300 DPI thermal printed PVC cards with student photo, barcode, QR code, blood group, and emergency contact details.',
      specs: ['High-density durable PVC', 'Waterproof & Scratch-proof', 'Pre-configured Barcode / QR', 'Bulk discounts for 500+ cards']
    },
    {
      title: 'Custom Screen-Printed Satin Lanyards',
      rate: 'Starting at ₹ 12 - ₹ 20 / pc',
      desc: 'Premium 16mm / 20mm satin woven neck lanyards custom printed with school name, logo crest, and heavy-duty metal dog-hook & safety buckle.',
      specs: ['Custom school branding', 'Multiple vibrant colors', 'Breakaway safety buckles', 'Matching card holder pouch']
    },
    {
      title: 'CBSE Marksheet Booklets & Report Cards',
      rate: 'Starting at ₹ 15 - ₹ 35 / booklet',
      desc: 'Heavy 250 GSM embossed art paper marksheet booklets with official holographic security seal, gold foil borders, and term tables.',
      specs: ['250 GSM thick glossy art board', 'Security hologram sticker', 'CBSE / State Board compliant layout', 'Student photo & principal seal area']
    },
    {
      title: 'School Diaries & Fee Receipt Books',
      rate: 'Starting at ₹ 45 - ₹ 95 / diary',
      desc: 'Custom hard-bound student school diaries containing school prayer, rules, calendar, homework log, teacher remarks, and parent-teacher communication pages.',
      specs: ['Hardcover binding with gloss lamination', '80 GSM maplitho writing paper', 'Fee receipt duplicate/triplicate carbonless books', 'Fully customized with school branding']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Services & Products', page: 'home' },
          { label: 'PVC Smart ID Cards & Stationery' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-900 border border-purple-300 text-xs font-bold">
            <CreditCard className="w-4 h-4 text-purple-600" />
            <span>Smart Card Printing • Bulk School Stationery Supplies</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Premium PVC Smart ID Cards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">School Stationery Printing</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            High-definition barcode & QR enabled smart PVC ID cards, custom printed woven lanyards, luxury marksheet booklets, school diaries, and fee receipt books with rapid 5-day doorstep delivery across India.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => handleWhatsAppBooking()}
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Get Bulk Printing Price Quote</span>
            </button>

            <button
              onClick={onOpenContactModal}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-md transition-all text-xs flex items-center gap-2"
            >
              <span>Request Free Sample Kit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((p, idx) => (
          <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-purple-400 hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 border border-purple-200">
                  {p.rate}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>

              <ul className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100">
                {p.specs.map((s, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => handleWhatsAppBooking(`Hello, I want to inquire about ${p.title} (${p.rate}).`)}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-colors shadow-sm mt-4"
            >
              Request Free Samples & Rate List
            </button>
          </div>
        ))}
      </section>

    </div>
  );
};

export default IdCardsPage;
