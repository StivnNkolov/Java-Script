function EvenOrOdd(userInput) {

    let number = Number(userInput[0]);

    if (number % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
EvenOrOdd(["3"])