const { merge } = require('webpack-merge');
const common = require('./config/webpack.common');
const dev = require('./config/webpack.dev');
const prod = require('./config/webpack.prod');

module.exports = (env) => {
  if (env.mode === 'development') {
    return merge(common, dev);
  }

  if (env.mode === 'production') {
    return merge(common, prod);
  }
};
