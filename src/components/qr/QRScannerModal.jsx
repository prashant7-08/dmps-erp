import React, { useState } from 'react';
import { QrCode, CheckCircle2, Scan, User, RefreshCw, X } from 'lucide-react';
import schoolService from '../../services/schoolService';

export const QRScannerModal = ({ isOpen, onClose, onScanSuccess, mode = 'attendance' }) => {
  const [scanning, setScanning] = useState(false);
  const [scannedResult, setScannedResult] = useState(null);
  const students = schoolService.getStudents();

  if (!isOpen) return null;

  const handleSimulateScan = (student) => {
    setScanning(true);
    setScannedResult(null);
    setTimeout(() => {
      setScanning(false);
      setScannedResult(student);
      if (onScanSuccess) {
        onScanSuccess(student);
      }
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 border border-indigo-200 dark:border-indigo-800">
              <Scan className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {mode === 'attendance' ? 'Smart QR Attendance Scanner' : 'Library RFID / Barcode Scanner'}
              </h3>
              <p className="text-xs text-slate-500">Scan Student ID Card or Barcode Badge</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Viewfinder Animation Box */}
        <div className="p-6 flex flex-col items-center justify-center bg-slate-950 text-white relative overflow-hidden">
          <div className="w-64 h-64 border-2 border-dashed border-indigo-400 rounded-2xl relative flex items-center justify-center bg-slate-900/50">
            {/* Animated Laser Scanner Line */}
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] animate-pulse top-1/2 -translate-y-1/2"></div>
            
            {/* Corners */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400"></div>
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400"></div>

            <QrCode className="w-32 h-32 text-indigo-400/40" />

            {scanning && (
              <div className="absolute inset-0 bg-slate-950/80 flex flex-col items-center justify-center gap-2">
                <RefreshCw className="w-8 h-8 text-cyan-400 animate-spin" />
                <span className="text-xs font-bold text-cyan-300">Reading RFID Badge...</span>
              </div>
            )}
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">
            Position QR code within the frame to verify credential
          </p>
        </div>

        {/* Simulation Buttons (Quick Pick for demo) */}
        <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
            Simulate Student Badge Scan:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {students.slice(0, 4).map(s => (
              <button
                key={s.id}
                onClick={() => handleSimulateScan(s)}
                className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl text-left transition-all"
              >
                <img src={s.photo} alt={s.name} className="w-8 h-8 rounded-lg object-cover" />
                <div className="truncate">
                  <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{s.name}</p>
                  <p className="text-[10px] text-slate-500 font-mono">{s.rollNo} • {s.class}-{s.section}</p>
                </div>
              </button>
            ))}
          </div>

          {scannedResult && (
            <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-xl flex items-center justify-between animate-in fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                    Badge Verified: {scannedResult.name}
                  </p>
                  <p className="text-[11px] text-emerald-700 dark:text-emerald-400">
                    Marked Present ({new Date().toLocaleTimeString()})
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
