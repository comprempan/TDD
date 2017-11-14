describe("FizzBuzz", function() {
    it('should return Fizz for 3', function() {
        var result = FizzBuzz.check(3);
        expect(result).toEqual('Fizz');
    });

    it('should return Fizz for 9', function() {
        var result = FizzBuzz.check(9);
        expect(result).toEqual('Fizz');
    });

    it('should return Buzz for 5', function() {
        var result = FizzBuzz.check(5);
        expect(result).toEqual('Buzz');
    });
});