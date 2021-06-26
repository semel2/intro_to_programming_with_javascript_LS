function oddLengthsReduce(array) {
  return array.reduce(function(accumulator, element){
    if (element.length %2 === 1){
      return accumulator.concat(element.length)
    }  else return accumulator
  }, [])
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengthsReduce(arr)); // => [1, 5, 3]