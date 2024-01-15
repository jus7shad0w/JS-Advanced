function upperCase(input) {
    let words = input.match(/\b\w+\b/g); 
    if (words) {
        let uppercasedWords = words.map(word => word.toUpperCase()); 
        let result = uppercasedWords.join(', ');  
        console.log(result);
    } else {
        console.log("No words found.");
    }
}
upperCase('Hi, how are you?');
upperCase('hello')