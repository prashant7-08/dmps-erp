import React from 'react';
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
  ArrowRight
} from 'lucide-react';

export const PLAN_TIERS = [
  {
    id: 'startup',
    name: 'Startup',
    badge: 'Entry Tier',
    badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200',
    titleColor: 'text-blue-600 dark:text-blue-400',
    subtitle: 'Admissions, Attendance & Notices',
    description: 'Complete digital transformation for new & growing schools. Student dossiers, section builder, daily period registers, notices and parent view portal.',
    featuresCount: '145+ Core Features',
    price: '₹8,000 / yr',
    highlight: false
  },
  {
    id: 'basic',
    name: 'Basic',
    badge: 'Most Popular',
    badgeColor: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300 border-amber-200',
    titleColor: 'text-amber-600 dark:text-amber-400',
    subtitle: 'Fees POS, Exams & Public Website',
    description: 'Everything schools need for daily commercial & academic workflows. Sibling auto-discovery, thermal/A4 fee POS, CBSE report cards, library & website CMS.',
    featuresCount: '280+ Enabled Features',
    price: '₹15,000 / yr',
    highlight: false
  },
  {
    id: 'pro',
    name: 'PRO',
    badge: 'Operations',
    badgeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 border-purple-200',
    titleColor: 'text-purple-600 dark:text-purple-400',
    subtitle: 'Transport, Hostel, Payroll & LMS',
    description: 'For institutions with comprehensive operational teams. GPS bus transport, hostel mess, staff HR & monthly payroll slips, lesson tracker and online quizzes.',
    featuresCount: '410+ Advanced Features',
    price: '₹22,000 / yr',
    highlight: false
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    badge: 'Flagship All-in-One',
    badgeColor: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 border-rose-200',
    titleColor: 'text-rose-600 dark:text-rose-400',
    subtitle: 'Smart Campus, IoT Biometrics & Bell',
    description: 'The complete enterprise operating system. IoT ZKTeco biometric sync, automated MP3 school bell runner, PWA mobile app, multi-branch POS & 24/7 SLA.',
    featuresCount: '520+ Full Features',
    price: '₹30,000 / yr',
    highlight: true,
    isCurrentForSchool: true
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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Modal Top Header */}
        <div className="p-6 pb-4 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                PKR EDUTECH Enterprise Plan Comparison Matrix
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 border border-rose-300 dark:border-rose-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <Crown className="w-3 h-3 text-rose-500" />
                4 Transparent Tiers
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Comprehensive 31-module capability matrix for smart schools and multi-branch campuses.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* 4 Plan Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PLAN_TIERS.map((tier) => {
              const isEnterprise = tier.id === 'enterprise';
              return (
                <div
                  key={tier.id}
                  className={`rounded-2xl p-4 border flex flex-col justify-between transition-all relative ${
                    isEnterprise
                      ? 'bg-gradient-to-b from-rose-50/50 via-white to-rose-50/30 dark:from-rose-950/20 dark:via-slate-900 dark:to-rose-950/10 border-rose-400 dark:border-rose-700 shadow-md ring-2 ring-rose-400/30'
                      : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 hover:border-slate-300'
                  }`}
                >
                  {isEnterprise && (
                    <div className="absolute -top-2.5 right-3 bg-rose-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-sm">
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

                    <div className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {tier.price}
                    </div>

                    {/* Subtitle in Bold */}
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5 leading-snug">
                      {tier.subtitle}
                    </div>

                    {/* Description */}
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                      {tier.description}
                    </p>
                  </div>

                  <div>
                    {/* Price & Features count pill */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60">
                      <div className="w-full py-1.5 px-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-center font-bold text-xs">
                        {tier.featuresCount}
                      </div>

                      {onSelectPlan && (
                        <button
                          onClick={() => onSelectPlan(tier)}
                          className={`w-full mt-2 py-1.5 rounded-xl text-xs font-bold transition-all ${
                            isEnterprise
                              ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-sm'
                              : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-indigo-600 hover:text-white'
                          }`}
                        >
                          Select {tier.name}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feature Area Availability Table */}
          <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                Comprehensive 31-Capability Matrix (11 Operational Domains)
              </h4>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold">
                    <th className="p-3 pl-4">Feature Module</th>
                    <th className="p-3 text-center">
                      Startup
                      <span className="block text-[10px] font-normal text-slate-400">145+ features</span>
                    </th>
                    <th className="p-3 text-center">
                      Basic
                      <span className="block text-[10px] font-normal text-slate-400">280+ features</span>
                    </th>
                    <th className="p-3 text-center">
                      PRO
                      <span className="block text-[10px] font-normal text-slate-400">410+ features</span>
                    </th>
                    <th className="p-3 text-center bg-rose-50/50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300">
                      Enterprise
                      <span className="block text-[10px] font-bold text-rose-500">520+ features</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
                  {FEATURE_AREAS.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-100/50 dark:hover:bg-slate-800/60 transition-colors">
                      <td className="p-3 pl-4 font-medium">
                        <div className="font-semibold text-slate-900 dark:text-white">{item.name}</div>
                        <div className="text-[10px] text-slate-400">{item.category}</div>
                      </td>
                      
                      <td className="p-3 text-center">
                        {item.startup ? (
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto font-bold" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" />
                        )}
                      </td>

                      <td className="p-3 text-center">
                        {item.basic ? (
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto font-bold" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" />
                        )}
                      </td>

                      <td className="p-3 text-center">
                        {item.pro ? (
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto font-bold" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" />
                        )}
                      </td>

                      <td className="p-3 text-center bg-rose-50/30 dark:bg-rose-950/20">
                        {item.enterprise ? (
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto font-black" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 text-center">
            All plans include SSL Security, Daily Automatic Backups, and 1-Click Excel Migration.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Enterprise Cloud Operating System • <strong className="text-slate-800 dark:text-slate-200">PKR EDUTECH</strong>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 font-bold rounded-xl text-xs transition-colors"
          >
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
};
export default PlanComparisonModal;
