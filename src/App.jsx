import React, { useState } from 'react';
import { MainLayout } from './layout/MainLayout';
import { ToastProvider } from './components/common/Toast';
import { AuthProvider, useAuth } from './context/AuthContext';

import { SchoolWebsitePage } from './pages/SchoolWebsitePage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { AdministrationPage } from './pages/AdministrationPage';
import { StudentsPage } from './pages/StudentsPage';
import { StaffPage } from './pages/StaffPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { TimetablePage } from './pages/TimetablePage';
import { AttendancePage } from './pages/AttendancePage';
import { FeesPage } from './pages/FeesPage';
import { ExaminationPage } from './pages/ExaminationPage';
import { NoticeCommunicationPage } from './pages/NoticeCommunicationPage';
import { ParentPortalPage } from './pages/ParentPortalPage';
import { StudentPortalPage } from './pages/StudentPortalPage';
import { HomeworkPage } from './pages/HomeworkPage';
import { LibraryPage } from './pages/LibraryPage';
import { TransportPage } from './pages/TransportPage';
import { HostelPage } from './pages/HostelPage';
import { MedicalPage } from './pages/MedicalPage';
import { SportsEventsPage } from './pages/SportsEventsPage';
import { CalendarPage } from './pages/CalendarPage';
import { LeaveManagementPage } from './pages/LeaveManagementPage';
import { CertificatesIdPage } from './pages/CertificatesIdPage';
import { HRPayrollPage } from './pages/HRPayrollPage';
import { AccountsInventoryPage } from './pages/AccountsInventoryPage';
import { InventoryStorePage } from './pages/InventoryStorePage';
import { HelpdeskVisitorsPage } from './pages/HelpdeskVisitorsPage';
import { ReportsPage } from './pages/ReportsPage';
import { CustomListPage } from './pages/CustomListPage';
import { SettingsPage } from './pages/SettingsPage';
import { StudentAdmissionPage } from './pages/StudentAdmissionPage';
import { BiometricPage } from './pages/BiometricPage';
import { AutomaticBellPage } from './pages/AutomaticBellPage';
import { FrontendCMSPage } from './pages/FrontendCMSPage';

function AppContent() {
  const { isAuthenticated, role: authRole } = useAuth();
  
  // Read initial tab from URL hash if present
  const getInitialTab = () => {
    const hash = window.location.hash.replace('#', '').trim();
    if (hash && hash !== 'website' && hash !== 'admissions' && hash !== 'login') {
      return hash;
    }
    return 'dashboard';
  };

  // Detect if opened in dedicated Mobile App / ERP direct mode
  const isDirectAppMode = () => {
    const hash = (window.location.hash || '').toLowerCase();
    const search = (window.location.search || '').toLowerCase();
    const path = (window.location.pathname || '').toLowerCase();
    const isStandalone = window.matchMedia && window.matchMedia('(display-mode: standalone)').matches;
    return isStandalone || hash === '#login' || hash === '#app' || path.endsWith('/app') || path.endsWith('/login') || search.includes('mode=app') || search.includes('app=true');
  };

  const [activeTab, setActiveTabState] = React.useState(getInitialTab);
  const [currentRole, setCurrentRole] = useState(authRole || 'Super Admin');
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [showOnlineToast, setShowOnlineToast] = useState(false);

  React.useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOnlineToast(true);
      setTimeout(() => setShowOnlineToast(false), 4000);
    };
    const handleOffline = () => {
      setIsOnline(false);
      setShowOnlineToast(false);
    };
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  const [selectedStudentForProfile, setSelectedStudentForProfile] = useState(null);
  const [isViewingWebsite, setIsViewingWebsite] = useState(() => {
    if (isDirectAppMode()) return false;
    return !isAuthenticated;
  });

  // Sync activeTab changes with browser history
  const setActiveTab = (tab, pushHistory = true) => {
    setActiveTabState(tab);
    if (pushHistory) {
      window.history.pushState({ tab }, '', `#${tab}`);
    }
  };

  // Browser Back/Forward navigation listener
  React.useEffect(() => {
    const handlePopState = (e) => {
      const hash = window.location.hash.replace('#', '').trim();
      if (hash && hash !== 'website' && hash !== 'admissions') {
        setActiveTabState(hash);
      } else {
        setActiveTabState('dashboard');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Auto-switch view when role is switched
  const handleRoleChange = (newRole) => {
    setCurrentRole(newRole);
    setIsViewingWebsite(false);
    if (newRole === 'Parent') {
      setActiveTab('parent-portal');
    } else if (newRole === 'Student') {
      setActiveTab('student-portal');
    } else if (newRole === 'Accountant') {
      setActiveTab('fees');
    } else if (newRole === 'Librarian') {
      setActiveTab('library');
    } else if (newRole === 'Transport Manager') {
      setActiveTab('transport');
    } else if (newRole === 'Teacher') {
      setActiveTab('timetable');
    } else {
      setActiveTab('dashboard');
    }
  };

  const handleQuickAction = (action) => {
    if (action === 'admit') setActiveTab('students');
    else if (action === 'collect-fee') setActiveTab('fees');
    else if (action === 'attendance') setActiveTab('attendance');
    else if (action === 'notice') setActiveTab('notices');
  };

  const handleSearchSelect = (type, item) => {
    if (type === 'student') {
      setSelectedStudentForProfile(item);
      setActiveTab('students');
    } else if (type === 'student-fee') {
      setSelectedStudentForProfile(item);
      setActiveTab('fees-collection');
    } else if (type === 'teacher') {
      setActiveTab('staff');
    }
  };

  // 1. If currently on Public Website mode, render official DMPS School Website
  if (isViewingWebsite) {
    return <SchoolWebsitePage onGoToLogin={() => setIsViewingWebsite(false)} />;
  }

  // 2. If not logged in, render the Secure Role-Based Login Portal
  if (!isAuthenticated) {
    return (
      <LoginPage
        onLoginSuccess={(u) => handleRoleChange(u.role || 'Super Admin')}
        onBackToWebsite={() => setIsViewingWebsite(true)}
      />
    );
  }

  const renderActivePage = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardPage currentRole={currentRole} setActiveTab={setActiveTab} onOpenAI={() => setIsAiModalOpen(true)} />;
      case 'administration':
        return <AdministrationPage />;
      case 'admission':
      case 'admission-create':
        return (
          <StudentAdmissionPage
            initialTab="create"
            onAdmissionComplete={(newSt) => {
              setSelectedStudentForProfile(newSt);
              setActiveTab('students');
            }}
            onCancel={() => setActiveTab('students')}
          />
        );
      case 'admission-online':
        return (
          <StudentAdmissionPage
            initialTab="online"
            onAdmissionComplete={(newSt) => {
              setSelectedStudentForProfile(newSt);
              setActiveTab('students');
            }}
            onCancel={() => setActiveTab('students')}
          />
        );
      case 'students-import':
      case 'admission-import':
        return (
          <StudentAdmissionPage
            initialTab="import"
            onAdmissionComplete={(newSt) => {
              setSelectedStudentForProfile(newSt);
              setActiveTab('students');
            }}
            onCancel={() => setActiveTab('students')}
          />
        );
      case 'students':
      case 'students-list':
      case 'students-inactive':
        return <StudentsPage initialTab={activeTab === 'students-inactive' ? 'inactive' : 'active'} initialSelectedStudent={selectedStudentForProfile} onOpenNewAdmission={() => setActiveTab('admission')} />;
      case 'staff':
      case 'staff-add':
      case 'staff-import':
      case 'employees':
      case 'employee-list':
      case 'employee-department':
      case 'employee-designation':
      case 'employee-add':
      case 'employee-deactivate':
        return <StaffPage initialSubTab={activeTab} onOpenIDCards={() => setActiveTab('card-employee-id')} />;
      case 'academics':
      case 'acad-classes':
      case 'acad-assign-teacher':
      case 'acad-subjects':
      case 'acad-class-assign':
      case 'acad-promotion':
        return <AcademicsPage initialTab={activeTab} />;
      case 'timetable':
      case 'acad-class-schedule':
      case 'acad-teacher-schedule':
        return <TimetablePage initialTab={activeTab} />;
      case 'attendance':
      case 'student-attendance':
        return <AttendancePage initialType="student" />;
      case 'staff-attendance':
      case 'employee-attendance':
        return <AttendancePage initialType="staff" />;
      case 'staff-monthly-matrix':
        return <AttendancePage initialType="staff-monthly-matrix" />;
      case 'exam-attendance':
        return <AttendancePage initialType="exam" />;
      case 'biometric':
        return <BiometricPage onNavigateToStaffAttendance={() => setActiveTab('staff-attendance')} />;
      case 'automatic-bell':
      case 'bell':
        return <AutomaticBellPage />;
      case 'fees':
      case 'fees-payment-types':
      case 'payment-types':
      case 'fees-offline':
      case 'fees-siblings':
      case 'fees-sibling-list':
      case 'fees-types':
      case 'fees-groups':
      case 'fees-fine':
      case 'fees-allocation':
      case 'fees-misc':
      case 'fees-pos':
      case 'fees-dues':
        return <FeesPage initialTab={activeTab} />;
      case 'examination':
      case 'exam-term':
      case 'exam-hall':
      case 'exam-trait':
      case 'exam-distribution':
      case 'exam-setup':
      case 'exam-schedule':
      case 'exam-schedule-add':
      case 'exam-marks':
      case 'exam-marks-attendance':
      case 'exam-marks-traits':
      case 'exam-marks-profile':
      case 'exam-generate-position':
      case 'exam-grades-range':
        return <ExaminationPage initialTab={activeTab} />;
      case 'notices':
      case 'bulk-sms':
      case 'sms-send':
      case 'sms-report':
      case 'sms-template':
      case 'email-template':
      case 'sms-birthday-student':
      case 'sms-birthday-staff':
      case 'message':
      case 'message-inbox':
      case 'message-compose':
      case 'message-sent':
      case 'message-trash':
        return <NoticeCommunicationPage initialTab={activeTab} />;
      case 'parent-portal':
        return <ParentPortalPage onOpenAI={() => setIsAiModalOpen(true)} />;
      case 'student-portal':
        return <StudentPortalPage onOpenAI={() => setIsAiModalOpen(true)} />;
      case 'homework':
      case 'hw-homework':
      case 'hw-evaluation':
        return <HomeworkPage initialTab={activeTab} />;
      case 'library':
      case 'lib-books':
      case 'lib-category':
      case 'lib-my-issued':
      case 'lib-issue-return':
        return <LibraryPage initialTab={activeTab} />;
      case 'transport':
      case 'transport-routes':
      case 'transport-vehicles':
      case 'transport-stoppage':
      case 'transport-assign':
      case 'transport-allocation':
        return <TransportPage initialSection={activeTab} />;
      case 'hostel':
      case 'hostel-master':
      case 'hostel-room':
      case 'hostel-category':
      case 'hostel-allocation':
        return <HostelPage initialSection={activeTab} />;
      case 'medical':
        return <MedicalPage />;
      case 'sports':
        return <SportsEventsPage />;
      case 'calendar':
        return <CalendarPage />;
      case 'leave':
      case 'hr-leave':
      case 'hr-leave-manage':
      case 'leave-manage':
        return <LeaveManagementPage />;
      case 'card-management':
      case 'card-id-template':
      case 'card-student-id':
      case 'card-employee-id':
      case 'card-admit-template':
      case 'card-generate-admit':
      case 'admit-cards':
      case 'certificates':
      case 'cert-template':
      case 'cert-generate-student':
      case 'cert-generate-employee':
        return <CertificatesIdPage initialSection={activeTab} />;
      case 'payroll':
      case 'human-resource':
      case 'hr-template':
      case 'hr-assign':
      case 'hr-payment':
      case 'hr-advance':
      case 'hr-advance-my':
      case 'hr-advance-manage':
      case 'hr-award':
        return <HRPayrollPage initialTab={activeTab} />;
      case 'office-account':
      case 'office-cash-book':
      case 'office-deposit':
      case 'office-expense':
      case 'office-transactions':
      case 'office-voucher':
        return <AccountsInventoryPage initialTab={activeTab} />;
      case 'inventory':
      case 'inventory-store':
      case 'inventory-product':
      case 'inventory-category':
      case 'inventory-supplier':
      case 'inventory-unit':
      case 'inventory-purchase':
      case 'inventory-sales':
      case 'inventory-issue':
        return <InventoryStorePage initialTab={activeTab} />;
      case 'helpdesk-visitors':
      case 'helpdesk-inquiries':
      case 'helpdesk-passes':
      case 'helpdesk-calls':
      case 'helpdesk-postal':
      case 'helpdesk-grievance':
      case 'admission-online':
        return <HelpdeskVisitorsPage initialTab={activeTab} />;
      case 'reports':
      case 'reports-student':
      case 'reports-students':
      case 'reports-fees':
      case 'reports-financial':
      case 'reports-attendance':
      case 'reports-hr':
      case 'reports-exam':
      case 'reports-inventory':
        return <ReportsPage initialTab={activeTab} />;
      case 'custom-list':
      case 'customlist':
      case 'custom-reports':
      case 'reports-custom-list':
      case 'students-custom-list':
        return <CustomListPage />;
      case 'frontend':
      case 'fe-setting':
      case 'fe-menu':
      case 'fe-page-section':
      case 'fe-manage-page':
      case 'fe-slider':
      case 'fe-features':
      case 'fe-testimonial':
      case 'fe-service':
      case 'fe-faq':
      case 'fe-gallery-category':
      case 'fe-gallery':
        return <FrontendCMSPage initialTab={activeTab} onOpenWebsite={() => setActiveTab('website')} />;
      case 'settings':
      case 'setting-global':
      case 'setting-school':
      case 'setting-role-permission':
      case 'role-permissions-single':
      case 'role-permission':
      case 'roles':
      case 'setting-session':
      case 'setting-translations':
      case 'setting-cron':
      case 'setting-modules':
      case 'setting-student-field':
      case 'setting-custom-field':
      case 'setting-backup':
        return <SettingsPage initialTab={activeTab} />;
      default:
        return <DashboardPage currentRole={currentRole} setActiveTab={setActiveTab} onOpenAI={() => setIsAiModalOpen(true)} />;
    }
  };

  return (
    <>
      {!isOnline && (
        <div className="fixed top-3 left-1/2 -translate-x-1/2 z-[99999] px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 text-xs font-black rounded-full shadow-2xl flex items-center gap-2 border border-amber-300 animate-pulse tracking-wide">
          <span>⚡</span>
          <span>No Internet Connection • Running in Offline Mode</span>
        </div>
      )}
      {showOnlineToast && (
        <div className="fixed top-3 left-1/2 -translate-x-1/2 z-[99999] px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold rounded-full shadow-2xl flex items-center gap-2 border border-emerald-300">
          <span>🟢</span>
          <span>Internet Connected • Cloud Synced</span>
        </div>
      )}
      <MainLayout
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentRole={currentRole}
        setCurrentRole={handleRoleChange}
        onQuickAction={handleQuickAction}
        onSearchSelect={handleSearchSelect}
        onViewWebsite={() => setIsViewingWebsite(true)}
      >
        {renderActivePage()}
      </MainLayout>
    </>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("App Render Error caught by Boundary:", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleForceReset = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch (e) {}
    window.location.hash = '';
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white p-6 font-sans">
          <div className="max-w-lg w-full bg-slate-900 p-8 rounded-3xl border border-slate-800 text-center space-y-5 shadow-2xl">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-3xl shadow-inner">
              ⚡
            </div>
            
            <div>
              <h2 className="text-2xl font-black text-white font-serif tracking-tight">Dadheech Memorial ERP</h2>
              <p className="text-xs text-slate-400 mt-1">
                Portal cache update. Click below to load the fresh database and open the portal.
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 rounded-2xl bg-rose-950/40 border border-rose-800/60 text-[11px] text-rose-300 font-mono text-left max-h-28 overflow-y-auto">
                <strong>Error:</strong> {this.state.error.message || String(this.state.error)}
              </div>
            )}

            <div className="space-y-2 pt-2">
              <button
                onClick={this.handleForceReset}
                className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-2xl text-xs shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
              >
                🔄 Reset Cache & Open Portal
              </button>

              <button
                onClick={() => {
                  window.location.hash = '';
                  window.location.reload();
                }}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-2xl text-xs transition-all"
              >
                Quick Refresh
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ToastProvider>
          <AppContent />
        </ToastProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
