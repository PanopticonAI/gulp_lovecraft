/*
 * --->  Loading External Node.js Modules  <------
 */
var gulp = require('gulp');
var connect = require('connect');
var connectLivereload = require('connect-livereload');
var opn = require('opn');
var gulpLivereload = require('gulp-livereload');
var less = require('gulp-less');
var watch = require('gulp-watch');
var stylus = require('gulp-stylus'); // plagin Stylus
var csso = require('gulp-csso'); // minificate CSS
var uglify = require('gulp-uglify'); // minificate JS
var concat = require('gulp-concat');
var connectPHP = require('gulp-connect-php');
var browserSync = require('browser-sync');


//
// ---------->  Main Config  <-------------
//
var config = {

  // this is your local directory to become served as root, 
  // e.g. `localhost:8080` should point to show `index.html` in that directory
	rootDir: __dirname,

  // any port to use for your local server
	servingPort: 8080,

	// the files you want to watch for changes for live reload
  // replace by any glob pattern matching your files
	filesToWatch: ['*.{html,css,js,less,php}', '!Gulpfile.js']
}

//
// ---------->  Gulp Tasks  <-------------
//

gulp.task('default', ['watch', 'serve', 'styles', 'connectPHP']);

// `gulp watch` task watching for file changes
gulp.task('watch', ['connect'], function () {

  // start livereload server (at the default port 35729)
  gulpLivereload.listen();

  // watch for file changes
  gulp.watch(config.filesToWatch, function(file) {

    // get the changed file 
    //   not needed here but useful for fine grained customizations
    gulp.src(file.path)

      // notify server about changes
      .pipe(gulpLivereload());
  });
  
	
});

// `gulp serve` task loading the URL in your browser 
gulp.task('serve', ['connect'], function () {
  // opn('http://localhost:' + config.servingPort);
   opn('http://localhost/gulp_lovecraft');

});


 

// `gulp connect` task starting your server
gulp.task('connect', function(){

  // connect server for our files (unrelated to the livereload server)
  connect()

    // inject JavaScript into our page with `index.html` to listen for change notifications:
    //   <script src="//localhost:35729/livereload.js?snipver=1"></script>
    .use(connectLivereload())

    // specify the root directory for our connect server
    .use(connect.static(config.rootDir))

    // start the server at the given port
    //   now we can view our `index.html` in the root under `localhost:port`
    .listen(config.servingPort);

});


  gulp.watch('css/**', function(event) {
        gulp.run('styles');
})


 // less

gulp.task('styles', function() {
    gulp.src(['css/style.less'])
        .pipe(less())
        .pipe(csso())
        .pipe(gulp.dest('css/'))
        .pipe(gulpLivereload(connect))
})


gulp.task('connectPHP', function() {
    //connectPHP.server();
/*	
	connectPHP.server({
        base: './php/'
    });
	*/
});

/*
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    port: 8080,
    open: true,
    notify: false
  });
});



// ////////////////////////////////////////////////
// Browser-Sync
// // /////////////////////////////////////////////
gulp.task('browserSync', function() {
  browserSync({
    proxy:'127.0.0.1',
    port:8080
  });
});

// /////////////////////////////////////////////////
// PHP
// ////////////////////////////////////////////////
gulp.task('php', function(){
  connectPHP.server({ base: './', keepalive:true, hostname: 'localhost', port:8080, open: false});
});

********************************/

/*
// ///////////////////////////////////////////////
var paths = {
  html:['./*.php'],
  css:['./*.less'],
  script:['./*.js']
};

gulp.task('styles', function(){
  return gulp.src(paths.css)
    .pipe(less().on('error', less.logError))
    .pipe(csso())
    .pipe(gulp.dest('css/'))
    .pipe(reload({stream:true}));
});

// ////////////////////////////////////////////////
// HTML
// ///////////////////////////////////////////////
gulp.task('html', function(){
  gulp.src(paths.html)
  .pipe(reload({stream:true}));
});

// ////////////////////////////////////////////////
// Browser-Sync
// // /////////////////////////////////////////////
gulp.task('browserSync', function() {
  browserSync({
    proxy:'127.0.0.1',
    port:8080
  });
});

// /////////////////////////////////////////////////
// PHP
// ////////////////////////////////////////////////
gulp.task('php', function(){
  connectPHP.server({ base: './', keepalive:true, hostname: 'localhost', port:8080, open: false});
});

gulp.task('scripts', function(){
  return gulp.src(paths.script)
    .pipe(coffee())
    .pipe(gulp.dest('js'))
    .pipe(reload({stream:true}));
});

gulp.task('watcher',function(){
  gulp.watch(paths.css, ['styles']);
  gulp.watch(paths.script, ['scripts']);
  gulp.watch(paths.html, ['html']);
});

gulp.task('default', ['watcher', 'browserSync', 'php']);
 
 */