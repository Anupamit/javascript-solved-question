// function upperAndLower(sentence) {
//     let result= '';
//     let splitsentence=sentence.split('')
//     for (let i = 0; i < splitsentence.length/2; i++) {
//         result += splitsentence[i].toUpperCase()
//     }
//     for (let i = splitsentence.length/2; i < splitsentence.length; i++) {
//         result +=sentence[i].toLowerCase()
//     }
//     return result
// }
// let sentence="I am president fatTerLight"
// console.log(upperAndLower(sentence));

// function upperAndLower(sentence) {
//     let result= '';
//     for (let i = 0; i < sentence.length/2; i++) {
//         result += sentence[i].toUpperCase()
//     }
//     for (let i = sentence.length/2; i < sentence.length; i++) {
//         result +=sentence[i].toLowerCase()
//     }
//     return result
// }
// let sentence="I am president fatTerLight"
// console.log(upperAndLower(sentence));


    // break input sentance into words
    // go to each word
    // break each word in 2 parts
    // uppercase half (first part), lowercase second part(other half)
    // lc + '-' + uc
    // join words into sentance

function halfcapitalHalfLower(inputSenstance){
    let result = []
    let words = inputSenstance.split(' ')
    for(let i = 0; i<words.length; i++){
        let word = words[i]
        let firstHalf = word.substring(0, word.length/2).toUpperCase()
        let secondHalf = word.substring(word.length/2).toLowerCase()
        result.push(firstHalf+'-'+secondHalf)
    }
    return result.join(' ')
}
let inputSenstance="I am president"
console.log(halfcapitalHalfLower(inputSenstance));