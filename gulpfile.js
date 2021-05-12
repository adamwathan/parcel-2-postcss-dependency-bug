var postcss = require('gulp-postcss')
var gulp = require('gulp')

gulp.task('css', function () {
  return gulp.src('./src/*.css').pipe(postcss()).pipe(gulp.dest('./dest'))
})

gulp.task('watch', function () {
  gulp.watch('./src/*.css', gulp.series['css'])
})
