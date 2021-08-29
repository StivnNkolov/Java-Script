function BonusScore(userInput) {
    let workingNumber = Number(userInput[0]);
    let bonus = 0;

    if (workingNumber <= 100) {
        bonus = 5;
    } else if (workingNumber > 1000) {
        bonus = workingNumber * 0.1;
    } else {
        bonus  = workingNumber * 0.2
    }

    if (workingNumber % 2 === 0) {
        bonus += 1;
    } else if (workingNumber % 10 === 5) {
        bonus += 2;
    }

    let endValue = workingNumber + bonus;

    console.log(bonus);
    console.log(endValue);
}
BonusScore(["15875"]);