import React, { useState } from 'react';
import {
  Bell,
  Plus,
  Send,
  MessageSquare,
  Users,
  AlertTriangle,
  Radio,
  CheckCircle2,
  Trash2
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const NoticeCommunicationPage = () => {
  const { showToast } = useToast();
  const [notices, setNotices] = useState(schoolService.getNotices());
  const [isAddNoticeModalOpen, setIsAddNoticeModalOpen] = useState(false);
  const [isBroadcastModalOpen, setIsBroadcastModalOpen] = useState(false);

  const [noticeForm, setNoticeForm] = useState({
    title: '',
    target: 'All Students & Parents',
    category: 'General',
    content: '',
    isEmergency: false
  });

  const [broadcastForm, setBroadcastForm] = useState({
    channel: 'WhatsApp & SMS',
    recipientGroup: 'All Parents',
    message: 'Dear Parent, Half Yearly Examination date sheets have been published on the school portal. Please check the timetable.'
  });

  const refreshNotices = () => {
    setNotices([...schoolService.getNotices()]);
  };

  const handleCreateNotice = (e) => {
    e.preventDefault();
    if (!noticeForm.title || !noticeForm.content) {
      showToast('Please enter title and notice body', 'warning');
      return;
    }
    schoolService.addNotice(noticeForm);
    refreshNotices();
    setIsAddNoticeModalOpen(false);
    showToast('Circular notice published to portal!', 'success');
  };

  const handleDeleteNotice = (id) => {
    schoolService.deleteNotice(id);
    refreshNotices();
    showToast('Notice deleted', 'info');
  };

  const handleBroadcast = (e) => {
    e.preventDefault();
    setIsBroadcastModalOpen(false);
    showToast(`Broadcast simulated: Message dispatched via ${broadcastForm.channel} to ${broadcastForm.recipientGroup}! 📱`, 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Bell className="w-7 h-7 text-indigo-600" /> Notices & Multi-Channel Communication
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Targeted circular notice boards, emergency red alerts, and SMS/WhatsApp broadcast dispatch simulation.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsBroadcastModalOpen(true)}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all"
          >
            <Radio className="w-4 h-4" /> SMS / WhatsApp Broadcast
          </button>
          <button
            onClick={() => setIsAddNoticeModalOpen(true)}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all"
          >
            <Plus className="w-4 h-4" /> Publish Notice
          </button>
        </div>
      </div>

      {/* Notices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {notices.map(notice => (
          <div
            key={notice.id}
            className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
              notice.isEmergency
                ? 'bg-rose-50/70 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800 shadow-md ring-1 ring-rose-400/30'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <Badge variant={notice.isEmergency ? 'danger' : 'primary'}>
                  {notice.category}
                </Badge>
                <span className="text-[10px] text-slate-400 font-mono font-semibold">
                  {notice.publishDate}
                </span>
              </div>

              <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                {notice.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                {notice.content}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-indigo-600 dark:text-indigo-400 truncate max-w-[170px]">
                Target: {notice.target}
              </span>
              <button
                onClick={() => handleDeleteNotice(notice.id)}
                className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg transition-colors"
                title="Delete notice"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Publish Notice Modal */}
      <Modal
        isOpen={isAddNoticeModalOpen}
        onClose={() => setIsAddNoticeModalOpen(false)}
        title="Publish Circular Notice"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleCreateNotice} className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Notice Headline *</label>
            <input
              type="text"
              required
              value={noticeForm.title}
              onChange={(e) => setNoticeForm({ ...noticeForm, title: e.target.value })}
              placeholder="e.g. Science Exhibition Participation"
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Target Audience</label>
              <select
                value={noticeForm.target}
                onChange={(e) => setNoticeForm({ ...noticeForm, target: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="All Students & Parents">All Students & Parents</option>
                <option value="Class 10 Students">Class 10 Students</option>
                <option value="Class 12 Students">Class 12 Students</option>
                <option value="Teaching Faculty">Teaching Faculty</option>
                <option value="Parents Only">Parents Only</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Category</label>
              <select
                value={noticeForm.category}
                onChange={(e) => setNoticeForm({ ...noticeForm, category: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="General">General Circular</option>
                <option value="Examination">Examination</option>
                <option value="Holiday">Holiday Announcement</option>
                <option value="Transport">Transport Update</option>
                <option value="Sports">Sports & Events</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Notice Content *</label>
            <textarea
              rows={4}
              required
              value={noticeForm.content}
              onChange={(e) => setNoticeForm({ ...noticeForm, content: e.target.value })}
              placeholder="Write circular description here..."
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="emergencyCheck"
              checked={noticeForm.isEmergency}
              onChange={(e) => setNoticeForm({ ...noticeForm, isEmergency: e.target.checked })}
              className="w-4 h-4 text-rose-600 rounded"
            />
            <label htmlFor="emergencyCheck" className="font-bold text-rose-600 text-xs cursor-pointer">
              Mark as High Priority / Urgent Red Alert
            </label>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsAddNoticeModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
            >
              Publish Notice
            </button>
          </div>
        </form>
      </Modal>

      {/* Broadcast Modal */}
      <Modal
        isOpen={isBroadcastModalOpen}
        onClose={() => setIsBroadcastModalOpen(false)}
        title="SMS & WhatsApp Broadcast Gateway"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleBroadcast} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Broadcast Channel</label>
              <select
                value={broadcastForm.channel}
                onChange={(e) => setBroadcastForm({ ...broadcastForm, channel: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="WhatsApp & SMS">WhatsApp + SMS Gateway</option>
                <option value="WhatsApp Official">WhatsApp Official API</option>
                <option value="SMS Gateway">Bulk SMS Provider (DLT)</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Recipient Group</label>
              <select
                value={broadcastForm.recipientGroup}
                onChange={(e) => setBroadcastForm({ ...broadcastForm, recipientGroup: e.target.value })}
                className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="All Parents">All Enrolled Parents (1,240 Contacts)</option>
                <option value="Class 10 Parents">Class 10 Parents (92 Contacts)</option>
                <option value="Class 12 Parents">Class 12 Parents (88 Contacts)</option>
                <option value="Teaching Faculty">Teaching Faculty (45 Contacts)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Message Text Template</label>
            <textarea
              rows={4}
              required
              value={broadcastForm.message}
              onChange={(e) => setBroadcastForm({ ...broadcastForm, message: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsBroadcastModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" /> Dispatch Broadcast
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
