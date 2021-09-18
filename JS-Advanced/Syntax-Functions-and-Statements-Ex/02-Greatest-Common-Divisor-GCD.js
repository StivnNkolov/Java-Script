function GCD(firstNum, secondNum) {

    for (i = secondNum; i >= 1; i--) {
        if (firstNum % i === 0 && secondNum % i === 0) {
            console.log(i);
            break;
        }
       
    }
}
GCD(5, 1);