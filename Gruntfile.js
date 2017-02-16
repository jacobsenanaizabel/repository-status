module.exports = function(grunt) {
	'use strict';
 
	var gruntConfig = {

		pkg: grunt.file.readJSON('package.json'),
		config: {
			dev: 'app/'
		},
		jshint: {
			all: ['<%= config.prod %>/controller/*.js']
		},
	    jasmine: {
	    	hello: {
	    		src: 'test/assets/js/hello.js',
	    		options: {
	    			specs: 'test/spec/*Spec.js'
	    		}
	    	}
	    },
		watch:{
			options:{
				livereload:true,        
				key: grunt.file.read('c:/OpenSSL-Win64/bin/key/livereload.key'),
        		cert: grunt.file.read('c:/OpenSSL-Win64/bin/key/livereload.crt')
			},
			html:{
				files:'index.html'
			},
			jhint: {
				files:'<%= config.prod %>/controller/*.js',
				task:'build' 	
			},
			js_test:{
				files: 'test/assets/js/hello.js',
				task:'test'
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
	grunt.loadNpmTasks('grunt-contrib-watch');
 
	grunt.registerTask('build', ['jshint']);
	grunt.registerTask('test', ['jasmine']);
	grunt.registerTask('server',['connect:server']);
	grunt.registerTask('live',   ['build','test','connect', 'watch']);

};