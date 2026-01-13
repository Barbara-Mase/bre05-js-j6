let textarea = document.getElementById("text");
let color = document.getElementById("color_selector")
let div = document.querySelector("div");
let form = document.querySelector('#form');


textarea.addEventListener("change", (event) => {
    event.preventDefault();
    let textareaValue = event.target.value;
    console.log(textareaValue);
    let divText = document.createTextNode(textareaValue);
    div.appendChild(divText);
});

color.addEventListener("change", (event) => {
     event.preventDefault();
     let colorValue = event.target.value;
     let divColor = div.style.backgroundColor;
     div.style.backgroundColor = colorValue;
})
    
    
    //let textareaValue = event.target.elements.textarea.value;
    
        //let colorValue = event.target.elements.color.value;
    //console.log(textareaValue);
    