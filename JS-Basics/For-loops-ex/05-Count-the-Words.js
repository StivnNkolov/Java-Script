function CountTheWords(input) {
    let text = input[0];

    let wordsCount = 0;
    let textLength = text.length;


    for (let index = 0; index < textLength; index++) {
        let charToAscii = text.charCodeAt(index);
        if (charToAscii === 32) {
            wordsCount += 1;
        }
    }
    if ((wordsCount + 1) > 10) {
        console.log(`The message is too long to be send! Has ${wordsCount + 1} words.`);
    } else {
        console.log(`The message was sent successfully!`);
    }
}
CountTheWords(["This message has ten words and you can send it!"]);