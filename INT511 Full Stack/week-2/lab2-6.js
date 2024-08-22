"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertNlToBr = exports.largestAmongThreeNum = void 0;
exports.removeItemFromArray = removeItemFromArray;
exports.convertTwoDimension = convertTwoDimension;
// lab1-2
var largestAmongThreeNum = function (a, b, c) {
    return Math.max(a, b, c);
};
exports.largestAmongThreeNum = largestAmongThreeNum;
//console.log(largestAmongThreeNum(15,79,38));
// lab1-3
function removeItemFromArray(arr, Item) {
    var index = arr.indexOf(Item);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr; // `Result is [${arr}]`
}
//let result = removeItemFromArray([10,30,20,50,40],30)
//console.log(result);
// lab1-4
var convertNlToBr = function (letter) {
    return letter.split('\n').join('<br>');
};
exports.convertNlToBr = convertNlToBr;
//let resultting = convertNlToBr('Program\n JavaScript\n TypeScript')
//console.log(resultting);
// lab1-5
function convertTwoDimension(array, rows, cols) {
    var result = [];
    for (var i = 0; i < rows; i++) {
        result.push(array.slice(i * cols, (i + 1) * cols));
    }
    return result;
}
