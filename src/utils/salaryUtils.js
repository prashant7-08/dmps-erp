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
 * Safely extracts numerical salary from any teacher / employee / staff object.
 * Guarantee: ALWAYS returns a number (never an object `{...}` or NaN).
 * Handles 0 (honorary), basicSalary, salary.basic, salary.netSalary, numeric strings.
 */
export const getStaffSalary = (staff) => {
  if (!staff) return 0;
  if (typeof staff.basicSalary === 'number') return staff.basicSalary;
  if (staff.basicSalary !== undefined && staff.basicSalary !== null && staff.basicSalary !== '') {
    const n = Number(staff.basicSalary);
    if (!isNaN(n)) return n;
  }
  if (staff.salary && typeof staff.salary === 'object') {
    if (typeof staff.salary.basic === 'number') return staff.salary.basic;
    if (typeof staff.salary.netSalary === 'number') return staff.salary.netSalary;
    if (staff.salary.basic !== undefined && staff.salary.basic !== null && staff.salary.basic !== '') {
      const n = Number(staff.salary.basic);
      if (!isNaN(n)) return n;
    }
  }
  if (typeof staff.salary === 'number') return staff.salary;
  if (typeof staff.salary === 'string' && !isNaN(Number(staff.salary))) return Number(staff.salary);
  return 0;
};
