var convertNlToBr = function (letter) {
    return letter.split('\n').join('<br>');
};
var resultting = convertNlToBr('Program\n JavaScript\n TypeScript');
console.log(resultting);
