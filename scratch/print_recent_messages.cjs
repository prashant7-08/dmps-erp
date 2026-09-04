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
      const match = data.content.match(/<USER_REQUEST>([\s\S]*?)<\/USER_REQUEST>/);
      const req = match ? match[1].trim() : data.content;
      const timeMatch = data.content.match(/The current local time is: (.*?)\./);
      const time = timeMatch ? timeMatch[1] : '';
      userInputs.push({ step: data.step_index, request: req, time });
    }
  } catch(e){}
});

rl.on('close', () => {
  console.log('TOTAL:', userInputs.length);
  const startIdx = Math.max(0, userInputs.length - 25);
  userInputs.slice(startIdx).forEach((u, i) => {
    console.log('--------------------------------------------------');
    console.log('INDEX #' + (startIdx + i + 1) + ' | TIME: ' + u.time);
    console.log('REQUEST: ' + u.request);
  });
});
