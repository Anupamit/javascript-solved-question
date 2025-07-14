# Basic JavaScript
## Q.1 Comment Your JavaScript Code?
```js
// One line comment

/* 
 * This is a block comment
 */
 ```
 ## Q.2 Declare javascriptvariables?
 ```js
 var myName;
 ```
 ## Q.3 Storing Values with the Assignment Operator?
 ```js
// Setup
var a;
var b = 2;

// Only change code below this line
a = 7;
b = a;
```
## Q.4 Assigning the Value of One Variable to Another?
```js
// Setup
var a;
a = 7;
var b;
b = a;
```
## Q.5 Initializing Variables with the Assignment Operator?
```js
var myVar = 19;
var a = 9;
```
## Q.6 Declare String Variables?
```js
var myFirstName = "Anupam";
var myLastName = "kumar";
```
## Q.7 Understanding Uninitialized Variables ?
```js
// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
```
## Q.8 Understanding Case Sensitivity in Variables ?
```js
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
```
## Q.9 Explore Differences Between the var and let Keywords ?
```js
let catName = "Oliver";
let catSound = "Meow!";
```
## Q.10 Declare a Read-Only Variable with the const Keyword ?
```js
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line
```
## Q.11 Add Two Numbers with JavaScript ?
```js
const sum = 10 + 10;
```
## Q.12 Subtract One Number from Another with JavaScript ?
```js
const difference = 45 - 33;
```
## Q.13 Multiply Two Numbers with JavaScript
```js
const product = 8 * 10;
```
## Q.14 Divide One Number by Another with JavaScript ?
```js
const quotient = 66 / 33;
```
## Q.15 Increment a Number with JavaScript ?
```js
let myVar = 87;
// Only change code below this line
myVar ++
```
## Q.16 Decrement a Number with JavaScript ?
```js
let myVar = 11;

// Only change code below this line
myVar --;
```
## Q.17 Create Decimal Numbers with JavaScript ?
```js
var ourDecimal = 5.7;

// Only change code below this line
var myDecimal = 3.2;
```
## Q.18 Multiply Two Decimals with JavaScript ?
```js
const product = 2.0 * 2.5;
```
## Q.19 Divide One Decimal by Another with JavaScript ?
```js
const quotient = 4.4 / 2.0; // Change this line
```
## Q.20 Finding a Remainder in JavaScript?
```js
const remainder = 11 % 3;
```
## Q.21 Compound Assignment With Augmented Addition ?
```js
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line ?
a += 12;
b += 9;
c += 7;
```
## Q.22 Compound Assignment With Augmented Subtraction ?
```js
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line ?
a -= 6;
b -= 15;
c -= 1;
```
## Q.23 Compound Assignment With Augmented Multiplication ?
```js
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line ?
a *= 5;
b *= 3;
c *= 10;
```
## Q.24 Compound Assignment With Augmented Division ?
```js
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line ?
a /= 12;
b /= 4;
c /= 11;
```
## Q.25 Escaping Literal Quotes in Strings ?
```js
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
```
## Q.26 Quoting Strings with Single Quotes ?
```js
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
 ```
 ## Q.27 Escape Sequences in Strings ?
 ```js
 const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
 // Change this line
 ```
 ## Q.28 Concatenating Strings with Plus Operator ?
 ```js
 const myStr = "This is the start. " + "This is the end."; // Only change this line
 ```
 ## Q.29 Concatenating Strings with the Plus Equals Operator ?
 ```js
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
// ourStr is now "I come first. I come second."
```
## Q.30 Constructing Strings with Variables ?
```js
// Only change code below this line
const myName = "Anupam Kumar";
const myStr = "My name is " + myName + ",and I am well!";
```
## Q.31 Appending Variables to Strings ?
```js
// Change code below this line
const someAdjective = "anupam";
let myStr = "Learning to code is ";
myStr += someAdjective;
```
## Q.32 Find the Length of a String ?
```js
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName.length;
```
## Q.33 Use Bracket Notation to Find the First Character in a String ?
```js
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
```
## Q.34 Understand String Immutability ?
```js
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line
```
## Q.35 Use Bracket Notation to Find the Nth Character in a String ?
```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line
```
## Q.36 Use Bracket Notation to Find the Last Character in a String
```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
```
## Q.37 Use Bracket Notation to Find the Nth-to-Last Character in a String ?
```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
```
## Q.38 Use Bracket Notation to Find the Nth-to-Last Character in a String
```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
```
## Q.39 Word Blanks ?
```js
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Only change this line;
// Only change code above this line
```
## Q.40 Store Multiple Values in one Variable using JavaScript Arrays ?
```js
// Only change code below this line
const myArray = ["anupam",0,7];
```
## Q.50 Nest one Array within Another Array ?
```js
// Only change code below this line
const myArray = [["Anupam", 15]];
```
## Q.51 Access Array Data with Indexes ?
```js
const myArray = [50, 60, 70];
const myData = myArray[0]
```
## Q.52 Modify Array Data With Indexes ?
```js
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0]=45;
```
## Q.53 Access Multi-Dimensional Arrays With Indexes ?
```js
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
```
## Q.54 Manipulate Arrays With push() ?
```js
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);
```
## Q.55 Manipulate Arrays With pop() ?
```js
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop()
```
## Q.56 Manipulate Arrays With shift()
```js
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift(["John", 23]);
```
## Q.57 Manipulate Arrays With unshift() ?
```js
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);
```
## Q.58 What is the structure and content of the 'myList' constant array in JavaScript ?
```js
const myList = [
  ["Juice", 1],
  ["Milk", 2],
  ["Bread", 4], 
  ["Cheese", 10],
  ["Pizza", 8]
];
```
## Q.59 Write Reusable JavaScript with Functions ?
```js
function reusableFunction(){
  console.log('Hi World')
}
reusableFunction()
```
## Q.60 Passing Values to Functions with Arguments ?
```js
function functionWithArgs(a,b){
  console.log(a+b)
}
functionWithArgs(1,2)
functionWithArgs(7,9)
```
## Q.61 Return a Value from a Function with Return ?
```js
function timesFive(num) {
  return num * 5;
}

const answer = timesFive(5);
```
## Q.62 Global Scope and Functions ?
```js
    // Declare the myGlobal variable below this line

const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```
## Q.63 Local Scope and Functions ?
```js
function myLocalScope() {
  // Only change code below this line
  var myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```
## Q.64  Global vs. Local Scope in Functions ?
```js
var globalVar = 10;

function myFunction() {
    console.log(globalVar); // Accessible within the function
}

myFunction(); // Output: 10
```
