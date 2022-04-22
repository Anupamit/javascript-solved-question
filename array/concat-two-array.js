// merger of two array in one array

function merger(arr1, arr2) {
    let numbers =arr1.concat(arr2);
    return numbers
}

// OR

function merger(arr1, arr2) {
        for (let i = 0; i < arr2.length; i++) {
            arr1.push(arr2[i])
        }
        return arr1
    }
    let arr1 =[1,2,3,4,1,2]
    let arr2 =[5,6,1,2,1,2]
    console.log(merger(arr1,arr2));