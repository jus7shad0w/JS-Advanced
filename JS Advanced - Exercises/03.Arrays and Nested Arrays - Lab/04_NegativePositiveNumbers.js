function negPosNum(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            result.unshift(input[i]);
        } else {
            result.push(input[i]);
        }
    }
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}
negPosNum([7, -2, 8, 9])
negPosNum([3, -2, 0, -1])