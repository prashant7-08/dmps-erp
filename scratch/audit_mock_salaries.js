import { initialSchoolData } from '../src/services/mockData.js';

console.log('Total teachers in mockData:', initialSchoolData.teachers.length);
let activeTotal = 0;
initialSchoolData.teachers.forEach((t, i) => {
  const sal = t.basicSalary ?? t.salary ?? 0;
  const num = typeof sal === 'object' ? sal.basic : Number(sal);
  if (t.status !== 'Left') {
    activeTotal += num;
  }
  console.log(`${i+1}. ${t.id} | ${t.name.padEnd(25)} | ₹${num.toString().padEnd(6)} | Status: ${t.status}`);
});

console.log(`\n>>> Total Active Staff Monthly Salary Outflow: ₹${activeTotal.toLocaleString('en-IN')}`);
