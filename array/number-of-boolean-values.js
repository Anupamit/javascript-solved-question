function booleanValue(arr) {
    let value = 0;
    let filtered = arr.filter(e => e === true)
    for (let i = 0; i < filtered.length; i++) {
        value += 1
    }return value
}

//OR

function booleanValue(arr) {
    let result= 0;
    let filterd=arr.filter(e => e === true)
    for (let i = 0; i < filterd.length; i++) {
        result += filterd[i]
    }
    return result
}

//OR

function booleanValue(arr) {
    let filtered= arr.filter(Boolean).length
    return  filtered
}
let arr = [true, true, false, true, false, true, true]
console.log(booleanValue(arr));