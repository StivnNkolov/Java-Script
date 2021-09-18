function wordsUppercase(inputString) {
    let pattern = /\b[a-zA-Z]+\b/g;
    let a = inputString.match(pattern);
    let workArray = [];
    for (match of a){
        workArray.push(match.toUpperCase());
    } 
    console.log(workArray.join(", "));
}
wordsUppercase('hello')