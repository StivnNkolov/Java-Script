function toJSON(inputData) {
    let result = [];

    for (let i = 1; i < inputData.length; i++) {
        let tempValue = inputData[i].split(" | ");
        let currTown = tempValue[0].substring(2);
        let currentLatitude = Number(tempValue[1]).toFixed(2);
        let currentLongitude = Number(tempValue[2].substring(0, tempValue[2].length - 2)).toFixed(2);
        let currResult = { Town: currTown, Latitude: Number(currentLatitude), Longitude: Number(currentLongitude) }
        result.push(currResult);
    }
    console.log(JSON.stringify(result));

};


// toJSON(['| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |']
// );

toJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);


