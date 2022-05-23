function solve(...inputValues) {
    let summary = inputValues
        .reduce(createSummaryObject, {})
    let sortedSummary = Object
        .keys(summary)
        .sort(sortObjectKeys)
        .reduce(createSortedSummaryObject, {})
    for (const value of inputValues) {
        let typeOfValue = typeof value;
        console.log(`${typeOfValue}: ${value}`);
    }

    for (const key in sortedSummary) {
        console.log(`${key} = ${sortedSummary[key]}`)
    }
    function createSummaryObject(returnObj, currentInputValue) {
        let currentType = typeof currentInputValue;
        returnObj[currentType] = returnObj[currentType] == undefined ? returnObj[currentType] = 1 : returnObj[currentType] += 1;
        return returnObj;
    }
    function sortObjectKeys(a, b) {
        return summary[b] - summary[a];
    }
    function createSortedSummaryObject(returnObj, currentObjectKey) {
        returnObj[currentObjectKey] = summary[currentObjectKey];
        return returnObj;
    }
}

solve('cat', 'mimo', 42, 45, function () { console.log('Hello world!'); });