// let person={}
let person={name:'sahil',age:32}
let isnullObj= !Object.keys(person).length

console.log(isnullObj);


function isNullObj(person) {
    return Object.keys(person).length === 0
}

console.log(isNullObj(person));