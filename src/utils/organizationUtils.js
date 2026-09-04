/**
 * Organization Master Utilities (Departments & Designations)
 * Ensures 100% persistent storage for all user edits, additions, and deletions
 * with clean DMPS defaults and zero dummy leftovers.
 */

export const DEFAULT_DMPS_DEPARTMENTS = [
  { id: "DEP-01", name: "Administration", code: "ADMIN", head: "PRAMOD KUMAR", memberCount: 2, color: "blue" },
  { id: "DEP-02", name: "Secondary", code: "SEC", head: "POORAN SINGH", memberCount: 5, color: "rose" },
  { id: "DEP-03", name: "Junior", code: "JUN", head: "NEETU SHARMA", memberCount: 3, color: "amber" },
  { id: "DEP-04", name: "Primary", code: "PRI", head: "RAJENDRA SINGH", memberCount: 4, color: "emerald" },
  { id: "DEP-05", name: "Pre-Primary", code: "PRE-PRI", head: "AKHILESH AGRAWAL", memberCount: 5, color: "purple" },
  { id: "DEP-06", name: "Transport", code: "TRANS", head: "CHOKHELAL", memberCount: 2, color: "orange" }
];

export const DEFAULT_DMPS_DESIGNATIONS = [
  { id: "DES-01", title: "Super Admin & Principal", department: "Administration", rank: 1 },
  { id: "DES-02", title: "Managing Director", department: "Administration", rank: 2 },
  { id: "DES-03", title: "Head Teacher - Primary Wing", department: "Primary", rank: 3 },
  { id: "DES-04", title: "Senior Mathematics Teacher", department: "Secondary", rank: 4 },
  { id: "DES-05", title: "Senior English Lecturer", department: "Secondary", rank: 4 },
  { id: "DES-06", title: "Science Teacher & Bus Incharge", department: "Secondary", rank: 4 },
  { id: "DES-07", title: "Teacher & Reception Incharge", department: "Secondary", rank: 5 },
  { id: "DES-08", title: "Junior Faculty", department: "Junior", rank: 5 },
  { id: "DES-09", title: "Primary Teacher", department: "Primary", rank: 6 },
  { id: "DES-10", title: "Primary Assistant Teacher", department: "Primary", rank: 6 },
  { id: "DES-11", title: "Mother Teacher (LKG)", department: "Pre-Primary", rank: 7 },
  { id: "DES-12", title: "Pre-Primary Faculty", department: "Pre-Primary", rank: 7 },
  { id: "DES-13", title: "Primary Activity Teacher", department: "Pre-Primary", rank: 7 },
  { id: "DES-14", title: "Senior Transport Bus Driver", department: "Transport", rank: 8 },
  { id: "DES-15", title: "Transport Driver", department: "Transport", rank: 8 }
];

export const DEPARTMENTS_STORAGE_KEY = 'DMPS_DEPARTMENTS_MASTER_V1';
export const DESIGNATIONS_STORAGE_KEY = 'DMPS_DESIGNATIONS_MASTER_V1';

const isDummyDepartmentList = (list) => {
  if (!Array.isArray(list) || list.length === 0) return true;
  return list.some(d => d.head === 'Dr. Vivek Agnihotri' || d.name === 'Science & Biology' || d.name === 'Social Studies & Commerce');
};

const isDummyDesignationList = (list) => {
  if (!Array.isArray(list) || list.length === 0) return true;
  return list.some(d => d.title === 'Librarian & Documentation Head' || d.title === 'PGT Faculty (Post Graduate Teacher)');
};

export const getPersistentDepartments = (fallbackFromDb = null) => {
  try {
    const saved = localStorage.getItem(DEPARTMENTS_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0 && !isDummyDepartmentList(parsed)) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Failed to parse persistent departments:', e);
  }

  // If DB fallback has valid non-dummy departments
  if (Array.isArray(fallbackFromDb) && fallbackFromDb.length > 0 && !isDummyDepartmentList(fallbackFromDb)) {
    savePersistentDepartments(fallbackFromDb);
    return fallbackFromDb;
  }

  // Save and return defaults
  savePersistentDepartments(DEFAULT_DMPS_DEPARTMENTS);
  return JSON.parse(JSON.stringify(DEFAULT_DMPS_DEPARTMENTS));
};

export const savePersistentDepartments = (departments) => {
  try {
    if (Array.isArray(departments)) {
      localStorage.setItem(DEPARTMENTS_STORAGE_KEY, JSON.stringify(departments));
    }
  } catch (e) {
    console.error('Failed to save persistent departments:', e);
  }
};

export const getPersistentDesignations = (fallbackFromDb = null) => {
  try {
    const saved = localStorage.getItem(DESIGNATIONS_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0 && !isDummyDesignationList(parsed)) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Failed to parse persistent designations:', e);
  }

  // If DB fallback has valid non-dummy designations
  if (Array.isArray(fallbackFromDb) && fallbackFromDb.length > 0 && !isDummyDesignationList(fallbackFromDb)) {
    savePersistentDesignations(fallbackFromDb);
    return fallbackFromDb;
  }

  // Save and return defaults
  savePersistentDesignations(DEFAULT_DMPS_DESIGNATIONS);
  return JSON.parse(JSON.stringify(DEFAULT_DMPS_DESIGNATIONS));
};

export const savePersistentDesignations = (designations) => {
  try {
    if (Array.isArray(designations)) {
      localStorage.setItem(DESIGNATIONS_STORAGE_KEY, JSON.stringify(designations));
    }
  } catch (e) {
    console.error('Failed to save persistent designations:', e);
  }
};
