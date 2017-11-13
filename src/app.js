var validForm = {
    errors: {
        name: null,
        email: null,
        password: null
    },
    valid: {
        name: null,
        email: null,
        password: null
    }
};

function login(form) {
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var passRegex = /(?=^.{7,}$)((?=.*\d)|(?=.*\W+))(?=.*[A-Z])(?=.*[a-z]).*$/;

    if(!form.name || form.name === "") {
        validForm.errors.name = "El usuario no puede estar vacío";
        validForm.valid.name = false;
    } else {
        validForm.errors.name = null;
        validForm.valid.name = true;
    }

    if(!form.email || form.email === "") {
        validForm.errors.email = "El email no puede estar vacío";
        validForm.valid.email = false;
    } else if(!emailRegex.test(form.email)) {
        validForm.errors.email = "El email no es válido";
        validForm.valid.email = false;
    } else {
        validForm.errors.email = null;
        validForm.valid.email = true;
    }

    if(!form.password || form.password === "") {
        validForm.errors.password = "La contraseña no puede estar vacía";
        validForm.valid.password = false;
    } else if(!passRegex.test(form.password)) {
        validForm.errors.password = "La contraseña no es válida";
        validForm.valid.password = false;
    } else {
        validForm.errors.password = null;
        validForm.valid.password = true;
    }

    if(validForm.valid.name && validForm.valid.email && validForm.valid.password) {
        submitForm();
    }
}

function submitForm() {

}