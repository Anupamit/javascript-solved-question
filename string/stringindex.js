// let str = 'Life goes arounund the globe, your answer is globe'
// console.log(`${str} ${str.length}`); //length
// console.log(str,str.length); //length

// // let index = 4;
// // console.log(`${str.at(index)}`);// at

// let index=5;
// console.log(`${str.charAt(index)}`);//charAt
// console.log(`${str.charAt(16)}`);//charAt
// console.log(`${str.charAt(9)}`);//charAt
// console.log(`${str.charAt(20)}`);//charAt
// console.log(`${str.charAt(100)}`);//charAt
// console.log(str.charAt(19));//charAt

// let str1= 'sahil';
// let str2= 'rai';
// console.log(str1.concat(str2));//concat
// console.log(str1.concat(' ',str2));//concat
// console.log(str1.concat(',',str2));//concat
// console.log(str1.concat(' ',"kumar"));//concat

// console.log(str.endsWith('answer'));//endwith
// console.log(str.endsWith('answer', 41));//endwith
// console.log(str.endsWith('your', 41));//endwith
// console.log(str.endsWith('answer', 39));//endwith

// console.log(`${str.includes('globe')}`);
// console.log(str.includes('globe'));
// console.log(`${str.includes('globe') ? 'is' : 'is not'}`);//includes
// console.log(`${str.includes('fear') ? 'is' : 'is not'}`);

// let searchWord = 'globe';
// console.log(str.indexOf(searchWord));
// console.log(`${searchWord} ${str.indexOf(searchWord)}`);//indexof

// console.log(str.lastIndexOf(searchWord));
// console.log(`${searchWord} ${str.lastIndexOf(searchWord)}`);//lastindexof

// console.log(searchWord.padEnd(20,'*'));
// console.log(searchWord.padEnd(10));
// console.log(searchWord.padEnd(20,'9')); //padEnd


// console.log(searchWord.padStart(20,'*')); //padstart
// console.log(searchWord.padStart(20,'9')); //padstarts
// let number = '773733209880428'
// let last4digit = number.slice(-4)
// let result=last4digit.padStart(number.length,'*')
// console.log(result); //padsart

// console.log(searchWord.repeat(10)); //repeat

// console.log(str.replace('globe','earth')); //replace

// // console.log(str.replaceAll('globe','earth')); //replace all

// console.log(str.slice(19));
// console.log(str.slice(10,19));
// console.log(str.slice(-8));
// console.log(str.slice(-8, -6)); //slice

// console.log(str.split(''));
// console.log(str.split('', 6));
// let word = str.split(' ')
// console.log(word[4]);
// console.log(str.split(' '));
// console.log(str.split()); //split

// console.log(str.startsWith('Life'));
// console.log(str.startsWith('life'));
// console.log(str.startsWith('Life', 0));
// console.log(str.startsWith('Life', 4)); //startwith

// let something = 'CaLculator'
// console.log(something.substring(1,4));
// console.log(something.substring(3)); //substring

// console.log(something.toLocaleLowerCase()); //toLocaleLowerCase

// console.log(something.toLocaleUpperCase()); //toLocaleUpperCase

// console.log(something.toLowerCase()); //toLowerCase

// console.log(something.toUpperCase()); //toUpperCase

// let some= '  sahil kumar  '
// console.log(some.trim());
// console.log(some.trimEnd());
// console.log(some.trimStart());

// let xyz= new String("Hello World")
// console.log(xyz);
// console.log(xyz.toString()); //toString

// console.log(Object.is(25,25));
// console.log(Object.is(25,24));

// console.log(Object.is('foo','faa'));
// console.log(Object.is('foo','foo'));


// let sentence = 'Strings are useful for holding data that can be represented in text form'
// //let getResult =sentence.split(' ').map(e => e + '-').join('')
// //console.log(getResult);
// console.log(sentence.replaceAll(" ","-"));


// function reverse(sentence) {
//     let first=sentence.split('')
//     let second=first.reverse()
//     let third=second.join('')
//     return third
// }
// console.log(reverse(sentence));

// let sentence="I am president"
// let getResult=sentence.split('').reverse().join('')
// console.log(getResult);

// let reverseString = sentence.split(' ').map(i => i.split('').reverse().join('')).join(' ')
// console.log(reverseString);

// function reverseString(sentence) {
//     let breakSentence = sentence.split(' ')
//     let maped =breakSentence.map(i => i.split('').reverse().join(''))
//     let alltogether = maped.join(' ')
//     return alltogether
// }
// function reverseString(sentence) {
//     let breakSentence = sentence.split(' ')
//     let maped =breakSentence.map(function(item) {
//         let element=item.split('').reverse().join('')
//         return element;
//     })
//     let alltogether = maped.join(' ')
//     return alltogether
// }
// let sentence="I am president"
// console.log(reverseString(sentence));

// let sentence="I am fatterlight president"
// let result = sentence.split(' ').sort((a,b)=> b.length - a.length)[0]
// console.log(result);

// function longestStringWord(sentence) {
//     let breakSentence= sentence.split(' ')
//     let largest = ''
//     for (let i = 0; i < breakSentence.length; i++) {
//         if (breakSentence[i].length > largest.length) {
//             largest = breakSentence[i]
//         }
//     }
//     return largest
// }
// let sentence="I am president fatterlight"
// console.log(longestStringWord(sentence));

// let sentence="i am the presidents";
// let splitsentence =sentence.split(' ')
// let lengthofstr=splitsentence.length;
// let halflengthstr= lengthofstr/2;
// let upperCasestr=splitsentence.substring(0,halflengthstr)
// let lowerCasestr=splitsentence.substring(halflengthstr)
// let newUppercasestr=upperCasestr.toUpperCase()
// let newlowerCasestr=lowerCasestr.toLowerCase()
// let result=newUppercasestr +'-'+ lowerCasestr
// console.log(result);


