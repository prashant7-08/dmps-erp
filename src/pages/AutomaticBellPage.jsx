import React, { useState, useEffect, useRef } from 'react';
import {
  Bell,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Clock,
  Settings,
  Calendar,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Zap,
  Radio,
  Fingerprint,
  Download,
  Flame,
  ShieldCheck,
  RefreshCw,
  Plus,
  Edit2,
  Trash2,
  X,
  Save,
  Check,
  Music
} from 'lucide-react';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

// Available MP3 Audio Tracks Library
const AUDIO_TRACKS = [
  { id: '16-Assembly.mp3', label: '🌅 16-Assembly.mp3 (Morning Assembly & Prayer Chime)' },
  { id: '01.mp3', label: '🔔 01.mp3 (Period 1 Double Bell Chime)' },
  { id: '02.mp3', label: '🔔 02.mp3 (Period 2 Double Bell Chime)' },
  { id: '03.mp3', label: '🔔 03.mp3 (Period 3 Double Bell Chime)' },
  { id: '04.mp3', label: '🔔 04.mp3 (Period 4 Double Bell Chime)' },
  { id: '05.mp3', label: '🔔 05.mp3 (Period 5 Double Bell Chime)' },
  { id: '06.mp3', label: '🔔 06.mp3 (Period 6 Double Bell Chime)' },
  { id: '07.mp3', label: '🔔 07.mp3 (Period 7 Double Bell Chime)' },
  { id: '08.mp3', label: '🔔 08.mp3 (Period 8 Double Bell Chime)' },
  { id: '09.mp3', label: '🔔 09.mp3 (Period 9 Double Bell Chime)' },
  { id: '17-lunch-time.mp3', label: '🥪 17-lunch-time.mp3 (Lunch Break / Recess Chime)' },
  { id: '18-School-Close.mp3', label: '🎒 18-School-Close.mp3 (School Dismissal / Close Chime)' },
  { id: 'Sare-Jahan-Se-Achha.mp3', label: '🇮🇳 Sare-Jahan-Se-Achha.mp3 (Marching Anthem / Assembly)' },
  { id: 'T-Short.mp3', label: '⚡ T-Short.mp3 (Short Warning / Transition Stroke)' },
  { id: 'default_bell.mp3', label: '🔔 default_bell.mp3 (Standard School Bell Chime)' }
];

// Default DMPS Standard Period Schedule with Authentic MP3 Audio Tracks
const DEFAULT_BELL_SCHEDULE = [
  { id: 'b1', time: '07:45:00', label: 'Morning Assembly & Campus Gate Entry', type: 'Assembly', audio: '16-Assembly.mp3', duration: 4, stroke: 'long' },
  { id: 'b2', time: '08:15:00', label: 'Period 1 (Class Begins)', type: 'Period', audio: '01.mp3', duration: 2, stroke: 'single' },
  { id: 'b3', time: '08:55:00', label: 'Period 2 (Subject Switch)', type: 'Period', audio: '02.mp3', duration: 2, stroke: 'single' },
  { id: 'b4', time: '09:35:00', label: 'Period 3 (Subject Switch)', type: 'Period', audio: '03.mp3', duration: 2, stroke: 'single' },
  { id: 'b5', time: '10:15:00', label: 'Period 4 (Pre-Recess Period)', type: 'Period', audio: '04.mp3', duration: 2, stroke: 'single' },
  { id: 'b6', time: '10:55:00', label: '🥪 Recess / Nutrition & Lunch Break', type: 'Recess', audio: '17-lunch-time.mp3', duration: 5, stroke: 'double' },
  { id: 'b7', time: '11:25:00', label: 'Period 5 (Post-Lunch Session Begins)', type: 'Period', audio: '05.mp3', duration: 2, stroke: 'single' },
  { id: 'b8', time: '12:05:00', label: 'Period 6 (Subject Switch)', type: 'Period', audio: '06.mp3', duration: 2, stroke: 'single' },
  { id: 'b9', time: '12:45:00', label: 'Period 7 (Activity & Practical Lab)', type: 'Period', audio: '07.mp3', duration: 2, stroke: 'single' },
  { id: 'b10', time: '13:25:00', label: 'Period 8 (Diary & Homework Check)', type: 'Period', audio: '08.mp3', duration: 2, stroke: 'single' },
  { id: 'b11', time: '14:00:00', label: '🎒 School Dismissal & Bus Departure', type: 'Departure', audio: '18-School-Close.mp3', duration: 6, stroke: 'grand' }
];

export const AutomaticBellPage = () => {
  const { showToast } = useToast();
  const [schedule, setSchedule] = useState(() => {
    const saved = localStorage.getItem('dmps_bell_schedule');
    return saved ? JSON.parse(saved) : DEFAULT_BELL_SCHEDULE;
  });

  const [currentTime, setCurrentTime] = useState(new Date());
  const [isAutoBellActive, setIsAutoBellActive] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.9);
  const [isRinging, setIsRinging] = useState(false);
  const [currentlyPlayingAudio, setCurrentlyPlayingAudio] = useState(null);
  const [lastRungBell, setLastRungBell] = useState(null);

  // 🔔 Add / Edit Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBell, setEditingBell] = useState(null);
  const [modalForm, setModalForm] = useState({
    label: '',
    time: '08:00:00',
    type: 'Period',
    audio: '01.mp3',
    duration: 3,
    stroke: 'single'
  });

  const audioCtxRef = useRef(null);
  const activeAudioRef = useRef(null);

  // Fallback Web Audio Synthesizer
  const playSynthesizerGong = (durationSeconds = 3, strokeType = 'single') => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtxRef.current = new AudioContext();
    }
    if (!audioCtxRef.current || isMuted) return;

    try {
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();
      const now = ctx.currentTime;
      setIsRinging(true);

      const strikes = strokeType === 'double' ? [0, 1.2] : strokeType === 'grand' ? [0, 1.2, 2.4] : [0];

      strikes.forEach(startTimeOffset => {
        const strikeTime = now + startTimeOffset;
        const freqs = [659.25, 987.77, 1318.51, 2637.02];
        
        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = idx === 0 ? 'sine' : idx === 1 ? 'triangle' : 'sine';
          osc.frequency.setValueAtTime(freq, strikeTime);

          gain.gain.setValueAtTime(0.001, strikeTime);
          gain.gain.linearRampToValueAtTime((volume / (idx + 1)) * 0.8, strikeTime + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, strikeTime + (durationSeconds * 0.8));

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(strikeTime);
          osc.stop(strikeTime + durationSeconds);
        });
      });

      setTimeout(() => {
        setIsRinging(false);
      }, (durationSeconds + 1) * 1000);

    } catch (e) {
      setIsRinging(false);
    }
  };

  // 🔔 High-Fidelity Audio Playback (Actual School MP3 Tracks with Web Audio Fallback)
  const playBellSound = (audioFilename = '01.mp3', durationSeconds = 3, strokeType = 'single') => {
    if (isMuted) return;
    setIsRinging(true);
    setCurrentlyPlayingAudio(audioFilename);

    try {
      if (activeAudioRef.current) {
        activeAudioRef.current.pause();
        activeAudioRef.current.currentTime = 0;
      }

      const audioUrl = `/assets/bell_audio/${audioFilename}`;
      const audio = new Audio(audioUrl);
      activeAudioRef.current = audio;
      audio.volume = volume;

      audio.play().then(() => {
        audio.onended = () => {
          setIsRinging(false);
          setCurrentlyPlayingAudio(null);
        };
      }).catch(err => {
        console.log("Audio file play prevented/failed, using synthesizer gong:", err);
        playSynthesizerGong(durationSeconds, strokeType);
      });
    } catch (e) {
      playSynthesizerGong(durationSeconds, strokeType);
    }
  };

  // Clock Ticker & Auto Bell Trigger
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);

      if (isAutoBellActive) {
        const timeStr = now.toTimeString().split(' ')[0]; // "07:45:00"
        
        const matched = schedule.find(b => b.time === timeStr);
        if (matched && lastRungBell !== matched.id + '_' + timeStr) {
          setLastRungBell(matched.id + '_' + timeStr);
          playBellSound(matched.audio || '01.mp3', matched.duration, matched.stroke);
          showToast(`🔔 BELL RINGING: ${matched.label}!`, 'info');
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [schedule, isAutoBellActive, lastRungBell, volume, isMuted]);

  // Find Next Upcoming Bell
  const getNextBell = () => {
    const nowStr = currentTime.toTimeString().split(' ')[0];
    const upcoming = schedule.filter(b => b.time > nowStr).sort((a, b) => a.time.localeCompare(b.time));
    if (upcoming.length > 0) return upcoming[0];
    return schedule[0]; // Next day's first bell
  };

  const nextBell = getNextBell();

  // Calculate Countdown to Next Bell
  const calculateCountdown = () => {
    if (!nextBell) return '--:--:--';
    const now = currentTime;
    const [hrs, mins, secs] = nextBell.time.split(':').map(Number);
    const target = new Date(now);
    target.setHours(hrs, mins, secs, 0);

    if (target < now) {
      target.setDate(target.getDate() + 1);
    }

    const diffSec = Math.max(0, Math.floor((target - now) / 1000));
    const h = String(Math.floor(diffSec / 3600)).padStart(2, '0');
    const m = String(Math.floor((diffSec % 3600) / 60)).padStart(2, '0');
    const s = String(diffSec % 60).padStart(2, '0');
    return `${h}h ${m}m ${s}s`;
  };

  const handleManualRing = () => {
    playBellSound('01.mp3', 4, 'double');
    showToast('🔔 Manual Test Bell Triggered (Ringing Loud & Clear)!', 'success');
  };

  // ➕ Open Modal to Add New Period
  const handleOpenAddModal = () => {
    setEditingBell(null);
    setModalForm({
      label: '',
      time: '08:00:00',
      type: 'Period',
      audio: '01.mp3',
      duration: 3,
      stroke: 'single'
    });
    setIsModalOpen(true);
  };

  // ✏️ Open Modal to Edit Existing Period
  const handleOpenEditModal = (bell) => {
    setEditingBell(bell);
    setModalForm({
      label: bell.label || '',
      time: bell.time || '08:00:00',
      type: bell.type || 'Period',
      audio: bell.audio || '01.mp3',
      duration: bell.duration || 3,
      stroke: bell.stroke || 'single'
    });
    setIsModalOpen(true);
  };

  // 💾 Save Add / Edit Form
  const handleSaveModal = (e) => {
    e.preventDefault();
    if (!modalForm.label.trim()) {
      showToast('Please enter period / bell event name!', 'error');
      return;
    }

    // Auto format time (if user typed HH:MM, append :00)
    let formattedTime = modalForm.time.trim();
    if (formattedTime.length === 5 && formattedTime.includes(':')) {
      formattedTime = `${formattedTime}:00`;
    }

    if (editingBell) {
      // Update existing bell
      const updated = schedule.map(b => b.id === editingBell.id ? {
        ...b,
        label: modalForm.label.trim(),
        time: formattedTime,
        type: modalForm.type,
        audio: modalForm.audio,
        duration: modalForm.duration,
        stroke: modalForm.stroke
      } : b).sort((a, b) => a.time.localeCompare(b.time));

      setSchedule(updated);
      localStorage.setItem('dmps_bell_schedule', JSON.stringify(updated));
      setIsModalOpen(false);
      setEditingBell(null);
      showToast('✅ Period bell updated successfully!', 'success');
    } else {
      // Add new bell
      const newBell = {
        id: `b_${Date.now()}`,
        label: modalForm.label.trim(),
        time: formattedTime,
        type: modalForm.type,
        audio: modalForm.audio,
        duration: modalForm.duration,
        stroke: modalForm.stroke
      };

      const updated = [...schedule, newBell].sort((a, b) => a.time.localeCompare(b.time));
      setSchedule(updated);
      localStorage.setItem('dmps_bell_schedule', JSON.stringify(updated));
      setIsModalOpen(false);
      showToast('🎉 New period bell added to timetable!', 'success');
    }
  };

  // 🗑️ Delete Period from Schedule
  const handleDeleteBell = (id, label) => {
    if (window.confirm(`Delete "${label}" from automatic bell schedule?`)) {
      const updated = schedule.filter(b => b.id !== id);
      setSchedule(updated);
      localStorage.setItem('dmps_bell_schedule', JSON.stringify(updated));
      showToast(`Deleted "${label}" from bell timetable.`, 'info');
    }
  };

  const handleResetDefault = () => {
    if (window.confirm("Reset bell schedule to DMPS Official Standard Timetable?")) {
      setSchedule(DEFAULT_BELL_SCHEDULE);
      localStorage.setItem('dmps_bell_schedule', JSON.stringify(DEFAULT_BELL_SCHEDULE));
      showToast('Bell timetable reset to default standard.', 'info');
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* 🏛️ Top Header Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3.5">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0 transition-all ${
            isRinging 
              ? 'bg-amber-500 animate-bounce scale-110 shadow-amber-500/50' 
              : isAutoBellActive 
              ? 'bg-indigo-600 shadow-indigo-500/25' 
              : 'bg-slate-400'
          }`}>
            <Bell className={`w-6 h-6 ${isRinging ? 'animate-spin' : ''}`} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border flex items-center gap-1.5 ${
                isAutoBellActive 
                  ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 border-emerald-300' 
                  : 'bg-rose-100 text-rose-800 border-rose-300'
              }`}>
                <span className={`w-2 h-2 rounded-full ${isAutoBellActive ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`}></span>
                {isAutoBellActive ? 'Automatic Bell Active' : 'Automatic Bell Paused'}
              </span>
              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200 hidden sm:inline-block">
                School Station Mode
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-serif mt-1">
              Automatic School Bell & Hardware Station
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Dadheech Memorial Public School • Real-time PA Bell Chimes & Secureye Wi-Fi Push Receiver
            </p>
          </div>
        </div>

        {/* Top Control Buttons */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={handleManualRing}
            className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white rounded-xl text-xs font-black shadow-lg shadow-amber-500/25 flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all"
            title="Immediately rings the school gong chime"
          >
            <Flame className="w-4 h-4 text-white" />
            <span>🔔 Ring Bell Now (Test / Emergency)</span>
          </button>

          <button
            onClick={() => setIsAutoBellActive(!isAutoBellActive)}
            className={`px-3.5 py-2.5 rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all hover:scale-105 ${
              isAutoBellActive 
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300' 
                : 'bg-emerald-600 hover:bg-emerald-700 text-white'
            }`}
          >
            {isAutoBellActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isAutoBellActive ? 'Pause Automatic Bell' : 'Resume Auto Bell'}</span>
          </button>
        </div>
      </div>

      {/* 🕒 BIG DIGITAL CLOCK & NEXT BELL DASHBOARD HERO */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        
        {/* Left: Huge Live School Clock & Bell State */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#0b1e38] via-[#122b4d] to-[#1c3d69] text-white p-6 sm:p-8 rounded-3xl border border-blue-900 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Bell className="w-48 h-48" />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                🏫 Official School Station Clock
              </span>
              <span className="text-xs font-mono font-bold text-blue-200">
                {currentTime.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>

            {/* Massive Digital Time Display */}
            <div className="mt-4 font-mono font-black text-5xl sm:text-7xl tracking-tight text-white flex items-baseline gap-2">
              <span>{currentTime.toLocaleTimeString('en-IN', { hour12: false })}</span>
              <span className="text-xl sm:text-2xl text-amber-400 font-sans font-bold">
                {currentTime.getHours() >= 12 ? 'PM' : 'AM'}
              </span>
            </div>
          </div>

          {/* Current / Next Bell Countdown Banner */}
          <div className="mt-6 pt-5 border-t border-blue-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-blue-300 uppercase tracking-wider block">
                Next Upcoming Bell
              </span>
              <p className="text-base sm:text-lg font-black text-amber-300 font-serif">
                {nextBell?.label || 'School Closed'}
              </p>
              <span className="text-xs text-blue-200 font-mono">
                Scheduled at: <strong>{nextBell?.time}</strong> ({nextBell?.type})
              </span>
            </div>

            <div className="bg-blue-950/60 backdrop-blur-md p-3.5 rounded-2xl border border-blue-800 text-center sm:text-right shrink-0">
              <span className="text-[10px] font-bold text-blue-400 uppercase block">Rings In Exactly</span>
              <p className="text-xl sm:text-2xl font-black text-emerald-400 font-mono mt-0.5">
                {calculateCountdown()}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Audio Volume & Hardware Controls */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-indigo-600" /> PA System Audio Settings
              </h3>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-2 rounded-xl text-xs font-bold ${
                  isMuted ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                }`}
                title="Mute / Unmute Bell"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 flex items-center justify-between mb-1.5">
                  <span>Amplifier Output Volume:</span>
                  <span className="font-mono font-bold text-indigo-600">{Math.round(volume * 100)}%</span>
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="1.0"
                  step="0.05"
                  value={volume}
                  onChange={(e) => { setVolume(parseFloat(e.target.value)); }}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
              </div>

              {/* Real MP3 Tracks Palette */}
              <div className="p-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 space-y-2">
                <div className="flex items-center justify-between text-indigo-950 dark:text-indigo-200 font-bold text-xs">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> Real PA System Bell Chimes (MP3)
                  </span>
                  <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-900 px-2 py-0.5 rounded-full border border-indigo-200">
                    Amplifier Ready 🔌
                  </span>
                </div>
                
                <p className="text-[11px] text-indigo-700 dark:text-indigo-400 leading-relaxed">
                  Connect laptop's 3.5mm Aux jack to the School PA Amplifier. Real school bell audio will play automatically at each scheduled period:
                </p>

                {/* Quick Chime Preview Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 pt-1">
                  {[
                    { label: '🌅 Assembly', file: '16-Assembly.mp3' },
                    { label: '🔔 Period 1', file: '01.mp3' },
                    { label: '🥪 Lunch Break', file: '17-lunch-time.mp3' },
                    { label: '🎒 School Close', file: '18-School-Close.mp3' },
                    { label: '🇮🇳 Marching Song', file: 'Sare-Jahan-Se-Achha.mp3' },
                    { label: '⚡ Short Chime', file: 'T-Short.mp3' }
                  ].map((sfx, idx) => (
                    <button
                      key={idx}
                      onClick={() => playBellSound(sfx.file)}
                      className={`px-2 py-1.5 rounded-xl text-[10px] font-black flex items-center justify-center gap-1 transition-all ${
                        currentlyPlayingAudio === sfx.file
                          ? 'bg-amber-500 text-white shadow-xs animate-pulse'
                          : 'bg-white dark:bg-slate-900 text-indigo-900 dark:text-indigo-200 border border-indigo-200 dark:border-slate-700 hover:bg-indigo-600 hover:text-white'
                      }`}
                    >
                      <Play className="w-2.5 h-2.5 fill-current" /> {sfx.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Biometric Push Status on School Laptop */}
          <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 space-y-1.5">
            <div className="flex items-center justify-between text-emerald-900 dark:text-emerald-300 font-bold text-xs">
              <span className="flex items-center gap-1.5">
                <Fingerprint className="w-4 h-4 text-emerald-600" /> Biometric Wi-Fi Push Receiver
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-200 dark:bg-emerald-900 text-[10px] font-black uppercase">
                Port 5005
              </span>
            </div>
            <p className="text-[11px] text-emerald-800 dark:text-emerald-400">
              When this laptop runs at school, teachers' morning & evening punches are pulled live and synced straight to your ERP.
            </p>
          </div>
        </div>
      </div>

      {/* 📋 TIMETABLE PERIOD BELL SCHEDULE TABLE WITH ADD / EDIT / DELETE CONTROLS */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-black text-slate-900 dark:text-white font-serif">
                Official Bell Timetable (Session 2026-27)
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                {schedule.length} Periods / Bells
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Manage automatic periods, recess breaks, assembly and dismissal bells with instant audio playback.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
            {/* ➕ Add New Period Button */}
            <button
              onClick={handleOpenAddModal}
              className="px-3.5 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-xl text-xs font-black shadow-md shadow-indigo-500/20 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
            >
              <Plus className="w-4 h-4" /> Add Period / Bell
            </button>

            {/* 🔄 Reset Default Times */}
            <button
              onClick={handleResetDefault}
              className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 rounded-xl text-xs font-bold transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5 inline mr-1" /> Reset Default
            </button>
          </div>
        </div>

        {/* Schedule List Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-[10px] uppercase font-black text-slate-400">
                <th className="p-3">#</th>
                <th className="p-3">Period / Event Name</th>
                <th className="p-3">Time (HH:MM:SS)</th>
                <th className="p-3">Category</th>
                <th className="p-3">MP3 Audio Track</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {schedule.map((item, idx) => {
                const isNext = nextBell?.id === item.id;
                const isItemPlaying = currentlyPlayingAudio === item.audio;
                return (
                  <tr
                    key={item.id}
                    className={`hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all ${
                      isNext ? 'bg-amber-50/70 dark:bg-amber-950/20 font-semibold' : ''
                    }`}
                  >
                    <td className="p-3">
                      <span className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center text-[10px] font-mono font-bold">
                        {idx + 1}
                      </span>
                    </td>

                    <td className="p-3 font-bold text-slate-900 dark:text-white">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">
                          {item.label}
                        </span>
                        {isNext && (
                          <span className="px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 text-[9px] font-black uppercase shrink-0">
                            Upcoming
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="p-3 font-mono font-bold text-slate-800 dark:text-slate-200">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono font-bold">
                        {item.time}
                      </span>
                    </td>

                    <td className="p-3">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        item.type === 'Recess'
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : item.type === 'Assembly' || item.type === 'Departure'
                          ? 'bg-purple-100 text-purple-800 border border-purple-300'
                          : item.type === 'Special'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-blue-50 text-blue-700 border border-blue-200'
                      }`}>
                        {item.type || 'Period'}
                      </span>
                    </td>

                    <td className="p-3 font-mono text-slate-500 text-[11px]">
                      <span className="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 w-fit">
                        <Music className="w-3 h-3 text-indigo-500" />
                        {item.audio || '01.mp3'}
                      </span>
                    </td>

                    <td className="p-3 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {/* 🔊 Play Track */}
                        <button
                          onClick={() => playBellSound(item.audio || '01.mp3', item.duration, item.stroke)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                            isItemPlaying
                              ? 'bg-amber-500 text-white animate-pulse'
                              : 'bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-indigo-950'
                          }`}
                          title="Test audio chime"
                        >
                          {isItemPlaying ? '🔊 Playing...' : '🔊 Play'}
                        </button>

                        {/* ✏️ Edit Bell */}
                        <button
                          onClick={() => handleOpenEditModal(item)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-slate-800 dark:text-slate-400 transition-colors"
                          title="Edit this period time & audio"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>

                        {/* 🗑️ Delete Bell */}
                        <button
                          onClick={() => handleDeleteBell(item.id, item.label)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                          title="Delete this period from schedule"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✍️ MODAL: ADD / EDIT PERIOD BELL DIALOG */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 space-y-5 animate-in zoom-in-95">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-black text-slate-900 dark:text-white">
                    {editingBell ? 'Edit Period Bell Timing' : 'Add New Period / Bell Event'}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {editingBell ? 'Update period label, time, and assigned audio track' : 'Set up a new automatic bell in the school timetable'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveModal} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Period / Event Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Period 1 (Mathematics) or Zero Period Assembly"
                  value={modalForm.label}
                  onChange={(e) => setModalForm({ ...modalForm, label: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Scheduled Time (24h: HH:MM:SS) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="08:15:00"
                    value={modalForm.time}
                    onChange={(e) => setModalForm({ ...modalForm, time: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-mono font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Event Category
                  </label>
                  <select
                    value={modalForm.type}
                    onChange={(e) => setModalForm({ ...modalForm, type: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium cursor-pointer"
                  >
                    <option value="Period">🔔 Standard Period</option>
                    <option value="Assembly">🌅 Morning Assembly & Prayer</option>
                    <option value="Recess">🥪 Lunch Break / Recess</option>
                    <option value="Departure">🎒 School Dismissal / Departure</option>
                    <option value="Special">⚡ Special Activity / Warning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Assigned MP3 Bell Audio Track
                </label>
                <div className="flex items-center gap-2">
                  <select
                    value={modalForm.audio}
                    onChange={(e) => setModalForm({ ...modalForm, audio: e.target.value })}
                    className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium cursor-pointer"
                  >
                    {AUDIO_TRACKS.map(track => (
                      <option key={track.id} value={track.id}>
                        {track.label}
                      </option>
                    ))}
                  </select>

                  <button
                    type="button"
                    onClick={() => playBellSound(modalForm.audio)}
                    className="px-3 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 rounded-xl text-xs font-bold flex items-center gap-1 border border-indigo-200 dark:border-indigo-800 shrink-0"
                    title="Preview selected sound"
                  >
                    <Play className="w-3 h-3 fill-current" /> Preview
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black flex items-center gap-1.5 shadow-md shadow-indigo-500/20"
                >
                  <Save className="w-4 h-4" /> {editingBell ? 'Save Changes' : 'Add Period Bell'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default AutomaticBellPage;
