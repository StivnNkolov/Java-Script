function solve(inputArray) {
    let evenNumsSum = 0;

    for (let el of inputArray) {
        const currElement = Number(el);

        if (currElement % 2 == 0) {
            evenNumsSum += currElement;
        }
    }

    console.log(evenNumsSum);


}

solve(['1', '2', '3', '4', '5', '6']);
solve(['3', '5', '7', '9']);
solve(['2', '4', '6', '8', '10']);
