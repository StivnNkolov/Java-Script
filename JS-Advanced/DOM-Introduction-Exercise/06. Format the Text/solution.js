function solve() {
  let textAreaElement = document.getElementById("input");
  let textAreaValue = textAreaElement.value;
  let outputElement = document.getElementById("output");


  let textArray = textAreaValue.split(".").filter((x) => x !== "").map((x) => x + ".");


  let numberOfP = Math.ceil(textArray.length / 3);

  for (let i = 0; i < numberOfP; i++) {
    outputElement.innerHTML += `<p>${textArray.splice(0, 3).join("")}</p>`
  }

}