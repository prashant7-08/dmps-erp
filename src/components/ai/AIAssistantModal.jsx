import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, User, HelpCircle, BookOpen, Calendar, DollarSign, CheckCircle2, X } from 'lucide-react';
import schoolService from '../../services/schoolService';

export const AIAssistantModal = ({ isOpen, onClose, currentRole = 'admin' }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `Hello! I am **EduBot**, your AI School Assistant. How can I help you today with student records, fee inquiries, timetable schedules, or academic reports?`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    { label: 'School Timings & Session', query: 'What are the current school timings and academic session?' },
    { label: 'Fee Defaulters', query: 'Which students have overdue fee balances?' },
    { label: 'Class 10 Timetable', query: 'Show me the timetable for Class 10 Section A.' },
    { label: 'Today\'s Attendance Summary', query: 'What is today\'s student attendance status?' },
    { label: 'Upcoming Exams', query: 'What are the upcoming examinations?' }
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const currentTimeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [
      ...prev,
      {
        id: prev.length + 1,
        sender: 'user',
        text,
        time: currentTimeStr
      }
    ]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    // AI Logic Simulator using live school data
    setTimeout(() => {
      let botReply = '';
      const query = text.toLowerCase();
      const schoolInfo = schoolService.getSchoolInfo();
      const students = schoolService.getStudents();
      const invoices = schoolService.getFeeInvoices();
      const exams = schoolService.getExams();

      if (query.includes('timing') || query.includes('time') || query.includes('session')) {
        botReply = `🏫 **School Timings & Session Info:**\n- **Summer Hours:** ${schoolInfo.timings.summer}\n- **Winter Hours:** ${schoolInfo.timings.winter}\n- **Current Session:** ${schoolInfo.academicSession}\n- **Working Days:** Monday to Saturday.`;
      } else if (query.includes('fee') || query.includes('defaulter') || query.includes('due') || query.includes('pending')) {
        const defaulters = invoices.filter(inv => inv.status === 'Overdue' || inv.dueAmount > 0);
        if (defaulters.length > 0) {
          botReply = `💰 **Fee Balance & Defaulter List:**\n` + 
            defaulters.map(d => `- **${d.studentName}** (${d.class}): Due ₹${d.dueAmount.toLocaleString('en-IN')} (Status: ${d.status})`).join('\n') +
            `\n\n*Tip: You can collect payments via the Fee POS counter in the Fees module.*`;
        } else {
          botReply = `All recorded students have cleared their due fees for the current billing cycle! 🎉`;
        }
      } else if (query.includes('timetable') || query.includes('schedule') || query.includes('period')) {
        botReply = `🗓️ **Class 10-A Timetable Highlights (Monday):**\n- 08:00 AM: Mathematics (Mrs. BHOOMI YADAV - Room 101)\n- 08:45 AM: Science/Physics (Prashant Kumar Rajput - Physics Lab)\n- 09:30 AM: English (Mrs. Kavita Iyer)\n- 11:30 AM: Hindi (Dr. Ramesh Chandra)\n- 12:15 PM: Computer Applications (Mr. POORAN SINGH - Lab 1)`;
      } else if (query.includes('attendance') || query.includes('absent') || query.includes('present')) {
        const absentCount = students.filter(s => s.id === 'STU-2026-003').length;
        const total = students.length;
        const presentCount = total - absentCount;
        const pct = ((presentCount / total) * 100).toFixed(1);
        botReply = `📊 **Today's Attendance Overview:**\n- **Total Enrolled:** ${total} Students\n- **Present:** ${presentCount} (${pct}%)\n- **Absent:** ${absentCount} (e.g. Kabir Khan)\n- Overall school attendance is healthy above the 90% benchmark.`;
      } else if (query.includes('exam') || query.includes('test') || query.includes('unit')) {
        botReply = `📝 **Examination Schedule:**\n` + 
          exams.map(e => `- **${e.name}**: ${e.startDate} to ${e.endDate} (Status: ${e.status})`).join('\n');
      } else if (query.includes('student') || query.includes('aarav') || query.includes('admission')) {
        const s = students[0];
        botReply = `👨‍🎓 **Student Record found:**\n- **Name:** ${s.name} (Roll: ${s.rollNo})\n- **Class:** ${s.class}-${s.section}\n- **House:** ${s.house}\n- **Attendance:** ${s.attendanceSummary.percentage}%\n- **Father:** ${s.parents.fatherName} (${s.parents.fatherMobile})\n- **Fee Status:** ${s.feeSummary.status}`;
      } else {
        botReply = `I understand you're asking about "${text}". As your School ERP Assistant, you can ask me for student details, fee collections, exam schedules, attendance stats, or bus routes anytime!`;
      }

      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: botReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 700);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl w-full max-w-2xl h-[620px] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-950 text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-base font-bold flex items-center gap-2">
                EduBot AI School Assistant
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Online
                </span>
              </h3>
              <p className="text-xs text-indigo-200">Ask questions about academics, fees, attendance & schedules</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-indigo-200 hover:text-white hover:bg-white/10 rounded-xl transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-950/50 custom-scrollbar">
          {messages.map((msg) => {
            const isBot = msg.sender === 'bot';
            return (
              <div key={msg.id} className={`flex items-start gap-3 ${isBot ? '' : 'flex-row-reverse'}`}>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${isBot ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-white'}`}>
                  {isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                  isBot 
                    ? 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800' 
                    : 'bg-indigo-600 text-white'
                }`}>
                  <div className="whitespace-pre-line leading-relaxed">
                    {msg.text}
                  </div>
                  <span className={`block text-[10px] mt-1.5 ${isBot ? 'text-slate-400' : 'text-indigo-200'} text-right`}>
                    {msg.time}
                  </span>
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 shadow-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        <div className="px-4 py-2 bg-slate-100 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
          <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1 shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Suggestions:
          </span>
          {quickPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(p.query)}
              className="text-xs bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-700 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 transition-colors shrink-0"
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Input Footer */}
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your question (e.g. fee dues, timetable, exam date)..."
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="p-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl shadow-md transition-all shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
