/**
 * FizzBuzz
 */
var FizzBuzz = function() {
    
    var checkValue = function(number) {
        if(number === 0) {
            return 'Zero';
        }
        
        if(number % 15 === 0) {
            return 'FizzBuzz';
        }

        if(number % 3 === 0) {
            return 'Fizz';
        }

        if(number % 5 === 0) {
            return 'Buzz';
        }
    };

    return {
        check : checkValue
    };

}();