const convertNlToBr = (letter: string) => {
    return letter.split('\n').join('<br>')
}

let resultting = convertNlToBr('Program\n JavaScript\n TypeScript')

console.log(resultting);
