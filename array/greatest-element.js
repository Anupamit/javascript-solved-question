function greaterNumber(arr) {
    let max= arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}
let arr = [2,1,3,4,6,7,8,9]
console.log(greaterNumber(arr));