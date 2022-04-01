function sliceArrFirst(arr, size) {
    let sliced = arr.slice(0 ,size)
    return sliced
}
let sliced = sliceArrFirst([12,3,2,4,2,46,7],3)
console.log(sliced);
