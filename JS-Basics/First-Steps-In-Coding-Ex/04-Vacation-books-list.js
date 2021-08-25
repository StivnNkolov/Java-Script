function Vacation(userInput) {
    let pagesCount = Number(userInput[0]);
    let pagesForOneHour = Number(userInput[1]);
    let days = Number(userInput[2]);

    let timeForOneBook = pagesCount / pagesForOneHour;
    let hoursNeeded = timeForOneBook / days;

    console.log(hoursNeeded);


}
Vacation(["212","20","2"])
