describe("Login", function() {
    describe("Submit Form", function() {
        //creamos esta variable que es el objeto que se va a enviar
        var form = {
            name: null,
            email: null,
            password: null
        };

        describe("invalid name", function() {
            it("Should show a error message if the name is empty", function() {
                //given
                //when
                login(form);
                //then
                expect(formErrors.name).toEqual("El usuario no puede estar vacío");
            });
        });

        describe("invalid email", function() {
            it("Should show a error message if the email is empty", function() {
                //When
                login(form);
                //then
                expect(formErrors.email).toEqual("El email no puede estar vacío");
            });

            it("Should show a error message if the email is invalid", function() {
                //Given
                form.email = "email";
                //When
                login(form);
                //then
                expect(formErrors.email).toEqual("El email no es válido");
            });
        });

        describe("invalid password", function() {
            it("Should show a error message if the password is empty", function() {
                //When
                login(form);
                //then
                expect(formErrors.password).toEqual("La contraseña no puede estar vacía");
            });

            it("Should show a error message if the password is invalid", function() {
                //Given
                form.password = "pass";
                //When
                login(form);
                //then
                expect(formErrors.password).toEqual("La contraseña no es válida");
            });
        });

        describe("valid form", function() {
            it("Should call submitForm method to send the form", function() {
                //given
                form.name = "lucas";
                form.email = "lucas.grijander@gmail.com";
                form.password = "shgre23k";
                //when
                login(form);
                //then
                expect(submitForm).toHaveBeenCalled();
            });
        });
    });
});
