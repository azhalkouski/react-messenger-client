module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      browsers: 'last 2 versions',
    },
    'postcss-bem-linter': { preset: 'bem' },
    'cssnano': process.env.NODE_ENV === 'production'
      ? {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
        }],
      }
      : false,
  },
};
