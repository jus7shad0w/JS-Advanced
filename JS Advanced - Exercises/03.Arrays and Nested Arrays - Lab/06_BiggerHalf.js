function biggerHalf(input) {
    const sortedArray = input.slice().sort((a, b) => a - b);
    const halfIndex = Math.ceil(sortedArray.length / 2);
    const secondHalf = sortedArray.slice(-halfIndex);
    return secondHalf;
}
console.log(biggerHalf([4, 7, 2, 5]))
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))