function solve(inputArray) {
    let workingArray = inputArray.shift().split(" ");
    
    for (let element of inputArray) {
        let commandsAndEl = element.split(" ");
        if (commandsAndEl[0] == "Add") {
            value = commandsAndEl[1];
            workingArray.push(value);
        } else if (commandsAndEl[0] == "Remove") {
            value = commandsAndEl[1];
            let deleteIndex = workingArray.indexOf(value);
            if (deleteIndex >= 0) {
                workingArray.splice(deleteIndex, 1);
            }
        }else if (commandsAndEl[0] == "RemoveAt") {
            value = Number(commandsAndEl[1]);
            workingArray.splice(value, 1);
        }else if (commandsAndEl[0] == "Insert") {
            value = commandsAndEl[1];
            index = Number(commandsAndEl[2]);
            workingArray.splice(index, 0, value);
        }
    }
    console.log(workingArray.join(" "));
}

solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)