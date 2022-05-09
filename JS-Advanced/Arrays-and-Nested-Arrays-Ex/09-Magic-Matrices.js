// function magicMatrices(inputMatrix) {

//     function reducer(a, b) {
//         return a + b;
//     }


//     let transposedMatrix = inputMatrix[0].map((_, colIndex) => inputMatrix.map(row => row[colIndex]));
//     let baseValue = inputMatrix[0].reduce(reducer);
//     let isHappy = true;

//     for (let i = function magicMatrices(inputMatrix) {

//     function reducer(a, b) {
//         return a + b;
//     }


//     let transposedMatrix = inputMatrix[0].map((_, colIndex) => inputMatrix.map(row => row[colIndex]));
//     let baseValue = inputMatrix[0].reduce(reducer);
//     let isHappy = true;

//     for (let i = 0; i < inputMatrix.length; i++) {
//         let currentValue = inputMatrix[i].reduce(reducer);
//         let currentValue1 = transposedMatrix[i].reduce(reducer);

//         if (currentValue !== baseValue || currentValue1 !== baseValue) {
//             isHappy = false;
//             break;
//         }

//     }

//     if (isHappy) {
//         console.log('true');
//     } else {
//         console.log('false');
//     }


// }

// magicMatrices([[4, 5, 6],
// [6, 5, 4],
// [5, 5, 5]]
// )

// magicMatrices([[1, 0, 0],
// [0, 0, 1],
// [0, 1, 0]]
// )

// magicMatrices([[11, 32, 45],
// [21, 0, 1],
// [21, 1, 1]]
// )
//     }

//     if (isHappy) {
//         console.log('true');
//     } else {
//         console.log('false');
//     }


// }

// magicMatrices([[4, 5, 6],
// [6, 5, 4],
// [5, 5, 5]]
// )

// magicMatrices([[1, 0, 0],
// [0, 0, 1],
// [0, 1, 0]]
// )

// magicMatrices([[11, 32, 45],
// [21, 0, 1],
// [21, 1, 1]]
// )

function solve(inputMatrix) {

    let smt = inputMatrix
        .reduce(
            (pv, cv, ci, a) => {
                let value = cv.reduce((pv, cv, i, arr) => { return pv + cv }, 0)
                let secondValue = cv.reduce((pv, cv, i2, arr) => {
                    if (i2 >= a.length) {
                        return pv + Number.MIN_SAFE_INTEGER;
                    }
                    return pv + a[i2][ci];
                }, 0);
                pv.push(secondValue);
                pv.push(value);
                return pv;
            }

            , []).every((v, i, a) => v == a[0]);

    console.log(smt);
}

// solve([
//     [4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5]
// ]);

// solve([
//     [11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]
// ]);

solve([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],

]);

// solve([[1, 0, 0],
// [0, 0, 1],
// [0, 1, 0]])

