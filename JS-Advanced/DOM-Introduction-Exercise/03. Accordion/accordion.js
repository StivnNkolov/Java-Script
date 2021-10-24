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
    // additionalInfoElement.style.display = "block";

}