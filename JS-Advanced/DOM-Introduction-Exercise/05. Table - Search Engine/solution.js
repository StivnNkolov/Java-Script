// // function solve() {
// //    document.querySelector('#searchBtn').addEventListener('click', onClick);


// //    function onClick() {
// //       let rowsElements = document.getElementsByTagName("tr");
// //       let searchBoxElement = document.getElementById("searchField");


// //       let searchBoxValue = searchBoxElement.value;

// //       searchBoxElement.value = "";


// //       let workingArray = Array.from(rowsElements).slice(2);

// //       workingArray.map(function (x) {
// //          x.classList.remove("select")
// //       })

// //       for (let el of workingArray) {
// //          if (el.textContent.includes(searchBoxValue)) {
// //             el.classList.add("select");
// //          }
// //       }

// //    }
// // }

// // FIRST IS MAYBE BETTER. MIX BETWEEN BOTH WILL BE PERFECT.

// function solve() {
//    document.querySelector('#searchBtn').addEventListener('click', onClick);

//    function onClick() {

//       // Extract input text and clear the field
//       let inputFieldElement = document.querySelector('#searchField');
//       let inputFieldElementText = inputFieldElement.value;
//       inputFieldElement.value = '';

//       // Extracting tbody elements and clearing the css
//       let tbodyElement = document.querySelector('tbody').children;
//       let tbodyElementAsArray = Array.from(tbodyElement);
//       tbodyElementAsArray.map(v => v.classList.remove('select'));

//       // finding the text content for each tbody tr
//       let textContentForEachRow = tbodyElementAsArray.map(v => {
//          let currentTRData = Array.from(v.children).map(v => v.textContent).join('');
//          return currentTRData;

//       });

//       addingStyle(tbodyElement, textContentForEachRow, inputFieldElementText)

//       // Function to find if we have matches with the searched text 
//       // and if so- add css style
//       function addingStyle(bodyElementsArray, searchedData, searchedText) {
//          if (searchedText != '') {
//             searchedData.map((v, index) => {
//                if (v.includes(searchedText)) {
//                   bodyElementsArray[index].classList.add('select')
//                }
//             })
//          }
//       }
//    }
// }

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableBodyElements = document.querySelectorAll('tbody tr');
      let searchInputElement = document.querySelector('#searchField');

      for (element of tableBodyElements) {
         element.className = '';
      }


      let trArray = Array.from(tableBodyElements)
         .map(v => v.children)

      for (let tr of trArray) {
         let currTrArray = Array.from(tr)
            .map(v => {

               if (v.textContent.includes(searchInputElement.value) && searchInputElement.value != '') {
                  v.parentElement.className = 'select';
               }
            });
      }
      searchInputElement.value = '';
   }
}

