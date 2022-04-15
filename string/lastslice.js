function lastslice(arr, size) {
    let found = arr.slice(arr.length-size,arr.length)
    return found
}
let arr=['sita','gita','babita','nita','rita','sita','gita']
console.log(lastslice(arr,3));