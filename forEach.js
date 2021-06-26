let names = ['chris', 'kevin', 'naveed', 'pete', 'victor'];

names.forEach(function(name) {
  console.log(name);
});


names.forEach(name => console.log(name));

namePrinter = nameArray => console.log(nameArray[2])

namePrinter(names);