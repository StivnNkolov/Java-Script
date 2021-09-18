function pieceOfPie(piesData, startPoint, endPoint) {
    let startPointIndex = piesData.indexOf(startPoint);
    let endPointIndex = piesData.indexOf(endPoint);

    let resultArray = piesData.slice(startPointIndex, endPointIndex + 1);
    return resultArray;
}

console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));

console.log(pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
));


