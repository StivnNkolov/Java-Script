function Histogram(input) {
    let number = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (let index = 1; index <= (number); index++) {
        let currNumber = Number(input[index]);
        if (currNumber < 200) {
            p1 += 1;
        } else if (currNumber >= 200 && currNumber <= 399) {
            p2 += 1;
        } else if (currNumber >= 400 && currNumber <= 599) {
            p3 += 1;
        } else if (currNumber >= 600 && currNumber <= 799) {
            p4 += 1;
        } else if (currNumber >= 800) {
            p5 += 1;
        }
    }
    let p1InPercent = (p1 / number) * 100;
    let p2InPercent = (p2 / number) * 100;
    let p3InPercent = (p3 / number) * 100;
    let p4InPercent = (p4 / number) * 100;
    let p5InPercent = (p5 / number) * 100;

    console.log(`${p1InPercent.toFixed(2)}%`);
    console.log(`${p2InPercent.toFixed(2)}%`);
    console.log(`${p3InPercent.toFixed(2)}%`);
    console.log(`${p4InPercent.toFixed(2)}%`);
    console.log(`${p5InPercent.toFixed(2)}%`);

}
Histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])

