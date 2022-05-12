// // function sumTable() {
// //     let secondElements = document.querySelectorAll("td:nth-child(2)");
// //     let asArray = Array.from(secondElements);
// //     let sumEl = asArray.pop();

// //     let result = 0

// //     for (let el of asArray) {
// //         result += Number(el.textContent);
// //     }

// //     sumEl.textContent = result;
// // }

// function sumTable() {
//     let costElementsAsArray = Array.from(document.querySelectorAll('td:nth-child(2)'));
//     let sumField = costElementsAsArray.pop();

//     let sumForDisplay = costElementsAsArray
//         .map(v => Number(v.textContent))
//         .reduce((pv, cv) => pv += cv, 0);

//     sumField.textContent = sumForDisplay;
// }

function sumTable() {
    let secondTdElementsArray = Array.from(document.querySelectorAll('td:nth-child(even)'));
    let sumElement = secondTdElementsArray.pop();

    let resultSum = secondTdElementsArray.reduce((pv, cv, i, arr) => {
        return pv + Number(cv.textContent);
    }, 0);
    sumElement.textContent = resultSum;
}