const complexNumber = function(real, imaginary) {
  const getRealPart = function() {
    return real;
  }

  const getImaginaryPart = function() {
    return imaginary;
  }

  return {getRealPart, getImaginaryPart};
}

exports.complexNumber = complexNumber;
