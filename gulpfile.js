var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('app/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
				.pipe(autoprefixer({
						browsers: ['last 2 versions'],
						cascade: false
				}))
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
});

gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.scss', gulp.parallel('sass'));
});

gulp.task('mytask', function() {
    console.log('Привет, я таск!');
});
