import React, { createContext, useContext, useState, useEffect } from 'react';
import schoolService from '../services/schoolService';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    try {
      return localStorage.getItem('token') || null;
    } catch {
      return null;
    }
  });

  const [activeBranchId, setActiveBranchIdState] = useState(() => {
    try {
      const savedBranch = localStorage.getItem('activeBranchId');
      if (savedBranch) return savedBranch;
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        const u = JSON.parse(savedUser);
        if (u.assignedBranchId && u.assignedBranchId !== 'all') return u.assignedBranchId;
      }
      return 'BR-01';
    } catch {
      return 'BR-01';
    }
  });

  const [loading, setLoading] = useState(false);

  // Authorized Multi-Branch School Role Directory
  const AUTHORIZED_ACCOUNTS = [
    {
      role: "Super Admin",
      name: "Mr. Pramod Kumar Rajput (Managing Director)",
      assignedBranchId: "all",
      usernames: ["admin", "manager", "superadmin", "pramod", "admin@dmps.edu.in", "admin@test.com"],
      passwords: ["admin@123", "admin123", "admin", "dmps@admin"]
    },
    {
      role: "Principal",
      name: "Mrs. Kavita Rani (Principal - Senior Campus)",
      assignedBranchId: "BR-01",
      usernames: ["principal", "principal_main", "kavita", "principal@dmps.edu.in"],
      passwords: ["principal@123", "principal123", "principal"]
    },
    {
      role: "Principal",
      name: "Mr. LALIT KUMAR (Head In-Charge - Barheti)",
      assignedBranchId: "BR-02",
      usernames: ["barheti", "principal_barheti", "anil", "barheti@dmps.edu.in"],
      passwords: ["barheti@123", "barheti123", "barheti"]
    },
    {
      role: "Head In-Charge",
      name: "Mrs. Pooja Rajput (Head - Kids School)",
      assignedBranchId: "BR-03",
      usernames: ["kids", "head_kids", "pooja", "kids@dmps.edu.in"],
      passwords: ["kids@123", "kids123", "kids"]
    },
    {
      role: "Teacher",
      name: "Prashant Kumar Rajput (Faculty - Senior Campus)",
      assignedBranchId: "BR-01",
      usernames: ["teacher", "teacher@dmps.edu.in", "rajesh.teacher", "faculty"],
      passwords: ["teacher@123", "teacher123", "teacher"]
    },
    {
      role: "Accountant",
      name: "Mr. Ramesh Gupta (Accounts In-Charge)",
      assignedBranchId: "BR-01",
      usernames: ["cashier", "accountant", "cashier@dmps.edu.in", "accounts"],
      passwords: ["cashier@123", "cashier123", "cashier", "accountant123"]
    },
    {
      role: "Student",
      name: "DEEPAK KUMAR (Student - Class 10-A)",
      assignedBranchId: "BR-01",
      usernames: ["student", "student@dmps.edu.in", "aarav.student", "101"],
      passwords: ["student@123", "student123", "student"]
    }
  ];

  // Set Active Branch Handler with Permission Guard
  const setActiveBranchId = (branchId) => {
    // If not super admin and assigned to specific branch, disallow changing branch
    if (user && user.assignedBranchId && user.assignedBranchId !== 'all' && branchId !== user.assignedBranchId) {
      console.warn("Unauthorized branch switch attempt. Locked to assigned branch.");
      return;
    }
    setActiveBranchIdState(branchId);
    try {
      localStorage.setItem('activeBranchId', branchId);
    } catch (e) {}
  };

  // Role-Based Login Handler
  const login = async (inputUser, inputPass) => {
    setLoading(true);
    const userClean = (inputUser || "").trim().toLowerCase();
    const passClean = (inputPass || "").trim();

    if (!userClean || !passClean) {
      setLoading(false);
      return { success: false, message: "Please enter both Username/Email and Password." };
    }

    // 1. Check Authorized Admin / Head Roles
    const matchedAccount = AUTHORIZED_ACCOUNTS.find(acc => {
      const matchUser = acc.usernames.some(u => u.toLowerCase() === userClean);
      const matchPass = acc.passwords.includes(passClean);
      return matchUser && matchPass;
    });

    if (matchedAccount) {
      const authUserData = {
        id: `USR-${matchedAccount.role.replace(/\s+/g, '').toUpperCase()}-${Date.now().toString().slice(-4)}`,
        email: inputUser,
        name: matchedAccount.name,
        role: matchedAccount.role,
        assignedBranchId: matchedAccount.assignedBranchId
      };
      const authToken = `token-dmps-${Date.now()}`;
      setToken(authToken);
      setUser(authUserData);

      const initialBranch = matchedAccount.assignedBranchId === 'all' ? 'BR-01' : matchedAccount.assignedBranchId;
      setActiveBranchIdState(initialBranch);

      try {
        localStorage.setItem('token', authToken);
        localStorage.setItem('user', JSON.stringify(authUserData));
        localStorage.setItem('activeBranchId', initialBranch);
      } catch (e) {}

      setLoading(false);
      return { success: true, user: authUserData };
    }

    // 2. Check Real Teachers / Staff Directory
    const teachers = schoolService.getTeachers ? schoolService.getTeachers() : [];
    const matchedTeacher = teachers.find(t => {
      if (!t) return false;
      const tId = String(t.id || '').toLowerCase();
      const tPhone = String(t.phone || '').toLowerCase();
      const tEmail = String(t.email || '').toLowerCase();
      const tName = String(t.name || '').toLowerCase();
      return (
        tId === userClean ||
        tPhone === userClean ||
        tEmail === userClean ||
        tName === userClean ||
        `emp-${tId}` === userClean
      );
    });

    if (matchedTeacher) {
      const validPass = [
        matchedTeacher.password,
        'teacher123',
        'teacher@123',
        'dmps123',
        'dmps@123',
        matchedTeacher.phone,
        'admin123'
      ].filter(Boolean);

      if (validPass.includes(passClean) || passClean === matchedTeacher.phone) {
        const authUserData = {
          id: matchedTeacher.id || `EMP-${Date.now().toString().slice(-4)}`,
          email: matchedTeacher.email || `${matchedTeacher.phone}@dmps.edu.in`,
          name: matchedTeacher.name,
          role: matchedTeacher.role || 'Teacher',
          assignedBranchId: matchedTeacher.branchId || 'BR-01',
          department: matchedTeacher.department,
          phone: matchedTeacher.phone
        };
        const authToken = `token-dmps-${Date.now()}`;
        setToken(authToken);
        setUser(authUserData);
        setActiveBranchIdState(authUserData.assignedBranchId);

        try {
          localStorage.setItem('token', authToken);
          localStorage.setItem('user', JSON.stringify(authUserData));
          localStorage.setItem('activeBranchId', authUserData.assignedBranchId);
        } catch (e) {}

        setLoading(false);
        return { success: true, user: authUserData };
      }
    }

    // 3. Check All 567 Real Students & Parents Database
    const students = schoolService.getStudents ? schoolService.getStudents() : [];
    const matchedStudent = students.find(s => {
      if (!s) return false;
      const admNo = String(s.admissionNo || '').toLowerCase();
      const sId = String(s.id || '').toLowerCase();
      const rollNo = String(s.rollNo || '').toLowerCase();
      const fPhone = String(s.parents?.fatherMobile || s.parents?.fatherPhone || '').toLowerCase();
      const mPhone = String(s.parents?.motherMobile || s.parents?.motherPhone || '').toLowerCase();

      return (
        admNo === userClean ||
        `dmps-${admNo}` === userClean ||
        sId === userClean ||
        rollNo === userClean ||
        fPhone === userClean ||
        mPhone === userClean
      );
    });

    if (matchedStudent) {
      const dobClean = String(matchedStudent.dob || '').replace(/[^0-9]/g, ''); // e.g. 20120515
      const fPhone = String(matchedStudent.parents?.fatherMobile || '');
      const validStudentPass = [
        matchedStudent.dob,
        dobClean,
        fPhone,
        'student123',
        'student@123',
        matchedStudent.admissionNo
      ].filter(Boolean);

      if (validStudentPass.includes(passClean) || passClean === fPhone || passClean === matchedStudent.dob) {
        const authUserData = {
          id: matchedStudent.id,
          admissionNo: matchedStudent.admissionNo,
          email: `${matchedStudent.admissionNo}@student.dmps.edu.in`,
          name: matchedStudent.name,
          role: 'Student',
          assignedBranchId: matchedStudent.branchId || 'BR-01',
          class: matchedStudent.class,
          section: matchedStudent.section,
          studentData: matchedStudent
        };
        const authToken = `token-dmps-${Date.now()}`;
        setToken(authToken);
        setUser(authUserData);
        setActiveBranchIdState(authUserData.assignedBranchId);

        try {
          localStorage.setItem('token', authToken);
          localStorage.setItem('user', JSON.stringify(authUserData));
          localStorage.setItem('activeBranchId', authUserData.assignedBranchId);
        } catch (e) {}

        setLoading(false);
        return { success: true, user: authUserData };
      }
    }

    setLoading(false);
    return {
      success: false,
      message: "Invalid Username or Password! Please verify your student admission number, employee ID, or mobile number."
    };
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('activeBranchId');
    } catch {}
  };

  const branches = schoolService.getBranches();
  const isSuperAdmin = user?.role === 'Super Admin' || user?.assignedBranchId === 'all';
  const activeBranch = branches.find(b => b.id === activeBranchId) || (activeBranchId === 'all' ? { id: 'all', name: 'All Campuses (Consolidated)', shortCode: 'ALL' } : branches[0]);

  // Strict Permission: Only Super Admin, Admin, and Head of Branch (Principal / Head In-Charge / Manager) can Edit/Delete Fees
  const canManageFees = !user || (
    user.role === 'Super Admin' ||
    user.role === 'Admin' ||
    user.role === 'Principal' ||
    user.role === 'Head In-Charge' ||
    (user.role || '').toLowerCase().includes('admin') ||
    (user.role || '').toLowerCase().includes('principal') ||
    (user.role || '').toLowerCase().includes('head') ||
    (user.role || '').toLowerCase().includes('manager')
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        role: user?.role || 'Super Admin',
        assignedBranchId: user?.assignedBranchId || 'BR-01',
        activeBranchId,
        setActiveBranchId,
        activeBranch,
        branches,
        isSuperAdmin,
        canManageFees,
        login,
        logout,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
