function solve(inputArray) {
    let guestList = [];


    for (let el of inputArray) {
        let data = el.split(" ");
        let name = data.shift();
        if (data.length == 2) {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }
        } else {
            if (guestList.includes(name)) {
                guestList.splice(guestList.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }

        }
    }
    console.log(guestList.join("\n"));

}

solve([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);
solve([
    'Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
]);
