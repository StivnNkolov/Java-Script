function previousDay(year, month, day) {
    let date = new Date(year, month + 1, day);
    let dateInMiliSec = date.getTime();
    let oneDayInMiliseconds = 86400000;
    let theDayBefore = dateInMiliSec - oneDayInMiliseconds;
    let newDate = new Date(theDayBefore);
    let theDay = newDate.getDate();
    let theMonth = newDate.getMonth() - 1;
    let theYear = newDate.getFullYear();


    console.log(`${theYear}-${theMonth}-${theDay}`);

}
previousDay(2016, 9, 30);
previousDay(2016, 10, 1);

