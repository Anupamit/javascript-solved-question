// create an empty array for result
// loop over array
// get each element
// check element to be duplicate available in other array
// if available  push in the empty array for result

function duplicateIndexof(arr1) {
    let found = arr1.indexOf(5)
    return found
}

function duplicateIndexof(arr1) {
        let compare =[] 
        let indexArray= []
        for (let i = 0; i < arr1.length; i++) {
            if(!compare.includes(arr1[i])){
                compare.push(arr1[i])
            }else{
                indexArray.push(i)
            }
        }
        
        return indexArray
}

let arr1 = [4, 4,7,3,1,8,3,1,8,1]
console.log(duplicateIndexof(arr1));
