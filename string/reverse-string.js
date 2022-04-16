let sentence="we are president"
let getResult=sentence.split('').reverse('').join('')
console.log(getResult);
function reverse(sentence) {
    let first=sentence.split('')
    let second=first.reverse()
    let third=second.join('')
    return third
}
console.log(reverse(sentence));
function reverse(sentence) {
    let result = ''
    for (let i = sentence.length -1; i>=0; i--) {
        result +=sentence[i]
    }
    return result
}
console.log(reverse(sentence));

let result = sentence.split(' ')
console.log(result);
