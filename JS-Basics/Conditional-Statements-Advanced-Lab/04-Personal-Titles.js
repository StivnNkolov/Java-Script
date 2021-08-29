function PersonalTitles(userInput) {
    let age = Number(userInput[0]);
    let gender = String(userInput[1]);

    if (gender === "m") {
        if (age < 16) {
            console.log("Master");
        } else {
            console.log("Mr.");
        }
    } else if (gender === "f") {
        if (age < 16) {
            console.log("Miss");
        } else {
            console.log("Ms.");
        }
    }
}
PersonalTitles(["13.5",
"m"]);


