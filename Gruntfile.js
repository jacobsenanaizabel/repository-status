module.exports = function(grunt) {
	'use strict';
 
	var gruntConfig = {

		pkg: grunt.file.readJSON('package.json'),
		config: {
			dev: 'app/',
			key: 'insira aqui o path da sua key',
			cert: 'insira aqui o path da sua certificadora'

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
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'content/css/style.css': 'content/css/main.scss'
				}
			}
		},
		watch:{
			options:{
				livereload:true        
			//	key: grunt.file.read('<%= config.key %>'),
        	//	cert: grunt.file.read('<%= config.cert %>')
			},
			html:{
				files:'index.html'
			},
			sass: {
	    		files: 'content/css/*.scss',
	    		tasks: 'css'
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
 
 	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-watch');
 
	grunt.registerTask('css', ['sass']);
	grunt.registerTask('build', ['jshint']);
	grunt.registerTask('test', ['jasmine']);
	grunt.registerTask('server',['connect:server']);
	grunt.registerTask('live',   ['build','test','connect', 'watch']);

};