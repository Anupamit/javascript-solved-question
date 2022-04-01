// check that particular element present or not
// 1input list of array
// 2input single num(element)
//return boolean

function numCheck(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true
        }
    }
    return false
}
let arr = [1,5,6,4]
console.log(numCheck(arr,12));
console.log(numCheck(arr,1));

function twoArrNumCheck(arr, arr2,num) {
    let firstArr = numCheck(arr, num)
    let secondArr = numCheck(arr2, num)
    if (firstArr === true && secondArr === true) {
        return true
    }else{
        return false
    }
}

let arr2 = [11,5,16,4]
let result1 = twoArrNumCheck(arr,arr2,5)
let result2 = twoArrNumCheck(arr,arr2,11)
console.log(result1,result2);
//comment any one log