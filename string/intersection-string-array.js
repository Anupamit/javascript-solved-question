function intersectionString(arr,arr2) {
    let found = arr.filter(e => arr2.includes(e))
    return found
}

//OR

function intersectionString(arr,arr2) {
    let newArr =[]
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let present = arr2.includes(element)
        let presentInArr =newArr.includes(element)
        if (present && !presentInArr) {
            newArr.push(element)
        }
    }
    return newArr
}
let arr = ['kuhu','prezi','kuhu']
let arr2 = ['kuhu','kuhu','kuhu']
console.log(intersectionString(arr,arr2));