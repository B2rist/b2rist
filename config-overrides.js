module.exports = function override(config) {
  return { ...config, experiments: { topLevelAwait: true } };
};
