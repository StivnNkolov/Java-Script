function WorkingHours(userInput) {
    let hour = Number(userInput[0]);
    let d = String(userInput[1]);

    switch (d) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if (hour >= 10 && hour <= 18) {
                console.log("open");
                break;
            }   
        case "Sunday": 
        console.log("closed");
        break;
    }

    // if (d === "Monday" ||
    //     d === "Tuesday" ||
    //     d === "Wednesday" ||
    //     d === "Thursday" ||
    //     d === "Friday" ||
    //     d === "Saturday") {
    //     if (hour >= 10 && hour <= 18) {
    //         console.log("open");
    //     }
    // } else {
    //     console.log("closed");
    // }

    // if (dayOfTheWeek === "Saturday" || dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Thursday" || dayOfTheWeek === "Friday") {
    //     if (hour >= 10 && hour <= 18) {
    //         console.log("open");
    //     }else console.log("closed");
    // }else {
    //     console.log("closed");
    // }

}
WorkingHours(["11",
"Sunday"])


