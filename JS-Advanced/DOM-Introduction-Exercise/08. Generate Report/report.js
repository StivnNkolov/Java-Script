function generateReport() {
    let checkboxElementsArray = Array.from(document.querySelectorAll('th input'));
    let tdElements = Array.from(document.querySelectorAll('tbody tr')).map(v => Array.from(v.children));
    let resultElement = document.querySelector('#output');

    let checkedElements = checkboxElementsArray.filter((v) => {
        if (v.checked == true) {
            return v;
        }
    });

    let arrayOfObjects = []

    for (let arr of tdElements) {
        let workingObject = {};
        for (let input of checkedElements) {
            let inputName = input.name
            let inputIndex = checkboxElementsArray.indexOf(input);
            workingObject[inputName] = arr[inputIndex].textContent;
        }
        arrayOfObjects.push(workingObject)
    }

    resultElement.textContent = JSON.stringify(arrayOfObjects);
}