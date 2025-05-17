const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

const assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');

config.resolver = {
  ...config.resolver,
  assetExts: assetExts,
  sourceExts: [...config.resolver.sourceExts, 'svg'],
};

module.exports = config;