// function extract(content) {
//     let targetedElement = document.getElementById(content)
//     let initialText = targetedElement.textContent;

//     let pattern = //g;  // THE BETTER REGEX

//     let b = initialText.match(pattern);

//     return b.join("; ");


//     // console.log(initialText);
// }


// // function extract(content) {
// //     let searchedElement = document.getElementById(content).textContent;
// //     let regex = /\(([^)]+)\)/gm
// //     let matchedElements = searchedElement.match(regex)
// //     .map(v => v.substring(1, v.length -1)).join('; ');

// //     return matchedElements;
// // }

function extract(content) {
    let neededElement = document.getElementById(content);

    let elementTextContent = neededElement.textContent;

    let regex = /\(([^\)]+)\)/gm
    let result = [...elementTextContent.matchAll(regex)]
        .map(v => v[1])
        .join('; ')


    return result;

}