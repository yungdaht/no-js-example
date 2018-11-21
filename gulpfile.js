var
  gulp = require('gulp'),
  browserSync = require('browser-sync').create();


gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('default', ['browser-sync']);
