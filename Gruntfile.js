module.exports = function(grunt) {
	'use strict';
 
	// configuração do projeto
	var gruntConfig = {
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: ['app/**/**/*.js']
		}
	};
 
	grunt.initConfig(gruntConfig);
 

	grunt.loadNpmTasks('grunt-contrib-jshint');
 
	grunt.registerTask('default', ['jshint']);
};