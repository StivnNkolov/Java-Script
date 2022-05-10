// function factory(library, orders) {
//     let result = [];
//     for (let order of orders) {
//         const currentOrder = Object.assign({}, { name: order.template.name })
//         for (part of order.parts) {
//             let currentPartFunction = library[part];
//             currentOrder[part] = currentPartFunction;
//         }
//         result.push(currentOrder);
//     }
//     return result;
// }

// const library = {
//     print: function () {
//         console.log(`${this.name} is printing a page`);
//     },
//     scan: function () {
//         console.log(`${this.name} is scanning a document`);
//     },
//     play: function (artist, track) {
//         console.log(`${this.name} is playing '${track}' by ${artist}`);
//     },
// };
// const orders = [
//     {
//         template: { name: 'ACME Printer' },
//         parts: ['print']
//     },
//     {
//         template: { name: 'Initech Scanner' },
//         parts: ['scan']
//     },
//     {
//         template: { name: 'ComTron Copier' },
//         parts: ['scan', 'print']
//     },
//     {
//         template: { name: 'BoomBox Stereo' },
//         parts: ['play']
//     }
// ];
// const products = factory(library, orders);
// console.log(products);


// function factory(library, orders) {
//     let result = []
//     for (let order of orders) {
//         // console.log(order);
//         let smnt = Object.assign({}, order['template']);
//         // console.log(smnt)
//         for (let part of order['parts']) {
//             // console.log(part);
//             smnt[part] = library[part];
//         }
//         // console.log(smnt);
//         result.push(smnt);
//     }
//     return result;
// }

function factory(library, orders) {
    return orders.map(mapper)

    function mapper(v) {
        let object = Object.assign({}, v['template']);

        for (let part of v['parts']) {
            object[part] = library[part];
        }

        return object
    }
}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    },
];
const products = factory(library, orders);
console.log(products);

