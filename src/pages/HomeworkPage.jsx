import React, { useState, useEffect } from 'react';
import {
  FileSpreadsheet,
  Plus,
  Calendar,
  BookOpen,
  CheckCircle2,
  Clock,
  Download,
  Users,
  Search,
  Filter,
  CheckSquare,
  AlertCircle,
  FileText,
  Paperclip,
  Trash2,
  Eye,
  MessageSquare
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const HomeworkPage = ({ initialTab = 'homework' }) => {
  const { showToast } = useToast();
  const [homeworkList, setHomeworkList] = useState(() => schoolService.getHomework() || []);
  const students = schoolService.getStudents() || [];

  const resolveTab = (tab) => {
    if (!tab) return 'homework';
    if (tab === 'hw-homework' || tab === 'homework') return 'homework';
    if (tab === 'hw-evaluation' || tab === 'evaluation') return 'evaluation';
    return tab;
  };

  const [activeTab, setActiveTab] = useState(() => resolveTab(initialTab));

  useEffect(() => {
    if (initialTab) setActiveTab(resolveTab(initialTab));
  }, [initialTab]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedClassFilter, setSelectedClassFilter] = useState('All');
  const [selectedHwForEval, setSelectedHwForEval] = useState(homeworkList[0]?.id || '');

  // Submissions Matrix (Evaluation Report)
  const [evalSubmissions, setEvalSubmissions] = useState([
    { id: 'SUB-01', studentName: 'Aarav Sharma', rollNo: '101', class: 'Class 10-A', status: 'Submitted & Checked', marks: '19/20', submittedOn: '2026-08-30', feedback: 'Excellent derivations and neat handwriting' },
    { id: 'SUB-02', studentName: 'Aditya Singh', rollNo: '105', class: 'Class 10-A', status: 'Submitted & Checked', marks: '17/20', submittedOn: '2026-08-30', feedback: 'Good effort, correct numerical solutions' },
    { id: 'SUB-03', studentName: 'Ananya Verma', rollNo: '108', class: 'Class 10-A', status: 'Pending Review', marks: '-/20', submittedOn: '2026-08-31', feedback: 'Awaiting teacher grading' },
    { id: 'SUB-04', studentName: 'Ayush Kumar', rollNo: '112', class: 'Class 10-A', status: 'Not Submitted', marks: '0/20', submittedOn: '-', feedback: 'Late submission notice sent' }
  ]);

  const [hwForm, setHwForm] = useState({
    title: '',
    subject: 'Mathematics',
    class: 'Class 10',
    section: 'A',
    teacher: 'Mrs. BHOOMI YADAV',
    dueDate: '2026-09-02',
    description: '',
    attachments: ['Exercise_Worksheet_Ch4.pdf']
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

  const filteredHw = homeworkList.filter(hw => selectedClassFilter === 'All' || hw.class === selectedClassFilter || hw.class?.includes(selectedClassFilter));

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
              <FileSpreadsheet className="w-5 h-5" />
            </span>
            <h1 className="text-xl font-black text-slate-900 dark:text-white">
              Daily Homework & Evaluation Suite
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Teacher assignment publishing, PDF study worksheets, and student submission evaluation tracking.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
        >
          <Plus className="w-4 h-4" /> Assign Daily Homework
        </button>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-x-auto">
        <div className="flex items-center gap-1.5 min-w-max text-xs font-bold">
          <button
            onClick={() => setActiveTab('homework')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'homework'
                ? 'bg-blue-600 text-white shadow-md font-black'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" /> Daily Homework Assignments ({homeworkList.length})
          </button>
          <button
            onClick={() => setActiveTab('evaluation')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'evaluation'
                ? 'bg-blue-600 text-white shadow-md font-black'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <CheckSquare className="w-4 h-4" /> Homework Evaluation Report
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 📚 TAB 1: HOMEWORK ASSIGNMENTS LIST */}
      {/* ========================================================================= */}
      {activeTab === 'homework' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
              <Filter className="w-4 h-4 text-indigo-600" /> Filter by Class:
              <select
                value={selectedClassFilter}
                onChange={(e) => setSelectedClassFilter(e.target.value)}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold"
              >
                <option value="All">All Classes</option>
                {['PG', 'NUR', 'LKG', 'UKG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'].map(c => (
                  <option key={c} value={c}>Class {c}</option>
                ))}
              </select>
            </div>
            <span className="text-xs font-bold text-slate-400">Showing {filteredHw.length} assignments</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredHw.map(hw => (
              <div
                key={hw.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded-md">
                        {hw.subject} • {hw.class}-{hw.section}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1.5">{hw.title}</h3>
                    </div>
                    <Badge variant="danger" size="sm">Due: {hw.dueDate}</Badge>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {hw.description}
                  </p>

                  {hw.attachments && hw.attachments.length > 0 && (
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300">
                      <Paperclip className="w-3.5 h-3.5 text-indigo-600" />
                      <span className="font-medium truncate">{hw.attachments[0]}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500 font-medium">Submissions Received:</span>
                    <span className="font-bold text-emerald-600">{hw.submissionsCount} / {hw.totalStudents || 35} Students</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all"
                      style={{ width: `${((hw.submissionsCount || 20) / (hw.totalStudents || 35)) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[10px] text-slate-400 font-medium">Teacher: {hw.teacher}</span>
                    <button
                      onClick={() => {
                        setSelectedHwForEval(hw.id);
                        setActiveTab('evaluation');
                      }}
                      className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1"
                    >
                      Evaluation Sheet →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📝 TAB 2: EVALUATION REPORT */}
      {/* ========================================================================= */}
      {activeTab === 'evaluation' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-emerald-600" /> Student Homework Submission & Grading Matrix
              </h3>
              <p className="text-xs text-slate-500">Record teacher evaluation, submission status, and feedback remarks</p>
            </div>
            <select
              value={selectedHwForEval}
              onChange={(e) => setSelectedHwForEval(e.target.value)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold"
            >
              {homeworkList.map(h => (
                <option key={h.id} value={h.id}>{h.title} ({h.subject} • {h.class})</option>
              ))}
            </select>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Roll No</th>
                  <th className="p-3.5">Student Name</th>
                  <th className="p-3.5">Class</th>
                  <th className="p-3.5">Submission Date</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5">Marks Obtained</th>
                  <th className="p-3.5">Teacher Feedback</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {evalSubmissions.map(sub => (
                  <tr key={sub.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-slate-500">#{sub.rollNo}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{sub.studentName}</td>
                    <td className="p-3.5 font-semibold text-slate-500">{sub.class}</td>
                    <td className="p-3.5 font-mono text-slate-500">{sub.submittedOn}</td>
                    <td className="p-3.5">
                      <Badge variant={sub.status.includes('Checked') ? 'success' : sub.status.includes('Pending') ? 'warning' : 'danger'}>
                        {sub.status}
                      </Badge>
                    </td>
                    <td className="p-3.5 font-mono font-black text-indigo-600">{sub.marks}</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400 text-[11px]">{sub.feedback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal: Create Homework Task */}
      {isAddModalOpen && (
        <Modal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          title="Publish New Daily Homework Task"
          maxWidth="max-w-lg"
        >
          <form onSubmit={handleCreate} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Homework Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. Chapter 4 Quadratic Equations Practice Set"
                value={hwForm.title}
                onChange={(e) => setHwForm({ ...hwForm, title: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Subject *</label>
                <select
                  value={hwForm.subject}
                  onChange={(e) => setHwForm({ ...hwForm, subject: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold text-xs"
                >
                  <option value="Mathematics">Mathematics (गणित)</option>
                  <option value="Science">Science (विज्ञान / Physics)</option>
                  <option value="English">English (अंग्रेजी)</option>
                  <option value="Hindi">Hindi (हिंदी व्याकरण)</option>
                  <option value="Social Science">Social Science (सामाजिक विज्ञान)</option>
                  <option value="Sanskrit">Sanskrit (संस्कृत)</option>
                  <option value="Computer">Computer / IT</option>
                  <option value="Drawing / Art">Drawing / Art</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Target Class *</label>
                <select
                  value={hwForm.class}
                  onChange={(e) => setHwForm({ ...hwForm, class: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold text-xs"
                >
                  {['PG', 'NUR', 'LKG', 'UKG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'].map(c => (
                    <option key={c} value={c}>Class {c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Section</label>
                <select
                  value={hwForm.section}
                  onChange={(e) => setHwForm({ ...hwForm, section: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold text-xs"
                >
                  <option value="A">Section A</option>
                  <option value="B">Section B</option>
                  <option value="C">Section C</option>
                  <option value="All">All Sections</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Due Submission Date *</label>
                <input
                  type="date"
                  required
                  value={hwForm.dueDate}
                  onChange={(e) => setHwForm({ ...hwForm, dueDate: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono font-bold text-xs"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Teacher Name</label>
                <input
                  type="text"
                  value={hwForm.teacher}
                  onChange={(e) => setHwForm({ ...hwForm, teacher: e.target.value })}
                  placeholder="e.g. Mrs. BHOOMI YADAV"
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold text-xs"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Homework Instructions / Questions to Solve *</label>
              <textarea
                rows="4"
                required
                placeholder="Type homework questions, exercise page number, notebook problems..."
                value={hwForm.description}
                onChange={(e) => setHwForm({ ...hwForm, description: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Attach Photo / Worksheet (Optional)</label>
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  accept="image/*,.pdf,.doc,.docx"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setHwForm(prev => ({
                        ...prev,
                        attachments: [file.name]
                      }));
                      showToast(`Worksheet photo/file attached: ${file.name}`, 'info');
                    }
                  }}
                  className="w-full text-xs text-slate-500 file:mr-2 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl text-xs font-black bg-indigo-600 hover:bg-indigo-700 text-white shadow-md flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" /> Publish to Class Students
              </button>
            </div>
          </form>
        </Modal>
      )}

    </div>
  );
};

export default HomeworkPage;
