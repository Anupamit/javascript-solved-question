function checkArr(arr) {
    if (Array.isArray(arr)) {
        return true
    }else{
        return false
    }
}

//OR

function checkArr(arr) {
    return Array.isArray(arr)
}
console.log(checkArr([]));
console.log(checkArr(["sahil","1"]));
console.log(checkArr(["sahil",1]));
console.log(checkArr(('sahil',"1")));