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

let int = 0;
function countDown(int) {
    while (int < 10) {
console.log(int);
int--;
    }
}