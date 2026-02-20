const fs = require('fs');
const base = 'd:/Devpro/digital-government/app';
function readFile(p) { return fs.readFileSync(p, 'utf8'); }
function writeFile(p, c) { fs.writeFileSync(p, c, 'utf8'); console.log('Written: ' + p); }
