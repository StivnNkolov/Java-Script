function solve() {
    let [movieElement,
        hallElement,
        priceElement,
        onScreenBtn] = Array.from(document.querySelector('#container').children);

    onScreenBtn.addEventListener('click', addMovieToScreen);
    let clearButtonElement = document.querySelector('#archive').lastElementChild;

    let moviesObject = {

    }

    function addMovieToScreen(e) {
        e.preventDefault()

        if (movieElement.value.trim() && hallElement.value.trim() && !isNaN(Number(priceElement.value)) && priceElement.value.trim()) {
            movieName = movieElement.value
            moviesObject[movieName] = {
                hallName: hallElement.value,
                price: Number(priceElement.value),
            }

            let moviesULElement = document.querySelector('#movies ul');
            let newLiElement = createDOMElement('li');
            let newSpanElement = createDOMElement('span', movieName);
            let newStrongElement = createDOMElement('strong', `Hall: ${moviesObject[movieName].hallName}`)
            let newDivElement = createDOMElement('div');
            let newPriceStrongElement = createDOMElement('strong', moviesObject[movieName].price.toFixed(2))
            let newInputElement = createDOMElement('input', null, { 'placeholder': 'Tickets Sold' })
            let newButtonElement = createDOMElement('button', 'Archive')
            newButtonElement.addEventListener('click', addMovieToArchive);

            appendElements(newDivElement, [newPriceStrongElement, newInputElement, newButtonElement]);
            appendElements(newLiElement, [newSpanElement, newStrongElement, newDivElement]);
            appendElements(moviesULElement, [newLiElement])
            clearInputFields([movieElement, hallElement, priceElement])
        }
    }

    function addMovieToArchive(e) {
        let buttonParentElement = e.target.parentElement.parentElement;
        let ticketsInputElement = buttonParentElement.querySelector('input');

        if (!isNaN(Number(ticketsInputElement.value)) && ticketsInputElement.value.trim()) {
            let archiveULElement = document.querySelector('#archive ul');
            let movieNameElement = buttonParentElement.querySelector('span');
            let movieName = movieNameElement.textContent;

            let newLiAElement = createDOMElement('li');
            let newSpanArchiveElement = createDOMElement('span', movieName)
            let finalPrice = (Number(moviesObject[movieName].price) * Number(ticketsInputElement.value)).toFixed(2);
            let newStrongAElement = createDOMElement('strong', `Total amount: ${finalPrice}`)
            let newButtonAElement = createDOMElement('button', 'Delete')
            newButtonAElement.addEventListener('click', deleteArchiveElement);

            appendElements(newLiAElement, [newSpanArchiveElement, newStrongAElement, newButtonAElement])
            appendElements(archiveULElement, [newLiAElement])
            removeDOMElements([buttonParentElement])


        }
    }

    function deleteArchiveElement(e) {
        let parentElement = e.target.parentElement;
        parentElement.remove();
    }

    clearButtonElement.addEventListener('click', clearArchive);


    function clearArchive(e) {
        let archiveLiElements = Array.from(document.querySelectorAll('#archive li'));

        removeDOMElements(archiveLiElements);
    }

    function appendElements(parentElement, elementsArray) {
        for (const element of elementsArray) {
            parentElement.appendChild(element);
        }
    }

    function clearInputFields(fieldsArray) {
        for (const field of fieldsArray) {
            field.value = '';
        }
    }

    function createDOMElement(tagName, textValue, atrrsObj) {
        let newElement = document.createElement(tagName);

        if (textValue) {
            newElement.textContent = textValue;
        }

        if (atrrsObj) {
            let keys = Object.keys(atrrsObj);

            for (const key of keys) {
                newElement.setAttribute(key, atrrsObj[key])
            }
        }
        return newElement;
    }

    function removeDOMElements(elementsArray) {
        for (const element of elementsArray) {
            element.remove()
        }
    }
}