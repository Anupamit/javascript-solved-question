// function findExtra(sentence,sentence2) {
//     let splitsentence=sentence.split(' ')
//     let splitsentence2=sentence2.split(' ')
//     let  compare=[]
//     for (let i = 0; i < splitsentence.length; i++) {
//         if (!(splitsentence2.includes(splitsentence))) {
//             compare.push(splitsentence[i])
//         }
//     }
//     for (let i = 0; i < splitsentence2.length; i++) {
//         if (!(splitsentence.includes(splitsentence2[i]))) {
//             compare.push(splitsentence2[i])
//         }
//     }
//     return compare
// }
// let sentence='apple apple'
// let sentence2='banana'
// console.log(findExtra(sentence, sentence2));


// function findExtra(sentence,sentence2) {
//     let  compare=[]
//     for (let i = 0; i < sentence.length; i++) {
//         if (!(sentence2.includes(sentence[i]))) {
//             compare.push(sentence[i])
//         }
//     }
//     for (let i = 0; i < sentence2.length; i++) {
//         if (!(sentence.includes(sentence2[i]))) {
//             compare.push(sentence2[i])
//         }
//     }
//     return compare.join('')
// }
// let sentence='how are you'
// let sentence2='how 2a are you'
// console.log(findExtra(sentence, sentence2));

// function findExtra(sentence,sentence2) {
//     let splitsentence=sentence.split('')
//     let splitsentence2=sentence2.split('')
//     let  result=[]
//     for (let i = 0; i < splitsentence2.length; i++) {
//         if (splitsentence[i] !== splitsentence2[i]) {
//             result.push(splitsentence2[i])
//         }
//     }
//     return result.join('')
// }

// function findExtra(sentence,sentence2) {
//     let splitsentence=sentence.split('')
//     let splitsentence2=sentence2.split('')
//     let  result=[]
//     for (let i = 0; i < splitsentence2.length; i++) {
//         if (!(splitsentence.includes(splitsentence2[i]))) {
//             result.push(splitsentence2[i])
//         }
//     }
//     return result.join('')
// }


// function style1(sen1, sen2){
//     for(let i = 0; i<sen2.length; i++){
//         if(sen1[i] != sen2[i]){
//             return sen2[i]
//         }
//     }
// }

function style2(sen1, sen2){
    let prere = ''
    for(let i = 0; i<sen2.length; i++){
        if(sen1[i] != sen2[i]){
            result += sen2[i]
        }
    }
    return result[0]
}

function style3(sen1, sen2){
    let sen1split = sen1.split(' ')
    let sen2split = sen2.split(' ')
    let result = ''
    for(let i = 0; i<sen2split.length; i++){
        if(sen1split[i] != sen2split[i]){
            let originalWord = sen1split[i]
            let problemWord = sen2split[i]
            for(let j =0; j<problemWord.length; j++){
                if(originalWord[j] != problemWord[j]){
                    return problemWord[j]
                }
            }
        }
    }
    return result
}


function style4(sen1, sen2){
    let extraChars = []
    for(let i = 0; i<sen2.length; i++){
        if(sen2[i+extraChars.length] != sen1[i]){
            extraChars.push(sen2[i+extraChars.length])
        }
    }
    return extraChars.join()
}

let sentence='how are you'
let sentence2='horw are you'
console.log(style4(sentence, sentence2));