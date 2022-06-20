class List {
    constructor() {
        this.numbers = [];
        this.size = 0;
    }

    add(number) {
        this.numbers.push(number);
        this.numbers.sort((a, b) => {
            return a - b;
        })
        this.size += 1;
    }

    remove(index) {
        this.validateIndex(index);
        this.numbers.splice(index, 1);
        this.size -= 1;
    }

    get(index) {
        this.validateIndex(index);
        return this.numbers[index];
    }

    validateIndex(index) {
        if (index < 0 || index >= this.numbers.length) {
            throw new Error('Index out of range');
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size)
console.log(list.numbers)