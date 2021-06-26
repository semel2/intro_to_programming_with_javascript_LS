function evenOrOdd(integer) {
  if (integer % 1 === 0) {
    (integer % 2 === 0) ? console.log('even') : console.log('odd')
  } else {
    console.log('Number entered was not an integer')
    return;
  }
}

evenOrOdd(15)
evenOrOdd(14)
evenOrOdd(1.4)