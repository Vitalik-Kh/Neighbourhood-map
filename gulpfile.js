var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('webserver', function() {
  connect.server({livereload: true});
});

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};
gulp.task('sass', function() {
    return gulp.src('styles/sass/*.scss')
        .pipe(sass(sassOptions)).on('error', sass.logError)
        .pipe(autoprefixer())
        .pipe(gulp.dest('styles/css/'));
});

gulp.task('watch', function() {
    return gulp.watch('styles/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
