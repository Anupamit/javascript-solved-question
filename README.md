# Javascript-Basic-Codeing-Questions

## Q.1 Default Parametrs:**
```js
function add(x = 10, y = 20) {
  console.log(x + y);
}
add(10, 30); // 40
```
## Q.2 What is arrow function useing this?
```js
let person={
    name: 'Anupam',
    actions : ['hockey','football','chess'],
    printAction (){
        this.actions.forEach((action)=>{
            let str = this.name + ' like to play ' + action
            console.log(str);
        })
    }
}
    person.printAction()  
```
## Q.3  Destructing Assignment:
```js
const phone = {
  title: "iPhone",
  price: 999,
  description: "The iPhone is a smartphone developed by Apple"
};
console.log(phone.title);
// Destructing Assignment
---------------------------------------------------------------------
const { title, price, description } = {
  title: "iPhone",
  price: 999,
  description: "The iPhone is a smartphone developed by Apple"
};
console.log(title); // iPhone
console.log(price); // 999
console.log(description); // The iPhone is a smartphone developed by Apple
```

## Q.4 Expalin
var allows variables to be hoisted, meaning they can be referenced in code before they are declared. let and const will not allow this, instead throwing an error.
```js
console.log(foo); // undefined
var foo = 'foo';

console.log(baz); // ReferenceError: can't access lexical declaration 'baz' before initialization
let baz = 'baz';

console.log(bar); // ReferenceError: can't access lexical declaration 'bar' before initialization
const bar = 'bar';
```
## Q.5 Explain
Redeclaring a variable with var will not throw an error, but 'let' and 'const' will.
```js
var foo = 'foo';
var foo = 'bar';
console.log(foo); // "bar"

let baz = 'baz';
let baz = 'qux'; // Uncaught SyntaxError: Identifier 'baz' has already been declared
```
## Q.6 Explain
let and const differ in that let allows reassigning the variable's value while const does not.
```js
// This is fine.
let foo = 'foo';
foo = 'bar';

// This causes an exception.
const baz = 'baz';
baz = 'qux';
```
## Q.7 Explain
The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
```js
var x = 5; // global
function someThing(y) {
  var x = 3; // local
  var z = x + y;
  console.log(z);
}
someThing(4); // 7
console.log(x); // 5
-------------------------
var x = 5; // global
function someThing(y) {
  x = 1; // still global!
  var z = x + y;
  console.log(z);
}
someThing(4) // 5
console.log(x) // 1
```
Undeclared Variables like: x = 1 is accessible in: (Block scope - Function scope - Global scope)

## Q.8 How do you swap variables using Destructuring Assignment?
```js
var x = 10, y = 20;
[x, y] = [y, x];
console.log(x); // 20
console.log(y); // 10
```
## Q.9 Explain
```js
[...'Hello']
Output: ['H', 'e', 'l', 'l', 'o']
```
 The string is an iterable type and the spread operator with in an array maps every character of an iterable to one element. Hence, each character of a string becomes an element within an Array.

## Q.10 Explain
```js
function mul (x) {
  return function (y) { // anonymous function
    return function (z) { // anonymous function
      return x * y * z;
    };
  };
}
console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48
```
## Q.11 How can we empty the array above?
```js
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList = []; // Empty the array
console.log(anotherArrayList); // Output ['a', 'b', 'c', 'd', 'e', 'f']

var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList.length = 0; // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []

var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList.splice(0, arrayList.length); // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []
```
## Q.12 Explain
```js
var output = (function(x) {
  delete x;
  return x;
})(0);

console.log(output);//0
```
The code above will output 0 as output. delete operator is used to delete a property from an object. Here x is not an object, it's a local variable. delete operator doesn't affect local variables.

## Q.13 Explain
```js
var x = 1;
var output = (function() {
  delete x;
  return x;
})();

console.log(output);
```
The code above will output 1 as output. delete operator is used to delete a property from an object. Here x is not an object it's global variable of type number.

## Q.14 Explain
```js
var x = { foo : 1};
var output = (function() {
  delete x.foo;
  return x.foo;
})();

console.log(output);  //Undefine
```
The code above will output undefined as output. delete operator is used to delete a property from an object. Here x is an object which has foo as a property and from a self-invoking function, we are deleting the foo property of object x and after deletion, we are trying to reference deleted property foo which result undefined.

## Q.15 Explain
```js
var Employee = {
  company: 'xyz'
}
var emp1 = Object.create(Employee);
delete emp1.company
console.log(emp1.company); //xyz
```
The code above will output `xyz` as output. Here `emp1` object got company as **prototype** property. delete operator doesn't delete prototype property.
## Q.16 Explain
```js
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
console.log(trees) //[ 'redwood', 'bay', 'cedar', <1 empty item>, 'maple' ]
```
this is just way of displaying an uninitialized index of an array in chrome.
## Q.17 Explain
```js
var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];
console.log(trees.length);
```
## Q.18 Explain
```js
var bar = true;
console.log(bar + 0);   //1+0=1
console.log(bar + "xyz");  //true+xyz=truexyz  (Concatenation)
console.log(bar + true);  //1+1=2
console.log(bar + false);  //1+0=1
```
## Q.19 Explain
```js
var z = 1, y = z = typeof y;
console.log(y); //Undefine
```
## Q.20 Explain
```js
var foo = function bar() { return 12; };
typeof bar();  //Reference Error
```
## Q.21 Explain
```js
var foo = function() {
  console.log("Hi I am inside Foo")
}
foo() //run-time and is called a function expression,

function bar () {
  console.log("Hi I am inside bar");
}
bar() //parse time and is called a function statement.
```
## Q.22 Explain
```js
bar();
(function abc(){console.log('something')})();
function bar(){console.log('bar got called')};
// bar got called
// something
```
Since the function is called first and defined during parse time the JS engine will try to find any possible parse time definitions and start the execution loop which will mean function is called first even if the definition is post another function.
## Q.23 Explain
```js
var counterArray = {
  A : 3,
  B : 4
};
counterArray["C"] = 1;
console.log(Object.keys(counterArray).length); //3
```
## Q.24 Difference between Function, Method and Constructor calls in JavaScript.
```js
function helloWorld(name) {
  return "hello world, " + name;
}
// Normal Function
helloWorld("JS Geeks"); // "hello world JS Geeks"

var obj = {
  helloWorld : function() {
    return "hello world, " + this.name;
  },
  name: 'John Carter'
}
//Method
obj.helloWorld(); // // "hello world John Carter"

var obj2 = {
  helloWorld : obj.helloWorld,
  name: 'John Doe'
}

obj2.helloWorld(); // "hello world John Doe"

function Employee(name, age) {
  this.name = name;
  this.age = age;
}
// Constructor
var emp1 = new Employee('John Doe', 28);
emp1.name; // "John Doe"
emp1.age; // 28
```
## Q.26 Example of IIFE  (Immediately Invoked Function Expression)?
```js
(function() {
  console.log("Hi, I'm IIFE!");
})(); //Hi, I'm IIFE!

var result = (function myIIFEFunc(param1) {
  console.log("Hi, I'm IIFE, " + param1);
  return 1;
})("Yuri");
// Hi, I'm IIFE, Yuri!
// result variable will contain 1
```
 the two () braces, this is how we run the function we just declared.
 ```js
 ~function(){console.log("hi I'm IIFE")}()
!function(){console.log("hi I'm IIFE")}()
+function(){console.log("hi I'm IIFE")}()
-function(){console.log("hi I'm IIFE")}()
(function(){console.log("hi I'm IIFE")}());
var i = function(){console.log("hi I'm IIFE")}();
true && function(){ console.log("hi I'm IIFE") }();
0, function(){ console.log("hi I'm IIFE") }();
new function(){ console.log("hi I'm IIFE") }
new function(){ console.log("hi I'm IIFE") }()
```
 
## Q.27 Fix this and print 01234?
```js
var arr = [10, 32, 65, 2];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}
//For ES6, you can just replace var i with let i that print all iteration correctly
//The index of this number is: 4
//The index of this number is: 4
//The index of this number is: 4
//The index of this number is: 4
var arr = [10, 32, 65, 2];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function(i) {
    return function () {
      console.log('The index of this number is: ' + i)
    };
  }(i), 3000);
}
The index of this number is: 0
The index of this number is: 1
The index of this number is: 2
The index of this number is: 3

var arr = [10, 32, 65, 2];
arr.forEach(function(ele, i) {
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
})
```
## Q.28 Write code for merge two JavaScript Object dynamically?
```js
var person = {
	name : 'John',
	age  : 24
}

var address = {
	addressLine1 : 'Some Location x',
	addressLine2 : 'Some Location y',
	city : 'NewYork'
} 
let merge = Object.assign(person, address);
console.log(merge);
```
**Passing values by reference vs by value**
## Q.29 Explain?
```js
var strA = "hi there";
var strB = strA;
strB="bye there!";
console.log (strA)
// The output will be 'hi there' because we're dealing with strings here. Strings are passed by value, that is, copied.
```
## Q.30 Explain?
```js
var objA = {prop1: 42};
var objB = objA; 
objB.prop1 = 90;
console.log(objA) 
//objA and objB point to the same object in memory.
```
## Q.31 Explain?
```js
var objA = {prop1: 42};
var objB = objA;
objB = {};
console.log(objA)
// {prop1: 42}
```
## Q.32 Explain?
```js
var arrA = [0,1,2,3,4,5];
var arrB = arrA;
arrB[0]=42;
console.log(arrA)
//[42,1,2,3,4,5].
```
## Q.33 Explain?
```js
var arrA = [0,1,2,3,4,5];
var arrB = arrA.slice();
arrB[0]=42;
console.log(arrA)
//[0,1,2,3,4,5]
```
The slice function copies all the elements of the array returning the new array
## Q.34 Explain?
```
var arrA = [{prop1: "value of array A!!"},  {someProp: "also value of array A!"}, 3,4,5];
var arrB = arrA;
arrB[0].prop1=42;
console.log(arrA);
// [{prop1: 42}, {someProp: "also value of array A!"}, 3,4,5].
```
**Hoisting**
## Q.35 Explain?
```js
console.log(employeeId);
//Reference error
```
## Q.36 Explain?
```js
console.log(employeeId);
var employeeId = '19000'
//Undefine

console.log(employeeId);
let employeeId = '19000'
// Reference Error

console.log(employeeId);
const employeeId = '19000'
//Reference Error
```
## Q.37 Explain?
```js
var employeeId = '1234abe';
(function(){
	console.log(employeeId);
	var employeeId = '122345';
})();
// Undefine
```
## Q.38 Explain?
```js
var employeeId = '1234abe';
(function() {
	console.log(employeeId);
	var employeeId = '122345';
	(function() {
		var employeeId = 'abc1234';
	}());
}());
//Undefine
```
## Q.39 Explain?
```js
(function() {
	console.log(typeof displayFunc);
	var displayFunc = function(){
		console.log("Hi I am inside displayFunc");
	}
}());
//Undefine
```
## Q.40 Explain?
```js
function foo(){
	employeeId = '123bcd';
	return;
}
foo();
console.log(employeeId);
//123bcd
```
## Q.41 Explain?
```js
var employeeId = 'abc123';
function foo() {
	employeeId = '123bcd';
	return;

	function employeeId() {}
}
foo();
console.log(employeeId);
//abc123
```
## Q.42 Explain?
```js
var employeeId = 'abc123';
function foo() {
	employeeId();
	return;

	function employeeId() {
		console.log(typeof employeeId);
	}
}
foo();
// function
```
## Q.43 Explain?
```js
function foo() {
	employeeId();
	var product = 'Car'; 
	return;

	function employeeId() {
		console.log(product);
	}
}
foo();
//Undefine
```
## Q.44 Explain?
```js
(function foo() {
	bar();

	function bar() {
		abc();
		console.log(typeof abc);
	}

	function abc() {
		console.log(typeof bar);
	}
}());
//Function, Function
```
**Object**
## Q.45 Explain?
```js
(function() {
	'use strict';

	var person = {
		name: 'John'
	};
	person.salary = '10000$';
	person['country'] = 'USA';

	Object.defineProperty(person, 'phoneNo', {
		value: '8888888888',
		enumerable: true
	})

	console.log(Object.keys(person)); 
})();
//["name", "salary", "country", "phoneNo"]
```
## Q.46 Explain?
```js
(function() {
	'use strict';

	var person = {
		name: 'John'
	};
	person.salary = '10000$';
	person['country'] = 'USA';

	Object.defineProperty(person, 'phoneNo', {
		value: '8888888888',
		enumerable: false
	})

	console.log(Object.keys(person)); 
})();
//[ 'name', 'salary', 'country' ] also we delete enumerable then show threeof these
```
## Q.47 Explain?
```js
(function() {
	var objA = {
		foo: 'foo',
		bar: 'bar'
	};
	var objB = {
		foo: 'foo',
		bar: 'bar'
	};
	console.log(objA == objB);
	console.log(objA === objB);
}());
//False,false
```
## Q.48 Explain?
```js
(function() {
	var objA = new Object({foo: "foo"});
	var objB = new Object({foo: "foo"});
	console.log(objA == objB);
	console.log(objA === objB);
}());
//false,false
```
## Q.49 Explain?
```js
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = Object.create(objA);
	console.log(objA == objB);
	console.log(objA === objB);
}());
//false,false
```
## Q.50 Explain?
```js
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = Object.create(objA);
	console.log(objA.toString() == objB.toString());
	console.log(objA.toString() === objB.toString());
}());
//true,true
```
## Q.51 Explain?
```js
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = objA;
	console.log(objA == objB);
	console.log(objA === objB);
	console.log(objA.toString() == objB.toString());
	console.log(objA.toString() === objB.toString());
}());
//true,true,true,true
```
## Q.52 Explain?
```js
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = objA;
	objB.foo = 'bar';
	console.log(objA.foo);
	console.log(objB.foo);
}());
//bar,bar
```
## Q.53 Explain?
```js
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = objA;
	objB.foo = 'bar';

	delete objA.foo;
	console.log(objA.foo);
	console.log(objB.foo);
}());
//foo,foo
```
## Q.54 Explain?
```js
(function() {
	var objA = {
		foo: 'foo'
	};
	var objB = objA;
	objB.foo = 'bar';

	delete objA.foo;
	console.log(objA.foo);
	console.log(objB.foo);
}());
//undefine,undefine
```
**Array**
## Q.55 Explain?
```js
(function() {
	var array = new Array('100');
	console.log(array);
	console.log(array.length);
}());
//['100'],1
```
## Q.56 Explain?
```js
(function() {
	var array1 = [];
	var array2 = new Array(100);
	var array3 = new Array(['1',2,'3',4,5.6]);
	console.log(array1);//[]
	console.log(array2);//[ <100 empty items> ]
	console.log(array3);//[ [ '1', 2, '3', 4, 5.6 ] ]
	console.log(array3.length);//1
}());
```
## Q.57 Explain?
```js
(function () {
  var array = new Array('a', 'b', 'c', 'd', 'e');
  array[10] = 'f';
  console.log(array);//[ 'a', 'b', 'c', 'd', 'e', <5 empty items>, 'f' ]
  delete array[10];
  console.log(array);//[ 'a', 'b', 'c', 'd', 'e', <6 empty items> ]
  console.log(array.length);//11
}());
```
## Q.58 Explain?
```js
(function(){
	var animal = ['cow','horse'];
		animal.push('cat');
		animal.push('dog','rat','goat');
		console.log(animal.length);
})();
//6
```
## Q.59 Explain?
```js
(function(){
	var animal = ['cow','horse'];
		animal.push('cat');
		animal.unshift('dog','rat','goat');
		console.log(animal);
})();
//[ 'dog', 'rat', 'goat', 'cow', 'horse', 'cat' ]
```
## Q.60 Explain?
```js
(function(){
	var array = [1,2,3,4,5];
	console.log(array.indexOf(2));//1
	console.log([{name: 'John'},{name : 'John'}].indexOf({name:'John'}));//-1
	console.log([[1],[2],[3],[4]].indexOf([3]));//-1
	console.log("abcdefgh".indexOf('e'));//4
})();
```
## Q.60 Explain?
```js
(function(){
	var array = [1,2,3,4,5,1,2,3,4,5,6];
	console.log(array.indexOf(2));//1
	console.log(array.indexOf(2,3));//6
	console.log(array.indexOf(2,10));//-1
})();
```
## Q.61 Explain?
```js
(function(){
	var numbers = [2,3,4,8,9,11,13,12,16];
	var even = numbers.filter(function(element, index){
		return element % 2 === 0; 
	});
	console.log(even);//[ 2, 4, 8, 12, 16 ]

	var containsDivisibleby3 = numbers.some(function(element, index){
		return element % 3 === 0;
	});

	console.log(containsDivisibleby3);//true	
})();
```
## Q.62 Explain?
```js
(function(){
	var containers = [2,0,false,"", '12', true];
	var containers = containers.filter(Boolean);
	console.log(containers);//[ 2, '12', true ]
	var containers = containers.filter(Number);
	console.log(containers);//[ 2, '12', true ]
	var containers = containers.filter(String);
	console.log(containers);//[ 2, '12', true ]
	var containers = containers.filter(Object);
	console.log(containers)://[ 2, '12', true ]	
})();
```
## Q.63 Explain?
```js
(function(){
	var list = ['foo','bar','john','ritz'];
	    console.log(list.slice(1));	//[ 'bar', 'john', 'ritz' ]
	    console.log(list.slice(1,3));//[ 'bar', 'john' ]
	    console.log(list.slice());//['foo','bar','john','ritz']
	    console.log(list.slice(2,2));//[]
	    console.log(list);//['foo','bar','john','ritz']		
})();
```
## Q.64 Explain?
```js
(function(){
	var list = ['foo','bar','john'];
	    console.log(list.splice(1));//['bar','john']	
	    console.log(list.splice(1,2));//[]
	    console.log(list);// ['foo']		
})();
```
## Q.65 Explain?
```js
(function(){
	var arrayNumb = [2, 8, 15, 16, 23, 42];
	arrayNumb.sort();
	console.log(arrayNumb);//[15,16,2,23,42,8]
})();
```
**Function**
## Q.66 Explain?
```js
function funcA(){
	console.log("funcA ", this);
	(function innerFuncA1(){
		console.log("innerFunc1", this);
		(function innerFunA11(){
			console.log("innerFunA11", this);
		})();
	})();
}
	
console.log(funcA());//funcA Window {...} innerFunc1 Window {...} innerFunA11 Window {...}
````
## Q.67 Explain?
```js
var obj = {
	message: "Hello",
	innerMessage: !(function() {
		console.log(this.message);//undefine
	})()
};
	
console.log(obj.innerMessage);//true
```
## Q.68 Explain?
```js
var obj = {
	message: "Hello",
	innerMessage: function() {
		return this.message;
	}
};
	
console.log(obj.innerMessage());//Hello
```
## Q.69 Explain?
```js
var obj = {
  message: 'Hello',
  innerMessage: function () {
    (function () {
      console.log(this.message);;//undefine
    }());
  }
};
console.log(obj.innerMessage());//undefine
```
## Q.70 Explain?
```js
var obj = {
  message: 'Hello',
  innerMessage: function () {
  	var self = this;
    (function () {
      console.log(self.message);//Hello
    }());
  }
};
console.log(obj.innerMessage());//undefine
```
## Q.71 Explain?
```js
function myFunc(){
	console.log(this.message);//undefine
}
myFunc.message = "Hi John";
	
console.log(myFunc());//undefine
```
## Q.72 Explain?
```js
function myFunc(){
	console.log(myFunc.message); //Hi john
}
myFunc.message = "Hi John";
	
console.log(myFunc()); //undefine
```
## Q.73 Explain?
```js
function myFunc() {
  myFunc.message = 'Hi John';
  console.log(myFunc.message);//Hi John
}
console.log(myFunc());//Undefine
```
## Q.74 Explain?
```js
function myFunc(param1,param2) {
  console.log(myFunc.length);
}
console.log(myFunc());
console.log(myFunc("a","b"));
console.log(myFunc("a","b","c","d"));
//2
//undefined
//2
//undefined
//2
//undefined
```
**Object Oriented**
## Q.75 Explain?
```js
function Person(name, age){
	this.name = name || "John";
	this.age = age || 24;
	this.displayName = function(){
		console.log(this.name);//John
	}
}

Person.name = "John";
Person.displayName = function(){
	console.log(this.name); //Person
}

var person1 = new Person('John');
	person1.displayName();
	Person.displayName();
```
**Scopes**
## Q.76 Explain?
```js
function passWordMngr() {
	var password = '12345678';
	this.userName = 'John';
	return {
		pwd: password
	};
}
// Block End
var userInfo = passWordMngr();
console.log(userInfo.pwd);//12345678
console.log(userInfo.userName);//undeifne
```
## Q.77 Explain?
```js
var employeeId = 'aq123';
function Employee() {
  this.employeeId = 'bq1uy';
}
console.log(Employee.employeeId);//undefine
```
## Q.78 Explain?
```js
var employeeId = 'aq123';
function Employee() {
	this.employeeId = 'bq1uy';
}
console.log(new Employee().employeeId);//bq1uy
Employee.prototype.employeeId = 'kj182';
Employee.prototype.JobId = '1BJKSJ';
console.log(new Employee().JobId);//1BJKSJ
console.log(new Employee().employeeId);//bq1uy
```
**Call, Apply, Bind**
## Q.79 Explain?
```js
(function() {
	var greet = 'Hello World';
	var toGreet = [].filter.call(greet, function(element, index) {
		return index > 5;
	});
	console.log(toGreet);
}());
```
## Q.80 Explain?
```js
(function greetNewCustomer() {
	console.log('Hello ' + this.name);//Hello John
}.bind({
	name: 'John'
})());
```
**Return Statement**
## Q.81 Explain?
```js
(function(){
	function sayHello(){
		var name = "Hi John";
		return 
		{
			fullName: name
		}
	}
	console.log(sayHello().fullName);
})();
//Uncaught TypeError: Cannot read property 'fullName' of undefined
```
## Q.82 Explain?
```js
function getNumber(){
	return (2,4,5);
}

var numb = getNumber();
console.log(numb); //5
```
## Q.83 Explain?
```js
function getNumber(){
	return;
}

var numb = getNumber();
console.log(numb);//undefine
```
## Q.84 Explain?
```js
function mul(x){
	return function(y){
		return [x*y, function(z){
			return x*y + z;
		}];
	}
}

console.log(mul(2)(3)[0]);//6
console.log(mul(2)(3)[1](4));//10
```
## Q.85 Explain?
```js
function mul(x) {
	return function(y) {
		return {
			result: x * y,
			sum: function(z) {
				return x * y + z;
			}
		};
	};
}
console.log(mul(2)(3).result);//6
console.log(mul(2)(3).sum(4));//10
```
## Q.86 Explain?
```js
function mul(x) {
	return function(y) {
		return function(z) {
			return function(w) {
				return function(p) {
					return x * y * z * w * p;
				};
			};
		};
	};
}
console.log(mul(2)(3)(4)(5)(6));//720
```
## Q.87 Explain?
```js
function getName1(){
	console.log(this.name);//tony
}

Object.prototype.getName2 = () =>{
	console.log(this.name)//undefine
}

let personObj = {
	name:"Tony",
	print:getName1
}

personObj.print();
personObj.getName2();
```
## Q.88 Explain?
```js
console.log("I want pizza"[0]);//I
```
## Q.89 Explain?
```js
function sum(num1, num2 = num1) {
  console.log(num1 + num2);//20
}

sum(10);
```
## Q.90 Explain?
```
let newList = [1, 2, 3].push(4);
console.log(newList.push(5));//TypeError
```
The .push method returns the new length of the array, not the array itself.
## Q.91 Explain?
```
function giveLydiaPizza() {
  return "Here is pizza!";
}

const giveLydiaChocolate = () =>
  "Here's chocolate... now go hit the gym already.";

console.log(giveLydiaPizza.prototype); //{}
console.log(giveLydiaChocolate.prototype);//undefine
```
## Q.92 Explain?
```js
const person = {
  name: "Lydia",
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y);  //name, Lydia ,age ,21
}
```
## Q.93 Explain?
```js
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

console.log(getItems(["banana", "apple"], "pear", "orange"));  //["banana", "apple", "pear", "orange"];
```
`...args` is a rest parameter. The rest parameter's value is an array containing all remaining arguments, and can only be the last parameter!
## Q.94 Explain?
```js
function nums(a, b) {
  if (a > b) console.log("a is bigger");
  else console.log("b is bigger");
  return;
  a + b;
}

console.log(nums(4, 2));  //a is bigger,undefine
console.log(nums(1, 2));  //b is bigger,undefine
```
## Q.95 Explain?
```js
class Person {
  constructor() {
    this.name = "Lydia";
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = "Sarah";
  }
};

const member = new Person();
console.log(member.name); //Sarah
```
We can set classes equal to other classes/function constructors. In this case, we set Person equal to AnotherPerson. The name on this constructor is Sarah, so the name property on the new Person instance member is "Sarah".
