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
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isValid(s) {
    // Write your code here
    let hash = {};
  let max, min;
  let minCount = 0;
  let maxCount = 0;
  ///Get the frequencies of each characters
  for (let i = 0; i < s.length; i++) {
    let key = s[i];
    if (hash[key]) {
      hash[key]++;
    } else {
      hash[key] = 1;
    }
  }
  //Push all strings in to an array
  let frequencies = [];
  for (let key in hash) {
    frequencies.push (hash[key]);
  }
  //Sort the array and get the max and min frequency
  frequencies.sort ();
  min = frequencies[0];
  max = frequencies[frequencies.length - 1];
  //Get the no of max count and min count for the frequency
  for (let i = 0; i < frequencies.length; i++) {
    if (frequencies[i] === max) {
      maxCount++;
    }
    if (frequencies[i] === min) {
      minCount++;
    }
  }
  ///Make our validation check
  if (min === max) {
    return 'YES';
  }
  if (max - (min - 1) == max && minCount === 1 && maxCount !== 1) {
    return 'YES';
  }
  if (max - min !== 1) {
    return 'NO';
  }
  if (maxCount === minCount) {
    return 'NO';
  }
  if (maxCount === 1 || minCount === 1) {
    return 'YES';
  }

  return 'NO';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = isValid(s);

    ws.write(result + '\n');

    ws.end();
}
