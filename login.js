const login = document.getElementById("login_form");
const button = document.getElementById("login_form_submit");

button.addEventListener("click" , (e) => {
    
    const user = login.username.value;
    const pass = login.password.value;

    if (user === 'admin' && pass === 'admin'){
        window.location.assign("index.html");
        alert('This worked!');
    }
});