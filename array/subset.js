//    write a function
//    input 1 = array of numbers
//    input 2 = array of numbers
//    output = check input 1 is sub-set of input 2  or not?
//    return boolean

function numberCheck(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true
        }
    }
    return false
}
function subset(arr, arr2) {
    let result =true;
    for (let i = 0; i < arr.length; i++) {
        let found = numberCheck(arr2,arr[i])
        if (found === false) {
            result = false
        }
    }
    return result
}
let arr2 = [1,2,3,4,5,6,7]
console.log(subset([3,4],arr2));
console.log(subset([13,14],arr2));
