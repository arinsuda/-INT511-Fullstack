function removeItemFromArray(arr, Item) {
    var index = arr.indexOf(Item);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}
var result = removeItemFromArray([10, 30, 20, 50, 40], 30);
console.log(result);
