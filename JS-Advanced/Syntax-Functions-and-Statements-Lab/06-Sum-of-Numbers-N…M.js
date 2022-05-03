function sumOfNumbers(firstNumber, secondNumber) {
    let firstNum = Number(firstNumber);
    let secondNum = Number(secondNumber);
    let result = 0;
    for (i = firstNum; i <= secondNum; i++) {
        result += i;

    }
    return result;
}

console.log(sumOfNumbers('1', '5'))
sumOfNumbers('-8', '20');