// make an empty array
// pick every elements from array
// check elements present
// if we found then push in empty array


// function uniqueNo(arr1,arr2) {
//     let add = arr1.concat(arr2)
//     let unique = add.filter((e)=>add.indexOf(e) === add.lastIndexOf(e))
//     return unique;
// }

// //OR

// function uniqueNo(arr1,arr2) {
//     let add = arr1.concat(arr2)
//     let unique=[]
//     for (let i = 0; i < add.length; i++) {
//         if (add.lastIndexOf(add[i])=== add.indexOf(add[i])) {
//             unique.push(add[i])
//         }
//     }
//     return unique;
// }

// //OR

// function uniqueNo(arr1,arr2) {
//     let newArr =[]
//     let unique = []
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1.lastIndexOf(arr1[i])=== arr1.indexOf(arr1[i])) {
//             newArr.push(arr1[i])
//         }
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         if (arr2.lastIndexOf(arr2[i])=== arr2.indexOf(arr2[i])) {
//             newArr.push(arr2[i])
//         }
//     }
//     for (let i = 0; i < newArr.length; i++) {
//         if (newArr.lastIndexOf(newArr[i])=== newArr.indexOf(newArr[i])) {
//             unique.push(newArr[i])
//         }
//     }
//     return unique
// }

// OR

function uniqueNo(arr1,arr2){
    let newArr= []
    let add = arr1.concat(arr2)
    for (let i = 0; i < add.length; i++) {
        if (!newArr.includes(add[i])) {
            newArr.push(add[i])
        }
    }
    return newArr
}
let arr1 =[1,2,3,4,1,2]
let arr2 =[5,6,1,2,1,2]
console.log(uniqueNo(arr1,arr2));
