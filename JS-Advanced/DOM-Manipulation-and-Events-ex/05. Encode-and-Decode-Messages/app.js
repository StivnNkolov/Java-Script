// function encodeAndDecodeMessages() {

//     let [encodeButtonEl, decodeButtonEl] = document.querySelectorAll('button');
//     let [senderTextArea, receiverTextArea] = document.querySelectorAll('textarea')
//     encodeButtonEl.addEventListener('click', (e) => {
//         let messageToEncode = senderTextArea.value.split('');
//         let encodedMessage = messageToEncode
//             .map(v => {
//                 let newValueInAscii = v.charCodeAt() + 1;
//                 v = String.fromCharCode(newValueInAscii)
//                 return v

//             })
//             .join('');
//         // console.log(encodedMessage);
//         receiverTextArea.value = encodedMessage;
//         senderTextArea.value = '';


//     })

//     decodeButtonEl.addEventListener('click', (e) => {
//         let messageToDecode = receiverTextArea.value.split('');
//         let decodedMessage = messageToDecode
//             .map(v => {
//                 let newValueInAscii = v.charCodeAt() - 1;
//                 v = String.fromCharCode(newValueInAscii)
//                 return v

//             })
//             .join('');
//         receiverTextArea.value = decodedMessage;
//     })


// }

function encodeAndDecodeMessages() {
    let mainElement = document.querySelector('#main');

    mainElement.addEventListener('click', workWithMessages);

    function workWithMessages(event) {
        let firstDivCurrentTargetButton = event.currentTarget.firstElementChild.querySelector('button');
        let lastDivCurrentTargetButton = event.currentTarget.lastElementChild.querySelector('button');

        if (event.target == firstDivCurrentTargetButton) {
            let currentTargetFirstChildElement = event.currentTarget.firstElementChild;
            let firstChildTextArea = currentTargetFirstChildElement.querySelector('textarea');
            let currentTargetLastChildElement = event.currentTarget.lastElementChild.querySelector('textarea');
            let textAreaValue = firstChildTextArea.value;

            let hiddenMessage = encode(textAreaValue);
            currentTargetLastChildElement.value = hiddenMessage;
            firstChildTextArea.value = '';

            function encode(text) {
                let encodedMessage = Array.from(text)
                    .map(v => {
                        let newAsciiElement = v.charCodeAt() + 1;
                        let newValue = String.fromCharCode(newAsciiElement);
                        return newValue;
                    })
                    .join('');

                return encodedMessage;
            }
        }else if (event.target == lastDivCurrentTargetButton) {
            let currentTargetLastChildElement = event.currentTarget.lastElementChild;
            let lastChildTextArea = currentTargetLastChildElement.querySelector('textarea');
            let lastChildTextAreaValue = lastChildTextArea.value;

            let decodedMessage = decode(lastChildTextAreaValue);
            lastChildTextArea.value = decodedMessage;

            function decode(text) {
                let encodedMessage = Array.from(text)
                    .map(v => {
                        let newAsciiElement = v.charCodeAt() - 1;
                        let newValue = String.fromCharCode(newAsciiElement);
                        return newValue;
                    })
                    .join('');

                return encodedMessage;
            }
            
            
        }
    }
} 