function uniqueString(arr,arr2) {
    let result = []
    let newArr =arr.concat(arr2)
    for (let i = 0; i < newArr.length; i++) {
        if (!result.includes(newArr[i])) {
            result.push(newArr[i])
        }
    }
    return result
}
let arr=['sita','gita','babita','nita','rita']
let arr2=['adam','samul','babita','nita','rita','dharmu','dayasankar']
console.log(uniqueString(arr,arr2));
