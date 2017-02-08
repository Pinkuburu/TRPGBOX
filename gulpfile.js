// 引入 gulp
var gulp = require('gulp'); 
var webpack = require('webpack');

// 引入组件
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');

// 检查脚本
gulp.task('lint', function() {
    gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// 编译Sass
gulp.task('scss', function() {
    gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('.dist/css'));
});

// 合并，压缩文件
gulp.task('scripts', function() {
    gulp.src('./src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});
//压缩html
gulp.task('htmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('./src/html/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./dist/html'));
});
gulp.task('indexHtmlmin',function(){
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('./src/index.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./dist/index.html'));
})

// 默认任务
gulp.task('default', function(){
    gulp.run('lint', 'sass', 'scripts','htmlmin','indexHtmlmin');

    // 监听文件变化
    gulp.watch('./src/js/*.js', function(){
        gulp.run('lint', 'scripts');
    });
    gulp.watch('./src/scss/*.scss', function(){
        gulp.run('scss');
    });
    gulp.watch('./index.html', function(){
        gulp.run('indexHtmlmin');
    });
    gulp.watch('./src/html/*.html',function(){
        gulp.run('htmlmin');
    })
});