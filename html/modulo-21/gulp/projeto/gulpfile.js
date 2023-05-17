const gulp = require("gulp")
const {series, parallel} = require("gulp")
const concat = require("gulp-concat")
const cssmin = require("gulp-cssmin")
const stripCss = require("gulp-strip-css-comments")
const rename = require("gulp-rename")
const uglify = require("gulp-uglify")
const image = require("gulp-imagemin")
const htmlmin = require("gulp-htmlmin")
const babel = require("gulp-babel")
const sass = require('gulp-sass')(require('node-sass'))
const browserSync = require("browser-sync").create()
const reload = browserSync.reload

function tarefaCSS(callback){
    //return gulp.src('./vendor/**/*.css')
    gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './vendor/owl/owl.carousel.min.css',
        './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
        //'./vendor/jquery-ui/jquery-ui.min.css',
        ])
        .pipe(stripCss())
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/css'))

    return callback();
}

function tarefaJS(callback){
    //return gulp.src('./vendor/**/*.js')
    gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './vendor/owl/owl.carousel.min.js',
        './vendor/jquery-mask/jquery.mask.js',
        //'./vendor/jquery-ui/jquery-ui.js',
        './src/js/custom.js'])
    .pipe(babel({comments:false, presets:['@babel/env']}))
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/js'))

    return callback();
}

function tarefasImagem(callback){
    gulp.src('./src/images/*')
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

    return callback();
}

// POC - Proof of Concept
function tarefaHTML(callback){

    gulp.src('./src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'))

    return callback();
}

function tarefaSASS(callback){

    gulp.src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))

    return callback()
}

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch('./src/**/*').on('change', process) //repete o processo quando alterar
    gulp.watch('./src/**/*').on('change', reload)
})

function end(callback){
    console.log("Tarefas Concluidas...")
    return callback()
}

// series x parallel
const process = series(tarefaHTML, tarefaCSS, tarefaJS, tarefaSASS, end)

exports.styles = tarefaCSS
exports.scripts = tarefaJS
exports.images = tarefasImagem
exports.sass = tarefaSASS
exports.default = process