//3
/**
 * async.series and async.parallel have limitations
 *     1. The task array is static. Once called you can't add or remove tasks.
 *     2. You can't consult how many tasks has been completed, unless you send updates from each task.
 *     3. You're limited to no concurrency or unlimited concurrency.
 * To solve these issues Async.js provides async.queue method
 */

function simple() {
    var async = require('async'),
        concurrency = 2; //0 for infinity concurrency

    function worker(data, next) {
        console.log(data);
        next();
    }

    //Limited parallel execution
    var queue = async.queue(worker, concurrency);

    queue.push(1);
    queue.push([2, 3]);
}
//simple();

function queueTimers() {
    var async = require('async'),
        concurrency = 2; //0 for infinity concurrency

    function worker(data, next) {
        setTimeout(next, data);
    }

    //Limited parallel execution
    var queue = async.queue(worker, concurrency);
    var start = new Date;
    queue.drain = function () {
        console.log('Completed in ' + (new Date - start) + ' ms');
    };
    queue.push([100, 200, 300]);
}
queueTimers();