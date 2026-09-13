import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../..');

const targetDirs = [
  path.join(rootDir, 'saas-corporate-website', 'src'),
  path.join(rootDir, 'school-management-frontend', 'src'),
  path.join(rootDir, 'school-management-frontend', 'saas-corporate-website', 'src'),
];

function replaceInDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      replaceInDir(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.jsx') || entry.name.endsWith('.js') || entry.name.endsWith('.html'))) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let original = content;

      content = content.replace(/PKR EDUTECH GLOBAL IT SERVICES/g, 'PKR ENTERPRISES');
      content = content.replace(/PKR EDUTECH/g, 'PKR ENTERPRISES');
      content = content.replace(/PKR EduTech/g, 'PKR ENTERPRISES');
      content = content.replace(/PKR EduTech Team/g, 'PKR ENTERPRISES Team');
      content = content.replace(/Hello PKR EDUTECH/g, 'Hello PKR ENTERPRISES');

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf-8');
        console.log(`Updated branding in: ${fullPath}`);
      }
    }
  }
}

for (const dir of targetDirs) {
  replaceInDir(dir);
}

console.log('Branding replacement complete!');
