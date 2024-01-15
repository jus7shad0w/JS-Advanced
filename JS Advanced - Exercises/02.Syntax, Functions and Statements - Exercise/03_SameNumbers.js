function sameNumber(input) {
    let sum = 0;
    let same = [];
    let inputString = input.toString();
    for (let i = 0; i < inputString.length; i++) {
        const digit = parseInt(inputString[i]);
        sum += digit;
        same.push(digit);
    }
    const allSame = same.every(digit => digit === same[0]);
    console.log(allSame);
    console.log(sum);
}
sameNumber(2222222)
sameNumber(1234)