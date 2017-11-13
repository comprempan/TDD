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
    });
});
