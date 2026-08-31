import React, { useState, useEffect } from 'react';
import {
  Award,
  Plus,
  FileText,
  Printer,
  CheckCircle2,
  TrendingUp,
  Search,
  BookOpen,
  Sparkles,
  Calendar,
  Layers,
  Sliders,
  Building2,
  Flame,
  CheckSquare,
  Filter,
  Trash2,
  Edit2
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import { PrintableReportCard } from '../components/printables/PrintableReportCard';
import schoolService from '../services/schoolService';

export const ExaminationPage = ({ initialTab = 'marks' }) => {
  const { showToast } = useToast();
  const [exams, setExams] = useState(() => schoolService.getExams() || []);
  const [marksList, setMarksList] = useState(() => schoolService.getMarks() || []);
  const students = schoolService.getStudents() || [];
  const schoolInfo = schoolService.getSchoolInfo() || { name: 'Dadheech Memorial Public School' };

  const resolveTab = (tab) => {
    if (!tab) return 'marks';
    if (tab === 'exam-term' || tab === 'terms') return 'terms';
    if (tab === 'exam-hall' || tab === 'halls') return 'halls';
    if (tab === 'exam-trait' || tab === 'traits') return 'traits';
    if (tab === 'exam-distribution' || tab === 'distribution') return 'distribution';
    if (tab === 'exam-setup' || tab === 'setup') return 'setup';
    if (tab === 'exam-schedule' || tab === 'schedule') return 'schedule';
    if (tab === 'exam-marks' || tab === 'marks' || tab === 'examination') return 'marks';
    return tab;
  };

  const [activeTab, setActiveTab] = useState(() => resolveTab(initialTab));

  useEffect(() => {
    if (initialTab) setActiveTab(resolveTab(initialTab));
  }, [initialTab]);

  const [selectedExam, setSelectedExam] = useState(exams[0]?.id || 'EXM-01');
  const [selectedStudentForReport, setSelectedStudentForReport] = useState(null);
  const [isReportCardModalOpen, setIsReportCardModalOpen] = useState(false);
  const [isMarksEntryModalOpen, setIsMarksEntryModalOpen] = useState(false);

  // Exam Halls
  const [halls, setHalls] = useState([
    { id: 'HALL-01', name: 'Main Academic Auditorium', roomNo: 'Auditorium Ground Floor', capacity: 180, invigilators: '4 Teachers' },
    { id: 'HALL-02', name: 'Senior Wing Examination Hall 1', roomNo: 'Room 204 (First Floor)', capacity: 60, invigilators: '2 Teachers' },
    { id: 'HALL-03', name: 'Senior Wing Examination Hall 2', roomNo: 'Room 205 (First Floor)', capacity: 60, invigilators: '2 Teachers' },
    { id: 'HALL-04', name: 'Middle Wing Hall A', roomNo: 'Room 108 (Ground Floor)', capacity: 50, invigilators: '2 Teachers' }
  ]);

  // Co-Scholastic Traits
  const [traits, setTraits] = useState([
    { id: 'TR-01', code: 'DISC', name: 'Discipline & Punctuality', category: 'Behavioral & Conduct', maxGrade: 'A+' },
    { id: 'TR-02', code: 'LEAD', name: 'Leadership & Teamwork', category: 'Social & Emotional', maxGrade: 'A+' },
    { id: 'TR-03', code: 'NEAT', name: 'Neatness & Homework Submission', category: 'Work Habits', maxGrade: 'A+' },
    { id: 'TR-04', code: 'SPRT', name: 'Sportsmanship & Physical Fitness', category: 'Health & Physical Education', maxGrade: 'A+' },
    { id: 'TR-05', code: 'ARTM', name: 'Art, Music & Cultural Participation', category: 'Performing & Visual Arts', maxGrade: 'A+' }
  ]);

  // Exam Schedule Date Sheets
  const [schedule, setSchedule] = useState([
    { id: 'SCH-01', date: '2026-09-15', day: 'Monday', time: '08:30 AM - 11:30 AM', class: 'Class 10', subject: 'Mathematics Standard (041)', room: 'Auditorium' },
    { id: 'SCH-02', date: '2026-09-17', day: 'Wednesday', time: '08:30 AM - 11:30 AM', class: 'Class 10', subject: 'Science (086)', room: 'Auditorium' },
    { id: 'SCH-03', date: '2026-09-19', day: 'Friday', time: '08:30 AM - 11:30 AM', class: 'Class 10', subject: 'English Language & Lit (184)', room: 'Auditorium' },
    { id: 'SCH-04', date: '2026-09-22', day: 'Monday', time: '08:30 AM - 11:30 AM', class: 'Class 10', subject: 'Social Science (087)', room: 'Auditorium' },
    { id: 'SCH-05', date: '2026-09-24', day: 'Wednesday', time: '08:30 AM - 11:30 AM', class: 'Class 10', subject: 'Hindi Course A (002)', room: 'Auditorium' }
  ]);

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

    schoolService.saveMarks({
      studentId: student.id,
      studentName: student.name,
      class: student.class,
      section: student.section,
      rollNo: student.rollNo,
      examId: marksForm.examId,
      examName: "Periodic Assessment / Term 1",
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
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
              <Award className="w-5 h-5" />
            </span>
            <h1 className="text-xl font-black text-slate-900 dark:text-white">
              CBSE Examination Master & Grading Suite
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Exam Terms, Hall Allocation, Trait Types, Marks Distribution, CBSE 9-Point Scale, Date Sheets & Report Cards.
          </p>
        </div>

        <button
          onClick={() => setIsMarksEntryModalOpen(true)}
          className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
        >
          <Plus className="w-4 h-4" /> Enter Student Marks
        </button>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-x-auto">
        <div className="flex items-center gap-1.5 min-w-max text-xs font-bold">
          {[
            { id: 'marks', label: '📊 Marks & Report Cards', count: marksList.length },
            { id: 'terms', label: '📝 Exam Terms', count: exams.length },
            { id: 'halls', label: '🏛️ Exam Halls', count: halls.length },
            { id: 'traits', label: '🌟 Trait Types (Co-Scholastic)', count: traits.length },
            { id: 'distribution', label: '⚖️ Marks Distribution', badge: '80:20' },
            { id: 'setup', label: '⚙️ CBSE Grading Scale', badge: 'A1-E' },
            { id: 'schedule', label: '📅 Exam Schedule (Date Sheet)', count: schedule.length }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md font-black'
                  : 'text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <span>{tab.label}</span>
              {tab.badge && <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/20 text-white">{tab.badge}</span>}
              {tab.count !== undefined && <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600'}`}>{tab.count}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 📊 TAB 1: MARKS & REPORT CARDS */}
      {/* ========================================================================= */}
      {activeTab === 'marks' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" /> Student Scorebook & Printable Report Cards
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Recorded subject scores, percentage, CBSE grades, and instant 2-page printouts</p>
            </div>
            <select
              value={selectedExam}
              onChange={(e) => setSelectedExam(e.target.value)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold"
            >
              {exams.map(e => (
                <option key={e.id} value={e.id}>{e.name} ({e.session})</option>
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
                  <th className="p-3.5">Total Marks</th>
                  <th className="p-3.5">Percentage</th>
                  <th className="p-3.5">CBSE Grade</th>
                  <th className="p-3.5">Result</th>
                  <th className="p-3.5 text-right">Report Card</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {marksList.map(m => (
                  <tr key={m.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-slate-500">#{m.rollNo}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{m.studentName}</td>
                    <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-400">{m.class}</td>
                    <td className="p-3.5 font-mono font-bold">{m.obtainedMarks} / {m.totalMarks}</td>
                    <td className="p-3.5 font-mono font-black text-indigo-600">{m.percentage}%</td>
                    <td className="p-3.5">
                      <span className="px-2 py-0.5 rounded font-black text-[11px] bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                        {m.grade}
                      </span>
                    </td>
                    <td className="p-3.5">
                      <Badge variant={m.result === 'Pass' ? 'success' : 'danger'}>{m.result}</Badge>
                    </td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => {
                          const stu = students.find(s => s.id === m.studentId) || { ...m, name: m.studentName };
                          setSelectedStudentForReport({ ...stu, marksEntry: m });
                          setIsReportCardModalOpen(true);
                        }}
                        className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 rounded-xl font-bold text-[11px]"
                      >
                        <Printer className="w-3.5 h-3.5 inline mr-1" /> Print Report Card
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📝 TAB 2: EXAM TERMS */}
      {/* ========================================================================= */}
      {activeTab === 'terms' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white">Academic Examination Terms</h3>
              <p className="text-xs text-slate-500">Periodic Tests, Mid-Term (Half Yearly), Pre-Board & Annual Examinations</p>
            </div>
            <button
              onClick={() => showToast('Create term modal', 'info')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold"
            >
              + Create Exam Term
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {exams.map(e => (
              <div key={e.id} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="text-[10px] font-black uppercase text-indigo-600">{e.id}</span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{e.name}</h4>
                <p className="text-xs text-slate-500 font-mono">{e.startDate} to {e.endDate}</p>
                <div className="pt-2">
                  <Badge variant={e.status === 'Completed' ? 'success' : 'warning'}>{e.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🏛️ TAB 3: EXAM HALLS */}
      {/* ========================================================================= */}
      {activeTab === 'halls' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-indigo-600" /> Examination Halls & Room Seating Allocation
            </h3>
            <p className="text-xs text-slate-500">Hall seating capacities, room numbers, and invigilator assignment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {halls.map(h => (
              <div key={h.id} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-slate-900 dark:text-white">{h.name}</h4>
                  <Badge variant="primary">{h.id}</Badge>
                </div>
                <p className="text-xs text-slate-500">{h.roomNo}</p>
                <div className="pt-2 flex justify-between items-center text-xs font-mono">
                  <span>Capacity: <strong className="text-emerald-600">{h.capacity} Students</strong></span>
                  <span>Invigilators: <strong>{h.invigilators}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🌟 TAB 4: TRAIT TYPES (CO-SCHOLASTIC) */}
      {/* ========================================================================= */}
      {activeTab === 'traits' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" /> Co-Scholastic & Behavioral Trait Setup
            </h3>
            <p className="text-xs text-slate-500">Define personality, discipline, neatness, leadership, and sports traits for report cards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {traits.map(tr => (
              <div key={tr.id} className="p-4 rounded-2xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold text-amber-700 dark:text-amber-400">{tr.code}</span>
                  <span className="text-[10px] font-bold text-slate-400">{tr.category}</span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">{tr.name}</h4>
                <div className="text-[11px] text-slate-500">Max Grade Scale: <strong>{tr.maxGrade}</strong></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ⚖️ TAB 5: MARKS DISTRIBUTION */}
      {/* ========================================================================= */}
      {activeTab === 'distribution' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5 max-w-2xl">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-indigo-600" /> CBSE Marks Distribution Matrix
            </h3>
            <p className="text-xs text-slate-500">Standard 80:20 Theory and Internal assessment split</p>
          </div>

          <div className="space-y-4 text-xs font-bold">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 flex justify-between items-center">
              <span>Main Board Theory Exam:</span>
              <span className="font-mono text-base text-indigo-600">80 Marks (80%)</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 flex justify-between items-center">
              <span>Periodic Assessment Tests:</span>
              <span className="font-mono text-base text-emerald-600">05 Marks (5%)</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 flex justify-between items-center">
              <span>Multiple Assessment & Quizzes:</span>
              <span className="font-mono text-base text-emerald-600">05 Marks (5%)</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 flex justify-between items-center">
              <span>Portfolio & Fair Notebook:</span>
              <span className="font-mono text-base text-emerald-600">05 Marks (5%)</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 flex justify-between items-center">
              <span>Subject Enrichment Lab Practical:</span>
              <span className="font-mono text-base text-emerald-600">05 Marks (5%)</span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ⚙️ TAB 6: CBSE GRADING SETUP */}
      {/* ========================================================================= */}
      {activeTab === 'setup' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-600" /> CBSE 9-Point Absolute Grading Scale
            </h3>
            <p className="text-xs text-slate-500">Official CBSE mark ranges and corresponding letter grades</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
            {[
              { grade: 'A1', range: '91 - 100%', points: '10.0', color: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
              { grade: 'A2', range: '81 - 90%', points: '9.0', color: 'bg-teal-50 text-teal-800 border-teal-300' },
              { grade: 'B1', range: '71 - 80%', points: '8.0', color: 'bg-blue-50 text-blue-800 border-blue-300' },
              { grade: 'B2', range: '61 - 70%', points: '7.0', color: 'bg-indigo-50 text-indigo-800 border-indigo-300' },
              { grade: 'C1', range: '51 - 60%', points: '6.0', color: 'bg-purple-50 text-purple-800 border-purple-300' },
              { grade: 'C2', range: '41 - 50%', points: '5.0', color: 'bg-amber-50 text-amber-800 border-amber-300' },
              { grade: 'D', range: '33 - 40%', points: '4.0', color: 'bg-orange-50 text-orange-800 border-orange-300' },
              { grade: 'E', range: 'Below 33%', points: 'Needs Imp.', color: 'bg-rose-50 text-rose-800 border-rose-300' }
            ].map(g => (
              <div key={g.grade} className={`p-4 rounded-2xl border ${g.color} space-y-1`}>
                <span className="text-2xl font-black">{g.grade}</span>
                <p className="text-[10px] font-bold">{g.range}</p>
                <span className="text-[10px] font-mono block opacity-80">GP: {g.points}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📅 TAB 7: EXAM SCHEDULE (DATE SHEET) */}
      {/* ========================================================================= */}
      {activeTab === 'schedule' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-600" /> Examination Date Sheet Timetable
              </h3>
              <p className="text-xs text-slate-500">Published examination schedule for Term 1 / Half Yearly 2026-27</p>
            </div>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold hover:bg-slate-200 flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" /> Print Date Sheet
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Date</th>
                  <th className="p-3.5">Day</th>
                  <th className="p-3.5">Class</th>
                  <th className="p-3.5">Subject</th>
                  <th className="p-3.5">Timing</th>
                  <th className="p-3.5">Exam Hall</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {schedule.map(s => (
                  <tr key={s.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-indigo-600">{s.date}</td>
                    <td className="p-3.5 font-bold text-slate-700 dark:text-slate-300">{s.day}</td>
                    <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-400">{s.class}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{s.subject}</td>
                    <td className="p-3.5 font-mono text-slate-500">{s.time}</td>
                    <td className="p-3.5">
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 font-bold text-[11px]">
                        {s.room}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal: Printable Report Card */}
      {isReportCardModalOpen && selectedStudentForReport && (
        <Modal
          isOpen={isReportCardModalOpen}
          onClose={() => setIsReportCardModalOpen(false)}
          title={`CBSE Report Card • ${selectedStudentForReport.studentName || selectedStudentForReport.name} (Class ${selectedStudentForReport.class})`}
          maxWidth="max-w-4xl"
        >
          <PrintableReportCard
            student={selectedStudentForReport}
            marksEntry={selectedStudentForReport.marksEntry}
            exam={exams[0]}
            schoolInfo={schoolInfo}
            onClose={() => setIsReportCardModalOpen(false)}
          />
        </Modal>
      )}

      {/* Modal: Enter Marks */}
      {isMarksEntryModalOpen && (
        <Modal
          isOpen={isMarksEntryModalOpen}
          onClose={() => setIsMarksEntryModalOpen(false)}
          title="Record Student Marks (Out of 40)"
          maxWidth="max-w-md"
        >
          <form onSubmit={handleSaveMarks} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select Student *</label>
              <select
                value={marksForm.studentId}
                onChange={(e) => setMarksForm({ ...marksForm, studentId: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              >
                {students.slice(0, 30).map(s => (
                  <option key={s.id} value={s.id}>{s.name} • Class {s.class} (Roll #{s.rollNo})</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">English (Max 40)</label>
                <input
                  type="number"
                  max="40"
                  value={marksForm.english}
                  onChange={(e) => setMarksForm({ ...marksForm, english: e.target.value })}
                  className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Mathematics (Max 40)</label>
                <input
                  type="number"
                  max="40"
                  value={marksForm.maths}
                  onChange={(e) => setMarksForm({ ...marksForm, maths: e.target.value })}
                  className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Science (Max 40)</label>
                <input
                  type="number"
                  max="40"
                  value={marksForm.science}
                  onChange={(e) => setMarksForm({ ...marksForm, science: e.target.value })}
                  className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Social Science (Max 40)</label>
                <input
                  type="number"
                  max="40"
                  value={marksForm.social}
                  onChange={(e) => setMarksForm({ ...marksForm, social: e.target.value })}
                  className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsMarksEntryModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow"
              >
                Save Score & Calculate Grade
              </button>
            </div>
          </form>
        </Modal>
      )}

    </div>
  );
};

export default ExaminationPage;
