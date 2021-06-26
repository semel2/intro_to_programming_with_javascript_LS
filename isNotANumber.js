function isNotANumber(input) {
  if (typeof input === 'number' && input !== input) {
    return true;
  }
  return false;
}

let lol = NaN;
let lol2 = 13;
let lol3 = 'hello';
let lol4 = [1,2,3,4];
let lol5 = {hotel: 'trivago'};
let lol6 = undefined;
let lol7 = null;

console.log(isNotANumber(lol));
console.log(isNotANumber(lol2));
console.log(isNotANumber(lol3));
console.log(isNotANumber(lol4));
console.log(isNotANumber(lol5));
console.log(isNotANumber(lol6));
console.log(isNotANumber(lol7));