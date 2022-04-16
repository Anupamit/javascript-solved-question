    // break input sentance into words
    // go to each word
    // check word have any numbers then remove the numbers 
    // return with only words
    // join words into sentance
    // function removeAlphabate(inputSentence) {
    //     let result=[]
    //     let wordsplit= inputSentence.split(' ')
    //     for (let i = 0; i < wordsplit.length; i++) {
    //         let element = wordsplit[i];
    //         let compare= element.replace(/[a-z]/g,'')
    //         result.push(compare)
    //     }
    //     return result.join(' ')
    // } 
    let inputSentence= "ar3my 22 peop33les  34 are 76 brave"
    // console.log(removeAlphabate(inputSentence));

    // function removeNumbers(inputSentence) {
    //     let result=[]
    //     let wordsplit= inputSentence.split(' ')
    //     for (let i = 0; i < wordsplit.length; i++) {
    //         let element = wordsplit[i];
    //         let compare= element.replace(/[0-9]/g,'')
    //         result.push(compare)
    //     }
    //     return result.join(' ')
    // }
    // let inputSentence= "ar3my 22 peop33les  34 are 76 brave"
    // console.log(removeNumbers(inputSentence));

    function removeNumersInSentance(sentance){
        let result= []
        for(let i =0; i<sentance.length; i++){
            let character = sentance[i]
            if(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(character)){
                sentance[i] = ''
                result.push(sentance[i])
            }
        }
        return result.join(' ')
    }
    let sentance= "ar3my 22 peop33les  34 are 76 brave"
    console.log(removeNumersInSentance(sentance));

    // function removeNumersInSentance(sentance){
    //     let result= []
    //     for(let i =0; i<sentance.length; i++){
    //         let character = sentance[i]
    //         if(['a','b','c'].includes(character)){
    //             sentance[i] = ''
    //             result.push(sentance[i])
    //         }
    //     }
    //     return result.join('')
    // }
    // let sentance= "baba32 baba 32"
    // console.log(removeNumersInSentance(sentance));


// let inputSentence= "ar3my 22 peop33les  34 are 76 brave"
// let result =inputSentence.replace(/[0-9]/g,'')
// let resultAlpha =inputSentence.replace(/[a-z]/g,'')
// console.log(result);
// console.log(resultAlpha);

// function removeNumbers(sentence) {
//     let result=[]
//     for (let i = 0; i < sentence.length; i++) {
//         let character = sentence[i]
//         if (!character.includes('1','2','3','4' ,'5','6','7','8','9','0') ) {
//             result.push(character)
//         }
//     }
//     return result
// }
// let sentence= "arm4y pe3ople 23are brave2"
// console.log(removeNumbers(sentence));