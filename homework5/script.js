// HOMEWORK Part 1
// Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

// object
// boolean
// number
// string
// undefined

// Funkcija
function getType(value) {
  console.log(typeof value);
  return typeof value;
}

//
getType({}); // Object
getType(true); // Boolean
getType(42); // Number
getType("Hello"); // String
getType(undefined); // Undefined

////////////////////

// HOMEWORK Part 2
// Write a JavaScript function that will return:

// Calculates your dog's age based on the conversion
// rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// Bonus: Make the same function work for converting
//  dog to human years as well

//
function dogAgeConverter(age, toDogYears = true) {
  if (toDogYears) {
    return age * 7; //
  } else {
    return age / 7; //
  }
}

//
//

console.log(dogAgeConverter(5, true)); //
console.log(dogAgeConverter(35, false)); //
/////////////////

// HOMEWORK Part 3
// Write a javascript function for an ATM:
// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the ammount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!

let accountBalance = 1000;

function atmSimulator(amount) {
  if (amount > accountBalance) {
    return "Not enough money";
  } else {
    accountBalance -= amount;

    return `Withdrawn: $${amount}, Remaining Balance: $${accountBalance}`;
  }
}

//

console.log(atmSimulator(300)); // vadeno: $300, ostanato : $700
console.log(atmSimulator(800)); // Not enough money nema pari
