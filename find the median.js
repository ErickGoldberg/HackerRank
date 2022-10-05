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
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {
        // Write your code here
        var elemento = Array(arr.length + 10000).fill(0), freq = 0;
        
        for(let i = 0; i < arr.length; i++) {
            if(!elemento[arr[i] + 10000]) elemento[arr[i] + 10000]= 0;
            elemento[arr[i] + 10000]++;
        }    
        
        let contador = 0;
        for(let u = 0; u < elemento.length; u++) {
            contador += elemento[u];
            if(contador > parseInt(arr.length / 2)) {
                return u - 10000;
            }        
        }
    }
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = findMedian(arr);

    ws.write(result + '\n');

    ws.end();
}