'use strict';

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
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {
    // Write your code here
    // If input has only one char.
  if (s.length < 2) return console.log("NO");

  // Run a loop for z char of First letter
  for (let z = 1; z <= Math.floor(s.length / 2); z++) {
    let firstLetter = s.slice(0, z); //Take first letter from S(Input)

    // Check if First letter contain 0 or if start from 0 Return "NO"
    if (firstLetter == 0 || firstLetter[0] == 0) return console.log("NO");

    let str = `${BigInt(firstLetter)}`; //Create a string to hold Possible Beautiful String

    // Run a loop for create Possible Beautiful String
    for (let i = 1; i < s.length / firstLetter.length; i++) {
      str = str.concat(BigInt(firstLetter) + BigInt(i));
      if (str.length >= s.length) break;
    }

    // Compare Possible Beautiful string to S(Input)
    if (str == s) {
      return console.log("YES", firstLetter);
    }
  }

  // If all possible split str are not same as S(Input)
  return console.log("NO");
}

function main() {
    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        separateNumbers(s);
    }
}
