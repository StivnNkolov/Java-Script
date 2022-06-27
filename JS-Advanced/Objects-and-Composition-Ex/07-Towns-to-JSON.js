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

function solve(inputArray) {
    let tableValues = inputArray.map((v, i) => {
        let tmp = v.split(' | ')

        tmp[0] = tmp[0].slice(2)
        tmp[2] = tmp[2].slice(0, tmp[2].length - 2)
        if (i != 0) {
            tmp[1] = Number(tmp[1]).toFixed(2);
            tmp[2] = Number(tmp[2]).toFixed(2);
        }
        return tmp;
    })

    let tableHeaders = tableValues.shift();
    let smt = tableValues.map(v => {
        v = v.reduce((pv, cv, ci, arr) => {
            let currHeader = tableHeaders[ci]
            if (ci != 0) {
                cv = Number(cv);
            }
            pv[currHeader] = cv;
            return pv;
        }, {})

        return v
    })
    console.log(JSON.stringify(smt));
}


// toJSON(['| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |']
// );

toJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);




