# Conditional

## Q.Even or Odd ?
```js
// change the value of `number` to test your if...else statement
var number = 2;

if (number % 2 === 0/* your conditional goes here */) {
    console.log("even");
} else {
    console.log("odd");
}

```

## Q. Musical Groups ?
```js

var musicians = 1;

// your code goes here
if (musicians < 1) {
    console.log("not a group");
}
else if(musicians === 1) {
    console.log("solo");
}
else if(musicians === 2) {
    console.log("duet");
}
else if(musicians === 3) {
    console.log("trio");
}
else if(musicians === 4) {
    console.log("quartet");
}
else {
    console.log("this is a large group");
}
```

## Q. Change the value of `room` and `suspect` to test your code ?
```js
var room = "ballroom";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = false;

if (room === "gallery") {
    weapon = "trophy";
      if (suspect === "Ms. Van Cleve") {
      solved = true; 
    }
} else if (room === "ballroom") {
    weapon = "poison"; 
        if (suspect === "Mr. Kalehoff") {
        solved = true;
        }
} else if (room === "billiards room") {
    weapon = "pool stick";
        if (suspect === "Mrs. Sparr") {
        solved = true;
        }
} else {
    weapon = "knife";
      if (suspect === "Mr. Parkes") {
      solved = true;
      }
}
if (solved) {
	console.log(suspect +" did it in the "+ room + " with the "+ weapon +"!");
}
```

## Q. Checking Your Balance ?
```js
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.0;
var checkBalance = true;
var isActive = true;

// your code goes here
if (checkBalance === false) {
	console.log('Thank you. Have a nice day!');
} else if (isActive === true && balance > 0) {
	console.log('Your balance is $' + balance.toFixed(2) + '.');
} else if (!isActive) {
	console.log('Your account is no longer active.');
} else if (balance === 0) {
	console.log('Your account is empty.');
} else if (balance < 0) {
	console.log('Your balance is negative. Please contact bank.');
}
```

## Q.Write a single if statement that logs out the message ?
```js
/*
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 */

var flavor = "vanilla";
var vessel = "cone";
var toppings = "sprinkles";

if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")) {
    console.log("I\'d like two scoops of "+ flavor +" ice cream in a "+ vessel +" with "+ toppings +".");
}

```

## Q. What do I Wear ? 
```js

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 28
var shirtLength = 33;
var shirtSleeve = 10.13;

// your code goes here
if (((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38))) {
  console.log("S"); 
}else if (((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength< 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63))){
  console.log("M");
}else if (((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength< 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88))){
  console.log("L");
}else if (((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength< 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63))){
  console.log("XL");
}else if (((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength< 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13))){
  console.log("2XL");
}else if (((shirtWidth >= 28) && (shirtLength >= 34 ) && (shirtSleeve >= 10.13 ))){
  console.log("3XL");
}else {
  console.log("N/A");
}
```

## Q. Navigating the Food Chain ?
```js
/*
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 */
var eatsPlants = true;
var eatsAnimals = true;

var category = eatsPlants && eatsAnimals ? "omnivore": eatsPlants ? "herbivore" : eatsAnimals ? "carnivore" : undefined; 

console.log(category);
```

## Q. Back to School ?
```js

// change the value of `education` to test your code
var education = "a Master's degree";
// set the value of this based on a person's education
var salary;
switch (education) {
  case "no high school diploma":
    salary ="$25,636";
    break;
  case "a high school diploma":
    salary ="$35,256";
    break;
  case"an Associate's degree" :
    salary ="$41,496";
    break;
  case "a Bachelor's degree":
    salary ="$59,124";
    break;
  case "a Master's degree": 
    salary ="$69,732";
    break;
  case "a Professional degree":
    salary ="$89,960";
    break;
  case "a Doctoral degree":
    salary="$84,396";
    break;
}
console.log("In 2015, a person with " + education +" earned an average of "+ salary+"/year.");
```

