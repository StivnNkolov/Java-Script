function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    Object.defineProperty(this, 'fullName', {
        set: function (value) {
            let [first, last] = value.split(' ');
            if (first != undefined && last != undefined) {
                this.firstName = first;
                this.lastName = last;
            }
        },
        get: function () {
            return `${this.firstName} ${this.lastName}`
        }
    }
    );
}

function constructor(firstName, lastName) {
    let result = {
        firstName: firstName,
        lastName: lastName,
        fullName: '',
    }

    Object.defineProperty(result, 'fullName', {
        get() {
            return `${this.firstName} ${this.lastName}`
        },
        set(value) {
            let [first, last] = value.split(' ');
            if (first != undefined && last != undefined) {
                this.firstName = first;
                this.lastName = last;
            }
        }
    })

    return result;
}

class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = '';
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        let [first, last] = value.split(' ');
        if (first != undefined && last != undefined) {
            this.firstName = first;
            this.lastName = last;
        }
    }
}

// let person = new Person("Peter", "Ivanov");
// console.log(person.fullName); //Peter Ivanov
// person.firstName = "George";
// console.log(person.fullName); //George Ivanov
// person.lastName = "Peterson";
// console.log(person.fullName); //George Peterson
// person.fullName = "Nikola Tesla";
// console.log(person.firstName); //Nikola
// console.log(person.lastName); //Tesla

let person = new Person("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName); 