import React, { useState } from 'react';
import {
  CreditCard,
  Printer,
  QrCode,
  Barcode,
  Sparkles,
  Download,
  Plus,
  Trash2,
  Phone,
  ArrowRight,
  Upload,
  Layers,
  Image,
  Sliders,
  CheckCircle2,
  Building2,
  User
} from 'lucide-react';
import { Breadcrumb } from '../../../components/saas/layout/Breadcrumb';
import { useToast } from "../../../components/common/Toast";

const SAMPLE_RECORDS = [
  { id: '1', name: 'Aarav Sharma', role: 'Student', classGrade: 'X - A', rollNo: '101', dob: '14-08-2010', blood: 'B+', phone: '9876543210', address: 'Gorakhpur, UP', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' },
  { id: '2', name: 'Diya Patel', role: 'Student', classGrade: 'X - A', rollNo: '102', dob: '22-11-2010', blood: 'O+', phone: '9876543211', address: 'Lucknow, UP', photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80' },
  { id: '3', name: 'Rohan Gupta', role: 'Student', classGrade: 'IX - B', rollNo: '205', dob: '05-03-2011', blood: 'A+', phone: '9876543212', address: 'Varanasi, UP', photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80' },
  { id: '4', name: 'Ananya Mishra', role: 'Student', classGrade: 'VIII - C', rollNo: '312', dob: '19-09-2012', blood: 'AB+', phone: '9876543213', address: 'Kanpur, UP', photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80' },
  { id: '5', name: 'Vikram Singh', role: 'Teacher', classGrade: 'Sr. Faculty (Math)', rollNo: 'T-04', dob: '12-05-1988', blood: 'O+', phone: '9876543214', address: 'Noida, UP', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' }
];

export const StandaloneIdCardStudio = ({ onNavigate }) => {
  const { showToast } = useToast();

  const [records, setRecords] = useState(SAMPLE_RECORDS);
  const [selectedRecordId, setSelectedRecordId] = useState('1');
  const [templateOrientation, setTemplateOrientation] = useState('portrait'); // 'portrait' | 'landscape'
  const [themeColor, setThemeColor] = useState('indigo'); // 'indigo' | 'emerald' | 'purple' | 'rose' | 'amber' | 'dark'
  
  const [orgDetails, setOrgDetails] = useState({
    name: 'DELHI MODEL PUBLIC SCHOOL',
    subtitle: 'Affiliated to CBSE, New Delhi (Affil No: 2132049)',
    address: 'Civil Lines, Gorakhpur, UP • Phone: +91 9876543210',
    validUntil: '2026 - 2027',
    signText: 'Principal / Authorized Signatory'
  });

  const selectedRecord = records.find(r => r.id === selectedRecordId) || records[0];

  const handleAddNewRecord = () => {
    const newId = String(records.length + 1);
    const newRec = {
      id: newId,
      name: 'New Student / Staff',
      role: 'Student',
      classGrade: 'VI - A',
      rollNo: `10${newId}`,
      dob: '01-01-2012',
      blood: 'O+',
      phone: '9876543200',
      address: 'City Campus',
      photo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
    };
    setRecords([...records, newRec]);
    setSelectedRecordId(newId);
    showToast('New record added to ID Card list', 'success');
  };

  const handleDeleteRecord = (id) => {
    if (records.length <= 1) {
      showToast('Cannot delete the last record', 'error');
      return;
    }
    const filtered = records.filter(r => r.id !== id);
    setRecords(filtered);
    setSelectedRecordId(filtered[0].id);
    showToast('Record removed', 'info');
  };

  const getThemeClass = () => {
    switch (themeColor) {
      case 'emerald': return 'from-emerald-600 to-teal-800 text-white';
      case 'purple': return 'from-purple-600 to-indigo-800 text-white';
      case 'rose': return 'from-rose-600 to-pink-800 text-white';
      case 'amber': return 'from-amber-500 to-orange-700 text-white';
      case 'dark': return 'from-slate-900 to-slate-800 text-white';
      default: return 'from-indigo-700 to-blue-900 text-white';
    }
  };

  const getBadgeClass = () => {
    switch (themeColor) {
      case 'emerald': return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      case 'purple': return 'bg-purple-100 text-purple-900 border-purple-300';
      case 'rose': return 'bg-rose-100 text-rose-900 border-rose-300';
      case 'amber': return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'dark': return 'bg-slate-200 text-slate-900 border-slate-300';
      default: return 'bg-indigo-100 text-indigo-900 border-indigo-300';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Standalone Software', page: 'services/id-cards' },
          { label: 'Smart PVC ID Card Studio & Batch PDF Suite' }
        ]}
        onNavigate={onNavigate}
      />

      {/* App Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shadow-md">
            <CreditCard className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black text-slate-900">PKR CardStudio • Standalone Smart ID Card Generator</h1>
              <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[10px] font-bold border border-purple-300">
                CR80 PVC Ready
              </span>
            </div>
            <p className="text-xs text-slate-500">Generate, customize & 1-click batch print barcode & QR PVC identity cards for Schools, Colleges & Offices</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Batch (8 Cards / A4)</span>
          </button>

          <button
            onClick={() => {
              const text = encodeURIComponent("Hello PKR ENTERPRISES! I want to order bulk printed PVC Smart ID cards & satin lanyards.");
              window.open(`https://wa.me/919719476606?text=${text}`, '_blank');
            }}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Order Printed PVC Cards (₹ 18/pc)</span>
          </button>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col (Studio Controls & Records Table): 7 Cols */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Customizer Panel */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <Sliders className="w-4 h-4 text-purple-600" />
              Card Theme & School Branding
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-600 font-semibold mb-1">School / Organization Name</label>
                <input
                  type="text"
                  value={orgDetails.name}
                  onChange={(e) => setOrgDetails({ ...orgDetails, name: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-bold"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">Affiliation / Subtitle</label>
                <input
                  type="text"
                  value={orgDetails.subtitle}
                  onChange={(e) => setOrgDetails({ ...orgDetails, subtitle: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-medium"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-slate-100 text-xs">
              <div>
                <span className="text-slate-600 font-semibold block mb-1.5">Color Theme:</span>
                <div className="flex items-center gap-2">
                  {[
                    { id: 'indigo', color: 'bg-indigo-600' },
                    { id: 'emerald', color: 'bg-emerald-600' },
                    { id: 'purple', color: 'bg-purple-600' },
                    { id: 'rose', color: 'bg-rose-600' },
                    { id: 'amber', color: 'bg-amber-600' },
                    { id: 'dark', color: 'bg-slate-900' }
                  ].map((th) => (
                    <button
                      key={th.id}
                      onClick={() => setThemeColor(th.id)}
                      className={`w-6 h-6 rounded-full ${th.color} ${themeColor === th.id ? 'ring-2 ring-offset-2 ring-purple-600 scale-110' : 'opacity-80'} transition-all`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <span className="text-slate-600 font-semibold block mb-1.5">Orientation:</span>
                <div className="inline-flex rounded-xl bg-slate-100 p-1 gap-1">
                  <button
                    onClick={() => setTemplateOrientation('portrait')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      templateOrientation === 'portrait' ? 'bg-white text-purple-700 shadow-sm' : 'text-slate-600'
                    }`}
                  >
                    Vertical (Portrait)
                  </button>
                  <button
                    onClick={() => setTemplateOrientation('landscape')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      templateOrientation === 'landscape' ? 'bg-white text-purple-700 shadow-sm' : 'text-slate-600'
                    }`}
                  >
                    Horizontal (Landscape)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Records Management List */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <User className="w-4 h-4 text-purple-600" />
                  Student & Staff Records Batch ({records.length} Cards)
                </h3>
                <p className="text-xs text-slate-500">Click any row to preview its smart ID card live on right</p>
              </div>

              <button
                onClick={handleAddNewRecord}
                className="px-3 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Record</span>
              </button>
            </div>

            <div className="divide-y divide-slate-100 max-h-[300px] overflow-y-auto pr-1">
              {records.map((rec) => (
                <div
                  key={rec.id}
                  onClick={() => setSelectedRecordId(rec.id)}
                  className={`p-3 rounded-2xl cursor-pointer transition-all flex items-center justify-between gap-3 ${
                    selectedRecordId === rec.id
                      ? 'bg-purple-50 border border-purple-200 shadow-sm'
                      : 'hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={rec.photo}
                      alt={rec.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                    />
                    <div>
                      <div className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                        <span>{rec.name}</span>
                        <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded font-semibold">{rec.classGrade}</span>
                      </div>
                      <div className="text-[11px] text-slate-500">Roll: <strong>{rec.rollNo}</strong> | Blood: <strong>{rec.blood}</strong> | Phone: {rec.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteRecord(rec.id);
                      }}
                      className="text-slate-400 hover:text-rose-600 p-1.5"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Col (Live Photorealistic Card Preview): 5 Cols */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-4 flex flex-col items-center">
            
            <div className="w-full flex justify-between items-center pb-2 border-b border-slate-200 text-xs">
              <span className="font-bold text-slate-900">Live 300 DPI Smart Card Preview</span>
              <span className="text-[10px] font-mono text-slate-500">CR80 PVC (85.6 x 54 mm)</span>
            </div>

            {/* Simulated PVC Card (Portrait Mode) */}
            {templateOrientation === 'portrait' ? (
              <div className="w-[280px] h-[440px] rounded-2xl bg-white shadow-2xl border-2 border-slate-300 overflow-hidden flex flex-col justify-between relative transform hover:scale-[1.02] transition-transform font-sans">
                
                {/* Header Band */}
                <div className={`p-4 bg-gradient-to-br ${getThemeClass()} text-center space-y-1 relative`}>
                  <div className="w-7 h-7 rounded-full bg-white/20 mx-auto flex items-center justify-center text-white font-black text-xs ring-1 ring-white/30">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <h2 className="font-black text-xs leading-tight tracking-tight uppercase">{orgDetails.name}</h2>
                  <p className="text-[8px] text-white/80 line-clamp-1">{orgDetails.subtitle}</p>
                </div>

                {/* Photo & Identity Center */}
                <div className="p-4 flex-1 flex flex-col items-center justify-center text-center space-y-2">
                  <div className="relative">
                    <img
                      src={selectedRecord.photo}
                      alt={selectedRecord.name}
                      className="w-24 h-28 rounded-xl object-cover border-2 border-slate-800 shadow-md"
                    />
                    <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase border ${getBadgeClass()}`}>
                      {selectedRecord.role}
                    </span>
                  </div>

                  <div className="pt-2">
                    <h3 className="font-black text-sm text-slate-900">{selectedRecord.name}</h3>
                    <p className="text-[11px] font-bold text-indigo-700">{selectedRecord.classGrade}</p>
                  </div>

                  <div className="w-full bg-slate-50 p-2 rounded-xl border border-slate-200 text-[10px] text-slate-700 space-y-0.5 text-left font-medium">
                    <div className="flex justify-between"><span>Roll / ID No:</span><strong className="text-slate-900 font-mono">{selectedRecord.rollNo}</strong></div>
                    <div className="flex justify-between"><span>DOB:</span><strong className="text-slate-900">{selectedRecord.dob}</strong></div>
                    <div className="flex justify-between"><span>Blood Group:</span><strong className="text-rose-600">{selectedRecord.blood}</strong></div>
                    <div className="flex justify-between"><span>Emergency No:</span><strong className="text-slate-900">{selectedRecord.phone}</strong></div>
                  </div>
                </div>

                {/* Footer Bar with Barcode & Sign */}
                <div className="p-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-[8px] text-slate-600">
                  <div className="text-center font-mono">
                    <div className="tracking-widest font-black text-slate-900 text-[10px]">||| | |||| | |||</div>
                    <span>{selectedRecord.rollNo}-PKR</span>
                  </div>
                  <div className="text-right">
                    <div className="font-serif italic text-[10px] text-slate-800 font-bold">R. Sharma</div>
                    <span className="text-[7px] text-slate-400">Principal Sign</span>
                  </div>
                </div>

              </div>
            ) : (
              /* Simulated PVC Card (Landscape Mode) */
              <div className="w-[360px] h-[230px] rounded-2xl bg-white shadow-2xl border-2 border-slate-300 overflow-hidden flex flex-col justify-between relative transform hover:scale-[1.02] transition-transform font-sans">
                {/* Header Band */}
                <div className={`px-4 py-2 bg-gradient-to-r ${getThemeClass()} flex items-center justify-between`}>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white font-black text-xs">
                      <Building2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h2 className="font-black text-xs leading-none uppercase">{orgDetails.name}</h2>
                      <p className="text-[7px] text-white/80">{orgDetails.subtitle}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase border ${getBadgeClass()}`}>
                    {selectedRecord.role}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-3 flex items-center gap-3 flex-1">
                  <img
                    src={selectedRecord.photo}
                    alt={selectedRecord.name}
                    className="w-20 h-24 rounded-xl object-cover border-2 border-slate-800 shadow-sm shrink-0"
                  />
                  <div className="flex-1 text-xs space-y-0.5">
                    <h3 className="font-black text-sm text-slate-900">{selectedRecord.name}</h3>
                    <p className="text-[10px] font-bold text-indigo-700">{selectedRecord.classGrade}</p>
                    <div className="pt-1 text-[9px] text-slate-600 space-y-0.5">
                      <div>Roll No: <strong className="text-slate-900 font-mono">{selectedRecord.rollNo}</strong> | Blood: <strong className="text-rose-600">{selectedRecord.blood}</strong></div>
                      <div>DOB: <strong className="text-slate-900">{selectedRecord.dob}</strong></div>
                      <div>Phone: <strong className="text-slate-900">{selectedRecord.phone}</strong></div>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-slate-100 p-1 rounded-lg border border-slate-300 flex items-center justify-center shrink-0">
                    <QrCode className="w-10 h-10 text-slate-800" />
                  </div>
                </div>

                {/* Footer Band */}
                <div className="px-4 py-1.5 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-[8px] text-slate-500">
                  <span>Valid: {orgDetails.validUntil}</span>
                  <span className="font-serif italic text-slate-800 text-[9px]">Principal Signature</span>
                </div>
              </div>
            )}

            <button
              onClick={() => window.print()}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs shadow-md transition-all flex items-center justify-center gap-2 mt-2"
            >
              <Printer className="w-4 h-4" />
              <span>Print This PVC ID Card</span>
            </button>

          </div>
        </div>

      </div>

    </div>
  );
};

export default StandaloneIdCardStudio;
