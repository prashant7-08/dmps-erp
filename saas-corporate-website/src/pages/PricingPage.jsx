import React, { useState } from 'react';
import {
  Crown,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
  Zap,
  Users,
  ShieldCheck,
  Check,
  X,
  CreditCard,
  Building2,
  HelpCircle
} from 'lucide-react';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import {
  STUDENT_STRENGTH_MATRIX,
  PLAN_TIERS,
  FEATURE_AREAS,
  BILLING_PLANS
} from '../components/saas/PlanComparisonModal';

export const PricingPage = ({ onNavigate, onLaunchDemo, onOpenContactModal }) => {
  const [activePricingTab, setActivePricingTab] = useState('school-erp'); // 'school-erp' | 'plans-matrix' | 'pos-billing' | 'hardware-addons'

  const handleWhatsAppBooking = (msg = '') => {
    const text = encodeURIComponent(msg || "Hello PKR EDUTECH! I would like to get a customized pricing quotation for my school.");
    window.open(`https://wa.me/918292464812?text=${text}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Full Pricing & Tiers Matrix' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-200 text-xs font-bold mx-auto">
          <Crown className="w-4 h-4 text-amber-500" />
          <span>Transparent, Honest & Genuine Rates</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Clear Pricing for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Every School Size</span>
        </h1>

        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Zero hidden setup costs. Choose between annual Cloud SaaS ERP subscriptions or Standalone Offline ERP licenses with complete feature sets.
        </p>

        {/* Tab Switcher */}
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 gap-1 mt-4">
          {[
            { id: 'school-erp', label: '1. School Strength Tiers' },
            { id: 'plans-matrix', label: '2. 4-Edition Feature Matrix' },
            { id: 'pos-billing', label: '3. Retail / POS Software' },
            { id: 'hardware-addons', label: '4. Hardware & Add-Ons' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActivePricingTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activePricingTab === tab.id
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* TAB 1: School Student Strength Pricing Matrix Table */}
      {activePricingTab === 'school-erp' && (
        <section className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="p-6 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Student Strength Annual Pricing (Cloud vs Offline)</h3>
                <p className="text-xs text-slate-500">Includes free cloud server deployment, subdomain, updates & technical assistance</p>
              </div>
              <button
                onClick={() => handleWhatsAppBooking("Hello, I need pricing for 2000+ students / Multi-Branch Group.")}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition-all"
              >
                Custom Multi-Branch Quote
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                    <th className="py-4 px-6">Student Strength</th>
                    <th className="py-4 px-6">Recommended Edition</th>
                    <th className="py-4 px-6">Cloud SaaS (Per Year)</th>
                    <th className="py-4 px-6">Offline ERP (Per Year)</th>
                    <th className="py-4 px-6">Included Feature Set</th>
                    <th className="py-4 px-6 text-end">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm">
                  {STUDENT_STRENGTH_MATRIX.map((tier, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                        <Users className="w-4 h-4 text-indigo-600" />
                        <span>{tier.strength} Students</span>
                        {tier.gstExtra && (
                          <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">
                            +18% GST
                          </span>
                        )}
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
                          Book Now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero server setup charges • Multi-user access • Unlimited reports • Daily automated backup</span>
              </div>
              <span className="font-semibold text-indigo-600">* Rates guaranteed to be cheaper and richer than competitors.</span>
            </div>
          </div>
        </section>
      )}

      {/* TAB 2: Side-by-Side 4-Edition Feature Matrix */}
      {activePricingTab === 'plans-matrix' && (
        <section className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PLAN_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`p-6 rounded-3xl bg-white border ${
                  tier.highlight ? 'border-rose-400 shadow-xl ring-2 ring-rose-400/20' : 'border-slate-200 shadow-sm'
                } flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-indigo-600">{tier.badge}</span>
                    <span className="text-[10px] text-slate-500 font-semibold">{tier.capacity}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900">{tier.name}</h3>
                  <div className="text-2xl font-black text-slate-900 mt-2">{tier.price}</div>
                  <p className="text-xs text-slate-500 mt-1">{tier.tagline}</p>
                </div>

                <button
                  onClick={() => handleWhatsAppBooking(`Hello, I want to book ${tier.name} (${tier.price}).`)}
                  className={`w-full mt-6 py-2.5 rounded-xl font-bold text-xs transition-all ${
                    tier.highlight
                      ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  Select {tier.name}
                </button>
              </div>
            ))}
          </div>

          {/* Deep Feature Comparison Matrix */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
                    <th className="py-3 px-4">Feature / Capability</th>
                    <th className="py-3 px-3 text-center">Starter</th>
                    <th className="py-3 px-3 text-center">Standard</th>
                    <th className="py-3 px-3 text-center">Professional</th>
                    <th className="py-3 px-3 text-center bg-rose-50/70 text-rose-900">Enterprise Pro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {FEATURE_AREAS.map((group, gIdx) => (
                    <React.Fragment key={gIdx}>
                      <tr className="bg-slate-50 font-bold text-slate-900">
                        <td colSpan={5} className="py-2.5 px-4 text-xs tracking-wide">
                          {group.category}
                        </td>
                      </tr>
                      {group.features.map((feat, fIdx) => (
                        <tr key={fIdx} className="hover:bg-slate-50/50">
                          <td className="py-2.5 px-4 font-medium text-slate-700">{feat.name}</td>
                          <td className="py-2.5 px-3 text-center">
                            {typeof feat.starter === 'boolean' ? (
                              feat.starter ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-slate-300 mx-auto" />
                            ) : (
                              <span className="font-semibold text-slate-700">{feat.starter}</span>
                            )}
                          </td>
                          <td className="py-2.5 px-3 text-center">
                            {typeof feat.standard === 'boolean' ? (
                              feat.standard ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-slate-300 mx-auto" />
                            ) : (
                              <span className="font-semibold text-slate-700">{feat.standard}</span>
                            )}
                          </td>
                          <td className="py-2.5 px-3 text-center">
                            {typeof feat.pro === 'boolean' ? (
                              feat.pro ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-slate-300 mx-auto" />
                            ) : (
                              <span className="font-semibold text-slate-700">{feat.pro}</span>
                            )}
                          </td>
                          <td className="py-2.5 px-3 text-center bg-rose-50/40 font-bold text-slate-900">
                            {typeof feat.enterprise === 'boolean' ? (
                              feat.enterprise ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-slate-300 mx-auto" />
                            ) : (
                              <span className="text-rose-700">{feat.enterprise}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* TAB 3: Retail / Pharmacy POS Software */}
      {activePricingTab === 'pos-billing' && (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
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

                <ul className="space-y-1.5 text-xs text-slate-600 pt-2">
                  {bPlan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
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
        </section>
      )}

      {/* TAB 4: Hardware & Add-ons */}
      {activePricingTab === 'hardware-addons' && (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-lg text-slate-900">IoT Biometric Machine</h3>
            <div className="text-2xl font-black text-teal-600">₹ 6,499</div>
            <p className="text-xs text-slate-600">Secureye/Essl fingerprint & RFID device with auto WhatsApp punch push software.</p>
            <button onClick={() => onNavigate('services/biometrics')} className="text-xs font-bold text-indigo-600 hover:underline">
              View Biometric Specs →
            </button>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-lg text-slate-900">Automatic MP3 Bell License</h3>
            <div className="text-2xl font-black text-indigo-600">₹ 1,999 <span className="text-xs font-normal text-slate-500">Lifetime</span></div>
            <p className="text-xs text-slate-600">Audio period scheduler, prayers, anthem, amplifier relay support for Windows.</p>
            <button onClick={() => onNavigate('services/school-bell')} className="text-xs font-bold text-indigo-600 hover:underline">
              View Bell Features →
            </button>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-lg text-slate-900">PVC Smart ID Cards</h3>
            <div className="text-2xl font-black text-purple-600">₹ 18 - ₹ 28 <span className="text-xs font-normal text-slate-500">/ pc</span></div>
            <p className="text-xs text-slate-600">High-density thermal printed PVC cards with barcode, QR & custom woven satin lanyards.</p>
            <button onClick={() => onNavigate('services/id-cards')} className="text-xs font-bold text-indigo-600 hover:underline">
              View ID Card Samples →
            </button>
          </div>
        </section>
      )}

    </div>
  );
};

export default PricingPage;
