import fs from 'fs';

const filePath = './src/services/mockData.js';
let content = fs.readFileSync(filePath, 'utf8');

const routeMap = {
  '"route": "Route 0"': '"route": "Route 1: Jargwan - Baraura"',
  '"route": "Route 1"': '"route": "Route 1: Jargwan - Baraura"',
  '"route": "Route 2"': '"route": "Route 2: Barheti - Ramghat"',
  '"route": "Route 3"': '"route": "Route 3: Sadharanpur - Kaser"',
  '"route": "Route 4"': '"route": "Route 4: Dibai Road - Jahangirpur"',
  '"route": "Route 5"': '"route": "Route 5: Naraura - Dharampur"',
  '"route": "Route 6"': '"route": "Route 6: Anoopshahr Crossing"'
};

for (const [oldVal, newVal] of Object.entries(routeMap)) {
  content = content.replaceAll(oldVal, newVal);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated all route names in mockData.js!');
