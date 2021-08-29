function SumSeconds(userInput) {
    let first = Number(userInput[0]);
    let second = Number(userInput[1]);
    let third = Number(userInput[2]);

    let totalTimeInSeconds = first + second + third;
    let minutes = Math.trunc(totalTimeInSeconds / 60);
    let seconds = totalTimeInSeconds % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
SumSeconds(["14", "12", "10"]);


