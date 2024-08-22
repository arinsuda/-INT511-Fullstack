// lab1-2
const largestAmongThreeNum = (a,b,c) => {
    return Math.max(a,b,c)
}
//console.log(largestAmongThreeNum(15,79,38));

// lab1-3
function removeItemFromArray(arr: number[], Item: number): number[] {
    const index = arr.indexOf(Item)

    if (index !== -1 ){
        arr.splice(index, 1)
    }

    return arr // `Result is [${arr}]`
}
//let result = removeItemFromArray([10,30,20,50,40],30)
//console.log(result);

// lab1-4
const convertNlToBr = (letter: string) => {
    return letter.split('\n').join('<br>')
}
//let resultting = convertNlToBr('Program\n JavaScript\n TypeScript')
//console.log(resultting);

// lab1-5
function convertTwoDimension(array:number[], rows:number, cols:number ): number[][] {
    let result: number[][] = []
    for(let i = 0; i < rows; i++){
        result.push(array.slice(i * cols, (i + 1) * cols))
    }
    return result
}
//const result = convertTwoDimension([1, 2, 3, 4, 5, 6],2,3)
//console.log(result);

export { largestAmongThreeNum, removeItemFromArray, convertNlToBr, convertTwoDimension }