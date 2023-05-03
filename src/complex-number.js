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
    const realProduct = real * mr - imaginary * mi;
    const imaginaryProduct = real * mi + imaginary * mr;

    return complexNumber(realProduct, imaginaryProduct);
  }

  return {getRealPart, getImaginaryPart, add, multiply};
}

exports.complexNumber = complexNumber;
