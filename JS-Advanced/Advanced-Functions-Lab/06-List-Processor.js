function solve(commandsArray) {

    // let resultArray = [];

    let commandsObject = {
        array: [],
        add,
        remove,
        print,
    }

    for (const commandData of commandsArray) {
        let [command, value] = commandData.split(' ')
        commandsObject[command](value);

    }

    function add(value) {
        this.array.push(value)

    }
    function remove(value) {
        this.array = this.array.filter((v) => {
            if (v != value) {
                return v;
            }
        })

    }

    function print() {
        console.log(this.array.join(','));
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
// solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);