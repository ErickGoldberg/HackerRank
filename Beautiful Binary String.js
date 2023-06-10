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
 * Complete the 'beautifulBinaryString' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING b as parameter.
 */

function beautifulBinaryString(b) {
    // Write your code here
    let myArray = Array.from(b);
  let cont = 0;
  let testWord = "010";

  for (let i = 0; i < myArray.length; i++) {
    let temp = [];
    for (let j = i; j < i + 3; j++) temp.push(myArray[j]);
    if (temp.join("") === testWord) {
      cont++;
      i = i + 2;
    }
  }

  return cont;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const b = readLine();

    const result = beautifulBinaryString(b);

    ws.write(result + '\n');

    ws.end();
}
