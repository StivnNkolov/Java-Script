// function validate() {
//     let inputFieldElement = document.getElementById('email');
//     console.log(inputFieldElement);


//     inputFieldElement.addEventListener('change', (e) => {
//         let regex = /^[a-z]+@[a-z]+\.[a-z]+$/g;
//         let inputValue = e.currentTarget.value;
//         console.log(inputValue)
//         let smt = inputValue.match(regex);
//         if (smt === null) {
//             e.target.classList.add('error')
//         }else {
//             e.target.classList.remove('error')
//         }
//     })
// }

function validate() {
    let inputElementField = document.querySelector('#email');
    
    inputElementField.addEventListener('change', addClass);

    function addClass(event) {
        let regexPattern = /^[a-z]+\@[a-z]+\.[a-z]+$/gm;
        let target = event.currentTarget;

        if (!target.value.match(regexPattern)) {
            target.setAttribute('class', 'error')
        }else {
            target.setAttribute('class', '')
        }
    } 
}