let username = document.getElementById('login_username');
let password = document.getElementById('login_password');
let textarea = document.querySelector('textarea');

username.addEventListener("change", (event) => {
    console.log(event.target.value);
}); 

password.addEventListener("change", (event) => {
    console.log(event.target.value);
});

textarea.addEventListener("change", (event) => {
    console.log(event.target.value);
})