function NumberInRange(userInput) {
    let number = Number(userInput[0]);

    if (number >= -100 && number <= 100 && number !== 0) {
        console.log("Yes");
    }else {
        console.log("No");
    }
}
NumberInRange(["25"])