const path = require('path');
const ROOT = process.cwd();

module.exports = {
  server: {
    port: 3000,
  },
  limits: {
    images: 8192,
    fonts: 8192,
  },
};
