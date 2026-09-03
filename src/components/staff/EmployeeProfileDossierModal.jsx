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
  Users,
  X
} from 'lucide-react';
import { Badge } from '../common/Badge';
import { Modal } from '../common/Modal';
import { PrintableEmployeeDossier } from '../printables/PrintableEmployeeDossier';
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
  const [isPrintDossierOpen, setIsPrintDossierOpen] = useState(false);

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

  const schoolInfo = schoolService.getSchoolInfo();

  return (
    <>
      <Modal
        isOpen={isOpen && !isPrintDossierOpen}
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
                Staff ID: {employee.employeeId || employee.staffId || employee.id} • {employee.designation} ({employee.department})
              </p>
            </div>
          </div>
        }
        maxWidth="max-w-4xl"
      >
        <div className="space-y-4 text-xs font-sans max-h-[80vh] overflow-y-auto pr-1">
          
          {/* 🌟 1. Top Hero Profile Summary Card */}
          <div className="p-4 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-4 border border-indigo-900/50">
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                <img
                  src={employee.photo || `https://ui-avatars.com/api/?name=${employee.name.replace(/\s+/g, '+')}&background=4F46E5&color=fff&size=128&bold=true`}
                  alt={employee.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-indigo-400/60 shadow-md"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${employee.name.replace(/\s+/g, '+')}&background=4F46E5&color=fff&size=128&bold=true`;
                  }}
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-900"></span>
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-base font-black tracking-tight">{employee.name}</h2>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-500/30 text-indigo-300 font-black text-[9px] uppercase border border-indigo-400/40">
                    {employee.role || 'Teacher'}
                  </span>
                </div>
                <p className="text-[11px] text-indigo-200/80 flex items-center gap-2 mt-0.5 flex-wrap">
                  <span>🏢 {employee.department} • {employee.designation}</span>
                  <span>📞 {employee.phone || employee.mobile || '+91 9719476606'}</span>
                </p>
                <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                  ✉️ {employee.email || `${employee.name.toLowerCase().replace(/\s+/g, '')}@dmps-school.edu.in`} • Joined: {employee.joiningDate || '19/03/2024'}
                </p>
              </div>
            </div>

            {/* Quick Action Buttons (All in 1 Clean Single Line) */}
            <div className="flex items-center gap-1.5 flex-nowrap shrink-0 overflow-x-auto custom-scrollbar py-0.5">
              {onPaySalary && (
                <button
                  onClick={() => onPaySalary(employee)}
                  title="Pay Monthly Salary"
                  className="px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-black text-xs flex items-center gap-1 transition-all shadow-sm cursor-pointer shrink-0 hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  <DollarSign className="w-3 h-3" /> Pay Salary
                </button>
              )}

              <button
                onClick={() => setIsPrintDossierOpen(true)}
                title="Print Complete Employee Service Record & Dossier"
                className="px-2.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1 transition-all shadow-xs cursor-pointer shrink-0 hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <Printer className="w-3 h-3" /> Dossier
              </button>

              {onPrintIdCard && (
                <button
                  onClick={() => onPrintIdCard(employee)}
                  title="Print ID Card"
                  className="px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1 transition-all cursor-pointer shrink-0 hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  <FileText className="w-3 h-3" /> ID Card
                </button>
              )}

              {onPrintPaySlip && (
                <button
                  onClick={() => onPrintPaySlip(employee)}
                  title="Print Monthly Pay Slip"
                  className="px-2.5 py-1.5 rounded-xl bg-emerald-600/80 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1 transition-all cursor-pointer shrink-0 hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  <DollarSign className="w-3 h-3" /> Payslip
                </button>
              )}

              {onEdit && (
                <button
                  onClick={() => onEdit(employee)}
                  title="Edit Profile Information"
                  className="px-2.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1 transition-all cursor-pointer shrink-0 hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  <Edit className="w-3 h-3" /> Edit
                </button>
              )}
            </div>
          </div>

          {/* 🌟 2. SECTION 1: ACADEMIC & EMPLOYMENT CREDENTIALS (All in one view) */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <div className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-black text-slate-900 dark:text-white uppercase text-[11px] tracking-wide">
                  1. Academic Credentials & Employment History
                </h4>
                <p className="text-[10px] text-slate-400">Official designations, qualifications and experience</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block">Branch</span>
                <span className="font-bold text-slate-900 dark:text-white">{employee.branch || 'Main Campus (DMPS)'}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block">Designation</span>
                <span className="font-bold text-slate-900 dark:text-white">{employee.designation}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block">Department</span>
                <span className="font-bold text-slate-900 dark:text-white">{employee.department}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block">Qualification</span>
                <span className="font-bold text-slate-900 dark:text-white">{employee.qualification || 'Graduate'}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block">Subject Taught</span>
                <span className="font-bold text-indigo-600 dark:text-indigo-400">{employee.subjectTaught || employee.subject || 'General / Primary'}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block">Total Experience</span>
                <span className="font-bold text-slate-900 dark:text-white">{employee.totalExperience || employee.experienceDetails || '1 Year'}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 sm:col-span-2">
                <span className="text-[10px] text-slate-400 font-bold block">Previous School / Organization</span>
                <span className="font-bold text-slate-900 dark:text-white">{employee.previousSchool || 'Direct Appointment / Fresh Entry'}</span>
              </div>
            </div>
          </div>

          {/* 🌟 3. SECTION 2: PERSONAL & STATUTORY DETAILS */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                <User className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-black text-slate-900 dark:text-white uppercase text-[11px] tracking-wide">
                  2. Personal, Family & Statutory Identity
                </h4>
                <p className="text-[10px] text-slate-400">Father, mother, spouse, Aadhaar and residential address</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block">Father's Name</span>
                <span className="font-bold text-slate-900 dark:text-white">{employee.fatherName || '—'}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block">Mother's Name</span>
                <span className="font-bold text-slate-900 dark:text-white">{employee.motherName || '—'}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block">Marital Status & Spouse</span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {employee.maritalStatus || 'Unmarried'} {employee.spouseName ? `(${employee.spouseName})` : ''}
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block">Date of Birth & Blood</span>
                <span className="font-bold text-slate-900 dark:text-white font-mono">
                  {employee.dob || '—'} ({employee.bloodGroup || 'O+'})
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block">Gender & Religion</span>
                <span className="font-bold text-slate-900 dark:text-white">{employee.gender || 'Female'} • {employee.religion || 'Hindu'}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block">Caste / Category</span>
                <span className="font-bold text-slate-900 dark:text-white">{employee.caste || 'General'}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block">Aadhaar Card No.</span>
                <span className="font-bold font-mono text-slate-900 dark:text-white">{employee.aadhaarNo || '—'}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block">Driving License (DL)</span>
                <span className="font-bold font-mono text-slate-900 dark:text-white">{employee.drivingLicenseNo || 'N/A'}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 sm:col-span-2 md:col-span-4">
                <span className="text-[10px] text-slate-400 font-bold block">Residential & Permanent Address</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  {employee.presentAddress || employee.address || 'Ramghat Road Border, Jargwan, Bulandshahr (U.P.)'}
                </span>
              </div>
            </div>
          </div>

          {/* 🌟 4. SECTION 3: MULTI-DUTY & STATUTORY RESPONSIBILITIES (दोहरी भूमिका) */}
          <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/50 space-y-3">
            <div className="flex items-center justify-between border-b border-amber-200 dark:border-amber-800/40 pb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-black text-amber-950 dark:text-amber-200 uppercase text-[11px] tracking-wide">
                    3. Dual Role & Secondary Responsibilities (दोहरी भूमिका)
                  </h4>
                  <p className="text-[10px] text-amber-700 dark:text-amber-400">Additional transport, reception, or cash counter assignments</p>
                </div>
              </div>
            </div>

            {/* If has dual roles */}
            {employee.additionalDuties && employee.additionalDuties.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {employee.additionalDuties.map((duty, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 font-bold flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>⚡</span> {duty}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 italic text-[11px]">
                Standard Single Duty Role (No secondary responsibilities assigned).
              </p>
            )}

            {/* If Driver or has Transport Duty: Show Bus & Vehicle Passenger Roster */}
            {isDriver && (
              <div className="mt-3 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-800/60 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bus className="w-4 h-4 text-orange-600" />
                    <span className="font-black text-slate-900 dark:text-white">
                      🚌 Assigned Vehicle: {assignedBus} ({assignedRoute})
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-900 dark:bg-orange-950 dark:text-orange-300 font-black text-[10px]">
                    {busStudents.length} Students On-Board
                  </span>
                </div>

                {/* Table of students on this bus with 1-click WhatsApp/Call */}
                <div className="overflow-x-auto max-h-48 overflow-y-auto">
                  <table className="w-full text-left text-[11px] border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                        <th className="p-2">Student Name</th>
                        <th className="p-2">Class</th>
                        <th className="p-2">Stoppage / Village</th>
                        <th className="p-2">Parent Mobile</th>
                        <th className="p-2 text-right">Quick Contact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {busStudents.map((st) => (
                        <tr key={st.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                          <td className="p-2 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <img
                              src={st.photo || `https://ui-avatars.com/api/?name=${st.name.replace(/\s+/g, '+')}&background=4F46E5&color=fff&size=64&bold=true`}
                              alt={st.name}
                              className="w-6 h-6 rounded-full object-cover border border-slate-200"
                            />
                            <span>{st.name}</span>
                          </td>
                          <td className="p-2 text-slate-600 dark:text-slate-400">{st.class} - {st.section}</td>
                          <td className="p-2 text-slate-600 dark:text-slate-400 font-medium">
                            {st.transport?.pickupPoint || st.address || 'Main Road'}
                          </td>
                          <td className="p-2 font-mono text-slate-700 dark:text-slate-300">{st.phone || st.mobile || '+91 98000 00000'}</td>
                          <td className="p-2 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <a
                                href={`tel:${st.phone || st.mobile}`}
                                title="Call Parent"
                                className="p-1 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
                              >
                                <Phone className="w-3 h-3" />
                              </a>
                              <a
                                href={`https://wa.me/91${(st.phone || st.mobile || '').replace(/[^0-9]/g, '').slice(-10)}`}
                                target="_blank"
                                rel="noreferrer"
                                title="WhatsApp Parent"
                                className="p-1 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
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
            )}
          </div>

          {/* 🌟 5. SECTION 4: SALARY STRUCTURE & UPI PAYMENT */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                <DollarSign className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-black text-slate-900 dark:text-white uppercase text-[11px] tracking-wide">
                  4. Monthly Salary & Payment Info (मासिक वेतन)
                </h4>
                <p className="text-[10px] text-slate-400">Monthly remuneration & payment mobile/UPI reference</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40">
                <span className="text-[10px] text-emerald-800 dark:text-emerald-300 font-bold block">Monthly Basic Salary</span>
                <span className="text-base font-black text-emerald-700 dark:text-emerald-300 font-mono">
                  ₹{(employee.salary?.basic || employee.salary?.netSalary || employee.basicSalary || employee.salary || 25000).toLocaleString('en-IN')} / Month
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block">UPI / PhonePe / GPay Payment Number</span>
                <span className="font-bold text-slate-900 dark:text-white font-mono">
                  {employee.upiId || employee.phone || employee.mobile || 'Registered Mobile Number'}
                </span>
              </div>
            </div>
          </div>

          {/* 🌟 6. SECTION 5: WEEKLY CLASS & DUTY SCHEDULE */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <div className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-black text-slate-900 dark:text-white uppercase text-[11px] tracking-wide">
                  5. Weekly Class & Period Schedule
                </h4>
                <p className="text-[10px] text-slate-400">Class teaching roster and subject allocations</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-indigo-50/40 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 space-y-1">
                <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 block">Period 1 (08:30 - 09:15 AM)</span>
                <p className="font-black text-slate-900 dark:text-white">Class 10 - A (English)</p>
                <p className="text-[10px] text-slate-500">Room 101 • Main Building</p>
              </div>

              <div className="p-3 rounded-xl bg-indigo-50/40 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 space-y-1">
                <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 block">Period 3 (10:00 - 10:45 AM)</span>
                <p className="font-black text-slate-900 dark:text-white">Class 9 - B (Grammar)</p>
                <p className="text-[10px] text-slate-500">Room 204 • Junior Wing</p>
              </div>

              <div className="p-3 rounded-xl bg-indigo-50/40 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 space-y-1">
                <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 block">Period 5 (11:45 - 12:30 PM)</span>
                <p className="font-black text-slate-900 dark:text-white">Class 8 - A (Literature)</p>
                <p className="text-[10px] text-slate-500">Room 108 • Senior Wing</p>
              </div>
            </div>
          </div>

        </div>
      </Modal>

      {/* 🖨️ Printable Full Employee Service Book Modal */}
      <Modal
        isOpen={isPrintDossierOpen}
        onClose={() => setIsPrintDossierOpen(false)}
        title="Official Employee Service Record Slip"
        maxWidth="max-w-4xl"
      >
        <PrintableEmployeeDossier
          employee={employee}
          schoolInfo={schoolInfo}
          onClose={() => setIsPrintDossierOpen(false)}
        />
      </Modal>
    </>
  );
};

export default EmployeeProfileDossierModal;
