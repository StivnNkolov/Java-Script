function VowelsSum(input) {
    let text = input[0];
    let result = 0;
    let textLength = text.length

    for (let index = 0; index < textLength; index++) {
        let letter = text[index]
        if (letter === "a") {
            result += 1;
        } else if (letter === "e") {
            result += 2;
        } else if (letter === "i") {
            result += 3;
        } else if (letter === "o") {
            result += 4;
        } else if (letter === "u") {
            result += 5;
        }
    }
    console.log(result);
}
VowelsSum(["beer"]);