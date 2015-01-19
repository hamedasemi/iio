var gulp = require('gulp');

gulp.task('support:tasks', function() {

    var colors = require('chalk');
    console.log(
        colors.yellow('\nAvailable tasks and sub tasks') +
        '\n-----------------------------\n'
    );

    for (var task in gulp.tasks) {
        console.log('   ' + colors.bold.blue(gulp.tasks[task].name));
    }
    console.log(
        colors.yellow('\n As an example you can run') +
        '\n--------------------------\n' +
        colors.bold.black('   ' + '$ iio ') +
        colors.gray.bold('js less:watch\n')
    );
});
