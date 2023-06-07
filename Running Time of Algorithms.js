'use strict';

const fs = require('fs');

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
 * Complete the 'runningTime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function runningTime(arr) {
    // Write your code here
let n=0;
    for(let i = 1; i< arr.length; i++) {
        let k = i;
        for(let j = k-1; j>=0; j--) {
            if(arr[j]>arr[k]) {
                let temp = arr[k];
                arr[k] = arr[j];
                arr[j] = temp;
                k -=1;
                n += 1;
            }
        }
    }
    return n;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = runningTime(arr);

    ws.write(result + '\n');

    ws.end();
}
