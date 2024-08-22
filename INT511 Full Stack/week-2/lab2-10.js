"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var util_1 = require("util");
(0, fs_1.readFile)('/Users/arinsudakijjathon/Documents/Junior/int_511_fullstack/labs/65130500088_lab2/test.txt', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data);
});
var readFilePromise = (0, util_1.promisify)(fs_1.readFile);
readFilePromise('/Users/arinsudakijjathon/Documents/Junior/int_511_fullstack/labs/65130500088_lab2/test.txt', 'utf8')
    .then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
});
