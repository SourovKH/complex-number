const complexNumber = function(real, imaginary) {
  const getRealPart = function() {
    return real;
  }

  const getImaginaryPart = function() {
    return imaginary;
  }

  const add = function(addend) {
    const realSum =  real + addend.getRealPart();
    const imaginarySum = imaginary + addend.getImaginaryPart();

    return complexNumber(realSum, imaginarySum);
  }

  const multiply = function(multiplicand) {
    const mr = multiplicand.getRealPart();
    const mi = multiplicand.getImaginaryPart();
    const realPart = real * mr - imaginary * mi;
    const imaginaryPart = real * mi + imaginary * mr;

    return complexNumber(realPart, imaginaryPart);
  }

  return {getRealPart, getImaginaryPart, add, multiply};
}

const displayComplexNumber = function(complexNumber) {
  const realPart = complexNumber.getRealPart();
  const imaginaryPart = complexNumber.getImaginaryPart();
  const sign = "+";

  return `${realPart} ${sign} ${imaginaryPart}i`;
}

exports.complexNumber = complexNumber;
exports.displayComplexNumber = displayComplexNumber;
