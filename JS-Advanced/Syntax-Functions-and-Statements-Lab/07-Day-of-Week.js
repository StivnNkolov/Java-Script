// function dayOfTheWeek (input) {
//     switch (input) {
//         case "Monday":
//             return 1;
//         case "Tuesday":
//             return 2;
//         case "Wednesday":
//             return 3;
//         case "Thursday":
//             return 4;
//         case "Friday":
//             return 5;
//         case "Saturday":
//             return 6;
//         case "Sunday":
//             return 7;
//         default:
//             return "error";

//     }
// }

// console.log(dayOfTheWeek('Monday'));
// console.log(dayOfTheWeek('Friday'));
// console.log(dayOfTheWeek('Invalid'));


function solve(dayInStringFormat) {
    calendar = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7,
    };

    let result = calendar[dayInStringFormat];

    if (result == undefined) {
        return 'error'
    };

    return result;
}

console.log(solve('Monday'));
console.log(solve('Friday'));
console.log(solve('Invalid'));