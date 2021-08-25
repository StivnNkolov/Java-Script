function PetShop(input_data) {
    let numberOfDogs = Number(input_data[0]);
    let numberOfOtherAnimals = Number(input_data[1]);

    let foodForDogsPrice = 2.5;
    let foodForOtherAnimalsPrice = 4;

    let endPrice = (numberOfDogs * foodForDogsPrice) + (numberOfOtherAnimals * foodForOtherAnimalsPrice);

    let outputResult = `${endPrice} lv.`;

    console.log(outputResult);
}
PetShop(["13", "9"]);