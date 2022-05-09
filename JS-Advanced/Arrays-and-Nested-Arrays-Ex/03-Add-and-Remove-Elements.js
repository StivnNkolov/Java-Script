// function addAndRemoveElements(inputCommands) {
//     let workingArray = [];

//     let number = 1;
//     let commandsArrayLen = inputCommands.length;

//     for (let i = 0; i < commandsArrayLen; i++) {
//         let currCommand = inputCommands[i];

//         if (currCommand === "add") {
//             workingArray.push(number);
//         } else {
//             workingArray.pop();
//         }
//         number += 1;
//     }
//     if (workingArray.length) {
//         console.log(workingArray.join("\n"));
//     } else {
//         console.log("Empty");
//     }
// }
// addAndRemoveElements(['add',
//     'add',
//     'add',
//     'add']
// )

// addAndRemoveElements(['add',
//     'add',
//     'remove',
//     'add',
//     'add']
// )

// addAndRemoveElements(['remove',
//     'remove',
//     'remove']
// )

function solve(inputArray) {
    let resultArray = [];
    let value = 1;
    for (let command of inputArray) {
        if (command == 'add') {
            resultArray.push(value);
        } else if (command == 'remove') {
            resultArray.pop();
        }
        value += 1;
    };

    resultArray = resultArray.length > 0 ? resultArray.join('\n') : 'Empty'

    console.log(resultArray);
}

solve(
    [
        'add',
        'add',
        'add',
        'add'
    ]);

solve(
    [
        'add',
        'add',
        'remove',
        'add',
        'add'
    ]
);

solve(
    [
        'remove',
        'remove',
        'remove'
    ]
);