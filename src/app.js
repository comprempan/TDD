var formErrors = {
    name: null,
    email: null,
    password: null
};

function login(form) {
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var passRegex = /(?=^.{7,}$)((?=.*\d)|(?=.*\W+))(?=.*[A-Z])(?=.*[a-z]).*$/;

    if(!form.name || form.name === "") {
        formErrors.name = "El usuario no puede estar vacío";
    }

    if(!form.email || form.email === "") {
        formErrors.email = "El email no puede estar vacío";
    } else if(!emailRegex.test(form.email)) {
        formErrors.email = "El email no es válido";
    }

    if(!form.password || form.password === "") {
        formErrors.password = "La contraseña no puede estar vacía";
    } else if(!passRegex.test(form.password)) {
        formErrors.password = "La contraseña no es válida";
    }
}

function submitForm() {
    
}