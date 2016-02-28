//starting the game
var gulp = require('gulp');
gulp.task('hello', function() {
  console.log('Hej hej allihopa!');
});

//getting the sass plugin
var sass = require('gulp-sass');
gulp.task('sass', function(){
  return gulp.src('app/scss/*.scss')
    .pipe(sass()) // converts sass to css
    .pipe(gulp.dest('app/css')) //creates .css file in the directory
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Other watchers
})