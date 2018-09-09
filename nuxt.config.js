module.exports = {
  build: {
    extend(config, ctx) {
      const { isDev, isClient } = ctx;
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    },
  },
};
