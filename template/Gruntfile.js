module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-browserify");

  // Project configuration.
  grunt.initConfig({
    clean: {
      dist: ["dist"],
      test: ["test"]
    },

    copy: {
      src_to_dist: {
        cwd: "src",
        expand: true,
        src: ["**/*.html", "**/*.css"],
        dest: "dist"
      }
    },

    babel: {
      options: {
        sourceMap: true,
        plugins: [ "transform-es2015-modules-commonjs" ]
      },
      dist: {
        files:
        [
          {
            cwd: 'src',
            expand: true,
            src: ['js/*.js'],
            dest: 'dist'
          }
        ]
      },
      test: {
        files: [
          {
            cwd: 'es6-test',
            expand: true,
            src: ['*.js'],
            dest: 'test'
          }
        ]
      }
    },

    browserify: {
      dist: {
        files: {
          "dist/js/modules.js": [ "src/js/modules.js" ]
        },
        options: {
          transform: [
            [ "babelify", {
              plugins: [ "transform-es2015-modules-commonjs" ]
            } ]
          ]
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.registerTask("default", ["clean:dist", "copy:src_to_dist", "babel:dist", "browserify" ]);
  grunt.registerTask("test", ["clean:test", "babel:test"]);
};
