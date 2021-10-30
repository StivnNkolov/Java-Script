function solve(n, k) {

    let workingArray = [1];

    for (let i = 1; i < n; i++) {
        
        let sum = NaN;
        if (workingArray.length < k) {
            sum = workingArray.reduce((a, b) => a + b)
        } else {
            let middleArray = workingArray.slice(workingArray.length - k, workingArray.length);
            sum = middleArray.reduce((a, b) => a + b);
        }
        workingArray.push(sum);
    }
    console.log(workingArray.join(" "));

}

solve(6, 3);
solve(8, 2);