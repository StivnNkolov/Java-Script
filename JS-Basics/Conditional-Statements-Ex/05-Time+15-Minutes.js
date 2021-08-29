function TimePlus(userInput) {
    let hour = Number(userInput[0]);
    let minutes = Number(userInput[1]);

    let minutesWeNeed = minutes + 15;

    if (minutesWeNeed > 59) {
        minutesWeNeed -= 60
        hour += 1
        if (hour > 23) {
            hour = 0
        }
    }
    if (minutesWeNeed < 10) {
        console.log(`${hour}:0${minutesWeNeed}`);
    }else {
        console.log(`${hour}:${minutesWeNeed }`);
    }
}
TimePlus(["12", "49"]);