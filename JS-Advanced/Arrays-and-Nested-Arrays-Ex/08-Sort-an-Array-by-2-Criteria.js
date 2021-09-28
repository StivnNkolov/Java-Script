function sortArrayBy2(inputArray) {
    let sortedByLength = inputArray.sort(function (a, b) {
        // a.toLowerCase();
        // b.toLowerCase();

        let res = a.length - b.length;
        // console.log(res);

        if (res === 0) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        } else {
            return res;
        }


    })

    console.log(sortedByLength.join("\n"));
}

sortArrayBy2(['test',
    'Deny',
    'omen',
    'Default']
)

sortArrayBy2(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
)

sortArrayBy2(['alpha',
    'beta',
    'gamma']
)