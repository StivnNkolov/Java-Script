// let workingObject = {
//     name: 'object Kiko',
//     fly() {
//         console.log(`${this.name} is flying`)
//         console.log(this)
//     }
// }
// workingObject.fly();

// console.log('----');

// let outsideFly = workingObject.fly;
// outsideFly();



//  Add the context that we want to function

// function smt() {
//     console.log(`${this.name} is smt`);
// }
// smt();

// let ourContext = {
//     name: 'Kiko'
// }
// console.log('------')
// smt.call(ourContext);

function outer() {
    let smt = 0;
    
    function inner() {
        smt += 1;
        console.log(smt);
    }

    return inner;
}

let calculate = outer();
calculate();
calculate();
calculate();
