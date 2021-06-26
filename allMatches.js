function allMatches(array, regex) {
  returnArray = [];
  for (let i = 0; i < array.length; i+=1) {
    if (regex.test(array[i])) {
      returnArray.push(words[i]);
    } 
  }
  return returnArray;
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']