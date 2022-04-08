let obj1={
    firstName:'Anupam',
    lastName:'Rai',
}
let obj2={
    age:25,
    village:'Daniari',
}

// let result=Object.assign(obj,obj2)
// console.log(result);

function mergeObj(obj1,obj2) {
    let key=Object.keys(obj2)
    for (let i = 0; i < key.length; i++) {
        obj1[key[i]] = obj2[key[i]]
    }
    return obj1
}

console.log(mergeObj(obj1,obj2));

// In thish program we have to merge the two object together in one object.