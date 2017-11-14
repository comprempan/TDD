describe("ValidateForm", function() {
    var formData = {
        name: null,
        email: null,
        password: null
    };

    describe("formulario invalido", function() {
        describe("Error en el nombre", function() {
            it('Should set the error for name if there is no name an return that the form is invalid', function() {
                var result = ValidateForm.isValid(formData);
                
                expect(validForm.errors.name).toEqual("El usuario no puede estar vacío");
                expect(result).toEqual(false);
            });
        });

        describe("Error en el email", function() {
            describe("No hay email", function() {
                it('Should set the error for email if there is no email return that the form is invalid', function() {
                    var result = ValidateForm.isValid(formData);
               
                    expect(validForm.errors.email).toEqual("El email no puede estar vacío");
                    expect(result).toEqual(false);
                });
            });

            describe("Email invalido", function() {
                it('Should set the error for email if the email is invalid and return that the form is invalid', function() {
                    formData.email = "lucas";

                    var result = ValidateForm.isValid(formData);
                    
                    expect(validForm.errors.email).toEqual("El email no es válido");
                    expect(result).toEqual(false);
                });
            });
        });

        describe("Error en la contraseña", function() {
            describe("No hay contraseña", function() {
                it('Should set the error for password if there is no email return that the form is invalid', function() {
                    var result = ValidateForm.isValid(formData);
               
                    expect(validForm.errors.password).toEqual("La contraseña no puede estar vacía");
                    expect(result).toEqual(false);
                });
            });

            describe("Contraseña invalido", function() {
                it('Should set the error for email if the password is invalid and return that the form is invalid', function() {
                    formData.password = "password";
                    
                    var result = ValidateForm.isValid(formData);
                    
                    expect(validForm.errors.password).toEqual("La contraseña no es válida");
                    expect(result).toEqual(false);
                });
            });
        });

        describe("formulario valido", function() {
            it('Should return that the form is valid', function() {
                formData = {
                    name: "name",
                    email: "lucasgrijander@gmail.com",
                    password: "Rkshji3s"
                };
                
                var result = ValidateForm.isValid(formData);
                
                expect(validForm.errors.name).toBeNull();
                expect(validForm.errors.email).toBeNull();
                expect(validForm.errors.password).toBeNull();
                expect(result).toEqual(true);
            });
        });
    });
});
