function presentOrNot(arr,name) {
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element === name) {
            return true
        }
    }
    return false
}
let arr =["sahil", 'sahlu', 'anoop','anupam','kuhu']
console.log(presentOrNot(arr,'apple'));
console.log(presentOrNot(arr,'anoop'));