'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'insertionSort2' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort2(n, arr) {
    // Write your code here
    
    let newArr = arr;

    for (let index = 1; index < n; index += 1) {
        let count = index
        while(newArr[count] < newArr[count - 1]) {
            let v1 = newArr[count]
            newArr[count] = newArr[count - 1]
            newArr[count - 1] = v1
            count -= 1
        }
        console.log(printValues(newArr))
    }
    
}

function printValues(arr) {
    let values = ''

    arr.forEach((element, index) => {
        if (index !== arr.length - 1) {
            values += element + ' '
        } else {
            values += element
        }
    });
    


    return values
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort2(n, arr);
}
