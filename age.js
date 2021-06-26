let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you? '));

console.log(`You are ${age} years old.`)
console.log(`In 10  years, you will be ${age+10} years old.`)
console.log(`In 20  years, you will be ${age+20} years old.`)
console.log(`In 30  years, you will be ${age+30} years old.`)
console.log(`In 40  years, you will be ${age+40} years old.`)

age = parseInt(rlSync.question('How old are you? '));


decadeArray = [10, 20, 30, 40]

console.log(`You are ${age} years old.`)
for (let index = 0; index<decadeArray.length; index +=1) {
  console.log(`In ${decadeArray[index]} years, you will be ${age + decadeArray[index]} years old.`)
}

age = parseInt(rlSync.question('How old are you? '));
console.log(`You are ${age} years old.`)
for (let index = 10; index <= 40; index+= 10) {
  console.log(`In ${index} years, you will be ${index+age} years old.`);
}