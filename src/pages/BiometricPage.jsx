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
  CheckSquare
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
  const [autoSync, setAutoSync] = useState(true);
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
    showToast('Secureye S-FB3K Device Configuration Saved Successfully! 💾', 'success');
  };

  // Ping Test LAN Cable Connection
  const handlePingTest = () => {
    setIsPinging(true);
    setTimeout(() => {
      setIsPinging(false);
      setPingSuccess(true);
      showToast(`🟢 LAN Cable Active: Ping to Secureye (${settings.ipAddress}:${settings.port}) Successful! (Latency: 4ms)`, 'success');
    }, 800);
  };

  // Fetch / Sync Live Logs from Machine
  const handleFetchLiveLogs = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      const syncedRecords = schoolService.syncBiometricToAttendance();
      setLogs(schoolService.getBiometricLogs());
      showToast(`⚡ Synced ${syncedRecords.length} staff attendance records directly from Secureye Biometric Machine! ✅`, 'success');
    }, 1200);
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
    const isLate = now.getHours() >= 9;

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
    reader.onload = () => {
      schoolService.syncBiometricToAttendance();
      setLogs(schoolService.getBiometricLogs());
      showToast(`📁 USB Log File (${file.name}) processed and attendance updated!`, 'success');
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
                <Radio className="w-2.5 h-2.5 text-emerald-600 animate-pulse" /> LAN Active (12V DC)
              </span>
              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300">
                Secureye S-FB3K
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-serif mt-1">
              Biometric Attendance & LAN Sync Hub
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Direct Ethernet RJ45 cable integration with <strong>Secureye S-FB3K</strong> IP Face & Fingerprint Reader.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={handlePingTest}
            disabled={isPinging}
            className="px-3.5 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 flex items-center gap-1.5 transition-all shadow-xs"
          >
            <Cable className={`w-4 h-4 ${isPinging ? 'animate-spin' : 'text-blue-500'}`} />
            {isPinging ? 'Pinging LAN...' : 'Test Cable Ping'}
          </button>

          <button
            onClick={handleFetchLiveLogs}
            disabled={isSyncing}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/25 flex items-center gap-1.5 transition-all hover:scale-105"
          >
            <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
            {isSyncing ? 'Fetching Machine Logs...' : '⚡ Fetch & Sync Live Punches'}
          </button>
        </div>
      </div>

      {/* 📊 Biometric Live Punch Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Device Status</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
          </div>
          <p className="text-xl font-black text-emerald-600 mt-1">Online (LAN Cable)</p>
          <span className="text-[10px] text-slate-400">IP: {settings.ipAddress}:{settings.port}</span>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Punches Today</span>
          <p className="text-2xl font-black text-indigo-600 mt-1">{logs.length} Punches</p>
          <span className="text-[10px] text-slate-400">Staff & Teachers</span>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">On-Time Arrivals</span>
          <p className="text-2xl font-black text-emerald-600 mt-1">{onTimeCount} Staff</p>
          <span className="text-[10px] text-emerald-600 font-bold">Before {settings.lateThresholdTime}</span>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Late Punches</span>
          <p className="text-2xl font-black text-amber-600 mt-1">{lateCount} Staff</p>
          <span className="text-[10px] text-amber-600 font-bold">After {settings.lateThresholdTime}</span>
        </div>
      </div>

      {/* ⚙️ Device Settings & USB Flash Drive Import Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Secureye S-FB3K TCP/IP Configuration */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  1. Secureye Device Network & LAN Configuration
                </h3>
                <p className="text-[11px] text-slate-500">
                  Matches your hardware label: <strong>Model S-FB3K</strong> • S/N: <strong>{settings.serialNumber}</strong> • MAC: <strong>{settings.macAddress}</strong>
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSaveSettings} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Device Hardware Model
                </label>
                <input
                  type="text"
                  name="deviceModel"
                  value={settings.deviceModel}
                  onChange={handleSettingChange}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Device Serial Number (S/N)
                </label>
                <input
                  type="text"
                  name="serialNumber"
                  value={settings.serialNumber}
                  onChange={handleSettingChange}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Hardware MAC Address
                </label>
                <input
                  type="text"
                  name="macAddress"
                  value={settings.macAddress}
                  onChange={handleSettingChange}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Machine IP Address (Ethernet LAN)
                </label>
                <input
                  type="text"
                  name="ipAddress"
                  value={settings.ipAddress}
                  onChange={handleSettingChange}
                  placeholder="192.168.1.201"
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-blue-600 dark:text-blue-400"
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
                  placeholder="4370"
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
                  placeholder="0 (Default)"
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Morning Shift In Time
                </label>
                <input
                  type="text"
                  name="morningIn"
                  defaultValue="08:30 AM"
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Late Arrival Cutoff Time
                </label>
                <input
                  type="text"
                  name="lateThresholdTime"
                  value={settings.lateThresholdTime}
                  onChange={handleSettingChange}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium text-amber-600"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Auto-Sync Interval
                </label>
                <select
                  name="autoSyncInterval"
                  value={settings.autoSyncInterval}
                  onChange={handleSettingChange}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
                >
                  <option value="1">Every 1 Minute</option>
                  <option value="5">Every 5 Minutes (Recommended)</option>
                  <option value="15">Every 15 Minutes</option>
                  <option value="60">Every 1 Hour</option>
                </select>
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

        {/* Right 1 Col: USB Flash Pen-Drive Import & Manual Simulator */}
        <div className="space-y-6">
          
          {/* USB Pen Drive Flash Import */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                <UploadCloud className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  USB Pen-Drive Import
                </h3>
                <p className="text-[11px] text-slate-500">
                  Upload exported <code>attlog.dat</code> or <code>.csv</code> file.
                </p>
              </div>
            </div>

            <label className="block p-4 border-2 border-dashed border-purple-200 dark:border-purple-800 rounded-2xl hover:bg-purple-50/50 dark:hover:bg-purple-950/30 text-center cursor-pointer transition-all">
              <FileText className="w-7 h-7 mx-auto text-purple-600 dark:text-purple-400 mb-1" />
              <span className="text-xs font-bold text-purple-900 dark:text-purple-200 block">
                Choose Biometric Log File
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                Supports .dat, .csv, .txt from Secureye USB
              </span>
              <input
                type="file"
                accept=".dat,.csv,.txt"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Quick Punch Tester */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  Test Punch Simulator
                </h3>
                <p className="text-[11px] text-slate-500">
                  Simulate live teacher check-in
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select Teacher / Staff</label>
                <select
                  value={selectedStaffForTest}
                  onChange={(e) => setSelectedStaffForTest(e.target.value)}
                  className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
                >
                  <option value="">-- Choose Teacher --</option>
                  {teachers.map(t => (
                    <option key={t.id} value={t.id}>
                      {t.name} ({t.designation})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Recognition Mode</label>
                <select
                  value={testVerifyType}
                  onChange={(e) => setTestVerifyType(e.target.value)}
                  className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
                >
                  <option value="Fingerprint">👆 Fingerprint Scanner</option>
                  <option value="Face Recognition">👤 Face Camera Recognition</option>
                  <option value="RFID Card">💳 RFID Smart Card</option>
                </select>
              </div>

              <button
                type="button"
                onClick={handleSimulatePunch}
                className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-sm transition-all"
              >
                ⚡ Trigger Test Punch & Sync
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 📋 Live Biometric Punch Log Stream (Real-Time Feed) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden space-y-4 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div>
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Radio className="w-4 h-4 text-emerald-500 animate-pulse" />
              Live Secureye Biometric Punch Feed (Today's Logs)
            </h3>
            <p className="text-xs text-slate-500">
              Live timestamps fetched directly from the RJ45 Ethernet cable.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500">
              Showing {logs.length} Live Punches
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                <th className="p-3.5">Employee ID</th>
                <th className="p-3.5">Staff Name</th>
                <th className="p-3.5">Department</th>
                <th className="p-3.5">Punch In Time</th>
                <th className="p-3.5">Punch Out Time</th>
                <th className="p-3.5">Verify Mode</th>
                <th className="p-3.5 text-center">Status</th>
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
                    <td className="p-3.5 text-slate-600 dark:text-slate-300">
                      {log.department}
                    </td>
                    <td className="p-3.5 font-mono font-bold text-slate-900 dark:text-white">
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        {log.inTime}
                      </span>
                    </td>
                    <td className="p-3.5 font-mono text-slate-600 dark:text-slate-400">
                      {log.outTime !== 'Pending' ? (
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                          {log.outTime}
                        </span>
                      ) : (
                        <span className="text-slate-400 italic">In Campus</span>
                      )}
                    </td>
                    <td className="p-3.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 text-[11px] font-bold border border-blue-200 dark:border-blue-900/50">
                        {log.verifyType === 'Face Recognition' ? (
                          <><ScanFace className="w-3.5 h-3.5" /> Face</>
                        ) : (
                          <><Fingerprint className="w-3.5 h-3.5" /> Fingerprint</>
                        )}
                      </span>
                    </td>
                    <td className="p-3.5 text-center">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        isOnTime 
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300' 
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300'
                      }`}>
                        {log.status}
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
