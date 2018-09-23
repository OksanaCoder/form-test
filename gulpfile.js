var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cssmin = require('gulp-clean-css'),
	htmlmin = require('gulp-htmlmin'),
	uglify = require('gulp-uglify'),
	browserSync = require("browser-sync"),
	reload = browserSync.reload;;

var path = {
	build: {
		html: 'build/',
		js: 'build/js/',
		css: 'build/css/',
	},
	src: {
		html: 'src/index.html',
		js: 'src/js/*.js',
		style: 'src/style/main.scss',
	},
	watch: {
		html: 'src/**/*.html',
		js: 'src/js/**/*.js',
		style: 'src/style/**/*.scss',
		css: 'src/style/**/*.css',
	}

};

gulp.task('minify', () => {
  return gulp.src(path.src.html)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(path.build.html));
});

gulp.task('scripts', function () {
	gulp.src(path.src.js)
		.pipe(uglify())
		.pipe(gulp.dest(path.build.js));
});



gulp.task('styles', function () {
	  gulp.src(path.src.style)
        .pipe(sass())
          .pipe(cssmin())
        .pipe(gulp.dest(path.build.css));
});


 gulp.task('browser-sync', function () { 
	browserSync({ 
		server: { 
			baseDir: 'build'
		},
		notify: false 
	});
}); 
gulp.task('build', ['minify', 'scripts', 'styles', 'browser-sync']);

gulp.task('watch', function () {
	gulp.watch(path.watch.html, ['minify']);
	gulp.watch(path.watch.style, ['styles']);
	gulp.watch(path.watch.css, ['styles']);
	gulp.watch(path.watch.js, ['scripts']);
	gulp.watch(path.watch.html, browserSync.reload);
	gulp.watch(path.watch.style, browserSync.reload);
	gulp.watch(path.watch.js, browserSync.reload);
});

gulp.task('default', ['build', 'watch']);
