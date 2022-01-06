function solve(inputArray) {

    let initialObject = inputArray
        .map(mapper)
        .reduce(reducer, {});

    console.log();





    let a = createResult(initialObject).join('\n');
    console.log(a);

    // let 

    // let formattedResult = 

    // for (let smt in initialObject) {
    //     let kiki = initialObject[smt];
    //     let entries = Object.keys(kiki);
    //     let sortedKIKI = entries.sort((a, b) => {return a - b});
    //     let value = sortedKIKI[0];
    //     console.log(`${smt} -> ${value} (${initialObject[smt][value]})`);
    // }

    function createResult(object) {
        let returnValue = Object.keys(object).map((v, i, a) => {
            let innerObject = object[v];
            let innerObjectEntries = Object.keys(innerObject);
            let kindaSortedInnerObj = innerObjectEntries.sort((a, b) => { a - b });
            let valueForDisplay = kindaSortedInnerObj[0];

            v = `${v} -> ${valueForDisplay} (${object[v][valueForDisplay]})`;
            return v;
        })
        return returnValue;
    };



    function mapper(v, i, arr) {
        v = v.split(" | ");

        ;
        return v;
    }

    function reducer(pv, cv, ci, arr) {
        let [cityName, pName, pPrice] = cv;
        pPrice = Number(pPrice)

        if (pv[pName] === undefined) {
            pv[pName] = {};
        } if (pv[pName][pPrice] == undefined) {
            pv[pName][pPrice] = cityName;
        }
        return pv;
    }
};

// solve(['Sofia City | Audi | 100000',
//     'Sofia City | BMW | 100000',
//     'Sofia City | Mitsubishi | 10000',
//     'Sofia City | Mercedes | 10000',
//     'Sofia City | NoOffenseToCarLovers | 0',
//     'Mexico City | Audi | 1000',
//     'Mexico City | BMW | 99999',
//     'Mexico City | Mitsubishi | 10000',
//     'New York City | Mitsubishi | 1000',
//     'Washington City | Mercedes | 1000'],
//     )

solve([
    'Sample Town | Sample Product | 1000',
    'New York | Orange | 1000',
    'Sample Town | Sample Product | 900',
    'Sample Town | Sample Product | 1000']);

