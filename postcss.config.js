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
    plugins: [
      'postcss-browser-reporter',
      'lost',
      'cssnano',
      'postcss-mixins',
      'postcss-url',
      'postcss-short',
      'postcss-import',
      'postcss-simple-vars',
      'postcss-reporter',
      'precss',
      'autoprefixer',
    ],
  };
};
