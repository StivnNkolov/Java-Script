// function editElement(element, match, replacer) {
//     let elementText = element.textContent;
//     let newText = elementText.split(match).join(replacer)
//     element.textContent = newText;  
// };


function editElement(htmlReferenceElement, match, replacer) {
    let elementInitialText = htmlReferenceElement.textContent;
    let regex = new RegExp(`${match}`, 'gm')
    let editetText = elementInitialText.replace(regex, replacer);
    htmlReferenceElement.textContent = editetText;
};