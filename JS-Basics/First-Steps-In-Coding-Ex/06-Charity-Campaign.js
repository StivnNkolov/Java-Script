function Charity(userInput) {
    let daysForCampaign = Number(userInput[0]);
    let cooksCount = Number(userInput[1]);
    let cakesCount = Number(userInput[2]);
    let pastriesCount = Number(userInput[3]);
    let pancakesCount = Number(userInput[4]);

    let cakePrice = 45;
    let pastriePrice = 5.80;
    let pancakePrice = 3.20;

    let moneyForOneCookFromCakes = cakesCount * cakePrice;
    let moneyForOneCookFromPastries = pastriesCount * pastriePrice;
    let moneyForOneCookFromPancake = pancakesCount * pancakePrice;

    let totalMoneyForOneCook = moneyForOneCookFromCakes + moneyForOneCookFromPastries + moneyForOneCookFromPancake;

    let totalMoneyForAllCooks = totalMoneyForOneCook * cooksCount * daysForCampaign;
    let finalResult = totalMoneyForAllCooks - totalMoneyForAllCooks / 8;
    console.log(finalResult);

}
Charity(["131","5","9","33","46"])

