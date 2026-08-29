import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const StatCard = ({ title, value, subtext, icon: Icon, trend, trendValue, color = 'indigo', delay = 0 }) => {
  const colorMap = {
    indigo: {
      gradient: 'from-blue-600 to-indigo-600',
      lightBg: 'bg-indigo-50/80 dark:bg-indigo-950/50',
      iconText: 'text-indigo-600 dark:text-indigo-300',
      iconBg: 'bg-indigo-100 dark:bg-indigo-900/60',
      border: 'border-indigo-200 dark:border-indigo-800/60',
      glow: 'hover:shadow-indigo-500/15'
    },
    emerald: {
      gradient: 'from-emerald-600 to-teal-600',
      lightBg: 'bg-emerald-50/80 dark:bg-emerald-950/50',
      iconText: 'text-emerald-600 dark:text-emerald-300',
      iconBg: 'bg-emerald-100 dark:bg-emerald-900/60',
      border: 'border-emerald-200 dark:border-emerald-800/60',
      glow: 'hover:shadow-emerald-500/15'
    },
    amber: {
      gradient: 'from-amber-500 to-orange-600',
      lightBg: 'bg-amber-50/80 dark:bg-amber-950/50',
      iconText: 'text-amber-600 dark:text-amber-300',
      iconBg: 'bg-amber-100 dark:bg-amber-900/60',
      border: 'border-amber-200 dark:border-amber-800/60',
      glow: 'hover:shadow-amber-500/15'
    },
    rose: {
      gradient: 'from-rose-600 to-pink-600',
      lightBg: 'bg-rose-50/80 dark:bg-rose-950/50',
      iconText: 'text-rose-600 dark:text-rose-300',
      iconBg: 'bg-rose-100 dark:bg-rose-900/60',
      border: 'border-rose-200 dark:border-rose-800/60',
      glow: 'hover:shadow-rose-500/15'
    },
    purple: {
      gradient: 'from-purple-600 to-indigo-600',
      lightBg: 'bg-purple-50/80 dark:bg-purple-950/50',
      iconText: 'text-purple-600 dark:text-purple-300',
      iconBg: 'bg-purple-100 dark:bg-purple-900/60',
      border: 'border-purple-200 dark:border-purple-800/60',
      glow: 'hover:shadow-purple-500/15'
    },
    cyan: {
      gradient: 'from-cyan-600 to-blue-600',
      lightBg: 'bg-cyan-50/80 dark:bg-cyan-950/50',
      iconText: 'text-cyan-600 dark:text-cyan-300',
      iconBg: 'bg-cyan-100 dark:bg-cyan-900/60',
      border: 'border-cyan-200 dark:border-cyan-800/60',
      glow: 'hover:shadow-cyan-500/15'
    }
  };

  const scheme = colorMap[color] || colorMap.indigo;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay, duration: 0.35, ease: 'easeOut' }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={`group bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 ${scheme.glow} relative overflow-hidden flex flex-col justify-between`}
    >
      {/* Top Accent Line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${scheme.gradient} opacity-90`}></div>

      <div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              {title}
            </p>
            <h4 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {value}
            </h4>
          </div>
          {Icon && (
            <div className={`p-3 rounded-2xl ${scheme.iconBg} ${scheme.iconText} transition-all duration-300 group-hover:scale-110 shadow-sm shrink-0`}>
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
        <span className="text-slate-500 dark:text-slate-400 font-medium truncate">
          {subtext}
        </span>
        {trend && (
          <span className={`inline-flex items-center gap-1 font-bold shrink-0 ${trend === 'up' ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-lg' : 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded-lg'}`}>
            {trend === 'up' ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
            {trendValue}
          </span>
        )}
      </div>
    </motion.div>
  );
};
