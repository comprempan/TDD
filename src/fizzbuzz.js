/**
 * FizzBuzz
 */
var FizzBuzz = function() {
    
    var checkValue = function(number) {
        if( number === 3 ) {
            return 'Fizz';
        }
    };

    return {
        check : checkValue
    };

}();