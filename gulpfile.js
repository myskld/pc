var gulp = require("gulp"),
	sass = require("gulp-sass"),
	livereload = require("gulp-livereload");

gulp.task("sass", function(){
	gulp.src("sass/*.scss")
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(desk("disk/css"))
		.pipe(livereload());
});


gulp.task("watch", function(){
	livereload.listen();
	gulp.watch("sass/*.scss", ["sass"]);
});