function convertTwoDimension(array:number[], rows:number, cols:number ): number[][] {
    let result: number[][] = []
    for(let i = 0; i < rows; i++){
        result.push(array.slice(i * cols, (i + 1) * cols))
    }
    return result
}

const result = convertTwoDimension([1, 2, 3, 4, 5, 6],2,3)

console.log(result);
