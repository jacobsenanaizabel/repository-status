module.exports = function(grunt) {
	'use strict';
 
	var gruntConfig = {

		pkg: grunt.file.readJSON('package.json'),

		//Jshint
		jshint: {
			all: ['app/**/**/*.js']
		},
		//Jasmine
	    jasmine: {
	    	hello: {
	    		src: 'assets/js/hello.js',
	    		options: {
	    			specs: 'spec/*Spec.js'
	    		}
	    	}
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
	}


 
	grunt.initConfig(gruntConfig);
 
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
 
	grunt.registerTask('build', ['jshint']);
	grunt.registerTask('test', ['jasmine']);
	grunt.registerTask('server',['connect:server']);
};