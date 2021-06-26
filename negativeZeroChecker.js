function negativeZeroChecker(input) {
  if (1/input === -Infinity) return true;
  else return false;
}

console.log(negativeZeroChecker(-0))
console.log(negativeZeroChecker(0))
console.log(negativeZeroChecker(-5))