import React, { useRef } from 'react';
import { Printer, X, Download, DollarSign, Wallet } from 'lucide-react';
import { getStaffSalary } from '../../utils/salaryUtils';

export const PrintableEmployeeDossier = ({ employee, schoolInfo, onClose, onPaySalary }) => {
  const printRef = useRef(null);

  if (!employee) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-3 font-sans">
      {/* Action Bar (Hidden in Print) */}
      <div className="flex flex-wrap items-center justify-between bg-slate-100 dark:bg-slate-800 p-2.5 rounded-2xl print:hidden border border-slate-200 dark:border-slate-700 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
            Official Employee Service Book & Profile Record (कर्मचारी सेवा पुस्तिका)
          </p>
        </div>
        <div className="flex items-center gap-2">
          {onPaySalary && (
            <button
              onClick={() => onPaySalary(employee)}
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm cursor-pointer hover:scale-105 transition-all"
            >
              <DollarSign className="w-3.5 h-3.5" /> 💰 Pay Monthly Salary
            </button>
          )}
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" /> 🖨️ Print Service Record (Half A4 / A5)
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 bg-white dark:bg-slate-700 hover:bg-slate-100 text-slate-700 dark:text-slate-300 rounded-xl border border-slate-300 text-xs font-bold cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 📄 OFFICIAL MASTER EMPLOYEE DOSSIER (A4 1-PAGE PRECISION PRINT) */}
      <div 
        id="printable-employee-dossier"
        className="bg-white text-slate-950 p-4 sm:p-5 rounded-lg border border-slate-300 shadow-sm print:border-none print:p-0 print:m-0 print:shadow-none text-[9.5px] leading-tight space-y-2 max-w-[760px] mx-auto font-sans"
      >
        
        {/* 1. Official School Header with Monogram */}
        <div className="border-b-2 border-slate-950 pb-1.5 text-center">
          <div className="flex items-center justify-between gap-3">
            {/* School Monogram */}
            <img
              src="/logo.png"
              alt="DMPS Monogram"
              className="w-12 h-12 object-contain shrink-0"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="flex-1 px-1">
              <h1 className="text-sm sm:text-base font-black uppercase tracking-wider text-slate-950 leading-none">
                DADHEECH MEMORIAL PUBLIC SCHOOL
              </h1>
              <p className="text-[8.5px] font-bold text-slate-800 mt-0.5">
                Affiliated to Bhartiya Shiksha Board (BSB as CBSE Pattern) • Recognized Up to 12th | Affiliation No: UP0F25070073 | Code: 00065
              </p>
              <p className="text-[8px] text-slate-600">
                Ramghat Road Border, Jargwan, Bulandshahr (U.P.) | Helpline: +91 97589 75880, +91 96270 32626 | www.dmpsjargawan.com
              </p>
            </div>
            <div className="text-right text-[8px] font-mono font-bold text-slate-700 shrink-0">
              <p>Session: 2026-2027</p>
              <p>Date: {new Date().toLocaleDateString('en-GB')}</p>
            </div>
          </div>

          <div className="mt-0.5 py-0.5 bg-slate-900 text-white rounded font-black text-[8.5px] uppercase tracking-wider">
            📋 FACULTY & STAFF MASTER SERVICE RECORD (कर्मचारी सेवा पुस्तिका एवं पूर्ण विवरण)
          </div>
        </div>

        {/* 2. Structured Master Grid with Passport Photo */}
        <div className="flex gap-1.5 items-stretch">
          
          {/* Passport Photo Box */}
          <div className="w-18 rounded border border-slate-400 overflow-hidden bg-slate-50 shrink-0 flex flex-col items-center justify-center p-1 text-center">
            <img
              src={employee.photo || `https://ui-avatars.com/api/?name=${employee.name.replace(/\s+/g, '+')}&background=4F46E5&color=fff&size=128&bold=true`}
              alt={employee.name}
              className="w-14 h-18 object-cover rounded border border-slate-300"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${employee.name.replace(/\s+/g, '+')}&background=4F46E5&color=fff&size=128&bold=true`;
              }}
            />
            <span className="text-[7px] font-bold uppercase text-slate-500 mt-0.5 block">
              Photo
            </span>
          </div>

          {/* Master Details Table */}
          <div className="flex-1 border border-slate-400 rounded overflow-hidden">
            <table className="w-full text-left text-[8.5px] border-collapse">
              <tbody className="divide-y divide-slate-300">
                <tr className="bg-slate-100 font-bold">
                  <td className="p-1 w-24 text-slate-600 border-r border-slate-300">Staff Full Name</td>
                  <td className="p-1 font-black text-slate-950 uppercase border-r border-slate-300">{employee.name}</td>
                  <td className="p-1 w-20 text-slate-600 border-r border-slate-300">Staff ID / Code</td>
                  <td className="p-1 font-mono font-black text-indigo-900">{employee.employeeId || employee.staffId || employee.id}</td>
                </tr>
                <tr>
                  <td className="p-1 text-slate-600 border-r border-slate-300">Designation / Role</td>
                  <td className="p-1 font-bold border-r border-slate-300">{employee.designation} ({employee.role || 'Faculty'})</td>
                  <td className="p-1 text-slate-600 border-r border-slate-300">Department</td>
                  <td className="p-1 font-bold">{employee.department}</td>
                </tr>
                <tr>
                  <td className="p-1 text-slate-600 border-r border-slate-300">Qualification</td>
                  <td className="p-1 font-bold border-r border-slate-300">{employee.qualification || 'B.Sc., B.Ed.'}</td>
                  <td className="p-1 text-slate-600 border-r border-slate-300">Subject Taught</td>
                  <td className="p-1 font-bold">{employee.subjectTaught || employee.subject || 'General / Primary'}</td>
                </tr>
                <tr>
                  <td className="p-1 text-slate-600 border-r border-slate-300">Father's Name</td>
                  <td className="p-1 font-bold border-r border-slate-300">{employee.fatherName || '—'}</td>
                  <td className="p-1 text-slate-600 border-r border-slate-300">Mother's Name</td>
                  <td className="p-1 font-bold">{employee.motherName || '—'}</td>
                </tr>
                <tr>
                  <td className="p-1 text-slate-600 border-r border-slate-300">Spouse / Marital</td>
                  <td className="p-1 font-bold border-r border-slate-300">{employee.maritalStatus || 'Unmarried'} {employee.spouseName ? `(${employee.spouseName})` : ''}</td>
                  <td className="p-1 text-slate-600 border-r border-slate-300">Date of Birth</td>
                  <td className="p-1 font-mono font-bold">{employee.dob || '—'} (Blood: {employee.bloodGroup || 'O+'})</td>
                </tr>
                <tr>
                  <td className="p-1 text-slate-600 border-r border-slate-300">Gender / Religion</td>
                  <td className="p-1 font-bold border-r border-slate-300">{employee.gender || 'Female'} • {employee.religion || 'Hindu'} ({employee.caste || 'General'})</td>
                  <td className="p-1 text-slate-600 border-r border-slate-300">Total Experience</td>
                  <td className="p-1 font-bold">{employee.totalExperience || employee.experienceDetails || '1 Year'}</td>
                </tr>
                <tr>
                  <td className="p-1 text-slate-600 border-r border-slate-300">Mobile / Contact</td>
                  <td className="p-1 font-mono font-bold border-r border-slate-300">{employee.phone || employee.mobile || '—'}</td>
                  <td className="p-1 text-slate-600 border-r border-slate-300">Official Email</td>
                  <td className="p-1 font-mono">{employee.email || '—'}</td>
                </tr>
                <tr>
                  <td className="p-1 text-slate-600 border-r border-slate-300">Previous School</td>
                  <td colSpan={3} className="p-1 font-bold">
                    {employee.previousSchool || 'Fresh Appointment / Direct Entry'}
                  </td>
                </tr>
                <tr>
                  <td className="p-1 text-slate-600 border-r border-slate-300">Residential Address</td>
                  <td colSpan={3} className="p-1 font-medium">
                    {employee.presentAddress || employee.permanentAddress || 'Ramghat Road Border, Jargwan, Bulandshahr (U.P.)'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Statutory, Salary & Multi-Duty Assignment */}
        <div className="border border-slate-400 rounded overflow-hidden">
          <div className="bg-slate-900 text-white font-bold px-2 py-0.5 text-[8px] flex justify-between items-center">
            <span>SALARY STRUCTURE, STATUTORY & MULTI-DUTY ASSIGNMENT</span>
            <span>CONFIDENTIAL SERVICE RECORD</span>
          </div>

          <table className="w-full text-left text-[8.5px] border-collapse">
            <tbody className="divide-y divide-slate-300">
              <tr>
                <td className="p-1 w-24 text-slate-600 border-r border-slate-300">Aadhaar Card No.</td>
                <td className="p-1 font-mono font-bold border-r border-slate-300">{employee.aadhaarNo || '—'}</td>
                <td className="p-1 w-24 text-slate-600 border-r border-slate-300">Driving License (DL)</td>
                <td className="p-1 font-mono font-bold">{employee.drivingLicenseNo || 'N/A (Non-Driver)'}</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-1 text-slate-600 border-r border-slate-300">Monthly Basic Salary</td>
                <td className="p-1 font-bold text-emerald-900 border-r border-slate-300">
                  ₹{getStaffSalary(employee).toLocaleString('en-IN')} / Month
                </td>
                <td className="p-1 text-slate-600 border-r border-slate-300">UPI / Mobile Payment</td>
                <td className="p-1 font-mono font-bold">
                  {employee.upiId || employee.phone || employee.mobile || 'Cash / PhonePe / GPay'}
                </td>
              </tr>
              <tr>
                <td className="p-1 text-slate-600 border-r border-slate-300">Multi-Duty Status</td>
                <td colSpan={3} className="p-1 font-bold text-indigo-900">
                  {employee.additionalDuties && employee.additionalDuties.length > 0
                    ? `⚡ Assigned: ${employee.additionalDuties.join(', ')} ${employee.assignedBus ? `(${employee.assignedBus})` : ''}`
                    : 'Standard Single Duty Role'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 4. Terms & Official Verification Note */}
        <div className="p-1 bg-slate-50 rounded border border-slate-300 text-[7.5px] text-slate-600 leading-tight">
          <p>
            <strong>Service Record Verification:</strong> This document serves as the official employee service dossier registered in the school master ledger. All credentials, statutory IDs, and banking information have been verified under DMPS service rules.
          </p>
        </div>

        {/* 5. Clean Signature Footer with Generous Signing Space */}
        <div className="pt-6 pb-1">
          <div className="grid grid-cols-3 gap-3 text-center">
            
            <div className="flex flex-col items-center justify-end">
              <p className="text-[8px] font-black uppercase text-slate-900">
                Employee Signature
              </p>
              <span className="text-[6.5px] text-slate-500 font-medium">
                (हस्ताक्षर कर्मचारी)
              </span>
            </div>

            <div className="flex flex-col items-center justify-end">
              <p className="text-[8px] font-black uppercase text-slate-900">
                Accountant / Cashier
              </p>
              <span className="text-[6.5px] text-slate-500 font-medium">
                (लेखाकार / कैशियर)
              </span>
            </div>

            <div className="flex flex-col items-center justify-end">
              <p className="text-[8px] font-black uppercase text-slate-900">
                Principal Signature & Seal
              </p>
              <span className="text-[6.5px] text-slate-500 font-medium">
                (प्रधानाचार्य मुहर सहित)
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default PrintableEmployeeDossier;
