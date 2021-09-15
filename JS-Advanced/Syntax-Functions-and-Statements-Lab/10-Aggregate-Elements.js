function aggregateElements(input) {
    let sumElements = 0;
    let inverseValue = 0;

    for (i = 0; i < input.length; i++) {
        sumElements += Number(input[i]);
        inverseValue += 1 / Number(input[i]);
    }
    console.log(sumElements);
    console.log(inverseValue);
    console.log(input.join(""));
}


aggregateElements([1,2,3])
aggregateElements([2, 4, 8, 16])