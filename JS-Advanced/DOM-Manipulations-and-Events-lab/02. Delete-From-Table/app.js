// // function deleteByEmail() {
// //     // select
// //     let inputFieldElement = document.getElementsByName('email')[0];
// //     let allTrFromBody = document.querySelectorAll('#customers tr');
// //     let resultDivElement = document.getElementById('result');

// //     // find if we have match and work with DOM
// //     let trArray = Array.from(allTrFromBody);
// //     trArray.shift();
// //     let match = trArray.filter((v, i, a) => {
// //         if (v.lastElementChild.textContent == inputFieldElement.value) {
// //             return v
// //         }
// //     })

// //     if (match.length > 0) {
// //         resultDivElement.textContent = "Deleted.";
// //         let elementToRemove = match[0];
// //         elementToRemove.remove();
// //     }else {
// //         resultDivElement.textContent = "Not found."
// //     }

// //     // clear input field
// //     inputFieldElement.value = '';
// // }

// function deleteByEmail() {
//     let inputFieldElement = document.querySelector('input');
//     let resultElement = document.querySelector('#result');
//     let tableBodyElement = document.querySelector('#customers tbody').children;
//     let tableBodyElementsAsArray = Array.from(tableBodyElement);

//     let mathedElement = tableBodyElementsAsArray.filter(v => v.lastElementChild.textContent == inputFieldElement.value)[0];
//     // console.log(mathedElement);
//     if (mathedElement == undefined) {
//         resultElement.textContent = "Not found."
//     }else {
//         mathedElement.remove();
//         resultElement.textContent = "Deleted."
//     }

//     inputFieldElement.value = "";
// }

function deleteByEmail() {
    let allTrElements = document.querySelectorAll('tr td:nth-child(even)');
    let inputEmailElement = document.querySelector('input');
    let resultElement = document.querySelector('#result');

    let inputEmail = inputEmailElement.value;

    let foundEmail = Array.from(allTrElements)
        .filter(v => {
            if (v.textContent == inputEmail) {
                return v;
            }
        })[0]

    if (foundEmail) {
        foundEmail.parentElement.remove();
    }
    resultElement.textContent = foundEmail != undefined ? 'Deleted.' : 'Not found.';
    inputEmailElement.value = '';
}