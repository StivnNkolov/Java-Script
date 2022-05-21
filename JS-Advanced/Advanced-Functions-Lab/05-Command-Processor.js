function solution() {
    let resultString = '';

    return {
        append,
        removeStart,
        removeEnd,
        print,
    }

    function append(input) {
        resultString += input;
    }

    function removeStart(inputNumber) {
        resultString = resultString.substring(inputNumber);
    }

    function removeEnd(inputNumber) {
        resultString = resultString.substring(0, resultString.length - inputNumber);
    }

    function print() {
        console.log(resultString);
    }
}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
