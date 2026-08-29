import React, { useState } from 'react';
import {
  HeartPulse,
  Plus,
  Search,
  Droplet,
  ShieldCheck,
  AlertTriangle,
  UserCheck,
  Calendar
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import schoolService from '../services/schoolService';

export const MedicalPage = () => {
  const [medicalRecords] = useState(schoolService.getMedicalRecords());

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <HeartPulse className="w-7 h-7 text-rose-600" /> Student Health & Medical Records
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Annual physician checkup assessments, critical allergies, blood group registry, and vaccination history.
          </p>
        </div>
      </div>

      {/* Medical Records Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {medicalRecords.map(rec => (
          <div
            key={rec.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{rec.studentName}</h3>
                <p className="text-xs text-slate-500">{rec.class} • Examined by {rec.doctor}</p>
              </div>
              <span className="px-3 py-1 bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300 font-extrabold text-xs rounded-xl border border-rose-200 dark:border-rose-800 flex items-center gap-1">
                <Droplet className="w-3.5 h-3.5" /> Blood: {rec.bloodGroup}
              </span>
            </div>

            {/* Vitals Grid */}
            <div className="grid grid-cols-3 gap-2 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl text-xs text-center border border-slate-100 dark:border-slate-700">
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block">Height</span>
                <span className="font-bold text-slate-900 dark:text-white">{rec.heightCm} cm</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block">Weight</span>
                <span className="font-bold text-slate-900 dark:text-white">{rec.weightKg} kg</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block">Vision</span>
                <span className="font-bold text-slate-900 dark:text-white">{rec.vision}</span>
              </div>
            </div>

            <div className="text-xs space-y-1.5">
              <div className="flex justify-between text-rose-600 font-semibold">
                <span>Known Allergies:</span>
                <strong>{rec.allergies}</strong>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Vaccinations:</span>
                <span>{rec.vaccinations.join(', ')}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-[11px] text-slate-500 italic mt-2">
                "Doctor Notes: {rec.notes}"
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
