function ToyShop(userInpit) {
    let excursionPrice = Number(userInpit[0]);
    let puzzlesCount = Number(userInpit[1]);
    let dollsCount = Number(userInpit[2]);
    let bearsCount = Number(userInpit[3]);
    let minionsCount = Number(userInpit[4]);
    let trucsCount = Number(userInpit[5]);

    let totalToysCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucsCount;

    let totalToysPrice = puzzlesCount * 2.6 + dollsCount * 3 + bearsCount * 4.10 + minionsCount * 8.20 + trucsCount * 2;

    if (totalToysCount >= 50) {
        totalToysPrice -= totalToysPrice * 0.25;
    }

    let rent = totalToysPrice * 0.1;

    totalToysPrice -= rent;

    if (totalToysPrice >= excursionPrice) {
        console.log(`Yes! ${(totalToysPrice - excursionPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(excursionPrice - totalToysPrice).toFixed(2)} lv needed.`);
    }
}
ToyShop(["320", "8", "2", "5", "5", "1"])