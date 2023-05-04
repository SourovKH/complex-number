const getRealPart = function() {
  return this.real;
}

const getImaginaryPart = function() {
  return this.imaginary;
}

const add = function(addend) {
  const realSum =  this.getRealPart() + addend.getRealPart();
  const imaginarySum = this.getImaginaryPart() + addend.getImaginaryPart();

  return complexNumber(realSum, imaginarySum);
}

const multiply = function(multiplicand) {
  const mr = multiplicand.getRealPart();
  const mi = multiplicand.getImaginaryPart();
  const realPart = this.getRealPart() * mr - this.getImaginaryPart() * mi;
  const imaginaryPart = this.getRealPart() * mi + this.getImaginaryPart() * mr;

  return complexNumber(realPart, imaginaryPart);
}

const toString = function() {
  const real = this.getRealPart();
  const imaginary = this.getImaginaryPart();

  if(real === 0) {
    return `${imaginary}i`;
  }

  if(imaginary === 0) {
    return `${real}`;
  }

  const sign = imaginary < 0 ? "-" : "+";
  const absoluteImaginary = Math.abs(imaginary);

  return `${real} ${sign} ${absoluteImaginary}i`;

}


const complexNumber = function(real, imaginary) {
  const parts = {real, imaginary};
  const complex = {};

  complex.getRealPart = getRealPart.bind(parts);
  complex.getImaginaryPart = getImaginaryPart.bind(parts);
  complex.add = add.bind(complex);
  complex.multiply = multiply.bind(complex);
  complex.toString = toString.bind(complex);

  return complex;
}

exports.complexNumber = complexNumber;
