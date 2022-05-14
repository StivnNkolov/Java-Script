// // function solve() {
// //   let textAreaElement = document.getElementById("input");
// //   let textAreaValue = textAreaElement.value;
// //   let outputElement = document.getElementById("output");


// //   let textArray = textAreaValue.split(".").filter((x) => x !== "").map((x) => x + ".");


// //   let numberOfP = Math.ceil(textArray.length / 3);

// //   for (let i = 0; i < numberOfP; i++) {
// //     outputElement.innerHTML += `<p>${textArray.splice(0, 3).join("")}</p>`
// //   }

// // }

// function solve() {
//   let textAreaElement = document.querySelector('#input');
//   let textAreaElementValue = textAreaElement.value.split('.').map(v => v += '.');
//   textAreaElementValue.pop();

//   let resultElement = document.querySelector('#output');

//   let numberOfParagraphs = Math.ceil(textAreaElementValue.length / 3);
//   console.log(numberOfParagraphs);
//   // console.log(textAreaElementValue);

//   for (let i = 1; i <= numberOfParagraphs; i++) {
//     let currentParagraph = "<p>"
//     for (let i = 0; i < 3; i++) {
//       let currElement = textAreaElementValue.shift()
//       if (currElement != undefined) {
//         currentParagraph += currElement;
//       }
//     }
//     currentParagraph += "</p>";
//     resultElement.innerHTML += currentParagraph;

//   }
// }

function solve() {
  let textAreaElement = document.querySelector('#input');
  let outputElement = document.querySelector('#output');

  let textAreaTextContentAsArray = textAreaElement.value.split('.').filter(v => v != '').map(v => v + '.');

  let pCount = Math.ceil(textAreaTextContentAsArray.length / 3);
  console.log(textAreaTextContentAsArray)

  let sentencesMatrix = [];

  for (let i = 0; i < pCount; i++) {
    let middleArray = []
    for (let i2 = 0; i2 < 3; i2++) {
      let elementToAdd = textAreaTextContentAsArray.shift()
      if (elementToAdd != undefined) {
        middleArray.push(elementToAdd);
      }
    }
    sentencesMatrix.push(middleArray);
  }
  console.log(sentencesMatrix)

  let result = sentencesMatrix
    .map((v, i, arr) => {
      v = `<p>${v.join('')}</p>`
      return v;
    })

  for (let element of result) {
    outputElement.innerHTML += element
  }
  console.log(result);
} 