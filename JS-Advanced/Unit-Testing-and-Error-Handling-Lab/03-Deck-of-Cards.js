// function printDeckOfCards(cards) {


//     let deck = [];

//     for (const c of cards) {
//         let face = c.slice(0, -1);
//         let suit = c[c.length - 1];
//         try {
//             // let currentCard = createCard(face, suit);
//             deck.push(createCard(face, suit).card);
//         } catch (err) {
//             console.log(`Invalid card: ${c}`)
//             return
//         }
//     }
//     console.log(deck.join(' '));

//     function createCard(inputFace, inputSuit) {
//         let validCardSuits = {
//             S: '\u2660',
//             H: '\u2665',
//             D: '\u2666',
//             C: '\u2663',
//         };
//         let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

//         let cardObject = {
//             card: null,
//             toString() {
//                 return this.card;
//             }
//         }
//         if (!validFaces.includes(inputFace)) {
//             throw new Error('Invalid card face ' + inputFace);
//         }

//         if (validCardSuits[inputSuit] == undefined) {
//             throw new Error('Invalid card suit ' + inputSuit);
//         }
//         cardObject.card = `${inputFace}${validCardSuits[inputSuit]}`
//         return cardObject;
//     }

// }

function printDeckOfCards(cards) {
    try {
        console.log(cards.map(v => {
            let face = v.slice(0, -1);
            let suit = v[v.length - 1];

            try {
                return createCard(face, suit)
            } catch (err) {
                throw new Error(`Invalid card: ${v}`);
            }
        }).join(' '));
    }catch (err) {
        console.log(err.message)
    }


    function createCard(inputFace, inputSuit) {
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
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);