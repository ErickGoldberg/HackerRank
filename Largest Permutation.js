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
 * Complete the 'largestPermutation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function largestPermutation(k, arr) {
    // Write your code here
    if(k >= arr.length){
      return sortDescendingOrder([...arr]);
    }
    
    for(let actualIndex = 0; actualIndex < arr.length - 1 && k > 0; actualIndex++){
      let maxIndex = actualIndex;
      
      for(let nextIndex = actualIndex + 1; nextIndex < arr.length; nextIndex++){
        if(arr[maxIndex] <= arr[nextIndex]){
          maxIndex = nextIndex;
        }
      }
      
      if(maxIndex !== actualIndex){
        [arr[actualIndex], arr[maxIndex]] = [arr[maxIndex], arr[actualIndex]];
        k--;
      }
    }
    
    return arr;
}

function sortDescendingOrder(arr){
  return arr.sort((a, b) => b - a);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = largestPermutation(k, arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
