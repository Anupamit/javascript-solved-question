function greaterThenElement(arr,num) {
    let  newArr=[]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            newArr.push(arr[i])
        }
    }return newArr
}
//OR
function greaterThenElement(arr,num) {
    let filtered =arr.filter((e)=> e > num)
    return filtered
} 
let arr = [2,5,4,6,7,9,1,3];
let result = greaterThenElement(arr,4)
console.log(result);