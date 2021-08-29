function WorkingHours(userInput) {
    let hour = Number(userInput[0]);
    let dayOfTheWeek = String(userInput[1]);

    if (dayOfTheWeek === "Saturday" || dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Thursday" || dayOfTheWeek === "Friday") {
        if (hour >= 10 && hour <= 18) {
            console.log("open");
        }else console.log("closed");
    }else {
        console.log("closed");
    }

}
WorkingHours(["11",
"Monday"])


