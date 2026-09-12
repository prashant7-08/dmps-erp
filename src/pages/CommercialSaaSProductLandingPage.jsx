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

import { Navbar } from '../components/saas/layout/Navbar';
import { Footer } from '../components/saas/layout/Footer';
import { HomePage } from './saas/HomePage';
import { SchoolErpPage } from './saas/services/SchoolErpPage';
import { CloudServerPage } from './saas/services/CloudServerPage';
import { BiometricsPage } from './saas/services/BiometricsPage';
import { SchoolBellPage } from './saas/services/SchoolBellPage';
import { IdCardsPage } from './saas/services/IdCardsPage';
import { WhatsAppApiPage } from './saas/services/WhatsAppApiPage';
import { RetailBillingPage } from './saas/services/RetailBillingPage';
import { CampusCctvPage } from './saas/services/CampusCctvPage';
import { PricingPage } from './saas/PricingPage';
import { ModulesDirectoryPage } from './saas/ModulesDirectoryPage';
import { AboutUsPage } from './saas/AboutUsPage';
import { ContactPage } from './saas/ContactPage';
import { PharmacyChemistBillingApp } from './saas/apps/PharmacyChemistBillingApp';
import { RetailSupermarketPOSApp } from './saas/apps/RetailSupermarketPOSApp';
import { StandaloneIdCardStudio } from './saas/apps/StandaloneIdCardStudio';
import { PlanComparisonModal } from '../components/saas/PlanComparisonModal';
import { useToast } from '../components/common/Toast';

export const CommercialSaaSProductLandingPage = ({
  onLaunchDemo,
  onOpenMasterSaaS,
  onOpenSchoolPortal
}) => {
  const { showToast } = useToast();
  const [currentPage, setCurrentPage] = useState('home');
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);

  const navigateTo = (pageId) => {
    if (pageId === 'master-console') {
      if (onOpenMasterSaaS) onOpenMasterSaaS();
    } else {
      setCurrentPage(pageId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLaunchDemoClick = (role = 'superadmin') => {
    showToast(`Launching ${role.toUpperCase()} interactive live environment...`, 'info');
    if (onLaunchDemo) onLaunchDemo(role);
  };

  const handleOpenContactModal = () => {
    navigateTo('contact');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={navigateTo}
            onLaunchDemo={handleLaunchDemoClick}
            onOpenContactModal={handleOpenContactModal}
            onOpenPricingModal={() => setIsPlanModalOpen(true)}
          />
        );
      case 'services/school-erp':
        return (
          <SchoolErpPage
            onNavigate={navigateTo}
            onLaunchDemo={handleLaunchDemoClick}
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
            onLaunchDemo={handleLaunchDemoClick}
            onOpenContactModal={handleOpenContactModal}
          />
        );
      case 'modules':
        return (
          <ModulesDirectoryPage
            onNavigate={navigateTo}
            onLaunchDemo={handleLaunchDemoClick}
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
            onLaunchDemo={handleLaunchDemoClick}
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
            if (onOpenMasterSaaS) onOpenMasterSaaS();
          }}
          onLaunchDemo={handleLaunchDemoClick}
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

    </div>
  );
};

export default CommercialSaaSProductLandingPage;
