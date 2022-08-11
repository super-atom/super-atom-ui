const postcssPresetEnv = require('postcss-preset-env');
const postcssSimpleVars = require('postcss-simple-vars');
module.exports = (api) => {
  // `api.file` - path to the file
  // `api.mode` - `mode` value of webpack, please read https://webpack.js.org/configuration/mode/
  // `api.webpackLoaderContext` - loader context for complex use cases
  // `api.env` - alias `api.mode` for compatibility with `postcss-cli`
  // `api.options` - the `postcssOptions` options

  return {
    // You can specify any options from https://postcss.org/api/#processoptions here
    parser: 'postcss-scss',
    syntax: 'postcss-scss',
    // !!! 순서가 중요하다.
    plugins: [
      'postcss-browser-reporter',
      postcssPresetEnv({
        stage: 0,
        browsers: 'last 2 versions',
        insertBefore: {
          'all-property': postcssSimpleVars,
        },
      }),
      'postcss-import',
      'postcss-url',
      'postcss-short',
      'postcss-map-get',
      'postcss-utilities',
      'postcss-pxtorem',
      'postcss-reporter',
      'postcss-extend-rule',
      'postcss-advanced-variables',
      'postcss-mixins',
      'postcss-atroot',
      'postcss-property-lookup',
      'postcss-nested',
      'lost',
      'cssnano',
      'autoprefixer',
    ],
  };
};
