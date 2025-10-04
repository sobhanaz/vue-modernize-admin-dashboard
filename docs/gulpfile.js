//gulpfile.js
const gulp = require("gulp"),
  minifyCSS = require("gulp-clean-css"),
  uglify = require("gulp-uglify"),
  rename = require("gulp-rename"),
  sass = require('gulp-sass')(require('sass'));

const sassFiles = "scss/*.scss",
  cssDest = "dist/css/";

//compile scss into css
function style() {
  return gulp
    .src(sassFiles)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(cssDest));
}

//This is for the minify css
async function minifycss() {
  return gulp
    .src(["dist/css/*.css", "!dist/css/**/*.min.css"])
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(minifyCSS())
    .pipe(gulp.dest(cssDest));
}

async function watch() {
  gulp.watch(["scss/**/*.scss"], style);
  gulp.watch(["dist/css/style.css"], minifycss);
}

gulp.task("default", watch);

exports.style = style;
exports.minifycss = minifycss;
exports.watch = watch;
