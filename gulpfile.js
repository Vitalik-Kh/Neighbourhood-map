var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');
    concat = require('gulp-concat');
    rename = require('gulp-rename');
    uglify = require('gulp-uglify');


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
        .pipe(gulp.dest('dist/styles/'));
});

var jsFiles = [
    'js/placesModel.js',
    'js/mapView.js',
    'js/listView.js',
    'js/app.js'
];
gulp.task('scripts', function() {
    return gulp.src(jsFiles)
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('watch', function() {
    gulp.watch('styles/sass/*.scss', ['sass']);
    gulp.watch('js/*.js', ['scripts']);
});

gulp.task('default', ['sass', 'scripts']);
