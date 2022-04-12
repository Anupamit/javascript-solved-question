//take sentence show every character
//count all character how many times iterate
//print all character and count character side by side

function countUniqueElement(sentence) {
    let splitsentence=sentence.split('')
    let result=[]
    for (let i = 0; i < splitsentence.length; i++) {
        if (!result.includes(splitsentence[i])) {
            result.push(splitsentence[i])
            let filArr =  splitsentence.filter((char)=> char == splitsentence[i])
            let occurence = filArr.length
            // let occurence = 0
            // for(let j = i; j < splitsentence.length; j++){
            //     if(splitsentence[i] == splitsentence[j]){
            //         occurence++
            //     }
            // }
            result.push(occurence)
        }

    }
    return result
}

let sentence= 'aaabaa fsa asdf fss'
console.log(countUniqueElement(sentence))