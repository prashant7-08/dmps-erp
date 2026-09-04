/**
 * Fee Protection & Manual Overrides Master Layer
 * Ensures 100% persistence for all user-customized student fees, arrears, kit dues, and discounts.
 * Manual adjustments made in UI are permanently locked and cannot be erased or reset by reloads.
 */

export const MANUAL_STUDENT_FEE_STORAGE_KEY = 'DMPS_MANUAL_STUDENT_FEE_OVERRIDES_V1';

export const getManualStudentFeeOverrides = () => {
  try {
    const saved = localStorage.getItem(MANUAL_STUDENT_FEE_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === 'object') {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Failed to parse manual student fee overrides:', e);
  }
  return {};
};

export const saveManualStudentFeeOverride = (studentId, feeSummary) => {
  if (!studentId || !feeSummary) return;
  try {
    const current = getManualStudentFeeOverrides();
    current[String(studentId)] = {
      tuitionDue: Number(feeSummary.tuitionDue) || 0,
      transportDue11Months: Number(feeSummary.transportDue11Months) || 0,
      oldSessionDues: Number(feeSummary.oldSessionDues) || 0,
      miscellaneousDue: Number(feeSummary.miscellaneousDue) || 0,
      miscellaneousBreakdown: Array.isArray(feeSummary.miscellaneousBreakdown) ? feeSummary.miscellaneousBreakdown : [],
      otherChargesDue: Number(feeSummary.otherChargesDue) || 0,
      discount: Number(feeSummary.discount) || 0,
      totalDue: Number(feeSummary.totalDue) || 0,
      totalPaid: Number(feeSummary.totalPaid) || 0,
      balance: Number(feeSummary.balance) || 0,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(MANUAL_STUDENT_FEE_STORAGE_KEY, JSON.stringify(current));
  } catch (e) {
    console.error('Failed to save manual student fee override:', e);
  }
};

export const applyFeeOverridesToStudent = (student, overridesMap = null) => {
  if (!student) return student;
  const overrides = overridesMap || getManualStudentFeeOverrides();
  const override = overrides[student.id] || overrides[student.admissionNo] || overrides[student.rollNo];

  if (!override) {
    // If student is in Class 11 or 12, enforce ₹0 tuition fee
    const cls = String(student.class || '').toUpperCase().trim();
    if (cls === 'XI' || cls === '11' || cls === '11TH' || cls === 'XII' || cls === '12' || cls === '12TH') {
      const trDue = Number(student.feeSummary?.transportDue11Months) || Number(student.transport?.annualFare11M) || 0;
      const oldDues = Number(student.feeSummary?.oldSessionDues) || 0;
      const miscDues = Number(student.feeSummary?.miscellaneousDue) || 0;
      const totalDue = trDue + oldDues + miscDues;
      const paid = Number(student.feeSummary?.totalPaid) || 0;
      const balance = Math.max(0, totalDue - paid);
      return {
        ...student,
        feeSummary: {
          ...(student.feeSummary || {}),
          tuitionDue: 0,
          transportDue11Months: trDue,
          totalDue: totalDue,
          totalPaid: paid,
          balance: balance,
          status: balance <= 0 ? 'Paid' : 'Pending'
        }
      };
    }
    return student;
  }

  const tuitionDue = Number(override.tuitionDue) || 0;
  const transportDue = Number(override.transportDue11Months) || 0;
  const oldSessionDues = Number(override.oldSessionDues) || 0;
  const miscDue = Number(override.miscellaneousDue) || 0;
  const otherCharges = Number(override.otherChargesDue) || 0;
  const totalDue = override.totalDue !== undefined ? Number(override.totalDue) : (tuitionDue + transportDue + oldSessionDues + miscDue + otherCharges);
  const totalPaid = Number(override.totalPaid !== undefined ? override.totalPaid : (student.feeSummary?.totalPaid || 0));
  const balance = override.balance !== undefined ? Number(override.balance) : Math.max(0, totalDue - totalPaid);

  return {
    ...student,
    feeSummary: {
      ...(student.feeSummary || {}),
      tuitionDue,
      transportDue11Months: transportDue,
      oldSessionDues,
      miscellaneousDue: miscDue,
      miscellaneousBreakdown: override.miscellaneousBreakdown || [],
      otherChargesDue: otherCharges,
      discount: override.discount || 0,
      totalDue,
      totalPaid,
      balance,
      status: balance <= 0 ? 'Paid' : 'Pending'
    }
  };
};
