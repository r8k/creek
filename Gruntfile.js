module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      src: ['public/dist']
    },
    concat: {
      options: {
        stripBanners: true
      },
      css: {
        src: ['public/stylesheets/bootstrap.min.css',
              'public/stylesheets/style.css'],
        dest: 'public/dist/creek.min.css'
      },
      js_login: {
        src: ['public/js/libs/jquery/jquery-min.js',
              'public/js/libs/underscore/underscore-min.js',
              'public/js/libs/backbone/backbone-min.js',
              'public/js/libs/mustache/mustache-min.js',
              'public/js/LoginView.js',
              'public/js/login-app.js',
              'public/js/login.js'],
        dest: 'public/dist/creek-login.min.js'
      },
      js_app: {
        src: ['public/js/libs/jquery/jquery-min.js',
              'public/js/libs/underscore/underscore-min.js',
              'public/js/libs/backbone/backbone-min.js',
              'public/js/libs/mustache/mustache-min.js',
              'public/js/User.js',
              'public/js/UserList.js',
              'public/js/UserView.js',
              'public/js/AppView.js',
              'public/js/index-app.js',
              'public/js/index.js'],
        dest: 'public/dist/creek-index.min.js'
      },
    },
    cssmin: {
      css: {
        src: 'public/dist/creek.min.css',
        dest: 'public/dist/creek.min.css'
      },
    },
    uglify: {
      dist: {
        src: '<%= concat.js_login.dest %>',
        dest: 'public/dist/creek-login.min.js'
      },
    },
    uglify: {
      dist: {
        src: '<%= concat.js_app.dest %>',
        dest: 'public/dist/creek-index.min.js'
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['clean', 'concat', 'uglify', 'cssmin']);
};