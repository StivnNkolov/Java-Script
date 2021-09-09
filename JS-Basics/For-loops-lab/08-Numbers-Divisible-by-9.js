function NumbersDivisibleBy9(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);

    let sum = 0;

    for (let number = firstNumber; number < secondNumber; number++) {
        if (number % 9 === 0) {
            sum += number;
        }
    }
    console.log(`The sum: ${sum}`);

    for (let number = firstNumber; number < secondNumber; number++) {
        if (number % 9 === 0) {
            console.log(number);;
        }
    }
}
NumbersDivisibleBy9(["100", "200"])