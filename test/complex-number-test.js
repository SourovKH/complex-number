const fs = require('fs');
const { strictEqual, deepStrictEqual } = require('assert');
const { describe, it } = require('node:test');

const { complexNumber } = require("../src/complex-number.js");

describe("complexNumber", function() {
  describe("getRealPart", function() {
    it("should give the real part of given complex number", function() {
      const complexNum = complexNumber(2, 3);
      strictEqual(2, complexNum.getRealPart());
    });
  });

  describe("getImaginaryPart", function() {
    it("should give the imaginary part of given complex number", function() {
      const complexNum = complexNumber(2, 3);
      strictEqual(3, complexNum.getImaginaryPart());
    });
  });

  describe("add", function() {
    it("should give the addition of two given complex numbers", function() {
      const complexNumber1 = complexNumber(2, 3);
      const complexNumber2 = complexNumber(5, 2);

      strictEqual(7, complexNumber1.add(complexNumber2).getRealPart());
      strictEqual(5, complexNumber1.add(complexNumber2).getImaginaryPart());

    });
  });

  describe("multiply", function() {
    it("should give the multiplication of two given complex numbers", function() {
      const complexNumber1 = complexNumber(2, 3);
      const complexNumber2 = complexNumber(1, 2);

      strictEqual(-4, complexNumber1.multiply(complexNumber2).getRealPart());
      strictEqual(7, complexNumber1.multiply(complexNumber2).getImaginaryPart());
    });
  });

  describe("toString", function() {
    it("should give a complex number when both real and imaginary parts are positive", function() {
      const complexNum = complexNumber(2, 3);
      strictEqual("2 + 3i", complexNum.toString());
    });

    it("should give a complex number when real part is negative", function() {
      const complexNum = complexNumber(-2, 3);
      strictEqual("-2 + 3i", complexNum.toString());
    });

    it("should give a complex number when imaginary part is negative", function() {
      const complexNum = complexNumber(2, -3);
      strictEqual("2 - 3i", complexNum.toString());
    });

    it("should give a complex number when both real and imaginary parts are negative", function() {
      const complexNum = complexNumber(-2, -3);
      strictEqual("-2 - 3i", complexNum.toString());
    });

    it("should give only real part when imaginry part is zero", function() {
      const complexNum = complexNumber(2, 0);
      strictEqual("2", complexNum.toString());
    });

    it("should give only imaginary part when real part is zero", function() {
      const complexNum = complexNumber(0, 3);
      strictEqual("3i", complexNum.toString());
    });
  });
});
