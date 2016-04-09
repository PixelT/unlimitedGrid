var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    rename       = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass-expanded', function() {
    gulp.src('./*.scss')
        .pipe(sass({
            'outputStyle': 'expanded',
            'indentWidth': 4
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions', 'IE >= 10'],
            cascade: false
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('sass-compressed', function() {
    gulp.src('./*.scss')
        .pipe(sass({
            'outputStyle': 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions', 'IE >= 10'],
            cascade: false
        }))
        .pipe(rename({
            'suffix': '.min'
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('sass', ['sass-expanded', 'sass-compressed']);