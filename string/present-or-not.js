function presentCheck(arr,product) {
    for (let i = 0; i < arr.length; i++) {
        let element =arr[i]
        if (element === product) {
            return true
        }
    }
    return false
}
let arr =['same','rust','big','right','wrong','sad','crypto']
// console.log(presenCheck(arr,'big'));
// console.log(presenCheck(arr,'monkey'));

function presentOrnot(arr,arr2, product) {
    let firstArr =presentCheck(arr, product)
    let secondArr =presentCheck(arr2, product)
    if (firstArr === true && secondArr === true) {
        return true
    }else{
        return false
    }
}
let arr2 = ['fish','month','wrong','fight',"right"]
let result = presentOrnot(arr,arr2,"right")
let result2 = presentOrnot(arr,arr2,"sad")
console.log(result,result2);