import React, { useState } from 'react';
import {
  Check,
  Minus,
  Sparkles,
  ShieldCheck,
  Zap,
  Star,
  Award,
  Crown,
  Layers,
  X,
  Building2,
  Phone,
  ArrowRight,
  HelpCircle,
  Laptop,
  Receipt,
  Server,
  Fingerprint,
  Bell,
  HardDrive
} from 'lucide-react';

export const STUDENT_STRENGTH_MATRIX = [
  {
    range: 'Up to 100',
    startup: { setup: '₹ 2,499', renewal: '₹ 1,199' },
    basic: { setup: '₹ 3,999', renewal: '₹ 1,999' },
    pro: { setup: '₹ 5,499', renewal: '₹ 2,999' },
    enterprise: { setup: '₹ 6,999', renewal: '₹ 3,799' },
    offline: '₹ 3,499'
  },
  {
    range: '101 - 300',
    startup: { setup: '₹ 2,999', renewal: '₹ 1,599' },
    basic: { setup: '₹ 4,299', renewal: '₹ 2,799' },
    pro: { setup: '₹ 6,499', renewal: '₹ 3,899' },
    enterprise: { setup: '₹ 7,999', renewal: '₹ 4,999' },
    offline: '₹ 4,999'
  },
  {
    range: '301 - 500',
    startup: { setup: '₹ 3,799', renewal: '₹ 1,999' },
    basic: { setup: '₹ 5,499', renewal: '₹ 3,799' },
    pro: { setup: '₹ 7,299', renewal: '₹ 4,299' },
    enterprise: { setup: '₹ 9,899', renewal: '₹ 5,499' },
    offline: '₹ 6,499'
  },
  {
    range: '501 - 700',
    startup: { setup: '₹ 4,999', renewal: '₹ 2,799' },
    basic: { setup: '₹ 6,499', renewal: '₹ 4,499' },
    pro: { setup: '₹ 8,499', renewal: '₹ 4,999' },
    enterprise: { setup: '₹ 11,499', renewal: '₹ 6,299' },
    offline: '₹ 7,999'
  },
  {
    range: '701 - 1000',
    startup: { setup: '₹ 5,499', renewal: '₹ 3,199' },
    basic: { setup: '₹ 7,299', renewal: '₹ 4,499' },
    pro: { setup: '₹ 9,499', renewal: '₹ 4,999' },
    enterprise: { setup: '₹ 12,499', renewal: '₹ 6,999' },
    offline: '₹ 11,999'
  },
  {
    range: '1001 - 1500',
    startup: { setup: '₹ 5,499', renewal: '₹ 3,199' },
    basic: { setup: '₹ 7,899', renewal: '₹ 5,499' },
    pro: { setup: '₹ 10,499', renewal: '₹ 6,199' },
    enterprise: { setup: '₹ 13,499', renewal: '₹ 7,899' },
    offline: '₹ 16,999'
  },
  {
    range: '1501 - 2000+',
    startup: { setup: '₹ 6,499', renewal: '₹ 3,699' },
    basic: { setup: '₹ 8,999', renewal: '₹ 5,599' },
    pro: { setup: '₹ 11,999', renewal: '₹ 6,999' },
    enterprise: { setup: '₹ 16,999', renewal: '₹ 9,999' },
    offline: '₹ 21,999'
  }
];

export const BILLING_PLANS = [
  {
    id: 'starter_billing',
    name: 'Starter Counter Billing',
    price: '₹ 3,999',
    renewal: '₹ 999 / yr renewal',
    desc: 'Perfect for retail shops, counters, service centers & stationery stores.',
    features: [
      'Super-fast Sales Billing & Thermal 2"/3" Print',
      'Item / Product Catalog & Stock Alerts',
      'Customer Due / Khata Ledger',
      'Daily & Monthly Sales Cashbook',
      'Barcode Scanner & Cash Drawer Support',
      'Automatic Local Database Backup'
    ]
  },
  {
    id: 'gst_billing',
    name: 'GST Business Enterprise Billing',
    price: '₹ 6,499',
    renewal: '₹ 1,799 / yr renewal',
    popular: true,
    desc: 'Comprehensive GST invoicing for wholesalers, distributors, agencies & multi-counter shops.',
    features: [
      'All Starter Billing Features Included',
      'GSTR-1, GSTR-3B & HSN Tax Reports',
      'Party & Supplier Ledger with Outstanding',
      'Daily Expense & Profit/Loss Tracking',
      'WhatsApp & SMS Invoice Sharing',
      'Multi-User Counter Terminal Setup'
    ]
  },
  {
    id: 'pharmacy_billing',
    name: 'Pharmacy & Chemist ERP',
    price: '₹ 6,999',
    renewal: '₹ 1,899 / yr renewal',
    desc: 'Tailored specifically for medical stores, chemist shops, clinics & pharma distributors.',
    features: [
      'Medicine & Salt/Substitute Search Engine',
      'Batch Number, Expiry Date & MRP Tracking',
      'Doctor Prescription & Schedule H Drug Register',
      'Near-Expiry & Low-Stock Auto Alerts',
      'GST Purchase & Sales Tax Records',
      'Online Cloud Backup & Multi-counter Support'
    ]
  }
];

export const PLAN_TIERS = [
  {
    id: 'startup',
    name: 'Startup',
    badge: 'Entry Tier',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    titleColor: 'text-blue-700',
    subtitle: 'Admissions, Attendance & Notices',
    description: 'Digital transformation for emerging schools. Student dossiers, section builder, daily period registers, notices and parent view portal.',
    featuresCount: '145+ Core Features',
    startingPrice: 'From ₹2,499 / yr',
    highlight: false
  },
  {
    id: 'basic',
    name: 'Basic',
    badge: 'Standard ERP',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    titleColor: 'text-amber-700',
    subtitle: 'Fees POS, Exams & Public Website',
    description: 'Daily commercial & academic workflows. Sibling auto-discovery, thermal/A4 fee POS, CBSE report cards, library & website CMS.',
    featuresCount: '280+ Enabled Features',
    startingPrice: 'From ₹3,999 / yr',
    highlight: false
  },
  {
    id: 'pro',
    name: 'PRO',
    badge: 'Operations',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    titleColor: 'text-purple-700',
    subtitle: 'Transport, Hostel, Payroll & LMS',
    description: 'For growing campuses. GPS bus transport, hostel mess, staff HR & monthly payroll slips, lesson tracker and online quizzes.',
    featuresCount: '410+ Advanced Features',
    startingPrice: 'From ₹5,499 / yr',
    highlight: false
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    badge: 'Flagship All-in-One',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    titleColor: 'text-rose-700',
    subtitle: 'Smart Campus, IoT Biometrics & Bell',
    description: 'The complete enterprise operating system. IoT ZKTeco biometric sync, automated MP3 school bell runner, PWA mobile app, multi-branch POS & 24/7 SLA.',
    featuresCount: '520+ Full Features',
    startingPrice: 'From ₹6,999 / yr',
    highlight: true
  }
];

export const FEATURE_AREAS = [
  // 1. Student & Academic Management
  {
    category: '1. Student & Academic Core',
    name: 'Student Admissions & Digital Dossier (CBCS Roll No, Documents)',
    startup: true,
    basic: true,
    pro: true,
    enterprise: true
  },
  {
    category: '1. Student & Academic Core',
    name: 'Class, Section & Subject Curriculum Builder with Section Allotment',
    startup: true,
    basic: true,
    pro: true,
    enterprise: true
  },
  {
    category: '1. Student & Academic Core',
    name: 'Daily Attendance Registers (Student, Staff & Period-wise Absentees)',
    startup: true,
    basic: true,
    pro: true,
    enterprise: true
  },
  {
    category: '1. Student & Academic Core',
    name: 'School Calendar, Academic Scheduler & Public Holidays Broadcast',
    startup: true,
    basic: true,
    pro: true,
    enterprise: true
  },
  {
    category: '1. Student & Academic Core',
    name: 'Digital Notice Board, Circulars & Role-Filtered Push Bulletins',
    startup: true,
    basic: true,
    pro: true,
    enterprise: true
  },

  // 2. Fees, Billing & Multi-Branch POS
  {
    category: '2. Fees & Financials',
    name: 'Smart Fees POS & Multi-Copy Receipts (Thermal & A4 Formats)',
    startup: false,
    basic: true,
    pro: true,
    enterprise: true
  },
  {
    category: '2. Fees & Financials',
    name: 'Sibling Auto-Discovery by Phone & Combined Family Fee Statement',
    startup: false,
    basic: true,
    pro: true,
    enterprise: true
  },
  {
    category: '2. Fees & Financials',
    name: 'Fee Concession Rules, Defaulter Dues Ledger & WhatsApp Alerts',
    startup: false,
    basic: true,
    pro: true,
    enterprise: true
  },

  // 3. Examinations & Report Cards
  {
    category: '3. Examinations & CBSE Compliance',
    name: 'CBSE 9-Point Scale Exam Marks Entry, Hall Roll Slips & Rank List',
    startup: false,
    basic: true,
    pro: true,
    enterprise: true
  },
  {
    category: '3. Examinations & CBSE Compliance',
    name: 'Term Report Card PDF Generator with Custom Signatures & Grading',
    startup: false,
    basic: true,
    pro: true,
    enterprise: true
  },

  // 4. Portals & Mobile Experience
  {
    category: '4. Portals & Mobile Experience',
    name: 'Student & Parent Mobile Portal (Live Attendance, Diary & Dues)',
    startup: true,
    basic: true,
    pro: true,
    enterprise: true
  },
  {
    category: '4. Portals & Mobile Experience',
    name: 'Family Multi-Sibling Switcher Portal (Single Parent Login)',
    startup: false,
    basic: true,
    pro: true,
    enterprise: true
  },

  // 5. Teaching & LMS
  {
    category: '5. Teaching, Homework & LMS',
    name: 'Digital Homework, Classwork Diary & Syllabus Progress Tracker',
    startup: true,
    basic: true,
    pro: true,
    enterprise: true
  },
  {
    category: '5. Teaching, Homework & LMS',
    name: 'Online Quiz & MCQ Assessment Engine (Timer & Auto-Grading)',
    startup: false,
    basic: false,
    pro: true,
    enterprise: true
  },
  {
    category: '5. Teaching, Homework & LMS',
    name: 'Timetable Period Scheduler with Automatic Teacher Substitution',
    startup: false,
    basic: false,
    pro: true,
    enterprise: true
  },

  // 6. Front Office & Security
  {
    category: '6. Front Office & Identity',
    name: 'Front Desk Visitor Log, Admission Enquiry CRM & Gate Pass',
    startup: false,
    basic: true,
    pro: true,
    enterprise: true
  },
  {
    category: '6. Front Office & Identity',
    name: '8-up Student ID Card Sheets, Employee Badges & TC Generator',
    startup: false,
    basic: true,
    pro: true,
    enterprise: true
  },

  // 7. Library & Public Website
  {
    category: '7. Library & Website CMS',
    name: 'Library Barcode Accession, Issue/Return Ledger & Fine Calculator',
    startup: false,
    basic: true,
    pro: true,
    enterprise: true
  },
  {
    category: '7. Library & Website CMS',
    name: 'School Public Website CMS (Home, Principal Desk, Photo Gallery)',
    startup: false,
    basic: true,
    pro: true,
    enterprise: true
  },

  // 8. Fleet, Hostel & Campus Life
  {
    category: '8. Fleet & Campus Operations',
    name: 'Bus Fleet & GPS Transport (Routes, Vehicles, Drivers & Fares)',
    startup: false,
    basic: false,
    pro: true,
    enterprise: true
  },
  {
    category: '8. Fleet & Campus Operations',
    name: 'Hostel Management (Rooms, Bed Allocation & Mess Meal Log)',
    startup: false,
    basic: false,
    pro: true,
    enterprise: true
  },
  {
    category: '8. Fleet & Campus Operations',
    name: 'House Master System & Cock House Trophy Leaderboard (4 Houses)',
    startup: false,
    basic: false,
    pro: true,
    enterprise: true
  },

  // 9. HR, Payroll & Accounts
  {
    category: '9. HR, Payroll & Accounts',
    name: 'Staff HR & Monthly Payroll Slip Generator (Allowances & Bank Sheet)',
    startup: false,
    basic: false,
    pro: true,
    enterprise: true
  },
  {
    category: '9. HR, Payroll & Accounts',
    name: 'Staff Leave Management (Multi-level Approvals & Leave Balance)',
    startup: false,
    basic: false,
    pro: true,
    enterprise: true
  },
  {
    category: '9. HR, Payroll & Accounts',
    name: 'Multi-Head Expense Book, Daily Cash Ledger & Asset Store',
    startup: false,
    basic: false,
    pro: true,
    enterprise: true
  },

  // 10. IoT Hardware, Auto Bell & Smart Tech
  {
    category: '10. IoT Hardware & Smart Automation',
    name: 'IoT Biometric Hardware Sync (ZKTeco/Secureye Fingerprint/Face)',
    startup: false,
    basic: false,
    pro: false,
    enterprise: true
  },
  {
    category: '10. IoT Hardware & Smart Automation',
    name: 'Automated MP3 School Bell Station & Portable PenDrive Runner (.exe)',
    startup: false,
    basic: false,
    pro: false,
    enterprise: true
  },
  {
    category: '10. IoT Hardware & Smart Automation',
    name: 'Installable PWA Mobile App & Standalone Desktop Window Station',
    startup: false,
    basic: false,
    pro: false,
    enterprise: true
  },

  // 11. Security & Infrastructure
  {
    category: '11. Security & Enterprise SLA',
    name: 'Multi-Branch Campus POS & Centralized Super Admin Access',
    startup: false,
    basic: false,
    pro: false,
    enterprise: true
  },
  {
    category: '11. Security & Enterprise SLA',
    name: 'Role-Based Access Control (RBAC) across 8 Roles & Audit Logs',
    startup: false,
    basic: false,
    pro: false,
    enterprise: true
  },
  {
    category: '11. Security & Enterprise SLA',
    name: 'Dual Language Engine (Hindi & English) & Automated Daily Cloud Backup',
    startup: false,
    basic: false,
    pro: false,
    enterprise: true
  }
];

export const PlanComparisonModal = ({
  isOpen,
  onClose,
  currentSchoolName = '',
  currentPlan = '',
  onSelectPlan
}) => {
  const [modalTab, setModalTab] = useState('strength_matrix');

  if (!isOpen) return null;

  const handleBookDemoWhatsApp = (tierName) => {
    const text = encodeURIComponent(`Hello PKR EDUTECH Team! I am interested in ${tierName} School ERP Package. Please provide a demo and consultation.`);
    window.open(`https://wa.me/918292464812?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white text-slate-800 rounded-3xl shadow-2xl border border-slate-200 w-full max-w-6xl max-h-[94vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Modal Top Header */}
        <div className="p-5 pb-4 border-b border-slate-200 flex items-start justify-between gap-4 bg-gradient-to-r from-slate-50 via-indigo-50/50 to-slate-50">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                PKR EDUTECH Complete Pricing & Capability Matrix
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
                <Crown className="w-3.5 h-3.5 text-amber-600" />
                Guaranteed Best Market Pricing
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-1">
              Transparent student strength tiers, offline one-time options, retail billing & 31 comprehensive feature domains.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Nav Tabs */}
        <div className="flex items-center gap-2 px-5 py-2.5 bg-slate-100/80 border-b border-slate-200 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setModalTab('strength_matrix')}
            className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap ${
              modalTab === 'strength_matrix'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Student Strength Pricing Matrix</span>
          </button>

          <button
            onClick={() => setModalTab('tier_cards')}
            className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap ${
              modalTab === 'tier_cards'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Crown className="w-3.5 h-3.5" />
            <span>4-Tier Package Summary</span>
          </button>

          <button
            onClick={() => setModalTab('feature_matrix')}
            className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap ${
              modalTab === 'feature_matrix'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>31-Capability Checklist</span>
          </button>

          <button
            onClick={() => setModalTab('billing_software')}
            className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap ${
              modalTab === 'billing_software'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Receipt className="w-3.5 h-3.5" />
            <span>Retail & GST Billing Plans</span>
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 bg-white">
          
          {/* TAB 1: STUDENT STRENGTH MATRIX */}
          {modalTab === 'strength_matrix' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-gradient-to-r from-slate-50 to-indigo-50/40">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">Online Cloud School ERP</span>
                    <h3 className="text-base font-bold text-slate-900">Pricing by Student Strength (Setup / Annual Renewal)</h3>
                  </div>
                  <div className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                    <Check className="w-4 h-4 text-emerald-600" /> All prices are GST Inclusive
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                        <th className="p-3.5 pl-4">Student Strength</th>
                        <th className="p-3.5 text-center text-blue-800">
                          Startup ERP
                          <span className="block text-[10px] font-normal text-slate-500">Setup / Renewal</span>
                        </th>
                        <th className="p-3.5 text-center text-amber-800">
                          Basic Smart ERP
                          <span className="block text-[10px] font-normal text-slate-500">Setup / Renewal</span>
                        </th>
                        <th className="p-3.5 text-center text-purple-800">
                          PRO Operations
                          <span className="block text-[10px] font-normal text-slate-500">Setup / Renewal</span>
                        </th>
                        <th className="p-3.5 text-center text-rose-800 bg-rose-50/70 border-x border-rose-200">
                          Enterprise Flagship
                          <span className="block text-[10px] font-bold text-rose-700">Setup / Renewal</span>
                        </th>
                        <th className="p-3.5 text-center text-emerald-800 bg-emerald-50/50">
                          Offline One-Time
                          <span className="block text-[10px] font-normal text-slate-500">Lifetime License</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {STUDENT_STRENGTH_MATRIX.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                          <td className="p-3.5 pl-4 font-bold text-slate-900">
                            {row.range} Students
                          </td>
                          <td className="p-3 text-center">
                            <strong className="text-slate-900 text-sm">{row.startup.setup}</strong>
                            <span className="block text-[10px] text-slate-500">Renewal {row.startup.renewal}</span>
                          </td>
                          <td className="p-3 text-center">
                            <strong className="text-slate-900 text-sm">{row.basic.setup}</strong>
                            <span className="block text-[10px] text-slate-500">Renewal {row.basic.renewal}</span>
                          </td>
                          <td className="p-3 text-center">
                            <strong className="text-slate-900 text-sm">{row.pro.setup}</strong>
                            <span className="block text-[10px] text-slate-500">Renewal {row.pro.renewal}</span>
                          </td>
                          <td className="p-3 text-center bg-rose-50/40 border-x border-rose-100">
                            <strong className="text-rose-700 text-sm font-bold">{row.enterprise.setup}</strong>
                            <span className="block text-[10px] text-rose-600 font-medium">Renewal {row.enterprise.renewal}</span>
                          </td>
                          <td className="p-3 text-center bg-emerald-50/30">
                            <strong className="text-emerald-700 text-sm font-bold">{row.offline}</strong>
                            <span className="block text-[10px] text-slate-500">1-Time Cost</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Notes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-amber-800 block mb-1">Basic Smart ERP:</strong>
                  Full fees POS, thermal/A4 vouchers, sibling auto-discovery, CBSE grade cards & website CMS.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-purple-800 block mb-1">PRO Operations:</strong>
                  Adds GPS bus transport, hostel mess, staff HR & monthly payroll slips, homework diary & LMS quiz.
                </div>
                <div className="p-3.5 rounded-xl bg-rose-50/80 border border-rose-200">
                  <strong className="text-rose-800 block mb-1">Enterprise Ultra:</strong>
                  Includes real-time IoT ZKTeco biometric clock sync, automated MP3 school bell runner & PWA app.
                </div>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => handleBookDemoWhatsApp('Enterprise Ultra')}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl text-xs shadow-md shadow-emerald-600/20 inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Book Free Custom Demo on WhatsApp</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: 4-TIER PACKAGE CARDS */}
          {modalTab === 'tier_cards' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {PLAN_TIERS.map((tier) => {
                  const isEnterprise = tier.id === 'enterprise';
                  return (
                    <div
                      key={tier.id}
                      className={`rounded-2xl p-5 border flex flex-col justify-between transition-all relative ${
                        isEnterprise
                          ? 'bg-gradient-to-b from-rose-50/80 via-white to-indigo-50/60 border-rose-300 shadow-md ring-1 ring-rose-300'
                          : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                      }`}
                    >
                      {isEnterprise && (
                        <div className="absolute -top-2.5 right-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-sm">
                          Flagship Tier
                        </div>
                      )}

                      <div>
                        {/* Header with Title & Badge */}
                        <div className="flex items-center justify-between mb-2">
                          <h3 className={`font-bold text-base ${tier.titleColor}`}>
                            {tier.name}
                          </h3>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${tier.badgeColor}`}>
                            {tier.badge}
                          </span>
                        </div>

                        <div className="text-xl font-black text-slate-900 mb-2">
                          {tier.startingPrice}
                        </div>

                        {/* Subtitle in Bold */}
                        <div className="text-xs font-bold text-slate-800 mb-1.5 leading-snug">
                          {tier.subtitle}
                        </div>

                        {/* Description */}
                        <p className="text-[11px] text-slate-600 leading-relaxed mb-3">
                          {tier.description}
                        </p>
                      </div>

                      <div>
                        <div className="pt-3 border-t border-slate-200 space-y-2">
                          <div className="w-full py-1.5 px-2.5 rounded-xl bg-slate-100 text-indigo-700 text-center font-bold text-xs border border-slate-200">
                            {tier.featuresCount}
                          </div>

                          <button
                            onClick={() => handleBookDemoWhatsApp(tier.name)}
                            className={`w-full py-2 rounded-xl text-xs font-bold transition-all ${
                              isEnterprise
                                ? 'bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-700 hover:to-indigo-700 text-white shadow-md'
                                : 'bg-slate-900 text-white hover:bg-slate-800'
                            }`}
                          >
                            Get Quote for {tier.name}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: 31-CAPABILITY MATRIX */}
          {modalTab === 'feature_matrix' && (
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-600" />
                  Comprehensive 31-Capability Matrix (11 Operational Domains)
                </h4>
                <span className="text-[11px] text-slate-500">
                  Full Feature Availability
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                      <th className="p-3 pl-4">Module & Feature Capability</th>
                      <th className="p-3 text-center">
                        Startup
                        <span className="block text-[10px] font-normal text-slate-500">145+ features</span>
                      </th>
                      <th className="p-3 text-center">
                        Basic
                        <span className="block text-[10px] font-normal text-slate-500">280+ features</span>
                      </th>
                      <th className="p-3 text-center">
                        PRO
                        <span className="block text-[10px] font-normal text-slate-500">410+ features</span>
                      </th>
                      <th className="p-3 text-center bg-rose-50 text-rose-800 border-x border-rose-200">
                        Enterprise
                        <span className="block text-[10px] font-bold text-rose-700">520+ features</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {FEATURE_AREAS.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 pl-4 font-medium">
                          <div className="text-slate-900 font-semibold">{item.name}</div>
                          <div className="text-[10px] text-slate-500">{item.category}</div>
                        </td>
                        
                        <td className="p-3 text-center">
                          {item.startup ? (
                            <Check className="w-4 h-4 text-emerald-600 mx-auto font-bold" />
                          ) : (
                            <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                          )}
                        </td>

                        <td className="p-3 text-center">
                          {item.basic ? (
                            <Check className="w-4 h-4 text-emerald-600 mx-auto font-bold" />
                          ) : (
                            <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                          )}
                        </td>

                        <td className="p-3 text-center">
                          {item.pro ? (
                            <Check className="w-4 h-4 text-emerald-600 mx-auto font-bold" />
                          ) : (
                            <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                          )}
                        </td>

                        <td className="p-3 text-center bg-rose-50/50 border-x border-rose-100">
                          {item.enterprise ? (
                            <Check className="w-4 h-4 text-emerald-600 mx-auto font-black" />
                          ) : (
                            <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: RETAIL & GST BILLING SOFTWARE */}
          {modalTab === 'billing_software' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {BILLING_PLANS.map((plan) => (
                  <div
                    key={plan.id}
                    className={`rounded-2xl p-5 border flex flex-col justify-between ${
                      plan.popular
                        ? 'bg-gradient-to-b from-indigo-50/70 via-white to-purple-50/70 border-indigo-300 shadow-md ring-1 ring-indigo-200'
                        : 'bg-white border-slate-200 shadow-sm'
                    }`}
                  >
                    <div>
                      {plan.popular && (
                        <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200 text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">
                          Most Popular
                        </span>
                      )}
                      <h3 className="text-base font-bold text-slate-900">{plan.name}</h3>
                      <div className="mt-2">
                        <span className="text-2xl font-black text-slate-900">{plan.price}</span>
                        <span className="text-[11px] text-slate-500 block">{plan.renewal}</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{plan.desc}</p>
                      
                      <div className="mt-4 pt-3 border-t border-slate-200 space-y-2">
                        {plan.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleBookDemoWhatsApp(plan.name)}
                      className="w-full mt-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Get Instant Quote</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <p className="text-[11px] text-slate-500 text-center pt-2">
            All plans include 99.99% Cloud Uptime SLA, Automated Daily Database Backups, SSL Encryption, and 1-Click Excel Data Migration.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            Engineered by <strong className="text-slate-900">PKR EDUTECH GLOBAL IT SERVICES</strong> • ISO 9001:2015 Certified
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl text-xs transition-colors shadow-sm w-full sm:w-auto"
          >
            Close Matrix
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanComparisonModal;
