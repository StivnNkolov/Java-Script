function CleverLily(input) {
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let sum = 0;
    let moneyFromBirthdays = 10;

    for (number = 1; number <= age; number++) {
        if (number % 2 === 0) { 
            sum += moneyFromBirthdays - 1;
            moneyFromBirthdays += 10;
        }else {
            sum += toyPrice;
        }
    }
    if (sum >= washerPrice) {
        console.log(`Yes! ${(sum - washerPrice).toFixed(2)}`);
    }else {
        console.log(`No! ${(washerPrice - sum).toFixed(2)}`);
    }
}
CleverLily(["21", "1570.98", "3"]);