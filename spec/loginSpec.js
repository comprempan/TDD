describe("Login", function() {
    var formData = {
        user: null,
        email: null,
        password: null
    };
    
    beforeEach(function() {
        spyOn(window, "submitForm");
    });

    describe("Don't send the form", function() {
        beforeEach(function(){
            spyOn(ValidateForm, "isValid").and.returnValue(false);
        });

        it("Shouldn't send the form if it is invalid", function() {
            login(formData);
            expect(ValidateForm.isValid).toHaveBeenCalled();
            expect(submitForm).not.toHaveBeenCalled();
        });
    });

    describe("Send the form", function() {
        beforeEach(function(){
            spyOn(ValidateForm, "isValid").and.returnValue(true);
        });

        it("Should send the form if it is valid", function() {
            login(formData);
            expect(ValidateForm.isValid).toHaveBeenCalled();
            expect(submitForm).toHaveBeenCalled();
        });
    });
}); 