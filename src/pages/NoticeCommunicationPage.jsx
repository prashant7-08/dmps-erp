import React, { useState, useEffect, useMemo } from 'react';
import {
  Bell,
  Plus,
  Send,
  MessageSquare,
  Users,
  AlertTriangle,
  Radio,
  CheckCircle2,
  Trash2,
  Mail,
  FileText,
  Clock,
  Sparkles,
  Cake,
  Copy,
  Printer,
  Search,
  RotateCcw,
  Star,
  Inbox,
  SendHorizontal,
  Bookmark,
  Check,
  X,
  Layers,
  Phone,
  Download
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const NoticeCommunicationPage = ({ initialTab = 'send' }) => {
  const { showToast } = useToast();
  const students = schoolService.getStudents() || [];
  const teachers = schoolService.getTeachers() || [];
  const [notices, setNotices] = useState(() => schoolService.getNotices() || []);

  const resolveTab = (tab) => {
    if (!tab) return 'send';
    if (tab === 'sms-send' || tab === 'send' || tab === 'notices') return 'send';
    if (tab === 'sms-report' || tab === 'report') return 'report';
    if (tab === 'sms-template' || tab === 'sms-templates') return 'sms-template';
    if (tab === 'email-template' || tab === 'email-templates') return 'email-template';
    if (tab === 'sms-birthday-student' || tab === 'birthday-student') return 'birthday-student';
    if (tab === 'sms-birthday-staff' || tab === 'birthday-staff') return 'birthday-staff';
    if (tab === 'message' || tab === 'message-inbox' || tab === 'mailbox-inbox' || tab === 'mailbox') return 'mailbox-inbox';
    if (tab === 'message-compose' || tab === 'mailbox-compose') return 'mailbox-compose';
    if (tab === 'message-sent' || tab === 'mailbox-sent') return 'mailbox-sent';
    if (tab === 'message-trash' || tab === 'mailbox-trash') return 'mailbox-trash';
    return tab;
  };

  const [activeTab, setActiveTab] = useState(() => resolveTab(initialTab));

  useEffect(() => {
    if (initialTab) setActiveTab(resolveTab(initialTab));
  }, [initialTab]);

  const [searchQuery, setSearchQuery] = useState('');
  const [mailboxFolder, setMailboxFolder] = useState('inbox'); // 'inbox', 'sent', 'important', 'trash'

  // 1. Send SMS/Email Form State
  const [sendForm, setSendForm] = useState({
    channel: 'SMS & WhatsApp',
    recipientType: 'All Parents',
    selectedClass: 'All Classes',
    template: 'Custom Message',
    message: 'Dear Parent, School will remain closed on Friday 04-Sep-2026 on account of Janmashtami. Regular classes will resume on Saturday.',
    emailSubject: 'School Notice: Holiday Circular - Dadheech Memorial Public School'
  });

  // 2. SMS/Email Dispatch History Log
  const [dispatchLogs, setDispatchLogs] = useState([
    { id: 'LOG-104', type: 'SMS & WhatsApp', recipientGroup: 'All Parents (Classes PG - 12)', count: 567, status: 'Delivered (100%)', timestamp: '02-Sep-2026, 09:30 AM', message: 'Dear Parent, Monthly fee dues for August are now payable online.' },
    { id: 'LOG-103', type: 'Email Circular', recipientGroup: 'All Teaching Faculty', count: 22, status: 'Delivered (100%)', timestamp: '01-Sep-2026, 04:15 PM', message: 'Staff Meeting scheduled in the Conference Hall on Saturday at 2:00 PM.' },
    { id: 'LOG-102', type: 'SMS Alert', recipientGroup: 'Bus Route 3 Parents (Barheti)', count: 48, status: 'Delivered (98%)', timestamp: '30-Aug-2026, 07:45 AM', message: 'Bus UP-81-BT-1841 is running 10 mins late due to road construction.' },
    { id: 'LOG-101', type: 'WhatsApp Broadcast', recipientGroup: 'Class 10 Parents', count: 42, status: 'Delivered (100%)', timestamp: '28-Aug-2026, 02:00 PM', message: 'CBSE Board Examination Pre-Board schedule published on portal.' }
  ]);

  // 3. SMS Templates State
  const [smsTemplates, setSmsTemplates] = useState([
    { id: 'TMPL-SMS-01', title: 'Fee Due Reminder', content: 'Dear [Parent_Name], Tuition fee for [Student_Name] (Class [Class]) for [Month] is pending. Kindly clear dues to avoid late fine.' },
    { id: 'TMPL-SMS-02', title: 'Student Absence Alert', content: 'Dear Parent, your ward [Student_Name] is ABSENT today [Date] without prior leave. Please confirm with school office.' },
    { id: 'TMPL-SMS-03', title: 'Exam Date Sheet Published', content: 'Dear Parent, [Exam_Name] date sheet has been uploaded on DMPS portal. Exams commence on [Date].' },
    { id: 'TMPL-SMS-04', title: 'Holiday Announcement', content: 'Dear Parent, school shall remain closed on [Date] on account of [Occasion]. Normal classes resume on [Resume_Date].' },
    { id: 'TMPL-SMS-05', title: 'Parent Teacher Meeting (PTM)', content: 'Dear Parent, PTM is scheduled on [Date] from 09:00 AM to 01:00 PM to discuss Term progress.' }
  ]);

  // 4. Email Templates State
  const [emailTemplates, setEmailTemplates] = useState([
    { id: 'TMPL-EML-01', title: 'Official Term Report Card Dispatch', subject: 'Academic Progress Report • [Student_Name]', body: 'Dear Parent, Please find enclosed the verified CBSE Term Report Card for [Student_Name] for Session 2026-27.' },
    { id: 'TMPL-EML-02', title: 'Annual Sports & Cultural Meet Invitation', subject: 'Invitation: Annual Athletic & Cultural Fest 2026', body: 'Cordially inviting all parents to grace the Dadheech Memorial Annual Sports Gala on 15th November.' },
    { id: 'TMPL-EML-03', title: 'Staff Appointment & Offer Letter', subject: 'Offer of Appointment • Dadheech Memorial Public School', body: 'We are pleased to offer you the position of Senior Faculty in our institution.' }
  ]);

  // 5. Birthday Wishes State
  const [studentBirthdays, setStudentBirthdays] = useState([
    { id: 'STU-01', name: 'Aarav Sharma', class: 'Class 10-A', dob: '02-Sep-2010', mobile: '+91 98371 82910', status: 'Sent (Wished Today 🎂)' },
    { id: 'STU-02', name: 'Ritu Yadav', class: 'Class 10-A', dob: '03-Sep-2010', mobile: '+91 97588 48192', status: 'Scheduled Tomorrow' },
    { id: 'STU-03', name: 'Kabir Singh', class: 'Class 9-B', dob: '05-Sep-2011', mobile: '+91 94123 78190', status: 'Upcoming' }
  ]);

  const [staffBirthdays, setStaffBirthdays] = useState([
    { id: 'TCH-01', name: 'Dr. Sonu Kumar', designation: 'Senior Faculty PGT', dob: '02-Sep-1988', mobile: '+91 98372 10921', status: 'Sent (Wished Today 🎉)' },
    { id: 'TCH-02', name: 'Swati Raghav', designation: 'Primary Teacher', dob: '08-Sep-1992', mobile: '+91 94121 90281', status: 'Upcoming' }
  ]);

  // 6. Mailbox Messages State
  const [messages, setMessages] = useState([
    { id: 'MSG-01', folder: 'inbox', sender: 'CBSE Regional Office Dehradun', subject: 'Affiliation Inspection & LOC Final Clearance 2026-27', message: 'Dear Principal, The annual LOC verification for Class 10 & 12 is scheduled for approval.', time: '02-Sep-2026, 11:20 AM', read: false },
    { id: 'MSG-02', folder: 'inbox', sender: 'State Bank of India (Branch Jargwan)', subject: 'Staff Monthly Salary Direct Deposit Acknowledgment', message: 'The direct batch transfer for DMPS employee payroll has been successfully processed.', time: '01-Sep-2026, 05:40 PM', read: true },
    { id: 'MSG-03', folder: 'inbox', sender: 'Parent Association (Bulandshahr)', subject: 'Request for Extended Robotics & STEM Lab Periods', message: 'We appreciate the smart classrooms and request dedicated coding workshops for Class 9-10.', time: '30-Aug-2026, 02:15 PM', read: true },
    { id: 'MSG-04', folder: 'sent', sender: 'Principal DMPS', subject: 'Circular: Half Yearly Examination Date Sheet Publication', message: 'All faculty members are requested to submit question papers by 10th September.', time: '29-Aug-2026, 10:00 AM', read: true }
  ]);

  const [composeForm, setComposeForm] = useState({
    recipient: 'all-teachers@dmps.edu.in',
    subject: '',
    message: ''
  });

  const handleSendBroadcast = (e) => {
    e.preventDefault();
    const newLog = {
      id: `LOG-${Date.now().toString().slice(-3)}`,
      type: sendForm.channel,
      recipientGroup: `${sendForm.recipientType} (${sendForm.selectedClass})`,
      count: sendForm.recipientType === 'All Parents' ? 567 : sendForm.recipientType === 'All Teaching Faculty' ? 22 : 45,
      status: 'Delivered (100%)',
      timestamp: new Date().toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      message: sendForm.message
    };
    setDispatchLogs([newLog, ...dispatchLogs]);
    showToast(`Broadcast dispatched via ${sendForm.channel} to ${sendForm.recipientType}! 📱`, 'success');
    setActiveTab('report');
  };

  const handleSendComposeMessage = (e) => {
    e.preventDefault();
    if (!composeForm.subject || !composeForm.message) return;
    const newMsg = {
      id: `MSG-${Date.now().toString().slice(-3)}`,
      folder: 'sent',
      sender: 'Principal DMPS',
      subject: composeForm.subject,
      message: composeForm.message,
      time: 'Just now',
      read: true
    };
    setMessages([newMsg, ...messages]);
    setComposeForm({ recipient: 'all-teachers@dmps.edu.in', subject: '', message: '' });
    showToast(`Message sent to ${newMsg.recipient || 'recipient'}! ✉️`, 'success');
    setMailboxFolder('sent');
    setActiveTab('mailbox-inbox');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">

      {/* 🧭 Top Navigation Suite */}
      <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-x-auto custom-scrollbar print:hidden">
        <div className="flex items-center gap-2 min-w-max text-xs font-bold">
          
          {/* BULK SMS AND EMAIL */}
          <div className="flex items-center p-1 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 gap-1">
            <span className="text-[10px] uppercase font-black px-2 text-indigo-800 dark:text-indigo-300">BULK SMS & EMAIL:</span>
            <button
              onClick={() => setActiveTab('send')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'send' ? 'bg-indigo-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-indigo-900'}`}
            >
              Send Sms / Email
            </button>
            <button
              onClick={() => setActiveTab('report')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'report' ? 'bg-indigo-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-indigo-900'}`}
            >
              Sms / Email Report ({dispatchLogs.length})
            </button>
            <button
              onClick={() => setActiveTab('sms-template')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'sms-template' ? 'bg-indigo-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-indigo-900'}`}
            >
              Sms Template
            </button>
            <button
              onClick={() => setActiveTab('email-template')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'email-template' ? 'bg-indigo-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-indigo-900'}`}
            >
              Email Template
            </button>
            <button
              onClick={() => setActiveTab('birthday-student')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'birthday-student' ? 'bg-indigo-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-indigo-900'}`}
            >
              Student Birthday Wishes 🎂
            </button>
            <button
              onClick={() => setActiveTab('birthday-staff')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'birthday-staff' ? 'bg-indigo-600 text-white shadow-sm font-black' : 'text-slate-600 dark:text-slate-400 hover:text-indigo-900'}`}
            >
              Staff Birthday Wishes 🎉
            </button>
          </div>

          {/* MESSAGE (MAILBOX) */}
          <button
            onClick={() => setActiveTab('mailbox-inbox')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab.startsWith('mailbox') ? 'bg-rose-600 text-white shadow-md font-black' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Mail className="w-4 h-4" /> Message (Mailbox)
          </button>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 📱 1. SEND SMS / EMAIL */}
      {/* ========================================================================= */}
      {activeTab === 'send' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
              <div>
                <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Radio className="w-5 h-5 text-indigo-600" /> Dispatch Multi-Channel SMS, WhatsApp & Email
                </h3>
                <p className="text-xs text-slate-500">Send instantaneous broadcasts and circular alerts to parents, students and faculty</p>
              </div>
            </div>

            <form onSubmit={handleSendBroadcast} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Broadcast Channel *</label>
                  <select
                    value={sendForm.channel}
                    onChange={(e) => setSendForm({ ...sendForm, channel: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                  >
                    <option value="SMS & WhatsApp">📲 SMS & WhatsApp (Instant)</option>
                    <option value="SMS Gateway Only">📱 SMS Gateway Only (DLT Registered)</option>
                    <option value="Email Circular">✉️ Official Email Circular</option>
                    <option value="All Channels (SMS+WA+Email)">🚀 All Channels (SMS + WhatsApp + Email)</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Target Recipient Group *</label>
                  <select
                    value={sendForm.recipientType}
                    onChange={(e) => setSendForm({ ...sendForm, recipientType: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                  >
                    <option value="All Parents">All Parents (Entire School 567 Students)</option>
                    <option value="Specific Class Parents">Specific Class Parents</option>
                    <option value="All Teaching Faculty">All Teaching Faculty & Staff (22 Members)</option>
                    <option value="Bus Transport Parents">Bus Transport Commuters</option>
                  </select>
                </div>
              </div>

              {sendForm.recipientType === 'Specific Class Parents' && (
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select Class *</label>
                  <select
                    value={sendForm.selectedClass}
                    onChange={(e) => setSendForm({ ...sendForm, selectedClass: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                  >
                    <option value="Class 10-A">Class 10-A</option>
                    <option value="Class 9-A">Class 9-A</option>
                    <option value="Class 11-Science">Class 11-Science</option>
                    <option value="Class 12-Science">Class 12-Science</option>
                  </select>
                </div>
              )}

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select Pre-Defined Template</label>
                <select
                  value={sendForm.template}
                  onChange={(e) => {
                    const tmpl = smsTemplates.find(t => t.title === e.target.value);
                    if (tmpl) {
                      setSendForm({ ...sendForm, template: tmpl.title, message: tmpl.content });
                    } else {
                      setSendForm({ ...sendForm, template: 'Custom Message' });
                    }
                  }}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold"
                >
                  <option value="Custom Message">-- Type Custom Message --</option>
                  {smsTemplates.map(t => (
                    <option key={t.id} value={t.title}>{t.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Broadcast Message Body *</label>
                <textarea
                  rows={4}
                  required
                  value={sendForm.message}
                  onChange={(e) => setSendForm({ ...sendForm, message: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs leading-relaxed"
                />
                <span className="text-[10px] text-slate-400 mt-1 block font-mono">
                  {sendForm.message.length} characters (Estimated {Math.ceil(sendForm.message.length / 160)} SMS units)
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <Send className="w-4 h-4" /> Dispatch Broadcast Instantly
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400 block">
                Live Mobile Notification Preview
              </span>
              <div className="p-4 rounded-2xl bg-slate-950 text-white shadow-xl space-y-2 border border-slate-800">
                <div className="flex justify-between items-center text-[10px] text-emerald-400 font-mono">
                  <span>📱 DMPS-ALERT • DLT-APPROVED</span>
                  <span>Now</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-sans">
                  {sendForm.message || 'Type message to see preview...'}
                </p>
                <div className="text-[9px] text-slate-400 pt-1 border-t border-slate-800">
                  Dadheech Memorial Public School, Jargwan
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📊 2. SMS / EMAIL REPORT */}
      {/* ========================================================================= */}
      {activeTab === 'report' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" /> SMS & Email Broadcast Delivery Reports
              </h3>
              <p className="text-xs text-slate-500">Real-time gateway delivery logs, timestamp, and recipient count</p>
            </div>
            <button
              onClick={() => showToast('Delivery report exported to Excel!', 'info')}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-xs flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" /> Export Report
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Log #</th>
                  <th className="p-3.5">Channel</th>
                  <th className="p-3.5">Target Group</th>
                  <th className="p-3.5 font-mono">Recipients</th>
                  <th className="p-3.5">Timestamp</th>
                  <th className="p-3.5">Message Snippet</th>
                  <th className="p-3.5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {dispatchLogs.map(log => (
                  <tr key={log.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-mono font-bold text-indigo-600">{log.id}</td>
                    <td className="p-3.5 font-semibold text-slate-800 dark:text-slate-200">{log.type}</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400 font-medium">{log.recipientGroup}</td>
                    <td className="p-3.5 font-mono font-bold text-emerald-600">{log.count} Sent</td>
                    <td className="p-3.5 font-mono text-slate-500">{log.timestamp}</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-300 max-w-[240px] truncate" title={log.message}>
                      {log.message}
                    </td>
                    <td className="p-3.5 text-right">
                      <Badge variant="success">{log.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📄 3. SMS TEMPLATES */}
      {/* ========================================================================= */}
      {activeTab === 'sms-template' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" /> Pre-Approved SMS & WhatsApp Templates
              </h3>
              <p className="text-xs text-slate-500">DLT registered SMS templates for fast dispatch with dynamic variables</p>
            </div>
            <button
              onClick={() => showToast('New SMS template saved!', 'success')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add SMS Template
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {smsTemplates.map(tmpl => (
              <div key={tmpl.id} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5 hover:border-indigo-400 transition-all">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{tmpl.title}</h4>
                  <Badge variant="primary">{tmpl.id}</Badge>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-mono p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                  {tmpl.content}
                </p>
                <div className="pt-2 flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setSendForm({ ...sendForm, template: tmpl.title, message: tmpl.content });
                      setActiveTab('send');
                    }}
                    className="px-3 py-1 bg-indigo-600 text-white rounded-lg font-bold text-[10px]"
                  >
                    Use This Template
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ✉️ 4. EMAIL TEMPLATES */}
      {/* ========================================================================= */}
      {activeTab === 'email-template' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-indigo-600" /> Official School Email Circular Templates
              </h3>
              <p className="text-xs text-slate-500">Design HTML email circulars with school letterhead headers</p>
            </div>
            <button
              onClick={() => showToast('New Email template saved!', 'success')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Email Template
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {emailTemplates.map(tmpl => (
              <div key={tmpl.id} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
                <Badge variant="purple">{tmpl.id}</Badge>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{tmpl.title}</h4>
                <div className="text-xs text-slate-500 font-semibold">Subject: {tmpl.subject}</div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                  {tmpl.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🎂 5. STUDENT BIRTHDAY WISHES */}
      {/* ========================================================================= */}
      {activeTab === 'birthday-student' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Cake className="w-5 h-5 text-amber-500" /> Student Birthday Greetings & Automated SMS Engine
              </h3>
              <p className="text-xs text-slate-500">Automated morning birthday wishes to students and parents</p>
            </div>
            <button
              onClick={() => showToast('Dispatched today birthday wishes to students! 🎂', 'success')}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Send className="w-4 h-4" /> Send Today Birthday SMS
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Student Name</th>
                  <th className="p-3.5">Class</th>
                  <th className="p-3.5 font-mono">Date of Birth</th>
                  <th className="p-3.5 font-mono">Parent Mobile</th>
                  <th className="p-3.5 text-right">Greeting Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {studentBirthdays.map(b => (
                  <tr key={b.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{b.name}</td>
                    <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-400">{b.class}</td>
                    <td className="p-3.5 font-mono text-indigo-600 font-bold">{b.dob}</td>
                    <td className="p-3.5 font-mono text-slate-500">{b.mobile}</td>
                    <td className="p-3.5 text-right">
                      <Badge variant={b.status.includes('Today') ? 'success' : 'primary'}>{b.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🎉 6. STAFF BIRTHDAY WISHES */}
      {/* ========================================================================= */}
      {activeTab === 'birthday-staff' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Cake className="w-5 h-5 text-rose-500" /> Teaching & Non-Teaching Staff Birthday Greetings
              </h3>
              <p className="text-xs text-slate-500">Celebrate faculty birthdays with personalized management greetings</p>
            </div>
            <button
              onClick={() => showToast('Dispatched birthday wishes to faculty members! 🎉', 'success')}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Send className="w-4 h-4" /> Send Staff Wishes
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Staff Name</th>
                  <th className="p-3.5">Designation</th>
                  <th className="p-3.5 font-mono">Date of Birth</th>
                  <th className="p-3.5 font-mono">Mobile Number</th>
                  <th className="p-3.5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {staffBirthdays.map(b => (
                  <tr key={b.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{b.name}</td>
                    <td className="p-3.5 text-slate-500">{b.designation}</td>
                    <td className="p-3.5 font-mono text-indigo-600 font-bold">{b.dob}</td>
                    <td className="p-3.5 font-mono text-slate-500">{b.mobile}</td>
                    <td className="p-3.5 text-right">
                      <Badge variant={b.status.includes('Today') ? 'success' : 'primary'}>{b.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📬 7. MESSAGE (MAILBOX - Exact Screenshot 2 Match) */}
      {/* ========================================================================= */}
      {activeTab.startsWith('mailbox') && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Mailbox Folder Sidebar */}
          <div className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <button
              onClick={() => setMailboxFolder('compose')}
              className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <SendHorizontal className="w-4 h-4" /> Compose Message
            </button>

            <div className="space-y-1 text-xs font-bold">
              <button
                onClick={() => setMailboxFolder('inbox')}
                className={`w-full p-2.5 rounded-xl flex items-center justify-between transition-all ${
                  mailboxFolder === 'inbox' ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-black' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Inbox className="w-4 h-4" /> Inbox
                </div>
                <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px]">
                  {messages.filter(m => m.folder === 'inbox').length}
                </span>
              </button>

              <button
                onClick={() => setMailboxFolder('sent')}
                className={`w-full p-2.5 rounded-xl flex items-center justify-between transition-all ${
                  mailboxFolder === 'sent' ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-black' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4" /> Sent
                </div>
                <span className="px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px]">
                  {messages.filter(m => m.folder === 'sent').length}
                </span>
              </button>

              <button
                onClick={() => setMailboxFolder('important')}
                className={`w-full p-2.5 rounded-xl flex items-center justify-between transition-all ${
                  mailboxFolder === 'important' ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-black' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" /> Important
                </div>
                <span className="text-[10px] text-slate-400">0</span>
              </button>

              <button
                onClick={() => setMailboxFolder('trash')}
                className={`w-full p-2.5 rounded-xl flex items-center justify-between transition-all ${
                  mailboxFolder === 'trash' ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-black' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Trash2 className="w-4 h-4" /> Trash
                </div>
                <span className="text-[10px] text-slate-400">0</span>
              </button>
            </div>
          </div>

          {/* Right Column: Inbox / Folder View matching screenshot */}
          <div className="lg:col-span-9 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            
            {mailboxFolder === 'compose' ? (
              /* Compose View */
              <div className="space-y-4">
                <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <SendHorizontal className="w-4 h-4 text-indigo-600" /> New Message Draft
                </h3>
                <form onSubmit={handleSendComposeMessage} className="space-y-4 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">To Recipient *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. all-teachers@dmps.edu.in or parent@gmail.com"
                      value={composeForm.recipient}
                      onChange={(e) => setComposeForm({ ...composeForm, recipient: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Subject *</label>
                    <input
                      type="text"
                      required
                      placeholder="Message Subject..."
                      value={composeForm.subject}
                      onChange={(e) => setComposeForm({ ...composeForm, subject: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Message Content *</label>
                    <textarea
                      rows={6}
                      required
                      placeholder="Write your email/message text..."
                      value={composeForm.message}
                      onChange={(e) => setComposeForm({ ...composeForm, message: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs leading-relaxed"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <button
                      type="button"
                      onClick={() => setMailboxFolder('inbox')}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Table View matching screenshot */
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-1.5">
                    <button onClick={() => showToast('Copied to clipboard!', 'info')} className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200" title="Copy"><Copy className="w-4 h-4" /></button>
                    <button onClick={() => showToast('Exporting to Excel...', 'info')} className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200" title="Excel"><FileText className="w-4 h-4" /></button>
                    <button onClick={() => window.print()} className="p-2 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200" title="Print"><Printer className="w-4 h-4" /></button>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="relative w-52">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search mailbox..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-2xl">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                        <th className="p-3 w-10 text-center"><input type="checkbox" /></th>
                        <th className="p-3">Sender</th>
                        <th className="p-3">Subjects</th>
                        <th className="p-3">Message</th>
                        <th className="p-3 font-mono text-right">Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {messages
                        .filter(m => m.folder === mailboxFolder)
                        .map(msg => (
                          <tr key={msg.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 cursor-pointer">
                            <td className="p-3 text-center"><input type="checkbox" /></td>
                            <td className="p-3 font-bold text-slate-900 dark:text-white max-w-[160px] truncate">{msg.sender}</td>
                            <td className="p-3 font-black text-indigo-600 dark:text-indigo-400 max-w-[180px] truncate">{msg.subject}</td>
                            <td className="p-3 text-slate-600 dark:text-slate-300 max-w-[280px] truncate">{msg.message}</td>
                            <td className="p-3 font-mono text-slate-400 text-right text-[11px]">{msg.time}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
};

export default NoticeCommunicationPage;
