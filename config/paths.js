const path = require('path');

const ROOT = process.cwd();

const PATHS = {
  dist: path.join(ROOT, 'dist'),
  source: path.join(ROOT, 'src'),
};

module.exports = PATHS;
