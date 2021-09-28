function createAssemblyLine() {
    const testLibrary = {
        hasClima(inputObject) {
            inputObject.temp = 21;
            inputObject.tempSettings = 21;
            inputObject.adjustTemp = () => {
                if (inputObject.temp < inputObject.tempSettings) {
                    inputObject.temp += 1;
                } else if (inputObject.temp > inputObject.tempSettings) {
                    inputObject.temp -= 1;
                }


            }
        },
        hasAudio(inputObject) {
            inputObject.currentTrack = null;
            inputObject.nowPlaying = () => {
                if (inputObject.currentTrack != null) {
                    console.log(`Now playing '${inputObject.currentTrack.name}' by ${inputObject.currentTrack.artist}`);
                }
            }
        },
        hasParktronic(inputObject) {
            inputObject.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                }else if (0.1 <= distance && distance < 0.25) {
                    console.log("Beep! Beep!");
                }else if (0.25 <= distance && distance < 0.5) {
                    console.log("Beep!");
                }else {
                    console.log("");
                }
            }
        }
    }
    return testLibrary;
}



const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

console.log("----");

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
console.log("----");

console.log("----");

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log("----");

console.log(myCar);