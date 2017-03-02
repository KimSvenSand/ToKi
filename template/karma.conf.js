module.exports = function(config) {
  config.set({
    basepath: '',
    frameworks: ['mocha', 'browserify', 'chai' ],

    files: [
      'js/functions.js',
      'test/*.js'
    ],

    preprocessors: {
      'js/**/*.js': ['browserify'],
      'test/**/*.js': ['browserify']
    },

    browsers: ['Chromium'],

    browserify: {
      debug: true,
      transform: [
        [ 'babelify', { plugins: [ 'transform-es2015-modules-commonjs' ] } ]
      ]
    }
  });
};
