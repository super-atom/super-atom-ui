module.exports = (api) => {
  // `api.file` - path to the file
  // `api.mode` - `mode` value of webpack, please read https://webpack.js.org/configuration/mode/
  // `api.webpackLoaderContext` - loader context for complex use cases
  // `api.env` - alias `api.mode` for compatibility with `postcss-cli`
  // `api.options` - the `postcssOptions` options

  return {
    // You can specify any options from https://postcss.org/api/#processoptions here
    parser: require('postcss-scss'),
    plugins: [
      'lost',
      'cssnano',
      'postcss-url',
      'postcss-import',
      'postcss-preset-env',
      'postcss-reporter',
      'postcss-browser-reporter',
      'autoprefixer',
    ],
  };
};
