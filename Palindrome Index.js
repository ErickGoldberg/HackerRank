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
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function isPalindrome(s) {
      for (let i = 0; i < s.length; i++) {
            if (s[i] !== s[s.length - 1 - i]) {
                  return false;
            }
      }
      return true;
}


function palindromeIndex(s) {
      let result = isPalindrome(s);
      if (result) {
            return -1;
      }
      else {
            for (let i = 0; i < s.length; i++) {
                  let newS = s.slice(0,i) + s.slice(i+1);
                  if (isPalindrome(newS)) {
                        return i;
                  }
            }
            return -1
      }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = palindromeIndex(s);

        ws.write(result + '\n');
    }

    ws.end();
}
