function solve() {
    let [movieElement,
        hallElement,
        priceElement,
        onScreenBtn] = Array.from(document.querySelector('#container').children);
    // console.log(document.querySelector('#container').childNodes)

    onScreenBtn.addEventListener('click', addMovieToScreen);
    let clearButtonElement = document.querySelector('#archive').lastElementChild;

    function addMovieToScreen(e) {
        e.preventDefault()

        if (movieElement.value.trim() && hallElement.value.trim() && !isNaN(Number(priceElement.value)) && priceElement.value.trim()) {
            let moviesULElement = document.querySelector('#movies ul');

            let newLiElement = document.createElement('li');

            let newSpanElement = document.createElement('span');
            newSpanElement.textContent = movieElement.value;

            let newStrongElement = document.createElement('strong');
            newStrongElement.textContent = `Hall: ${hallElement.value}`

            let newDivElement = document.createElement('div');
            let newPriceStrongElement = document.createElement('strong');
            newPriceStrongElement.textContent = Number(priceElement.value).toFixed(2);

            let newInputElement = document.createElement('input');
            newInputElement.setAttribute('placeholder', 'Tickets Sold');

            let newButtonElement = document.createElement('button');
            newButtonElement.textContent = 'Archive';
            newButtonElement.addEventListener('click', addMovieToArchive);

            newDivElement.appendChild(newPriceStrongElement);
            newDivElement.appendChild(newInputElement);
            newDivElement.appendChild(newButtonElement);

            newLiElement.appendChild(newSpanElement);
            newLiElement.appendChild(newStrongElement);
            newLiElement.appendChild(newDivElement);

            moviesULElement.appendChild(newLiElement);

            movieElement.value = '';
            hallElement.value = '';
            priceElement.value = '';


        }
    }

    function addMovieToArchive(e) {
        let buttonParentElement = e.target.parentElement.parentElement;
        let ticketsInputElement = buttonParentElement.querySelector('input');

        if (!isNaN(Number(ticketsInputElement.value)) && ticketsInputElement.value.trim()) {
            let archiveULElement = document.querySelector('#archive ul');
            let moviePriceElement = buttonParentElement.querySelector('div strong');
            let movieNameElement = buttonParentElement.querySelector('span');

            let newLiAElement = document.createElement('li');

            let newSpanArchiveElement = document.createElement('span');
            newSpanArchiveElement.textContent = movieNameElement.textContent;

            let newStrongAElement = document.createElement('strong');
            let finalPrice = Number(moviePriceElement.textContent) * Number(ticketsInputElement.value)
            newStrongAElement.textContent = `Total amount: ${finalPrice.toFixed(2)}`

            let newButtonAElement = document.createElement('button');
            newButtonAElement.textContent = 'Delete';
            newButtonAElement.addEventListener('click', deleteArchiveElement);

            newLiAElement.appendChild(newSpanArchiveElement);
            newLiAElement.appendChild(newStrongAElement);
            newLiAElement.appendChild(newButtonAElement);

            archiveULElement.appendChild(newLiAElement);
            buttonParentElement.remove();


        }
    }

    function deleteArchiveElement(e) {
        let parentElement = e.target.parentElement;
        parentElement.remove();
    }

    clearButtonElement.addEventListener('click', clearArchive);


    function clearArchive(e) {
        let archiveLiElements = Array.from(document.querySelectorAll('#archive li'));

        for (const li of archiveLiElements) {
            li.remove();
        }
    }
}