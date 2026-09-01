import React, { useState } from 'react';
import {
  ShieldAlert,
  Plus,
  CheckCircle2,
  Clock,
  User,
  ShieldCheck,
  Printer,
  Phone
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

  const resolveTab = (tab) => {
    if (!tab) return 'inquiries';
    if (tab === 'helpdesk-passes' || tab === 'passes' || tab === 'visitors') return 'visitors';
    if (tab === 'helpdesk-grievance' || tab === 'complaints') return 'complaints';
    return 'inquiries';
  };

  const [activeTab, setActiveTab] = useState(() => resolveTab(initialTab));

  useEffect(() => {
    if (initialTab) setActiveTab(resolveTab(initialTab));
  }, [initialTab]);

  const [isNewVisitorModalOpen, setIsNewVisitorModalOpen] = useState(false);
  const [visitorForm, setVisitorForm] = useState({
    name: '',
    mobile: '',
    purpose: 'New Admission Inquiry',
    personToMeet: 'Admission Officer',
    idProof: 'Aadhaar Card'
  });

  const refreshData = () => {
    setComplaints([...schoolService.getComplaints()]);
    setVisitors([...schoolService.getVisitors()]);
    setInquiries([...schoolService.getAdmissionInquiries()]);
  };

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

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldAlert className="w-7 h-7 text-indigo-600" /> Front Desk & Admission Inquiries
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Website admission applications, parent grievance ticketing and security gate visitor logs.
          </p>
        </div>
        <button
          onClick={() => setIsNewVisitorModalOpen(true)}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-500/20 flex items-center gap-2 transition-all"
        >
          <ShieldCheck className="w-4 h-4" /> Issue Gate Visitor Pass
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 overflow-x-auto pb-1">
        <button
          onClick={() => setActiveTab('inquiries')}
          className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'inquiries'
              ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-sm'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Phone className="w-3.5 h-3.5 text-emerald-600" />
          <span>Website Admission Inquiries ({inquiries.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('complaints')}
          className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'complaints'
              ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Grievance Tickets ({complaints.length})
        </button>
        <button
          onClick={() => setActiveTab('visitors')}
          className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'visitors'
              ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Gate Visitors Log ({visitors.length})
        </button>
      </div>

      {/* TAB 1: Online Admission Inquiries (From Public Website) */}
      {activeTab === 'inquiries' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden space-y-4 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-600" /> Website Online Admission Applications (Session 2026–27)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Every inquiry submitted on the website is logged here in real-time and forwarded to official WhatsApp (9758975880).
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800 shrink-0">
              Total Inquiries: {inquiries.length}
            </span>
          </div>

          {inquiries.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-xs">
              No website inquiries received yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                    <th className="p-4">Inquiry ID & Date</th>
                    <th className="p-4">Parent / Guardian</th>
                    <th className="p-4">Student & Seeking Class</th>
                    <th className="p-4">Campus Branch</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Quick Desk Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {inquiries.map((inq) => (
                    <tr key={inq.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-4">
                        <span className="font-mono font-bold text-indigo-600 block">{inq.id}</span>
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
                            href={`https://wa.me/91${inq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
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

      {/* TAB 2: Complaints */}
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

      {/* TAB 2: Visitors */}
      {activeTab === 'visitors' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
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
                    <td className="p-4 font-bold text-indigo-600">{vis.personToMeet}</td>
                    <td className="p-4 font-mono text-slate-600 dark:text-slate-300">
                      In: {vis.entryTime} {vis.exitTime ? `| Out: ${vis.exitTime}` : ''}
                    </td>
                    <td className="p-4">
                      <Badge variant={vis.status === 'Inside Campus' ? 'warning' : 'success'}>
                        {vis.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-right">
                      {vis.status === 'Inside Campus' ? (
                        <button
                          onClick={() => handleCheckoutVisitor(vis.id)}
                          className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold text-xs"
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

      {/* Visitor Modal */}
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
    </div>
  );
};
