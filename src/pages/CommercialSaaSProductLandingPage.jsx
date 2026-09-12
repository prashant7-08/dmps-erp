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
  Send,
  Laptop,
  CheckSquare
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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-600 selection:text-white pb-16">
      
      {/* 1. Global Navigation Bar - Crisp White & Frosted */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Company Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-600/20 ring-1 ring-black/5">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-slate-900 font-sans">
                  PKR<span className="text-indigo-600"> EDUTECH</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                  GLOBAL IT SERVICES
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-wide">
                Software • Server • Biometrics • Bell • Printing • Hardware
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-600">
            <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">School ERP Pricing</a>
            <a href="#billing" className="hover:text-indigo-600 transition-colors">Retail Billing</a>
            <a href="#features" className="hover:text-indigo-600 transition-colors">Core Modules</a>
            <a href="#demo" className="hover:text-indigo-600 transition-colors">Role Sandboxes</a>
            <a href="#roi" className="hover:text-indigo-600 transition-colors">ROI Calculator</a>
          </nav>

          {/* Top Right Action Buttons */}
          <div className="flex items-center gap-3">
            {onOpenSchoolPortal && (
              <button
                onClick={onOpenSchoolPortal}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-all"
              >
                <Building2 className="w-3.5 h-3.5 text-amber-500" />
                <span>DMPS School Portal</span>
              </button>
            )}

            {onOpenMasterSaaS && (
              <button
                onClick={onOpenMasterSaaS}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 transition-all"
              >
                <Crown className="w-3.5 h-3.5 text-indigo-600" />
                <span>Master SaaS Hub</span>
              </button>
            )}

            <button
              onClick={() => handleQuickDemoClick('superadmin')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md shadow-indigo-600/20 transition-all transform active:scale-95"
            >
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>Launch Live Demo ↗</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section - Crisp Light Background with Vibrant Glow */}
      <section className="relative pt-14 pb-20 overflow-hidden bg-gradient-to-b from-indigo-50/50 via-white to-slate-50">
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

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
            <button
              onClick={() => handleQuickDemoClick('superadmin')}
              className="px-7 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-black rounded-2xl shadow-xl shadow-indigo-600/25 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2.5 text-sm"
            >
              <Zap className="w-5 h-5 text-amber-300" />
              <span>⚡ Explore Super Admin Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#pricing"
              className="px-6 py-4 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-2xl border border-slate-300 transition-all flex items-center gap-2 text-sm shadow-sm hover:shadow"
            >
              <Crown className="w-4 h-4 text-amber-500" />
              <span>View School Pricing Matrix</span>
            </a>

            <button
              onClick={() => handleWhatsAppBooking()}
              className="px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2.5 text-sm"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Get WhatsApp Quote</span>
            </button>
          </div>

          {/* Trust Metric Counters */}
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

      {/* 3. Services Section - Pure White with Crisp Cards */}
      <section id="services" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
              Complete Global IT Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              End-to-End IT Services & Infrastructure
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              Everything your school, institute, or enterprise needs under one roof. Expert installation, transparent pricing & local engineering support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Service 1: Dedicated Server & Cloud */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-pink-400 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Dedicated Server & Cloud VPS</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-speed enterprise hosting, VPS, MySQL databases, SSL certificates, daily encrypted cloud backup, and online payment gateway integration.
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppBooking("Hello, I need Cloud Server / Hosting & Database support for my institution.")}
                className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-pink-700 flex items-center justify-between hover:text-pink-800"
              >
                <span>Request Server Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 2: School ERP & Custom Software */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">School ERP & Custom Software</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Next-Gen School ERP (210+ modules), Pharmacy billing, retail point-of-sale, CBSE report card generators, multi-branch portals, and custom apps.
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppBooking("Hello, I want details and quotation for School ERP & Custom Software.")}
                className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-amber-700 flex items-center justify-between hover:text-amber-800"
              >
                <span>Explore Software Plans</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 3: Biometric Attendance Machine */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Fingerprint className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Biometric Finger & Face Machines</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Essl, Realtime & Secureye biometric devices with auto-sync service. Instant WhatsApp punch notifications sent to parents upon student scan.
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppBooking("Hello, I need Biometric Fingerprint / Face Recognition attendance setup.")}
                className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-teal-700 flex items-center justify-between hover:text-teal-800"
              >
                <span>Book Biometric Setup</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 4: Automated MP3 School Bell */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Bell className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Automatic MP3 School Bell</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Precision audio bell scheduling software with customizable period chimes, prayer songs, assembly announcements, and amplifier relay support.
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppBooking("Hello, I would like to purchase Automatic MP3 School Bell software.")}
                className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-indigo-700 flex items-center justify-between hover:text-indigo-800"
              >
                <span>View Bell System</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 5: PVC ID Card & Certificate Printing */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-400 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">PVC ID Card & Stationery</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Premium barcode / QR enabled PVC ID cards, custom lanyards, marksheet booklets, school diaries, fee receipts, and bulk school stationery supplies.
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppBooking("Hello, I need bulk PVC ID cards, printed lanyards & certificate printing.")}
                className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-purple-700 flex items-center justify-between hover:text-purple-800"
              >
                <span>Order ID Cards & Stationery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 6: WhatsApp Cloud Business API */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">WhatsApp Official Cloud API</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automated fee dues reminders with payment links, marksheet PDF delivery, birthday greetings, homework alerts, and bulk broadcast messaging.
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppBooking("Hello, I want WhatsApp Cloud API bulk messaging setup for my school.")}
                className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-emerald-700 flex items-center justify-between hover:text-emerald-800"
              >
                <span>Enable WhatsApp API</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 7: CCTV & Smart Campus IoT */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Smart Campus IoT & Networking</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Campus-wide high-speed Wi-Fi, CCTV security surveillance systems, PA public address sound setups, and smart digital classroom interactive boards.
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppBooking("Hello, I need campus networking, Wi-Fi and CCTV setup quote.")}
                className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-blue-700 flex items-center justify-between hover:text-blue-800"
              >
                <span>Request Smart Setup</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 8: Hardware, Laptops & AMC Support */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-400 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Printer className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Hardware Sales & Annual AMC</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Computer lab setups, heavy-duty printers, POS thermal receipt printers, barcode scanners, and year-round Annual Maintenance Contracts (AMC).
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppBooking("Hello, I need Computer Lab / Hardware equipment & AMC support.")}
                className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-orange-700 flex items-center justify-between hover:text-orange-800"
              >
                <span>Get Hardware Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Complete Student Strength Pricing Matrix Table (Cheaper & More Value Than SKK) */}
      <section id="pricing" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 bg-indigo-100 px-3 py-1 rounded-full border border-indigo-200">
              Transparent, Genuine & Affordable
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              School ERP Annual Pricing Matrix
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              Choose between Cloud SaaS ERP (Annual Subscription) or Complete Offline School ERP Software. Prices designed to give higher features at genuine, unbeatable rates.
            </p>
          </div>

          {/* Pricing Comparison Table Container */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
            <div className="p-6 sm:p-8 bg-gradient-to-r from-indigo-50/70 via-white to-purple-50/70 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Crown className="w-5 h-5 text-amber-500" />
                  School Student Strength Pricing Tiers
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Includes Free Cloud Deployment, Subdomain, 210+ Modules & Full Local Tech Support
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsPlanModalOpen(true)}
                  className="px-4 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-xl border border-indigo-200 transition-all flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Compare 4 Full Editions</span>
                </button>
                <button
                  onClick={() => handleWhatsAppBooking("Hello, I need custom pricing for more than 2,000 students.")}
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Custom Strength Quote</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                    <th className="py-4 px-6">Student Strength</th>
                    <th className="py-4 px-6">Recommended Plan</th>
                    <th className="py-4 px-6">Cloud SaaS (Per Year)</th>
                    <th className="py-4 px-6">Offline ERP (Per Year)</th>
                    <th className="py-4 px-6">Standard Features Included</th>
                    <th className="py-4 px-6 text-end">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm">
                  {STUDENT_STRENGTH_MATRIX.map((tier, idx) => {
                    const isHighlighted = tier.recommendedPlan === 'Enterprise Pro' || tier.strength === '801 - 1200';
                    return (
                      <tr
                        key={idx}
                        className={`transition-colors ${
                          isHighlighted ? 'bg-rose-50/40 hover:bg-rose-50/70' : 'hover:bg-slate-50'
                        }`}
                      >
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
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                            tier.recommendedPlan === 'Starter Basic' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                            tier.recommendedPlan === 'Standard Plus' ? 'bg-cyan-100 text-cyan-800 border-cyan-200' :
                            tier.recommendedPlan === 'Professional' ? 'bg-indigo-100 text-indigo-800 border-indigo-200' :
                            'bg-rose-100 text-rose-800 border-rose-200'
                          }`}>
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
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Comparison Highlights Footer Bar */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero server setup charges • Multi-user access • Unlimited reports • Daily automated backup</span>
              </div>
              <span className="font-semibold text-indigo-600">* All prices benchmarked to be cheaper and richer than competitors.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Retail Billing & Offline Software Pricing */}
      <section id="billing" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
              Retail, Pharmacy & Enterprise Billing
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Business Point-of-Sale & Billing Software
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              Supermarket POS, Pharmacy GST Software, Mobile Shop Serial Inventory & Restaurant KOT billing systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BILLING_PLANS.map((bPlan) => (
              <div
                key={bPlan.id}
                className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-indigo-400 hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between"
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

                  <div className="pt-2 pb-1 border-y border-slate-200">
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
                  onClick={() => handleWhatsAppBooking(`Hello, I am interested in ${bPlan.name} (${bPlan.price}). Kindly share demo.`)}
                  className="w-full mt-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Request Live POS Demo</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Live Role Demonstration Sandboxes */}
      <section id="demo" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              Zero Signup • Instant Hands-On
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Experience the Full School ERP Live
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              Click any role to test drive fee collection, biometric attendance, report card generation, and teacher portals.
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
                  onClick={() => handleQuickDemoClick(item.role)}
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
        </div>
      </section>

      {/* 7. Interactive ROI Calculator */}
      <section id="roi" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
              Quantifiable Financial Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Calculate Your School's Yearly Savings
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              See how much your institution recovers by stopping fee leakage and eliminating physical paper processes.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders */}
            <div className="lg:col-span-7 space-y-6">
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

              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="flex justify-between">
                  <span>Annual Fee Cashflow Volume:</span>
                  <strong className="text-slate-900">₹ {annualFeeVolume.toLocaleString()}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Est. Paper Printing Cost Eliminated:</span>
                  <strong className="text-emerald-600">₹ {paperCostSaved.toLocaleString()} / yr</strong>
                </div>
              </div>
            </div>

            {/* Estimated Recovered Net Worth */}
            <div className="lg:col-span-5 bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-lg shadow-indigo-600/20">
              <div className="text-xs uppercase font-bold text-indigo-200 tracking-wider">
                Estimated Net Value Recovered
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white">
                ₹ {(estimatedLeakagePrevented + paperCostSaved).toLocaleString()}
              </div>
              <p className="text-xs text-indigo-100 leading-relaxed">
                By recovering 4.5% uncollected fee leakage through automated WhatsApp reminders and saving ₹180 per student in printed paper.
              </p>
              <button
                onClick={() => handleWhatsAppBooking(`Hello, based on the ROI calculator for ${studentsCount} students, I would like to adopt your School ERP system.`)}
                className="w-full py-3 bg-white hover:bg-slate-100 text-indigo-900 font-bold rounded-xl text-xs transition-colors shadow-md"
              >
                Claim This ROI for Your School
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact & Instant Quote Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 bg-indigo-100 px-3 py-1 rounded-full border border-indigo-200">
                  Direct Engineering Support
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                  Ready to Modernize Your Campus?
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our system architects are available 7 days a week for direct on-campus or virtual demonstration, quotation, and instant onboarding.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Official Sales & WhatsApp Helpline</div>
                    <div className="font-bold text-slate-900 text-base">+91 8292464812</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Official Support Email</div>
                    <div className="font-bold text-slate-900 text-base">support@pkredutech.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Headquarters & Tech Center</div>
                    <div className="font-bold text-slate-900 text-sm">PKR EDUTECH, Sector-62, Noida, UP, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Inquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-1 flex items-center gap-2">
                <Send className="w-5 h-5 text-indigo-600" />
                Quick Inquiry & Quotation Form
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill this form to transfer your specific requirement directly to our lead engineering architect on WhatsApp.
              </p>

              <form onSubmit={handleContactFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Principal Rajesh Sharma"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Mobile / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Service Required</label>
                    <select
                      value={contactForm.service}
                      onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-600"
                    >
                      <option value="School ERP - Basic / Pro / Enterprise">School ERP - Basic / Pro / Enterprise</option>
                      <option value="Biometric Attendance Device Setup">Biometric Attendance Device Setup</option>
                      <option value="Automatic MP3 School Bell Software">Automatic MP3 School Bell Software</option>
                      <option value="PVC ID Card & Certificate Printing">PVC ID Card & Certificate Printing</option>
                      <option value="Retail / Pharmacy / POS Billing Software">Retail / Pharmacy / POS Billing Software</option>
                      <option value="Cloud VPS / Dedicated Server / MySQL">Cloud VPS / Dedicated Server / MySQL</option>
                      <option value="Campus CCTV / Networking Setup">Campus CCTV / Networking Setup</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Student / Business Strength</label>
                    <select
                      value={contactForm.studentStrength}
                      onChange={(e) => setContactForm({ ...contactForm, studentStrength: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-600"
                    >
                      <option value="1 - 300 Students (Starter Basic)">1 - 300 Students (Starter Basic)</option>
                      <option value="301 - 500 Students (Standard Plus)">301 - 500 Students (Standard Plus)</option>
                      <option value="501 - 800 Students (Professional)">501 - 800 Students (Professional)</option>
                      <option value="801 - 1200 Students (Enterprise Pro)">801 - 1200 Students (Enterprise Pro)</option>
                      <option value="1201 - 2000+ Students (Custom Tier)">1201 - 2000+ Students (Custom Tier)</option>
                      <option value="Retail / Pharmacy Store (Single Counter)">Retail / Pharmacy Store (Single Counter)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">City / District / State</label>
                  <input
                    type="text"
                    placeholder="e.g. Gorakhpur / Lucknow, Uttar Pradesh"
                    value={contactForm.location}
                    onChange={(e) => setContactForm({ ...contactForm, location: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Additional Notes / Custom Requirement</label>
                  <textarea
                    rows={3}
                    placeholder="Describe any special requirements, module customisations or preferred demo timings..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl text-xs transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Send Inquiry to WhatsApp & Get Free Quote</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Professional Light Footer */}
      <footer className="mt-16 pt-12 pb-6 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 text-base">PKR EDUTECH GLOBAL IT SERVICES</span>
            </div>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} PKR EDUTECH. All Rights Reserved. Built for high-performance educational institutions.
            </p>
          </div>
        </div>
      </footer>

      {/* Plan Comparison Modal */}
      <PlanComparisonModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
        onSelectPlan={(plan) => {
          setIsPlanModalOpen(false);
          handleWhatsAppBooking(`Hello, I want to book ${plan.name} (${plan.price}).`);
        }}
      />
    </div>
  );
};

export default CommercialSaaSProductLandingPage;
