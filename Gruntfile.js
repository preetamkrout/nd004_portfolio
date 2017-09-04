module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-postcss");

    grunt.initConfig({
        copy: {
            main: {
                expand: true,
                cwd: "src",
                src: "**",
                dest: "docs/"
            }
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    require("autoprefixer")
                ]
            },
            dist: {
                src: ["docs/css/*.css"]
            }
        }
    });

    grunt.registerTask("build", ["copy", "postcss:dist"]);
};
