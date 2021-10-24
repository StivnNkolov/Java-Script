function solve(num) {

    let days = ["Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"];

    let desiredDay = days[num - 1];

    if (desiredDay == undefined) {
        console.log("Invalid day!");
    } else {
        console.log(desiredDay);
    }
}

solve(3);
solve(6);
solve(-11);
