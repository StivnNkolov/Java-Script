// function addItem() {
//     // select
//     let inputFieldElement = document.getElementById('newItemText');
//     let ulElement = document.getElementById('items');

//     // create new element and add 
//     let elementToAdd = document.createElement('li');
//     elementToAdd.textContent = inputFieldElement.value;
//     ulElement.appendChild(elementToAdd);

//     // clear input field
//     inputFieldElement.value = '';
// }

function addItem() {
    let listOfItemsElement = document.querySelector('#items');
    let inputElement = document.querySelector('#newItemText');

    let newItemValue = inputElement.value;

    let newLiElement = document.createElement('li');
    newLiElement.textContent = newItemValue;

    listOfItemsElement.appendChild(newLiElement);

    inputElement.value = '';
}