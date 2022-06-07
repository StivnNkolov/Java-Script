function validate() {
    let inputElement = document.querySelector('#email');
    let regex = /[a-z0-9]+\@[a-z0-9]+\.[a-z0-9]+/gm;
    inputElement.addEventListener('change', validation);
    function validation() {
        let inputElementValue = inputElement.value;
        inputElementValue.match(regex)
            ? inputElement.setAttribute('class', '')
            : inputElement.setAttribute('class', 'error')
    }
}