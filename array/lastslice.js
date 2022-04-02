// slice array from last given element
function sliceArrLast(arr, size) {
    let slicedlast= arr.slice(arr.length-size, arr.length)
    return slicedlast
}
let slicedlast = sliceArrLast([12,3,2,4,2,46,7],3)
console.log(slicedlast);