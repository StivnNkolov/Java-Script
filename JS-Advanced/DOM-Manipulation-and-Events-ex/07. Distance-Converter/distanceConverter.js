// function attachEventsListeners() {
//     let convertButtonElement = document.querySelector('#convert');

//     convertButtonElement.addEventListener('click', convertData);

//     function convertData(event) {
//         let inputElementValue = event.target.parentNode.querySelector('#inputDistance').value;
//         let inputUnits = document.querySelector('#inputUnits');
//         let outputInputElement = document.querySelector('#outputDistance');
//         let outputUnits = document.querySelector('#outputUnits');
//         let valueInMeters = converToMetersObject(inputElementValue)[inputUnits.value];
//         let convertedValue = convertToDesiredUnit(valueInMeters)[outputUnits.value];


//         outputInputElement.value = convertedValue;
//     }

//     function converToMetersObject(value) {
//         return {
//             km: value * 1000,
//             m: value * 1,   
//             cm: value * 0.01,
//             mm: value * 0.001,
//             mi: value * 1609.34,
//             yrd: value * 0.9144,
//             ft: value * 0.3048,
//             in: value * 0.0254
//         }
//     }

//     function convertToDesiredUnit(meters) {
//         return {
//             km: meters / 1000,
//             m: meters ,
//             cm: meters / 0.01,
//             mm: meters / 0.001,
//             mi: meters / 1609.34,
//             yrd: meters / 0.9144,
//             ft: meters / 0.3048,
//             in: meters / 0.0254,
//         }
//     }

// }

function attachEventsListeners() {
    let convertButtonElement = document.querySelector('#convert');

    convertButtonElement.addEventListener('click', convertData);

    function convertData(event) {
        let inputElementValue = event.target.parentNode.querySelector('#inputDistance').value;
        let inputUnits = document.querySelector('#inputUnits');
        let outputInputElement = document.querySelector('#outputDistance');
        let outputUnits = document.querySelector('#outputUnits');

        let endValue = calculate(inputElementValue, inputUnits.value, valuesInMeters, outputUnits.value)

        outputInputElement.value = endValue;
    }

    let valuesInMeters = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }


    function calculate(value, from, convertionValues, to) {
        let valueInMeters = value * convertionValues[from];
        return valueInMeters / convertionValues[to];
    }
}