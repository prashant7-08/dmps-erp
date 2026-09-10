import React, { useState } from 'react';
import { MessageCircle, X, Send, Users, AlertCircle, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { useLanguage } from '../../utils/languageContext';

export const WhatsAppBroadcastModal = ({ isOpen, onClose, defaultStudent = null, students = [] }) => {
  const { t, isHindi } = useLanguage();
  const [templateType, setTemplateType] = useState('fee_due');
  const [targetStudentId, setTargetStudentId] = useState(defaultStudent ? defaultStudent.id : (students[0]?.id || ''));
  const [customNotice, setCustomNotice] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!isOpen) return null;

  const selectedStudent = students.find(s => s.id === targetStudentId) || defaultStudent || students[0];

  const getPhone = (s) => {
    if (!s) return '';
    const raw = s.parents?.fatherMobile || s.fatherMobile || s.parents?.motherMobile || s.mobile || '';
    return raw.replace(/[^0-9]/g, '').slice(-10);
  };

  const cleanPhone = getPhone(selectedStudent);

  // Message generators
  const getMessageContent = (s) => {
    if (!s) return '';
    const name = s.name || 'Student';
    const roll = s.rollNo || '—';
    const cls = `${s.class || ''} ${s.section || ''}`.trim();
    const balance = (s.feeSummary?.balance || 0).toLocaleString('en-IN');
    const father = s.parents?.fatherName || s.fatherName || 'Guardian';

    switch (templateType) {
      case 'fee_due':
        return isHindi
          ? `आदरणीय ${father} जी, दाधीच मेमोरियल पब्लिक स्कूल की ओर से सादर प्रणाम। आपके सुपुत्र/सुपुत्री ${name} (कक्षा: ${cls}, रोल नं: ${roll}) की शेष फीस ₹${balance} बकाया है। कृपया इसे समय पर विद्यालय काउंटर या UPI QR से जमा करने का कष्ट करें। धन्यवाद।`
          : `Dear ${father}, Greetings from Dadheech Memorial Public School. This is a gentle reminder that the pending fee for your child ${name} (Class: ${cls}, Roll: ${roll}) is Rs. ${balance}. Kindly deposit the dues at the school counter or via UPI. Thank you.`;

      case 'absent_alert':
        return isHindi
          ? `आदरणीय ${father} जी, सूचित किया जाता है कि आपके बच्चे ${name} (कक्षा: ${cls}) आज विद्यालय में अनुपस्थित (Absent) रहे हैं। कृपया अनुपस्थिति का कारण विद्यालय को अवगत कराएं। - दाधीच मेमोरियल पब्लिक स्कूल`
          : `Dear ${father}, please note that your child ${name} (Class: ${cls}) was marked ABSENT today at school. Please let the school administration know if there is an emergency. - Dadheech Memorial Public School`;

      case 'holiday_notice':
        return isHindi
          ? `अभिभावक बंधु, दाधीच मेमोरियल पब्लिक स्कूल द्वारा सूचित किया जाता है कि आगामी आदेश/त्योहार के उपलक्ष्य में विद्यालय में अवकाश रहेगा। पुनः कक्षाएं नियमित समय पर लगेंगी। धन्यवाद।`
          : `Dear Parents, this is to inform you that the school will remain closed on account of the scheduled holiday. Regular classes will resume as per standard timings. - Dadheech Memorial Public School`;

      case 'custom':
      default:
        return customNotice || (isHindi ? `दाधीच मेमोरियल पब्लिक स्कूल से महत्वपूर्ण सूचना:` : `Important Notice from Dadheech Memorial Public School:`);
    }
  };

  const messageText = getMessageContent(selectedStudent);

  const handleSendWhatsApp = (studentObj) => {
    const p = getPhone(studentObj);
    if (!p || p.length < 10) {
      alert(isHindi ? 'कृपया छात्र का वैध 10 अंकों का मोबाइल नंबर दर्ज करें।' : 'Valid 10-digit mobile number not found for this student.');
      return;
    }
    const msg = encodeURIComponent(getMessageContent(studentObj));
    const url = `https://wa.me/91${p}?text=${msg}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-md">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight">
                {isHindi ? '1-क्लिक व्हाट्सएप व SMS ब्रॉडकास्टर' : '1-Click Direct WhatsApp Broadcaster'}
              </h3>
              <p className="text-xs text-emerald-100 font-medium">
                {isHindi ? '100% मुफ्त - सीधे अभिभावक के मोबाइल पर संदेश भेजें' : '100% Free - Direct zero-cost communication to parents'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-white/20 text-white/80 hover:text-white transition-all">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 overflow-y-auto flex-1">
          {/* Template Selector */}
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2 uppercase tracking-wider">
              {isHindi ? 'संदेश का प्रकार चुनें (Message Template):' : 'Select Message Template:'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'fee_due', label: isHindi ? '💰 फीस बकाया' : '💰 Fee Dues' },
                { id: 'absent_alert', label: isHindi ? '⚠️ गैरहाजिरी' : '⚠️ Absent Alert' },
                { id: 'holiday_notice', label: isHindi ? '🏖️ छुट्टी सूचना' : '🏖️ Holiday' },
                { id: 'custom', label: isHindi ? '✍️ मनचाहा संदेश' : '✍️ Custom' }
              ].map(tpl => (
                <button
                  key={tpl.id}
                  onClick={() => setTemplateType(tpl.id)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                    templateType === tpl.id
                      ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-700 dark:text-emerald-300 shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {tpl.label}
                </button>
              ))}
            </div>
          </div>

          {/* Student Selector if multiple */}
          {students.length > 1 && (
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                {isHindi ? 'छात्र चुनें:' : 'Select Student:'}
              </label>
              <select
                value={targetStudentId}
                onChange={(e) => setTargetStudentId(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-900 dark:text-white"
              >
                {students.slice(0, 100).map(s => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({s.class}) — Roll #{s.rollNo} — Ph: {getPhone(s) || 'No Mobile'} — Due: ₹{s.feeSummary?.balance || 0}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Custom message text box */}
          {templateType === 'custom' && (
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                {isHindi ? 'अपना संदेश लिखें:' : 'Write Custom Message:'}
              </label>
              <textarea
                rows={3}
                value={customNotice}
                onChange={(e) => setCustomNotice(e.target.value)}
                placeholder={isHindi ? 'यहाँ अपना संदेश लिखें...' : 'Type your announcement here...'}
                className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium"
              />
            </div>
          )}

          {/* Live Preview Box */}
          <div>
            <label className="text-xs font-bold text-slate-500 block mb-1.5 flex items-center justify-between">
              <span>{isHindi ? 'व्हाट्सएप संदेश पूर्वावलोकन (Preview):' : 'WhatsApp Message Preview:'}</span>
              <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                📱 +91 {cleanPhone || '__________'}
              </span>
            </label>
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 text-xs text-slate-800 dark:text-slate-200 font-medium whitespace-pre-wrap leading-relaxed">
              {messageText}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100"
          >
            {t('cancel')}
          </button>
          
          <button
            onClick={() => handleSendWhatsApp(selectedStudent)}
            className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-lg shadow-emerald-600/20 flex items-center gap-2 active:scale-95 transition-all"
          >
            <Send className="w-4 h-4" />
            {isHindi ? 'व्हाट्सएप पर भेजें (Open WhatsApp)' : 'Send to WhatsApp'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppBroadcastModal;
