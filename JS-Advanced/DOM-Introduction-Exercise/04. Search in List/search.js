// function search() {
//    let listElement = document.getElementsByTagName("li");
//    let searchBoxElement = document.getElementById("searchText");
//    let searchBoxValue = searchBoxElement.value;


//    let listElementAsArray = Array.from(listElement);

//    listElementAsArray.map(function (x) {
//       x.style.fontWeight = "";
//       x.style.textDecoration = "";
//    })


//    let elementsThatContains = listElementAsArray
//       .filter(function (x) {
//          if (x.textContent.includes(searchBoxValue)) {
//             return x;
//          }
//       }).map(function (x) {
//          x.style.fontWeight = "bold";
//          x.style.textDecoration = "underline";
//       })

//    let elementsThatMatchCount = elementsThatContains.length;
//    let resultValue = document.getElementById("result").textContent = `${elementsThatMatchCount} matches found`;

// }

function search() {
   let allLiElements = document.querySelectorAll('#towns li');
   let inputElementValue = document.querySelector('#searchText').value;
   let resultDivElement = document.querySelector('#result')
   

   let allLiElementsAsArray = Array.from(allLiElements);
   
   allLiElementsAsArray.map(v => {
      v.style.fontWeight = 'normal';
      v.style.textDecoration = 'none';
   });

   let matchedElements = inputElementValue !== "" ? allLiElementsAsArray
   .filter(v => v.textContent.includes(inputElementValue))
   .map(v => {
      v.style.fontWeight = 'bold';
      v.style.textDecoration = 'underline';
   }) : [];
   
   let textResult = `${matchedElements.length} matches found`;
   resultDivElement.textContent = textResult;
};

