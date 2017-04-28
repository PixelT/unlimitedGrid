var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({pattern: '*'});

// ----- compile sass [expanded] --------------------------
gulp.task('sass-expanded', function() {
    gulp.src('ug-grid.scss')
        .pipe($.sass({
            'outputStyle': 'expanded',
            'indentWidth': 4
        }).on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: ['last 3 versions', 'IE >= 10'],
            cascade: false
        }))
        .pipe(gulp.dest(''))
        .pipe($.browserSync.stream({match: '**/*.css'}));
});

// ----- compile sass [compressed] ------------------------
gulp.task('sass-compressed', function() {
    gulp.src('ug-grid.scss')
        .pipe($.sass({
            'outputStyle': 'compressed'
        }).on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: ['last 3 versions', 'IE >= 10'],
            cascade: false
        }))
        .pipe($.rename({
            'suffix': '.min'
        }))
        .pipe(gulp.dest(''))
        .pipe($.browserSync.stream({match: '**/*.css'}));
});

// ----- watch demo ---------------------------------------
gulp.task('watch-demo', ['sass-expanded', 'sass-compressed'], function() {
    gulp.watch('demo.html').on('change', $.browserSync.reload);
    gulp.watch('**/*.scss', ['sass-expanded', 'sass-compressed']);
    $.browserSync.init({
        notify: false,
        server: {
            baseDir: './',
            index: 'demo.html',
        }
    });
});

// ----- default task -------------------------------------
gulp.task('default', ['sass-expanded', 'sass-compressed']);
