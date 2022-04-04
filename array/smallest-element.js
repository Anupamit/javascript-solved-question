function smallestNumber(arr) {
    let max= arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max > arr[i]) {
            max = arr[i]
        }
    }
    return max
}
let arr = [727,72,83,3,33,322,9]
console.log(smallestNumber(arr));