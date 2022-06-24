(function () {
    String.prototype.ensureStart = function (str) {
        let strValue = this.toString();
        if (!strValue.startsWith(str)) {
            return str + strValue;
        }
        return strValue;
    }

    String.prototype.ensureEnd = function (str) {
        let strValue = this.toString();
        if (!strValue.endsWith(str)) {
            return strValue + str;
        }
        return strValue;
    }

    String.prototype.isEmpty = function () {
        let strValue = this.toString();
        if (strValue.trim().length == 0) {
            return true;
        }
        return false;
    }

    String.prototype.truncate = function (n) {
        let strValue = this.toString();
        if (n < 4) {
            return '.'.repeat(n);
        }
        if (strValue.length <= n) {
            return strValue;
        } if (strValue.length > n) {
            let splittedData = strValue.split(' ');
            if (splittedData.length > 1) {
                let returnString = '';

                for (let i = 0; i < splittedData.length; i++) {
                    let currentWord = splittedData[i];
                    if (returnString.trim().length + 3 + currentWord.length > n) {
                        break;
                    }
                    returnString += `${currentWord} `;
                }
                returnString = returnString.trim() + '...';
                return returnString;
            } else {
                let returnString = strValue.substring(0, n - 3) + '...';
                return returnString;
            }
        }

    }

    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            string = string.split(`{${i}}`).join(params[i]).slice();
        }
        return string;
    }
})()


let str = 'mystring sk';

console.log(str.truncate(11))

