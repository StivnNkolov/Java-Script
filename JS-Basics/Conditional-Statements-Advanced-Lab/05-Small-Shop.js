function SmallShop(userInput) {
    let product = String(userInput[0]);
    let city = String(userInput[1]);
    let quantity = String(userInput[2]);

    let endPrice = 0;

    if (city === "Sofia") {
        if (product === "coffee") {
            endPrice = quantity * 0.50;
        } else if (product === "water") {
            endPrice = quantity * 0.8;
        } else if (product === "beer") {
            endPrice = quantity * 1.20;
        } else if (product === "sweets") {
            endPrice = quantity * 1.45;
        } else if (product === "peanuts") {
            endPrice = quantity * 1.60
        }
    } else if (city === "Plovdiv") {
        if (product === "coffee") {
            endPrice = quantity * 0.40;
        } else if (product === "water") {
            endPrice = quantity * 0.7;
        } else if (product === "beer") {
            endPrice = quantity * 1.15;
        } else if (product === "sweets") {
            endPrice = quantity * 1.30;
        } else if (product === "peanuts") {
            endPrice = quantity * 1.50;
        }
    } else if (city === "Varna") {
        if (product === "coffee") {
            endPrice = quantity * 0.45;
        } else if (product === "water") {
            endPrice = quantity * 0.7;
        } else if (product === "beer") {
            endPrice = quantity * 1.10;
        } else if (product === "sweets") {
            endPrice = quantity * 1.35;
        } else if (product === "peanuts") {
            endPrice = quantity * 1.55
        }
    }
    console.log(endPrice);
}
SmallShop(["sweets",
"Sofia",
"2.23"]);



