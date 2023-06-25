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
 * Complete the 'toys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY w as parameter.
 */

function toys(w) {
    // Write your code here
    w.sort((a, b) => a - b);    
        
        let weight = w[0] + 4, container = 1;
        for(let i = 1; i < w.length; i++) {
            if(w[i] > weight) {
                container++;
                weight = w[i] + 4;
            }
        }
        return container;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const w = readLine().replace(/\s+$/g, '').split(' ').map(wTemp => parseInt(wTemp, 10));

    const result = toys(w);

    ws.write(result + '\n');

    ws.end();
}
