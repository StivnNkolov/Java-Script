(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        let returnArray = this.slice(n);
        return returnArray;
    }

    Array.prototype.take = function (n) {
        let returnArray = this.slice(0, n);
        return returnArray;
    }

    Array.prototype.sum = function () {
        return this.reduce((pv, cv) => {
            return pv += cv;
        }, 0)
    }

    Array.prototype.average = function () {
        let averageSum = this.sum() / this.length;
        return averageSum;
    }
})()

let someArray = [1, 2, 3, 5, 6];
console.log(someArray.average())