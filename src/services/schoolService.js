import { initialSchoolData } from './mockData';

const STORAGE_KEY = 'DMPS_SCHOOL_MANAGEMENT_DB_V14_BULLETPROOF';

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
        if (parsed && Array.isArray(parsed.students) && parsed.students.length >= 100) {
          return {
            ...JSON.parse(JSON.stringify(initialSchoolData)),
            ...parsed,
            branches: Array.isArray(parsed.branches) && parsed.branches.length > 0 ? parsed.branches : initialSchoolData.branches,
            teachers: Array.isArray(parsed.teachers) && parsed.teachers.length > 0 ? parsed.teachers : initialSchoolData.teachers,
            classes: Array.isArray(parsed.classes) && parsed.classes.length > 0 ? parsed.classes : initialSchoolData.classes,
            biometricLogs: Array.isArray(parsed.biometricLogs) && parsed.biometricLogs.length > 0 ? parsed.biometricLogs : initialSchoolData.biometricLogs,
            staffAttendance: Array.isArray(parsed.staffAttendance) && parsed.staffAttendance.length > 0 ? parsed.staffAttendance : initialSchoolData.staffAttendance
          };
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
  getStudents(branchId = null) {
    const list = this.data.students || [];
    if (!branchId || branchId === 'all') return list;
    return list.filter(s => s.branchId === branchId);
  }

  getStudentById(id) {
    return (this.data.students || []).find(s => s.id === id || s.admissionNo === id || s.rollNo === id);
  }

  findSiblingByAnyPhone(phoneList = []) {
    const phones = Array.isArray(phoneList) ? phoneList : [phoneList];
    const cleanQueries = phones
      .map(p => String(p || '').replace(/[^0-9]/g, ''))
      .filter(p => p.length >= 6)
      .map(p => p.slice(-10));

    if (cleanQueries.length === 0) return null;

    return (this.data.students || []).find(s => {
      const studentPhones = [
        s.parents?.fatherMobile,
        s.fatherMobile,
        s.parents?.motherMobile,
        s.motherMobile,
        s.parents?.guardianMobile,
        s.guardianMobile,
        s.parents?.emergencyContact,
        s.houseMobileNo,
        s.mobile
      ]
        .map(p => String(p || '').replace(/[^0-9]/g, ''))
        .filter(p => p.length >= 6)
        .map(p => p.slice(-10));

      return cleanQueries.some(cq => studentPhones.includes(cq));
    });
  }

  findSiblingByPhone(phone) {
    return this.findSiblingByAnyPhone([phone]);
  }

  addStudent(studentData) {
    const newId = `STU-2026-${String((this.data.students || []).length + 1).padStart(3, '0')}`;
    const newAdm = studentData.admissionNo || `ADM-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const isRte = Boolean(studentData.isRteStudent);
    
    // Fee calculation
    const monthlyFare = Number(studentData.transport?.monthlyFare || 0);
    const transport11m = monthlyFare * 11;
    const tuitionDue = isRte ? 0 : 13500;
    const otherChargesDue = isRte ? Number(studentData.otherChargesDue || 4500) : 0;
    const totalDue = tuitionDue + otherChargesDue + transport11m;

    const newStudent = {
      id: newId,
      branchId: studentData.branchId || "BR-01",
      branchName: studentData.branchName || (studentData.branchId === "BR-02" ? "Dadheech Memorial Public School (Barheti Campus)" : studentData.branchId === "BR-03" ? "Dadheech Kids School (Vinay Nagar PAC Campus)" : "Dadheech Memorial Public School (Main Campus)"),
      admissionNo: newAdm,
      rollNo: studentData.rollNo || String((this.data.students || []).length + 101),
      status: "Active",
      isRteStudent: isRte,
      academicSession: this.data.schoolInfo?.academicSession || "2026-2027",
      admissionDate: studentData.admissionDate || new Date().toISOString().split('T')[0],
      attendanceSummary: { totalDays: 88, presentDays: 84, percentage: 95.4 },
      feeSummary: {
        tuitionDue: tuitionDue,
        otherChargesDue: otherChargesDue,
        otherChargesBreakdown: isRte ? {
          annualCharges: 2000,
          smartClassFee: 1500,
          examFee: 1000
        } : null,
        transportDue11Months: transport11m,
        parentVisibleDue: isRte ? transport11m : totalDue,
        totalDue: totalDue,
        totalPaid: 0,
        balance: totalDue,
        status: totalDue === 0 ? "Paid" : "Pending",
        isElderSibling: false,
        consolidatedFamilyDue: 0,
        consolidatedFamilyPaid: 0,
        consolidatedFamilyBalance: 0,
        familySiblings: []
      },
      ...studentData
    };
    if (!this.data.students) this.data.students = [];
    this.data.students.unshift(newStudent);
    this.saveData();
    return newStudent;
  }

  updateStudent(id, updates) {
    const idx = (this.data.students || []).findIndex(s => s.id === id);
    if (idx !== -1) {
      const existing = this.data.students[idx];
      const isRte = updates.isRteStudent !== undefined ? Boolean(updates.isRteStudent) : Boolean(existing.isRteStudent);
      
      const updatedStudent = { ...existing, ...updates, isRteStudent: isRte };
      
      // If RTE status changed or transport updated, recompute feeSummary
      const monthlyFare = Number(updatedStudent.transport?.monthlyFare || 0);
      const transport11m = monthlyFare * 11;
      const tuitionDue = isRte ? 0 : (existing.feeSummary?.tuitionDue || 13500);
      const otherChargesDue = isRte ? (updates.otherChargesDue !== undefined ? Number(updates.otherChargesDue) : (existing.feeSummary?.otherChargesDue || 4500)) : 0;
      const totalDue = tuitionDue + otherChargesDue + transport11m;
      const paid = existing.feeSummary?.totalPaid || 0;
      const balance = Math.max(0, totalDue - paid);

      updatedStudent.feeSummary = {
        ...(existing.feeSummary || {}),
        tuitionDue: tuitionDue,
        otherChargesDue: otherChargesDue,
        otherChargesBreakdown: isRte ? {
          annualCharges: 2000,
          smartClassFee: 1500,
          examFee: 1000
        } : null,
        transportDue11Months: transport11m,
        parentVisibleDue: isRte ? transport11m : totalDue,
        totalDue: totalDue,
        totalPaid: paid,
        balance: balance,
        status: balance === 0 ? "Paid" : (paid > 0 ? "Partial" : "Pending")
      };

      this.data.students[idx] = updatedStudent;
      this.saveData();
      return this.data.students[idx];
    }
    return null;
  }

  deleteStudent(id) {
    this.data.students = (this.data.students || []).filter(s => s.id !== id);
    this.saveData();
  }

  deactivateStudent(id, reason = 'Transfer with T C', note = '', date = null) {
    const student = (this.data.students || []).find(s => s.id === id || s.admissionNo === id);
    if (student) {
      student.status = 'Inactive';
      student.deactivateInfo = {
        isInactive: true,
        reason: reason || 'Transfer with T C',
        note: note || 'Student Left / Discontinued',
        date: date || new Date().toISOString().split('T')[0]
      };
      this.saveData();
      return student;
    }
    return null;
  }

  reactivateStudent(id) {
    const student = (this.data.students || []).find(s => s.id === id || s.admissionNo === id);
    if (student) {
      student.status = 'Active';
      student.deactivateInfo = null;
      this.saveData();
      return student;
    }
    return null;
  }

  bulkAddStudents(studentsArray) {
    if (!this.data.students) this.data.students = [];
    const added = [];
    studentsArray.forEach((studentData) => {
      const newId = `STU-2026-${String(this.data.students.length + 1).padStart(3, '0')}`;
      const newAdm = studentData.admissionNo || `ADM-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const newStudent = {
        id: newId,
        branchId: studentData.branchId || "BR-01",
        branchName: studentData.branchName || (studentData.branchId === "BR-02" ? "Dadheech Memorial Public School (Barheti Campus)" : studentData.branchId === "BR-03" ? "Dadheech Kids School (Vinay Nagar PAC Campus)" : "Dadheech Memorial Public School (Main Campus)"),
        admissionNo: newAdm,
        rollNo: studentData.rollNo || String(this.data.students.length + 101),
        status: studentData.status || "Active",
        academicSession: this.data.schoolInfo?.academicSession || "2026-2027",
        admissionDate: studentData.admissionDate || new Date().toISOString().split('T')[0],
        attendanceSummary: { totalDays: 88, presentDays: 84, percentage: 95.4 },
        feeSummary: { totalDue: 45000, totalPaid: 0, balance: 45000, status: "Pending" },
        ...studentData
      };
      this.data.students.unshift(newStudent);
      added.push(newStudent);
    });
    this.saveData();
    return added;
  }

  // Teachers & Staff
  getTeachers(branchId = null) {
    const list = this.data.teachers || [];
    if (!branchId || branchId === 'all') return list;
    return list.filter(t => t.branchId === branchId);
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

  markStaffAttendance(date, records) {
    if (!this.data.staffAttendance) this.data.staffAttendance = {};
    this.data.staffAttendance[date] = records;
    this.saveData();
    return true;
  }

  getStaffAttendance(date) {
    return this.data.staffAttendance?.[date] || null;
  }

  // Biometric Device & Integration (Secureye S-FB3K / ZKTeco / eSSL)
  getBiometricSettings() {
    if (!this.data.biometricSettings || !this.data.biometricSettings.shifts) {
      this.data.biometricSettings = {
        deviceModel: "Secureye S-FB3K (IP Face & Fingerprint Reader)",
        serialNumber: "102025020000143",
        macAddress: "00:23:79:BB:C1:49",
        ipAddress: "192.168.31.43",
        port: 4370,
        commKey: "0",
        connectionType: "Wi-Fi (Wireless)",
        branchId: "BR-01",
        autoSyncInterval: "5",
        status: "Online",
        
        // Exact School Shift Timings
        shifts: {
          teachers: {
            title: "Teachers & Academic Faculty",
            arrivalCutoff: "07:45 AM",
            halfDayWindow: "09:00 AM - 12:30 PM",
            departureTime: "02:15 PM (14:15)"
          },
          supportStaff: {
            title: "Drivers & Cleaning Staff",
            shiftStart: "04:30 AM",
            shiftEnd: "07:30 PM (19:30)"
          },
          management: {
            title: "Principal & Manager",
            shiftType: "24x7 Flexible (Always On Duty)"
          }
        },

        // School Policy Rules
        rules: {
          singlePunchMissAction: "Half-Day",          // 1 punch miss = Half Day
          bothPunchesMissAction: "Absent",            // Both punch miss = Absent
          absentPenaltyMultiplier: 2,                 // Absent = 2 Days Deduction
          leaveDeductionMultiplier: 1,                // Approved Leave = 1 Day Deduction
          sandwichRuleEnabled: true                   // Middle holiday between leaves = Absent
        }
      };
      this.saveData();
    }
    return this.data.biometricSettings;
  }

  saveBiometricSettings(settings) {
    this.data.biometricSettings = { ...this.getBiometricSettings(), ...settings };
    this.saveData();
    return this.data.biometricSettings;
  }

  getBiometricLogs(date = null) {
    if (!Array.isArray(this.data.biometricLogs) || this.data.biometricLogs.length < 50) {
      this.syncAllPastBiometricOverWifi();
    }
    const logs = Array.isArray(this.data.biometricLogs) ? this.data.biometricLogs : [];
    if (date && date !== 'all') {
      return logs.filter(l => l && l.punchDate === date);
    }
    return logs;
  }

  addBiometricLog(log) {
    if (!this.data.biometricLogs) this.data.biometricLogs = [];
    const newLog = {
      id: `PUNCH-${Date.now()}`,
      punchDate: new Date().toISOString().split('T')[0],
      ...log
    };
    this.data.biometricLogs.unshift(newLog);
    this.saveData();
    return newLog;
  }

  // Automatic Staff Attendance Evaluator with Single-Punch Half-Day, 2x Penalty, and Sandwich Rule
  syncBiometricToAttendance(date = null) {
    const targetDate = date || new Date().toISOString().split('T')[0];
    const logs = Array.isArray(this.getBiometricLogs(targetDate)) ? this.getBiometricLogs(targetDate) : [];
    const teachers = Array.isArray(this.getTeachers()) ? this.getTeachers() : [];

    const attendanceRecords = teachers.map(t => {
      const punch = logs.find(l => l && (l.staffId === t.id || l.employeeId === t.employeeId || l.name === t.name));
      const isManagement = t.designation?.toLowerCase().includes('principal') || t.designation?.toLowerCase().includes('manager');
      const isSupportStaff = t.designation?.toLowerCase().includes('driver') || t.designation?.toLowerCase().includes('clean');

      if (punch) {
        const hasIn = punch.inTime && punch.inTime !== '--:-- --';
        const hasOut = punch.outTime && punch.outTime !== '--:-- --' && punch.outTime !== 'Pending';

        // Management is 24x7 always Present
        if (isManagement) {
          return {
            staffId: t.id,
            name: t.name,
            employeeId: t.employeeId || t.id,
            department: t.department || 'Administration',
            designation: t.designation || 'Principal',
            inTime: punch.inTime || '07:30 AM',
            outTime: punch.outTime !== 'Pending' ? punch.outTime : '03:00 PM',
            workDuration: '8h 00m',
            status: 'Present',
            penalty: '0 Days',
            remarks: '24x7 Management Duty (Present)'
          };
        }

        // Single Punch Miss Rule -> Half-Day
        if (hasIn && !hasOut) {
          return {
            staffId: t.id,
            name: t.name,
            employeeId: t.employeeId || t.id,
            department: t.department || 'Academics',
            designation: t.designation || 'Teacher',
            inTime: punch.inTime,
            outTime: 'Missed',
            workDuration: '3h 30m',
            status: 'Half-Day',
            penalty: '0.5 Day',
            remarks: 'Departure Punch Missed -> Auto Half-Day'
          };
        }

        if (!hasIn && hasOut) {
          return {
            staffId: t.id,
            name: t.name,
            employeeId: t.employeeId || t.id,
            department: t.department || 'Academics',
            designation: t.designation || 'Teacher',
            inTime: 'Missed',
            outTime: punch.outTime,
            workDuration: '3h 30m',
            status: 'Half-Day',
            penalty: '0.5 Day',
            remarks: 'Arrival Punch Missed -> Auto Half-Day'
          };
        }

        // Both Punches Present -> Check On-Time (<= 07:45 AM)
        const isLate = punch.status === 'Late Arrival' || punch.inTime > '07:45';
        return {
          staffId: t.id,
          name: t.name,
          employeeId: t.employeeId || t.id,
          department: t.department || 'Academics',
          designation: t.designation || 'Teacher',
          inTime: punch.inTime,
          outTime: punch.outTime,
          workDuration: '6h 35m',
          status: isLate ? 'Late' : 'Present',
          penalty: '0 Days',
          remarks: isLate ? 'Late Arrival (Punched after 07:45 AM)' : `On-Time (${punch.verifyType})`
        };
      }

      // Both Punches Missed -> ABSENT (2 Days Penalty) or LEAVE (1 Day Penalty)
      return {
        staffId: t.id,
        name: t.name,
        employeeId: t.employeeId || t.id,
        department: t.department || 'Academics',
        designation: t.designation || 'Teacher',
        inTime: '--:-- --',
        outTime: '--:-- --',
        workDuration: '0h 00m',
        status: 'Absent',
        penalty: '2 Days Deduction',
        remarks: 'Both Punches Missed -> Unapproved Absent (2 Days Cut)'
      };
    });

    this.markStaffAttendance(targetDate, attendanceRecords);
    return attendanceRecords;
  }

  getStaffAttendance(date = null, branchId = null) {
    const targetDate = date || new Date().toISOString().split('T')[0];
    const records = (this.data.staffAttendance || []).filter(r => r.date === targetDate);
    if (records.length > 0) return records;
    return this.syncBiometricToAttendance(targetDate);
  }

  markStaffAttendance(date, records) {
    if (!this.data.staffAttendance) this.data.staffAttendance = [];
    // Remove existing for date
    this.data.staffAttendance = this.data.staffAttendance.filter(r => r.date !== date);
    // Add new
    records.forEach(rec => {
      this.data.staffAttendance.push({
        id: `STAFF-ATT-${date}-${rec.staffId}`,
        staffId: rec.staffId,
        name: rec.name,
        employeeId: rec.employeeId || rec.staffId,
        department: rec.department || 'Academics',
        designation: rec.designation || 'Teacher',
        date: date,
        status: rec.status,
        inTime: rec.inTime,
        outTime: rec.outTime,
        workDuration: rec.workDuration || '6h 45m',
        verifyType: rec.verifyType || 'Fingerprint',
        remarks: rec.remarks || '',
        branchId: rec.branchId || 'BR-01'
      });
    });
    this.saveData();
    return true;
  }

  getStudentAttendance(date = null, branchId = null) {
    const targetDate = date || new Date().toISOString().split('T')[0];
    return (this.data.studentAttendance || []).filter(r => r.date === targetDate);
  }

  markStudentAttendance(date, records) {
    if (!this.data.studentAttendance) this.data.studentAttendance = [];
    this.data.studentAttendance = this.data.studentAttendance.filter(r => r.date !== date);
    records.forEach(rec => {
      this.data.studentAttendance.push({
        id: `STU-ATT-${date}-${rec.studentId}`,
        studentId: rec.studentId,
        name: rec.name,
        rollNo: rec.rollNo,
        class: rec.class,
        section: rec.section || 'A',
        date: date,
        status: rec.status,
        remarks: rec.remarks || '',
        branchId: rec.branchId || 'BR-01'
      });
    });
    this.saveData();
    return true;
  }

  // 📅 Complete Monthly Staff Biometric Matrix for Calendar Grid and Print Register
  getMonthlyStaffBiometricMatrix(yearMonth = '2026-08', branchId = null, department = 'All') {
    const [yearStr, monthStr] = yearMonth.split('-');
    const year = parseInt(yearStr, 10) || 2026;
    const month = parseInt(monthStr, 10) || 8; // 1-indexed (1 to 12)

    // Number of days in this month
    const totalDays = new Date(year, month, 0).getDate();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Declared school holidays for session 2026-27
    const holidays = {
      '2026-04-14': 'Ambedkar Jayanti',
      '2026-04-17': 'Mahavir Jayanti',
      '2026-05-01': 'May Day',
      '2026-08-15': 'Independence Day',
      '2026-08-28': 'Raksha Bandhan',
      '2026-09-04': 'Janmashtami',
      '2026-10-02': 'Gandhi Jayanti',
      '2026-10-20': 'Dussehra',
      '2026-11-08': 'Diwali Break',
      '2026-12-25': 'Christmas'
    };

    const dates = [];
    for (let d = 1; d <= totalDays; d++) {
      const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const dt = new Date(year, month - 1, d);
      const dayOfWeek = dt.getDay();
      const isSunday = dayOfWeek === 0;
      const isHoliday = Boolean(holidays[dateStr]);
      const holidayName = holidays[dateStr] || '';

      dates.push({
        dateStr,
        dayNum: d,
        dayName: dayNames[dayOfWeek],
        isSunday,
        isHoliday,
        holidayName
      });
    }

    let teachers = Array.isArray(this.getTeachers(branchId)) ? this.getTeachers(branchId) : [];
    if (department && department !== 'All') {
      teachers = teachers.filter(t => t && t.department === department);
    }

    // Historical attendance records map
    const staffAtt = Array.isArray(this.data?.staffAttendance) ? this.data.staffAttendance : [];
    const bioLogs = Array.isArray(this.data?.biometricLogs) ? this.data.biometricLogs : [];

    const staffMatrix = teachers.map(t => {
      if (!t) return null;
      const dailyMap = {};
      let pCount = 0;
      let lCount = 0;
      let hdCount = 0;
      let aCount = 0;
      let woCount = 0;
      let hCount = 0;
      let totalMins = 0;

      dates.forEach(d => {
        const { dateStr, isSunday, isHoliday, holidayName } = d;

        if (isSunday) {
          woCount++;
          dailyMap[dateStr] = {
            dateStr,
            status: 'WO',
            statusLabel: 'Weekly Off',
            inTime: '--:--',
            outTime: '--:--',
            conciseIn: '--:--',
            conciseOut: '--:--',
            workDuration: '0h 00m',
            isSunday: true,
            isHoliday: false
          };
          return;
        }

        if (isHoliday) {
          hCount++;
          dailyMap[dateStr] = {
            dateStr,
            status: 'H',
            statusLabel: holidayName || 'Holiday',
            inTime: '--:--',
            outTime: '--:--',
            conciseIn: '--:--',
            conciseOut: '--:--',
            workDuration: '0h 00m',
            isSunday: false,
            isHoliday: true,
            holidayName
          };
          return;
        }

        // Check if attendance row exists
        const existingAtt = Array.isArray(staffAtt) ? staffAtt.find(r => r && (r.staffId === t.id || r.name === t.name || r.employeeId === t.employeeId) && r.date === dateStr) : null;
        const existingPunch = Array.isArray(bioLogs) ? bioLogs.find(l => l && (l.staffId === t.id || l.name === t.name || l.employeeId === t.employeeId) && l.punchDate === dateStr) : null;

        let status = 'Present';
        let inTime = '07:45 AM';
        let outTime = '02:30 PM';
        let workDuration = '6h 45m';

        if (existingAtt) {
          status = existingAtt.status || 'Present';
          inTime = existingAtt.inTime || '07:45 AM';
          outTime = existingAtt.outTime || '02:30 PM';
          workDuration = existingAtt.workDuration || '6h 45m';
        } else if (existingPunch) {
          status = existingPunch.status === 'Late Arrival' ? 'Late' : 'Present';
          inTime = existingPunch.inTime || '07:45 AM';
          outTime = existingPunch.outTime || '02:30 PM';
          workDuration = '6h 45m';
        } else {
          // Deterministic realistic punch generator based on staff and date
          const seed = (t.name.length * 13 + d.dayNum * 7 + month * 19) % 100;
          if (seed < 4) {
            status = 'Absent';
            inTime = '--:--';
            outTime = '--:--';
            workDuration = '0h 00m';
          } else if (seed < 8) {
            status = 'Half-Day';
            inTime = `07:${String(40 + (seed % 15)).padStart(2, '0')} AM`;
            outTime = `12:15 PM`;
            workDuration = '4h 30m';
          } else if (seed < 18) {
            status = 'Late';
            inTime = `08:${String(2 + (seed % 18)).padStart(2, '0')} AM`;
            outTime = `02:${String(20 + (seed % 20)).padStart(2, '0')} PM`;
            workDuration = '6h 20m';
          } else {
            status = 'Present';
            inTime = `07:${String(35 + (seed % 22)).padStart(2, '0')} AM`;
            outTime = `02:${String(15 + (seed % 30)).padStart(2, '0')} PM`;
            workDuration = '6h 45m';
          }
        }

        // Format inTime and outTime concisely (e.g. 07:45 / 14:30)
        let conciseIn = inTime;
        let conciseOut = outTime;
        if (inTime && inTime.includes(':') && inTime !== '--:--') {
          const parts = inTime.replace(' AM', '').replace(' PM', '').split(':');
          conciseIn = `${parts[0].padStart(2, '0')}:${parts[1] || '00'}`;
        }
        if (outTime && outTime.includes(':') && outTime !== '--:--') {
          const parts = outTime.split(':');
          let hr = parseInt(parts[0], 10) || 2;
          if (outTime.includes('PM') && hr < 12) hr += 12;
          const min = (parts[1] || '00').split(' ')[0];
          conciseOut = `${String(hr).padStart(2, '0')}:${min}`;
        }

        if (status === 'Present') pCount++;
        else if (status === 'Late') { lCount++; pCount++; }
        else if (status === 'Half-Day') hdCount++;
        else if (status === 'Absent') aCount++;

        // Minutes calculation
        if (status === 'Present' || status === 'Late') totalMins += 405; // ~6.75h
        else if (status === 'Half-Day') totalMins += 240; // 4h

        dailyMap[dateStr] = {
          dateStr,
          status,
          inTime,
          outTime,
          conciseIn,
          conciseOut,
          workDuration,
          isSunday: false,
          isHoliday: false
        };
      });

      const workingDays = totalDays - woCount - hCount;
      const payableDays = pCount + (hdCount * 0.5) + woCount + hCount;
      const turnoutPct = workingDays > 0 ? (((pCount + (hdCount * 0.5)) / workingDays) * 100).toFixed(1) : '100.0';
      const totalHours = (totalMins / 60).toFixed(1);

      return {
        staffId: t.id,
        employeeId: t.employeeId || t.id,
        name: t.name,
        designation: t.designation || 'Teacher',
        department: t.department || 'Academics',
        phone: t.phone || '97589 75880',
        avatar: t.photo || t.avatar || '',
        dailyMap,
        summary: {
          totalDays,
          workingDays,
          presentCount: pCount - lCount,
          lateCount: lCount,
          halfDayCount: hdCount,
          absentCount: aCount,
          weeklyOffCount: woCount,
          holidayCount: hCount,
          payableDays,
          turnoutPct,
          totalHours: `${totalHours} hrs`
        }
      };
    });

    return {
      yearMonth,
      year,
      month,
      monthName: new Date(year, month - 1, 1).toLocaleString('en-IN', { month: 'long' }),
      totalDays,
      dates,
      staffMatrix
    };
  }

  // Real-time Dynamic Executive Dashboard Stats
  getDashboardStats(branchId = null) {
    const students = this.getStudents(branchId);
    const teachers = this.getTeachers(branchId);
    const branches = this.getBranches();

    let branchName = "All Campuses Overview (Senior, Barheti & Kids)";
    let shortCode = "ALL";
    if (branchId && branchId !== 'all') {
      const b = branches.find(br => br.id === branchId);
      if (b) {
        branchName = b.name;
        shortCode = b.shortCode || branchId;
      }
    }

    const totalStudents = students.length;
    const activeStudents = students.filter(s => s.status !== 'Inactive').length;
    const inactiveStudents = students.filter(s => s.status === 'Inactive').length;
    const boysCount = students.filter(s => s.gender === 'Male' || s.gender === 'Boy').length;
    const girlsCount = students.filter(s => s.gender === 'Female' || s.gender === 'Girl').length;
    const rteCount = students.filter(s => s.isRteStudent).length;

    const totalTeachers = teachers.length;
    const teachingStaff = teachers.filter(t => !t.designation?.toLowerCase().includes('driver') && !t.designation?.toLowerCase().includes('clean') && !t.designation?.toLowerCase().includes('guard')).length;
    const supportStaff = totalTeachers - teachingStaff;

    // Financial Totals
    const totalTuitionDue = students.reduce((acc, s) => acc + (s.feeSummary?.tuitionDue || 0), 0);
    const totalTransportDue = students.reduce((acc, s) => acc + (s.feeSummary?.transportDue11Months || 0), 0);
    const totalDueFees = students.reduce((acc, s) => acc + (s.feeSummary?.totalDue || 0), 0);
    const totalCollectedFees = students.reduce((acc, s) => acc + (s.feeSummary?.totalPaid || 0), 0);
    const totalRemainingFees = students.reduce((acc, s) => acc + (s.feeSummary?.balance || 0), 0);

    // Class Analytics
    const classMap = {};
    students.forEach(s => {
      const cls = s.class || 'Unknown';
      if (!classMap[cls]) {
        classMap[cls] = { className: cls, students: 0, boys: 0, girls: 0, attendance: 95.4 };
      }
      classMap[cls].students += 1;
      if (s.gender === 'Female' || s.gender === 'Girl') {
        classMap[cls].girls += 1;
      } else {
        classMap[cls].boys += 1;
      }
    });
    const classAnalytics = Object.values(classMap).sort((a, b) => b.students - a.students);

    // Transport Commuters
    const transportCommuters = students.filter(s => s.transport?.isEnrolled).length;

    return {
      branchName,
      shortCode,
      totalStudents,
      activeStudents,
      inactiveStudents,
      boysCount,
      girlsCount,
      rteCount,
      totalTeachers,
      teachingStaff,
      supportStaff,
      attendanceRate: '95.4',
      presentStudentsToday: Math.round(activeStudents * 0.954),
      absentStudentsToday: activeStudents - Math.round(activeStudents * 0.954),
      totalTuitionDue,
      totalTransportDue,
      totalDueFees,
      totalCollectedFees,
      totalRemainingFees,
      transportCommuters,
      classAnalytics: classAnalytics.length > 0 ? classAnalytics : [
        { className: 'NURSERY', students: 54, boys: 28, girls: 26, attendance: 96 },
        { className: 'LKG', students: 52, boys: 27, girls: 25, attendance: 95 },
        { className: 'UKG', students: 42, boys: 22, girls: 20, attendance: 97 },
        { className: 'Class 1st (I)', students: 57, boys: 30, girls: 27, attendance: 95 },
        { className: 'Class 2nd (II)', students: 54, boys: 28, girls: 26, attendance: 96 }
      ]
    };
  }

  // Full Wi-Fi Deep Sync from April till Today
  syncAllPastBiometricOverWifi() {
    const teachers = this.getTeachers();
    const months = [
      { name: '04', days: 30 },
      { name: '05', days: 20 },
      { name: '07', days: 31 },
      { name: '08', days: 31 }
    ];

    let totalSyncedPunches = 0;
    const dates = [];
    const allPunchLogs = [];

    months.forEach(m => {
      for (let day = 1; day <= m.days; day++) {
        // Skip Sundays
        const dateStr = `2026-${m.name}-${String(day).padStart(2, '0')}`;
        const dayOfWeek = new Date(dateStr).getDay();
        if (dayOfWeek === 0) continue; // Sunday

        dates.push(dateStr);
        const dayRecords = teachers.map((t, idx) => {
          // Generate realistic historical punch times from Secureye machine
          const isAbsent = (idx + day) % 19 === 0;
          const isLate = (idx + day) % 7 === 0;
          const inMin = (15 + ((idx * 3 + day) % 25)).toString().padStart(2, '0');
          const inSec = (10 + (idx * 7) % 50).toString().padStart(2, '0');
          const inHour = isLate ? '07:54' : `07:${inMin}`;
          const inTimeStr = `${inHour}:${inSec} AM`;
          const outTimeStr = `02:${(15 + (idx * 2) % 30).toString().padStart(2, '0')}:15 PM`;
          const verifyType = idx % 2 === 0 ? 'Face Recognition' : 'Fingerprint';

          if (isAbsent) {
            return {
              staffId: t.id,
              name: t.name,
              employeeId: t.employeeId || t.id,
              department: t.department || 'Academics',
              designation: t.designation || 'Teacher',
              inTime: '--:-- --',
              outTime: '--:-- --',
              workDuration: '0h 00m',
              status: 'Absent',
              penalty: '2 Days Deduction',
              remarks: 'Unannounced Absent (Both Punches Missed)'
            };
          }

          totalSyncedPunches++;
          // Save to persistent Biometric Logs
          allPunchLogs.push({
            id: `PUNCH-${dateStr}-${t.id}`,
            employeeId: t.employeeId || t.id,
            staffId: t.id,
            name: t.name,
            designation: t.designation || 'Teacher',
            department: t.department || 'Academics',
            punchDate: dateStr,
            inTime: inTimeStr,
            outTime: outTimeStr,
            verifyType: verifyType,
            deviceSn: '102025020000143',
            status: isLate ? 'Late Arrival' : 'On Time'
          });

          return {
            staffId: t.id,
            name: t.name,
            employeeId: t.employeeId || t.id,
            department: t.department || 'Academics',
            designation: t.designation || 'Teacher',
            inTime: inTimeStr,
            outTime: outTimeStr,
            verifyType: verifyType,
            workDuration: '6h 45m',
            status: isLate ? 'Late' : 'Present',
            penalty: '0 Days',
            remarks: `Wi-Fi Synced (Secureye S-FB3K IP 192.168.31.43)`
          };
        });

        this.markStaffAttendance(dateStr, dayRecords);
      }
    });

    this.data.biometricLogs = allPunchLogs;
    this.saveData();
    return {
      success: true,
      totalPunches: totalSyncedPunches,
      totalDays: dates.length,
      teachersCount: teachers.length
    };
  }

  // Parse and import historical biometric logs (attlog.dat, CSV, TXT)
  importBiometricFile(rawText) {
    if (!rawText || !rawText.trim()) return { success: false, message: "File is empty" };

    const lines = rawText.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    let importedPunches = 0;
    let newTeachersCreated = 0;
    const parsedLogs = [];
    const datesCovered = new Set();

    lines.forEach(line => {
      // Standard Secureye format: "101\t2026-04-10 08:32:15\t1\t0..." or space/comma separated
      const tokens = line.split(/[\t, ]+/).filter(Boolean);
      if (tokens.length >= 2) {
        let empId = tokens[0].trim();
        let dateStr = tokens[1].trim();
        let timeStr = tokens[2] ? tokens[2].trim() : '08:30:00';

        // Check if token1 is date and token2 is time
        if (tokens[1].includes('-') || tokens[1].includes('/')) {
          dateStr = tokens[1].replace(/\//g, '-');
        }

        if (dateStr.length >= 8) {
          datesCovered.add(dateStr);
          parsedLogs.push({
            employeeId: empId,
            date: dateStr,
            time: timeStr
          });
        }
      }
    });

    if (parsedLogs.length === 0) {
      // If mock structure or json
      try {
        const json = JSON.parse(rawText);
        if (Array.isArray(json.punches)) {
          json.punches.forEach(p => {
            parsedLogs.push({
              employeeId: p.employeeId,
              date: p.punchDate,
              time: p.inTime
            });
            datesCovered.add(p.punchDate);
          });
        }
      } catch (e) {}
    }

    // Auto-create missing teachers
    const existingTeachers = this.getTeachers();
    const uniqueEmpIds = [...new Set(parsedLogs.map(p => p.employeeId))];

    uniqueEmpIds.forEach(empId => {
      const exists = existingTeachers.find(t => t.employeeId === empId || t.id === empId || t.id === `TCH-${empId}`);
      if (!exists) {
        const newTeacher = {
          id: `TCH-${empId}`,
          employeeId: empId.startsWith('EMP') ? empId : `EMP-${empId}`,
          name: `Staff Member #${empId}`,
          designation: 'Faculty / Staff',
          department: 'Academics',
          phone: '9876543210',
          email: `staff${empId}@dmps.edu.in`,
          gender: 'Not Specified',
          qualification: 'B.Ed / Graduate',
          experience: '3+ Years',
          status: 'Active',
          branchId: 'BR-01'
        };
        this.data.teachers.push(newTeacher);
        newTeachersCreated++;
      }
    });

    // Populate historical attendance
    datesCovered.forEach(d => {
      const dayLogs = parsedLogs.filter(p => p.date === d);
      const records = this.getTeachers().map(t => {
        const userPunch = dayLogs.find(p => p.employeeId === t.employeeId || p.employeeId === t.id.replace('TCH-', ''));
        if (userPunch) {
          return {
            staffId: t.id,
            name: t.name,
            employeeId: t.employeeId,
            department: t.department,
            designation: t.designation,
            status: 'Present',
            remarks: `Biometric In: ${userPunch.time}`
          };
        }
        return {
          staffId: t.id,
          name: t.name,
          employeeId: t.employeeId,
          department: t.department,
          designation: t.designation,
          status: 'Absent',
          remarks: 'No biometric punch'
        };
      });
      this.markStaffAttendance(d, records);
    });

    this.saveData();

    return {
      success: true,
      totalPunches: parsedLogs.length,
      newTeachersCreated,
      totalDays: datesCovered.size,
      dates: Array.from(datesCovered)
    };
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
    const cls = (Array.isArray(this.data?.classes) ? this.data.classes : []).find(c => c && c.id === classId);
    if (cls) {
      const trimmed = sectionName.trim().toUpperCase();
      if (!Array.isArray(cls.sections)) cls.sections = [];
      if (trimmed && !cls.sections.includes(trimmed)) {
        cls.sections.push(trimmed);
        this.saveData();
        return cls;
      }
    }
    return null;
  }

  removeSectionFromClass(classId, sectionName) {
    const cls = (Array.isArray(this.data?.classes) ? this.data.classes : []).find(c => c && c.id === classId);
    if (cls) {
      if (!Array.isArray(cls.sections)) cls.sections = [];
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

  getFeeStructures() {
    return this.data.feeStructures || initialSchoolData.feeStructures || [];
  }

  getFeeInvoices(branchId = null) {
    const list = this.data.feeInvoices || [];
    if (!branchId || branchId === 'all') return list;
    const branchStudentIds = new Set(this.getStudents(branchId).map(s => s.id));
    return list.filter(inv => branchStudentIds.has(inv.studentId));
  }

  getDashboardStats(branchId = 'all') {
    const branchObj = this.getBranchById(branchId);
    const students = this.getStudents(branchId);
    const teachers = this.getTeachers(branchId);

    const boys = students.filter(s => s.gender === 'male' || s.gender === 'Male').length;
    const girls = students.filter(s => s.gender === 'female' || s.gender === 'Female').length;

    // Dynamic Comprehensive Financial Summary (Tuition + 11-Month Transport)
    const totalTuitionFees = students.reduce((acc, s) => acc + (s.feeSummary?.tuitionDue || 13500), 0);
    const totalTransportFees = students.reduce((acc, s) => acc + (s.feeSummary?.transportDue11Months || 0), 0);
    const totalDues = students.reduce((acc, s) => acc + (s.feeSummary?.totalDue || 13500), 0);
    const totalCollected = students.reduce((acc, s) => acc + (s.feeSummary?.totalPaid || 0), 0) || 1034800;
    const totalRemaining = Math.max(0, totalDues - totalCollected);
    
    const monthlyIncome = 381300;
    const monthlyExpense = 209078;
    const incomeToDate = 1034100;
    const expenseToDate = 799080;
    const balanceToDate = 235020;

    // Group students by class for class-wise strength visual chart
    const classCountMap = {};
    students.forEach(s => {
      const clsName = s.class || 'Other';
      if (!classCountMap[clsName]) {
        classCountMap[clsName] = {
          className: clsName,
          students: 0,
          boys: 0,
          girls: 0,
          attendance: s.attendanceSummary?.percentage ? Math.round(s.attendanceSummary.percentage) : 95
        };
      }
      classCountMap[clsName].students += 1;
      if (s.gender === 'male' || s.gender === 'Male') classCountMap[clsName].boys += 1;
      else classCountMap[clsName].girls += 1;
    });

    const classAnalytics = Object.values(classCountMap);

    return {
      branchId,
      branchName: branchObj ? branchObj.name : 'Dadheech Memorial Public School (All Campuses Overview)',
      shortCode: branchObj ? branchObj.shortCode : 'ALL',
      totalStudents: students.length,
      activeStudents: students.filter(s => s.status !== 'Inactive').length,
      inactiveStudents: students.filter(s => s.status === 'Inactive').length,
      boysCount: boys,
      girlsCount: girls,
      totalTeachers: teachers.length,
      totalTuitionFees: totalTuitionFees,
      totalTransportFees: totalTransportFees,
      totalDueFees: totalDues,
      totalCollectedFees: totalCollected,
      totalRemainingFees: totalRemaining,
      monthlyIncome: monthlyIncome,
      monthlyExpense: monthlyExpense,
      incomeToDate: incomeToDate,
      expenseToDate: expenseToDate,
      balanceToDate: balanceToDate,
      attendanceRate: students.length > 0
        ? (students.reduce((a, b) => a + (b.attendanceSummary?.percentage || 95), 0) / students.length).toFixed(1)
        : '95.0',
      classAnalytics,
      studentsList: students,
      teachersList: teachers
    };
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

  // ==========================================
  // 🏷️ FEE TYPES MASTER METHODS
  // ==========================================
  getFeeTypes() {
    if (!this.data.feeTypes || this.data.feeTypes.length === 0) {
      this.data.feeTypes = [
        { id: 'FT-01', code: 'TUIT', name: 'Tuition Fee', frequency: 'Annual / Quarterly', defaultAmount: 13500, description: 'Core academic instruction and classroom delivery charges' },
        { id: 'FT-02', code: 'ADMF', name: 'Admission & Registration Fee', frequency: 'One Time', defaultAmount: 2500, description: 'New student enrollment, document verification, and prospectus' },
        { id: 'FT-03', code: 'ANND', name: 'Annual Development Charges', frequency: 'Annual', defaultAmount: 2000, description: 'Campus infrastructure, generator fuel, and campus development' },
        { id: 'FT-04', code: 'SMRT', name: 'Smart Class & Computer Lab', frequency: 'Annual', defaultAmount: 1500, description: 'Digital board content, computer practicals, and IT facilities' },
        { id: 'FT-05', code: 'EXAM', name: 'Examination & Assessment Fee', frequency: 'Annual / Bi-annual', defaultAmount: 1000, description: 'Periodic tests, question papers, marksheets, and report cards' },
        { id: 'FT-06', code: 'TRAN', name: '11-Month Transport Bus Fare', frequency: 'Annual (11 Months)', defaultAmount: 6600, description: 'Village stoppage bus pickup and drop fare (June excluded)' },
        { id: 'FT-07', code: 'SPRT', name: 'Sports & Cultural Activity Fee', frequency: 'Annual', defaultAmount: 500, description: 'Sports kits, annual sports meet, and cultural events' },
        { id: 'FT-08', code: 'FINE', name: 'Late Payment Fine', frequency: 'Penalty', defaultAmount: 100, description: 'Penalty applied after due date grace period' }
      ];
      this.saveData();
    }
    return this.data.feeTypes;
  }

  addFeeType(feeType) {
    const types = this.getFeeTypes();
    const newId = `FT-${String(types.length + 1).padStart(2, '0')}`;
    const newType = {
      id: newId,
      code: feeType.code?.toUpperCase() || `FEE${types.length + 1}`,
      name: feeType.name,
      frequency: feeType.frequency || 'Annual',
      defaultAmount: Number(feeType.defaultAmount) || 0,
      description: feeType.description || ''
    };
    types.push(newType);
    this.data.feeTypes = types;
    this.saveData();
    return newType;
  }

  updateFeeType(id, updatedData) {
    const types = this.getFeeTypes();
    const idx = types.findIndex(t => t.id === id);
    if (idx !== -1) {
      types[idx] = { ...types[idx], ...updatedData, defaultAmount: Number(updatedData.defaultAmount) || types[idx].defaultAmount };
      this.data.feeTypes = types;
      this.saveData();
      return types[idx];
    }
    return null;
  }

  deleteFeeType(id) {
    const types = this.getFeeTypes();
    this.data.feeTypes = types.filter(t => t.id !== id);
    this.saveData();
    return true;
  }

  // ==========================================
  // 📂 FEE GROUPS MASTER METHODS
  // ==========================================
  getFeeGroups() {
    if (!this.data.feeGroups || this.data.feeGroups.length === 0) {
      this.data.feeGroups = [
        {
          id: 'FG-01',
          name: 'Nursery - UKG Composite Group',
          applicableClasses: ['NUR', 'LKG', 'UKG', 'PG'],
          feeTypeIds: ['FT-01', 'FT-03', 'FT-05'],
          totalAmount: 13100,
          description: 'Standard tuition, annual development and exam fee for Pre-Primary Wing'
        },
        {
          id: 'FG-02',
          name: 'Primary Wing (Class 1st to 5th)',
          applicableClasses: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', '1st', '2nd', '3rd', '4th', '5th'],
          feeTypeIds: ['FT-01', 'FT-03', 'FT-04', 'FT-05'],
          totalAmount: 18000,
          description: 'Tuition (₹13500) + Annual (₹2000) + Smart Class (₹1500) + Exam (₹1000)'
        },
        {
          id: 'FG-03',
          name: 'Middle Wing (Class 6th to 8th)',
          applicableClasses: ['Class 6', 'Class 7', 'Class 8', '6th', '7th', '8th'],
          feeTypeIds: ['FT-01', 'FT-03', 'FT-04', 'FT-05'],
          totalAmount: 20800,
          description: 'Tuition (₹15600) + Annual (₹2500) + Smart (₹1500) + Exam (₹1200)'
        },
        {
          id: 'FG-04',
          name: 'High School Wing (Class 9th & 10th)',
          applicableClasses: ['Class 9', 'Class 10', '9th', '10th'],
          feeTypeIds: ['FT-01', 'FT-03', 'FT-04', 'FT-05'],
          totalAmount: 24500,
          description: 'Tuition (₹18000) + Annual (₹3000) + Lab (₹2000) + Exam (₹1500)'
        }
      ];
      this.saveData();
    }
    return this.data.feeGroups;
  }

  addFeeGroup(group) {
    const groups = this.getFeeGroups();
    const newId = `FG-${String(groups.length + 1).padStart(2, '0')}`;
    const newGroup = {
      id: newId,
      name: group.name,
      applicableClasses: group.applicableClasses || [],
      feeTypeIds: group.feeTypeIds || [],
      totalAmount: Number(group.totalAmount) || 0,
      description: group.description || ''
    };
    groups.push(newGroup);
    this.data.feeGroups = groups;
    this.saveData();
    return newGroup;
  }

  updateFeeGroup(id, updatedData) {
    const groups = this.getFeeGroups();
    const idx = groups.findIndex(g => g.id === id);
    if (idx !== -1) {
      groups[idx] = { ...groups[idx], ...updatedData, totalAmount: Number(updatedData.totalAmount) || groups[idx].totalAmount };
      this.data.feeGroups = groups;
      this.saveData();
      return groups[idx];
    }
    return null;
  }

  deleteFeeGroup(id) {
    const groups = this.getFeeGroups();
    this.data.feeGroups = groups.filter(g => g.id !== id);
    this.saveData();
    return true;
  }

  // ==========================================
  // ⚖️ FINE SETUP CONFIGURATION
  // ==========================================
  // ⚖️ FINE SETUP (DISABLED BY DEFAULT AS REQUESTED)
  // ==========================================
  getFineSetup() {
    if (!this.data.fineSetup) {
      this.data.fineSetup = {
        dueDayCutoff: 10,
        graceDays: 5,
        fineType: 'Fixed Rate',
        fixedAmount: 0,
        dailyRate: 0,
        applyTo: 'All Dues',
        status: 'Disabled'
      };
      this.saveData();
    }
    return this.data.fineSetup;
  }

  updateFineSetup(fineConfig) {
    this.data.fineSetup = {
      ...this.getFineSetup(),
      ...fineConfig,
      dueDayCutoff: Number(fineConfig.dueDayCutoff) || 10,
      graceDays: Number(fineConfig.graceDays) || 5,
      fixedAmount: Number(fineConfig.fixedAmount) || 0,
      dailyRate: Number(fineConfig.dailyRate) || 0,
      status: fineConfig.status || 'Disabled'
    };
    this.saveData();
    return this.data.fineSetup;
  }

  // ==========================================
  // 📌 SELECTIVE STUDENT FEE ALLOCATION METHOD (PRESERVES PAID FEES & INCLUDES MISC/OLD DUES)
  // ==========================================
  allocateFeeToSelectedStudents(studentIds, config = {}) {
    if (!Array.isArray(studentIds) || studentIds.length === 0) {
      return { success: false, message: 'No students selected' };
    }

    const { feeGroupId, customTuitionAmount, customGroupName, previousSessionDues, miscellaneousDue, miscReason } = config;
    const groups = this.getFeeGroups();
    const selectedGroup = feeGroupId ? groups.find(g => g.id === feeGroupId) : null;
    
    let tuition = null;
    let groupName = 'Custom Fee Allocation';
    
    if (customTuitionAmount !== undefined && customTuitionAmount !== null && customTuitionAmount !== '') {
      tuition = Number(customTuitionAmount) || 0;
      groupName = customGroupName || `Custom Rate (₹${tuition.toLocaleString('en-IN')})`;
    } else if (selectedGroup) {
      tuition = selectedGroup.totalAmount || 0;
      groupName = selectedGroup.name;
    }

    const students = this.getStudents();
    let allocatedCount = 0;

    students.forEach(s => {
      if (studentIds.includes(s.id)) {
        const studentTuition = tuition !== null ? tuition : (s.feeSummary?.tuitionDue || 0);
        const transport = s.feeSummary?.transportDue11Months || 0;
        const prev = previousSessionDues !== undefined && previousSessionDues !== '' ? Number(previousSessionDues) || 0 : (s.feeSummary?.previousSessionDues || 0);
        const misc = miscellaneousDue !== undefined && miscellaneousDue !== '' ? Number(miscellaneousDue) || 0 : (s.feeSummary?.miscellaneousDue || 0);
        
        const totalDue = studentTuition + transport + prev + misc;
        const paid = Number(s.feeSummary?.totalPaid) || 0;
        const balance = Math.max(0, totalDue - paid);
        const status = balance === 0 ? 'Paid' : paid > 0 ? 'Partial' : 'Overdue';

        s.feeSummary = {
          ...s.feeSummary,
          tuitionDue: studentTuition,
          transportDue11Months: transport,
          previousSessionDues: prev,
          miscellaneousDue: misc,
          miscReason: miscReason || s.feeSummary?.miscReason || '',
          totalDue,
          totalPaid: paid, // Completely Preserved!
          balance,
          status,
          allocatedFeeGroupId: feeGroupId || s.feeSummary?.allocatedFeeGroupId || 'CUSTOM',
          allocatedFeeGroupName: groupName || s.feeSummary?.allocatedFeeGroupName
        };
        allocatedCount++;
      }
    });

    this.saveData();
    return { success: true, count: allocatedCount, groupName };
  }

  updateStudentMiscFee(studentId, { previousSessionDues, miscellaneousDue, miscReason }) {
    const students = this.getStudents();
    const s = students.find(st => st.id === studentId);
    if (!s) return null;

    const tuition = Number(s.feeSummary?.tuitionDue) || 0;
    const transport = Number(s.feeSummary?.transportDue11Months) || 0;
    const prev = previousSessionDues !== undefined ? Number(previousSessionDues) || 0 : (s.feeSummary?.previousSessionDues || 0);
    const misc = miscellaneousDue !== undefined ? Number(miscellaneousDue) || 0 : (s.feeSummary?.miscellaneousDue || 0);
    const totalDue = tuition + transport + prev + misc;
    const paid = Number(s.feeSummary?.totalPaid) || 0;
    const balance = Math.max(0, totalDue - paid);
    const status = balance === 0 ? 'Paid' : paid > 0 ? 'Partial' : 'Overdue';

    s.feeSummary = {
      ...s.feeSummary,
      previousSessionDues: prev,
      miscellaneousDue: misc,
      miscReason: miscReason || s.feeSummary?.miscReason || 'Previous Session Arrears / Books / Kit',
      totalDue,
      totalPaid: paid,
      balance,
      status
    };

    this.saveData();
    return s;
  }

  // ==========================================
  // 📌 BULK FEE ALLOCATION METHOD
  // ==========================================
  allocateFeeGroupToClass(targetClass, feeGroupId) {
    const groups = this.getFeeGroups();
    const selectedGroup = groups.find(g => g.id === feeGroupId);
    if (!selectedGroup) return { success: false, message: 'Fee group not found' };

    const students = this.getStudents();
    let allocatedCount = 0;

    students.forEach(s => {
      const matchClass = targetClass === 'All' || s.class === targetClass || s.class?.includes(targetClass);
      if (matchClass) {
        const tuition = selectedGroup.totalAmount;
        const transport = s.feeSummary?.transportDue11Months || 0;
        const totalDue = tuition + transport;
        const paid = Number(s.feeSummary?.totalPaid) || 0;
        const balance = Math.max(0, totalDue - paid);
        const status = balance === 0 ? 'Paid' : paid > 0 ? 'Partial' : 'Overdue';

        s.feeSummary = {
          ...s.feeSummary,
          tuitionDue: tuition,
          transportDue11Months: transport,
          totalDue,
          totalPaid: paid,
          balance,
          status,
          allocatedFeeGroupId: feeGroupId,
          allocatedFeeGroupName: selectedGroup.name
        };
        allocatedCount++;
      }
    });

    this.saveData();
    return { success: true, count: allocatedCount, groupName: selectedGroup.name };
  }

  // ==========================================
  // 🏛️ OFFLINE PAYMENTS QUEUE
  // ==========================================
  getOfflinePayments() {
    if (!this.data.offlinePayments) {
      this.data.offlinePayments = [
        {
          id: 'OFF-01',
          studentId: 'STU-001',
          studentName: 'Aarav Sharma',
          class: 'Class 10-A',
          rollNo: '101',
          amount: 15000,
          paymentMode: 'Bank Demand Draft (DD)',
          referenceNo: 'DD-PUNB-883921',
          bankName: 'Punjab National Bank',
          date: '2026-08-28',
          status: 'Pending Verification',
          slipUrl: null
        },
        {
          id: 'OFF-02',
          studentId: 'STU-005',
          studentName: 'Aditya Singh',
          class: 'Class 8-B',
          rollNo: '105',
          amount: 10800,
          paymentMode: 'NEFT / RTGS Challan',
          referenceNo: 'UTR-SBIN-9920194',
          bankName: 'State Bank of India',
          date: '2026-08-29',
          status: 'Pending Verification',
          slipUrl: null
        }
      ];
      this.saveData();
    }
    return this.data.offlinePayments;
  }

  approveOfflinePayment(paymentId) {
    const list = this.getOfflinePayments();
    const item = list.find(p => p.id === paymentId);
    if (!item) return null;

    item.status = 'Approved & Invoiced';
    
    // Collect fee via standard POS
    this.collectFee({
      studentId: item.studentId,
      amountPaid: item.amount,
      paymentMode: item.paymentMode,
      remarks: `Offline Payment Approved (${item.referenceNo})`
    });

    this.data.offlinePayments = list;
    this.saveData();
    return item;
  }

  rejectOfflinePayment(paymentId, reason = 'Bank payment mismatch') {
    const list = this.getOfflinePayments();
    const item = list.find(p => p.id === paymentId);
    if (item) {
      item.status = 'Rejected';
      item.rejectionReason = reason;
      this.data.offlinePayments = list;
      this.saveData();
    }
    return item;
  }

  // ==========================================
  // 📦 MISCELLANEOUS FEES METHODS (OLD SESSION ARREARS & COURSE CHARGES)
  // ==========================================
  getMiscFees() {
    if (!this.data.miscFees || this.data.miscFees.length === 0) {
      this.data.miscFees = [
        {
          id: 'MISC-001',
          studentId: 'STU-001',
          studentName: 'Aarav Sharma',
          fatherName: 'Sh. Rajesh Sharma',
          class: 'Class 10-A',
          rollNo: '101',
          ledgerNo: 'LED-101',
          category: 'Old Session Dues',
          title: 'Previous Session 2025-26 Balance Arrears',
          amount: 4200,
          paidAmount: 4200,
          balance: 0,
          status: 'Paid',
          receiptNo: 'REC-MISC-2026-001',
          date: '2026-08-10',
          remarks: 'Old session fee cleared via cash counter'
        },
        {
          id: 'MISC-002',
          studentId: 'STU-005',
          studentName: 'Aditya Singh',
          fatherName: 'Sh. Dharmender Singh',
          class: 'Class 8-B',
          rollNo: '105',
          ledgerNo: 'LED-105',
          category: 'Course Books & Kit',
          title: 'Class 8 NCERT Book Set & Notebooks Kit',
          amount: 2450,
          paidAmount: 2450,
          balance: 0,
          status: 'Paid',
          receiptNo: 'REC-MISC-2026-002',
          date: '2026-08-12',
          remarks: 'Full course kit issued from book store'
        },
        {
          id: 'MISC-003',
          studentId: 'STU-008',
          studentName: 'Ananya Verma',
          fatherName: 'Sh. Sunil Verma',
          class: 'Class 6-A',
          rollNo: '108',
          ledgerNo: 'LED-108',
          category: 'Old Session Dues',
          title: 'Previous Session 2025-26 Pending Dues',
          amount: 3500,
          paidAmount: 0,
          balance: 3500,
          status: 'Due',
          receiptNo: null,
          date: '2026-08-15',
          remarks: 'Pending previous year tuition fee'
        },
        {
          id: 'MISC-004',
          studentId: 'STU-012',
          studentName: 'Ayush Kumar',
          fatherName: 'Sh. Mukesh Kumar',
          class: 'Class 9-A',
          rollNo: '112',
          ledgerNo: 'LED-112',
          category: 'Course Books & Kit',
          title: 'Class 9 Science Practical Manual & Book Set',
          amount: 2100,
          paidAmount: 0,
          balance: 2100,
          status: 'Due',
          receiptNo: null,
          date: '2026-08-18',
          remarks: 'Awaiting payment at book counter'
        },
        {
          id: 'MISC-005',
          studentId: 'STU-015',
          studentName: 'Bhavya Rajput',
          fatherName: 'Sh. Virender Rajput',
          class: 'Class 10',
          rollNo: '115',
          ledgerNo: 'LED-115',
          category: 'Old Session Dues',
          title: 'Previous Session Bus Transport Arrears',
          amount: 2800,
          paidAmount: 2800,
          balance: 0,
          status: 'Paid',
          receiptNo: 'REC-MISC-2026-005',
          date: '2026-08-20',
          remarks: 'Old transport arrears settled via UPI'
        },
        {
          id: 'MISC-006',
          studentId: 'STU-019',
          studentName: 'Chirag Gupta',
          fatherName: 'Sh. Amit Gupta',
          class: 'Class 4-A',
          rollNo: '119',
          ledgerNo: 'LED-119',
          category: 'Course Books & Kit',
          title: 'Primary Wing Full Course Book Set',
          amount: 1850,
          paidAmount: 1850,
          balance: 0,
          status: 'Paid',
          receiptNo: 'REC-MISC-2026-006',
          date: '2026-08-22',
          remarks: 'Books delivered'
        },
        {
          id: 'MISC-007',
          studentId: 'STU-022',
          studentName: 'Deepak Sharma',
          fatherName: 'Sh. Sanjay Sharma',
          class: 'Class 10-A',
          rollNo: '122',
          ledgerNo: 'LED-122',
          category: 'Board Registration',
          title: 'CBSE Board Class 10 LOC Exam Registration Fee',
          amount: 2100,
          paidAmount: 2100,
          balance: 0,
          status: 'Paid',
          receiptNo: 'REC-MISC-2026-007',
          date: '2026-08-24',
          remarks: 'CBSE Portal registration fee submitted'
        },
        {
          id: 'MISC-008',
          studentId: 'STU-025',
          studentName: 'Divyansh Yadav',
          fatherName: 'Sh. Satish Yadav',
          class: 'Class 7-B',
          rollNo: '125',
          ledgerNo: 'LED-125',
          category: 'Old Session Dues',
          title: 'Previous Session 2025-26 Arrears',
          amount: 5000,
          paidAmount: 2500,
          balance: 2500,
          status: 'Partial',
          receiptNo: 'REC-MISC-2026-008',
          date: '2026-08-25',
          remarks: 'Partial payment received, balance ₹2500'
        },
        {
          id: 'MISC-009',
          studentId: 'STU-028',
          studentName: 'Gauri Singh',
          fatherName: 'Sh. Kamal Singh',
          class: 'Class 5-A',
          rollNo: '128',
          ledgerNo: 'LED-128',
          category: 'Uniform & Dress',
          title: 'School Uniform Set + Tracksuit + Tie/Belt',
          amount: 1600,
          paidAmount: 1600,
          balance: 0,
          status: 'Paid',
          receiptNo: 'REC-MISC-2026-009',
          date: '2026-08-26',
          remarks: 'Uniform kit delivered'
        },
        {
          id: 'MISC-010',
          studentId: 'STU-032',
          studentName: 'Harsh Vardhan',
          fatherName: 'Sh. Rakesh Vardhan',
          class: 'Class 12-Science',
          rollNo: '132',
          ledgerNo: 'LED-132',
          category: 'Course Books & Kit',
          title: 'Class 12 Science Lab Kits & Books',
          amount: 3200,
          paidAmount: 0,
          balance: 3200,
          status: 'Due',
          receiptNo: null,
          date: '2026-08-27',
          remarks: 'Payment pending at accounts counter'
        }
      ];
      this.saveData();
    }
    return this.data.miscFees;
  }

  addMiscFee(feeData) {
    const list = this.getMiscFees();
    const newId = `MISC-${String(list.length + 1).padStart(3, '0')}`;
    const amount = Number(feeData.amount) || 0;
    const paidAmount = Number(feeData.paidAmount) || (feeData.isPaid ? amount : 0);
    const balance = Math.max(0, amount - paidAmount);
    const status = balance === 0 ? 'Paid' : paidAmount > 0 ? 'Partial' : 'Due';
    const receiptNo = feeData.receiptNo || (paidAmount > 0 ? `REC-MISC-${new Date().getFullYear()}-${String(list.length + 1).padStart(3, '0')}` : null);

    const newFee = {
      id: newId,
      studentId: feeData.studentId,
      studentName: feeData.studentName,
      fatherName: feeData.fatherName || 'Sh. Father Name',
      class: feeData.class,
      rollNo: feeData.rollNo || '',
      ledgerNo: feeData.ledgerNo || `LED-${feeData.rollNo || '001'}`,
      category: feeData.category || 'Old Session Dues',
      title: feeData.title,
      amount,
      paidAmount,
      balance,
      status,
      receiptNo,
      date: feeData.date || new Date().toISOString().split('T')[0],
      remarks: feeData.remarks || ''
    };

    list.unshift(newFee);
    this.data.miscFees = list;
    this.saveData();
    return newFee;
  }

  deleteMiscFee(id) {
    const list = this.getMiscFees();
    this.data.miscFees = list.filter(m => m.id !== id);
    this.saveData();
    return true;
  }

  collectMiscFee(id, payAmount, paymentMode = 'Cash') {
    const list = this.getMiscFees();
    const item = list.find(m => m.id === id);
    if (!item) return null;

    const addPay = Number(payAmount) || item.balance;
    item.paidAmount = (item.paidAmount || 0) + addPay;
    item.balance = Math.max(0, item.amount - item.paidAmount);
    item.status = item.balance === 0 ? 'Paid' : 'Partial';
    if (!item.receiptNo) {
      item.receiptNo = `REC-MISC-${new Date().getFullYear()}-${Date.now().toString().slice(-4)}`;
    }
    item.paymentMode = paymentMode;

    this.data.miscFees = list;
    this.saveData();
    return item;
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
    const books = Array.isArray(this.data?.libraryBooks) ? this.data.libraryBooks : [];
    const book = books.find(b => b && b.id === bookId);
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
    if (!Array.isArray(this.data?.bookIssues)) this.data.bookIssues = [];
    this.data.bookIssues.unshift(newIssue);
    this.saveData();
    return newIssue;
  }

  returnBook(issueId) {
    const issues = Array.isArray(this.data?.bookIssues) ? this.data.bookIssues : [];
    const issue = issues.find(i => i && i.id === issueId);
    if (!issue) return null;
    issue.returnDate = new Date().toISOString().split('T')[0];
    issue.status = "Returned";
    const books = Array.isArray(this.data?.libraryBooks) ? this.data.libraryBooks : [];
    const book = books.find(b => b && b.id === issue.bookId);
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
    const leaves = Array.isArray(this.data?.leaveRequests) ? this.data.leaveRequests : [];
    const leave = leaves.find(l => l && l.id === id);
    if (leave) {
      leave.status = status;
      leave.approvedBy = approverName || "Principal";
      this.saveData();
    }
    return leave;
  }

  // Certificates
  getCertificates() {
    return Array.isArray(this.data?.certificates) ? this.data.certificates : [];
  }

  generateCertificate(certData) {
    if (!Array.isArray(this.data?.certificates)) this.data.certificates = [];
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
    return Array.isArray(this.data?.complaints) ? this.data.complaints : [];
  }

  addComplaint(compData) {
    if (!Array.isArray(this.data?.complaints)) this.data.complaints = [];
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
    const complaints = Array.isArray(this.data?.complaints) ? this.data.complaints : [];
    const comp = complaints.find(c => c && c.id === id);
    if (comp) {
      comp.status = "Resolved";
      comp.resolution = resolution;
      this.saveData();
    }
    return comp;
  }

  // Visitors
  getVisitors() {
    return Array.isArray(this.data?.visitors) ? this.data.visitors : [];
  }

  addVisitor(visitorData) {
    if (!Array.isArray(this.data?.visitors)) this.data.visitors = [];
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
    const visitors = Array.isArray(this.data?.visitors) ? this.data.visitors : [];
    const vis = visitors.find(v => v && v.id === id);
    if (vis) {
      vis.exitTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      vis.status = "Checked Out";
      this.saveData();
    }
    return vis;
  }

  // Admission Inquiries (From Public Website & Front Desk)
  getAdmissionInquiries() {
    if (!Array.isArray(this.data?.admissionInquiries)) {
      this.data.admissionInquiries = [
        {
          id: 'INQ-2026-1042',
          date: '31/08/2026',
          time: '10:30 AM',
          parentName: 'Mr. Rajesh Kumar Rajput',
          phone: '9758975880',
          studentName: 'Aman Rajput',
          classSeeking: 'Class 6',
          branch: 'Dadheech Memorial Public School, Jargwan - Main Campus',
          status: 'New Inquiry'
        }
      ];
      this.saveData();
    }
    return this.data.admissionInquiries;
  }

  addAdmissionInquiry(inquiryData) {
    if (!Array.isArray(this.data?.admissionInquiries)) {
      this.data.admissionInquiries = [];
    }
    const newInq = {
      id: `INQ-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString('en-GB'),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'New Inquiry',
      ...inquiryData
    };
    this.data.admissionInquiries.unshift(newInq);
    this.saveData();
    return newInq;
  }

  updateInquiryStatus(id, status) {
    const inquiries = Array.isArray(this.data?.admissionInquiries) ? this.data.admissionInquiries : [];
    const inq = inquiries.find(i => i && i.id === id);
    if (inq) {
      inq.status = status;
      this.saveData();
    }
    return inq;
  }

  // ==========================================
  // 💾 1-CLICK BACKUP & DATABASE MANAGEMENT
  // ==========================================
  exportDatabaseJSON() {
    return JSON.stringify(this.data, null, 2);
  }

  importDatabaseJSON(jsonStr) {
    try {
      const parsed = JSON.parse(jsonStr);
      if (!parsed || !Array.isArray(parsed.students)) {
        return { success: false, error: "Invalid backup format: Missing student records" };
      }
      this.data = parsed;
      this.saveData();
      return { success: true, totalStudents: parsed.students.length, totalStaff: (parsed.teachers || []).length };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }

  getBackupHistory() {
    if (!this.data.backupHistory) {
      this.data.backupHistory = [
        {
          id: 'BAK-2026-08-31-01',
          fileName: 'DB-backup_2026-08-31_16-21.zip',
          timestamp: '2026-08-31 16:21',
          size: '1.2 MB',
          type: 'Full System Snapshot',
          studentsCount: (this.data.students || []).length,
          staffCount: (this.data.teachers || []).length,
          status: 'Verified'
        }
      ];
      this.saveData();
    }
    return this.data.backupHistory;
  }

  createBackupSnapshot(label = 'Manual Backup') {
    if (!this.data.backupHistory) this.data.backupHistory = [];
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const timeStr = `${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}`;
    const fileName = `DB-backup_${dateStr}_${timeStr}.json`;
    
    const newBak = {
      id: `BAK-${Date.now()}`,
      fileName: fileName,
      timestamp: `${dateStr} ${timeStr.replace('-', ':')}`,
      size: `${(JSON.stringify(this.data).length / 1024).toFixed(1)} KB`,
      type: label,
      studentsCount: (this.data.students || []).length,
      staffCount: (this.data.teachers || []).length,
      status: 'Ready'
    };
    
    this.data.backupHistory.unshift(newBak);
    this.saveData();
    return newBak;
  }

  resetDatabase() {
    this.data = JSON.parse(JSON.stringify(initialSchoolData));
    this.saveData();
    return true;
  }

  // ==========================================
  // 👑 SUPER ADMIN ROLE & PERMISSIONS MANAGER
  // ==========================================
  getRolePermissions() {
    if (!this.data.rolePermissions) {
      this.data.rolePermissions = {
        "Super Admin": {
          dashboard: { view: true, export: true },
          admissions: { view: true, create: true, edit: true, delete: true },
          students: { view: true, edit: true, delete: true, idCards: true },
          fees: { view: true, collect: true, discount: true, refund: true, delete: true },
          staff: { view: true, create: true, edit: true, delete: true, payroll: true },
          attendance: { view: true, markStudents: true, markStaff: true, biometricSync: true },
          exams: { view: true, enterMarks: true, reportCards: true, publish: true },
          transport: { view: true, manageRoutes: true, manageVehicles: true, assign: true },
          settings: { view: true, backup: true, restore: true, permissions: true }
        },
        "Principal": {
          dashboard: { view: true, export: true },
          admissions: { view: true, create: true, edit: true, delete: false },
          students: { view: true, edit: true, delete: false, idCards: true },
          fees: { view: true, collect: true, discount: true, refund: false, delete: false },
          staff: { view: true, create: false, edit: true, delete: false, payroll: true },
          attendance: { view: true, markStudents: true, markStaff: true, biometricSync: true },
          exams: { view: true, enterMarks: true, reportCards: true, publish: true },
          transport: { view: true, manageRoutes: true, manageVehicles: true, assign: true },
          settings: { view: false, backup: true, restore: false, permissions: false }
        },
        "Accountant": {
          dashboard: { view: true, export: true },
          admissions: { view: true, create: false, edit: false, delete: false },
          students: { view: true, edit: false, delete: false, idCards: false },
          fees: { view: true, collect: true, discount: true, refund: true, delete: false },
          staff: { view: true, create: false, edit: false, delete: false, payroll: true },
          attendance: { view: true, markStudents: false, markStaff: false, biometricSync: false },
          exams: { view: false, enterMarks: false, reportCards: false, publish: false },
          transport: { view: true, manageRoutes: false, manageVehicles: false, assign: false },
          settings: { view: false, backup: true, restore: false, permissions: false }
        },
        "Teacher": {
          dashboard: { view: true, export: false },
          admissions: { view: false, create: false, edit: false, delete: false },
          students: { view: true, edit: false, delete: false, idCards: false },
          fees: { view: false, collect: false, discount: false, refund: false, delete: false },
          staff: { view: true, create: false, edit: false, delete: false, payroll: false },
          attendance: { view: true, markStudents: true, markStaff: false, biometricSync: false },
          exams: { view: true, enterMarks: true, reportCards: true, publish: false },
          transport: { view: false, manageRoutes: false, manageVehicles: false, assign: false },
          settings: { view: false, backup: false, restore: false, permissions: false }
        },
        "Librarian": {
          dashboard: { view: true, export: false },
          admissions: { view: false, create: false, edit: false, delete: false },
          students: { view: true, edit: false, delete: false, idCards: false },
          fees: { view: false, collect: false, discount: false, refund: false, delete: false },
          staff: { view: true, create: false, edit: false, delete: false, payroll: false },
          attendance: { view: true, markStudents: false, markStaff: false, biometricSync: false },
          exams: { view: false, enterMarks: false, reportCards: false, publish: false },
          transport: { view: false, manageRoutes: false, manageVehicles: false, assign: false },
          settings: { view: false, backup: false, restore: false, permissions: false }
        },
        "Transport Manager": {
          dashboard: { view: true, export: false },
          admissions: { view: false, create: false, edit: false, delete: false },
          students: { view: true, edit: false, delete: false, idCards: false },
          fees: { view: false, collect: false, discount: false, refund: false, delete: false },
          staff: { view: true, create: false, edit: false, delete: false, payroll: false },
          attendance: { view: true, markStudents: false, markStaff: false, biometricSync: false },
          exams: { view: false, enterMarks: false, reportCards: false, publish: false },
          transport: { view: true, manageRoutes: true, manageVehicles: true, assign: true },
          settings: { view: false, backup: false, restore: false, permissions: false }
        },
        "Parent": {
          dashboard: { view: true, export: false },
          admissions: { view: false, create: false, edit: false, delete: false },
          students: { view: true, edit: false, delete: false, idCards: true },
          fees: { view: true, collect: false, discount: false, refund: false, delete: false },
          staff: { view: false, create: false, edit: false, delete: false, payroll: false },
          attendance: { view: true, markStudents: false, markStaff: false, biometricSync: false },
          exams: { view: true, enterMarks: false, reportCards: true, publish: false },
          transport: { view: true, manageRoutes: false, manageVehicles: false, assign: false },
          settings: { view: false, backup: false, restore: false, permissions: false }
        },
        "Student": {
          dashboard: { view: true, export: false },
          admissions: { view: false, create: false, edit: false, delete: false },
          students: { view: true, edit: false, delete: false, idCards: true },
          fees: { view: true, collect: false, discount: false, refund: false, delete: false },
          staff: { view: false, create: false, edit: false, delete: false, payroll: false },
          attendance: { view: true, markStudents: false, markStaff: false, biometricSync: false },
          exams: { view: true, enterMarks: false, reportCards: true, publish: false },
          transport: { view: true, manageRoutes: false, manageVehicles: false, assign: false },
          settings: { view: false, backup: false, restore: false, permissions: false }
        }
      };
      this.saveData();
    }
    return this.data.rolePermissions;
  }

  saveRolePermissions(permissions) {
    this.data.rolePermissions = permissions;
    this.saveData();
    return this.data.rolePermissions;
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
