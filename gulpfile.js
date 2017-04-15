const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {

})

gulp.task('build', () => {
  return gulp.src('src/**')
    .pipe(babel())
    .pipe(gulp.dest('lib'));
})

gulp.task('watch', () => {
  gulp.watch('src/**', () => {
    gulp.start('build');
  })
})
