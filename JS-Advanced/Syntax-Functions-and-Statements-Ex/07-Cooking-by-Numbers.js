function cookingByNumbers(...all) {
    let index = 0;
    let numberToWorkWith = all[index];
    index++;


    for (i = index; i <= all.length - 1; i++) {
        let currentJob = all[index];
        index++
        switch (currentJob) {
            case "chop":
                numberToWorkWith /= 2;
                break;
            case "dice":
                numberToWorkWith = Math.sqrt(numberToWorkWith);
                break;
            case "spice":
                numberToWorkWith += 1;
                break;
            case "bake":
                numberToWorkWith *= 3;
                break;
            case "fillet":
                numberToWorkWith -= numberToWorkWith * 0.2;
        }
        console.log(numberToWorkWith);
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')