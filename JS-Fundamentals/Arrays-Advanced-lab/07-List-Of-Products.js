function solve(inputArray) {
    let orderedArray = inputArray.sort().map((v, i) => `${i + 1}.${v}`)
    console.log(orderedArray.join("\n"));
}

solve(["Potatoes",
    "Tomatoes",
    "Onions",
    "Apples"]);