function calculator() {
    return calculatorObject = {
        init,
        add,
        subtract,
        num1Element: null,
        num2Element: null,
        result: null,

    }

    function init(selector1, selector2, resultSelector) {
        calculatorObject.num1Element = document.querySelector(selector1);
        calculatorObject.num2Element = document.querySelector(selector2);
        calculatorObject.result = document.querySelector(resultSelector);
    }

    function add() {
        let resultSum = Number(this.num1Element.value) + Number(this.num2Element.value);
        this.result.value = resultSum;
        this.num1Element.value = '';
        this.num2Element.value = '';
    }

    function subtract() {
        let resultSub = Number(this.num1Element.value) - Number(this.num2Element.value);
        this.result.value = resultSub;
        this.num1Element.value = '';
        this.num2Element.value = '';
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




