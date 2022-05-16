// function attachEventsListeners() {

//     let mainElement = document.querySelector('main');
//     let inputFieldsElements = document.querySelectorAll('input');
//     let inputFieldsElementsAsArray = Array.from(inputFieldsElements).filter(v => v.type == 'text');
//     console.log(inputFieldsElementsAsArray);

//     mainElement.addEventListener('click', (e) => {
//         let pressedButtonElement = e.target;
//         // let parent = pressedButtonElement.parentNode;
//         let pressedButtonTagName = e.target.id;
//         let pressedButtonInputValue = e.target.parentNode.querySelector('input').value;

//         if (pressedButtonElement.type == 'button') {
//             let smt = calculateData(pressedButtonInputValue)[pressedButtonTagName]
//             let calculatedValues = Object.values(smt);

//             inputFieldsElementsAsArray.map((v, i) => {
//                 v.value = calculatedValues[i]
//                 return v
//             })

//         }
//     })

//     function calculateData(inputData) {
//         let parsedData = Number(inputData)
//         let workingObj = {
//             'daysBtn': {
//                 days: parsedData,
//                 hours: parsedData * 24,
//                 minutes: (parsedData * 24) * 60,
//                 seconds: ((parsedData * 24) * 60) * 60
//             },
//             'hoursBtn': {
//                 days: parsedData / 24,
//                 hours: parsedData,

//                 minutes: parsedData * 60,
//                 seconds: (parsedData * 60) * 60
//             },
//             'minutesBtn': {
//                 days: (parsedData / 60) / 24,
//                 hours: parsedData / 60,
//                 minutes: parsedData,
//                 seconds: parsedData * 60
//             },
//             'secondsBtn': {
//                 days: ((parsedData / 60) / 60) / 24,
//                 hours: (parsedData / 60) / 60,
//                 minutes: parsedData / 60,
//                 seconds: parsedData,
//             }
//         }

//         return workingObj;
//     }
// }


function attachEventsListeners() {
    let mainElement = document.querySelector('main');

    mainElement.addEventListener('click', convertor);

    function convertor(event) {
        let pressedElement = event.target;

        let allTextInputElements = event.currentTarget.querySelectorAll('input[type=text]');

        if (pressedElement.type == 'button') {
            let textInputForThePressedButton = pressedElement.previousElementSibling
            let inputForThePressedButtonValue = textInputForThePressedButton.value;
            let valuesObject = helperFunction(inputForThePressedButtonValue, pressedElement.id)
            Array.from(allTextInputElements)
                .map(function (v) { return mapper(v, valuesObject) })
        }

    }

    function mapper(textInput, obj) {
        return textInput.value = obj[textInput.id]
    }

    function helperFunction(value, typeOfValue) {
        value = Number(value);
        seconds = 0
        if (typeOfValue == 'daysBtn') {
            seconds = value * 86400;
        } else if (typeOfValue == 'hoursBtn') {
            seconds = value * 3600;
        } else if (typeOfValue == 'minutesBtn') {
            seconds = value * 60;
        } else {
            seconds = value;
        }

        let convertorObject = {
            days: seconds / 86400,
            hours: seconds / 3600,
            minutes: seconds / 60,
            seconds: seconds,

        }
        return convertorObject;
    }
}