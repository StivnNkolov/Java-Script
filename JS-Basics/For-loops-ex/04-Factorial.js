function Factoriel(input) {
    let num = Number(input[0]);
    let result = 1;
    for (let number = 1; number <= num; number++) {
        result *= number;
    }
    console.log(result);
}
Factoriel(['8'])