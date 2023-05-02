const fs = require('fs');
const deepStrictEqual = require('assert');
const {describe, it} = require('node:test');

const {complexNumber} = require("../src/complex-number.js");

describe("complexNumber", function() {
  it("should give the real part of given imaginary number", function() {
    const realPart = 2;
    const imaginaryPart = 3;
    const complex = complexNumber(2, 3);
    deepStrictEqual(2, complex.getRealPart());
  });

  it("should give the imaginary part of given imaginary number", function() {
    const realPart = 2;
    const imaginaryPart = 3;
    const complex = complexNumber(2, 3);
    deepStrictEqual(3, complex.getImaginaryPart());
  });
});
