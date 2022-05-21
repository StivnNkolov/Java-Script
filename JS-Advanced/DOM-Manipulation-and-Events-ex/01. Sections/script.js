// function create(words) {
//    let contentDivElement = document.querySelector('#content');


//    for (let el of words) {
//       let newDivElement = document.createElement('div');
//       let newPElement = document.createElement('p');
//       newPElement.style.display = 'none'; 
//       newPElement.textContent = el;

//       newDivElement.addEventListener('click', (e) => {
//          let pElementToShow = e.currentTarget.lastElementChild;
//          pElementToShow.style.display = ''
//          // pElementToShow.textContent = el;
//       })

//       newDivElement.appendChild(newPElement);
//       contentDivElement.appendChild(newDivElement);
//    }
// }

// function create(words) {
//    let contentDivElement = document.querySelector('#content');

//    for (const word of words) {
//       let newDivElement = document.createElement('div');
//       let newPElement = document.createElement('p');

//       newPElement.textContent = word;
//       newPElement.setAttribute('style', 'display: none');

//       newDivElement.addEventListener('click', showP);


//       newDivElement.appendChild(newPElement);
//       contentDivElement.appendChild(newDivElement);


//    }

//    function showP(event) {
//       let targetP = event.currentTarget.firstElementChild;
//       targetP.setAttribute('style', 'display: block');
//    }
// }

// //  This is solution with closure. This way we don't need to make a lot of calls
// function create(words) {
//    let contentDivElement = document.querySelector('#content');

//    for (const word of words) {
//       let newDivElement = document.createElement('div');
//       let newPElement = document.createElement('p');

//       newPElement.textContent = word;
//       newPElement.setAttribute('style', 'display: none');

//       newDivElement.addEventListener('click', showP);


//       newDivElement.appendChild(newPElement);
//       contentDivElement.appendChild(newDivElement);

//       function showP() {
//          newPElement.setAttribute('style', 'display:block');
//       }

//    }

//    // function showP(event) {
//    //    let targetP = event.currentTarget.firstElementChild;
//    //    targetP.setAttribute('style', 'display: block');
//    // }
// }


//  Again solution with closure but this time we use bind so that we don't need to make new function on every itteration!!
function create(words) {
   let contentDivElement = document.querySelector('#content');

   for (const word of words) {
      let newDivElement = document.createElement('div');
      let newPElement = document.createElement('p');

      newPElement.textContent = word;
      newPElement.setAttribute('style', 'display: none');

      newDivElement.addEventListener('click', showP.bind(null, newPElement));


      newDivElement.appendChild(newPElement);
      contentDivElement.appendChild(newDivElement);
   }

   function showP(paragraph) {
      paragraph.setAttribute('style', 'display:block');
   }
}

// Same solution but we add the paragraph as this. This way the paragraph became the context of our function and we don't need to pass arguments! 
function create(words) {
   let contentDivElement = document.querySelector('#content');

   for (const word of words) {
      let newDivElement = document.createElement('div');
      let newPElement = document.createElement('p');

      newPElement.textContent = word;
      newPElement.setAttribute('style', 'display: none');

      newDivElement.addEventListener('click', showP.bind(newPElement));


      newDivElement.appendChild(newPElement);
      contentDivElement.appendChild(newDivElement);



   }
   function showP() {
      this.setAttribute('style', 'display:block');
   }
}