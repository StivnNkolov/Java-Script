function DivideWithoutReminder(input) {
    let allNumbers = Number(input[0]);
    let p1 = 0
    let p2 = 0
    let p3 = 0


    for (let index = 1; index <= allNumbers; index++) {
        let currNum = Number(input[index]);
        if (currNum % 2 === 0) {
            p1 += 1;
        } if (currNum % 3 === 0) {
            p2 += 1;
        } if (currNum % 4 === 0) {
            p3 += 1;
        }
    }
    let p1InPerc = (p1 / allNumbers) * 100;
    let p2InPerc = (p2 / allNumbers) * 100;
    let p3InPerc = (p3 / allNumbers) * 100;

    console.log(`${p1InPerc.toFixed(2)}%`);
    console.log(`${p2InPerc.toFixed(2)}%`);
    console.log(`${p3InPerc.toFixed(2)}%`);
}  
DivideWithoutReminder(["3",
"3",
"6",
"9"])

