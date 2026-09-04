import fs from 'fs';
import path from 'path';

console.log('=== CALCULATING EXACT STORAGE & DATABASE FOOTPRINT ===');

// 1. MockData / Database JSON Data Size
const servicePath = './src/services/mockData.js';
let mockDataSize = 0;
if (fs.existsSync(servicePath)) {
  mockDataSize = fs.statSync(servicePath).size;
}

// 2. Dist bundle size
const distPath = './dist';
let distTotalSize = 0;
function getDirSize(dir) {
  let total = 0;
  if (!fs.existsSync(dir)) return 0;
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      total += getDirSize(full);
    } else {
      total += stat.size;
    }
  });
  return total;
}

distTotalSize = getDirSize(distPath);

console.log(`MockData & In-Memory DB Source Size: ${(mockDataSize / 1024).toFixed(2)} KB`);
console.log(`Production Build (dist/) Total Size: ${(distTotalSize / (1024 * 1024)).toFixed(2)} MB`);
