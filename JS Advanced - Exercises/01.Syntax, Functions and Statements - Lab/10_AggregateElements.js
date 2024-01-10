function agregate(input) {
    let sum = 0;
    let sum2 = 0;
    let concat = ""
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
        sum2 += 1 / input[i];
        concat += input[i];
    }
    console.log(sum);
    console.log(sum2)
    console.log(concat);
}
agregate([1, 2, 3])
agregate([2, 4, 8, 16])
