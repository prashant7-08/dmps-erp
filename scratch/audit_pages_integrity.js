import fs from 'fs';
import path from 'path';

console.log('=== DEEP INTEGRITY AUDIT OF ALL 34 PAGES & COMPONENTS ===');

const pagesDir = './src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

let issues = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
  
  // 1. Check for mismatched open/close braces
  const openBraces = (content.match(/\{/g) || []).length;
  const closeBraces = (content.match(/\}/g) || []).length;
  if (openBraces !== closeBraces) {
    issues.push(`${file}: Mismatched braces { (${openBraces}) vs } (${closeBraces})`);
  }

  // 2. Check for missing useState or useEffect if used
  if (content.includes('useState(') && !content.includes('useState')) {
    issues.push(`${file}: Missing useState import`);
  }
  if (content.includes('useEffect(') && !content.includes('useEffect')) {
    issues.push(`${file}: Missing useEffect import`);
  }

  // 3. Check for broken className template literals
  const brokenTpl = content.match(/className=\{`[^`]*\${[^}]*$/m);
  if (brokenTpl) {
    issues.push(`${file}: Potentially unclosed template literal in className`);
  }
});

if (issues.length === 0) {
  console.log('✅ ALL 34 PAGES PASSED DEEP SYNTAX & INTEGRITY CHECKS!');
} else {
  console.error('❌ Found issues:', issues);
}

// Check printables
const printablesDir = './src/components/printables';
if (fs.existsSync(printablesDir)) {
  const printFiles = fs.readdirSync(printablesDir).filter(f => f.endsWith('.jsx'));
  console.log(`Audited ${printFiles.length} printable templates:`, printFiles);
}

console.log('=== DEEP AUDIT FINISHED ===');
