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
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function closestNumbers(arr) {
    // Write your code here
    const arrSorted = [...arr].sort((x, y) => x - y);
  let result = [];
  let smallestDiff = Infinity;
  for (let i = 0; i < arrSorted.length - 1; i++) {
    const difference = arrSorted[i + 1] - arrSorted[i];
    if (difference < smallestDiff) {
      smallestDiff = difference;
      result = [];
      result.push(arrSorted[i], arrSorted[i + 1]);
    } else if (difference === smallestDiff) {
      result.push(arrSorted[i], arrSorted[i + 1]);
    }
  }
  return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = closestNumbers(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
