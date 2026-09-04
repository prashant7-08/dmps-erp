const fs = require('fs');
const readline = require('readline');
const path = 'C:/Users/computer empire/.gemini/antigravity-ide/brain/3f40f053-2746-448c-9e34-b80861e40da4/.system_generated/logs/transcript.jsonl';

const rl = readline.createInterface({
  input: fs.createReadStream(path),
  crlfDelay: Infinity
});

let userInputs = [];
rl.on('line', (line) => {
  try {
    const data = JSON.parse(line);
    if (data.type === 'USER_INPUT') {
      userInputs.push({ step: data.step_index, content: data.content });
    }
  } catch(e){}
});

rl.on('close', () => {
  console.log('TOTAL USER MESSAGES:', userInputs.length);
  userInputs.forEach((u, i) => {
    console.log('====================================');
    console.log(`MSG #${i + 1} (Step ${u.step}):`);
    console.log(u.content);
  });
});
