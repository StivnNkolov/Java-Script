function solve(inputFace, inputSuit) {
    let validCardSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    };
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let cardObject = {
        card: null,
        toString() {
            return this.card;
        }
    }
    if (!validFaces.includes(inputFace)) {
        throw new Error('Invalid card face ' + inputFace);
    }

    if (validCardSuits[inputSuit] == undefined) {
        throw new Error('Invalid card suit ' + inputSuit);
    }
    cardObject.card = `${inputFace}${validCardSuits[inputSuit]}`
    return cardObject;
}

console.log(solve('A', 'S').toString());
console.log(solve('10', 'H').toString());
// console.log(solve('1', 'C').toString());
console.log(solve('10', 'K').toString());


// console.log(solve('10', 'H'));
// console.log(solve('1', 'C'));
