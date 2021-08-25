function FruitMarket(userInput) {

    let strawberriesPrice = Number(userInput[0]);
    let bananasCount = Number(userInput[1]);
    let orangesCount = Number(userInput[2]);
    let berriesCount = Number(userInput[3]);
    let strawberriesCount = Number(userInput[4]);

    let berriesPrice = strawberriesPrice / 2;
    let orangesPrice = berriesPrice - (berriesPrice * 0.4);
    let bananasPrice = berriesPrice - (berriesPrice * 0.8);

    let finalPriceForStraw = strawberriesPrice * strawberriesCount;
    let finalPriceForBananas = bananasCount * bananasPrice;
    let finalPriceForOranges = orangesCount * orangesPrice;
    let finalPriceForBerries = berriesCount * berriesPrice;

    let finalResult = finalPriceForStraw + finalPriceForBananas + finalPriceForOranges + finalPriceForBerries;
    
    console.log(finalResult);

}
FruitMarket(["48","10","3.3","6.5","1.7"]);
