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
  Clock,
  Laptop,
  CheckSquare
} from 'lucide-react';

const PLAN_TIERS = [
  {
    id: 'startup',
    name: 'Startup',
    badge: 'Entry',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    titleColor: 'text-blue-400',
    subtitle: 'New schools starting ERP',
    description: 'Admissions, students, classes, attendance and notices. No advanced operations modules.',
    featuresCount: '169 enabled features',
    price: '₹8,000 / yr',
    highlight: false
  },
  {
    id: 'basic',
    name: 'Basic',
    badge: 'Popular',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    titleColor: 'text-amber-400',
    subtitle: 'Schools moving daily work online',
    description: 'Core ERP, fees, reports and web portals. Mobile app, transport, hostel and HR stay limited.',
    featuresCount: '175 enabled features',
    price: '₹15,000 / yr',
    highlight: false
  },
  {
    id: 'pro',
    name: 'PRO',
    badge: 'Advanced',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    titleColor: 'text-purple-400',
    subtitle: 'Growing schools with operations teams',
    description: 'Transport, library, hostel, HR, payroll and advanced examination & analytical reports.',
    featuresCount: '331 enabled features',
    price: '₹22,000 / yr',
    highlight: false
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    badge: 'Premium',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    titleColor: 'text-rose-400',
    subtitle: 'Multi-team schools needing premium controls',
    description: 'Enterprise UI, biometric hardware sync, automatic school bell, security posture and custom workflows.',
    featuresCount: '423 enabled features',
    price: '₹30,000 / yr',
    highlight: true,
    isCurrentForSchool: true
  }
];

const FEATURE_AREAS = [
  { name: 'Core School Management (Admissions, Classes, Sections)', startup: true, basic: true, pro: true, enterprise: true },
  { name: 'Student & Parent Portal (Family Portal & Fee Dues View)', startup: true, basic: true, pro: true, enterprise: true },
  { name: 'Fees Management, Invoicing & Multi-Branch POS', startup: true, basic: true, pro: true, enterprise: true },
  { name: 'SMS, WhatsApp Broadcast & Parent Circulars', startup: false, basic: false, pro: true, enterprise: true },
  { name: 'PWA Mobile App & Installable Desktop Station', startup: false, basic: false, pro: false, enterprise: true },
  { name: 'Transport (Bus Routes & Stops) / Hostel / Library', startup: true, basic: true, pro: true, enterprise: true },
  { name: 'HR Management, Staff Attendance & Payroll Slip Gen', startup: false, basic: false, pro: true, enterprise: true },
  { name: 'Biometric Machine Sync (ZKTeco/Secureye) & Auto Bell', startup: false, basic: false, pro: false, enterprise: true },
  { name: 'Advanced Security, Role-Based Access (RBAC) & Enterprise UI', startup: false, basic: false, pro: false, enterprise: true }
];

export function App() {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [studentsCount, setStudentsCount] = useState(500);
  const [avgFee, setAvgFee] = useState(1600);

  // ROI Calculations
  const annualFeeVolume = studentsCount * avgFee * 12;
  const estimatedLeakagePrevented = Math.round(annualFeeVolume * 0.045);
  const paperCostSaved = Math.round(studentsCount * 180);

  const demoPortalUrl = 'https://dadheech.vercel.app';

  const handleOpenDemo = (role = 'admin') => {
    window.open(`${demoPortalUrl}/#login`, '_blank');
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent("Hello PKR EDUTECH Team! I would like to schedule a free demonstration of your Enterprise School ERP for our institution.");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white pb-16">
      
      {/* 1. Global Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#070b14]/80 backdrop-blur-xl border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-600/30 ring-1 ring-white/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-white">
                  PKR<span className="text-indigo-400"> EDUTECH</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30 text-[10px] font-bold uppercase tracking-wider">
                  Enterprise Cloud
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">
                By PKR EduTech Global IT Services • ISO 9001:2015 Certified
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Core Modules</a>
            <a href="#demo" className="hover:text-white transition-colors">Live Sandbox Demos</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing Matrix</a>
            <a href="#hardware" className="hover:text-white transition-colors">IoT Biometrics & Bell</a>
            <a href="#roi" className="hover:text-white transition-colors">ROI Calculator</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Request Callback</span>
            </button>

            <button
              onClick={() => handleOpenDemo('admin')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/30 transition-all transform active:scale-95 border border-indigo-400/30"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Launch Live Demo ↗</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.18),transparent_60%)]" />
        <div className="absolute right-10 top-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-10 bottom-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          {/* Release Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-xs font-semibold text-indigo-300 shadow-xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Next-Gen Enterprise School ERP 2027-2028 Edition • 423+ Modules Active</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.12]">
            The Complete Operating System for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Smart Schools & Campuses</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            Eliminate paperwork, stop fee leakages, sync biometric staff clocks, trigger automated MP3 school bells, and deliver a stunning 5-star mobile portal for parents & teachers.
          </p>

          {/* Primary Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleOpenDemo('admin')}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-bold rounded-2xl shadow-xl shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-3 text-sm"
            >
              <Zap className="w-5 h-5" />
              <span>Launch Super Admin Demo ↗</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsPlanModalOpen(true)}
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold rounded-2xl border border-slate-700 transition-all flex items-center gap-3 text-sm shadow-md"
            >
              <Crown className="w-5 h-5 text-amber-400" />
              <span>Compare 4-Tier Packages</span>
            </button>

            <button
              onClick={handleWhatsAppBooking}
              className="px-6 py-4 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-bold rounded-2xl border border-emerald-500/40 transition-all flex items-center gap-2.5 text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Book Demo on WhatsApp</span>
            </button>
          </div>

          {/* Metric KPI Counters */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="text-3xl font-black text-white">423+</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Enterprise Features</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="text-3xl font-black text-indigo-400">99.99%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Cloud Uptime SLA</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="text-3xl font-black text-purple-400">15 Mins</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">1-Click Excel Migration</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="text-3xl font-black text-emerald-400">₹0 Fee</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">No Setup Charges</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Role-Based Demo Portals */}
      <section id="demo" className="py-20 bg-slate-900/40 border-y border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              Interactive Sandbox
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Try Interactive Role Demos Right Now
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Click any role to test live dashboard features with 1-click demo login PINs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* 1. Super Admin */}
            <div
              onClick={() => handleOpenDemo('admin')}
              className="group cursor-pointer bg-slate-900 hover:bg-slate-800 rounded-2xl p-5 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between shadow-lg hover:shadow-indigo-500/10"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Crown className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-white">Super Admin</h3>
                <p className="text-xs text-slate-400 mt-1">Full control over Multi-branch, fees, staff & CBSE compliance.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-amber-400">
                <span>Launch Desk ↗</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 2. Teacher */}
            <div
              onClick={() => handleOpenDemo('teacher')}
              className="group cursor-pointer bg-slate-900 hover:bg-slate-800 rounded-2xl p-5 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between shadow-lg hover:shadow-indigo-500/10"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-white">Teacher Desk</h3>
                <p className="text-xs text-slate-400 mt-1">Daily diary, lesson plan tracker, marks entry, timetable.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-indigo-400">
                <span>Launch Desk ↗</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 3. Accountant */}
            <div
              onClick={() => handleOpenDemo('accountant')}
              className="group cursor-pointer bg-slate-900 hover:bg-slate-800 rounded-2xl p-5 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between shadow-lg hover:shadow-emerald-500/10"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-white">Accounts & POS</h3>
                <p className="text-xs text-slate-400 mt-1">Instant fee receipts, sibling discounts, cash book & dues.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-400">
                <span>Launch Desk ↗</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 4. Parent Portal */}
            <div
              onClick={() => handleOpenDemo('parent')}
              className="group cursor-pointer bg-slate-900 hover:bg-slate-800 rounded-2xl p-5 border border-slate-800 hover:border-purple-500/50 transition-all flex flex-col justify-between shadow-lg hover:shadow-purple-500/10"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-white">Parent Portal</h3>
                <p className="text-xs text-slate-400 mt-1">Live child attendance, fee receipts download, report cards.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-purple-400">
                <span>Launch Desk ↗</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 5. Student Portal */}
            <div
              onClick={() => handleOpenDemo('student')}
              className="group cursor-pointer bg-slate-900 hover:bg-slate-800 rounded-2xl p-5 border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between shadow-lg hover:shadow-blue-500/10"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-white">Student Portal</h3>
                <p className="text-xs text-slate-400 mt-1">Digital homework, online quizzes, issued library books & timetable.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-400">
                <span>Launch Desk ↗</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Features Showcase */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
            Engineered For Modern Schools
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            6 Advanced Architectural Pillars
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Everything your school needs to achieve 100% digital excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Fees POS & Sibling Automation */}
          <div className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Smart Fees & Sibling POS</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Auto-link siblings across classes for unified fee receipting. Generate multi-copy thermal/A4 vouchers with flexible fine rules and WhatsApp due alerts.
            </p>
            <ul className="text-xs text-slate-300 space-y-2 pt-2">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Sibling Auto-Discovery by Phone</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Multi-Branch POS Cash Registers</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Instant Due WhatsApp Reminders</li>
            </ul>
          </div>

          {/* Card 2: IoT Biometric Clocks & Automatic Bell */}
          <div id="hardware" className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Fingerprint className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Biometric & Automatic Bell</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hardware-ready Python station that connects directly to ZKTeco / Secureye biometric machines and rings MP3 period bells over school PA speakers.
            </p>
            <ul className="text-xs text-slate-300 space-y-2 pt-2">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Real-time Fingerprint Staff Clocks</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Custom Voice / MP3 Chimes per Period</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Dedicated 1-Click PenDrive Runner</li>
            </ul>
          </div>

          {/* Card 3: Academics & Lesson Tracker */}
          <div className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Lesson Planning & Daily Diary</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Track chapter completion progress across all subjects. Teachers submit daily classwork diaries with lab practicals and homework notes.
            </p>
            <ul className="text-xs text-slate-300 space-y-2 pt-2">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> Syllabus Progress Bars (%)</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> Classwork & Homework Sync</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> Examination Marks & Rank Gen</li>
            </ul>
          </div>

          {/* Card 4: House Master & Sports Trophy */}
          <div className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">House Master & Trophy Board</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Award points to Red, Blue, Green, and Yellow houses for academics, sports, discipline, and cultural events with live standings.
            </p>
            <ul className="text-xs text-slate-300 space-y-2 pt-2">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-400" /> 4 School Houses Points Tally</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-400" /> Cock House Trophy Rankings</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-400" /> House Master Audit History</li>
            </ul>
          </div>

          {/* Card 5: Certificates & Admit Cards */}
          <div className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">ID Cards, TC & Admit Cards</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bulk 1-click printable student ID cards, employee badges, examination admit cards with roll number slips, and official Transfer Certificates.
            </p>
            <ul className="text-xs text-slate-300 space-y-2 pt-2">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Bulk 8-up ID Card Sheet Printing</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Automated Serial Number TC</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Examination Hall Roll Slips</li>
            </ul>
          </div>

          {/* Card 6: Front Desk & Gate Pass */}
          <div className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Front Office & Gate Pass</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Complete reception management: visitor book, student gate pass with photo, admission enquiry follow-ups, and call logs.
            </p>
            <ul className="text-xs text-slate-300 space-y-2 pt-2">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400" /> Visitor ID Badges & Passes</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400" /> Admission Enquiry Funnel</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400" /> Postal Dispatch / Receive Logs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. ROI Cost Saving Calculator */}
      <section id="roi" className="py-20 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950 border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-indigo-900/40 shadow-2xl space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Data-Driven ROI
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                How Much Money & Time Will Your School Save?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Move the sliders to match your school's student strength:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-6">
                {/* Slider 1: Total Students */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-300">
                    <span>Total Enrolled Students:</span>
                    <span className="text-indigo-400 font-mono text-sm">{studentsCount} Students</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="2500"
                    step="25"
                    value={studentsCount}
                    onChange={(e) => setStudentsCount(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                </div>

                {/* Slider 2: Average Monthly Fee */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-300">
                    <span>Average Monthly Fee per Student:</span>
                    <span className="text-emerald-400 font-mono text-sm">₹{avgFee.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="8000"
                    step="100"
                    value={avgFee}
                    onChange={(e) => setAvgFee(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Live Savings Card */}
              <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 space-y-4">
                <div className="text-xs text-slate-400 uppercase font-semibold">Estimated Annual Recovery:</div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400">
                  ₹{(estimatedLeakagePrevented + paperCostSaved).toLocaleString()}
                  <span className="text-xs text-slate-400 font-normal"> / year</span>
                </div>

                <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Fee Leakage Prevented:</span>
                    <span className="font-bold text-white">₹{estimatedLeakagePrevented.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Paper & Printing Cost Saved:</span>
                    <span className="font-bold text-white">₹{paperCostSaved.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Staff Time Saved:</span>
                    <span className="font-bold text-indigo-400">~650 Hours / yr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Pricing Packages */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
            Simple, Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Choose the Perfect Package for Your Campus
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Zero setup fees. Includes free data migration, SSL security, and WhatsApp priority support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLAN_TIERS.map(tier => {
            const isEnterprise = tier.id === 'enterprise';
            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-6 flex flex-col justify-between space-y-6 transition-all ${
                  isEnterprise
                    ? 'bg-gradient-to-b from-rose-950/40 via-slate-900 to-indigo-950/40 border-2 border-rose-500/60 shadow-2xl relative'
                    : 'bg-slate-900/60 border border-slate-800'
                }`}
              >
                {isEnterprise && (
                  <div className="absolute -top-3 right-4 bg-rose-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                <div>
                  <span className={`px-2.5 py-1 rounded-full border text-xs font-bold ${tier.badgeColor}`}>
                    {tier.name} ({tier.badge})
                  </span>
                  <div className="mt-4">
                    <span className="text-3xl font-black text-white">{tier.price}</span>
                  </div>
                  <div className="text-xs font-bold text-slate-200 mt-2">{tier.subtitle}</div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{tier.description}</p>
                  
                  <div className="mt-6 pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                    <div className="font-semibold text-indigo-300">{tier.featuresCount}</div>
                    {tier.id === 'startup' && (
                      <>
                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Student & Parent Records</div>
                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Attendance & Notices</div>
                      </>
                    )}
                    {tier.id === 'basic' && (
                      <>
                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Full Fees & Receipts POS</div>
                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> School Public Website</div>
                      </>
                    )}
                    {tier.id === 'pro' && (
                      <>
                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Bus Transport & Routes</div>
                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Staff Payroll & Leave System</div>
                      </>
                    )}
                    {tier.id === 'enterprise' && (
                      <>
                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 font-bold" /> <strong>All 423+ Modules Active</strong></div>
                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Biometric Sync & Auto Bell</div>
                      </>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setIsPlanModalOpen(true)}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isEnterprise
                      ? 'bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 text-white shadow-lg shadow-rose-600/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  View Feature Matrix
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Corporate Footer */}
      <footer className="border-t border-slate-800 bg-[#070b14] pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-sm font-black text-white">
              PKR EDUTECH GLOBAL IT SERVICES
            </div>
            <p className="text-xs text-slate-500">
              Official Enterprise School ERP & Smart Campus Solutions Provider • ISO 9001:2015 Certified
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            <button
              onClick={() => handleOpenDemo('admin')}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:text-indigo-400 transition-colors flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-indigo-400" />
              <span>Live Demo Sandbox</span>
            </button>

            <button
              onClick={handleWhatsAppBooking}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Support</span>
            </button>
          </div>
        </div>
      </footer>

      {/* MODAL 1: 4-Tier Plan Comparison Matrix Modal */}
      {isPlanModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95">
            <div className="p-6 pb-4 border-b border-slate-800 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-white">Plan Comparison</h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-bold uppercase">
                    4-Tier Matrix
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Pick the package that matches the school workflow. Exact modules can be tailored for your campus.
                </p>
              </div>
              <button onClick={() => setIsPlanModalOpen(false)} className="p-2 text-slate-400 hover:text-white rounded-xl">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {PLAN_TIERS.map(t => (
                  <div key={t.id} className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`font-bold ${t.titleColor}`}>{t.name}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${t.badgeColor}`}>{t.badge}</span>
                    </div>
                    <div className="text-xs font-bold text-white">{t.subtitle}</div>
                    <p className="text-[11px] text-slate-400">{t.description}</p>
                    <div className="pt-2 border-t border-slate-700 text-center font-bold text-xs text-indigo-300">
                      {t.featuresCount}
                    </div>
                  </div>
                ))}
              </div>

              {/* Matrix Table */}
              <div className="bg-slate-950/60 rounded-2xl border border-slate-800 overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-800/80 border-b border-slate-700 text-slate-300 font-bold">
                      <th className="p-3 pl-4">Feature Area</th>
                      <th className="p-3 text-center">Startup (169)</th>
                      <th className="p-3 text-center">Basic (175)</th>
                      <th className="p-3 text-center">PRO (331)</th>
                      <th className="p-3 text-center text-rose-400">Enterprise (423)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    {FEATURE_AREAS.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/40">
                        <td className="p-3 pl-4 font-medium">{item.name}</td>
                        <td className="p-3 text-center">{item.startup ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <Minus className="w-4 h-4 text-slate-600 mx-auto" />}</td>
                        <td className="p-3 text-center">{item.basic ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <Minus className="w-4 h-4 text-slate-600 mx-auto" />}</td>
                        <td className="p-3 text-center">{item.pro ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <Minus className="w-4 h-4 text-slate-600 mx-auto" />}</td>
                        <td className="p-3 text-center bg-rose-950/20">{item.enterprise ? <Check className="w-4 h-4 text-emerald-400 mx-auto font-bold" /> : <Minus className="w-4 h-4 text-slate-600 mx-auto" />}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 px-6 border-t border-slate-800 bg-slate-950/60 flex justify-end">
              <button
                onClick={() => setIsPlanModalOpen(false)}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs"
              >
                Close Matrix
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Request On-Site Demo & Callback Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 w-full max-w-md p-6 space-y-4 animate-in zoom-in-95">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-white">Book Free School Demo</h3>
                <p className="text-xs text-slate-400">Our technical team will give you a full live demonstration.</p>
              </div>
              <button onClick={() => setIsContactModalOpen(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
              >
                <Phone className="w-4 h-4" />
                Chat with Solution Architect on WhatsApp
              </button>
              <button
                onClick={() => handleOpenDemo('admin')}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
              >
                <Zap className="w-4 h-4" />
                Open Instant Live Browser Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
