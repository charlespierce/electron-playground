const gulp = require("gulp");
const path = require("path");
const ts = require("gulp-typescript");
const clean = require("gulp-clean");

const tsProject = ts.createProject("tsconfig.json");
const outDir = "dist/";
const tsSource = "src/**/*.ts";
const staticSource = ["src/**/*", "!" + tsSource];

function buildTs() {
    return gulp.src(tsSource).pipe(tsProject()).js.pipe(gulp.dest(outDir));
}

function buildStatic() {
    return gulp.src(staticSource).pipe(gulp.dest(outDir));
}

gulp.task("clean", function () {
    return gulp.src(path.join(outDir, "*")).pipe(clean());
});

gulp.task("build:ts", buildTs);
gulp.task("build:ts:clean", ["clean"], buildTs);

gulp.task("build:static", buildStatic);
gulp.task("build:static:clean", ["clean"], buildStatic);

gulp.task("build", ["clean", "build:ts:clean", "build:static:clean"]);

gulp.task("watch", ["build"], function () {
    gulp.watch(staticSource, ["build:static"]);
    gulp.watch(tsSource, ["build:ts"]);
});
