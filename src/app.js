var formErrors = {
    name: null,
    email: null,
    password: null
};

function login(form) {
    if(!form.name || form.name === "") {
        formErrors.name = "El usuario no puede estar vacío";
    }

    if(!form.email || form.email === "") {
        formErrors.email = "El email no puede estar vacío";
    }
}