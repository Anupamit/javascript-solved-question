// let sentence= 'aaabaa fsa asdf fss'
// let splitsentence= sentence.split('')
// let result=[]
// let count= splitsentence.forEach((i) => result[i] = (result[i] || 0) + 1);
// console.log(result);

function countUniqueElement(sentence){
    let result = {}
    let requiredResult  = []
    for(let i = 0; i<sentence.length; i++){
        let char = sentence[i]
        result[char] = result[char] > 0 ? result[char]+1 : 1
    }

    let keys = Object.keys(result)
    // for(let i = 0; i<keys.length; i++){
    //     requiredResult.push(keys[i])
    // }
    return keys
}

let sentence= 'aaabaa fsa asdffss'
console.log(countUniqueElement(sentence));