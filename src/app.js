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
    if(isValidForm(form)) {
        submitForm();
    }
}

function submitForm() {}


function isValidForm(form) {
    var valid = false;
    validForm.valid.name = validateName(form.name);
    validForm.valid.email = validateEmail(form.email);
    validForm.valid.password = validatePassword(form.password);

    if(validForm.valid.name && validForm.valid.email && validForm.valid.password) {
        valid = true;
    }

    return valid;
}

function validateName(name) {
    var valid = false;
    if(!name || name === "") {
        validForm.errors.name = "El usuario no puede estar vacío";
    } else {
        validForm.errors.name = null;
        valid = true;
    }

    return valid;
}

function validateEmail(email) {
    var valid = false;
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(!email || email === "") {
        validForm.errors.email = "El email no puede estar vacío";
    } else if(!emailRegex.test(email)) {
        validForm.errors.email = "El email no es válido";
    } else {
        validForm.errors.email = null;
        valid = true;
    }

    return valid;
}


function validatePassword(password) {
    var valid = false;
    var passRegex = /(?=^.{7,}$)((?=.*\d)|(?=.*\W+))(?=.*[A-Z])(?=.*[a-z]).*$/;

    if(!password || password === "") {
        validForm.errors.password = "La contraseña no puede estar vacía";
    } else if(!passRegex.test(password)) {
        validForm.errors.password = "La contraseña no es válida";
    } else {
        validForm.errors.password = null;
        valid = true;
    }

    return valid;
}


/*function login(formData) {
    if(ValidateForm.isValid(formData)) {
        submitForm();
    }
}

function submitForm() {}*/