function LeapYears(input) {
    let leapYear = Number(input[0]);
    let year = Number(input[1]);

    for (let startYear = leapYear; startYear <= year; startYear += 4) {
        console.log(startYear);
    }
}
LeapYears(['2000', '2011'])