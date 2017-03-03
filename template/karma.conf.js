module.exports = function(config) {
  config.set({
    basepath: '',
    frameworks: ['mocha', 'browserify', 'chai' ],

    files: [
      'src/js/calculator.js',
      'test/*.js'
    ],

    preprocessors: {
      'src/js/**/*.js': ['browserify'],
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
