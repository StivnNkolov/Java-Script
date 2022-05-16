// function addItem() {
//     let dropDownMenuElement = document.querySelector('#menu');
//     let inputFieldForTextElement = document.querySelector('#newItemText');
//     let inputFieldForValueElement = document.querySelector('#newItemValue');
//     let newOptionElementToAdd = document.createElement('option');

//     newOptionElementToAdd.value = inputFieldForValueElement.value;
//     newOptionElementToAdd.textContent = inputFieldForTextElement.value;

//     dropDownMenuElement.appendChild(newOptionElementToAdd);
    
//     inputFieldForValueElement.value = '';
//     inputFieldForTextElement.value = '';
// }

function addItem() {
    let selectElement = document.querySelector('#menu');
    let textInputElement = document.querySelector('#newItemText');
    let valueInputElement = document.querySelector('#newItemValue');
    
    

    let newOptionElement = document.createElement('option');

    newOptionElement.setAttribute('value', valueInputElement.value);
    newOptionElement.textContent = textInputElement.value;



    selectElement.appendChild(newOptionElement);

    textInputElement.value = '';
    valueInputElement.value = '';
}