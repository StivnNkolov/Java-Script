function solve() {
  let inputData = document.getElementById("text").value;
  let conventionData = document.getElementById("naming-convention").value;

  function cases(data, convention) {
    let result = '';

    if (convention == "Camel Case") {
      let inputArray = data.toLowerCase().split(" ")
      let firstElement = inputArray.shift();
      result = firstElement + inputArray.map((x) => x[0].toUpperCase() + x.slice(1)).join("");
      return result;

    } else if (convention == "Pascal Case") {
      let result = data.toLowerCase().split(" ").map((x) => x[0].toUpperCase() + x.slice(1)).join("");
      return result;
    } else {
      result = "Error!"
      return result;
    }
  }
  let finalResult = cases(inputData, conventionData)
  let resultOutputField = document.getElementById("result");
  console.log(finalResult);
  resultOutputField.textContent = finalResult;
}