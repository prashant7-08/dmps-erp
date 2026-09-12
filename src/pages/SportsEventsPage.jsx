import React, { useState } from 'react';
import {
  Trophy,
  Calendar,
  Award,
  Users,
  MapPin,
  Clock,
  Sparkles,
  Shield,
  Flame,
  Plus,
  TrendingUp,
  Star,
  CheckCircle2,
  Medal,
  ChevronRight
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const SportsEventsPage = () => {
  const { showToast } = useToast();
  const [sports] = useState(schoolService.getSports());
  const [events] = useState(schoolService.getEvents());
  const [activeTab, setActiveTab] = useState('houses');

  // House Master & Leaderboard State (ERPMANTRA Style)
  const [houses, setHouses] = useState([
    {
      id: 'HOUSE-RED',
      name: 'Phoenix (Red House)',
      color: '#ef4444',
      bgClass: 'bg-red-500',
      borderClass: 'border-red-500',
      lightBg: 'bg-red-50 dark:bg-red-950/40',
      textClass: 'text-red-600 dark:text-red-400',
      motto: 'Arise, Excel & Conquer with Passion',
      houseMaster: 'Dr. Rajesh Sharma (Vice Principal)',
      captain: 'Aarav Sharma (Class 10-A)',
      viceCaptain: 'Rohan Varma (Class 9-A)',
      totalMembers: 95,
      academicsPoints: 480,
      sportsPoints: 540,
      culturalPoints: 410,
      disciplinePoints: 370,
      badgeIcon: '🔥',
      rank: 1
    },
    {
      id: 'HOUSE-BLUE',
      name: 'Dragons (Blue House)',
      color: '#3b82f6',
      bgClass: 'bg-blue-500',
      borderClass: 'border-blue-500',
      lightBg: 'bg-blue-50 dark:bg-blue-950/40',
      textClass: 'text-blue-600 dark:text-blue-400',
      motto: 'Wisdom, Integrity & Fearless Dedication',
      houseMaster: 'Mrs. Sunita Verma (PGT Maths)',
      captain: 'Ananya Deshmukh (Class 10-A)',
      viceCaptain: 'Priya Patel (Class 9-A)',
      totalMembers: 92,
      academicsPoints: 510,
      sportsPoints: 460,
      culturalPoints: 430,
      disciplinePoints: 390,
      badgeIcon: '🐉',
      rank: 2
    },
    {
      id: 'HOUSE-GREEN',
      name: 'Titans (Green House)',
      color: '#10b981',
      bgClass: 'bg-emerald-500',
      borderClass: 'border-emerald-500',
      lightBg: 'bg-emerald-50 dark:bg-emerald-950/40',
      textClass: 'text-emerald-600 dark:text-emerald-400',
      motto: 'Growth, Resilience & Global Harmony',
      houseMaster: 'Pt. Ramakant Shastri (TGT Sanskrit)',
      captain: 'Kabir Khan (Class 10-A)',
      viceCaptain: 'Aryan Singh (Class 9-B)',
      totalMembers: 90,
      academicsPoints: 450,
      sportsPoints: 490,
      culturalPoints: 380,
      disciplinePoints: 360,
      badgeIcon: '🌲',
      rank: 3
    },
    {
      id: 'HOUSE-YELLOW',
      name: 'Warriors (Yellow House)',
      color: '#f59e0b',
      bgClass: 'bg-amber-500',
      borderClass: 'border-amber-500',
      lightBg: 'bg-amber-50 dark:bg-amber-950/40',
      textClass: 'text-amber-600 dark:text-amber-400',
      motto: 'Courage, Discipline & Unshakable Valor',
      houseMaster: 'Coach Devender Singh (Sports Head)',
      captain: 'Diya Chatterjee (Class 10-B)',
      viceCaptain: 'Ishaan Gupta (Class 8-A)',
      totalMembers: 88,
      academicsPoints: 430,
      sportsPoints: 470,
      culturalPoints: 410,
      disciplinePoints: 340,
      badgeIcon: '⚔️',
      rank: 4
    }
  ]);

  const [isAwardPointsModalOpen, setIsAwardPointsModalOpen] = useState(false);
  const [awardForm, setAwardForm] = useState({
    houseId: 'HOUSE-RED',
    category: 'Sports',
    points: 50,
    eventTitle: 'Inter-House 100m Sprint Gold Medal',
    awardedBy: 'Coach Devender Singh'
  });

  const handleAwardPoints = (e) => {
    e.preventDefault();
    const updated = houses.map(h => {
      if (h.id === awardForm.houseId) {
        const pts = Number(awardForm.points);
        const catKey = awardForm.category.toLowerCase() === 'academics' ? 'academicsPoints' :
                       awardForm.category.toLowerCase() === 'sports' ? 'sportsPoints' :
                       awardForm.category.toLowerCase() === 'cultural' ? 'culturalPoints' : 'disciplinePoints';
        return {
          ...h,
          [catKey]: h[catKey] + pts
        };
      }
      return h;
    });

    // Re-rank
    updated.sort((a, b) => {
      const totA = a.academicsPoints + a.sportsPoints + a.culturalPoints + a.disciplinePoints;
      const totB = b.academicsPoints + b.sportsPoints + b.culturalPoints + b.disciplinePoints;
      return totB - totA;
    });

    updated.forEach((h, idx) => { h.rank = idx + 1; });

    setHouses(updated);
    setIsAwardPointsModalOpen(false);
    showToast(`🏆 Added ${awardForm.points} points to ${houses.find(h => h.id === awardForm.houseId)?.name}!`, 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Trophy className="w-7 h-7 text-amber-500" /> Houses, Sports & Institutional Events
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            House leaderboard points, inter-house championships, sports squads, and annual events calendar.
          </p>
        </div>
        {activeTab === 'houses' && (
          <button
            onClick={() => setIsAwardPointsModalOpen(true)}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs rounded-xl shadow-md flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Award House Points
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={() => setActiveTab('houses')}
          className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
            activeTab === 'houses'
              ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Shield className="w-4 h-4" /> House Master & Leaderboard (4 Houses)
        </button>
        <button
          onClick={() => setActiveTab('sports')}
          className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
            activeTab === 'sports'
              ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Trophy className="w-4 h-4" /> Sports Squads & Academies ({sports.length})
        </button>
        <button
          onClick={() => setActiveTab('events')}
          className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
            activeTab === 'events'
              ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Calendar className="w-4 h-4" /> Upcoming Events ({events.length})
        </button>
      </div>

      {/* ===================================================================== */}
      {/* 🏆 TAB 1: HOUSE LEADERBOARD & HOUSE MASTER                            */}
      {/* ===================================================================== */}
      {activeTab === 'houses' && (
        <div className="space-y-6">
          {/* Top Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {houses.map(h => {
              const total = h.academicsPoints + h.sportsPoints + h.culturalPoints + h.disciplinePoints;
              return (
                <div
                  key={h.id}
                  className={`bg-white dark:bg-slate-900 rounded-3xl p-5 border-2 shadow-sm relative overflow-hidden transition-all hover:shadow-md ${
                    h.rank === 1 ? 'border-amber-400 dark:border-amber-500 shadow-amber-500/10' : 'border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {h.rank === 1 && (
                    <div className="absolute top-0 right-0 bg-amber-400 text-slate-950 text-[10px] font-black px-3 py-1 rounded-bl-xl flex items-center gap-1 shadow-sm">
                      <Medal className="w-3 h-3" /> RANK 1 • LEADER
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{h.badgeIcon}</span>
                    <div>
                      <h3 className="text-base font-black text-slate-900 dark:text-white">{h.name}</h3>
                      <p className="text-[11px] text-slate-500 italic">"{h.motto}"</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-3 space-y-1.5 text-xs text-slate-600 dark:text-slate-300 mb-4">
                    <div className="flex justify-between">
                      <span className="text-slate-500">House Master:</span>
                      <strong className="text-slate-900 dark:text-white text-right">{h.houseMaster}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Captain:</span>
                      <strong className="text-slate-900 dark:text-white">{h.captain}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Vice Captain:</span>
                      <strong className="text-slate-900 dark:text-white">{h.viceCaptain}</strong>
                    </div>
                  </div>

                  {/* Points Breakdown */}
                  <div className="space-y-1 text-xs mb-4">
                    <div className="flex justify-between text-slate-500">
                      <span>📚 Academics</span>
                      <strong className="text-slate-800 dark:text-slate-200">{h.academicsPoints} pts</strong>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>⚽ Sports & Athletics</span>
                      <strong className="text-slate-800 dark:text-slate-200">{h.sportsPoints} pts</strong>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>🎨 Cultural & Arts</span>
                      <strong className="text-slate-800 dark:text-slate-200">{h.culturalPoints} pts</strong>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>🎖️ Discipline</span>
                      <strong className="text-slate-800 dark:text-slate-200">{h.disciplinePoints} pts</strong>
                    </div>
                  </div>

                  {/* Total Banner */}
                  <div className={`p-3 rounded-2xl flex items-center justify-between font-black text-sm ${h.lightBg} ${h.textClass}`}>
                    <span>TOTAL POINTS:</span>
                    <span className="text-lg font-mono">{total} PTS</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Points Table */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-500" /> Annual Cock House Trophy Standings (2026-2027)
              </h3>
              <Badge variant="primary">Updated Real-Time</Badge>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                    <th className="p-3">Rank</th>
                    <th className="p-3">House Name</th>
                    <th className="p-3">House Master</th>
                    <th className="p-3">Captain</th>
                    <th className="p-3 text-center">Academics</th>
                    <th className="p-3 text-center">Sports</th>
                    <th className="p-3 text-center">Cultural</th>
                    <th className="p-3 text-center">Discipline</th>
                    <th className="p-3 text-right">Grand Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {houses.map((h) => {
                    const total = h.academicsPoints + h.sportsPoints + h.culturalPoints + h.disciplinePoints;
                    return (
                      <tr key={h.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-3">
                          <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full font-black text-xs ${
                            h.rank === 1 ? 'bg-amber-400 text-slate-950 shadow-xs' :
                            h.rank === 2 ? 'bg-slate-200 text-slate-800' :
                            h.rank === 3 ? 'bg-amber-700 text-white' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {h.rank}
                          </span>
                        </td>
                        <td className="p-3 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          <span>{h.badgeIcon}</span> {h.name}
                        </td>
                        <td className="p-3 text-slate-600 dark:text-slate-400">{h.houseMaster}</td>
                        <td className="p-3 font-semibold text-slate-800 dark:text-slate-200">{h.captain}</td>
                        <td className="p-3 text-center font-mono font-bold text-slate-700 dark:text-slate-300">{h.academicsPoints}</td>
                        <td className="p-3 text-center font-mono font-bold text-emerald-600">{h.sportsPoints}</td>
                        <td className="p-3 text-center font-mono font-bold text-purple-600">{h.culturalPoints}</td>
                        <td className="p-3 text-center font-mono font-bold text-blue-600">{h.disciplinePoints}</td>
                        <td className="p-3 text-right font-mono font-black text-base text-amber-600 dark:text-amber-400">{total} PTS</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Sports Squads */}
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

      {/* TAB 3: Events */}
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

      {/* Modal: Award House Points */}
      <Modal
        isOpen={isAwardPointsModalOpen}
        onClose={() => setIsAwardPointsModalOpen(false)}
        title="🏆 Award House Points"
      >
        <form onSubmit={handleAwardPoints} className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select House *</label>
            <select
              value={awardForm.houseId}
              onChange={(e) => setAwardForm({ ...awardForm, houseId: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
            >
              {houses.map(h => (
                <option key={h.id} value={h.id}>{h.badgeIcon} {h.name}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Category *</label>
              <select
                value={awardForm.category}
                onChange={(e) => setAwardForm({ ...awardForm, category: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              >
                <option value="Sports">Sports & Athletics</option>
                <option value="Academics">Academic Excellence</option>
                <option value="Cultural">Cultural & Performing Arts</option>
                <option value="Discipline">Discipline & House Pride</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Points to Add *</label>
              <input
                type="number"
                required
                min="5"
                max="500"
                value={awardForm.points}
                onChange={(e) => setAwardForm({ ...awardForm, points: Number(e.target.value) })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Event / Achievement Reason *</label>
            <input
              type="text"
              required
              placeholder="e.g. Inter-House Football Tournament Winner"
              value={awardForm.eventTitle}
              onChange={(e) => setAwardForm({ ...awardForm, eventTitle: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Awarded By</label>
            <input
              type="text"
              value={awardForm.awardedBy}
              onChange={(e) => setAwardForm({ ...awardForm, awardedBy: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsAwardPointsModalOpen(false)}
              className="px-4 py-2 text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black rounded-xl shadow-md"
            >
              🏆 Award Points Now
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default SportsEventsPage;
