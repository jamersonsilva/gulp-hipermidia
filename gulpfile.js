const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');


gulp.task('clean', function() {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('build-img', function() {
    gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});