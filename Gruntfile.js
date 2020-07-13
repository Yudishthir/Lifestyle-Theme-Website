module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		cssmin: {
			sitecss: {
				options: {
					banner: "",
				},
				files: {
					"dist/css/style.min.css": ["dist/css/style.css"],
				},
			},
		},
		uglify: {
			options: {
				compress: true,
			},
			build: {
				src: ["dist/js/script.js"],
				dest: "dist/js/script.min.js",
			},
		},
	});
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	// Default task.
	grunt.registerTask("default", ["uglify", "cssmin"]);
};
