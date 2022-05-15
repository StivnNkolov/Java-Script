// function focused() {
//     let divElements = document.querySelectorAll('input')
//     // console.log(divElements);

//     for (let element of divElements) {
//         // console.log(element);
//         element.addEventListener('focus', (e) => {
//             e.target.parentNode.classList.add('focused');
//         })
//         element.addEventListener('blur', (e) => {
//             e.target.parentNode.classList.remove('focused')
//         })
//     }

//     // divElements.addEventListener('click', (e) => {
//     //     console.log(e.target);


//     //     // let a = e.target.parentNode.classList;
//     //     // e.target.focus()
//     //     let parentNode = e.target.parentNode.classList.add('focused')

//     //     // console.log(parentNode);
//     //     // e.parentNode.classList.add('focused')
//     //     // console.log(e.target);

//     // })

//     // // divElements.addEventListener(    
// }

function focused() {
    let inputsElementsArray = Array.from(document.querySelectorAll('input'));

    for (let input of inputsElementsArray) {
        input.addEventListener('focus', (e) => {
            e.target.parentNode.className += 'focused';
        })
    }
    for (let input of inputsElementsArray) {
        input.addEventListener('blur', (e) => {
            e.target.parentNode.className = '';
        })
    }
}