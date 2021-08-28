function PasswrodGuess(userInput) {
    let userPassword = String(userInput[0]);
    let desiredPassword = "s3cr3t!P@ssw0rd";

    if (userPassword === desiredPassword) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
PasswrodGuess(["s3cr3t!P@ssw0rd"])