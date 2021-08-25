function RadiansToDegrees(userInput) {
    let radians = Number(userInput[0]);
    let piValue = Math.PI;

    let endResult = (radians * 180 / piValue).toFixed(0);

    console.log(endResult);
    
}
RadiansToDegrees(["3.1416"]);