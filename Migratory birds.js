'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    function migratoryBirds(arr) {
        var repetidos;  
            
          for(var j = 0; j < arr.length; j++){ 
            for(var i = 1; i < arr.length; i++){
                if(arr[j] === arr[i]){
                    repetidos = arr[j]
                }
            }
          }
          return repetidos;
          //se ta certo e como eu faria para pegar o menor numero
        }

    let newArr = {}
    const uniqueVal = [... new Set(arr)]
    uniqueVal.forEach(elem => {
        const filterVal = arr.filter(val => val == elem)       
        const totalVal = filterVal.length
        newArr[elem] = totalVal
    })

    let result = Object.entries(newArr).sort(([,a], [,b]) => b-a)
    let final = result[0][0]
    return final
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
