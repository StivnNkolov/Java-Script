function solve(inputArray) {
    let workingArray = inputArray.filter((v, i) => i % 2 != 0).map(v => v * 2).reverse();
    
    console.log(workingArray.join(" "));
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);

