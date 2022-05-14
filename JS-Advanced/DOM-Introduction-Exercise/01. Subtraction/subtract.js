// function subtract() {
//     let firstNumberElement = document.getElementById("firstNumber");
//     let secondNumberElement = document.getElementById("secondNumber");

//     let firstNumber = Number(firstNumberElement.value);
//     let secondNumber = Number(secondNumberElement.value);

//     let result = firstNumber - secondNumber;

//     let resultElement = document.getElementById("result");
//     resultElement.textContent = result;
// }

function subtract() {
    let firstNumberElement = document.querySelector('#firstNumber');
    let secondNumberElement = document.querySelector('#secondNumber');   
    let resultDivElement = document.querySelector('#result');

    let result = Number(firstNumberElement.value) - Number(secondNumberElement.value);
    resultDivElement.textContent = result;
}