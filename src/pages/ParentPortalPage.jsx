import React, { useState } from 'react';
import {
  Users,
  CheckCircle2,
  Calendar,
  CreditCard,
  BookOpen,
  Award,
  Bus,
  Phone,
  Printer,
  Sparkles,
  FileText,
  FileCheck2
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import { PrintableReportCard } from '../components/printables/PrintableReportCard';
import schoolService from '../services/schoolService';

export const ParentPortalPage = ({ onOpenAI }) => {
  const { showToast } = useToast();
  const students = schoolService.getStudents();
  const [selectedChild, setSelectedChild] = useState(students[0] || null);
  const [isReportCardModalOpen, setIsReportCardModalOpen] = useState(false);
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);

  const [leaveForm, setLeaveForm] = useState({
    startDate: '2026-09-05',
    endDate: '2026-09-07',
    reason: 'Family wedding event in hometown.'
  });

  const schoolInfo = schoolService.getSchoolInfo();
  const homework = schoolService.getHomework();
  const marks = schoolService.getStudentMarks(selectedChild?.id);

  const handleLeaveSubmit = (e) => {
    e.preventDefault();
    schoolService.addLeaveRequest({
      applicantType: 'Student',
      applicantId: selectedChild.id,
      applicantName: selectedChild.name,
      class: `${selectedChild.class}-${selectedChild.section}`,
      leaveType: 'Personal / Family Leave',
      startDate: leaveForm.startDate,
      endDate: leaveForm.endDate,
      days: 3,
      reason: leaveForm.reason
    });
    setIsLeaveModalOpen(false);
    showToast(`Leave application submitted to ${selectedChild.classTeacher}!`, 'success');
  };

  if (!selectedChild) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Users className="w-7 h-7 text-indigo-600" /> Parent Portal & Ward Overview
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Welcome Mr. Mukesh Sharma! Live updates for your child's attendance, fee dues, homework & term results.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsLeaveModalOpen(true)}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all"
          >
            <FileCheck2 className="w-4 h-4" /> Apply Student Leave
          </button>
          <button
            onClick={onOpenAI}
            className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all"
          >
            <Sparkles className="w-4 h-4" /> Chat with EduBot
          </button>
        </div>
      </div>

      {/* Child Summary Hero Card */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-indigo-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <img
            src={selectedChild.photo}
            alt={selectedChild.name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-amber-400 shadow-xl"
          />
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-black">{selectedChild.name}</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-extrabold text-[10px] uppercase">
                {selectedChild.class} - {selectedChild.section}
              </span>
            </div>
            <p className="text-xs text-indigo-200">
              Roll #{selectedChild.rollNo} • Adm #{selectedChild.admissionNo} • {selectedChild.house}
            </p>
            <p className="text-xs text-indigo-300 flex items-center gap-1.5 pt-1">
              Class Teacher: <strong className="text-white">{selectedChild.classTeacher}</strong>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
            <span className="text-[10px] text-indigo-200 uppercase font-bold block">Attendance</span>
            <span className="text-xl font-black text-emerald-400">{selectedChild.attendanceSummary?.percentage}%</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
            <span className="text-[10px] text-indigo-200 uppercase font-bold block">Fee Due</span>
            <span className="text-xl font-black text-amber-300">₹{selectedChild.feeSummary?.balance || 0}</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Homework, Bus Route, Exams */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Homework Tasks */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" /> Pending Daily Homework Tasks
              </h3>
              <Badge variant="primary">2 Active Tasks</Badge>
            </div>

            <div className="space-y-3">
              {homework.map(hw => (
                <div key={hw.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/60 text-xs">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">{hw.title}</span>
                    <Badge variant="warning" size="sm">Due {hw.dueDate}</Badge>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">{hw.description}</p>
                  <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between text-[11px] text-slate-500 font-medium">
                    <span>Subject: <strong className="text-indigo-600">{hw.subject}</strong></span>
                    <span>Assigned by: {hw.teacher}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Term Progress */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" /> Latest Academic Result (Unit Test 1)
              </h3>
              <p className="text-xs text-slate-500">Aggregate: 91.25% (Grade: A1) • Rank #1 in Class 10-A</p>
            </div>
            <button
              onClick={() => setIsReportCardModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" /> Download Report Card
            </button>
          </div>
        </div>

        {/* Transport & Fee Dues Breakdown */}
        <div className="space-y-6">
          {/* Fee Dues Card */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-indigo-600" /> Fee Dues & Billing
              </h3>
              {selectedChild.isRteStudent && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950 dark:text-amber-200">
                  🏛️ RTE Quota
                </span>
              )}
            </div>

            {selectedChild.isRteStudent ? (
              <div className="p-4 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 text-xs space-y-2.5">
                <div className="flex items-center justify-between text-amber-950 dark:text-amber-200 font-black">
                  <span className="flex items-center gap-1.5"><span>🏛️</span> RTE 100% Free Quota</span>
                  <span className="text-emerald-700 font-extrabold text-[10px] bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">School & Tuition: ₹0.00 (Free)</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300">
                  शासन के आरटीई नियमानुसार स्कूल की समस्त शैक्षिक फीस पूर्णतः निःशुल्क (₹0.00) है। केवल वाहन/बस का 11 महीने का ट्रांसपोर्ट किराया देय है।
                </p>
                <div className="pt-2 border-t border-amber-500/20 flex justify-between font-bold text-slate-900 dark:text-white">
                  <span>Transport Bus Fare (11M):</span>
                  <span className="text-indigo-600 font-mono font-black">₹{(selectedChild.transport?.monthlyFare * 11 || 0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs text-rose-600 font-bold">
                  <span>Remaining Balance:</span>
                  <span className="font-mono">₹{(selectedChild.feeSummary?.balance || 0).toLocaleString()}</span>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                <div className="flex justify-between">
                  <span>Tuition Dues:</span>
                  <strong className="font-mono">₹{(selectedChild.feeSummary?.tuitionDue || 13500).toLocaleString()}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Transport Bus Fare (11M):</span>
                  <strong className="font-mono">₹{(selectedChild.feeSummary?.transportDue11Months || 0).toLocaleString()}</strong>
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between font-bold text-slate-900 dark:text-white">
                  <span>Total Annual Due:</span>
                  <span className="text-indigo-600 font-mono font-black">₹{(selectedChild.feeSummary?.totalDue || 0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs text-rose-600 font-bold">
                  <span>Remaining Due:</span>
                  <span className="font-mono">₹{(selectedChild.feeSummary?.balance || 0).toLocaleString()}</span>
                </div>
              </div>
            )}
          </div>

          {/* Transport Details */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Bus className="w-5 h-5 text-emerald-600" /> Bus & Transport Details
            </h3>

            <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 space-y-2 text-xs">
              <div className="flex justify-between"><span>Assigned Route:</span><strong className="text-slate-900 dark:text-white">{selectedChild.transport?.route || 'Route 1: Jargwan - Baraura Route'}</strong></div>
              <div className="flex justify-between"><span>Designated Stop:</span><strong className="text-slate-900 dark:text-white">{selectedChild.transport?.stop || selectedChild.transport?.stoppage || 'JARGWAN'}</strong></div>
              <div className="flex justify-between"><span>Session Transport Fee (11M):</span><strong className="text-indigo-700 font-bold">₹{((selectedChild.transport?.monthlyFare || 350) * 11).toLocaleString('en-IN')}</strong></div>
              <div className="flex justify-between"><span>Conveyance Driver:</span><strong className="text-slate-900 dark:text-white">Hemraj Singh (+91 97194 76606)</strong></div>
            </div>
          </div>
        </div>
      </div>

      {/* Leave Application Modal */}
      <Modal
        isOpen={isLeaveModalOpen}
        onClose={() => setIsLeaveModalOpen(false)}
        title="Student Leave Application Form"
        maxWidth="max-w-md"
      >
        <form onSubmit={handleLeaveSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">From Date</label>
              <input
                type="date"
                required
                value={leaveForm.startDate}
                onChange={(e) => setLeaveForm({ ...leaveForm, startDate: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">To Date</label>
              <input
                type="date"
                required
                value={leaveForm.endDate}
                onChange={(e) => setLeaveForm({ ...leaveForm, endDate: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Reason for Absence</label>
            <textarea
              rows={3}
              required
              value={leaveForm.reason}
              onChange={(e) => setLeaveForm({ ...leaveForm, reason: e.target.value })}
              className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div className="flex justify-end gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
            <button type="button" onClick={() => setIsLeaveModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-indigo-600 text-white font-bold rounded-xl shadow-md">Submit Leave</button>
          </div>
        </form>
      </Modal>

      {/* Printable Report Card Modal */}
      <Modal
        isOpen={isReportCardModalOpen}
        onClose={() => setIsReportCardModalOpen(false)}
        title="CBSE Official Student Report Card"
        maxWidth="max-w-4xl"
      >
        <PrintableReportCard
          student={selectedChild}
          marksData={marks || {
            examName: "Unit Test 1 (Term 1)",
            totalMarks: 240,
            obtainedMarks: 219,
            percentage: 91.25,
            grade: "A1",
            rank: 1,
            result: "Pass",
            remarks: "Outstanding academic mastery.",
            subjects: [
              { name: "English Language", maxMarks: 40, obtainedTheory: 36, total: 36, grade: "A1" },
              { name: "Mathematics Standard", maxMarks: 40, obtainedTheory: 38, total: 38, grade: "A1" },
              { name: "Science", maxMarks: 40, obtainedTheory: 37, total: 37, grade: "A1" },
              { name: "Social Science", maxMarks: 40, obtainedTheory: 35, total: 35, grade: "A2" },
              { name: "Computer Applications", maxMarks: 40, obtainedTheory: 39, total: 39, grade: "A1" }
            ]
          }}
          schoolInfo={schoolInfo}
        />
      </Modal>
    </div>
  );
};
