import React, { useState } from 'react';
import {
  User,
  GraduationCap,
  Building,
  Phone,
  Mail,
  Calendar,
  CreditCard,
  FileText,
  Bus,
  MapPin,
  CheckCircle2,
  Clock,
  Printer,
  DollarSign,
  Edit,
  ShieldCheck,
  AlertCircle,
  MessageSquare,
  Share2,
  Lock,
  Unlock,
  Layers,
  Sparkles,
  BookOpen,
  Briefcase,
  Users
} from 'lucide-react';
import { Badge } from '../common/Badge';
import { Modal } from '../common/Modal';
import schoolService from '../../services/schoolService';

export const EmployeeProfileDossierModal = ({
  isOpen,
  onClose,
  employee,
  onEdit = null,
  onPrintIdCard = null,
  onPrintPaySlip = null,
  onPaySalary = null
}) => {
  const [activeTab, setActiveTab] = useState('academic'); // 'academic' | 'personal' | 'dualduty' | 'salary' | 'schedule'

  if (!employee) return null;

  // Retrieve all students assigned to this driver's bus (if role is driver or has transport duty)
  const isDriver = (employee.role || '').toLowerCase().includes('driver') ||
    (employee.designation || '').toLowerCase().includes('driver') ||
    (employee.additionalDuties && employee.additionalDuties.some(d => d.toLowerCase().includes('driver') || d.toLowerCase().includes('transport')));

  const assignedBus = employee.assignedBus || (isDriver ? 'Bus 01' : null);
  const assignedRoute = employee.assignedRoute || (isDriver ? 'Route 1 - Main City / Ramghat' : null);

  // Filter students riding on this employee's assigned bus
  const allStudents = schoolService.getStudents('all');
  const busStudents = isDriver
    ? allStudents.filter(s => {
        if (!s.transport || s.transport.route === 'Self / Walker') return false;
        if (assignedBus && s.transport.vehicle && s.transport.vehicle.toLowerCase().includes(assignedBus.toLowerCase())) return true;
        if (assignedRoute && s.transport.route && s.transport.route.toLowerCase().includes(assignedRoute.toLowerCase())) return true;
        return s.transport.route && s.transport.route !== 'Self / Walker';
      }).slice(0, 45)
    : [];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-black text-xs">
            EMP
          </div>
          <div>
            <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
              {employee.name}
              {employee.additionalDuties && employee.additionalDuties.length > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 text-[10px] font-bold">
                  ⚡ Multi-Duty Staff ({employee.additionalDuties.length + 1} Roles)
                </span>
              )}
            </h3>
            <p className="text-[10px] text-slate-500 font-mono">
              Staff ID: {employee.employeeId || employee.id} • {employee.designation} ({employee.department})
            </p>
          </div>
        </div>
      }
      maxWidth="max-w-4xl"
    >
      <div className="space-y-4 text-xs font-sans">
        
        {/* 🌟 1. Top Hero Profile Summary Card */}
        <div className="p-4 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-4 border border-indigo-900/50">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={employee.photo || `https://ui-avatars.com/api/?name=${employee.name.replace(/\s+/g, '+')}&background=4F46E5&color=fff&size=128&bold=true`}
                alt={employee.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-indigo-400 shadow-md"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${employee.name.replace(/\s+/g, '+')}&background=4F46E5&color=fff&size=128&bold=true`;
                }}
              />
              <span className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-slate-900 ${employee.loginDeactivated ? 'bg-rose-500' : 'bg-emerald-500'}`} />
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-base sm:text-lg font-black tracking-wide text-white uppercase">
                  {employee.name}
                </h2>
                <span className="px-2 py-0.5 rounded-md bg-indigo-500/30 border border-indigo-400/40 text-indigo-200 text-[10px] font-bold uppercase">
                  {employee.role || 'Teacher'}
                </span>
              </div>
              <p className="text-slate-300 text-xs font-medium flex items-center gap-2">
                <span>🏛️ {employee.department || 'Junior Department'}</span>
                <span>•</span>
                <span className="font-mono text-indigo-300">📞 {employee.phone || employee.mobile || 'N/A'}</span>
              </p>
              <p className="text-[11px] text-slate-400 flex items-center gap-1">
                <span>✉️ {employee.email || 'employee@dmps-school.edu.in'}</span>
                {employee.joiningDate && (
                  <span>• Joined: <strong>{new Date(employee.joiningDate).toLocaleDateString('en-GB')}</strong></span>
                )}
              </p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {onPrintIdCard && (
              <button
                type="button"
                onClick={() => onPrintIdCard(employee)}
                className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 backdrop-blur-md transition-all border border-white/10 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-indigo-400" /> ID Card
              </button>
            )}
            {onPrintPaySlip && (
              <button
                type="button"
                onClick={() => onPrintPaySlip(employee)}
                className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 backdrop-blur-md transition-all border border-white/10 cursor-pointer"
              >
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" /> Pay Slip
              </button>
            )}
            {onEdit && (
              <button
                type="button"
                onClick={() => onEdit(employee)}
                className="px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-indigo-500/30 transition-all cursor-pointer"
              >
                <Edit className="w-3.5 h-3.5" /> Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* 🧭 2. Profile Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-200 dark:border-slate-800 custom-scrollbar">
          {[
            { id: 'academic', label: 'Academic & Employment', icon: GraduationCap },
            { id: 'personal', label: 'Personal & Identity', icon: User },
            { id: 'dualduty', label: isDriver ? `🚍 Vehicle Passenger Roster (${busStudents.length})` : '⚡ Dual Duties & Rights', icon: isDriver ? Bus : Sparkles, badge: isDriver ? `${busStudents.length} Students` : null },
            { id: 'salary', label: 'Salary & Bank Account', icon: CreditCard },
            { id: 'schedule', label: 'Class / Duty Schedule', icon: Calendar }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className="px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 font-black text-[9px]">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 📚 TAB 1: ACADEMIC & EMPLOYMENT DETAILS */}
        {/* ========================================================================= */}
        {activeTab === 'academic' && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Branch / Campus</span>
                <strong className="text-slate-900 dark:text-white text-xs block mt-0.5">
                  Dadheech Memorial Public School - Main Campus
                </strong>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Primary Role</span>
                <strong className="text-indigo-600 dark:text-indigo-400 text-xs block mt-0.5 uppercase">
                  {employee.role || 'Teacher'}
                </strong>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Designation</span>
                <strong className="text-slate-900 dark:text-white text-xs block mt-0.5">
                  {employee.designation || 'Faculty Member'}
                </strong>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Department</span>
                <strong className="text-slate-900 dark:text-white text-xs block mt-0.5">
                  {employee.department || 'Junior Wing'}
                </strong>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Educational Qualification</span>
                <strong className="text-slate-900 dark:text-white text-xs block mt-0.5">
                  {employee.qualification || 'B.Sc. / Graduate'}
                </strong>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Experience Details</span>
                <strong className="text-slate-900 dark:text-white text-xs block mt-0.5">
                  {employee.experienceDetails || employee.totalExperience || '1 Month'}
                </strong>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Subject Taught</span>
                <strong className="text-indigo-600 dark:text-indigo-300 text-xs block mt-0.5 font-black">
                  {employee.subjectTaught || employee.subject || 'English / Science'}
                </strong>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Class Teacher Of</span>
                <strong className="text-slate-900 dark:text-white text-xs block mt-0.5">
                  {employee.classTeacherOf || 'None (Subject Teacher)'}
                </strong>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Previous School Experience</span>
                <strong className="text-slate-900 dark:text-white text-xs block mt-0.5">
                  {employee.previousSchool || 'John Howard Convent School, Jargwan (BSR)'}
                </strong>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 👤 TAB 2: PERSONAL & IDENTITY DETAILS */}
        {/* ========================================================================= */}
        {activeTab === 'personal' && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Staff ID / Enroll ID</span>
                <strong className="font-mono text-indigo-600 dark:text-indigo-400 text-xs block mt-0.5 font-black">
                  {employee.staffId || employee.employeeId || '2be02d9'}
                </strong>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Gender & DOB</span>
                <strong className="text-slate-900 dark:text-white text-xs block mt-0.5">
                  {employee.gender || 'Female'} • DOB: {employee.dob || '2007-08-01'}
                </strong>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Religion & Caste</span>
                <strong className="text-slate-900 dark:text-white text-xs block mt-0.5">
                  {employee.religion || 'Hindu'} • Caste: {employee.caste || 'OBC'}
                </strong>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Blood Group</span>
                <strong className="text-rose-600 dark:text-rose-400 text-xs block mt-0.5 font-black">
                  {employee.bloodGroup || 'O+'}
                </strong>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Aadhaar Card No.</span>
                <strong className="font-mono text-slate-900 dark:text-white text-xs block mt-0.5">
                  {employee.aadhaarNo || '8574 9043 3971'}
                </strong>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Driving License No.</span>
                <strong className="font-mono text-slate-900 dark:text-white text-xs block mt-0.5">
                  {employee.drivingLicenseNo || 'N/A (Non-Driver)'}
                </strong>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Father's Name</span>
                <strong className="text-slate-900 dark:text-white text-xs block mt-0.5 uppercase">
                  {employee.fatherName || 'Jitendra Singh'}
                </strong>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Mother's Name</span>
                <strong className="text-slate-900 dark:text-white text-xs block mt-0.5 uppercase">
                  {employee.motherName || 'Bijnesh Devi'}
                </strong>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Marital Status & Spouse</span>
                <strong className="text-slate-900 dark:text-white text-xs block mt-0.5">
                  {employee.maritalStatus || 'Unmarried'} {employee.spouseName ? `(Spouse: ${employee.spouseName})` : ''}
                </strong>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 sm:col-span-2">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Present Residential Address</span>
                <p className="text-slate-800 dark:text-slate-200 text-xs mt-0.5 font-medium">
                  {employee.presentAddress || 'Baijala Kothi Jirauli Dhoom Singh, Aligarh (U.P.)'}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Permanent Address</span>
                <p className="text-slate-800 dark:text-slate-200 text-xs mt-0.5 font-medium">
                  {employee.permanentAddress || employee.presentAddress || 'Same as Present Address'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 🚍 TAB 3: DUAL DUTIES & VEHICLE STUDENT ROSTER (Driver Portal) */}
        {/* ========================================================================= */}
        {activeTab === 'dualduty' && (
          <div className="space-y-3">
            {/* Dual Duty Header Card */}
            <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-amber-950 dark:text-amber-200 uppercase">
                    Multi-Duty Operational Profile (दोहरी भूमिका)
                  </h4>
                  <p className="text-[11px] text-amber-800 dark:text-amber-300">
                    Primary: <strong>{employee.role || 'Teacher'}</strong>
                    {employee.additionalDuties && employee.additionalDuties.length > 0 && (
                      <span> • Assigned Additional Duties: <strong>{employee.additionalDuties.join(', ')}</strong></span>
                    )}
                  </p>
                </div>
              </div>

              {isDriver && (
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-xl bg-orange-600 text-white font-black text-xs">
                    🚌 Assigned: {assignedBus} ({assignedRoute})
                  </span>
                </div>
              )}
            </div>

            {/* If employee is driver or has transport duty: Show Vehicle Passenger Roster */}
            {isDriver ? (
              <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm space-y-2 p-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h4 className="text-xs font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Bus className="w-4 h-4 text-orange-600" /> On-Board Bus Passenger Roster (चालक वाहन छात्र सूची)
                    </h4>
                    <p className="text-[10px] text-slate-400">
                      Showing only students riding in <strong>{assignedBus}</strong> ({assignedRoute})
                    </p>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold text-xs">
                    Total {busStudents.length} Students
                  </span>
                </div>

                <div className="overflow-x-auto max-h-72 custom-scrollbar">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-[10.5px]">
                        <th className="p-2">#</th>
                        <th className="p-2">Student Name</th>
                        <th className="p-2">Class</th>
                        <th className="p-2">Stoppage / Village</th>
                        <th className="p-2">Parent Contact</th>
                        <th className="p-2 text-right">Quick Call / WhatsApp</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {busStudents.map((st, idx) => (
                        <tr key={st.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                          <td className="p-2 text-slate-400 font-mono text-[10px]">{idx + 1}</td>
                          <td className="p-2 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold text-[10px]">
                              {st.name.charAt(0)}
                            </div>
                            <span>{st.name}</span>
                          </td>
                          <td className="p-2 text-slate-700 dark:text-slate-300">{st.class}-{st.section || 'A'}</td>
                          <td className="p-2 font-bold text-orange-950 dark:text-orange-300">
                            📍 {st.transport?.stop || st.transport?.stoppage || 'Baijala'}
                          </td>
                          <td className="p-2 font-mono text-slate-700 dark:text-slate-300">
                            {st.parents?.fatherMobile || st.parents?.fatherPhone || '9758882443'}
                          </td>
                          <td className="p-2 text-right">
                            <div className="flex items-center justify-end gap-1">
                              <a
                                href={`tel:${st.parents?.fatherMobile || st.parents?.fatherPhone || '9758882443'}`}
                                className="p-1 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 transition-colors"
                                title="Call Parent"
                              >
                                <Phone className="w-3 h-3" />
                              </a>
                              <a
                                href={`https://wa.me/91${(st.parents?.fatherMobile || st.parents?.fatherPhone || '9758882443').replace(/\D/g, '')}?text=Namaste%20Ji,%20School%20Bus%20(${assignedBus})%20ke%20stoppage%20se%20related%20update.`}
                                target="_blank"
                                rel="noreferrer"
                                className="p-1 rounded bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 hover:bg-green-200 transition-colors"
                                title="WhatsApp Parent"
                              >
                                <MessageSquare className="w-3 h-3" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-center py-8">
                <ShieldCheck className="w-8 h-8 text-indigo-600 mx-auto" />
                <h4 className="text-xs font-black text-slate-800 dark:text-slate-200">
                  Standard Academic Staff Profile
                </h4>
                <p className="text-[11px] text-slate-500 max-w-md mx-auto">
                  This employee currently holds primary academic teaching responsibilities. You can assign additional duties such as Bus Fleet Driving, Front Desk Reception, or Cash Counter in the Edit Profile modal.
                </p>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* 💵 TAB 4: SALARY & BANK ACCOUNT */}
        {/* ========================================================================= */}
        {activeTab === 'salary' && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800">
                <span className="text-[10px] text-emerald-800 dark:text-emerald-300 font-bold uppercase block">Monthly Basic Salary</span>
                <strong className="font-mono text-emerald-950 dark:text-emerald-200 text-sm font-black block mt-0.5">
                  ₹{Number(employee.salary?.netSalary || employee.basicSalary || employee.salary || 25000).toLocaleString('en-IN')} / Month
                </strong>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Bank Name</span>
                <strong className="text-slate-900 dark:text-white text-xs block mt-0.5">
                  {employee.bankName || 'State Bank of India (SBI)'}
                </strong>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Bank Account No.</span>
                <strong className="font-mono text-slate-900 dark:text-white text-xs block mt-0.5 font-bold">
                  {employee.accountNo || '382910482910'}
                </strong>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">IFSC Code & Branch</span>
                <strong className="font-mono text-slate-900 dark:text-white text-xs block mt-0.5">
                  {employee.ifscCode || 'SBIN0001234'} • {employee.bankBranch || 'Jargwan Branch'}
                </strong>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Payment Mode</span>
                <strong className="text-slate-900 dark:text-white text-xs block mt-0.5">
                  Direct Bank Transfer (NEFT / Auto-Pay)
                </strong>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Salary Status</span>
                <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-300 font-black text-xs mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Disbursed for Current Month
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 📅 TAB 5: CLASS & TEACHING SCHEDULE */}
        {/* ========================================================================= */}
        {activeTab === 'schedule' && (
          <div className="space-y-3">
            <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm p-3 space-y-2">
              <h4 className="text-xs font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-indigo-600" /> Weekly Class & Subject Schedule
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="text-[10px] font-bold text-indigo-600 block">Period 1 (08:30 - 09:15 AM)</span>
                  <strong className="text-slate-900 dark:text-white block">Class 10 - A (English)</strong>
                  <span className="text-[10px] text-slate-400">Room 101 • Main Building</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="text-[10px] font-bold text-indigo-600 block">Period 3 (10:00 - 10:45 AM)</span>
                  <strong className="text-slate-900 dark:text-white block">Class 9 - B (Grammar)</strong>
                  <span className="text-[10px] text-slate-400">Room 204 • Junior Wing</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="text-[10px] font-bold text-indigo-600 block">Period 5 (11:45 - 12:30 PM)</span>
                  <strong className="text-slate-900 dark:text-white block">Class 8 - A (Literature)</strong>
                  <span className="text-[10px] text-slate-400">Room 108 • Senior Wing</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </Modal>
  );
};

export default EmployeeProfileDossierModal;
