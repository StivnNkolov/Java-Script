// function lockedProfile() {
//     let mainContainerElement = document.querySelector('#container');

//     mainContainerElement.addEventListener('click', onClickButton);


//     function onClickButton(event) {
//         let userClick = event.target;
//         let userClicksParent = userClick.parentNode;
//         let inputRadioLockedElement = userClicksParent.querySelectorAll('input[type="radio"]')[0]
//         let isRadioLockedElementChecked = inputRadioLockedElement.checked;
//         // console.log(userClick.tagName);
//         if (!isRadioLockedElementChecked && userClick.tagName == 'BUTTON') {
//             if (userClick.textContent == 'Show more') {
//                 let hiddenInfoElement = userClicksParent.querySelector(':nth-last-child(2)');
//                 hiddenInfoElement.style.display = 'block';
//                 userClick.textContent = 'Hide it'
//             } else {
//                 let hiddenInfoElement = userClicksParent.querySelector(':nth-last-child(2)');
//                 hiddenInfoElement.style.display = 'none';
//                 userClick.textContent = 'Show more'
//             }
//         }
//     }
// }

function lockedProfile() {
    let allProfileDivElementsArray = Array.from(document.querySelectorAll('.profile'));

    for (const profile of allProfileDivElementsArray) {

        profile.addEventListener('click', showMore);

    }

    function showMore(event) {
        let pressedElement = event.target;
        let radioElementForProfileLock = event.currentTarget.querySelector('input[type=radio]');
        let buttonForProfile = event.currentTarget.querySelector('button');

        if (!radioElementForProfileLock.checked) {
            if (pressedElement == buttonForProfile) {
                let hiddenInfoDiv = event.currentTarget.querySelector('div');

                pressedElement.textContent == 'Show more'
                    ? hiddenInfoDiv.setAttribute('style', 'display: block')
                    : hiddenInfoDiv.setAttribute('style', 'display: none');

                hiddenInfoDiv.style.display == 'none'
                    ? pressedElement.textContent = 'Show more'
                    : pressedElement.textContent = 'Hide it';

            }
        }
    }
}