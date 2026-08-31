import React, { useState } from 'react';
import {
  CalendarDays,
  Clock,
  MapPin,
  User,
  Filter,
  Layers,
  Printer,
  Sparkles
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import schoolService from '../services/schoolService';

export const TimetablePage = () => {
  const [selectedClass, setSelectedClass] = useState('Class 10 - A');
  const [selectedDay, setSelectedDay] = useState('Monday');
  const timetables = schoolService.getTimetables();

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const mondaySchedule = [
    { period: 'Period 1', time: '08:00 - 08:45', subject: 'Mathematics Standard', teacher: 'Mrs. BHOOMI YADAV', room: 'Room 101', type: 'Core' },
    { period: 'Period 2', time: '08:45 - 09:30', subject: 'Physics (Optics Lab)', teacher: 'Prashant Kumar Rajput', room: 'Physics Lab', type: 'Lab' },
    { period: 'Period 3', time: '09:30 - 10:15', subject: 'English Language', teacher: 'Mrs. Kavita Iyer', room: 'Room 101', type: 'Core' },
    { period: 'Period 4', time: '10:15 - 11:00', subject: 'Social Science', teacher: 'Mr. Alok Mukherjee', room: 'Room 101', type: 'Core' },
    { period: 'Recess', time: '11:00 - 11:30', subject: 'Nutrition & Lunch Break', teacher: 'Duty Staff', room: 'Campus Cafeteria', type: 'Break' },
    { period: 'Period 5', time: '11:30 - 12:15', subject: 'Hindi Course-A', teacher: 'Dr. Ramesh Chandra', room: 'Room 101', type: 'Language' },
    { period: 'Period 6', time: '12:15 - 01:00', subject: 'Computer Applications', teacher: 'Mr. POORAN SINGH', room: 'CS Lab 1', type: 'Lab' },
    { period: 'Period 7', time: '01:00 - 01:45', subject: 'Physical Education / Sports', teacher: 'Coach Jaswinder', room: 'Athletic Ground', type: 'Activity' }
  ];

  const tuesdaySchedule = [
    { period: 'Period 1', time: '08:00 - 08:45', subject: 'Chemistry (Titration Lab)', teacher: 'Mrs. Priyanka Joshi', room: 'Chemistry Lab', type: 'Lab' },
    { period: 'Period 2', time: '08:45 - 09:30', subject: 'Mathematics Standard', teacher: 'Mrs. BHOOMI YADAV', room: 'Room 101', type: 'Core' },
    { period: 'Period 3', time: '09:30 - 10:15', subject: 'Social Science', teacher: 'Mr. Alok Mukherjee', room: 'Room 101', type: 'Core' },
    { period: 'Period 4', time: '10:15 - 11:00', subject: 'English Grammar', teacher: 'Mrs. Kavita Iyer', room: 'Room 101', type: 'Core' },
    { period: 'Recess', time: '11:00 - 11:30', subject: 'Nutrition & Lunch Break', teacher: 'Duty Staff', room: 'Campus Cafeteria', type: 'Break' },
    { period: 'Period 5', time: '11:30 - 12:15', subject: 'Biology', teacher: 'Dr. Meenal Roy', room: 'Bio Lab', type: 'Lab' },
    { period: 'Period 6', time: '12:15 - 01:00', subject: 'Art & Cultural Heritage', teacher: 'Mrs. Ananya Sen', room: 'Art Studio', type: 'Activity' },
    { period: 'Period 7', time: '01:00 - 01:45', subject: 'Library & Research', teacher: 'Mrs. Shashi Bala', room: 'Central Library', type: 'Activity' }
  ];

  const activeSchedule = selectedDay === 'Tuesday' ? tuesdaySchedule : mondaySchedule;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <CalendarDays className="w-7 h-7 text-indigo-600" /> Timetable & Room Allocation
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Weekly 8-period class matrix, teacher workloads, science laboratories, and room conflict prevention.
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all"
        >
          <Printer className="w-4 h-4" /> Print Timetable
        </button>
      </div>

      {/* Selector Filters */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-slate-500">Selected Class:</span>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-900 dark:text-white"
          >
            <option value="Class 10 - A">Class 10 - Section A</option>
            <option value="Class 10 - B">Class 10 - Section B</option>
            <option value="Class 12 - Science">Class 12 - Science</option>
            <option value="Class 12 - Commerce">Class 12 - Commerce</option>
          </select>
        </div>

        {/* Day Pills */}
        <div className="flex flex-wrap gap-1.5">
          {days.map(day => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedDay === day
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Timetable Schedule Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {activeSchedule.map((slot, idx) => {
          const isBreak = slot.type === 'Break';
          return (
            <div
              key={idx}
              className={`rounded-3xl p-5 border transition-all ${
                isBreak
                  ? 'bg-amber-50/60 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/50 sm:col-span-2 lg:col-span-4'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${
                  isBreak ? 'bg-amber-200 text-amber-900' : 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
                }`}>
                  {slot.period}
                </span>
                <span className="text-[11px] font-mono font-bold text-slate-500 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" /> {slot.time}
                </span>
              </div>

              <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-2">
                {slot.subject}
              </h4>

              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 font-medium truncate max-w-[140px]">
                  <User className="w-3.5 h-3.5 text-indigo-500 shrink-0" /> {slot.teacher}
                </span>
                <span className="flex items-center gap-1 font-bold text-slate-700 dark:text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> {slot.room}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
