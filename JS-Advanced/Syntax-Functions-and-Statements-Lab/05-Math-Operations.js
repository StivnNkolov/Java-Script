// function mathOperations(firstNumber, secondNumber, operator) {
//     let result;

//     if (operator === "+") {
//         result = firstNumber + secondNumber;
//     } else if (operator === "-") {
//         result = firstNumber - secondNumber;
//     } else if (operator === "*") {
//         result = firstNumber * secondNumber;
//     } else if (operator === "/") {
//         result = firstNumber / secondNumber;
//     } else if (operator === "%") {
//         result = firstNumber % secondNumber;
//     } else if (operator === "**") {
//         result = firstNumber ** secondNumber;
//     }
//     console.log(result);

// }

function mathOperations(firstNumber, secondNumber, operator) {
    let result;

    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
        case "%":
            result = firstNumber % secondNumber;
            break;
        case "**":
            result = firstNumber ** secondNumber;
            break;
    }
    console.log(result);

}


mathOperations(5, 6, '+')
mathOperations(3, 5.5, '*')