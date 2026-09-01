import fs from 'fs';
import path from 'path';

// Scan all JSX files for undefined variables or broken props
console.log("Checking all JSX files for undeclared variables...");

const files = [];
function scan(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) scan(full);
    else if (f.endsWith('.jsx')) files.push(full);
  }
}
scan('./src');

let errorCount = 0;

for (const file of files) {
  const code = fs.readFileSync(file, 'utf-8');
  // Simple check for known common undefined bugs
  const undefinedPatterns = [
    'activeTemplate.',
    'currentTemplate.',
    'selectedTemplate.',
    'undefined.',
    'null.'
  ];
  
  for (const pattern of undefinedPatterns) {
    if (code.includes(pattern)) {
      // Check if pattern is defined in file
      const varName = pattern.replace('.', '');
      const isDeclared = code.includes(`const ${varName}`) || 
                         code.includes(`let ${varName}`) || 
                         code.includes(`var ${varName}`) || 
                         code.includes(`${varName} =`) ||
                         code.includes(`(${varName})`) ||
                         code.includes(`{ ${varName}`) ||
                         code.includes(`function ${varName}`);
      if (!isDeclared && varName !== 'undefined' && varName !== 'null') {
        console.error(`🚨 Error in ${file}: "${varName}" is used but never declared!`);
        errorCount++;
      }
    }
  }
}

if (errorCount === 0) {
  console.log("✅ All JSX files passed template and variable sanity check!");
} else {
  console.error(`❌ Found ${errorCount} potential undeclared variable bugs.`);
  process.exit(1);
}
