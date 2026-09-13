import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  ChevronDown,
  Server,
  Laptop,
  Fingerprint,
  Bell,
  CreditCard,
  MessageSquare,
  ShieldCheck,
  Printer,
  Zap,
  Phone,
  Crown,
  Menu,
  X,
  Layers,
  FileSpreadsheet,
  Building2,
  Info,
  Mail
} from 'lucide-react';

export const SERVICES_LIST = [
  {
    id: 'school-erp',
    title: 'School ERP & Cloud Software',
    desc: '210+ modules, fee engine, CBSE report cards & parent app',
    icon: Laptop,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-100',
    badge: 'Popular'
  },
  {
    id: 'cloud-server',
    title: 'Dedicated Cloud VPS & Databases',
    desc: 'High-speed NVMe hosting, SSL, daily cloud backups & 99.99% SLA',
    icon: Server,
    iconColor: 'text-pink-600',
    iconBg: 'bg-pink-100',
    badge: 'Enterprise'
  },
  {
    id: 'biometrics',
    title: 'Biometric Attendance Systems',
    desc: 'Secureye/Essl machines with real-time WhatsApp parent alerts',
    icon: Fingerprint,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-100',
    badge: 'Hardware'
  },
  {
    id: 'school-bell',
    title: 'Automatic MP3 School Bell',
    desc: 'Audio bell scheduling software, period chimes & prayer songs',
    icon: Bell,
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-100',
    badge: 'Software'
  },
  {
    id: 'id-cards',
    title: 'PVC Smart ID Cards & Stationery',
    desc: 'QR/Barcode cards, woven lanyards & marksheet booklet printing',
    icon: CreditCard,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    badge: 'Printing'
  },
  {
    id: 'whatsapp-api',
    title: 'WhatsApp Official Cloud API',
    desc: 'Automated fee reminders, marksheet delivery & broadcasts',
    icon: MessageSquare,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-100',
    badge: 'Cloud API'
  },
  {
    id: 'retail-billing',
    title: 'Retail & Pharmacy POS Billing',
    desc: 'Supermarket POS, medicine expiry tracking & GST invoices',
    icon: Printer,
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100',
    badge: 'POS Software'
  },
  {
    id: 'campus-cctv',
    title: 'Smart Campus CCTV & Networking',
    desc: 'Campus mesh Wi-Fi, CCTV security surveillance, smart boards & AMC',
    icon: ShieldCheck,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    badge: 'Infrastructure'
  }
];

export const Navbar = ({
  currentPage = 'home',
  onNavigate,
  onOpenMasterPinModal,
  onLaunchDemo,
  onOpenContactModal
}) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (pageId) => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    onNavigate(pageId);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-600/20 ring-1 ring-black/5 group-hover:scale-105 transition-transform">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tight text-slate-900 font-sans">
                PKR<span className="text-indigo-600"> ENTERPRISES</span>
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                GOVT. MSME: UDYAM-UP-02-0128276
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-medium">
              Enterprise Software • Cloud Server • Biometrics • Smart Campus OS
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-700">
          
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors py-2 px-1 ${
              currentPage === 'home' ? 'text-indigo-600 font-bold border-b-2 border-indigo-600' : 'hover:text-indigo-600'
            }`}
          >
            Home
          </button>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={`flex items-center gap-1.5 py-2 px-1 transition-colors ${
                currentPage.startsWith('services/') || isServicesOpen
                  ? 'text-indigo-600 font-bold'
                  : 'hover:text-indigo-600'
              }`}
            >
              <span>Services & Products</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-[540px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 grid grid-cols-2 gap-2 animate-in fade-in zoom-in-95 duration-150">
                {SERVICES_LIST.map((srv) => {
                  const Icon = srv.icon;
                  const isCurrent = currentPage === `services/${srv.id}`;
                  return (
                    <button
                      key={srv.id}
                      onClick={() => handleNavClick(`services/${srv.id}`)}
                      className={`p-3 rounded-xl text-left flex items-start gap-3 transition-all ${
                        isCurrent
                          ? 'bg-indigo-50 border border-indigo-200'
                          : 'hover:bg-slate-50 border border-transparent'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-lg ${srv.iconBg} ${srv.iconColor} flex items-center justify-center shrink-0 mt-0.5`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-slate-900 truncate">{srv.title}</h4>
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 border border-slate-200">
                            {srv.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-snug">
                          {srv.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}

                <div className="col-span-2 pt-2 mt-1 border-t border-slate-100 flex items-center justify-between px-2 text-[11px]">
                  <span className="text-slate-500 font-medium">Need full customization or hardware bundle?</span>
                  <button
                    onClick={() => {
                      setIsServicesOpen(false);
                      onOpenContactModal();
                    }}
                    className="font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  >
                    <span>Request Custom Quote</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('pricing')}
            className={`transition-colors py-2 px-1 ${
              currentPage === 'pricing' ? 'text-indigo-600 font-bold border-b-2 border-indigo-600' : 'hover:text-indigo-600'
            }`}
          >
            Full Pricing Matrix
          </button>

          <button
            onClick={() => handleNavClick('modules')}
            className={`transition-colors py-2 px-1 ${
              currentPage === 'modules' ? 'text-indigo-600 font-bold border-b-2 border-indigo-600' : 'hover:text-indigo-600'
            }`}
          >
            210+ ERP Modules
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`transition-colors py-2 px-1 ${
              currentPage === 'about' ? 'text-indigo-600 font-bold border-b-2 border-indigo-600' : 'hover:text-indigo-600'
            }`}
          >
            About Us
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`transition-colors py-2 px-1 ${
              currentPage === 'contact' ? 'text-indigo-600 font-bold border-b-2 border-indigo-600' : 'hover:text-indigo-600'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenMasterPinModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-all"
            title="Access PKR Multi-School Tenant Console (PIN: 123456)"
          >
            <Crown className="w-3.5 h-3.5 text-amber-500" />
            <span>Master Hub</span>
          </button>

          <button
            onClick={() => onLaunchDemo('admin')}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md shadow-indigo-600/20 transition-all transform active:scale-95"
          >
            <Zap className="w-3.5 h-3.5 text-amber-300" />
            <span>Live Demo ↗</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-6 space-y-4 shadow-xl">
          <div className="grid grid-cols-1 gap-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`p-2.5 rounded-xl text-left text-sm font-bold ${
                currentPage === 'home' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              🏠 Home Page
            </button>

            <div className="p-2 border-y border-slate-100 my-1">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Services & Products</div>
              <div className="grid grid-cols-1 gap-1">
                {SERVICES_LIST.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => handleNavClick(`services/${srv.id}`)}
                    className="p-2 rounded-lg text-left text-xs font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 flex items-center justify-between"
                  >
                    <span>{srv.title}</span>
                    <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">{srv.badge}</span>
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
  );
};

export default Navbar;
