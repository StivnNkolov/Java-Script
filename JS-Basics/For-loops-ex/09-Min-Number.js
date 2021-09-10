function MinNumber(input) {
    let index = 0;
    let value = Number.MAX_VALUE;

    let numberOfRotations = Number(input[0]);
    index++;

    for (let i = index; index <= numberOfRotations; i++) {
        let currentNumber = Number(input[index]);
        index++;

        if (currentNumber < value) {
            value = currentNumber;
        }
    }
    console.log(value);
}
MinNumber(["2",
"-1",
"-2"])




