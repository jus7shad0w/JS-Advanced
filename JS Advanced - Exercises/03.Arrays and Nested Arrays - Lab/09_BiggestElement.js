function biggestEll(input) {
    let result = input[0][0];
    for (let i = 0; i < input.length; i++) {
        for (let k = 0; k < input[i].length; k++) {
            if (input[i][k] > result) {
                result = input[i][k];
            }
        };
    }
    console.log(result);
}
biggestEll([[20, 50, 10], [8, 33, 145]])
biggestEll([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]])