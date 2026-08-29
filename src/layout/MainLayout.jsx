import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';
import { AIAssistantModal } from '../components/ai/AIAssistantModal';
import { QRScannerModal } from '../components/qr/QRScannerModal';

export const MainLayout = ({
  children,
  activeTab,
  setActiveTab,
  currentRole,
  setCurrentRole,
  onQuickAction,
  onSearchSelect,
  onViewWebsite
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentRole={currentRole}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        onOpenAI={() => setAiModalOpen(true)}
      />

      {/* Main Content Area */}
      <div className="lg:pl-72 flex flex-col min-h-screen">
        <TopNav
          currentRole={currentRole}
          setCurrentRole={setCurrentRole}
          onOpenSidebar={() => setSidebarOpen(true)}
          onOpenAI={() => setAiModalOpen(true)}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          onQuickAction={onQuickAction}
          onSearchSelect={onSearchSelect}
          onViewWebsite={onViewWebsite}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto animate-in fade-in duration-300">
          {children}
        </main>
      </div>

      {/* AI Assistant Modal */}
      <AIAssistantModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        currentRole={currentRole}
      />

      {/* QR Scanner Modal */}
      <QRScannerModal
        isOpen={qrModalOpen}
        onClose={() => setQrModalOpen(false)}
      />
    </div>
  );
};
