let rlSync = require('readline-sync');


function greetWithNames() {
  let firstName = rlSync.question('What is your first name? ')
  let lastName = rlSync.question('What is your last name? ')

  let greetingString = `Hello, ${firstName} ${lastName}!`
  return greetingString
}

console.log(greetWithNames());