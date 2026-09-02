import React, { useState, useEffect, useMemo } from 'react';
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
  Edit2,
  Clock,
  UserCheck,
  HeartPulse,
  Trophy,
  Save,
  Check,
  X,
  Activity
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
    if (tab === 'exam-schedule-add' || tab === 'schedule-add') return 'schedule-add';
    if (tab === 'exam-marks' || tab === 'marks' || tab === 'examination') return 'marks';
    if (tab === 'exam-marks-attendance' || tab === 'marks-attendance') return 'marks-attendance';
    if (tab === 'exam-marks-traits' || tab === 'marks-traits') return 'marks-traits';
    if (tab === 'exam-marks-profile' || tab === 'marks-profile') return 'marks-profile';
    if (tab === 'exam-generate-position' || tab === 'generate-position') return 'generate-position';
    if (tab === 'exam-grades-range' || tab === 'grades-range') return 'grades-range';
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
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Exam Halls
  const [halls, setHalls] = useState([
    { id: 'HALL-01', name: 'Main Academic Auditorium', roomNo: 'Auditorium Ground Floor', capacity: 180, invigilators: '4 Teachers' },
    { id: 'HALL-02', name: 'Senior Wing Examination Hall 1', roomNo: 'Room 204 (First Floor)', capacity: 60, invigilators: '2 Teachers' },
    { id: 'HALL-03', name: 'Senior Wing Examination Hall 2', roomNo: 'Room 205 (First Floor)', capacity: 60, invigilators: '2 Teachers' },
    { id: 'HALL-04', name: 'Middle Wing Hall A', roomNo: 'Room 108 (Ground Floor)', capacity: 50, invigilators: '2 Teachers' }
  ]);

  // 2. Co-Scholastic Traits
  const [traits, setTraits] = useState([
    { id: 'TR-01', code: 'DISC', name: 'Discipline & Punctuality', category: 'Behavioral & Conduct', maxGrade: 'A+' },
    { id: 'TR-02', code: 'LEAD', name: 'Leadership & Teamwork', category: 'Social & Emotional', maxGrade: 'A+' },
    { id: 'TR-03', code: 'NEAT', name: 'Neatness & Homework Submission', category: 'Work Habits', maxGrade: 'A+' },
    { id: 'TR-04', code: 'SPRT', name: 'Sportsmanship & Physical Fitness', category: 'Health & Physical Education', maxGrade: 'A+' },
    { id: 'TR-05', code: 'ARTM', name: 'Art, Music & Cultural Participation', category: 'Performing & Visual Arts', maxGrade: 'A+' }
  ]);

  // 3. Exam Schedule Date Sheets
  const [schedule, setSchedule] = useState([
    { id: 'SCH-01', date: '2026-09-15', day: 'Monday', time: '08:30 AM - 11:30 AM', class: 'Class 10', subject: 'Mathematics Standard (041)', room: 'Auditorium' },
    { id: 'SCH-02', date: '2026-09-17', day: 'Wednesday', time: '08:30 AM - 11:30 AM', class: 'Class 10', subject: 'Science (086)', room: 'Auditorium' },
    { id: 'SCH-03', date: '2026-09-19', day: 'Friday', time: '08:30 AM - 11:30 AM', class: 'Class 10', subject: 'English Language & Lit (184)', room: 'Auditorium' },
    { id: 'SCH-04', date: '2026-09-22', day: 'Monday', time: '08:30 AM - 11:30 AM', class: 'Class 10', subject: 'Social Science (087)', room: 'Auditorium' },
    { id: 'SCH-05', date: '2026-09-24', day: 'Wednesday', time: '08:30 AM - 11:30 AM', class: 'Class 10', subject: 'Hindi Course A (002)', room: 'Auditorium' }
  ]);

  // Add Schedule Form State
  const [newScheduleForm, setNewScheduleForm] = useState({
    date: '2026-09-26',
    day: 'Friday',
    time: '08:30 AM - 11:30 AM',
    class: 'Class 10',
    subject: 'Computer Applications (165)',
    room: 'Computer Lab Hall'
  });

  // 4. Student Term Attendance State
  const [attendanceEntries, setAttendanceEntries] = useState(() => {
    return students.slice(0, 20).map((s, idx) => ({
      studentId: s.id,
      name: s.name,
      rollNo: s.rollNo || idx + 1,
      class: s.class || 'Class 10-A',
      totalDays: 110,
      presentDays: 102 - (idx % 8)
    }));
  });

  // 5. Student Traits Grades Matrix
  const [traitsEntries, setTraitsEntries] = useState(() => {
    return students.slice(0, 20).map((s, idx) => ({
      studentId: s.id,
      name: s.name,
      rollNo: s.rollNo || idx + 1,
      class: s.class || 'Class 10-A',
      discipline: idx % 3 === 0 ? 'A+' : 'A',
      leadership: idx % 2 === 0 ? 'A' : 'B+',
      neatness: 'A',
      sports: idx % 4 === 0 ? 'A+' : 'A',
      arts: 'A'
    }));
  });

  // 6. Student Profile Entries (Physical & Health)
  const [profileEntries, setProfileEntries] = useState(() => {
    return students.slice(0, 20).map((s, idx) => ({
      studentId: s.id,
      name: s.name,
      rollNo: s.rollNo || idx + 1,
      class: s.class || 'Class 10-A',
      height: 145 + (idx % 15),
      weight: 38 + (idx % 12),
      bloodGroup: ['A+', 'B+', 'O+', 'AB+'][idx % 4],
      vision: '6/6',
      dental: 'Normal'
    }));
  });

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

  const handleAddSchedule = (e) => {
    e.preventDefault();
    const newSch = {
      id: `SCH-${String(schedule.length + 1).padStart(2, '0')}`,
      ...newScheduleForm
    };
    setSchedule([...schedule, newSch]);
    showToast(`Exam scheduled for ${newScheduleForm.subject} on ${newScheduleForm.date}! 📅`, 'success');
    setActiveTab('schedule');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">

      {/* 🧭 Top Exam Master Master 3-Group Navigation */}
      <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-x-auto custom-scrollbar print:hidden">
        <div className="flex items-center gap-2 min-w-max text-xs font-bold">
          
          {/* Group 1: EXAM */}
          <div className="flex items-center p-1 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 gap-1">
            <span className="text-[10px] uppercase font-black px-2 text-indigo-800 dark:text-indigo-300">EXAM:</span>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'terms' ? 'bg-indigo-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-indigo-900'}`}
            >
              Exam Term
            </button>
            <button
              onClick={() => setActiveTab('halls')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'halls' ? 'bg-indigo-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-indigo-900'}`}
            >
              Exam Hall
            </button>
            <button
              onClick={() => setActiveTab('traits')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'traits' ? 'bg-indigo-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-indigo-900'}`}
            >
              Trait Type
            </button>
            <button
              onClick={() => setActiveTab('distribution')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'distribution' ? 'bg-indigo-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-indigo-900'}`}
            >
              Distribution
            </button>
            <button
              onClick={() => setActiveTab('setup')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'setup' ? 'bg-indigo-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-indigo-900'}`}
            >
              Exam Setup
            </button>
          </div>

          {/* Group 2: EXAM SCHEDULE */}
          <div className="flex items-center p-1 rounded-xl bg-amber-50/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 gap-1">
            <span className="text-[10px] uppercase font-black px-2 text-amber-800 dark:text-amber-300">EXAM SCHEDULE:</span>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'schedule' ? 'bg-amber-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-amber-900'}`}
            >
              Schedule ({schedule.length})
            </button>
            <button
              onClick={() => setActiveTab('schedule-add')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'schedule-add' ? 'bg-amber-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-amber-900'}`}
            >
              + Add Schedule
            </button>
          </div>

          {/* Group 3: MARKS */}
          <div className="flex items-center p-1 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 gap-1">
            <span className="text-[10px] uppercase font-black px-2 text-emerald-800 dark:text-emerald-300">MARKS:</span>
            <button
              onClick={() => setActiveTab('marks')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'marks' ? 'bg-emerald-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-emerald-900'}`}
            >
              Mark Entries
            </button>
            <button
              onClick={() => setActiveTab('marks-attendance')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'marks-attendance' ? 'bg-emerald-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-emerald-900'}`}
            >
              Attendance Entries
            </button>
            <button
              onClick={() => setActiveTab('marks-traits')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'marks-traits' ? 'bg-emerald-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-emerald-900'}`}
            >
              Traits Entries
            </button>
            <button
              onClick={() => setActiveTab('marks-profile')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'marks-profile' ? 'bg-emerald-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-emerald-900'}`}
            >
              Profile Entries
            </button>
            <button
              onClick={() => setActiveTab('generate-position')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'generate-position' ? 'bg-emerald-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-emerald-900'}`}
            >
              Generate Position
            </button>
            <button
              onClick={() => setActiveTab('grades-range')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'grades-range' ? 'bg-emerald-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-emerald-900'}`}
            >
              Grades Range
            </button>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 🧪 1. EXAM - EXAM TERMS */}
      {/* ========================================================================= */}
      {activeTab === 'terms' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white">Academic Examination Terms</h3>
              <p className="text-xs text-slate-500">Periodic Tests, Mid-Term (Half Yearly), Pre-Board & Annual Examinations</p>
            </div>
            <Badge variant="primary">Academic Session 2026-27</Badge>
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
      {/* 🏛️ 2. EXAM - EXAM HALLS */}
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
      {/* 🌟 3. EXAM - TRAIT TYPE (CO-SCHOLASTIC) */}
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
      {/* ⚖️ 4. EXAM - MARKS DISTRIBUTION */}
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
      {/* ⚙️ 5. EXAM - EXAM SETUP */}
      {/* ========================================================================= */}
      {activeTab === 'setup' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600" /> Examination Rules & Pass Percentage Setup
            </h3>
            <p className="text-xs text-slate-500">Configure minimum passing criteria, grace mark limits, and assessment weightage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="text-xs font-bold text-slate-400">Theory Pass Threshold</span>
              <p className="text-2xl font-black font-mono text-indigo-600">33.0%</p>
              <span className="text-[11px] text-slate-500">Mandatory per subject</span>
            </div>
            <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="text-xs font-bold text-slate-400">Practical Pass Threshold</span>
              <p className="text-2xl font-black font-mono text-emerald-600">33.0%</p>
              <span className="text-[11px] text-slate-500">Separate practical clearing</span>
            </div>
            <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="text-xs font-bold text-slate-400">Max Grace Marks</span>
              <p className="text-2xl font-black font-mono text-amber-600">5 Marks</p>
              <span className="text-[11px] text-slate-500">Principal discretion</span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📅 6. EXAM SCHEDULE - SCHEDULE LIST */}
      {/* ========================================================================= */}
      {activeTab === 'schedule' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-600" /> Examination Date Sheet Timetable
              </h3>
              <p className="text-xs text-slate-500">Published examination schedule for Term 1 / Half Yearly 2026-27</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('schedule-add')}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" /> Add Date Sheet Entry
              </button>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold hover:bg-slate-200 flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4" /> Print Date Sheet
              </button>
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Date</th>
                  <th className="p-3.5">Day</th>
                  <th className="p-3.5">Class</th>
                  <th className="p-3.5">Subject</th>
                  <th className="p-3.5">Time</th>
                  <th className="p-3.5">Room / Hall</th>
                  <th className="p-3.5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {schedule.map(sch => (
                  <tr key={sch.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-indigo-600">{sch.date}</td>
                    <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-300">{sch.day}</td>
                    <td className="p-3.5 font-black text-slate-900 dark:text-white">{sch.class}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{sch.subject}</td>
                    <td className="p-3.5 font-mono text-slate-500">{sch.time}</td>
                    <td className="p-3.5 font-semibold text-slate-700 dark:text-slate-300">{sch.room}</td>
                    <td className="p-3.5 text-right">
                      <Badge variant="primary">Published</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📅 7. EXAM SCHEDULE - ADD SCHEDULE */}
      {/* ========================================================================= */}
      {activeTab === 'schedule-add' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5 max-w-xl">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Plus className="w-5 h-5 text-amber-600" /> Add Exam Schedule (Date Sheet Entry)
              </h3>
              <p className="text-xs text-slate-500">Create date, timing and hall mapping for upcoming examination</p>
            </div>
            <button
              onClick={() => setActiveTab('schedule')}
              className="text-xs text-slate-500 font-bold hover:text-slate-800"
            >
              Back to Date Sheet
            </button>
          </div>

          <form onSubmit={handleAddSchedule} className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Exam Date *</label>
                <input
                  type="date"
                  required
                  value={newScheduleForm.date}
                  onChange={(e) => setNewScheduleForm({ ...newScheduleForm, date: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Day of Week *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Monday"
                  value={newScheduleForm.day}
                  onChange={(e) => setNewScheduleForm({ ...newScheduleForm, day: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Class *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Class 10"
                  value={newScheduleForm.class}
                  onChange={(e) => setNewScheduleForm({ ...newScheduleForm, class: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Time Range *</label>
                <input
                  type="text"
                  required
                  placeholder="08:30 AM - 11:30 AM"
                  value={newScheduleForm.time}
                  onChange={(e) => setNewScheduleForm({ ...newScheduleForm, time: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Subject Name & Code *</label>
              <input
                type="text"
                required
                placeholder="e.g. Science (086)"
                value={newScheduleForm.subject}
                onChange={(e) => setNewScheduleForm({ ...newScheduleForm, subject: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Exam Hall / Room</label>
              <select
                value={newScheduleForm.room}
                onChange={(e) => setNewScheduleForm({ ...newScheduleForm, room: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              >
                {halls.map(h => (
                  <option key={h.id} value={h.name}>{h.name} ({h.roomNo})</option>
                ))}
              </select>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setActiveTab('schedule')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow"
              >
                Publish to Date Sheet
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ✏️ 8. MARKS - MARK ENTRIES */}
      {/* ========================================================================= */}
      {activeTab === 'marks' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600" /> Student Scorebook & Mark Entries
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Recorded subject scores, percentage, CBSE grades, and instant report cards</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMarksEntryModalOpen(true)}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" /> Enter Student Marks
              </button>
            </div>
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
      {/* ✏️ 9. MARKS - ATTENDANCE ENTRIES */}
      {/* ========================================================================= */}
      {activeTab === 'marks-attendance' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-emerald-600" /> Exam Attendance & Term Days Working Record
              </h3>
              <p className="text-xs text-slate-500">Record working days and attendance count to be printed on the official CBSE report card</p>
            </div>
            <button
              onClick={() => showToast('Attendance entries updated for report cards! ✅', 'success')}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow"
            >
              <Save className="w-4 h-4" /> Save Attendance Matrix
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Roll No</th>
                  <th className="p-3.5">Student Name</th>
                  <th className="p-3.5">Class</th>
                  <th className="p-3.5">Total Working Days</th>
                  <th className="p-3.5">Days Present</th>
                  <th className="p-3.5">Attendance %</th>
                  <th className="p-3.5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {attendanceEntries.map((att, idx) => {
                  const pct = ((att.presentDays / att.totalDays) * 100).toFixed(1);
                  return (
                    <tr key={att.studentId} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3.5 font-mono text-slate-500 font-bold">#{att.rollNo}</td>
                      <td className="p-3.5 font-bold text-slate-900 dark:text-white">{att.name}</td>
                      <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-400">{att.class}</td>
                      <td className="p-3.5 font-mono font-bold">{att.totalDays} Days</td>
                      <td className="p-3.5">
                        <input
                          type="number"
                          value={att.presentDays}
                          onChange={(e) => {
                            const val = Number(e.target.value);
                            setAttendanceEntries(prev => prev.map(item => item.studentId === att.studentId ? { ...item, presentDays: val } : item));
                          }}
                          className="w-20 p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 font-mono font-bold text-emerald-600"
                        />
                      </td>
                      <td className="p-3.5 font-mono font-black text-indigo-600">{pct}%</td>
                      <td className="p-3.5 text-right">
                        <Badge variant={Number(pct) >= 75 ? 'success' : 'warning'}>
                          {Number(pct) >= 75 ? 'Eligible' : 'Shortage'}
                        </Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ✏️ 10. MARKS - TRAITS ENTRIES */}
      {/* ========================================================================= */}
      {activeTab === 'marks-traits' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" /> Student Co-Scholastic Traits Grading Matrix
              </h3>
              <p className="text-xs text-slate-500">Grade students on Discipline, Leadership, Work Habits, Sports and Performing Arts</p>
            </div>
            <button
              onClick={() => showToast('Traits grades saved! ⭐', 'success')}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow"
            >
              <Save className="w-4 h-4" /> Save Traits Grades
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Roll</th>
                  <th className="p-3.5">Student Name</th>
                  <th className="p-3.5">Discipline</th>
                  <th className="p-3.5">Leadership</th>
                  <th className="p-3.5">Neatness</th>
                  <th className="p-3.5">Sports & Health</th>
                  <th className="p-3.5">Arts & Music</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {traitsEntries.map((tr, idx) => (
                  <tr key={tr.studentId} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono text-slate-500 font-bold">#{tr.rollNo}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{tr.name}</td>
                    {['discipline', 'leadership', 'neatness', 'sports', 'arts'].map(key => (
                      <td key={key} className="p-3.5">
                        <select
                          value={tr[key]}
                          onChange={(e) => {
                            const val = e.target.value;
                            setTraitsEntries(prev => prev.map(item => item.studentId === tr.studentId ? { ...item, [key]: val } : item));
                          }}
                          className="p-1 rounded-lg border border-slate-200 dark:border-slate-700 font-bold font-mono text-xs text-indigo-700 dark:text-indigo-300"
                        >
                          <option value="A+">A+</option>
                          <option value="A">A</option>
                          <option value="B+">B+</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                        </select>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ✏️ 11. MARKS - PROFILE ENTRIES */}
      {/* ========================================================================= */}
      {activeTab === 'marks-profile' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-emerald-600" /> Student Health & Physical Profile Entries
              </h3>
              <p className="text-xs text-slate-500">Record height, weight, vision, and blood group for the CBSE student progress card</p>
            </div>
            <button
              onClick={() => showToast('Student health profiles updated! 🩺', 'success')}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow"
            >
              <Save className="w-4 h-4" /> Save Health Profiles
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Roll</th>
                  <th className="p-3.5">Student Name</th>
                  <th className="p-3.5">Height (cm)</th>
                  <th className="p-3.5">Weight (kg)</th>
                  <th className="p-3.5">Blood Group</th>
                  <th className="p-3.5">Vision</th>
                  <th className="p-3.5">Dental Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {profileEntries.map((prof, idx) => (
                  <tr key={prof.studentId} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono text-slate-500 font-bold">#{prof.rollNo}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{prof.name}</td>
                    <td className="p-3.5">
                      <input
                        type="number"
                        value={prof.height}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setProfileEntries(prev => prev.map(item => item.studentId === prof.studentId ? { ...item, height: val } : item));
                        }}
                        className="w-20 p-1 rounded-lg border border-slate-200 dark:border-slate-700 font-mono font-bold"
                      />
                    </td>
                    <td className="p-3.5">
                      <input
                        type="number"
                        value={prof.weight}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setProfileEntries(prev => prev.map(item => item.studentId === prof.studentId ? { ...item, weight: val } : item));
                        }}
                        className="w-20 p-1 rounded-lg border border-slate-200 dark:border-slate-700 font-mono font-bold"
                      />
                    </td>
                    <td className="p-3.5 font-bold font-mono text-rose-600">{prof.bloodGroup}</td>
                    <td className="p-3.5 font-mono text-slate-600 dark:text-slate-300">{prof.vision}</td>
                    <td className="p-3.5 text-emerald-600 font-bold">{prof.dental}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ✏️ 12. MARKS - GENERATE POSITION */}
      {/* ========================================================================= */}
      {activeTab === 'generate-position' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" /> Class Ranks & Position Generator
              </h3>
              <p className="text-xs text-slate-500">Calculate 1st, 2nd, 3rd position ranks automatically based on final percentage score</p>
            </div>
            <button
              onClick={() => showToast('Class rank positions calculated & published! 🏆', 'success')}
              className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow hover:scale-105 transition-all"
            >
              <Trophy className="w-4 h-4" /> Recalculate Class Positions
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-3xl bg-amber-50/60 dark:bg-amber-950/30 border-2 border-amber-300 dark:border-amber-700 space-y-2 text-center">
              <span className="text-3xl">🥇</span>
              <span className="text-xs font-black uppercase text-amber-800 dark:text-amber-300 block">1st Rank (Class Topper)</span>
              <h4 className="text-base font-black text-slate-900 dark:text-white">Aarav Sharma</h4>
              <p className="text-xs font-mono font-black text-emerald-600">97.5% (Total 195/200)</p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 space-y-2 text-center">
              <span className="text-3xl">🥈</span>
              <span className="text-xs font-black uppercase text-slate-600 dark:text-slate-300 block">2nd Rank</span>
              <h4 className="text-base font-black text-slate-900 dark:text-white">Ananya Singh</h4>
              <p className="text-xs font-mono font-black text-indigo-600">94.0% (Total 188/200)</p>
            </div>

            <div className="p-6 rounded-3xl bg-amber-50/30 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 space-y-2 text-center">
              <span className="text-3xl">🥉</span>
              <span className="text-xs font-black uppercase text-amber-700 dark:text-amber-400 block">3rd Rank</span>
              <h4 className="text-base font-black text-slate-900 dark:text-white">Ritu Yadav</h4>
              <p className="text-xs font-mono font-black text-indigo-600">92.5% (Total 185/200)</p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ✏️ 13. MARKS - GRADES RANGE */}
      {/* ========================================================================= */}
      {activeTab === 'grades-range' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-600" /> CBSE 9-Point Absolute Grading Scale Range
            </h3>
            <p className="text-xs text-slate-500">Official CBSE grade boundary thresholds and Grade Point (GP) values</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
            {[
              { grade: 'A1', range: '91 - 100%', points: '10.0', desc: 'Top 1/8th', color: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
              { grade: 'A2', range: '81 - 90%', points: '9.0', desc: 'Next 1/8th', color: 'bg-teal-50 text-teal-800 border-teal-300' },
              { grade: 'B1', range: '71 - 80%', points: '8.0', desc: 'Next 1/8th', color: 'bg-blue-50 text-blue-800 border-blue-300' },
              { grade: 'B2', range: '61 - 70%', points: '7.0', desc: 'Next 1/8th', color: 'bg-indigo-50 text-indigo-800 border-indigo-300' },
              { grade: 'C1', range: '51 - 60%', points: '6.0', desc: 'Next 1/8th', color: 'bg-purple-50 text-purple-800 border-purple-300' },
              { grade: 'C2', range: '41 - 50%', points: '5.0', desc: 'Next 1/8th', color: 'bg-amber-50 text-amber-800 border-amber-300' },
              { grade: 'D', range: '33 - 40%', points: '4.0', desc: 'Pass Level', color: 'bg-orange-50 text-orange-800 border-orange-300' },
              { grade: 'E', range: 'Below 33%', points: '0.0', desc: 'Essential Repeat', color: 'bg-rose-50 text-rose-800 border-rose-300' }
            ].map(g => (
              <div key={g.grade} className={`p-4 rounded-2xl border ${g.color} space-y-1`}>
                <span className="text-2xl font-black">{g.grade}</span>
                <p className="text-[10px] font-bold">{g.range}</p>
                <span className="text-[10px] font-mono block opacity-80">GP: {g.points}</span>
                <span className="text-[9px] text-slate-500 block">{g.desc}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📦 MODALS */}
      {/* ========================================================================= */}

      {/* Marks Entry Modal */}
      {isMarksEntryModalOpen && (
        <Modal
          isOpen={isMarksEntryModalOpen}
          onClose={() => setIsMarksEntryModalOpen(false)}
          title="📝 Enter Student Subject Marks"
          maxWidth="max-w-lg"
        >
          <form onSubmit={handleSaveMarks} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select Student *</label>
              <select
                value={marksForm.studentId}
                onChange={(e) => setMarksForm({ ...marksForm, studentId: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              >
                {students.map(s => (
                  <option key={s.id} value={s.id}>{s.name} ({s.class} • Roll #{s.rollNo})</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">English (Max 40)</label>
                <input
                  type="number"
                  min="0"
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
                  min="0"
                  max="40"
                  value={marksForm.maths}
                  onChange={(e) => setMarksForm({ ...marksForm, maths: e.target.value })}
                  className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Science (Max 40)</label>
                <input
                  type="number"
                  min="0"
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
                  min="0"
                  max="40"
                  value={marksForm.social}
                  onChange={(e) => setMarksForm({ ...marksForm, social: e.target.value })}
                  className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Computer Applications (Max 40)</label>
              <input
                type="number"
                min="0"
                max="40"
                value={marksForm.computer}
                onChange={(e) => setMarksForm({ ...marksForm, computer: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsMarksEntryModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow"
              >
                Save Score
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Printable Report Card Modal */}
      {isReportCardModalOpen && selectedStudentForReport && (
        <Modal
          isOpen={isReportCardModalOpen}
          onClose={() => setIsReportCardModalOpen(false)}
          title={`CBSE Report Card • ${selectedStudentForReport.name} (${selectedStudentForReport.class})`}
          maxWidth="max-w-4xl"
        >
          <PrintableReportCard
            student={selectedStudentForReport}
            exam={exams.find(e => e.id === selectedExam) || exams[0]}
            marksEntry={selectedStudentForReport.marksEntry}
            schoolInfo={schoolInfo}
            onClose={() => setIsReportCardModalOpen(false)}
          />
        </Modal>
      )}

    </div>
  );
};

export default ExaminationPage;
