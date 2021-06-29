// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { countsAsYes } from '../utils.js';


const test = QUnit.test;

// expect can be called anything you want
// its just a parameter

test('should return true given the input string <yes>', (expect) => {
    const expected = true;
    const actual = countsAsYes('yes');
    expect.equal(actual, expected);
});

