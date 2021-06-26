function threeTester(array) {
  if (array.filter(num => num === 3).length > 0) return true
  else return false
}

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(threeTester(numbers1))
console.log(threeTester(numbers2))
console.log(threeTester(numbers3))