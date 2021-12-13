const path = require('path');

const ROOT = process.cwd();

const PATHS = {
  dist: path.join(ROOT, 'dist'),
  source: path.join(ROOT, 'src'),
  pages: path.join(ROOT, 'src/views/pages'),
};

module.exports = PATHS;
