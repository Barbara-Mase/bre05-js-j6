let todoInput = document.querySelector("#todo-input")
let form = document.querySelector("form");
let liste = document.querySelector("ul")


form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    //récupération de la variable nouvelle tâche
    let todoNewTask = event.target.elements.todo.value;
    
    //création du li 
    let newTaskLi = document.createElement("li");
    
    //création de la checkbox
    let newTaskCheck = document.createElement("input");
    newTaskCheck.setAttribute('type', 'checkbox');
    newTaskCheck.classList.add('todo-checkbox');
    
    //création de la span
    let newTaskSpan = document.createElement("span");
    
    
    //création du bouton supprimer
    // let newTaskButton = document.createElement("button");
    // let buttonText = document.createTextNode("Supprimer")
    // newTaskButton.appendChild("buttonText");
    // newTaskButton.classList.add("delete-btn");
    
    //création du texte à partir de la variable nouvelle tâche
    let spanText = document.createTextNode(todoNewTask);
    newTaskSpan.appendChild(spanText);
    newTaskSpan.classList.add('todo-text');
    
    //insertion de la checkbox, du bouton et de la span dans la li
    newTaskLi.appendChild(newTaskCheck);
    newTaskLi.appendChild(newTaskSpan);
    //newTaskLi.appendChild(newTaskButton);
    
    //Insertion du li dans ul
    liste.appendChild(newTaskLi);

});

let checkboxes = document.querySelectorAll("#todo-checkbox")
let todoText = document.querySelectorAll("#todo-text")

for (let checkbox of checkboxes) {
    checkbox.addEventListener("click", (event) => {
        let lineThrough = todoText.style.textDecorationLine;
        todoText.style.textDecorationLine = "line-through";
    });

}
    
    // let newTaskLi = document.createElement("li");
    
    // let newTaskCheck = document.createElement("input")
    // newTaskCheck.setAttribute('type', 'checkbox')
    
    
    // let newTaskSpan = document.createElement("span")
    // let spanText = document.createTextNode(todoInput);
    // newTaskSpan.appendChild(spanText);
    
    
    // // let newTaskButton = document.createElement("button")
    // // let buttonText = document.createTextNode("Supprimer")
    // // newTaskButton.appendChild("buttonText");
    
    
    // newTaskLi.appendChild(newTaskCheck)
    // newTaskLi.appendChild(newTaskSpan)
    // //newTaskLi.appendChild(newTaskButton)
    
    
    // let lineThrough = li.style.textDecorationLine;
    // li.style.textDecorationLine = "line-through";
    
    
