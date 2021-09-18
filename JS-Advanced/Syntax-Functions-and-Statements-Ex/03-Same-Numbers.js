function sameNumbers(number) {

    let numberAsString = String(number);
    let nAsStringLen = numberAsString.length - 1;
    let charToUse = numberAsString[0];
    let numbersSum = 0;
    let isSame = true;



    for (i = 0; i <= nAsStringLen; i++) {
        numbersSum += Number(numberAsString[i]);
        if (charToUse !== numberAsString[i]) {
            isSame = false;
        }
    }
    if (isSame) {
    console.log("true");
    }else {
        console.log("false");
    }
    console.log(numbersSum);

}

sameNumbers(2222222);
sameNumbers(1234);