module.exports = function(grunt) {
	grunt.initConfig({

		browserify: {
			dist: {
				src: ['src/js/mjo.js'],
				dest: 'dist/js/mjo.js'
			}
		},

		uglify: {
			dist: {
				src: ['dist/js/mjo.js'],
				dest: 'dist/js/mjo.min.js'
			}
		},

		sass: {
			dist: {
				src: ['src/sass/mjo.scss'],
				dest: 'dist/css/mjo.css',
				options: {
					loadPath: 'node_modules'
				}	
			}
		},

        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer-core')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'dist/css/*.css'
            }
        },

        vulcanize: {
        	elements: {
        		src: ['src/elements.html'],
        		dest: 'dist/elements.html'
        	}
        },

        copy: {
            data: {
                files: [{
                    expand: true,
                    cwd: 'src/data/',
                    src: '**',
                    dest: 'dist/data/'
                }]
            },
        	font: {
        		files: [{
        			expand: true,
        			cwd: 'src/font/',
        			src: '**',
        			dest: 'dist/font/'
        		}]
        	},
        	img: {
        		files: [{
        			expand:true,
        			cwd: 'src/img/',
        			src: '**',
        			dest: 'dist/img/'
        		}]
        	}, 
        	index: {
        		files: [{
        			expand: true,
        			cwd: 'src',
        			src: 'index.html',
        			dest: 'dist/'
        		}]
        	},
        	bower: {
        		files: [{
        			expand: true,
        			src: ['bower_components/**'],
        			dest: 'dist/'
        		}]
        	}
        },

        watch: {
        	sass: {
        		files: ['src/sass/**'],
        		tasks: ['sass', 'postcss']
        	},
            data: {
                files: ['src/data/**'],
                tasks: ['copy:data']
            },
        	img: {
        		files: ['src/img/**'],
        		tasks: ['copy:img']
        	},
        	font: {
        		files: ['src/font/*'],
        		tasks: ['copy:font']
        	},
        	js: {
        		files: ['src/js/**'],
        		tasks: ['browserify', 'uglify']
        	},
        	index: {
        		files: ['src/index.html'],
        		tasks: ['copy:index']
        	},
        	elements: {
        		files: ['src/elements.html', 'src/elements/**'],
        		tasks: ['vulcanize']
        	}
        }
    })

    grunt.loadNpmTasks('grunt-postcss')
    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-browserify')
    grunt.loadNpmTasks('grunt-vulcanize')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-copy')

    grunt.registerTask('default', ['browserify', 'vulcanize', 'uglify', 'sass', 'postcss', 'copy'])
}