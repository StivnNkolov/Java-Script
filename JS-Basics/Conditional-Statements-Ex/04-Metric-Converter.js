function MetricConverter(userInput) {
    let number = Number(userInput[0]);
    let inputMetric = String(userInput[1]);
    let outputMetric = String(userInput[2]);

    let desiredValue = 0

    if (inputMetric === "mm") {
        if (outputMetric === "m") {
            desiredValue = number / 1000;
        }else if (outputMetric === "cm") {
            desiredValue = number / 10;
        }
    }else if (inputMetric === "cm") {
        if (outputMetric === "m") {
            desiredValue = number / 100;
        }else if (outputMetric === "mm") {
            desiredValue = number * 10
        }
    }else if (inputMetric == "m") {
        if (outputMetric === "cm") {
            desiredValue = number * 100;
        }else if (outputMetric === "mm") {
            desiredValue = number * 1000;
        }
    }
    console.log(desiredValue.toFixed(3));
}
MetricConverter(["45","cm","mm"])