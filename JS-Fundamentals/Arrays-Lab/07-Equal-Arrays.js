function solve(firstArray, secondArray) {
    let result = 0;
    let areEqual = true;
    let breakIndex = 0;

    for (let i = 0; i < firstArray.length; i++) {
        let currElementFirst = Number(firstArray[i]);
        let currElementSecond = Number(secondArray[i]);

        if (currElementFirst == currElementSecond) {
            result += currElementFirst;
        } else {
            breakIndex = i;
            areEqual = false;
            break;
        }
    }

    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${result}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${breakIndex} index`);
    }
}

solve(['10', '20', '30'], ['10', '15', '30'])
// solve(['1','2','3','4','5'], ['1','2','4','4','5'])
solve(['10'], ['10', '20'])
