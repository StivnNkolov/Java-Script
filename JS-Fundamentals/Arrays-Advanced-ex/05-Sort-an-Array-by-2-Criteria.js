function solve(inputArray) {
    let firstSort = inputArray.sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length);

    console.log(firstSort.join("\n"));
}

solve(["hlpha", "beta", "gamma"]);
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
