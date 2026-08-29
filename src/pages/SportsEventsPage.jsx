import React, { useState } from 'react';
import {
  Trophy,
  Calendar,
  Award,
  Users,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import schoolService from '../services/schoolService';

export const SportsEventsPage = () => {
  const [sports] = useState(schoolService.getSports());
  const [events] = useState(schoolService.getEvents());
  const [activeTab, setActiveTab] = useState('sports');

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Trophy className="w-7 h-7 text-amber-500" /> Sports & Institutional Events
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Sports academies, inter-school tournaments, annual cultural galas, and parent-teacher meetings.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={() => setActiveTab('sports')}
          className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'sports'
              ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Sports Squads & Academies ({sports.length})
        </button>
        <button
          onClick={() => setActiveTab('events')}
          className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'events'
              ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Upcoming School Events ({events.length})
        </button>
      </div>

      {/* TAB 1: Sports Teams */}
      {activeTab === 'sports' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {sports.map(sp => (
            <div key={sp.id} className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex justify-between items-center">
                <Badge variant="primary">{sp.playersCount} Players</Badge>
                <span className="text-xs text-amber-500 font-bold flex items-center gap-1">
                  <Award className="w-4 h-4" /> Award Winning
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{sp.name}</h3>
              <div className="text-xs space-y-1.5 text-slate-600 dark:text-slate-300">
                <div>Coach: <strong className="text-slate-900 dark:text-white">{sp.coach}</strong></div>
                <div>Captain: <strong className="text-slate-900 dark:text-white">{sp.teamCaptain}</strong></div>
                <div>Venue: {sp.venue}</div>
              </div>
              <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 rounded-2xl text-[11px] font-bold text-amber-900 dark:text-amber-200">
                🏆 {sp.achievements}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: Events */}
      {activeTab === 'events' && (
        <div className="space-y-4">
          {events.map(ev => (
            <div key={ev.id} className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <Badge variant="purple">{ev.type}</Badge>
                  <span className="text-xs font-bold text-indigo-600">📅 {ev.date} ({ev.time})</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{ev.name}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">{ev.description}</p>
                <p className="text-[11px] text-slate-500">📍 Venue: {ev.venue} • Coordinator: {ev.coordinator}</p>
              </div>
              <Badge variant={ev.status === 'Upcoming' ? 'warning' : 'primary'} size="lg">
                {ev.status}
              </Badge>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
