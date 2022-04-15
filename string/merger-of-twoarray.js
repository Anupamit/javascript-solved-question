// merger of two string array in one array

function merger(arr,arr2) {
    let add = arr.concat(arr2)
    return add;
}

// OR

function merger(arr,arr2) {
    for (let i = 0; i < arr2.length; i++) {
        let element = arr[i];
        arr.push(arr2[i])
    }
    return arr
}
let arr = ["name","sahil", "kumar","rai"]
let arr2 = ["vill","daniari","vendupar"]
console.log(merger(arr,arr2));