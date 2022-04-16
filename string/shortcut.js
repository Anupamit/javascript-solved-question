function sortcut(sentence) {
    let splitsentence= sentence.split(' ')
    for (let i = 0; i < splitsentence.length; i++) {
        splitsentence[i]=splitsentence[i][0].toUpperCase()
    }
    return splitsentence.join('.')
}

let sentence ="anoop kumar rai"
console.log(sortcut(sentence));