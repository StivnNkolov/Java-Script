function MultiplicationTable(input) {
    let num = Number(input[0]);

    for (let n = 1; n <= 10; n++) {
        let result = num * n
        console.log(`${n} * ${num} = ${result}`);
    }
}
MultiplicationTable(["5"])