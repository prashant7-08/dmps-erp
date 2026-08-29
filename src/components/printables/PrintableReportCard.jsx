import React from 'react';
import { Printer, Download, Award, CheckCircle } from 'lucide-react';

export const PrintableReportCard = ({ marksData, student, schoolInfo, onPrint }) => {
  const handlePrint = () => {
    if (onPrint) {
      onPrint();
    } else {
      window.print();
    }
  };

  if (!marksData || !student) {
    return <div className="p-8 text-center text-slate-500">No report card data found.</div>;
  }

  const subjects = marksData.subjects || [];

  return (
    <div className="space-y-4">
      {/* Print Action Bar */}
      <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800 p-3 rounded-xl print:hidden">
        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
          Official Student Performance Assessment Card
        </span>
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm transition-all"
        >
          <Printer className="w-4 h-4" /> Print / Save as PDF
        </button>
      </div>

      {/* Actual Printable Document */}
      <div 
        id="printable-report-card"
        className="bg-white text-slate-900 p-8 rounded-2xl border-4 border-double border-indigo-900 shadow-2xl max-w-4xl mx-auto font-sans print:shadow-none print:border-2 print:p-6"
      >
        {/* School Header */}
        <div className="flex items-center justify-between border-b-2 border-indigo-900 pb-4 mb-6">
          <div className="w-20 h-20 bg-indigo-950 text-white flex items-center justify-center rounded-2xl font-black text-3xl shadow-inner border border-indigo-800">
            DPGA
          </div>
          <div className="text-center flex-1 px-4">
            <h1 className="text-2xl font-extrabold uppercase text-indigo-950 tracking-wide">
              {schoolInfo?.name || "Delhi Public Global Academy"}
            </h1>
            <p className="text-xs font-semibold text-slate-600 tracking-wider uppercase mt-0.5">
              {schoolInfo?.affiliation || "Affiliated to CBSE, New Delhi"} (Affiliation No: {schoolInfo?.affiliationNo || "213098"})
            </p>
            <p className="text-xs text-slate-500 mt-1">
              {schoolInfo?.address || "Knowledge Park, New Delhi"} | Email: {schoolInfo?.email}
            </p>
            <div className="inline-block bg-indigo-900 text-white text-xs uppercase px-4 py-1 rounded-full font-bold mt-2 tracking-wider">
              Annual Academic Progress Report ({schoolInfo?.academicSession || "2026-2027"})
            </div>
          </div>
          <div className="w-20 h-20 border border-slate-300 rounded-2xl p-1 flex items-center justify-center overflow-hidden bg-slate-50">
            <img 
              src={student.photo || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"} 
              alt={student.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Student Profile Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-indigo-50/60 p-4 rounded-xl border border-indigo-100 text-xs mb-6">
          <div>
            <span className="text-slate-500 font-semibold uppercase block">Student Name</span>
            <span className="font-bold text-slate-900 text-sm">{student.name}</span>
          </div>
          <div>
            <span className="text-slate-500 font-semibold uppercase block">Roll No / Adm No</span>
            <span className="font-bold text-slate-900">{student.rollNo} / {student.admissionNo}</span>
          </div>
          <div>
            <span className="text-slate-500 font-semibold uppercase block">Class & Section</span>
            <span className="font-bold text-slate-900">{student.class} - {student.section}</span>
          </div>
          <div>
            <span className="text-slate-500 font-semibold uppercase block">House</span>
            <span className="font-bold text-slate-900">{student.house || "Phoenix"}</span>
          </div>
          <div>
            <span className="text-slate-500 font-semibold uppercase block">Father's Name</span>
            <span className="font-semibold text-slate-800">{student.parents?.fatherName || "-"}</span>
          </div>
          <div>
            <span className="text-slate-500 font-semibold uppercase block">Mother's Name</span>
            <span className="font-semibold text-slate-800">{student.parents?.motherName || "-"}</span>
          </div>
          <div>
            <span className="text-slate-500 font-semibold uppercase block">Date of Birth</span>
            <span className="font-semibold text-slate-800">{student.dob || "-"}</span>
          </div>
          <div>
            <span className="text-slate-500 font-semibold uppercase block">Attendance</span>
            <span className="font-bold text-emerald-700">{student.attendanceSummary?.percentage || 94}% ({student.attendanceSummary?.presentDays || 82}/{student.attendanceSummary?.totalDays || 88} Days)</span>
          </div>
        </div>

        {/* Examination Marks Table */}
        <div className="mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-950 mb-2 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-500" /> Part 1: Scholastic Performance ({marksData.examName || "Term Assessment"})
          </div>
          <table className="w-full text-left text-xs border-collapse border border-slate-300">
            <thead>
              <tr className="bg-indigo-900 text-white font-bold">
                <th className="border border-indigo-800 px-3 py-2">Subject Code & Title</th>
                <th className="border border-indigo-800 px-3 py-2 text-center">Max Marks</th>
                <th className="border border-indigo-800 px-3 py-2 text-center">Theory</th>
                <th className="border border-indigo-800 px-3 py-2 text-center">Practical/Int</th>
                <th className="border border-indigo-800 px-3 py-2 text-center">Marks Obtained</th>
                <th className="border border-indigo-800 px-3 py-2 text-center">Grade</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((sub, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-300 px-3 py-2 font-semibold text-slate-900">{sub.name}</td>
                  <td className="border border-slate-300 px-3 py-2 text-center">{sub.maxMarks}</td>
                  <td className="border border-slate-300 px-3 py-2 text-center">{sub.obtainedTheory}</td>
                  <td className="border border-slate-300 px-3 py-2 text-center">{sub.obtainedPractical || "-"}</td>
                  <td className="border border-slate-300 px-3 py-2 text-center font-bold text-slate-900">{sub.total}</td>
                  <td className="border border-slate-300 px-3 py-2 text-center font-extrabold text-indigo-700">{sub.grade}</td>
                </tr>
              ))}
              <tr className="bg-indigo-50 font-bold border-t-2 border-indigo-900 text-slate-900">
                <td className="border border-slate-300 px-3 py-2.5">Grand Total / Aggregate</td>
                <td className="border border-slate-300 px-3 py-2.5 text-center">{marksData.totalMarks || 240}</td>
                <td className="border border-slate-300 px-3 py-2.5 text-center" colSpan={2}>-</td>
                <td className="border border-slate-300 px-3 py-2.5 text-center text-sm font-extrabold text-indigo-950">{marksData.obtainedMarks || 219}</td>
                <td className="border border-slate-300 px-3 py-2.5 text-center text-sm font-black text-emerald-700">{marksData.grade || "A1"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Results Summary Box */}
        <div className="grid grid-cols-4 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200 text-center mb-6 text-xs">
          <div>
            <span className="text-slate-500 uppercase block font-semibold">Percentage</span>
            <span className="text-base font-extrabold text-indigo-900">{marksData.percentage || 91.25}%</span>
          </div>
          <div>
            <span className="text-slate-500 uppercase block font-semibold">Overall Grade</span>
            <span className="text-base font-extrabold text-emerald-700">{marksData.grade || "A1"}</span>
          </div>
          <div>
            <span className="text-slate-500 uppercase block font-semibold">Class Rank</span>
            <span className="text-base font-extrabold text-amber-600">Rank #{marksData.rank || 1}</span>
          </div>
          <div>
            <span className="text-slate-500 uppercase block font-semibold">Result Status</span>
            <span className="text-base font-extrabold text-emerald-600 flex items-center justify-center gap-1">
              <CheckCircle className="w-4 h-4" /> {marksData.result || "Passed"}
            </span>
          </div>
        </div>

        {/* Co-Scholastic & Grading Scale */}
        <div className="grid grid-cols-2 gap-4 text-xs mb-8">
          <div className="border border-slate-200 p-3 rounded-xl bg-white">
            <h4 className="font-bold text-slate-800 uppercase mb-1.5">Part 2: Co-Scholastic Traits</h4>
            <div className="space-y-1 text-slate-600">
              <div className="flex justify-between"><span>Work Education / IT</span><span className="font-bold text-slate-900">A (Outstanding)</span></div>
              <div className="flex justify-between"><span>Art Education & Music</span><span className="font-bold text-slate-900">A (Outstanding)</span></div>
              <div className="flex justify-between"><span>Health & Physical Education</span><span className="font-bold text-slate-900">A+ (Exemplary)</span></div>
              <div className="flex justify-between"><span>Discipline & Conduct</span><span className="font-bold text-emerald-700">Exemplary</span></div>
            </div>
          </div>
          <div className="border border-slate-200 p-3 rounded-xl bg-white">
            <h4 className="font-bold text-slate-800 uppercase mb-1.5">Grading Scale (Scholastic)</h4>
            <div className="grid grid-cols-2 gap-x-2 text-[11px] text-slate-600">
              <div>A1: 91-100% (10.0 GP)</div>
              <div>A2: 81-90% (9.0 GP)</div>
              <div>B1: 71-80% (8.0 GP)</div>
              <div>B2: 61-70% (7.0 GP)</div>
              <div>C1: 51-60% (6.0 GP)</div>
              <div>D: 33-40% (Pass)</div>
            </div>
          </div>
        </div>

        {/* Remarks and Signatures */}
        <div className="border-t border-slate-300 pt-4">
          <p className="text-xs italic text-slate-700 mb-8">
            <span className="font-bold not-italic text-slate-900">Class Teacher Remarks:</span> "{marksData.remarks || "Consistently hardworking, demonstrates exceptional critical thinking and leadership qualities in classroom activities."}"
          </p>

          <div className="flex items-end justify-between text-center text-xs font-semibold pt-4">
            <div>
              <div className="w-32 border-b border-slate-400 mb-1"></div>
              <span>Class Teacher</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-indigo-400 flex items-center justify-center text-[10px] text-indigo-900 font-bold uppercase transform -rotate-12 mb-1">
                Official Seal
              </div>
              <span>School Stamp</span>
            </div>
            <div>
              <div className="font-serif italic text-sm text-indigo-950 font-bold mb-1">Arvind Shrivastava</div>
              <div className="w-36 border-b border-slate-400 mb-1"></div>
              <span>Principal Signature</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
