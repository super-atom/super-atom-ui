/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const deepMerge = require('deepmerge');
const webConfig = require('./libs/web');
const StyleDictionary = require('style-dictionary');

// PATHS
const basePath = './tokens/';
const buildPath = path.resolve('./dist', basePath);

const StyleDictionaryExtended = StyleDictionary.extend({
  // adding imported configs
  ...deepMerge.all([webConfig]),
  source: [basePath + 'input/*.json'],
  platforms: {
    css: {
      transformGroup: 'custom/css',
      buildPath: buildPath + '/css/',
      options: {
        fontFamilies: {
          'Akzidenz-Grotesk Pro': '"Akzidenz-Grotesk Pro", sans-serif',
        },
      },
      files: [
        {
          filter: require('./libs/web/filterWeb'),
          format: 'custom/css',
          destination: 'variables.css',
        },
      ],
    },
    scss: {
      transformGroup: 'custom/css',
      buildPath: buildPath + '/scss/',
      files: [
        {
          filter: require('./libs/web/filterWeb'),
          format: 'scss/variables',
          destination: 'variables.scss',
        },
      ],
    },
  },
});

StyleDictionaryExtended.buildAllPlatforms();
