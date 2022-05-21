function solve(inputArray) {
    let workingObject = {}

    let commandProcesser = {
        create,
        set,
        print,
    }

    for (const commandData of inputArray) {
        let [command, name, option1, option2] = commandData.split(' ');
        commandProcesser[command](name, option1, option2)
    }

    function create(name, option1, option2) {
        return workingObject[name] = option1 ? Object.create(workingObject[option2]) : {};
    }

    function set(name, option1, option2) {
        return workingObject[name][option1] = option2;
    }

    function print(name) {
        let logArray = [];
        for (const key in workingObject[name]) {
            logArray.push(`${key}:${workingObject[name][key]}`)
        }
        console.log(logArray.join(','))
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);