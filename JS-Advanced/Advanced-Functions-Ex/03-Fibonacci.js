function getFibonator() {
    let previousNum = 0;
    let currentNum = 1;
    function solve() {
        let tmp = currentNum;
        currentNum = previousNum + tmp
        previousNum = tmp;
        return previousNum
    }

    return solve;
}



let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13