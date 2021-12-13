const PATHS = require('../config/paths');
const process = require('process');
const path = require('path');
const fs = require('fs');
const folderName = process.argv[2] || 'Project';

try {
  fs.mkdirSync(path.join(PATHS.pages, folderName));
  const exts = ['json', 'pug', 'scss', 'ts'];
  for (const ext of exts) {
    fs.writeFileSync(
      path.join(PATHS.pages, `${folderName}/${folderName}.${ext}`),
      ''
    );
  }
} catch (err) {
  console.log(`Error!`);
  console.log(err);
}
