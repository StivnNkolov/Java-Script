// a = {
//     peter: "kura",
//     ivan: "dva kura",
//     nikolai: "marin",


// }

// b = a 

// a.krasen = 24
// console.log(a);
// a.show = ()=> {
//     console.log("ade si ve ");
// // } 
// a.show();
// console.log(b);
// let marin = b.peter;
// console.log(marin);
// console.log("---");
// let c = "ivan"
// console.log(b[c]);
// console.log(b.nikolai);

// let {peter, ivan, nikolai} = b;
// console.log(ivan); 
// console.log(peter);
// console.log(nikolai);

// console.log(`a.peter = ${a.peter}`);
// console.log("---");
// console.log(`b.peter = ${a.peter}`);
// console.log("---");
// b.peter = "test";
// console.log(`a.peter = ${a.peter}`);
// console.log("---");
// console.log(`b.peter = ${a.peter}`);

// if ("kura" in Object.keys(a)) {
//     console.log("dobre");
// }else {
//     console.log("ne dobre");
// }


// let b = "<kaca>"
// let pattern = /</g;
// console.log(b.replace(pattern, "Kur"));



// let person = {
//     name: "Kiko",
//     "last name": "Sivkov",
//     age: "28",
//     sex: "male"
// }

// let smt = "name";

// let personName = person["name"];
// console.log(personName);
// console.log(person[smt]);
// let personAge = person.age;
// console.log(personAge);
// let personLlastName = person["last name"];
// console.log(personLlastName);

// person.thirdName = "Marinov";

// console.log(person);

// let smt2 = "I dont Know";

// person["anotherName"] = "Krivodolo";
// console.log(person);

// person[smt2]  = "Stiga tolkova";
// console.log(person);

// delete person.sex; // ne hvurlq greshka !
// console.log(person); 

// let a = [1, 2, 3];
// let [first, second, third] = a; // first=1, second=2, third=3

// let b1 = {
//     a1: 1,
//     b: 2,
//     c:3
// }

// let {a1, c} = b1; // a=1, c=3

// console.log(a1, c);


// // iteration through obj keys
// for (let propName in person) {
//     console.log(`key: ${propName}; value: ${person[propName]}`); 
// }

// let keysNamesArray = Object.keys(person); // returns array with obejct's keys
// console.log(keysNamesArray);


// let objValuesArray = Object.values(person);
// console.log(objValuesArray);

// let KVPTuples = Object.entries(person); // in JS tuple is array of two elements?
// console.log(KVPTuples); 



let a = ["name", "age", "sex"];
let b = Object.assign({}, a);
console.log(b);


let c = [{"name": "stivan", "age":27, "sex": "male"}, {"name": "evelyn", "age":30, "sex":"female"}]
let d = Object.assign({}, c);
console.log(c);