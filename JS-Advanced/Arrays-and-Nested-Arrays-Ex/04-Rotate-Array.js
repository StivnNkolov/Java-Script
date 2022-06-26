// function rotateArray(inputArray, rotations) {

//     for (let i = 1; i <= rotations; i++) {
//         let lastElement = inputArray.pop();
//         inputArray.unshift(lastElement);
//     }
//     console.log(inputArray.join(' '));
// }

// rotateArray(['1',
//     '2',
//     '3',
//     '4'],
//     2
// )

// rotateArray(['Banana',
//     'Orange',
//     'Coconut',
//     'Apple'],
//     15
// )

// function solve(inputArray, numberOfRotations) {
//     const inputArrayLength = inputArray.length;

//     for (let i = 1; i <= numberOfRotations; i++) {
//         let currElement = inputArray.pop();
//         inputArray.unshift(currElement);
//     };
//     console.log(inputArray.join(' '));
// }


function solve(inputArray, rotations) {
    if (rotations > inputArray.length) {
        rotations = rotations % inputArray.length;
    }

    for (let i = 1; i <= rotations; i++) {
        inputArray.unshift(inputArray.pop());
    }

    console.log(inputArray.join(' '));
}

solve(
    [
        '1',
        '2',
        '3',
        '4'
    ],
    2
);

solve(
    [
        'Banana',
        'Orange',
        'Coconut',
        'Apple'
    ],
    15
);