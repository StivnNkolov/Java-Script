// // let smt = ['John Dan', 'john@john-dan.com', 'JS-CORE']


// // let jr = smt.filter(v => v.includes("John"));
// // console.log(jr);

// // let smt = 'KikoMan';
// // console.log(smt.toLowerCase(``));

// // let a = 3;
// // let b = (3 / 3);
// // console.log(b);


// let restaurants = {
//     PizzaHut: { Peter: 500, George: 300, Mark: 800 },
//     TheLake: { Bob: 1300, Joe: 780, Jane: 660 }
// }


// for (let element of Object.keys(restaurants)) {
//     let sumSalary = Object.values(restaurants[element]).reduce((a, b) => a + b, 0);
//     console.log(sumSalary / Object.values(restaurants[element]).length);
// }

// // let a = [200 , 300, 1000];

// // console.log(a.sort((a, b)=> b- a));
// console.log(a)

// let a = { "Ivan": 200, "Paul": 100, "Steve": 1000 }
// let keys = Object.values(a)
// // console.log(keys)

// let sortedValues = keys.sort((a, b) => b - a)
// // console.log(sortedValues);
// let entries = Object.entries(a);
// // console.log(entries)
// let b = {}
// for (let value of sortedValues) {
//     neededKey = entries.filter((v, i, arr) => {

//         if (v[1] == value) {
//             return v
//         }
//     })[0][0];

//     b[neededKey] = value;
//     // console.log(smt)
//     // console.log(value)
// }
// console.log(b)

// let matrix = [
//     ['Ivan', 200],
//     ['paul', 100],
//     ['jhon', 1000]
// ]

// let sortedMatrix = matrix.sort((a, b) => {
//     return b[1] - a[1];
// })
// console.log(sortedMatrix);

// let arr = [
//     { restaurant: "PizzaHut", workers: {}, avgSalary: 533.33 },
//     { restaurant: "TheLake", workers: {}, avgSalary: 913.33 }
// ]

// let sorted = arr.sort(
//     (a, b) => {
//         return b.avgSalary - a.avgSalary;
//     }
// )
// console.log(sorted);


// let smt = [
//     { restaurant: "PizzaHut", workers: {}, avgSalary: 533.33 },
//     { restaurant: "TheLake", workers: {}, avgSalary: 913.33 }
// ];

// let test = [];

// let a = { restaurant: "PizzaHut", workers: {}, avgSalary: 533.33 };
// let b = { restaurant: "TheLake", workers: {}, avgSalary: 913.33 };

// test['PizzaHut'] = a;
// test['TheLake'] = b;

// console.log(test);
// console.log('-----');

// let c = { restaurant: "PizzaHut", workers: {}, avgSalary: 0 };


// test['PizzaHut'] = c;

// console.log(test)
// console.log('-----');
// console.log(typeof test);
// let g = []
// console.log(typeof g)

// let poppedItem = test.pop();
// console.log(poppedItem);
// console.log('-----')
// console.log(test)

// let test2 = Array.from(test);
// console.log(test2)

let a = { Peter: 500, George: 300, Mark: 800 }
let b = {koko: 200};
let c = a + b;
console.log(c);
