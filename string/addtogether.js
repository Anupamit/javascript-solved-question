function addtogether(arr) {
    let sum = ""
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        sum +=element +','
    }
    return sum
}
let arr =["sahil", 'sahlu', 'anoop','anupam','kuhu']
console.log(addtogether(arr));
