function oddPosition(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            result.unshift(input[i] * 2)
        }
    }
    console.log(result.join(` `));
}
oddPosition([10, 15, 20, 25])
oddPosition([3, 0, 10, 4, 7, 3])