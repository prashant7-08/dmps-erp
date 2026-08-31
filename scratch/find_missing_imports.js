import fs from 'fs';
import path from 'path';

function checkJsxFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  // Check imports
  const importMatch = content.match(/import\s+{([^}]+)}\s+from\s+['"]lucide-react['"]/);
  if (importMatch) {
    const importedIcons = importMatch[1].split(',').map(s => s.trim().split(' as ')[0].trim()).filter(Boolean);
    const iconSet = new Set(importedIcons);

    // Find JSX components like <IconName
    const jsxMatches = content.matchAll(/<([A-Z][a-zA-Z0-9]+)(\s|>|\/)/g);
    for (const m of jsxMatches) {
      const comp = m[1];
      // Check common lucide icons
      const lucideCandidates = ['Receipt', 'FileText', 'CreditCard', 'Printer', 'DollarSign', 'Building2', 'GraduationCap', 'Calendar', 'Clock', 'User', 'Users', 'Bus'];
      if (lucideCandidates.includes(comp) && !iconSet.has(comp) && !content.includes(`const ${comp}`) && !content.includes(`function ${comp}`) && !content.includes(`class ${comp}`) && !content.includes(`import ${comp}`) && !content.includes(`import { ${comp}`)) {
        console.error(`🚨 MISSING IMPORT in ${filePath}: <${comp} /> is used but NOT imported from lucide-react!`);
      }
    }
  }
}

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDir(fullPath);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      checkJsxFile(fullPath);
    }
  }
}

console.log("Scanning src/ for missing Lucide imports...");
scanDir('./src');
console.log("Scan complete!");
