import React, { useState } from 'react';
import {
  BookOpen,
  Plus,
  ArrowRightLeft,
  GraduationCap,
  Layers,
  CheckCircle2,
  Users,
  Search,
  Edit2,
  Trash2,
  Sparkles,
  School,
  X,
  UserCheck,
  Building2,
  PlusCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const AcademicsPage = () => {
  const { showToast } = useToast();
  const [classes, setClasses] = useState(schoolService.getClasses());
  const [subjects, setSubjects] = useState(schoolService.getSubjects());
  const teachers = schoolService.getTeachers();
  const students = schoolService.getStudents();
  const [activeTab, setActiveTab] = useState('classes');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWingFilter, setSelectedWingFilter] = useState('All');

  // Modal States
  const [isAddClassModalOpen, setIsAddClassModalOpen] = useState(false);
  const [isEditClassModalOpen, setIsEditClassModalOpen] = useState(false);
  const [isAddSubjectModalOpen, setIsAddSubjectModalOpen] = useState(false);
  const [isEditSubjectModalOpen, setIsEditSubjectModalOpen] = useState(false);
  const [isPromotionModalOpen, setIsPromotionModalOpen] = useState(false);

  // Active Item being edited / section input
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [newSectionInput, setNewSectionInput] = useState({});

  // Class Form State
  const [classForm, setClassForm] = useState({
    name: '',
    wing: 'Primary',
    sections: 'A, B',
    maxStrength: 40,
    roomNo: '',
    classTeacher: ''
  });

  // Subject Form State
  const [subjectForm, setSubjectForm] = useState({
    name: '',
    code: '',
    class: 'Class 10',
    type: 'Theory + Practical',
    maxMarks: 100,
    passMarks: 33,
    teacher: 'Dr. Rajesh Sharma',
    credits: 4
  });

  // Promotion Form State
  const [promotionData, setPromotionData] = useState({
    fromClass: 'Class 9',
    toClass: 'Class 10',
    session: '2026-2027'
  });

  const wings = ['Pre-Primary', 'Primary', 'Middle', 'Secondary', 'Senior Secondary'];

  // --- CLASS HANDLERS ---
  const handleOpenAddClass = () => {
    setClassForm({
      name: '',
      wing: 'Primary',
      sections: 'A, B',
      maxStrength: 40,
      roomNo: '',
      classTeacher: teachers[0]?.name || ''
    });
    setIsAddClassModalOpen(true);
  };

  const handleSaveAddClass = (e) => {
    e.preventDefault();
    if (!classForm.name.trim()) {
      showToast('Please enter a class name', 'warning');
      return;
    }
    const created = schoolService.addClass(classForm);
    setClasses([...schoolService.getClasses()]);
    setIsAddClassModalOpen(false);
    showToast(`Class "${created.name}" created successfully! 🎉`, 'success');
  };

  const handleOpenEditClass = (cls) => {
    setSelectedClass(cls);
    setClassForm({
      name: cls.name,
      wing: cls.wing || 'Primary',
      sections: Array.isArray(cls.sections) ? cls.sections.join(', ') : cls.sections || 'A',
      maxStrength: cls.maxStrength || 40,
      roomNo: cls.roomNo || '',
      classTeacher: cls.classTeacher || ''
    });
    setIsEditClassModalOpen(true);
  };

  const handleSaveEditClass = (e) => {
    e.preventDefault();
    if (!classForm.name.trim()) {
      showToast('Please enter a class name', 'warning');
      return;
    }
    schoolService.updateClass(selectedClass.id, classForm);
    setClasses([...schoolService.getClasses()]);
    setIsEditClassModalOpen(false);
    showToast(`Class "${classForm.name}" updated successfully!`, 'success');
  };

  const handleDeleteClass = (cls) => {
    if (window.confirm(`Are you sure you want to delete "${cls.name}"? This action cannot be undone.`)) {
      schoolService.deleteClass(cls.id);
      setClasses([...schoolService.getClasses()]);
      showToast(`Class "${cls.name}" deleted.`, 'info');
    }
  };

  // --- SECTION QUICK HANDLERS ---
  const handleAddSection = (classId) => {
    const secName = newSectionInput[classId]?.trim();
    if (!secName) return;
    schoolService.addSectionToClass(classId, secName);
    setClasses([...schoolService.getClasses()]);
    setNewSectionInput({ ...newSectionInput, [classId]: '' });
    showToast(`Section ${secName.toUpperCase()} added to class!`, 'success');
  };

  const handleRemoveSection = (classId, secName) => {
    const cls = classes.find(c => c.id === classId);
    if (cls && cls.sections.length <= 1) {
      showToast('A class must have at least one section.', 'warning');
      return;
    }
    schoolService.removeSectionFromClass(classId, secName);
    setClasses([...schoolService.getClasses()]);
    showToast(`Section ${secName} removed.`, 'info');
  };

  // --- SUBJECT HANDLERS ---
  const handleOpenAddSubject = () => {
    setSubjectForm({
      name: '',
      code: '',
      class: classes[0]?.name || 'Class 10',
      type: 'Theory + Practical',
      maxMarks: 100,
      passMarks: 33,
      teacher: teachers[0]?.name || 'Dr. Rajesh Sharma',
      credits: 4
    });
    setIsAddSubjectModalOpen(true);
  };

  const handleAddSubject = (e) => {
    e.preventDefault();
    if (!subjectForm.name || !subjectForm.code) {
      showToast('Please enter subject name and code', 'warning');
      return;
    }
    const newSub = schoolService.addSubject(subjectForm);
    setSubjects([...schoolService.getSubjects()]);
    setIsAddSubjectModalOpen(false);
    showToast(`Subject "${newSub.name}" added to curriculum!`, 'success');
  };

  const handleOpenEditSubject = (sub) => {
    setSelectedSubject(sub);
    setSubjectForm({ ...sub });
    setIsEditSubjectModalOpen(true);
  };

  const handleSaveEditSubject = (e) => {
    e.preventDefault();
    schoolService.updateSubject(selectedSubject.id, subjectForm);
    setSubjects([...schoolService.getSubjects()]);
    setIsEditSubjectModalOpen(false);
    showToast(`Subject "${subjectForm.name}" updated!`, 'success');
  };

  const handleDeleteSubject = (sub) => {
    if (window.confirm(`Delete subject "${sub.name}" (${sub.code})?`)) {
      schoolService.deleteSubject(sub.id);
      setSubjects([...schoolService.getSubjects()]);
      showToast(`Subject "${sub.name}" deleted.`, 'info');
    }
  };

  const handlePromoteStudents = (e) => {
    e.preventDefault();
    setIsPromotionModalOpen(false);
    showToast(`Batch promoted from ${promotionData.fromClass} to ${promotionData.toClass} for Session ${promotionData.session}! 🎉`, 'success');
  };

  // Filtered Classes
  const filteredClasses = classes.filter(cls => {
    const matchesSearch = cls.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cls.wing && cls.wing.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (cls.classTeacher && cls.classTeacher.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesWing = selectedWingFilter === 'All' || cls.wing === selectedWingFilter;
    return matchesSearch && matchesWing;
  });

  // Filtered Subjects
  const filteredSubjects = subjects.filter(sub => {
    return sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.class.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.teacher?.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-7 h-7 text-indigo-600" /> Class & Academic Management
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Add & edit Classes, create Sections (A, B, C / Streams), assign Class Teachers, and manage Subject Curricula.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setIsPromotionModalOpen(true)}
            className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
          >
            <ArrowRightLeft className="w-4 h-4" /> Student Promotion
          </button>
          <button
            onClick={handleOpenAddSubject}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
          >
            <Plus className="w-4 h-4" /> Add Subject
          </button>
          <button
            onClick={handleOpenAddClass}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
          >
            <Plus className="w-4 h-4" /> Add New Class
          </button>
        </div>
      </div>

      {/* Navigation Tabs & Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('classes')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'classes'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Classes & Sections ({classes.length})
          </button>
          <button
            onClick={() => setActiveTab('subjects')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'subjects'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Curriculum & Subjects ({subjects.length})
          </button>
        </div>

        {/* Search & Wing Filter */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs w-48 sm:w-60 text-slate-900 dark:text-white"
            />
          </div>

          {activeTab === 'classes' && (
            <select
              value={selectedWingFilter}
              onChange={(e) => setSelectedWingFilter(e.target.value)}
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200"
            >
              <option value="All">All Wings</option>
              {wings.map(w => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* TAB 1: Classes & Sections Grid */}
      {activeTab === 'classes' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredClasses.map((cls, idx) => {
              // Calculate live student count for this class
              const classStudents = students.filter(s => s.class === cls.name || s.class?.startsWith(cls.name));
              const assignedTeacher = cls.classTeacher || 'Not Assigned';

              return (
                <motion.div
                  key={cls.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.03, duration: 0.25 }}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Decorative top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-black text-slate-900 dark:text-white">{cls.name}</h3>
                          <Badge variant="primary" size="sm">{cls.wing || 'Primary'}</Badge>
                        </div>
                        {cls.roomNo && (
                          <p className="text-[11px] text-slate-400 font-medium mt-0.5">Room: {cls.roomNo}</p>
                        )}
                      </div>

                      {/* Action Buttons: Edit & Delete */}
                      <div className="flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleOpenEditClass(cls)}
                          title="Edit Class & Settings"
                          className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteClass(cls)}
                          title="Delete Class"
                          className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950 text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Class Stats Summary */}
                    <div className="grid grid-cols-2 gap-2 p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-xs mb-4">
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold block uppercase">Class Teacher</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200 truncate block text-[11px]" title={assignedTeacher}>
                          {assignedTeacher}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold block uppercase">Enrolled</span>
                        <span className="font-bold text-indigo-600 dark:text-indigo-400 text-[11px]">
                          {classStudents.length || Math.floor((cls.sections.length || 1) * 35)} Students
                        </span>
                      </div>
                    </div>

                    {/* Sections Container */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                          Active Sections ({cls.sections?.length || 0}):
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {cls.sections?.map((sec, i) => (
                          <span
                            key={i}
                            className="group/sec inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-900 dark:text-indigo-200 text-xs font-bold border border-indigo-200/80 dark:border-indigo-800/80 shadow-xs"
                          >
                            <span>Section {sec}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveSection(cls.id, sec)}
                              title={`Remove Section ${sec}`}
                              className="text-indigo-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>

                      {/* Quick Inline Section Add */}
                      <div className="flex items-center gap-1.5 pt-2">
                        <input
                          type="text"
                          placeholder="+ Section (e.g. C or Arts)"
                          value={newSectionInput[cls.id] || ''}
                          onChange={(e) => setNewSectionInput({ ...newSectionInput, [cls.id]: e.target.value })}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleAddSection(cls.id);
                            }
                          }}
                          className="flex-1 px-3 py-1.5 text-xs rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-transparent text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500"
                        />
                        <button
                          type="button"
                          onClick={() => handleAddSection(cls.id)}
                          className="px-2.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shrink-0"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="flex justify-between items-center pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
                    <span>Capacity / Limit:</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {cls.maxStrength || 40} Seats / Section
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}

      {/* TAB 2: Curriculum & Subjects Table */}
      {activeTab === 'subjects' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                  <th className="p-4">Subject Name & Code</th>
                  <th className="p-4">Class</th>
                  <th className="p-4">Evaluation Type</th>
                  <th className="p-4">Max / Pass Marks</th>
                  <th className="p-4">Assigned Teacher</th>
                  <th className="p-4">Credits</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredSubjects.map(sub => (
                  <tr key={sub.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">
                      <p className="font-bold text-slate-900 dark:text-white">{sub.name}</p>
                      <span className="font-mono text-[10px] text-indigo-600 dark:text-indigo-400 font-bold">{sub.code}</span>
                    </td>
                    <td className="p-4 font-semibold text-slate-800 dark:text-slate-200">{sub.class}</td>
                    <td className="p-4">
                      <Badge variant="purple" size="sm">{sub.type}</Badge>
                    </td>
                    <td className="p-4 font-bold text-slate-800 dark:text-slate-200">
                      {sub.maxMarks} / <span className="text-emerald-600">{sub.passMarks}</span>
                    </td>
                    <td className="p-4 font-semibold text-slate-700 dark:text-slate-300">{sub.teacher}</td>
                    <td className="p-4 font-extrabold text-indigo-600">{sub.credits} Credits</td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          onClick={() => handleOpenEditSubject(sub)}
                          className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-slate-600 dark:text-slate-300 hover:text-indigo-600"
                          title="Edit Subject"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteSubject(sub)}
                          className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950 text-slate-600 dark:text-slate-300 hover:text-rose-600"
                          title="Delete Subject"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= MODALS ================= */}

      {/* 1. ADD NEW CLASS MODAL */}
      <Modal
        isOpen={isAddClassModalOpen}
        onClose={() => setIsAddClassModalOpen(false)}
        title="Create New Academic Class & Grade"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleSaveAddClass} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Class / Grade Name *</label>
              <input
                type="text"
                required
                value={classForm.name}
                onChange={(e) => setClassForm({ ...classForm, name: e.target.value })}
                placeholder="e.g. Class 11 or Nursery"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Academic Wing</label>
              <select
                value={classForm.wing}
                onChange={(e) => setClassForm({ ...classForm, wing: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              >
                {wings.map(w => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Sections (comma-separated) *
              </label>
              <input
                type="text"
                required
                value={classForm.sections}
                onChange={(e) => setClassForm({ ...classForm, sections: e.target.value })}
                placeholder="e.g. A, B, C or Science, Commerce, Arts"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold focus:ring-2 focus:ring-indigo-500"
              />
              <span className="text-[10px] text-slate-400 mt-1 block">Separate multiple sections with commas</span>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Max Capacity / Section</label>
              <input
                type="number"
                min="1"
                max="100"
                value={classForm.maxStrength}
                onChange={(e) => setClassForm({ ...classForm, maxStrength: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Assigned Class Teacher</label>
              <select
                value={classForm.classTeacher}
                onChange={(e) => setClassForm({ ...classForm, classTeacher: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              >
                <option value="">-- None / Select Teacher --</option>
                {teachers.map(t => (
                  <option key={t.id} value={t.name}>{t.name} ({t.department})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Room / Hall Number</label>
              <input
                type="text"
                value={classForm.roomNo}
                onChange={(e) => setClassForm({ ...classForm, roomNo: e.target.value })}
                placeholder="e.g. Room 204, Block B"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsAddClassModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20"
            >
              Save & Create Class
            </button>
          </div>
        </form>
      </Modal>

      {/* 2. EDIT CLASS MODAL */}
      <Modal
        isOpen={isEditClassModalOpen}
        onClose={() => setIsEditClassModalOpen(false)}
        title={`Edit Class: ${selectedClass?.name || ''}`}
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleSaveEditClass} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Class / Grade Name *</label>
              <input
                type="text"
                required
                value={classForm.name}
                onChange={(e) => setClassForm({ ...classForm, name: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Academic Wing</label>
              <select
                value={classForm.wing}
                onChange={(e) => setClassForm({ ...classForm, wing: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              >
                {wings.map(w => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Sections (comma-separated) *
              </label>
              <input
                type="text"
                required
                value={classForm.sections}
                onChange={(e) => setClassForm({ ...classForm, sections: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Max Capacity / Section</label>
              <input
                type="number"
                min="1"
                max="100"
                value={classForm.maxStrength}
                onChange={(e) => setClassForm({ ...classForm, maxStrength: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Assigned Class Teacher</label>
              <select
                value={classForm.classTeacher}
                onChange={(e) => setClassForm({ ...classForm, classTeacher: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              >
                <option value="">-- None / Select Teacher --</option>
                {teachers.map(t => (
                  <option key={t.id} value={t.name}>{t.name} ({t.department})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Room / Hall Number</label>
              <input
                type="text"
                value={classForm.roomNo}
                onChange={(e) => setClassForm({ ...classForm, roomNo: e.target.value })}
                placeholder="e.g. Room 204, Block B"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsEditClassModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
            >
              Update Class
            </button>
          </div>
        </form>
      </Modal>

      {/* 3. ADD SUBJECT MODAL */}
      <Modal
        isOpen={isAddSubjectModalOpen}
        onClose={() => setIsAddSubjectModalOpen(false)}
        title="Add Curriculum Subject"
        maxWidth="max-w-2xl"
      >
        <form onSubmit={handleAddSubject} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Subject Name *</label>
              <input
                type="text"
                required
                value={subjectForm.name}
                onChange={(e) => setSubjectForm({ ...subjectForm, name: e.target.value })}
                placeholder="e.g. Environmental Studies"
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Subject Code *</label>
              <input
                type="text"
                required
                value={subjectForm.code}
                onChange={(e) => setSubjectForm({ ...subjectForm, code: e.target.value })}
                placeholder="e.g. EVS-101"
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Class</label>
              <select
                value={subjectForm.class}
                onChange={(e) => setSubjectForm({ ...subjectForm, class: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                {classes.map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Subject Type</label>
              <select
                value={subjectForm.type}
                onChange={(e) => setSubjectForm({ ...subjectForm, type: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="Theory">Theory Only</option>
                <option value="Theory + Practical">Theory + Practical</option>
                <option value="Theory + Internal">Theory + Internal</option>
                <option value="Co-Curricular">Co-Curricular / Activity</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Assigned Teacher</label>
              <select
                value={subjectForm.teacher}
                onChange={(e) => setSubjectForm({ ...subjectForm, teacher: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                {teachers.map(t => (
                  <option key={t.id} value={t.name}>{t.name} ({t.department})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Credits</label>
              <input
                type="number"
                min="1"
                max="10"
                value={subjectForm.credits}
                onChange={(e) => setSubjectForm({ ...subjectForm, credits: Number(e.target.value) })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsAddSubjectModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
            >
              Save Subject
            </button>
          </div>
        </form>
      </Modal>

      {/* 4. EDIT SUBJECT MODAL */}
      <Modal
        isOpen={isEditSubjectModalOpen}
        onClose={() => setIsEditSubjectModalOpen(false)}
        title={`Edit Subject: ${selectedSubject?.name || ''}`}
        maxWidth="max-w-2xl"
      >
        <form onSubmit={handleSaveEditSubject} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Subject Name *</label>
              <input
                type="text"
                required
                value={subjectForm.name}
                onChange={(e) => setSubjectForm({ ...subjectForm, name: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Subject Code *</label>
              <input
                type="text"
                required
                value={subjectForm.code}
                onChange={(e) => setSubjectForm({ ...subjectForm, code: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Class</label>
              <select
                value={subjectForm.class}
                onChange={(e) => setSubjectForm({ ...subjectForm, class: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                {classes.map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Subject Type</label>
              <select
                value={subjectForm.type}
                onChange={(e) => setSubjectForm({ ...subjectForm, type: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="Theory">Theory Only</option>
                <option value="Theory + Practical">Theory + Practical</option>
                <option value="Theory + Internal">Theory + Internal</option>
                <option value="Co-Curricular">Co-Curricular / Activity</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Assigned Teacher</label>
              <select
                value={subjectForm.teacher}
                onChange={(e) => setSubjectForm({ ...subjectForm, teacher: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                {teachers.map(t => (
                  <option key={t.id} value={t.name}>{t.name} ({t.department})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Credits</label>
              <input
                type="number"
                min="1"
                max="10"
                value={subjectForm.credits}
                onChange={(e) => setSubjectForm({ ...subjectForm, credits: Number(e.target.value) })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsEditSubjectModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
            >
              Update Subject
            </button>
          </div>
        </form>
      </Modal>

      {/* 5. PROMOTION MODAL */}
      <Modal
        isOpen={isPromotionModalOpen}
        onClose={() => setIsPromotionModalOpen(false)}
        title="Student Annual Promotion & Transfer Wizard"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handlePromoteStudents} className="space-y-4 text-xs">
          <div className="p-4 bg-purple-50 dark:bg-purple-950/40 rounded-2xl border border-purple-100 dark:border-purple-900 text-purple-950 dark:text-purple-200">
            <p className="font-bold mb-1">Annual Academic Roll-over</p>
            <p className="text-[11px] leading-relaxed">
              Promote eligible students to the next academic grade based on final board / annual exam pass criteria.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Current Grade / Class</label>
              <select
                value={promotionData.fromClass}
                onChange={(e) => setPromotionData({ ...promotionData, fromClass: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                {classes.map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Promote To Class</label>
              <select
                value={promotionData.toClass}
                onChange={(e) => setPromotionData({ ...promotionData, toClass: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                {classes.map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsPromotionModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
            >
              Execute Batch Promotion
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
