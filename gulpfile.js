/*eslint-env node*/

const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const uglify = require('gulp-uglify');
const pump = require('pump');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');

gulp.task('sass', () =>
    sass('src/**/*.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('dist'))
);

gulp.task('babel', () =>
    gulp.src('src/scripts.concat.js')
        .pipe(babel({
            presets: ['env']
        }))
        .on('error', function(e) {
            console.error(e);
            this.emit('end');
        })
        .pipe(rename('scripts.concat.babel.js'))
        .pipe(gulp.dest('src'))
);

gulp.task('uglify', function (cb) {
  pump([
        gulp.src('src/scripts.bundle.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('htmlmin', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('cssmin', function () {
    gulp.src('dist/styles.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('concatjs', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('scripts.concat.js'))
    .pipe(gulp.dest('src'));
});

gulp.task('browserify', function() {
    gulp.src('src/scripts.concat.babel.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(rename('scripts.bundle.js'))
        .pipe(gulp.dest('src'))
});

gulp.task('watchproject', ['sass'], function () {
    // gulp.watch('src/**/*.scss', ['']); //
	gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/js/*.js', ['concatjs']);
    gulp.watch('src/scripts.concat.js', ['babel']);
    gulp.watch('src/scripts.concat.babel.js', ['browserify']);
    gulp.watch('src/scripts.bundle.js', ['uglify']);
    gulp.watch('src/*.html', ['htmlmin']);
    gulp.watch('dist/styles.css', ['cssmin']);
});

// między babel a uglify musi być browserify scripts.contact.js -o scripts.budle.js // 