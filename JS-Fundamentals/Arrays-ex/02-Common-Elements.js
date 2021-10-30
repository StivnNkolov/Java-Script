function solve(firstArray, secondArray) {
    for (let el of firstArray) {
        if (secondArray.includes(el)) {
            console.log(el);
        }
    }

}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
)
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
)
