function extractText() {
    let allListItems = document.getElementById("items").textContent;
    let textField = document.getElementById("result");
    textField.value = allListItems;
  
}
