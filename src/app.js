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

function login(formData) {
    if(ValidateForm.isValid(formData)) {
        submitForm();
    }
}

function submitForm() {}