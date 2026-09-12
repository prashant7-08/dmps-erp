import React, { useState } from 'react';
import {
  Sparkles,
  Zap,
  Star,
  Award,
  Crown,
  Layers,
  CheckCircle2,
  ArrowRight,
  Building2,
  Users,
  GraduationCap,
  CreditCard,
  Bell,
  Fingerprint,
  Globe,
  FileSpreadsheet,
  Download,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  BarChart3,
  BookOpen,
  Bus,
  Home,
  MessageSquare,
  Lock,
  Headphones,
  Check,
  X,
  Server,
  KeyRound,
  TrendingUp,
  Receipt,
  Printer,
  Wifi,
  Send,
  Laptop,
  CheckSquare
} from 'lucide-react';
import { STUDENT_STRENGTH_MATRIX } from "../../components/saas/PlanComparisonModal";
import { SERVICES_LIST } from '../../components/saas/layout/Navbar';

export const HomePage = ({
  onNavigate,
  onLaunchDemo,
  onOpenContactModal,
  onOpenPricingModal
}) => {
  const [studentsCount, setStudentsCount] = useState(500);
  const [avgFee, setAvgFee] = useState(1600);

  // ROI Calculations
  const annualFeeVolume = studentsCount * avgFee * 12;
  const estimatedLeakagePrevented = Math.round(annualFeeVolume * 0.045);
  const paperCostSaved = Math.round(studentsCount * 180);

  const handleWhatsAppBooking = (msg = '') => {
    const defaultText = "Hello PKR EDUTECH Team! I would like to get a quote and schedule a free live demonstration of your School ERP & IT Solutions.";
    const text = encodeURIComponent(msg || defaultText);
    window.open(`https://wa.me/918292464812?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-20">
      
      {/* 1. Hero Section - Crisp Light Background with Vibrant Accents */}
      <section className="relative pt-14 pb-16 overflow-hidden bg-gradient-to-b from-indigo-50/50 via-white to-slate-50 border-b border-slate-200">
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-7">
          {/* Release Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-indigo-200 text-xs font-semibold text-indigo-800 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>PKR EDUTECH 2027 Edition • 210+ ERP Modules Active • Genuine & Competitive Pricing</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 max-w-5xl mx-auto leading-[1.12]">
            Complete IT & ERP Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Schools, Institutes & Businesses</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            Next-Gen School ERP, Dedicated Cloud VPS Hosting, IoT Biometric Attendance, Automated MP3 School Bells, PVC ID Card Printing, Hardware Support & WhatsApp Marketing.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
            <button
              onClick={() => onLaunchDemo('admin')}
              className="px-7 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-black rounded-2xl shadow-xl shadow-indigo-600/25 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2.5 text-sm"
            >
              <Zap className="w-5 h-5 text-amber-300" />
              <span>⚡ Launch Live Demo Sandbox ↗</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('pricing')}
              className="px-6 py-4 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-2xl border border-slate-300 transition-all flex items-center gap-2 text-sm shadow-sm hover:shadow"
            >
              <Crown className="w-4 h-4 text-amber-500" />
              <span>View Full Pricing Matrix</span>
            </button>

            <button
              onClick={() => handleWhatsAppBooking()}
              className="px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2.5 text-sm"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Get WhatsApp Quote</span>
            </button>
          </div>

          {/* Trust Metric KPI Counters */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-black text-slate-900">210+</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Functional ERP Modules</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-black text-indigo-600">99.99%</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Cloud Uptime SLA</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-black text-purple-600">₹ 2,499</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Starter ERP From Only</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-black text-emerald-600">₹0 Fee</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Zero Setup Charges</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Service Pillars - With Clear "Read Detailed Page" CTA Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
            Comprehensive IT Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Dedicated IT Services & Product Catalog
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            Click on any product to open its dedicated page with complete feature breakdowns, technical specifications, benefits, and screenshots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${srv.iconBg} ${srv.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 mb-2">{srv.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(`services/${srv.id}`)}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Details & Benefits</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. School ERP Pricing Matrix Snapshot */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 bg-indigo-100 px-3 py-1 rounded-full border border-indigo-200">
                Transparent & Genuine Rates
              </span>
              <h2 className="text-3xl font-black text-slate-900 mt-2">
                School ERP Pricing by Student Strength
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Zero server setup charges • Daily cloud backup • 210+ ERP modules included
              </p>
            </div>

            <button
              onClick={() => onNavigate('pricing')}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 self-start md:self-auto"
            >
              <span>Explore Complete Pricing & Tiers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Preview Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                    <th className="py-3.5 px-4">Student Strength</th>
                    <th className="py-3.5 px-3 text-center">Startup Cloud</th>
                    <th className="py-3.5 px-3 text-center">Standard Basic</th>
                    <th className="py-3.5 px-3 text-center bg-rose-50 text-rose-900">Enterprise Pro</th>
                    <th className="py-3.5 px-3 text-center">Offline Desktop</th>
                    <th className="py-3.5 px-4 text-end">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {STUDENT_STRENGTH_MATRIX.slice(0, 4).map((tier, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                        <Users className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span>{tier.range} Students</span>
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <div className="font-bold text-slate-900">{tier.startup.setup}</div>
                        <div className="text-[10px] text-slate-500">ren: {tier.startup.renewal}</div>
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <div className="font-bold text-indigo-700">{tier.basic.setup}</div>
                        <div className="text-[10px] text-slate-500">ren: {tier.basic.renewal}</div>
                      </td>
                      <td className="py-3.5 px-3 text-center bg-rose-50/50">
                        <div className="font-black text-rose-700">{tier.enterprise.setup}</div>
                        <div className="text-[10px] text-slate-500">ren: {tier.enterprise.renewal}</div>
                      </td>
                      <td className="py-3.5 px-3 text-center font-bold text-slate-700">
                        {tier.offline}
                      </td>
                      <td className="py-3.5 px-4 text-end">
                        <button
                          onClick={() => handleWhatsAppBooking(`Hello, I want to book School ERP for ${tier.range} Students (Enterprise: ${tier.enterprise.setup}).`)}
                          className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-colors shadow-sm"
                        >
                          Book Now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span>Showing 4 of 6 strength tiers. Need custom strength or multi-branch portal?</span>
              <button
                onClick={() => onNavigate('pricing')}
                className="font-bold text-indigo-600 hover:text-indigo-800"
              >
                View All Tiers & Features Comparison →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Live Role Demonstration Sandboxes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
            Instant Hands-On Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Test Drive the School ERP Sandbox Live
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            Click any role to test fee collection, biometric punch sync, CBSE marksheet generation, and teacher attendance portals.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { role: 'superadmin', title: 'Super Admin', desc: 'Full Master Control', icon: Crown, color: 'text-amber-500', bg: 'bg-amber-100', border: 'border-amber-200' },
            { role: 'teacher', title: 'Teacher Portal', desc: 'Attendance & Marks', icon: BookOpen, color: 'text-indigo-600', bg: 'bg-indigo-100', border: 'border-indigo-200' },
            { role: 'accountant', title: 'Accountant', desc: 'Fee Receipts & GST', icon: Receipt, color: 'text-emerald-600', bg: 'bg-emerald-100', border: 'border-emerald-200' },
            { role: 'parent', title: 'Parent Portal', desc: 'Homework & Live Bus', icon: Users, color: 'text-purple-600', bg: 'bg-purple-100', border: 'border-purple-200' },
            { role: 'student', title: 'Student Portal', desc: 'Exams & Timetable', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-100', border: 'border-blue-200' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.role}
                onClick={() => onLaunchDemo(item.role)}
                className={`p-5 rounded-2xl bg-white border ${item.border} hover:shadow-lg transition-all text-center flex flex-col items-center justify-between group shadow-sm`}
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                </div>
                <span className="mt-3 text-[11px] font-bold text-indigo-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Launch</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 5. ROI Calculator Highlight */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                Direct Financial Impact
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">Estimate Your School's Yearly Savings</h3>
              <p className="text-xs text-slate-500 mt-1">Adjust students & monthly fees to see recovered dues.</p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700">Total Enrolled Students</label>
                <span className="text-sm font-black text-indigo-600">{studentsCount} Students</span>
              </div>
              <input
                type="range"
                min="100"
                max="3000"
                step="50"
                value={studentsCount}
                onChange={(e) => setStudentsCount(Number(e.target.value))}
                className="w-full accent-indigo-600 bg-slate-200 rounded-lg h-2"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700">Average Monthly Fee per Student</label>
                <span className="text-sm font-black text-indigo-600">₹ {avgFee.toLocaleString()} / mo</span>
              </div>
              <input
                type="range"
                min="500"
                max="8000"
                step="100"
                value={avgFee}
                onChange={(e) => setAvgFee(Number(e.target.value))}
                className="w-full accent-indigo-600 bg-slate-200 rounded-lg h-2"
              />
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-6 text-center space-y-3 shadow-lg shadow-indigo-600/20">
            <div className="text-xs uppercase font-bold text-indigo-200 tracking-wider">
              Estimated Net Value Recovered
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white">
              ₹ {(estimatedLeakagePrevented + paperCostSaved).toLocaleString()}
            </div>
            <p className="text-xs text-indigo-100 leading-relaxed">
              By stopping fee leakage via WhatsApp alerts and saving printed stationery costs.
            </p>
            <button
              onClick={() => handleWhatsAppBooking(`Hello, based on the ROI calculator for ${studentsCount} students, I would like to adopt your School ERP system.`)}
              className="w-full py-3 bg-white hover:bg-slate-100 text-indigo-900 font-bold rounded-xl text-xs transition-colors shadow-md"
            >
              Claim This ROI for Your School
            </button>
          </div>
        </div>
      </section>

      {/* 6. Quick CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
            24x7 Direct Engineering Onboarding
          </span>

          <h2 className="text-3xl sm:text-4xl font-black max-w-3xl mx-auto">
            Ready to Upgrade Your Institution With Complete IT & ERP Infrastructure?
          </h2>

          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Get a free live demo on your campus or over Google Meet today. Custom database migration & zero downtime deployment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenContactModal}
              className="px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-xl shadow-lg transition-all text-xs flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Direct Helpline (+91 8292464812)</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all text-xs flex items-center gap-2"
            >
              <span>Submit Campus Demo Request</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
