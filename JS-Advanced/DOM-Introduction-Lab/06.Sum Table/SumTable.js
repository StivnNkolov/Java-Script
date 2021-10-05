function sumTable() {
    let secondElements = document.querySelectorAll("td:nth-child(2)");
    let asArray = Array.from(secondElements);
    let sumEl = asArray.pop();
    
    let result = 0
    
    for (let el of asArray) {
        result += Number(el.textContent);
    }
    
    sumEl.textContent = result;
}