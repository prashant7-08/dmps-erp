/**
 * Safe utility functions for School Staff Salaries & Grade Templates
 * Handles ₹0 (honorary/voluntary), object payloads, string numbers, and default templates.
 */

export const defaultSalaryTemplates = [
  { id: 'GRD-0', name: '0 (Honorary / ₹0)', basic: 0, overtimeRate: 0, branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL' },
  { id: 'GRD-3000', name: '3000', basic: 3000, overtimeRate: 0, branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL' },
  { id: 'GRD-3250', name: '3250', basic: 3250, overtimeRate: 0, branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL' },
  { id: 'GRD-3500', name: '3500', basic: 3500, overtimeRate: 0, branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL' },
  { id: 'GRD-4000', name: '4000', basic: 4000, overtimeRate: 0, branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL' },
  { id: 'GRD-4500', name: '4500', basic: 4500, overtimeRate: 0, branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL' },
  { id: 'GRD-4800', name: '4800', basic: 4800, overtimeRate: 0, branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL' },
  { id: 'GRD-5000', name: '5000', basic: 5000, overtimeRate: 0, branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL' },
  { id: 'GRD-5500', name: '5500', basic: 5500, overtimeRate: 0, branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL' },
  { id: 'GRD-6500', name: '6500', basic: 6500, overtimeRate: 0, branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL' },
  { id: 'GRD-7000', name: '7000', basic: 7000, overtimeRate: 0, branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL' },
  { id: 'GRD-9400', name: '9400', basic: 9400, overtimeRate: 0, branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL' },
  { id: 'GRD-10000', name: '10000', basic: 10000, overtimeRate: 0, branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL' },
  { id: 'GRD-10500', name: '10500', basic: 10500, overtimeRate: 0, branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL' },
  { id: 'GRD-15000', name: '15000', basic: 15000, overtimeRate: 0, branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL' },
  { id: 'GRD-25000', name: '25000', basic: 25000, overtimeRate: 0, branch: 'DADHEECH MEMORIAL PUBLIC SCHOOL' }
];

export const SALARY_TEMPLATES_STORAGE_KEY = 'DMPS_SALARY_TEMPLATES_V1';
export const MANUAL_SALARY_STORAGE_KEY = 'DMPS_MANUAL_SALARY_ASSIGNMENTS_V1';

export const getSavedSalaryTemplates = () => {
  try {
    const saved = localStorage.getItem(SALARY_TEMPLATES_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Ensure Grade 0 is included if not present
        const hasZero = parsed.some(t => Number(t.basic) === 0);
        if (!hasZero) {
          parsed.unshift(defaultSalaryTemplates[0]);
        }
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Failed to load salary templates from localStorage:', e);
  }
  return defaultSalaryTemplates;
};

export const saveSalaryTemplates = (templates) => {
  try {
    localStorage.setItem(SALARY_TEMPLATES_STORAGE_KEY, JSON.stringify(templates));
  } catch (e) {
    console.warn('Failed to save salary templates to localStorage:', e);
  }
};

/**
 * Retrieves all manual staff salary assignments from persistent localStorage.
 * Format: { "TCH-1001": 25000, "EMP-2026-001": 25000, "Prashant Kumar Rajput": 25000, ... }
 */
export const getManualSalaryAssignments = () => {
  try {
    const stored = localStorage.getItem(MANUAL_SALARY_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed && typeof parsed === 'object') {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Failed to load manual salary assignments:', e);
  }
  return {};
};

/**
 * Saves a manual salary assignment for a staff member (by ID, employeeId, and Name).
 */
export const saveManualSalaryAssignment = (staffIdentifier, amount) => {
  if (!staffIdentifier) return;
  const num = Number(amount);
  if (isNaN(num) || num < 0) return;
  try {
    const current = getManualSalaryAssignments();
    current[staffIdentifier] = num;
    localStorage.setItem(MANUAL_SALARY_STORAGE_KEY, JSON.stringify(current));
  } catch (e) {
    console.warn('Failed to save manual salary assignment:', e);
  }
};

/**
 * Saves all manual salary assignments in bulk to persistent localStorage.
 */
export const saveAllManualSalaryAssignments = (assignmentsMap) => {
  try {
    const current = getManualSalaryAssignments();
    const updated = { ...current, ...assignmentsMap };
    localStorage.setItem(MANUAL_SALARY_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.warn('Failed to save bulk salary assignments:', e);
  }
};

/**
 * Safely extracts numerical salary from any teacher / employee / staff object.
 * Priority:
 * 1. Explicit user manual assignment from DMPS_MANUAL_SALARY_ASSIGNMENTS_V1 (Highest Priority)
 * 2. staff.basicSalary
 * 3. staff.salary.basic or staff.salary.netSalary
 * 4. staff.salary (number or string)
 * Guarantee: ALWAYS returns a valid non-NaN number.
 */
export const getStaffSalary = (staff) => {
  if (!staff) return 0;

  // 1. Check persistent manual assignments map first
  const manualMap = getManualSalaryAssignments();
  if (staff.id && manualMap[staff.id] !== undefined) {
    const n = Number(manualMap[staff.id]);
    if (!isNaN(n)) return n;
  }
  if (staff.employeeId && manualMap[staff.employeeId] !== undefined) {
    const n = Number(manualMap[staff.employeeId]);
    if (!isNaN(n)) return n;
  }
  if (staff.name && manualMap[staff.name] !== undefined) {
    const n = Number(manualMap[staff.name]);
    if (!isNaN(n)) return n;
  }

  // 2. Check direct basicSalary property
  if (typeof staff.basicSalary === 'number') return staff.basicSalary;
  if (staff.basicSalary !== undefined && staff.basicSalary !== null && staff.basicSalary !== '') {
    const n = Number(staff.basicSalary);
    if (!isNaN(n)) return n;
  }

  // 3. Check nested salary object
  if (staff.salary && typeof staff.salary === 'object') {
    if (typeof staff.salary.basic === 'number') return staff.salary.basic;
    if (typeof staff.salary.netSalary === 'number') return staff.salary.netSalary;
    if (staff.salary.basic !== undefined && staff.salary.basic !== null && staff.salary.basic !== '') {
      const n = Number(staff.salary.basic);
      if (!isNaN(n)) return n;
    }
  }

  // 4. Check salary primitive
  if (typeof staff.salary === 'number') return staff.salary;
  if (typeof staff.salary === 'string' && !isNaN(Number(staff.salary))) return Number(staff.salary);

  return 0;
};
