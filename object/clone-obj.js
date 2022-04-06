let obj={
    firstName:'Anupam',
    lastName:'Rai',
    age:25,
    village:'Daniari'
}

function cloneObj(obj) {
    let result={}
    let objkey=Object.keys(obj)
    let objvalue=Object.values(obj)
    for (let i = 0; i < objkey.length; i++) {
        result[objkey[i]]=objvalue[i]
    }
    return result
}
console.log(cloneObj(obj));

// let result= obj;
// console.log(result);

// let objkey=Object.keys(obj)
// let objvalue=Object.values(obj)
// let result={}
// objkey.forEach((key,i) => result[key]=objvalue[i]);
// console.log(result);

