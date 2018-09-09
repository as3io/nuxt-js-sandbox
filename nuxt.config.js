module.exports = {
  /**
   *
   */
  build: {
    /**
     *
     * @param {*} config
     * @param {*} ctx
     */
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

  /**
   *
   */
  head: {
    /**
     *
     */
    titleTemplate: chunk => chunk ? `${chunk} | Sandbox` : 'Sandbox',

    /**
     *
     */
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],

    /**
     *
     */
    htmlAttrs: { lang: 'en', dir: 'ltr' },
  },
};
