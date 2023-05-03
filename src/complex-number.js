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

  const showComplexNumber = function() {
    if(real === 0) {
      return `${imaginary}i`;
    }

    if(imaginary === 0) {
      return `${real}`;
    }

    const sign = imaginary < 0 ? "-" : "+";

    return `${real} ${sign} ${Math.abs(imaginary)}i`;

  }

  return {getRealPart, getImaginaryPart, add, multiply, showComplexNumber};
}

exports.complexNumber = complexNumber;
