import React, { useState, useEffect } from 'react';
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
  Unlock,
  Headphones,
  Check,
  X,
  Server,
  KeyRound,
  TrendingUp,
  Receipt,
  Clock,
  Laptop,
  CheckSquare,
  Eye,
  EyeOff,
  AlertTriangle,
  Printer,
  Wifi,
  Send,
  Sliders,
  Database
} from 'lucide-react';

import {
  PLAN_TIERS,
  STUDENT_STRENGTH_MATRIX,
  BILLING_PLANS,
  FEATURE_AREAS,
  PlanComparisonModal
} from './components/saas/PlanComparisonModal';
import { MasterSaaSHubPage } from './pages/MasterSaaSHubPage';
import { ToastProvider, useToast } from './components/common/Toast';

export function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

function AppContent() {
  const { showToast } = useToast();
  
  // Master Admin Authentication State (PIN protected: 123456 / pkr2027)
  const [isMasterAuthenticated, setIsMasterAuthenticated] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('PKR_MASTER_AUTH') === 'true';
    }
    return false;
  });
  const [isMasterPinModalOpen, setIsMasterPinModalOpen] = useState(false);
  const [masterPinInput, setMasterPinInput] = useState('');
  const [showMasterPin, setShowMasterPin] = useState(false);
  const [masterPinError, setMasterPinError] = useState('');

  const getInitialView = () => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      const isAuth = sessionStorage.getItem('PKR_MASTER_AUTH') === 'true';
      if ((hash.includes('master') || hash.includes('console') || hash.includes('admin-saas')) && isAuth) {
        return 'master-console';
      }
    }
    return 'landing';
  };

  const [currentView, setCurrentView] = useState(getInitialView);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [studentsCount, setStudentsCount] = useState(500);
  const [avgFee, setAvgFee] = useState(1600);

  // WhatsApp Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    service: 'School ERP - Basic / Pro / Enterprise',
    studentStrength: '301 - 500 Students',
    location: '',
    message: ''
  });

  // Sync URL hash with security check
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('master') || hash.includes('console') || hash.includes('admin-saas')) {
        const isAuth = sessionStorage.getItem('PKR_MASTER_AUTH') === 'true';
        if (isAuth) {
          setCurrentView('master-console');
        } else {
          setCurrentView('landing');
          setMasterPinInput('');
          setMasterPinError('');
          setIsMasterPinModalOpen(true);
        }
      } else {
        setCurrentView('landing');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenMasterConsole = () => {
    if (isMasterAuthenticated) {
      setCurrentView('master-console');
      window.history.pushState(null, '', '#master');
    } else {
      setMasterPinInput('');
      setMasterPinError('');
      setIsMasterPinModalOpen(true);
    }
  };

  const handleVerifyMasterPin = (e) => {
    if (e) e.preventDefault();
    const cleanPin = masterPinInput.trim();
    if (cleanPin === '123456' || cleanPin === 'pkr2027' || cleanPin === 'admin@pkr' || cleanPin === '708090') {
      setIsMasterAuthenticated(true);
      sessionStorage.setItem('PKR_MASTER_AUTH', 'true');
      setIsMasterPinModalOpen(false);
      setMasterPinInput('');
      setMasterPinError('');
      setCurrentView('master-console');
      window.history.pushState(null, '', '#master');
      showToast('🔓 Master Admin Access Granted! Welcome to Hub.', 'success');
    } else {
      setMasterPinError('Access Denied: Incorrect Master Security PIN.');
      showToast('❌ Access Denied: Incorrect Master PIN!', 'error');
    }
  };

  const handleLockMasterConsole = () => {
    setIsMasterAuthenticated(false);
    sessionStorage.removeItem('PKR_MASTER_AUTH');
    setCurrentView('landing');
    window.history.pushState(null, '', ' ');
    showToast('🔒 Master Console Locked & Logged Out.', 'info');
  };

  // ROI Calculations
  const annualFeeVolume = studentsCount * avgFee * 12;
  const estimatedLeakagePrevented = Math.round(annualFeeVolume * 0.045);
  const paperCostSaved = Math.round(studentsCount * 180);

  const demoPortalUrl = 'https://dadheech.vercel.app';

  const handleOpenDemo = (role = 'admin') => {
    showToast(`Opening ${role.toUpperCase()} live demo sandbox...`, 'info');
    window.open(`${demoPortalUrl}/#login`, '_blank');
  };

  const handleWhatsAppBooking = (customMsg = '') => {
    const defaultText = "Hello PKR EDUTECH Team! I would like to get a quote and schedule a free live demonstration of your School ERP & IT Solutions.";
    const text = encodeURIComponent(customMsg || defaultText);
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
    setIsContactModalOpen(false);
    showToast('Enquiry transferred to WhatsApp! Our architect will respond promptly.', 'success');
  };

  // RENDER MASTER SAAS CONSOLE VIEW (SECURITY GUARDED - LIGHT/CRISP THEME)
  if (currentView === 'master-console' && isMasterAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 sm:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center shadow-md text-white">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-lg text-slate-900">PKR EDUTECH Master Console</h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px] font-bold">
                    Authenticated Session
                  </span>
                </div>
                <p className="text-xs text-slate-500">Multi-School SaaS License, Database & Tenant Hub</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setCurrentView('landing');
                  window.history.pushState(null, '', ' ');
                }}
                className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 shadow-sm flex items-center gap-2 transition-all"
              >
                <ArrowRight className="w-3.5 h-3.5 rotate-180 text-indigo-600" />
                <span>Public Sales Site</span>
              </button>

              <button
                onClick={handleLockMasterConsole}
                className="px-3.5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-xl border border-rose-200 flex items-center gap-1.5 transition-all shadow-sm"
              >
                <Lock className="w-3.5 h-3.5 text-rose-600" />
                <span>Lock & Logout</span>
              </button>
            </div>
          </div>

          <MasterSaaSHubPage
            onReturnToSchool={() => {
              setCurrentView('landing');
              window.history.pushState(null, '', ' ');
            }}
            onSwitchTenant={(tenant) => {
              window.open(`${demoPortalUrl}/?tenant=${tenant.slug}#login`, '_blank');
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-600 selection:text-white pb-16">
      
      {/* 1. Global Navigation Bar - Crisp White & Frosted */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-600/20 ring-1 ring-black/5">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-slate-900">
                  PKR<span className="text-indigo-600"> EDUTECH</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-[10px] font-bold uppercase tracking-wider">
                  GLOBAL IT SERVICES
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium">
                Software • Server • Biometrics • Bell • Printing • Hardware
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-600">
            <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">School ERP Pricing</a>
            <a href="#billing" className="hover:text-indigo-600 transition-colors">Retail Billing</a>
            <a href="#features" className="hover:text-indigo-600 transition-colors">ERP Modules</a>
            <a href="#demo" className="hover:text-indigo-600 transition-colors">Live Sandboxes</a>
            <a href="#roi" className="hover:text-indigo-600 transition-colors">ROI Calculator</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Get Quote</span>
            </button>

            <button
              onClick={() => handleOpenDemo('admin')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md shadow-indigo-600/20 transition-all transform active:scale-95"
            >
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>Live Demo ↗</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section - Bright, Vibrant, Modern */}
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

          {/* Primary Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
            <button
              onClick={() => handleOpenDemo('admin')}
              className="px-7 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-black rounded-2xl shadow-xl shadow-indigo-600/25 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2.5 text-sm"
            >
              <Zap className="w-5 h-5 text-amber-300" />
              <span>⚡ Launch Live Demo Sandbox ↗</span>
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

          {/* Metric KPI Counters */}
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

      {/* 3. Comprehensive Service Pillars (Surpassing SKK Developers) */}
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
            
            {/* Service 1: Server & Cloud Hosting */}
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

            {/* Service 2: Software & School ERP */}
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
                onClick={() => handleOpenDemo('admin')}
                className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-amber-700 flex items-center justify-between hover:text-amber-800"
              >
                <span>Launch Live ERP Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 3: Biometric Attendance & Access Control */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Fingerprint className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Biometric Attendance & Locks</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct hardware sync with ZKTeco, eSSL & Secureye fingerprint, face recognition, RFID card access, and smart door security systems.
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppBooking("Hello, I need Biometric Attendance & Smart Door Lock setup for our campus.")}
                className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-teal-700 flex items-center justify-between hover:text-teal-800"
              >
                <span>Explore Biometrics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 4: Automated MP3 School Bell */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-400 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Bell className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Automated MP3 School Bell</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Python-based automatic period bell runner with customizable voice chimes, prayer, lunch, and warning chimes. Zero manual intervention.
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppBooking("Hello, I want details about the Automated MP3 School Bell System.")}
                className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-purple-700 flex items-center justify-between hover:text-purple-800"
              >
                <span>Automated Bell Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 5: Hardware & Printer Support */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Printer className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Hardware & Printer AMC Support</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sales, setup, and annual maintenance for desktop computers, laptops, thermal POS printers, laser receipt printers, and barcode scanners.
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppBooking("Hello, I need Desktop / Laptop / Thermal Printer hardware support.")}
                className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-emerald-700 flex items-center justify-between hover:text-emerald-800"
              >
                <span>Hardware Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 6: ID Card & Printing Service */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">PVC ID Cards & Offset Printing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Premium laminated PVC Student & Staff ID cards, custom printed lanyards, report card jackets, fee books, school diaries, and certificates.
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppBooking("Hello, I need PVC Student ID Card and School Printing samples and quotation.")}
                className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-indigo-700 flex items-center justify-between hover:text-indigo-800"
              >
                <span>Order ID Cards</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 7: Networking & Wi-Fi */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-400 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Wifi className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Campus Networking & Wi-Fi</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  LAN cabling, enterprise Wi-Fi routers, network printer sharing, P2P point-to-point wireless links, and firewall configuration for campus labs.
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppBooking("Hello, I need Campus Networking / LAN / Wi-Fi installation support.")}
                className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-orange-700 flex items-center justify-between hover:text-orange-800"
              >
                <span>Networking Setup</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 8: Bulk WhatsApp & SMS */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-400 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Bulk WhatsApp & SMS Alerts</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automated fee due reminder messages, daily student absent alerts, exam result cards, and promotional broadcasts directly to parents' WhatsApp.
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppBooking("Hello, I need WhatsApp API & Bulk SMS service for my school.")}
                className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-cyan-700 flex items-center justify-between hover:text-cyan-800"
              >
                <span>WhatsApp API Setup</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Complete School ERP Pricing Section - Bright Table */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-100 px-3 py-1 rounded-full border border-purple-300">
            Transparent, Student-Strength Based Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
            School ERP Pricing Packages
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            Choose online cloud SaaS or offline lifetime software. All prices are genuine, competitive, and include GST with free data onboarding.
          </p>
        </div>

        {/* Pricing Matrix Table */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg space-y-4">
          <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-slate-50 via-indigo-50/50 to-slate-50">
            <div>
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Online Cloud School ERP</span>
              <h3 className="text-lg font-bold text-slate-900">Setup & Annual Renewal Breakdown by Student Strength</h3>
            </div>
            <button
              onClick={() => handleWhatsAppBooking("Hello, I want to book a live demo and discuss School ERP pricing for my school.")}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center gap-2 shadow-sm transition-all self-start sm:self-auto"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Book Demo & Quote</span>
            </button>
          </div>

          <div className="overflow-x-auto px-4 pb-4">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                  <th className="p-4 pl-6">Student Strength</th>
                  <th className="p-4 text-center text-blue-800">
                    Startup Plan
                    <span className="block text-[10px] font-normal text-slate-500">Setup / Renewal</span>
                  </th>
                  <th className="p-4 text-center text-amber-800">
                    Basic Smart ERP
                    <span className="block text-[10px] font-normal text-slate-500">Setup / Renewal</span>
                  </th>
                  <th className="p-4 text-center text-purple-800">
                    PRO Operations
                    <span className="block text-[10px] font-normal text-slate-500">Setup / Renewal</span>
                  </th>
                  <th className="p-4 text-center text-rose-800 bg-rose-50 border-x border-rose-200">
                    Enterprise Flagship
                    <span className="block text-[10px] font-bold text-rose-700">Setup / Renewal</span>
                  </th>
                  <th className="p-4 text-center text-emerald-800 bg-emerald-50/50">
                    Offline One-Time
                    <span className="block text-[10px] font-normal text-slate-500">Lifetime License</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {STUDENT_STRENGTH_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 pl-6 font-bold text-slate-900 text-sm">
                      {row.range} Students
                    </td>
                    <td className="p-4 text-center">
                      <strong className="text-slate-900 text-sm">{row.startup.setup}</strong>
                      <span className="block text-[10px] text-slate-500">Renewal {row.startup.renewal}</span>
                    </td>
                    <td className="p-4 text-center">
                      <strong className="text-slate-900 text-sm">{row.basic.setup}</strong>
                      <span className="block text-[10px] text-slate-500">Renewal {row.basic.renewal}</span>
                    </td>
                    <td className="p-4 text-center">
                      <strong className="text-slate-900 text-sm">{row.pro.setup}</strong>
                      <span className="block text-[10px] text-slate-500">Renewal {row.pro.renewal}</span>
                    </td>
                    <td className="p-4 text-center bg-rose-50/50 border-x border-rose-100">
                      <strong className="text-rose-700 text-sm font-bold">{row.enterprise.setup}</strong>
                      <span className="block text-[10px] text-rose-600 font-medium">Renewal {row.enterprise.renewal}</span>
                    </td>
                    <td className="p-4 text-center bg-emerald-50/30">
                      <strong className="text-emerald-700 text-sm font-bold">{row.offline}</strong>
                      <span className="block text-[10px] text-slate-500">1-Time Cost</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div>
              <strong className="text-slate-800">All prices inclusive of GST.</strong> Free data migration & setup assistance included in all tiers.
            </div>
            <button
              onClick={() => setIsPlanModalOpen(true)}
              className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold rounded-xl border border-indigo-200 flex items-center gap-1.5 transition-all"
            >
              <Layers className="w-3.5 h-3.5 text-indigo-600" />
              <span>View Full 31-Feature Checklist</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. Retail & Pharmacy Billing Software Section */}
      <section id="billing" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
              Retail, Shop & Healthcare Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Billing & Pharmacy Software Pricing
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              Super-fast counter billing software for shops, stationery stores, wholesalers, distributors, and pharmacy chemists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BILLING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 border flex flex-col justify-between ${
                  plan.popular
                    ? 'bg-gradient-to-b from-indigo-50/70 via-white to-purple-50/70 border-2 border-indigo-400 shadow-xl relative'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 right-6 bg-indigo-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-md">
                    Recommended for Business
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                  <div className="mt-3">
                    <span className="text-3xl font-black text-slate-900">{plan.price}</span>
                    <span className="text-xs text-slate-500 block mt-0.5">{plan.renewal}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">{plan.desc}</p>
                  
                  <div className="mt-6 pt-4 border-t border-slate-200 space-y-2.5">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsAppBooking(`Hello, I am interested in ${plan.name} Software. Please provide a demo.`)}
                  className="w-full mt-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Get Instant Quote on WhatsApp</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Interactive Role-Based Demo Sandboxes */}
      <section id="demo" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 bg-indigo-100 px-3 py-1 rounded-full border border-indigo-300">
            Instant Hands-On Testing
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Try Interactive Role Demos Right Now
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            Click any role to test live dashboard features with 1-click pre-filled sandbox credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* 1. Super Admin */}
          <div
            onClick={() => handleOpenDemo('admin')}
            className="group cursor-pointer bg-white hover:bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-indigo-400 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Crown className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Super Admin</h3>
              <p className="text-xs text-slate-500 mt-1">Full control over Multi-branch, fees, staff & CBSE compliance.</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
              <span>Launch Desk ↗</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* 2. Teacher */}
          <div
            onClick={() => handleOpenDemo('teacher')}
            className="group cursor-pointer bg-white hover:bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-indigo-400 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Teacher Desk</h3>
              <p className="text-xs text-slate-500 mt-1">Daily diary, lesson plan tracker, marks entry, timetable.</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-700">
              <span>Launch Desk ↗</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* 3. Accountant */}
          <div
            onClick={() => handleOpenDemo('accountant')}
            className="group cursor-pointer bg-white hover:bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-emerald-400 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Accounts & POS</h3>
              <p className="text-xs text-slate-500 mt-1">Instant fee receipts, sibling discounts, cash book & dues.</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>Launch Desk ↗</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* 4. Parent Portal */}
          <div
            onClick={() => handleOpenDemo('parent')}
            className="group cursor-pointer bg-white hover:bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-purple-400 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Parent Portal</h3>
              <p className="text-xs text-slate-500 mt-1">Live child attendance, fee receipts download, report cards.</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-700">
              <span>Launch Desk ↗</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* 5. Student Portal */}
          <div
            onClick={() => handleOpenDemo('student')}
            className="group cursor-pointer bg-white hover:bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-blue-400 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Student Portal</h3>
              <p className="text-xs text-slate-500 mt-1">Digital homework, online quizzes, issued library books & timetable.</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
              <span>Launch Desk ↗</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Core Architectural Pillars */}
      <section id="features" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-800 bg-pink-100 px-3 py-1 rounded-full border border-pink-300">
              Engineered For Modern Campuses
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
              6 Advanced Core Pillars
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              Everything your school needs to achieve 100% digital excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-lg transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Smart Fees & Sibling POS</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Auto-link siblings across classes for unified fee receipting. Generate multi-copy thermal/A4 vouchers with flexible fine rules and WhatsApp due alerts.
              </p>
              <ul className="text-xs text-slate-700 space-y-2 pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Sibling Auto-Discovery by Phone</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Multi-Branch POS Cash Registers</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Instant Due WhatsApp Reminders</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-lg transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Fingerprint className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Biometric & Automatic Bell</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hardware-ready Python station that connects directly to ZKTeco / Secureye biometric machines and rings MP3 period bells over school PA speakers.
              </p>
              <ul className="text-xs text-slate-700 space-y-2 pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-600" /> Real-time Fingerprint Staff Clocks</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-600" /> Custom Voice / MP3 Chimes per Period</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-600" /> Dedicated 1-Click PenDrive Runner</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-lg transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Lesson Planning & Daily Diary</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Track chapter completion progress across all subjects. Teachers submit daily classwork diaries with lab practicals and homework notes.
              </p>
              <ul className="text-xs text-slate-700 space-y-2 pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600" /> Syllabus Progress Bars (%)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600" /> Classwork & Homework Sync</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600" /> Examination Marks & Rank Gen</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-lg transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">House Master & Trophy Board</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Award points to Red, Blue, Green, and Yellow houses for academics, sports, discipline, and cultural events with live standings.
              </p>
              <ul className="text-xs text-slate-700 space-y-2 pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-600" /> 4 School Houses Points Tally</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-600" /> Cock House Trophy Rankings</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-600" /> House Master Audit History</li>
              </ul>
            </div>

            {/* Card 5 */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-lg transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">ID Cards, TC & Admit Cards</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bulk 1-click printable student ID cards, employee badges, examination admit cards with roll number slips, and official Transfer Certificates.
              </p>
              <ul className="text-xs text-slate-700 space-y-2 pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600" /> Bulk 8-up ID Card Sheet Printing</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600" /> Automated Serial Number TC</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600" /> Examination Hall Roll Slips</li>
              </ul>
            </div>

            {/* Card 6 */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-lg transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Front Office & Gate Pass</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete reception management: visitor book, student gate pass with photo, admission enquiry follow-ups, and call logs.
              </p>
              <ul className="text-xs text-slate-700 space-y-2 pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Visitor ID Badges & Passes</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Admission Enquiry Funnel</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Postal Dispatch / Receive Logs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ROI Cost Saving Calculator */}
      <section id="roi" className="py-20 bg-gradient-to-b from-slate-50 via-indigo-50/40 to-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                Data-Driven ROI
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                How Much Money & Time Will Your School Save?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Move the sliders to match your school's student strength:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-6">
                {/* Slider 1: Total Students */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>Total Enrolled Students:</span>
                    <span className="text-indigo-600 font-mono text-sm">{studentsCount} Students</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="2500"
                    step="25"
                    value={studentsCount}
                    onChange={(e) => setStudentsCount(Number(e.target.value))}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                </div>

                {/* Slider 2: Average Monthly Fee */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>Average Monthly Fee per Student:</span>
                    <span className="text-emerald-700 font-mono text-sm">₹{avgFee.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="8000"
                    step="100"
                    value={avgFee}
                    onChange={(e) => setAvgFee(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                </div>
              </div>

              {/* Live Savings Card */}
              <div className="bg-indigo-50/70 rounded-2xl p-6 border border-indigo-200 space-y-4">
                <div className="text-xs text-indigo-900 uppercase font-bold">Estimated Annual Recovery:</div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-700">
                  ₹{(estimatedLeakagePrevented + paperCostSaved).toLocaleString()}
                  <span className="text-xs text-slate-600 font-normal"> / year</span>
                </div>

                <div className="space-y-2 text-xs text-slate-700 pt-2 border-t border-indigo-200">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Fee Leakage Prevented:</span>
                    <span className="font-bold text-slate-900">₹{estimatedLeakagePrevented.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Paper & Printing Cost Saved:</span>
                    <span className="font-bold text-slate-900">₹{paperCostSaved.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Staff Time Saved:</span>
                    <span className="font-bold text-indigo-700">~650 Hours / yr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Direct Contact & WhatsApp Consultation Section */}
      <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
              Quick Quotation & Demo
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Connect With Solution Architects
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
              Share your requirements for School ERP, Server, Biometrics, Bell runner or Printing services. We respond immediately on WhatsApp!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
            
            {/* Contact Details Card */}
            <div className="space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-base text-slate-900 border-b border-slate-200 pb-3">
                PKR EDUTECH Global IT Services
              </h3>
              
              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Corporate Office:</strong>
                    <span>Tech Zone IT Hub, Agra - 282001 (UP)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Direct Helpline / WhatsApp:</strong>
                    <span>+91 82924 64812</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Email Support:</strong>
                    <span>services@pkredutech.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Support Hours:</strong>
                    <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => handleWhatsAppBooking()}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp Chat</span>
                </button>
              </div>
            </div>

            {/* Direct Requirement Form */}
            <form onSubmit={handleContactFormSubmit} className="lg:col-span-2 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="e.g. Principal Rajesh Kumar"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 focus:bg-white focus:border-indigo-600 rounded-xl text-xs text-slate-900 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Mobile / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 focus:bg-white focus:border-indigo-600 rounded-xl text-xs text-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Service Category *</label>
                  <select
                    value={contactForm.service}
                    onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 focus:bg-white focus:border-indigo-600 rounded-xl text-xs text-slate-900 focus:outline-none"
                  >
                    <option>School ERP - Basic / Pro / Enterprise</option>
                    <option>Offline One-Time School ERP</option>
                    <option>Starter / GST Business Billing Software</option>
                    <option>Pharmacy & Chemist ERP</option>
                    <option>IoT Biometric Attendance & Access Control</option>
                    <option>Automated MP3 School Bell Station</option>
                    <option>Dedicated Server / Cloud VPS & Database</option>
                    <option>PVC Student ID Cards & Printing</option>
                    <option>Campus Networking / Wi-Fi Setup</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Student Strength / Counter Size</label>
                  <select
                    value={contactForm.studentStrength}
                    onChange={(e) => setContactForm({ ...contactForm, studentStrength: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 focus:bg-white focus:border-indigo-600 rounded-xl text-xs text-slate-900 focus:outline-none"
                  >
                    <option>Up to 100 Students / Single Counter</option>
                    <option>101 - 300 Students</option>
                    <option>301 - 500 Students</option>
                    <option>501 - 700 Students</option>
                    <option>701 - 1000 Students</option>
                    <option>1001 - 1500 Students</option>
                    <option>1501 - 2000+ Students / Multi-Branch</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">City & State</label>
                <input
                  type="text"
                  value={contactForm.location}
                  onChange={(e) => setContactForm({ ...contactForm, location: e.target.value })}
                  placeholder="e.g. Gopalganj, Bihar / Agra, UP"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 focus:bg-white focus:border-indigo-600 rounded-xl text-xs text-slate-900 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Requirements & Additional Notes</label>
                <textarea
                  rows="3"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="Tell us about specific features, timeline, or devices needed..."
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 focus:bg-white focus:border-indigo-600 rounded-xl text-xs text-slate-900 focus:outline-none"
                ></textarea>
              </div>

              <div className="text-end pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 hover:from-emerald-700 hover:to-indigo-700 text-white font-bold rounded-xl text-xs shadow-md inline-flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Requirement on WhatsApp</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      </section>

      {/* 10. Corporate Footer */}
      <footer className="border-t border-slate-200 bg-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-sm font-black text-slate-900">
              PKR EDUTECH GLOBAL IT SERVICES
            </div>
            <p className="text-xs text-slate-500">
              Official Enterprise School ERP & Smart Campus Solutions Provider • ISO 9001:2015 Certified
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600">
            <button
              onClick={() => handleOpenDemo('admin')}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 transition-colors flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-indigo-600" />
              <span>Live Demo Sandbox</span>
            </button>

            <button
              onClick={() => handleWhatsAppBooking()}
              className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Support</span>
            </button>

            {/* Subtle, Secure Master Console Link for Founder / Admin */}
            <button
              onClick={handleOpenMasterConsole}
              className="px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-400 hover:text-slate-700 font-medium transition-colors flex items-center gap-1 text-[11px]"
              title="System Administrator & Founder Master Access"
            >
              <Lock className="w-3 h-3 text-slate-400" />
              <span>Master Admin Access</span>
            </button>
          </div>
        </div>
      </footer>

      {/* 4-Tier Plan Comparison Matrix Modal */}
      <PlanComparisonModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
      />

      {/* MODAL 2: Request On-Site Demo & Callback Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-md p-6 space-y-4 animate-in zoom-in-95">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Book Free Consultation & Demo</h3>
                <p className="text-xs text-slate-500">Our solution architect will provide full live software demonstration.</p>
              </div>
              <button onClick={() => setIsContactModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => handleWhatsAppBooking()}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                Chat with Solution Architect on WhatsApp
              </button>
              <button
                onClick={() => handleOpenDemo('admin')}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <Zap className="w-4 h-4" />
                Open Instant Live Browser Demo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: Master Admin Security PIN Gate Modal (Crisp Light Mode) */}
      {isMasterPinModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-md p-6 sm:p-8 space-y-5 animate-in zoom-in-95 relative overflow-hidden">
            {/* Header */}
            <div className="flex items-start justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                  <KeyRound className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    Master Admin Gate
                  </h3>
                  <p className="text-xs text-slate-500">PKR EduTech Multi-School Super Hub</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsMasterPinModalOpen(false);
                  setMasterPinError('');
                  setMasterPinInput('');
                }}
                className="p-1.5 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 text-xs text-amber-800 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Restricted Area: Enter Master Security PIN to manage schools, licensing & billing.</span>
            </div>

            {masterPinError && (
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-3 text-xs text-rose-700 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{masterPinError}</span>
              </div>
            )}

            {/* PIN Input Form */}
            <form onSubmit={handleVerifyMasterPin} className="space-y-4 relative z-10">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span>Master Security PIN / Password:</span>
                  <span className="text-[10px] text-slate-400 font-normal">PIN: 123456 / pkr2027</span>
                </label>
                <div className="relative">
                  <input
                    type={showMasterPin ? "text" : "password"}
                    value={masterPinInput}
                    onChange={(e) => {
                      setMasterPinInput(e.target.value);
                      setMasterPinError('');
                    }}
                    placeholder="Enter Master Security PIN..."
                    autoFocus
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 focus:bg-white focus:border-indigo-600 rounded-xl text-center text-lg font-mono tracking-widest text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-slate-400 placeholder:text-sm placeholder:tracking-normal"
                  />
                  <button
                    type="button"
                    onClick={() => setShowMasterPin(!showMasterPin)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-700"
                  >
                    {showMasterPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsMasterPinModalOpen(false);
                    setMasterPinError('');
                    setMasterPinInput('');
                  }}
                  className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Unlock Console</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
