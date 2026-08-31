import React, { useState } from 'react';
import {
  FileCheck2,
  Plus,
  CheckCircle2,
  XCircle,
  Clock,
  User,
  Calendar
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const LeaveManagementPage = () => {
  const { showToast } = useToast();
  const [leaveRequests, setLeaveRequests] = useState(schoolService.getLeaveRequests());
  const [isAddLeaveModalOpen, setIsAddLeaveModalOpen] = useState(false);

  const [leaveForm, setLeaveForm] = useState({
    applicantType: 'Student',
    applicantName: 'DEEPAK KUMAR',
    class: 'Class 10-A',
    leaveType: 'Medical Leave',
    startDate: '2026-09-02',
    endDate: '2026-09-04',
    days: 3,
    reason: 'Suffering from viral flu and high fever.'
  });

  const refreshLeaves = () => {
    setLeaveRequests([...schoolService.getLeaveRequests()]);
  };

  const handleStatusUpdate = (id, status) => {
    schoolService.updateLeaveStatus(id, status, 'Principal');
    refreshLeaves();
    showToast(`Leave application ${status.toLowerCase()}!`, status === 'Approved' ? 'success' : 'info');
  };

  const handleCreateLeave = (e) => {
    e.preventDefault();
    schoolService.addLeaveRequest(leaveForm);
    refreshLeaves();
    setIsAddLeaveModalOpen(false);
    showToast('Leave request submitted for review!', 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <FileCheck2 className="w-7 h-7 text-indigo-600" /> Leave Management & Approval Workflow
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Student and faculty leave applications, medical certificates, and principal 1-click approval desk.
          </p>
        </div>
        <button
          onClick={() => setIsAddLeaveModalOpen(true)}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-500/20 flex items-center gap-2 transition-all"
        >
          <Plus className="w-4 h-4" /> Apply Leave
        </button>
      </div>

      {/* Leave Requests Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                <th className="p-4">Applicant Profile</th>
                <th className="p-4">Type & Category</th>
                <th className="p-4">Duration & Dates</th>
                <th className="p-4">Reason for Absence</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Approval Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {leaveRequests.map(lve => (
                <tr key={lve.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4">
                    <p className="font-bold text-slate-900 dark:text-white text-xs">{lve.applicantName}</p>
                    <span className="text-[10px] text-slate-500">{lve.applicantType} • {lve.class}</span>
                  </td>
                  <td className="p-4">
                    <Badge variant={lve.applicantType === 'Student' ? 'primary' : 'purple'}>
                      {lve.leaveType}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <div className="font-bold text-slate-900 dark:text-white">{lve.startDate} to {lve.endDate}</div>
                    <div className="text-[10px] text-slate-500 font-medium">({lve.days} Days Duration)</div>
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-300 max-w-xs leading-relaxed">
                    {lve.reason}
                  </td>
                  <td className="p-4">
                    <Badge variant={lve.status === 'Approved' ? 'success' : lve.status === 'Rejected' ? 'danger' : 'warning'}>
                      {lve.status}
                    </Badge>
                  </td>
                  <td className="p-4 text-right">
                    {lve.status === 'Pending' ? (
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleStatusUpdate(lve.id, 'Approved')}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center gap-1 shadow-sm"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" /> Approve
                        </button>
                        <button
                          onClick={() => handleStatusUpdate(lve.id, 'Rejected')}
                          className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold text-xs flex items-center gap-1 shadow-sm"
                        >
                          <XCircle className="w-3.5 h-3.5" /> Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-[11px] font-semibold text-slate-400">
                        Processed by {lve.approvedBy || "Principal"}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Apply Leave Modal */}
      <Modal
        isOpen={isAddLeaveModalOpen}
        onClose={() => setIsAddLeaveModalOpen(false)}
        title="Submit Leave Request"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleCreateLeave} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Applicant Name *</label>
              <input
                type="text"
                required
                value={leaveForm.applicantName}
                onChange={(e) => setLeaveForm({ ...leaveForm, applicantName: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Applicant Type</label>
              <select
                value={leaveForm.applicantType}
                onChange={(e) => setLeaveForm({ ...leaveForm, applicantType: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="Student">Student</option>
                <option value="Staff">Faculty / Staff</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Start Date</label>
              <input
                type="date"
                required
                value={leaveForm.startDate}
                onChange={(e) => setLeaveForm({ ...leaveForm, startDate: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">End Date</label>
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
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Reason for Leave *</label>
            <textarea
              rows={3}
              required
              value={leaveForm.reason}
              onChange={(e) => setLeaveForm({ ...leaveForm, reason: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button type="button" onClick={() => setIsAddLeaveModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-indigo-600 text-white font-bold rounded-xl shadow-lg">Submit Application</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
