import React, { createContext, useContext, useState } from 'react';
import api from '../services/api';

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
  const [loading, setLoading] = useState(false);

  // Authorized School Role Credentials Directory
  const AUTHORIZED_ACCOUNTS = [
    {
      role: "Super Admin",
      name: "Dr. Arvind Shrivastava (Principal)",
      usernames: ["admin", "admin@dmps.edu.in", "principal", "principal@dmps.edu.in", "admin@test.com"],
      passwords: ["admin@123", "admin123", "admin", "dmps@admin"]
    },
    {
      role: "Accountant",
      name: "Mr. Ramesh Gupta (Accounts In-Charge)",
      usernames: ["cashier", "accountant", "cashier@dmps.edu.in", "accountant@dmps.edu.in", "accounts"],
      passwords: ["cashier@123", "cashier123", "cashier", "accountant123"]
    },
    {
      role: "Teacher",
      name: "Dr. Rajesh Sharma (Faculty)",
      usernames: ["teacher", "teacher@dmps.edu.in", "rajesh.teacher", "teacher@test.com", "faculty"],
      passwords: ["teacher@123", "teacher123", "teacher"]
    },
    {
      role: "Parent",
      name: "Mr. Mukesh Sharma (Parent of Aarav & Aniket)",
      usernames: ["parent", "parent@dmps.edu.in", "parent@test.com", "9811001122", "mukesh.sharma"],
      passwords: ["parent@123", "parent123", "parent"]
    },
    {
      role: "Student",
      name: "Aarav Sharma (Student - Class 10-A)",
      usernames: ["student", "student@dmps.edu.in", "student@test.com", "aarav.student", "101"],
      passwords: ["student@123", "student123", "student"]
    }
  ];

  // Role-Based Login Handler
  const login = async (inputUser, inputPass) => {
    setLoading(true);
    const userClean = (inputUser || "").trim().toLowerCase();
    const passClean = (inputPass || "").trim();

    if (!userClean || !passClean) {
      setLoading(false);
      return { success: false, message: "Please enter both Username/Email and Password." };
    }

    // Check against authorized role database
    const matchedAccount = AUTHORIZED_ACCOUNTS.find(acc => {
      const matchUser = acc.usernames.some(u => u.toLowerCase() === userClean);
      const matchPass = acc.passwords.includes(passClean);
      return matchUser && matchPass;
    });

    if (!matchedAccount) {
      setLoading(false);
      return {
        success: false,
        message: "Invalid Username or Password! Please verify your role credentials."
      };
    }

    const authUserData = {
      id: `USR-${matchedAccount.role.replace(/\s+/g, '').toUpperCase()}-${Date.now().toString().slice(-4)}`,
      email: inputUser,
      name: matchedAccount.name,
      role: matchedAccount.role
    };
    const authToken = `token-dmps-${Date.now()}`;

    setToken(authToken);
    setUser(authUserData);

    try {
      localStorage.setItem('token', authToken);
      localStorage.setItem('user', JSON.stringify(authUserData));
    } catch (e) {
      console.error('Storage error', e);
    }

    setLoading(false);
    return { success: true, user: authUserData };
  };

  // Logout handler
  const logout = () => {
    setUser(null);
    setToken(null);
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    } catch {
      // Ignore
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated: !!user, role: user?.role || 'Super Admin', login, logout, loading }}>
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

export default AuthProvider;
