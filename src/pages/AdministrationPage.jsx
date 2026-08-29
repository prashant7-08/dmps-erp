import React, { useState } from 'react';
import {
  Building2,
  Calendar,
  Clock,
  Award,
  Save,
  CheckCircle2,
  Plus,
  ShieldCheck,
  Globe,
  Mail,
  Phone,
  MapPin,
  FileText
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const AdministrationPage = () => {
  const { showToast } = useToast();
  const [schoolInfo, setSchoolInfo] = useState(schoolService.getSchoolInfo());
  const [activeTab, setActiveTab] = useState('general');

  const handleSave = (e) => {
    e.preventDefault();
    schoolService.updateSchoolInfo(schoolInfo);
    showToast('School settings updated successfully!', 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Building2 className="w-7 h-7 text-indigo-600" /> School Setup & Administration
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Configure institutional profile, CBSE/ICSE board affiliation, academic sessions, timings, and grading rules.
          </p>
        </div>
        <button
          onClick={handleSave}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-500/20 flex items-center gap-2 transition-all"
        >
          <Save className="w-4 h-4" /> Save Configuration
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 overflow-x-auto pb-1">
        {[
          { id: 'general', label: '1. School Profile & Contacts', icon: Building2 },
          { id: 'academic', label: '2. Sessions & Timings', icon: Clock },
          { id: 'grading', label: '3. Grading System Rules', icon: Award },
          { id: 'holidays', label: '4. Holiday Calendar', icon: Calendar }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                isActive
                  ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* TAB 1: General Info */}
      {activeTab === 'general' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <h3 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
            Institutional Details & Affiliation
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 block">School Full Name</label>
              <input
                type="text"
                value={schoolInfo.name}
                onChange={(e) => setSchoolInfo({ ...schoolInfo, name: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 block">Motto / Tagline</label>
              <input
                type="text"
                value={schoolInfo.tagline}
                onChange={(e) => setSchoolInfo({ ...schoolInfo, tagline: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 block">Board Affiliation</label>
              <input
                type="text"
                value={schoolInfo.affiliation}
                onChange={(e) => setSchoolInfo({ ...schoolInfo, affiliation: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 block">Affiliation / Registration No.</label>
              <input
                type="text"
                value={schoolInfo.affiliationNo}
                onChange={(e) => setSchoolInfo({ ...schoolInfo, affiliationNo: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 block">Official Email</label>
              <input
                type="email"
                value={schoolInfo.email}
                onChange={(e) => setSchoolInfo({ ...schoolInfo, email: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 block">Contact Phone Numbers</label>
              <input
                type="text"
                value={schoolInfo.phone}
                onChange={(e) => setSchoolInfo({ ...schoolInfo, phone: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 block">Campus Physical Address</label>
              <textarea
                rows={2}
                value={schoolInfo.address}
                onChange={(e) => setSchoolInfo({ ...schoolInfo, address: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Sessions & Timings */}
      {activeTab === 'academic' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <h3 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
            Academic Session & Bell Timings
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 block">Active Academic Session</label>
              <input
                type="text"
                value={schoolInfo.academicSession}
                onChange={(e) => setSchoolInfo({ ...schoolInfo, academicSession: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 block">Summer Bell Timings</label>
              <input
                type="text"
                value={schoolInfo.timings.summer}
                onChange={(e) => setSchoolInfo({ ...schoolInfo, timings: { ...schoolInfo.timings, summer: e.target.value } })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 block">Winter Bell Timings</label>
              <input
                type="text"
                value={schoolInfo.timings.winter}
                onChange={(e) => setSchoolInfo({ ...schoolInfo, timings: { ...schoolInfo.timings, winter: e.target.value } })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Grading System */}
      {activeTab === 'grading' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              CBSE 9-Point Grading Scale & Points
            </h3>
            <Badge variant="primary">Standard 10-Point Scale</Badge>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                  <th className="p-3">Grade</th>
                  <th className="p-3">Marks Range (Min - Max)</th>
                  <th className="p-3">Grade Point</th>
                  <th className="p-3">Performance Remark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {schoolInfo.gradingSystem.map((g, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3 font-black text-indigo-600 text-sm">{g.grade}</td>
                    <td className="p-3 font-semibold">{g.minMarks}% - {g.maxMarks}%</td>
                    <td className="p-3 font-bold">{g.gradePoint}.0</td>
                    <td className="p-3 text-slate-600 dark:text-slate-300">{g.remark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: Holidays */}
      {activeTab === 'holidays' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <h3 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
            Institutional Gazetted & Festival Holidays
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {schoolInfo.holidays.map((h, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">{h.name}</h4>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5">{h.date}</p>
                </div>
                <Badge variant={h.type === 'National' ? 'danger' : 'purple'} size="sm">
                  {h.type}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
