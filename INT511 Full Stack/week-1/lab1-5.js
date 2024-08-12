function convertTwoDimension(array, rows, cols) {
    var result = [];
    for (var i = 0; i < rows; i++) {
        result.push(array.slice(i * cols, (i + 1) * cols));
    }
    return result;
}
var result = convertTwoDimension([1, 2, 3, 4, 5, 6], 2, 3);
console.log(result);
