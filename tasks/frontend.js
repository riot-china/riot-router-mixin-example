var gulp = require('gulp');
var path = require('path');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var webpackConfig = require('../webpack.config');
var sdPath = './web';

gulp.task('watch-webpack', function () {
    gulp.watch([path.join(sdPath, '/js/*/*.js'), path.join(sdPath, '/js/*.js'), path.join(sdPath, '/tags/*.html')], ['webpack']);
});
gulp.task("webpack", function() {
    return gulp
        .src('./web/js/*.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./web/build/js'))
});