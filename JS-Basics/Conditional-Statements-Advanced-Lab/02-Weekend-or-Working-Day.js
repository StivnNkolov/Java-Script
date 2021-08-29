function WeekendOrNot (userInput) {
    let userDay = String(userInput[0]);

    switch (userDay) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day");
            break;

        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;

        default:
            console.log("Error");
            break;
    }

}
WeekendOrNot(["April"])