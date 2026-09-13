import React, { useState } from 'react';
import {
  GraduationCap,
  Sparkles,
  Layers,
  Phone,
  ArrowRight,
  ShieldCheck,
  Server,
  Fingerprint,
  Bell,
  CreditCard,
  Building2,
  Menu,
  X,
  ChevronDown,
  Lock,
  Zap,
  ShoppingBag,
  Camera,
  Contact2
} from 'lucide-react';

export const SERVICES_LIST = [
  {
    id: 'school-erp',
    title: 'School ERP Software',
    desc: '210+ Modules for CBSE/ICSE schools: Admissions, Fees, Marksheets, WhatsApp Alerts & Offline Desktop',
    icon: GraduationCap,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    badge: 'Popular',
    pricing: 'From ₹2,499 / yr'
  },
  {
    id: 'cloud-server',
    title: 'Dedicated Cloud VPS',
    desc: 'High-speed cloud servers with isolated MySQL database, free subdomain, and 99.99% uptime',
    icon: Server,
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-700',
    badge: 'Fast',
    pricing: '₹3,499 / yr'
  },
  {
    id: 'biometrics',
    title: 'Biometric Attendance Machines',
    desc: 'Fingerprint & AI Face Recognition IoT terminals with automatic school ERP cloud sync',
    icon: Fingerprint,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
    badge: 'IoT Hardware',
    pricing: '₹4,999 onwards'
  },
  {
    id: 'school-bell',
    title: 'Automatic MP3 School Bell',
    desc: 'Schedule prayer, class periods, and break gongs automatically through school sound amplifiers',
    icon: Bell,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    badge: 'Hardware Sync',
    pricing: '₹1,999 / yr'
  },
  {
    id: 'id-cards',
    title: 'PVC Smart ID Cards & Lanyards',
    desc: 'High-resolution thermo-transfer printing with QR code, barcodes, and custom branded satin ribbons',
    icon: Contact2,
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-700',
    badge: 'Printing Service',
    pricing: '₹22 / card'
  },
  {
    id: 'whatsapp-api',
    title: 'WhatsApp Official Cloud API',
    desc: 'Automated fee counterfoil receipts, student attendance alerts, and emergency circulars via Meta API',
    icon: Zap,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-700',
    badge: 'Meta Verified',
    pricing: '₹1,499 / yr'
  },
  {
    id: 'retail-billing',
    title: 'Retail & POS Software',
    desc: 'Supermarket POS, Pharmacy GST Billing, Garment Store inventory, and thermal receipt printing',
    icon: ShoppingBag,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-700',
    badge: 'POS Billing',
    pricing: 'From ₹3,999'
  },
  {
    id: 'campus-cctv',
    title: 'Campus CCTV & Networking',
    desc: 'High-definition IP cameras, central control room monitoring, long-range mesh Wi-Fi & annual AMC',
    icon: Camera,
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-700',
    badge: 'Infrastructure',
    pricing: 'Custom Quote'
  }
];

export const Navbar = ({
  currentPage,
  onNavigate,
  onOpenMasterPinModal,
  onOpenContactModal,
  onOpenPricingModal,
  onOpenSchoolPortal
}) => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId) => {
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false);
    onNavigate(pageId);
  };

  return (
    <>
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      
      {/* Top Notification Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-500 text-slate-950 font-black px-2 py-0.5 rounded text-[10px] uppercase">
              Official MSME
            </span>
            <span>UDYAM-UP-02-0128276 • Trusted Technology Partner for 100+ Schools</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="https://wa.me/919719476606?text=Namaste%20PKR%20Enterprises,%20I%20want%20to%20know%20more%20about%20your%20School%20ERP%20Software"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 font-semibold hover:underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3" /> WhatsApp: +91 9719476606
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">Support: 24x7 Direct Engineer Call</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Tagline */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white font-black text-base shadow-sm group-hover:scale-105 transition-transform">
              PKR
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black text-slate-900 tracking-tight">
                  PKR<span className="text-blue-700"> ENTERPRISES</span>
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                  IT SOLUTIONS
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-wide">
                School ERP • Biometrics • Cloud Infrastructure
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                currentPage === 'home'
                  ? 'bg-slate-100 text-blue-700'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              Home
            </button>

            {/* Products & Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                  currentPage.startsWith('services')
                    ? 'bg-slate-100 text-blue-700'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span>Products & Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180 text-blue-700' : ''}`} />
              </button>

              {/* 8 Pillar Mega Menu */}
              {isServicesDropdownOpen && (
                <div
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-[560px] bg-white rounded-2xl border border-slate-200 shadow-2xl p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="col-span-2 px-2 py-1 border-b border-slate-100 mb-1 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Our 8 Specialized Pillars</span>
                    <span className="text-[11px] font-bold text-blue-700 hover:underline cursor-pointer" onClick={() => handleNavClick('modules')}>
                      View 210+ ERP Modules →
                    </span>
                  </div>

                  {SERVICES_LIST.map((srv) => {
                    const Icon = srv.icon;
                    return (
                      <div
                        key={srv.id}
                        onClick={() => handleNavClick(`services/${srv.id}`)}
                        className="p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 cursor-pointer transition-all flex items-start gap-3 group"
                      >
                        <div className={`w-9 h-9 rounded-lg ${srv.iconBg} ${srv.iconColor} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-slate-900 truncate group-hover:text-blue-700">
                              {srv.title}
                            </h4>
                            <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                              {srv.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {srv.desc}
                          </p>
                          <span className="text-[10px] font-bold text-blue-700">
                            {srv.pricing}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Pricing Matrix */}
            <button
              onClick={() => handleNavClick('pricing')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                currentPage === 'pricing'
                  ? 'bg-slate-100 text-blue-700'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              Pricing Matrix
            </button>

            {/* 210+ Modules Directory */}
            <button
              onClick={() => handleNavClick('modules')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                currentPage === 'modules'
                  ? 'bg-slate-100 text-blue-700'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              210+ Modules
            </button>

            {/* About Us */}
            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                currentPage === 'about'
                  ? 'bg-slate-100 text-blue-700'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              About Us
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                currentPage === 'contact'
                  ? 'bg-slate-100 text-blue-700'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            
            {/* Master Console Access Button */}
            <button
              onClick={onOpenMasterPinModal}
              title="Master SuperAdmin Console (Protected by Master PIN)"
              className="px-3 py-2 rounded-xl text-xs font-bold bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 transition-all flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5 text-amber-700" />
              <span>Master SaaS Hub</span>
            </button>

            {/* Live Interactive School Login Portal */}
            <button
              onClick={onOpenSchoolPortal}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-sm transition-all flex items-center gap-1.5"
            >
              <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
              <span>School ERP Portal</span>
            </button>

            {/* WhatsApp Booking CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-700 hover:bg-blue-800 text-white shadow transition-all flex items-center gap-1.5"
            >
              <span>Book Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className="p-2.5 rounded-xl text-left text-sm font-bold text-slate-800 hover:bg-slate-50"
            >
              🏠 Home
            </button>

            <div className="p-2 bg-slate-50 rounded-xl space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Products & Solutions</span>
              <div className="grid grid-cols-1 gap-1">
                {SERVICES_LIST.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => handleNavClick(`services/${srv.id}`)}
                    className="p-2 rounded-lg text-left text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 flex items-center justify-between"
                  >
                    <span>{srv.title}</span>
                    <span className="text-[10px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded">{srv.badge}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavClick('pricing')}
              className="p-2.5 rounded-xl text-left text-sm font-bold text-slate-800 hover:bg-slate-50"
            >
              💰 Full Pricing Matrix
            </button>

            <button
              onClick={() => handleNavClick('modules')}
              className="p-2.5 rounded-xl text-left text-sm font-bold text-slate-800 hover:bg-slate-50"
            >
              📑 210+ ERP Modules Catalog
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className="p-2.5 rounded-xl text-left text-sm font-bold text-slate-800 hover:bg-slate-50"
            >
              🏢 About Us
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="p-2.5 rounded-xl text-left text-sm font-bold text-slate-800 hover:bg-slate-50"
            >
              📞 Contact & Demo Booking
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenMasterPinModal();
              }}
              className="p-2.5 rounded-xl text-left text-sm font-bold bg-amber-50 text-amber-900 border border-amber-200"
            >
              👑 Master SaaS Console (PIN Required)
            </button>
          </div>
        </div>
      )}
    </header>
    </>
  );
};
