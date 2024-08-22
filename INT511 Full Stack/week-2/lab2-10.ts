import { readFile } from 'fs'
import { promisify } from 'util';

readFile('/Users/arinsudakijjathon/Documents/Junior/int_511_fullstack/labs/65130500088_lab2/test.txt','utf8',(err,data) => {
    if(err) {
        console.log(err);
    }
    console.log(data);
})

const readFilePromise = promisify(readFile)

readFilePromise('/Users/arinsudakijjathon/Documents/Junior/int_511_fullstack/labs/65130500088_lab2/test.txt','utf8')
    .then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
    