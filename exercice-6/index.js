 
let checkbox = document.querySelector("#conditions");

checkbox.addEventListener("change", (event) => {
    if (checkbox.checked === true) {
    
    document.querySelector("button").disabled = false;
} else {
    
    document.querySelector("button").disabled = true;
}
});


