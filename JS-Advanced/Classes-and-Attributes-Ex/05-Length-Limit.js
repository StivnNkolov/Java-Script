class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }
    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        let returnString = this.innerString.length > this.innerLength
            ? `${this.innerString.slice(0, this.innerLength)}...`
            : this.innerString
        return returnString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test