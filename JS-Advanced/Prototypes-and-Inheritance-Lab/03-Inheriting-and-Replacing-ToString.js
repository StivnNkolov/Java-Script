function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let thisKeys = Object.keys(this);
            let middleString = thisKeys
                .map((v, i, arr) => {
                    if (i == 0) {
                        return `(${v}: ${this[v]}`
                    } else if (i == arr.length - 1) {
                        return `${v}: ${this[v]})`
                    }
                    return `${v}: ${this[v]}`
                }).join(', ');
            return `${this.constructor.name}` + ' ' + middleString;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let people = toStringExtension();
let person = new people.Teacher('steven', 's@s.com', 'math');
console.log(person.toString());