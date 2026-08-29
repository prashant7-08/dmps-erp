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
  FileText,
  GitBranch,
  Edit3,
  Users,
  GraduationCap,
  Sparkles,
  Info
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const AdministrationPage = () => {
  const { showToast } = useToast();
  const [schoolInfo, setSchoolInfo] = useState(schoolService.getSchoolInfo());
  const [branches, setBranches] = useState(schoolService.getBranches());
  const [activeTab, setActiveTab] = useState('branches');
  const [editingBranch, setEditingBranch] = useState(null);

  const handleSave = (e) => {
    e.preventDefault();
    schoolService.updateSchoolInfo(schoolInfo);
    showToast('School settings updated successfully!', 'success');
  };

  const handleUpdateBranch = (e) => {
    e.preventDefault();
    if (!editingBranch) return;
    schoolService.updateBranch(editingBranch.id, editingBranch);
    setBranches(schoolService.getBranches());
    setEditingBranch(null);
    showToast(`Branch ${editingBranch.name || editingBranch.code} details saved!`, 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Building2 className="w-7 h-7 text-indigo-600" /> School Setup & Branch Administration
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage DMPS school branches (3 Active + 1 Upcoming/Blank), CBSE affiliation, timings, and institutional policies.
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
          { id: 'branches', label: '1. School Branches (मल्टी-ब्रांच)', icon: GitBranch },
          { id: 'general', label: '2. School Profile & Contacts', icon: Building2 },
          { id: 'academic', label: '3. Sessions & Timings', icon: Clock },
          { id: 'grading', label: '4. Grading System Rules', icon: Award },
          { id: 'holidays', label: '5. Holiday Calendar', icon: Calendar }
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

      {/* TAB 1: Branches Management */}
      {activeTab === 'branches' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-indigo-900 to-blue-900 p-6 rounded-3xl text-white shadow-lg">
            <div>
              <div className="flex items-center gap-2 text-indigo-200 text-xs font-bold uppercase tracking-wider mb-1">
                <GitBranch className="w-4 h-4 text-amber-300" /> Multi-Branch Infrastructure
              </div>
              <h3 className="text-xl font-black">Dadheech Memorial Public School — 4 Branches</h3>
              <p className="text-xs text-indigo-100/80 mt-1 max-w-2xl">
                Configured with 3 active institutional campuses and 1 flexible upcoming/custom branch slot.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-300">
                3 Active • 1 Blank Slot
              </span>
            </div>
          </div>

          {/* 4 Branch Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {branches.map((branch, index) => {
              const isBlankBranch = index === 3;
              return (
                <div
                  key={branch.id || index}
                  className={`p-6 rounded-3xl border transition-all duration-200 shadow-sm relative ${
                    isBlankBranch
                      ? 'bg-slate-50/80 dark:bg-slate-900/40 border-dashed border-2 border-slate-300 dark:border-slate-700'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-base shadow-sm ${
                        index === 0
                          ? 'bg-blue-600 text-white'
                          : index === 1
                          ? 'bg-indigo-600 text-white'
                          : index === 2
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                      }`}>
                        {branch.shortCode || `B${index + 1}`}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-bold text-slate-900 dark:text-white">
                            {branch.name || `Branch ${index + 1} (Blank / Unassigned)`}
                          </h4>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          Code: {branch.code || `BR-0${index + 1}`}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setEditingBranch({ ...branch })}
                      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
                      title="Edit Branch Details"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Branch Details */}
                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" /> Branch Head:
                      </span>
                      <strong className="text-slate-800 dark:text-slate-200">
                        {branch.headName || (isBlankBranch ? '—' : 'Not Assigned')}
                      </strong>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5" /> Classes:
                      </span>
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                        {branch.classesOffered || (isBlankBranch ? '—' : 'All Classes')}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5" /> Phone / Contact:
                      </span>
                      <span className="font-mono">
                        {branch.phone || (isBlankBranch ? '—' : 'Not Configured')}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-2 pt-1">
                      <span className="text-slate-400 shrink-0 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> Address:
                      </span>
                      <span className="text-right text-slate-700 dark:text-slate-300 truncate max-w-[200px]">
                        {branch.address || (isBlankBranch ? '—' : 'Campus Location')}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Footer Status */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <Badge variant={isBlankBranch ? 'neutral' : 'success'} size="sm">
                      {isBlankBranch ? 'Branch 4 (Blank / Reserved)' : (branch.isMain ? 'Main Campus / Senior Wing' : 'Active Branch')}
                    </Badge>
                    {!isBlankBranch && (
                      <span className="text-[11px] font-bold text-slate-500">
                        {branch.totalStudents || 0} Students enrolled
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: General Info */}
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
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 block">Affiliation Number</label>
              <input
                type="text"
                value={schoolInfo.affiliationNo}
                onChange={(e) => setSchoolInfo({ ...schoolInfo, affiliationNo: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 block">Principal Name</label>
              <input
                type="text"
                value={schoolInfo.principalName}
                onChange={(e) => setSchoolInfo({ ...schoolInfo, principalName: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 block">Official Contact Phone</label>
              <input
                type="text"
                value={schoolInfo.phone}
                onChange={(e) => setSchoolInfo({ ...schoolInfo, phone: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Academic & Timings */}
      {activeTab === 'academic' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <h3 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
            Academic Sessions & Working Timings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 block">Current Academic Session</label>
              <input
                type="text"
                value={schoolInfo.academicSession}
                onChange={(e) => setSchoolInfo({ ...schoolInfo, academicSession: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 block">Medium of Instruction</label>
              <input
                type="text"
                value={schoolInfo.medium}
                onChange={(e) => setSchoolInfo({ ...schoolInfo, medium: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 block">Summer Timings</label>
              <input
                type="text"
                value={schoolInfo.timings.summer}
                onChange={(e) => setSchoolInfo({ ...schoolInfo, timings: { ...schoolInfo.timings, summer: e.target.value } })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 block">Winter Timings</label>
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

      {/* TAB 4: Grading System */}
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

      {/* TAB 5: Holidays */}
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

      {/* Branch Edit Modal */}
      {editingBranch && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5 animate-in zoom-in-95">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-indigo-600" />
                Edit Branch Details ({editingBranch.code || editingBranch.id})
              </h3>
              <button
                onClick={() => setEditingBranch(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleUpdateBranch} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Branch Name</label>
                <input
                  type="text"
                  value={editingBranch.name || ''}
                  onChange={(e) => setEditingBranch({ ...editingBranch, name: e.target.value })}
                  placeholder="e.g. DMPS Main Campus (Senior Wing)"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Branch Code / Tag</label>
                  <input
                    type="text"
                    value={editingBranch.shortCode || ''}
                    onChange={(e) => setEditingBranch({ ...editingBranch, shortCode: e.target.value })}
                    placeholder="e.g. MAIN, CITY, BR-4"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Classes Offered</label>
                  <input
                    type="text"
                    value={editingBranch.classesOffered || ''}
                    onChange={(e) => setEditingBranch({ ...editingBranch, classesOffered: e.target.value })}
                    placeholder="e.g. Class 6 to 12"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Branch Head / Principal / In-Charge</label>
                <input
                  type="text"
                  value={editingBranch.headName || ''}
                  onChange={(e) => setEditingBranch({ ...editingBranch, headName: e.target.value })}
                  placeholder="e.g. Dr. Arvind Shrivastava"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Contact Phone</label>
                <input
                  type="text"
                  value={editingBranch.phone || ''}
                  onChange={(e) => setEditingBranch({ ...editingBranch, phone: e.target.value })}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Campus Location & Address</label>
                <textarea
                  rows={2}
                  value={editingBranch.address || ''}
                  onChange={(e) => setEditingBranch({ ...editingBranch, address: e.target.value })}
                  placeholder="e.g. Institutional Area, Knowledge Park"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setEditingBranch(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold text-slate-600 dark:text-slate-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-bold shadow-md hover:bg-indigo-700"
                >
                  Save Branch Details
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
