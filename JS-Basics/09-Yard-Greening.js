function YardGreening(input_data) {
    let area = input_data[0];
    let priceForOneMeter = 7.61;
    let discountInPercent = 18;

    let endPriceWithoutDiscount = area * priceForOneMeter;
    let discountValue = endPriceWithoutDiscount * (discountInPercent / 100);
    let endPriceWithDiscount = endPriceWithoutDiscount - discountValue;
    
    

    let outputResult = `The final price is: ${endPriceWithDiscount} lv.\nThe discount is: ${discountValue} lv.`;

    console.log(outputResult)
}
YardGreening(["550"])