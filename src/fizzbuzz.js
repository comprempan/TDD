/**
 * FizzBuzz
 */
var FizzBuzz = function() {
    
    var checkValue = function(number) {
        if(number % 3 === 0) {
            return 'Fizz';
        }
    };

    return {
        check : checkValue
    };

}();