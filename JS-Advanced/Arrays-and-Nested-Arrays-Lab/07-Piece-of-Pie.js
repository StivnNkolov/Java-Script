// function pieceOfPie(piesData, startPoint, endPoint) {
//     let startPointIndex = piesData.indexOf(startPoint);
//     let endPointIndex = piesData.indexOf(endPoint);

//     let resultArray = piesData.slice(startPointIndex, endPointIndex + 1);
//     return resultArray;
// }

// console.log(pieceOfPie(['Pumpkin Pie',
//     'Key Lime Pie',
//     'Cherry Pie',
//     'Lemon Meringue Pie',
//     'Sugar Cream Pie'],
//     'Key Lime Pie',
//     'Lemon Meringue Pie'
// ));

// console.log(pieceOfPie(['Apple Crisp',
//     'Mississippi Mud Pie',
//     'Pot Pie',
//     'Steak and Cheese Pie',
//     'Butter Chicken Pie',
//     'Smoked Fish Pie'],
//     'Pot Pie',
//     'Smoked Fish Pie'
// ));


function solve(inputArray, startElement, endElement) {
    let startIndex = inputArray.indexOf(startElement);
    let endIndex = inputArray.indexOf(endElement);
    
    let result = inputArray.slice(startIndex, endIndex + 1);
    return result;

}

console.log(solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));

console.log(solve(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'));


