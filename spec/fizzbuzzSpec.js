describe("FizzBuzz", function() {
    describe("multiplos de 3", function() {
        it('should return Fizz for 3', function() {
            var result = FizzBuzz.check(3);
            expect(result).toEqual('Fizz');
        });

        it('should return Fizz for 9', function() {
            var result = FizzBuzz.check(9);
            expect(result).toEqual('Fizz');
        });
    });

    describe("multiplos de 5", function() {
        it('should return Buzz for 5', function() {
            var result = FizzBuzz.check(5);
            expect(result).toEqual('Buzz');
        });

        it('should return Buzz for 25', function() {
            var result = FizzBuzz.check(25);
            expect(result).toEqual('Buzz');
        });
    });

    describe("multiplos de 3 y 5", function() {
        it('should return Buzz for 15', function() {
            var result = FizzBuzz.check(15);
            expect(result).toEqual('FizzBuzz');
        });

        it('should return Buzz for 30', function() {
            var result = FizzBuzz.check(30);
            expect(result).toEqual('FizzBuzz');
        });
    });
});