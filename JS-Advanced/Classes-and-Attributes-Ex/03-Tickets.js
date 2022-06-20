function solve(inputArray, sortingString) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let sortingObject = {
        destination(a, b) {
            return a.destination.localeCompare(b.destination);
        },
        price(a, b) {
            return a.price - b.price;
        },
        status(a, b) {
            return a.status.localeCompare(b.status)
        }
    }

    function mapper(v) {
        let [dest, price, stat] = v.split('|');
        price = Number(price);
        return new Ticket(dest, price, stat);
    }


    let ticketsArray = inputArray
        .map(mapper)
        .sort(sortingObject[sortingString])

    return ticketsArray;
}

// console.log(solve(
//     ['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'destination'));

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'));

