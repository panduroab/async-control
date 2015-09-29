function Account() {}

Account.prototype.find = function (next) {
    next(null, [{
        "firstName": "Uno",
        "lastName": "Itexico",
        "email": "uno_itexico@mailinator.com",
        "phone": "1234567890",
        "type": "$user",
        "password": "$2a$10$6PVEncp8BjYSffao8HQEDelRzRq/VabFn13NXGo50/rfXT/PtYlSS",
        "identifier": "uno_itexico@mailinator.com",
        "verificationToken": "CFDZipNEAfVMx0Fj5hvi4DijzUlJhvNjHggTTsR2tv3bw7sp0dQ0rwBhx3hH5EGt",
        "viewedTutorial": true
    }, {
        "email": "dos_itexico@mailinator.com",
        "type": "$user",
        "invited": true,
        "username": "dos_itexico@mailinator.com",
        "password": "$2a$10$wwcJ7ON5J8YjShKI8WxPOe6w9TOxVjniaI758TLa2ByxvPBcO4UQe",
        "verificationToken": "E7f6ino6foub42DLv12pSHdLexGmeSQlc8OXo4fMt8OP25SJGltOVrJCE06dbtnh"
    }, {
        "email": "tres_itexico@mailinator.com",
        "type": "$user",
        "invited": true,
        "username": "tres_itexico@mailinator.com",
        "password": "$2a$10$SoHaOr1iDpTysHK15cW7Ue/YZyTWr3w2TjLxBvSLOQiKyAP.7ktfu",
        "verificationToken": "DgK12I1H7KDgA2OXBtzgM4HTP76aaPCGOXPHRPlQ69acMkt8AXoXDwS3OSlR7i21"
    }, {
        "email": "cuatro_itexico@mailinator.com",
        "type": "$user",
        "invited": true,
        "username": "cuatro_itexico@mailinator.com",
        "password": "$2a$10$kd6OoTiO/o8Nefr5l3SD3.Z97sfDEMfyh495O.Zq2TQT8dA11Kmee",
        "verificationToken": "1HCcvU9U0yn0TAVCmFN6Xs2F4Y6CZDJAf96szTh0pKxaE7lR1o89LYv4DQMtAa0f"
    }, {
        "firstName": "Cinco",
        "lastName": "Itexico",
        "email": "cinco_itexico@mailinator.com",
        "phone": "1234567890",
        "type": "$user",
        "password": "$2a$10$1ennCaMLv9Km61gW.Ypn7e2Aocp0ogQAuRyp/WVliX0B1HYCdTl92",
        "identifier": "cinco_itexico@mailinator.com",
        "verificationToken": "AhcEzLdllth5lLwhOv49onfSBRml9NI5xM96urHyuDzxqH2yBjneWFBOQ9bPE9MY",
        "viewedTutorial": true
    }, {
        "email": "seis_itexico@mailinator.com",
        "type": "$user",
        "invited": true,
        "username": "seis_itexico@mailinator.com",
        "password": "$2a$10$rfxrrDUU.kP9UDU24oxQv.FXheG2HRkKgs8goA.3PSPfbcL0f2Yfy",
        "verificationToken": "1KQ0c1iqyHCl7WqSiXP2drDvwTpAZfqYQlkvGcnvPMU4NuEpd9MBRMEhvwIwOcnC"
    }, {
        "email": "siete_itexico@mailinator.com",
        "type": "$user",
        "invited": true,
        "username": "siete_itexico@mailinator.com",
        "password": "$2a$10$x0YCdfGAMzUI5xZXaBrkwOTwvPa/43BAGacGfV8AioGpVtyNsbYEi"
    }, {
        "email": "ocho_itexico@mailinator.com",
        "type": "$user",
        "invited": true,
        "username": "ocho_itexico@mailinator.com",
        "password": "$2a$10$BAuo5H/HM2ZPvPs8drKupes5XBOp2JVDM7RBFA..EoVI3TVXvxcgm"
    }]);
};
module.exports = new Account();