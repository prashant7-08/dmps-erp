import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen,
  Award,
  Users
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import schoolService from '../services/schoolService';

export const CalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState('September 2026');
  const schoolInfo = schoolService.getSchoolInfo();

  const calendarEvents = [
    { date: '2026-09-05', title: 'Parent-Teacher Meeting (Term 1 Review)', type: 'PTM', badge: 'purple' },
    { date: '2026-09-10', title: 'Submission Deadline for Science Lab Portfolios', type: 'Academic', badge: 'primary' },
    { date: '2026-09-18', title: 'Half Yearly Examinations Commence', type: 'Exam', badge: 'danger' },
    { date: '2026-09-30', title: 'Half Yearly Examinations Conclude', type: 'Exam', badge: 'danger' },
    { date: '2026-10-02', title: 'Gandhi Jayanti (National Holiday)', type: 'Holiday', badge: 'success' },
    { date: '2026-10-15', title: 'Technovate 2026 Science & AI Robotics Fest', type: 'Event', badge: 'warning' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <CalendarIcon className="w-7 h-7 text-indigo-600" /> Institutional Academic Calendar
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Master calendar integrating exams, national holidays, sports tournaments, PTMs, and submission deadlines.
          </p>
        </div>
      </div>

      {/* Calendar View Container */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            📅 {currentMonth} (Session {schoolInfo.academicSession})
          </h3>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Events Timeline List */}
        <div className="space-y-3">
          {calendarEvents.map((ev, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-3 py-1.5 rounded-xl border border-indigo-200 dark:border-indigo-800">
                  {ev.date}
                </span>
                <span className="font-bold text-slate-900 dark:text-white text-sm">{ev.title}</span>
              </div>
              <Badge variant={ev.badge}>{ev.type}</Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
