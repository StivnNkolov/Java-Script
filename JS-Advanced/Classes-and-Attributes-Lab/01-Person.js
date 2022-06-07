class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        // return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        console.log(`${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`);
    }


}

let p1 = new Person('Mimo', 'Nikolov', 23, 'a');
p1.toString();

let p2 = new Person('Ivo');
p2.toString();

