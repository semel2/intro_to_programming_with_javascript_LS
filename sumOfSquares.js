function sumOfSquares(array) {
  return array.reduce((accumulator, value) => accumulator + value*value, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83