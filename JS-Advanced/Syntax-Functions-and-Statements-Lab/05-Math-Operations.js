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

// function mathOperations(firstNumber, secondNumber, operator) {
//     let result;

//     switch (operator) {
//         case "+":
//             result = firstNumber + secondNumber;
//             break;
//         case "-":
//             result = firstNumber - secondNumber;
//             break;
//         case "*":
//             result = firstNumber * secondNumber;
//             break;
//         case "/":
//             result = firstNumber / secondNumber;
//             break;
//         case "%":
//             result = firstNumber % secondNumber;
//             break;
//         case "**":
//             result = firstNumber ** secondNumber;
//             break;
//     }
//     console.log(result);

// }


// mathOperations(5, 6, '+')
// mathOperations(3, 5.5, '*')

function solve(number1, number2, operant) {
    let calculations = {
        '+': number1 + number2,
        '-': number1 - number2,
        '*': number1 * number2,
        '/': number1 / number2,
        '%': number1 % number2,
        '**': number1 ** number2
    };

    console.log(calculations[operant]);
}

function solve(number1, number2, operator) {
    let smtElse = {
        '+': function (num1, num2) {
            return num1 + num2;
        },
        '-': function (num1, num2) {
            return num1 - num2;
        },
        '*': function (num1, num2) {
            return num1 * num2;
        },
        '/': function (num1, num2) {
            return num1 / num2;
        },
        '%': function (num1, num2) {
            return num1 % num2;
        },
        '**': function (num1, num2) {
            return num1 ** num2;
        },
    }

    console.log(smtElse[operator](number1, number2));
}
solve(5, 6, '+')
solve(3, 5.5, '*')