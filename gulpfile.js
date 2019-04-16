'use strict';

const gulp = require('gulp'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    jsmin = require('gulp-jsmin');

const paths = {
    html: {
        src: 'app/index.html',
        dest: 'app/build'
    },
    scripts: {
        src: 'app/scripts/**/*.js',
        dest: 'app/build'
    },
    babelPolyfill: {
        src: 'node_modules/babel-polyfill/dist/polyfill.js'
    },
};

const html = () =>
    gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest));

const scripts = () =>
    gulp.src([paths.babelPolyfill.src, paths.scripts.src])
        .pipe(babel({
            "plugins": [
                "@babel/transform-object-assign",
                "@babel/proposal-object-rest-spread"
            ],
            "presets": [
                [
                    "@babel/env",
                    {
                        "targets": {
                            "browsers": ["last 2 versions"]
                        }
                    }
                ]
            ]
        }))
        .pipe(jsmin())
        .pipe(concat('index.min.js'))
        .pipe(gulp.dest(paths.scripts.dest));

const serve = () => {
    gulp.watch(paths.scripts.src, scripts);
};

const watchTasks = gulp.parallel(serve);
const buildTasks = gulp.series(scripts);

gulp.task('default', watchTasks);
gulp.task('build', buildTasks);
