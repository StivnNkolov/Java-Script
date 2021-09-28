function rotateArray(inputArray, rotations) {

    for (let i = 1; i <= rotations; i++) {
        let lastElement = inputArray.pop();
        inputArray.unshift(lastElement);
    }
    console.log(inputArray.join(' '));
}

rotateArray(['1',
    '2',
    '3',
    '4'],
    2
)

rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
)