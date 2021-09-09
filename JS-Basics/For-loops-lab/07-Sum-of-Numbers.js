function SumOfNumbers(input) {
    let numberInString = input[0];
    let stringLength = numberInString.length;

    let sum = 0;

    for (let index = 0; index < stringLength; index++) {
        let currentNumber = Number(numberInString[index]);
        sum += currentNumber
    }
    console.log(`The sum of the digits is:${sum}`);
}
SumOfNumbers(["564981"])