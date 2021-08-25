function DepositCalculator(userInput) {
    let amount = Number(userInput[0]);
    let timeForDeposit = Number(userInput[1]);
    let yearInterest = Number(userInput[2]);

    let interestForOneMonth = ((yearInterest / 100) * amount) / 12;
    let endResult = amount + interestForOneMonth * timeForDeposit;
    
    console.log(endResult);



}
DepositCalculator(["2350","6","7"]);

