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

function create(words) {
   let contentDivElement = document.querySelector('#content');

   for (const word of words) {
      let newDivElement = document.createElement('div');
      let newPElement = document.createElement('p');

      newPElement.textContent = word;
      newPElement.setAttribute('style', 'display: none');

      newDivElement.addEventListener('click', showP);


      newDivElement.appendChild(newPElement);
      contentDivElement.appendChild(newDivElement);


   }

   function showP(event) {
      let targetP = event.currentTarget.firstElementChild;
      targetP.setAttribute('style', 'display: block');
   }
}