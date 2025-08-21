// 1: Reverse a string

let str = "hello";
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }

    console.log("Reversed string:", reversed);


// 2: Find max number in array

  let numbers = [2, 8, 5, 1];
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }

    console.log("Maximum number:", max);

// 3: Count vowels in string

  let strr = "internship";
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < strr.length; i++) {
      if (vowels.includes(strr[i])) {
        count++;
      }
    }

    console.log("Number of vowels:", count);


// 4: Return only even numbers from array

function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log("Even Numbers:", getEvenNumbers([1, 2, 3, 4, 5]));


// 5: Capitalize first letter of each word
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log("Capitalized Sentence:", capitalizeWords("hello intern task"));



// Regex 1: Valid Email Address
const emailRegex = /^[A-Za-z0-9]+(?:[%_.+][A-Za-z0-9+])*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
console.log("Valid Email Test:", emailRegex.test("intern@test.com")); // true

// Regex 2: 10-digit Indian Mobile Number
const phoneRegex = /^[0-9]\d{9}$/;
console.log("Valid Phone Test:", phoneRegex.test("9876543210")); // true

// Regex 3: Only alphabets (no numbers)
const alphaRegex = /^[A-Za-z]+$/;
console.log("Alphabet Test:", alphaRegex.test("Hello")); // true
console.log("Alphabet Test:", alphaRegex.test("Hello123")); // false

//Regex 4 :valid URL
const urlRegex = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i;
console.log("valid url test:", urlRegex.test("https://www.example.com")); 


