function worker(inputObj) {
    let workerDiziness = inputObj.dizziness;
    
    if (workerDiziness) {
        let waterAmount = (inputObj.weight * 0.1) * inputObj.experience;
        inputObj.levelOfHydrated += waterAmount;
        inputObj.dizziness = false;
    }

    return inputObj
}

console.log( worker({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  
  
  ))