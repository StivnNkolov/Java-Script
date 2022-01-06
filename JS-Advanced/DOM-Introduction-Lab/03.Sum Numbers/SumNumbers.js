// function calc() {
//     let firstNumber = Number(document.getElementById("num1").value);
//     let secondNumber = Number(document.getElementById("num2").value);
//     let result = firstNumber + secondNumber;

//     let sumTextBox = document.getElementById("sum")
//     sumTextBox.value = result;
// }


function calc() {
    let userInputElementsAsList = Array.from(document.querySelectorAll('#num1, #num2'));

    let resultValue = userInputElementsAsList
    .map(v => Number(v.value))
    .reduce((pv, cv) => pv += cv, 0);
    console.log(resultValue);

    document.getElementById('sum').value = resultValue

};