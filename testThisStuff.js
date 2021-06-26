let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(accumulator, currentValue) {
    return accumulator.concat(currentValue)
  },
  []
)


let lengths = ['abc', 'abcd', 'abcdef', 'abcde'].reduce(
  function(accumulator, currentValue) {
    return accumulator.concat(currentValue.length)
  }, []
)
console.log(flattened)
console.log(lengths)

function oddLengthsReduce(array) {
  return array.reduce(function(accumulator, element) {
    if (element.length % 2 === 1) {
      return accumulator.concat(element.length);
    }
    else return accumulator;
  }, []);
}

tester = ['abcd', 'abcde', 'abcdef', 'abcdefghi'];
console.log(oddLengthsReduce(tester))