module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: [ "./*.js", "tests/*.js" ]
    },
    jscs: {
      src: "./*.js",
      options: {
        preset: "jquery"
      }
    },
    mochaTest: {
      src: [ "tests/*.js" ]
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-jscs");
  grunt.loadNpmTasks("grunt-mocha-test");

  grunt.registerTask("test", "mochaTest");
  grunt.registerTask("default", [ "jshint", "jscs", "test" ]);

};