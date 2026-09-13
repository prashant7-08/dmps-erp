import React from 'react';
import {
  Printer,
  Barcode,
  ShoppingBag,
  Pill,
  Smartphone,
  Utensils,
  CheckCircle2,
  Phone,
  ArrowRight,
  Receipt,
  Sparkles,
  Zap,
  Check
} from 'lucide-react';
import { Breadcrumb } from '../../../components/saas/layout/Breadcrumb';
import { BILLING_PLANS } from "../../../components/saas/PlanComparisonModal";

export const RetailBillingPage = ({ onNavigate, onOpenContactModal }) => {
  const handleWhatsAppBooking = (msg = '') => {
    const text = encodeURIComponent(msg || "Hello PKR ENTERPRISES! I would like to get a quotation for Retail / Pharmacy / POS Billing Software.");
    window.open(`https://wa.me/919719476606?text=${text}`, '_blank');
  };

  const industries = [
    {
      title: 'Pharmacy & Medical Store Billing',
      desc: 'Batch number tracking, drug expiry alerts, schedule H1 drug records, wholesale supplier management, and instant GST B2B/B2C invoices.',
      icon: Pill,
      color: 'text-emerald-600',
      bg: 'bg-emerald-100'
    },
    {
      title: 'Supermarket & Grocery POS',
      desc: 'High-speed barcode scanner billing, thermal receipt printing (2-inch / 3-inch), weighing scale integration, loyalty points, and low stock alerts.',
      icon: ShoppingBag,
      color: 'text-indigo-600',
      bg: 'bg-indigo-100'
    },
    {
      title: 'Mobile Shop & Electronics Store',
      desc: 'IMEI number tracking per serial piece, warranty card generation, repair job sheet tracking, and multi-mode payment splitting (Cash + UPI + Card).',
      icon: Smartphone,
      color: 'text-purple-600',
      bg: 'bg-purple-100'
    },
    {
      title: 'Restaurant & Cafe KOT System',
      desc: 'Table management, Kitchen Order Ticket (KOT) printing, captain mobile ordering, food recipe cost calculations, and parcel bill discounts.',
      icon: Utensils,
      color: 'text-amber-600',
      bg: 'bg-amber-100'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Services & Products', page: 'home' },
          { label: 'Retail & Pharmacy POS Billing' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-900 border border-orange-300 text-xs font-bold">
            <Printer className="w-4 h-4 text-orange-600" />
            <span>Retail POS & GST Billing Software Suite</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            High-Speed POS Billing for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600">Pharmacies, Supermarkets & Retailers</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Fast barcode billing under 3 seconds. Track inventory, manage GST filings, calculate profits in real time, and print professional thermal receipts with zero cloud dependency.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('apps/pharmacy-pos')}
              className="px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 transition-all text-xs flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>⚡ Test Chemist / Pharmacy POS Live</span>
            </button>

            <button
              onClick={() => onNavigate('apps/retail-pos')}
              className="px-6 py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold rounded-xl shadow-lg shadow-orange-600/20 transition-all text-xs flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-white" />
              <span>⚡ Test Supermarket POS Live</span>
            </button>

            <button
              onClick={() => handleWhatsAppBooking()}
              className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-300 transition-all text-xs flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Get POS Quote on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* Industry Verticals */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((ind, idx) => {
          const Icon = ind.icon;
          return (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className={`w-12 h-12 rounded-xl ${ind.bg} ${ind.color} flex items-center justify-center`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">{ind.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{ind.desc}</p>
            </div>
          );
        })}
      </section>

      {/* Pricing Cards */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
            Transparent POS Pricing
          </span>
          <h2 className="text-2xl font-black text-slate-900">Billing Software Editions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BILLING_PLANS.map((bPlan) => (
            <div
              key={bPlan.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-indigo-400 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200">
                    {bPlan.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{bPlan.validity}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">{bPlan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{bPlan.tagline}</p>
                </div>

                <div className="pt-2 pb-1 border-y border-slate-100">
                  <div className="text-3xl font-black text-slate-900">{bPlan.price}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Includes Thermal Print + Barcode Engine</div>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-700">Top Included Capabilities:</span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {bPlan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => handleWhatsAppBooking(`Hello, I want to book ${bPlan.name} (${bPlan.price}).`)}
                className="w-full mt-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Request POS Demo</span>
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default RetailBillingPage;
