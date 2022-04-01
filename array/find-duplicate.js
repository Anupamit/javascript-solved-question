//find duplicate element and return in empty array

function duplicateArr(arr) {
    let duplicate =[]
    let compare =[] 
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if(!compare.includes(num)){
            compare.push(num)
        }else{
            duplicate.push(num)
        }
    }
    return duplicate
}

//OR

function duplicateArr(arr) {
    let duplicate =[]
    let compare =[] 
    for (let num of arr) {
        if(!compare.includes(num)){
            compare.push(num)
        }else{
            duplicate.push(num)
        }
    }
    return duplicate
}
let arr =[1,1,2,2,3,4,4,6,5,5]
console.log(duplicateArr(arr));
