const fs = require('fs');

['1', '2', '3'].forEach(n => {
  const file = `create-sections-${n}.mjs`;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/fs\.writeFileSync\(.*/g, "fs.writeFileSync('src/components/sections/' + name + '.jsx', content);");
  fs.writeFileSync(file, content);
});
console.log('Fixed scripts');
