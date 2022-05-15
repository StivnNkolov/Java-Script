// function attachGradientEvents() {
//     // select
//     let hoverBoxDivElement = document.getElementById('gradient');
//     let gradientBoxElement = document.getElementById('gradient-box');
//     let smt = gradientBoxElement.clientWidth;
//     let smt2 = hoverBoxDivElement.offsetWidth
//     // console.log(smt);
//     // console.log(smt2);

//     let resultElement = document.getElementById('result');
//     hoverBoxDivElement.addEventListener('mousemove', (e) => {

//         let hoverAreaWidth = e.currentTarget.clientWidth
//         // console.log(hoverAreaWidth);
//         let placeWhereMouseIs = e.offsetX;
//         // console.log(placeWhereMouseIs)


//         let percentage = Math.floor((placeWhereMouseIs / hoverAreaWidth) * 100)

//         resultElement.textContent = `${percentage}%`
//         // console.log(percentage);
//     })

//     // resultElement.textContent = `${percentage}%`;

// }

function attachGradientEvents() {
    let hoverElement = document.querySelector('#gradient');
    let resultElement = document.querySelector('#result');

    // let smt = hoverElement.clientWidth;
    // console.log(smt);

    hoverElement.addEventListener('mousemove', (e) => {
        let mousePlace = e.offsetX;
        let clientWidth = hoverElement.clientWidth;

        // let clientWidth = e.currentTarget.clientWidth

        // console.log(e.currentTarget.clientWidth);

        let percentage = Math.floor((mousePlace / clientWidth) * 100);
        resultElement.textContent = `${percentage}%`
    })
}
// function attachGradientEvents() {
//     let hoverBoxDivElement = document.getElementById('gradient');
//     let resultElement = document.getElementById('result');
//     hoverBoxDivElement.addEventListener('mousemove', (e) => {
//         let hoverAreaWidth = e.currentTarget.clientWidth
//         let placeWhereMouseIs = e.offsetX;
//         let percentage = Math.floor((placeWhereMouseIs / hoverAreaWidth) * 100)
//         resultElement.textContent = `${percentage}%`
//     })
// }
