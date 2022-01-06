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

function solve() {
  let inputTextValue = document.getElementById('text').value;
  let inputConvention = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');

  let switchObject = {
    'Camel Case': (txt) => {
      let result = txt
        .toLowerCase()
        .split(" ")
        .map((v, i) => {
          v = i === 0 ? v : v[0].toUpperCase() + v.slice(1, v.length);
          return v;
        })
        .join("");
      return result;
    },
    'Pascal Case': (txt) => {
      let result = txt
        .toLowerCase()
        .split(" ")
        .map((v, i) => {
          v = v[0].toUpperCase() + v.slice(1, v.length);
          return v;
        })
        .join("");
      return result;
    }
  }

  let resultForDisplay = switchObject[inputConvention] == undefined ? "Error!" : switchObject[inputConvention](inputTextValue);
  resultElement.textContent = resultForDisplay;
};


function solve() {
  let inputData = document.getElementById("text").value;
  let conventionData = document.getElementById("naming-convention").value;

  function cases(data, convention) {
    let arrayToWorkWith = data.toLowerCase().split(" ");

    let result1 = {
      "Camel Case": () => {
        let finnalText = arrayToWorkWith.map((v, i, arr) => {
          v = i === 0 ? v : v[0].toUpperCase() + v.slice(1, v.length);
          return v;
        })
        return finnalText;
      },
      "Pascal Case": () => {
        let finnalText = arrayToWorkWith.map(v => {
          v = v[0].toUpperCase() + v.slice(1, v.length)
          return v;
        })
        return finnalText;
      }
    }

    let result = result1[convention] == undefined ? "Error!" : result1[convention]().join("");

    return result


  }
  let finalResult = cases(inputData, conventionData)
  let resultOutputField = document.getElementById("result");
  console.log(finalResult);
  resultOutputField.textContent = finalResult;
}
