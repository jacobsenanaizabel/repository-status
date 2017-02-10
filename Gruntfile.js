module.exports = function(grunt) {
	'use strict';
 
	var gruntConfig = {
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: ['app/**/**/*.js']
		},
		connect:{
			server:{
				options:{
					hostname: 'localhost',
					port:9000,
					keepalive:true,
					open:true
				}
			}
		}
	};
 
	grunt.initConfig(gruntConfig);
 

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
 
	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('server',['connect:server']);
};