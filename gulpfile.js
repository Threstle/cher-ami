// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var compass = require('gulp-compass');
var imagemin = require('gulp-imagemin');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var stripDebug = require('gulp-strip-debug');
var autoprefixer = require('gulp-autoprefixer');


// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .on('error',function(error){
            console.error(''+error);
        });
});

// Compile our Handlebar

gulp.task('templates', function(){
  gulp.src('templates/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('dist/js/'));
});

// Compile Our Sass
gulp.task('styles', function() {
  gulp.src('sass/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'dist/stylesheets',
      sass: 'sass'
    }))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
    }))
    .pipe(gulp.dest('dist/stylesheets'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('all.min.js'))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Compress imgs
gulp.task('imagemin', function () {
    return gulp.src('src/img/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('dist/img'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['lint', 'scripts']);
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('templates/*.hbs', ['templates']);
});

// Default tasks
gulp.task('build', ['imagemin','templates','styles','scripts']);
gulp.task('dev', ['lint', 'build', 'watch']);

