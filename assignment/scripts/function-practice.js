console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Write a function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}

console.log('Test - should say "Hello World!"', hello());
// Call the function to test

//// DONE ////

// 2. Write a function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return (`Hello, ${name}!`)
}

console.log(helloName(`Brii`));

// Remember to call the function to test

//// DONE ////


// 3. Write a function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber
}

console.log(addNumbers(3, 12))

//// DONE ////

// 4. Write a function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber
}

console.log(multiplyThree(3, 12, 5)) 

//// DONE ////

// 5. Write a function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    console.log(number, `is greater than 0`);
    return true; 
  }   
  
    else {
    console.log(number, `is less than 0`);
    return false;
    }
}

console.log(isPositive(-4))

//// DONE ////

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Write a function to return the last item in an array. If the 
//    array is empty, return `undefined`.

let stuff = ['life', 'universe', 'everything', 42];
  console.log(stuff);

function getLast(stuff) {
  if (stuff.length === 0) {
    return undefined;
  }
  return stuff[stuff.length -1];
}
console.log('Test should return "42" as the last item in the array', getLast(['life', 'universe', 'everything', 42]));


// 7. Write a function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

let adult = [13, 16, 18, 24, 37];
function find(value, array) {
  console.log('The value is:', value, 'and wants to be found in:', array);
  for(num of array) {
    if (num === value) {
      return true;
    }
  } return false;
}
console.log('Is this age here?:', find(15, adult));
console.log('Is this age here?:', find(19, adult));
console.log('Is this age here?:', find(37, adult));



// ----------------------
// Stretch Goals
// ----------------------
// 8. Write a function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Write a function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Write a function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}

// let basket = [];
// const maxItems = 5;
// let full = false;
// function addItem(item) {
//         isFull();
//         if (!full) {
//         basket.push(item);
//         return true;
//         } else {
//             return false;
//         }
//     }
// function listItems() {
//     for (i = 0; i < basket.length; i++){
//         console.log(basket[i]);
//     }
// }
// function isFull() {
//     if (basket.length < maxItems) {
//         return full = false;
//     } else {
//         return full = true;
//     }
// }

// function isFull() {
//   if (basket.length < maxItems) {
//       return full = false;
//   } else {
//       return full = true;
//   }
// }

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!





// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
