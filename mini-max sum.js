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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  var sum_min = 0
  var sum_max = 0
  var min_val = arr[0]
  var max_val = arr[0]
  var sum = 0

  for(var i = 0; i < arr.length; i += 1){
    if(arr[i] > max_val) {
      max_val = arr[i]
    }
    if(arr[i] < min_val){
      min_val = arr[i]
    }
    sum = sum +  arr[i]
  }
  sum_min = sum - max_val
  sum_max = sum - min_val

  console.log(sum_min, sum_max)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
