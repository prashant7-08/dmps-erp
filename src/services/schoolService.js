import { initialSchoolData } from './mockData';

const STORAGE_KEY = 'EDUPRO_SCHOOL_MANAGEMENT_DB_V2';

class SchoolService {
  constructor() {
    this.listeners = new Set();
    this.data = this.loadData();
  }

  loadData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Auto-merge: Ensure any new seed students or branches are never missed
        if (parsed) {
          if (Array.isArray(parsed.students)) {
            initialSchoolData.students.forEach(seedStu => {
              if (!parsed.students.some(s => s.id === seedStu.id)) {
                parsed.students.push(seedStu);
              }
            });
          }
          if (!parsed.branches || parsed.branches.length < 4) {
            parsed.branches = JSON.parse(JSON.stringify(initialSchoolData.branches));
          }
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading data from localStorage', e);
    }
    const fresh = JSON.parse(JSON.stringify(initialSchoolData));
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
    } catch (e) {}
    return fresh;
  }

  saveData() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
      this.notify();
    } catch (e) {
      console.error('Error saving data to localStorage', e);
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(cb => {
      try {
        cb(this.data);
      } catch (err) {
        console.error('Subscriber callback error', err);
      }
    });
  }

  // Database Administration
  resetDatabase() {
    this.data = JSON.parse(JSON.stringify(initialSchoolData));
    this.saveData();
    return this.data;
  }

  exportDatabaseJSON() {
    return JSON.stringify(this.data, null, 2);
  }

  importDatabaseJSON(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.schoolInfo && parsed.students && parsed.teachers) {
        this.data = parsed;
        this.saveData();
        return { success: true };
      }
      return { success: false, error: 'Invalid school database format' };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  // School Setup / Info
  getSchoolInfo() {
    return this.data.schoolInfo;
  }

  updateSchoolInfo(updates) {
    this.data.schoolInfo = { ...this.data.schoolInfo, ...updates };
    this.saveData();
    return this.data.schoolInfo;
  }

  // Branch Management (Multi-Branch ERP)
  getBranches() {
    return this.data.branches || initialSchoolData.branches || [];
  }

  getBranchById(id) {
    return this.getBranches().find(b => b.id === id || b.code === id);
  }

  updateBranch(id, updates) {
    if (!this.data.branches) {
      this.data.branches = JSON.parse(JSON.stringify(initialSchoolData.branches));
    }
    const idx = this.data.branches.findIndex(b => b.id === id);
    if (idx !== -1) {
      this.data.branches[idx] = { ...this.data.branches[idx], ...updates };
      this.saveData();
      return this.data.branches[idx];
    }
    return null;
  }

  addBranch(branchData) {
    if (!this.data.branches) {
      this.data.branches = JSON.parse(JSON.stringify(initialSchoolData.branches));
    }
    const newBranch = {
      id: `BR-0${this.data.branches.length + 1}`,
      code: `BR-0${this.data.branches.length + 1}`,
      shortCode: `BR${this.data.branches.length + 1}`,
      status: "Active",
      totalStudents: 0,
      totalStaff: 0,
      isMain: false,
      ...branchData
    };
    this.data.branches.push(newBranch);
    this.saveData();
    return newBranch;
  }

  // Students Module
  getStudents() {
    return this.data.students || [];
  }

  getStudentById(id) {
    return this.data.students.find(s => s.id === id || s.admissionNo === id || s.rollNo === id);
  }

  addStudent(studentData) {
    const newId = `STU-2026-${String(this.data.students.length + 1).padStart(3, '0')}`;
    const newAdm = `ADM-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newStudent = {
      id: newId,
      admissionNo: studentData.admissionNo || newAdm,
      rollNo: studentData.rollNo || String(this.data.students.length + 101),
      status: "Active",
      academicSession: this.data.schoolInfo.academicSession,
      admissionDate: new Date().toISOString().split('T')[0],
      attendanceSummary: { totalDays: 88, presentDays: 84, percentage: 95.4 },
      feeSummary: { totalDue: 45000, totalPaid: 0, balance: 45000, status: "Pending" },
      ...studentData
    };
    this.data.students.unshift(newStudent);
    this.saveData();
    return newStudent;
  }

  updateStudent(id, updates) {
    const idx = this.data.students.findIndex(s => s.id === id);
    if (idx !== -1) {
      this.data.students[idx] = { ...this.data.students[idx], ...updates };
      this.saveData();
      return this.data.students[idx];
    }
    return null;
  }

  deleteStudent(id) {
    this.data.students = this.data.students.filter(s => s.id !== id);
    this.saveData();
  }

  // Teachers & Staff
  getTeachers() {
    return this.data.teachers || [];
  }

  addTeacher(teacherData) {
    const newId = `TCH-${1000 + this.data.teachers.length + 1}`;
    const newEmp = `EMP-2026-${String(this.data.teachers.length + 50).padStart(3, '0')}`;
    const newTeacher = {
      id: newId,
      employeeId: newEmp,
      joiningDate: new Date().toISOString().split('T')[0],
      employmentType: "Permanent",
      ...teacherData
    };
    this.data.teachers.unshift(newTeacher);
    this.saveData();
    return newTeacher;
  }

  updateTeacher(id, updates) {
    const idx = this.data.teachers.findIndex(t => t.id === id);
    if (idx !== -1) {
      this.data.teachers[idx] = { ...this.data.teachers[idx], ...updates };
      this.saveData();
      return this.data.teachers[idx];
    }
    return null;
  }

  deleteTeacher(id) {
    this.data.teachers = this.data.teachers.filter(t => t.id !== id);
    this.saveData();
  }

  // Academics & Classes
  getClasses() {
    return this.data.classes || [];
  }

  addClass(classData) {
    const newId = `CLS-${String(this.data.classes.length + 1).padStart(2, '0')}`;
    let sections = classData.sections;
    if (typeof sections === 'string') {
      sections = sections.split(',').map(s => s.trim()).filter(Boolean);
    }
    if (!sections || sections.length === 0) {
      sections = ['A'];
    }
    const newClass = {
      id: newId,
      name: classData.name,
      sections,
      wing: classData.wing || 'Primary',
      maxStrength: Number(classData.maxStrength) || 40,
      roomNo: classData.roomNo || '',
      classTeacher: classData.classTeacher || ''
    };
    this.data.classes.push(newClass);
    this.saveData();
    return newClass;
  }

  updateClass(id, updates) {
    const idx = this.data.classes.findIndex(c => c.id === id);
    if (idx !== -1) {
      let sections = updates.sections !== undefined ? updates.sections : this.data.classes[idx].sections;
      if (typeof sections === 'string') {
        sections = sections.split(',').map(s => s.trim()).filter(Boolean);
      }
      this.data.classes[idx] = {
        ...this.data.classes[idx],
        ...updates,
        sections: sections && sections.length > 0 ? sections : this.data.classes[idx].sections,
        maxStrength: updates.maxStrength !== undefined ? Number(updates.maxStrength) : this.data.classes[idx].maxStrength
      };
      this.saveData();
      return this.data.classes[idx];
    }
    return null;
  }

  deleteClass(id) {
    this.data.classes = this.data.classes.filter(c => c.id !== id);
    this.saveData();
  }

  addSectionToClass(classId, sectionName) {
    const cls = this.data.classes.find(c => c.id === classId);
    if (cls) {
      const trimmed = sectionName.trim().toUpperCase();
      if (trimmed && !cls.sections.includes(trimmed)) {
        cls.sections.push(trimmed);
        this.saveData();
        return cls;
      }
    }
    return null;
  }

  removeSectionFromClass(classId, sectionName) {
    const cls = this.data.classes.find(c => c.id === classId);
    if (cls) {
      cls.sections = cls.sections.filter(s => s !== sectionName);
      if (cls.sections.length === 0) {
        cls.sections = ['A'];
      }
      this.saveData();
      return cls;
    }
    return null;
  }

  getSubjects() {
    return this.data.subjects || [];
  }

  addSubject(subjectData) {
    const newId = `SUB-${String(this.data.subjects.length + 1).padStart(2, '0')}`;
    const newSubject = { id: newId, ...subjectData };
    this.data.subjects.push(newSubject);
    this.saveData();
    return newSubject;
  }

  updateSubject(id, updates) {
    const idx = this.data.subjects.findIndex(s => s.id === id);
    if (idx !== -1) {
      this.data.subjects[idx] = { ...this.data.subjects[idx], ...updates };
      this.saveData();
      return this.data.subjects[idx];
    }
    return null;
  }

  deleteSubject(id) {
    this.data.subjects = this.data.subjects.filter(s => s.id !== id);
    this.saveData();
  }

  // Timetable
  getTimetables() {
    return this.data.timetables || [];
  }

  // Fees & Invoices
  getFeeInvoices() {
    return this.data.feeInvoices || [];
  }

  getFeeStructures() {
    return this.data.feeStructures || [];
  }

  // Sibling Management
  getLinkedSiblings(studentId) {
    const student = this.getStudentById(studentId);
    if (!student) return [];

    const allStudents = this.getStudents();
    const siblingIds = student.linkedSiblingIds || [];
    
    return allStudents.filter(s => {
      if (s.id === studentId) return false;
      // Direct explicit linked sibling IDs
      if (siblingIds.includes(s.id)) return true;
      if (s.linkedSiblingIds && s.linkedSiblingIds.includes(studentId)) return true;
      // Same Family ID fallback if exists
      if (student.familyId && s.familyId === student.familyId) return true;
      return false;
    });
  }

  addSiblingToStudent(mainStudentId, siblingStudentId) {
    if (!mainStudentId || !siblingStudentId || mainStudentId === siblingStudentId) return;
    const main = this.getStudentById(mainStudentId);
    const sib = this.getStudentById(siblingStudentId);
    if (!main || !sib) return;

    if (!main.linkedSiblingIds) main.linkedSiblingIds = [];
    if (!sib.linkedSiblingIds) sib.linkedSiblingIds = [];

    // All existing siblings of main + sibling
    const allGroupIds = Array.from(new Set([mainStudentId, siblingStudentId, ...main.linkedSiblingIds, ...sib.linkedSiblingIds]));

    // Cross-link everyone in this group so any member sees all other siblings
    allGroupIds.forEach(id => {
      const s = this.getStudentById(id);
      if (s) {
        s.linkedSiblingIds = allGroupIds.filter(otherId => otherId !== id);
      }
    });

    this.saveData();
    return this.getLinkedSiblings(mainStudentId);
  }

  removeSiblingFromStudent(mainStudentId, siblingStudentId) {
    const main = this.getStudentById(mainStudentId);
    const sib = this.getStudentById(siblingStudentId);
    if (main && main.linkedSiblingIds) {
      main.linkedSiblingIds = main.linkedSiblingIds.filter(id => id !== siblingStudentId);
    }
    if (sib && sib.linkedSiblingIds) {
      sib.linkedSiblingIds = sib.linkedSiblingIds.filter(id => id !== mainStudentId);
    }
    this.saveData();
    return this.getLinkedSiblings(mainStudentId);
  }

  linkStudentsAsFamily({ studentIds = [], familyName = 'Family Group', guardianName = '' }) {
    if (studentIds.length < 2) return null;
    
    studentIds.forEach(sid => {
      const stu = this.getStudentById(sid);
      if (stu) {
        stu.linkedSiblingIds = studentIds.filter(id => id !== sid);
      }
    });

    this.saveData();
    return true;
  }

  unlinkStudentFromFamily(studentId) {
    const student = this.getStudentById(studentId);
    if (student) {
      const oldSiblings = student.linkedSiblingIds || [];
      student.linkedSiblingIds = [];

      oldSiblings.forEach(sid => {
        const s = this.getStudentById(sid);
        if (s && s.linkedSiblingIds) {
          s.linkedSiblingIds = s.linkedSiblingIds.filter(id => id !== studentId);
        }
      });

      this.saveData();
    }
  }

  getAllFamilyGroups() {
    const students = this.getStudents();
    const groupsMap = new Map();

    students.forEach(s => {
      const famKey = s.familyId || (s.linkedSiblingIds && s.linkedSiblingIds.length > 0 ? `LINK-${[s.id, ...s.linkedSiblingIds].sort().join('-')}` : null);
      if (famKey) {
        if (!groupsMap.has(famKey)) {
          groupsMap.set(famKey, {
            familyId: famKey,
            familyName: s.familyName || `${s.name.split(' ').pop()} Family Group`,
            guardianName: s.guardianName || s.parents?.fatherName || 'Family Guardian',
            members: []
          });
        }
        const grp = groupsMap.get(famKey);
        if (!grp.members.some(m => m.id === s.id)) {
          grp.members.push(s);
        }
      }
    });

    // Compute totals for each family
    return Array.from(groupsMap.values()).map(grp => {
      // Sort members so elder child (higher class / age) is primary
      grp.members.sort((a, b) => {
        const classNumA = parseInt(a.class.replace(/\D/g, '')) || 0;
        const classNumB = parseInt(b.class.replace(/\D/g, '')) || 0;
        return classNumB - classNumA;
      });

      const primary = grp.members[0];
      const totalDue = grp.members.reduce((acc, m) => acc + (m.feeSummary?.totalDue || 45000), 0);
      const totalPaid = grp.members.reduce((acc, m) => acc + (m.feeSummary?.totalPaid || 0), 0);
      const totalBalance = grp.members.reduce((acc, m) => acc + (m.feeSummary?.balance || 0), 0);

      return {
        ...grp,
        primaryStudent: primary,
        totalCombinedDue: totalDue,
        totalCombinedPaid: totalPaid,
        totalCombinedBalance: totalBalance
      };
    });
  }

  collectFee({ studentId, amountPaid, paymentMode, remarks, discount = 0, fine = 0, isFamilyPayment = false, siblingAllocations = [], customReceiptNo = '' }) {
    const primaryStudent = this.getStudentById(studentId);
    const invoiceNo = `REC-2026/${Math.floor(1000 + Math.random() * 9000)}`;
    
    // If custom receipt number is provided by user, use it; otherwise auto-generate
    const trimmedCustomReceipt = customReceiptNo ? String(customReceiptNo).trim() : '';
    const receiptNo = trimmedCustomReceipt || (isFamilyPayment ? `RCPT-FAM-${Math.floor(8000 + Math.random() * 2000)}` : `RCPT-${Math.floor(8000 + Math.random() * 2000)}`);
    const txnId = `${paymentMode.toUpperCase().replace(/[^A-Z]/g, '')}/TXN/${Date.now().toString().slice(-8)}`;

    // CASE 1: CONSOLIDATED SIBLING PAYMENT
    if (isFamilyPayment && siblingAllocations && siblingAllocations.length > 0) {
      const breakdown = [];
      let totalAmountProcessed = 0;
      let totalDiscount = discount;
      let totalFine = fine;

      siblingAllocations.forEach((alloc, idx) => {
        const stu = this.getStudentById(alloc.studentId);
        if (!stu) return;

        const allocPaid = Number(alloc.amountPaid) || 0;
        totalAmountProcessed += allocPaid;

        const currentPaid = (stu.feeSummary?.totalPaid || 0) + allocPaid;
        const totalDue = stu.feeSummary?.totalDue || 45000;
        const newBalance = Math.max(0, totalDue - currentPaid);
        const newStatus = newBalance === 0 ? "Paid" : currentPaid > 0 ? "Partial" : "Overdue";

        // Update student individual fee summary
        stu.feeSummary = {
          totalDue,
          totalPaid: currentPaid,
          balance: newBalance,
          status: newStatus
        };

        // Record individual sub-invoice for student records & individual slip
        const subInvoice = {
          id: `INV-2026-${Date.now().toString().slice(-4)}-${idx + 1}`,
          invoiceNo,
          receiptNo: trimmedCustomReceipt ? `${trimmedCustomReceipt}/${String(idx + 1).padStart(2, '0')}` : `${receiptNo}/${String(idx + 1).padStart(2, '0')}`,
          studentId: stu.id,
          studentName: stu.name,
          class: `${stu.class}-${stu.section || 'A'}`,
          rollNo: stu.rollNo,
          feeType: alloc.remarks || remarks || `Term Fee (Consolidated via ${primaryStudent?.name || 'Elder Sibling'})`,
          amount: totalDue,
          discount: Number(alloc.discount || 0),
          fine: Number(alloc.fine || 0),
          paidAmount: allocPaid,
          dueAmount: newBalance,
          dueDate: new Date().toISOString().split('T')[0],
          paymentDate: new Date().toISOString().split('T')[0],
          status: newStatus,
          paymentMode,
          transactionId: txnId,
          isFamilyLinked: true,
          isCombinedFamilyInvoice: false,
          familyReceiptRef: receiptNo,
          primaryStudentName: primaryStudent?.name,
          primaryStudentId: primaryStudent?.id
        };

        this.data.feeInvoices.unshift(subInvoice);

        breakdown.push({
          studentId: stu.id,
          name: stu.name,
          class: `${stu.class}-${stu.section || 'A'}`,
          rollNo: stu.rollNo,
          allocatedPaid: allocPaid,
          remainingBalance: newBalance,
          totalDue: totalDue,
          status: newStatus
        });
      });

      // Master Combined Sibling Invoice
      const masterInvoice = {
        id: `INV-2026-${Date.now().toString().slice(-4)}-MASTER`,
        invoiceNo,
        receiptNo,
        studentId: primaryStudent?.id || studentId,
        studentName: primaryStudent?.name || "Student",
        class: `${primaryStudent?.class || "Class 10"}-${primaryStudent?.section || "A"}`,
        rollNo: primaryStudent?.rollNo || "101",
        feeType: remarks || "Consolidated Sibling Fee Settlement",
        amount: breakdown.reduce((acc, b) => acc + b.totalDue, 0),
        discount: totalDiscount,
        fine: totalFine,
        paidAmount: totalAmountProcessed,
        dueAmount: breakdown.reduce((acc, b) => acc + b.remainingBalance, 0),
        dueDate: new Date().toISOString().split('T')[0],
        paymentDate: new Date().toISOString().split('T')[0],
        status: breakdown.every(b => b.remainingBalance === 0) ? "Paid" : "Partial",
        paymentMode,
        transactionId: txnId,
        isCombinedFamilyInvoice: true,
        siblingBreakdown: breakdown
      };

      this.data.feeInvoices.unshift(masterInvoice);
      this.saveData();
      return masterInvoice;
    }

    // CASE 2: SINGLE STUDENT PAYMENT
    const currentPaid = (primaryStudent?.feeSummary?.totalPaid || 0) + Number(amountPaid);
    const totalDue = primaryStudent?.feeSummary?.totalDue || 45000;
    const newBalance = Math.max(0, totalDue - currentPaid);
    const newStatus = newBalance === 0 ? "Paid" : "Partial";

    if (primaryStudent) {
      primaryStudent.feeSummary = {
        totalDue,
        totalPaid: currentPaid,
        balance: newBalance,
        status: newStatus
      };
    }

    const newInvoice = {
      id: `INV-2026-${Date.now().toString().slice(-4)}`,
      invoiceNo,
      receiptNo,
      studentId,
      studentName: primaryStudent?.name || "Student",
      class: `${primaryStudent?.class || "Class 10"}-${primaryStudent?.section || "A"}`,
      rollNo: primaryStudent?.rollNo || "101",
      feeType: remarks || "Term 2 Tuition & Development Fee",
      amount: totalDue,
      discount: Number(discount),
      fine: Number(fine),
      paidAmount: Number(amountPaid),
      dueAmount: newBalance,
      dueDate: new Date().toISOString().split('T')[0],
      paymentDate: new Date().toISOString().split('T')[0],
      status: newStatus,
      paymentMode,
      transactionId: txnId,
      isCombinedFamilyInvoice: false
    };

    this.data.feeInvoices.unshift(newInvoice);

    // Add to accounts income
    if (this.data.accounting) {
      this.data.accounting.incomeToday += Number(amountPaid);
      this.data.accounting.recentTransactions.unshift({
        id: `TXN-${Date.now().toString().slice(-4)}`,
        type: "Income",
        category: "Student Fee Collection",
        amount: Number(amountPaid),
        date: new Date().toISOString().split('T')[0],
        ref: receiptNo,
        mode: paymentMode
      });
    }

    this.saveData();
    return newInvoice;
  }

  // Attendance Module
  markStudentAttendance(date, attendanceRecords) {
    if (!this.data.studentAttendance) this.data.studentAttendance = {};
    this.data.studentAttendance[date] = attendanceRecords;
    this.saveData();
    return this.data.studentAttendance[date];
  }

  getAttendanceForDate(date) {
    if (this.data.studentAttendance && this.data.studentAttendance[date]) {
      return this.data.studentAttendance[date];
    }
    // Generate default based on current students
    return this.getStudents().map(s => ({
      studentId: s.id,
      name: s.name,
      rollNo: s.rollNo,
      class: s.class,
      section: s.section,
      status: s.id === 'STU-2026-003' ? 'Absent' : 'Present',
      remarks: ''
    }));
  }

  // Exams & Marks
  getExams() {
    return this.data.exams || [];
  }

  getMarks() {
    return this.data.marks || [];
  }

  getStudentMarks(studentId, examId) {
    return this.data.marks.find(m => m.studentId === studentId && (!examId || m.examId === examId));
  }

  saveMarks(marksEntry) {
    const idx = this.data.marks.findIndex(m => m.studentId === marksEntry.studentId && m.examId === marksEntry.examId);
    if (idx !== -1) {
      this.data.marks[idx] = { ...this.data.marks[idx], ...marksEntry };
    } else {
      this.data.marks.push(marksEntry);
    }
    this.saveData();
    return marksEntry;
  }

  // Admin & Staff Daily Task & Action Planner
  getTasks() {
    if (!this.data.tasks || this.data.tasks.length === 0) {
      this.data.tasks = [
        {
          id: 'TSK-101',
          title: 'Verify CBSE Board Exam Registration Data for Class 10 & 12',
          description: 'Match student Aadhaar and subject codes with board portal',
          priority: 'urgent',
          category: 'Academics',
          dueDate: 'Today',
          completed: false,
          assignedTo: 'Academic In-Charge',
          createdAt: new Date().toISOString().split('T')[0]
        },
        {
          id: 'TSK-102',
          title: 'Follow-up with Term 2 Sibling Fee Defaulters',
          description: 'Call parents with balance > ₹20,000 for POS settlement',
          priority: 'urgent',
          category: 'Fees & Accounts',
          dueDate: 'Today',
          completed: false,
          assignedTo: 'Accounts Officer',
          createdAt: new Date().toISOString().split('T')[0]
        },
        {
          id: 'TSK-103',
          title: 'Finalize Mid-Term Question Paper Blueprints',
          description: 'Review Science and Mathematics papers for Class 9 & 10',
          priority: 'today',
          category: 'Examinations',
          dueDate: 'Today',
          completed: true,
          assignedTo: 'Examination Cell',
          createdAt: new Date().toISOString().split('T')[0]
        },
        {
          id: 'TSK-104',
          title: 'Inspect School Bus Fleet Route #4 & #7 Speed Governors',
          description: 'Routine safety audit and driver logbook verification',
          priority: 'soon',
          category: 'Transport',
          dueDate: 'Tomorrow',
          completed: false,
          assignedTo: 'Transport Manager',
          createdAt: new Date().toISOString().split('T')[0]
        },
        {
          id: 'TSK-105',
          title: 'Submit Monthly Teacher Bio-Metric Attendance to Portal',
          description: 'Generate monthly percentage summary for payroll processing',
          priority: 'today',
          category: 'Administration',
          dueDate: 'Today',
          completed: false,
          assignedTo: 'Principal Office',
          createdAt: new Date().toISOString().split('T')[0]
        }
      ];
      this.saveData();
    }
    return this.data.tasks;
  }

  addTask(taskData) {
    if (!this.data.tasks) this.data.tasks = [];
    const newTask = {
      id: `TSK-${Date.now().toString().slice(-4)}`,
      title: taskData.title || 'Untitled Task',
      description: taskData.description || '',
      priority: taskData.priority || 'today', // 'urgent' | 'today' | 'soon' | 'later'
      category: taskData.category || 'General',
      dueDate: taskData.dueDate || 'Today',
      completed: false,
      assignedTo: taskData.assignedTo || 'Admin',
      createdAt: new Date().toISOString().split('T')[0]
    };
    this.data.tasks.unshift(newTask);
    this.saveData();
    return newTask;
  }

  toggleTaskStatus(taskId) {
    if (!this.data.tasks) return null;
    const task = this.data.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      this.saveData();
      return task;
    }
    return null;
  }

  deleteTask(taskId) {
    if (!this.data.tasks) return false;
    this.data.tasks = this.data.tasks.filter(t => t.id !== taskId);
    this.saveData();
    return true;
  }

  // Homework
  getHomework() {
    return this.data.homework || [];
  }

  addHomework(hwData) {
    const newHw = {
      id: `HW-${String((this.data.homework || []).length + 1).padStart(2, '0')}`,
      issueDate: new Date().toISOString().split('T')[0],
      submissionsCount: 0,
      totalStudents: 42,
      status: "Active",
      ...hwData
    };
    if (!this.data.homework) this.data.homework = [];
    this.data.homework.unshift(newHw);
    this.saveData();
    return newHw;
  }

  // Library
  getBooks() {
    return this.data.libraryBooks || [];
  }

  getBookIssues() {
    return this.data.bookIssues || [];
  }

  issueBook(bookId, studentId, dueDate) {
    const book = this.data.libraryBooks.find(b => b.id === bookId);
    const student = this.getStudentById(studentId);
    if (!book || book.available <= 0 || !student) return null;

    book.available -= 1;
    const newIssue = {
      id: `ISS-${Math.floor(1000 + Math.random() * 9000)}`,
      bookId: book.id,
      bookTitle: book.title,
      studentId: student.id,
      studentName: student.name,
      class: `${student.class}-${student.section}`,
      issueDate: new Date().toISOString().split('T')[0],
      dueDate: dueDate || new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0],
      returnDate: null,
      fine: 0,
      status: "Issued"
    };
    this.data.bookIssues.unshift(newIssue);
    this.saveData();
    return newIssue;
  }

  returnBook(issueId) {
    const issue = this.data.bookIssues.find(i => i.id === issueId);
    if (!issue) return null;
    issue.returnDate = new Date().toISOString().split('T')[0];
    issue.status = "Returned";
    const book = this.data.libraryBooks.find(b => b.id === issue.bookId);
    if (book) book.available += 1;
    this.saveData();
    return issue;
  }

  // Notices
  getNotices() {
    return this.data.notices || [];
  }

  addNotice(noticeData) {
    const newNotice = {
      id: `NOT-${String(this.data.notices.length + 1).padStart(2, '0')}`,
      publishDate: new Date().toISOString().split('T')[0],
      author: noticeData.author || "School Administration",
      ...noticeData
    };
    this.data.notices.unshift(newNotice);
    this.saveData();
    return newNotice;
  }

  deleteNotice(id) {
    this.data.notices = this.data.notices.filter(n => n.id !== id);
    this.saveData();
  }

  // Leave Requests
  getLeaveRequests() {
    return this.data.leaveRequests || [];
  }

  addLeaveRequest(leaveData) {
    const newLeave = {
      id: `LVE-${String(this.data.leaveRequests.length + 1).padStart(2, '0')}`,
      status: "Pending",
      approvedBy: null,
      ...leaveData
    };
    this.data.leaveRequests.unshift(newLeave);
    this.saveData();
    return newLeave;
  }

  updateLeaveStatus(id, status, approverName) {
    const leave = this.data.leaveRequests.find(l => l.id === id);
    if (leave) {
      leave.status = status;
      leave.approvedBy = approverName || "Principal";
      this.saveData();
    }
    return leave;
  }

  // Certificates
  getCertificates() {
    return this.data.certificates || [];
  }

  generateCertificate(certData) {
    const newCert = {
      id: `CERT-2026-${Math.floor(100 + Math.random() * 900)}`,
      certNumber: `DPGA/${certData.type.slice(0, 3).toUpperCase()}/2026/${Math.floor(1000 + Math.random() * 9000)}`,
      issueDate: new Date().toISOString().split('T')[0],
      status: "Issued",
      ...certData
    };
    this.data.certificates.unshift(newCert);
    this.saveData();
    return newCert;
  }

  // Complaints
  getComplaints() {
    return this.data.complaints || [];
  }

  addComplaint(compData) {
    const newComp = {
      id: `CMP-${String(this.data.complaints.length + 1).padStart(2, '0')}`,
      submissionDate: new Date().toISOString().split('T')[0],
      status: "In Progress",
      resolution: null,
      ...compData
    };
    this.data.complaints.unshift(newComp);
    this.saveData();
    return newComp;
  }

  resolveComplaint(id, resolution) {
    const comp = this.data.complaints.find(c => c.id === id);
    if (comp) {
      comp.status = "Resolved";
      comp.resolution = resolution;
      this.saveData();
    }
    return comp;
  }

  // Visitors
  getVisitors() {
    return this.data.visitors || [];
  }

  addVisitor(visitorData) {
    const newVis = {
      id: `VIS-${Math.floor(1000 + Math.random() * 9000)}`,
      passNo: `PASS-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().split('T')[0],
      entryTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      exitTime: null,
      status: "Inside Campus",
      ...visitorData
    };
    this.data.visitors.unshift(newVis);
    this.saveData();
    return newVis;
  }

  checkoutVisitor(id) {
    const vis = this.data.visitors.find(v => v.id === id);
    if (vis) {
      vis.exitTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      vis.status = "Checked Out";
      this.saveData();
    }
    return vis;
  }

  // Other entities getters
  getTransport() { return this.data.transport || []; }
  getHostels() { return this.data.hostels || []; }
  getMedicalRecords() { return this.data.medicalRecords || []; }
  getSports() { return this.data.sports || []; }
  getEvents() { return this.data.events || []; }
  getInventory() { return this.data.inventory || []; }
  getAccounting() { return this.data.accounting || {}; }
}

export const schoolService = new SchoolService();
export default schoolService;
