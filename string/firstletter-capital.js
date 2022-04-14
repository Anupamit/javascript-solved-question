function firstLetter(sentence) {
    let breakSentence=sentence.split(' ')
    for (let i = 0; i < breakSentence.length; i++) {
        breakSentence[i]=breakSentence[i][0].toUpperCase()
    }
    let result =  breakSentence.join(" ")
    return result
}
let sentence="i am the presiDent"
console.log(firstLetter(sentence));

// function firstUpper(sentence) {
//     let capitalname =sentence.charAt(0).toUpperCase() + sentence.substring(1)
//     return capitalname
// }


// function firstUpper(sentence) {
//     let capitalname =sentence[0].toUpperCase() + sentence.substring(1)
//     return capitalname
// }


// function firstUpper(sentence) {
//     let capitalname =sentence[0].toUpperCase() + sentence.slice(1)
//     return capitalname
// }

//console.log(firstUpper(sentence));
