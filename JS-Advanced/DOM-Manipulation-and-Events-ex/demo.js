// // let a = 1
// // let b = 2
// // let c = '+';
// // console.log(a `${c}` b);

// let checkbox = document.querySelector('#check');
// console.log(checkbox);
// console.log(checkbox.checked);


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

let newM = [];
for (let row = 0; row < matrix.length; row++) {
    let columns = []
    for (let col = 0; col < matrix.length; col++) {
        columns.push(matrix[col][row])

    }
    newM.push(columns);

}

console.log(newM);

let diagonals = matrix.map((v, i) => {
    return v[i]
})

let otherDiagonal = matrix.map((v, i, arr) => {
    return v[arr.length - i - 1]
})

console.log(otherDiagonal)


