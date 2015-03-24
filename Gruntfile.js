/*global module*/
module.exports = function(grunt) { "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    uglify: {
      dist: {
        options: {
          banner: "/*!<%= pkg.author %>: <%= grunt.template.today(\"dd-mm-yyyy\") %> */\n",
          sourceMap: true,
          compress: {
            "drop_console": true
          }
        },
        files: [{
          src: ["jquery.dataTables.editable.js"],
          dest: "jquery.dataTables.editable.min.js"
        },
        {
          src: ["jquery.dataTables.editable.bootstrap.js"],
          dest: "jquery.dataTables.editable.bootstrap.min.js"
        }]
      }
    },
    eslint: {
      target: ["jquery.dataTables.editable.js", "jquery.dataTables.editable.bootstrap.js"]
    },
    watch: {
      js: {
        files: ["jquery.dataTables.editable.js", "jquery.dataTables.editable.bootstrap.js"],
        tasks: ["uglify:dist"]
      },
      lint: {
        files: ["jquery.dataTables.editable.js", "jquery.dataTables.editable.bootstrap.js", ".eslintrc"],
        tasks: ["eslint"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-eslint");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["eslint", "uglify:dist"]);
  grunt.registerTask("minify", ["uglify:dist"]);
  grunt.registerTask("lint", ["eslint"]);
};
