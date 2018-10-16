module.exports = function(grunt) {

  grunt.initConfig({
    postcss: {
      options: {
          map: true, // inline sourcemaps

          processors: [
            require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes 
            require('cssnano')() // minify the result 
            ]
          },
          dist: {
            src: 'style.css'
          }
        },
        sass: {
          dist: {
            files: {
              'styles/css/main.css': 'styles/sass/main.scss'
            }
          }
        },
        watch: {
          sass: {
            files: ['styles/sass/*.scss'],
            tasks: ['sass']
          },
        }
      });
  
  // Load grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');

};