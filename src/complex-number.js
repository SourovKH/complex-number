const complexNumber = function(real, imaginary) {
  const getRealPart = function() {
    return real;
  }

  const getImaginaryPart = function() {
    return imaginary;
  }

  return {getRealPart, getImaginaryPart};
}

const operationOnComplexNumbers = function() {
  const add = function(number1, number2) {
    const realPart = number1.real + number2.real;
    const imaginaryPart = number1.imaginary + number2.imaginary;

    return {realPart, imaginaryPart};
  }

  return {add};
}

exports.complexNumber = complexNumber;
exports.operationOnComplexNumbers = operationOnComplexNumbers;
