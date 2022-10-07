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
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function minimumDistances(a) {
    let minDistance = a.length + 1;

    for (let i = 0; i < a.length; i++) {
        for (let j = i+1; j < a.length; j++) {
            console.log(a[i], a[j], minDistance)
            if (a[i] === a[j] && Math.abs(i - j) < minDistance) {
                minDistance = Math.abs(i - j)
            }
        }
    }
    if (minDistance === a.length + 1)
        minDistance = -1

    return minDistance
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = minimumDistances(a);

    ws.write(result + '\n');

    ws.end();
}
