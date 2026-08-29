import React, { useState } from 'react';
import {
  Award,
  Plus,
  FileText,
  Printer,
  CheckCircle2,
  TrendingUp,
  Search,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import { PrintableReportCard } from '../components/printables/PrintableReportCard';
import schoolService from '../services/schoolService';

export const ExaminationPage = () => {
  const { showToast } = useToast();
  const [exams] = useState(schoolService.getExams());
  const [marksList, setMarksList] = useState(schoolService.getMarks());
  const [selectedExam, setSelectedExam] = useState(exams[0]?.id || 'EXM-01');
  const [selectedStudentForReport, setSelectedStudentForReport] = useState(null);
  const [isReportCardModalOpen, setIsReportCardModalOpen] = useState(false);
  const [isMarksEntryModalOpen, setIsMarksEntryModalOpen] = useState(false);

  const students = schoolService.getStudents();
  const schoolInfo = schoolService.getSchoolInfo();

  // Marks Entry Form
  const [marksForm, setMarksForm] = useState({
    studentId: students[0]?.id || '',
    examId: 'EXM-01',
    english: 38,
    maths: 39,
    science: 37,
    social: 36,
    computer: 40,
    remarks: 'Consistent hard work and excellent subject command.'
  });

  const handleSaveMarks = (e) => {
    e.preventDefault();
    const student = students.find(s => s.id === marksForm.studentId);
    if (!student) return;

    const subjects = [
      { name: "English Language", maxMarks: 40, obtainedTheory: Number(marksForm.english), total: Number(marksForm.english), grade: "A1" },
      { name: "Mathematics Standard", maxMarks: 40, obtainedTheory: Number(marksForm.maths), total: Number(marksForm.maths), grade: "A1" },
      { name: "Science (Physics/Chem/Bio)", maxMarks: 40, obtainedTheory: Number(marksForm.science), total: Number(marksForm.science), grade: "A1" },
      { name: "Social Science", maxMarks: 40, obtainedTheory: Number(marksForm.social), total: Number(marksForm.social), grade: "A2" },
      { name: "Computer Applications", maxMarks: 40, obtainedTheory: Number(marksForm.computer), total: Number(marksForm.computer), grade: "A1" }
    ];

    const totalMarks = 200;
    const obtainedMarks = Number(marksForm.english) + Number(marksForm.maths) + Number(marksForm.science) + Number(marksForm.social) + Number(marksForm.computer);
    const percentage = Number(((obtainedMarks / totalMarks) * 100).toFixed(2));

    const savedEntry = schoolService.saveMarks({
      studentId: student.id,
      studentName: student.name,
      class: student.class,
      section: student.section,
      rollNo: student.rollNo,
      examId: marksForm.examId,
      examName: "Unit Test 1 (Term 1)",
      subjects,
      totalMarks,
      obtainedMarks,
      percentage,
      grade: percentage >= 90 ? "A1" : percentage >= 80 ? "A2" : "B1",
      rank: 1,
      result: "Pass",
      remarks: marksForm.remarks
    });

    setMarksList([...schoolService.getMarks()]);
    setIsMarksEntryModalOpen(false);
    showToast(`Marks saved for ${student.name} (${percentage}%)`, 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="w-7 h-7 text-indigo-600" /> Examination & Report Cards
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Exam schedules, marks entry matrix, automated CBSE grading, and official printable report cards.
          </p>
        </div>
        <button
          onClick={() => setIsMarksEntryModalOpen(true)}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-500/20 flex items-center gap-2 transition-all"
        >
          <Plus className="w-4 h-4" /> Enter Student Marks
        </button>
      </div>

      {/* Exam Term Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {exams.map(ex => {
          const isSelected = selectedExam === ex.id;
          return (
            <button
              key={ex.id}
              onClick={() => setSelectedExam(ex.id)}
              className={`p-5 rounded-2xl border text-left transition-all ${
                isSelected
                  ? 'bg-indigo-50/80 dark:bg-indigo-950/60 border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <Badge variant={ex.status === 'Completed' ? 'success' : 'warning'} size="sm">
                  {ex.status}
                </Badge>
                <span className="text-[11px] font-mono text-slate-400 font-bold">{ex.session}</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-2">{ex.name}</h4>
              <p className="text-[11px] text-slate-500 mt-1">📅 {ex.startDate} to {ex.endDate}</p>
            </button>
          );
        })}
      </div>

      {/* Marks Gradebook Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-600" /> Class 10 Marks Ledger & Gradebook
          </h3>
          <Badge variant="primary">CBSE Evaluation</Badge>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                <th className="p-4">Student Name</th>
                <th className="p-4">Roll No</th>
                <th className="p-4">Aggregate Marks</th>
                <th className="p-4">Percentage</th>
                <th className="p-4">Grade</th>
                <th className="p-4">Class Rank</th>
                <th className="p-4 text-right">Report Card</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {marksList.map((m, idx) => {
                const student = students.find(s => s.id === m.studentId) || students[0];
                return (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{m.studentName}</td>
                    <td className="p-4 font-mono font-bold text-slate-800 dark:text-slate-200">#{m.rollNo}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{m.obtainedMarks} / {m.totalMarks}</td>
                    <td className="p-4 font-black text-indigo-600 text-sm">{m.percentage}%</td>
                    <td className="p-4 font-extrabold text-emerald-600">{m.grade}</td>
                    <td className="p-4 font-bold text-amber-600">Rank #{m.rank || idx + 1}</td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => {
                          setSelectedStudentForReport({ student, marksData: m });
                          setIsReportCardModalOpen(true);
                        }}
                        className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold text-xs flex items-center gap-1.5 ml-auto shadow-sm"
                      >
                        <Printer className="w-3.5 h-3.5" /> Printable Report
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Marks Entry Modal */}
      <Modal
        isOpen={isMarksEntryModalOpen}
        onClose={() => setIsMarksEntryModalOpen(false)}
        title="Scholastic Marks Entry Form (Unit Test 1)"
        maxWidth="max-w-2xl"
      >
        <form onSubmit={handleSaveMarks} className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select Student *</label>
            <select
              value={marksForm.studentId}
              onChange={(e) => setMarksForm({ ...marksForm, studentId: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
            >
              {students.map(s => (
                <option key={s.id} value={s.id}>{s.name} (Roll #{s.rollNo} • {s.class}-{s.section})</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-y border-slate-200 dark:border-slate-800 py-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">English (Max 40)</label>
              <input
                type="number"
                max={40}
                min={0}
                required
                value={marksForm.english}
                onChange={(e) => setMarksForm({ ...marksForm, english: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Maths (Max 40)</label>
              <input
                type="number"
                max={40}
                min={0}
                required
                value={marksForm.maths}
                onChange={(e) => setMarksForm({ ...marksForm, maths: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Science (Max 40)</label>
              <input
                type="number"
                max={40}
                min={0}
                required
                value={marksForm.science}
                onChange={(e) => setMarksForm({ ...marksForm, science: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Social Sci (Max 40)</label>
              <input
                type="number"
                max={40}
                min={0}
                required
                value={marksForm.social}
                onChange={(e) => setMarksForm({ ...marksForm, social: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Computers (Max 40)</label>
              <input
                type="number"
                max={40}
                min={0}
                required
                value={marksForm.computer}
                onChange={(e) => setMarksForm({ ...marksForm, computer: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Teacher Remarks</label>
            <input
              type="text"
              value={marksForm.remarks}
              onChange={(e) => setMarksForm({ ...marksForm, remarks: e.target.value })}
              className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsMarksEntryModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
            >
              Calculate Grades & Save
            </button>
          </div>
        </form>
      </Modal>

      {/* Printable Report Card Modal */}
      <Modal
        isOpen={isReportCardModalOpen}
        onClose={() => setIsReportCardModalOpen(false)}
        title="Official CBSE Progress Report Card"
        maxWidth="max-w-4xl"
      >
        {selectedStudentForReport && (
          <PrintableReportCard
            student={selectedStudentForReport.student}
            marksData={selectedStudentForReport.marksData}
            schoolInfo={schoolInfo}
          />
        )}
      </Modal>
    </div>
  );
};
