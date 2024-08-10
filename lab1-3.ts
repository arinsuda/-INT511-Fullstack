function removeItemFromArray(arr: number[], Item: number): number[] {
        const index = arr.indexOf(Item)

        if (index !== -1 ){
            arr.splice(index, 1)
        }

        return arr
}

let result = removeItemFromArray([10,30,20,50,40],30)

console.log(result);

