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
        }]
      }
    },
    eslint: {
      target: ["jquery.dataTables.editable.js"]
    },
    watch: {
      js: {
        files: ["jquery.dataTables.editable.js"],
        tasks: ["uglify:dist"]
      },
      lint: {
        files: ["jquery.dataTables.editable.js", ".eslintrc"],
        tasks: ["eslint"]
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: ""
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-eslint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");

  grunt.registerTask("default", ["eslint", "uglify:dist"]);
  grunt.registerTask("minify", ["uglify:dist"]);
  grunt.registerTask("lint", ["eslint"]);
  grunt.registerTask("serve", ["connect"]);

  grunt.registerTask("dev", "Lint, minify, serve index.html, and watch for changes", function() {
    grunt.task.run(["default", "serve", "watch"]);
  });
};
