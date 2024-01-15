function cooking() {
    let input = Array.from(arguments);
    let num = Number(input[0]);
    for (let i = 1; i < input.length; i++) {
        if (input[i] == 'chop') {
            num /= 2;
            console.log(num);
        } else if (input[i] == "dice") {
            num = Math.sqrt(num);
            console.log(num);
        } else if (input[i] == 'spice') {
            num += 1;
            console.log(num);
        } else if (input[i] == "bake") {
            num *= 3;
            console.log(num);
        } else if (input[i] == "fillet") {
            num -= num * 0.2;
            console.log(num);
        }
    }
}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
