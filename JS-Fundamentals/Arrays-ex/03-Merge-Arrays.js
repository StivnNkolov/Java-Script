function solve(firstArray, secondArray) {
    let resultArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        let currFirstElement = firstArray[i];
        let currSecondElement = secondArray[i];
        let newElement;
        if (i % 2 == 0) {
            newElement = Number(currFirstElement) + Number(currSecondElement);
        } else {
            newElement = currFirstElement + currSecondElement;
        }
        resultArray.push(newElement);

    }
    console.log(resultArray.join(" - "));
}


solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);
solve(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
);
