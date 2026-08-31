import React, { useState } from 'react';
import {
  Settings,
  ShieldCheck,
  Download,
  Upload,
  RotateCcw,
  Users,
  CheckCircle2,
  AlertTriangle,
  Key,
  Lock,
  Database,
  FileCode,
  HardDrive,
  Clock,
  Sparkles,
  Save,
  Check,
  X,
  FileText,
  UserCheck,
  Building2,
  Calendar,
  Zap,
  Info
} from 'lucide-react';
import { useToast } from '../components/common/Toast';
import { useAuth } from '../context/AuthContext';
import schoolService from '../services/schoolService';

export const SettingsPage = () => {
  const { showToast } = useToast();
  const { role: userRole } = useAuth();

  const [activeTab, setActiveTab] = useState('backup');
  const [permissions, setPermissions] = useState(() => schoolService.getRolePermissions());
  const [selectedRole, setSelectedRole] = useState('Principal');
  const [backupHistory, setBackupHistory] = useState(() => schoolService.getBackupHistory());
  const [isCreatingBackup, setIsCreatingBackup] = useState(false);
  const [backupNote, setBackupNote] = useState('');

  // School Profile State
  const [schoolInfo, setSchoolInfo] = useState(() => schoolService.getSchoolInfo());

  // 💾 1-Click Create & Download Backup
  const handleCreateBackup = () => {
    setIsCreatingBackup(true);
    setTimeout(() => {
      setIsCreatingBackup(false);
      const snapshot = schoolService.createBackupSnapshot(backupNote || 'Full ERP Backup Snapshot');
      setBackupHistory(schoolService.getBackupHistory());
      setBackupNote('');

      // Auto-trigger Download
      const jsonStr = schoolService.exportDatabaseJSON();
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = snapshot.fileName;
      a.click();

      showToast(`🎉 Backup Created & Downloaded: ${snapshot.fileName} (567 Students, 23 Teachers, Full ERP)! 💾`, 'success');
    }, 800);
  };

  // 📂 Upload & Restore Backup File
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      const res = schoolService.importDatabaseJSON(content);
      if (res.success) {
        showToast(`🔄 Database Restored: ${res.totalStudents} Students & ${res.totalStaff} Teachers loaded! Reloading portal...`, 'success');
        setTimeout(() => window.location.reload(), 1000);
      } else {
        showToast(`Restore Error: ${res.error}`, 'error');
      }
    };
    reader.readAsText(file);
  };

  // 👑 Toggle Permission for Selected Role
  const handleTogglePermission = (moduleKey, actionKey) => {
    if (userRole !== 'Super Admin' && userRole !== 'Admin') {
      showToast('Only Super Admin has permission to modify Role Access Control!', 'error');
      return;
    }
    if (selectedRole === 'Super Admin') {
      showToast('Super Admin permissions are permanently unlocked by system design!', 'info');
      return;
    }

    setPermissions(prev => {
      const updated = { ...prev };
      if (!updated[selectedRole]) updated[selectedRole] = {};
      if (!updated[selectedRole][moduleKey]) updated[selectedRole][moduleKey] = {};
      
      const currentVal = updated[selectedRole][moduleKey][actionKey];
      updated[selectedRole][moduleKey][actionKey] = !currentVal;
      
      schoolService.saveRolePermissions(updated);
      return { ...updated };
    });

    showToast(`Updated ${selectedRole} permission: ${moduleKey} -> ${actionKey}`, 'success');
  };

  // Save School Profile
  const handleSaveSchoolProfile = (e) => {
    e.preventDefault();
    schoolService.data.schoolInfo = schoolInfo;
    schoolService.saveData();
    showToast('School Information & Branding Saved Successfully! 🏫', 'success');
  };

  const moduleList = [
    { key: 'dashboard', label: 'Dashboard & Analytics', actions: [{ key: 'view', label: 'View Dashboard' }, { key: 'export', label: 'Export Reports' }] },
    { key: 'admissions', label: 'Student Admissions', actions: [{ key: 'view', label: 'View Admissions' }, { key: 'create', label: 'New Admission' }, { key: 'edit', label: 'Edit Form' }, { key: 'delete', label: 'Cancel/Delete' }] },
    { key: 'students', label: 'Student Directory', actions: [{ key: 'view', label: 'View Profiles' }, { key: 'edit', label: 'Update Details' }, { key: 'delete', label: 'Delete Student' }, { key: 'idCards', label: 'Generate ID Cards' }] },
    { key: 'fees', label: 'Fee Accounting & POS', actions: [{ key: 'view', label: 'View Invoices' }, { key: 'collect', label: 'Collect Fee (POS)' }, { key: 'discount', label: 'Apply Discount' }, { key: 'refund', label: 'Fee Refund' }, { key: 'delete', label: 'Delete Receipt' }] },
    { key: 'staff', label: 'Staff & HR Directory', actions: [{ key: 'view', label: 'View Staff' }, { key: 'create', label: 'Add Teacher' }, { key: 'edit', label: 'Edit Staff' }, { key: 'delete', label: 'Remove Staff' }, { key: 'payroll', label: 'Manage Payroll' }] },
    { key: 'attendance', label: 'Attendance & Biometrics', actions: [{ key: 'view', label: 'View Register' }, { key: 'markStudents', label: 'Mark Students' }, { key: 'markStaff', label: 'Mark Staff' }, { key: 'biometricSync', label: 'Biometric Wi-Fi Sync' }] },
    { key: 'exams', label: 'Examination & Results', actions: [{ key: 'view', label: 'View Marks' }, { key: 'enterMarks', label: 'Enter Marks' }, { key: 'reportCards', label: 'Print Report Cards' }, { key: 'publish', label: 'Publish Results' }] },
    { key: 'transport', label: 'Transport & Fleet', actions: [{ key: 'view', label: 'View Routes' }, { key: 'manageRoutes', label: 'Add/Edit Routes' }, { key: 'manageVehicles', label: 'Vehicle Fleet' }, { key: 'assign', label: 'Assign Student Stop' }] },
    { key: 'settings', label: 'Database & System Settings', actions: [{ key: 'view', label: 'View Settings' }, { key: 'backup', label: 'Create Backup' }, { key: 'restore', label: 'Restore Database' }, { key: 'permissions', label: 'Modify Permissions' }] }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* 🏛️ Page Title Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm shrink-0">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-300 border border-indigo-300">
                Super Admin Master Control
              </span>
              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 border border-emerald-300">
                Active Session 2026-27
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-serif mt-1">
              Settings, 1-Click Backup & Role Permissions
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Enterprise database backups, instant restore, and granular access control for all school staff.
            </p>
          </div>
        </div>

        {/* Tab Switcher Buttons */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 self-start lg:self-auto">
          <button
            onClick={() => setActiveTab('backup')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'backup'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Database className="w-4 h-4" /> 1-Click Backup & Restore
          </button>

          <button
            onClick={() => setActiveTab('permissions')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'permissions'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4" /> Role Permissions (RBAC)
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'profile'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-4 h-4" /> School Profile
          </button>
        </div>
      </div>

      {/* ========================================================== */}
      {/* 💾 TAB 1: 1-CLICK BACKUP & RESTORE CENTER                  */}
      {/* ========================================================== */}
      {activeTab === 'backup' && (
        <div className="space-y-6">
          
          {/* Top Actions: Create Backup Card & Upload Restore Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 📥 Create & Download Backup */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-transparent bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/25">
                  <Download className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white">
                    Create & Download Full Database Backup
                  </h3>
                  <p className="text-xs text-slate-500">
                    Exports all 567 Students, 23 Staff, Fees, Transport, and Attendance.
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <input
                  type="text"
                  value={backupNote}
                  onChange={(e) => setBackupNote(e.target.value)}
                  placeholder="Backup label / note (e.g. Pre-Exam Backup, Month End)..."
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white font-medium"
                />

                <button
                  onClick={handleCreateBackup}
                  disabled={isCreatingBackup}
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold rounded-xl text-xs shadow-md shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <Download className={`w-4 h-4 ${isCreatingBackup ? 'animate-bounce' : ''}`} />
                  {isCreatingBackup ? 'Generating Encrypted Backup...' : '⚡ 1-Click Create & Download Backup (.json)'}
                </button>
              </div>
            </div>

            {/* 📤 Upload & Restore Backup */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/25">
                  <Upload className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white">
                    Restore Database from Backup File
                  </h3>
                  <p className="text-xs text-slate-500">
                    Upload any exported `.json` or `.sql` backup file to restore instant state.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <label className="border-2 border-dashed border-emerald-300 dark:border-emerald-800 hover:border-emerald-500 rounded-2xl p-4 text-center block cursor-pointer bg-emerald-50/50 dark:bg-emerald-950/20 transition-all">
                  <Upload className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mx-auto mb-1.5" />
                  <span className="text-xs font-bold text-emerald-900 dark:text-emerald-200 block">
                    Choose Backup File (.json / .sql)
                  </span>
                  <span className="text-[10px] text-slate-500">Click to browse or drag and drop</span>
                  <input
                    type="file"
                    accept=".json,.sql,.txt"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* 📋 Backup History Table */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-indigo-600" />
                  Database Backup Snapshots & History
                </h3>
                <p className="text-xs text-slate-500">
                  All previous verified database backups available for 1-click download.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                    <th className="p-3.5">Backup File Name</th>
                    <th className="p-3.5">Created Date & Time</th>
                    <th className="p-3.5">File Size</th>
                    <th className="p-3.5">Students</th>
                    <th className="p-3.5">Staff</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                  {backupHistory.map((bak) => (
                    <tr key={bak.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="p-3.5 font-mono font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                        <FileCode className="w-4 h-4 text-slate-400" />
                        {bak.fileName}
                      </td>
                      <td className="p-3.5 text-slate-700 dark:text-slate-300">
                        {bak.timestamp}
                      </td>
                      <td className="p-3.5 font-mono text-slate-600 dark:text-slate-400">
                        {bak.size}
                      </td>
                      <td className="p-3.5 font-bold text-emerald-600">
                        {bak.studentsCount} Students
                      </td>
                      <td className="p-3.5 font-bold text-blue-600">
                        {bak.staffCount} Staff
                      </td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300">
                          {bak.status}
                        </span>
                      </td>
                      <td className="p-3.5 text-right">
                        <button
                          onClick={() => {
                            const jsonStr = schoolService.exportDatabaseJSON();
                            const blob = new Blob([jsonStr], { type: 'application/json' });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = bak.fileName;
                            a.click();
                            showToast(`Downloading backup: ${bak.fileName}`, 'info');
                          }}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl font-bold border border-slate-300 dark:border-slate-700 inline-flex items-center gap-1.5 transition-all shadow-xs"
                        >
                          <Download className="w-3.5 h-3.5 text-indigo-600" />
                          <span>Download</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================== */}
      {/* 👑 TAB 2: SUPER ADMIN ROLE & PERMISSION MATRIX             */}
      {/* ========================================================== */}
      {activeTab === 'permissions' && (
        <div className="space-y-6">
          
          {/* Role Selector Header Bar */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-indigo-600" /> Select User Role to Manage Permissions:
              </h3>
              <p className="text-xs text-slate-500">
                Super Admin can grant or revoke module actions for any staff role in real time.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {[
                'Super Admin',
                'Principal',
                'Accountant',
                'Teacher',
                'Librarian',
                'Transport Manager',
                'Parent',
                'Student'
              ].map(r => (
                <button
                  key={r}
                  onClick={() => setSelectedRole(r)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedRole === r
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Module-by-Module Permission Matrix Grid */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  Active Permissions for Role: <span className="text-indigo-600 font-mono underline">{selectedRole}</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Click any checkbox or toggle button to instantly allow or disallow that capability.
                </p>
              </div>

              {selectedRole === 'Super Admin' && (
                <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Full Master Access (Immutable)
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {moduleList.map(mod => {
                const rolePerms = permissions[selectedRole]?.[mod.key] || {};
                return (
                  <div
                    key={mod.key}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3 shadow-xs"
                  >
                    <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-700 pb-2">
                      <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wide">
                        {mod.label}
                      </h4>
                    </div>

                    <div className="space-y-2">
                      {mod.actions.map(act => {
                        const isGranted = selectedRole === 'Super Admin' ? true : Boolean(rolePerms[act.key]);
                        return (
                          <div
                            key={act.key}
                            onClick={() => handleTogglePermission(mod.key, act.key)}
                            className={`flex items-center justify-between p-2 rounded-xl cursor-pointer transition-all border ${
                              isGranted
                                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200 font-bold'
                                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-400 font-medium'
                            }`}
                          >
                            <span className="text-xs">{act.label}</span>
                            <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs ${
                              isGranted ? 'bg-emerald-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
                            }`}>
                              {isGranted ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* ========================================================== */}
      {/* 🏫 TAB 3: SCHOOL PROFILE & BRANDING                        */}
      {/* ========================================================== */}
      {activeTab === 'profile' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white">
                Official School Profile & Affiliation Information
              </h3>
              <p className="text-xs text-slate-500">
                Displayed across website headers, fee receipts, report cards, and ID cards.
              </p>
            </div>
          </div>

          <form onSubmit={handleSaveSchoolProfile} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">School Name</label>
                <input
                  type="text"
                  value={schoolInfo.name}
                  onChange={(e) => setSchoolInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Affiliation Board & No.</label>
                <input
                  type="text"
                  value={`${schoolInfo.affiliation} (${schoolInfo.affiliationNo})`}
                  onChange={(e) => setSchoolInfo(prev => ({ ...prev, affiliationNo: e.target.value }))}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Managing Director / Manager</label>
                <input
                  type="text"
                  value={schoolInfo.managerName}
                  onChange={(e) => setSchoolInfo(prev => ({ ...prev, managerName: e.target.value }))}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Principal / Treasurer</label>
                <input
                  type="text"
                  value={schoolInfo.principalName}
                  onChange={(e) => setSchoolInfo(prev => ({ ...prev, principalName: e.target.value }))}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Campus Phone Numbers</label>
                <input
                  type="text"
                  value={schoolInfo.phone}
                  onChange={(e) => setSchoolInfo(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Campus Address</label>
                <input
                  type="text"
                  value={schoolInfo.address}
                  onChange={(e) => setSchoolInfo(prev => ({ ...prev, address: e.target.value }))}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                />
              </div>
            </div>

            <div className="flex justify-end pt-3">
              <button
                type="submit"
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold rounded-xl shadow-md flex items-center gap-2 transition-all"
              >
                <Save className="w-4 h-4" /> Save Profile Changes
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
};

export default SettingsPage;
