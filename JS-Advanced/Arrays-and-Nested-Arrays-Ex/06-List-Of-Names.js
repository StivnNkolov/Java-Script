// function listOfNames(inputArray) {
//     // let lowerCaseArray = inputArray.map(name=> name.toLowerCase());
//     // console.log(lowerCaseArray);

//     let sortedArray = inputArray.sort(function (a, b) {
//         return a.toLowerCase().localeCompare(b.toLowerCase());
//     });

//     let inputArrayLen = inputArray.length;

//     for (let i = 0; i < inputArrayLen; i++) {

//         console.log(`${i + 1}.${sortedArray[i]}`);
//     }
// }

// listOfNames(["John", "Bob", "Christina", "bob", "Ema", "christina"]);

// // listOfNames(["Ab",
// //     "cd",
// //     "bc",
// //     "aa"
// // ])

function solve(inputArray) {
    let result = inputArray
        .sort((a, b) => a.localeCompare(b))
        .map((v, i, arr) => `${i + 1}.${v}`)
        .join('\n');


    console.log(result);
}

solve(
    [
        "John",
        "Bob",
        "Christina",
        "Ema"
    ]
);