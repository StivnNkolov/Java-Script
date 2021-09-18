function fruits(fruit, weigthInGrams, pricePerKilo) {
    let weigthInKilos = weigthInGrams / 1000;
    let result = weigthInKilos * pricePerKilo;
    

    console.log(`I need $${result.toFixed(2)} to buy ${weigthInKilos.toFixed(2)} kilograms ${fruit}.`);
}

fruits('orange', 2500, 1.80);