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
import { Modal } from '../common/Modal';

export const PLAN_TIERS = [
  {
    id: 'startup',
    name: 'Startup',
    badge: 'Entry',
    badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200',
    titleColor: 'text-blue-600 dark:text-blue-400',
    subtitle: 'New schools starting ERP',
    description: 'Admissions, students, classes, attendance and notices. No advanced operations modules.',
    featuresCount: '169 enabled features',
    price: '₹8,000 / yr',
    highlight: false
  },
  {
    id: 'basic',
    name: 'Basic',
    badge: 'Popular',
    badgeColor: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300 border-amber-200',
    titleColor: 'text-amber-600 dark:text-amber-400',
    subtitle: 'Schools moving daily work online',
    description: 'Core ERP, fees, reports and web portals. Mobile app, transport, hostel and HR stay limited.',
    featuresCount: '175 enabled features',
    price: '₹15,000 / yr',
    highlight: false
  },
  {
    id: 'pro',
    name: 'PRO',
    badge: 'Advanced',
    badgeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 border-purple-200',
    titleColor: 'text-purple-600 dark:text-purple-400',
    subtitle: 'Growing schools with operations teams',
    description: 'Transport, library, hostel, HR, payroll and advanced examination & analytical reports.',
    featuresCount: '331 enabled features',
    price: '₹22,000 / yr',
    highlight: false
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    badge: 'Premium',
    badgeColor: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 border-rose-200',
    titleColor: 'text-rose-600 dark:text-rose-400',
    subtitle: 'Multi-team schools needing premium controls',
    description: 'Enterprise UI, biometric hardware sync, automatic school bell, security posture and custom workflows.',
    featuresCount: '423 enabled features',
    price: '₹30,000 / yr',
    highlight: true,
    isCurrentForSchool: true
  }
];

export const FEATURE_AREAS = [
  {
    name: 'Core School Management (Admissions, Classes, Sections)',
    startup: true,
    basic: true,
    pro: true,
    enterprise: true
  },
  {
    name: 'Student & Parent Portal (Family Portal & Fee Dues View)',
    startup: true,
    basic: true,
    pro: true,
    enterprise: true
  },
  {
    name: 'Fees Management, Invoicing & Multi-Branch POS',
    startup: true,
    basic: true,
    pro: true,
    enterprise: true
  },
  {
    name: 'SMS, WhatsApp Broadcast & Parent Circulars',
    startup: false,
    basic: false,
    pro: true,
    enterprise: true
  },
  {
    name: 'PWA Mobile App & Installable Desktop Station',
    startup: false,
    basic: false,
    pro: false,
    enterprise: true
  },
  {
    name: 'Transport (Bus Routes & Stops) / Hostel / Library',
    startup: true,
    basic: true,
    pro: true,
    enterprise: true
  },
  {
    name: 'HR Management, Staff Attendance & Payroll Slip Gen',
    startup: false,
    basic: false,
    pro: true,
    enterprise: true
  },
  {
    name: 'Biometric Machine Sync (ZKTeco/Secureye) & Auto Bell',
    startup: false,
    basic: false,
    pro: false,
    enterprise: true
  },
  {
    name: 'Advanced Security, Role-Based Access (RBAC) & Enterprise UI',
    startup: false,
    basic: false,
    pro: false,
    enterprise: true
  }
];

export const PlanComparisonModal = ({
  isOpen,
  onClose,
  currentSchoolName = 'Dadheech Memorial Public School',
  currentPlan = 'Enterprise',
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
                Plan Comparison
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 border border-rose-300 dark:border-rose-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <Crown className="w-3 h-3 text-rose-500" />
                Current: ENTERPRISE (DMPS)
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Pick the package that matches the school workflow. Dadheech Memorial Public School is activated on the highest <strong>Enterprise Tier (423 Features)</strong>.
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
                      Top Tier Active
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

                    {/* Subtitle in Red/Bold */}
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
                          {isEnterprise ? 'Active for DMPS' : `Select ${tier.name}`}
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
                Feature Area Availability Matrix
              </h4>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold">
                    <th className="p-3 pl-4">Feature Area</th>
                    <th className="p-3 text-center">
                      Startup
                      <span className="block text-[10px] font-normal text-slate-400">169 features</span>
                    </th>
                    <th className="p-3 text-center">
                      Basic
                      <span className="block text-[10px] font-normal text-slate-400">175 features</span>
                    </th>
                    <th className="p-3 text-center">
                      PRO
                      <span className="block text-[10px] font-normal text-slate-400">331 features</span>
                    </th>
                    <th className="p-3 text-center bg-rose-50/50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300">
                      Enterprise
                      <span className="block text-[10px] font-bold text-rose-500">423 features (DMPS)</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
                  {FEATURE_AREAS.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-100/50 dark:hover:bg-slate-800/60 transition-colors">
                      <td className="p-3 pl-4 font-medium">{item.name}</td>
                      
                      <td className="p-3 text-center">
                        {item.startup ? (
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" />
                        )}
                      </td>

                      <td className="p-3 text-center">
                        {item.basic ? (
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" />
                        )}
                      </td>

                      <td className="p-3 text-center">
                        {item.pro ? (
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto" />
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
            This comparison is for demo & license guidance. All 423 features are unlocked and fully operational for Dadheech Memorial Public School.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Current Active License: <strong className="text-slate-800 dark:text-slate-200">DMPS Enterprise Lifetime (423 Features)</strong>
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
