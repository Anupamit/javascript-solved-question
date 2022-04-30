//double every elements and sum

function doubleAndSum(arr) {
    let double = [];
    let add = 0;
    for (let i = 0; i < arr.length; i++) {
        double[i] = arr[i]*2
        add += double[i];
    } return add;
}

//OR

function doubleAndSum(arr) {
    let add = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i]*2
        add += arr[i];
    } return add;
}

//OR

function doubleAndSum(arr) {
    let add = 0;
    for (let i = 0; i < arr.length; i++) {
        add += arr[i];
    } return add*2;
}

//OR

function doubleAndSum(arr) {
    let maapped= arr.map(e=>e*2)
    let add = 0;
    for (let i = 0; i < arr.length; i++) {
        add += maapped[i];
    } return add;
}

//OR

function doubleAndSum(arr) {
    let maapped= arr.reduce((a,b)=>a+b)
    return maapped*2;
}

//OR

function doubleAndSum(arr) {
    let result =arr.reduce((a,b)=>a+b)
    let multiply= result*2
    return multiply
}

let arr =[1,1,2,2,3,4,4,6,5,5]
console.log(doubleAndSum(arr));