function add(number) {
    let internalValue = 0;

    function calculate(num) {
        internalValue += num;
        return calculate;
    }
    calculate.toString = () => {return internalValue}
    return calculate(number);
}

console.log(add(1)(6)(-3).toString())