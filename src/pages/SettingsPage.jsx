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
  Lock
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const SettingsPage = () => {
  const { showToast } = useToast();
  const [importJsonText, setImportJsonText] = useState('');

  const rolesMatrix = [
    { role: 'Super Admin', permissions: 'Full Access (All 37 Modules, Financials, DB Reset, User Roles)' },
    { role: 'Principal', permissions: 'Academic Leadership, Staff Appraisals, Exams, Attendance, Leaves, Approvals' },
    { role: 'Teacher', permissions: 'Assigned Classes, Timetable, Daily Attendance, Marks Entry, Homework' },
    { role: 'Accountant', permissions: 'Fee Invoicing, POS Fee Collection, Salary Slips, Ledger & Expense Audit' },
    { role: 'Librarian', permissions: 'Book Cataloging, Barcode / RFID Check-out, Circulation & Fine Registry' },
    { role: 'Transport Manager', permissions: 'Vehicle Fleet, Bus Routes, GPS Timetable & Student Stop Assignments' },
    { role: 'Parent', permissions: 'Child 360° Profile, Online Fee Receipts, Homework Tracking, Exam Results, Leaves' },
    { role: 'Student', permissions: 'Timetable, Learning Material, Homework Submission, Library Books, Results' }
  ];

  const handleExportBackup = () => {
    const jsonStr = schoolService.exportDatabaseJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `School_ERP_Backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    showToast('Database backup JSON exported successfully! 💾', 'success');
  };

  const handleImportBackup = () => {
    if (!importJsonText.trim()) {
      showToast('Please paste valid JSON backup data', 'warning');
      return;
    }
    const res = schoolService.importDatabaseJSON(importJsonText);
    if (res.success) {
      showToast('Database restored successfully from backup JSON! 🔄', 'success');
      setTimeout(() => window.location.reload(), 800);
    } else {
      showToast(`Import failed: ${res.error}`, 'error');
    }
  };

  const handleFactoryReset = () => {
    if (window.confirm('WARNING: Reset database back to default seed data? All custom modifications will be re-initialized.')) {
      schoolService.resetDatabase();
      showToast('Database reset to factory default seed records!', 'info');
      setTimeout(() => window.location.reload(), 600);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Settings className="w-7 h-7 text-indigo-600" /> System Settings & Role Security
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Granular Role-Based Access Control (RBAC), multi-user permissions, JSON backup/restore, and database management.
          </p>
        </div>
      </div>

      {/* Role-Based Access Matrix */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
        <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600" /> Role-Based Access Control (RBAC) Matrix
          </h3>
          <Badge variant="primary">8 Configured Roles</Badge>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                <th className="p-4">User Role</th>
                <th className="p-4">Authorized Functional Scope</th>
                <th className="p-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {rolesMatrix.map((r, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-indigo-500" /> {r.role}
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-300 font-medium">{r.permissions}</td>
                  <td className="p-4 text-center">
                    <Badge variant="success" size="sm">Active</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Database Backup & Restore */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Download className="w-5 h-5 text-emerald-600" /> Export Database Backup (JSON)
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Download the complete snapshot of all students, teachers, invoices, timetables, library books, and attendance records as an offline JSON backup file.
          </p>
          <button
            onClick={handleExportBackup}
            className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center justify-center gap-2 transition-all"
          >
            <Download className="w-4 h-4" /> Download Backup JSON
          </button>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <RotateCcw className="w-5 h-5 text-rose-600" /> Database Reset
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Revert the entire database back to default seed data. This will reset all students, fee collections, marks, and timetable matrices to initial state.
          </p>
          <button
            onClick={handleFactoryReset}
            className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center justify-center gap-2 transition-all"
          >
            <RotateCcw className="w-4 h-4" /> Factory Reset Database
          </button>
        </div>
      </div>
    </div>
  );
};
