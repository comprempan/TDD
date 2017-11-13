describe("Login", function() {
    describe("Submit Form", function() {
        //creamos esta variable que es el objeto que se va a enviar
        var form = {
            name: null,
            email: null,
            password: null
        };

        describe("Invalid Form", function() {
            describe("invalid name", function() {
                it("Should show a error message if the name is empty", function() {
                    //given
                    //when
                    login(form);
                    //then
                    expect(validForm.errors.name).toEqual("El usuario no puede estar vacío");
                    expect(validForm.valid.name).toEqual(false);
                });
            });
    
            describe("invalid email", function() {
                it("Should show a error message if the email is empty", function() {
                    //When
                    login(form);
                    //then
                    expect(validForm.errors.email).toEqual("El email no puede estar vacío");
                    expect(validForm.valid.email).toEqual(false);
                });
    
                it("Should show a error message if the email is invalid", function() {
                    //Given
                    form.email = "email";
                    //When
                    login(form);
                    //then
                    expect(validForm.errors.email).toEqual("El email no es válido");
                    expect(validForm.valid.email).toEqual(false);
                });
            });
    
            describe("invalid password", function() {
                it("Should show a error message if the password is empty", function() {
                    //When
                    login(form);
                    //then
                    expect(validForm.errors.password).toEqual("La contraseña no puede estar vacía");
                    expect(validForm.valid.password).toEqual(false);
                });
    
                it("Should show a error message if the password is invalid", function() {
                    //Given
                    form.password = "pass";
                    //When
                    login(form);
                    //then
                    expect(validForm.errors.password).toEqual("La contraseña no es válida");
                    expect(validForm.valid.password).toEqual(false);
                });
            });
        });

        describe("Valid form", function() {
            beforeEach(function() {
                spyOn(window, "submitForm");
            });

            it("Should call submitForm method to send the form", function() {
                //given
                form.name = "lucas";
                form.email = "lucas.grijander@gmail.com";
                form.password = "S5fksuih";
                //when
                login(form);
                //then
                expect(submitForm).toHaveBeenCalled();
            });
        });
    });
});
