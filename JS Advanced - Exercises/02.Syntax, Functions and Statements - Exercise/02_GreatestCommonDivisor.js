function gcd(num1, num2) {
    let result = 0;
    for (let i = Math.min(num1, num2); i >= 1; i--) {
        if (num2 % i === 0 && num1 % i === 0) {
            result = i;
            break;
        }
    }
    console.log(result);
}
gcd(15, 5)
gcd(2154, 458)