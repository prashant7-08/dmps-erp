import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Plus,
  Calendar,
  BookOpen,
  CheckCircle2,
  Clock,
  Download,
  Users
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const HomeworkPage = () => {
  const { showToast } = useToast();
  const [homeworkList, setHomeworkList] = useState(schoolService.getHomework());
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [hwForm, setHwForm] = useState({
    title: '',
    subject: 'Mathematics',
    class: 'Class 10',
    section: 'A',
    teacher: 'Mrs. Sunita Verma',
    dueDate: '2026-09-02',
    description: '',
    attachments: ['Exercise_Worksheet.pdf']
  });

  const handleCreate = (e) => {
    e.preventDefault();
    if (!hwForm.title || !hwForm.description) {
      showToast('Please enter title and instructions', 'warning');
      return;
    }

    const newHw = schoolService.addHomework(hwForm);
    setHomeworkList([...schoolService.getHomework()]);
    setIsAddModalOpen(false);
    showToast(`Homework assignment "${newHw.title}" published!`, 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <FileSpreadsheet className="w-7 h-7 text-indigo-600" /> Homework & Assignment Management
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Teacher assignment creator, reference PDF study material attachments, and student submission tracking.
          </p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-500/20 flex items-center gap-2 transition-all"
        >
          <Plus className="w-4 h-4" /> Create Homework Task
        </button>
      </div>

      {/* Homework Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {homeworkList.map(hw => (
          <div
            key={hw.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {hw.subject} • {hw.class}-{hw.section}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">{hw.title}</h3>
              </div>
              <Badge variant="danger" size="sm">Due: {hw.dueDate}</Badge>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {hw.description}
            </p>

            {/* Submission Progress Bar */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500 font-medium">Submissions Received:</span>
                <span className="font-bold text-emerald-600">{hw.submissionsCount} / {hw.totalStudents} Students</span>
              </div>
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full"
                  style={{ width: `${(hw.submissionsCount / hw.totalStudents) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span>Teacher: <strong className="text-slate-800 dark:text-slate-200">{hw.teacher}</strong></span>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1">
                <Download className="w-3.5 h-3.5" /> PDF Ref
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Create Homework Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Assign New Homework / Task"
        maxWidth="max-w-2xl"
      >
        <form onSubmit={handleCreate} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Homework Title *</label>
              <input
                type="text"
                required
                value={hwForm.title}
                onChange={(e) => setHwForm({ ...hwForm, title: e.target.value })}
                placeholder="e.g. Chemical Bonding NCERT Numerical Problems"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Subject</label>
              <select
                value={hwForm.subject}
                onChange={(e) => setHwForm({ ...hwForm, subject: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science (Physics/Chemistry)</option>
                <option value="English">English</option>
                <option value="Social Science">Social Science</option>
                <option value="Computer Applications">Computer Applications</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Target Class</label>
              <select
                value={hwForm.class}
                onChange={(e) => setHwForm({ ...hwForm, class: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="Class 10">Class 10 - Section A</option>
                <option value="Class 12">Class 12 - Science</option>
                <option value="Class 9">Class 9 - Section A</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Submission Deadline *</label>
              <input
                type="date"
                required
                value={hwForm.dueDate}
                onChange={(e) => setHwForm({ ...hwForm, dueDate: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Assigning Teacher</label>
              <input
                type="text"
                value={hwForm.teacher}
                onChange={(e) => setHwForm({ ...hwForm, teacher: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div className="col-span-2">
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Instructions & Problem Sets *</label>
              <textarea
                rows={3}
                required
                value={hwForm.description}
                onChange={(e) => setHwForm({ ...hwForm, description: e.target.value })}
                placeholder="Specify questions, textbook pages, and instructions..."
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-indigo-600 text-white font-bold rounded-xl shadow-lg">Publish Assignment</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
