// Code your solutions in this file
/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  } */

const names = ["Charlie", "Samip", "Ali"] 
function writeCards(names, event) {
    let messages = []
for (let i = 0; i < names.length; i++){
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    messages.push(message);
}
return messages;
}

function countDown(number) {
    // Start the loop with the given number and run until it reaches zero
    while (number >= 0) {
      console.log(number);  // Log the current number
      number--;  // Decrement the number by 1
    }
  }
  