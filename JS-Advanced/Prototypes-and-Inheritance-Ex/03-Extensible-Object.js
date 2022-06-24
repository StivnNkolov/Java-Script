function extensibleObject() {
    let returnObject = {
        extend,
    }

    function extend(templateInput) {
        for (let [key, value] of Object.entries(templateInput)) {
            if (typeof value == 'function') {
                let prototypeObj = Object.getPrototypeOf(returnObject); 
                prototypeObj[key] = value;
            } else {
                returnObject[key] = value;
            }
        }
    }
    return returnObject;
}
const myObj = extensibleObject();
console.log(myObj);

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);
console.log(myObj);
