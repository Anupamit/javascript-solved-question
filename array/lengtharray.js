function findArr(size){
    let arr=[]
    for (let i = 0; i < size; i++) {
        arr.push(i+1)
    }
    return arr
}
let total= findArr(7);
console.log(total);