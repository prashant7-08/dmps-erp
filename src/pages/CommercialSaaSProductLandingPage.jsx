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
  Receipt
} from 'lucide-react';
import { PlanComparisonModal } from '../components/saas/PlanComparisonModal';
import { useToast } from '../components/common/Toast';

export const CommercialSaaSProductLandingPage = ({
  onLaunchDemo,
  onOpenMasterSaaS,
  onOpenSchoolPortal
}) => {
  const { showToast } = useToast();
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [selectedDemoRole, setSelectedDemoRole] = useState('superadmin');
  const [studentsCount, setStudentsCount] = useState(450);
  const [avgFee, setAvgFee] = useState(1500);

  // ROI Calculations
  const annualFeeVolume = studentsCount * avgFee * 12;
  const estimatedLeakagePrevented = Math.round(annualFeeVolume * 0.045); // 4.5% leakage recovery
  const paperCostSaved = Math.round(studentsCount * 180); // ₹180 saved per student in paper/printing

  const handleQuickDemoClick = (role) => {
    showToast(`Launching ${role.toUpperCase()} interactive live environment...`, 'info');
    if (onLaunchDemo) onLaunchDemo(role);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent("Hello! I am interested in a demo of EDUMANTRA Enterprise School ERP for my school.");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Professional Sticky Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Company Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-600/30 ring-1 ring-white/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-white font-sans">
                  EDUMANTRA<span className="text-indigo-400">.AI</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30 text-[10px] font-bold uppercase tracking-wider">
                  Enterprise ERP
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide">
                By Global Edutech IT Services • ISO 9001:2015 Certified
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Features & Modules</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing Plans</a>
            <a href="#demo" className="hover:text-white transition-colors">Interactive Demos</a>
            <a href="#roi" className="hover:text-white transition-colors">ROI Calculator</a>
            <a href="#hardware" className="hover:text-white transition-colors">Biometric & Bell IoT</a>
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
              <Zap className="w-3.5 h-3.5" />
              <span>Launch Live Demo</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_60%)]" />
        <div className="absolute right-10 top-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-10 bottom-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          {/* Release Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-xs font-semibold text-indigo-300 shadow-xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Next-Gen Enterprise School ERP 2027-2028 Edition • 423+ Modules Active</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.15]">
            The Complete Operating System for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Next-Generation Schools</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            Eliminate paperwork, stop fee leakages, sync biometric staff clocks, trigger automated MP3 school bells, and deliver a stunning 5-star mobile portal for parents & teachers.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleQuickDemoClick('superadmin')}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-bold rounded-2xl shadow-xl shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-3 text-sm"
            >
              <Zap className="w-5 h-5" />
              <span>Explore Super Admin Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsPlanModalOpen(true)}
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold rounded-2xl border border-slate-700 transition-all flex items-center gap-3 text-sm shadow-md"
            >
              <Crown className="w-5 h-5 text-amber-400" />
              <span>View 4-Tier Packages & Pricing</span>
            </button>

            <button
              onClick={handleWhatsAppBooking}
              className="px-6 py-4 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-bold rounded-2xl border border-emerald-500/40 transition-all flex items-center gap-2.5 text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Book Demo on WhatsApp</span>
            </button>
          </div>

          {/* Trust Metric Counters */}
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

      {/* SECTION 2: Interactive Role-Based Demo Portals */}
      <section id="demo" className="py-20 bg-slate-900/50 border-y border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              Zero Signup Required
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Try Interactive Role Demos Right Now
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Experience the ERP exactly as your Management, Teachers, Parents, and Accountants will see it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* 1. Super Admin */}
            <div
              onClick={() => handleQuickDemoClick('superadmin')}
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
                <span>Launch Desk</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 2. Teacher */}
            <div
              onClick={() => handleQuickDemoClick('teacher')}
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
                <span>Launch Desk</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 3. Accountant */}
            <div
              onClick={() => handleQuickDemoClick('accountant')}
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
                <span>Launch Desk</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 4. Parent Portal */}
            <div
              onClick={() => handleQuickDemoClick('parent')}
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
                <span>Launch Desk</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 5. Student Portal */}
            <div
              onClick={() => handleQuickDemoClick('student')}
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
                <span>Launch Desk</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 6 Enterprise Highlights */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
            Engineered For Excellence
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Everything Your School Needs to Run on Autopilot
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            From the entrance gate to the principal's office, every workflow is digitally linked.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Fees & Sibling Discounts */}
          <div className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Smart Fees & Sibling POS</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Auto-link siblings across classes for group fee payments. Generate multi-copy thermal or A4 receipts with custom fine rules and dues reminders.
            </p>
            <ul className="text-xs text-slate-300 space-y-2 pt-2">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Sibling Auto-Discovery by Phone</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Offline POS & Online UPI Integration</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Instant Due WhatsApp Reminders</li>
            </ul>
          </div>

          {/* Card 2: IoT Hardware Sync (Biometric + Bell) */}
          <div className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
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

      {/* SECTION 4: ROI / Cost Saving Calculator */}
      <section id="roi" className="py-20 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950 border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-indigo-900/40 shadow-2xl space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Transparent ROI
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

      {/* SECTION 5: 4-Tier Pricing Showcase */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
            Simple, Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Choose the Perfect Plan for Your Campus
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            No hidden fees. Every plan includes cloud backup, SSL security, and WhatsApp support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Startup */}
          <div className="rounded-3xl p-6 bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold">
                Startup (Entry)
              </span>
              <div className="mt-4">
                <span className="text-3xl font-black text-white">₹8,000</span>
                <span className="text-xs text-slate-400"> / year</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">Best for new or small preschools starting digital records.</p>
              
              <div className="mt-6 pt-4 border-t border-slate-800 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 169 Core Features</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Student & Parent Records</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Basic Attendance & Notices</div>
              </div>
            </div>
            <button
              onClick={() => setIsPlanModalOpen(true)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
            >
              View Feature Matrix
            </button>
          </div>

          {/* 2. Basic */}
          <div className="rounded-3xl p-6 bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold">
                Basic (Popular)
              </span>
              <div className="mt-4">
                <span className="text-3xl font-black text-white">₹15,000</span>
                <span className="text-xs text-slate-400"> / year</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">For schools moving daily register & accounts online.</p>
              
              <div className="mt-6 pt-4 border-t border-slate-800 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 175 Features Included</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Full Fees & Receipt POS</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Public Website & Enquiries</div>
              </div>
            </div>
            <button
              onClick={() => setIsPlanModalOpen(true)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
            >
              View Feature Matrix
            </button>
          </div>

          {/* 3. PRO */}
          <div className="rounded-3xl p-6 bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <span className="px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-bold">
                PRO (Advanced)
              </span>
              <div className="mt-4">
                <span className="text-3xl font-black text-white">₹22,000</span>
                <span className="text-xs text-slate-400"> / year</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">Growing schools with bus transport, HR & exams.</p>
              
              <div className="mt-6 pt-4 border-t border-slate-800 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 331 Advanced Features</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Transport Routes & Fleet</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Staff Payroll & Leave System</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> SMS & WhatsApp Broadcast</div>
              </div>
            </div>
            <button
              onClick={() => setIsPlanModalOpen(true)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
            >
              View Feature Matrix
            </button>
          </div>

          {/* 4. Enterprise (Top Tier) */}
          <div className="rounded-3xl p-6 bg-gradient-to-b from-rose-950/40 via-slate-900 to-indigo-950/40 border-2 border-rose-500/60 shadow-2xl flex flex-col justify-between space-y-6 relative">
            <div className="absolute -top-3 right-4 bg-rose-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
              Enterprise Pro
            </div>
            <div>
              <span className="px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-bold flex items-center gap-1.5 w-fit">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                Enterprise (All-In-One)
              </span>
              <div className="mt-4">
                <span className="text-3xl font-black text-white">₹30,000</span>
                <span className="text-xs text-slate-400"> / year</span>
              </div>
              <p className="text-xs text-rose-200 mt-2 font-medium">Complete Campus Operating System with Hardware IoT.</p>
              
              <div className="mt-6 pt-4 border-t border-rose-900/40 space-y-2.5 text-xs text-slate-200">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 font-bold" /> <strong>All 423+ Features Unlocked</strong></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Biometric Sync (ZKTeco/Secureye)</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Automated MP3 School Bell</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> House Master & Sports Trophy</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> PWA Mobile App & Custom Domain</div>
              </div>
            </div>
            <button
              onClick={() => setIsPlanModalOpen(true)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-lg shadow-rose-600/20"
            >
              Open Full Plan Comparison
            </button>
          </div>
        </div>
      </section>

      {/* Footer & Agency Portal Link */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-sm font-black text-white">
              EDUMANTRA GLOBAL IT SERVICES
            </div>
            <p className="text-xs text-slate-500">
              Official Enterprise School ERP Provider • Powered by Prashant Rajput & Global Edutech
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
