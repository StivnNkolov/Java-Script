// function wordsUppercase(inputString) {
//     let pattern = /\b[a-zA-Z]+\b/g;
//     let a = inputString.match(pattern);
//     let workArray = [];
//     for (match of a){
//         workArray.push(match.toUpperCase());
//     } 
//     console.log(workArray.join(", "));
// }
// wordsUppercase('hello');


// function solve(inputText) {
//     let regexPattern = /(\w+)/g;
//     let smt = inputText.match(regexPattern);
//     // console.log(smt);

//     let c = smt.map((value, index, array) => value.toUpperCase())
//     console.log(c.join(', '))
// }

// solve('Hi, how are you?');
// solve('hello');

function solve(inputString) {


    let regex = /[a-zA-Z0-9]+/g;

    let result = inputString
        .match(regex)
        .map((value) => value.toUpperCase())
        .join(", ");

    console.log(result);
}