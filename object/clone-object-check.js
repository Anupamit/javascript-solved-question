let person={
    name:'sahil',
    age:32
}
let person1={
    name:'sahil',
    age:32,
    game:'dd'
}
// let objLength=Object.keys(person).length
// let objLength1=Object.keys(person1).length
// let result= objLength===objLength1
// console.log(result);


function equalValue(person,person1) {
    let objLength=Object.keys(person).length
    let objLength1=Object.keys(person1).length
    if (objLength !== objLength1) {
        return false
    }
    return true
}

console.log(equalValue(person,person1));