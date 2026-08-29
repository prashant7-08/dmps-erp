import React from 'react';
import {
  Printer,
  Bus,
  Award,
  QrCode,
  Droplet,
  Phone,
  MapPin,
  ShieldCheck
} from 'lucide-react';

export const PrintableBulkCardSheet = ({
  items = [],
  schoolInfo,
  templateSettings = {
    themeColor: 'blue', // 'blue' | 'emerald' | 'purple' | 'amber' | 'rose' | 'slate'
    orientation: 'vertical', // 'vertical' | 'horizontal'
    headerTitle: 'Delhi Model Public School',
    headerSubtitle: 'CBSE Affiliated • Session 2026-27',
    badgeText: 'Student Identity Card',
    showBloodGroup: true,
    showParentContact: true,
    showAddress: true,
    showBarcode: true,
    showQrCode: true,
    cardType: 'student_id'
  }
}) => {
  const handlePrint = () => {
    window.print();
  };

  const themeClasses = {
    blue: {
      headerBg: 'bg-gradient-to-r from-blue-700 to-indigo-800 text-white',
      badgeBg: 'bg-blue-100 text-blue-900 border-blue-200',
      border: 'border-blue-300 print:border-blue-400',
      accentText: 'text-blue-700',
      tagBg: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    emerald: {
      headerBg: 'bg-gradient-to-r from-emerald-700 to-teal-800 text-white',
      badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
      border: 'border-emerald-300 print:border-emerald-400',
      accentText: 'text-emerald-700',
      tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    purple: {
      headerBg: 'bg-gradient-to-r from-purple-700 to-indigo-800 text-white',
      badgeBg: 'bg-purple-100 text-purple-900 border-purple-200',
      border: 'border-purple-300 print:border-purple-400',
      accentText: 'text-purple-700',
      tagBg: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    amber: {
      headerBg: 'bg-gradient-to-r from-amber-500 to-orange-600 text-white',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
      border: 'border-amber-300 print:border-amber-400',
      accentText: 'text-amber-700',
      tagBg: 'bg-amber-50 text-amber-800 border-amber-200'
    },
    rose: {
      headerBg: 'bg-gradient-to-r from-rose-600 to-pink-700 text-white',
      badgeBg: 'bg-rose-100 text-rose-900 border-rose-200',
      border: 'border-rose-300 print:border-rose-400',
      accentText: 'text-rose-700',
      tagBg: 'bg-rose-50 text-rose-700 border-rose-200'
    },
    slate: {
      headerBg: 'bg-gradient-to-r from-slate-800 to-slate-950 text-white',
      badgeBg: 'bg-slate-100 text-slate-900 border-slate-300',
      border: 'border-slate-400 print:border-slate-500',
      accentText: 'text-slate-900',
      tagBg: 'bg-slate-100 text-slate-800 border-slate-300'
    }
  };

  const currentTheme = themeClasses[templateSettings.themeColor] || themeClasses.blue;

  return (
    <div className="space-y-6">
      
      {/* Action Bar (Hidden on Print) */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm print:hidden">
        <div>
          <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Printer className="w-5 h-5 text-blue-600" />
            Print Preview Sheet ({items.length} Cards Ready)
          </h4>
          <p className="text-xs text-slate-500">
            Applying your custom design template • Formatted for standard A4 Sheet
          </p>
        </div>
        <button
          type="button"
          onClick={handlePrint}
          disabled={items.length === 0}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl text-xs font-black shadow-lg shadow-blue-500/25 flex items-center gap-2 transition-all hover:scale-105"
        >
          <Printer className="w-4 h-4" /> Print {items.length} Cards (PDF)
        </button>
      </div>

      {/* 📄 Print Area: Pure Cards A4 Grid */}
      <div className="print-area">
        {items.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 print:hidden">
            <p className="text-sm font-bold text-slate-500">No students selected in the list above. Tick the checkboxes to generate cards.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-4 print:w-full">
            {items.map((item, idx) => {
              
              // 1. Bus / Transport Pass Format
              if (templateSettings.cardType === 'transport_pass') {
                return (
                  <div
                    key={item.id || idx}
                    className={`bg-white rounded-2xl border-2 ${currentTheme.border} p-4 shadow-sm relative overflow-hidden flex flex-col justify-between text-slate-900 break-inside-avoid print:shadow-none`}
                    style={{ minHeight: '260px' }}
                  >
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-amber-500 text-white">
                          <Bus className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-black tracking-tight leading-none text-slate-900">{templateSettings.headerTitle || schoolInfo?.name}</h5>
                          <span className="text-[9px] font-bold text-amber-700 uppercase tracking-wider">{templateSettings.badgeText || "Student Transport Pass"}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-black text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                        ROUTE #04
                      </span>
                    </div>

                    <div className="flex gap-3 items-center">
                      <img
                        src={item.photo || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150"}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover ring-2 ring-amber-400/40 shrink-0"
                      />
                      <div className="text-[11px] space-y-0.5 flex-1">
                        <p className="text-sm font-black text-slate-900 leading-tight">{item.name}</p>
                        <p className="text-slate-600 font-semibold">{item.class} • Sec {item.section} • Roll #{item.rollNo}</p>
                        <p className="text-slate-600 font-medium">Pickup: <strong className="text-slate-900">Knowledge Park Gate 2</strong></p>
                        <p className="text-slate-600 font-medium">Bus Stop: <strong className="text-slate-900">Sector 62 Crossing</strong></p>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex justify-between items-center text-[9px] font-bold text-slate-600">
                      <span>Driver Helpline: +91 98110 55443</span>
                      <span className="text-amber-700">Valid: 2026-2027</span>
                    </div>
                  </div>
                );
              }

              // 2. Exam Admit Card / Hall Ticket Format
              if (templateSettings.cardType === 'admit_card') {
                return (
                  <div
                    key={item.id || idx}
                    className="bg-white rounded-2xl border-2 border-slate-300 print:border-slate-400 p-4 shadow-sm relative overflow-hidden flex flex-col justify-between text-slate-900 break-inside-avoid print:shadow-none"
                    style={{ minHeight: '300px' }}
                  >
                    <div className="border-b border-slate-200 pb-2 mb-2 text-center">
                      <h5 className="text-xs font-black uppercase tracking-tight text-indigo-950">{templateSettings.headerTitle || schoolInfo?.name}</h5>
                      <p className="text-[9px] font-bold text-slate-500">{templateSettings.headerSubtitle}</p>
                      <span className="inline-block mt-1 px-3 py-0.5 bg-indigo-100 text-indigo-900 text-[10px] font-black uppercase rounded-full border border-indigo-300">
                        {templateSettings.badgeText || "Half Yearly Examination Hall Ticket"}
                      </span>
                    </div>

                    <div className="flex gap-3 items-center mb-2">
                      <img
                        src={item.photo || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150"}
                        alt={item.name}
                        className="w-14 h-14 rounded-lg object-cover ring-1 ring-slate-300 shrink-0"
                      />
                      <div className="text-[10px] grid grid-cols-2 gap-x-2 gap-y-0.5 flex-1">
                        <p><span className="text-slate-500 font-medium">Candidate:</span> <strong>{item.name}</strong></p>
                        <p><span className="text-slate-500 font-medium">Exam Roll:</span> <strong className="font-mono text-indigo-700">EX-2026-{item.rollNo}</strong></p>
                        <p><span className="text-slate-500 font-medium">Class/Sec:</span> <strong>{item.class}-{item.section}</strong></p>
                        <p><span className="text-slate-500 font-medium">Adm No:</span> <strong className="font-mono">{item.admissionNo}</strong></p>
                        <p className="col-span-2"><span className="text-slate-500 font-medium">Exam Center:</span> <strong>Main Academic Block, Room 204</strong></p>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-2 border border-slate-200 text-[9px] mb-2">
                      <div className="font-bold text-slate-700 mb-1 flex justify-between">
                        <span>Subject Papers</span>
                        <span>Timing: 09:00 AM - 12:00 PM</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1 font-semibold text-slate-600">
                        <span>• Mathematics</span>
                        <span>• Physics / Science</span>
                        <span>• English Core</span>
                        <span>• Chemistry</span>
                        <span>• Computer Science</span>
                        <span>• Social Studies</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-end border-t border-slate-200 pt-1.5 text-[8px] font-bold text-slate-600">
                      <span>Candidate Signature</span>
                      <span>Class Teacher</span>
                      <span className="text-indigo-900 font-black">Controller of Exams</span>
                    </div>
                  </div>
                );
              }

              // 3. Employee / Faculty Staff Card
              if (templateSettings.cardType === 'employee_id') {
                return (
                  <div
                    key={item.id || idx}
                    className={`bg-white rounded-2xl border-2 ${currentTheme.border} p-4 shadow-sm relative overflow-hidden flex flex-col justify-between text-slate-900 break-inside-avoid print:shadow-none`}
                    style={{ minHeight: '260px' }}
                  >
                    <div className={`flex items-center justify-between p-2 rounded-xl mb-3 ${currentTheme.headerBg}`}>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-black text-sm border border-white/30">
                          E
                        </div>
                        <div>
                          <h5 className="text-xs font-black leading-tight text-white">{templateSettings.headerTitle || schoolInfo?.name}</h5>
                          <span className="text-[9px] font-medium text-white/90 uppercase">{templateSettings.badgeText || "Faculty Staff Identity Card"}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold bg-white text-slate-900 px-2 py-0.5 rounded shadow-sm">
                        {item.employeeId || "EMP-2026-01"}
                      </span>
                    </div>

                    <div className="flex gap-3 items-center">
                      <img
                        src={item.photo || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150"}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover ring-2 ring-slate-200 shrink-0"
                      />
                      <div className="text-[11px] space-y-0.5 flex-1">
                        <p className="text-sm font-black text-slate-900">{item.name}</p>
                        <p className={`font-bold ${currentTheme.accentText}`}>{item.designation || "Faculty"}</p>
                        <p className="text-slate-600 font-medium">Dept: <strong className="text-slate-900">{item.department || "Academic"}</strong></p>
                        {templateSettings.showParentContact && (
                          <p className="text-slate-600 font-medium">Contact: <strong className="font-mono text-slate-900">{item.mobile || "+91 98110 00000"}</strong></p>
                        )}
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex justify-between items-center text-[9px] font-bold text-slate-500">
                      <span>Emergency: {schoolInfo?.phone || "+91 11 2789 4500"}</span>
                      <span className="text-slate-900 font-black">Principal Signature</span>
                    </div>
                  </div>
                );
              }

              // 4. Default: Custom Template Student Smart ID Card
              return (
                <div
                  key={item.id || idx}
                  className={`bg-white rounded-2xl border-2 ${currentTheme.border} p-4 shadow-sm relative overflow-hidden flex flex-col justify-between text-slate-900 break-inside-avoid print:shadow-none`}
                  style={{ minHeight: '260px' }}
                >
                  {/* Top Custom Header */}
                  <div className={`flex items-center justify-between p-2.5 rounded-xl mb-3 ${currentTheme.headerBg}`}>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-black text-xs border border-white/30">
                        E
                      </div>
                      <div>
                        <h5 className="text-[11px] font-black text-white leading-tight">{templateSettings.headerTitle || schoolInfo?.name}</h5>
                        <span className="text-[8px] font-medium text-white/90 uppercase">{templateSettings.badgeText || "Student Identity Card"}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-white text-slate-900 px-2 py-0.5 rounded shadow-sm">
                      {item.academicSession || "2026-27"}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="flex gap-3 items-center">
                    <img
                      src={item.photo || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150"}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover ring-2 ring-slate-200 shrink-0"
                    />
                    <div className="text-[10px] space-y-0.5 flex-1">
                      <p className="text-sm font-black text-slate-900">{item.name}</p>
                      <p className="text-slate-600 font-bold">
                        Class: <strong className={currentTheme.accentText}>{item.class} - {item.section}</strong> • Roll: <strong className={currentTheme.accentText}>#{item.rollNo}</strong>
                      </p>
                      <p className="text-slate-600 font-medium">Adm No: <strong className="font-mono text-slate-900">{item.admissionNo}</strong></p>
                      
                      {templateSettings.showParentContact && (
                        <p className="text-slate-600 font-medium">
                          Parent: <strong className="text-slate-900">{item.parents?.fatherName || "Parent"}</strong> ({item.parents?.fatherMobile || "+91 98110 00000"})
                        </p>
                      )}

                      <div className="flex flex-wrap gap-2 text-slate-600 font-medium pt-0.5">
                        {templateSettings.showBloodGroup && (
                          <span className="flex items-center gap-0.5 text-rose-600 font-bold">
                            <Droplet className="w-3 h-3" /> {item.bloodGroup || "O+"}
                          </span>
                        )}
                        <span>• House: <strong>{item.house || "Phoenix"}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Bar */}
                  <div className="mt-3 pt-2 border-t border-slate-100 flex justify-between items-center text-[9px] font-bold text-slate-500">
                    <span className="font-mono">UID: {item.aadhaarNo || "1234-5678-9012"}</span>
                    <span className="text-slate-900 font-black">Authorized Signatory</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
