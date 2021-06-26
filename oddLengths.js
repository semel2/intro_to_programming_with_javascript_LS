function oddLengths(array) {
  let allValues = array.map(element => element.length);
  return allValues.filter(value => value % 2 !== 0)
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]