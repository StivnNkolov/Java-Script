function UsdToBgn(userInput) {
    let usd = Number(userInput[0]);
    let oneUsdInLv = 1.79549;

    let result = usd * oneUsdInLv;

    console.log(result);

}
UsdToBgn(["22"]);
