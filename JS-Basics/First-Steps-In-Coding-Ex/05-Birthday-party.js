function BirthdayParty(userInput) {
    let rent = Number(userInput[0]);

    let cakePrice = rent * 0.2;
    let drinksPrice = cakePrice - (cakePrice * 0.45);
    let animator = rent / 3;

    let finalResult = cakePrice + rent + drinksPrice + animator;

    console.log(finalResult);

}
BirthdayParty(["3720"])