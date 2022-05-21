// // // function smt() {
// // //     // let result = Math.pow(2, 2);
// // //     // console.log(result);

// // //     function power(number){
// // //         console.log(Math.pow(number, 2));
// // //     } 
// // //     return power
// // // }

// // // let p = smt();
// // // p(2)
// // // p(3)

// // let a = 'abcd';
// // console.log(a.slice(a.length - 3));


// let a = {
//     koko: 2,
// }

// let b = a;
// console.log(b);
// b['koko2'] = 3
// console.log('-----')
// console.log(b)
// console.log('-----')
// console.log(a)



// let constructor = function () {
//     this.a = 1
//     this.b = 2
// }

// let firstObject = new constructor;
// console.log(firstObject);

// let someObj = {
// first: 1,
// second: 3,
// }
// 
// let otherObject = Object.create(someObj);
// 
// console.log(someObj);
// // console.log(otherObject);
// console.log(otherObject.first)

// function objectCreator() {
//     let obj = new constructor();
//     function constructor(param) {
//         this[param] = 'sexc'
//     }
//     return constructor;
// }

// let smt = objectCreator();
// let firstObjext = new smt('kiko');
// let secondObjext = firstObjext;
// console.log(secondObjext);


// let firstObjext = {
//     first: 1,
// }

// let shallowCopy = {}

// shallowCopy = Object.assign(firstObjext, {});

// // console.log(firstObjext)
// // console.log(shallowCopy)

// firstObjext.second = 2;
// // console.log(firstObjext);
// // console.log(shallowCopy)
// shallowCopy.third = 3;
// console.log(firstObjext)


// let first = {
//     a: 1
// }

// let second = {
//     ...first
// }
// console.log(second);
// first.b = 2
// console.log(second)
// console.log(first)
// console.log(second)

// const person = {
    // isHuman: false,
    // printIntroduction: function () {
        // console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    // }
// };
// 
// const me = Object.create(person);
// console.log(me)
// console.log(me.isHuman)

// let smt = {
//     a:1,
//     b:2
// }

// let smt2 = Object.create(smt);
// // console.log(smt2);
// // console.log(smt.a)


// smt.c = 2;
// // console.log(smt2.c)
// smt2.d = 3
// let keys = Object.keys(smt2);

let first = {

}
let second = Object.create(first)

first.a = 1
first.b = 2

let keys =  ['a', 'b']

for (let k in second) {
    console.log(k);
}
console.log(second)