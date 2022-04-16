function subsetCheck(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === num) {
            return true
        }
    }return false
}
// let arr =['sita','gita','babita','nita','rita','sita','gita']
// console.log(subset(arr,"babita"));
// console.log(subset(arr,"apple"));


function subset(arr,arr2) {
    let result =true
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let found =subsetCheck(arr2,element)
        if (found === false) {
            result= false
        }
    }
    return result
}
let arr2=['sita','gita','babita','nita','rita','sita','gita']
console.log(subset(["babita","nita"],arr2));
console.log(subset(["apple"],arr2));
console.log(subset(["apple",'gita'],arr2));