function EvenPowers (input) {
    let number = Number(input[0]);

    for (let start = 0; start <= number; start += 2) {
        let result = Math.pow(2, start)
        console.log(result);
    }
}
EvenPowers(["7"])