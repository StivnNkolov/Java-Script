function NumbersInRangeWithStep (input) {
    let endPoint = Number(input[0]);

    for (let start = 1; start <= endPoint; start += 3) {
        console.log(start);
    }

}
NumbersInRangeWithStep(["15"]);