// function showText() {
//     let element = document.getElementById("text");
//     element.style.display = "inline";

//     let element2 = document.getElementById("more");
//     element2.style.display = "none";
// }

function showText() {
    let spanElementToShow = document.querySelector('#text');
    let linkShowMore = document.querySelector('#more');

    spanElementToShow.style.display = 'inline';
    linkShowMore.style.display = 'none';
}