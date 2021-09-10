function NumbersEndingIn7() {
    for (let number = 7; number <= 997; number++) {
        if (number % 10 === 7) {
            console.log(number);
        }
    }
}
NumbersEndingIn7()