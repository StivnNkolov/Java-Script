// // function colorize() {
// //     let elements = document.querySelectorAll("table tr")
    
// //     for (let i = 0; i < elements.length; i++) {
        
// //         if (i % 2 != 0) {
// //             elements[i].style.backgroundColor = "Teal"
// //         }
// //     }
// // }
 
// function colorize() {
//     let smt = document.querySelectorAll('tr:nth-child(2n)');
//     let smtArray = Array.from(smt).map(v => v.style.backgroundColor = "Teal");
//     // console.log(smtArray);

    
// }

function colorize() {
    let evenTrElelementsArray = Array.from(document.querySelectorAll('tr:nth-child(even)'));

    evenTrElelementsArray.map(v => v.style.backgroundColor = 'Teal');
}