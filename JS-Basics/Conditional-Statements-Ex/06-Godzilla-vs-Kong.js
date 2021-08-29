function Godzilla(userInput) {
    let budget = Number(userInput[0]);
    let statsCount = Number(userInput[1]);
    let priceForClothingForOneStats = Number(userInput[2]);

    let decorPrice = budget * 0.1;
    let startingPriceForAllStats = statsCount * priceForClothingForOneStats;

    if (statsCount > 150) {
        startingPriceForAllStats -= startingPriceForAllStats * 0.1;
    }

    let totalPrice = decorPrice + startingPriceForAllStats;

    if (totalPrice > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`);
    }
}
Godzilla(["9587.88",
    "222",
    "55.68"])


