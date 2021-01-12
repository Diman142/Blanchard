const { src, dest, series, watch } = require('gulp')
const sass = require('gulp-sass')
const csso = require('gulp-csso')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const imagemin = require('gulp-imagemin');
const sync = require('browser-sync').create()

function html() {
  return src('src/**.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest('dist'))
}

function scss() {
  return src('src/scss/**.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions']
    }))
    .pipe(csso())
    .pipe(concat('style.css'))
    .pipe(dest('dist/css'))
}

function css() {
  return src('src/scss/**.scss')
    .pipe(sass())
    .pipe(dest('src/css'))
}


function js() {
  return src('src/js/*.js')
    .pipe(dest('./dist/js'))
}

function clear() {
  return del('dist')
}

function copyFonts() {
  return src('./src/fonts/*')
    .pipe(dest('dist/fonts'))
}

function copyIcons() {
  return src('./src/icons/*')
    .pipe(imagemin())
    .pipe(dest('dist/icons'))
}

function copyImg() {
  return src('./src/img/*')
    .pipe(imagemin())
    .pipe(dest('dist/img'))
}

function serve() {
  sync.init({
    server: './dist'
  })

  watch('src/**.html', series(html)).on('change', sync.reload)
  watch('src/scss/**/*.scss', series(scss, css)).on('change', sync.reload)
  watch('src/js/*.js', series(js)).on('change', sync.reload)
}

exports.build = series(clear, scss, html, copyFonts, copyIcons, copyImg, js)
exports.serve = series(clear, scss, html, copyFonts, copyIcons, copyImg, js, serve)

