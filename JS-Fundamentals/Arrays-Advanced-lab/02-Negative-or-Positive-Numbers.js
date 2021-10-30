function solve(inputArray) {
    let resultArray = [];
    
    for (let element of inputArray) {
        if (element < 0) {
            resultArray.unshift(element);
        }else {
            resultArray.push(element);
        }
    }

    console.log(resultArray.join("\n"));
}



solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);
