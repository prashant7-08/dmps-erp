import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // TopNav & Common
    schoolName: "Dadheech Memorial Public School",
    tagline: "Ramghat Road Border, Jargwan, Bulandshahr (U.P.)",
    dashboard: "Dashboard",
    posCounter: "POS Fee Counter",
    dueList: "Due List & Reminders",
    students: "Students",
    teachers: "Teachers & Staff",
    biometric: "Biometric & Attendance",
    timetable: "Automatic Bell & Timetable",
    accounts: "Office Cash Book",
    reports: "Reports & Analytics",
    settings: "School Settings",
    superAdmin: "Super Admin",
    activeSession: "Session 2026-27",
    allCampuses: "All Campuses",
    searchPlaceholder: "Search students, ledger, admission #, staff, features...",
    cloudSync: "Cloud Sync (MongoDB)",
    cloudSyncSuccess: "Data synchronized with Cloud MongoDB successfully!",
    backupSaved: "Backup saved successfully!",
    hindiMode: "हिंदी (Hindi)",
    englishMode: "English",
    
    // POS & Fees
    feeCollectTitle: "POS Fee Collection Counter",
    searchStudentFee: "Search student by name, admission no, or roll no...",
    totalDue: "Total Due",
    totalPaid: "Total Paid",
    balanceDue: "Remaining Balance",
    collectFeeBtn: "Collect Fee (POS)",
    directUpiPay: "Pay via UPI QR (0% Fee)",
    whatsappReminder: "WhatsApp Due Reminder",
    printReceipt: "Print Official Receipt",
    familySiblings: "Family & Linked Siblings",
    
    // Quick Actions & Modules
    onlineQuiz: "Online MCQ Exam / Quiz",
    homeworkDesk: "Homework & Notes Desk",
    familyPortal: "Unified Family Portal",
    dailyAttendance: "Daily Staff & Student Attendance",
    quickNotice: "Send WhatsApp Notice",
    quickBackup: "1-Click Full Backup",
    
    // Stats & Badges
    activeStudents: "Active Students",
    totalStaff: "Total Staff & Faculty",
    todayFeeCollected: "Today's Fee Collection",
    pendingDues: "Pending Fee Demand",
    attendanceRate: "Today's Attendance Rate",
    
    // Actions & Confirmations
    save: "Save Changes",
    cancel: "Cancel",
    confirm: "Confirm",
    downloadPdf: "Download PDF",
    exportExcel: "Export to Excel",
    status: "Status",
    action: "Action"
  },
  hi: {
    // TopNav & Common
    schoolName: "दाधीच मेमोरियल पब्लिक स्कूल",
    tagline: "रामघाट रोड बॉर्डर, जरगवां, बुलंदशहर (उ.प्र.)",
    dashboard: "डैशबोर्ड (मुख्य पृष्ठ)",
    posCounter: "फीस जमा काउंटर (POS)",
    dueList: "बकाया फीस सूची व तकादा",
    students: "छात्र रजिस्टर (567 बच्चे)",
    teachers: "अध्यापक व स्टाफ",
    biometric: "बायोमेट्रिक हाजिरी",
    timetable: "ऑटो घंटी व समय-सारणी",
    accounts: "दैनिक कैश बुक व खाता",
    reports: "रिपोर्ट्स व विश्लेषण",
    settings: "स्कूल सेटिंग्स",
    superAdmin: "सुपर एडमिन",
    activeSession: "सत्र 2026-2027",
    allCampuses: "सभी शाखाएं (कैंपस)",
    searchPlaceholder: "छात्र का नाम, बही खाता #, प्रवेश सं., स्टाफ खोजें...",
    cloudSync: "क्लाउड सिंक (MongoDB)",
    cloudSyncSuccess: "क्लाउड डेटाबेस (MongoDB) के साथ डेटा सुरक्षित सिंक हो गया!",
    backupSaved: "बैकअप सुरक्षित डाउनलोड व सेव हो गया!",
    hindiMode: "हिंदी (Hindi)",
    englishMode: "English",
    
    // POS & Fees
    feeCollectTitle: "फीस जमा काउंटर (सर्च करें व रसीद काटें)",
    searchStudentFee: "छात्र का नाम, क्लास, लेजर # या मोबाइल नंबर से खोजें...",
    totalDue: "कुल देय फीस",
    totalPaid: "जमा फीस",
    balanceDue: "शेष बकाया",
    collectFeeBtn: "फीस जमा करें (POS)",
    directUpiPay: "UPI QR से पेमेंट (0% चार्ज)",
    whatsappReminder: "व्हाट्सएप फीस रिमाइंडर भेजें",
    printReceipt: "पक्की रसीद प्रिंट करें",
    familySiblings: "परिवार व सगे भाई-बहन",
    
    // Quick Actions & Modules
    onlineQuiz: "ऑनलाइन MCQ परीक्षा / क्विज",
    homeworkDesk: "दैनिक गृहकार्य व नोट्स",
    familyPortal: "अभिभावक व परिवार पोर्टल",
    dailyAttendance: "दैनिक हाजिरी रजिस्टर",
    quickNotice: "व्हाट्सएप सूचना भेजें",
    quickBackup: "1-क्लिक पूरा बैकअप",
    
    // Stats & Badges
    activeStudents: "कुल सक्रिय छात्र",
    totalStaff: "कुल शिक्षक व कर्मचारी",
    todayFeeCollected: "आज की कुल फीस वसूली",
    pendingDues: "कुल शेष बकाया मांग",
    attendanceRate: "आज की औसत उपस्थिति",
    
    // Actions & Confirmations
    save: "सुरक्षित करें (Save)",
    cancel: "रद्द करें (Cancel)",
    confirm: "पुष्टि करें (Confirm)",
    downloadPdf: "PDF डाउनलोड करें",
    exportExcel: "Excel फाइल बनाएं",
    status: "स्थिति",
    action: "कार्रवाई"
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('DMPS_APP_LANG') || 'en';
    } catch (e) {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('DMPS_APP_LANG', lang);
    } catch (e) {}
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = (key) => {
    return translations[lang]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t, isHindi: lang === 'hi' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      lang: 'en',
      setLang: () => {},
      toggleLanguage: () => {},
      t: (key) => translations.en[key] || key,
      isHindi: false
    };
  }
  return context;
};

export default LanguageContext;
