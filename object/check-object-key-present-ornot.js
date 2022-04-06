let obj1={
    name:'anupam',
    age:25
}
let obj2={
    name:'anupam',
    age:25
}

function checkKeys(obj1,obj2) {
    let key1=Object.keys(obj1)
    let key2=Object.keys(obj2)
    if (key1.length != key2.length) {
        return false
    }
    // keys equal check, if not equal return false
    for (let i = 0; i < key1.length; i++) {
        if (key1[i] !== key2[i]) {
            return false
        }
    }
    let val1 = Object.values(obj1)
    let val2 = Object.values(obj2)
    // values equal check, if not equal return false
    for (let i = 0; i < val1.length; i++) {
        if (val1[i] != val2[i]) {
            return false
        }
    }
    return true
}

// if (obj1Length === obj2Length) {
//     return Object.keys(obj1).every(key => obj2[key]&& obj2[key] === obj1[key]);
// }
// return false;

// function checkKeys(obj1, obj2){
//     if(Object.keys(obj1).length == Object.keys(obj2).length){
//         let isAllEqual = true
//         for(let i = 0; i<  Object.keys(obj1).length; i++){
//             let key = Object.keys(obj1)[i]
//             if(obj1[key] != obj2[key]){
//                 isAllEqual = false
//             }
//         }
//         return isAllEqual
//     }
//     return false
// }


console.log(checkKeys(obj1,obj2));