/**
 * ============================================================================
 * 👑 DADHEECH MEMORIAL PUBLIC SCHOOL - 100% GRANULAR PERMISSION REGISTRY
 * Defines all 22 modules, all navigation tabs, sub-tabs, features and actions
 * ============================================================================
 */

export const ALL_MODULE_PERMISSIONS = [
  {
    id: 'dashboard',
    name: 'Dashboard (मुख्य डैशबोर्ड)',
    category: 'Core Portal',
    icon: 'LayoutDashboard',
    actions: ['view', 'export'],
    subFeatures: [
      { id: 'stats_overview', label: 'Key KPI Metric Cards (Strength, Collections, Dues)' },
      { id: 'quick_actions', label: 'Quick Action Launcher (Collect Fee, New Admission, Add Expense)' },
      { id: 'fee_charts', label: 'Fee Collection & Expense Analytics Charts' },
      { id: 'attendance_charts', label: 'Student & Staff Daily Attendance Live Chart' },
      { id: 'recent_activity', label: 'Live System Activity & Audit Stream' }
    ]
  },
  {
    id: 'reception',
    name: 'Reception / Front Desk (स्वागत कक्ष)',
    category: 'Administration',
    icon: 'Building2',
    actions: ['view', 'create', 'edit', 'delete', 'export'],
    subFeatures: [
      { id: 'helpdesk_inquiries', label: 'Admission Inquiries & Visitors Log (पूछताछ व आगंतुक)' },
      { id: 'helpdesk_grievance', label: 'Grievance, Complaints & Parent Feedback (शिकायत व सुझाव)' },
      { id: 'visitor_pass', label: 'Visitor Gate Pass Issue & Print (गेट पास)' },
      { id: 'postal_dispatch', label: 'Postal Dispatch & Courier Register (डाक रजिस्टर)' },
      { id: 'call_logs', label: 'Phone Call & Telephonic Inquiry Logs (कॉल रजिस्टर)' }
    ]
  },
  {
    id: 'admission',
    name: 'Admission & Enrollment (प्रवेश प्रबंधन)',
    category: 'Academics & Students',
    icon: 'UserPlus',
    actions: ['view', 'create', 'edit', 'delete', 'export'],
    subFeatures: [
      { id: 'admission_create', label: 'Create New Offline Admission (नया छात्र प्रवेश)' },
      { id: 'admission_online', label: 'Online Admission Applications (ऑनलाइन आवेदन)' },
      { id: 'students_import', label: 'Multiple Student Import via Excel/CSV (एक्सेल इम्पोर्ट)' },
      { id: 'admission_letter', label: 'Admission Acceptance Letter Print (स्वीकृति पत्र)' },
      { id: 'admission_documents', label: 'Student KYC & Document Verification (दस्तावेज़ सत्यापन)' }
    ]
  },
  {
    id: 'students',
    name: 'Student Details & Directory (छात्र विवरण व सूची)',
    category: 'Academics & Students',
    icon: 'GraduationCap',
    actions: ['view', 'create', 'edit', 'delete', 'export'],
    subFeatures: [
      { id: 'students_list', label: 'All Active Students Directory & 360° Dossier (सक्रिय छात्र सूची)' },
      { id: 'students_custom_list', label: 'Custom Student List & Column Builder (कस्टम सूची)' },
      { id: 'students_inactive', label: 'Inactive / TC Left Students List (निष्क्रिय / टीसी सूची)' },
      { id: 'student_profile_edit', label: 'Edit Student Personal & Academic Details (छात्र विवरण संशोधन)' },
      { id: 'student_guardian_info', label: 'Parent / Guardian & Emergency Contact Info (अभिभावक विवरण)' }
    ]
  },
  {
    id: 'staff',
    name: 'Employee, Faculty & HR (शिक्षक व कर्मचारी प्रबंधन)',
    category: 'HR & Staff',
    icon: 'Users',
    actions: ['view', 'create', 'edit', 'delete', 'export'],
    subFeatures: [
      { id: 'staff_directory', label: 'Employee Directory & 360° Staff Dossier (कर्मचारी सूची)' },
      { id: 'staff_add', label: 'Add New Employee / Faculty (नया कर्मचारी जोड़ें)' },
      { id: 'payroll', label: 'Salary Payment, Slips & Payroll Register (वेतन भुगतान व स्लिप)' },
      { id: 'leave_management', label: 'Staff Leave Applications & Approval Ledger (अवकाश प्रबंधन)' },
      { id: 'staff_advance', label: 'Staff Advance Loans & Monthly Cut (एडवांस लोन प्रबंधन)' },
      { id: 'staff_awards', label: 'Staff Awards, Cash Rewards & Commendations (पुरस्कार व प्रशस्ति)' }
    ]
  },
  {
    id: 'student_accounting',
    name: 'Student Accounting & Fees (छात्र शुल्क प्रबंधन)',
    category: 'Accounts & Finance',
    icon: 'CreditCard',
    actions: ['view', 'create', 'edit', 'delete', 'export'],
    subFeatures: [
      { id: 'fees_pos', label: 'Fee Collect / POS Counter & Instant Receipt (फीस काउंटर)' },
      { id: 'fees_dues', label: 'Defaulter Due List & WhatsApp/SMS Reminders (बकाया सूची)' },
      { id: 'fees_allocation', label: 'Master Fee Allocation by Class/Category (शुल्क आवंटन)' },
      { id: 'fees_types', label: 'Fees Types, Heads & Installment Groups (शुल्क श्रेणियां)' },
      { id: 'fees_siblings', label: 'Sibling & Special Concession Discount Setup (छूट व्यवस्था)' },
      { id: 'fees_receipt_reprint', label: 'Reprint & Download Thermal / A4 Fee Receipts (रसीद पुनः प्रिंट)' }
    ]
  },
  {
    id: 'office_accounting',
    name: 'Office Cash Book (विद्यालय रोकड़ बही व व्यय)',
    category: 'Accounts & Finance',
    icon: 'DollarSign',
    actions: ['view', 'create', 'edit', 'delete', 'export'],
    subFeatures: [
      { id: 'office_deposit', label: 'Cash In (Income / Misc Fee Receipts) (आय व जमा)' },
      { id: 'office_expense', label: 'Cash Out (Expenses / Diesel / Maintenance) (व्यय व भुगतान)' },
      { id: 'office_transactions', label: 'Master Cash Book Ledger & All Vouchers (रोकड़ बही लेजर)' },
      { id: 'office_heads', label: 'Income & Expense Accounting Heads (लेखा शीर्षक)' }
    ]
  },
  {
    id: 'supervision',
    name: 'Supervision, Fleet & Transport (परिवहन व वाहन बेड़ा)',
    category: 'Transport & Facilities',
    icon: 'Bus',
    actions: ['view', 'create', 'edit', 'delete', 'export'],
    subFeatures: [
      { id: 'transport_routes', label: 'Bus Fleet, Route Master & Drivers (बस व रूट मास्टर)' },
      { id: 'transport_stoppage', label: 'Stoppages & Distance-wise Stop Fees (स्टॉपेज व शुल्क)' },
      { id: 'transport_assign', label: 'Assign Student Bus Stoppage & Route (छात्र बस आवंटन)' },
      { id: 'hostel_allocation', label: 'Hostel Bed & Room Allocation (छात्रावास प्रबंधन)' },
      { id: 'transport_maintenance', label: 'Diesel Fuel Log & Vehicle Fitness Alerts (डीजल व फिटनेस)' }
    ]
  },
  {
    id: 'attendance',
    name: 'Attendance & Biometrics (उपस्थिति व बायोमेट्रिक)',
    category: 'Academics & Students',
    icon: 'CheckSquare',
    actions: ['view', 'create', 'edit', 'delete', 'export'],
    subFeatures: [
      { id: 'attendance_students', label: 'Daily Student Attendance Marking by Class (छात्र दैनिक उपस्थिति)' },
      { id: 'attendance_staff', label: 'Staff Biometric Facial/Fingerprint Register (कर्मचारी बायोमेट्रिक)' },
      { id: 'attendance_monthly_register', label: 'Monthly 30-Day Attendance Grid & Percentages (मासिक रजिस्टर)' },
      { id: 'automatic_bell', label: 'Automatic School Period Bell System & Timers 🔔 (स्वचालित घंटी)' }
    ]
  },
  {
    id: 'academic',
    name: 'Academic & Timetable (कक्षा, विषय व समय सारिणी)',
    category: 'Academics & Students',
    icon: 'BookOpen',
    actions: ['view', 'create', 'edit', 'delete', 'export'],
    subFeatures: [
      { id: 'acad_classes', label: 'Control Classes, Sections & Stream Setup (कक्षाएं व वर्ग)' },
      { id: 'acad_assign_teacher', label: 'Assign Class Teacher & In-Charge (कक्षाध्यापक आवंटन)' },
      { id: 'acad_subjects', label: 'Subject Master & Theory/Practical Marks (विषय सूची)' },
      { id: 'acad_timetable', label: 'Class & Teacher Timetable Schedule (समय सारिणी)' },
      { id: 'acad_promotion', label: 'Annual Student Promotion to Next Class (वार्षिक पदोन्नति)' }
    ]
  },
  {
    id: 'homework',
    name: 'Daily Homework (दैनिक गृहकार्य)',
    category: 'Academics & Students',
    icon: 'FileSpreadsheet',
    actions: ['view', 'create', 'edit', 'delete', 'export'],
    subFeatures: [
      { id: 'hw_daily', label: 'Assign Daily Homework with Attachments (दैनिक गृहकार्य आवंटन)' },
      { id: 'hw_evaluation', label: 'Homework Evaluation & Checking Report (गृहकार्य मूल्यांकन)' }
    ]
  },
  {
    id: 'exam_master',
    name: 'Exam Master & CBSE Marks (परीक्षा एवं अंकतालिका)',
    category: 'Academics & Students',
    icon: 'Award',
    actions: ['view', 'create', 'edit', 'delete', 'export'],
    subFeatures: [
      { id: 'exam_term', label: 'Exam Term & Assessment Cycles (परीक्षा सत्र)' },
      { id: 'exam_hall', label: 'Exam Hall / Seating Arrangement Master (परीक्षा कक्ष व्यवस्था)' },
      { id: 'exam_trait', label: 'Co-Scholastic & Discipline Traits Master (सह-शैक्षणिक ग्रेड)' },
      { id: 'exam_distribution', label: 'CBSE Marks Distribution 80:20 (अंक विभाजन)' },
      { id: 'exam_schedule', label: 'Exam Schedule Date Sheet & Timings (परीक्षा समय सारिणी)' },
      { id: 'exam_marks', label: 'Mark Entries & CBSE Report Cards Print 🖨️ (अंक प्रविष्टि व रिपोर्ट कार्ड)' },
      { id: 'exam_attendance', label: 'Term Attendance Entries for Report Cards (सत्रीय उपस्थिति)' },
      { id: 'exam_generate_position', label: 'Generate Student Rank & Position 1st/2nd/3rd (रैंक निर्धारण)' },
      { id: 'exam_grades_range', label: 'CBSE 9-Point Grades Range A1 to E (ग्रेड पैमाना)' }
    ]
  },
  {
    id: 'card_management',
    name: 'ID Cards & Certificates (पहचान पत्र व प्रमाण पत्र)',
    category: 'Printing & Documents',
    icon: 'Contact',
    actions: ['view', 'create', 'edit', 'delete', 'export'],
    subFeatures: [
      { id: 'card_student_id', label: 'Student ID Card Bulk & Single Print (छात्र पहचान पत्र)' },
      { id: 'card_employee_id', label: 'Employee ID Card Print (कर्मचारी पहचान पत्र)' },
      { id: 'card_admit', label: 'Exam Admit Card / Roll Slip Generation (प्रवेश पत्र)' },
      { id: 'cert_tc', label: 'Student Transfer Certificate TC Generator (स्थानांतरण प्रमाण पत्र)' },
      { id: 'cert_employee', label: 'Employee Service Certificate (कर्मचारी अनुभव प्रमाण पत्र)' }
    ]
  },
  {
    id: 'inventory',
    name: 'Inventory & Store (स्टॉक व गणवेश/किताब बिक्री)',
    category: 'Accounts & Finance',
    icon: 'Package',
    actions: ['view', 'create', 'edit', 'delete', 'export'],
    subFeatures: [
      { id: 'inventory_product', label: 'Store Products & Stock Balance Master (स्टॉक इन्वेंट्री)' },
      { id: 'inventory_sales', label: 'Uniform, Books & Stationery POS Sales (गणवेश व किताब बिक्री)' },
      { id: 'inventory_category', label: 'Item Categories & Storage Warehouses (इन्वेंट्री श्रेणियां)' }
    ]
  },
  {
    id: 'library',
    name: 'Library Management (पुस्तकालय प्रबंधन)',
    category: 'Academics & Students',
    icon: 'BookMarked',
    actions: ['view', 'create', 'edit', 'delete', 'export'],
    subFeatures: [
      { id: 'lib_books', label: 'Book Catalog & Accession Register (पुस्तकालय सूची)' },
      { id: 'lib_category', label: 'Book Categories & Shelves (पुस्तक श्रेणियां)' },
      { id: 'lib_my_issued', label: 'My Issued Book Status (निर्गत पुस्तकें)' },
      { id: 'lib_issue_return', label: 'Book Issue & Return Counter (पुस्तक जारी / वापसी काउंटर)' }
    ]
  },
  {
    id: 'sms_notices',
    name: 'Bulk SMS & Broadcast (एसएमएस व सूचना प्रसारण)',
    category: 'Communication',
    icon: 'Bell',
    actions: ['view', 'create', 'edit', 'delete', 'export'],
    subFeatures: [
      { id: 'sms_send', label: 'Send Bulk SMS / WhatsApp Broadcast (एसएमएस / व्हाट्सएप प्रसारण)' },
      { id: 'sms_report', label: 'SMS Delivery & Failed Gateway Logs (एसएमएस रिपोर्ट)' },
      { id: 'sms_birthday_student', label: 'Student Birthday Wishes Automation (छात्र जन्मदिन संदेश)' },
      { id: 'sms_birthday_staff', label: 'Staff Birthday Wishes Automation (कर्मचारी जन्मदिन संदेश)' }
    ]
  },
  {
    id: 'mailbox',
    name: 'Message & Mailbox (आंतरिक संदेश व मेलबॉक्स)',
    category: 'Communication',
    icon: 'Mail',
    actions: ['view', 'create', 'edit', 'delete'],
    subFeatures: [
      { id: 'message_inbox', label: 'Inbox & Received Circulars (प्राप्त संदेश)' },
      { id: 'message_compose', label: 'Compose New Circular / Message (नया संदेश भेजें)' }
    ]
  },
  {
    id: 'reports',
    name: 'Reports & Analytics (समस्त रिपोर्ट एवं विवरण)',
    category: 'Reports & Analytics',
    icon: 'BarChart3',
    actions: ['view', 'export'],
    subFeatures: [
      { id: 'reports_custom', label: 'Custom List Builder & Exporter (कस्टम लिस्ट बिल्डर)' },
      { id: 'reports_student', label: 'Student Strength, Gender & Category Reports (छात्र रिपोर्ट)' },
      { id: 'reports_fees', label: 'Fee Collection, Dues & Defaulter Reports (शुल्क रिपोर्ट)' },
      { id: 'reports_financial', label: 'Office Financial Statement & Cash Book Report (वित्तीय रिपोर्ट)' },
      { id: 'reports_attendance', label: 'Short Attendance (<75%) & Monthly Register Reports (उपस्थिति रिपोर्ट)' },
      { id: 'reports_hr', label: 'Staff HR, Salary Register & EPF Report (वेतन व कर्मचारी रिपोर्ट)' },
      { id: 'reports_exam', label: 'Examination Marksheet & CBSE Merit List (परीक्षा रिपोर्ट)' }
    ]
  },
  {
    id: 'branch_management',
    name: 'Branch & Campus Management (कैंपस व शाखा प्रबंधन)',
    category: 'Administration',
    icon: 'GitBranch',
    actions: ['view', 'create', 'edit', 'delete'],
    subFeatures: [
      { id: 'branch_br01', label: 'Senior Campus - Jargwan (BR-01)' },
      { id: 'branch_br02', label: 'Junior High - Barheti (BR-02)' },
      { id: 'branch_br03', label: 'Dadheech Kids School (BR-03)' }
    ]
  },
  {
    id: 'frontend_cms',
    name: 'Frontend CMS & Website (वेबसाइट प्रबंधन)',
    category: 'Administration',
    icon: 'Globe',
    actions: ['view', 'create', 'edit', 'delete'],
    subFeatures: [
      { id: 'fe_setting', label: 'Website Settings & Theme (वेबसाइट सेटिंग्स)' },
      { id: 'fe_menu', label: 'Navigation Menu Setup (मेन्यू व्यवस्था)' },
      { id: 'fe_slider', label: 'Homepage Sliders & Banners (स्लाइडर बैनर)' },
      { id: 'fe_testimonial', label: 'Parent Testimonials (अभिभावक विचार)' },
      { id: 'fe_gallery', label: 'Photo & Event Gallery (फोटो गैलरी)' }
    ]
  },
  {
    id: 'role_permissions',
    name: 'Portal & Role Access Control (भूमिका व अनुमति प्रबंधन)',
    category: 'Administration',
    icon: 'ShieldCheck',
    actions: ['view', 'create', 'edit', 'delete'],
    subFeatures: [
      { id: 'role_manage', label: 'Create, Rename & Delete Custom Roles (भूमिकाएं जोड़ें/हटाएं)' },
      { id: 'role_matrix', label: 'Configure Full Granular Matrix for All Tabs/Sub-tabs (अनुमति मैट्रिक्स)' },
      { id: 'role_presets', label: 'Apply Role Presets & Permissions Copy (प्रीसेट टेम्प्लेट)' }
    ]
  },
  {
    id: 'settings',
    name: 'System Settings & Control Panel (सिस्टम सेटिंग्स व बैकअप)',
    category: 'Administration',
    icon: 'Settings',
    actions: ['view', 'create', 'edit', 'delete', 'export'],
    subFeatures: [
      { id: 'setting_global', label: 'Global School Settings & Logos (सामान्य सेटिंग्स)' },
      { id: 'setting_school', label: 'CBSE Affiliation Profile & Principal Info (स्कूल प्रोफाइल)' },
      { id: 'setting_session', label: 'Academic Sessions Management 2026-27 (शैक्षणिक सत्र)' },
      { id: 'setting_cron', label: 'Automated SMS & Period Bell Background Cron (ऑटोमेशन क्रॉन)' },
      { id: 'setting_backup', label: 'Database Backup Download & Restore (डेटाबेस बैकअप व रिस्टोर)' }
    ]
  }
];

export const MODULE_CATEGORIES = [
  'All Modules',
  'Core Portal',
  'Academics & Students',
  'Accounts & Finance',
  'HR & Staff',
  'Transport & Facilities',
  'Printing & Documents',
  'Communication',
  'Reports & Analytics',
  'Administration'
];

/**
 * Helper to generate full permission object for all modules
 */
export const createDefaultRolePermissions = () => {
  const master = {};
  ALL_MODULE_PERMISSIONS.forEach(mod => {
    master[mod.id] = {};
    mod.actions.forEach(action => {
      master[mod.id][action] = true;
    });
    if (mod.subFeatures) {
      mod.subFeatures.forEach(sub => {
        master[mod.id][sub.id] = true;
      });
    }
  });

  const makeRolePreset = (overrides = {}) => {
    const res = {};
    ALL_MODULE_PERMISSIONS.forEach(mod => {
      res[mod.id] = {};
      mod.actions.forEach(act => {
        res[mod.id][act] = false;
      });
      if (mod.subFeatures) {
        mod.subFeatures.forEach(sub => {
          res[mod.id][sub.id] = false;
        });
      }
    });

    Object.keys(overrides).forEach(modId => {
      if (res[modId]) {
        Object.keys(overrides[modId]).forEach(key => {
          res[modId][key] = overrides[modId][key];
        });
      }
    });
    return res;
  };

  return {
    "Super Admin": master,
    "Principal": makeRolePreset({
      dashboard: { view: true, export: true, stats_overview: true, quick_actions: true, fee_charts: true, attendance_charts: true, recent_activity: true },
      reception: { view: true, create: true, edit: true, delete: false, export: true, helpdesk_inquiries: true, helpdesk_grievance: true, visitor_pass: true, postal_dispatch: true, call_logs: true },
      admission: { view: true, create: true, edit: true, delete: false, export: true, admission_create: true, admission_online: true, students_import: true, admission_letter: true, admission_documents: true },
      students: { view: true, create: true, edit: true, delete: false, export: true, students_list: true, students_custom_list: true, students_inactive: true, student_profile_edit: true, student_guardian_info: true },
      staff: { view: true, create: true, edit: true, delete: false, export: true, staff_directory: true, staff_add: true, payroll: true, leave_management: true, staff_advance: true, staff_awards: true },
      student_accounting: { view: true, create: true, edit: true, delete: false, export: true, fees_pos: true, fees_dues: true, fees_allocation: true, fees_types: true, fees_siblings: true, fees_receipt_reprint: true },
      office_accounting: { view: true, create: false, edit: false, delete: false, export: true, office_deposit: true, office_expense: true, office_transactions: true, office_heads: true },
      supervision: { view: true, create: true, edit: true, delete: false, export: true, transport_routes: true, transport_stoppage: true, transport_assign: true, hostel_allocation: true, transport_maintenance: true },
      attendance: { view: true, create: true, edit: true, delete: false, export: true, attendance_students: true, attendance_staff: true, attendance_monthly_register: true, automatic_bell: true },
      academic: { view: true, create: true, edit: true, delete: false, export: true, acad_classes: true, acad_assign_teacher: true, acad_subjects: true, acad_timetable: true, acad_promotion: true },
      homework: { view: true, create: true, edit: true, delete: false, export: true, hw_daily: true, hw_evaluation: true },
      exam_master: { view: true, create: true, edit: true, delete: false, export: true, exam_term: true, exam_hall: true, exam_trait: true, exam_distribution: true, exam_schedule: true, exam_marks: true, exam_attendance: true, exam_generate_position: true, exam_grades_range: true },
      card_management: { view: true, create: true, edit: true, delete: false, export: true, card_student_id: true, card_employee_id: true, card_admit: true, cert_tc: true, cert_employee: true },
      inventory: { view: true, create: true, edit: true, delete: false, export: true, inventory_product: true, inventory_sales: true, inventory_category: true },
      library: { view: true, create: true, edit: true, delete: false, export: true, lib_books: true, lib_category: true, lib_my_issued: true, lib_issue_return: true },
      sms_notices: { view: true, create: true, edit: true, delete: false, export: true, sms_send: true, sms_report: true, sms_birthday_student: true, sms_birthday_staff: true },
      mailbox: { view: true, create: true, edit: true, delete: true, message_inbox: true, message_compose: true },
      reports: { view: true, export: true, reports_custom: true, reports_student: true, reports_fees: true, reports_financial: true, reports_attendance: true, reports_hr: true, reports_exam: true },
      branch_management: { view: true, create: false, edit: false, delete: false, branch_br01: true, branch_br02: true, branch_br03: true },
      frontend_cms: { view: true, create: true, edit: true, delete: false, fe_setting: true, fe_menu: true, fe_slider: true, fe_testimonial: true, fe_gallery: true },
      role_permissions: { view: true, create: false, edit: false, delete: false, role_manage: false, role_matrix: true, role_presets: false },
      settings: { view: true, create: false, edit: true, delete: false, export: true, setting_global: true, setting_school: true, setting_session: true, setting_cron: true, setting_backup: true }
    }),
    "Vice Principal": makeRolePreset({
      dashboard: { view: true, export: true, stats_overview: true, quick_actions: true, fee_charts: false, attendance_charts: true, recent_activity: true },
      reception: { view: true, create: true, edit: true, delete: false, export: true, helpdesk_inquiries: true, helpdesk_grievance: true, visitor_pass: true, postal_dispatch: true, call_logs: true },
      admission: { view: true, create: true, edit: true, delete: false, export: true, admission_create: true, admission_online: true, students_import: false, admission_letter: true, admission_documents: true },
      students: { view: true, create: false, edit: true, delete: false, export: true, students_list: true, students_custom_list: true, students_inactive: true, student_profile_edit: true, student_guardian_info: true },
      staff: { view: true, create: false, edit: false, delete: false, export: true, staff_directory: true, staff_add: false, payroll: false, leave_management: true, staff_advance: false, staff_awards: true },
      student_accounting: { view: true, create: false, edit: false, delete: false, export: true, fees_pos: false, fees_dues: true, fees_allocation: false, fees_types: false, fees_siblings: false, fees_receipt_reprint: false },
      supervision: { view: true, create: true, edit: true, delete: false, export: true, transport_routes: true, transport_stoppage: true, transport_assign: true, hostel_allocation: true, transport_maintenance: true },
      attendance: { view: true, create: true, edit: true, delete: false, export: true, attendance_students: true, attendance_staff: true, attendance_monthly_register: true, automatic_bell: true },
      academic: { view: true, create: true, edit: true, delete: false, export: true, acad_classes: true, acad_assign_teacher: true, acad_subjects: true, acad_timetable: true, acad_promotion: true },
      homework: { view: true, create: true, edit: true, delete: false, export: true, hw_daily: true, hw_evaluation: true },
      exam_master: { view: true, create: true, edit: true, delete: false, export: true, exam_term: true, exam_hall: true, exam_trait: true, exam_distribution: true, exam_schedule: true, exam_marks: true, exam_attendance: true, exam_generate_position: true, exam_grades_range: true },
      card_management: { view: true, create: true, edit: true, delete: false, export: true, card_student_id: true, card_employee_id: true, card_admit: true, cert_tc: true, cert_employee: true },
      library: { view: true, create: true, edit: true, delete: false, export: true, lib_books: true, lib_category: true, lib_my_issued: true, lib_issue_return: true },
      sms_notices: { view: true, create: true, edit: true, delete: false, export: true, sms_send: true, sms_report: true, sms_birthday_student: true, sms_birthday_staff: true },
      mailbox: { view: true, create: true, edit: true, delete: true, message_inbox: true, message_compose: true },
      reports: { view: true, export: true, reports_custom: true, reports_student: true, reports_fees: false, reports_financial: false, reports_attendance: true, reports_hr: false, reports_exam: true }
    }),
    "Accountant": makeRolePreset({
      dashboard: { view: true, export: true, stats_overview: true, quick_actions: true, fee_charts: true, attendance_charts: false, recent_activity: true },
      reception: { view: true, create: false, edit: false, delete: false, export: false, helpdesk_inquiries: true, helpdesk_grievance: false, visitor_pass: false, postal_dispatch: false, call_logs: false },
      admission: { view: true, create: false, edit: false, delete: false, export: false, admission_create: false, admission_online: true, students_import: false, admission_letter: false, admission_documents: false },
      students: { view: true, create: false, edit: false, delete: false, export: true, students_list: true, students_custom_list: true, students_inactive: true, student_profile_edit: false, student_guardian_info: true },
      staff: { view: true, create: false, edit: false, delete: false, export: true, staff_directory: true, staff_add: false, payroll: true, leave_management: false, staff_advance: true, staff_awards: false },
      student_accounting: { view: true, create: true, edit: true, delete: false, export: true, fees_pos: true, fees_dues: true, fees_allocation: true, fees_types: true, fees_siblings: true, fees_receipt_reprint: true },
      office_accounting: { view: true, create: true, edit: true, delete: false, export: true, office_deposit: true, office_expense: true, office_transactions: true, office_heads: true },
      supervision: { view: true, create: false, edit: false, delete: false, export: true, transport_routes: true, transport_stoppage: true, transport_assign: true, hostel_allocation: false, transport_maintenance: true },
      inventory: { view: true, create: true, edit: true, delete: false, export: true, inventory_product: true, inventory_sales: true, inventory_category: true },
      sms_notices: { view: true, create: true, edit: true, delete: false, export: true, sms_send: true, sms_report: true, sms_birthday_student: false, sms_birthday_staff: false },
      mailbox: { view: true, create: true, edit: true, delete: true, message_inbox: true, message_compose: true },
      reports: { view: true, export: true, reports_custom: true, reports_student: true, reports_fees: true, reports_financial: true, reports_attendance: false, reports_hr: true, reports_exam: false }
    }),
    "Teacher": makeRolePreset({
      dashboard: { view: true, export: false, stats_overview: true, quick_actions: false, fee_charts: false, attendance_charts: true, recent_activity: false },
      students: { view: true, create: false, edit: false, delete: false, export: false, students_list: true, students_custom_list: false, students_inactive: false, student_profile_edit: false, student_guardian_info: false },
      staff: { view: true, create: false, edit: false, delete: false, export: false, staff_directory: true, staff_add: false, payroll: false, leave_management: true, staff_advance: false, staff_awards: true },
      attendance: { view: true, create: true, edit: true, delete: false, export: true, attendance_students: true, attendance_staff: false, attendance_monthly_register: true, automatic_bell: false },
      academic: { view: true, create: false, edit: false, delete: false, export: false, acad_classes: true, acad_assign_teacher: false, acad_subjects: true, acad_timetable: true, acad_promotion: false },
      homework: { view: true, create: true, edit: true, delete: true, export: true, hw_daily: true, hw_evaluation: true },
      exam_master: { view: true, create: true, edit: true, delete: false, export: true, exam_term: false, exam_hall: false, exam_trait: true, exam_distribution: false, exam_schedule: true, exam_marks: true, exam_attendance: true, exam_generate_position: false, exam_grades_range: false },
      card_management: { view: true, create: false, edit: false, delete: false, export: true, card_student_id: false, card_employee_id: false, card_admit: true, cert_tc: false, cert_employee: false },
      library: { view: true, create: false, edit: false, delete: false, export: false, lib_books: true, lib_category: false, lib_my_issued: true, lib_issue_return: false },
      mailbox: { view: true, create: true, edit: true, delete: true, message_inbox: true, message_compose: true }
    }),
    "Librarian": makeRolePreset({
      dashboard: { view: true, export: false, stats_overview: true, quick_actions: false, fee_charts: false, attendance_charts: false, recent_activity: false },
      students: { view: true, create: false, edit: false, delete: false, export: false, students_list: true, students_custom_list: false, students_inactive: false, student_profile_edit: false, student_guardian_info: false },
      staff: { view: true, create: false, edit: false, delete: false, export: false, staff_directory: true, staff_add: false, payroll: false, leave_management: true, staff_advance: false, staff_awards: false },
      library: { view: true, create: true, edit: true, delete: true, export: true, lib_books: true, lib_category: true, lib_my_issued: true, lib_issue_return: true },
      inventory: { view: true, create: true, edit: true, delete: false, export: true, inventory_product: true, inventory_sales: false, inventory_category: true },
      mailbox: { view: true, create: true, edit: true, delete: true, message_inbox: true, message_compose: true }
    }),
    "Transport Manager": makeRolePreset({
      dashboard: { view: true, export: false, stats_overview: true, quick_actions: false, fee_charts: false, attendance_charts: false, recent_activity: false },
      students: { view: true, create: false, edit: false, delete: false, export: true, students_list: true, students_custom_list: false, students_inactive: false, student_profile_edit: false, student_guardian_info: true },
      staff: { view: true, create: false, edit: false, delete: false, export: false, staff_directory: true, staff_add: false, payroll: false, leave_management: true, staff_advance: false, staff_awards: false },
      supervision: { view: true, create: true, edit: true, delete: true, export: true, transport_routes: true, transport_stoppage: true, transport_assign: true, hostel_allocation: false, transport_maintenance: true },
      student_accounting: { view: true, create: false, edit: false, delete: false, export: true, fees_pos: false, fees_dues: true, fees_allocation: false, fees_types: false, fees_siblings: false, fees_receipt_reprint: false },
      sms_notices: { view: true, create: true, edit: true, delete: false, export: true, sms_send: true, sms_report: true, sms_birthday_student: false, sms_birthday_staff: false },
      mailbox: { view: true, create: true, edit: true, delete: true, message_inbox: true, message_compose: true },
      reports: { view: true, export: true, reports_custom: false, reports_student: true, reports_fees: true, reports_financial: false, reports_attendance: false, reports_hr: false, reports_exam: false }
    }),
    "Receptionist": makeRolePreset({
      dashboard: { view: true, export: false, stats_overview: true, quick_actions: true, fee_charts: false, attendance_charts: false, recent_activity: false },
      reception: { view: true, create: true, edit: true, delete: false, export: true, helpdesk_inquiries: true, helpdesk_grievance: true, visitor_pass: true, postal_dispatch: true, call_logs: true },
      admission: { view: true, create: true, edit: false, delete: false, export: false, admission_create: true, admission_online: true, students_import: false, admission_letter: true, admission_documents: true },
      students: { view: true, create: false, edit: false, delete: false, export: false, students_list: true, students_custom_list: false, students_inactive: false, student_profile_edit: false, student_guardian_info: true },
      sms_notices: { view: true, create: true, edit: true, delete: false, export: true, sms_send: true, sms_report: true, sms_birthday_student: true, sms_birthday_staff: true },
      mailbox: { view: true, create: true, edit: true, delete: true, message_inbox: true, message_compose: true }
    }),
    "Parent": makeRolePreset({
      dashboard: { view: true, export: false, stats_overview: false, quick_actions: false, fee_charts: false, attendance_charts: false, recent_activity: false },
      students: { view: true, create: false, edit: false, delete: false, export: false, students_list: true, students_custom_list: false, students_inactive: false, student_profile_edit: false, student_guardian_info: true },
      student_accounting: { view: true, create: false, edit: false, delete: false, export: false, fees_pos: false, fees_dues: true, fees_allocation: false, fees_types: false, fees_siblings: false, fees_receipt_reprint: true },
      attendance: { view: true, create: false, edit: false, delete: false, export: false, attendance_students: true, attendance_staff: false, attendance_monthly_register: true, automatic_bell: false },
      academic: { view: true, create: false, edit: false, delete: false, export: false, acad_classes: false, acad_assign_teacher: false, acad_subjects: true, acad_timetable: true, acad_promotion: false },
      homework: { view: true, create: false, edit: false, delete: false, export: false, hw_daily: true, hw_evaluation: true },
      exam_master: { view: true, create: false, edit: false, delete: false, export: true, exam_term: false, exam_hall: false, exam_trait: false, exam_distribution: false, exam_schedule: true, exam_marks: true, exam_attendance: false, exam_generate_position: false, exam_grades_range: false },
      card_management: { view: true, create: false, edit: false, delete: false, export: true, card_student_id: true, card_employee_id: false, card_admit: true, cert_tc: false, cert_employee: false },
      library: { view: true, create: false, edit: false, delete: false, export: false, lib_books: true, lib_category: false, lib_my_issued: true, lib_issue_return: false },
      mailbox: { view: true, create: true, edit: false, delete: false, message_inbox: true, message_compose: true }
    }),
    "Student": makeRolePreset({
      dashboard: { view: true, export: false, stats_overview: false, quick_actions: false, fee_charts: false, attendance_charts: false, recent_activity: false },
      students: { view: true, create: false, edit: false, delete: false, export: false, students_list: true, students_custom_list: false, students_inactive: false, student_profile_edit: false, student_guardian_info: false },
      attendance: { view: true, create: false, edit: false, delete: false, export: false, attendance_students: true, attendance_staff: false, attendance_monthly_register: true, automatic_bell: false },
      academic: { view: true, create: false, edit: false, delete: false, export: false, acad_classes: false, acad_assign_teacher: false, acad_subjects: true, acad_timetable: true, acad_promotion: false },
      homework: { view: true, create: false, edit: false, delete: false, export: false, hw_daily: true, hw_evaluation: true },
      exam_master: { view: true, create: false, edit: false, delete: false, export: true, exam_term: false, exam_hall: false, exam_trait: false, exam_distribution: false, exam_schedule: true, exam_marks: true, exam_attendance: false, exam_generate_position: false, exam_grades_range: false },
      card_management: { view: true, create: false, edit: false, delete: false, export: true, card_student_id: true, card_employee_id: false, card_admit: true, cert_tc: false, cert_employee: false },
      library: { view: true, create: false, edit: false, delete: false, export: false, lib_books: true, lib_category: false, lib_my_issued: true, lib_issue_return: false },
      mailbox: { view: true, create: true, edit: false, delete: false, message_inbox: true, message_compose: true }
    })
  };
};
