//2
var async = require('async');

/**
 * Async spaghetti
 * @return {[type]} [description]
 */
function spaghetti() {
    async.parallel({
        getOne: function (next) {
            setTimeout(function () {
                next(null, 1);
            }, 100);
        },
        getTwo: function (next) {
            setTimeout(function () {
                next(null, 2);
            }, 100);
        }
    }, function (err, results) {
        if (err) {
            console.log(err);
            return;
        }
        async.waterfall([
            function (next) {
                setTimeout(function () {
                    next(null, results.getOne + results.getTwo);
                }, 100);
            },
            function (result, next) {
                next(null, {
                    "name": "Abraham",
                    "amount": result
                });
            }
        ], function (err, results) {
            if (err) {
                return;
            }
            console.log('Done:', results)
        });
    });
}
/**
 * Async.auto function
 * @return {[type]} [description]
 */
function autoTimer() {
    async.auto({
        getOne: function (next) {
            setTimeout(function () {
                next(null, 1);
            }, 100);
        },
        getTwo: function (next) {
            setTimeout(function () {
                next(null, 2);
            }, 100);
        },
        amount: ['getOne', 'getTwo', function (next, results) {
            setTimeout(function () {
                next(null, results.getOne + results.getTwo);
            }, 100);
        }],
        message: ['amount', function (next, result) {
            next(null, {
                "name": "Abraham",
                "amount": result.amount
            });
        }]
    }, function (err, results) {
        console.log('Done:', results);
    });
}

spaghetti();
//autoTimer();