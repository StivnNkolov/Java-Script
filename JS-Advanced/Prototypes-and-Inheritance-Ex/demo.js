// // let someArray = [1, 2, 3, 4, 5];

// // let otherArray = someArray.slice(3);
// // console.log(otherArray);


// let someString = 'kokojumbo';

// let substring = 'h';

// console.log(someString.startsWith(substring));


// let someString = ' kokojumbo '
// let smt = 'start' + someString + 'end'


// // for( let i = 0; i <someString.length; i++) {
// //     console.log(someString[i])
// // }

// console.log(smt)

// let someString = 'kooko {1} odiqoid {0}'.split('{1}').join('replacement');
// console.log(someString);

// let smt = 'kokokoko'.split(' ');
// console.log(smt.length)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let p = new Person('steven', 23);
console.log(p)

console.log(p instanceof Person)