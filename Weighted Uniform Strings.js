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
 * Complete the 'weightedUniformStrings' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY queries
 */

function weightedUniformStrings(s, queries) {
    // Write your code here
    let weighU = [];
    let base = 'a'.charCodeAt() - 1;
    let previousChar;
    let weigthChar = 0;
    let result = [];
    
    // Write your code here    
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== previousChar) {
            previousChar = s[i];
            weigthChar = 1;
        } else {
            weigthChar++;
        }
        
        weighU.push((s[i].charCodeAt() - base ) * weigthChar);                
    }
        
    result = queries.map((w) => (weighU.indexOf(w) != -1) ? "Yes" : "No");        
        
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const queriesCount = parseInt(readLine().trim(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = parseInt(readLine().trim(), 10);
        queries.push(queriesItem);
    }

    const result = weightedUniformStrings(s, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
