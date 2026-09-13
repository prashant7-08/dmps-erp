import React, { useState } from 'react';
import {
  Laptop,
  CheckCircle2,
  ArrowRight,
  Building2,
  Users,
  GraduationCap,
  CreditCard,
  Bell,
  Fingerprint,
  Phone,
  Mail,
  MapPin,
  FileText,
  Clock,
  Printer,
  ShieldCheck,
  Server,
  Download,
  Receipt,
  MessageSquare,
  HelpCircle,
  Play,
  Volume2,
  Bus,
  Check,
  X,
  ExternalLink,
  Crown
} from 'lucide-react';
import { STUDENT_STRENGTH_MATRIX } from '../../components/saas/PlanComparisonModal';
import { SERVICES_LIST } from '../../components/saas/layout/Navbar';

export const HomePage = ({
  onNavigate,
  onLaunchDemo,
  onOpenContactModal,
  onOpenPricingModal
}) => {
  const [activeShowcaseTab, setActiveShowcaseTab] = useState('receipt');
  const [playingAudio, setPlayingAudio] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleWhatsAppBooking = (msg = '') => {
    const defaultText = "Namaste PKR ENTERPRISES! I want to book a free live demonstration of your School ERP & IT Solutions for our school.";
    const text = encodeURIComponent(msg || defaultText);
    window.open(`https://wa.me/919719476606?text=${text}`, '_blank');
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const playDemoBell = () => {
    setPlayingAudio(true);
    // Web Audio API chime sound
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.3); // A5
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 1.2);
    } catch (e) {
      console.log(e);
    }
    setTimeout(() => setPlayingAudio(false), 1200);
  };

  return (
    <div className="space-y-24">
      
      {/* 1. HERO SECTION - Human, Clear, Grounded & High Trust */}
      <section className="relative pt-10 pb-16 bg-gradient-to-b from-slate-100/80 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Hero Header */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-900 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Govt. MSME Registered IT Enterprise • UDYAM-UP-02-0128276</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Affordable School ERP Software & <br className="hidden sm:inline" />
              <span className="text-blue-700">Smart Campus Automation</span>
            </h1>

            {/* Bilingual Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              Built specifically for Indian CBSE, ICSE & State Board Schools. Manage 1-Click Fee Counterfoil Receipts, Student Marksheets, Biometric Attendance, Automatic School Bells, and Parent WhatsApp Alerts without technical headaches.
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-500 italic">
              "स्कूल के सभी कार्य अब सरल और सुरक्षित — आसान हिंदी व इंग्लिश इंटरफ़ेस के साथ"
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <button
                onClick={() => handleWhatsAppBooking("Hello PKR ENTERPRISES! I want to book a free live demonstration for our school.")}
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Book Free Live Demo (WhatsApp)</span>
              </button>

              <button
                onClick={() => onNavigate('pricing')}
                className="px-6 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl shadow-md shadow-blue-700/20 transition-all flex items-center gap-2 text-sm"
              >
                <span>View Full Pricing (From ₹2,499)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onLaunchDemo('admin')}
                className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-300 shadow-sm transition-all flex items-center gap-2 text-sm"
              >
                <Laptop className="w-4 h-4 text-blue-700" />
                <span>Try Live Interactive Demo</span>
              </button>
            </div>

            {/* Key Assurance Badges */}
            <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
              <div className="flex items-center gap-2.5 p-2.5 bg-white rounded-xl border border-slate-200 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-700 font-semibold">Free On-Call Training</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 bg-white rounded-xl border border-slate-200 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-700 font-semibold">1-Click Excel Import</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 bg-white rounded-xl border border-slate-200 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-700 font-semibold">Daily Cloud Backups</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 bg-white rounded-xl border border-slate-200 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-700 font-semibold">Direct Developer Call</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 2. REAL INTERACTIVE SOFTWARE SHOWCASE - Genuine UI Previews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <span>Interactive Software Preview</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            See Exactly How Your School Software Works
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            Click the tabs below to test live previews of actual printable receipts, CBSE report cards, biometric attendance logs, and automated school bell schedules.
          </p>
        </div>

        {/* Showcase Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'receipt', label: '🧾 3-Part Fee Counterfoil Receipt', icon: Receipt },
            { id: 'marksheet', label: '📊 CBSE Term Marksheet & Report Card', icon: GraduationCap },
            { id: 'biometric', label: '🕒 Biometric Attendance Sync', icon: Fingerprint },
            { id: 'bell', label: '🔔 Automatic MP3 School Bell', icon: Bell },
            { id: 'transport', label: '🚌 Bus Route & Fee Ledger', icon: Bus },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveShowcaseTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all border ${
                activeShowcaseTab === tab.id
                  ? 'bg-blue-700 text-white border-blue-700 shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Display Container */}
        <div className="bg-slate-900 p-3 sm:p-6 rounded-2xl shadow-xl border border-slate-800 max-w-5xl mx-auto">
          
          {/* Top Window Bar */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              <span className="ml-2 font-mono text-slate-300">PKR-ERP // Live System Preview</span>
            </div>
            <div className="font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>STATUS: ONLINE & ACTIVE</span>
            </div>
          </div>

          {/* Tab 1: 3-Part Fee Counterfoil Receipt */}
          {activeShowcaseTab === 'receipt' && (
            <div className="bg-white rounded-xl p-4 sm:p-6 text-slate-900 text-xs space-y-4 shadow-inner">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b pb-4">
                <div>
                  <h3 className="text-base font-black text-slate-900">DURGADEVI MEMORIAL PUBLIC SCHOOL</h3>
                  <p className="text-[11px] text-slate-600">Affiliated to CBSE Standard • Ramghat Road Border, Bulandshahr (U.P.)</p>
                  <p className="text-[10px] text-slate-500">Receipt No: <strong>#DMPS/2026/0412</strong> • Date: <strong>14-Sept-2026</strong></p>
                </div>
                <div className="p-2 border border-slate-300 rounded bg-slate-50 text-center">
                  <div className="font-bold text-blue-700">Counterfoil Format</div>
                  <div className="text-[10px] text-slate-500">1-Click 3-Copy Printout</div>
                </div>
              </div>

              {/* Student Metadata Table */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-50 p-3 rounded border text-[11px]">
                <div><span className="text-slate-500">Student:</span> <strong>Aarav Sharma</strong></div>
                <div><span className="text-slate-500">Class & Sec:</span> <strong>Class 8 - A</strong></div>
                <div><span className="text-slate-500">Scholar No:</span> <strong>ADM-2024-89</strong></div>
                <div><span className="text-slate-500">Father Name:</span> <strong>Shri Rajesh Sharma</strong></div>
              </div>

              {/* Fee Breakdown Table */}
              <table className="w-full border-collapse border border-slate-200 text-left text-[11px]">
                <thead>
                  <tr className="bg-slate-100 font-bold text-slate-700">
                    <th className="p-2 border">Particulars / Fee Head</th>
                    <th className="p-2 border">Term / Period</th>
                    <th className="p-2 border text-right">Amount (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">Monthly Tuition Fee</td>
                    <td className="p-2 border">September 2026</td>
                    <td className="p-2 border text-right font-medium">₹ 1,800.00</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">School Bus Transport Fee (Route 2)</td>
                    <td className="p-2 border">September 2026</td>
                    <td className="p-2 border text-right font-medium">₹ 800.00</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Computer & Science Lab Fee</td>
                    <td className="p-2 border">Half-Yearly</td>
                    <td className="p-2 border text-right font-medium">₹ 400.00</td>
                  </tr>
                  <tr className="bg-emerald-50 font-bold text-emerald-900">
                    <td className="p-2 border" colSpan={2}>TOTAL AMOUNT PAID (VIA UPI / QR)</td>
                    <td className="p-2 border text-right text-sm text-emerald-700">₹ 3,000.00</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex flex-col sm:flex-row justify-between items-center pt-2 text-[11px] text-slate-500">
                <div className="text-emerald-700 font-bold">✅ Instant WhatsApp Receipt sent to Parent Phone: 9870XXXXXX</div>
                <div className="font-medium">Authorized Cashier / Accountant Signature</div>
              </div>
            </div>
          )}

          {/* Tab 2: CBSE Marksheet */}
          {activeShowcaseTab === 'marksheet' && (
            <div className="bg-white rounded-xl p-4 sm:p-6 text-slate-900 text-xs space-y-4 shadow-inner">
              <div className="text-center border-b pb-3 space-y-1">
                <h3 className="text-base font-black text-slate-900">PROGRESS REPORT CARD — SESSION 2026-27</h3>
                <p className="text-[11px] text-slate-600">CBSE Standard Grading System • Half Yearly Assessment</p>
                <div className="inline-block px-3 py-0.5 bg-blue-100 text-blue-900 font-bold rounded text-[10px]">
                  CLASS 10 - SECTION A • ROLL NO: 14
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded border text-[11px]">
                <div>Student Name: <strong>Priya Kumari</strong></div>
                <div>Father: <strong>Shri Sunil Kumar</strong></div>
                <div>Attendance: <strong className="text-emerald-700">96.4% (142/148 Days)</strong></div>
              </div>

              <table className="w-full border-collapse border border-slate-200 text-left text-[11px]">
                <thead>
                  <tr className="bg-slate-100 font-bold">
                    <th className="p-2 border">Subject</th>
                    <th className="p-2 border text-center">Theory (80)</th>
                    <th className="p-2 border text-center">Practical (20)</th>
                    <th className="p-2 border text-center">Total (100)</th>
                    <th className="p-2 border text-center">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border font-medium">Mathematics</td>
                    <td className="p-2 border text-center">74</td>
                    <td className="p-2 border text-center">19</td>
                    <td className="p-2 border text-center font-bold">93</td>
                    <td className="p-2 border text-center font-bold text-emerald-700">A1</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">Science & Technology</td>
                    <td className="p-2 border text-center">71</td>
                    <td className="p-2 border text-center">20</td>
                    <td className="p-2 border text-center font-bold">91</td>
                    <td className="p-2 border text-center font-bold text-emerald-700">A1</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">English Language & Lit.</td>
                    <td className="p-2 border text-center">68</td>
                    <td className="p-2 border text-center">19</td>
                    <td className="p-2 border text-center font-bold">87</td>
                    <td className="p-2 border text-center font-bold text-blue-700">A2</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">Social Science</td>
                    <td className="p-2 border text-center">72</td>
                    <td className="p-2 border text-center">18</td>
                    <td className="p-2 border text-center font-bold">90</td>
                    <td className="p-2 border text-center font-bold text-emerald-700">A1</td>
                  </tr>
                  <tr className="bg-blue-50 font-bold">
                    <td className="p-2 border">OVERALL RESULT: PASSED (FIRST DIVISION)</td>
                    <td className="p-2 border text-center" colSpan={2}>Grand Total: 361 / 400</td>
                    <td className="p-2 border text-center text-blue-800">90.25%</td>
                    <td className="p-2 border text-center text-emerald-700">A1</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex justify-between items-end pt-3 text-[11px] text-slate-500">
                <div>Class Teacher Remark: <strong className="text-slate-800">Excellent performance. Keep it up!</strong></div>
                <div className="border-t border-slate-400 pt-1 text-center font-bold text-slate-800">Principal Signature & Stamp</div>
              </div>
            </div>
          )}

          {/* Tab 3: Biometric Sync */}
          {activeShowcaseTab === 'biometric' && (
            <div className="bg-slate-950 rounded-xl p-4 sm:p-6 text-slate-200 text-xs space-y-4 font-mono">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-800 pb-3">
                <div>
                  <div className="font-bold text-emerald-400 text-sm">IoT BIOMETRIC HARDWARE GATEWAY</div>
                  <div className="text-[11px] text-slate-400">Device IP: 192.168.1.201 • Machine: Secureye/Essl Bio-X4</div>
                </div>
                <div className="px-3 py-1 rounded bg-emerald-950 border border-emerald-700 text-emerald-300 text-[11px] font-bold">
                  ● Realtime TCP Listener Connected
                </div>
              </div>

              <div className="space-y-2">
                {[
                  { time: '07:51:22 AM', user: 'Sunil Verma (Faculty - Physics)', id: 'EMP-012', status: 'PUNCH IN SUCCESS', type: 'Fingerprint' },
                  { time: '07:54:10 AM', user: 'Rahul Sharma (Class 10-A)', id: 'STU-0481', status: 'PUNCH IN SUCCESS', type: 'Face Recognition' },
                  { time: '07:56:05 AM', user: 'Anjali Gupta (Class 9-B)', id: 'STU-0392', status: 'PUNCH IN SUCCESS', type: 'RFID Smart Card' },
                  { time: '08:00:14 AM', user: 'Sonu Singh (Bus Driver - Route 1)', id: 'DRV-004', status: 'PUNCH IN SUCCESS', type: 'Fingerprint' }
                ].map((row, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-amber-400">{row.time}</span>
                      <span className="text-slate-300 font-bold">{row.user}</span>
                      <span className="text-slate-500">({row.id})</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px]">
                      <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded">{row.type}</span>
                      <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded font-bold">
                        {row.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-slate-900/90 rounded border border-indigo-900/50 text-[11px] text-indigo-300">
                💬 <strong>Automated WhatsApp Trigger:</strong> Notification sent to parent: <em>"Dear Parent, Rahul Sharma reached DMPS School at 07:54 AM."</em>
              </div>
            </div>
          )}

          {/* Tab 4: Automatic School Bell */}
          {activeShowcaseTab === 'bell' && (
            <div className="bg-white rounded-xl p-4 sm:p-6 text-slate-900 text-xs space-y-4 shadow-inner">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b pb-3">
                <div>
                  <h3 className="text-base font-black text-slate-900">AUTOMATIC MP3 SCHOOL BELL SCHEDULER</h3>
                  <p className="text-[11px] text-slate-600">Runs directly on any Windows Laptop / PC connected to School PA Amplifier</p>
                </div>
                <button
                  onClick={playDemoBell}
                  disabled={playingAudio}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow flex items-center gap-2 text-xs"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>{playingAudio ? 'Playing Chime...' : 'Test Play Bell Audio 🔊'}</span>
                </button>
              </div>

              <div className="space-y-2">
                {[
                  { time: '07:45 AM', event: 'Assembly & Morning Prayer', chime: 'Saraswati Vandana MP3', status: 'Played' },
                  { time: '08:00 AM', event: 'Period 1 Start', chime: 'Single Soft Gong', status: 'Played' },
                  { time: '08:45 AM', event: 'Period 2 Start', chime: 'Single Soft Gong', status: 'Played' },
                  { time: '10:15 AM', event: 'Lunch & Recess Break', chime: 'Long Break Chime MP3', status: 'Upcoming' },
                  { time: '01:45 PM', event: 'Final School Dismissal Bell', chime: 'National Anthem & Long Gong', status: 'Scheduled' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 rounded bg-slate-50 border text-[11px]">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-blue-700 w-20">{item.time}</span>
                      <span className="font-bold text-slate-800">{item.event}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 text-[10px] hidden sm:inline">{item.chime}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        item.status === 'Played' ? 'bg-slate-200 text-slate-600' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-[11px] text-slate-500 italic">
                * No internet required. Operates completely offline even if internet connection drops.
              </div>
            </div>
          )}

          {/* Tab 5: Transport */}
          {activeShowcaseTab === 'transport' && (
            <div className="bg-white rounded-xl p-4 sm:p-6 text-slate-900 text-xs space-y-4 shadow-inner">
              <div className="flex justify-between items-center border-b pb-3">
                <div>
                  <h3 className="text-base font-black text-slate-900">TRANSPORT & BUS ROUTE LEDGER</h3>
                  <p className="text-[11px] text-slate-600">Live pickup stops, driver details, and 11-month fee calculation</p>
                </div>
                <span className="px-2.5 py-1 bg-amber-100 text-amber-900 font-bold rounded text-[10px]">
                  3 Active Bus Routes
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { route: 'Route 1: Ramghat Border - Jargwan', driver: 'Sonu Singh (+91 94121XXXXX)', fee: '₹ 800 / month', students: '34 Students' },
                  { route: 'Route 2: Barheti - Aligarh Road', driver: 'Mahesh Kumar (+91 98371XXXXX)', fee: '₹ 950 / month', students: '28 Students' },
                  { route: 'Route 3: Vinay Nagar - PAC Quarsi', driver: 'Dinesh Sharma (+91 97194XXXXX)', fee: '₹ 1,100 / month', students: '42 Students' }
                ].map((bus, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-2">
                    <div className="font-bold text-slate-900 text-[11px]">{bus.route}</div>
                    <div className="text-[10px] text-slate-600">Driver: <strong>{bus.driver}</strong></div>
                    <div className="flex justify-between items-center pt-1 border-t text-[10px]">
                      <span className="text-blue-700 font-bold">{bus.fee}</span>
                      <span className="bg-white px-2 py-0.5 rounded border font-medium">{bus.students}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </section>


      {/* 3. CORE 8 SERVICE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
            Products & Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Everything Your School Needs Under One Roof
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            From easy-to-use software to on-site biometric attendance machines and automated bells — we handle the complete technology setup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${srv.iconBg} ${srv.iconColor} flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 mb-2">{srv.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate(`services/${srv.id}`)}
                    className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1.5"
                  >
                    <span>View Specifications & Pricing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* 4. TRANSPARENT PRICING SNAPSHOT (SKK Developers Alternative) */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                100% Genuine & Honest Rates
              </span>
              <h2 className="text-3xl font-black text-slate-900 mt-2">
                School ERP Pricing by Student Strength
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Zero server setup charges • Daily cloud backup • Free staff training included
              </p>
            </div>

            <button
              onClick={() => onNavigate('pricing')}
              className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2 self-start md:self-auto"
            >
              <span>View Full Pricing Matrix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pricing Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
                    <th className="py-3.5 px-4">Student Capacity</th>
                    <th className="py-3.5 px-3 text-center">Startup Cloud</th>
                    <th className="py-3.5 px-3 text-center">Standard Basic</th>
                    <th className="py-3.5 px-3 text-center bg-blue-50 text-blue-900 font-black">Enterprise Pro (Recommended)</th>
                    <th className="py-3.5 px-3 text-center">Offline Desktop</th>
                    <th className="py-3.5 px-4 text-end">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {STUDENT_STRENGTH_MATRIX.slice(0, 5).map((tier, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-700 shrink-0" />
                        <span>{tier.range} Students</span>
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <div className="font-bold text-slate-900">{tier.startup.setup}</div>
                        <div className="text-[10px] text-slate-500">Ren: {tier.startup.renewal}</div>
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <div className="font-bold text-blue-700">{tier.basic.setup}</div>
                        <div className="text-[10px] text-slate-500">Ren: {tier.basic.renewal}</div>
                      </td>
                      <td className="py-3.5 px-3 text-center bg-blue-50/60">
                        <div className="font-black text-blue-900 text-sm">{tier.enterprise.setup}</div>
                        <div className="text-[10px] text-slate-600 font-medium">Ren: {tier.enterprise.renewal}</div>
                      </td>
                      <td className="py-3.5 px-3 text-center font-bold text-slate-700">
                        {tier.offline}
                      </td>
                      <td className="py-3.5 px-4 text-end">
                        <button
                          onClick={() => handleWhatsAppBooking(`Namaste, I want to book School ERP for ${tier.range} Students (${tier.enterprise.setup}).`)}
                          className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm"
                        >
                          Book via WhatsApp
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>


      {/* 5. WHY PKR ENTERPRISES? (Grounded Comparison) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-12 shadow-sm space-y-8">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
              Real Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Why Schools Choose PKR ENTERPRISES Over Traditional ERPs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            
            {/* Traditional Vendors */}
            <div className="p-6 rounded-2xl bg-red-50/50 border border-red-200 space-y-4">
              <div className="font-bold text-red-900 text-sm flex items-center gap-2">
                <X className="w-5 h-5 text-red-600" />
                <span>Other Expensive Software Vendors</span>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Charge heavy annual fees (₹15,000 to ₹35,000+) even for small schools.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Support through ticket portals that take 2-4 days to answer urgent queries.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Complex interfaces requiring technical computer experts to operate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Extra charges for adding extra teachers, modules, or printing marksheets.</span>
                </li>
              </ul>
            </div>

            {/* PKR ENTERPRISES */}
            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-300 space-y-4">
              <div className="font-bold text-emerald-900 text-sm flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600" />
                <span>PKR ENTERPRISES (Our Promise)</span>
              </div>
              <ul className="space-y-3 text-slate-800">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Fair & Genuine Rates:</strong> Starting at just ₹2,499/yr with zero hidden charges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Direct Phone & WhatsApp Support:</strong> Talk directly to our technical engineer within minutes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Super Easy Hindi/English Interface:</strong> Any teacher or accountant can learn it in 15 minutes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Free 1-Click Excel Migration:</strong> We import all your existing student data for free.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* 6. FOUNDER'S NOTE & LOCAL TRUST */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-blue-800 relative overflow-hidden">
          
          <div className="relative z-10 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg text-white border-2 border-blue-300">
                PK
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg text-white">Prashant Kumar</h3>
                <p className="text-xs text-blue-300">Founder & Lead Software Architect • PKR ENTERPRISES</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
              "We started PKR ENTERPRISES with a straightforward mission: every school in Uttar Pradesh and across India—whether in Bulandshahr, Aligarh, or any other district—deserves fast, dependable, and affordable digital systems. You shouldn't have to spend tens of thousands of rupees on complex software or wait days for customer support. When you work with us, you have my personal phone number and direct assistance."
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-emerald-300">
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-emerald-400" /> Direct: +91 9719476606
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-blue-300" /> prashant732009@gmail.com
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-4 h-4 text-purple-400" /> Bulandshahr (U.P.) - 202395
              </span>
            </div>
          </div>

        </div>
      </section>


      {/* 7. SIMPLE 4-STEP ONBOARDING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
            Quick 24-Hour Setup
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            How Your School Gets Started
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
          {[
            { step: '01', title: 'Free Live Demo', desc: 'Call or WhatsApp us. We show you the complete system on phone, laptop, or at your school.' },
            { step: '02', title: 'Share Student Excel', desc: 'Send us your class-wise student names and fee structure. We format and upload everything for you.' },
            { step: '03', title: 'Free Staff Training', desc: 'We train your school accountant, principal, and teachers via 1-on-1 screen share and video calls.' },
            { step: '04', title: 'Start Printing & Alerts', desc: 'Begin collecting online/cash fees, printing receipts, and sending instant WhatsApp notices to parents.' }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative space-y-2">
              <span className="text-3xl font-black text-blue-200">{item.step}</span>
              <h3 className="font-bold text-sm text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* 8. REAL PRACTICAL FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
            Clear Answers
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "क्या यह सॉफ्टवेयर बिना इंटरनेट (Offline) भी चलेगा?",
              a: "हाँ! हमारे पास Cloud Web Version के साथ-साथ Offline Desktop Version भी उपलब्ध है। अगर आपके स्कूल में इंटरनेट की समस्या रहती है, तो आप अपने लैपटॉप या कंप्यूटर पर बिना इंटरनेट के भी फीस रसीद और मार्कशीट बना सकते हैं।"
            },
            {
              q: "पुराने स्टूडेंट्स का डेटा कैसे लोड होगा?",
              a: "आपको कोई मैनुअल टाइपिंग करने की ज़रूरत नहीं है। आपके पास जो भी एक्सेल शीट या रजिस्टर का डेटा है, वह हमारी टीम खुद आपके सॉफ्टवेयर में फ्री में इम्पोर्ट कर देगी।"
            },
            {
              q: "क्या फीस रसीद और मार्कशीट पर हमारे स्कूल का नाम और लोगो प्रिंट होगा?",
              a: "बिल्कुल! आपके स्कूल का पूरा नाम, पता, CBSE/State बोर्ड एफिलिएशन नंबर और स्कूल का रंगीन लोगो हर रसीद और रिपोर्ट कार्ड पर ऑटोमैटिक प्रिंट होता है।"
            },
            {
              q: "क्या बायोमेट्रिक मशीन और ऑटोमैटिक घंटी का सेटअप भी आप करवाएंगे?",
              a: "हाँ! हम सिक्योर-आई (Secureye) और ई-एसएसएल (eSSL) बायोमेट्रिक मशीनें और एमपी3 स्कूल बेल सॉफ्टवेयर आपके स्कूल के कंप्यूटर से पूरी तरह कनेक्ट और कॉन्फ़िगर करके देते हैं।"
            },
            {
              q: "अगर कोई समस्या आती है तो सहायता (Support) कैसे मिलेगी?",
              a: "आप सीधे +91 9719476606 पर कॉल या WhatsApp कर सकते हैं। हमारी टीम AnyDesk/TeamViewer या फोन पर तुरंत लाइव मदद करती है।"
            }
          ].map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 bg-white overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 flex justify-between items-center hover:bg-slate-50"
              >
                <span>{faq.q}</span>
                <span className="text-blue-700 text-base">{activeFaq === idx ? '−' : '+'}</span>
              </button>
              {activeFaq === idx && (
                <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>


      {/* 9. BOTTOM CTA BAR */}
      <section className="bg-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black">
            Ready to Modernize Your School Operations?
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 max-w-2xl mx-auto">
            Get a tailored quotation and free live demonstration within 10 minutes. Call or WhatsApp our technical lead directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleWhatsAppBooking("Hello Prashant ji, I want to discuss School ERP installation for our school.")}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg flex items-center gap-2 text-xs sm:text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Us at +91 9719476606</span>
            </button>
            <button
              onClick={() => onOpenContactModal()}
              className="px-6 py-3 bg-white hover:bg-slate-100 text-blue-900 font-bold rounded-xl shadow-lg text-xs sm:text-sm"
            >
              Request Call Back Form
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
