// function solve() {
//   let textAreaElement = document.getElementById("input");
//   let textAreaValue = textAreaElement.value;
//   let outputElement = document.getElementById("output");


//   let textArray = textAreaValue.split(".").filter((x) => x !== "").map((x) => x + ".");


//   let numberOfP = Math.ceil(textArray.length / 3);

//   for (let i = 0; i < numberOfP; i++) {
//     outputElement.innerHTML += `<p>${textArray.splice(0, 3).join("")}</p>`
//   }

// }

//  MUST REWATCH THIS SHEEET
function solve() {
  let textAreaElement = document.querySelector('#input');
  let textAreaElementValue = textAreaElement.value.split('.').map(v => v += '.');
  textAreaElementValue.pop();

  let resultElement = document.querySelector('#output');

  let numberOfParagraphs = Math.ceil(textAreaElementValue.length / 3);
  console.log(numberOfParagraphs);
  // console.log(textAreaElementValue);

  for (let i = 1; i <= numberOfParagraphs; i++) {
    let currentParagraph = "<p>"
    for (let i = 0; i < 3; i++) {
      let currElement = textAreaElementValue.shift()
      if (currElement != undefined) {
        currentParagraph += currElement;
      }
    }
    currentParagraph += "</p>";
    resultElement.innerHTML += currentParagraph;

  }



}