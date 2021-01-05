const $ = require('gulp-load-plugins')({'pattern': '*'});
const indentation = 4;

// ----- init browser-sync --------------------------------
$.gulp.task('browser-sync', () => {
    return $.browserSync.init({
        notify: false,
        open: false,
        server: {
            baseDir: './',
            index: 'demo.html',
        }
    });
});

// ----- compile sass [expanded] --------------------------
$.gulp.task('sass-expanded', () => {
    return $.gulp.src('ug-grid.scss')
	.pipe($.plumber({
		errorHandler (err) {
			$.notify.onError({
				title: (err) => `${err.file.replace(`${process.cwd()}/`, '')}:${err.line}:${err.column}`,
				message: (err) => err.messageOriginal.trim(),
				sound: 'Frog',
			})(err)
			this.emit('end');
		}
	}))
    .pipe($.sass({
        outputStyle: 'expanded',
        indentWidth: indentation
    }))
    .pipe($.autoprefixer())
    .pipe($.gulp.dest('.'))
    .pipe($.browserSync.stream({match: '**/*.css'}));
});

// ----- compile sass [compressed] ------------------------
$.gulp.task('sass-compressed', () => {
    return $.gulp.src('ug-grid.scss')
	.pipe($.plumber({
		errorHandler (err) {
			$.notify.onError({
				title: (err) => `${err.file.replace(`${process.cwd()}/`, '')}:${err.line}:${err.column}`,
				message: (err) => err.messageOriginal.trim(),
				sound: 'Frog',
			})(err)
			this.emit('end');
		}
	}))
    .pipe($.sass({
        outputStyle: 'compressed'
    }))
    .pipe($.autoprefixer())
    .pipe($.rename({
        'suffix': '.min'
    }))
    .pipe($.gulp.dest('.'))
    .pipe($.browserSync.stream({match: '**/*.css'}));
});

// ----- watch demo ---------------------------------------
$.gulp.task('watch-demo', $.gulp.parallel(['sass-expanded', 'sass-compressed', 'browser-sync'], () => {
    $.gulp.watch('demo.html').on('change', $.browserSync.reload);
    $.gulp.watch('**/*.scss', $.gulp.parallel(['sass-expanded', 'sass-compressed']));
}));

// ----- default task (compile scss) ----------------------
$.gulp.task('default', $.gulp.series('sass-expanded', 'sass-compressed'));
