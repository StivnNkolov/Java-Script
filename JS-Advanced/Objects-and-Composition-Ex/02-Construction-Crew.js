// function worker(inputObj) {
//     let workerDiziness = inputObj.dizziness;

//     if (workerDiziness) {
//         let waterAmount = (inputObj.weight * 0.1) * inputObj.experience;
//         inputObj.levelOfHydrated += waterAmount;
//         inputObj.dizziness = false;
//     }

//     return inputObj
// }

// console.log( worker({ weight: 95,
//     experience: 3,
//     levelOfHydrated: 0,
//     dizziness: false }


//   ))

function solve(inputObject) {
    if (inputObject.dizziness) {
        let requiredAmount = 0.1 * inputObject.weight * inputObject.experience;
        inputObject.levelOfHydrated += requiredAmount;
        inputObject.dizziness = false;
    }
    return inputObject;
}

// console.log(solve(
//     {
//         weight: 80,
//         experience: 1,
//         levelOfHydrated: 0,
//         dizziness: true
//     }
// ));

// console.log(solve(
//     {
//         weight: 120,
//         experience: 20,
//         levelOfHydrated: 200,
//         dizziness: true
//     }
// ));

console.log(solve(
    {
        weight: 95,
        experience: 3,
        levelOfHydrated: 0,
        dizziness: false
    }
));