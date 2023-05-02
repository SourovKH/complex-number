const complexNumber = function(real, complex) {
  const getRealPart = function() {
    return real;
  }

  return {getRealPart};
}

exports.complexNumber = complexNumber;
