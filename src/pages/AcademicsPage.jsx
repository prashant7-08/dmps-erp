import React, { useState, useMemo } from 'react';
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
  PlusCircle,
  Clock,
  Calendar,
  Award,
  Save,
  Grid,
  List
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const AcademicsPage = ({ initialTab = 'classes' }) => {
  const { showToast } = useToast();
  const [classes, setClasses] = useState(schoolService.getClasses());
  const [subjects, setSubjects] = useState(schoolService.getSubjects());
  const teachers = schoolService.getTeachers();
  const students = schoolService.getStudents();
  const branches = schoolService.getBranches() || [
    { id: 'BR-01', name: 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)' },
    { id: 'BR-02', name: 'DADHEECH MEMORIAL PUBLIC SCHOOL OLD JARGWAN CAMPUS' }
  ];

  const defaultBranch = 'DADHEECH MEMORIAL PUBLIC SCHOOL NEW BUILDING (SMART)';

  const resolveTab = (tab) => {
    if (!tab) return 'classes';
    if (tab === 'acad-classes' || tab === 'classes') return 'classes';
    if (tab === 'acad-assign-teacher' || tab === 'assign-teacher') return 'assign-teacher';
    if (tab === 'acad-subjects' || tab === 'subjects') return 'subjects';
    if (tab === 'acad-class-assign' || tab === 'class-assign') return 'class-assign';
    if (tab === 'acad-lesson-plan' || tab === 'lesson-plan' || tab === 'syllabus') return 'lesson-plan';
    if (tab === 'acad-diary' || tab === 'digital-diary' || tab === 'classwork') return 'digital-diary';
    if (tab === 'acad-promotion' || tab === 'promotion') return 'promotion';
    return tab;
  };

  const [activeTab, setActiveTab] = useState(() => resolveTab(initialTab));

  React.useEffect(() => {
    if (initialTab) setActiveTab(resolveTab(initialTab));
  }, [initialTab]);

  // Lesson Plans State (ERPMANTRA Style)
  const [selectedLessonClass, setSelectedLessonClass] = useState('Class 10');
  const [selectedLessonSubject, setSelectedLessonSubject] = useState('Mathematics');
  const [lessonPlans, setLessonPlans] = useState([
    { id: 'LP-01', class: 'Class 10', subject: 'Mathematics', unit: 'Unit 1: Number Systems', chapter: 'Real Numbers (Euclid Lemma & Irrationality)', plannedLectures: 6, completedLectures: 6, progress: 100, status: 'Completed', teacher: 'Mrs. Sunita Verma' },
    { id: 'LP-02', class: 'Class 10', subject: 'Mathematics', unit: 'Unit 2: Algebra', chapter: 'Polynomials (Geometrical Meaning of Zeroes)', plannedLectures: 8, completedLectures: 8, progress: 100, status: 'Completed', teacher: 'Mrs. Sunita Verma' },
    { id: 'LP-03', class: 'Class 10', subject: 'Mathematics', unit: 'Unit 2: Algebra', chapter: 'Pair of Linear Equations in Two Variables', plannedLectures: 10, completedLectures: 8, progress: 80, status: 'In Progress', teacher: 'Mrs. Sunita Verma' },
    { id: 'LP-04', class: 'Class 10', subject: 'Mathematics', unit: 'Unit 2: Algebra', chapter: 'Quadratic Equations (Discriminant & Nature of Roots)', plannedLectures: 10, completedLectures: 4, progress: 40, status: 'In Progress', teacher: 'Mrs. Sunita Verma' },
    { id: 'LP-05', class: 'Class 10', subject: 'Mathematics', unit: 'Unit 3: Coordinate Geometry', chapter: 'Coordinate Geometry (Distance & Section Formula)', plannedLectures: 8, completedLectures: 0, progress: 0, status: 'Upcoming', teacher: 'Mrs. Sunita Verma' },
    { id: 'LP-06', class: 'Class 10', subject: 'Science', unit: 'Unit 1: Natural Phenomena', chapter: 'Light: Reflection & Refraction (Ray Diagrams)', plannedLectures: 12, completedLectures: 10, progress: 83, status: 'In Progress', teacher: 'Dr. Rajesh Sharma' },
    { id: 'LP-07', class: 'Class 10', subject: 'Science', unit: 'Unit 1: Chemical Substances', chapter: 'Chemical Reactions & Equations (Balancing & Types)', plannedLectures: 8, completedLectures: 8, progress: 100, status: 'Completed', teacher: 'Mr. Amitabh Sen' }
  ]);

  // Digital Class Diary State
  const [diaryEntries, setDiaryEntries] = useState([
    { id: 'DIA-01', date: '2026-09-12', class: 'Class 10-A', subject: 'Mathematics', teacher: 'Mrs. Sunita Verma', period: 'Period 2', topic: 'Quadratic Equations Ex 4.3 Word Problems', homework: 'Solve Q5 to Q8 in notebook', activity: 'Graph sketching on blackboard', remarks: 'Good student participation' },
    { id: 'DIA-02', date: '2026-09-12', class: 'Class 10-A', subject: 'Physics', teacher: 'Dr. Rajesh Sharma', period: 'Period 1', topic: 'Refraction through Glass Prism & Dispersion', homework: 'Draw Spectrum diagram', activity: 'Prism laser ray demonstration', remarks: 'All students observed rainbow dispersion' },
    { id: 'DIA-03', date: '2026-09-11', class: 'Class 9-A', subject: 'Chemistry', teacher: 'Mr. Amitabh Sen', period: 'Period 3', topic: 'Law of Conservation of Mass in Chemical Reaction', homework: 'Read NCERT page 32', activity: 'Barium chloride precipitation demo', remarks: 'Practical completed in lab' }
  ]);

  const [isAddLessonModalOpen, setIsAddLessonModalOpen] = useState(false);
  const [newLessonForm, setNewLessonForm] = useState({
    class: 'Class 10',
    subject: 'Mathematics',
    unit: 'Unit 4: Geometry',
    chapter: 'Triangles (Similarity Criteria & BPT Theorem)',
    plannedLectures: 12,
    teacher: 'Mrs. Sunita Verma'
  });

  const [isAddDiaryModalOpen, setIsAddDiaryModalOpen] = useState(false);
  const [newDiaryForm, setNewDiaryForm] = useState({
    date: new Date().toISOString().split('T')[0],
    class: 'Class 10-A',
    subject: 'Mathematics',
    teacher: 'Mrs. Sunita Verma',
    period: 'Period 3',
    topic: '',
    homework: '',
    activity: '',
    remarks: 'Lesson completed successfully'
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWingFilter, setSelectedWingFilter] = useState('All');
  const [classViewMode, setClassViewMode] = useState('table'); // 'table' (screenshot match) or 'cards' (rich visual)
  const [controlClassSubTab, setControlClassSubTab] = useState('class'); // 'class' or 'section'

  // Control Classes Form State
  const [createClassForm, setCreateClassForm] = useState({
    id: null,
    branch: defaultBranch,
    name: '',
    classNumeric: '',
    section: 'A',
    wing: 'Primary'
  });

  // Section Master State
  const [sectionsList, setSectionsList] = useState([
    { id: 'SEC-01', branch: defaultBranch, name: 'A', capacity: 40, room: 'Room 101' },
    { id: 'SEC-02', branch: defaultBranch, name: 'B', capacity: 40, room: 'Room 102' },
    { id: 'SEC-03', branch: defaultBranch, name: 'C', capacity: 35, room: 'Room 103' },
    { id: 'SEC-04', branch: defaultBranch, name: 'Science', capacity: 45, room: 'Physics Lab Hall' },
    { id: 'SEC-05', branch: defaultBranch, name: 'Commerce', capacity: 45, room: 'Commerce Block' },
    { id: 'SEC-06', branch: defaultBranch, name: 'Arts', capacity: 40, room: 'Humanities Wing' }
  ]);

  const [createSectionForm, setCreateSectionForm] = useState({
    id: null,
    branch: defaultBranch,
    name: '',
    capacity: 40
  });

  // Create Subject Form State
  const [createSubjectForm, setCreateSubjectForm] = useState({
    id: null,
    branch: defaultBranch,
    name: '',
    code: '',
    type: 'Theory + Practical',
    class: 'Class 10',
    maxMarks: 100,
    passMarks: 33,
    teacher: teachers[0]?.name || 'POORAN SINGH',
    credits: 4
  });

  // Class Subject Assign State
  const [selectedAssignClass, setSelectedAssignClass] = useState('Class 10');
  const [selectedAssignSection, setSelectedAssignSection] = useState('A');
  const [classSubjectAssignments, setClassSubjectAssignments] = useState({
    'Class 10': ['MATH-041', 'SCI-086', 'ENG-184', 'HIN-002', 'SST-087', 'IT-402'],
    'Class 9': ['MATH-041', 'SCI-086', 'ENG-184', 'HIN-002', 'SST-087'],
    'Class 11': ['PHY-042', 'CHEM-043', 'MATH-041', 'ENG-301', 'CS-083'],
    'Class 12': ['PHY-042', 'CHEM-043', 'BIO-044', 'ENG-301', 'PHE-048']
  });

  // Modal States
  const [isAddClassModalOpen, setIsAddClassModalOpen] = useState(false);
  const [isEditClassModalOpen, setIsEditClassModalOpen] = useState(false);
  const [isAddSubjectModalOpen, setIsAddSubjectModalOpen] = useState(false);
  const [isEditSubjectModalOpen, setIsEditSubjectModalOpen] = useState(false);
  const [isPromotionModalOpen, setIsPromotionModalOpen] = useState(false);

  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [newSectionInput, setNewSectionInput] = useState({});

  // Promotion Form State
  const [promotionData, setPromotionData] = useState({
    fromClass: 'Class 9',
    toClass: 'Class 10',
    session: '2026-2027',
    minPassPercentage: 33
  });

  const wings = ['Pre-Primary', 'Primary', 'Middle', 'Secondary', 'Senior Secondary'];

  // --- SAVE / EDIT CLASS FROM LEFT FORM ---
  const handleSaveClassFromForm = (e) => {
    e.preventDefault();
    if (!createClassForm.name.trim()) return;

    if (createClassForm.id) {
      setClasses(prev => prev.map(c => c.id === createClassForm.id ? {
        ...c,
        name: createClassForm.name,
        branch: createClassForm.branch,
        classNumeric: createClassForm.classNumeric,
        sections: createClassForm.section ? createClassForm.section.split(',').map(s => s.trim()) : c.sections
      } : c));
      showToast(`Class "${createClassForm.name}" updated successfully!`, 'success');
      setCreateClassForm({ id: null, branch: defaultBranch, name: '', classNumeric: '', section: 'A', wing: 'Primary' });
    } else {
      const newCls = {
        id: `CLS-${Date.now().toString().slice(-4)}`,
        name: createClassForm.name,
        branch: createClassForm.branch,
        classNumeric: createClassForm.classNumeric,
        wing: createClassForm.wing || 'Primary',
        sections: createClassForm.section ? createClassForm.section.split(',').map(s => s.trim()) : ['A'],
        maxStrength: 40,
        classTeacher: teachers[0]?.name || 'Unassigned'
      };
      setClasses([...classes, newCls]);
      showToast(`Class "${newCls.name}" created successfully!`, 'success');
      setCreateClassForm({ id: null, branch: defaultBranch, name: '', classNumeric: '', section: 'A', wing: 'Primary' });
    }
  };

  // --- SAVE / EDIT SECTION FROM LEFT FORM ---
  const handleSaveSectionFromForm = (e) => {
    e.preventDefault();
    if (!createSectionForm.name.trim()) return;

    if (createSectionForm.id) {
      setSectionsList(prev => prev.map(s => s.id === createSectionForm.id ? { ...createSectionForm } : s));
      showToast(`Section "${createSectionForm.name}" updated!`, 'success');
      setCreateSectionForm({ id: null, branch: defaultBranch, name: '', capacity: 40 });
    } else {
      const newSec = {
        id: `SEC-${Date.now().toString().slice(-4)}`,
        ...createSectionForm
      };
      setSectionsList([...sectionsList, newSec]);
      showToast(`Section "${newSec.name}" created!`, 'success');
      setCreateSectionForm({ id: null, branch: defaultBranch, name: '', capacity: 40 });
    }
  };

  // --- SAVE / EDIT SUBJECT FROM LEFT FORM ---
  const handleSaveSubjectFromForm = (e) => {
    e.preventDefault();
    if (!createSubjectForm.name.trim() || !createSubjectForm.code.trim()) return;

    if (createSubjectForm.id) {
      setSubjects(prev => prev.map(s => s.id === createSubjectForm.id ? { ...createSubjectForm } : s));
      showToast(`Subject "${createSubjectForm.name}" updated!`, 'success');
      setCreateSubjectForm({ id: null, branch: defaultBranch, name: '', code: '', type: 'Theory + Practical', class: 'Class 10', maxMarks: 100, passMarks: 33, teacher: teachers[0]?.name || 'POORAN SINGH', credits: 4 });
    } else {
      const newSub = {
        id: `SUB-${Date.now().toString().slice(-4)}`,
        ...createSubjectForm
      };
      setSubjects([...subjects, newSub]);
      showToast(`Subject "${newSub.name}" added to curriculum!`, 'success');
      setCreateSubjectForm({ id: null, branch: defaultBranch, name: '', code: '', type: 'Theory + Practical', class: 'Class 10', maxMarks: 100, passMarks: 33, teacher: teachers[0]?.name || 'POORAN SINGH', credits: 4 });
    }
  };

  const handlePromoteStudents = (e) => {
    e.preventDefault();
    setIsPromotionModalOpen(false);
    showToast(`Batch promoted from ${promotionData.fromClass} to ${promotionData.toClass} for Session ${promotionData.session}! 🎉`, 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">

      {/* 🧭 Academic Suite Master Navigation Bar */}
      <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-x-auto custom-scrollbar print:hidden">
        <div className="flex items-center gap-1.5 min-w-max text-xs font-bold">
          <button
            onClick={() => setActiveTab('classes')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'classes' ? 'bg-blue-600 text-white shadow-md font-black' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <School className="w-4 h-4" /> Control Classes ({classes.length})
          </button>
          <button
            onClick={() => setActiveTab('assign-teacher')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'assign-teacher' ? 'bg-blue-600 text-white shadow-md font-black' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <UserCheck className="w-4 h-4" /> Assign Class Teacher
          </button>
          <button
            onClick={() => setActiveTab('subjects')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'subjects' ? 'bg-blue-600 text-white shadow-md font-black' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" /> Subject Master ({subjects.length})
          </button>
          <button
            onClick={() => setActiveTab('class-assign')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'class-assign' ? 'bg-blue-600 text-white shadow-md font-black' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" /> Class Subject Assign
          </button>
          <button
            onClick={() => setActiveTab('lesson-plan')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'lesson-plan' ? 'bg-blue-600 text-white shadow-md font-black' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Lesson Plan & Syllabus ({lessonPlans.length})
          </button>
          <button
            onClick={() => setActiveTab('digital-diary')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'digital-diary' ? 'bg-blue-600 text-white shadow-md font-black' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Calendar className="w-4 h-4 text-amber-300" /> Daily Classwork & Diary ({diaryEntries.length})
          </button>
          <button
            onClick={() => setIsPromotionModalOpen(true)}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'promotion' ? 'bg-purple-600 text-white shadow-md font-black' : 'text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/40'
            }`}
          >
            <ArrowRightLeft className="w-4 h-4" /> Promotion Rollover
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 🏫 SECTION 1: CONTROL CLASSES (Exact Match with Class / Section Tabs & Form) */}
      {/* ========================================================================= */}
      {activeTab === 'classes' && (
        <div className="space-y-5">
          {/* Sub-Tabs: Class | Section */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setControlClassSubTab('class')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  controlClassSubTab === 'class' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                <GraduationCap className="w-4 h-4" /> Class
              </button>
              <button
                onClick={() => setControlClassSubTab('section')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  controlClassSubTab === 'section' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                <Layers className="w-4 h-4" /> Section
              </button>
            </div>

            {/* View Mode Switcher */}
            {controlClassSubTab === 'class' && (
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs">
                <button
                  onClick={() => setClassViewMode('table')}
                  className={`p-1.5 rounded-lg ${classViewMode === 'table' ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow-xs font-bold' : 'text-slate-500'}`}
                  title="Table View (Old ERP Match)"
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setClassViewMode('cards')}
                  className={`p-1.5 rounded-lg ${classViewMode === 'cards' ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow-xs font-bold' : 'text-slate-500'}`}
                  title="Card Grid View"
                >
                  <Grid className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* 🎓 SUB-TAB 1: CLASS (Create Class on Left, Class List on Right) */}
          {controlClassSubTab === 'class' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Create Class Form */}
              <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <Edit2 className="w-4 h-4 text-indigo-600" />
                    {createClassForm.id ? 'Edit Class' : 'Create Class'}
                  </h3>
                  {createClassForm.id && (
                    <button
                      onClick={() => setCreateClassForm({ id: null, branch: defaultBranch, name: '', classNumeric: '', section: 'A', wing: 'Primary' })}
                      className="text-xs text-rose-500 font-bold"
                    >
                      Reset Form
                    </button>
                  )}
                </div>

                <form onSubmit={handleSaveClassFromForm} className="space-y-4 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Branch *</label>
                    <select
                      value={createClassForm.branch}
                      onChange={(e) => setCreateClassForm({ ...createClassForm, branch: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                    >
                      {branches.map(b => (
                        <option key={b.id} value={b.name}>{b.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. PG, NURSERY, LKG, UKG, I, II, X..."
                      value={createClassForm.name}
                      onChange={(e) => setCreateClassForm({ ...createClassForm, name: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold uppercase"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Class Numeric</label>
                    <input
                      type="text"
                      placeholder="e.g. 1, 2, 3, 10..."
                      value={createClassForm.classNumeric}
                      onChange={(e) => setCreateClassForm({ ...createClassForm, classNumeric: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Section *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. A or A, B, C"
                      value={createClassForm.section}
                      onChange={(e) => setCreateClassForm({ ...createClassForm, section: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <Save className="w-4 h-4" /> Save Class
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column: Class List */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <List className="w-4 h-4 text-indigo-600" /> Class List ({classes.length})
                  </h3>
                  <div className="relative w-48">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search class..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                    />
                  </div>
                </div>

                {classViewMode === 'table' ? (
                  <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-2xl">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                          <th className="p-3">#</th>
                          <th className="p-3">Branch</th>
                          <th className="p-3">Class Name</th>
                          <th className="p-3">Class Numeric</th>
                          <th className="p-3">Section</th>
                          <th className="p-3 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {classes
                          .filter(c => !searchQuery || c.name.toLowerCase().includes(searchQuery.toLowerCase()))
                          .map((cls, idx) => (
                            <tr key={cls.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                              <td className="p-3 font-mono text-slate-400 font-bold">{idx + 1}</td>
                              <td className="p-3 text-slate-600 dark:text-slate-400 font-medium max-w-[180px] truncate" title={cls.branch || defaultBranch}>
                                {cls.branch || defaultBranch}
                              </td>
                              <td className="p-3 font-black text-slate-900 dark:text-white uppercase">{cls.name}</td>
                              <td className="p-3 font-mono font-bold text-indigo-600">{cls.classNumeric || idx + 1}</td>
                              <td className="p-3">
                                <div className="flex flex-wrap gap-1">
                                  {(Array.isArray(cls.sections) ? cls.sections : ['A']).map((sec, i) => (
                                    <span key={i} className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold text-[10px] border border-blue-200">
                                      {sec}
                                    </span>
                                  ))}
                                </div>
                              </td>
                              <td className="p-3 text-right">
                                <div className="flex items-center justify-end gap-1">
                                  <button
                                    onClick={() => setCreateClassForm({
                                      id: cls.id,
                                      branch: cls.branch || defaultBranch,
                                      name: cls.name,
                                      classNumeric: cls.classNumeric || String(idx + 1),
                                      section: Array.isArray(cls.sections) ? cls.sections.join(', ') : 'A',
                                      wing: cls.wing || 'Primary'
                                    })}
                                    className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                                    title="Edit Class"
                                  >
                                    <Edit2 className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    onClick={() => {
                                      if (window.confirm(`Delete Class ${cls.name}?`)) {
                                        setClasses(classes.filter(c => c.id !== cls.id));
                                        showToast(`Class ${cls.name} deleted`, 'info');
                                      }
                                    }}
                                    className="p-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100"
                                    title="Delete Class"
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
                ) : (
                  /* Cards Grid View */
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {classes.map((cls, idx) => (
                      <div key={cls.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
                        <div className="flex justify-between items-start">
                          <h4 className="font-black text-slate-900 dark:text-white text-base">{cls.name}</h4>
                          <Badge variant="primary">#{cls.classNumeric || idx + 1}</Badge>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {(Array.isArray(cls.sections) ? cls.sections : ['A']).map((sec, i) => (
                            <span key={i} className="px-2 py-0.5 rounded bg-white dark:bg-slate-900 text-indigo-600 font-bold text-[10px] border border-indigo-200">
                              Section {sec}
                            </span>
                          ))}
                        </div>
                        <div className="pt-2 flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-200 dark:border-slate-700">
                          <span>Teacher: {cls.classTeacher || 'Unassigned'}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}

          {/* 🏷️ SUB-TAB 2: SECTION (Create Section on Left, Section List on Right) */}
          {controlClassSubTab === 'section' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left: Create Section Form */}
              <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <Edit2 className="w-4 h-4 text-indigo-600" />
                    {createSectionForm.id ? 'Edit Section' : 'Create Section'}
                  </h3>
                </div>

                <form onSubmit={handleSaveSectionFromForm} className="space-y-4 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Branch *</label>
                    <select
                      value={createSectionForm.branch}
                      onChange={(e) => setCreateSectionForm({ ...createSectionForm, branch: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                    >
                      {branches.map(b => (
                        <option key={b.id} value={b.name}>{b.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Section Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. A, B, C, Science, Commerce, Arts"
                      value={createSectionForm.name}
                      onChange={(e) => setCreateSectionForm({ ...createSectionForm, name: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold uppercase"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Capacity Limit</label>
                    <input
                      type="number"
                      placeholder="40"
                      value={createSectionForm.capacity}
                      onChange={(e) => setCreateSectionForm({ ...createSectionForm, capacity: Number(e.target.value) })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md flex items-center justify-center gap-2"
                    >
                      <Save className="w-4 h-4" /> Save Section
                    </button>
                  </div>
                </form>
              </div>

              {/* Right: Section List */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <Layers className="w-4 h-4 text-indigo-600" /> Section Master Directory ({sectionsList.length})
                </h3>

                <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-2xl">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                        <th className="p-3">#</th>
                        <th className="p-3">Branch</th>
                        <th className="p-3">Section Name</th>
                        <th className="p-3">Capacity</th>
                        <th className="p-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {sectionsList.map((sec, idx) => (
                        <tr key={sec.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                          <td className="p-3 font-mono text-slate-400 font-bold">{idx + 1}</td>
                          <td className="p-3 text-slate-600 dark:text-slate-400 max-w-[180px] truncate">{sec.branch}</td>
                          <td className="p-3 font-bold text-slate-900 dark:text-white">{sec.name}</td>
                          <td className="p-3 font-mono font-bold text-emerald-600">{sec.capacity} Seats</td>
                          <td className="p-3 text-right">
                            <button
                              onClick={() => setCreateSectionForm({ ...sec })}
                              className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 mr-1"
                              title="Edit Section"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                setSectionsList(sectionsList.filter(s => s.id !== sec.id));
                                showToast(`Section ${sec.name} removed`, 'info');
                              }}
                              className="p-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100"
                              title="Delete Section"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
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
        </div>
      )}

      {/* ========================================================================= */}
      {/* 👩‍🏫 SECTION 2: ASSIGN CLASS TEACHER */}
      {/* ========================================================================= */}
      {activeTab === 'assign-teacher' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-indigo-600" /> Assign Class Teacher Master
              </h3>
              <p className="text-xs text-slate-500">Allocate mentor faculty and room numbers to every class & section</p>
            </div>
            <Badge variant="primary">{classes.length} Classes Configured</Badge>
          </div>

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-2xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                  <th className="p-3.5">#</th>
                  <th className="p-3.5">Class & Grade</th>
                  <th className="p-3.5">Active Sections</th>
                  <th className="p-3.5">Assigned Class Teacher</th>
                  <th className="p-3.5">Room Number</th>
                  <th className="p-3.5">Enrolled Strength</th>
                  <th className="p-3.5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {classes.map((cls, idx) => (
                  <tr key={cls.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-3.5 font-mono text-slate-400 font-bold">{idx + 1}</td>
                    <td className="p-3.5 font-black text-slate-900 dark:text-white">{cls.name}</td>
                    <td className="p-3.5">
                      <div className="flex gap-1">
                        {(Array.isArray(cls.sections) ? cls.sections : ['A']).map((s, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold text-[10px]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-3.5">
                      <select
                        value={cls.classTeacher || ''}
                        onChange={(e) => {
                          const teacherName = e.target.value;
                          setClasses(prev => prev.map(c => c.id === cls.id ? { ...c, classTeacher: teacherName } : c));
                          showToast(`Assigned ${teacherName} to ${cls.name}`, 'success');
                        }}
                        className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold text-indigo-700 dark:text-indigo-300 text-xs"
                      >
                        <option value="">-- Select Class Teacher --</option>
                        {teachers.map(t => (
                          <option key={t.id} value={t.name}>{t.name} ({t.designation})</option>
                        ))}
                      </select>
                    </td>
                    <td className="p-3.5 font-mono text-slate-600 dark:text-slate-300">
                      {cls.roomNo || `Room ${101 + idx}`}
                    </td>
                    <td className="p-3.5 font-mono font-bold text-emerald-600">
                      {students.filter(s => s.class === cls.name || s.class?.startsWith(cls.name)).length || 38} Students
                    </td>
                    <td className="p-3.5 text-right">
                      <Badge variant={cls.classTeacher ? 'success' : 'warning'}>
                        {cls.classTeacher ? 'Assigned' : 'Pending'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📖 SECTION 3: SUBJECT MASTER (Exact Screenshot Match: Left Create, Right List) */}
      {/* ========================================================================= */}
      {activeTab === 'subjects' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: Create Subject Form */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Edit2 className="w-4 h-4 text-indigo-600" />
                {createSubjectForm.id ? 'Edit Subject' : 'Create Subject'}
              </h3>
            </div>

            <form onSubmit={handleSaveSubjectFromForm} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Branch *</label>
                <select
                  value={createSubjectForm.branch}
                  onChange={(e) => setCreateSubjectForm({ ...createSubjectForm, branch: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                >
                  {branches.map(b => (
                    <option key={b.id} value={b.name}>{b.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Subject Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mathematics, Science, English..."
                  value={createSubjectForm.name}
                  onChange={(e) => setCreateSubjectForm({ ...createSubjectForm, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Subject Code *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. MATH-041"
                    value={createSubjectForm.code}
                    onChange={(e) => setCreateSubjectForm({ ...createSubjectForm, code: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold uppercase"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Subject Type *</label>
                  <select
                    value={createSubjectForm.type}
                    onChange={(e) => setCreateSubjectForm({ ...createSubjectForm, type: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                  >
                    <option value="Theory">Theory</option>
                    <option value="Practical">Practical</option>
                    <option value="Theory + Practical">Theory + Practical</option>
                    <option value="Co-Curricular">Co-Curricular</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" /> Save Subject
                </button>
              </div>
            </form>
          </div>

          {/* Right: Subject List */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-600" /> Subject Master List ({subjects.length})
              </h3>
              <div className="relative w-44">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search subject..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                />
              </div>
            </div>

            <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-2xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                    <th className="p-3">#</th>
                    <th className="p-3">Branch</th>
                    <th className="p-3">Subject Name</th>
                    <th className="p-3">Subject Code</th>
                    <th className="p-3">Subject Type</th>
                    <th className="p-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {subjects
                    .filter(s => !searchQuery || s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.code.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((sub, idx) => (
                      <tr key={sub.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-3 font-mono text-slate-400 font-bold">{idx + 1}</td>
                        <td className="p-3 text-slate-600 dark:text-slate-400 max-w-[140px] truncate">{sub.branch || defaultBranch}</td>
                        <td className="p-3 font-bold text-slate-900 dark:text-white">{sub.name}</td>
                        <td className="p-3 font-mono font-bold text-indigo-600">{sub.code}</td>
                        <td className="p-3">
                          <Badge variant="purple" size="sm">{sub.type || 'Theory'}</Badge>
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => setCreateSubjectForm({ ...sub, branch: sub.branch || defaultBranch })}
                            className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 mr-1"
                            title="Edit Subject"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              setSubjects(subjects.filter(s => s.id !== sub.id));
                              showToast(`Subject ${sub.name} deleted`, 'info');
                            }}
                            className="p-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100"
                            title="Delete Subject"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
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

      {/* ========================================================================= */}
      {/* 📚 SECTION 4: CLASS SUBJECT ASSIGN */}
      {/* ========================================================================= */}
      {activeTab === 'class-assign' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-600" /> Class Subject Assignment
              </h3>
              <p className="text-xs text-slate-500">Allocate compulsory and optional subjects to Class and Section</p>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={selectedAssignClass}
                onChange={(e) => setSelectedAssignClass(e.target.value)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold text-xs text-slate-900 dark:text-white"
              >
                {classes.map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>

              <select
                value={selectedAssignSection}
                onChange={(e) => setSelectedAssignSection(e.target.value)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold text-xs text-slate-900 dark:text-white"
              >
                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C">Section C</option>
                <option value="Science">Section Science</option>
                <option value="Commerce">Section Commerce</option>
                <option value="Arts">Section Arts</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {subjects.map(sub => {
              const isAssigned = (classSubjectAssignments[selectedAssignClass] || []).includes(sub.code);
              return (
                <div
                  key={sub.id}
                  onClick={() => {
                    const currentList = classSubjectAssignments[selectedAssignClass] || [];
                    const updatedList = isAssigned
                      ? currentList.filter(c => c !== sub.code)
                      : [...currentList, sub.code];
                    setClassSubjectAssignments({ ...classSubjectAssignments, [selectedAssignClass]: updatedList });
                    showToast(isAssigned ? `Removed ${sub.name} from ${selectedAssignClass}` : `Assigned ${sub.name} to ${selectedAssignClass}`, 'info');
                  }}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    isAssigned
                      ? 'bg-blue-50/70 dark:bg-blue-950/40 border-blue-300 dark:border-blue-800 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs">{sub.name}</h4>
                    <span className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] ${isAssigned ? 'bg-blue-600 text-white' : 'border border-slate-300'}`}>
                      {isAssigned && '✓'}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 flex justify-between">
                    <span>Code: <strong>{sub.code}</strong></span>
                    <span>Type: <strong>{sub.type || 'Theory'}</strong></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📚 SECTION 5: LESSON PLAN & SYLLABUS COVERAGE (ERPMANTRA ENTERPRISE)      */}
      {/* ========================================================================= */}
      {activeTab === 'lesson-plan' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Top Control Bar */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <div>
                <label className="text-[11px] font-bold text-slate-500 block mb-1">Select Class</label>
                <select
                  value={selectedLessonClass}
                  onChange={(e) => setSelectedLessonClass(e.target.value)}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold text-xs"
                >
                  {classes.map(c => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-[11px] font-bold text-slate-500 block mb-1">Subject</label>
                <select
                  value={selectedLessonSubject}
                  onChange={(e) => setSelectedLessonSubject(e.target.value)}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold text-xs"
                >
                  <option value="Mathematics">Mathematics</option>
                  <option value="Science">Science (Physics/Chemistry/Bio)</option>
                  <option value="English">English Literature</option>
                  <option value="Hindi">Hindi & Sanskrit</option>
                  <option value="Social Science">Social Science</option>
                  <option value="Computer">Computer Applications / AI</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => setIsAddLessonModalOpen(true)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Add Chapter / Unit
            </button>
          </div>

          {/* Syllabus Progress Summary Card */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
              <span className="text-[11px] font-bold text-slate-500 block">Total Chapters</span>
              <span className="text-2xl font-black text-slate-900 dark:text-white mt-1 block">
                {lessonPlans.filter(lp => lp.class === selectedLessonClass && (selectedLessonSubject === 'All' || lp.subject.includes(selectedLessonSubject))).length} Chapters
              </span>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
              <span className="text-[11px] font-bold text-emerald-600 block">Completed</span>
              <span className="text-2xl font-black text-emerald-600 mt-1 block">
                {lessonPlans.filter(lp => lp.class === selectedLessonClass && lp.status === 'Completed').length} Done
              </span>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
              <span className="text-[11px] font-bold text-blue-600 block">In Progress</span>
              <span className="text-2xl font-black text-blue-600 mt-1 block">
                {lessonPlans.filter(lp => lp.class === selectedLessonClass && lp.status === 'In Progress').length} Active
              </span>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
              <span className="text-[11px] font-bold text-amber-600 block">Avg Syllabus Coverage</span>
              <span className="text-2xl font-black text-amber-600 mt-1 block">68.5%</span>
            </div>
          </div>

          {/* Lesson Plan Table */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Syllabus Coverage & Lesson Units ({selectedLessonClass} - {selectedLessonSubject})
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                    <th className="p-3">#</th>
                    <th className="p-3">Unit Name</th>
                    <th className="p-3">Chapter & Topics</th>
                    <th className="p-3">Faculty Incharge</th>
                    <th className="p-3 text-center">Lectures (Done/Total)</th>
                    <th className="p-3">Progress</th>
                    <th className="p-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {lessonPlans
                    .filter(lp => lp.class === selectedLessonClass && (selectedLessonSubject === 'All' || lp.subject.includes(selectedLessonSubject)))
                    .map((lp, idx) => (
                      <tr key={lp.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-3 font-mono font-bold text-slate-400">{idx + 1}</td>
                        <td className="p-3 font-semibold text-slate-700 dark:text-slate-300">{lp.unit}</td>
                        <td className="p-3 font-bold text-slate-900 dark:text-white max-w-xs">{lp.chapter}</td>
                        <td className="p-3 text-slate-600 dark:text-slate-400">{lp.teacher}</td>
                        <td className="p-3 text-center font-mono font-bold text-slate-800 dark:text-slate-200">
                          {lp.completedLectures} / {lp.plannedLectures}
                        </td>
                        <td className="p-3 min-w-[140px]">
                          <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                lp.progress === 100 ? 'bg-emerald-500' : lp.progress >= 50 ? 'bg-blue-500' : 'bg-amber-500'
                              }`}
                              style={{ width: `${lp.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-[10px] font-bold text-slate-500 mt-1 block">{lp.progress}% completed</span>
                        </td>
                        <td className="p-3 text-center">
                          <Badge variant={lp.status === 'Completed' ? 'success' : lp.status === 'In Progress' ? 'primary' : 'neutral'}>
                            {lp.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📝 SECTION 6: DIGITAL DAILY CLASSWORK & SCHOOL DIARY                      */}
      {/* ========================================================================= */}
      {activeTab === 'digital-diary' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Top Action Bar */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-500" /> Digital Daily Classwork & Teacher Diary
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Real-time daily classroom topic records visible to parents and academic supervisors.</p>
            </div>

            <button
              onClick={() => setIsAddDiaryModalOpen(true)}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs rounded-xl shadow flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> New Classwork Entry
            </button>
          </div>

          {/* Diary Entries List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {diaryEntries.map((d) => (
              <div key={d.id} className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
                  <div className="flex items-center gap-2">
                    <Badge variant="primary">{d.class}</Badge>
                    <Badge variant="purple">{d.subject}</Badge>
                    <span className="text-[11px] font-mono text-slate-500">{d.period}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">📅 {d.date}</span>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase">Topic Taught in Class:</h4>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{d.topic}</p>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/30 rounded-2xl p-3 border border-amber-200 dark:border-amber-900/40 text-xs">
                  <span className="font-bold text-amber-900 dark:text-amber-200 block">📚 Assigned Homework:</span>
                  <p className="text-amber-800 dark:text-amber-300 mt-0.5 font-medium">{d.homework}</p>
                </div>

                <div className="text-xs text-slate-600 dark:text-slate-400 flex justify-between items-center pt-1">
                  <span>🔬 Activity: <strong>{d.activity}</strong></span>
                  <span>👨‍🏫 Faculty: <strong>{d.teacher}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🚀 PROMOTION MODAL WIZARD */}
      {/* ========================================================================= */}
      {isPromotionModalOpen && (
        <Modal
          isOpen={isPromotionModalOpen}
          onClose={() => setIsPromotionModalOpen(false)}
          title="🚀 Student Annual Promotion & Batch Rollover"
          maxWidth="max-w-lg"
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
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold"
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
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold"
                >
                  {classes.map(c => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Next Session</label>
              <input
                type="text"
                value={promotionData.session}
                onChange={(e) => setPromotionData({ ...promotionData, session: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsPromotionModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white shadow"
              >
                Execute Batch Promotion
              </button>
            </div>
          </form>
        </Modal>
      )}

    </div>
  );
};

export default AcademicsPage;
