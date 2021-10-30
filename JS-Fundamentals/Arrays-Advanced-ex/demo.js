function solve(inputArray) {
    let passangersArray = inputArray.shift().split(" ").map(Number);
    let wagonCapacity = Number(inputArray.shift());

    for (let el of inputArray) {
        let data = el.split(" ").filter(x => x !== undefined);

        if (data.length > 1) {
            passangersArray.push(Number(data[1]));
        }
        else {
            for (let i = 0; i < passangersArray.length; i++) {
                let result = Number(data[0]) + passangersArray[i];
                if (result <= wagonCapacity) {
                    passangersArray[i] = result;
                    break;
                }
            }
        }
    }
    console.log(passangersArray.join(" "));
}

solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);



solve(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
);
