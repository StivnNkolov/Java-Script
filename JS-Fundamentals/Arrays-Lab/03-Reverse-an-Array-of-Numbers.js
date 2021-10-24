function solve(number, inputArray) {
    
    // let resultArray = [];

    // for (let i = number - 1; i >= 0; i--) {
    //     resultArray.push(inputArray[i]);
    // }

    // console.log(resultArray.join(" "));

    let resultArray = inputArray.slice(0, number).reverse().join(" ");

    console.log(resultArray);
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);
