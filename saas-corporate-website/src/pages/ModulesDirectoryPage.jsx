import React, { useState } from 'react';
import {
  Layers,
  Search,
  CheckCircle2,
  BookOpen,
  Users,
  CreditCard,
  FileSpreadsheet,
  Bus,
  Award,
  Bell,
  ShieldCheck,
  Server,
  Zap,
  Phone,
  ArrowRight
} from 'lucide-react';
import { Breadcrumb } from '../components/layout/Breadcrumb';

const MODULES_CATEGORIES = [
  {
    id: 'academics',
    name: 'Academics & Classroom',
    count: 38,
    icon: BookOpen,
    color: 'text-indigo-600',
    bg: 'bg-indigo-100',
    modules: [
      'Class & Section Configuration',
      'Subject & Syllabus Tracking',
      'Daily Teacher Lesson Planner',
      'Homework & Assignment Dispatch',
      'Study Material & Video Uploads',
      'Timetable Automatic Generator',
      'Substitute Teacher Allocation',
      'Class Teacher Dashboard',
      'Digital Diary & Student Notes',
      'Online Quiz & Objective Test Engine',
      'Academic Calendar & Holidays',
      'Student Promotion Engine (1-Click)'
    ]
  },
  {
    id: 'fees',
    name: 'Finance, Fees & Accounts',
    count: 32,
    icon: CreditCard,
    color: 'text-emerald-600',
    bg: 'bg-emerald-100',
    modules: [
      'Custom Fee Head & Category Builder',
      'Installment & Concession Rules',
      'Late Fine Automation System',
      'Multi-Mode Fee Collection (Cash/UPI/Cheque)',
      '1-Click WhatsApp PDF Fee Receipts',
      'Defaulter Student List & Dues SMS/WhatsApp',
      'Online Payment Gateway (Razorpay/Easebuzz)',
      'Daily Cash Counter Closure Report',
      'Expense Voucher & Vendor Payments',
      'GST Invoicing & Ledger Bookkeeping',
      'Bank Reconciliation & Cheque Tracking',
      'Fee Refund & Security Deposit Management'
    ]
  },
  {
    id: 'exams',
    name: 'Exams & CBSE Marksheets',
    count: 28,
    icon: Award,
    color: 'text-purple-600',
    bg: 'bg-purple-100',
    modules: [
      'CBSE CCE 8-Term Grading System',
      'Admit Card Generation with Photos',
      'Marksheet Booklet Designer (Art Paper Format)',
      'Teacher Marks Entry Portal & Lock',
      'Grace Marks & Moderation Rules',
      'Class Rank, Percentage & Percentile',
      'Co-Scholastic & Discipline Grading',
      'Principal Remarks & Signature Printing',
      'WhatsApp Digital Marksheet PDF Delivery',
      'Previous Year Marksheet Archive'
    ]
  },
  {
    id: 'students',
    name: 'Student Admission & Records',
    count: 26,
    icon: Users,
    color: 'text-amber-600',
    bg: 'bg-amber-100',
    modules: [
      'Online Enquiry & Admission Registration',
      'Student 360-Degree Comprehensive Profile',
      'Transfer Certificate (TC) 1-Click Generator',
      'Character & Bonafide Certificate Designer',
      'Sibling Mapping & Discount Linkage',
      'Student Document Digital Vault (Aadhaar/Birth Cert)',
      'Health & Medical Record Tracking',
      'Discipline & Warning Incident Log',
      'House & Club Activity Records',
      'Alumni Database & Tracking'
    ]
  },
  {
    id: 'transport',
    name: 'Transport, GPS & Hostel',
    count: 22,
    icon: Bus,
    color: 'text-blue-600',
    bg: 'bg-blue-100',
    modules: [
      'Bus Route & Pickup Stop Builder',
      'Monthly Transport Fee Integration',
      'Vehicle GPS Real-Time Speed Tracking',
      'Driver & Conductor Police Verification Log',
      'Fuel Consumption & Vehicle Service Log',
      'Hostel Room & Bed Allocation Matrix',
      'Mess Menu & Daily Meal Attendance',
      'Hostel Gate Pass & Night Curfew Register'
    ]
  },
  {
    id: 'staff',
    name: 'HR, Staff Payroll & Biometrics',
    count: 24,
    icon: ShieldCheck,
    color: 'text-rose-600',
    bg: 'bg-rose-100',
    modules: [
      'Biometric Device Punch Real-Time Sync',
      'Staff Monthly Attendance Register',
      'Leave Application & Multi-Level Approval',
      'Salary Structure (Basic + DA + HRA - PF/ESI)',
      '1-Click Automated Salary Slip Generation',
      'Teacher Performance & Appraisal Score',
      'ID Card & Appointment Letter Generator',
      'Staff Experience & Relieving Certificates'
    ]
  },
  {
    id: 'communication',
    name: 'WhatsApp & Communication',
    count: 20,
    icon: Bell,
    color: 'text-teal-600',
    bg: 'bg-teal-100',
    modules: [
      'WhatsApp Official Cloud Business API',
      'Automated Birthday & Festive Greetings',
      'Emergency School Closure Broadcast',
      'Parent Inquiry Bot & FAQ Responder',
      'SMS Gateway Multi-Route Fallback',
      'Email Circular & Newsletter Dispatch',
      'Parent Feedback & Grievance Redressal'
    ]
  },
  {
    id: 'system',
    name: 'Security, Multi-Branch & SaaS',
    count: 20,
    icon: Server,
    color: 'text-slate-600',
    bg: 'bg-slate-100',
    modules: [
      'Role-Based Granular Permission System (50+ Roles)',
      'Multi-Branch Consolidated Dashboard',
      'Audit Trail (Who modified what and when)',
      'Automated Daily Encrypted Cloud Backup',
      'Custom Subdomain (school.pkredutech.com)',
      'Excel Bulk Import & 1-Click Export',
      'REST API for Third-Party Mobile Apps'
    ]
  }
];

export const ModulesDirectoryPage = ({ onNavigate, onLaunchDemo, onOpenContactModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filteredCategories = MODULES_CATEGORIES.filter((cat) => {
    if (selectedCategory !== 'ALL' && cat.id !== selectedCategory) return false;
    return true;
  }).map((cat) => {
    if (!searchQuery.trim()) return cat;
    const matchingMods = cat.modules.filter((m) =>
      m.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, modules: matchingMods };
  }).filter((cat) => cat.modules.length > 0);

  const totalModulesCount = MODULES_CATEGORIES.reduce((acc, c) => acc + c.count, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: '210+ ERP Modules Directory' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-200 text-xs font-bold mx-auto">
          <Layers className="w-4 h-4 text-indigo-600" />
          <span>Complete ERP Functional Catalog ({totalModulesCount}+ Active Modules)</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Explore All <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">210+ ERP Capabilities</span>
        </h1>

        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Everything your institution requires from day one — completely integrated without extra hidden module fees.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto pt-4 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search any module (e.g. CBSE Marksheet, WhatsApp Fee, GPS, Biometric)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-300 rounded-2xl shadow-sm text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedCategory === 'ALL'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Categories ({totalModulesCount})
          </button>
          {MODULES_CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === c.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </section>

      {/* Modules Directory Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${category.bg} ${category.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{category.name}</h3>
                      <span className="text-xs text-slate-500">{category.count} Functional Sub-Modules</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-slate-100">
                  {category.modules.map((mod, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <button
                  onClick={() => onLaunchDemo('superadmin')}
                  className="font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                >
                  <span>Test in Live Sandbox</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenContactModal}
                  className="text-slate-500 hover:text-slate-800"
                >
                  Request Customization
                </button>
              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
};

export default ModulesDirectoryPage;
