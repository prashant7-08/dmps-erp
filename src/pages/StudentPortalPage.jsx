import React, { useState } from 'react';
import {
  GraduationCap,
  Clock,
  BookOpen,
  Award,
  CheckCircle2,
  Calendar,
  BookMarked,
  Sparkles,
  Printer,
  UploadCloud
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import { PrintableIDCard } from '../components/printables/PrintableIDCard';
import { PrintableReportCard } from '../components/printables/PrintableReportCard';
import schoolService from '../services/schoolService';

export const StudentPortalPage = ({ onOpenAI }) => {
  const { showToast } = useToast();
  const students = schoolService.getStudents();
  const student = students[0]; // Aarav Sharma
  const homework = schoolService.getHomework();
  const bookIssues = schoolService.getBookIssues();
  const marks = schoolService.getStudentMarks(student?.id);
  const schoolInfo = schoolService.getSchoolInfo();

  const [isIdCardModalOpen, setIsIdCardModalOpen] = useState(false);
  const [isReportCardModalOpen, setIsReportCardModalOpen] = useState(false);

  const handleHomeworkSubmit = (title) => {
    showToast(`Assignment "${title}" uploaded and submitted to teacher! 🚀`, 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <GraduationCap className="w-7 h-7 text-indigo-600" /> Student Learning Portal
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Welcome back, Aarav Sharma! Here is your daily timetable, active homework tasks, issued library books, and exam grades.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsIdCardModalOpen(true)}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all"
          >
            <Printer className="w-4 h-4" /> My Smart ID Card
          </button>
          <button
            onClick={onOpenAI}
            className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all"
          >
            <Sparkles className="w-4 h-4" /> Ask AI Study Assistant
          </button>
        </div>
      </div>

      {/* Student Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-indigo-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <img
            src={student?.photo}
            alt={student?.name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-indigo-400 shadow-xl"
          />
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-black">{student?.name}</h3>
              <Badge variant="primary">{student?.class} - {student?.section}</Badge>
            </div>
            <p className="text-xs text-indigo-200">
              Roll #{student?.rollNo} • Adm #{student?.admissionNo} • {student?.house}
            </p>
            <p className="text-xs text-indigo-300 pt-1">
              Class Teacher: <strong className="text-white">{student?.classTeacher}</strong>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
            <span className="text-[10px] text-indigo-200 uppercase font-bold block">Attendance</span>
            <span className="text-xl font-black text-emerald-400">{student?.attendanceSummary?.percentage}%</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
            <span className="text-[10px] text-indigo-200 uppercase font-bold block">Term Rank</span>
            <span className="text-xl font-black text-amber-300">Rank #1 🏆</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Homework & Library Books */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Homework Tasks */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" /> My Assignments & Homework To Submit
              </h3>
              <Badge variant="warning">Submission Due</Badge>
            </div>

            <div className="space-y-4">
              {homework.map(hw => (
                <div key={hw.id} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/60 space-y-3 text-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{hw.title}</h4>
                      <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold">{hw.subject} • Assigned by {hw.teacher}</p>
                    </div>
                    <Badge variant="danger" size="sm">Due: {hw.dueDate}</Badge>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{hw.description}</p>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-700">
                    <span className="text-[11px] text-slate-400">Reference: {hw.attachments?.[0]}</span>
                    <button
                      onClick={() => handleHomeworkSubmit(hw.title)}
                      className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
                    >
                      <UploadCloud className="w-3.5 h-3.5" /> Submit Homework
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Library Books Issued */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookMarked className="w-5 h-5 text-purple-600" /> Issued Library Books
            </h3>

            <div className="space-y-3">
              {bookIssues.map(iss => (
                <div key={iss.id} className="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40 text-xs space-y-1.5">
                  <h4 className="font-bold text-purple-950 dark:text-purple-200">{iss.bookTitle}</h4>
                  <p className="text-[11px] text-slate-500">Issued: {iss.issueDate} • Due: {iss.dueDate}</p>
                  <Badge variant={iss.status === 'Overdue' ? 'danger' : 'success'} size="sm">
                    {iss.status} (Fine: ₹{iss.fine})
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ID Card Modal */}
      <Modal
        isOpen={isIdCardModalOpen}
        onClose={() => setIsIdCardModalOpen(false)}
        title="Student Identity Card"
        maxWidth="max-w-3xl"
      >
        <PrintableIDCard person={student} type="student" schoolInfo={schoolInfo} />
      </Modal>

      {/* Report Card Modal */}
      <Modal
        isOpen={isReportCardModalOpen}
        onClose={() => setIsReportCardModalOpen(false)}
        title="Academic Progress Report Card"
        maxWidth="max-w-4xl"
      >
        <PrintableReportCard student={student} marksData={marks} schoolInfo={schoolInfo} />
      </Modal>
    </div>
  );
};
