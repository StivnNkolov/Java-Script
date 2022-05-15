// function addItem() {
//     // select
//     let ulElement = document.getElementById('items');
//     let inputFieldElement = document.getElementById('newItemText');

//     // add item to the ul
//     let newElementToAdd = document.createElement('li');
//     let deletAnchorToAdd = document.createElement('a');
//     deletAnchorToAdd.textContent = '[Delete]'
//     deletAnchorToAdd.setAttribute('href', '#')
//     newElementToAdd.textContent = inputFieldElement.value;
//     newElementToAdd.appendChild(deletAnchorToAdd);
//     ulElement.appendChild(newElementToAdd);

//     // delete if pressed
//     ulElement.addEventListener('click', (e) => {
//         e.target.parentNode.remove()
//     })


//     // clean
//     inputFieldElement.value = '';


// }   

function addItem() {
    let ulElement = document.querySelector('#items');
    let inputElement = document.querySelector('#newItemText');

    let inputValue = inputElement.value;

    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputValue;

    let newAelement = document.createElement('a');
    newAelement.textContent = '[Delete]'
    newAelement.setAttribute('href', '#');
    newLiElement.appendChild(newAelement);

    newAelement.addEventListener('click', deleteItem)

    ulElement.appendChild(newLiElement)
    console.log(inputElement);

    function deleteItem(event) {
        let targetParenNode = event.target.parentNode;
        targetParenNode.remove();
    }

    inputElement.value = '';
}