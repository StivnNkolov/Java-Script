// function calories(inputData) {
//     const foodObj = {}

//     for (let i = 0; i < inputData.length; i+= 2) {
//         let currentName = inputData[i];
//         let neededValue = inputData[i + 1];
//         foodObj[currentName] = Number(neededValue);

//     }
//     console.log(foodObj);
// }
// calories(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])

function solve(inputArray) {
    let resultObject = inputArray
        .reduce(reducer, {})

    function reducer(pv, cv, i, arr) {
        if (i % 2 == 0) {
            pv[cv] = Number(arr[i + 1]);
        }
        return pv;
    }

    console.log(resultObject);
}

solve(
    ['Yoghurt', '48', 'Rise', '138', 'Apple', '52']
);

solve(
    ['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']
);