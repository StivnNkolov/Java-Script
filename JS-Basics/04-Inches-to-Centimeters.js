function InchesToCentimeters(user_input){

    let inch = Number(user_input[0]);
    let inchInCm = Number(2.54);

    let result = inch * inchInCm

    console.log(result);

}
InchesToCentimeters(['5']);