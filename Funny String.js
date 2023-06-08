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
 * Complete the 'funnyString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function funnyString(s) {
    // Write your code here
    let n = s.split('');
let r = n.slice().reverse();
let j = 1;
for(let i = 1; i < n.length; i++){
   if(Math.abs(n[i].charCodeAt() - n[i-1].charCodeAt()) ===
      Math.abs(r[i].charCodeAt() - r[i-1].charCodeAt())){
        j++;
      }
 }
  return j === n.length ? "Funny" : "Not Funny"
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = funnyString(s);

        ws.write(result + '\n');
    }

    ws.end();
}
