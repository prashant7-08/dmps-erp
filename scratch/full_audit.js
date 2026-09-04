import fs from 'fs';
import path from 'path';

console.log('=== STARTING FULL SYSTEM AUDIT ===');

const srcDir = './src';

// 1. Read Sidebar.jsx navigation items
const sidebarContent = fs.readFileSync(path.join(srcDir, 'layout', 'Sidebar.jsx'), 'utf-8');
const navIdRegex = /id:\s*['"]([^'"]+)['"]/g;
const navIds = new Set();
let match;
while ((match = navIdRegex.exec(sidebarContent)) !== null) {
  navIds.add(match[1]);
}

console.log(`Found ${navIds.size} unique navigation IDs in Sidebar.jsx.`);

// 2. Read App.jsx and check routing coverage
const appContent = fs.readFileSync(path.join(srcDir, 'App.jsx'), 'utf-8');
const caseRegex = /case\s*['"]([^'"]+)['"]\s*:/g;
const appCases = new Set();
while ((match = caseRegex.exec(appContent)) !== null) {
  appCases.add(match[1]);
}

console.log(`Found ${appCases.size} routed cases in App.jsx.`);

// Check for unrouted item IDs
const unrouted = [];
for (const id of navIds) {
  if (id.endsWith('-group') || id === 'website-view' || id.startsWith('branch-')) continue;
  if (!appCases.has(id)) {
    // Check if targetTab is used
    unrouted.push(id);
  }
}

console.log(`Unrouted Sidebar IDs count: ${unrouted.length}`);
if (unrouted.length > 0) {
  console.log('Unrouted IDs:', unrouted);
}

// 3. Scan all page files in src/pages
const pagesDir = path.join(srcDir, 'pages');
const pageFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));
console.log(`Auditing ${pageFiles.length} page components in src/pages...`);

let hasErrors = false;

pageFiles.forEach(file => {
  const content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
  
  // Check for common broken patterns
  if (content.includes('undefined.') || content.includes('null.')) {
    // Check if there are suspicious unguarded access
  }

  // Check exported component name matches export
  const exportMatch = content.match(/export (?:const|default) ([A-Za-z0-9_]+)/);
  if (!exportMatch) {
    console.warn(`⚠️ Warning: No explicit export found in ${file}`);
  }
});

console.log('=== FULL SYSTEM AUDIT COMPLETE ===');
