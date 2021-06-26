let greetingMessage = "Good Morning!";



changeGreetingMessage("Good evening");
greetPeople();

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}