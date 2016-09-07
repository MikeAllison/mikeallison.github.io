var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('copyjslibs', function() {
   gulp.src([
     'bower_components/jquery/dist/jquery.js',
     'bower_components/what-input/what-input.js',
     'bower_components/foundation-sites/dist/foundation.js'
   ])
   .pipe(gulp.dest('./js'));
});

gulp.task('connect', function() {
  $.connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe($.connect.reload());
});

gulp.task('js', function () {
  gulp.src('./js/app.js')
    .pipe($.connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./*.html', './js/app.js'], ['html', 'js']);
});

gulp.task('default', ['sass', 'copyjslibs', 'connect', 'watch'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
