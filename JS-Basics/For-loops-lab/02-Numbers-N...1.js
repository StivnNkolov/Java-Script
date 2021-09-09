function NumbersInRange (input) {
    let startNumber = Number(input[0]);

    for (let start = startNumber; start >= 1; start--) {
        console.log(start);
    }
}
NumbersInRange(["5"]);