function SwimmingRecord(userInput) {
    let currentRecord = Number(userInput[0]);
    let distanceInMeters = Number(userInput[1]);
    let timeForOneMeter = Number(userInput[2]);

    let slowing = 0;

    if (distanceInMeters >= 15) {
        slowing = Math.trunc(distanceInMeters / 15)
    }

    let time = (distanceInMeters * timeForOneMeter) + (slowing * 12.5);

    if (time < currentRecord) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(time - currentRecord).toFixed(2)} seconds slower.`);
    }
}
SwimmingRecord(["55555.67",
"3017",
"5.03"]);

