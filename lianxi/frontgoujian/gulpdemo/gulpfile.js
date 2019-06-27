var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
const watch = require("gulp-watch");

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  return watch('js/*.js',{
    ignoreInitial: false
  },()=>{
    return   gulp.src('js/*.js')
       .pipe(uglify())
       .pipe(concat('all.js'))
       .pipe(gulp.dest('build'))
  })


});
