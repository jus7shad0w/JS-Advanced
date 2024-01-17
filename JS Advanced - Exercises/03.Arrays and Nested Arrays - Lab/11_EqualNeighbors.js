function equal(input) {
    let result = 0;
    const rows = input.length;
    const cols = input[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (j < cols - 1 && input[i][j] === input[i][j + 1]) {
                result++;
            }
            if (i < rows - 1 && input[i][j] === input[i + 1][j]) {
                result++;
            }
        }
    }
    console.log(result);
}
equal([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])
equal([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']])