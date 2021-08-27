function FishTank(user_input) {
    let height = Number(user_input[0]);
    let width = Number(user_input[1]);
    let length = Number(user_input[2]);
    let percentForTakenVolume = Number(user_input[3]) / 100;

    let volumeInCubicCm = height * width * length;
    let volumeInCubicDm = volumeInCubicCm / 1000;
    
    let finalResult = volumeInCubicDm - (volumeInCubicDm * percentForTakenVolume);
    console.log(finalResult);

}
FishTank(["85","75","47","17"]);
