function addAndRemoveElements(inputCommands) {
    let workingArray = [];

    let number = 1;
    let commandsArrayLen = inputCommands.length;

    for (let i = 0; i < commandsArrayLen; i++) {
        let currCommand = inputCommands[i];

        if (currCommand === "add") {
            workingArray.push(number);
        } else {
            workingArray.pop();
        }
        number += 1;
    }
    if (workingArray.length) {
        console.log(workingArray.join("\n"));
    } else {
        console.log("Empty");
    }
}
addAndRemoveElements(['add',
    'add',
    'add',
    'add']
)

addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
)

addAndRemoveElements(['remove',
    'remove',
    'remove']
)