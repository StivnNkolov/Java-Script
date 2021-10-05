function extract(content) {
    let targetedElement = document.getElementById(content)
    let initialText = targetedElement.textContent;

    let pattern = /(?<=\().*?(?=\))/g;

    let b = initialText.match(pattern);

    return b.join("; ");


    // console.log(initialText);
}