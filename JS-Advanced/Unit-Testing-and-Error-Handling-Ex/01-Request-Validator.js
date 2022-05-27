function solve(inputObject) {
    let validationObject = {
        method: verifyMethod,
        uri: verifyUri,
        version: verifyVersion,
        message: verifyMessage,
    }

    for (let key in validationObject) {
        let capitalizedKey = key[0].toUpperCase() + key.slice(1);
        if (key == 'uri') {
            capitalizedKey = key.toUpperCase()
        }

        if (inputObject[key] == undefined || validationObject[key](inputObject[key]) == undefined) {
            throw new Error(`Invalid request header: Invalid ${capitalizedKey}`)
        }
    }

    return inputObject;

    function verifyMethod(value) {
        let possibleMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];

        if (possibleMethods.includes(value)) {
            return 'ok';
        }
    }

    function verifyUri(value) {
        let regex = /^[a-z0-9.]+$/gm;

        if (value.match(regex) || value == '*') {
            return 'ok';
        }
    }

    function verifyVersion(value) {
        let possibleVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

        if (possibleVersions.includes(value)) {
            return 'ok';
        }
    }

    function verifyMessage(value) {
        let regex = /^[^\<\>\\\&\'\"]+$/gm
        if (value.match(regex) || value == '') {
            return 'ok';
        }
    }

}


// console.log(solve(
//     {
//         method: 'GET',
//         uri: 'svn.public.catalog',
//         version: 'HTTP/1.1',
//         message: ''
//     }
// ))

// console.log(solve(
//     {
//         method: 'OPTIONS',
//         uri: 'git.master',
//         version: 'HTTP/1.1',
//         message: '-recursive'
//     }
// ))

console.log(solve(
    {
        method: 'POST',
        uri: 'home.bash',
        message: 'rm -rf /*'
    }
))