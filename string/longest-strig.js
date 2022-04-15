function longestStringWord(sentence) {
    let breakSentence= sentence.split(' ')
    let sortedstring= breakSentence.sort((a,b)=> b.length - a.length)
    let from = sortedstring[0]
    return from
}
let sentence="I am factorylight president"
console.log(longestStringWord(sentence));

function longestStringWord(sentence) {
    let breakSentence= sentence.split(' ')
    let largest = ''
    for (let i = 0; i < breakSentence.length; i++) {
        if (breakSentence[i].length > largest.length) {
            largest = breakSentence[i]
        }
    }
    return largest
}
console.log(longestStringWord(sentence));
