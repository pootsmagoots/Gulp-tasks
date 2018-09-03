var gulp = require('gulp'), //require is a function requires a module //
uglify = require('gulp-uglify'),
livereload = require('gulp-livereload'),
concat = require('gulp-concat'),
minifycss = require('gulp-minify-css');

//File paths //
var DIST_PATH = 'public/dist';
var SCRIPTS_PATH = 'public/scripts/**/*.js';
var CSS_PATH = './public/css/**/*.css';

//task is a unit that covers a specific part of your work flow //


//styles
gulp.task('styles', function(){
  console.log('starting styles function');
  return gulp.src(['public/css/reset.css', CSS_PATH]) //passing an array is a glob arguement //
   .pipe(concat('styles.css'))
   .pipe(minifycss())
   .pipe(gulp.dest(DIST_PATH))
   .pipe(livereload());
});


//scripts
gulp.task('scripts', function(){
  console.log('your scripts are running! Catch them!');
  return gulp.src(SCRIPTS_PATH)
   .pipe(uglify())
   .pipe(gulp.dest(DIST_PATH))
   .pipe(livereload());
});

//images
gulp.task('images', function(){
  console.log('images starting function');
});

// gulp default //
gulp.task('default', function(){
  console.log('default function is running');
});



//gulp watch //
gulp.task('watch', function(){
  console.log("starting watch task");
  require('./server.js');
  livereload.listen();
  gulp.watch(SCRIPTS_PATH, ['scripts']);
  gulp.watch(CSS_PATH, ['styles']);
});
