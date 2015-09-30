//1
var async = require('async');

/**
 * Async.series test
 * @return {undefined}
 */
function seriesTimer() {
    var start = new Date;
    //Sequential execution
    async.series([
        function (next) {
            setTimeout(function () {
                console.log("seriesTimer: 1");
                next();
            }, 100);
        },
        function (next) {
            setTimeout(function () {
                console.log("seriesTimer: 2");
                next();
            }, 400);
        },
        function (next) {
            setTimeout(function () {
                console.log("seriesTimer: 3");
                next();
            }, 300);
        }
    ], function (err, result) {
        console.log("seriesTimer Completed in " + (new Date - start) + ' ms');
    });
}

/**
 * async.parallel test
 * @return {undefined}
 * parallel is about kicking-off I/O tasks in parallel, not about parallel execution of code. 
 * If your tasks do not use any timers or perform any I/O, they will actually be executed in series. 
 * Any synchronous setup sections for each task will happen one after the other. 
 * JavaScript remains single-threaded.
 */
function parallelTimer() {
    var start = new Date;
    //Parallel execution
    async.parallel([
        function (next) {
            setTimeout(function () {
                console.log("parallelTimer: 1");
                next();
            }, 100);
        },
        function (next) {
            setTimeout(function () {
                console.log("parallelTimer: 2");
                next();
            }, 200);
        },
        function (next) {
            setTimeout(function () {
                console.log("parallelTimer: 3");
                next();
            }, 300);
        }
    ], function (err, result) {
        console.log("parallelTimer Completed in " + (new Date - start) + ' ms');
    });
}

/**
 * async.waterfall test
 * @return {undefined}
 */
function waterfallTimer() {
    var start = new Date;
    //Secuential execution
    async.waterfall([
        function (next) {
            setTimeout(function () {
                console.log("waterfallTimer: 1");
                next(null, new Date - start);
            }, 100);
        },
        function (first, next) {
            setTimeout(function () {
                console.log("waterfallTimer: 2");
                next(null, first, new Date - start - first);
            }, 200);
        },
        function (first, second, next) {
            setTimeout(function () {
                console.log("waterfallTimer: 3");
                next(null, first, second, new Date - start - first - second);
            }, 300);
        }
    ], function (err, first, second, third) {
        console.log(first, second, third);
        console.log("waterfallTimer Completed in " + (new Date - start) + ' ms');
    });
}

/**
 * Forever timer
 * @return {[type]} [description]
 */
function foreverTimer() {
    async.forever(function (next) {
        setTimeout(function () {
            console.log(new Date);
            next();
        }, 1000);
    }, function (err) {
        console.log("Error: ", err);
    });
}

//foreverTimer();
//seriesTimer();
//parallelTimer();
//waterfallTimer();