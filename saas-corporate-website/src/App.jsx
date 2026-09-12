import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Lock,
  Eye,
  EyeOff,
  X,
  KeyRound,
  ShieldCheck,
  Crown,
  ArrowRight
} from 'lucide-react';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { SchoolErpPage } from './pages/services/SchoolErpPage';
import { CloudServerPage } from './pages/services/CloudServerPage';
import { BiometricsPage } from './pages/services/BiometricsPage';
import { SchoolBellPage } from './pages/services/SchoolBellPage';
import { IdCardsPage } from './pages/services/IdCardsPage';
import { WhatsAppApiPage } from './pages/services/WhatsAppApiPage';
import { RetailBillingPage } from './pages/services/RetailBillingPage';
import { CampusCctvPage } from './pages/services/CampusCctvPage';
import { PricingPage } from './pages/PricingPage';
import { ModulesDirectoryPage } from './pages/ModulesDirectoryPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactPage } from './pages/ContactPage';
import { MasterSaaSHubPage } from './pages/MasterSaaSHubPage';
import { PharmacyChemistBillingApp } from './pages/apps/PharmacyChemistBillingApp';
import { RetailSupermarketPOSApp } from './pages/apps/RetailSupermarketPOSApp';
import { StandaloneIdCardStudio } from './pages/apps/StandaloneIdCardStudio';
import { PlanComparisonModal } from './components/saas/PlanComparisonModal';
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

  // Authentication State for Master SaaS Console (PIN: 123456 / pkr2027)
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

  // Plan Comparison Modal State
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);

  // Router Page State
  const getInitialPage = () => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash) {
        if (hash === 'master' || hash === 'console' || hash === 'admin-saas') {
          return sessionStorage.getItem('PKR_MASTER_AUTH') === 'true' ? 'master-console' : 'home';
        }
        return hash;
      }
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);

  // Listen to browser forward/back buttons
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '').toLowerCase();
      if (!rawHash || rawHash === 'home') {
        setCurrentPage('home');
      } else if (rawHash === 'master' || rawHash === 'console' || rawHash === 'admin-saas') {
        const isAuth = sessionStorage.getItem('PKR_MASTER_AUTH') === 'true';
        if (isAuth) {
          setCurrentPage('master-console');
        } else {
          setCurrentPage('home');
          setMasterPinInput('');
          setMasterPinError('');
          setIsMasterPinModalOpen(true);
        }
      } else {
        setCurrentPage(rawHash);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleHashChange);
    return () => window.removeEventListener('popstate', handleHashChange);
  }, []);

  const navigateTo = (pageId) => {
    if (pageId === 'master-console') {
      if (isMasterAuthenticated) {
        setCurrentPage('master-console');
        window.history.pushState(null, '', '#master');
      } else {
        setMasterPinInput('');
        setMasterPinError('');
        setIsMasterPinModalOpen(true);
      }
    } else {
      setCurrentPage(pageId);
      window.history.pushState(null, '', pageId === 'home' ? ' ' : `#${pageId}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      setCurrentPage('master-console');
      window.history.pushState(null, '', '#master');
      showToast('🔓 Master Admin Access Granted! Welcome to Multi-School Console.', 'success');
    } else {
      setMasterPinError('Access Denied: Incorrect Master Security PIN.');
      showToast('❌ Incorrect Security PIN!', 'error');
    }
  };

  const handleLockMasterConsole = () => {
    setIsMasterAuthenticated(false);
    sessionStorage.removeItem('PKR_MASTER_AUTH');
    navigateTo('home');
    showToast('🔒 Master Console Locked & Logged Out.', 'info');
  };

  const demoPortalUrl = 'https://dadheech.vercel.app';

  const handleLaunchDemo = (role = 'admin') => {
    showToast(`Launching ${role.toUpperCase()} interactive live environment...`, 'info');
    window.open(`${demoPortalUrl}/#login`, '_blank');
  };

  const handleOpenContactModal = () => {
    navigateTo('contact');
  };

  // RENDER MASTER MULTI-SCHOOL SAAS CONSOLE
  if (currentPage === 'master-console' && isMasterAuthenticated) {
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
                onClick={() => navigateTo('home')}
                className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 shadow-sm flex items-center gap-2 transition-all"
              >
                <ArrowRight className="w-3.5 h-3.5 rotate-180 text-indigo-600" />
                <span>Public Corporate Site</span>
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
            onReturnToSchool={() => navigateTo('home')}
            onSwitchTenant={(tenant) => {
              window.open(`${demoPortalUrl}/?tenant=${tenant.slug}#login`, '_blank');
            }}
          />
        </div>
      </div>
    );
  }

  // RENDER DEDICATED WEBPAGE ACCORDING TO CURRENT ROUTE
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={navigateTo}
            onLaunchDemo={handleLaunchDemo}
            onOpenContactModal={handleOpenContactModal}
            onOpenPricingModal={() => setIsPlanModalOpen(true)}
          />
        );
      case 'services/school-erp':
        return (
          <SchoolErpPage
            onNavigate={navigateTo}
            onLaunchDemo={handleLaunchDemo}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'services/cloud-server':
        return (
          <CloudServerPage
            onNavigate={navigateTo}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'services/biometrics':
        return (
          <BiometricsPage
            onNavigate={navigateTo}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'services/school-bell':
        return (
          <SchoolBellPage
            onNavigate={navigateTo}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'services/id-cards':
        return (
          <IdCardsPage
            onNavigate={navigateTo}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'services/whatsapp-api':
        return (
          <WhatsAppApiPage
            onNavigate={navigateTo}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'services/retail-billing':
        return (
          <RetailBillingPage
            onNavigate={navigateTo}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'services/campus-cctv':
        return (
          <CampusCctvPage
            onNavigate={navigateTo}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'pricing':
        return (
          <PricingPage
            onNavigate={navigateTo}
            onLaunchDemo={handleLaunchDemo}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'modules':
        return (
          <ModulesDirectoryPage
            onNavigate={navigateTo}
            onLaunchDemo={handleLaunchDemo}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'about':
        return (
          <AboutUsPage
            onNavigate={navigateTo}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onNavigate={navigateTo}
          />
        );
      case 'apps/pharmacy-pos':
      case 'pharmacy':
        return (
          <PharmacyChemistBillingApp
            onNavigate={navigateTo}
          />
        );
      case 'apps/retail-pos':
      case 'retail-pos':
        return (
          <RetailSupermarketPOSApp
            onNavigate={navigateTo}
          />
        );
      case 'apps/id-card-studio':
      case 'id-card-studio':
        return (
          <StandaloneIdCardStudio
            onNavigate={navigateTo}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={navigateTo}
            onLaunchDemo={handleLaunchDemo}
            onOpenContactModal={handleOpenContactModal}
            onOpenPricingModal={() => setIsPlanModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-600 selection:text-white flex flex-col justify-between">
      
      <div>
        {/* Global Navigation Bar */}
        <Navbar
          currentPage={currentPage}
          onNavigate={navigateTo}
          onOpenMasterPinModal={() => {
            setMasterPinInput('');
            setMasterPinError('');
            setIsMasterPinModalOpen(true);
          }}
          onLaunchDemo={handleLaunchDemo}
          onOpenContactModal={handleOpenContactModal}
        />

        {/* Dynamic Page Content */}
        <main className="py-6">
          {renderCurrentPage()}
        </main>
      </div>

      {/* Global Multi-Column Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenContactModal={handleOpenContactModal}
      />

      {/* Plan Comparison Modal */}
      <PlanComparisonModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
        onSelectPlan={(plan) => {
          setIsPlanModalOpen(false);
          const text = encodeURIComponent(`Hello, I want to book ${plan.name} (${plan.price}).`);
          window.open(`https://wa.me/918292464812?text=${text}`, '_blank');
        }}
      />

      {/* Security PIN Gate Modal (For Master Multi-School Console) */}
      {isMasterPinModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-slate-200 shadow-2xl space-y-6 relative">
            <button
              onClick={() => setIsMasterPinModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Master SaaS Console</h3>
                <p className="text-xs text-slate-500">Authorized Personnel Security Verification</p>
              </div>
            </div>

            <form onSubmit={handleVerifyMasterPin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Enter Master Admin Security PIN (e.g. 123456)
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type={showMasterPin ? 'text' : 'password'}
                    autoFocus
                    placeholder="Enter Security PIN..."
                    value={masterPinInput}
                    onChange={(e) => {
                      setMasterPinInput(e.target.value);
                      setMasterPinError('');
                    }}
                    className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-mono tracking-widest text-slate-900 focus:outline-none focus:border-indigo-600"
                  />
                  <button
                    type="button"
                    onClick={() => setShowMasterPin(!showMasterPin)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showMasterPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {masterPinError && (
                  <p className="text-xs text-rose-600 font-medium mt-1.5 flex items-center gap-1">
                    <span>⚠️ {masterPinError}</span>
                  </p>
                )}
              </div>

              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 space-y-1">
                <strong>Master Admin Credentials Hint:</strong>
                <div>PIN: <code className="bg-amber-100 px-1.5 py-0.5 rounded font-bold font-mono">123456</code> or <code className="bg-amber-100 px-1.5 py-0.5 rounded font-bold font-mono">pkr2027</code></div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsMasterPinModalOpen(false)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Unlock Master Hub</span>
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
