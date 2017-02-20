// 引入 gulp
var gulp = require('gulp'); 
var webpack = require('webpack');

// 引入组件
var jshint = require('gulp-jshint'); //语法检查
var sass = require('gulp-sass');    //编译sass，由webpack替代
var concat = require('gulp-concat'); //合并js文件，由webpack替代
var uglify = require('gulp-uglify');// 压缩js文件，并丑化
var rename = require('gulp-rename');//重命名文件
var htmlmin = require('gulp-htmlmin'); //压缩html
