function duplicateIndex(arr) {
    let newArr = []
    let compare= []
    for (let i = 0; i < arr.length; i++) {
        let element =arr[i]
        if (!compare.includes(element)) {
            compare.push(element)
        }else{
            newArr.push(i)
        }
    }
    return newArr
}
let arr = ['apple','ape','right','wrong','orange','apple','right',"potato",'tomato']
console.log(duplicateIndex(arr));