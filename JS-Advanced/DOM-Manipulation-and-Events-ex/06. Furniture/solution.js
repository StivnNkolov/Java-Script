// function solve() {

//     // selecting some things 
//     let generateButtonElement = document.querySelector('button');
//     let buyButtonElement = document.querySelector('button:last-child');
//     let tbodyElementToAddTo = document.querySelector('tbody');
//     // console.log(tbodyElementToAddTo);
//     // console.log(buyButtonElement);
//     // console.log(generateButtonElement);
//     // let userInputTextAreaElement = document.querySelector('textarea');
//     // let userOutputTextAreaElement = document.querySelector('textarea:last-child');
//     let allTextAreaElements = document.querySelectorAll('textarea');
//     let userOutputTextAreaElement = allTextAreaElements[1];
//     let userInputTextAreaElement = allTextAreaElements[0];
//     // console.log(userInputTextAreaElement);
//     // console.log(userOutputTextAreaElement);


//     generateButtonElement.addEventListener('click', (e) => {
//         let userInput = userInputTextAreaElement.value;
//         let parsedUserInput = JSON.parse(userInput);
//         // console.log(parsedUserInput);

//         for (let currObj of parsedUserInput) {
//             // console.log(currObj);
//             let currObjKeys = Object.keys(currObj);

//             let newTrElement = document.createElement('tr');
//             // console.log(newTrElement);

//             for (let el of currObjKeys) {
//                 let newTDElement = document.createElement('td');
//                 if (el == 'img') {
//                     let newImgEqlement = document.createElement('img');
//                     newImgEqlement.src = currObj[el];
//                     newTDElement.appendChild(newImgEqlement);
//                     newTrElement.prepend(newTDElement);
//                 } else {
//                     let newPElementToAdd = document.createElement('p');
//                     newPElementToAdd.textContent = currObj[el];
//                     newPElementToAdd.id = el;
//                     newTDElement.appendChild(newPElementToAdd);
//                     newTrElement.appendChild(newTDElement);
//                 }
//             }
//             let newInputElement = document.createElement('input');
//             let tdElementForInputElement = document.createElement('td');
//             newInputElement.type = 'checkbox';
//             tdElementForInputElement.appendChild(newInputElement)
//             newTrElement.appendChild(tdElementForInputElement);
//             // newTrElement.style.display = 'inline'/  
//             tbodyElementToAddTo.appendChild(newTrElement);
//         }
//     })


//     buyButtonElement.addEventListener('click', (e) => {
//         let allCheckBoxesElements = document.querySelectorAll('input[type="checkbox"]');
//         let allCheckBoxesElementsAsArray = Array.from(allCheckBoxesElements);
//         let onlyCheckedBoxes = allCheckBoxesElementsAsArray.filter(v => {
//             if (v.checked) {
//                 return v;
//             }
//         })
//         let boughtFurnitureArray = [];
//         let totalPrice = 0;
//         let decoration = 0;
//         for (let el of onlyCheckedBoxes) {
//             let parentNode = el.parentNode;
//             // let name = parentNode.querySelector('#name').textContent;
//             // let price = parentNode.querySelector('#price').textContent;
//             // let decFactor = parentNode.querySelector('#decFactor').textContent;
//             let allPElements = parentNode.querySelectorAll('p');
//             let name = allPElements[0].textContent;
//             let price = allPElements[1].textContent;
//             let decFactor = allPElements[2].textContent;
//             boughtFurnitureArray.push(name);
//             totalPrice += Number(price);
//             decoration += Number(decFactor);
//         }

//         let avgDec = decoration / onlyCheckedBoxes.length;

//         userOutputTextAreaElement.value += `Bought furniture: ${boughtFurnitureArray.join(', ')}\n`;
//         userOutputTextAreaElement.value += `Total price: ${totalPrice.toFixed(2)}\n`;
//         userOutputTextAreaElement.value += `Average decoration factor: ${avgDec}`;
//     })
// }


// // function solve() {
// //     const [generateBtn, buyBtn] = document.getElementsByTagName("button")
// //     const [generateInput, buyOutput] = document.getElementsByTagName("textarea")
// //     const tableBody = document.querySelector("tbody")

// //     const htmlTemplate = ({ img, name, price, decFactor }) => {
// //         const row = document.createElement("tr")

// //         row.innerHTML = `<td><img src=${img}></td>
// // <td><p>${name}</p></td>
// // <td><p>${price}</p></td>
// // <td><p>${decFactor}</p></td>
// // <td><input type="checkbox"/></td>`

// //         return row
// //     }

// //     const generate = () =>
// //         JSON.parse(generateInput.value).forEach(x =>
// //             tableBody.appendChild(htmlTemplate(x))
// //         )

// //     const buy = () => {
// //         const braindeadData = Array.from(
// //             tableBody.querySelectorAll("input[type=checkbox]:checked")
// //         ).map(x =>
// //             Array.from(x.parentNode.parentNode.children)
// //                 .slice(1, 4)
// //                 .map(
// //                     x =>
// //                         Number(x.children[0].innerHTML) ||
// //                         x.children[0].innerHTML
// //                 )
// //         )
// //         const getSum = arr => arr.reduce((a, v) => a + v, 0)

// //         const names = braindeadData.map(x => x[0]).join(", ")
// //         const prices = getSum(braindeadData.map(x => x[1]))
// //         const avFactors =
// //             getSum(braindeadData.map(x => x[2])) / braindeadData.length

// //         buyOutput.value = `Bought furniture: ${names}
// // Total price: ${prices.toFixed(2)}
// // Average decoration factor: ${avFactors}`
// //     }

// //     generateBtn.addEventListener("click", generate)
// //     buyBtn.addEventListener("click", buy)
// // }

function solve() {
    let inputButtonElement = document.querySelectorAll('#exercise button:first-of-type');
    let inputButtonForBuyElement = document.querySelectorAll('#exercise button:last-of-type')
    console.log(inputButtonElement);
    let tableBodyElement = document.querySelector('.table tbody');


    inputButtonElement[0].addEventListener('click', addNewTr);
    inputButtonForBuyElement[0].addEventListener('click', generateBuyReport);

    function addNewTr(event) {
        let inputTextAreaElement = event.currentTarget.previousElementSibling.value;
        let inputValueAsArrayOfObj = JSON.parse(inputTextAreaElement);

        for (const object of inputValueAsArrayOfObj) {

            let newTr = createDOMElement('tr')

            let tdForImage = createDOMElement('td');
            let newImgElement = createDOMElement(tagName = 'img', src = object.img)
            tdForImage.appendChild(newImgElement);

            let tdForName = createDOMElement('td');
            let pElementForName = createDOMElement(tagName = 'p', null, null, object.name);
            tdForName.appendChild(pElementForName);

            let tdForPrice = createDOMElement('td');
            let pElementForPrice = createDOMElement('p', null, null, object.price);
            tdForPrice.appendChild(pElementForPrice);

            let tdForDecFactor = createDOMElement('td');
            let pElementForFactor = createDOMElement('p', null, null, object.decFactor);
            tdForDecFactor.appendChild(pElementForFactor);

            let tdForCheck = createDOMElement('td');
            let inputForCheck = createDOMElement('input', null, 'checkbox');
            tdForCheck.appendChild(inputForCheck);

            newTr.appendChild(tdForImage);
            newTr.appendChild(tdForName);
            newTr.appendChild(tdForPrice);
            newTr.appendChild(tdForDecFactor);
            newTr.appendChild(tdForCheck);

            tableBodyElement.appendChild(newTr)

        }
    }

    function generateBuyReport(event) {
        let tableBodyElement2AsArray = Array.from(event.currentTarget.parentNode.querySelectorAll('tbody tr'));
        let resultTextAreaElement = event.currentTarget.previousElementSibling;

        let checkedTr = tableBodyElement2AsArray.filter(v => {
            let tr = v;
            let trChecker = tr.querySelector('input');
            if (trChecker.checked) {
                return v;
            }
        })
        let boughtFurnitureName = checkedTr.map(v => {
            let currentPElementTextContent = v.querySelector('tr td:nth-child(2)').textContent;
            return currentPElementTextContent
        })
            .join(', ');
        let priceForBoughtFurniture = checkedTr
            .map(v => {
                let currentPElementTextContent = v.querySelector('tr td:nth-child(3)').textContent;
                return currentPElementTextContent;
            })
            .reduce((pv, cv) => {
                return pv += Number(cv)
            }, 0);

        let avgDecFactor = checkedTr
            .map(v => {
                let currentPElementTextContent = v.querySelector('tr td:nth-child(4)').textContent;
                return currentPElementTextContent
            }).reduce((pv, cv) => {
                return pv += Number(cv)
            }, 0) / checkedTr.length;

        resultTextAreaElement.textContent += `Bought furniture: ${boughtFurnitureName}\n`;
        resultTextAreaElement.textContent += `Total price: ${priceForBoughtFurniture.toFixed(2)}\n`;
        resultTextAreaElement.textContent += `Average decoration factor: ${avgDecFactor}`
    }

    function createDOMElement(tagName, src, type, textC) {
        let currentDOMElement = document.createElement(tagName);

        if (textC) {
            currentDOMElement.textContent = textC;
        }

        if (src) {
            currentDOMElement.setAttribute('src', src)
        }

        if (type) {
            currentDOMElement.setAttribute('type', type)
        }
        return currentDOMElement;
    }
}