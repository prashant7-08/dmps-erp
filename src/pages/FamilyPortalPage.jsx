import React, { useState } from 'react';
import { 
  Users, Search, ShieldCheck, Phone, BookOpen, Calendar, 
  CreditCard, CheckCircle2, FileText, Sparkles, AlertTriangle, 
  Download, QrCode, ArrowRight, UserCheck, GraduationCap, ChevronRight 
} from 'lucide-react';
import { schoolService } from '../services/schoolService';
import { useLanguage } from '../utils/languageContext';
import { UpiDynamicQrModal } from '../components/payment/UpiDynamicQrModal';

export const FamilyPortalPage = () => {
  const { t, isHindi } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFamily, setActiveFamily] = useState(null);
  const [selectedChildIndex, setSelectedChildIndex] = useState(0);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [searched, setSearched] = useState(false);

  const students = schoolService.getStudents();

  const handleSearch = (e) => {
    e?.preventDefault();
    if (!searchQuery.trim()) return;
    setSearched(true);

    const q = searchQuery.trim().toLowerCase();
    const cleanQPhone = q.replace(/[^0-9]/g, '').slice(-10);

    // Find student by mobile or admission or roll
    const matched = students.filter(s => {
      const pFather = String(s.parents?.fatherMobile || s.fatherMobile || '').replace(/[^0-9]/g, '').slice(-10);
      const pMother = String(s.parents?.motherMobile || s.mobile || '').replace(/[^0-9]/g, '').slice(-10);
      
      const phoneMatch = cleanQPhone.length >= 6 && (pFather.includes(cleanQPhone) || pMother.includes(cleanQPhone));
      const admMatch = (s.admissionNo || '').toLowerCase().includes(q);
      const rollMatch = String(s.rollNo || '').toLowerCase() === q;
      const nameMatch = (s.name || '').toLowerCase().includes(q);

      return phoneMatch || admMatch || rollMatch || nameMatch;
    });

    if (matched.length > 0) {
      // Find all linked siblings for the matched set
      const primary = matched[0];
      const siblings = schoolService.getLinkedSiblings(primary.id);
      
      // Combined unique list of all family children
      const allFamilyMembers = [primary, ...siblings.filter(sib => sib.id !== primary.id)];
      
      // Calculate consolidated financial summary
      const totalDue = allFamilyMembers.reduce((sum, c) => sum + (c.feeSummary?.totalDue || 0), 0);
      const totalPaid = allFamilyMembers.reduce((sum, c) => sum + (c.feeSummary?.totalPaid || 0), 0);
      const balance = allFamilyMembers.reduce((sum, c) => sum + (c.feeSummary?.balance || 0), 0);

      setActiveFamily({
        guardianName: primary.parents?.fatherName || primary.fatherName || 'Guardian / Parent',
        contactPhone: primary.parents?.fatherMobile || primary.fatherMobile || primary.mobile || '',
        members: allFamilyMembers,
        totalDue,
        totalPaid,
        balance
      });
      setSelectedChildIndex(0);
    } else {
      setActiveFamily(null);
    }
  };

  const currentChild = activeFamily?.members?.[selectedChildIndex] || null;

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Top Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold mb-3">
            <Users className="w-3.5 h-3.5" />
            {isHindi ? '1-क्लिक संयुक्त परिवार पोर्टल' : 'Unified Single Family Portal'}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
            {isHindi ? 'अभिभावक व छात्र परिवार खाता' : 'Parent & Sibling Family Dashboard'}
          </h1>
          <p className="text-xs sm:text-sm text-purple-200 font-medium">
            {isHindi 
              ? 'अलग-अलग लॉगिन की जरूरत नहीं — मोबाइल नंबर या प्रवेश संख्या डालें और परिवार के सभी भाई-बहनों का रिकॉर्ड एक साथ देखें।'
              : 'Zero hassle single login. Enter registered mobile or admission number to view all sibling children together.'}
          </p>

          {/* Quick Search Bar */}
          <form onSubmit={handleSearch} className="mt-5 flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-300" />
              <input
                type="text"
                placeholder={isHindi ? 'रजिस्टर्ड मोबाइल नंबर, प्रवेश संख्या या छात्र का नाम डालें...' : 'Enter parent mobile number, admission # or student name...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-purple-300/70 text-xs sm:text-sm font-medium focus:outline-none focus:bg-white/20 focus:border-purple-400 transition-all"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-black text-xs sm:text-sm shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 shrink-0 active:scale-95 transition-all"
            >
              <Search className="w-4 h-4" />
              {isHindi ? 'खाता खोलें' : 'Open Family Account'}
            </button>
          </form>

          {/* Demo Quick Tags */}
          <div className="mt-3 flex items-center gap-2 flex-wrap text-[11px] text-purple-300/80">
            <span>{isHindi ? 'उदाहरण टेस्ट खोजें:' : 'Quick Demo Search:'}</span>
            <button type="button" onClick={() => { setSearchQuery('9811001122'); }} className="underline hover:text-white">9811001122 (Aarav & Siblings)</button>
            <span>•</span>
            <button type="button" onClick={() => { setSearchQuery('101'); }} className="underline hover:text-white">Roll #101</button>
          </div>
        </div>
      </div>

      {/* Main Family Content */}
      {activeFamily ? (
        <div className="space-y-6">
          {/* Family Master Header Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">
                    {activeFamily.guardianName} {isHindi ? 'का परिवार खाता' : 'Family Account'}
                  </h2>
                  <p className="text-xs text-slate-500 font-medium flex items-center gap-2 mt-0.5">
                    <span>📞 {activeFamily.contactPhone || '—'}</span>
                    <span>•</span>
                    <span className="font-bold text-purple-600 dark:text-purple-400">
                      {activeFamily.members.length} {isHindi ? 'बच्चे नामांकित (Enrolled)' : 'Children Enrolled'}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Consolidated Financials */}
            <div className="flex items-center gap-3 w-full md:w-auto bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="text-right px-3">
                <div className="text-[10px] uppercase font-bold text-slate-400">
                  {isHindi ? 'कुल परिवार बकाया' : 'Total Family Balance'}
                </div>
                <div className="text-base sm:text-lg font-mono font-black text-amber-600 dark:text-amber-400">
                  ₹{activeFamily.balance.toLocaleString('en-IN')}
                </div>
              </div>
              <button
                onClick={() => setIsQrModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-xs flex items-center gap-1.5 shadow-md shadow-emerald-600/20 active:scale-95 transition-all"
              >
                <QrCode className="w-4 h-4" />
                {isHindi ? 'UPI QR से भरें' : 'Pay via UPI'}
              </button>
            </div>
          </div>

          {/* Sibling Child Selector Tabs */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 custom-scrollbar">
            {activeFamily.members.map((child, idx) => (
              <button
                key={child.id}
                onClick={() => setSelectedChildIndex(idx)}
                className={`px-5 py-3 rounded-2xl text-xs font-black border transition-all flex items-center gap-3 shrink-0 ${
                  selectedChildIndex === idx
                    ? 'bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-600/25 scale-102'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs ${
                  selectedChildIndex === idx ? 'bg-white/20 text-white' : 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
                }`}>
                  #{child.rollNo}
                </div>
                <div className="text-left">
                  <div>{child.name}</div>
                  <div className={`text-[10px] font-normal ${selectedChildIndex === idx ? 'text-purple-200' : 'text-slate-400'}`}>
                    Class: {child.class} ({child.section || 'A'})
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Child Deep Details */}
          {currentChild && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column: Academic & Attendance Profile */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-purple-600" />
                    {isHindi ? 'छात्र विवरण व हाजिरी' : 'Student & Attendance'}
                  </h3>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                    currentChild.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    {currentChild.status}
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                    <span className="text-slate-500">Admission No:</span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">{currentChild.admissionNo}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                    <span className="text-slate-500">Roll Number:</span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">#{currentChild.rollNo}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                    <span className="text-slate-500">Class & Section:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{currentChild.class} - {currentChild.section || 'A'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                    <span className="text-slate-500">Academic Session:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{currentChild.academicSession || '2026-2027'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                    <span className="text-slate-500">Transport:</span>
                    <span className="font-bold text-sky-600">
                      {currentChild.transport?.stoppageName ? `${currentChild.transport.stoppageName} (₹${currentChild.transport.monthlyFare}/mo)` : 'Self Commute'}
                    </span>
                  </div>
                </div>

                {/* Attendance Gauge */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between items-center text-xs font-bold mb-2">
                    <span>{isHindi ? 'वार्षिक उपस्थिति (Attendance)' : 'Attendance Score'}</span>
                    <span className="font-mono text-emerald-600 font-black text-sm">
                      {currentChild.attendanceSummary?.percentage || 95.4}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-emerald-500 h-full rounded-full"
                      style={{ width: `${currentChild.attendanceSummary?.percentage || 95.4}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-medium">
                    <span>Present: {currentChild.attendanceSummary?.presentDays || 84} days</span>
                    <span>Total: {currentChild.attendanceSummary?.totalDays || 88} days</span>
                  </div>
                </div>
              </div>

              {/* Middle & Right Column: Fee Status & Receipts */}
              <div className="lg:col-span-2 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-purple-600" />
                    {isHindi ? `${currentChild.name} का फीस ब्यौरा` : `${currentChild.name}'s Fee Breakdown`}
                  </h3>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                    (currentChild.feeSummary?.balance || 0) === 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {currentChild.feeSummary?.status || 'Pending'}
                  </span>
                </div>

                {/* Fee Cards */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-center">
                    <div className="text-[10px] uppercase font-bold text-slate-400">{t('totalDue')}</div>
                    <div className="font-mono font-black text-slate-900 dark:text-white text-sm sm:text-base mt-1">
                      ₹{(currentChild.feeSummary?.totalDue || 0).toLocaleString('en-IN')}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-center">
                    <div className="text-[10px] uppercase font-bold text-emerald-600">{t('totalPaid')}</div>
                    <div className="font-mono font-black text-emerald-700 dark:text-emerald-300 text-sm sm:text-base mt-1">
                      ₹{(currentChild.feeSummary?.totalPaid || 0).toLocaleString('en-IN')}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40 text-center">
                    <div className="text-[10px] uppercase font-bold text-amber-600">{t('balanceDue')}</div>
                    <div className="font-mono font-black text-amber-700 dark:text-amber-300 text-sm sm:text-base mt-1">
                      ₹{(currentChild.feeSummary?.balance || 0).toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                {/* Head-wise fee breakdown */}
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                    <span>Tuition Fee (Annual Rate):</span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">₹{currentChild.feeSummary?.tuitionDue || 0}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                    <span>11-Month Transport Bus Fare:</span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">₹{currentChild.feeSummary?.transportDue11Months || 0}</span>
                  </div>
                  {Number(currentChild.feeSummary?.oldSessionDues || 0) > 0 && (
                    <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                      <span>Previous Session Arrears:</span>
                      <span className="font-mono font-bold text-rose-600">₹{currentChild.feeSummary?.oldSessionDues}</span>
                    </div>
                  )}
                  {Number(currentChild.feeSummary?.miscellaneousDue || 0) > 0 && (
                    <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                      <span>Books / Uniform / Kit Charges:</span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white">₹{currentChild.feeSummary?.miscellaneousDue}</span>
                    </div>
                  )}
                </div>

                {/* Instant Action Bar */}
                <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/40 flex flex-col sm:flex-row justify-between items-center gap-3">
                  <div className="text-xs font-medium text-purple-900 dark:text-purple-200">
                    {isHindi 
                      ? 'UPI QR कोड द्वारा बिना किसी अतिरिक्त शुल्क के तुरंत फीस जमा करें।' 
                      : 'Pay fee dues instantly with zero transaction charges via UPI QR code.'}
                  </div>
                  <button
                    onClick={() => setIsQrModalOpen(true)}
                    className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-black text-xs flex items-center gap-2 shadow-md shadow-purple-600/20 shrink-0"
                  >
                    <QrCode className="w-4 h-4" />
                    {isHindi ? 'UPI QR खोलें' : 'Generate UPI QR'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        searched && (
          <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-slate-900 dark:text-white">
              {isHindi ? 'कोई छात्र या परिवार रिकॉर्ड नहीं मिला' : 'No Matching Student or Family Record Found'}
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              {isHindi 
                ? 'कृपया सही 10 अंकों का मोबाइल नंबर, प्रवेश संख्या या नाम दर्ज करके पुनः प्रयास करें।'
                : 'Please check the entered mobile number, admission number or student name and try again.'}
            </p>
          </div>
        )
      )}

      {/* Dynamic UPI Modal */}
      {isQrModalOpen && currentChild && (
        <UpiDynamicQrModal
          isOpen={isQrModalOpen}
          onClose={() => setIsQrModalOpen(false)}
          student={currentChild}
        />
      )}
    </div>
  );
};

export default FamilyPortalPage;
