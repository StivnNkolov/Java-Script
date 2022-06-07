function validate() {
    let companyInputElement = document.querySelector('#company');
    let hiddenCompanyNumberElement = document.querySelector('#companyInfo');
    let submitButtonElement = document.querySelector('#submit');
    let validElement = document.querySelector('#valid');

    companyInputElement.addEventListener('change', changeDisplayHandler);
    submitButtonElement.addEventListener('click', verificationHandler);


    let workingObject = {
        fields: {
            username: {
                element: document.querySelector('#username'),
                validate: validateUsername,
            },
            pass: {
                password1: {
                    element: document.querySelector('#password'),
                },
                password2: {
                    element: document.querySelector('#confirm-password')
                },
                validate: validatePassword,
            },
            email: {
                element: document.querySelector('#email'),
                validate: validateEmail,
            }
        },
    }

    function changeDisplayHandler() {
        if (companyInputElement.checked) {
            workingObject.fields.companyNumber = {
                element: document.querySelector('#companyNumber'),
                validate: validateCompnayNumber,
            }
            hiddenCompanyNumberElement.setAttribute('style', 'display: block');
        } else {
            delete workingObject.fields.companyNumber;
            hiddenCompanyNumberElement.setAttribute('style', 'display: none');
        }
    }

    function verificationHandler(e) {
        e.preventDefault();
        let workingObjectKeys = Object.keys(workingObject.fields);
        let counter = 0;
        for (let key of workingObjectKeys) {
            let isValid = workingObject.fields[key].validate(workingObject.fields[key]);
            if (isValid) {
                counter += 1;
            }
        }

        counter == workingObjectKeys.length
            ? validElement.setAttribute('style', 'display: block')
            : validElement.setAttribute('style', 'display: none');
    }

    function validateUsername(Htmlelement) {
        const regexPattern = /^[a-zA-Z0-9]{3,20}$/g;
        if (Htmlelement.element.value.match(regexPattern)) {
            setBorder([Htmlelement.element], true);
            return true;
        }
        setBorder([Htmlelement.element], false);
        return false
    }

    function validatePassword(passwordsObject) {
        const regexPattern = /^\w{5,15}$/g;

        if (passwordsObject.password1.element.value.match(regexPattern)) {
            if (passwordsObject.password1.element.value === passwordsObject.password2.element.value) {
                setBorder([passwordsObject.password1.element, passwordsObject.password2.element], true);
                return true
            }
        }
        setBorder([passwordsObject.password1.element, passwordsObject.password2.element], false);
        return false;
    }

    function validateEmail(Htmlelement) {
        const regexPattern = /^.*@.*\..*$/g;
        if (Htmlelement.element.value.match(regexPattern)) {
            setBorder([Htmlelement.element], true);
            return true;
        }
        setBorder([Htmlelement.element], false);
        return false;
    }

    function validateCompnayNumber(Htmlelement) {
        if (Htmlelement.element.value.trim() !== '' && !isNaN(Number(Htmlelement.element.value))) {
            let numberValue = Number(Htmlelement.element.value);
            if (numberValue >= 1000 && numberValue <= 9999) {
                setBorder([Htmlelement.element], true);
                return true;
            }
        }
        setBorder([Htmlelement.element], false);
        return false;
    }

    function setBorder(elementsArray, valid) {
        for (let element of elementsArray) {
            valid ? element.setAttribute('style', 'border: none;') : element.setAttribute('style', 'border-color: red;');
        }
    }
}
