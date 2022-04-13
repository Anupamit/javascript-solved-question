function duplicateString(arr) {
    let compare =[]
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (!compare.includes(element)) {
            compare.push(element)
        }else{
            newArr.push(element)
        }
    }return newArr
}
let arr=['sita','gita','babita','nita','rita','sita','gita']
console.log(duplicateString(arr));