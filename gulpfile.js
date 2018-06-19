var gulp = require("gulp");
var gScss = require('gulp-sass');
gulp.task('scss', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(gScss())
        .pipe(gulp.dest('./src/css'));
});

gulp.task('watch', function() {
    gulp.watch("src/sass/*.{scss,sass}", ['scss'])
})
gulp.task('default', ["scss", "watch"])