var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function(){
 return gulp.src('app/scss/**/*.scss')
 .pipe(sass())
 .pipe(gulp.dest('app/css'));
});
gulp.task('watch', function(){
 gulp.watch('app/scss/**/*.scss', ['sass']);
}); 


gulp.task('svgstore', function(){
   return gulp
    .src('app/img/svg/*.svg')
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(rename({basename: 'sprite'}))
    .pipe(gulp.dest('./img'));
});