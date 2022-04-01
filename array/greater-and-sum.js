function graterThan(arr, num) {
    let sum = 0;
    let filterd=arr.filter((e)=> e >= num)
    for (let i = 0; i < filterd.length; i++) {
        sum += filterd[i]; 
    }
    return sum
}
let arr=graterThan([1,2,3,6,8,9],6)
console.log(arr);