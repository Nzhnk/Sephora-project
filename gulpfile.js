const gulp = require( "gulp" );// 加载gulp模块;
const connect = require( "gulp-connect" );// 加载 gulp-connect 插件;
const babel = require( "gulp-babel" );// 加载gulp-babel 插件；
const sass = require( "gulp-sass-china" );// 加载gulp-sass-china 插件；

gulp.task( "html", () => {
	return gulp
		.src( [ "html/*.html" ] )
		.pipe( gulp.dest( "dist/html" ) )
		.pipe( connect.reload() );//自动刷新;
} );

gulp.task( "html2", () => {
    return gulp
        .src( [ "*.html" ] )
        .pipe( gulp.dest( "dist" ) )
        .pipe( connect.reload() );//自动刷新;
} );

gulp.task( 'server', function(){
    connect.server( {
        root : 'dist',  //以谁为服务器根目录
        port : 8888,  // 端口号 
        livereload : true //开启自动刷新;
    } );
} );
gulp.task( "sass", () => {
	return gulp
        .src( 'scss/*.scss' )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( gulp.dest( 'dist/css' ) );
} );
gulp.task('images',() => {
    return gulp
        .src('images/**')
        .pipe(gulp.dest('dist/images'))//*代表所有
} );
gulp.task('scripts',() => {
    return gulp
        .src('scripts/**/*.js')
        .pipe(gulp.dest('dist/scripts'))//*代表所有
} );
gulp.task('data',() => {
    return gulp
        .src('data/*.json')
        .pipe(gulp.dest('dist/data'))//*代表所有
} );
gulp.task( "watch", () => {
	gulp.watch( [ "scss/*.scss", "images/**", "scripts/**/*.js", "data/*.json", "html/*.html", "*.html" ], [ "sass", "images", "scripts", "data", "html", "html2" ] );
} );
gulp.task( "default", [ "watch", "server" ] );

/*gulp.task( 'es6', () =>{
    return gulp
    .src( 'es6/*.js' )
    .pipe( babel( {
        presets: ['env']
    } ) )
    .pipe( gulp.dest( 'dist/scripts/' ) );
} );*/

