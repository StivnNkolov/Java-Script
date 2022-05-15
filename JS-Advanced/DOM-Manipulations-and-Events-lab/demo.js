// function addHero() {

//     // selecting needed dom elements
//     let ulElement = document.querySelector('ul');
//     let inputFieldElement = document.querySelector('#hero-name');

//     // // wrong way to add elements
//     // let elementToAdd = `<li>${inputFieldElement.value}</li>`;
//     // ulElement.innerHTML += elementToAdd;

//     // good way to add element
//     // create element
//     let elementToAdd = document.createElement('li');
//     // // work with element
//     elementToAdd.textContent = inputFieldElement.value;
//     // // add the element to the dom
//     ulElement.appendChild(elementToAdd);

//     // // second way to add element
//     let elementToClone = ulElement.children[0];
//     let newElementToAdd = elementToClone.cloneNode();
//     newElementToAdd.textContent = inputFieldElement.value;
//     ulElement.prepend(newElementToAdd);


//     // clearieng the input field after pressing the button
//     inputFieldElement.value = '';


// };

// function deleteHero() {
//     // select 
//     let ulElement = document.querySelector("ul");
//     let lastElementToDelete = ulElement.lastElementChild;
//     // delete
//     ulElement.removeChild(lastElementToDelete);
// };

// // register events

// // With HTML Attributes
// function onMouseOverHandler() {
//     console.log("HTML Attributes");
// };

// // using DOM element properties - rare use
// // selektiram elementa na koito iskam da zakrepq eventa
// let heroNameElement = document.getElementById("hero-name");
// heroNameElement.onfocus = function (e) {
//     // e e focus event object koito sudurja mmn info
//     console.log(e)
//     console.log(e.target);
//     console.log(e.currentTarget)
//     console.log("DOM element properties");
// };
// heroNameElement.onblur = () => {
//     console.log("DOM element properties2");
// };


// // Using DOM event handler - use this
// // create function to handle the event
// function heroNameInputHandler(event) {
    
//     // ne e dobre da izpolzvame danni idvashti ot nikude
//     // console.log(heroNameElement.value);

//     // event.currentTarget = currentTarget e tova vurhu koeto sme zakacghili eventa.
//     // event.target = tochno tova s koeto usera e interaktnal
//     console.log(event.currentTarget.value); 
//     console.log("-----")
//     console.log("DOM event handler");
// }
// // add event listenero to the element we want.
// //  First param=type of event;second param=referenciq kum function handler.
// heroNameElement.addEventListener("input", heroNameInputHandler);



// let a = 'nako3@softuni.bg';

// let regexPattern = /[a-z]+\@[a-z]+\.[a-z]+/gm;

// let b = a.match(regexPattern);
// console.log(b);


let a = ['kiko'];

let b = 'kiko';

a.includes(b) ? pass : a.push(b);
console.log(a);