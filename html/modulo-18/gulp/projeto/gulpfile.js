const gulp = require("gulp")
const concat = require("gulp-concat")
const cssmin = require("gulp-cssmin")
const rename = require("gulp-rename")
const uglify = require("gulp-uglify")
const image = require("gulp-imagemin")

function tarefaCSS(){
    //return gulp.src('./vendor/**/*.css')
    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.min.css',
        './vendor/owl/owl.carousel.min.css',
        './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
        './vendor/jquery-ui/jquery-ui.min.css',
        './src/css/style.css'])
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/css'))
}

function tarefaJS(){
    //return gulp.src('./vendor/**/*.js')
    return gulp.src([
        './node_modules/jquery/jquery-3.7.0.min.js',
        './vendor/bootstrap-5.3.0-alpha3-dist/js/bootstrap.js',
        './vendor/owl/owl.carousel.min.js',
        './vendor/jquery-mask/jquery.mask.js',
        './vendor/jquery-ui/jquery-ui.js',
        './src/js/custom.js'])
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/js'))
}

function tarefasImagem(){
    return gulp.src('./src/images/*')
    .pipe(image({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10,
        quiet: true
    }))
    .pipe(gulp.dest('./dist/images'))
}

exports.styles = tarefaCSS
exports.scripts = tarefaJS
exports.images = tarefasImagem