function checkArr(element){
    if (Array.isArray(element)) {
        return true
    }else{
        return false
    }
}

//OR

function checkArr(element) {
    return Array.isArray(element)
}
console.log(checkArr([]));
console.log(checkArr([1,2,3]));
console.log(checkArr());
console.log(checkArr(1,2));