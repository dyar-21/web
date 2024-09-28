
let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");


eyeicon.addEventListener('click', () => {

    if(password.type == "password") {
        password.type = "text"

        eyeicon.classList.remove("fa-eye");
        eyeicon.classList.add("fa-eye-slash");
    }
    else{

        password.type = "password"

        eyeicon.classList.remove("fa-eye-slash");
        eyeicon.classList.add("fa-eye");

    }
})