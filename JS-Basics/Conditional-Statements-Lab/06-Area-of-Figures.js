function AreaOfFigures(userInput) {

    let typeOFFigure = String(userInput[0]);
    let area = 0
    if (typeOFFigure === "square") {
        let side = Number(userInput[1]);
        area = side * side;
    } else if (typeOFFigure === "rectangle") {
        let side1 = Number(userInput[1]);
        let side2 = Number(userInput[2]);
        area = side1 * side2;
    } else if (typeOFFigure === "circle") {
        let r = Number(userInput[1]);
        area = Math.PI * (r ** 2);
    } else if (typeOFFigure == "triangle") {
        let side1 = Number(userInput[1]);
        let side2 = Number(userInput[2]);
        area = (side1 / 2) * side2;
    }
    console.log(area.toFixed(3));
}
AreaOfFigures(["triangle","4.5","20"])

