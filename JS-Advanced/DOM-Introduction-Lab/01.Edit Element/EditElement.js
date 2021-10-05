function editElement(element, match, replacer) {
    let elementText = element.textContent;
    let newText = elementText.split(match).join(replacer)
    element.textContent = newText;  
};