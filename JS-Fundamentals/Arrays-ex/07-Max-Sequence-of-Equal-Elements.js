function solve(inputArray) {
    const workingArrayLength = inputArray.length;

    let longestSeq = [];

    for (let i = 0; i < workingArrayLength; i++) {
        let currentElement = inputArray[i];
        let middleArray = [currentElement];


        for (let i2 = i + 1; i2 < workingArrayLength; i2++) {

            let middleElement = inputArray[i2];

            if (currentElement != middleElement) {
                break;
            }
            middleArray.push(middleElement);
        }

        if (middleArray.length > longestSeq.length) {
            longestSeq = middleArray;
        }
    }
    console.log(longestSeq.join(" "));



}


solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);

