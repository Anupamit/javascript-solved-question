// let num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let oddNum=num.filter(e=>e%2!==0)
// let evenNum=num.filter(e=>e%2==0)
// console.log(result);


// function evenNum(arr) {
//     let result=[]
//     for (let i = 0; i < arr.length; i++) {
//         if ((i % 2) !== 0) {
//             result.push('even')
//         }else{
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(evenNum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));

// function evenNum() {
//     let result=[]
//     for (let i = 1; i <= 20; i++) {
//         if ((i % 2) == 0) {
//             result.push('even')
//         }else{
//             result.push(i)
//         }
//     }
//     return result
// }
// console.log(evenNum());

// function divisibility() {
//     let result=[]
//     for (let i = 1; i <= 20; i++) {
//         if ((i % 5) == 0) {
//             result.push('panchatantra')
//         }else if ((i % 3) == 0) {
//             result.push('trikaal')
//         }else if ((i % 2) == 0) {
//             result.push('even')
//         }else{
//             result.push(i)
//         }
//     }
//     return result
// }
// console.log(divisibility());

function divisibility() {
    let result=[]
    for (let i = 1; i <= 20; i++) {
        if ((i % 5) == 0) {
            result.push(`${i}-panchatantra`)
        }else if ((i % 3) == 0) {
            result.push(`${i}-trikaal`)
        }else if ((i % 2) == 0) {
            result.push(`${i}-even`)
        }else{
            result.push(i)
        }
    }
    return result
}
console.log(divisibility());