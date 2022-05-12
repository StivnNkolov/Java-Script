// function rectangle(width, height, color) {
//     let colourFirstUpperCase = color[0].toUpperCase() + color.substring(1);


//     const rect = {
//         width,
//         height,
//         color: colourFirstUpperCase,
//         calcArea() {
//             return width * height
//         }
//     };
//     return rect;
// }

// let rect = rectangle(4, 5, 'red');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());

function rectangle(width, height, color) {
    let capitalizedColor = color[0].toUpperCase() + color.slice(1);

    let returnObject = {
        width,
        height,
        color: capitalizedColor,
        calcArea() {
            return this.width * this.height;
        }
    }

    return returnObject;
}


let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());