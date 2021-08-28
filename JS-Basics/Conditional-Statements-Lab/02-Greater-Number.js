function GreaterNumber(userInput) {
    let firstNumber = Number(userInput[0]);
    let secondNumber = Number(userInput[1]);

    if (firstNumber > secondNumber) {
        console.log(firstNumber);
    } else {
        console.log(secondNumber);
    }
}
GreaterNumber(["3", "3"])