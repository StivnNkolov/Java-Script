// // function extractText() {
// //     let allListItems = document.getElementById("items").textContent;
// //     let textField = document.getElementById("result");
// //     textField.value = allListItems;

// // }


// function extractText() {
//     let allListElements = document.querySelectorAll('#items li');
//     let allListElementsArray = Array.from(allListElements);
//     let textArea = document.getElementById('result');



//     let textToAddToField = allListElementsArray
//     .map(mapper)
//     .join("\n");

//     textArea.textContent = textToAddToField;

//     function mapper(v) {
//         let currentValueTextContent = v.textContent;
//         return currentValueTextContent;
//     };
// };

function extractText() {
    let textAreaElement = document.querySelector('#result');
    let resultTextContent = Array.from(document
        .querySelectorAll('li'))
        .map(v => v.textContent)
        .join('\n');

    textAreaElement.textContent = resultTextContent;

}