// // console.log(5 % 1);

// // let a = "hello";
// // console.log(a[0]);

// // let a = 12344
// // console.log(a[0]);

// // let date = new Date(2016, 9, 1);
// // let newdate = date.setDate(1 -1);
// // let e = new Date(newdate);


// // console.log(e.getMonth());

// // let a = 0.48;
// // console.log(a % 1);
// // console.log(0.80 * 60);


// // function foo(...alll) {
// //     console.log(alll.length);
// // }
// // foo(1, 2, 3 , 5)


// let a = 5;
// console.log(Math.pow(5, 2));



// function checkValidity(x1, x2, y1, y2){
//     let first = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
//     let second = Math.sqrt(Math.pow(0 - x2, 2) + Math.pow(0 - y2, 2));
//     let both = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

//     let firstValidation = 'invalid';
//     let secondValidation = 'invalid';
//     let bothValidation = 'invalid';

//     if(!first.toString().includes('.')){
//         firstValidation = 'valid';
//     }
//     if(!second.toString().includes('.')){
//         secondValidation = 'valid';
//     }
//     if(!both.toString().includes('.')){
//         bothValidation = 'valid';
//     }

//     console.log(`{${x1}, ${y1}} to {0, 0} is ${firstValidation}`);
//     console.log(`{${x2}, ${y2}} to {0, 0} is ${secondValidation}`);
//     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${bothValidation}`);
// }

// checkValidity(3, 0, 0, 4);


// a = 2154 % 2;
// b = 485 % 2;

// console.log(a);
// console.log(b);
// c = 2154 % 485;
// console.log(c)


// a = 5
// console.log(Math.pow(a, 2));


    // let a = 'hello';
    // console.log(a.toUpperCase());

// let smt = '2';
// console.log(smt.padStart(2, 0))

let osmeString = 'Hi, how are you?'
let regex = /[a-zA-Z]+/gm;
console.log(osmeString.matchAll(regex));
let smt = Array.from(osmeString.matchAll(regex)).map(v => {
    return v[0];
});

console.log(smt.map(v => {
    return v.toUpperCase()
}));