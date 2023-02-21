const multiply = require("../src/multiply")

describe ('test multiply positive scenario', () =>{
    test('multiply 3*2 should equal to 6', () => {
        expect(multiply(3,2)). toBe(6);
    });

})