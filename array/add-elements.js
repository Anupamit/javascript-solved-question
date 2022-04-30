// add all the elements together
function addElements(arr) {
    let add = 0;
    for (let i = 0; i < arr.length; i++) {
        add += arr[i];
    }
    return add;
}
let arr= [1,2,3,45,6]
let result = addElements(arr)
console.log(result);
