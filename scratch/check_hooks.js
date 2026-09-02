import fs from 'fs';
import path from 'path';

function checkHooks(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      checkHooks(full);
    } else if (f.endsWith('.jsx') || f.endsWith('.js')) {
      const content = fs.readFileSync(full, 'utf-8');
      
      const hooks = ['useEffect', 'useState', 'useRef', 'useMemo', 'useCallback', 'useContext'];
      for (const hook of hooks) {
        const regex = new RegExp('\\b' + hook + '\\b');
        if (regex.test(content)) {
          const importRegex = new RegExp("import\\s+[^;]*?\\b" + hook + "\\b[^;]*?from\\s+['\"]react['\"]");
          const reactDotRegex = new RegExp("React\\." + hook);
          if (!importRegex.test(content) && !reactDotRegex.test(content)) {
            console.error(`❌ [MISSING HOOK] ${hook} in ${full}`);
            process.exit(1);
          }
        }
      }
    }
  }
}

console.log('Validating all React Hook imports across src/ ...');
checkHooks(path.resolve('src'));
console.log('✅ All React Hook imports are 100% valid!');
