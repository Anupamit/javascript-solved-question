// create an empty array for result
// loop over 1 array
// get each element
// check element to be available in other array
// if available  push in the empty array for result

function intersection(arr,arr2) {
    let total = [arr,arr2]
    let result =total.reduce((a,b) => a.filter(c => b.includes(c)))
    return result
}

function intersection(arr,arr2) {
    let result = []
    for(let i=0;i<arr.length; i++){
        let element = arr[i]
        let available = arr2.includes(element)
        let availableInResult = result.includes(element)
        if(available && !availableInResult){
            result.push(element)
        }
    }
    return result
}

function intersection(arr,arr2) {
    let found = arr.filter(e => arr2.includes(e));
    return found;
}
let arr= [2, 2]
let arr2 = [2,2, 2, 3]
console.log(intersection(arr,arr2));