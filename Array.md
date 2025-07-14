# Array
## Q. Array Element Replacement and Commenting Exercise
```js
let myArray = ["a", "b", "c", "d"];

// Correction: Replaces the element at index 1 with "sahil"
myArray[1] = "sahil";

// Comment: Print the modified array to the console
console.log(myArray);
```
## Q. Array Modification with unshift() and push() Functions ?
```js
function mixedNumbers(arr) {
  // Comment: Add elements "I", 2, "three" to the beginning of the array
  arr.unshift("I", 2, "three");
  // Comment: Add elements 7, "VIII", 9 to the end of the array
  arr.push(7, "VIII", 9);

  // Comment: Return the modified array
  return arr;
}

// Comment: Call the mixedNumbers function with the initial array ['IV', 5, 'six'] and print the result
console.log(mixedNumbers(['IV', 5, 'six']));
```

## Q. Function to add all elements of an array?
```js
function addElements(arr) {
    let add = 0;
    for (let i = 0; i < arr.length; i++) {
        add += arr[i];
    }
    return add;
}

// Test array
let arr = [1, 2, 3, 45, 6];

// Call the function to get the sum
let result = addElements(arr);

// Output the result
console.log("The sum of elements in the array is:", result);
```
## Q. Function to check if the input is an array?
```js
function checkArr(element) {
    return Array.isArray(element);
}

// Test cases
console.log(checkArr([]));          // Output: true
console.log(checkArr([1, 2, 3]));   // Output: true
console.log(checkArr());            // Output: false
console.log(checkArr(1, 2));        // Output: false

OR

function checkArr(element){
    if (Array.isArray(element)) {
        return true
    }else{
        return false
    }
}
```
## Q. Function to merge two arrays?
```js
function merger(arr1, arr2) {
    // Using concat method
    // let numbers = arr1.concat(arr2);
    // return numbers;

    // Using a loop to push elements from arr2 into arr1
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    return arr1;
}

// Test arrays
let arr1 = [1, 2, 3, 4, 1, 2];
let arr2 = [5, 6, 1, 2, 1, 2];

// Merge the arrays and print the result
console.log("Merged array:", merger(arr1, arr2));

OR

function merger(arr1, arr2) {
    let numbers =arr1.concat(arr2);
    return numbers
}
```
## Q. Function to double every element in an array and then sum them?
```js
function doubleAndSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 2; // double each element in the array
        sum += arr[i]; // sum up the doubled elements
    }
    return sum;
}

// Test array
let arr = [1, 1, 2, 2, 3, 4, 4, 6, 5, 5];

// Output the result
console.log("Double of every element and sum:", doubleAndSum(arr));
```

## Q. Function to find the indices of duplicate elements in an array?
```js
// Function to find the indices of duplicate elements in an array
function duplicateIndexOf(arr1) {
    let compare = [];
    let indexArray = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!compare.includes(arr1[i])) {
            compare.push(arr1[i]);
        } else {
            indexArray.push(i);
        }
    }
    return indexArray;
}

// Test array
let arr1 = [4, 4, 7, 3, 1, 8, 3, 1, 8, 1];

// Output the indices of duplicate elements
console.log("Indices of duplicate elements:", duplicateIndexOf(arr1));
```
## Q. Function to check if a number exists in an array?
```js
function numCheck(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }
    }
    return false;
}

// Test array
let arr = [1, 5, 6, 4];

// Output the result of checking for a number
console.log("Is 12 in the array?", numCheck(arr, 12));
console.log("Is 1 in the array?", numCheck(arr, 1));

// Function to check if a number exists in both arrays
function twoArrNumCheck(arr, arr2, num) {
    let firstArr = numCheck(arr, num);
    let secondArr = numCheck(arr2, num);
    if (firstArr && secondArr) {
        return true;
    } else {
        return false;
    }
}

// Test arrays
let arr2 = [11, 5, 16, 4];
let result1 = twoArrNumCheck(arr, arr2, 5);
let result2 = twoArrNumCheck(arr, arr2, 11);

// Output the results
console.log("Is 5 in both arrays?", result1); // comment out any one console.log
// console.log("Is 11 in both arrays?", result2);
```
## Q. Function to find duplicate elements in an array?
```js
function duplicateArr(arr) {
    let duplicate = [];
    let compare = [];
    for (let num of arr) {
        if (!compare.includes(num)) {
            compare.push(num);
        } else {
            duplicate.push(num);
        }
    }
    return duplicate;
}

// Test array
let arr = [1, 1, 2, 2, 3, 4, 4, 6, 5, 5];

// Output the duplicate elements
console.log("Duplicate elements:", duplicateArr(arr));
```
## Q. Function to slice the first 'size' elements from an array?
```js
function sliceArrFirst(arr, size) {
    let sliced = arr.slice(0, size);
    return sliced;
}

// Test array and size
let sliced = sliceArrFirst([12, 3, 2, 4, 2, 46, 7], 3);

// Output the sliced array
console.log("Sliced array:", sliced);
```
## Q. Function to sum up elements greater than or equal to a specified number?
```js
function graterThan(arr, num) {
    let sum = 0;
    let filtered = arr.filter((e) => e >= num);
    for (let i = 0; i < filtered.length; i++) {
        sum += filtered[i];
    }
    return sum;
}

// Call the function with the array and number
let arr = graterThan([1, 2, 3, 6, 8, 9], 6);

// Output the sum
console.log("Sum of elements greater than or equal to 6:", arr);
```
## Q. Function to filter out elements greater than a specified number?
```js
function greaterThenElement(arr, num) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// OR

// Alternative function using the filter method
function greaterThenElement(arr, num) {
    let filtered = arr.filter((e) => e > num);
    return filtered;
}

// Test array and number
let arr = [2, 5, 4, 6, 7, 9, 1, 3];
let result = greaterThenElement(arr, 4);

// Output the filtered array
console.log("Elements greater than 4:", result);
```
## Q. Function to find the greatest number in an array?
```js
function greaterNumber(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

// Test array
let arr = [2, 1, 3, 4, 6, 7, 8, 9];

// Output the greatest number
console.log("Greatest number in the array:", greaterNumber(arr));
```
## Q. Function to find the intersection of two arrays?
```js
function intersection(arr, arr2) {
    let found = arr.filter(e => arr2.includes(e));
    return found;
}

// Test arrays
let arr = [2, 2];
let arr2 = [2, 2, 2, 3];

// Output the intersection of the arrays
console.log("Intersection of the arrays:", intersection(arr, arr2));
```
## Q. Function to slice the last 'size' elements from an array?
```js
function sliceArrLast(arr, size) {
    let slicedLast = arr.slice(arr.length - size, arr.length);
    return slicedLast;
}

// Test array and size
let slicedLast = sliceArrLast([12, 3, 2, 4, 2, 46, 7], 3);

// Output the sliced array
console.log("Sliced last elements of the array:", slicedLast);
```

## Q. Function to generate an array containing numbers from 1 to 'size'?

```js
function findArr(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(i + 1);
    }
    return arr;
}

// Test with size 7
let total = findArr(7);
console.log("Generated array:", total);
```
## Q. Function to find missing number ranges in an array?
```js
function notRange(num) {
    let result = [];
    let firstEntry = 0;
    let lastEntry = 0;
    let missingNum = [];

    // Find missing numbers
    for (let i = 1; i < num[num.length - 1]; i++) {
        if (!num.includes(i)) {
            missingNum.push(i);
        }
    }

    // Process missing numbers to find ranges
    for (let i = 0; i < missingNum.length; i++) {
        let element = missingNum[i];
        if (i === 0) {
            firstEntry = element;
        } else if (i === missingNum.length - 1 && lastEntry + 1 === element) {
            lastEntry = element;
            result.push(firstEntry + "->" + lastEntry);
        } else if (lastEntry + 1 !== element) {
            if (firstEntry !== lastEntry) {
                result.push(firstEntry + "->" + lastEntry);
            }
            firstEntry = element;
        }
        lastEntry = element;
    }
    return result;
}

// Test array
let num = [1, 2, 3, 4, 8, 9, 10, 14, 15, 16];

// Output the missing number ranges
console.log("Missing number ranges:", notRange(num));
```
## Q. Function to count the number of 'true' values in an array?
```js
function booleanValue(arr) {
    let filtered = arr.filter(Boolean).length;
    return filtered;
}

// Test array
let arr = [true, true, false, true, false, true, true];

// Output the count of 'true' values
console.log("Number of 'true' values:", booleanValue(arr));
```
## Q. Function to find the range fields in an array?
```js
function rangeFeild(num) {
    let result = [];
    let firstEntry = 0;
    let lastEntry = 0;

    for (let i = 0; i < num.length; i++) {
        let element = num[i];
        
        if (i === 0) {
            firstEntry = element;
        } else if (lastEntry + 1 !== element) {
            if (firstEntry !== lastEntry) {
                result.push(firstEntry + "->" + lastEntry);
            } else {
                result.push(firstEntry.toString());
            }
            firstEntry = element;
        }

        lastEntry = element;

        if (i === num.length - 1 && firstEntry !== lastEntry) {
            result.push(firstEntry + "->" + lastEntry);
        }
    }

    return result;
}

// Test array
let arr = [1, 2, 3, 4, 5, 7, 8, 9, 10, 13, 16, 17, 18, 20];

// Output the range fields
console.log("Range fields:", rangeFeild(arr));
```
## Q. Function to find the remaining elements in the range?
```js
function remaingElement(num) {
    let result = [];
    let max = Math.max(...num);

    for (let i = 1; i <= max; i++) {
        if (!num.includes(i)) {
            result.push(i);
        }
    }

    return result;
}

// Test array
let num = [1, 2, 3, 4, 5, 7, 8, 9, 11, 12, 15, 16, 17, 18, 20, 25];

// Output the remaining elements
console.log("Remaining elements:", remaingElement(num));
```
## Q. Function to find the smallest number in an array?
```js
function smallestNumber(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

// Test array
let arr = [727, 72, 83, 3, 33, 322, 9];

// Output the smallest number
console.log("Smallest number in the array:", smallestNumber(arr));
```
## Q. Function to check if a number is present in an array?
```js
// Function to check if arr is a subset of arr2
function subset(arr, arr2) {
    let result = true;
    for (let i = 0; i < arr.length; i++) {
        let found = numberCheck(arr2, arr[i]);
        if (found === false) {
            result = false;
            break; // If one element is not found, exit the loop and return false
        }
    }
    return result;
}

function numberCheck(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }
    }
    return false;
}

// Test array and subset
let arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log("Is [3,4] a subset of arr2?", subset([3, 4], arr2));
console.log("Is [13,14] a subset of arr2?", subset([13, 14], arr2));
```
 ## Q. Function to find unique elements from two arrays?
 ```js
function uniqueNo(arr1, arr2) {
    let newArr = [];
    let combined = arr1.concat(arr2);
    for (let i = 0; i < combined.length; i++) {
        if (!newArr.includes(combined[i])) {
            newArr.push(combined[i]);
        }
    }
    return newArr;
}

// Test arrays
let arr1 = [1, 2, 3, 4, 1, 2];
let arr2 = [5, 6, 1, 2, 1, 2];

// Output the unique elements
console.log("Unique elements from both arrays:", uniqueNo(arr1, arr2));
```
## Q. Function to calculate the area of a circle?
```js
function circleArea(radius) {
    let area = Math.PI * (radius * radius);
    return Math.round(area * 100) / 100;
}

// Calculate and output the area of a circle with radius 5
console.log(circleArea(5));
```

## Q.
```js
let arr = [23, 545, 66, 77, 3, 5, 88, 0];
let arrs = ['anoop', 'shahil', 'salu', 'aayush'];

let name = 'mahesh';
let age = 30;
let address = 'rawatbhata';
let male = true;
let fn = () => {
  return 'hello world cup'; // Return a message from the function
};

let person = [name, age, address, male, fn, { name: 'anoop' }];

let result = person[4](); // Call the function and store the result

console.log(result); // Output the result
```
## Q.
```js
var fruit = ["apple","banana"];

console.log(fruit.length) //2
```
## Q.
```js
const array = [1, 2, 3];
const value = 1;
const isInArray = array.includes(value);
console.log(isInArray);
```
## Q.
```js
function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}

console.log(factorial(5));
```
## Q.
```js
var fibonacci_series = function(n) {
  if (n === 1) {
    return [0, 1]; // Base case: return the Fibonacci sequence for n = 1
  } else {
    var s = fibonacci_series(n - 1); // Recursive call to get the Fibonacci sequence for n - 1
    s.push(s[s.length - 1] + s[s.length - 2]); // Add the next Fibonacci number to the sequence
    return s; // Return the updated Fibonacci sequence
  }
};

console.log(fibonacci_series(100)); // Print the Fibonacci series for n = 100
```
## Q.
```js
function gcd_two_numbers(x, y) {
  // Check if x and y are both numbers
  if ((typeof x !== 'number') || (typeof y !== 'number')) {
    return false; // If either x or y is not a number, return false
  }

  // Make sure x and y are non-negative
  x = Math.abs(x);
  y = Math.abs(y);

  // Euclidean algorithm to find the GCD
  while (y) {
    var t = y; // Store the current value of y in t
    y = x % y; // Update y to the remainder of x divided by y
    x = t; // Update x to the previous value of y
  }

  return x; // Return the GCD
}

console.log(gcd_two_numbers(98 , 56)); // Output the GCD of 98 and 56
```
## Q.
```js
function nthLargestElement(a, n) {
    // Sort the array 'a' in ascending order
    let a_ = a.sort((a, b) => {
        return a - b;
    });

    // Initialize a variable to store the nth largest element
    let largestNth;

    // Iterate over the sorted array
    for (let i = 0, len = a_.length; i < len; i += 1) {
        // When the index 'i' equals 'n', set 'largestNth' to the nth largest element
        if (i === n) {
            largestNth = a_[i - 1]; // Subtract 1 because arrays are zero-indexed
        }
    }

    // Return the nth largest element
    return largestNth;
}

// Test the function with the provided array and n = 3
console.log(nthLargestElement([43, 56, 22, 89, 87, 90, 99, 542], 3));
```
## Q.
```js
function lcm_two_numbers(x, y) {
    // Check if x and y are both numbers
    if ((typeof x !== 'number') || (typeof y !== 'number')) {
        return false; // If either x or y is not a number, return false
    }
    
    // Return 0 if either x or y is 0
    if (!x || !y) {
        return 0;
    }

    // Calculate the LCM using the formula: LCM = |x * y| / GCD(x, y)
    return Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
    // Ensure x and y are non-negative
    x = Math.abs(x);
    y = Math.abs(y);
    
    // Calculate the GCD using the Euclidean algorithm
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

console.log(lcm_two_numbers(15, 20)); // Output the LCM of 15 and 20
```
## Q.
```js
function lcm_two_numbers(x, y) {
    // Check if x and y are both numbers
    if ((typeof x !== 'number') || (typeof y !== 'number')) {
        return false; // If either x or y is not a number, return false
    }
    
    // Return 0 if either x or y is 0
    if (!x || !y) {
        return 0;
    }

    // Calculate the LCM using the formula: LCM = |x * y| / GCD(x, y)
    return Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
    // Ensure x and y are non-negative
    x = Math.abs(x);
    y = Math.abs(y);
    
    // Calculate the GCD using the Euclidean algorithm
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

console.log(lcm_two_numbers(15, 20)); // Output the LCM of 15 and 20
```
## Q.
```js
var date = new Date();
var year = date.getFullYear();

if (year % 4 === 0) {
    if (year % 100 !== 0 || year % 400 === 0) {
        console.log(year + " is a leap year");
    } else {
        console.log(year + " is not a leap year");
    }
} else {
    console.log(year + " is not a leap year");
}
```
## Q.
```js
function ifLeapYear(year) {
    if (year % 4 !== 0) {
        return false;
    } else if (year % 100 !== 0) {
        return true;
    } else if (year % 400 !== 0) {
        return false;
    } else {
        return true;
    }
}

console.log(ifLeapYear(2017));
```

## Q.
```js
function max_of_three(x, y, z) {
    let max_val = 0; // Declare max_val using let to ensure it's scoped to the function
    if (x > y) {
        max_val = x;
    } else {
        max_val = y;
    }
    if (z > max_val) {
        max_val = z;
    }
    return max_val;
}

console.log(max_of_three(3, 125, 10)); // Corrected to pass three arguments
```
## Q. Find filters out elements whose index is even?
```js
var array = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(array.filter(function(el, ind) {
    return ind % 2 === 0; // Returns true for even indices
}));
```
## Q. checking whether a number is a perfect number or not?
```js
function is_perfect(number) {
    if (number <= 0) {
        console.log("It is not a perfect number.");
        return;
    }

    var temp = 0;
    for (var i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }

    if (temp === number && temp !== 0) {
        console.log("It is a perfect number.");
    } else {
        console.log("It is not a perfect number.");
    }
}

is_perfect(2); // Output: "It is not a perfect number."
```
## Q. Reverse
```js
var arr = [20, 40, 80, 100];

console.log(arr.reverse());
// [100, 80, 40, 20]
```
## Q.
```js
let print1 = (value, v) => {
  console.log(arguments[0]); // Error: 'arguments' is not defined in arrow functions
}

function print() {
  console.log(arguments); // Outputs all arguments passed to the function
}

function square() {
  let x = arguments[0]; // Access the first argument passed to the function
  console.log(x * x); // Calculate the square of the first argument
}

square(2); // Outputs: 4 (square of 2)
```
## Q.
```js
let a = '12'; // a is a string containing the characters '1' and '2'
let b = 12;   // b is a number with the numeric value 12

if (a == b) {
  console.log('inside if'); // This line will not be executed because '12' (string) is not equal to 12 (number) with type coercion
} else {
  console.log('inside else'); // This line will be executed because '12' (string) is not equal to 12 (number)
}
```
## Q.
```js
function swap() {
    var x = 10;
    var y = 20;
    var tmp = x;
    x = y;
    y = tmp;
    alert("Value of X=" + x + " and value of Y=" + y);
}

swap();
```
