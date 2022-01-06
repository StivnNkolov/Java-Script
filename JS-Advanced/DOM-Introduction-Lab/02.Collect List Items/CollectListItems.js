// function extractText() {
//     let allListItems = document.getElementById("items").textContent;
//     let textField = document.getElementById("result");
//     textField.value = allListItems;

// }


function extractText() {
    let allListElements = document.querySelectorAll('#items li');
    let allListElementsArray = Array.from(allListElements);
    let textArea = document.getElementById('result');
    


    let textToAddToField = allListElementsArray
    .map(mapper)
    .join("\n");

    textArea.textContent = textToAddToField;

    function mapper(v) {
        let currentValueTextContent = v.textContent;
        return currentValueTextContent;
    };
};