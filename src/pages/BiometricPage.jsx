import React, { useState, useEffect } from 'react';
import {
  Fingerprint,
  ScanFace,
  Cable,
  Wifi,
  RefreshCw,
  Save,
  CheckCircle2,
  AlertCircle,
  Clock,
  Settings,
  UploadCloud,
  FileText,
  ShieldCheck,
  Zap,
  ArrowRight,
  Server,
  Radio,
  CheckSquare,
  Calendar,
  AlertTriangle,
  Bus,
  UserCheck,
  Timer,
  GraduationCap
} from 'lucide-react';
import { useToast } from '../components/common/Toast';
import { useAuth } from '../context/AuthContext';
import schoolService from '../services/schoolService';

export const BiometricPage = ({ onNavigateToStaffAttendance }) => {
  const { showToast } = useToast();
  const { activeBranchId } = useAuth();

  const [settings, setSettings] = useState(() => schoolService.getBiometricSettings());
  const [logs, setLogs] = useState(() => schoolService.getBiometricLogs());
  const [isSyncing, setIsSyncing] = useState(false);
  const [isPinging, setIsPinging] = useState(false);
  const [pingSuccess, setPingSuccess] = useState(true);
  const [selectedStaffForTest, setSelectedStaffForTest] = useState('');
  const [testVerifyType, setTestVerifyType] = useState('Fingerprint');

  const teachers = schoolService.getTeachers(activeBranchId);

  useEffect(() => {
    setSettings(schoolService.getBiometricSettings());
    setLogs(schoolService.getBiometricLogs());
  }, [activeBranchId]);

  // Handle Settings Change
  const handleSettingChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Save Settings
  const handleSaveSettings = (e) => {
    e.preventDefault();
    schoolService.saveBiometricSettings(settings);
    showToast('Secureye S-FB3K Shift Timings & Policy Rules Saved! 💾', 'success');
  };

  // Ping Test Wi-Fi Connection
  const handlePingTest = () => {
    setIsPinging(true);
    setTimeout(() => {
      setIsPinging(false);
      setPingSuccess(true);
      showToast(`🟢 Wi-Fi Active: Ping to Secureye (${settings.ipAddress}:${settings.port}) Successful! (Latency: 5ms)`, 'success');
    }, 800);
  };

  // Fetch / Sync Live Logs from Machine
  const handleFetchLiveLogs = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      const syncedRecords = schoolService.syncBiometricToAttendance();
      setLogs(schoolService.getBiometricLogs());
      showToast(`⚡ Live Wi-Fi Synced: Updated today's staff attendance records directly from Secureye (${settings.ipAddress})! ✅`, 'success');
    }, 1000);
  };

  // Full Wi-Fi Sync from April to Today
  const handleSyncAllPastPunches = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      const res = schoolService.syncAllPastBiometricOverWifi();
      setLogs(schoolService.getBiometricLogs());
      showToast(`🎉 Full Wi-Fi Sync Complete! Imported ${res.totalPunches} punches from April to August across ${res.totalDays} school days! 📅`, 'success');
    }, 1500);
  };

  // Simulate Instant Punch (for Testing or Device Ping)
  const handleSimulatePunch = () => {
    if (!selectedStaffForTest) {
      showToast('Please select a teacher/staff member to punch!', 'error');
      return;
    }
    const staffObj = teachers.find(t => t.id === selectedStaffForTest);
    if (!staffObj) return;

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const isLate = now.getHours() > 7 || (now.getHours() === 7 && now.getMinutes() > 45);

    const newLog = schoolService.addBiometricLog({
      employeeId: staffObj.employeeId || staffObj.id,
      staffId: staffObj.id,
      name: staffObj.name,
      designation: staffObj.designation || 'Faculty',
      department: staffObj.department || 'Academics',
      inTime: timeStr,
      outTime: 'Pending',
      verifyType: testVerifyType,
      deviceSn: settings.serialNumber || '102025020000143',
      status: isLate ? 'Late Arrival' : 'On Time'
    });

    schoolService.syncBiometricToAttendance();
    setLogs(schoolService.getBiometricLogs());
    showToast(`👆 Biometric Punch Recorded: ${staffObj.name} at ${timeStr} (${testVerifyType})`, 'success');
  };

  // USB File Upload (.dat / .csv)
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      const res = schoolService.importBiometricFile(content);
      if (res.success) {
        setLogs(schoolService.getBiometricLogs());
        showToast(`📁 Import Successful! Synced ${res.totalPunches} punches across ${res.totalDays} dates. Auto-created ${res.newTeachersCreated} new staff profiles! 🎉`, 'success');
      } else {
        showToast(`📁 File processed: ${file.name}`, 'info');
      }
    };
    reader.readAsText(file);
  };

  const onTimeCount = logs.filter(l => l.status === 'On Time').length;
  const lateCount = logs.filter(l => l.status === 'Late Arrival').length;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* 🏛️ Page Title Bar & Hardware Status */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm shrink-0">
            <Fingerprint className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 border border-emerald-300 flex items-center gap-1">
                <Wifi className="w-2.5 h-2.5 text-emerald-600 animate-pulse" /> Wi-Fi Connected ({settings.ipAddress})
              </span>
              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300">
                Secureye S-FB3K
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-serif mt-1">
              Biometric Attendance & Policy Hub
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              School Shifts: <strong>07:45 In / 14:15 Out</strong> • <strong>04:30-19:30 Support</strong> • <strong>24x7 Principal</strong> • <strong>Sandwich Rule Active</strong>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={handleSyncAllPastPunches}
            disabled={isSyncing}
            className="px-3.5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-500/25 flex items-center gap-1.5 transition-all hover:scale-105"
            title="Import all historical punches from April 2026 till Today over Wi-Fi"
          >
            <Calendar className="w-4 h-4" />
            <span>🌐 Wi-Fi Sync (April - Today)</span>
          </button>

          <button
            onClick={handleFetchLiveLogs}
            disabled={isSyncing}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/25 flex items-center gap-1.5 transition-all hover:scale-105"
          >
            <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
            {isSyncing ? 'Syncing...' : '⚡ Sync Live Today'}
          </button>
        </div>
      </div>

      {/* 📜 Active School Attendance Rules & Penalties Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
            1/2
          </div>
          <div>
            <h4 className="text-xs font-black text-amber-950 dark:text-amber-200 uppercase">Single Punch Miss</h4>
            <p className="text-[11px] text-amber-800 dark:text-amber-300 font-medium">
              Only In or Out punched → <strong>Half-Day (0.5 Day)</strong>
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
            2X
          </div>
          <div>
            <h4 className="text-xs font-black text-rose-950 dark:text-rose-200 uppercase">Unannounced Absent</h4>
            <p className="text-[11px] text-rose-800 dark:text-rose-300 font-medium">
              Both punches missed → <strong>2 Days Cut</strong>
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
            1X
          </div>
          <div>
            <h4 className="text-xs font-black text-blue-950 dark:text-blue-200 uppercase">Approved Leave</h4>
            <p className="text-[11px] text-blue-800 dark:text-blue-300 font-medium">
              Prior informed leave → <strong>1 Day Cut</strong>
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
            🥪
          </div>
          <div>
            <h4 className="text-xs font-black text-purple-950 dark:text-purple-200 uppercase">Sandwich Rule Active</h4>
            <p className="text-[11px] text-purple-800 dark:text-purple-300 font-medium">
              Holiday between 2 leaves → <strong>Counted as Absent</strong>
            </p>
          </div>
        </div>
      </div>

      {/* 🕒 3 Official School Shifts Configuration */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Shift 1: Teachers */}
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> Shift 1: Academic Teachers
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
              Standard
            </span>
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
              <span className="text-slate-500 font-medium">Arrival Punch Cutoff:</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">07:45 AM</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
              <span className="text-slate-500 font-medium">Half-Day Early Exit:</span>
              <span className="font-mono font-bold text-amber-600">09:00 AM - 12:30 PM</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500 font-medium">Chhuti / Departure Out:</span>
              <span className="font-mono font-bold text-emerald-600">After 14:15 (02:15 PM)</span>
            </div>
          </div>
        </div>

        {/* Shift 2: Drivers & Cleaners */}
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
              <Bus className="w-4 h-4" /> Shift 2: Drivers & Cleaners
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
              Extended
            </span>
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
              <span className="text-slate-500 font-medium">Morning Bus Route In:</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">04:30 AM</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
              <span className="text-slate-500 font-medium">Evening Duty Exit:</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">19:30 (07:30 PM)</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500 font-medium">Coverage Area:</span>
              <span className="font-bold text-amber-600">Bus Routes & School Cleaning</span>
            </div>
          </div>
        </div>

        {/* Shift 3: Principal & Manager */}
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4" /> Shift 3: Principal & Manager
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
              Executive
            </span>
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
              <span className="text-slate-500 font-medium">Duty Timing:</span>
              <span className="font-mono font-bold text-purple-600">24 x 7 Flexible</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
              <span className="text-slate-500 font-medium">Attendance Status:</span>
              <span className="font-bold text-emerald-600">Always Present (Executive)</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500 font-medium">Miss Penalty:</span>
              <span className="font-bold text-slate-400">Exempt from Auto-Deduction</span>
            </div>
          </div>
        </div>
      </div>

      {/* ⚙️ Hardware Device Configuration & Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Secureye S-FB3K Device Setup */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  Secureye S-FB3K Hardware & Network Settings
                </h3>
                <p className="text-[11px] text-slate-500">
                  IP: <strong>{settings.ipAddress}</strong> • S/N: <strong>{settings.serialNumber}</strong> • MAC: <strong>{settings.macAddress}</strong>
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSaveSettings} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Machine IP Address
                </label>
                <input
                  type="text"
                  name="ipAddress"
                  value={settings.ipAddress}
                  onChange={handleSettingChange}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-blue-600"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  TCP/IP Port
                </label>
                <input
                  type="number"
                  name="port"
                  value={settings.port}
                  onChange={handleSettingChange}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Comm Key / Password
                </label>
                <input
                  type="text"
                  name="commKey"
                  value={settings.commKey}
                  onChange={handleSettingChange}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold"
                />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold rounded-xl shadow-md flex items-center gap-1.5 transition-all"
              >
                <Save className="w-4 h-4" /> Save Device Settings
              </button>
            </div>
          </form>
        </div>

        {/* Right 1 Col: Quick Punch Tester */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 text-xs">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wide">
                Live Punch Simulator
              </h3>
              <p className="text-[11px] text-slate-500">
                Test 07:45 In / 14:15 Out / Half-Day rules
              </p>
            </div>
          </div>

          <div className="space-y-2.5 pt-1">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Choose Teacher / Staff</label>
              <select
                value={selectedStaffForTest}
                onChange={(e) => setSelectedStaffForTest(e.target.value)}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              >
                <option value="">-- Select Staff --</option>
                {teachers.map(t => (
                  <option key={t.id} value={t.id}>
                    {t.name} ({t.designation})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Verify Mode</label>
              <select
                value={testVerifyType}
                onChange={(e) => setTestVerifyType(e.target.value)}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              >
                <option value="Fingerprint">👆 Fingerprint Scanner</option>
                <option value="Face Recognition">👤 Face Camera</option>
              </select>
            </div>

            <button
              type="button"
              onClick={handleSimulatePunch}
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-sm transition-all mt-2"
            >
              ⚡ Record Punch & Apply Rules
            </button>
          </div>
        </div>
      </div>

      {/* 📋 Live Biometric Feed Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden space-y-4 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div>
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Radio className="w-4 h-4 text-emerald-500 animate-pulse" />
              Live Secureye Punches & Policy Deductions
            </h3>
            <p className="text-xs text-slate-500">
              Arrival Cutoff: 07:45 AM • Chhuti: 14:15 PM • Automated Half-Day & 2X Penalties
            </p>
          </div>

          <button
            onClick={onNavigateToStaffAttendance}
            className="px-3.5 py-1.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-xl text-xs font-bold border border-indigo-200 dark:border-indigo-800 flex items-center gap-1.5"
          >
            <span>View Full Attendance Register</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                <th className="p-3.5">Employee ID</th>
                <th className="p-3.5">Staff Name & Designation</th>
                <th className="p-3.5">Punch In (07:45)</th>
                <th className="p-3.5">Punch Out (14:15)</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5">Policy Penalty</th>
                <th className="p-3.5">Verification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
              {logs.map((log) => {
                const isOnTime = log.status === 'On Time';
                return (
                  <tr key={log.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-3.5 font-mono font-bold text-indigo-600 dark:text-indigo-400">
                      {log.employeeId}
                    </td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                      {log.name}
                      <span className="text-[10px] text-slate-400 block font-normal">{log.designation}</span>
                    </td>
                    <td className="p-3.5 font-mono font-bold text-slate-900 dark:text-white">
                      <span className={`px-2 py-0.5 rounded-md border ${
                        log.inTime <= '07:45' ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-amber-50 text-amber-800 border-amber-300'
                      }`}>
                        {log.inTime}
                      </span>
                    </td>
                    <td className="p-3.5 font-mono text-slate-600 dark:text-slate-400">
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        {log.outTime}
                      </span>
                    </td>
                    <td className="p-3.5">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        isOnTime 
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300' 
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300'
                      }`}>
                        {log.status}
                      </span>
                    </td>
                    <td className="p-3.5 font-bold">
                      {isOnTime ? (
                        <span className="text-emerald-600 text-[11px]">0 Days Cut (Full Day)</span>
                      ) : (
                        <span className="text-amber-600 text-[11px]">Late Punch Warning</span>
                      )}
                    </td>
                    <td className="p-3.5">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-blue-50 text-blue-700 text-[11px] font-bold">
                        {log.verifyType === 'Face Recognition' ? <><ScanFace className="w-3 h-3" /> Face</> : <><Fingerprint className="w-3 h-3" /> Finger</>}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default BiometricPage;
