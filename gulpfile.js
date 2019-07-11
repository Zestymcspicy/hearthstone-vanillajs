'use strict'
var gulp = require('gulp');
var browsersync = require('browser-sync').create();

gulp.task("serve", function() {
  browsersync.init({
    server: {
      baseDir: "./",
    }
    online: true,
    tunnel: "mylocal",
  })
})

gulp.task('default', ['serve'], function() {
  gulp.watch("*.html", browsersync.reload)
  gulp.watch("css/*.css", browsersync.reload)
  gulp.watch("js/index.js", browsersync.reload)
})


// https://mylocal.localtunnel.me
