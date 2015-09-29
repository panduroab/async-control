var Account = require('./Account'),
    async = require('async'),
    mandrill = require('mandrill-api/mandrill'),
    mandrill_client = new mandrill.Mandrill('-vxPycpyJMArZIrTR7yBUw');

/*var start = new Date;
Account.find(function (err, accounts) {
    if (err) {
        console.log(err);
        return;
    }
    accounts.forEach(function (account) {
        var message = {
            'html': 'Hello ' + account.email,
            'subject': 'Welcome ' + account.email + '!',
            'from_email': 'panduroab@gmail.com',
            'from_name': 'Abraham Panduro',
            'to': [{
                'email': account.email,
                'name': account.username || account.email,
                'type': 'to'
            }]
        }
        mandrill_client.messages.send({
            'message': message,
            'async': true
        }, function (result) {
            console.log("SendEmails completed in " + (new Date - start) + ' ms');
        }, function (err) {
            console.log('Error: ', err);
        });
    });
});*/

var start = new Date;
async.waterfall([
    function getAccounts(next) {
        Account.find(next);
    },
    function sendEmails(accounts, next) {
        async.each(accounts, function (account, next) {
            var message = {
                'html': 'Hello ' + account.email,
                'subject': 'Welcome ' + account.email + '!',
                'from_email': 'panduroab@gmail.com',
                'from_name': 'Abraham Panduro',
                'to': [{
                    'email': account.email,
                    'name': account.username || account.email,
                    'type': 'to'
                }]
            }
            mandrill_client.messages.send({
                'message': message,
                'async': true
            }, function (result) {
                next();
            }, function (err) {
                next(err);
            });
        }, next);
    }
], function (err, result) {
    console.log("SendEmails completed in " + (new Date - start) + ' ms');
});