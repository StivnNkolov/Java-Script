// function printWithDelimeter(inputArray, delimeter) {
//     let result = inputArray.join(delimeter);
//     console.log(result);
// }

// printWithDelimeter(['One',
//     'Two',
//     'Three',
//     'Four',
//     'Five'],
//     '-'
// )

// printWithDelimeter(['How about no?',
//     'I',
//     'will',
//     'not',
//     'do',
//     'it!'],
//     '_'
// )

function solve(inputArray, delimeter) {
    console.log(inputArray.join(delimeter));
}

solve(
    [
        'One',
        'Two',
        'Three',
        'Four',
        'Five'
    ],
    '-'
)

solve(
    [
        'How about no?',
        'I',
        'will',
        'not',
        'do',
        'it!'
    ],
    '_'
)