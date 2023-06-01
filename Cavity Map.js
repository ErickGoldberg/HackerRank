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
 * Complete the 'cavityMap' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function cavityMap(grid) {
    const cavities = grid.map(item => item.split(''));

  return cavities.reduce((target, list, index, source) => {
    const result = list
      .reduce((listTarget, item, itemIndex) => {
        listTarget.push(
          index >= 1 &&
            itemIndex >= 1 &&
            index < source.length - 1 &&
            itemIndex < list.length &&
            item > source[index][itemIndex - 1] &&
            item > source[index][itemIndex + 1] &&
            item > source[index - 1][itemIndex] &&
            item > source[index + 1][itemIndex]
            ? 'X'
            : item
        );

        return listTarget;
      }, [])
      .join('');

    target.push(result);

    return target;
  }, []);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    const result = cavityMap(grid);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
