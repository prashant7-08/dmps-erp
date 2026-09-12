import React, { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Star,
  Award,
  Crown,
  Layers,
  CheckCircle2,
  ArrowRight,
  Play,
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
  Send
} from 'lucide-react';
import {
  PLAN_TIERS,
  STUDENT_STRENGTH_MATRIX,
  BILLING_PLANS,
  FEATURE_AREAS,
  PlanComparisonModal
} from '../components/saas/PlanComparisonModal';
import { useToast } from '../components/common/Toast';

export const CommercialSaaSProductLandingPage = ({
  onLaunchDemo,
  onOpenMasterSaaS,
  onOpenSchoolPortal
}) => {
  const { showToast } = useToast();
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [selectedDemoRole, setSelectedDemoRole] = useState('superadmin');
  const [studentsCount, setStudentsCount] = useState(500);
  const [avgFee, setAvgFee] = useState(1600);

  // Contact form
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    service: 'School ERP - Basic / Pro / Enterprise',
    studentStrength: '301 - 500 Students',
    location: '',
    message: ''
  });

  // ROI Calculations
  const annualFeeVolume = studentsCount * avgFee * 12;
  const estimatedLeakagePrevented = Math.round(annualFeeVolume * 0.045);
  const paperCostSaved = Math.round(studentsCount * 180);

  const handleQuickDemoClick = (role) => {
    showToast(`Launching ${role.toUpperCase()} interactive live environment...`, 'info');
    if (onLaunchDemo) onLaunchDemo(role);
  };

  const handleWhatsAppBooking = (msg = '') => {
    const defaultText = "Hello PKR EDUTECH Team! I would like to get a quote and schedule a free live demonstration of your School ERP & IT Solutions.";
    const text = encodeURIComponent(msg || defaultText);
    window.open(`https://wa.me/918292464812?text=${text}`, '_blank');
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) {
      showToast('Please enter your Name and Mobile Number.', 'error');
      return;
    }
    const lines = [
      '👋 Hello PKR EDUTECH Global IT Services! I have a website enquiry:',
      `• Name: ${contactForm.name}`,
      `• Mobile: ${contactForm.phone}`,
      `• Service Required: ${contactForm.service}`,
      `• Student / Institution Strength: ${contactForm.studentStrength}`,
      `• City / Location: ${contactForm.location || 'Not Specified'}`,
      `• Details: ${contactForm.message || 'Kindly share full demo details, pricing quotation and setup process.'}`
    ];
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/918292464812?text=${text}`, '_blank');
    showToast('Enquiry transferred to WhatsApp! Our architect will respond promptly.', 'success');
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Professional Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#070b14]/85 backdrop-blur-xl border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Company Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-600/30 ring-1 ring-white/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-white font-sans">
                  PKR<span className="text-indigo-400"> EDUTECH</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider">
                  GLOBAL IT SERVICES
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide">
                Software • Server • Biometrics • Bell • Printing • Hardware
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-300">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#pricing" className="hover:text-white transition-colors">School ERP Pricing</a>
            <a href="#billing" className="hover:text-white transition-colors">Retail Billing</a>
            <a href="#features" className="hover:text-white transition-colors">Core Modules</a>
            <a href="#demo" className="hover:text-white transition-colors">Role Sandboxes</a>
            <a href="#roi" className="hover:text-white transition-colors">ROI Calculator</a>
          </nav>

          {/* Top Right Action Buttons */}
          <div className="flex items-center gap-3">
            {onOpenSchoolPortal && (
              <button
                onClick={onOpenSchoolPortal}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
              >
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                <span>DMPS School Portal</span>
              </button>
            )}

            <button
              onClick={() => handleQuickDemoClick('superadmin')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/30 transition-all transform active:scale-95 border border-indigo-400/30"
            >
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>Launch Live Demo ↗</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.18),transparent_60%)]" />
        <div className="absolute right-10 top-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-10 bottom-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-7">
          {/* Release Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-xs font-semibold text-indigo-300 shadow-xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>PKR EDUTECH 2027 Edition • 210+ ERP Modules Active • Genuine & Competitive Pricing</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.12]">
            Complete IT & ERP Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Schools, Institutes & Businesses</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            Next-Gen School ERP, Dedicated Cloud VPS Hosting, IoT Biometric Attendance, Automated MP3 School Bells, PVC ID Card Printing, Hardware Support & WhatsApp Marketing.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
            <button
              onClick={() => handleQuickDemoClick('superadmin')}
              className="px-7 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-black rounded-2xl shadow-xl shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2.5 text-sm border border-indigo-400/30"
            >
              <Zap className="w-5 h-5 text-amber-300" />
              <span>⚡ Explore Super Admin Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#pricing"
              className="px-6 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold rounded-2xl border border-slate-700 transition-all flex items-center gap-2 text-sm shadow-md"
            >
              <Crown className="w-4 h-4 text-amber-400" />
              <span>View School Pricing Matrix</span>
            </a>

            <button
              onClick={() => handleWhatsAppBooking()}
              className="px-6 py-4 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-bold rounded-2xl border border-emerald-500/40 transition-all flex items-center gap-2.5 text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Get WhatsApp Quote</span>
            </button>
          </div>

          {/* Trust Metric Counters */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="text-3xl font-black text-white">210+</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Functional ERP Modules</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="text-3xl font-black text-indigo-400">99.99%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Cloud Uptime SLA</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="text-3xl font-black text-purple-400">₹ 2,499</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Starter ERP From Only</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="text-3xl font-black text-emerald-400">₹0 Fee</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Zero Setup Charges</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-950/60 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Complete Global IT Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              End-to-End IT Services & Infrastructure
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Everything your school, institute, or enterprise needs under one roof. Expert installation, transparent pricing & local engineering support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-white mb-2">Dedicated Server & Cloud VPS</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  High-speed enterprise hosting, VPS, MySQL databases, SSL certificates, daily encrypted cloud backup, and online payment gateway integration.
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppBooking("Hello, I need Cloud Server / Hosting & Database support for my institution.")}
                className="mt-5 pt-3 border-t border-slate-800 text-xs font-bold text-pink-400 flex items-center justify-between hover:text-pink-300"
              >
                <span>Request Server Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-white mb-2">School ERP & Custom Software</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Next-Gen School ERP (210+ modules), Pharmacy billing, retail point-of-sale, CBSE report card generators, multi-branch portals, and custom apps.
                </p>
              </div>
              <button
                onClick={() => handleQuickDemoClick('superadmin')}
                className="mt-5 pt-3 border-t border-slate-800 text-xs font-bold text-amber-400 flex items-center justify-between hover:text-amber-300"
              >
                <span>Launch Live ERP Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Fingerprint className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-white mb-2">Biometric Attendance & Locks</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Direct hardware sync with ZKTeco, eSSL & Secureye fingerprint, face recognition, RFID card access, and smart door security systems.
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppBooking("Hello, I need Biometric Attendance & Smart Door Lock setup for our campus.")}
                className="mt-5 pt-3 border-t border-slate-800 text-xs font-bold text-teal-400 flex items-center justify-between hover:text-teal-300"
              >
                <span>Explore Biometrics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Bell className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-white mb-2">Automated MP3 School Bell</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Python-based automatic period bell runner with customizable voice chimes, prayer, lunch, and warning chimes. Zero manual intervention.
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppBooking("Hello, I want details about the Automated MP3 School Bell System.")}
                className="mt-5 pt-3 border-t border-slate-800 text-xs font-bold text-purple-400 flex items-center justify-between hover:text-purple-300"
              >
                <span>Automated Bell Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* School ERP Pricing Table */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
            Transparent, Student-Strength Based Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            School ERP Pricing Packages
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Choose online cloud SaaS or offline lifetime software. All prices are genuine, competitive, and include GST with free data onboarding.
          </p>
        </div>

        <div className="bg-slate-900/90 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl space-y-4">
          <div className="p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900">
            <div>
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Online Cloud School ERP</span>
              <h3 className="text-lg font-bold text-white">Setup & Annual Renewal Breakdown by Student Strength</h3>
            </div>
            <button
              onClick={() => handleWhatsAppBooking("Hello, I want to book a live demo and discuss School ERP pricing for my school.")}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all self-start sm:self-auto"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Book Demo & Quote</span>
            </button>
          </div>

          <div className="overflow-x-auto px-4 pb-4">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-800/90 border-b border-slate-700 text-slate-300 font-bold">
                  <th className="p-4 pl-6">Student Strength</th>
                  <th className="p-4 text-center text-blue-300">
                    Startup Plan
                    <span className="block text-[10px] font-normal text-slate-400">Setup / Renewal</span>
                  </th>
                  <th className="p-4 text-center text-amber-300">
                    Basic Smart ERP
                    <span className="block text-[10px] font-normal text-slate-400">Setup / Renewal</span>
                  </th>
                  <th className="p-4 text-center text-purple-300">
                    PRO Operations
                    <span className="block text-[10px] font-normal text-slate-400">Setup / Renewal</span>
                  </th>
                  <th className="p-4 text-center text-rose-300 bg-rose-950/30">
                    Enterprise Flagship
                    <span className="block text-[10px] font-normal text-rose-400">Setup / Renewal</span>
                  </th>
                  <th className="p-4 text-center text-emerald-300 bg-slate-950/60">
                    Offline One-Time
                    <span className="block text-[10px] font-normal text-slate-400">Lifetime License</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-200">
                {STUDENT_STRENGTH_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 pl-6 font-bold text-white text-sm">
                      {row.range} Students
                    </td>
                    <td className="p-4 text-center">
                      <strong className="text-white text-sm">{row.startup.setup}</strong>
                      <span className="block text-[10px] text-slate-400">Renewal {row.startup.renewal}</span>
                    </td>
                    <td className="p-4 text-center">
                      <strong className="text-white text-sm">{row.basic.setup}</strong>
                      <span className="block text-[10px] text-slate-400">Renewal {row.basic.renewal}</span>
                    </td>
                    <td className="p-4 text-center">
                      <strong className="text-white text-sm">{row.pro.setup}</strong>
                      <span className="block text-[10px] text-slate-400">Renewal {row.pro.renewal}</span>
                    </td>
                    <td className="p-4 text-center bg-rose-950/20">
                      <strong className="text-rose-300 text-sm">{row.enterprise.setup}</strong>
                      <span className="block text-[10px] text-rose-400">Renewal {row.enterprise.renewal}</span>
                    </td>
                    <td className="p-4 text-center bg-slate-950/40">
                      <strong className="text-emerald-400 text-sm">{row.offline}</strong>
                      <span className="block text-[10px] text-slate-400">1-Time Cost</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 pt-2 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              <strong className="text-slate-200">All prices inclusive of GST.</strong> Free data migration & setup assistance included in all tiers.
            </div>
            <button
              onClick={() => setIsPlanModalOpen(true)}
              className="px-4 py-2 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 font-bold rounded-xl border border-indigo-500/40 flex items-center gap-1.5 transition-all"
            >
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>View Full 31-Feature Checklist</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer & Agency Portal Link */}
      <footer className="border-t border-slate-800 bg-[#070b14] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-sm font-black text-white">
              PKR EDUTECH GLOBAL IT SERVICES
            </div>
            <p className="text-xs text-slate-500">
              Official Enterprise School ERP Provider • ISO 9001:2015 Certified
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            {onOpenMasterSaaS && (
              <button
                onClick={onOpenMasterSaaS}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:text-indigo-400 transition-colors flex items-center gap-1.5"
              >
                <Server className="w-3.5 h-3.5 text-indigo-400" />
                <span>👑 Agency Master Console</span>
              </button>
            )}

            {onOpenSchoolPortal && (
              <button
                onClick={onOpenSchoolPortal}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:text-amber-400 transition-colors flex items-center gap-1.5"
              >
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Dadheech Memorial Public School Portal</span>
              </button>
            )}
          </div>
        </div>
      </footer>

      {/* Plan Comparison Modal */}
      <PlanComparisonModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
        currentSchoolName="Dadheech Memorial Public School"
        currentPlan="Enterprise"
      />
    </div>
  );
};

export default CommercialSaaSProductLandingPage;
