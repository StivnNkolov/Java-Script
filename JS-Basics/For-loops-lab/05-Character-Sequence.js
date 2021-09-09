function CharacterSequence(input) {
    let text = input[0];
    let textLength = text.length;

    for (let index = 0; index < textLength; index++) {
        console.log(text.charAt(index));
    }
}
CharacterSequence(["KURa"])