module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-browserify");

  // Project configuration.
  grunt.initConfig({
    clean: ["dist"],

    copy: {
      src_to_dist: {
        cwd: "src",
        expand: true,
        src: ["**/*.html", "**/*.css"],
        dest: "dist"
      }
    },

    browserify: {
      dist: {
        files: {
          "dist/modules.js": [ "src/js/*.js" ]
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
  grunt.registerTask("default", ["clean", "copy:src_to_dist", "browserify" ]);
};
