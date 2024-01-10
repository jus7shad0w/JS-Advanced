function echo(input) {
    let param = [];
    for (let i = 0; i < input.length; i++) {
        param += input[i];
    }
    console.log(param.length);
    console.log(param);
}
echo('Hello, JavaScript!')
echo('strings are easy')