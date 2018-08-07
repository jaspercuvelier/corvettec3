var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref'); // Zet alle scriptbestanden in één verzamelfile;
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['sass','jsparser','browserSync', 'watch']);



gulp.task('sass', function(){
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});


gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('src/scss/**/*.scss', ['sass']);
  // Other watchers
  gulp.watch('src/**/*.html', ['copy-html']);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', [browserSync.reload , 'jsparser']);
});



gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
})


gulp.task('useref', function(){
  return gulp.src('src/*')

  // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))

});
/* GEBRUIKSVOORBEELD
<!--build:js js/main.min.js -->
<script src="js/lib/a-library.js"></script>
<script src="js/lib/another-library.js"></script>
<script src="js/main.js"></script>
<!-- endbuild -->
*/

gulp.task('jsparser',function(){
 gulp.src('src/js/*.js')
//  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
});

gulp.task('copy-html',function(){
  gulp.src('src/**/*.html')
  .pipe(gulp.dest('dist'))
});
