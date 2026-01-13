
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm_password');
let form = document.querySelector('#signup-form')





form.addEventListener("submit", (event) => {
    event.preventDefault()
    let passwordSubmit = event.target.elements.password.value;
    console.log(passwordSubmit);
    let confirmPasswordSubmit = event.target.elements.confirm_password.value;
    console.log(confirmPasswordSubmit);
    if(confirmPasswordSubmit === passwordSubmit) {
        console.log("valid")
        password.classList.add("valid");
        confirmPassword.classList.add("valid")
    } else {
        console.log("erreur")
        password.classList.add("invalid");
        confirmPassword.classList.add("invalid");
    }
});
