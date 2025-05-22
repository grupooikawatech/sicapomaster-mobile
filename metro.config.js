const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push('db',
  'sqlite'
);

config.transformer.unstable_allowRequireContext = true;

module.exports = config;