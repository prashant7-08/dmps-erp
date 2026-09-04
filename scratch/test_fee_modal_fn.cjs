const schoolService = require('../src/services/schoolService.js').default || require('../src/services/schoolService.js');

const students = schoolService.getStudents('all');
console.log('Total students loaded:', students.length);

const aakariti = students.find(s => s.name.toUpperCase().includes('AAKARITI'));
console.log('Testing with student:', aakariti ? aakariti.name : 'Not found');

if (aakariti) {
  try {
    const student = aakariti;
    const tDue = student.feeSummary?.tuitionDue !== undefined ? student.feeSummary.tuitionDue : 13500;
    const trDue = student.feeSummary?.transportDue11Months !== undefined ? student.feeSummary.transportDue11Months : (Number(student.transport?.monthlyFare || 0) * (student.transport?.months || 11));
    const oDue = student.feeSummary?.oldSessionDues || 0;
    const mDue = student.feeSummary?.miscellaneousDue || 0;

    const fatherMobile = student.parents?.fatherMobile || student.parents?.mobile || student.phone;
    const fatherName = (student.parents?.fatherName || '').trim().toLowerCase();
    const studentsList = students || [];
    const sibs = (student.feeSummary?.familySiblings?.length > 0)
      ? student.feeSummary.familySiblings.map(s => studentsList.find(st => st.id === s.id || st.name === s.name) || s)
      : studentsList.filter(s => {
          if (s.id === student.id) return false;
          if (fatherMobile && (s.parents?.fatherMobile === fatherMobile || s.parents?.mobile === fatherMobile || s.phone === fatherMobile)) return true;
          if (fatherName && fatherName.length > 2 && (s.parents?.fatherName || '').trim().toLowerCase() === fatherName) return true;
          return false;
        });

    console.log('Sibs found:', sibs.length);

    const tuitionRem = Math.max(0, tDue - (student.feeSummary?.tuitionPaid || 0));
    const transportRem = Math.max(0, trDue - (student.feeSummary?.transportPaid || 0));
    const hostelRem = Math.max(0, (student.feeSummary?.hostelDue || 0) - (student.feeSummary?.hostelPaid || 0));
    const oldSessionRem = Math.max(0, oDue - (student.feeSummary?.oldSessionPaid || 0));
    const miscRem = Math.max(0, mDue - (student.feeSummary?.miscPaid || 0));

    const totalDue = tuitionRem + transportRem + hostelRem + oldSessionRem + miscRem;

    const form = {
      tuitionPay: tuitionRem > 0 ? tuitionRem : '',
      transportPay: transportRem > 0 ? transportRem : '',
      hostelPay: hostelRem > 0 ? hostelRem : '',
      oldSessionPay: oldSessionRem > 0 ? oldSessionRem : '',
      miscPay: miscRem > 0 ? miscRem : '',
      discount: 0,
      amount: totalDue > 0 ? totalDue : 0,
      paymentMode: 'Cash',
      paymentDate: new Date().toISOString().split('T')[0],
      remarks: 'School Fee Installment',
      receiptNo: `DMPS-REC-${Date.now().toString().slice(-5)}`
    };

    console.log('Success! Form prepared:', form);
  } catch (err) {
    console.error('ERROR in handleOpenFeeModal:', err);
  }
}
