// function cookingByNumbers(...all) {
//     let index = 0;
//     let numberToWorkWith = all[index];
//     index++;


//     for (i = index; i <= all.length - 1; i++) {
//         let currentJob = all[index];
//         index++
//         switch (currentJob) {
//             case "chop":
//                 numberToWorkWith /= 2;
//                 break;
//             case "dice":
//                 numberToWorkWith = Math.sqrt(numberToWorkWith);
//                 break;
//             case "spice":
//                 numberToWorkWith += 1;
//                 break;
//             case "bake":
//                 numberToWorkWith *= 3;
//                 break;
//             case "fillet":
//                 numberToWorkWith -= numberToWorkWith * 0.2;
//         }
//         console.log(numberToWorkWith);
//     }
// }

// cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')


function solve(...elements) {

    let numberToCookWith = Number(elements.shift());

    for (let el of elements) {
        if (el == 'chop') {
            numberToCookWith /= 2;
        }else if (el == 'dice') {
            numberToCookWith = Math.sqrt(numberToCookWith);
        }else if (el == 'spice') {
            numberToCookWith += 1;
        }else if (el == 'bake') {
            numberToCookWith *= 3;
        }else if (el == 'fillet') { 
            numberToCookWith -= numberToCookWith * 0.2;
        }
        console.log(numberToCookWith);
    }

}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
