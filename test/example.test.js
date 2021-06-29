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

test('should return true given input <YES>', (expect) => {
    const expected = true;
    const actual = countsAsYes('YES');
    expect.equal(actual, expected);
});

test('should return true given input <Yeperdee deperdee doodles>', (expect) => {
    const expected = true; 
    const actual = countsAsYes('Yeperdee deperdee doodles');
    expect.equal(actual, expected);
});

test('should return false given input <no>', (expect) => {
    const expected = false;
    const actual = countsAsYes('no');
    expect.equal(actual, expected);
});

test('should return false given input <NOPE>', (expect) => {
    const expected = false;
    const actual = countsAsYes('NOPE');
    expect.equal(actual, expected);
})


