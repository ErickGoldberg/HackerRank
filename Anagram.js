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
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s) {
    // Write your code here
    let midpoint = Math.floor(s.length / 2);
    let firstHalf = s.substring(0, midpoint);
    let secondHalf = s.substring(midpoint);
    let count = 0;
    if (s.length % 2 !== 0) {
        return -1;
    }
    for (let i = 0; i < firstHalf.length; i++) {
        secondHalf.includes(firstHalf[i]) ? 
        secondHalf = secondHalf.replace(firstHalf[i],"") : count++;
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = anagram(s);

        ws.write(result + '\n');
    }

    ws.end();
}
