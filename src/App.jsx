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
import { HelpdeskVisitorsPage } from './pages/HelpdeskVisitorsPage';
import { ReportsPage } from './pages/ReportsPage';
import { SettingsPage } from './pages/SettingsPage';
import { StudentAdmissionPage } from './pages/StudentAdmissionPage';
import { BiometricPage } from './pages/BiometricPage';

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

  const [activeTab, setActiveTabState] = React.useState(getInitialTab);
  const [currentRole, setCurrentRole] = useState(authRole || 'Super Admin');
  const [selectedStudentForProfile, setSelectedStudentForProfile] = useState(null);
  const [isViewingWebsite, setIsViewingWebsite] = useState(!isAuthenticated);

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
        return (
          <StudentAdmissionPage
            onAdmissionComplete={(newSt) => {
              setSelectedStudentForProfile(newSt);
              setActiveTab('students');
            }}
            onCancel={() => setActiveTab('students')}
          />
        );
      case 'students':
        return <StudentsPage initialSelectedStudent={selectedStudentForProfile} onOpenNewAdmission={() => setActiveTab('admission')} />;
      case 'staff':
        return <StaffPage />;
      case 'academics':
        return <AcademicsPage />;
      case 'timetable':
        return <TimetablePage />;
      case 'attendance':
        return <AttendancePage initialType="student" />;
      case 'staff-attendance':
        return <AttendancePage initialType="staff" />;
      case 'biometric':
        return <BiometricPage onNavigateToStaffAttendance={() => setActiveTab('staff-attendance')} />;
      case 'fees':
      case 'fees-offline':
      case 'fees-siblings':
      case 'fees-sibling-list':
      case 'fees-types':
      case 'fees-groups':
      case 'fees-fine':
      case 'fees-allocation':
      case 'fees-pos':
      case 'fees-dues':
        return <FeesPage initialTab={activeTab} />;
      case 'examination':
        return <ExaminationPage />;
      case 'notices':
        return <NoticeCommunicationPage />;
      case 'parent-portal':
        return <ParentPortalPage onOpenAI={() => setIsAiModalOpen(true)} />;
      case 'student-portal':
        return <StudentPortalPage onOpenAI={() => setIsAiModalOpen(true)} />;
      case 'homework':
        return <HomeworkPage />;
      case 'library':
        return <LibraryPage />;
      case 'transport':
      case 'transport-routes':
      case 'transport-vehicles':
      case 'transport-stoppage':
      case 'transport-assign':
      case 'transport-allocation':
        return <TransportPage />;
      case 'hostel':
        return <HostelPage />;
      case 'medical':
        return <MedicalPage />;
      case 'sports':
        return <SportsEventsPage />;
      case 'calendar':
        return <CalendarPage />;
      case 'leave':
        return <LeaveManagementPage />;
      case 'card-management':
      case 'card-id-template':
      case 'card-student-id':
      case 'card-employee-id':
      case 'card-admit-template':
      case 'card-generate-admit':
      case 'admit-cards':
        return <CertificatesIdPage initialSection="student_cards" />;
      case 'certificates':
      case 'cert-template':
      case 'cert-generate-student':
      case 'cert-generate-employee':
        return <CertificatesIdPage initialSection="certificates" />;
      case 'payroll':
        return <HRPayrollPage />;
      case 'inventory':
      case 'office-account':
      case 'office-deposit':
      case 'office-expense':
      case 'office-transactions':
      case 'office-voucher':
        return <AccountsInventoryPage />;
      case 'helpdesk-visitors':
        return <HelpdeskVisitorsPage />;
      case 'reports':
        return <ReportsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage currentRole={currentRole} setActiveTab={setActiveTab} onOpenAI={() => setIsAiModalOpen(true)} />;
    }
  };

  return (
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
