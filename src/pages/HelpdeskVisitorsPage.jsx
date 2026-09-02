import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
  Plus,
  CheckCircle2,
  Clock,
  User,
  ShieldCheck,
  Printer,
  Phone,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  Package,
  Send,
  Inbox,
  Search,
  Trash2,
  Calendar,
  Building2,
  Filter
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const HelpdeskVisitorsPage = ({ initialTab = 'inquiries' }) => {
  const { showToast } = useToast();
  const [complaints, setComplaints] = useState(schoolService.getComplaints());
  const [visitors, setVisitors] = useState(schoolService.getVisitors());
  const [inquiries, setInquiries] = useState(schoolService.getAdmissionInquiries());
  const [callLogs, setCallLogs] = useState(schoolService.getCallLogs());
  const [postalRecords, setPostalRecords] = useState(schoolService.getPostalRecords());

  const resolveTab = (tab) => {
    if (!tab) return 'inquiries';
    if (tab === 'helpdesk-passes' || tab === 'passes' || tab === 'visitors') return 'visitors';
    if (tab === 'helpdesk-calls' || tab === 'calls') return 'calls';
    if (tab === 'helpdesk-postal' || tab === 'postal') return 'postal';
    if (tab === 'helpdesk-grievance' || tab === 'complaints') return 'complaints';
    return 'inquiries';
  };

  const [activeTab, setActiveTab] = useState(() => resolveTab(initialTab));
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (initialTab) setActiveTab(resolveTab(initialTab));
  }, [initialTab]);

  // Modals state
  const [isNewVisitorModalOpen, setIsNewVisitorModalOpen] = useState(false);
  const [isNewCallModalOpen, setIsNewCallModalOpen] = useState(false);
  const [isNewPostalModalOpen, setIsNewPostalModalOpen] = useState(false);
  const [isNewInquiryModalOpen, setIsNewInquiryModalOpen] = useState(false);
  const [isNewComplaintModalOpen, setIsNewComplaintModalOpen] = useState(false);
  const [selectedPassForPrint, setSelectedPassForPrint] = useState(null);

  // Forms state
  const [visitorForm, setVisitorForm] = useState({
    name: '',
    mobile: '',
    purpose: 'New Admission Inquiry',
    personToMeet: 'Principal / Admin Office',
    idProof: 'Aadhaar Card'
  });

  const [callForm, setCallForm] = useState({
    callerName: '',
    phone: '',
    callType: 'Incoming',
    purpose: 'General Inquiry',
    duration: '2m 00s',
    response: '',
    followUpDate: '',
    status: 'Resolved'
  });

  const [postalForm, setPostalForm] = useState({
    type: 'Received',
    trackingNo: '',
    title: '',
    sender: '',
    receiver: 'Principal Office, DMPS',
    courierAgency: 'India Post Speed Post',
    confidential: false,
    notes: ''
  });

  const [inquiryForm, setInquiryForm] = useState({
    parentName: '',
    phone: '',
    studentName: '',
    classSeeking: 'Class 1',
    branch: 'Main Campus, Jargwan',
    notes: ''
  });

  const [complaintForm, setComplaintForm] = useState({
    title: '',
    category: 'Administration',
    priority: 'Medium',
    submittedBy: '',
    description: ''
  });

  const refreshData = () => {
    setComplaints([...schoolService.getComplaints()]);
    setVisitors([...schoolService.getVisitors()]);
    setInquiries([...schoolService.getAdmissionInquiries()]);
    setCallLogs([...schoolService.getCallLogs()]);
    setPostalRecords([...schoolService.getPostalRecords()]);
  };

  // Handlers
  const handleResolveComplaint = (id) => {
    schoolService.resolveComplaint(id, 'Maintenance completed and verified by duty coordinator.');
    refreshData();
    showToast('Complaint ticket marked as Resolved!', 'success');
  };

  const handleCreateVisitor = (e) => {
    e.preventDefault();
    if (!visitorForm.name || !visitorForm.mobile) {
      showToast('Please enter visitor name and mobile number', 'warning');
      return;
    }
    const newVis = schoolService.addVisitor(visitorForm);
    refreshData();
    setIsNewVisitorModalOpen(false);
    setVisitorForm({ name: '', mobile: '', purpose: 'New Admission Inquiry', personToMeet: 'Principal / Admin Office', idProof: 'Aadhaar Card' });
    showToast(`Visitor Gate Pass issued: ${newVis.passNo}! 🛡️`, 'success');
  };

  const handleCheckoutVisitor = (id) => {
    schoolService.checkoutVisitor(id);
    refreshData();
    showToast('Visitor logged out through Security Gate', 'info');
  };

  const handleStatusChange = (id, newStatus) => {
    schoolService.updateInquiryStatus(id, newStatus);
    refreshData();
    showToast(`Inquiry status updated to ${newStatus}`, 'success');
  };

  const handleCreateCallLog = (e) => {
    e.preventDefault();
    if (!callForm.callerName || !callForm.phone) {
      showToast('Please enter caller name and phone number', 'warning');
      return;
    }
    schoolService.addCallLog(callForm);
    refreshData();
    setIsNewCallModalOpen(false);
    setCallForm({ callerName: '', phone: '', callType: 'Incoming', purpose: 'General Inquiry', duration: '2m 00s', response: '', followUpDate: '', status: 'Resolved' });
    showToast('Phone Call Log saved successfully! 📞', 'success');
  };

  const handleDeleteCallLog = (id) => {
    schoolService.deleteCallLog(id);
    refreshData();
    showToast('Call log deleted', 'info');
  };

  const handleCreatePostal = (e) => {
    e.preventDefault();
    if (!postalForm.title || !postalForm.sender) {
      showToast('Please enter document title and sender details', 'warning');
      return;
    }
    schoolService.addPostalRecord(postalForm);
    refreshData();
    setIsNewPostalModalOpen(false);
    setPostalForm({ type: 'Received', trackingNo: '', title: '', sender: '', receiver: 'Principal Office, DMPS', courierAgency: 'India Post Speed Post', confidential: false, notes: '' });
    showToast('Postal / Courier entry recorded! 📦', 'success');
  };

  const handleDeletePostal = (id) => {
    schoolService.deletePostalRecord(id);
    refreshData();
    showToast('Postal record removed', 'info');
  };

  const handleCreateInquiry = (e) => {
    e.preventDefault();
    if (!inquiryForm.parentName || !inquiryForm.phone) {
      showToast('Please enter parent name and phone number', 'warning');
      return;
    }
    schoolService.addAdmissionInquiry(inquiryForm);
    refreshData();
    setIsNewInquiryModalOpen(false);
    setInquiryForm({ parentName: '', phone: '', studentName: '', classSeeking: 'Class 1', branch: 'Main Campus, Jargwan', notes: '' });
    showToast('New admission inquiry logged! 📝', 'success');
  };

  const handleCreateComplaint = (e) => {
    e.preventDefault();
    if (!complaintForm.title || !complaintForm.submittedBy) {
      showToast('Please fill title and submitted by fields', 'warning');
      return;
    }
    if (schoolService.addComplaint) {
      schoolService.addComplaint(complaintForm);
    } else {
      if (!Array.isArray(schoolService.data?.complaints)) schoolService.data.complaints = [];
      schoolService.data.complaints.unshift({
        id: `CMP-${Date.now().toString().slice(-4)}`,
        status: 'Open',
        date: new Date().toLocaleDateString('en-GB'),
        ...complaintForm
      });
      schoolService.saveData();
    }
    refreshData();
    setIsNewComplaintModalOpen(false);
    setComplaintForm({ title: '', category: 'Administration', priority: 'Medium', submittedBy: '', description: '' });
    showToast('Grievance ticket created!', 'success');
  };

  const getHeaderMeta = () => {
    switch (activeTab) {
      case 'inquiries':
        return {
          icon: <Phone className="w-5 h-5 text-emerald-600" />,
          title: 'Admission Inquiries & Front Desk',
          subtitle: `Track and manage all web & walk-in admission inquiries (${inquiries.length} total).`,
          badge: 'Live Admissions CRM'
        };
      case 'visitors':
        return {
          icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
          title: 'Visitor Logbook & Gate Pass Register',
          subtitle: 'Issue computerized gate passes and verify visitor check-in / check-out timestamps.',
          badge: 'Campus Security'
        };
      case 'calls':
        return {
          icon: <PhoneCall className="w-5 h-5 text-blue-600" />,
          title: 'Phone Call Logs & Inquiries Register',
          subtitle: 'Log all incoming & outgoing phone calls from parents, vendors and departments.',
          badge: 'Reception Telephony'
        };
      case 'postal':
        return {
          icon: <Package className="w-5 h-5 text-amber-600" />,
          title: 'Postal & Courier Dispatch / Receive Register',
          subtitle: 'Track incoming official letters, board communications, and outgoing speed-post couriers.',
          badge: 'Dispatch Desk'
        };
      case 'complaints':
        return {
          icon: <ShieldAlert className="w-5 h-5 text-rose-600" />,
          title: 'Parent & Staff Grievance Tickets',
          subtitle: 'Track, assign and resolve facility, transport, academic and administration complaints.',
          badge: 'Grievance Desk'
        };
      default:
        return {
          icon: <Building2 className="w-5 h-5 text-blue-600" />,
          title: 'Reception & Front Desk Management',
          subtitle: 'Complete front desk, visitor security, phone logs and postal records.',
          badge: 'Front Office'
        };
    }
  };

  const meta = getHeaderMeta();

  // Navigation Tabs
  const navTabs = [
    { id: 'inquiries', label: 'Admission Inquiries', icon: Phone, count: inquiries.length },
    { id: 'visitors', label: 'Visitor Gate Passes', icon: ShieldCheck, count: visitors.filter(v => v.status === 'Inside Campus').length },
    { id: 'calls', label: 'Phone Call Logs', icon: PhoneCall, count: callLogs.length },
    { id: 'postal', label: 'Postal / Courier Records', icon: Package, count: postalRecords.length },
    { id: 'complaints', label: 'Grievances & Tickets', icon: ShieldAlert, count: complaints.filter(c => c.status !== 'Resolved').length }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Dynamic Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
              {meta.icon}
            </span>
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              {meta.title}
            </h2>
            <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 font-bold text-[10px] border border-blue-200 dark:border-blue-800">
              {meta.badge}
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-1">
            {meta.subtitle}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {activeTab === 'inquiries' && (
            <button
              onClick={() => setIsNewInquiryModalOpen(true)}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" /> Log Admission Inquiry
            </button>
          )}

          {activeTab === 'visitors' && (
            <button
              onClick={() => setIsNewVisitorModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <ShieldCheck className="w-4 h-4" /> Issue Gate Visitor Pass
            </button>
          )}

          {activeTab === 'calls' && (
            <button
              onClick={() => setIsNewCallModalOpen(true)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <PhoneCall className="w-4 h-4" /> Log Phone Call
            </button>
          )}

          {activeTab === 'postal' && (
            <button
              onClick={() => setIsNewPostalModalOpen(true)}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Package className="w-4 h-4" /> Add Postal Record
            </button>
          )}

          {activeTab === 'complaints' && (
            <button
              onClick={() => setIsNewComplaintModalOpen(true)}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" /> New Grievance Ticket
            </button>
          )}
        </div>
      </div>

      {/* Modern Reception Sub-Tabs Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar print:hidden">
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                window.location.hash = tab.id === 'inquiries' ? 'helpdesk-inquiries' : `helpdesk-${tab.id === 'visitors' ? 'passes' : tab.id === 'complaints' ? 'grievance' : tab.id}`;
              }}
              className={`px-4 py-2.5 rounded-2xl font-bold text-xs flex items-center gap-2 transition-all whitespace-nowrap shadow-xs ${
                isActive
                  ? 'bg-blue-600 text-white shadow-blue-500/20 ring-2 ring-blue-400/40'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: Online & Walk-in Admission Inquiries */}
      {/* ========================================================================= */}
      {activeTab === 'inquiries' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden space-y-4 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-600" /> Admission Applications & Desk Inquiries (2026–27)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Prospective student inquiries from website & front-desk CRM forwarded to official WhatsApp (9758975880).
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search inquiries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs w-48 text-slate-900 dark:text-white"
                />
              </div>
            </div>
          </div>

          {inquiries.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-xs italic">
              No admission inquiries recorded yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                    <th className="p-4">Inquiry ID & Date</th>
                    <th className="p-4">Parent / Guardian</th>
                    <th className="p-4">Student & Class</th>
                    <th className="p-4">Campus Branch</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Desk Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {inquiries
                    .filter(inq => 
                      !searchTerm ||
                      inq.parentName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      inq.studentName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      inq.phone?.includes(searchTerm)
                    )
                    .map((inq) => (
                    <tr key={inq.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-4">
                        <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 block">{inq.id}</span>
                        <span className="text-[10px] text-slate-400">{inq.date} • {inq.time}</span>
                      </td>
                      <td className="p-4">
                        <p className="font-bold text-slate-900 dark:text-white">{inq.parentName}</p>
                        <a href={`tel:${inq.phone}`} className="text-sky-600 hover:underline font-mono text-[11px] block">
                          📞 {inq.phone}
                        </a>
                      </td>
                      <td className="p-4">
                        <p className="font-bold text-slate-800 dark:text-slate-200">{inq.studentName}</p>
                        <span className="inline-block px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-bold text-[10px]">
                          {inq.classSeeking}
                        </span>
                      </td>
                      <td className="p-4 text-slate-600 dark:text-slate-400 font-medium">
                        {inq.branch}
                      </td>
                      <td className="p-4">
                        <select
                          value={inq.status}
                          onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                          className="px-2.5 py-1 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="New Inquiry">🟡 New Inquiry</option>
                          <option value="Called / In Touch">🔵 Called / In Touch</option>
                          <option value="Counseling Done">🟣 Counseling Done</option>
                          <option value="Admitted">🟢 Admitted</option>
                        </select>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <a
                            href={`https://wa.me/91${(inq.phone || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                              `Hello ${inq.parentName}, greetings from Dadheech Memorial Public School. We received your admission inquiry for ${inq.studentName} (${inq.classSeeking}).`
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] flex items-center gap-1 shadow-sm transition-colors"
                          >
                            <span>WhatsApp</span>
                          </a>
                          <a
                            href={`tel:${inq.phone}`}
                            className="px-3 py-1.5 rounded-lg bg-[#0b1e38] hover:bg-slate-800 text-white font-bold text-[11px] flex items-center gap-1 shadow-sm transition-colors"
                          >
                            <span>Call</span>
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: Visitor Logbook & Gate Passes */}
      {/* ========================================================================= */}
      {activeTab === 'visitors' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-600" /> Campus Security & Visitor Logbook
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Issue visitor gate pass slips and track security check-in & check-out.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-800">
              Inside Campus: {visitors.filter(v => v.status === 'Inside Campus').length}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                  <th className="p-4">Pass Number</th>
                  <th className="p-4">Visitor Name & Phone</th>
                  <th className="p-4">Purpose of Visit</th>
                  <th className="p-4">Person to Meet</th>
                  <th className="p-4">Entry / Exit Time</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Gate Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {visitors.map(vis => (
                  <tr key={vis.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-4 font-mono font-bold text-slate-900 dark:text-white">{vis.passNo}</td>
                    <td className="p-4">
                      <p className="font-bold text-slate-900 dark:text-white">{vis.name}</p>
                      <p className="text-[10px] text-slate-500 font-mono">{vis.mobile}</p>
                    </td>
                    <td className="p-4 font-semibold text-slate-700 dark:text-slate-300">{vis.purpose}</td>
                    <td className="p-4 font-bold text-indigo-600 dark:text-indigo-400">{vis.personToMeet}</td>
                    <td className="p-4 font-mono text-slate-600 dark:text-slate-300">
                      In: {vis.entryTime} {vis.exitTime ? `| Out: ${vis.exitTime}` : ''}
                    </td>
                    <td className="p-4">
                      <Badge variant={vis.status === 'Inside Campus' ? 'warning' : 'success'}>
                        {vis.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => {
                          setSelectedPassForPrint(vis);
                          setTimeout(() => window.print(), 200);
                        }}
                        className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-bold text-xs inline-flex items-center gap-1"
                        title="Print Gate Pass Slip"
                      >
                        <Printer className="w-3 h-3" /> Print
                      </button>
                      {vis.status === 'Inside Campus' ? (
                        <button
                          onClick={() => handleCheckoutVisitor(vis.id)}
                          className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold text-xs"
                        >
                          Check Out
                        </button>
                      ) : (
                        <span className="text-xs text-slate-400 font-semibold">Exited</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: Phone Call Logs 📞 */}
      {/* ========================================================================= */}
      {activeTab === 'calls' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-blue-600" /> Reception Phone Calls & Telephony Inquiries Log
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Official registry of parent phone inquiries, fee queries, callbacks and front-desk resolutions.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-800">
              Total Logs: {callLogs.length}
            </span>
          </div>

          {callLogs.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-xs italic">
              No phone calls logged yet. Click "+ Log Phone Call" above to record a call.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                    <th className="p-4">Call ID & Time</th>
                    <th className="p-4">Caller Details</th>
                    <th className="p-4">Call Type & Duration</th>
                    <th className="p-4">Purpose of Call</th>
                    <th className="p-4">Staff Response / Notes</th>
                    <th className="p-4">Status / Follow-up</th>
                    <th className="p-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {callLogs.map((call) => (
                    <tr key={call.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-4">
                        <span className="font-mono font-bold text-blue-600 dark:text-blue-400 block">{call.id}</span>
                        <span className="text-[10px] text-slate-400">{call.date} • {call.time}</span>
                      </td>
                      <td className="p-4">
                        <p className="font-bold text-slate-900 dark:text-white">{call.callerName}</p>
                        <a href={`tel:${call.phone}`} className="text-sky-600 hover:underline font-mono text-[11px] block">
                          📞 {call.phone}
                        </a>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          call.callType === 'Incoming'
                            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                            : 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
                        }`}>
                          {call.callType === 'Incoming' ? <PhoneIncoming className="w-3 h-3" /> : <PhoneOutgoing className="w-3 h-3" />}
                          {call.callType}
                        </span>
                        <span className="block text-[10px] text-slate-400 mt-0.5 font-mono">⏱️ {call.duration || 'N/A'}</span>
                      </td>
                      <td className="p-4 font-semibold text-slate-800 dark:text-slate-200">
                        {call.purpose}
                      </td>
                      <td className="p-4 text-slate-600 dark:text-slate-300 max-w-xs">
                        {call.response || '—'}
                      </td>
                      <td className="p-4">
                        <Badge variant={call.status === 'Resolved' || call.status === 'Closed' ? 'success' : 'warning'}>
                          {call.status}
                        </Badge>
                        {call.followUpDate && (
                          <span className="block text-[10px] text-amber-700 dark:text-amber-400 font-bold mt-1">
                            📅 Follow-up: {call.followUpDate}
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <a
                            href={`tel:${call.phone}`}
                            className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-300 transition-colors"
                            title="Dial Phone"
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </a>
                          <button
                            onClick={() => handleDeleteCallLog(call.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 transition-colors"
                            title="Delete Call Log"
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
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: Postal & Courier Records 📦 */}
      {/* ========================================================================= */}
      {activeTab === 'postal' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Package className="w-5 h-5 text-amber-600" /> Postal & Courier Dispatch / Receive Register
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Official registry for incoming letters, CBSE guidelines, student TC and outgoing speed-post packages.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-800">
              Total Records: {postalRecords.length}
            </span>
          </div>

          {postalRecords.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-xs italic">
              No postal or courier records found. Click "+ Add Postal Record" to record dispatch or receipt.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                    <th className="p-4">Type & Tracking No</th>
                    <th className="p-4">Document Title / Subject</th>
                    <th className="p-4">Sender Details</th>
                    <th className="p-4">Receiver / Department</th>
                    <th className="p-4">Courier Agency & Date</th>
                    <th className="p-4">Notes / Confidential</th>
                    <th className="p-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {postalRecords.map((post) => (
                    <tr key={post.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          post.type === 'Received'
                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-200'
                            : 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 border border-amber-200'
                        }`}>
                          {post.type === 'Received' ? <Inbox className="w-3 h-3" /> : <Send className="w-3 h-3" />}
                          {post.type}
                        </span>
                        <span className="block font-mono font-bold text-slate-700 dark:text-slate-300 text-[10px] mt-1">
                          #{post.trackingNo || post.id}
                        </span>
                      </td>
                      <td className="p-4 font-bold text-slate-900 dark:text-white max-w-xs">
                        {post.title}
                      </td>
                      <td className="p-4 text-slate-700 dark:text-slate-300 font-medium">
                        {post.sender}
                      </td>
                      <td className="p-4 text-slate-700 dark:text-slate-300 font-medium">
                        {post.receiver}
                      </td>
                      <td className="p-4">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 block">{post.courierAgency}</span>
                        <span className="text-[10px] text-slate-400 font-mono">📅 {post.date}</span>
                      </td>
                      <td className="p-4">
                        {post.confidential && (
                          <span className="inline-block px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 font-bold text-[9px] mb-1">
                            🔒 Confidential
                          </span>
                        )}
                        <p className="text-[11px] text-slate-500">{post.notes || '—'}</p>
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleDeletePostal(post.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 transition-colors"
                          title="Delete Postal Record"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: Grievances & Complaints */}
      {/* ========================================================================= */}
      {activeTab === 'complaints' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {complaints.map(comp => (
            <div
              key={comp.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
            >
              <div className="flex justify-between items-start">
                <div>
                  <Badge variant={comp.priority === 'High' ? 'danger' : 'primary'} size="sm">
                    {comp.category} • {comp.priority} Priority
                  </Badge>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1.5">{comp.title}</h3>
                </div>
                <Badge variant={comp.status === 'Resolved' ? 'success' : 'warning'}>
                  {comp.status}
                </Badge>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {comp.description}
              </p>

              {comp.resolution && (
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs text-emerald-900 dark:text-emerald-200">
                  <strong>Resolution:</strong> {comp.resolution}
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>By: <strong className="text-slate-800 dark:text-slate-200">{comp.submittedBy}</strong></span>
                {comp.status !== 'Resolved' && (
                  <button
                    onClick={() => handleResolveComplaint(comp.id)}
                    className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center gap-1 shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" /> Resolve Ticket
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 1: Issue Visitor Gate Pass */}
      {/* ========================================================================= */}
      <Modal
        isOpen={isNewVisitorModalOpen}
        onClose={() => setIsNewVisitorModalOpen(false)}
        title="Issue Campus Security Gate Pass"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleCreateVisitor} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Visitor Full Name *</label>
              <input
                type="text"
                required
                value={visitorForm.name}
                onChange={(e) => setVisitorForm({ ...visitorForm, name: e.target.value })}
                placeholder="e.g. Mr. Anil Kapoor"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Mobile Contact *</label>
              <input
                type="text"
                required
                value={visitorForm.mobile}
                onChange={(e) => setVisitorForm({ ...visitorForm, mobile: e.target.value })}
                placeholder="+91 98100 00000"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Purpose of Visit</label>
              <input
                type="text"
                value={visitorForm.purpose}
                onChange={(e) => setVisitorForm({ ...visitorForm, purpose: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Person to Meet</label>
              <input
                type="text"
                value={visitorForm.personToMeet}
                onChange={(e) => setVisitorForm({ ...visitorForm, personToMeet: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button type="button" onClick={() => setIsNewVisitorModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-indigo-600 text-white font-bold rounded-xl shadow-lg">Issue Pass</button>
          </div>
        </form>
      </Modal>

      {/* ========================================================================= */}
      {/* MODAL 2: Log Phone Call 📞 */}
      {/* ========================================================================= */}
      <Modal
        isOpen={isNewCallModalOpen}
        onClose={() => setIsNewCallModalOpen(false)}
        title="Log Front Desk Phone Call"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleCreateCallLog} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Caller Name *</label>
              <input
                type="text"
                required
                value={callForm.callerName}
                onChange={(e) => setCallForm({ ...callForm, callerName: e.target.value })}
                placeholder="e.g. Mr. Rajesh Sharma"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Phone Number *</label>
              <input
                type="text"
                required
                value={callForm.phone}
                onChange={(e) => setCallForm({ ...callForm, phone: e.target.value })}
                placeholder="e.g. 9897123456"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Call Type</label>
              <select
                value={callForm.callType}
                onChange={(e) => setCallForm({ ...callForm, callType: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              >
                <option value="Incoming">📥 Incoming Call</option>
                <option value="Outgoing">📤 Outgoing Call</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Call Duration</label>
              <input
                type="text"
                value={callForm.duration}
                onChange={(e) => setCallForm({ ...callForm, duration: e.target.value })}
                placeholder="e.g. 3m 20s"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div className="col-span-2">
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Purpose of Call</label>
              <input
                type="text"
                value={callForm.purpose}
                onChange={(e) => setCallForm({ ...callForm, purpose: e.target.value })}
                placeholder="e.g. Admission Inquiry / Fee Due Status / Bus Timing"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div className="col-span-2">
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Receptionist Response / Notes</label>
              <textarea
                rows="2"
                value={callForm.response}
                onChange={(e) => setCallForm({ ...callForm, response: e.target.value })}
                placeholder="Summary of discussion and guidance provided to caller..."
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              ></textarea>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Next Follow-up Date (Optional)</label>
              <input
                type="date"
                value={callForm.followUpDate}
                onChange={(e) => setCallForm({ ...callForm, followUpDate: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Call Status</label>
              <select
                value={callForm.status}
                onChange={(e) => setCallForm({ ...callForm, status: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              >
                <option value="Resolved">🟢 Resolved</option>
                <option value="Follow-up Needed">🟡 Follow-up Needed</option>
                <option value="Closed">⚪ Closed</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button type="button" onClick={() => setIsNewCallModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-blue-600 text-white font-bold rounded-xl shadow-lg">Save Call Log</button>
          </div>
        </form>
      </Modal>

      {/* ========================================================================= */}
      {/* MODAL 3: Add Postal / Courier Record 📦 */}
      {/* ========================================================================= */}
      <Modal
        isOpen={isNewPostalModalOpen}
        onClose={() => setIsNewPostalModalOpen(false)}
        title="Add Postal & Courier Record"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleCreatePostal} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Record Type *</label>
              <select
                value={postalForm.type}
                onChange={(e) => setPostalForm({ ...postalForm, type: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              >
                <option value="Received">📥 Received Letter / Courier</option>
                <option value="Dispatched">📤 Dispatched Letter / Courier</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Consignment / Tracking No</label>
              <input
                type="text"
                value={postalForm.trackingNo}
                onChange={(e) => setPostalForm({ ...postalForm, trackingNo: e.target.value })}
                placeholder="e.g. ED829374921IN"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div className="col-span-2">
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Document Title / Subject *</label>
              <input
                type="text"
                required
                value={postalForm.title}
                onChange={(e) => setPostalForm({ ...postalForm, title: e.target.value })}
                placeholder="e.g. CBSE Board Registration Forms / Transfer Certificate"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Sender Name / Address *</label>
              <input
                type="text"
                required
                value={postalForm.sender}
                onChange={(e) => setPostalForm({ ...postalForm, sender: e.target.value })}
                placeholder="e.g. CBSE Regional Office, Noida"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Receiver / Department</label>
              <input
                type="text"
                value={postalForm.receiver}
                onChange={(e) => setPostalForm({ ...postalForm, receiver: e.target.value })}
                placeholder="e.g. Principal Office, DMPS"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Courier / Delivery Agency</label>
              <input
                type="text"
                value={postalForm.courierAgency}
                onChange={(e) => setPostalForm({ ...postalForm, courierAgency: e.target.value })}
                placeholder="e.g. Speed Post / DTDC / Trackon"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div className="flex items-center gap-2 pt-6">
              <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-700 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={postalForm.confidential}
                  onChange={(e) => setPostalForm({ ...postalForm, confidential: e.target.checked })}
                  className="w-4 h-4 rounded text-rose-600 focus:ring-rose-500"
                />
                <span>🔒 Mark as Confidential</span>
              </label>
            </div>
            <div className="col-span-2">
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Remarks / File Note</label>
              <input
                type="text"
                value={postalForm.notes}
                onChange={(e) => setPostalForm({ ...postalForm, notes: e.target.value })}
                placeholder="Handed over to staff, packet condition, etc."
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button type="button" onClick={() => setIsNewPostalModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-amber-600 text-white font-bold rounded-xl shadow-lg">Save Postal Record</button>
          </div>
        </form>
      </Modal>

      {/* ========================================================================= */}
      {/* MODAL 4: Log Walk-in Admission Inquiry */}
      {/* ========================================================================= */}
      <Modal
        isOpen={isNewInquiryModalOpen}
        onClose={() => setIsNewInquiryModalOpen(false)}
        title="Record Front-Desk Admission Inquiry"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleCreateInquiry} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Parent / Guardian Name *</label>
              <input
                type="text"
                required
                value={inquiryForm.parentName}
                onChange={(e) => setInquiryForm({ ...inquiryForm, parentName: e.target.value })}
                placeholder="e.g. Mr. Mukesh Rajput"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Mobile Contact *</label>
              <input
                type="text"
                required
                value={inquiryForm.phone}
                onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                placeholder="e.g. 98100 00000"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Student Name</label>
              <input
                type="text"
                value={inquiryForm.studentName}
                onChange={(e) => setInquiryForm({ ...inquiryForm, studentName: e.target.value })}
                placeholder="e.g. Aryan Rajput"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Seeking Admission In</label>
              <select
                value={inquiryForm.classSeeking}
                onChange={(e) => setInquiryForm({ ...inquiryForm, classSeeking: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              >
                {['PG', 'NUR', 'LKG', 'UKG', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'].map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="col-span-2">
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Campus Branch</label>
              <input
                type="text"
                value={inquiryForm.branch}
                onChange={(e) => setInquiryForm({ ...inquiryForm, branch: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button type="button" onClick={() => setIsNewInquiryModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-emerald-600 text-white font-bold rounded-xl shadow-lg">Log Inquiry</button>
          </div>
        </form>
      </Modal>

      {/* ========================================================================= */}
      {/* MODAL 5: Submit Grievance Ticket */}
      {/* ========================================================================= */}
      <Modal
        isOpen={isNewComplaintModalOpen}
        onClose={() => setIsNewComplaintModalOpen(false)}
        title="Submit Grievance / Complaint Ticket"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleCreateComplaint} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Complaint Title *</label>
              <input
                type="text"
                required
                value={complaintForm.title}
                onChange={(e) => setComplaintForm({ ...complaintForm, title: e.target.value })}
                placeholder="e.g. Classroom 5B Fan Not Working / Bus Route Stoppage Delay"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Category</label>
              <select
                value={complaintForm.category}
                onChange={(e) => setComplaintForm({ ...complaintForm, category: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              >
                <option value="Administration">Administration</option>
                <option value="Academics">Academics</option>
                <option value="Transport">Transport</option>
                <option value="Hostel">Hostel</option>
                <option value="Infrastructure">Infrastructure / Maintenance</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Priority</label>
              <select
                value={complaintForm.priority}
                onChange={(e) => setComplaintForm({ ...complaintForm, priority: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              >
                <option value="High">🔴 High Priority</option>
                <option value="Medium">🟡 Medium Priority</option>
                <option value="Low">🟢 Low Priority</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Submitted By (Parent / Staff Name) *</label>
              <input
                type="text"
                required
                value={complaintForm.submittedBy}
                onChange={(e) => setComplaintForm({ ...complaintForm, submittedBy: e.target.value })}
                placeholder="e.g. Mr. Sanjay Sharma (Parent of Class 8A)"
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div className="col-span-2">
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Detailed Description</label>
              <textarea
                rows="3"
                value={complaintForm.description}
                onChange={(e) => setComplaintForm({ ...complaintForm, description: e.target.value })}
                placeholder="Explain the issue in detail..."
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button type="button" onClick={() => setIsNewComplaintModalOpen(false)} className="px-4 py-2 text-slate-500 font-bold">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-rose-600 text-white font-bold rounded-xl shadow-lg">Submit Ticket</button>
          </div>
        </form>
      </Modal>

      {/* Printable Visitor Slip (Visible only during window.print()) */}
      {selectedPassForPrint && (
        <div className="hidden print:block fixed inset-0 bg-white text-slate-900 p-8 font-sans">
          <div className="max-w-md mx-auto border-2 border-slate-900 p-6 rounded-2xl space-y-4">
            <div className="text-center border-b pb-3">
              <h2 className="text-base font-black uppercase">Dadheech Memorial Public School</h2>
              <p className="text-[10px] text-slate-600 uppercase tracking-wider">Campus Security Gate Visitor Pass</p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div><strong>Pass No:</strong> {selectedPassForPrint.passNo}</div>
              <div><strong>Date:</strong> {selectedPassForPrint.date}</div>
              <div><strong>Visitor:</strong> {selectedPassForPrint.name}</div>
              <div><strong>Mobile:</strong> {selectedPassForPrint.mobile}</div>
              <div><strong>To Meet:</strong> {selectedPassForPrint.personToMeet}</div>
              <div><strong>Purpose:</strong> {selectedPassForPrint.purpose}</div>
              <div><strong>Entry:</strong> {selectedPassForPrint.entryTime}</div>
              <div><strong>Exit:</strong> {selectedPassForPrint.exitTime || 'Inside'}</div>
            </div>
            <div className="flex justify-between pt-6 text-[10px] border-t">
              <span>Visitor Signature</span>
              <span>Security Officer Sign</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
