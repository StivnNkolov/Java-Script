function toggle() {
    let buttonElement = document.getElementsByClassName("button")[0];
    let additionalInfoElement = document.querySelector("#extra");
    if (buttonElement.textContent == "More") {
        additionalInfoElement.style.display = "block";
        buttonElement.textContent = "Less"
    }else {
        additionalInfoElement.style.display = "none";
        buttonElement.textContent = "More"
    }
}


function toggle() {
    let button = document.querySelector('.button');
    let buttonTextContent = button.textContent;
    let hidenTextElement = document.querySelector('#extra');
    
    
    button.textContent = buttonTextContent == "More" ? "Less" : "More";
    hidenTextElement.style.display = buttonTextContent == "More" ? "block" : "none"
};
