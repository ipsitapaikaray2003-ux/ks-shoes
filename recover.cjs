const fs = require('fs');

const transcriptPath = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\d1e4d16b-e732-497c-8772-0e911d0109f0\\.system_generated\\logs\\transcript_full.jsonl';
const targetFiles = [
  'ScrollExperience.jsx',
  'ShoeScene.jsx',
  'ShoeModel.jsx',
  'ShoeExploded.jsx',
  'CameraController.jsx',
  'Lighting.jsx',
  'Particles.jsx'
];

const lines = fs.readFileSync(transcriptPath, 'utf-8').split('\n');

for (const line of lines) {
  if (!line.trim()) continue;
  try {
    const json = JSON.parse(line);
    if (json.tool_calls) {
      for (const call of json.tool_calls) {
        if (call.name === 'write_to_file' && call.args && call.args.TargetFile) {
          const targetFile = call.args.TargetFile;
          for (const name of targetFiles) {
            if (targetFile.endsWith(name)) {
              console.log(`Recovering: ${targetFile}`);
              
              // Ensure directory exists
              const dir = targetFile.substring(0, targetFile.lastIndexOf('\\'));
              if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
              }
              
              fs.writeFileSync(targetFile, call.args.CodeContent, 'utf-8');
            }
          }
        }
      }
    }
  } catch(e) {
    // Ignore parse errors on individual lines
  }
}
console.log('Recovery script complete.');
