// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { isYes } from '../utils.js';

const test = QUnit.test;

// expect can be called anything you want
// its just a parameter
test('should return true for yes-y strings', expect => {
    const yesString = isYes('yes');
    const yString = isYes('y');
    const upperCaseString = isYes('YES');
    expect.equal(yesString, true);
    expect.equal(yString, true);
    expect.equal(upperCaseString, true);

})

test('should return false for non yes-y string', expect => {
    const noString = isYes('no');
    expect.equal(noString, false);
})