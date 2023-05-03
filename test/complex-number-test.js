const fs = require('fs');
const deepStrictEqual = require('assert');
const {describe, it} = require('node:test');

const {complexNumber, operationOnComplexNumbers} = require("../src/complex-number.js");

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

  it("should give the addition of two given complex numbers", function() {
    const number1 = {realPart: 2, imaginaryPart: 3};
    const number2 = {realPart: 1, imaginaryPart: 4};
    const operation = operationOnComplexNumbers();
    deepStrictEqual({realPart: 3, imaginaryPart: 7}, operation.add(number1, number2));
  });
});
